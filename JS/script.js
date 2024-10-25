function Nhap() {
    var tendn = document.getElementById("txtus").value;
    var mk = document.getElementById("txtmk").value;

    if (!tendn || !mk) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    var cafe = [];
    document.querySelectorAll("input[type='checkbox']").forEach(function(chk) {
        if (chk.checked) cafe.push(chk.value);
    });

    var gtinh = "";
    document.querySelectorAll("input[type='radio']").forEach(function(ra) {
        if (ra.checked) gtinh = ra.value;
    });

    localStorage.setItem("us", tendn);
    localStorage.setItem("pd", mk);
    localStorage.setItem("cf", cafe.join(", "));
    localStorage.setItem("gt", gtinh);

    window.open("info.html");
}
