//실습문제 1) 타입주석 작성
let animal:string[], human:{name:string, age:number, height:number, married:boolean};
animal = ['panda','cat','wombat','frog','hamster'];
human = {name : 'mkm', age : 25, height: 180.5, married : false}
console.log(animal);
console.log(human);

//실습문제 2) 타입주석 작성
let zoo:{
    animals:string[],
    total:number, 
    isClosed:boolean, 
    location:string, 
    masterInfo:{
        name:string, 
        age:number, 
        height:number}
};
zoo = {
    animals : ['panda','cat','wombat','frog','hamster'],
    total   : 120,
    isClosed : false,
    location : "용인",
    masterInfo : {
        name : 'mkm',
        age : 25,
        height : 180.5
    }
};

//실습문제 3) 다음 조건에 만족하는 타입 만들기
let response: readonly[number, string];

//실습문제 4) 다음 조건에 맞는 타입 지정하기
let array:(string | number | boolean | undefined | {name : string})[];
array = [12345, 'mkm', true, undefined]; // ok
console.log(array);
array = ['mkm' , 12345, true]; // ok
console.log(array);
array.push({name : 'mkm'}); // ok
console.log(array);

//실습문제 5)  다음 조건에 맞는 타입 지정하기
let favorite:'햄버거' | '치킨' = '치킨'; // ok
favorite = '햄버거'; // ok 
//favorite = '피자'; // x
//favorite = '짜장면'; // x

//실습문제 6) 자료형 맞추기

//Q1. test1 변수에는
//    undefined를 넣어도 문제가 없습니다.
//    '1234'를  넣어도 문제가 없습니다.
//    1234를 넣으면 컴파일 에러가 발생합니다.
//    true를 넣으면 컴파일 에러가 발생합니다.
//    test1의 타입은 ?
let test1: string|undefined  = undefined; // ok
test1 = '1234'; // ok
//test1 = 1234; // compile error
//test1 = true; //compile error

//Q2. test2 변수에는 모든 값을 담을 수 있습니다.
//    true, 1234, undefined등을 넣어도 문제가 없습니다.
//    test1에 test2를 담을 수 있습니다.
//    test2는 UnionType이 아닙니다.
//    test2의 타입은?
let test2 : any = true; //ok
test2 = 1234;// ok
test1 = test2; // ok

//Q3. test3 변수에는모든 값을 담을 수 있습니다.
//    test1에 test3를 담으면 컴파일 에러가 발생합니다.
//    test3은 UnionType이 아닙니다.
//    test3의 타입은?
let test3 : unknown = undefined; // ok
test3 = 1234; // ok
test3 = true; // ok
//test1 = test3; // compile error

export default animal;