//---------------------------
//산술 연산자 (+ - * /)

import { setUncaughtExceptionCaptureCallback } from "process"

// console.log(1 + 2)
// console.log(5 - 2)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5)

//--------------------------

//할당연산자

// let a = 2
// // a = a + 1

// // a += 1
// // a -= 1
// // a *= 1
// // a /= 1
// // a %= 1


// console.log(a)

//-----------------------------

//비교연산자

// const a = 13
// const b = 13

// // console.log(a === b)

// //  ===   일치 연산자임

// function isEqual(x, y) {
//     return x === y
// }

// console.log(isEqual(1,1))
// console.log(isEqual(1,'2'))


// console.log(a !== b)

// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)


// =(equal)기호는 꺽쇠 괄호보다 뒤에 위치 해야만한다.



//--------------------------------------------

//논리연산자 &&(and)  , ||(or) , !(Not 부정연산자)

// const a = 1 === 123
// const b = 'AB' === 'ABC'
// const c = false


// // console.log(a)
// // console.log(b)
// // console.log(c)

// // console.log(a && b && c)
// // console.log('&& :',a && b && c) 


// // console.log('|| :',a || b || c) 
// // console.log('! :',!a) 


// //=========================================

// //삼항연산자(ternary operator)

// const a = 1 < 2

// if (a) {
//     console.log('참')
// }else{
//     console.log('거짓')
// }

// //위 내용을 삼항연산자로 사용하면 ..코드를 줄이기위해 많이 사용함.

// console.log(a ? '참':'거짓')


//if 조건문

// import random from './getRandom'  //뒤 (.js) 확장자는 생략 가능.

// // console.log(random())

// const a = random()

// if (a === 0){
//     console.log('a is 0')
// }else if(a === 2){
//     console.log('a is 2')
// }else if( a === 4){
//     console.log('a is 4')
// }else{
//     console.log('rest ...')
// }


//swich문

// switch(a){
//     case 0:
//         console.log('a is 0')
//         break
//     case 2:
//         console.log('a is 2')
//         break
//     case 4:
//         console.log('a is 4')
//         break
//     case 6:
//         console.log('a is 6')
//         break
//     default:
//         console.log('rest...')
// }

//조건의 내용이 어떠한 값으로 딱 떨어지는 상황이라면 switch 가 적합하지않을까 합니다


//반복문. for 
//for(시작조건(초기값); 종료조건; 변화조건){}
//참고 defer 속성은 html을 전부 이해하고 그다음 .js를 인식해라 라는 문구.

// const ulEl = document.querySelector('ul')

// for (let i=0; i < 10; i += 1){
//     const li = document.createElement('li')
//     li.textContent = `list-${i + 1}`
//     if ((i+1) % 2 === 0){
//         li.addEventListener('click', function(){
//             console.log(li.textContent)
//         })
//     }
//     ulEl.appendChild(li)
// }


//=======================================================================
//변수 유효범위
//var, let, const
//var는 함수 레벨의 유효범위가 된다,
//let, const 는 블록레벨의 유효범위

// function scope(){
    
//     if (true){        
//         var a = 123
//         console.log(a)
//     }   
// }
 
// scope()

//형변환

// const a = 1
// const b = '1'

// console.log(a == b)
// == 두개는 동등연산자인데 비교적 안쓰는것이 좋다.
// 같음을 쓸대는  === 세게를 사용하자.




//Truthy(참과같은값)
// true, {}, [], 1,2, 'false' , -12 , '3.14' .....

//Falsy(거짓과 같은값)
//false, '', null, undefined, 0 ,-0 , NaN(Not a Number)


// if(true){
//     console.log(123)
// }

// function sum(x, y){
//     return x + y
// }
// sum(1,3)
// // 함수 이름을 직접 선언하는 함수 선언문 기명함수 function sum()  <--이렇게
// //함수 이름이 업는함수표현  익명함수 const sum = function(x,y ) <---이렇게 
// //return 키워드가 있으면 함수의 어떤값이 밖으로 반환 된다는 의미도있지만
// //함수가 return으로 인해서 종료된다는 의미도 된다.
// //ex)

// // function sum(x,y){
// //     if (x < 2){
// //         return
// //     }
// //     return x + y
// // }
 
// // console.log(sum(1,3))
// //--> undefined 가 나옴. return문에 아무것도 써있지 않음.



// // const a = sum(1, 3)
// // const b =sum(4,12)

// // console.log(sum(1,3))
// // console.log(a)
// // console.log(b)
// // console.log(a + b)

// //함수를 호출할때는 함수 호출량을 최대한 줄이는것이 시스템 메모리 양을 줄이는것이 되기때문이다.


// function sum(){
//    console.log(arguments)
//    return arguments[0] + arguments[1]
// }
 
// console.log(sum(7,3))

// //javascript 내부에서 arguments 라는 객체를 내부에서 쓸수있도록 만들어져있다.
// //함수 내부에 매개 변수가 너무 많아서 일일이 지정할수없다면 arguments를 사용하는것도 방법이다.
// //하지만 일일이 지정하는것이 좋은 방법이다,



//화살표 함수 : 기본적으로 함수를 축약형으로 만들수있다.
//만약 함수 내부에 return외 실행문이있다면 축약형으로 만들수없다.
//단순한 return문만있다면 축약형으로 가능하다

// () => {}  vs  function () {}

const double = function (x, y) {
    return x * 2
}

console.log('double:' ,double(7))

const doubleArrow = (x) => x * 2

//const doubleArrow = (x) => {
//    return x * 2
//}  이 함수를위와같이 축약할수있다.


console.log('doubleArrow', doubleArrow(7))



