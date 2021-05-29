import express from "express";
import testWork from "./testWork";

const app = express();

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
    let random = Math.floor(Math.random() * testWork.valid.length);
    res.send(testWork.valid[random]);
});


let next_index = 0;
// 循环当前可用IP
app.get('/next', (req, res) => {
    res.send(testWork.valid[next_index]);
    if (++next_index >= testWork.valid.length) next_index = 0;
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
