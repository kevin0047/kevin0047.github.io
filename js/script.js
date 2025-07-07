// 부드러운 스크롤 함수
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// 추가적인 JavaScript 기능들을 여기에 추가할 수 있습니다
// 예: 스크롤 시 네비게이션 하이라이트, 애니메이션 등

// 스크롤 시 현재 섹션 하이라이트 (선택사항)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section, .home-section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(current)) {
            link.classList.add('active');
        }
    });
});