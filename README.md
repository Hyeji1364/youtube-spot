# Youtube API를 이용한 맛집 사이트 🍚 😋
- 맛집을 찾는 수요 👉🏼 국내 다양한 지역의 맛집을 알 수 있습니다.
- 다이어트와 건강식에 대한 수요 증가 👉🏼 다이어트 레시피를 추가로 알 수 있습니다.

# 📃 페이지 구성 

### 메뉴 구성
![image](https://github.com/Hyeji1364/youtube-spot/assets/161557112/47f511c2-a281-4b3a-ae24-5e6e5e64bc5e)

메인 페이지 전체화면입니다. <br>

![image](https://github.com/Hyeji1364/youtube-spot/assets/161557112/37f19394-5e94-4c66-8936-d732d33ef1d2)

검색어 창과 aside에는 맛집 전체, 서울, 경기도, 대전, 강원도, 전라도, 제주도의 맛집 정보를 검색할 수 있도록 했습니다. <br>
또한 최근 건강 및 다이어트에 대한 수요가 늘며 다이어트 레시피에 대한 정보도 검색할 수 있도록 했습니다. <br>

<br>

### 메인페이지
-  📑 메뉴판 형식의 소개
![image](https://github.com/Hyeji1364/youtube-spot/assets/161557112/eca62a4e-32cc-4a37-a211-e7683a519d56)

메인페이지에는 맛집 정보에 대한 메뉴를 음식점의 메뉴판 처럼 구성했습니다. <br>
유튜브 메뉴 페이지에 있는 내용을 담았습니다.

<br>

- 🍽 추천 영상 : 미슐랭 맛집
 ![image](https://github.com/Hyeji1364/youtube-spot/assets/161557112/ec13e03b-b855-4900-b5d4-4d9c74466907)

한국에도 여러 미슐랭 맛집이 있는데, 따로 검색하기가 불편하다는 단점을 보완하여 유튜브 영상으로 정리한 section입니다.
영상보기 버튼을 클릭하면 바로 전체화면으로 유튜브 영상이 재생됩니다.
![image](https://github.com/Hyeji1364/youtube-spot/assets/161557112/dacee901-c81c-4af7-b1b6-ec6806e8683c)

<hr />

## 작업 순서
1. node.js 설치 / 버전확인 : node -v
2. react 설치
3. npx create-react-app .
4. 라이브러리 설치
5. 폴더 셋팅 : 필요없는 파일 제거
6. Header 설정
7. Suspense 설정
8. 각 페이지 메타 태그 설정(Helmet)

<br>

## 자동완성 단축키
`rafce`

<br>

## 필요한 라이브러리 설치
- react를 설치 : `npm create-react-app 폴더이름` -> 폴더를 생략하고 싶으면 .으로 표시
- react-router-dom 설치 : `npm install react-router-dom` : 주소를 설정하기 위한 라이브러리 -> package.json에서 버전 확인 가능
- axios 설치 : `npm install axios` -> API 라이브러리
- react icon 설치 : `npm install react-icons` -> 리액트에 필요한 아이콘 설치
- react-player 설치 : `npm install react-player` -> 유튜브 영상 재생
- sass 설치 : `npm install sass` -> CSS 라이브러리
- react-helmet-asyne 설치 : `npm install react-helmet-async` -> SEO
- swiper 설치 : `npm install swiper` -> 이미지 슬라이드

````bash
npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper
````
<br>

## 용어 정리
- `axious` : Axios는 웹 브라우저나 Node.js에서 사용할 수 있는 도구로, 인터넷을 통해 서버에 정보를 요청하거나 보낼 수 있게 해주는 JavaScript 라이브러리입니다.
즉, 웹 페이지에서 필요한 데이터를 서버로부터 불러오거나, 사용자의 입력을 서버에 전달할 때 사용할 수 있습니다. <br>
Axios의 주요 장점은 간단하게 웹 서버와의 통신을 구현할 수 있다는 것입니다.

<br>

## 사용 스택
- node.js 설치

<br>

## 실행하기
`npm start` : 리액트 시작하기

<br>

## 트러블 슈팅에 따른 해결방법

#### 🎈 1. 컴포넌트 렌더링 문제
🔰 증상: 컴포넌트가 제대로 렌더링되지 않음 <br>
* 해결 방법
* 콘솔 에러 확인: 브라우저 콘솔에서 에러 메시지를 확인하여 문제의 원인을 파악합니다.
* JSX 구문 오류 확인: JSX 구문에 오류가 없는지 확인합니다.
* 프롭 전달 확인: 필요한 프롭이 올바르게 전달되고 있는지 확인합니다.

#### 🎈 2. 상태 관리 문제
🔰 증상: 상태(state)가 예상대로 업데이트되지 않음 <br>
* 해결 방법
* setState 비동기 처리: setState가 비동기적으로 처리된다는 점을 고려합니다.
* 함수형 업데이트 사용: 이전 상태값을 참조하여 상태를 업데이트해야 하는 경우, 함수형 업데이트를 사용합니다.

#### 🎈 3. 이벤트 핸들링 문제
🔰 증상: 이벤트 핸들러가 호출되지 않음 <br>
- 해결 방법
- 이벤트 바인딩 확인: 클래스 컴포넌트에서 이벤트 핸들러를 바인딩했는지 확인합니다.
  
  ````javascript
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);}
  ````

- 함수 컴포넌트 사용 시: 함수 컴포넌트에서 이벤트 핸들러를 정의하고 사용합니다.

````javascript
const handleClick = () => {
  console.log('Button clicked');
};
````

## build 실행
`npm run build`

## React
버츄얼 돔 방식 - 재활용 가능

## 깃헙 소스  
`git clone`
`npm install`
- 버전 확인

## 사이트 배포
- npm run build
