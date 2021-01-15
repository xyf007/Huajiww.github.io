var zfc = "";
var m = function(){alert("参数错误，请刷新")}
function cw() {
    return document.querySelector(".mdframe").contentWindow
}

function maint() {
    var b = cw().document.querySelectorAll(".s_elite3");
    var d = b.length;
    for (var c = 0; c < d; c++) {
        window.parent.postMessage(b[c].parentElement.previousElementSibling.textContent.replace(/^\s+|\s+$/g, ""),"*");
    }
    namerunner();
}

function namerunner() {
    document.querySelector("div>textarea").value = zfc;
    document.querySelector(".goBtn").click();
    zfc = "";
    for (var a = 0; a < 10; a++) {
        zfc += (m()+"\n");
    }
}

function re(a) {
    if (a.data == "run") {
        maint();
    } else {
        eval(a.data);
for (var a = 0; a < 10; a++) {
        zfc += (m()+"\n");
    }
        namerunner();
    }
}
window.addEventListener("message", re, false);