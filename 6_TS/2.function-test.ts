 //실습문제 1)  다음 함수의 타입을 정의하시오
 const apply:(a:number, b:number)=> number = (a,b) => a+b;

 //실습문제 2) PrintType 의 함수별칭을 만드시오
// name에는 문자열만 사용 가능합니다
// favorite에는 돈까스, 제육, 치킨만 사용 가능합니다.
 type PrintType = (name:string, favorite:'돈가스'|'제육'|'치킨') => void;
const print:PrintType = (name, favorite) => {
    console.log(`안녕하세요 . 제 이름은 ${name}입니다. 제 최애 음식은 ${favorite}입니다,
    하나만 사주세요`);
}
export{};

/*
    실습문제 3) racoonInfo함수 생성하기

    아래 실행결과를 바탕으로 racoonInfo함수를 완성하시오
    racoonInfo함수 호출시 매개인자는 4개 혹은 3개를 전달할 수 있습니다.
    racoonInfo함수의 반환값을 data에 담은 후 출력 시 출력결과는 다음과 같습니다.
    이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
    이름 : coco , 무게 : 4 , 성별 : female
*/
let data:string; 
data = racoonInfo('podong' , 10, 'male', true );
console.log(data);//이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
data = racoonInfo('coco',4, 'female' );
console.log(data);//이름 : coco , 무게 : 4 , 성별 : female

function racoonInfo(name:string,weight:number, gender:string, neutering?:boolean ) : string {
    return `이름 : ${name}, 무게 : ${weight}, 성별 : ${gender} ${neutering != undefined ? `, 중성화 : ${neutering}` : ''}`
}

//실습문제 4) sum함수의 몸통부분을 완성하시오

const array2:(string|number|number[])[] = ['1',2,3,4,'5',[1,2,3,4,5]];
function sum(array2: (string|number|number[])[]) : number{
   let sum = 0;
   
    for (let i = 0; i < array2.length; i++) {
        const item = array2[i];

        if(Array.isArray(item)){
            for(let j = 0; j<item.length; j++){
                sum += item[j];
            }
        }else if(typeof item === 'string'){
            sum +=Number(item);
        }else{
            sum += item;
        }
    }

    return sum;
}
const total = sum(array2);
console.log(total); // 30

/*
    실습문제 5) 다음 조건을 만족하는 함수를 완성하시오
    abc함수는 1개의 매개변수를 가지고 있습니다. 
    abe함수의 매개변수로는 다음 데이터 유형들이 매개인자로 전달되며 각 값을 전달시 반환값은 다음과 같습니다.

    
*/
function abc(param: (number|string|string[]|number[])) : number|number[]{
    if(typeof param === 'string'){
        return Number(param);
    }else if(typeof param === 'number'){
        return param;
    }else if(Array.isArray(param)){
        let numberArr:number[] = [];
        for(let num of param){
            if(typeof num === 'string'){
                numberArr.push(Number(num));
            }else{
                numberArr.push(num);
            }
        }
        return numberArr;
    }else{
        throw new Error(`잘못된 값입니다 ${param}`);
    }
}
console.log(abc(11)) // 11
console.log(abc('11')) // 11
console.log(abc(['1','2','3','4'])) //  [1,2,3,4]
console.log(abc([1,2,3,4])) // [1,2,3,4]

/*
    실습문제 6) 매개변수로 들어온 모든 숫자를 곱하여 반환하는 함수 작성
    multiplyAll의 매개변수는 1개 의상의 매개인자가 들어올 수 있습니다.
*/
function multiplyAll(first:number, ...nums:number[]): number {
  let sum = first;
  for(let i of nums){
    sum *=i;
  }
  return sum;
}
console.log(multiplyAll(2)); // 2
console.log(multiplyAll(2, 2)); // 4
console.log(multiplyAll(2, 2, 2)); // 8
console.log(multiplyAll(2, 2, 2, 2)); // 16
console.log(multiplyAll(2, 2, 2, 2, 2)); // 32
//...

/*
    실습문제 7) 다음 조건에 맞는 함수를 작성하시오

    handleValue함수는 string,number,boolean타입을 매개변수로 받습니다
    handleValue함수는 전달받은 타입에 따라 분기하여 각기 다른 내용이 출력됩니다.
    string이 전달된 경우 : '문자열입니다' 출력
    number가 전달된 경우 : '숫자입니다'출력
    boolean이 전달된 경우 : '불린입니다'출력
    그 외의 타입이 들어오는 경우 assertNever함수를 호출하여 타입을 검사합니다.
    assertNever는 타입가드를 위한 보조함수로 절대 호출되지 않아야 하며, 호출시 에러를 발생시켜야 합니다. 
*/
type Types = string|number|boolean ;
function handleValue(value:Types) {
    if(typeof value === 'string') console.log('문자열');
    else if(typeof value === 'number') console.log('정수');
    else if(typeof value === 'boolean') console.log('불린');
    else assertNever(value);
}

function assertNever(value : never){
    throw new Error(`허용하지 않는 자료형입니다 ${value}`);
}

//실습문제 8) 다음 조건을 만족하는 함수를 작성하시오

type FnType = ([first, ...rest]:[number, ...number[]]) => number[];
const fn:FnType  = ([first, ...rest]) => {
    return rest.map(i => i+first);
}
//fn([]) // 컴파일에러
console.log(fn([1])); // []
console.log(fn([1,2])); // [3]
console.log(fn([1,2,3])); // [3,4]
console.log(fn([1,2,3,4])); // [3,4,5]

export default fn;