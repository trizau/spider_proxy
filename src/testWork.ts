import workerPool from "./utils/Pool";
import path from "path";
import fs from "fs";
import Timeout = NodeJS.Timeout;

__dirname = process.cwd();

const runtime_path = path.join(__dirname, '/cache');
// init
if (!fs.existsSync(runtime_path)) {
    fs.mkdirSync(runtime_path);
}

// 线程池对象
// let workerPool = new WorkerPool(path.join(__dirname, '/utils/test_ip.js'));

// 记录扫描出的可用的ip
workerPool.setCallBack((error: Error, result: { delay: number, address: string }) => {
    // 清理过期IP
    // console.log(result.address)
    let exists_key = testWork.valid.indexOf(result.address);
    if (exists_key !== -1) {
        delete testWork.valid[exists_key];
        testWork.valid = testWork.valid.filter(i => !!i);
    }
    // 添加至可用列表
    if (result.delay > 0) {
        testWork.valid.push(result.address);
    }
});

// 线程池任务
workerPool.setFinishCallBack(() => {
    clearInterval(<Timeout>testWork.pending);
    if (typeof testWork.finishCallback === 'function') testWork.finishCallback();
});

// 半分钟写入到文件一次
setInterval(() => {
    fs.writeFileSync(runtime_path + '/valid.json', JSON.stringify(testWork.valid), {encoding: 'utf-8'});
}, 30000);

const testWork = {
    valid: [] as string[], // 可用的配置
    pending: null as Timeout | null,
    finishCallback: null as Function | null,
    // 使用节点列表进行检测
    run() {
        if (this.isRun()) return false;
        let p: number = 0;
        let out_length = 0;
        this.pending = setInterval(() => {
            if (p++ >= 10) p = 0;
            let out = `\r现可用:${this.valid.length} [${' '.repeat(p)}#${' '.repeat(10 - p)}] 任务:${workerPool.getActive()} 队列:${workerPool.getQueue()}`;
            if (out_length < out.length) out_length = out.length;
            process.stdout.write(out.padEnd(out_length));
        }, 100);
        this.selfTest();
        // 执行爬虫节点
        let spider_dir = path.join(__dirname, '/spiders');
        if (!fs.existsSync(spider_dir)) spider_dir = path.join(__dirname, '../spiders');
        let dir = fs.readdirSync(spider_dir);
        for (let spider of dir) {
            spider = spider_dir + '/' + spider;
            if (!fs.statSync(spider).isFile() || !spider.endsWith('.js') || spider.startsWith('_')) continue;
            let script = spider;
            import(script).then((s: { default: Function }) => {
                try {
                    s.default().then((result: any) => {
                        if (result instanceof Array) { // 静态爬取IP
                            workerPool.append(result);
                        }
                    })
                } catch (e) {
                    console.warn(spider + '不符合规范，请处理:' + e.message);
                }
            })
        }
    },
    // 自测
    selfTest() {
        workerPool.append(this.valid);
    },
    // 当前线程池中是否正在检测
    isRun(): boolean {
        return workerPool.isRun();
    }
}
try {
    testWork.valid = JSON.parse(fs.readFileSync(runtime_path + '/valid.json', {encoding: 'utf-8'})?.toString()) || [];
} catch (e) {
}

export default testWork;
