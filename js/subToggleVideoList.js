document.addEventListener('DOMContentLoaded', () => {
    const showVerticalBtn = document.getElementById('showVerticalBtn');
    const showHorizontalBtn = document.getElementById('showHorizontalBtn');
    const videoListVertical = document.querySelector('.video-list-vertical');
    const videoListHorizontal = document.querySelector('.video-list-horizontal');

    // 모든 필요한 요소가 존재하는지 확인
    if (showVerticalBtn && showHorizontalBtn && videoListVertical && videoListHorizontal) {

        // 초기 상태 설정: vertical 목록은 보이고, horizontal 목록은 숨김
        videoListVertical.classList.remove('d-none');
        videoListHorizontal.classList.add('d-none');

        // 첫 번째 버튼 (세로 목록 보기) 클릭 이벤트
        showVerticalBtn.addEventListener('click', () => {
            videoListVertical.classList.remove('d-none'); // 세로 목록 보이기
            videoListHorizontal.classList.add('d-none');  // 가로 목록 숨기기
        });

        // 두 번째 버튼 (가로 목록 보기) 클릭 이벤트
        showHorizontalBtn.addEventListener('click', () => {
            videoListVertical.classList.add('d-none');   // 세로 목록 숨기기
            videoListHorizontal.classList.remove('d-none'); // 가로 목록 보이기
        });
    }
});