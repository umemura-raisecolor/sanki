document.querySelectorAll('.menu-btn').forEach(b=>b.addEventListener('click',()=>document.querySelector('nav.gnav').classList.toggle('open')));
document.querySelectorAll('form.form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();f.querySelector('.demo-note').style.display='block'}));
