//---------------------------
# 산술 연산자 (+ - * /)

```plaintext
import { setUncaughtExceptionCaptureCallback } from "process"

// console.log(1 + 2)
// console.log(5 - 2)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5)

//--------------------------
```


# 할당연산자

```plaintext
// let a = 2
// // a = a + 1

// // a += 1
// // a -= 1
// // a *= 1
// // a /= 1
// // a %= 1


// console.log(a)

//-----------------------------
```


# 비교연산자


```plaintext
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


```
//--------------------------------------------

# 논리연산자 &&(and)  , ||(or) , !(Not 부정연산자)

```plaintext
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
```


# 삼항연산자(ternary operator)

```plaintext
// const a = 1 < 2

// if (a) {
//     console.log('참')
// }else{
//     console.log('거짓')
// }

// //위 내용을 삼항연산자로 사용하면 ..코드를 줄이기위해 많이 사용함.

// console.log(a ? '참':'거짓')

```


# if 조건문
```plaintext

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
```

# swich문

```plaintext
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

```
# 반복문. for 

```plaintext
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

```
# 변수 유효범위

```plaintext
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

```

# 형변환

```plaintext

```plaintext
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

```


# 함수 복습

```plaintext
function sum(x, y){
    return x + y
}
sum(1,3)
// 함수 이름을 직접 선언하는 함수 선언문 기명함수 function sum()  <--이렇게
//함수 이름이 업는함수표현  익명함수 const sum = function(x,y ) <---이렇게 
//return 키워드가 있으면 함수의 어떤값이 밖으로 반환 된다는 의미도있지만
//함수가 return으로 인해서 종료된다는 의미도 된다.
//ex)

// function sum(x,y){
//     if (x < 2){
//         return
//     }
//     return x + y
// }
 
// console.log(sum(1,3))
//--> undefined 가 나옴. return문에 아무것도 써있지 않음.



// const a = sum(1, 3)
// const b =sum(4,12)

// console.log(sum(1,3))
// console.log(a)
// console.log(b)
// console.log(a + b)

//함수를 호출할때는 함수 호출량을 최대한 줄이는것이 시스템 메모리 양을 줄이는것이 되기때문이다.


function sum(){
   console.log(arguments)
   return arguments[0] + arguments[1]
}
 
console.log(sum(7,3))

//javascript 내부에서 arguments 라는 객체를 내부에서 쓸수있도록 만들어져있다.
//함수 내부에 매개 변수가 너무 많아서 일일이 지정할수없다면 arguments를 사용하는것도 방법이다.
//하지만 일일이 지정하는것이 좋은 방법이다

```


# 화살표 함수

```plaintext
//화살표 함수 : 기본적으로 함수를 축약형으로 만들수있다.
//만약 함수 내부에 return외 실행문이있다면 축약형으로 만들수없다.
//단순한 return문만있다면 축약형으로 가능하다

// () => {}  vs  function () {}

// const double = function (x, y) {
//     return x * 2
// }

// console.log('double:' ,double(7))

// const doubleArrow = (x) => x * 2

//const doubleArrow = (x) => {
//    return x * 2
//}  이 함수를위와같이 축약할수있다.
//실행문에 화살표 함수를 썻을때는 {중괄호}사용하면 안됨.
//만약 중괄호를 사용하고 싶을때는 ({}) 이렇게 사용하면된다



// console.log('doubleArrow', doubleArrow(7))

```

# 즉시 실행함수
```plaintext
// //즉시 실행 함수
// // IIFE, Immediately- invoked function expression

// const a = 7
// function double(){
//     console.log(a * 2)
// }

// double();
// //함수를 하나 만들었는데 밑에서 한번 실행되면 더이상 쓸일이 없다라고 한다면 
// //굳이 함수의 이름을 만들필요성이 없을때



// (function double(){
//     console.log(a * 2)
// })()  
// //위와 같이 소괄호로 한번 묶으면 즉시 실행 함수가 된다.
// //즉시 실행 함수를 사용하려면 ; (세미 콜론을 사용해라.)
// // 즉시실행 함수는 소괄호를 이중으로 작성하는것(x)()   ---x는 함수
// //다른 하나는 (x()) 소괄호 내부에 소괄호를 하나 더 넣는것.
```


# 타이머 함수
```plaintext

//setTimeout(함수,시간): 일정 시간 후 함수 실행
//setInterval(함수,시간): 시간 간격마다 함수 실행
//clearTimeout(): 설정된 Timeout함수를 종료
//clearInterval(): 설정된 Interval 함수를 종료


//setTimeout
//-------------------------------------
// const timer = setTimeout(() => {
//     console.log('Heropy')
// }, 3000)


// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     clearTimeout(timer)
// })

//-------------------------------------



//setInterval

// const timer = setInterval(() => {
//     console.log('Heropy')
// }, 3000)


// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     clearInterval(timer)
// })

//-------------------------------------

```


# 콜백

```plaintext

//함수의 인수로 사용되는 함수

//setTimeout(함수,시간)
//이때 사용되는 함수를 콜백이라 한다.

function timeout(callback){
    setTimeout(() => {
        console.log('Heropy')
        callback()
    }, 3000)
}

timeout(() => {
    console.log('Done')
})

```
***
# 중간 내용 따로 있음
***


# 데이터의 불변성(Immutability)

#### 원시 데이터: String,Number,Boolean, undefined,null
#### 참조성 데이터: Object, Array, Function

```plaintext
----------------------------------------------------------------
//|1:    1           |2:    4             |3:     7           |4:
//--------------------------------------------------------------------------
//메모리 내용(위에)
//원시형 데이터는 기본적인 성질이 데이터가 변하지않는 성질을 가지고있다.
//참조형 데이터는 생긴것이 같이도 같은 데이터가 아닐수도 잇다라는것을 참고하기바람.




//--------------------------------------원시형 데이터 예
// let a = 1  //1번째 메모리 주소를 지칭
// let b = 4  //2번째 메모리 주소를 지칭

// console.log(a, b, a === b)
// b = a  //메모리 주소가 같기때문에 TRUE
// console.log(a, b, a === b)
// a = 7
// console.log(a, b, a === b)
// let c = 1
// console.log(b,c,  b === c)

// let e = 9
// let f = 9

// console.log(e, f, e === f)

//--------------------------------------참조형 데이터 예
//------------------------------------------------------------------------------------------------------------------------------------------
//|1:    {k: 1}     |2:    {k: 1}        |3:     7           |4:
//------------------------------------------------------------------------------------------------------------------------------------------
//1과2번 메모리 위치가 다르다.
//참조형 데이터는 불변구조가 아니다.
// let a = {k : 1}  //1번째 메모리 주소를 지칭
// let b = {k : 1}   //2번째 메모리 주소를 지칭

// console.log(a, b, a === b)
// a.k = 7 //메모리 주소가 같기때문에 TRUE
// b = a

// console.log(a, b, a === b)
// a.k = 2
// console.log(a, b, a === b)
// let c = b
// console.log(a,b,c,  a === c)
// a.k = 9
// console.log(a,b,c,  a === c)


//만약 변수의 데이터를 구분해서 관리하고싶을때는
//복사라는 개념 사용
//복사 - 얕은 복사  - 겉에 표면만 복사
      // -깊은 복사 - 내부에 있는 모든 관계까지 복사

```




# 얖은 복사, 깊은복사

```plaintext
------------------------------------------------------------------------------------------------------------------------------------------
//|1:    1           |2:    4             |3:     7           |4:
//------------------------------------------------------------------------------------------------------------------------------------------

// import _ from 'lodash'
// //객체 이름을 lodash라고 써도 되지만 
// //일반적으로는 _ 이렇게 사용하는것을 권장

// const user = {
//         name:'Heropy',
//         age:85,
//         email:['thesecon@gmail.com']

// }

// const copyUser = Object.assign({}, user)  //copy data 얕은 복사
// const copyUser = {...user}  //전개연산자를 사용해도 됨.
// const copyUser = _.cloneDeep(user) //깊은 복제  --내부 모든 데이터를 복사해서 메모리 주소가 다르다.

// console.log(copyUser === user) 

// user.age = 22
// console.log('user',user)
// console.log('copyUser',copyUser)

// console.log('--------')
// console.log('--------')

// user.email.push('neo@zillinks.com')
// console.log(user.email === copyUser.email)
// console.log('user',user)
// console.log('copyUser',copyUser)
 
 ```

# 가져오기, 내보내기

```plaintext

import _ from 'lodash'  //lodash  는 _ 쓰는것을 권장한다. From 'node_modules'!
import getType from './getType' //getType.js
// import {getRandom ,user as heropy} from './getRandom' //getRandom.js
import * as R from './getRandom'


console.log(_.camelCase('the hello world'))
console.log(getType([1,2,3]))
// console.log(getRandom(),getRandom())
console.log(R)


---
//default export  - 데이터 이름을 설정하지 않아도 됨.
//기본통로로 나가는 데이터는 이름을 지정하지 안아도되고 import할때도 이름을 바꾸어 사용해도 됨.
//기본통로는 하나의 데이터만 내보낼수있다.


---

//named export - 이름을 명시해야하는 export
//이름을 지정해야하는 데이터는 --
//import {getRandom} from './getRandom' //getRandom.js -- 이름을 중괄호로 묶어주어야 정상 작동
//이름이 지정되있는 데이터는 이름만 지정하면 몇개의 데이터를 내보내도 상관업다.

```


# Lodash

```plaintext
// import _ from 'lodash'
// //default로나오는 데이터는 이름을 자유자재로 바꿀수있다.


// const usersA = [
//         { userId : '1', name: 'Heropy' },
//         { userId : '2', name: 'Neo' }
// ]

// const usersB = [
//         { userId : '1', name: 'Heropy' },
//         { userId : '3', name: 'Amy' }
// ]

// const usersC = usersA.concat(usersB)  //병합   usersA 데이터와  병합할 데이터 usersB를 합쳐서 usersC를 만듬
// console.log('concat', usersC)
// console.log('uniqBy', _.uniqBy(usersC, 'userId'))
//uniqBy(중복된 데이터배열, 중복을 구분할 고유한 속성)
//uniqBy(usersC, 'userId')) 이렇게
//하나의 배열데이터에서 어떤 특정한 속성의 이름으로 고유화를 만들어줌.
//배열데이터가 하나일때


// const usersD = _.unionBy(usersA, usersB, 'userId')
// console.log('unionBy', usersD)

//unionBy는 A와 B를 합치기 전이라면 unionBy를 사용하는것도 방법이다.
//unionBy(배열A,배열B, 고유값으로 사용할 속성이름)
//합치기전 여러개의 배열 데이터를 적어주고 마지막에 합칠때 고유화 작업을 할때 사용.
//배열데이터가 여러개일때


//=============================================================


import _ from 'lodash'
const users = [
        { userId : '1', name: 'Heropy' },
        { userId : '2', name: 'Neo' },
        { userId : '3', name: 'Amy' },
        { userId : '4', name: 'Evan' },
        { userId : '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name: 'Amy' })
//find-무언가 찾을것인데. users라는 배열에서  문자 데이터 { name : 'Amy'} 를 찾겠다 라고 선언함.
const foundUserIndex = _.findIndex(users, { name: 'Amy' } )
//해당 객체의 인덱스만 반환.

console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name: 'HEROPY'})
console.log(users)

//users 배열 데이터에서 'HEROPY'라는 데이터를 지워라 라는의미.


```