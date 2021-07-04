# 배민문방구 클론 프로젝트



<img src="https://store.baemin.com/data/skin/front/udweb_C/img/banner/7d4c23c41296ae46ffff9e8da1350b37_56349.png" width="50%" />



> 쓸데없는 거 팔아요! 재미있게 사는 [배민문방구](store.baemin.com ) by.배민.



## 개발 목표

* 배민문방구 메인 화면을 클론하여 개발한다.
* HTML, CSS로 레이아웃을 동일하게 만들어야 한다. 





## 사용 기술

<img src="https://img.shields.io/badge/-HTML-%23E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/-CSS-%231572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/-javascript-%23F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>





## 개발 기간

2021.06.26 - 2021.07.04





## 실행 화면
![](https://github.com/chaeeun037/store-baemin-clone/blob/2b29b6f33b69802bd0808c35b871d4cf04135128/%EC%BA%A1%EC%B2%98.JPG)
![](https://github.com/chaeeun037/store-baemin-clone/blob/2b29b6f33b69802bd0808c35b871d4cf04135128/%EC%BA%A1%EC%B2%982.JPG)
![](https://github.com/chaeeun037/store-baemin-clone/blob/2b29b6f33b69802bd0808c35b871d4cf04135128/%EC%BA%A1%EC%B2%983.JPG)






## 학습 내용

* [UI를 개발하는데 필요한 적절한 HTML 태그를 선택하고 사용한다.](https://github.com/chaeeun037/chaeeun037.github.io/blob/master/_posts/html-tag.md)
* [시맨틱 태그를 이해하고 사용한다.](https://github.com/chaeeun037/chaeeun037.github.io/blob/master/_posts/semantic-tag.md)
* [CSS의 position, float, flex 속성을 사용해서 화면 레이아웃을 구성한다.](https://github.com/chaeeun037/chaeeun037.github.io/blob/master/_posts/css-display.md)
* [CSS의 캐스캐이딩, 상속, box-model 개념을 이해한다.](https://github.com/chaeeun037/chaeeun037.github.io/blob/master/_posts/css-cascading.md)





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

<img src="https://github.com/chaeeun037/store-baemin-clone/blob/c034b276318b58edde5e035c58a293cd12eac60c/UI%EC%84%A4%EA%B3%84.png" width="30%">

* 시맨틱 태그 사용

  * header
  * nav
  * section
  * article
  * footer
  * ul
  * li
  * dl
  * dt
  * dd



* 코드 재사용성
  * 공통되는 부분 코드 재사용하게 개발
    * article - 잘나가요, 새로 나왔어요, 지금은 할인 중
    * 공통 함수로 묶어서 렌더링



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
* 슬라이드 배너 구현
* 디테일 수정
* 애니메이션 효과, 이벤트 핸들러 추가



## 기능 설명

* 검색어 입력 input 클릭 시 최근 검색어 ui 등장
  * blur 혹은 닫기 버튼 클릭시 ui 없어짐
* 메인 슬라이드 배너
  * 전환 단위 5000ms
  * 페이지네이션 클릭시 해당 이미지로 이동
* goods contents 렌더링
  * 퍼블리싱이 아닌 데이터 저장 후 뿌림
* goods 아이템 태그 구현
  * 데이터로 저장 후 뿌림
* 할인 %로 할인 가격 계산해서 ui 표시
  * 1000단위 컴마
* 모든 cursor pointer 표시
* 아이템에 마우스 올렸을 때 찜하기, 카트 아이콘 등장



## 메모

* 시맨틱 태그가 중요한 이유?
  * 인상깊었던 이유는 시각 장애인은 시맨틱 태그에 의존해서 웹페이지 UI를 인식한다는 점이었다.
    * 내용 더 찾아보기



* 디버깅 편의를 위해 serve로 서버 띄워서 개발 진행했다.

* script 태그는 body의 맨 마지막에 적었다.

  * js파일 다운로드 되고 실행될 때 css 깨지는 것을 방지하기 위해서 가장 나중에 적는다.(아마도?)

  

* 가로 방향 레이아웃
  * width 100% -> width 1200px, margin 0 auto



* div 태그가 아닌 적절한 html 태그 사용
  * a, p, ul, li, dl, dt, dd 등



* 존재 이유를 알 수 없는 dom 요소

  * 전체를 덮고있는 요소?

  

* 뭔가 래핑되어있는 dom tree 구성

  * 셀렉터로 선택해도 숨겨져있는 느낌?
  * green, new 등 태그 요소 선택 해보아도 숨겨져있어서 선택을 할 수가 없다!!
    * 이렇게 구조화하는 이유가 뭘까? 



* 쌓이는 순서를 모르겠는 dom 요소

* 중간에 갑자기 script가 등장..?

* 메인 페이지 goods 이미지 저장 권한이 없음

* ::after, before 등을 자주 사용한다.

  

* 반복되는 item 구성
  * ul -> li -> a



* 레이아웃 구성할 때 display flex와 inline-block 혼용



* 반복되는 텍스트

  * dl, dt, dd 사용

  

* 슬라이드 배너
  * Swiper  Effect fade 사용
  * 기본적인 형태의 슬라이드 배너이기 때문에 직접 구현하는 것 보다 라이브러리 사용하는 것이 간편하다고 판단했다.
  * 여러 라이브러리 중 타이머 맞추고 css 수정하면 가장 비슷할 것 같아서 선택했다.



* js로 ui element 만들고 붙일 때 코드 정리? 어떻게 해야하지?

  * appendchild, className 등 너무 많고 순서가 지저분해!

  

* footer info에 address 태그 사용

* footer info는 정적 데이터라고 판단해서 직접 퍼블리싱 진행



* input 구조가 복잡한걸로 알고있는데 어떻게 하면 구조적으로 깔끔하게 커스텀 할 수 있을까?

  * input 구조 뜯어서 공부하기?

  * 단순한 커스텀이라서 생각보다 복잡하지 않았다...!

    * input 아웃라인, 보더 없애고 border bottom 설정 

    

* 아이콘 이미지로 따올까, 아니면 매테리얼 디자인 icon을 사용할까 고민이다.



* 왜 잘나가요 부분에는 마우스 hover했을 때 찜하기, 카트가 안나올까?? 버그인가?
* html element 를 불러올 때 성능상 초기에 한번 불러오고 계속 그것을 사용하는 것이 나을까 아니면 사용할때만 불러오고 소멸시키는 것이 나을까?
* input focusout과 blur 차이는 이벤트 버블링 여부이다.

  * blur는 이벤트 버블링이 일어나지 않는다.
  * blur는 포커스를 잃은 자식만이 감지된다.

* 당연한 얘기지만 img 태그에는 자식 태그를 넣을 수 없다

* 문맥상 const 는 변할수 없는 참조, 값을 나타내기때문에 가독성과 안정성을 높여준다.





## TODO LIST

* 많이 확대했을 때 슬라이드 배너 UI가 깨진다



## 코드 리뷰

1. [라이브러리가 모두 로딩된 이후에 어플리케이션 로직 넣기](https://github.com/chaeeun037/store-baemin-clone/commit/f1e7bfe9642deb8ba053f688efa13bc23a564616)

2. [스크립트 코드 DOMContentLoaded사용](https://github.com/chaeeun037/store-baemin-clone/commit/2b29b6f33b69802bd0808c35b871d4cf04135128)

3. [js 파일 formatting 돌리기](https://github.com/chaeeun037/store-baemin-clone/commit/716904a41cb8ef8fb34e1104d8cf5782f46fbf49)

4. [js 문자열은 싱글 쿼테이션 1개로 통일하기](https://github.com/chaeeun037/store-baemin-clone/commit/9c5a07b20cbad3ad2f1bfc917bbb4d00c044e573)
5. [DOM element 만드는 helper 함수 생성해서 사용하기](https://github.com/chaeeun037/store-baemin-clone/commit/8b699ce2fbe4c87b1a7cc09f2880849673f03070)

6. [const를 쓸 수 있는곳은 모두 let 대신에 const 쓰기](https://github.com/chaeeun037/store-baemin-clone/commit/d121d7d7cda62b1a18a7ac2ee5daa35c018bf502)
