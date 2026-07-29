
const menu=document.querySelector('.menu'),links=document.querySelector('.links');if(menu)menu.onclick=()=>links.classList.toggle('open');
const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dot')];let cur=0;
function show(i){slides.forEach((s,x)=>s.classList.toggle('active',x===i));dots.forEach((d,x)=>d.classList.toggle('on',x===i));cur=i}
dots.forEach((d,i)=>d.onclick=()=>show(i));if(slides.length)setInterval(()=>show((cur+1)%slides.length),5000);
const af=document.getElementById('accountForm');if(af)af.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('n').value,m=document.getElementById('m').value,s=document.getElementById('s').value,b=document.getElementById('b').value;const t=`Online Account Enquiry%0AName: ${encodeURIComponent(n)}%0AMobile: ${encodeURIComponent(m)}%0AScheme: ${encodeURIComponent(s)}%0ABudget: ${encodeURIComponent(b)}`;window.open(`https://wa.me/918208400944?text=${t}`,'_blank')});
