document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('.login-btn');

    // 입력 필드가 비어있으면 로그인 버튼 비활성화
    const checkInputs = () => {
        if (usernameInput.value && passwordInput.value) {
            loginButton.disabled = false;
            loginButton.style.backgroundColor = '#4cb5f9';
        } else {
            loginButton.disabled = true;
            loginButton.style.backgroundColor = '#b2dffc';
        }
    };

    usernameInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    checkInputs(); // 페이지 로드 시 초기 상태 확인

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // 아이디와 비밀번호 확인
        if (username === 'lutis' && password === 'goormlutis') {
            alert('로그인 성공!');
            // 여기에 메인 페이지로 가는 url 작성 필요!
            window.location.href = '../main-page/index.html';
        } else {
            alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    });
});