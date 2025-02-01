function toggleBox() {
    var box = document.getElementById("boxText");
    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block"; // แสดง
    } else {
        box.style.display = "none"; // ซ่อน
    }
}