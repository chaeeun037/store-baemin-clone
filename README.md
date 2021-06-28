# 배민문방구 클론 프로젝트



<img src="https://store.baemin.com/data/skin/front/udweb_C/img/banner/7d4c23c41296ae46ffff9e8da1350b37_56349.png" />



> 쓸데없는 거 팔아요! 재미있게 사는 [배민문방구](store.baemin.com ) by.배민.





## 개발 목표

* 배민문방구 메인 화면을 클론하여 개발한다.
* HTML, CSS로 레이아웃을 동일하게 만들어야 한다. 





## 사용 기술

<img src="https://img.shields.io/badge/-HTML-%23E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/-CSS-%231572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/-javascript-%23F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>





## 개발 기간

2021.06.26 - 





## 학습 내용

* UI를 개발하는데 필요한 적절한 HTML 태그를 선택하고 사용한다.
* 시맨틱 태그를 이해하고 사용한다.
* CSS의 position, float, flex 속성을 사용해서 화면 레이아웃을 구성한다.
* CSS의 캐스캐이딩, 상속, box-model 개념을 이해한다.





## 요구사항 분석

* 상단 메뉴 표시
* 스크롤 내렸을 때 일부 header 요소에 display fixed 속성 추가
* 검색어 input 표시
* 메뉴 리스트 표시
* 슬라이드 배너 구현
* 컨텐츠 표시
* footer 표시
* 문서 타이틀 배민문방구로 설정
* 파비콘 설정





## UI 설계

<img src="https://github.com/chaeeun037/store-baemin-clone/edit/main/UI%EC%84%A4%EA%B3%84.png" />

* 시맨틱 태그 사용

  * header

  * nav
  * section
  * article
  * footer



* 코드 재사용성
  * 공통되는 부분 코드 재사용하게 개발
    * article - 잘나가요, 새로 나왔어요, 지금은 할인 중



* 확장성
  * 단순 퍼블리싱이 아닌 이후에 데이터 바인딩할 때 UI는 수정하지 않아도 되게끔 개발
    * 데이터에 따라서 태그 표기
    * 가격 number로 표기
    * 할인 가격 %에 따라 계산 후 표기





## 개발 과정

* 요구사항 분석
* UI 설계
* 데이터 작업
* 데이터 렌더링(html, js)
* css 작업





## 메모

* 가로 방향 레이아웃
  * width 100% -> width 1200px, margin 0 auto



* div 태그가 아닌 적절한 html 태그 사용
  * a, p, ul, li, dl, dt, dd 등



* 존재 이유를 알 수 없는 dom 요소

  * 전체를 덮고있는 요소?

  

* 뭔가 래핑되어있는 dom tree 구성

  * 셀렉터로 선택해도 숨겨져있는 느낌?
  * green, new 등 태그 요소 선택 해보아도 숨겨져있어서 선택을 할 수가 없다!!



* 쌓이는 순서를 모르겠는 dom 요소
* 중간에 갑자기 script가 등장..?
* 메인 페이지 goods 이미지 저장 권한이 없음
* ::after, before 등을 자주 사용한다.
* 



* 반복되는 item 구성
  * ul -> li -> a



* 레이아웃 구성할 때 display flex와 inline-block 혼용



* 반복되는 텍스트
  * dl, dt, dd 사용





## TODO LIST

* montserrat 폰트 적용
* 슬라이드 배너 구현
* search input, icon 구현
* green, new, sale tag 구현
* 세일 가격 구현
* footer info dl, dt, dd 로 수정
* 세세한 UI 수정
* 코드 리팩토링
