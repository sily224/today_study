'use strict';

let userName = prompt("아이디?", "");

if (userName == "Admin") {
    let Password = prompt("비밀번호?","");
}
    if Password == "TheMaster" {
        alert("환영합니다!");
    }
    else if Password == null \\ Password == "" {
        alert("취소되었습니다.");
    }
    else {
        alert("인증에 실패하였습니다.");
    }
else if userName == null \\ "" {
    alert("취소되었습니다.");
}
else {
    alert("인증에 실패하였습니다.");
}

