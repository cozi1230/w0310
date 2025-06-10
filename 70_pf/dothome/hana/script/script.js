// 2. 준비 이벤트 작성하기
// 문서 객체가 준비되면 함수 내용을 실행한다.
$(document).ready(function () {
    // 1. 공지사항의 첫 번째 요소 클릭
    $('li:first-of-type').click(function () {
        // 2. .modal을 보여준다.
        $('modal').show();
    });
    // 3. 팝업의 닫기 버튼을 클릭하면
    $('.popup a').click(function () {
        // 4. .modal을 숨긴다.
        $('modal').hide();
    });
});