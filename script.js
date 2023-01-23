function hitung() {
    let operasibackend = document.getElementById("operasi-backend").value;
    let hasil = eval(operasibackend);
    $("#hasil").val(hasil);
}

function btn(x) {
    let operasi = document.getElementById("operasi").value;
    let operasibackend = document.getElementById("operasi-backend").value;
    let cek0 = operasi.substring(0, operasi.length);
    if(x=="0"){
        if(cek0!="0"){
            $("#operasi").val(operasi + x);
            $("#operasi-backend").val(operasibackend + x);
        }
    } else {
        let cek = operasi.substring(operasi.length - 1, operasi.length);
        if (cek!="%") {
            $("#operasi").val(operasi + x);
            $("#operasi-backend").val(operasibackend + x);
        }  
    }
    hitung();
    
}
function persen() {
    let operasi = document.getElementById("operasi").value;
    let operasibackend = document.getElementById("operasi-backend").value;
    let cek = operasi.substring(operasi.length - 1, operasi.length);
    if (cek != "+" && cek != "-" && cek != "/" && cek != "x") {
        $("#operasi").val(operasi + "%");
        $("#operasi-backend").val(operasibackend + "/100");
    }
    hitung();
}
function bagi() {
    let operasi = document.getElementById("operasi").value;
    let operasibackend = document.getElementById("operasi-backend").value;
    let potong = operasi.substring(0, operasi.length - 1);
    let cek = operasi.substring(operasi.length - 1, operasi.length);
    if (operasi != "") {
        if (cek != "+" && cek != "-" && cek != "/" && cek != "x") {
            $("#operasi").val(operasi + "/");
            $("#operasi-backend").val(operasibackend + "/");
        }
        else {
            $("#operasi").val(potong + "/");
            $("#operasi-backend").val(potong + "/");
        }
    }
}
function kali() {
    let operasi = document.getElementById("operasi").value;
    let operasibackend = document.getElementById("operasi-backend").value;
    let potong = operasi.substring(0, operasi.length - 1);
    let cek = operasi.substring(operasi.length - 1, operasi.length);
    if (operasi != "") {
        if (cek != "+" && cek != "-" && cek != "/" && cek != "x") {
            $("#operasi").val(operasi + "x");
            $("#operasi-backend").val(operasibackend + "*");
        }
        else {
            $("#operasi").val(potong + "x");
            $("#operasi-backend").val(potong + "*");
        }
    }
}
function kurang() {
    let operasi = document.getElementById("operasi").value;
    let operasibackend = document.getElementById("operasi-backend").value;
    let potong = operasi.substring(0, operasi.length - 1);
    let cek = operasi.substring(operasi.length - 1, operasi.length);
    if (cek != "+" && cek != "-" && cek != "/" && cek != "x") {
        $("#operasi").val(operasi + "-");
        $("#operasi-backend").val(operasibackend + "-");
    }
    else {
        $("#operasi").val(potong + "-");
        $("#operasi-backend").val(potong + "-");
    }
}
function tambah() {
    let operasi = document.getElementById("operasi").value;
    let operasibackend = document.getElementById("operasi-backend").value;
    let potong = operasi.substring(0, operasi.length - 1);
    let cek = operasi.substring(operasi.length - 1, operasi.length);
    if (operasi != "") {
        if (cek != "+" && cek != "-" && cek != "/" && cek != "x") {
            $("#operasi").val(operasi + "+");
            $("#operasi-backend").val(operasibackend + "+");
        }
        else {
            $("#operasi").val(potong + "+");
            $("#operasi-backend").val(potong + "+");
        }
    }
}
function duanol() {
    let operasi = document.getElementById("operasi").value;
    let operasibackend = document.getElementById("operasi-backend").value;
    let cek0 = operasi.substring(0, operasi.length);
    if(cek0!="0"){
        if(operasi=="") {
            $("#operasi").val(operasi + "0");
            $("#operasi-backend").val(operasibackend + "0");
        } 
        else {
            $("#operasi").val(operasi + "00");
            $("#operasi-backend").val(operasibackend + "00");
        }    
    }
    hitung();
}
function koma() {
    let operasi = document.getElementById("operasi").value;
    let operasibackend = document.getElementById("operasi-backend").value;
    let cek = operasi.substring(operasi.length - 1, operasi.length);
    if (cek != "+" && cek != "-" && cek != "/" && cek != "x") {
        $("#operasi").val(operasi + ".");
        $("#operasi-backend").val(operasibackend + ".");
    }
}
function del() {
    let operasi = document.getElementById("operasi").value;
    let operasibackend = document.getElementById("operasi-backend").value;
    let del = operasi.substring(0, operasi.length - 1);
    let cek = operasi.substring(operasi.length - 1, operasi.length);
    if (cek=="%") {
        let delbackend = operasibackend.substring(0, operasibackend.length - 4);
        $("#operasi").val(del);
        $("#operasi-backend").val(delbackend);
    }
    else {
        let delbackend = operasibackend.substring(0, operasibackend.length - 1);
        $("#operasi").val(del);
    $("#operasi-backend").val(delbackend);
    }
    hitung();
}

function samadengan() {
    let operasi = document.getElementById("operasi-backend").value;
    let hasil = eval(operasi);
    $("#operasi").val(hasil);
    $("#operasi-backend").val(hasil);
    $("#hasil").val("");
}

