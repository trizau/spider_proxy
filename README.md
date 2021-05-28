此服务用于扫描并检测代理IP以供其他服务使用

## 启动参数

1. listen address: web服务绑定地址，默认为127.0.0.1:8898

## web接口

参数以get方式传入

| 请求地址 | 参数 | 说明 |
| --- | --- | --- |
| / | protocol?: 协议筛选 | 获取所有代理列表，可指定协议 |
| /random | protocol?: 协议筛选 | 随机获取一个IP，可指定协议 |
| /length | | 获取代理数量 |

## 节点开发

js文件，放置程序目录spiders下并遵循以下规范

```typescript
import axios from "axios";
import {HttpsProxyAgent} from "https-proxy-agent";
import {SocksProxyAgent} from "socks-proxy-agent";
import * as cheerio from "cheerio";
// 如果需要其他模块需要将node_modules目录一并复制到spiders目录下

// 一个异步方法
export default async function (): Array {
    // your code ...

    // 如果返回Array表示静态IP列表
    // 例如 return ['socks5://127.0.0.1:8080', 'http://127.0.0.1:1087', ...];
}
```

### 开发

`yarn start` 编译ts代码  
`yarn package:win/mac/linux` 打包发布
