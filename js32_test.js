var list1=[6,3,40,7,2]

// 나란히 하기 ==>sort
list1.sort() //문자열 기준으로
console.log(list1)
//숫자를 나란히 하고 싶으면 a(앞), b(뒤) 견주어서
//음수나오면 a,b로 정렬
//양수나오면 b,a로 정렬
list1.sort((a,b)=>a-b)
console.log(list1)

//sort로 정렬을 하고 싶다
//리턴 값이 - 면 a를 앞에 두고
//리턴 값이 + 면 b를 앞에 둔다

//문자열 정렬(알파벳 순서대로)
list2 = ['qwer', 'asdf', 'lk'];
list2.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});
console.log(list2); // 출력: ["asdf", "lk", "qwer"]

//대소문자 안 나눔
list2 = ['Fwer', 'Asdf', 'lk'];
list2.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});
console.log(list2); // 출력: ['Asdf', 'Fwer', 'lk']

list3=['고구려','백제','신라','가야']
list3.sort((a, b) => a.localeCompare(b, 'ko'));
console.log(list3); // 출력: ["가야", "고구려", "백제", "신라"]

objList=[
  {'id':0,'name':'caesar'},
  {'id':2,'name':'newton'},
  {'id':1,'name':'hamilton'}
]
//객체들 정렬
var objList3= objList.sort((a,b) => {
  //해당 지역의 언어 순서로 정렬 localCompare
  return a['name'].localeCompare(b['name']);
})
console.log(objList3)

//filter : 내가 바라는 값들만 남김
//아이디가 둘 또는 더 큰 객체만 남기기
var objList2 = objList.filter((e) =>{
  return e['id']>=2;
})
console.log(objList2)

// map : 모두 바꿈(리스트 안에 들어있는 모든 엘레멘트들을 retur값으로 바꿈)
var dollars=[1,2,3,4,5,6,7,8,9,10];
var wons=dollars.map(e=>{
  return ((e*1233.60).toFixed(2));
})
console.log(dollars)
console.log(wons)

//forEach : 리스트의 하나하나의 엘레멘트들을 나눠서 리턴해주는 반복문
dollars.forEach((e) => {
  console.log(e)//e에 엘레멘트들이 하나씩 들어감
  //길이계산을 알아서 해줌
})


