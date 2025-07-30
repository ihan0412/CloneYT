import {videoData} from './videoData.js'; // videoData.js 파일 경로 확인 및 임포트

// 비디오 데이터 로드 및 렌더링 함수
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id'); // 쿼리스트링에서 id 값 추출

    // 추출된 ID로 videoData에서 해당 비디오 찾기
    const selectedVideo = videoData.find(video => video.id == videoId); // 일치하는 비디오 객체

    if (selectedVideo) {
        // 페이지 요소들의 id 로 DOM 객체(태그) 선택 후 연결
        const videoPlayer = document.getElementById('videoPlayer');
        const embedVideo = document.getElementById('embedVideo')
        const videoTitle = document.getElementById('videoTitle');
        const channelProfilePic = document.getElementById('channelProfilePic');
        const channelName = document.getElementById('channelName');
        const subCount = document.getElementById('subCount');
        const likeCount = document.getElementById('likeCount');
        const viewCount = document.getElementById('viewCount');
        const uploadDate = document.getElementById('uploadDate');
        const videoDescription = document.getElementById('videoDescription'); // pre 태그로 줄바꿈 포함 출력

        // DOM 요소 업데이트, 조건문으로 존재 여부 검사
        if (videoPlayer) videoPlayer.src = selectedVideo.address;
        if (embedVideo) embedVideo.src = selectedVideo.embedAddress;
        if (videoTitle) videoTitle.textContent = selectedVideo.title;
        if (channelProfilePic) channelProfilePic.src = selectedVideo.channelPic;
        if (channelName) channelName.textContent = selectedVideo.channelName;
        if (subCount) subCount.textContent = `구독자 ${selectedVideo.subCount}명`;
        if (likeCount) likeCount.textContent = selectedVideo.likeCount;
        if (viewCount) viewCount.textContent = `조회수 ${selectedVideo.views}회`;
        if (uploadDate) uploadDate.textContent = selectedVideo.uploadDate;
        if (videoDescription) videoDescription.textContent = selectedVideo.videoDetailInfo;

    } else {
        // ID에 해당하는 비디오를 찾지 못한 경우 처리
        // 이걸 try catch 문으로 해볼까?
        window.location.href = 'index.html'; // 홈 페이지로 리디렉션
    }
});

// detail description text 더보기 기능
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDescription');
    const descriptionText = document.getElementById('videoDescription');

    if (toggleButton && descriptionText) {
        toggleButton.addEventListener('click', function () {
            descriptionText.classList.toggle('expanded');
            if (descriptionText.classList.contains('expanded')) {
                toggleButton.textContent = '간략히';
            } else {
                toggleButton.textContent = '...더보기';
            }
        });
    }
});

// 좋아요/싫어요 기능 JavaScript 버튼
document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('like-btn');
    const dislikeBtn = document.getElementById('dislike-btn');

    // 버튼 클릭 처리 함수
    function handleButtonClick(clickedButton, otherButton) {
        // 현재 눌린 버튼
        const clickedIcon = clickedButton.querySelector('.bi');
        const clickedCountSpan = clickedButton.querySelector('span');
        let currentCount = clickedCountSpan ? parseInt(clickedCountSpan.textContent) : 0;
        // 다른 버튼(다른 버튼이 눌려있는지 판단해서 동시에 눌리지 않게)
        const otherIcon = otherButton.querySelector('.bi');
        const otherCountSpan = otherButton.querySelector('span');
        let otherCount = otherCountSpan ? parseInt(otherCountSpan.textContent) : 0;

        // toggle 메소드 반환값은 boolean, 클래스 리스트에 값이 없었다면 추가하고 true return, 있으면 반대
        const isActiveNow = clickedButton.classList.toggle('active');

        if (clickedCountSpan) { // span 이 있는지 확인(싫어요는 count 가 없음)
            if (isActiveNow) { // 토글 구현 - active(방금 추가되었는지)
                currentCount++;
            } else {
                currentCount--;
            }
            clickedCountSpan.textContent = currentCount;
        }

        // 다른 버튼이 이미 눌려있었다면
        if (otherButton.classList.contains('active')) {
            otherButton.classList.remove('active'); // 제거 후
            // 다른 class 를 비활성화(제거)
            const otherFillClass = otherIcon.classList[1].replace('-fill', '') + '-fill';
            const otherBaseClass = otherIcon.classList[1].replace('-fill', '');
            otherIcon.classList.remove(otherFillClass);
            otherIcon.classList.add(otherBaseClass);

            if (otherCountSpan) { // 싫어요를 눌렀을 때, 좋아요 span은 존재하지만 반대의 경우에는 존재하지 않음
                otherCount--;
                otherCountSpan.textContent = otherCount;
            }
        }
        // 누른 버튼 상태에 따른 교환
        const baseClassPart = clickedIcon.classList[1].replace('-fill', '');
        const fillClass = baseClassPart + '-fill';

        // 위의 remove, add 를 토글 함수로
        clickedIcon.classList.toggle(fillClass);
        clickedIcon.classList.toggle(baseClassPart);
    }

    // 이벤트 리스너 등록
    likeBtn.addEventListener('click', () => handleButtonClick(likeBtn, dislikeBtn));
    dislikeBtn.addEventListener('click', () => handleButtonClick(dislikeBtn, likeBtn));
});

// 댓글 기능
document.addEventListener('DOMContentLoaded', () => {
    const commentInput = document.getElementById('commentInput');
    const cancelCommentBtn = document.getElementById('cancelCommentBtn');
    const postCommentBtn = document.getElementById('postCommentBtn');
    const commentCountSpan = document.getElementById('commentCount');
    const commentsList = document.getElementById('commentsList');

    // 댓글 개수 change
    function updateCommentCount(change) {
        let currentCount = parseInt(commentCountSpan.textContent);
        commentCountSpan.textContent = currentCount + change;
    }

    // 입력된 댓글 append
    function createCommentElement(authorName, commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'd-flex align-items-start mb-3 comment-item';

        // '.comments-section 클래스 아래의 .d-flex.align-items-start.mb-4 > img'.src; 저 클래스들을 가지고 있는 img 태그의 src 속성값
        const currentUserProfilePicSrc = document.querySelector('.comments-section .d-flex.align-items-start.mb-4 > img').src;

        const formattedTime = new Date().toLocaleString(); // 현재 년,월,일 시,분,초 반환

        // innerHtml을 사용할 때 사용자 입력(스크립트 주입)을 주의(xss)해야 하기 때문에 동적 입력 데이터들은 querySelector 로 해결
        // innerHTML로 기본 HTML 구조 생성
        commentDiv.innerHTML = `
            <img src="${currentUserProfilePicSrc}" class="channel-profile-img me-3" alt="${authorName} 프로필">
            <div class="flex-grow-1"> <!--가능한 모든 공간 사용-->
                <p class="mb-1">
                    <span class="fw-bold">${authorName}</span>
                    <span class="ms-2 comment-time">${formattedTime}</span>
                </p>
                <p class="mb-0 comment-text"></p>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary border-0 text-white-50 delete-comment-btn"
                    style="background-color: transparent;">
                <i class="bi bi-x-lg"></i>
            </button>
        `;

        // querySelector로 해당 요소들을 찾아 textContent로 안전하게 사용자 입력 삽입
        const commentTextP = commentDiv.querySelector('.comment-text');
        if (commentTextP) { commentTextP.textContent = commentText; } // 내부 내용(only text)에 입력 내용 추가

/*
        commentDiv.innerHTML = `
            <img src="${currentUserProfilePicSrc}" class="channel-profile-img me-3" alt="">
            <div class="flex-grow-1">
                <p class="mb-1">
                    <span class="fw-bold"></span> <span class="ms-2 comment-time"></span> </p>
                <p class="mb-0 comment-text"></p> </div>
            <button type="button" class="btn btn-sm btn-outline-secondary border-0 text-white-50 delete-comment-btn" style="background-color: transparent;">
                <i class="bi bi-x-lg"></i> </button>
        `;

        const authorSpan = commentDiv.querySelector('.fw-bold');
        if (authorSpan) { authorSpan.textContent = authorName; }
        const timeSpan = commentDiv.querySelector('.comment-time');
        if (timeSpan) { timeSpan.textContent = formattedTime; }
        const profileImg = commentDiv.querySelector('.channel-profile-img');
        if (profileImg) { profileImg.alt = `${authorName} 프로필`; }
*/

        // 각각의 commentbox 에 대한 삭제 이벤트 리스너라서 생성 함수 안에 위치
        const deleteButton = commentDiv.querySelector('.delete-comment-btn');
        if (deleteButton) {
            deleteButton.addEventListener('click', () => {
                commentDiv.remove(); // 현재 comment box 제거
                updateCommentCount(-1);
            });
        }

        return commentDiv;
    }

    if (commentInput && postCommentBtn) {
        commentInput.addEventListener('input', () => {
            if (commentInput.value.trim().length > 0) {
                postCommentBtn.disabled = false;
                postCommentBtn.style.opacity = '1';
            } else {
                postCommentBtn.disabled = true;
                postCommentBtn.style.opacity = '0.5';
            }
        });
    }

    if (cancelCommentBtn && commentInput && postCommentBtn) {
        cancelCommentBtn.addEventListener('click', () => {
            commentInput.value = '';
            postCommentBtn.disabled = true;
            postCommentBtn.style.opacity = '0.5';
        });
    }

    if (postCommentBtn && commentInput && commentsList && commentCountSpan) {
        postCommentBtn.addEventListener('click', () => {
            const commentText = commentInput.value.trim();
            if (commentText === '') return;
            const authorName = 'your google nickname';

            const newCommentElement = createCommentElement(authorName, commentText);
            commentsList.prepend(newCommentElement);

            commentInput.value = '';
            postCommentBtn.disabled = true;
            postCommentBtn.style.opacity = '0.5';

            updateCommentCount(1);
        });
    }
});