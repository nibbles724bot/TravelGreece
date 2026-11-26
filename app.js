'use strict';
// Fields: category, place, title, morning, afternoon, evening, lodging, notes, map, rhythm, photo.
const itinerary = [
  ["mainland", "雅典", "把步調交給雅典", "機場抵達，搭機場交通至市區，寄放行李", "入住 Plaka／Koukaki 周邊，巷弄慢走", "希臘沙拉與烤肉捲，早點休息調時差", "雅典", "抵達日不排付費預約。假設 9/24 已抵達希臘；若自台灣當日出發，須減少一天景點。", "Plaka Athens", "move", "plaka"],
  ["mainland", "雅典", "與兩千年前的石柱見面", "預約雅典衛城早場，避開人潮", "衛城博物館，午餐後留一段休息", "Anafiotika 白色小巷，找間露台吃晚餐", "雅典", "衛城與博物館分別確認門票。石面易滑，帶防滑鞋、帽子與飲水；時段依當年公告。", "Acropolis Athens", "explore", "acropolis"],
  ["mainland", "雅典", "市集裡的小小日常", "古市集與赫淮斯托斯神廟", "Monastiraki 市集、咖啡與紀念品", "Philopappos 山丘散步，天黑前下山", "雅典", "今天多走路，下午可依體力刪減。隔日取車前先確認租車保險、駕照文件與停車。", "Ancient Agora Athens", "relaxed", "agora"],
  ["mainland", "德爾菲", "早早出發，把午後留給遺址", "約 08:00 從雅典取車出發，途中休息", "午餐後參觀德爾菲遺址，慢慢看石柱與山谷", "入住德爾菲小鎮，早點吃晚餐、休息", "德爾菲", "駕車暫抓 2.5–3 小時，另留取車與休息時間。博物館留到隔天；兩天分開參觀須先確認票券跨日效期，未獲確認則改同日參觀或預留再次購票費。", "Delphi Archaeological Site", "move", "delphi"],
  ["mainland", "德爾菲 → 梅特歐拉", "看完博物館，再去天空之城", "早餐後收行李，依開館時間參觀德爾菲博物館", "預留約 1.5–2 小時看館，午餐後開往 Kalambaka", "抵達入住、吃晚餐；今天不再排修道院", "Kalambaka／Kastraki", "9/28 是週二，博物館現行夏季週二 10:00 開館（2027 待核），不預設 08:00 入場。駕車另抓 3.5–4 小時加休息，依實際離館時間調整，晚到就直接休息。", "Delphi Archaeological Museum", "move", "delphi"],
  ["mainland", "梅特歐拉", "今天，慢慢看天空之城", "挑選 1–2 間當日開放的修道院，不追求全收集", "Kastraki 午餐、咖啡，留一段午休", "視體力到容易抵達的觀景點看岩柱夕照", "Kalambaka／Kastraki", "修道院各有休息日，2027 開放時間待核；穿著依現場規範並預留階梯時間。今天看主要景點，明早只挑一間不重複、且能早入場的修道院。", "Meteora Monasteries", "explore", "meteora"],
  ["mainland", "梅特歐拉 → 比雷埃夫斯", "早點上路，今晚住在港邊", "最多看一座早開的修道院，目標 10:00–10:30 前離開", "分段開回雅典，目標日落前抵達並完成還車", "入住比雷埃夫斯港附近，確認隔日登船入口", "比雷埃夫斯港附近", "車程暫抓約 5 小時並另留休息、塞車與還車時間；若修道院開門太晚就略過。優先預約港口附近還車，備案機場還車後轉乘到港邊；確認營業時間、異地還車費與最晚交車時間。若只能市區還車，也須事先核對營業時間；住宿仍選港邊。", "Piraeus Port", "move", "piraeus"],
  ["paros", "帕羅斯", "第一站小島，先在港邊慢下來", "從港邊飯店前往比雷埃夫斯港，搭船到 Paros", "抵達 Parikia，步行或短程接送入住、午休", "Parikia 白色巷弄與港邊夕照，輕鬆吃晚餐", "帕羅斯 Parikia", "2027 秋季班表待確認，今天抓半天以上移動，不訂緊接下船的活動。住 Parikia 方便抵離港；登船入口依票面，港口附近也要預留找碼頭時間。", "Parikia Paros", "move", "parikia"],
  ["paros", "帕羅斯", "漁港邊，一杯咖啡的時間", "慢慢吃早餐，搭車前往 Naoussa 漁港", "白色巷弄、海鮮午餐與咖啡，不追打卡清單", "確認回程交通，返回 Parikia 看海吃晚餐", "帕羅斯 Parikia", "這天以散步與休息為主。秋季公車班次先查好；不想配合班表可三人分攤接送，不為了看夕陽錯過回程。", "Naoussa Paros", "relaxed", "naoussa"],
  ["paros", "帕羅斯", "把山村，收進手帳裡", "依當日公車或預約接送前往 Lefkes 山村", "大理石巷弄與小廣場午餐，喝一杯咖啡", "回 Parikia 整理行李，確認明日往納克索斯的船", "帕羅斯 Parikia", "只挑一座山村，不再串排環島與長步道。十月公車時刻需另查；若改租車，先確認還車時間，不將車帶上跳島渡輪。", "Lefkes Paros", "explore", "lefkes"],
  ["naxos", "帕羅斯 → 納克索斯", "短短一段船，換一座小島", "退房，依船班從 Parikia 港前往 Naxos", "抵達 Chora 入住，午餐後留一段休息", "Portara 阿波羅門廊，看海上日落", "納克索斯 Chora", "兩島搭船仍需計入退房、候船與入住，不把整天排滿。2027 實際船型與停靠港待核；風大時不走濕滑的 Portara 堤道。", "Portara Naxos", "move", "portara"],
  ["naxos", "納克索斯", "白色巷子，今天不趕路", "睡飽後逛 Chora 舊城與威尼斯城堡巷弄", "港邊午餐，找乳酪與在地小點，回房休息", "Agios Georgios 海灘散步，提早吃晚餐", "納克索斯 Chora", "今天步行為主。確認明早 10/6 取自排小車、10/8 上船前還車的 2 日方案，依實際取還時間計費；三人行李留飯店，避免用太小車型搬行李。", "Naxos Chora", "relaxed", "naxos-town"],
  ["naxos", "納克索斯", "開一台小車，去山村喝咖啡", "取自排小車，前往 Halki，沿途慢慢走", "Apeiranthos 大理石巷弄與午餐，不再加排遠端村落", "白天開回 Chora，港邊晚餐", "納克索斯 Chora", "納克索斯以租小車 2 天探索山村與海灘，比配合公車更自由。三人優先共用一台汽車；若改 ATV，至少需兩台，駕照類別、租車資格與保險須另外確認，費用另估。", "Halki Naxos", "explore", "halki"],
  ["naxos", "納克索斯", "今天的任務：好好發呆", "開車到 Agios Prokopios 海邊散步", "依天氣選 Plaka 海灘或咖啡館，只留一個主要停點", "回 Chora 洗衣、整理行李，查明天船況", "納克索斯 Chora", "輕鬆日不代表一定要下水，十月依海況與體感調整。確認 10/8 還車時間、送港方式及渡輪；若強風或變天，就改成城裡喝咖啡。", "Agios Prokopios Naxos", "relaxed", "agios-prokopios"],
  ["santorini", "納克索斯 → 聖托里尼", "把移動日，留給海與新風景", "依船班退房、還車，到 Naxos 港搭船", "抵達 Athinios 港，預約接送至 Fira 入住", "Fira 火山口附近短散步，吃飯後休息", "聖托里尼 Fira", "三島版將原 10/5 船段移到 10/8。秋季可能減班，要提早查 2027 班表；快船約 2 小時、一般渡輪約 4 小時僅供規劃，實際依船型及停靠港。另留上下船與港口上山時間，不安排緊接船班的預約。", "Fira Santorini", "move", "fira"],
  ["santorini", "聖托里尼", "藍頂白屋，留一整天慢慢看", "早餐後前往 Oia，慢逛白屋與巷弄", "午餐、咖啡與休息，不再加排南部景點", "在安全的公共觀景點看夕陽，再回 Fira", "聖托里尼 Fira", "不進私宅、屋頂或教堂禁入區。日落後搭車人多，事先確認回程；想更輕鬆就提早回 Fira，在住宿附近看海。", "Oia Santorini", "relaxed", "oia"],
  ["santorini", "聖托里尼", "沿著火山口，把步調放慢", "Fira 至 Firostefani 短散步，視體力續往 Imerovigli", "挑一間火山口咖啡館，午餐後回房休息", "整理行李、確認明早機票，最後一頓海景晚餐", "聖托里尼 Fira", "不預設走完整段 Fira–Oia，也不硬塞 Akrotiri 與 Pyrgos。若更想看古蹟或村落，擇一替換今天步道；遇強風改搭車。三晚版本保留兩個完整遊玩日。", "Imerovigli Santorini", "relaxed", "imerovigli"],
  ["mainland", "聖托里尼 → 雅典", "把海的顏色，一起帶回去", "優先預訂早班國內線，前往機場飛回雅典", "抵達入住，想休息就回房，只做近距離採買", "熟悉的巷子吃晚餐，確認明日國際線報到", "雅典", "三島版返雅典改為 10/11，只住 1 晚。十月航班可能調整，Aegean 等國內線提早訂；核對手提與托運行李件數、重量、票種是否含行李。今天活動可全刪，遇取消優先改當日其他班，不預設同日船班一定能救援。", "Athens Greece", "move", "plaka"],
  ["mainland", "雅典", "再見啦，我們的藍色假期", "依航班時間退房，預留前往機場交通", "建議國際航班起飛前 3 小時抵達機場", "從雅典離境，回家航程另依機票", "機上／返程", "10/12 定義為雅典離境日；返台可能是 10/13。若必須 10/12 抵台，須依國際機票重排最後一段，不直接刪掉唯一的雅典過夜。", "Athens International Airport", "move", "acropolis"]
];
const rhythms = { move: '移動日', relaxed: '輕鬆日', explore: '探索日' };
const days = document.querySelector('#days');
itinerary.forEach((d, i) => {
  const date = new Date(Date.UTC(2027, 8, 24 + i));
  const weekday = ['日','一','二','三','四','五','六'][date.getUTCDay()];
  const el = document.createElement('article');
  el.className = 'day';
  el.dataset.category = d[0];
  el.dataset.rhythm = d[9];
  const tints = { paros: '#f1eedc', naxos: '#e8eff0', santorini: '#f4e8dc' };
  el.style.setProperty('--tint', tints[d[0]] || '#edf0e5');
  el.innerHTML = `
    <div class="day-top">
      <span class="day-no">Day ${String(i + 1).padStart(2, '0')}</span>
      <div class="day-meta"><span class="day-date">${date.getUTCMonth() + 1}/${date.getUTCDate()}（${weekday}）</span><span class="rhythm-badge rhythm-${d[9]}">${rhythms[d[9]]}</span></div>
    </div>
    <div class="day-body"><span class="place">${d[1]}</span><h3>${d[2]}</h3>
      <ul class="schedule"><li><b>早上</b><span>${d[3]}</span></li><li><b>午後</b><span>${d[4]}</span></li><li><b>傍晚</b><span>${d[5]}</span></li></ul>
      <details><summary>交通與兔兔筆記</summary><p>${d[7]}</p></details>
    </div>
    <div class="night">宿：${d[6]}<a class="map-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d[8])}">看地圖</a></div>`;
  el.querySelector('.day-top').after(createPhotoFigure(d[10]));
  days.append(el);
});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});let count=0;document.querySelectorAll('.day').forEach(day=>{day.hidden=filter!=='all'&&day.dataset.category!==filter;if(!day.hidden)count++});document.querySelector('#filter-status').textContent=`顯示 ${count} 天行程`;}));
const money=n=>'NT$ '+Math.round(n).toLocaleString('zh-TW');
const budgetItems=[
['國際來回機票','台北 ↔ 雅典 · 經濟艙含稅行李',0,'flight'],
['住宿 · 18 晚','每房 €150 × 18 晚，共同分攤',2700,'shared'],
['本島租車與油資停車','4 日規劃額度，含租車保險預留',600,'shared'],
['跳島船票 · 3 段','雅典 → 帕羅斯 → 納克索斯 → 聖托里尼，每人規劃額度',160,'person'],
['國內單程機票','聖托里尼 → 雅典，含行李，每人',130,'person'],
['納克索斯租小車 · 2 日','租金與保險每日 €70 × 2 日＋油資停車 €40，共同分攤',180,'shared'],
['市區、機場與其他島上交通','公車、港口機場接駁與部分計程車；不含已另列的納克索斯租車，每人',220,'person'],
['餐食與咖啡','每人每日 €40 × 19 天',760,'person'],
['景點與體驗','古蹟、博物館、修道院與小額體驗，每人',200,'person']
];
const controls=['people','flight','rate'].map(id=>document.getElementById(id));
function updateBudget(){const [people,flight,rate]=controls.map(el=>Number(el.value));if(!controls.every(el=>el.checkValidity())||people<1){document.getElementById('per-person').textContent='請輸入有效數值';document.getElementById('budget-rows').replaceChildren();return;}let subtotal=0;const rows=budgetItems.map(([name,desc,value,type])=>{const cost=type==='flight'?flight:type==='shared'?value*rate/people:value*rate;subtotal+=cost;return `<div class="budget-row"><div><h3>${name}</h3><p>${desc}</p></div><strong>${money(cost)}<small>每人${type==='shared'?' · 已分攤':''}</small></strong></div>`});rows.push(`<div class="budget-row"><div><h3>備用金 · 10%</h3><p>依上述費用小計預留，應付價格與行程變動</p></div><strong>${money(subtotal*.1)}<small>每人</small></strong></div>`);document.getElementById('budget-rows').innerHTML=rows.join('');document.getElementById('per-person').textContent=money(subtotal*1.1);}
controls.forEach(el=>el.addEventListener('input',updateBudget));document.getElementById('reset-budget').addEventListener('click',()=>{controls[0].value=3;controls[1].value=38000;controls[2].value=36;updateBudget()});updateBudget();
const checklist=[['護照與入境資格','依國籍查 2027 入境及轉機規定'],['三人房確認','確認可住 3 位成人及床型'],['國際機票與保險','確認日期、行李與保障需求'],['船票與國內航班','開賣後核對轉乘與行李'],['租車與還車安排','國際駕照、三人行李車型、自排及還車營業時間'],['古蹟與修道院','確認預約、休息日及服裝'],['網路與離線地圖','eSIM／漫遊、下載訂單'],['外套、防滑鞋與轉接頭','海風吹拂，晚上加一件']];
let saved=[];try{const value=JSON.parse(localStorage.getItem('greece-checks')||'[]');if(Array.isArray(value))saved=value.filter(n=>Number.isInteger(n)&&n>=0&&n<checklist.length)}catch{}
checklist.forEach(([title,note],i)=>{const label=document.createElement('label');label.className='check-item';label.innerHTML=`<input type="checkbox" data-check="${i}" ${saved.includes(i)?'checked':''}><span>${title}<small>${note}</small></span>`;document.getElementById('checks').append(label)});
function updateChecks(){const checked=[...document.querySelectorAll('[data-check]:checked')].map(el=>Number(el.dataset.check));document.getElementById('check-progress').textContent=`已準備好 ${checked.length} / ${checklist.length} 項`;try{localStorage.setItem('greece-checks',JSON.stringify(checked))}catch{document.getElementById('check-progress').textContent+='（此瀏覽器無法儲存）'}}
document.querySelectorAll('[data-check]').forEach(el=>el.addEventListener('change',updateChecks));document.getElementById('clear-checklist').addEventListener('click',()=>{document.querySelectorAll('[data-check]').forEach(el=>el.checked=false);updateChecks()});updateChecks();document.querySelector('.print').addEventListener('click',()=>{const details=[...document.querySelectorAll('.day details, .photo-credits')];const opened=details.map(el=>el.open);details.forEach(el=>el.open=true);window.print();details.forEach((el,i)=>el.open=opened[i])});
