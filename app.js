'use strict';
const itinerary = [
['mainland','雅典','把步調交給雅典','機場抵達，搭機場交通至市區，寄放行李','入住 Plaka／Koukaki 周邊，巷弄慢走','希臘沙拉與烤肉捲，早點休息調時差','雅典','抵達日不排付費預約。假設 9/24 已抵達希臘；若自台灣當日出發，須減少一天景點。','Plaka Athens'],
['mainland','雅典','與兩千年前的石柱見面','預約雅典衛城早場，避開人潮','衛城博物館，午餐後留一段休息','Anafiotika 白色小巷，找間露台吃晚餐','雅典','衛城與博物館分別確認門票。石面易滑，帶防滑鞋、帽子與飲水；時段依當年公告。','Acropolis Athens'],
['mainland','雅典','市集裡的小小日常','古市集與赫淮斯托斯神廟','Monastiraki 市集、咖啡與紀念品','Philopappos 山丘散步，天黑前下山','雅典','今天多走路，下午可依體力刪減。隔日取車前先確認租車保險、駕照文件與停車。','Ancient Agora Athens'],
['mainland','德爾菲','去山裡，聽一個古老故事','雅典取車出發，途中休息','德爾菲考古遺址與博物館','入住德爾菲小鎮，山景晚餐','德爾菲','預留約 3 小時駕駛含休息；入場時間另查。不駕車者以含接送多日團替代本島三日移動。','Delphi Archaeological Site'],
['mainland','梅特歐拉','開往漂浮在天空的修道院','離開德爾菲，往 Kalambaka 移動','途中午餐，抵達後入住並休息','到可停車的觀景點，等待岩柱夕照','Kalambaka／Kastraki','規劃抓 4 小時含休息；山路不趕路，避免天黑後長途駕駛。日落依當日天氣調整。','Kastraki Meteora'],
['mainland','梅特歐拉','天空之城，慢慢看','挑選 1–2 間當日開放的修道院','Kastraki 午餐，短步道看岩柱','小鎮散步，吃一頓暖暖的家常菜','Kalambaka／Kastraki','修道院各有休息日，2027 開放時間待查。穿著符合現場規範，須能應付階梯；避免一天跑遍六間。','Meteora Monasteries'],
['mainland','雅典','回城裡，準備去海邊','離開梅特歐拉，分段開回雅典','還車，入住市區或港口周邊','確認明日登船碼頭，整理過夜小包','雅典','抓約 5 小時含休息；不加排遠端景點。登船時間及港口入口依船票，通常提早到港並預留找碼頭時間。','Piraeus Port'],
['naxos','納克索斯','第一封，來自小島的明信片','前往比雷埃夫斯港，搭船到納克索斯','抵達 Chora，入住後休息','Portara 阿波羅門廊，看海上日落','納克索斯 Chora','2027 船班尚待確認，抓半天以上移動。風大時不走濕滑堤道，若停航先留雅典並調整住宿。','Portara Naxos'],
['naxos','納克索斯','白色巷子，沒有目的地','Chora 舊城、威尼斯城堡巷弄','港邊午餐，找乳酪與在地小點','Agios Georgios 海灘散步','納克索斯 Chora','以步行為主。十月游泳依當日海況與體感，不把水上活動當作必要行程。','Naxos Chora'],
['naxos','納克索斯','去山村喝一杯咖啡','租車或預約接送前往 Halki','Apeiranthos 大理石巷弄，慢慢吃午餐','返回 Chora，港邊晚餐','納克索斯 Chora','公車季節班次可能減少，出發前確認往返；不開車可改參加小團，不賭末班車。','Halki Naxos'],
['naxos','納克索斯','今天的任務：好好發呆','Agios Prokopios 海邊散步','依天氣延伸到 Plaka，或回城咖啡館','洗衣、整理行李，確認隔日船班','納克索斯 Chora','留白也是行程。遇風雨可換成舊城博物館與烹飪體驗，活動開放與價格另詢。','Agios Prokopios Naxos'],
['santorini','聖托里尼','在火山口邊，打開新的風景','退房，到港搭船前往聖托里尼','Athinios 港預約接送，入住 Fira','Fira 火山口步道，選一間景觀餐廳','聖托里尼 Fira','船程暫抓 2–4 小時，實際依當年班表；港口上山預留排隊時間，不安排緊接船班的活動。','Fira Santorini'],
['santorini','聖托里尼','藍色圓頂與橘色黃昏','提早前往 Oia，逛白屋與巷弄','午餐後咖啡休息，避開擁擠拍照點','選安全公共觀景點看夕陽，回 Fira','聖托里尼 Fira','不進入私宅、屋頂或教堂禁入區。日落後搭車人多，事先確認回程交通。','Oia Santorini'],
['santorini','聖托里尼','沿著懸崖，走一段藍','Fira 至 Firostefani 慢步','依體力續走 Imerovigli，午餐後折返','火山口咖啡，早點回房休息','聖托里尼 Fira','不預設走完整條 Fira–Oia 長步道。路段有階梯與曝曬，遇強風改搭車。','Imerovigli Santorini'],
['santorini','聖托里尼','把小島的味道記下來','Akrotiri 考古遺址（開放時間待核）','Pyrgos 村莊午餐與散步','可選葡萄酒品飲，或回飯店看海','聖托里尼 Fira','品飲不開車，需指定駕駛或包車。海灘路段依現場開放與安全公告，不安排崖下紅沙灘步行。','Akrotiri Archaeological Site'],
['mainland','雅典','把海的顏色，一起帶回去','退房，前往聖托里尼機場','搭國內航班回雅典，入住市區','熟悉的巷子，輕鬆晚餐','雅典','優先國內直飛，實際時刻待售票後確認；這天不接國際航班，保留延誤調整空間。','Athens Greece'],
['mainland','雅典','城市裡，最後幾個小收藏','國家考古博物館，依開館時間調整','Exarchia／Kolonaki 午餐與咖啡','伴手禮採買：橄欖皂、蜂蜜與陶器','雅典','此日兼作海島返程延誤緩衝。若前日航班取消，可刪減今天景點。','National Archaeological Museum Athens'],
['mainland','雅典','留一天，給沒有計畫的喜歡','國家花園與憲法廣場散步','重訪喜歡的小店，整理戰利品','最後一頓希臘晚餐，確認回程航班','雅典','避免加排遠端一日遊。確認航空公司報到、行李限重、機場交通與航廈資訊。','National Garden Athens'],
['mainland','雅典','再見啦，我們的藍色假期','依航班時間退房，預留前往機場交通','建議國際航班起飛前 3 小時抵達機場','從雅典離境，回家航程另依機票','機上／返程','10/12 定義為雅典離境日；返台可能是 10/13。若必須 10/12 抵台，請將離境提前並減少雅典最後一晚。','Athens International Airport']
];
const days=document.querySelector('#days');
itinerary.forEach((d,i)=>{const date=new Date(Date.UTC(2027,8,24+i));const weekday=['日','一','二','三','四','五','六'][date.getUTCDay()];const el=document.createElement('article');el.className='day';el.dataset.category=d[0];el.style.setProperty('--tint',d[0]==='naxos'?'#e8eff0':d[0]==='santorini'?'#f4e8dc':'#edf0e5');el.innerHTML=`<div class="day-top"><span class="day-no">Day ${String(i+1).padStart(2,'0')}</span><span class="day-date">${date.getUTCMonth()+1}/${date.getUTCDate()}（${weekday}）</span></div><div class="day-body"><span class="place">${d[1]}</span><h3>${d[2]}</h3><ul class="schedule"><li><b>早上</b><span>${d[3]}</span></li><li><b>午後</b><span>${d[4]}</span></li><li><b>傍晚</b><span>${d[5]}</span></li></ul><details><summary>交通與兔兔筆記</summary><p>${d[7]}</p></details></div><div class="night">宿：${d[6]}<a class="map-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d[8])}">看地圖</a></div>`;days.append(el)});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});let count=0;document.querySelectorAll('.day').forEach(day=>{day.hidden=filter!=='all'&&day.dataset.category!==filter;if(!day.hidden)count++});document.querySelector('#filter-status').textContent=`顯示 ${count} 天行程`;}));
const money=n=>'NT$ '+Math.round(n).toLocaleString('zh-TW');
const budgetItems=[
['國際來回機票','台北 ↔ 雅典 · 經濟艙含稅行李',0,'flight'],
['住宿 · 18 晚','每房 €150 × 18 晚，共同分攤',2700,'shared'],
['本島租車與油資停車','4 日規劃額度，含租車保險預留',600,'shared'],
['跳島船票','雅典 → 納克索斯 → 聖托里尼，每人',120,'person'],
['國內單程機票','聖托里尼 → 雅典，含行李，每人',130,'person'],
['市區、機場與島上交通','公車、接駁與部分計程車，每人',220,'person'],
['餐食與咖啡','每人每日 €40 × 19 天',760,'person'],
['景點與體驗','古蹟、博物館、修道院與小額體驗，每人',200,'person']
];
const controls=['people','flight','rate'].map(id=>document.getElementById(id));
function updateBudget(){const [people,flight,rate]=controls.map(el=>Number(el.value));if(!controls.every(el=>el.checkValidity())||people<1){document.getElementById('per-person').textContent='請輸入有效數值';document.getElementById('group-total').textContent='—';document.getElementById('budget-rows').replaceChildren();return;}let subtotal=0;const rows=budgetItems.map(([name,desc,value,type])=>{const cost=type==='flight'?flight:type==='shared'?value*rate/people:value*rate;subtotal+=cost;return `<div class="budget-row"><div><h3>${name}</h3><p>${desc}</p></div><strong>${money(cost)}<small>每人${type==='shared'?' · 已分攤':''}</small></strong></div>`});rows.push(`<div class="budget-row"><div><h3>備用金 · 10%</h3><p>依上述費用小計預留，應付價格與行程變動</p></div><strong>${money(subtotal*.1)}<small>每人</small></strong></div>`);document.getElementById('budget-rows').innerHTML=rows.join('');document.getElementById('per-person').textContent=money(subtotal*1.1);document.getElementById('group-total').textContent=money(subtotal*1.1*people);document.getElementById('group-label').textContent=`${people} 人旅費合計`;}
controls.forEach(el=>el.addEventListener('input',updateBudget));document.getElementById('reset-budget').addEventListener('click',()=>{controls[0].value=3;controls[1].value=38000;controls[2].value=36;updateBudget()});updateBudget();
const checklist=[['護照與入境資格','依國籍查 2027 入境及轉機規定'],['三人房確認','確認可住 3 位成人及床型'],['國際機票與保險','確認日期、行李與保障需求'],['船票與國內航班','開賣後核對轉乘與行李'],['本島交通','租車文件、保險或多日團'],['古蹟與修道院','確認預約、休息日及服裝'],['網路與離線地圖','eSIM／漫遊、下載訂單'],['外套、防滑鞋與轉接頭','海風吹拂，晚上加一件']];
let saved=[];try{const value=JSON.parse(localStorage.getItem('greece-checks')||'[]');if(Array.isArray(value))saved=value.filter(n=>Number.isInteger(n)&&n>=0&&n<checklist.length)}catch{}
checklist.forEach(([title,note],i)=>{const label=document.createElement('label');label.className='check-item';label.innerHTML=`<input type="checkbox" data-check="${i}" ${saved.includes(i)?'checked':''}><span>${title}<small>${note}</small></span>`;document.getElementById('checks').append(label)});
function updateChecks(){const checked=[...document.querySelectorAll('[data-check]:checked')].map(el=>Number(el.dataset.check));document.getElementById('check-progress').textContent=`已準備好 ${checked.length} / ${checklist.length} 項`;try{localStorage.setItem('greece-checks',JSON.stringify(checked))}catch{document.getElementById('check-progress').textContent+='（此瀏覽器無法儲存）'}}
document.querySelectorAll('[data-check]').forEach(el=>el.addEventListener('change',updateChecks));document.getElementById('clear-checklist').addEventListener('click',()=>{document.querySelectorAll('[data-check]').forEach(el=>el.checked=false);updateChecks()});updateChecks();document.querySelector('.print').addEventListener('click',()=>{const details=[...document.querySelectorAll('.day details')];const opened=details.map(el=>el.open);details.forEach(el=>el.open=true);window.print();details.forEach((el,i)=>el.open=opened[i])});
