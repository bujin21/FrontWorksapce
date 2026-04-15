/*
    1. 구조분해할당(Destructuring)
     - 객체나 배열의 내부구조를 분해하여 각각의 값을 변수에 할달하는 문법
     - 주로 변수 선언시 많이 사용되며, 함수의 매개변수에서도 사용이 가능
*/
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];

// 배열 구조분해할당
// - 배열의 인덱스 순서에 맞게 변수를 준비해두면, 각 배열에 담긴
//   값이 순서에 맞춰서 저장.
const [d, e] = arr;
console.log(d,e);

// 객체 구조분해할당 문법
//  - 객체의 속성명과 동일한 이름의 변수에 객체의 속성값을 할당하는 문법
const obj = {
    foo : 1,
    bao : 2
};

//const foo = obj.foo;
//const bao = obj["bao"];
const {foo ="", option ="" } = obj;
// 동일한 이름의 변수가 없어서 undefind가 나오는데 = ""를 하면 없을시 기본값을 설정하는거다.
console.log(foo, option);
/*
    2. 전개연산자(Spread Operator)
     - 배열이나 객체에 담겨있는 값을 꺼내어 전개해주는 연산자
     - 배열 및 객체에 값을 대입하는 경우나 함수 호출시 자주 사용된다.
*/
const arr2 = [1,2,3,4];
const max = Math.max(...arr2);//Math.max(1,2,3,4)
console.log("max", max);

// spread연산자를 활용한 배열/객체 복사(깊은 복사)
const copy =  arr2; //얕은 복사
const copy2 = [1,...arr2, 5]; // 깊은 복사
console.log(copy2, arr2 == copy2);
console.log(arr2 == copy);

// 객체 전개 연산자
const person = {name : 'jbj', job : '개발자'};
const jbj = {...person, location : 'gyeongido'};
console.log(jbj);

// 3. Rest Parameter
//  - 함수 선언 및 비구조화문법에서 "나머지" 값들을 하나로 모아주는 역할
function testRest(first, ...rest){
    console.log(first);
    console.log(rest); // 값을 전달하지 않은 경우 [] 반환
}
testRest("jbj");
testRest("jbj", 1,2,3,4);

// 비구조화 + Rest Parameter
function testRest2({name, age, ...rest}){
    console.log(name, age, rest);

}
const person2 = {...jbj, age : 26};
testRest2(person2);

const arr3  = [1,2,3,4];
const [first, ...rest]  = arr3;
console.log(first, rest);

