test1.onclick = function(){
    var str = "Samsung Apple Xiomi";
    console.log(str.length);
    console.log(str.toUpperCase());
    console.log(str.indexOf('pl'));
    console.log(str.lastIndexOf('i'));
    console.log(str.charAt(0));
    console.log(str[0]);

    // 문자열의 일부를 잘라서 리턴하는 메서드
    console.log(str.substring(2, 4)); // 2,3번 인덱스값 추출
    console.log(str.substring(2)); // 2번 부터 끝까지

    var arr  = str.split(" ");
    console.log(arr);
};

test2.onclick = function(){
    var num = 123.456;
    console.log(Math.round((num * 10)/10));
    console.log(Math.cell(num));
    console.log(Math.floor(num));


};

test3.onclick = function(){
    var now = new Date();
    console.log(now);

    // 내가원하는 시간정보를 가진 Date객체
    var time1 = new Date(2026,0, 20); // 2025-03-12
    console.log(time1);

    var time2 = new Date("1999/03/01 15:44:32");
    console.log(time2);

    // date객체를 yyyy/mm/dd(e) HH:MM:ss형식으로 출력하고 싶다면?

    function display(date){
        var yyy =date.egetFullyear();
        var mm = date.getMoth()+1;
        var dd = date.getData();

        var dayArr = ['월', '화', '수','목', '금', '토', '일'];
        var day = date.getDay(); //0(월) ~ 6(토);

        alert(yyyy+"/"+mm+"/"+dd+"("+dayArr(day)+")");
    }
};


test4.onclick = function(){
    console.log(3 + 7 + "7"); //107, number

    // '7'은 number자료형으로 형변환 된 후 연산
    console.log(7 - '7'); // 0, number
    console.log(7 * '7'); // 49, number
    console.log(7 / '7'); // 1
    console.log(7 % '4'); // 3
    // 즉, +을 제외한 산술연산시 문자열은 number자료형으로
    // 자동형변환된다.

    console.log(7 % 'a'); // 숫자형태가 아닌 문자열을 숫자로 형변환시
    // 반환되는 값 (NaN). NaN(Number)과 기타 연산결과를 항상 NaN이 반환
    // console.log(Numeber('a')+1);
    console.log(7 + true);// true는 Number로 변환시 1로 처리
    console.log(7 + false); // 0으로 처리
    
    //모든 연산시에는 원시값과 원시값끼리만 연산이 가능하기 때문에, 참조변수는 원시값으로
    // 변환된 후 연산처리 된다.
    //[] -> [].toString -> '' +1 => '1'
    console.log([].toString() + 1); // 1, String

    console.log({} + 1);
    function fn(){}
    console.log(fn + 1);
};

test5.onclick = function(){
    var num = "1234.634원";
    console.log(Number(num));
    // Number는 정수/실수로 변환이 가능. 단, 반환불가 문자가 있는 경우 NaN

    console.log(parseInt(num));
    // 문자열을 정수로 반환. 단, 반환불가 문자가 있는 경우 해당문자의 앞까지만 변환
    console.log(parseFloat(num));
};

test6.onclick = function(){
    console.log(10 / 0); // infinity
    console.log(typeof(10/0)) // number

    console.log(10 / "a"); //NaN
    console.log(typeof(10/"a")); //number

    var num = prompt("숫자를 입력하세요");

    if(/*Number(num) != NaN*/  !isNaN(num)){
        alert("숫자입니다.");

    }else{
        alert("숫자가 아닙니다.");
    }
};

test7.onclick = function(){
    /*
        자바스크립트에서는 변수나 리터럴이 boolean형으로
        형변환이 가능하다.
          - if(값), Boolean(값)

        값이 존재하지 않는 것들은 false로 반환된다/
        ex) 0, -0, 0.0, "", undefind, null, NaN

        값이 존재하는 것들은 true로 반환된다.
        ex) 123, -123, 1.1, "안", "안녕", new Date(), [], {}
    */
   console.log(Boolean(123)); //true
   console.log(Boolean(-500)); //true
   console.log(Boolean(0)); //false

   console.log(Boolean("abc")); //true
   console.log(Boolean("")); // false

   console.log(Boolean(undefined)); // false
   console.log(Boolean(null)); // false
   console.log(Boolean([])); // true
   console.log(Boolean({})); // true
   console.log(Boolean([]+"")); // false

   function fn(){}
   console.log(Boolean(fn)); //true

   console.log("0" == 0); // true
   console.log([] == 0); //true
   console.log([] == "0"); //false

};

test8.onclick = function(){
    /*
        일반 동등비교 연산자
         ==, !=
         왼쪽 오른쪽 타입이 서로 다르다면 "자동형변환" 후 비교 수행

         엄격 동등비교 연산자
          ===, !==
          왼쪽 오른쪽 타입이 서로 다르다면 바로 false를 반환하는 연산자(===기준)
          즉, 두 값간의 자료형검사 또한 수행한다.
    */
    console.log(3 == "3"); //t
    console.log(3 != "3"); //f

    console.log(3 === "3"); //f
    console.log(3 === 3); //t 

    console.log(3 !== "3"); //t
    console.log(3 === Number("3")); //t

    console.log(null == undefined); // t
    console.log(null === undefined); // f
    // console.log([] === 0); // f

};

test9.onclick = function(){
    var num = prompt("정수를 입력하세요")
    
    // 입력한 값이 홀수인지 짝인지 출력
    // if(num %2 == 0 ){
    //     alert("짝수");
    // }else{
    //     alert("홀수");
    // }

    // 짧은 조건문
    // a(조건식) && b(실행문) -> a가 참인경우 b실행
    // a(조건식) || b(실행문) -> a가 거짓인 경우 b실행

    num % 2 == 0  && alert("짝수");
    num %2 == 1 && alert("홀수");


};