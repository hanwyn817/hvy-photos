let peoplePrice = 30;  // 默认单人价格
let freePhotos = 9;    // 默认单人精修照片免费数量
let minPhotos = 9;     // 默认精修照片的最小数量
let maxPhotos = 30;    // 精修照片的最大数量

function updatePeople(price) {
    // 先移除已选择的样式
    const selectedCard = document.querySelector('.card.selected');
    if (selectedCard) {
        selectedCard.classList.remove('selected');
    }

    // 设置当前选择的卡片为选中状态
    if (price === 30) {
        document.getElementById('single').classList.add('selected');
    } else {
        document.getElementById('double').classList.add('selected');
    }

    peoplePrice = price;
    // 设置免费精修照片数量和最小精修照片数量
    if (price === 30) {
        freePhotos = 9;
        minPhotos = 9;
    } else {
        freePhotos = 18;
        minPhotos = 18;
    }

    // 更新滑块的最小值
    document.getElementById("extra-photos").min = minPhotos;
    document.getElementById("extra-photos").value = minPhotos;
    document.getElementById("photos-value").textContent = minPhotos;

    updateFee();  // 更新费用
}

function updateFee() {
    const hours = parseInt(document.getElementById("hours").value);  // 获取选择的时长
    let extraPhotos = parseInt(document.getElementById("extra-photos").value);  // 获取精修照片数量

    // 更新小时数和精修照片数的显示
    document.getElementById("hours-value").textContent = hours;  // 显示当前小时数
    document.getElementById("photos-value").textContent = extraPhotos;  // 显示当前精修照片数

    // 如果选择的精修照片数量小于最小值，则设置为最小值
    if (extraPhotos < minPhotos) {
        extraPhotos = minPhotos;
        document.getElementById("extra-photos").value = extraPhotos;
    }

    if (hours < 2) {
        alert("拍摄时长至少为2小时！");
        return;
    }

    // 计算基础费用
    let baseFee = peoplePrice * hours;

    // 计算超出的精修照片费用
    let extraFee = 0;
    if (extraPhotos > freePhotos) {
        extraFee = (extraPhotos - freePhotos) * 5;  // 超出部分每张5元
    }

    // 计算总费用
    const totalFee = baseFee + extraFee;

    // 显示总费用
    document.getElementById("total-fee").textContent = "¥" + totalFee;
}