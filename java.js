function gamedoanso() {
    let max = parseInt(prompt("Bạn hãy nhập khoảng dưới bạn muốn dự đoán"));
    let min = parseInt(prompt("Bạn hãy nhập khoảng trên bạn muốn dự đoán"));
    let a = Math.floor(Math.random() * (max - min + 1)) + min;

    for (i = 0; i < 3; i++) {
        let b = parseInt(prompt("Nhập giá trị bạn muốn đoán"));
        if (a == b) {
            alert("Chúc mừng bạn đã đoán đúng. Bạn là người thắng cuộc");
            return i;
        } else if (a < b) {
            alert("Bạn đã đoán bé hơn giá trị đúng ");
        } else {
            alert("Bạn đã đoán lớn hơn giá trị đúng");
        }
    }
    alert(" Bạn đã thua cuộc");
}