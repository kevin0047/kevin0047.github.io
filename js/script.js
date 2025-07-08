// 부드러운 스크롤 함수
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// 스크롤 시 네비게이션 바 스타일 변경 및 현재 섹션 하이라이트
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.section, .home-section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const aboutTitle = document.querySelector('#about h2');
    const aboutSection = document.getElementById('about');
    
    // 상단바 스타일 변경
    if (window.pageYOffset > 800) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // 어바웃미 타이틀 표시/숨김 제어
if (aboutSection) {
    const aboutTop = aboutSection.offsetTop;
    const aboutBottom = aboutTop + aboutSection.offsetHeight;
    const scrollPos = window.pageYOffset;
    
    const showOffset = 200;
    const hideOffset = -100;
    
    if (scrollPos >= (aboutTop - showOffset) && scrollPos <= (aboutBottom + hideOffset)) {
        aboutTitle.classList.add('show');
    } else {
        aboutTitle.classList.remove('show');
    }
}
    
    // 현재 섹션 하이라이트
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
