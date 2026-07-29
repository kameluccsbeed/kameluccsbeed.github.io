const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const f=n=>'₹'+Math.round(n).toLocaleString('en-IN');
function calculate(){
 const price=+document.getElementById('price').value||0;
 const down=+document.getElementById('down').value||0;
 const months=+document.getElementById('months').value||1;
 const rent=+document.getElementById('rent').value||0;
 const finance=price-(price*down/100);
 document.getElementById('finance').textContent=f(finance);
 document.getElementById('emi').textContent=f(finance/months+rent);
}
document.getElementById('calcBtn').addEventListener('click',calculate);
['price','down','months','rent'].forEach(id=>document.getElementById(id).addEventListener('input',calculate));
document.getElementById('enquiryForm').addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.getElementById('name').value.trim();
 const phone=document.getElementById('phone').value.trim();
 const scheme=document.getElementById('scheme').value;
 const budget=document.getElementById('budget').value.trim();
 const message=document.getElementById('message').value.trim();
 const text=`Assalamualaikum, mujhe Kamel Urban Society ki service ke bare me jankari chahiye.%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(scheme)}%0AMonthly Budget: ${encodeURIComponent(budget)}%0AMessage: ${encodeURIComponent(message)}`;
 window.open(`https://wa.me/918208400944?text=${text}`,'_blank');
});
calculate();