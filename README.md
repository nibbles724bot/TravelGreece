# 兔兔去希臘

2027/9/24–10/12 希臘本島＋愛琴海跳島旅行手帳。繁體中文，Miffy 靈感的簡約配色與原創兔兔插畫；非官方個人專案，無品牌關聯。

## 路線

雅典 3 晚 → 德爾菲 1 晚 → 梅特歐拉 2 晚 → 比雷埃夫斯港旁 1 晚 → 帕羅斯 3 晚 → 納克索斯 4 晚 → 聖托里尼 3 晚 → 雅典 1 晚。19 天、18 晚。假設 9/24 已抵達雅典，10/12 從雅典離境；台灣出發／返台日期須依實際航班另調整。

## 日期與交通重點

- 9/27：雅典早出發，下午看德爾菲遺址；9/28 看博物館再赴梅特歐拉。9/28 是週二，官方現行夏季開館時間為 10:00，2027 待確認；分日參觀須核對票券跨日效期。
- 9/30：早上最多一座修道院，10:00–10:30 前出發，目標日落前到雅典。優先港口附近還車，備案機場還車後轉乘；確認營業時間與異地費。當晚住比雷埃夫斯港附近。
- 10/1–10/4：帕羅斯 3 晚，住 Parikia，另走 Naoussa 與 Lefkes。
- 10/4–10/8：納克索斯 4 晚，10/6–10/8 租自排小車兩日，依實際取還時間確認計費，三人行李先留飯店。ATV 是需另確認駕照／保險及另估費用的替代選項。
- 10/8–10/11：聖托里尼 3 晚。原 10/5 的 Naxos–Santorini 船段移至 10/8，預估快船約 2 小時、一般渡輪約 4 小時，實際依船型及停靠港；2027 秋季班表待售票後確認。
- 10/11：優先早班國內機回雅典，核對手提／托運行李及票種，回程僅留 1 晚。原 10/9 的國內航班已改到此日。
- 租車：台灣駕照與國際駕照正本一起攜帶，租車公司另有年齡／持照年資／保險等條件；三人加行李的車型容量及手排／自排須提前確認。

## 預算

預設台北出發、3 位成人同行、共住一間三人房／家庭房，國際機票每人 NT$38,000、規劃匯率 €1 = NT$36。全程住宿每房 €2,700，本島租車油資停車 €600，共同分攤；三段船票每人 €160、國內機票每人 €130、納克索斯自排小車兩日共 €180（租車保險預留 €70 × 2 日＋油資停車 €40，由同行者分攤）、其他交通每人 €220、餐食每人 €760、景點體驗每人 €200。含 10% 備用金後每人 NT$145,948。網站只顯示每人費用，不顯示團體合計。

全部為規劃額度，非即時報價，不含購物、旅平險、入境申請與台灣機場接送。2027 船班、票價、開放時間待確認。變更人數維持單房總價，請另確認床型與入住人數限制。

## 功能

- 19 天每日行程與交通筆記，可按本島、帕羅斯、納克索斯、聖托里尼篩選
- 每天標註「輕鬆日／探索日／移動日」，用文字及顏色呈現節奏
- 每日景點實景照片與 Google Maps 搜尋連結
- 點照片放大，支援 Escape 關閉與鍵盤操作
- 照片作者、來源與授權可從每張縮圖或頁尾查閱
- 可調人數、國際機票及歐元換算的即時預算
- 本機儲存行前清單與列印版
- 手機版、鍵盤操作與降低動畫偏好支援
- 插畫與照片均隨專案提供，不依賴外部圖片熱連或套件

## 預覽與檢查

純 HTML/CSS/JavaScript，無需安裝依賴。

```sh
python3 -m http.server 8000
```

開啟 http://localhost:8000 。語法檢查：`node --check app.js && node --check gallery.js && node --check assets/photos/catalog.js`。

## GitHub Pages

內含 `.github/workflows/pages.yml`。在 GitHub 儲存庫 Settings → Pages → Build and deployment 選擇 **GitHub Actions** 後，可手動執行 Deploy Pages workflow；之後 push 到 main 自動部署。預期網址為 https://nibbles724bot.github.io/TravelGreece/ ，是否已上線以 Actions 實際結果為準。

## 資料來源

查閱日期 2026/11/26：
- https://www.visitgreece.gr/en/mainland/Cyclades/Paros
- https://www.visitgreece.gr/en/islands/cyclades/naxos
- https://www.visitgreece.gr/en/islands/cyclades/santorini
- https://www.bluestarferries.com/en-gb
- https://www.bluestarferries.com/en-gb/piraeus-port-map
- https://archaeologicalmuseums.culture.gov.gr/en/museum/5df34af3deca5e2d79e8c17a/archaeological-museum-of-delphi
- https://www.thb.gov.tw/cp.aspx?Create=1&n=96

景點描述參考官方旅遊資訊；行程和預算是本專案建議。網站另提供航空公司與古蹟售票官方入口，出發前需重新核對。

## 照片與授權

實景照片存於 `assets/photos/`，來源及各自授權完整記錄於 `mainland.json`、`islands.json` 及網站使用的 `catalog.js`。照片依原作者授權使用，已縮小尺寸與壓縮；網頁縮圖用 CSS 裁切顯示，放大檢視保留完整畫面。照片授權與網站程式碼分開，不因收錄於本專案而變更。

`gallery.js` 負責景點照片、放大視窗與授權資訊；`app.js` 在每一天的資料中指定照片 key 與旅行節奏，對應代表景點。移動日照片為目的地預覽，實際景觀依季節與天氣而異。
