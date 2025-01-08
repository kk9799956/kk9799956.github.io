const needTips = !!/MicroMessenger/i.test(navigator.userAgent);

function init() {
    //const baseUrl = "https://testapi.jchhzp.com/yjb/download";
    //const apkUrl = `${baseUrl}/money-android.apk`;
    //const plistUrl = `itms-services://?action=download-manifest&url=${baseUrl}/manifest.plist`;
    
    const baseUrl = "https://baidu.com";
    const apkUrl = `${baseUrl}`;
    const plistUrl = `https://baidu.com`;

    if (needTips) {
        // 如果是微信环境，使用微信协议（wx://）
        document.getElementById("JdownApp").href = `wx://dl/apk?url=${apkUrl}`;
        document.getElementById("JdownApp2").href = `wx://dl/manifest?url=${plistUrl}`;
    } else {
        // 非微信环境，直接使用原链接
        document.getElementById("JdownApp").href = apkUrl;
        document.getElementById("JdownApp2").href = plistUrl;
    }
}

function showTips() {
    if (needTips) {
        // 如果是微信则直接提示浏览器打开
        document.getElementById('JweixinTip').style.display = 'block';
    }
}

function doTips() {
    let countDown = 3;
    const node = document.getElementsByClassName("timeTips")?.[0];
    const interval = setInterval(() => {
        if (countDown === 0) {
            if (needTips) return;
            window.location.replace("/download.html");
            clearInterval(interval);  // 清除定时器
        } else {
            countDown--;
            node.innerText = `${countDown}s后跳转到下一页面`;
        }
    }, 1000);
}
