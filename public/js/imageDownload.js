let btnDownload = document.getElementById('dl-btn');
let img = document.getElementById('wallpaper-img');

btnDownload.addEventListener('click', () => {
    let imgPath = img.getAttribute('src');
    let fileName = getFileName(imgPath);
    saveAs(imgPath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1);
}
