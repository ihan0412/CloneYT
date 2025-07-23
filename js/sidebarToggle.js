document.addEventListener('DOMContentLoaded', function() {
    // 데스크톱 사이드바 토글 버튼 선택
    const sidebarToggle = document.getElementById('sidebarToggle');
    // body 태그 선택 (여기에 클래스를 추가/제거하여 사이드바 상태 변경)
    const body = document.body;

    // 초기상태 설정
    body.classList.add('expanded-sidebar');
    body.classList.remove('reduced-sidebar');

    // 데스크톱 사이드바 토글 버튼이 존재하는 경우에만 이벤트 리스너 추가
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            body.classList.toggle('reduced-sidebar');
            body.classList.toggle('expanded-sidebar');
        });
    }

});