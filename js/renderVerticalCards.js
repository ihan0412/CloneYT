import { videoData } from './videoData.js';

document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.querySelector('.video-list-vertical'); // 세로형 카드

    if (videoGrid) { // 해당 요소가 존재할 때만 실행
        videoData.forEach(video => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-12 col-sm-6 col-lg-4 mb-4';
            // 인라인 이벤트 핸들러는 권장되지 않는 방식, 유지보수가 js 와 html 이 섞여 유지보수가 쉽지 않음
            // -> 이벤트 리스너를 동적으로 할당하는것(addEventListener)이 더 좋음
            colDiv.innerHTML = `
                <div class="card video-card">
                    <div class="position-relative">
                        <img src="${video.thumbnail}" class="card-img-top rounded" alt="${video.title} 썸네일">
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
                        <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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

            const videoCard = colDiv.querySelector('.video-card');
            if (videoCard) {
                videoCard.style.cursor = 'pointer'; // 클릭 가능한 것처럼 보이도록 커서 변경

                videoCard.addEventListener('click', (event) => {
                    // 드롭다운 버튼 클릭시 페이지 이동 방지(이벤트 버블링)
                    const dropdownButton = videoCard.querySelector('.dropdown button');
                    const dropdownMenu = videoCard.querySelector('.dropdown-menu');
                    if (dropdownButton && dropdownButton.contains(event.target)) { return; }
                    if (dropdownMenu && dropdownMenu.contains(event.target)) { return; }
                    /*
                    이벤트 버블링
                    특정 DOM 요소에서 이벤트가 발생했을 때 이벤트가 부모 요소들을 거슬러 올라가면서 전파되는 현상
                    즉 가장 깊은 자식 요소에서 발상한 이벤트가 그 부모의 부모 .... 를 거쳐 최종적으로 document 객체까지 올라가는걸 포작하고
                    각 단계에서(부모) 해당 이벤트를 처리할 수 있도록 하는 방식

                    위의 코드에서는 상위의 video-card에 이벤트 리스너를 설정하고, 드롭다운 버튼, 메뉴를 눌렀을 때
                    (생성되어 있는 이벤트 타겟이 있고, 버블링에 포함 되어 있으면) return 을 이용해서 탈출
                     */

                    console.log(`Video clicked! Title: ${video.title}, ID: ${video.id}`);
                    // 페이지 이동
                    window.location.href = `video.html?id=${video.id}`;
                });
            }

            videoGrid.appendChild(colDiv);
        });
    }
});

