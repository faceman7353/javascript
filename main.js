//---------------------------
//산술 연산자 (+ - * /)

import { continueStatement } from "babel-types"


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


//호이스팅
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상


// const a = 7

// double()

// function double(){
//     console.log(a * 2)
// }

//함수가 실행 되기전에 먼저 함수를 호출하는 방법인데 코드가 많을시 먼저 함수를 호출하는 코드로 기본적으로 함수를 추측할수있다.





//타이머 함수
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


//콜백
//함수의 인수로 사용되는 함수
//함수 안에서 인자를 함수로 받음.
//setTimeout(함수,시간)
//이때 사용되는 함수를 콜백이라 한다.

// function timeout(callback){
//     setTimeout(() => {
//         console.log('Heropy')
//         callback()
//     }, 3000)
// }

// timeout(() => {
//     console.log('Done')
// })



//함수 클래스

// const heropy = {
//     firstName: 'Heropy',
//     lastName: 'Park',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// console.log(heropy)
// console.log(heropy.getFullName)
// //이렇게 ``(백틱) 기호를 사용한다는것은 외부에서 데이터가 들어가서 표현할수있다는것을 전제.(내부 특정데이터가 보관되있다.)
// //this - heropy로 직접 서도 되지만 객체이름은 바뀔수있기때문에 그 객체를 지칭하는 this를 쓰는것이 더 권장한다. 


// const amy = {
//     firstName : 'Amy',
//     lastName: 'Clarke',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(amy.getFullName)


// const neo = {
//     firstName: 'Neo',
//     lastName:'Smith',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(neo.getFullName)

//-----------------------------------------------------------------
//위와 같은 로직의 데이터는 같은 형식의 데이터가 중복되기때문에 메모리 사용량이 많아짐.
//위 내용을 클래스로 바꾸게 되면 효율적으로 사용이 가능하다,.

// function User(first, last){
//     this.firstName = first
//     this.lastName = last
    
// }

// User.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// const heropy = new User('Heropy','Park')
// const amy = new User('Amy','Clarke')
// const neo = new User('Neo','Smith')



// console.log(heropy.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())

//위와 같이 사용하면 콘솔부분에 객체 데이터 하나가 나옴.
//이때 User는 생성자 함수 라고 한다.
//객체 데이터가 생성된다는 의미
//결국 heropy  amy  neo  -- 인스턴스 들임.
//prototype = 
//생성자 함수는  new와 함께 사용 파스칼 케이스로 앞을 대문자로 사용함.


//this
//일반 함수는 호출 위치에 따라서  this 정의
//화살표 함수는 자신이 선언된 함수 범위에서  this 정의



//==============================================================

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

// const number = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']

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


//===========================================================================================================================================
//중간 내용 집에 있음.

//=====================
//데이터의 불변성(Immutability)
//원시 데이터: String,Number,Boolean, undefined,null
//참조성 데이터: Object, Array, Function
//------------------------------------------------------------------------------------------------------------------------------------------
//|1:    1           |2:    4             |3:     7           |4:
//------------------------------------------------------------------------------------------------------------------------------------------
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

//================================================================
//얖은 복사, 깊은복사
//------------------------------------------------------------------------------------------------------------------------------------------
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






//가져오기, 내보내기

import _ from 'lodash'  //lodash  는 _ 쓰는것을 권장한다. From 'node_modules'!
import getType from './getType' //getType.js
// import {getRandom ,user as heropy} from './getRandom' //getRandom.js
import * as R from './getRandom'


console.log(_.camelCase('the hello world'))
console.log(getType([1,2,3]))
// console.log(getRandom(),getRandom())
console.log(R)

//default export  - 데이터 이름을 설정하지 않아도 됨.
//기본통로로 나가는 데이터는 이름을 지정하지 안아도되고 import할때도 이름을 바꾸어 사용해도 됨.
//기본통로는 하나의 데이터만 내보낼수있다.




//named export - 이름을 명시해야하는 export
//이름을 지정해야하는 데이터는 --
//import {getRandom} from './getRandom' //getRandom.js -- 이름을 중괄호로 묶어주어야 정상 작동
//이름이 지정되있는 데이터는 이름만 지정하면 몇개의 데이터를 내보내도 상관업다.