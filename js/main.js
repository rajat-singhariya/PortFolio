var r=document.documentElement,b=document.getElementById('theme');
function sync(){var d=r.getAttribute('data-theme')==='dark'||(!r.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);b.textContent=d?'☀':'☾';return d}
try{var s=localStorage.getItem('theme');if(s)r.setAttribute('data-theme',s)}catch(e){}
sync();
b.onclick=function(){var n=sync()?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}sync()};
document.getElementById('up').onclick=function(){scrollTo({top:0,behavior:'smooth'})};
var mb=document.getElementById('mb'),lk=document.querySelector('.links'),bk=document.getElementById('mbk');
lk.querySelectorAll('a').forEach(function(a,i){a.style.setProperty('--i',i)});
function sm(o){lk.classList.toggle('open',o);document.body.classList.toggle('menu-open',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')}
function cm(){sm(false)}
mb.onclick=function(){sm(!lk.classList.contains('open'))};
lk.addEventListener('click',function(e){if(e.target.closest('a'))cm()});
bk.onclick=cm;addEventListener('keydown',function(e){if(e.key==='Escape')cm()});
addEventListener('resize',function(){if(innerWidth>1260)cm()});
document.getElementById('y').textContent=new Date().getFullYear();
var RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
(function(){var ic={javascript:'brands js',php:'brands php',python:'brands python',html5:'brands html5',css3:'brands css3-alt',bootstrap:'brands bootstrap',tailwind:'solid wind',react:'brands react',jquery:'solid code',node:'brands node-js',express:'solid server',laravel:'brands laravel',rest:'solid plug',jwt:'solid key',pdo:'solid shield-halved',mongodb:'solid leaf',sql:'solid database',claude:'solid brain',gemini:'solid gem',llm:'solid robot',prompt:'solid comment-dots',github:'brands github',git:'brands git-alt',docker:'brands docker',postman:'solid paper-plane',vercel:'solid cloud',render:'solid cloud',railway:'solid cloud',rbac:'solid user-shield',leaflet:'solid map-location-dot'};
document.querySelectorAll('.pills span').forEach(function(s){var n=s.textContent.toLowerCase();for(var k in ic){if(n.indexOf(k)>-1){var p=ic[k].split(' ');s.innerHTML='<i class="fa-'+p[0]+' fa-'+p[1]+'"></i>'+s.textContent;break}}});
var m=document.getElementById('mq');m.innerHTML+=m.innerHTML})();
if(window.Typed&&!RM)new Typed('#typed',{strings:DATA.profile.typed,typeSpeed:55,backSpeed:30,backDelay:1500,loop:true});
addEventListener('scroll',function(){document.getElementById('sp').style.transform='scaleX('+(r.scrollTop/(r.scrollHeight-r.clientHeight||1))+')'},{passive:true});
if(window.gsap&&!RM){
gsap.from('.hero small,.hero h1,.hero h3,.hero p,.hero .cta,.hero .socr',{y:45,opacity:0,duration:.9,stagger:.13,ease:'power3.out',clearProps:'transform,opacity'});
gsap.from('.cut',{y:60,opacity:0,duration:1.1,delay:.35,ease:'power3.out',clearProps:'transform,opacity'});
document.querySelectorAll('.btn.p,.btn.s,#up').forEach(function(x){x.addEventListener('pointermove',function(e){var q=x.getBoundingClientRect();gsap.to(x,{x:(e.clientX-q.left-q.width/2)*.25,y:(e.clientY-q.top-q.height/2)*.35,duration:.3})});x.addEventListener('pointerleave',function(){gsap.to(x,{x:0,y:0,duration:.6,ease:'elastic.out(1,.4)'})})});
if(window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.t,.job,.card,.ach,.sc,.sv,.sb,.ab>*,.cb,form,.ft>div').forEach(function(el){gsap.from(el,{y:50,opacity:0,duration:.85,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:el,start:'top 92%',once:true}})});
document.querySelectorAll('.stats b').forEach(function(x){var t=x.textContent,n=parseFloat(t),sf=t.replace(/^[\d.]+/,''),dec=(t.split('.')[1]||'').match(/^\d*/)[0].length,o={v:0};if(isNaN(n))return;x.textContent='0'+sf;ScrollTrigger.create({trigger:x,start:'top 94%',once:true,onEnter:function(){gsap.to(o,{v:n,duration:1.8,ease:'power2.out',onUpdate:function(){x.textContent=o.v.toFixed(dec)+sf}})}})})}}
if(window.VanillaTilt&&!RM&&matchMedia('(hover:hover)').matches)VanillaTilt.init(document.querySelectorAll('.card,.sc,.sv'),{max:7,speed:500,glare:true,'max-glare':.12});
if(window.VanillaTilt&&!RM&&matchMedia('(hover:hover)').matches)VanillaTilt.init(document.querySelector('.pf'),{max:16,speed:600,glare:true,'max-glare':.25,perspective:900,scale:1.03});
