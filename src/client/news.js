function size() {
    var width = document.body.clientWidth;
    var rows = document.querySelectorAll(".n-row");
    var row = document.querySelector(".n-row");
    // console.log(row.className);
    if ((width <= 768) && (row.className == "n-row")) {
        for (let i = 0; i < rows.length; i++) {
            rows[i].className = rows[i].className.replace(" n-row", "");
            rows[i].className += " new-col";
            // console.log(rows[i].className);
        }
    }
    else if (width > 768) {
        for (let j = 0; j < rows.length; j++) {
            rows[j].className = rows[j].className.replace(" new-col", "");
            // console.log(rows[j].className);
        }
    }
}