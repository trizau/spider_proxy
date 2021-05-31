import axios from "axios";
import {HttpsProxyAgent} from "https-proxy-agent";
import {SocksProxyAgent} from "socks-proxy-agent";
import * as http from "http";

/**
 * 检测代理IP延迟毫秒数
 * @param proxy_address 代理地址，protocol://address:port
 * @param test_address 测试访问地址
 */
async function test_ip(proxy_address: string, test_address: string = 'https://www.google.com') {
    try {
        let agent;
        let proxy_options: any = proxy_address.split('://');
        proxy_options = {
            protocol: proxy_options[0],
            host: proxy_options[1].split(':')[0],
            port: proxy_options[1].split(':')[1],
            timeout: 5000,
        }
        if (proxy_options.protocol.indexOf('socks') !== -1) {
            proxy_options.type = parseInt(proxy_options.protocol[proxy_options.protocol.length - 1]) || 5;
            delete proxy_options.protocol;
            agent = new SocksProxyAgent(proxy_options);
        } else {
            agent = new HttpsProxyAgent(proxy_options);
        }

        // agent = new HttpsProxyAgent('http://127.0.0.1:1087');

        const start_time = new Date().getTime();

        await axios.get(test_address, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/90.0.4430.212 Mobile/15E148 Safari/604.1'
            },
            httpAgent: agent,
            httpsAgent: agent,
            proxy: false,
            timeout: 5000
        });
        const end_time = new Date().getTime();
        return end_time - start_time;
    } catch (e) {
        return -1;
    }
}

async function check(address: string) {
    // let test_address = [
    //     'https://www.google.com',
    //     'https://api.github.com',
    //     'https://www.amazon.com',
    //     'https://ip-api.com',
    //     'https://www.youtube.com',
    //     'https://www.facebook.com',
    //     'https://twitter.com',
    //     'https://www.instagram.com',
    //     'https://www.tumblr.com',
    //     'https://www.pinterest.com',
    //     'https://www.whatsapp.com',
    //     'https://telegram.org',
    // ];
    // let index = Math.floor(Math.random() * test_address.length);
    // let delay = await test_ip(address, test_address[index]);
    let delay = await test_ip(address, 'http://ip-api.com/json');
    return {
        delay,
        address
    }
}

if (require.main === module) {
    ;(async () => {
        const start_time = new Date().getTime();
        console.log('延迟时间：' + await test_ip('socks5://127.0.0.1:1080'));
        const end_time = new Date().getTime();
        console.log('执行时间：' + (end_time - start_time));
    })();
}

export default check;
