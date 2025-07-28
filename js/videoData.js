const videoData = [
    {
        videoId: 1,
        adress: "https://www.youtube.com/watch?v=z3aS5AwhJSU",
        thumbnail: 'https://img.youtube.com/vi/9CSjtzOueFo/mqdefault.jpg',
        duration: '1:01:47',
        channelPic: 'img/yes24.jpg',
        title: '𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕 | 내가 책 읽을 때 듣는 누자베스 (Nujabes) 노래들',
        channelName: 'YES24',
        views: '2천만',
        uploadDate: '2주 전'
    },
    {
        videoId: 2,
        adress: "https://www.youtube.com/watch?v=xlaPti4ElCk",
        thumbnail: 'https://img.youtube.com/vi/xlaPti4ElCk/mqdefault.jpg',
        duration: '2:34:48',
        channelPic: 'img/nobody.jpg',
        title: 'you look tired, take a little break :)',
        channelName: 'nobody',
        views: '85만',
        uploadDate: '8개월 전'
    },
    {
        videoId: 3,
        adress: "https://www.youtube.com/watch?v=_41K4CpsZwg",
        thumbnail: 'https://img.youtube.com/vi/_41K4CpsZwg/mqdefault.jpg',
        duration: '1:15:48',
        channelPic: 'img/Mood_Developer.jpg',
        title: '이게 진짜 힙합이지 Vol.1🔥 | 90\'s/00\'s 올드스쿨 힙합 𝙋𝙡𝙖𝙮𝙡𝙞𝙨𝙩',
        channelName: '𝐌𝐨𝐨𝐝 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫™',
        views: '148만',
        uploadDate: '3년 전'
    },
    {
        videoId: 4,
        adress: "https://www.youtube.com/watch?v=bnWHWV2kFhg",
        thumbnail: 'https://img.youtube.com/vi/bnWHWV2kFhg/mqdefault.jpg',
        duration: '18:22',
        channelPic: 'img/p_ung.jpg',
        title: '농장채소 다털어먹는 산토끼 잡아서 양봉장 근처에 풀어주기',
        channelName: '프응TV Honeybeefather',
        views: '52만',
        uploadDate: '3일 전'
    },
    {
        videoId: 5,
        adress: "https://www.youtube.com/watch?v=0e9zSMOhhm0",
        thumbnail: 'https://img.youtube.com/vi/0e9zSMOhhm0/mqdefault.jpg',
        duration: '19:53',
        channelPic: 'img/sul.jpg',
        title: '이유가 있구나..최강의 난이도, 설탕 없이 복분자 100% 복분자주 만들기 (오크 숙성 복분자 증류주, 복분자 와인, 복분자 담금주)',
        channelName: '술익는집',
        views: '67만',
        uploadDate: '5개월 전'
    },
    {
        videoId: 6,
        adress: "https://www.youtube.com/watch?v=tuH1ZTl9s9Q",
        thumbnail: 'https://img.youtube.com/vi/tuH1ZTl9s9Q/mqdefault.jpg',
        duration: '4:48',
        channelPic: 'img/codingapple.jpg',
        title: '솔직히 바이브코딩 좋은듯',
        channelName: '코딩애플',
        views: '16만',
        uploadDate: '2주 전'
    },
    {
        videoId: 7,
        adress: "https://www.youtube.com/watch?v=BXBLdyB05QM",
        thumbnail: 'https://img.youtube.com/vi/BXBLdyB05QM/mqdefault.jpg',
        duration: '2:33:11',
        channelPic: 'img/uppercut.jpg',
        title: '아마존 허락받고 마지막 전투 싹 들어간 버전 《리처》 시즌1-3 결말까지 몰아보기',
        channelName: '어퍼컷Tube',
        views: '35만',
        uploadDate: '3개월 전'
    },
    {
        videoId: 8,
        adress: "https://www.youtube.com/watch?v=FFOjtjQAmBM",
        thumbnail: 'https://img.youtube.com/vi/FFOjtjQAmBM/mqdefault.jpg',
        duration: '27:06',
        channelPic: 'img/GCL.webp',
        title: '포켓몬스터, 그 시작엔 전설이라 불리우던 한 소년이 있었다【포켓몬스터 스토리】',
        channelName: 'GCL',
        views: '120만',
        uploadDate: '11개월 전'
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.querySelector('.video-list'); // 동영상 카드를 삽입할 부모 요소

    videoData.forEach(video => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-sm-6 col-lg-4 mb-4'; /*클래스 수정해서 반응형이 사용자 경험에 더 좋도록 바꿀것*/

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
        videoGrid.appendChild(colDiv);
    });
});