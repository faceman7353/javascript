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



# Json데이터 활용하기

```plaintext
//JSON데이터는 문자데이터이다.
//stringify - 자바스크립트 파일내부에서 어떤 특정한 데이터를 
//            JSON의 형태로 문자 데이터화 시켜주는 메소드이다.(JSON 화시킴)
//최대한 경량화 시켜야하는 데이터
//JSON파일이 자바스크립트 파일로 되려면 JSON.parse() 메소드를 사용하면 됨

// import myData from './myData.json'

// console.log(myData)

// const user = {
//         name:"heropy",
//         age : 85,
//         email : 
//         ['thesecon@gmail.com',
//         'neo@zillinks.com']

// }

// console.log('user', user)

// const str = JSON.stringify(user)
// console.log('str',str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// console.log('obj', obj)

//======================================================================
```

# local storage와  session storage
```plaintext

//local storage mdn 검색

// const user = {
//         name:"heropy",
//         age : 85,
//         email : [
//         'thesecon@gmail.com',
//         'neo@zillinks.com'
//         ]
// }

// const str = localStorage.getItem('user')
// const obj= JSON.parse(str)
// obj.age = '22'
// console.log(obj)
// localStorage.setItem('user',JSON.setItem(obj))

//위와 같은 JSON 은 원시적인 방법이어서  이것을   lodash 라이브러리로 사용할수있는 방법
//google 검색 - lowdb 검색

//=======================================================================

```



# omdbapi

```plaintext

//영화 데이터를 요청하고 그것을 받아서 main.js에서 출력해보는 것을 해보기
//쿼리 스트링
//Query(검색으로 의미) String(문자)
//구조
//주소?속성=값&속성=값&속성=값
//querystring의 값을 제데로 실행해줄수있는 패키지가있는데 
//axios임(http요청을 처리해주는 자바스크립트 패키지)

// import axios from "axios"

// function fetchMovies(){
//         axios
//         .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
//         .then(res => {
//                 console.log(res)
//                 const h1El = document.querySelector('h1')
//                 const imgEl = document.querySelector('img')
//                 h1El.textContent = res.data.Search[0].Title
//                 imgEl.src = res.data.Search[0].Poster

//         })
// }

// fetchMovies()

```
# 기타 내용들
---

```plaintext


// 구글 검색 String mdn


//JS  데이터
//javascript는 데이터를 다루는 추가적인 명령어가있다.
//String
//number
//Boolean
//undefined
//Null
//Array
//Object:{}

// const result = 'Hello World!'.indexOf('Heropy')
// console.log(result)


//String.prototype.indexOf()
//string타입에 prototype으로 지정된 메소드는 언제든지 문자 뒤에 붙여서 사용할수있다


// const str = '0123'

// console.log(str,length)   --4

 
// const str = 'Hello World'
// console.log(str.indexOf('Heropy') !== -1)

// const str = 'Hello World'
// console.log(str.slice(6,11))  //slice는 어디에서 시작해서 어디까지 몇번째의 직전까지 잘라낼것인가?


// const str = 'Hello World'
// console.log(str.replace('World', 'Heropy'))  //replace 함수는 첫번째 인수를 두번째 인수로 교체


// const str = 'Hello World'
// console.log(str.replace('World', ''))  //replace 함수는 첫번째 인수를 두번째 인수로 교체



// const str = 'thesecon@gmail.com'
// console.log(str.match(/.+(?=@)/)[0])  //정규표현식
                      //골뱅이 기호 앞에 있는 부분을 출력해주세요 라는의미.
                      //=@ => @기호를 기준으로 앞쪽에 일치.
                      //. 이라는것은 이미 한글자를 의미.
                      //+ 최대한 많이 라는 의미.
                      //match라는 메소드는 정규표현식 사용에 많이 사용함.

// const str = '     Hello World     '
// console.log(str.trim())
//앞에서 시작되는 모든 공백 문자를 제거하고
//뒤에서 시작되는 모든 공백 문자를 제거한다.


//============================================================

// const pi = 3.1415926544839274
// console.log(pi)


// const str = pi.toFixed(2)  //메소드 호출될때 인수로 자리수를 몇째자리까지 호출할것인가라는 의미.
// console.log(str)
// console.log(typeof str)


// const integer = parseInt(str)  //정수 부분 출력
// const float = parseFloat(str) //소수자리 부분까지 출력
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)



//Math

//math mdn 검색

// console.log('abs: ' , Math.abs(-12))

// console.log('min: ' , Math.min(2,8))

// console.log('max: ' , Math.max(2,8))

// console.log('ceil: ' , Math.ceil(3.14))  //올림

// console.log('floor: ' , Math.floor(3.14)) //내림

// console.log('round: ' , Math.round(3.14))  //반올림

// console.log('random: ' , Math.random()) 



//배열 Array
//Array mdn검색
// .length



// const number = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']   //<---배열안에 요소들을 element라고 한다.
//  // index ---->   0         1          2

// console.log(number.length)
// console.log(fruits.length)
// console.log([1,2].length)

// console.log([].length)  //배열의 내용이 비어있다는 의미.



//.concat

// const number = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']   //<---배열안에 요소들을 element라고 한다.
//  // index ---->   0         1          2

// console.log(number.concat(fruits))  
// console.log(number)
// console.log(fruits)


//.concat()메소드는 두개의 배열데이터를 병합 해서 새로운 배열데이터를 반환 해주는 메소드
//원본의 데이터는 수정되지 않는다.그대로임.


//.forEach()

// const number = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']   //<---배열안에 요소들을 element라고 한다.
//  // index ---->   0         1          2


//  fruits.forEach(function(frut, index, array){
//      console.log(element, index, array)
//  })


 //element : 각각의 배열의 이름이 들어감.
 //index  배열의 개수만큼 index가 늘어남,
 //array는 배열 자체임.
 //array부분은 잘 사용하지 않음.
 //index부분은 i로 사용함.
//다시 정리하면
//forEach는 배열데이터의 아이템의 개수만큼 특정한 콜백함수를 
//반복적으로 실행하는 함수. 



//.map()


// const number = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']   //<---배열안에 요소들을 element라고 한다.
//  // index ---->   0         1          2



// const a = fruits.forEach(function(fruit, index){
//     console.log(`${fruit}-${index}`)
// })

// const a = fruits.forEach((fruit, index) => {
//     console.log(`${fruit}-${index}`)
// })
//위 화살표 함수


//fruit - 반복되는 아이템
//index - 반복되는 숫자


// console.log(a)

// const b = fruits.map(function(fruit, index){
//     // return `${fruit}-${index}`
//     return{
//         id:index,
//         name:fruit
//     }
// })

// console.log(b)


// const b = fruits.map((fruit, index) => ({
        //         id:index,
        //         name:fruit
        //     
//    
// }))
//화살표 함수




//forEach = item의 개수 만큼 callback함수를 반복하는데 따로 반환되는 값은 없다.
//map = item의 개수 만큼 callback함수를 반복하는데 return으로 반환 되는값을 새로운 배열로 만들어 사용한다.

//일반 함수를 쓸때와 화살표 함수를 쓸대의 차이점은 내부에 this가 있느냐인데
//this가 없다면 일반 함수를 쓰던 화살표를 쓰던 차이없다.
//일반 함수

//-===================================================
//const a = fruits.forEach(function(fruit, index){
//     console.log(`${fruit}-${index}`)
// })

//-===================================================

//화살표 함수
//-===================================================
//const a = fruits.forEach((fruit, index) => {
//     console.log(`${fruit}-${index}`)
// })

//-===================================================
//매개 변수가 두개 이기때문에 소괄호는 지울수없다.








//========================================================
//.filter()

// const number = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']


// const a = number.map(number => {
//     return number < 3
// })
//화살표 함수는 return키워드에 하나의 실행문만 있을때
//.map(number => number < 3)    <---이렇게 바꿀수있다.


// console.log(a)



// const b = number.filter(number => {
//     return number < 3
// })

//const b = number.filter(number => number < 3)  <-이렇게 바꿀수있다.

// console.log(b)
 
// console.log(number)
//.filter() 라는 메소드는 number 배열에 true인 것만 가지고와서 새로운 배열을 만듬.


//====================================================================

//find(), findIndex()

// const number = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']


// const a = fruits.find(fruit => {
//     return /^B/.test(fruit)    //B로 시작하는 문자열을의미 
// })
// //정규표현식 - ^B  -대문자B로 시작한다는 의미.
// console.log(a)
//위 콜백 함수를 간소화 하면 
//===========================
// const a = fruits.find(fruit => /^B/.test(fruit))    //B로 시작하는 문자열을의미 )



//===============================


// const b = fruits.findIndex(fruit => {
//     return /^B/.test(fruit)    //B로 시작하는 문자열을의미 
// })
// //정규표현식 - ^B  -대문자B로 시작한다는 의미.
// console.log(b)

//위 콜백 함수를 간소화 하면 
//===========================

// const b = fruits.findIndex(fruit => /^B/.test(fruit))   //B로 시작하는 문자열을의미 


//===========================


//.includes()

// const number = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = number.includes(3)
// console.log(a)

// const b = fruits.includes('heropy')
// console.log(b)




//.push(), .unshift()
//원본 수정됨 주의!

// const number = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// number.push(5)
// console.log(number)
//5라는 매개 변수를 추가함.(원본 수정됨)
//배열 데이터의 가장 뒤에 밀어넣기하여 특정한 데이터를  item 으로 삽입해 주는 메소드다,.ㄷ 


// number.unshift(0)
// console.log(number)
//배열데이터의 가장 앞에 특정한 데이터를  item 으로 삽입해 주는 메소드다,




//.reverse()
//원본 수정됨 주의!

// const number = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// number.reverse()
// fruits.reverse()


// console.log(number)
// console.log(fruits)


//.splice()
//원본 수정됨 주의!

const number = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']

// number.splice(2, 1)     //<-----.splice(index, 지울 개수)
// console.log(number)
// console.log(number.length)

//splice는 특정한 인덱스번호로 item을 지울려는 메소드.
//number.splice(2, 0, 999)    ---> 이것은 index 2번에 아무것도 지우지 말고  999라는 값을 끼워 넣어라 라는 의미.
//number.splice(2, 1, 999)  --> index 2번에 해당하는 item을 지우고  999 를 그 자리에 끼워 넣어라.
//

// fruits.splice(2, 0, 'Orange')
// console.log(fruits)





//===================================================================
//object mdn 검색
//객체

// const userAge = {
//     //key:value
//     name:'Heropy',
//     age:85
// }

// const userEmail = {
//     name:'Heropy',
//     email: 'thesecon@gmail.com'
// }


// const target = Object.assign({}, userAge,userEmail)
//만약 userAge와 userEmail을 합쳐서 하나의 객체로 만들고 싶을때는?
//Object.assign({}, userAge, userEmail)   <--이렇게 하면됨.
//이렇게 하면 원본 데이터는 손상되지 않는다.
//object.assign 메소드는 데이터를 복사하는데도 쓰일수있다는것을 참고.



// console.log(target)
// console.log(userAge)
// console.log(target===userAge)


///javascript의 불변성 가변성이있는데 그것은 나중 수업시간에..

// const a = { k : 123 }
// const b = { k : 123 }
// console.log(a === b)
//생긴게 똑같다고 같을수는 없다.


//=========================================
//keys

// const user = {
//     //key:value
//     name:'Heropy',
//     age:85,
//     email:'thesecon@gmail.com'
// }

// const keys = Object.keys(user)
// console.log(keys)
// //key만 나옴.
// //{name,age,email}

// console.log(user['email'])


// const values = keys.map(key => user[key])
// console.log(values)


```

# node.js 관련 기본 사항들

---
```plaintext

자바스크립트 실행 환경
node.js,   browser


Node.js

Node.js는 Chrome V8 Javascript 엔진으로 만들어진(빌드된) Javascript 런타임
런타임 - 어떤 프로그래밍 언어가 동작하는 환경.

javascript  가 동작할수있는 환경
javascript는 프로그래밍 언어

 
Node.js가 깔린 컴퓨터
Chrome 같은 웹 브라우저


Node.js - 웹페이지를 개발하기 위해서 약간의 도움을 받기 위한 프로그램5ㅅ

웹페이지를 개발할시 html, css, javasctip만으로 개발할수있는데 비효율적
그래서 개인의 컴퓨터에  node.js 를 포함한 라이브러리를 설치후 html,css,javascript 로 변환하여
사용하여야한다.
변환작업을 만들어주어야한다.

버전 
LTS - 안정적인 버전
nvm - node.js version manager
nvm - https://github.com/creationix/nvm
       - https://github.com/coreybutler/nvm-windows

n - https://github.com/tj/n

Browser - 크롬 사용하면됨.



node.js를 설치 했으니 이제 npm을 사용할수있다.
npm도 여러 라이브러리를 설치해야만 그 안의 생태계를 사용가능하기때문에 
라이브러리를 설치해보자

>npm init -y
생태계 확인 됨.
javascript를 사용하겠다 라는의미.
git init도 사용하기전 먼저 선언을 하는것처럼 
npm init -y 또한 선언하는것임.

그렇게 되면 package.json파일이 생성됨.


>npm install pacel-bundler -D    <---------pacel-bundler이것은 라이브러리 중하나.
"devDependencies": {
    "parcel-bundler": "^1.12.5"
--> parcel-bundler는 개발하는 용도로만 사용하기때문에 -D를 붙여여한다.
> npm install parcel-bundler -D  (또는--save-dev)  또는 
>npm i parcel-bundler -D  (또는--save-dev)



>npm install  lodash   <------------ lodash도 라이브러리
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}

-D를 붙이는것과 안붙이는것의 차이는 

-D를 붙이는것 - 개발용 의존성 패키지 설치
==>개발할때만 필요하고 웹브라우저에서 사용할때는 필요하지 않다는 개념
(-D , --sava-dev를 축약)

-D를 붙이지 않는것 - 일반 의존성 설치
==>웹 브라우저에서 동작할수도 잇다는것을 전제함,.

그렇게 구분하는것을 의미



만약 node_modules폴더를 지웠더라도 
내부에서 
>npm install 또는 npm i 라고 치면 다시 설치되어 나옴.

======================================

번들- 우리가 프로젝트 개발에 사용한 여러 모듈을 하나로 묶어내는 작업을 말합니다.


유의적 버전(의미 부여)
(semantic versioning ,Semver)

node --version
> ^12.14.1
^major.minor.Patch
^ - major 버전 안에서 가장 최신 버전으로 업데이트 가능
major  - 기존 버전과 호환되지않는 새로운 버전.
minor - 기존 버전ㄴ과 호환되는 새로운 기능이 추가된 버전.
patch - 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전.

라이브러리 버전 설치 및 업데이트

>npm install lodash@버전
>npm update lodash

이렇게 하면되고

만약 package.json 파일에 

  "devDependencies": {
    "parcel-bundler": "^1.12.5"
  },
  "dependencies": {
    "lodash": "^4.17.21"



>npm run build 
위 명령어를 통해서 . cach , dist, node.modules 폴더들을 완벽하게 재현할수있다.
그래서 git으로 버전관리하지않아도된다.

따로 버전 관리 하지않겠다 라고 하고 
.gitignore 라는 파일을 만든다,


========================================

npm 설치후 parcel-bundler 설치
package.json 파일 수정

 "scripts": {
    "dev":"parcel index.html",
    "build":"parcel build index.html"
  },

위와 같이 수정후

>npm run dev
하게되면 터미널에서 서버가 열림.

----------------------------------------------------------------------------

타입 스크립트 컴파일러 설치

npm / visual studio plugin

npm i typesctipt -g  -- 글로벌로 전역 사용
node_modules/.bin/tsc
tsc source.ts

타입스크립트 컴파일러 명령어
폴더 안에 있다면.
tsc 특정파일

tsc -w  -- watch모드
=파일이 수정됬을때마다 컴파일됨.

-visual studio plugin설치
visual studio 2017/2015 업데이트 3이후로는 디폴트로 설치되있음.
아님 설치



typescript 특정 파일에 설치
폴더 만들고
폴더 내부 진입.
npm --init   ---tsconfig.json 파일이 생성됨.
npm i typescript

그리고 컴파일할때 글로벌로 설치하면 tsc만 하면 되었는데
특정 폴더안에서 실행하면 
node_modules/.bin/tsc  라고 하거나
node_modules/typescript/bin/tsc 라고 해야함.
최근은
npx tsc --init 으로 해도 됨.

npx 사용하게되면.
이제는 
npx tsc 치고
문제없으면 .js 파일이 생성됨. 
node  파일이름.js 입력하면 됨.






```