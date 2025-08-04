# 🔗[CloneYT](https://ihan0412.github.io/CloneYT/ "Youtube-clone") ▶️

## ▶️ Youtube Clone Coding 개요

<br>

### <a name="demand"></a> 📋요구사항

1. 메인화면

   - 상단 네비게이션 바 (로고, 검색창, 사용자 아이콘)
     - 로고 클릭시 홈페이지 상단 리로드
     - 검색창(검색기능은 추가 구현 사항)
     - 사용자 아이콘 클릭시 계정 정보(모든 버튼을 구현하되, 버튼 기능은 구현하지 않아도 됨)
   - 좌측 사이드바 (홈, 구독 아이콘 포함)
     - 홈 클릭시 홈페이지 상단 리로드
     - 구독 아이콘 클릭시 구독 관련 페이지 (실제 구독 페이지처럼)
   - 영상 썸네일 카드 영역 (8개 이상)
   - 썸네일, 영상 제목, 채널명, 조회수, 업로드 날짜 표시
   - 마우스 호버 시 카드 에니메이션 (확대 등 자유)

<br>

2. 영상 상세 페이지 구현 및 URL 구조 설계

   - 각 영상 클릭 시 video.html?videoId=1 형식의 페이지로 이동 
   - JS로 videoId 파라미터 읽기 
   - 상세 페이지에는 다음 정보 표시 
     - 영상 iframe (YouTube 임베드)
     - 제목, 채널명, 조회수, 업로드일 
     - 설명 영역

<br>

3. 사용자 인터렉션 (2가지 이상 구현)

   - 댓글 작성 기능 (로컬 저장 하지 않아도 괜찮음. ex. 댓글 작성해서 등록이 가능하지만, 해당 페이지에 다시 들어왔을 때는 해당 댓글이 남아있지 않아도 됩니다.)
   - 좋아요 / 싫어요 버튼 상태 반영 
   - 우측 재생 목록 반응형 디자인

<br>
4. 결과물 배포


<br>

### <a name="target"></a> 🎯목표

- 부트스트랩을 이용하여 레이아웃과 반응형 웹 구현
- Youtube 동작 원리를 이해하여 Clone, 웹 페이지 구조 학습
- js 를 이용한 웹 재사용 이해 
- 응용 프론트엔드 프로젝트 수행

<br>

### <a name="stack"></a> 📚기술 스택 & 개발 환경

- 기술 스택
<p>
    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
    <img src="https://img.shields.io/badge/css-663399?style=for-the-badge&logo=css&logoColor=white">
</p>

- 개발 환경 & 형상 관리
<p>
    <img src="https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=css&logoColor=white">
    <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</p>

<br>

### <a name="structure"></a> 📦디렉토리 구조

```
📦 CloneYT
┣ 📂 .idea/
┣ 📂 css/
┃ ┣ 📜 home.css # 메인 화면
┃ ┣ 📜 sidebar.css # 상단바, 사이드바
┃ ┣ 📜 sub.css # 구독 화면
┃ ┣ 📜 video.css # 영상 재생 화면
┃ ┣ 📜 videolist.css # 영상 리스트 스타일
┃ ┗ 📜 videoNavbar.css # 영상 재생 화면 사이드바
┣ 📂 img/ # 사용 이미지 DIR
┣ 📂 js/
┃ ┣ 📜 renderHorizontalCards.js # 영상 재생 화면 반응형 구현 가로
┃ ┣ 📜 renderVerticalCards.js # 반응형 구현 세로
┃ ┣ 📜 sidebar.js # 사이드 바 
┃ ┣ 📜 subRender.js # 구독 구현
┃ ┣ 📜 subRenderHorizontal.js # 구독 화면 정렬
┃ ┣ 📜 subToggleVideoList.js 
┃ ┣ 📜 video.js # 영상 재생 화면
┃ ┗ 📜 videoData.js # 영상 Data
┣ 📂 readmeimg/
┣ 📜 index.html # 홈 화면
┣ 📜 sub.html # 구독 화면
┗ 📜 video.html # 영상 재생 화면
```

<br>

## <a name="implement"></a> 📸구현 + ⚙️기능 설명

### 메인화면

#### Navbar

![navbar](./readmeimg/navbar.gif)

- 사이드바 버튼을 토글로 구현
- 로고를 클릭하면 웹페이지 상단으로 이동
- 사용자 아이콘을 클릭하면 드롭다운으로 사용자 계정 정보 출력

<br>

#### 홈 화면 반응형 

![sidebar](./readmeimg/homeResponsive.gif)

- 브라우저 크기에 따라서 동영상 썸네일의 크기와 사이드바 동작 방식 변경

<br>

#### 메인화면 썸네일 List

![videoList](./readmeimg/videoList.gif)

- 총 8개의 영상 썸네일 출력
- 영상 재생 시간, 채널 이미지, 제목, 채널명, 조회수, 게시일, 상세 설정 버튼으로 구성
- 마우스 hover 시 소리없는 영상 자동재생

<br>

#### 구독 페이지

![subpage](./readmeimg/subpage.gif)

- 홈과 구독 페이지 이동시 페이지마다 사이드바 포커스
- 현재 구독중인 채널의 영상만 출력
- 우측 상단의 버튼으로 영상 list 배열 변경

<br>

### 동영상 화면

#### 상세 페이지 사이드바 & 쿼리스트링

![videomain](./readmeimg/videomain.gif)

- 실제 유튜브 처럼, 상세페이지에선 큰 화면에서도 축소 사이드바
- 쿼리 스트링인 videoID 를 통해 페이지 로딩
- 상세 페이지는 영상, 제목, 채널, 좋아요 버튼 그룹, 상세 설명, 댓글, 추천 동영상 List 로 구성
- 동영상 List는 현재 상세 페이지의 영상을 제외하고 출력(7개)

<br>

#### 영상 설명 + 좋아요 싫어요 토글 버튼 

![like](./readmeimg/likeToggle.gif)

- 좋아요 버튼 클릭시 현재 좋아요 수에 영향
- 한쪽 버튼이 눌려있을 때 다른 버튼 클릭시 자동으로 취소하고 클릭한 버튼 동작

<br>

#### 댓글 작성

![comment](./readmeimg/comment.gif)

- 댓글 추가, 내용 제거, 작성한 댓글 삭제 총 3가지 기능
- 댓글에는 사용자 이미지, 이름, 입력 시간, 댓글 내용 출력

<br>


#### 재생 목록, 좋아요 버튼 그룹 반응형

![videoResponsive](./readmeimg/videoResponsive.gif)

- 브라우저 크기에 따라서 재생 목록의 위치 이동, 좋아요 버튼 그룹 축소

<br>

## <a name="diary"></a> 🙄회고

### <a name="hard"></a> 🤯어려웠던 점 & 버그 & ✏️배운 점

#### innerHTML 사용시 주의점

동적으로 HTML 요소를 삽입하는 과정에서 innerHTML을 사용할 때 발생하는 XSS(크로스 사이트 스크립팅) 공격 위험성을 방지하는 데 어려움이 있었습니다.

처음에는 append()나 appendChild() 같은 메서드를 사용해 보았지만, 이 또한 XSS 문제를 완벽하게 해결하지 못했습니다. 

하지만 querySelector()와 같은 메서드를 이용해 이미 DOM에 존재하는 요소를 가져온 후, JavaScript를 통해 동적인 기능을 추가하는 방식을 사용하면 innerHTML을 안전하게 사용할 수 있다는 것을 알게 되었습니다.

<br>


#### 재사용을 위한 코드 분리

상단바와 같은 공통된 요소를 여러 페이지에서 재사용하는 과정에서 어려움을 겪었습니다. 

내비게이션 바 전체는 모든 페이지에 공통으로 사용되지만, 내비게이션 바 내부의 특정 요소(예: 사이드 바 동작 변화)는 페이지마다 다르게 표현되어야 했습니다. 

이처럼 재사용 단위가 명확하게 일치하지 않는 구조 때문에, 공통 컴포넌트를 정확히 분리하고 재사용하는 데 어려움이 있었습니다.

<br>


#### 웹 컴포넌트

위와 같은 재사용성 문제를 해결하기 위해 웹 컴포넌트(Web Components) 기술을 고려했지만, 프로젝트 초기 단계가 아닌 이미 개발이 어느 정도 진행된 상황에서 새로운 기술을 적용하기에는 어려움이 있었습니다. 

이 때문에 웹 컴포넌트 기술을 학습하는 데 그쳤고, 실제 프로젝트에는 적용하지 못했습니다. 대신 innerHTML을 사용해 비슷한 효과를 낼 수 있었습니다.

<br>


#### 스크립트 모듈화 오류

export와 import 문법을 사용해 데이터를 모듈화하는 과정에서, HTML \<script\> 태그에 type="module" 속성을 추가해야만 스크립트가 정상적으로 동작하는 이유에 대해 깊이 고민하게 되었습니다.

일반 스크립트와 달리, 모듈 스크립트는 각 파일이 독립적인 스코프를 가지게 됩니다. 브라우저는 type="module" 속성을 통해 이 스크립트를 모듈로 인식하고, 파일 내에서 선언된 변수들이 전역 공간에 노출되지 않도록 격리시킵니다. 

따라서 다른 파일의 변수를 가져와 사용하기 위해서는 export와 import 문법을 사용해 명시적으로 데이터를 내보내고 가져와야 합니다.

이 과정을 통해 type="module"이 단순히 문법 오류를 해결하는 것을 넘어, 코드의 독립성을 보장하고 전역 스코프 오염을 방지하는 중요한 역할임을 이해하게 되었습니다.

<br>


#### CSS 중첩

sidebar.css, videoNavbar.css 등 여러 CSS 파일이 사용되면서 의도치 않은 버그가 발생했습니다. 

특정 자식 요소에 적용된 스타일이 부모 요소의 스타일을 덮어쓰면서, 부모 요소에 적용된 스타일이 제대로 동작하지 않는 문제가 있었습니다. 

이 문제를 해결하기 위해 개발자 도구를 활용해 각 요소에 적용된 CSS 속성을 확인하고, 부모 요소의 스타일이 원하는 대로 유지되도록 코드를 수정했습니다.

<br>

#### 스크립트 로딩 순서 오류

sub.html 페이지에서 프로필 이미지 클릭 시 드롭다운 메뉴가 열리지 않는 버그가 있었습니다.

이 문제는 Bootstrap의 드롭다운 기능을 담당하는 bootstrap.bundle.min.js 파일보다 상단바 HTML을 생성하는 sidebar.js 파일이 먼저 로드되어 발생했습니다. 

스크립트 로딩 순서를 변경하여 bootstrap.bundle.min.js를 먼저 로드하도록 함으로써 이 버그를 해결할 수 있었습니다.

<br>

### 🔗참고 문헌

[README 문법](https://inpa.tistory.com/entry/MarkDown-%F0%9F%93%9A-%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EB%AC%B8%EB%B2%95-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC#links_anchor_%EB%A7%81%ED%81%AC) - Inpa Dev 블로그

[부트스트랩 flex](https://getbootstrap.kr/docs/5.0/utilities/flex/) - 공식

[부트스트랩 반응형 그리드](https://inpa.tistory.com/entry/BootStrap5-%F0%9F%93%9A-%EB%B0%98%EC%9D%91%ED%98%95-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%A0%95%EB%A6%AC-%EA%B7%B8%EB%A6%AC%EB%93%9C) - Inpa Dev 블로그

[부트스트랩 Column 정렬](https://inpa.tistory.com/entry/BootStrap5-%F0%9F%93%9A-%EB%B0%98%EC%9D%91%ED%98%95-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%A0%95%EB%A6%AC-%EC%A0%95%EB%A0%AC) - Inpa Dev 블로그

[InnerHTML 위험성 & 예방 방법](https://velog.io/@lybell_4rt/XSS%EB%A5%BC-%EC%95%84%EC%8B%9C%EB%82%98%EC%9A%94feat.-innerHTML%EC%9D%98-%EC%9C%84%ED%97%98%EC%84%B1) - 블로그

<br><br>

앵커는 작동 안해서 나중에 수정할 예정

[📋요구사항](#a-namedemanda-요구사항)

[🎯목표](#a-nametargeta-목표)

[📚기술 스택 & 개발 환경](#a-namestacka-기술-스택--개발-환경)

[📦디렉토리 구조](#a-namestructurea-디렉토리-구조)

[📸구현 + ⚙️기능 설명](#a-nameimplementa-구현--기능-설명)

[🙄회고](#a-namediarya-회고)

[🔗참고 문헌](#)

