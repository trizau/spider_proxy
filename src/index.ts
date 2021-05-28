import express from "express";
import testWork from "./testWork";

const app = express();
let use_time: { [key: string]: number } = {}; // 标记获取时间，控制优先级

setInterval(() => {
    use_time = {}; // 防止长时间开启崩溃
}, 500000);

app.use((req, res, next) => {
    testWork.run();
    if (!testWork.valid.length) {
        res.end();
    } else {
        next();
    }
});

// 获取所有代理列表，可指定协议 ?protocol=协议类型
app.get('/', (req, res) => {
    res.send(testWork.valid);
});

// 随机获取一个IP，可指定协议 ?protocol=协议类型
app.get('/random', (req, res) => {
    let try_num = 0;
    while (true) {
        let random = Math.floor(Math.random() * testWork.valid.length);
        let last_use_time = use_time[testWork.valid[random]];
        if (!last_use_time || last_use_time < new Date().getTime() || try_num ++ > 50) {
            use_time[testWork.valid[random]] = new Date().getTime() + 300000; // 标记该IP的下次可用时间
            res.send(testWork.valid[random]);
            break;
        }
    }
});

// 获取代理数量
app.get('/length', ((req, res) => {
    res.send('' + testWork.valid.length);
}));

let listen: any = process.argv[2];
let address = '127.0.0.1';
let port = 8898;
try {
    listen = listen.split(':');
    address = listen[0];
    port = listen[1];
} catch (e) {
}

app.listen(port, address, () => {
    console.clear();
    console.log('\x1b[36m%s\x1b[0m', `Listen on http://${address}:${port}`);
});

setTimeout(() => {
    testWork.run();
}, 1000);
