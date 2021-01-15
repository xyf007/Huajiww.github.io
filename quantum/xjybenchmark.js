var stk;
var is = 0;
var res = "";

function st() {
    stk = localStorage.elite.split("\n");
    localStorage.elite = "";
    var si = setInterval(function () {
        chk()
    }, 1000);
}

function chk() {
    if (is == 0) {
        if (stk.length != 0) {
            var s = stk[stk.length - 1];
            while (s == "") {
                stk.pop();
                s = stk[stk.length - 1];
            }
            res = s + " ";
            document.querySelector("#textdiv>textarea")
                .value = "!test!\n!\n\n" + s;
            document.querySelector(".goBtn")
                .click();
            is = 1;
            stk.pop();
        } else {
            stk = localStorage.elite.split("\n");
            localStorage.elite = "";
        }
    } else {
        var a = cw()
            .document.querySelectorAll("span.u");
        var n = a.length;
        var kkk = 0;
        var loc;
        if (n > 10) {
            for (var i = 10; i < n; i++) {
                if (cw()
                    .document.querySelectorAll("span.u")[i].textContent.split(" ")[0] == "》") {
                    kkk = 1;
                    loc = i;
                    break;
                }
            }
        }
        if (kkk) {
            res += cw()
                .document.querySelectorAll("span.u")[loc].textContent.split(" ")[2] + " \n";
            is = 0;
            if(res!="undefined undefined \n"){localStorage.result+=res}
        }
    }
}
setTimeout(st,3000);