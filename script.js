// 显示二维码图片函数
function showQRCode() {
    var qrcode = document.getElementById('qrcode');
    qrcode.style.display = 'block';  // 将二维码图片显示出来
}

// 点击二维码后跳转链接
function goToLink() {
    // 你可以设置一个具体的网址，比如：
    window.location.href = 'https://example.com';  // 替换为实际的网址
}
