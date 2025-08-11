
// Simple nav toggle for small screens + smooth anchor scrolling
const btn = document.querySelector('.nav-toggle');
const list = document.querySelector('#nav-list');
if (btn && list){
  btn.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      list?.classList.remove('open');
      btn?.setAttribute('aria-expanded','false');
    }
  });
});
