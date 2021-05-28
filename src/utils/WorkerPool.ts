const {Worker} = require("worker_threads");
const fs = require("fs")
const os = require("os")

class WorkerPool {
    private readonly handle_script: string = ''; // 执行脚本名称
    private readonly max_work: number = 0; // 线程池大小
    private works: any = {}; // 线程池
    private queue: any[] = []; // 队列
    private is_pause: boolean = false; // 暂停标识
    private callback: null | Function = null; // 回调
    private finish_callback: null | Function = null; // 线程池完成后回调

    /**
     *
     * @param handle_script 处理脚本
     * @param max_work 最大线程数
     */
    constructor(handle_script: string, max_work: number = 0) {
        if (fs.existsSync(handle_script)) {
            this.handle_script = handle_script;
            if (max_work < 1) max_work = os.cpus().length * 2;
            this.max_work = max_work;
        } else throw new Error("处理脚本不存在");
    }

    /**
     * 设置并且开始线程池中的任务
     * @param params
     */
    run(params: any | null) {
        const do_work = () => {
            // console.log('当前有' + Object.keys(this.works).length + '个任务', '队列中有' + this.queue.length + '个任务')
            if ((this.max_work && this.getActive() < this.max_work || this.getActive() < 1) && this.queue.length) {
                // 增加池子判断
                let work = new Worker(this.handle_script);
                let theadId: number = work.threadId;
                this.works[theadId] = work;
                work.postMessage(this.queue.shift());

                work.once('message', (result: any) => {
                    let cb = this.getCallBack()
                    if (typeof cb === 'function') {
                        cb(result);
                    }
                    // this.works[theadId].terminate();
                }); // 线程执行完成后发起ipc进行返回处理结果

                work.once('error', (err: Error) => {
                    // console.log(err.message);
                    this.works[theadId].terminate();
                })

                work.once('exit', () => {
                    // 减少池子判断
                    delete this.works[theadId];
                    if (!this.is_pause) this.run(null);
                    if (Object.keys(this.works).length === 0) {
                        let cb = this.getFinishCallBack()
                        if (typeof cb === 'function') cb();
                    }
                });
                return true;
            }
            return false;
        }
        if (params) {
            if (params instanceof Array) {
                this.queue.push(...params);
            } else {
                this.queue.push(params);
            }
        }
        while (true) if (!do_work()) break;
        return this;
    }

    /**
     * 获取活跃线程数量
     */
    getActive(): number {
        return Object.keys(this.works).length;
    }

    /**
     * 获取队列中的任务数量
     */
    getQueue(): number {
        return this.queue.length;
    }

    /**
     * 获取最大线程数量
     */
    getMaxWork(): number {
        return this.max_work;
    }

    /**
     * 设置线程池执行完成后的回调方法
     * @param cb
     */
    setFinishCallback(cb: Function) {
        this.finish_callback = cb;
    }

    getFinishCallBack(): Function | null {
        return this.finish_callback;
    }

    /**
     * 每个任务完成后的回调
     * @param cb
     */
    setCallBack(cb: Function) {
        this.callback = cb;
    }

    getCallBack() {
        return this.callback;
    }

    /**
     * 继续线程池的运行
     */
    resume() {
        this.is_pause = false;
        this.run(null);
    }

    /**
     * 暂停线程池的执行
     * @param force
     */
    pause(force: boolean = false) {
        this.is_pause = true;
        if (force) {
            for (let w in this.works) {
                this.works[w].terminate();
            }
        }
    }
}

export default WorkerPool
