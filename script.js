function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
                initNavigation();
            }
        })
        .catch(error => {
            console.error('加载组件失败:', url, error);
        });
}

function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if ((currentPage === '' || currentPage === 'index.html') && href === 'index.html') {
            link.classList.add('active');
        } else if (currentPage === href) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header.html', 'header-container');
    loadComponent('footer.html', 'footer-container');
});