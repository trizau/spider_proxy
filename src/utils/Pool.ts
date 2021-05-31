import check from "./check";

const max_work = 10;
const queue: any[] = [];
const pool: any = {num: 0};
let is_pause: boolean = false;
let callback: Function | null = null;
let finish_callback: Function | null = null;

function run(): boolean {
    if (pool.num >= max_work || !queue.length) {
        return false;
    } else if (!is_pause) {
        const number = queue.shift();
        if (!number) return false;
        const undid = Symbol();
        pool.num++;
        pool[undid] = check(number).then(result => {
            if (typeof callback === 'function') {
                callback(null, result, number);
            }
        }).catch(e => {
            if (typeof callback === 'function') {
                callback(e, null, number);
            }
        }).finally(() => {
            delete pool[undid];
            pool.num--;
            if (queue.length) {
                run();
            } else if (typeof finish_callback === 'function' && pool.num === 0) {
                finish_callback();
            }
        });
        return true;
    }
    return false;
}

let is_run: any = false;

const testWork = {
    setCallBack(cb: Function) {
        callback = cb;
    },
    setFinishCallBack(cb: Function) {
        finish_callback = cb;
    },
    append(number: number | string | any[]): void {
        if (number instanceof Array) {
            queue.push(...number);
        } else {
            queue.push(number);
        }
        while (true) if (!run()) break;
    },
    pause(cb: Function) {
        is_pause = true;
        if (is_run === false) {
            is_run = setInterval(() => {
                if (!testWork.isRun()) {
                    cb()
                    clearInterval(is_run);
                    is_run = false;
                }
            }, 300);
        }
    },
    resume() {
        is_pause = false;
        while (true) if (!run()) break;
    },
    isRun(): boolean {
        return pool.num !== 0;
    },
    getQueue(): number {
        return queue.length;
    },
    getActive(): number {
        return pool.num;
    }
};

if (require.main === module) {
    testWork.setCallBack((result: any) => {
        console.log('执行结果' + result)
    })
    testWork.setFinishCallBack(() => {
        console.log('执行完了')
        setTimeout(() => {
            console.log(testWork.isRun())
        }, 1000)
    })
    testWork.append('a')
    testWork.append('b')
    testWork.append('c')
    testWork.append('d')
    testWork.append('f')
    testWork.append('g')
    testWork.append('h')
    testWork.append('i')
    testWork.append('j')
    testWork.append('k')
    testWork.append('l')
    testWork.append('m')
    testWork.append('n')
    testWork.append('p')
    testWork.append('q')
}
export default testWork
