const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],li=a=>a.map(x=>`<li>${x}</li>`).join('');
const CONFIG=window.HARDLAUNCH_CONFIG;
const h=$('#h'),mb=$('#mb');
const contactData={phone:CONFIG.PHONE&&{href:'tel:'+CONFIG.PHONE.replace(/[^\d+]/g,''),label:CONFIG.PHONE},email:CONFIG.CONTACT_EMAIL&&{href:'mailto:'+CONFIG.CONTACT_EMAIL,label:CONFIG.CONTACT_EMAIL},linkedin:CONFIG.LINKEDIN&&{href:CONFIG.LINKEDIN,label:'LinkedIn'}};
let shownContacts=0;
$$('[data-contact]').forEach(a=>{const c=contactData[a.dataset.contact];if(!c)return;a.href=c.href;a.textContent=c.label;a.hidden=false;shownContacts++});
$('[data-contact-links]').hidden=!shownContacts;
addEventListener('scroll',()=>h.classList.toggle('sc',scrollY>20),{passive:true});
mb.onclick=()=>mb.setAttribute('aria-expanded',h.classList.toggle('open'));
addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]'),t=a&&document.getElementById(a.getAttribute('href').slice(1));if(!t)return;e.preventDefault();h.classList.remove('open');mb.setAttribute('aria-expanded','false');t.scrollIntoView({behavior:'smooth'})});
$('#pipe').innerHTML=li(['New lead<em>Whitefield · 2BHK</em>','AI response<em>5 min</em>','Qualification<em>6 of 6 fields</em>','HOT<em>Investment · 60 days</em>','Sales handoff<em>Assigned</em>','Site visit<em>Scheduled</em>']);
let pi=0;const pipeline=$$('#pipe li');const advancePipeline=()=>{pipeline.forEach((e,i)=>e.classList.toggle('on',i<=pi));pi=(pi+1)%pipeline.length};advancePipeline();setInterval(advancePipeline,1200);
$('#src').innerHTML=li(['Google Ads','Meta Ads','Website','WhatsApp','Existing database','Cold outreach']);
$('#pains').innerHTML=li(['Leads arrive from many channels and nobody sees them in one place.','Leads arrive 24/7. Sales teams can’t respond instantly.','Salespeople waste time qualifying low-intent leads.','Leads disappear inside WhatsApp chats and spreadsheets.','Follow-ups are inconsistent, and ad spend is hard to connect to sales activity.','Repetitive conversations overwhelm the team.']);
const W=[['Generate','Leads enter from Google Ads, Meta Ads, your website, WhatsApp, existing databases and cold outreach.'],['Capture','Every enquiry lands in one system, whatever the channel.'],['Respond','The AI replies within about 5–7 minutes, at any hour.'],['Qualify','The AI collects budget, location, property type, BHK, timeline, purpose and financing, then classifies the lead HOT, WARM or COLD.'],['Nurture','WARM leads and future buyers get follow-ups until the timing is right.'],['Match','Requirements are compared with your project inventory to find the best fit.'],['Hand off','HOT leads go to the right salesperson with the full conversation context.'],['Report','Managers get visibility through the dashboard, analytics and EOD report.']];
$('#wf').innerHTML=W.map((w,i)=>`<button role="tab" data-i="${i}"><small>0${i+1}</small>${w[0]}</button>`).join('');
const sw=i=>{$$('#wf button').forEach((b,j)=>b.setAttribute('aria-selected',i==j));$('#wd').textContent=W[i][1]};
$('#wf').onclick=e=>{const b=e.target.closest('button');b&&sw(+b.dataset.i)};sw(0);
const sl=ms=>new Promise(r=>setTimeout(r,matchMedia('(prefers-reduced-motion:reduce)').matches?0:ms));
const C=[['l','I’m looking for a 2BHK in Whitefield around ₹80L.',{b:'₹80L',l:'Whitefield',p:'2BHK'}],['a','Absolutely. Are you looking primarily for investment or self-use?'],['l','Investment.',{u:'Investment'}],['a','Got it. When are you looking to make the purchase?'],['l','Within 60 days.',{t:'60 days',i:'HOT'}],['a','Based on your requirements, I can help identify the projects that fit your budget and timeline.']];
let run=0;
async function play(){const id=++run,ch=$('#chat');ch.innerHTML='';$$('.pn b').forEach(b=>{b.textContent='—';b.className=''});$('#bar').style.width=0;
for(const [w,t,f] of C){if(id!=run)return;const m=document.createElement('div');m.className='m '+w;ch.append(m);
if(w=='a'){m.innerHTML='<span class="dots"><i></i><i></i><i></i></span>';await sl(900)}else await sl(800);if(id!=run)return;m.textContent=t;
if(f)for(const k in f){const e=$('#f'+k);e.textContent=f[k];e.className=k=='i'?'bd HOT':'f';$('#bar').style.width=$$('.pn .f,.pn .bd').length/6*100+'%'}}}
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){o.disconnect();play()}}).observe($('#chat'));
$('#rp').onclick=play;
$('#seg').innerHTML=[['HOT','High buying intent.','Immediate sales handoff to the right salesperson.'],['WARM','Interested, but needs time.','Automated nurturing and reminders until the timing is right.'],['COLD','Low or unclear intent.','Organised follow-up that doesn’t spend sales-team time.']].map(s=>`<div class="c seg ${s[0]}"><h3>${s[0]}</h3><p>${s[1]}</p><p class="mu">${s[2]}</p></div>`).join('');
$('#tl').innerHTML=li(['HOT lead','Assigned to salesperson','Sales team notified','30-minute follow-up timer','No action: reminder','Still no action: manager escalation','Possible reassignment']);
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){o.disconnect();$$('#tl li').forEach((l,i)=>setTimeout(()=>l.classList.add('on'),i*450))}}).observe($('#tl'));
const L=[['Rohan M.','Whitefield','₹80L','HOT','Pending','Priya','Call within 30 min'],['Ananya S.','Sarjapur Road','₹1.2Cr','WARM','Pending','Karthik','Reconnect in 6 months'],['Vikram R.','Hebbal','₹65L','COLD','Pending','Unassigned','Follow up in 5 days'],['Meera N.','Whitefield','₹95L','HOT','Converted','Priya','Closed'],['Imran K.','Yelahanka','₹70L','WARM','Pending','Arjun','Share shortlist'],['Divya P.','Electronic City','₹55L','COLD','Pending','Unassigned','Re-qualify']];
$('#flt').innerHTML=['All','HOT','WARM','COLD','Pending','Converted'].map((f,i)=>`<button aria-pressed="${!i}">${f}</button>`).join('');
const rd=f=>$('#tb').innerHTML=L.filter(r=>f=='All'||r[3]==f||r[4]==f).map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><span class="bd ${r[3]}">${r[3]}</span></td><td>${r[4]}</td><td>${r[5]}</td><td>${r[6]}</td></tr>`).join('');
$('#flt').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#flt button').forEach(x=>x.setAttribute('aria-pressed',x==b));rd(b.textContent)};rd('All');
$('#eod').innerHTML=li(['Total leads','Qualified leads','HOT / WARM / COLD','AI conversations','Sales handoffs','Appointments','Site visits','Conversions','Ad spend','Cost per lead','Response time','Pending leads','Manager attention']);
$('#gr').innerHTML=li(['Make up property information','Promise unauthorised discounts','Argue with customers','Spam leads','Share confidential information','Pretend to be human','Interfere with a lead a salesperson is already handling']);
$('#days').innerHTML=['Setup','Lead flow','AI conversations','Qualification','Follow-up','Analytics','Review'].map((d,i)=>`<div><small>DAY ${i+1}</small><b>${d}</b></div>`).join('');
$('#faql').innerHTML=[['Does Hardlaunch replace my sales team?','No. It handles repetitive early-stage work so your team can focus on site visits, negotiation and closing.'],['Where do leads come from?','Google Ads, Meta Ads, websites, WhatsApp, existing databases and other configured sources.'],['Can it work with existing leads?','Yes. Existing databases connect through Google Sheets. Hardlaunch skips any lead a salesperson is already following up.'],['How quickly does the AI respond?','The target is roughly 5–7 minutes after an enquiry.'],['What happens to HOT leads, and if nobody follows up?','They are assigned to a salesperson and the team is notified. If there’s no action, the system can remind, escalate to a manager and potentially reassign.'],['Can the AI handle multiple projects?','Yes. It uses your project information to identify suitable matches.'],['What if the AI doesn’t know an answer?','It doesn’t invent information. It collects the question and routes it to your sales team.'],['Do I need a CRM?','No. The workflow starts with Google Sheets, with CRM infrastructure planned for the future.'],['Is advertising included?','Ad management is included. Your actual ad spend is separate.'],['Can I try before committing?','Yes. Hardlaunch offers a 7-day pilot.']].map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('');
const ENDPOINT=CONFIG.ENDPOINT;
const RID=()=>crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2);
let rid=RID(),busy=0;
async function submitPilotRequest(d){if(!ENDPOINT)throw new Error('not_connected');const c=new AbortController(),t=setTimeout(()=>c.abort(),20000);
try{const r=await fetch(ENDPOINT,{method:'POST',signal:c.signal,headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(d)}),j=await r.json();if(!j.ok)throw new Error(j.error||'failed');return j}finally{clearTimeout(t)}}
const chk=x=>{const v=x.value.trim();return!v?'Required':x.type=='email'&&!/^\S+@\S+\.\S+$/.test(v)?'Enter a valid email, like name@company.com':x.type=='tel'&&v.replace(/\D/g,'').length<8?'Enter a phone number with at least 8 digits':''};
const mark=x=>{const m=chk(x),l=x.closest('label');let n=l.querySelector('.fe');if(!n){n=document.createElement('small');n.className='fe';l.append(n)}n.textContent=m;x.setAttribute('aria-invalid',!!m);return m};
$$('#f [required]').forEach(x=>{x.onblur=()=>mark(x);x.oninput=()=>x.getAttribute('aria-invalid')=='true'&&mark(x)});
const send=async()=>{if(busy)return;const f=$('#f'),b=$('#sb'),bad=$$('[required]',f).map(mark).filter(Boolean);
$('#er').textContent=bad.length?'Please fix the highlighted fields.':'';
if(bad.length){$('[aria-invalid=true]',f).focus();return}
busy=1;b.classList.add('ld');b.textContent='Sending';const d={rid};$$('[name]',f).forEach(x=>d[x.name]=x.value.trim());let ok=0;
try{await submitPilotRequest(d);ok=1;rid=RID();$('#em').textContent=d.email;f.style.display='none';$('#ok').style.display='block';$('#ok').focus()}
catch(e){$('#er').textContent=e.message=='not_connected'?'This form isn’t connected to its backend yet, so nothing was sent.':e.message=='invalid'?'Some details were not accepted. Please check them and try again.':e.name=='AbortError'?'That took longer than expected, so your request may not have gone through. Please try again.':'We couldn’t send your request. Check your connection and try again.'}
busy=0;b.classList.remove('ld');b.textContent=ok?'Request Pilot':'Try again'};
$('#sb').onclick=send;$$('#f input').forEach(i=>i.onkeydown=e=>{if(e.key=='Enter')send()});
