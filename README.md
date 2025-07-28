# CloneYT
CloneYT

7.23
사이드바를 만들다 보니 중복되는 요소들이 많이 생기는데, 이는 웹 컴포넌틀 통해 해결 가능하다.
자세한 방법은 내일 알아보자

7.24
웹 컴포넌트 기능을 찾아봤는데 현재 코드에 적용하기 어려워 조금 더 간단한 방법으로 appendChild() 메소드를 이용해 구현했다.

7.25
비디오 플레이어 페이지를 작성할 때 반응형 웹을 구현하기 위해 부트스트랩의 그리드 시스템에 대한 지식이 더 필요해 보인다.<br>

https://getbootstrap.kr/docs/5.0/utilities/flex/

https://inpa.tistory.com/entry/BootStrap5-%F0%9F%93%9A-%EB%B0%98%EC%9D%91%ED%98%95-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%A0%95%EB%A6%AC-%EA%B7%B8%EB%A6%AC%EB%93%9C

https://inpa.tistory.com/entry/BootStrap5-%F0%9F%93%9A-%EB%B0%98%EC%9D%91%ED%98%95-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%A0%95%EB%A6%AC-%EC%A0%95%EB%A0%AC

순서 class .order- <br>
콘텐츠의 시각적 순서를 제어하기 위해 중단점을 기준으로 order 설정 가능<br>
중단점 이전이 html 코드이고, 중단점 이후의 순서는 order 에 명시된 대로 이동
```js
<div class="row">
    <div class="col-12 col-lg-8 order-lg-1">
        <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/xlaPti4ElCk?si=Du5ogA2FbwpEwj3_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h2 class="mt-3">동영상 제목</h2>
        <p class="text-secondary">조회수 1,234,567회 • 2024. 07. 25.</p>
    </div>

    <div class="col-12 col-lg-4 order-lg-2">
        <div class="related-content bg-dark text-white p-3 rounded mt-4 mt-lg-0">
            <h4>다음 동영상</h4>
            <ul class="list-unstyled">
                <li class="mb-2">관련 동영상 1</li>
                <li class="mb-2">관련 동영상 2</li>
                <li class="mb-2">관련 동영상 3</li>
            </ul>
        </div>
    </div>

    <div class="col-12 col-lg-8 order-lg-3">
        <div class="comments-section bg-dark text-white p-3 rounded mt-4">
            <h4>댓글</h4>
            <p>댓글 내용...</p>
            <p>또 다른 댓글...</p>
        </div>
    </div>
</div>
```