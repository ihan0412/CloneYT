import { videoData } from './videoData.js'; // 상대 경로로 수정

document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.querySelector('.video-list-vertical');

    // 구독한 채널 목록 (하드코딩)
    const subscribedChannels = ['GCL', '어퍼컷Tube'];

    if (videoGrid) { // 해당 요소가 존재할 때만 실행
        videoData.forEach(video => {
            // 현재 비디오의 채널이 구독한 채널 목록에 있는지 확인
            if (!subscribedChannels.includes(video.channelName)) {
                return; // 구독하지 않은 채널의 영상은 렌더링하지 않고 건너뜜
            }

            const colDiv = document.createElement('div');
            colDiv.className = 'col-12 col-sm-6 col-lg-4 mb-4'; // renderVerticalCards와 동일

            colDiv.innerHTML = `
                <div class="card video-card">
                    <div class="position-relative">
                        <img src="${video.thumbnail}" class="card-img-top rounded" alt="${video.title} 썸네일">
                            <iframe class="hover-iframe card-img-top rounded" src="${video.embedAddress}" title="YouTube video player"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                            </iframe>
                        <span class="video-duration position-absolute bottom-0 end-0 p-1 text-white rounded bg-dark opacity-75 me-2 mb-2">${video.duration}</span>
                    </div>
                    <div class="card-body d-flex align-items-start">
                        <img src="${video.channelPic}" class="channel-profile-pic rounded-circle me-2" alt="${video.channelName} 프로필">
                        <div class="flex-grow-1">
                            <h5 class="card-title mb-1">${video.title}</h5>
                            <p class="card-text channel-name mb-0">${video.channelName}</p>
                            <p class="card-text video-meta small">조회수 ${video.views}회 • ${video.uploadDate}</p>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-link text-dark p-0" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="img/more_vert.png"></button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">나중에 볼 영상에 추가</a></li>
                                <li><a class="dropdown-item" href="#">저장</a></li>
                                <li><a class="dropdown-item" href="#">신고</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;


            const originalSrc = video.embedAddress;
            const videoCard = colDiv.querySelector('.video-card');
            const videoIframe = colDiv.querySelector('.hover-iframe');
            if (videoCard) {
                videoCard.style.cursor = 'pointer'; // 클릭 가능한 것처럼 보이도록 커서 변경

                videoCard.addEventListener('mouseenter', () => {
                    const params = `autoplay=1&mute=1&controls=0&modestbranding=1`;
                    const newSrc = originalSrc.includes('?')
                        ? `${originalSrc}&${params}`
                        : `${originalSrc}?${params}`;
                    videoIframe.src = newSrc;
                });

                videoCard.addEventListener('mouseleave', () => {
                    videoIframe.src = originalSrc;
                });

                videoCard.addEventListener('click', (event) => {
                    const dropdownButton = videoCard.querySelector('.dropdown button');
                    const dropdownMenu = videoCard.querySelector('.dropdown-menu');
                    if (dropdownButton && dropdownButton.contains(event.target)) { return; }
                    if (dropdownMenu && dropdownMenu.contains(event.target)) { return; }

                    console.log(`Subscribed Video clicked! Title: ${video.title}, ID: ${video.id}`);
                    window.location.href = `video.html?videoId=${video.id}`;
                });
            }

            videoGrid.appendChild(colDiv); // 필터링된 비디오만 그리드에 추가
        });
    }
});