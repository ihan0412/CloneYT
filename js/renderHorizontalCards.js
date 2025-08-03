import { videoData } from './videoData.js';

document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.querySelector('.video-list-horizontal'); // 가로형 카드 (video 반응형 구현)

    // 현재 동영상의 id
    const urlParams = new URLSearchParams(window.location.search);
    const currentVideoId = urlParams.get('id'); // 쿼리스트링에서 id 값 추출

    if (videoGrid) { // 해당 요소가 존재할 때만 실행
        videoData.forEach(video => {
            // 같으면 건너뛰기
            if (video.id == currentVideoId) {
                return;
            }
            const colDiv = document.createElement('div');
            colDiv.className = 'col-12 mb-3';

            colDiv.innerHTML = `
                <div class="d-flex align-items-start video-card-horizontal">
                    <div class="position-relative me-3" style="flex-shrink: 0; width: 168px; height: 94px;">
                        <img src="${video.thumbnail}" class="img-fluid rounded" alt="${video.title} 썸네일">
                        <iframe class="hover-iframe card-img-top rounded" src="${video.embedAddress}&mute=1" title="YouTube video player"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                        </iframe>
                        
                        <span class="video-duration position-absolute bottom-0 end-0 p-1 text-white rounded bg-dark opacity-75 me-1 mb-1">${video.duration}</span>
                    </div>
                    <div class="flex-grow-1">
                        <h6 class="mb-1 text-white" style="font-weight: bold; font-size: 1rem;">${video.title}</h6>
                        <p class="card-text mb-0" style="font-size: 0.9rem;">${video.channelName}</p>
                        <p class="card-text mb-0" style="font-size: 0.9rem;">조회수 ${video.views}회 • ${video.uploadDate}</p>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="img/more_vert.png">
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">나중에 볼 영상에 추가</a></li>
                            <li><a class="dropdown-item" href="#">저장</a></li>
                            <li><a class="dropdown-item" href="#">신고</a></li>
                        </ul>
                    </div>
                </div>
            `;

            const originalSrc = video.embedAddress;
            const videoIframe = colDiv.querySelector('.hover-iframe');
            // 생성된 horizontal 카드 요소에 이벤트 리스너 추가
            const videoCardHorizontal = colDiv.querySelector('.video-card-horizontal');
            if (videoCardHorizontal) {
                videoCardHorizontal.style.cursor = 'pointer'; // 클릭 가능한 것처럼 보이도록 커서 변경

                videoCardHorizontal.addEventListener('mouseenter', () => {
                    const params = `autoplay=1&mute=1&controls=0&modestbranding=1`;
                    const newSrc = originalSrc.includes('?') // 쿼리스트링 존재 여부 검사. 없으면 ?를 넣을 필요가 없어서
                        ? `${originalSrc}&${params}`
                        : `${originalSrc}?${params}`;
                    videoIframe.src = newSrc;
                });

                // url 초기화로 속성 초기화
                videoCardHorizontal.addEventListener('mouseleave', () => {
                    videoIframe.src = originalSrc;
                });


                videoCardHorizontal.addEventListener('click', (event) => {
                    // 드롭다운 버튼 클릭시 페이지 이동 방지(이벤트 버블링)
                    const dropdownButton = videoCardHorizontal.querySelector('.dropdown button');
                    const dropdownMenu = videoCardHorizontal.querySelector('.dropdown-menu');
                    if (dropdownButton && dropdownButton.contains(event.target)) { return; }
                    if (dropdownMenu && dropdownMenu.contains(event.target)) { return; }

                    console.log(`Horizontal Video clicked! Title: ${video.title}, ID: ${video.id}`);
                    window.location.href = `video.html?id=${video.id}`;
                });
            }
            videoGrid.appendChild(colDiv);
        });
    }
});