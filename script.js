// 严格模式，让代码更规范
'use strict';

// 功能1：导航栏在滚动时添加阴影效果
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// 功能2：滚动时元素淡入动画
// 创建一个“观察者”
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // 当元素进入视窗时
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 // 元素进入视窗10%时触发
});

// 获取所有需要动画的元素
const animatedElements = document.querySelectorAll('.anim-fade-in');

// 让“观察者”去观察这些元素
animatedElements.forEach(el => {
    observer.observe(el);
});