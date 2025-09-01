// 年
const y=document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href'); if(id.length>1){ e.preventDefault(); document.querySelector(id).scrollIntoView({behavior:'smooth'}); }
  });
});

// Reveal
const io=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-visible');io.unobserve(en.target);}})},{threshold:.16});
document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

