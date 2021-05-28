export default async function () {
    let local_ports = [];
    // Shadow socks
    local_ports.push(
        'http://127.0.0.1:1080',
        'http://127.0.0.1:1087',
        'socks5://127.0.0.1:1080',
    );
    // 911
    for (let port = 5000; port < 6000; port++) {
        local_ports.push(`socks5://127.0.0.1:` + port)
    }
    return local_ports;
}
