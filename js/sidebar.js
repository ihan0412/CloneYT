document.addEventListener('DOMContentLoaded', () => {
    const sidebarGrid = document.querySelector('.ytbar');

    const sideDiv = document.createElement('div');
    sideDiv.className = 'bar';

    sideDiv.innerHTML = `
        <nav class="navbar"> <!--navbar expend lg 는 햄버거 버튼이 사라지면 안되기 때문에 삭제-->
        <div class="container-fluid justify-content-between">
            <div class="d-flex align-items-center ">
                <!--  offcanvas(작은화면) 사이드바 버튼  -->
                <button class="navbar-toggler me-3" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasYoutube" aria-controls="offcanvasYoutube"
                        aria-label="Toggle navigation" id="offcanvasToggle">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- 큰 화면 사이드 바 버튼-->
                <button class="navbar-toggler me-3 wide-sidebar-toggler" type="button" id="sidebarToggle">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="navbar-brand" href="index.html">
                    <img class="ytlogo" src="img/youtube_logo.png" alt="">
                </a>
            </div>

            <!--  검색 바  -->
            <form class="d-flex search-bar" role="search">
                <input class="form-control me-0" type="search" placeholder="검색" aria-label="Search">
                <button class="btn" type="button">
                    <img src="img/search.png">
                </button>
            </form>
            
            <div class="d-flex align-items-center ms-3 me-3">
                <button class="btn btn-link text-white p-2" type="button" aria-label="음성 검색">
                    <i class="bi bi-mic-fill" style="font-size: 1.2rem;"></i>
                </button>
                <button class="btn btn-link text-white p-2" type="button" aria-label="만들기">
                    <i class="bi bi-camera-video-fill" style="font-size: 1.2rem;"></i>
                </button>
                <button class="btn btn-link text-white p-2 position-relative" type="button" aria-label="알림">
                    <i class="bi bi-bell-fill" style="font-size: 1.2rem;"></i>
                </button>
            </div>

            <div class="d-flex<div class="d-flex ms-3">
                <div class="dropdown user-dropdown">
                    <button class="btn btn-link text-white dropdown-toggle p-0" type="button" id="dropdownUser"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="img/doguser.png" alt="프로필" class="profile-thumbnail">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownUser">
                        <li>
                            <div class="d-flex align-items-center dropdown-header user-info-header">
                                <img src="img/doguser.png" alt="프로필" class="profile-thumbnail-lg me-2">
                                <div>
                                    <h6 class="mb-0 text-white">ihan0412</h6>
                                    <p class="mb-0">@ihan0412</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-person-circle me-2"></i>Google 계정
                        </a></li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-arrow-left-right me-2"></i>계정 전환
                        </a></li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-box-arrow-right me-2"></i>로그아웃
                        </a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-youtube me-2"></i>YouTube 스튜디오
                        </a></li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-currency-dollar me-2"></i>구매 항목 및 멤버십
                        </a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-person-fill-lock me-2"></i>YouTube의 내 데이터
                        </a></li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-moon me-2"></i>디자인: 어두운 테마
                        </a></li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-globe me-2"></i>언어: 한국어
                        </a></li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-shield-fill-check me-2"></i>제한 모드: 사용 안 함
                        </a></li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-geo-alt-fill me-2"></i>위치: 한국
                        </a></li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-keyboard me-2"></i>단축키
                        </a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-gear-fill me-2"></i>설정
                        </a></li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-question-circle-fill me-2"></i>고객센터
                        </a></li>
                        <li><a class="dropdown-item" href="#">
                            <i class="bi bi-chat-dots-fill me-2"></i>의견 보내기
                        </a></li>
                    </ul>
                </div>
            </div>


        </div>
    </nav>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasYoutube" aria-labelledby="offcanvasYoutubeLabel">
        <!--header-->
        <div class="offcanvas-header">
            <div class="d-flex align-items-center flex-grow-1">
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasYoutube"
                        class="btn-close me-3"
                        aria-controls="offcanvasYoutube" data-bs-dismiss="offcanvas" aria-label="Close">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <img class="ytlogo" src="img/youtube_logo.png" alt="YouTube Logo">
            </div>
        </div>
        <!--body-->
        <div class="offcanvas-body">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active homebutton" aria-current="page" href="index.html" aria-label="홈">
                        <img src="img/home.png" class="rounded-circle me-3" width="24" height="24" alt="">
                        <span>홈</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="Shorts">
                        <img src="img/shorts.png" class="rounded-circle me-3" width="24" height="24" alt="">
                        <span>Shorts</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link subbutton" href="sub.html" aria-label="구독">
                        <img src="img/sub.png" class="rounded-circle me-3" width="24" height="24" alt="">
                        <span>구독</span>
                    </a>
                </li>
            </ul>
            <hr>

            <ul class="nav flex-column">
                <h6 class="sidebar-heading">내 페이지</h6>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="시청 기록">
                        <img src="img/history.png" class="rounded-circle me-3" width="24" height="24"
                             alt=""><span>시청 기록</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="재생목록">
                        <img src="img/playlist.png" class="rounded-circle me-3" width="24" height="24" alt="">
                        <span>재생목록</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="내 동영상">
                        <img src="img/myVideo.png" class="rounded-circle me-3" width="24" height="24" alt="">
                        <span>내 동영상</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="나중에 볼 동영상">
                        <img src="img/later.png" class="rounded-circle me-3" width="24" height="24" alt="">
                        <span>나중에 볼 동영상</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="좋아요 표시한 동영상">
                        <img src="img/thumb_up.png" class="rounded-circle me-3" width="24" height="24" alt="">
                        <span>좋아요 표시한 동영상</span>
                    </a>
                </li>
            </ul>
            <hr>

            <ul class="nav flex-column">
                <h6 class="sidebar-heading">구독</h6>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="GCL 지씨엘">
                        <img src="img/GCL.webp" class="rounded-circle me-3" width="24" height="24" alt="GCL 지씨엘">
                        <span>GCL 지씨엘</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="어퍼컷Tube">
                        <img src="img/uppercut.jpg" class="rounded-circle me-3" width="24" height="24" alt="어퍼컷Tube">
                        <span>어퍼컷Tube</span>
                    </a>
                </li>

                <hr>

                <ul class="nav flex-column">
                    <h6 class="sidebar-heading">탐색</h6>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="인기 급상승">
                            <i class="fas fa-fire"></i> <span>인기 급상승</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="쇼핑">
                            <i class="fas fa-shopping-bag"></i> <span>쇼핑</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="음악">
                            <i class="fas fa-music"></i> <span>음악</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="영화">
                            <i class="fas fa-film"></i> <span>영화</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="실시간">
                            <i class="fas fa-broadcast-tower"></i> <span>실시간</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="게임">
                            <i class="fas fa-gamepad"></i> <span>게임</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="스포츠">
                            <i class="fas fa-trophy"></i> <span>스포츠</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="학습">
                            <i class="fas fa-lightbulb"></i> <span>학습</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="팟캐스트">
                            <i class="fas fa-microphone-alt"></i> <span>팟캐스트</span>
                        </a>
                    </li>
                </ul>
                <hr>

                <ul class="nav flex-column">
                    <h6 class="sidebar-heading">YouTube 더보기</h6>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="YouTube Premium">
                            <i class="fab fa-youtube"></i> <span>YouTube Premium</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="영화 및 TV">
                            <i class="fas fa-film"></i> <span>영화 및 TV</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="게임">
                            <i class="fas fa-gamepad"></i> <span>게임</span>
                        </a>
                    </li>
                </ul>
                <hr>

                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="설정">
                            <i class="fas fa-cog"></i> <span>설정</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="신고 기록">
                            <i class="fas fa-flag"></i> <span>신고 기록</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="고객센터">
                            <i class="fas fa-question-circle"></i> <span>고객센터</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="의견 보내기">
                            <i class="fas fa-comment-alt"></i> <span>의견 보내기</span>
                        </a>
                    </li>
                </ul>
                <hr>

                <div class="sidebar-footer px-4 py-3 text-muted" style="font-size: 0.75rem;">
                    <p>
                        <a href="#" class="text-muted me-2">정보</a>
                        <a href="#" class="text-muted me-2">보도자료</a>
                        <a href="#" class="text-muted me-2">저작권</a>
                        <a href="#" class="text-muted me-2">문의하기</a><br>
                        <a href="#" class="text-muted me-2">크리에이터</a>
                        <a href="#" class="text-muted me-2">광고</a>
                        <a href="#" class="text-muted me-2">개발자</a>
                    </p>
                    <p>
                        <a href="#" class="text-muted me-2">약관</a>
                        <a href="#" class="text-muted me-2">개인정보처리방침</a>
                        <a href="#" class="text-muted me-2">정책 및 안전</a>
                        <a href="#" class="text-muted me-2">YouTube 작동의 원리</a>
                        <a href="#" class="text-muted me-2">새로운 기능 테스트</a>
                    </p>
                    <p>© 2025 Google LLC</p>
                </div>
            </ul>
        </div>
    </div>
    
    <!--
    사이드 바 토글 구현을 위해 사이드 바 각각 구현
    축소 사이드바-->
    <div class="reduce-sidebar" id="reduceSidebar">
        <div class="py-2">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html" aria-label="홈">
                        <img src="img/home.png" class="rounded-circle me-3" width="36" height="36"> <span>홈</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="Shorts">
                        <img src="img/shorts.png" class="rounded-circle me-3" width="36" height="36">
                        <span>Shorts</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sub.html" aria-label="구독">
                        <img src="img/sub.png" class="rounded-circle me-3" width="36" height="36"> <span>구독</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="보관함">
                        <img src="img/mypage.png" class="rounded-circle me-3" width="36" height="36"> <span>내 페이지</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!--확장 사이드바-->
    <div class="expand-sidebar" id="expandSidebar">
        <div class="py-2">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active homebutton" aria-current="page" href="index.html" aria-label="홈">
                        <img src="img/home.png" class="rounded-circle me-3" width="24" height="24"> <span>홈</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="Shorts">
                        <img src="img/shorts.png" class="rounded-circle me-3" width="24" height="24">
                        <span>Shorts</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link subbutton" href="sub.html" aria-label="구독">
                        <img src="img/sub.png" class="rounded-circle me-3" width="24" height="24"> <span>구독</span>
                    </a>
                </li>
            </ul>
            <hr>

            <ul class="nav flex-column">
                <h6 class="sidebar-heading">내 페이지</h6>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="시청 기록">
                        <img src="img/history.png" class="rounded-circle me-3" width="24" height="24"><span>시청 기록</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="재생목록">
                        <img src="img/playlist.png" class="rounded-circle me-3" width="24" height="24">
                        <span>재생목록</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="내 동영상">
                        <img src="img/myVideo.png" class="rounded-circle me-3" width="24" height="24">
                        <span>내 동영상</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="나중에 볼 동영상">
                        <img src="img/later.png" class="rounded-circle me-3" width="24" height="24">
                        <span>나중에 볼 동영상</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="좋아요 표시한 동영상">
                        <img src="img/thumb_up.png" class="rounded-circle me-3" width="24" height="24">
                        <span>좋아요 표시한 동영상</span>
                    </a>
                </li>
            </ul>
            <hr>

            <ul class="nav flex-column">
                <h6 class="sidebar-heading">구독</h6>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="GCL 지씨엘">
                        <img src="img/GCL.webp" class="rounded-circle me-3" width="24" height="24" alt="GCL 지씨엘">
                        <span>GCL 지씨엘</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-label="어퍼컷Tube">
                        <img src="img/uppercut.jpg" class="rounded-circle me-3" width="24" height="24" alt="어퍼컷Tube">
                        <span>어퍼컷Tube</span>
                    </a>
                </li>

                <hr>

                <ul class="nav flex-column">
                    <h6 class="sidebar-heading">탐색</h6>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="인기 급상승">
                            <i class="fas fa-fire"></i> <span>인기 급상승</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="쇼핑">
                            <i class="fas fa-shopping-bag"></i> <span>쇼핑</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="음악">
                            <i class="fas fa-music"></i> <span>음악</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="영화">
                            <i class="fas fa-film"></i> <span>영화</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="실시간">
                            <i class="fas fa-broadcast-tower"></i> <span>실시간</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="게임">
                            <i class="fas fa-gamepad"></i> <span>게임</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="스포츠">
                            <i class="fas fa-trophy"></i> <span>스포츠</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="학습">
                            <i class="fas fa-lightbulb"></i> <span>학습</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="팟캐스트">
                            <i class="fas fa-microphone-alt"></i> <span>팟캐스트</span>
                        </a>
                    </li>
                </ul>
                <hr>

                <ul class="nav flex-column">
                    <h6 class="sidebar-heading">YouTube 더보기</h6>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="YouTube Premium">
                            <i class="fab fa-youtube"></i> <span>YouTube Premium</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="영화 및 TV">
                            <i class="fas fa-film"></i> <span>영화 및 TV</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="게임">
                            <i class="fas fa-gamepad"></i> <span>게임</span>
                        </a>
                    </li>
                </ul>
                <hr>

                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="설정">
                            <i class="fas fa-cog"></i> <span>설정</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="신고 기록">
                            <i class="fas fa-flag"></i> <span>신고 기록</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="고객센터">
                            <i class="fas fa-question-circle"></i> <span>고객센터</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-label="의견 보내기">
                            <i class="fas fa-comment-alt"></i> <span>의견 보내기</span>
                        </a>
                    </li>
                </ul>
                <hr>

                <div class="sidebar-footer px-4 py-3 text-muted" style="font-size: 0.75rem;">
                    <p>
                        <a href="#" class="text-muted me-2">정보</a>
                        <a href="#" class="text-muted me-2">보도자료</a>
                        <a href="#" class="text-muted me-2">저작권</a>
                        <a href="#" class="text-muted me-2">문의하기</a><br>
                        <a href="#" class="text-muted me-2">크리에이터</a>
                        <a href="#" class="text-muted me-2">광고</a>
                        <a href="#" class="text-muted me-2">개발자</a>
                    </p>
                    <p>
                        <a href="#" class="text-muted me-2">약관</a>
                        <a href="#" class="text-muted me-2">개인정보처리방침</a>
                        <a href="#" class="text-muted me-2">정책 및 안전</a>
                        <a href="#" class="text-muted me-2">YouTube 작동의 원리</a>
                        <a href="#" class="text-muted me-2">새로운 기능 테스트</a>
                    </p>
                    <p>© 2025 Google LLC</p>
                </div>
            </ul>
        </div>
    </div>
    `;
    sidebarGrid.appendChild(sideDiv);

    // 사이드 바 토글버튼 이벤트 리스너 연결
    const sidebarToggle = document.getElementById('sidebarToggle');
    const body = document.body;

    // 초기 상태 설정 - 처음엔 확장 사이드 바 클래스 삽입
    body.classList.add('expanded-sidebar');
    body.classList.remove('reduced-sidebar');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            // 버튼 클릭시 toggle 메소드로 클래스 교체
            body.classList.toggle('reduced-sidebar');
            body.classList.toggle('expanded-sidebar');
        });
    }
});