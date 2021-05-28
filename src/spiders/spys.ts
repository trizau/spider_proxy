import axios from "axios";
import {HttpsProxyAgent} from "https-proxy-agent";
import * as cheerio from "cheerio";

async function spys() {
    return [
        'http://24.245.100.212:48678',
        'http://79.127.56.148:8080',
        'http://125.26.165.245:443',
        'http://91.217.42.4:8080',
        'http://117.121.211.170:8080',
        'http://178.128.22.22:8080',
        'http://174.138.26.111:8080',
        'http://86.34.197.6:23500',
        'http://206.189.44.99:8080',
        'http://178.128.61.67:8080',
        'http://160.16.212.238:3128',
        'http://163.172.52.122:3128',
        'http://125.25.40.37:8080',
        'http://65.182.5.212:8080',
        'http://80.87.213.45:8080',
        'http://203.112.76.193:8080',
        'http://45.175.238.32:999',
        'http://14.207.121.64:8080',
        'http://154.113.69.154:8080',
        'http://198.229.231.13:8080',
        'http://14.241.111.38:8080',
        'http://45.176.243.116:8080',
        'http://103.86.49.193:3128',
        'http://195.201.61.51:8000',
        'http://1.2.254.185:8080',
        'http://34.122.64.20:8080',
        'http://180.183.7.62:8080',
        'http://185.202.165.1:53281',
        'http://36.255.86.114:82',
        'http://167.71.247.244:8080',
        'http://49.48.51.11:8080',
        'http://85.142.68.35:3128',
        'http://167.179.4.142:55443',
        'http://49.231.140.119:8080',
        'http://101.51.141.106:59932',
        'http://170.244.88.113:999',
        'http://195.110.7.195:3121',
        'http://187.44.230.83:3128',
        'http://186.233.186.60:8080',
        'http://182.52.51.10:61124',
        'http://78.90.203.56:8080',
        'http://45.117.74.97:8060',
        'http://158.51.201.249:8080',
        'http://27.72.29.159:8080',
        'http://92.245.142.215:8080',
        'http://103.87.207.188:48792',
        'http://200.60.124.109:8080',
        'http://46.209.196.146:8080',
        'http://109.245.239.125:35659',
        'http://81.12.106.158:8080',
        'http://78.157.254.58:51008',
        'http://131.161.237.86:8090',
        'http://45.6.4.60:8080',
        'http://41.217.219.53:31398',
        'http://41.202.221.102:8080',
        'http://177.36.186.190:8080',
        'http://185.67.95.179:3128',
        'http://118.172.155.177:8080',
        'http://179.189.27.37:8080',
        'http://103.87.237.114:8080',
        'http://175.215.8.145:3128',
        'http://93.157.251.134:3128',
        'http://157.25.200.39:8080',
        'http://103.12.198.54:8080',
        'http://180.149.232.149:8080',
        'http://190.214.27.106:48586',
        'http://83.242.123.248:8080',
        'http://188.163.170.130:41209',
        'http://202.57.35.74:38629',
        'http://181.10.160.156:8080',
        'http://103.147.43.255:8080',
        'http://181.129.248.140:999',
        'http://84.214.150.146:8080',
        'http://45.177.111.70:999',
        'http://188.225.254.2:999',
        'http://103.146.176.124:80',
        'http://182.75.218.146:3128',
        'http://167.71.230.124:8080',
        'http://46.29.11.254:57849',
        'http://103.15.60.23:8080',
        'http://183.87.158.141:8080',
        'http://195.182.152.238:38178',
        'http://178.140.58.34:8080',
        'http://45.176.244.59:999',
        'http://193.226.199.110:32231',
        'http://201.157.218.10:8080',
        'http://45.169.16.3:8080',
        'http://203.202.245.58:80',
        'http://181.225.73.66:999',
        'http://110.78.114.161:8080',
        'http://132.145.18.53:80',
        'http://200.85.169.18:47548',
        'http://110.74.203.250:8080',
        'http://104.244.75.218:8080',
        'http://186.235.159.138:8403',
        'http://189.203.75.245:8080',
        'http://117.218.60.147:81',
        'http://191.242.187.166:8080',
        'http://81.134.57.82:3128',
        'http://101.109.246.40:8080',
        'http://179.107.25.14:8080',
        'http://121.100.52.100:8080',
        'http://118.172.201.49:52111',
        'http://187.19.150.253:8888',
        'http://45.174.79.129:999',
        'http://37.135.121.157:80',
        'http://41.75.4.208:53281',
        'http://136.243.81.120:8080',
        'http://119.110.209.94:3128',
        'http://187.188.16.14:999',
        'http://101.109.18.85:8080',
        'http://183.89.44.205:8080',
        'http://110.171.21.99:8080',
        'http://193.117.138.126:44805',
        'http://177.128.199.242:666',
        'http://79.120.177.106:8080',
        'http://201.184.176.106:8080',
        'http://45.171.145.138:8080',
        'http://139.5.31.201:8080',
        'http://206.189.184.46:80',
        'http://113.176.88.14:8080',
        'http://95.0.206.51:8080',
        'http://176.120.37.82:59365',
        'http://181.209.108.250:999',
        'http://82.223.3.52:8118',
        'http://103.105.40.161:16538',
        'http://138.0.88.246:999',
        'http://45.174.76.129:999',
        'http://94.158.165.19:45915',
        'http://93.170.97.160:8080',
        'http://103.148.39.38:82',
        'http://103.41.212.229:44759',
        'http://37.143.22.34:8080',
        'http://201.168.210.125:8080',
        'http://190.171.168.90:999',
        'http://193.34.95.110:8080',
        'http://103.9.188.229:36984',
        'http://188.72.6.98:37083',
        'http://186.209.33.154:8080',
        'http://91.193.253.188:23500',
        'http://185.242.104.112:8080',
        'http://78.111.97.182:3142',
        'http://143.198.100.172:3128',
        'http://160.238.242.42:8080',
        'http://95.173.236.9:9090',
        'http://45.133.216.121:8080',
        'http://47.251.13.204:3128',
        'http://41.164.68.194:8080',
        'http://202.5.115.68:8080',
        'http://181.129.52.154:42648',
        'http://204.199.107.138:999',
        'http://190.92.49.150:999',
        'http://129.205.210.90:65205',
        'http://119.82.252.29:46872',
        'http://149.5.37.193:8080',
        'http://95.156.230.45:80',
        'http://45.114.38.57:8080',
        'http://202.141.233.166:48995',
        'http://185.3.213.8:8080',
        'http://45.228.77.242:999',
        'http://111.90.179.74:8080',
        'http://113.160.208.255:8080',
        'http://131.72.127.129:8080',
        'http://136.232.209.70:47423',
        'http://170.238.255.90:31113',
        'http://200.74.236.3:8080',
        'http://170.79.88.38:999',
        'http://187.216.93.20:55443',
        'http://78.81.245.153:8080',
        'http://96.9.69.164:53281',
        'http://14.170.154.10:8080',
        'http://103.139.140.154:8080',
        'http://190.121.236.100:999',
        'http://82.114.70.46:8080',
        'http://167.86.78.204:3128',
        'http://170.83.68.164:3128',
        'http://116.206.58.157:8181',
        'http://190.90.18.163:999',
        'http://177.21.237.100:8080',
        'http://178.252.80.226:34730',
        'http://111.118.218.125:8080',
        'http://185.48.149.60:8080',
        'http://177.37.165.50:8044',
        'http://217.79.181.109:443',
        'http://46.209.207.153:8080',
        'http://185.105.229.28:3128',
        'http://103.218.102.162:8080',
        'http://183.87.153.98:49602',
        'http://91.93.163.189:8080',
        'http://174.138.25.224:8080',
        'http://103.76.242.146:3127',
        'http://138.219.244.154:6666',
        'http://212.164.52.198:443',
        'http://151.22.181.213:8080',
        'http://103.137.91.250:8080',
        'http://62.182.114.164:60731',
        'http://179.49.210.223:999',
        'http://45.76.236.83:3128',
        'http://200.76.189.214:999',
        'http://46.98.99.128:8080',
        'http://103.248.93.5:8080',
        'http://109.185.243.41:8081',
        'http://72.50.33.170:999',
        'http://176.124.188.13:3127',
        'http://154.236.162.38:8080',
        'http://181.143.73.34:53281',
        'http://155.12.15.227:3128',
        'http://5.58.50.5:8080',
        'http://188.138.82.136:80',
        'http://138.68.107.29:8080',
        'http://61.19.38.149:3128',
        'http://138.122.99.102:999',
        'http://103.10.22.234:8080',
        'http://188.94.229.153:8080',
        'http://195.154.119.202:443',
        'http://46.52.153.90:8080',
        'http://157.100.53.108:999',
        'http://185.104.252.10:9090',
        'http://46.229.187.169:53281',
        'http://195.123.247.22:3128',
        'http://45.236.174.1:9991',
        'http://124.158.88.56:54555',
        'http://110.74.199.16:63141',
        'http://92.84.56.10:50782',
        'http://160.19.113.10:8080',
        'http://45.175.173.55:8080',
        'http://182.160.119.155:8080',
        'http://77.236.230.177:1256',
        'http://203.190.2.181:8080',
        'http://185.17.134.149:45984',
        'http://45.229.32.190:999',
        'http://195.140.226.244:8080',
        'http://212.126.113.34:8080',
        'http://58.162.229.173:37738',
        'http://91.150.189.122:30389',
        'http://65.0.27.148:3128',
        'http://160.119.128.102:21213',
        'http://200.123.2.171:3128',
        'http://187.60.121.246:3128',
        'http://103.110.47.51:8080',
        'http://177.1.26.130:8080',
        'http://200.215.171.238:8080',
        'http://82.114.83.238:42860',
        'http://176.227.188.66:53281',
        'http://93.171.192.28:8080',
        'http://187.86.158.117:3128',
        'http://27.145.55.211:8080',
        'http://208.96.137.130:47744',
        'http://94.19.162.175:8080',
        'http://103.81.77.97:83',
        'socks5://78.42.42.36:1080',
        'socks5://46.5.252.55:1080',
        'socks5://103.240.160.21:6667',
        'socks5://192.111.138.29:4145',
        'socks5://176.9.75.42:1080',
        'socks5://161.35.70.249:1080',
        'socks5://191.96.42.80:1080',
        'socks5://72.217.216.239:4145',
        'socks5://154.16.202.22:1080',
        'socks5://184.181.217.204:4145',
        'socks5://217.8.51.201:1080',
        'socks5://98.162.25.23:4145',
        'socks5://139.59.1.14:1080',
        'socks5://37.49.127.234:1080',
        'socks5://82.212.62.29:1080',
        'socks5://102.129.249.120:1080',
        'socks5://139.162.78.109:1080',
        'socks5://46.223.255.9:1080',
        'socks5://191.96.71.118:1080',
        'socks5://152.67.248.160:1080',
        'socks5://1.65.196.134:1080',
        'socks5://195.144.21.185:1080',
        'socks5://98.178.72.8:4145',
        'socks5://167.71.5.83:1080',
        'socks5://181.129.7.202:6699',
        'socks5://184.185.2.45:4145',
        'socks5://85.216.127.190:1080',
        'socks5://184.179.216.130:4145',
        'socks5://192.111.135.21:4145',
        'socks5://72.212.63.101:4145',
        'socks5://112.218.231.43:1080',
        'socks5://8.135.28.152:1080',
        'socks5://186.126.99.16:1080',
        'socks5://181.6.74.19:1080',
        'socks5://157.119.207.36:6667',
        'socks5://31.7.232.178:1080',
        'socks5://109.72.231.37:1080',
        'socks5://87.107.146.245:1080',
        'socks5://46.0.205.175:1080',
        'socks5://72.195.114.184:4145',
        'socks5://103.216.82.37:6667',
        'socks5://150.107.114.204:1080',
        'socks5://24.249.199.4:4145',
        'socks5://3.219.50.143:1080',
        'socks5://85.216.127.188:1080',
        'socks5://98.162.96.52:4145',
        'socks5://186.126.42.121:1080',
        'socks5://192.252.215.2:4145',
        'socks5://103.251.225.16:6667',
        'socks5://104.238.151.123:1080',
        'socks5://184.185.2.244:4145',
        'socks5://37.49.127.231:1080',
        'socks5://46.5.252.56:1080',
        'socks5://34.122.140.96:1080',
        'socks5://103.240.161.101:6667',
        'socks5://200.98.29.198:1080',
        'socks5://174.77.111.197:4145',
        'socks5://181.3.13.239:1080',
        'socks5://109.193.195.11:1080',
        'socks5://98.185.83.121:4145',
        'socks5://82.212.62.26:1080',
        'socks5://103.21.161.105:6667',
        'socks5://217.8.51.206:1080',
        'socks5://109.193.195.2:1080',
        'socks5://206.189.150.19:1080',
        'socks5://91.213.39.53:1080',
        'socks5://163.53.209.7:6667',
        'socks5://184.181.217.210:4145',
        'socks5://179.49.57.150:6667',
        'socks5://87.246.22.147:1080',
        'socks5://103.240.161.109:6667',
        'socks5://80.73.9.238:1080',
        'socks5://70.166.167.36:4145',
        'socks5://210.16.73.84:1080',
        'socks5://103.216.82.18:6667',
        'socks5://150.129.171.123:6667',
        'socks5://101.32.128.203:1080',
        'socks5://27.116.51.186:6667',
        'socks5://103.241.227.108:6667',
        'socks5://70.185.68.133:4145',
        'socks5://184.185.2.190:4145',
        'socks5://186.126.30.60:1080',
        'socks5://111.90.159.138:9050',
        'socks5://161.35.70.249:1080',
        'socks5://98.188.47.150:4145',
        'socks5://31.128.248.1:1080',
        'socks5://186.126.19.192:1080',
        'socks5://184.178.172.14:4145',
        'socks5://103.250.166.17:6667',
        'socks5://43.224.10.25:6667',
        'socks5://98.185.94.94:4145',
        'socks5://193.29.187.226:9050',
        'socks5://103.241.227.100:6667',
        'socks5://43.224.8.14:6667',
        'socks5://13.36.233.195:1080',
        'socks5://159.65.30.173:1080',
        'socks5://181.82.231.6:1080',
        'socks5://181.5.216.159:1080',
        'socks5://186.126.42.221:1080',
        'socks5://174.77.111.196:4145',
        'socks5://72.195.34.58:4145',
        'socks5://181.3.55.150:1080',
        'socks5://181.3.80.183:1080',
        'socks5://159.69.203.65:9050',
        'socks5://181.6.37.41:1080',
        'socks5://46.101.61.9:9050',
        'socks5://72.49.49.11:31034',
        'socks5://72.210.252.134:46164',
        'socks5://69.61.200.104:36181',
        'socks5://5.226.69.12:46975',
        'socks5://46.4.156.212:18588',
        'socks5://43.224.10.32:6667',
        'socks5://208.102.51.6:58208',
        'socks5://198.8.94.170:39074',
        'socks5://192.252.214.20:15864',
        'socks5://192.252.209.155:14455',
        'socks5://192.111.130.5:17002',
        'socks5://165.22.17.195:5110',
        'socks5://161.35.137.49:28005',
        'socks5://150.109.148.234:1234',
        'socks5://124.193.142.210:1080',
        'socks5://119.187.146.163:1080',
        'socks5://181.3.73.14:1080',
        'socks5://192.111.139.165:4145',
        'socks5://45.186.200.34:1080',
        'socks5://3.19.64.178:1080',
        'socks5://181.6.199.208:1080',
        'socks5://103.250.157.43:6667',
        'socks5://181.5.195.20:1080',
        'socks5://43.224.8.116:6667',
        'socks5://89.187.144.153:1080',
        'socks5://43.224.10.26:6667',
        'socks5://139.255.89.4:1080',
        'socks5://183.234.162.229:1081',
        'socks5://134.209.23.68:38424',
        'socks5://139.130.228.72:24753',
        'socks5://128.199.45.26:9052',
        'socks5://207.180.251.94:36479',
        'socks5://50.62.35.16:29643',
        'socks5://87.236.215.248:9051',
        'socks5://139.162.76.176:19151',
        'socks5://175.6.142.53:1080',
        'socks5://45.77.178.118:31280',
        'socks5://181.6.120.12:1080',
        'socks5://139.162.151.176:9050',
        'socks5://181.3.81.119:1080',
        'socks5://173.236.184.31:9474',
        'socks5://72.221.164.34:60671',
        'socks5://98.162.25.29:31679',
        'socks5://181.3.33.198:1080',
        'socks5://178.62.136.189:51423',
        'socks5://119.23.143.36:9999',
        'socks5://94.74.104.76:1089',
        'socks5://142.93.138.78:63421',
        'socks5://79.124.62.26:443',
        'socks5://36.150.108.65:1080',
        'socks5://3.35.77.45:8160',
        'socks5://164.68.107.231:34716',
        'socks5://115.84.178.73:9050',
        'socks5://104.238.215.49:1080',
        'socks5://89.248.118.218:1080',
        'socks5://181.6.203.189:1080',
        'socks5://181.102.55.21:1080',
        'socks5://181.5.230.32:1080',
        'socks5://98.188.47.132:4145',
        'socks5://27.116.51.181:6667',
        'socks5://210.16.73.83:1080',
        'socks5://45.32.231.201:1081',
        'socks5://186.126.61.54:1080',
        'socks5://186.126.144.191:1080',
        'socks5://104.238.215.49:1081',
        'socks5://186.126.80.69:1080',
        'socks5://181.6.134.15:1080',
        'socks5://181.0.16.191:1080',
        'socks5://181.7.204.69:1080',
        'socks5://181.3.13.2:1080',
        'socks5://103.233.82.158:1080',
        'socks5://103.250.166.4:6667',
        'socks5://181.6.81.65:1080',
        'socks5://45.156.184.65:1080',
        'socks5://133.167.100.251:9050',
        'socks5://43.128.230.110:1080',
        'socks5://103.21.163.81:6667',
        'socks5://77.238.128.166:9050',
        'socks5://72.206.181.105:64935',
        'socks5://181.3.51.204:1080',
        'socks5://103.241.227.114:6667',
        'socks5://181.102.8.60:1080',
        'socks5://192.169.201.24:7495',
        'socks5://46.101.51.187:47449',
        'socks5://210.16.73.82:1080',
        'socks5://78.46.200.13:22039',
        'socks5://64.34.217.33:40741',
        'socks5://47.101.195.97:3129',
        'socks5://46.101.218.6:39749',
        'socks5://213.136.89.190:13492',
        'socks5://184.178.172.13:15311',
        'socks5://132.148.129.108:38260',
        'socks5://104.248.63.18:30588',
        'socks5://87.107.146.202:1080',
        'socks5://181.3.1.83:1080',
        'socks5://213.230.69.33:1080',
        'socks5://176.9.160.118:22836',
        'socks5://181.102.50.8:1080',
        'socks5://104.238.97.215:59025',
        'socks5://51.15.78.50:1080',
        'socks5://101.32.115.15:1080',
        'socks5://181.3.9.192:1080',
        'socks5://186.126.92.135:1080',
        'socks5://95.216.147.49:9050',
        'socks5://138.91.19.96:1953',
        'socks5://181.3.25.91:1080',
        'socks5://101.53.158.48:9050',
        'socks5://181.0.30.70:1080',
        'socks5://181.3.53.220:1080',
        'socks5://98.162.25.7:31653',
        'socks5://84.22.137.26:9025',
        'socks5://27.116.51.85:6667',
        'socks5://192.111.139.165:19402',
        'socks5://184.178.172.18:15280',
        'socks5://159.203.42.128:28393',
        'socks5://132.148.129.108:34289',
        'socks5://186.126.96.140:1080',
        'socks5://43.224.10.44:6667',
        'socks5://181.5.225.189:1080',
        'socks5://188.166.28.109:29727',
        'socks5://181.101.22.216:1080',
        'socks5://122.152.219.54:57164',
        'socks5://192.248.190.123:8009',
        'socks5://74.208.101.185:44614',
        'socks5://181.3.57.193:1080',
        'socks5://181.7.209.143:1080',
        'socks5://181.6.199.42:1080',
        'socks5://103.113.149.212:1080',
        'socks5://103.241.227.98:6667',
        'socks5://181.7.210.122:1080',
        'socks5://181.6.131.99:1080',
        'socks5://181.6.64.63:1080',
        'socks5://186.126.144.144:1080',
        'socks5://181.5.222.102:1080',
        'socks5://186.126.96.38:1080',
        'socks5://186.126.81.195:1080',
        'socks5://181.3.92.9:1080',
        'socks5://181.3.5.248:1080',
        'socks5://181.5.241.122:1080',
        'socks5://181.6.33.25:1080',
        'socks5://181.6.129.59:1080',
        'socks5://181.101.49.214:1080',
        'socks5://43.224.10.35:6667',
        'socks5://45.76.206.125:9050',
        'http://217.79.181.109:443',
        'http://80.65.28.57:30962',
        'http://1.20.217.52:8080',
        'http://174.138.27.185:8080',
        'http://94.181.48.171:1256',
        'http://107.178.9.186:8080',
        'http://167.99.52.144:8080',
        'http://181.78.13.239:8080',
        'http://125.26.7.83:8080',
        'http://165.29.108.250:3128',
        'http://63.151.67.7:8080',
        'http://118.172.176.61:8080',
        'http://61.19.151.170:8080',
        'http://209.33.9.244:8080',
        'http://51.159.24.172:3161',
        'http://103.21.160.10:35101',
        'http://190.144.112.227:8080',
        'http://47.254.90.125:81',
        'http://110.77.180.176:8080',
        'http://103.124.87.14:8080',
        'http://92.255.187.180:3128',
        'http://8.208.91.118:8081',
        'http://77.236.241.110:1256',
        'http://182.52.229.165:8080',
        'http://188.166.191.227:8080',
        'http://159.89.131.73:3128',
        'http://167.71.171.14:8080',
        'http://181.119.112.29:8080',
        'http://12.218.209.130:53281',
        'http://1.20.99.122:8080',
        'http://181.189.221.209:61783',
        'http://134.122.22.233:3128',
        'http://167.71.167.1:8080',
        'http://41.72.199.6:8080',
        'http://181.129.70.82:46752',
        'http://139.59.119.125:8080',
        'http://180.180.123.40:8080',
        'http://85.159.25.62:8080',
        'http://118.174.196.112:36314',
        'http://223.27.194.66:63141',
        'http://103.209.230.129:8080',
        'http://110.44.113.105:8080',
        'http://118.172.43.60:8080',
        'http://111.68.40.15:8080',
        'http://45.181.190.45:8080',
        'http://24.113.42.177:48678',
        'http://78.42.42.36:1080',
        'http://103.36.100.248:8000',
        'http://46.5.252.55:1080',
        'http://66.135.227.178:4145',
        'http://160.19.102.98:8080',
        'http://200.60.124.109:8080',
        'http://192.111.138.29:4145',
        'http://192.111.139.162:4145',
        'http://176.9.119.170:1080',
        'http://46.209.196.146:8080',
        'http://103.107.94.2:52827',
        'http://95.208.208.237:1080',
        'http://88.198.50.103:1080',
        'http://109.245.239.125:35659',
        'http://184.181.217.204:4145',
        'http://217.8.51.201:1080',
        'http://72.221.232.155:4145',
        'http://109.193.195.8:1080',
        'http://139.59.1.14:1080',
        'http://37.49.127.234:1080',
        'http://88.198.24.108:1080',
        'http://98.184.33.205:4145',
        'http://102.129.249.120:1080',
        'http://139.162.78.109:1080',
        'http://46.223.255.9:1080',
        'http://192.111.130.2:4145',
        'http://46.4.96.137:1080',
        'http://103.251.214.167:6667',
        'http://72.221.172.203:4145',
        'http://34.122.13.226:1080',
        'http://128.199.202.122:1080',
        'http://113.160.188.21:1080',
        'http://103.240.168.138:6667',
        'http://174.64.199.82:4145',
        'http://159.203.61.169:1080',
        'http://184.179.216.130:4145',
        'http://192.111.135.21:4145',
        'http://45.6.4.60:8080',
        'http://41.217.219.53:31398',
        'http://41.202.221.102:8080',
        'http://177.36.186.190:8080',
        'http://185.67.95.179:3128',
        'http://118.172.155.177:8080',
        'http://179.189.27.37:8080',
        'http://103.87.237.114:8080',
        'http://175.215.8.145:3128',
        'http://93.157.251.134:3128',
        'http://157.25.200.39:8080',
        'http://103.12.198.54:8080',
        'http://180.149.232.149:8080',
        'http://190.214.27.106:48586',
        'http://83.242.123.248:8080',
        'http://188.163.170.130:41209',
        'http://202.57.35.74:38629',
        'http://181.10.160.156:8080',
        'http://103.147.43.255:8080',
        'http://181.129.248.140:999',
        'http://84.214.150.146:8080',
        'http://45.177.111.70:999',
        'http://188.225.254.2:999',
        'http://103.146.176.124:80',
        'http://182.75.218.146:3128',
        'http://167.71.230.124:8080',
        'http://46.29.11.254:57849',
        'http://103.15.60.23:8080',
        'http://183.87.158.141:8080',
        'http://195.182.152.238:38178',
        'http://178.140.58.34:8080',
        'http://45.176.244.59:999',
        'http://193.226.199.110:32231',
        'http://201.157.218.10:8080',
        'http://45.169.16.3:8080',
        'http://203.202.245.58:80',
        'http://181.225.73.66:999',
        'http://167.249.181.236:8080',
        'http://134.209.29.120:1080',
        'http://103.209.64.19:6667',
        'http://151.106.34.139:1080',
        'http://186.126.99.16:1080',
        'http://181.6.74.19:1080',
        'http://132.145.18.53:80',
        'http://157.119.207.36:6667',
        'http://181.78.21.42:8080',
        'http://113.190.49.137:1080',
        'http://82.137.244.151:8080',
        'http://187.94.209.246:3128',
        'http://109.72.231.37:1080',
        'http://87.107.146.245:1080',
        'http://186.235.159.138:8403',
        'http://46.0.205.175:1080',
        'http://189.203.75.245:8080',
        'http://81.161.61.88:35953',
        'http://117.218.60.147:81',
        'http://191.242.187.166:8080',
        'http://79.143.87.134:9090',
        'http://200.149.214.6:33701',
        'http://103.216.82.37:6667',
        'http://179.107.25.14:8080',
        'http://121.100.52.100:8080',
        'http://118.172.201.49:52111',
        'http://187.19.150.253:8888',
        'http://45.174.79.129:999',
        'http://37.135.121.157:80',
        'http://41.75.4.208:53281',
        'http://136.243.81.120:8080',
        'http://119.110.209.94:3128',
        'http://187.188.16.14:999',
        'http://101.109.18.85:8080',
        'http://183.89.44.205:8080',
        'http://110.171.21.99:8080',
        'http://193.117.138.126:44805',
        'http://177.128.199.242:666',
        'http://79.120.177.106:8080',
        'http://201.184.176.106:8080',
        'http://45.171.145.138:8080',
        'http://139.5.31.201:8080',
        'http://206.189.184.46:80',
        'http://113.176.88.14:8080',
        'http://95.0.206.51:8080',
        'http://176.120.37.82:59365',
        'http://181.209.108.250:999',
        'http://82.223.3.52:8118',
        'http://103.105.40.161:16538',
        'http://138.0.88.246:999',
        'http://45.174.76.129:999',
        'http://94.158.165.19:45915',
        'http://93.170.97.160:8080',
        'http://103.148.39.38:82',
        'http://103.41.212.229:44759',
        'http://37.143.22.34:8080',
        'http://201.168.210.125:8080',
        'http://190.171.168.90:999',
        'http://193.34.95.110:8080',
        'http://103.9.188.229:36984',
        'http://188.72.6.98:37083',
        'http://186.209.33.154:8080',
        'http://91.193.253.188:23500',
        'http://185.242.104.112:8080',
        'http://78.111.97.182:3142',
        'http://143.198.100.172:3128',
        'http://160.238.242.42:8080',
        'http://95.173.236.9:9090',
        'http://45.133.216.121:8080',
        'http://47.251.13.204:3128',
        'http://41.164.68.194:8080',
        'http://202.5.115.68:8080',
        'http://181.129.52.154:42648',
        'http://204.199.107.138:999',
        'http://190.92.49.150:999',
        'http://129.205.210.90:65205',
        'http://119.82.252.29:46872',
        'http://149.5.37.193:8080',
        'http://95.156.230.45:80',
        'http://45.114.38.57:8080',
        'http://202.141.233.166:48995',
        'http://185.3.213.8:8080',
        'http://45.228.77.242:999',
        'http://111.90.179.74:8080',
        'http://113.160.208.255:8080',
        'http://131.72.127.129:8080',
        'http://136.232.209.70:47423',
        'http://170.238.255.90:31113',
        'http://200.74.236.3:8080',
        'http://170.79.88.38:999',
        'http://187.216.93.20:55443',
        'http://78.81.245.153:8080',
        'http://96.9.69.164:53281',
        'http://14.170.154.10:8080',
        'http://103.139.140.154:8080',
        'http://190.121.236.100:999',
        'http://82.114.70.46:8080',
        'http://167.86.78.204:3128',
        'http://170.83.68.164:3128',
        'http://116.206.58.157:8181',
        'http://190.90.18.163:999',
        'http://177.21.237.100:8080',
        'http://178.252.80.226:34730',
        'http://111.118.218.125:8080',
        'http://185.48.149.60:8080',
        'http://177.37.165.50:8044',
        'http://178.136.2.208:55443',
        'http://14.241.225.134:443',
        'http://188.72.51.245:8080',
        'http://105.112.1.166:8080',
        'http://115.42.65.14:8080',
        'http://103.205.14.1:8080',
        'http://174.138.25.224:8080',
        'http://103.76.242.146:3127',
        'http://150.107.114.204:1080',
        'http://24.249.199.4:4145',
        'http://3.219.50.143:1080',
        'http://203.81.95.42:8080',
        'http://212.164.52.198:443',
        'http://45.179.193.122:999',
        'http://151.22.181.213:8080',
        'http://98.162.96.52:4145',
        'http://202.142.174.10:8080',
        'http://138.68.60.8:1080',
        'http://179.49.210.223:999',
        'http://186.126.42.121:1080',
        'http://192.252.215.2:4145',
        'http://181.48.88.238:8085',
        'http://200.76.189.214:999',
        'http://46.98.99.128:8080',
    ];
}

if (require.main === module) {
    console.log(spys());
}
export default spys