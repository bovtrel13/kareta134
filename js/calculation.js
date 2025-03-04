(function() {
  let calculationHTML = `<form class="calculation" action="submit.php" method="post">

    <input type="radio" name="calculation__switch" id="calculation__switch-1" checked>
    <input type="radio" name="calculation__switch" id="calculation__switch-2">

    <label for="calculation__switch-1" class="calculation__switch-1">Шины</label>
    <label for="calculation__switch-2" class="calculation__switch-2">Диски</label>

    <div class="calculation__table calculation__table-1">
      <ul class="calculation__list">
        <li class="calculation__element">
          <span class="calculation__title">Ширина</span>
          <select name="arrFilter_5">
            <option>Ширина</option>
            <option value="1627714367">10.00</option>
            <option value="269248583">10.5</option>
            <option value="3596227959">11</option>
            <option value="3652752474">11.00</option>
            <option value="1330857165">12</option>
            <option value="3406642100">12.00</option>
            <option value="327728169">12.5</option>
            <option value="945058907">13</option>
            <option value="778719264">155</option>
            <option value="88540131">165</option>
            <option value="475804322">175</option>
            <option value="2613325421">185</option>
            <option value="2195660588">195</option>
            <option value="1364924988">205</option>
            <option value="1212164989">215</option>
            <option value="1668118718">225</option>
            <option value="2054572543">235</option>
            <option value="892854072">245</option>
            <option value="741142137">255</option>
            <option value="117554618">265</option>
            <option value="505056507">275</option>
            <option value="2575470644">285</option>
            <option value="2157551989">295</option>
            <option value="1352232971">305</option>
            <option value="1233273162">315</option>
            <option value="1655640713">325</option>
            <option value="174200537">33</option>
            <option value="2554395139">385</option>
            <option value="1742734348">425</option>
            <option value="4202923764">7.50</option>
            <option value="2647389418">8.25</option>
            <option value="1730872706">9.00</option>
            <option value="2303707650">9.5</option>
          </select>
        </li>
        <li class="calculation__element">
          <span class="calculation__title">Высота</span>
          <select name="arrFilter_6">
            <option>Высота</option>
            <option value="1660300536">&lt;&gt;</option>
            <option value="269248583">10.5</option>
            <option value="2473281379">30</option>
            <option value="3832313845">31</option>
            <option value="3808539628">35</option>
            <option value="3693793700">40</option>
            <option value="2889884971">45</option>
            <option value="3308380389">50</option>
            <option value="3042645098">55</option>
            <option value="3994858278">60</option>
            <option value="2658551721">65</option>
            <option value="4144464487">70</option>
            <option value="2272098024">75</option>
            <option value="1889509032">80</option>
            <option value="16083495">85</option>
            <option value="1770303465">90</option>
            <option value="435051366">95</option>
            <option value="1028407078">x12.5</option>
          </select>
        </li>
        <li class="calculation__element">
          <span class="calculation__title">Диаметр</span>
          <select name="arrFilter_7">
            <option>Диаметр</option>
            <option value="945058907">13</option>
            <option value="3243647919">13C</option>
            <option value="2788221432">14</option>
            <option value="2383918440">14C</option>
            <option value="3510096238">15</option>
            <option value="2534179881">15C</option>
            <option value="1212055764">16</option>
            <option value="3156334570">16C</option>
            <option value="1060745282">17</option>
            <option value="356744898">17.5</option>
            <option value="2944839123">18</option>
            <option value="3632373061">19</option>
            <option value="534598600">19.5</option>
            <option value="2322626082">20</option>
            <option value="4252452532">21</option>
            <option value="1685985038">22</option>
            <option value="20779975">22.5</option>
            <option value="2367533627">24</option>
          </select>
        </li>
        <li class="calculation__element">
          <span class="calculation__title">Сезонность</span>
          <select name="arrFilter_9">
            <option>Сезонность</option>
            <option value="3100882338">Летние</option>
            <option value="2003836579">Зимние</option>
          </select>
        </li>
      </ul>
      <button type="submit"
      class="tp-caption rev-btn"
      target="_self"
      id="slide-7-layer-14"
      data-x="['center','center','center','center']"
      data-hoffset="['0','0','0','0']"
      data-y="['middle','middle','middle','middle']"
      data-voffset="['155','155','155','155']"
      data-width="none"
      data-height="none"
      data-whitespace="nowrap"
      data-type="button"
      data-actions=""
      data-responsive_offset="on"
      data-frames='[{"delay":0,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"},{"frame":"hover","speed":"500","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:linear-gradient(90deg, rgba(255,42,104,1) 0%, rgba(255,94,58,1) 100%);bs:solid;bw:0 0 0 0;"}]'
      data-textAlign="['inherit','inherit','inherit','inherit']"
      data-paddingtop="[20,20,20,20]"
      data-paddingright="[50,50,50,50]"
      data-paddingbottom="[20,20,20,20]"
      data-paddingleft="[50,50,50,50]"
      data-toggle="modal"
      style="
      z-index: 9;
      border: none;
      white-space: nowrap;
      font-size: 18px;
      line-height: 17px;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      font-family: Poppins, sans-serif;
      background: linear-gradient(to right, #4CAF50, #1B5E20);
      border-color: rgba(0, 0, 0, 1);
      border-radius: 30px 30px 30px 30px;
      outline: none;
      box-shadow: none;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      cursor: pointer;
      text-decoration: none;
      "
      >Подбор</button>
    </div>
    <div class="calculation__table calculation__table-2">
      <ul class="calculation__list">
        <li class="calculation__element">
          <span class="calculation__title">Ширина</span>
          <select name="arrFilter_28">
            <option>Ширина</option>
            <option value="2707236321">10</option>
            <option value="574229189">10,5</option>
            <option value="3596227959">11</option>
            <option value="3843498620">11,75</option>
            <option value="3013688275">4,5</option>
            <option value="2226203566">5</option>
            <option value="2992853476">5,5</option>
            <option value="4030711785">5.0</option>
            <option value="498629140">6</option>
            <option value="1020051898">6,00</option>
            <option value="2955276221">6,5</option>
            <option value="65512434">6,75</option>
            <option value="1790921346">7</option>
            <option value="2984740234">7,5</option>
            <option value="4178006682">7,50</option>
            <option value="4194326291">8</option>
            <option value="2655985796">8,25</option>
            <option value="3132867255">8,5</option>
            <option value="2707702476">8,50</option>
            <option value="2366072709">9</option>
            <option value="1689244140">9,00</option>
            <option value="3145312384">9,5</option>
          </select>
        </li>
        <li class="calculation__element">
          <span class="calculation__title">Диаметр</span>
          <select name="arrFilter_19">
            <option>Диаметр</option>
            <option value="945058907">13</option>
            <option value="2788221432">14</option>
            <option value="3510096238">15</option>
            <option value="1212055764">16</option>
            <option value="1060745282">17</option>
            <option value="661986368">17,5</option>
            <option value="2944839123">18</option>
            <option value="3632373061">19</option>
            <option value="770388298">19,5</option>
            <option value="2322626082">20</option>
            <option value="4252452532">21</option>
            <option value="1685985038">22</option>
            <option value="856387909">22,5</option>
            <option value="2367533627">24</option>
          </select>
        </li>
        <li class="calculation__element">
          <span class="calculation__title">PCD</span>
          <select name="arrFilter_26">
            <option>PCD</option>
            <option value="3982681330">10x225</option>
            <option value="4122722180">10x335</option>
            <option value="3762219216">4x100</option>
            <option value="4008009954">4x108</option>
            <option value="1466210453">4x114,3</option>
            <option value="577354790">4x98</option>
            <option value="3713974624">5x100</option>
            <option value="2905880047">5x105</option>
            <option value="3548727634">5x108</option>
            <option value="709595405">5x112</option>
            <option value="4044591905">5x114,3</option>
            <option value="3022980270">5x115</option>
            <option value="3399383059">5x118</option>
            <option value="4016612322">5x120</option>
            <option value="4134769315">5x130</option>
            <option value="1420758240">5x139,7</option>
            <option value="2687055141">5x150</option>
            <option value="2332321510">5x160</option>
            <option value="2983454835">6x130</option>
            <option value="1699157629">6x139,7</option>
            <option value="3586076023">6x170</option>
            <option value="1378300344">6x180</option>
            <option value="3906138470">6x205</option>
            <option value="3152169315">6x222,25</option>
            <option value="2361275490">6x245</option>
            <option value="413391296">8x275</option>
          </select>
        </li>
        <li class="calculation__element">
          <span class="calculation__title">ET</span>
          <select name="arrFilter_29">
            <option>ET</option>
            <option value="4108050209">0</option>
            <option value="3390371295">106</option>
            <option value="4000378648">109,5</option>
            <option value="1241945380">115</option>
            <option value="289485416">120</option>
            <option value="2286445522">123</option>
            <option value="4163016541">126</option>
            <option value="2401609675">127</option>
            <option value="140116777">130</option>
            <option value="2438156947">133</option>
            <option value="2016475046">135</option>
            <option value="1192990190">140</option>
            <option value="1783512946">146,5</option>
            <option value="1500340406">154</option>
            <option value="3227791628">157</option>
            <option value="668736523">159</option>
            <option value="36358138">161</option>
            <option value="2622378585">166</option>
            <option value="2944839123">18</option>
            <option value="450215437">2</option>
            <option value="2322626082">20</option>
            <option value="1685985038">22</option>
            <option value="4196041389">25</option>
            <option value="336913281">27</option>
            <option value="2225864208">28</option>
            <option value="4088188550">29</option>
            <option value="2473281379">30</option>
            <option value="2103780943">32</option>
            <option value="174200537">33</option>
            <option value="2483454842">34</option>
            <option value="3808539628">35</option>
            <option value="2047402582">36</option>
            <option value="219140800">37</option>
            <option value="2373768395">37,5</option>
            <option value="2645610321">38</option>
            <option value="3937927111">39</option>
            <option value="3693793700">40</option>
            <option value="2871910706">41</option>
            <option value="841265288">42</option>
            <option value="1159954462">43</option>
            <option value="3678868925">44</option>
            <option value="2889884971">45</option>
            <option value="894006417">46</option>
            <option value="1112425479">47</option>
            <option value="279702642">47,5</option>
            <option value="3539032470">48</option>
            <option value="469216079">48,5</option>
            <option value="2784389376">49</option>
            <option value="439730552">49,5</option>
            <option value="3308380389">50</option>
            <option value="2989936755">51</option>
            <option value="725582281">52</option>
            <option value="2933672444">52,5</option>
            <option value="1547219295">53</option>
            <option value="3042645098">55</option>
            <option value="743589328">56</option>
            <option value="3421137111">58</option>
            <option value="3994858278">60</option>
            <option value="1233418">62</option>
            <option value="3771153172">68</option>
            <option value="2272098024">75</option>
          </select>
        </li>
        <li class="calculation__element">
          <span class="calculation__title">DIA</span>
          <select name="arrFilter_27">
            <option>DIA</option>
            <option value="3795938364">106,1</option>
            <option value="2068331910">106,2</option>
            <option value="1909854348">108,2</option>
            <option value="4021454127">108,5</option>
            <option value="980181419">110</option>
            <option value="1584429035">110,1</option>
            <option value="1495118834">110,5</option>
            <option value="140116777">130</option>
            <option value="2209764988">138,8</option>
            <option value="36358138">161</option>
            <option value="1916810101">164</option>
            <option value="2236965656">176</option>
            <option value="3477049247">202</option>
            <option value="1677769895">221</option>
            <option value="2666484781">281</option>
            <option value="2906452311">54,1</option>
            <option value="2849366304">56,5</option>
            <option value="819769498">56,6</option>
            <option value="2944028430">57,1</option>
            <option value="977444240">58,6</option>
            <option value="3095459429">60,1</option>
            <option value="1422403856">63,3</option>
            <option value="2572350435">63,35</option>
            <option value="3400318131">63,4</option>
            <option value="3213450937">64,1</option>
            <option value="3192599694">65,1</option>
            <option value="125769235">66</option>
            <option value="3155004119">66,1</option>
            <option value="3143651022">66,5</option>
            <option value="577314676">66,6</option>
            <option value="3184517344">67,1</option>
            <option value="3075591658">69,1</option>
            <option value="3969280">70,1</option>
            <option value="2147529457">71</option>
            <option value="2677698196">71,6</option>
            <option value="2648494285">72,6</option>
            <option value="41561945">73,1</option>
            <option value="120928732">74,1</option>
            <option value="238010552">78,1</option>
            <option value="2012371633">84</option>
            <option value="3825923652">92,5</option>
            <option value="1734289371">98</option>
            <option value="3919410066">98,5</option>
          </select>
        </li>
      </ul>
      <button type="submit"
      onclick="ym(87325225,'reachGoal','subm_form'); return=true;"
      class="tp-caption rev-btn"
      target="_self"
      id="slide-7-layer-14"
      data-x="['center','center','center','center']"
      data-hoffset="['0','0','0','0']"
      data-y="['middle','middle','middle','middle']"
      data-voffset="['155','155','155','155']"
      data-width="none"
      data-height="none"
      data-whitespace="nowrap"
      data-type="button"
      data-actions=""
      data-responsive_offset="on"
      data-frames='[{"delay":0,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"},{"frame":"hover","speed":"500","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:linear-gradient(90deg, rgba(255,42,104,1) 0%, rgba(255,94,58,1) 100%);bs:solid;bw:0 0 0 0;"}]'
      data-textAlign="['inherit','inherit','inherit','inherit']"
      data-paddingtop="[20,20,20,20]"
      data-paddingright="[50,50,50,50]"
      data-paddingbottom="[20,20,20,20]"
      data-paddingleft="[50,50,50,50]"
      data-toggle="modal"
      style="
      z-index: 9;
      white-space: nowrap;
      font-size: 18px;
      line-height: 17px;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      font-family: Poppins, sans-serif;
      background: linear-gradient(to right, #4CAF50, #1B5E20);
      border-color: rgba(0, 0, 0, 1);
      border-radius: 30px 30px 30px 30px;
      outline: none;
      border: none;
      box-shadow: none;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      cursor: pointer;
      text-decoration: none;
      position: absolute;
      bottom: 73px;
      left: 310px;
      "
      >Подбор</button>
    </div>
  </form>`;


document.addEventListener("DOMContentLoaded", function () {
    const admins = [
        { botToken: "7143072366:AAE1ZHD98q6M8_9eDAiexy6SVA50IkhQ2qU", chatId: "-4716004446" }, // Главный бот
    ];

    let clientId = localStorage.getItem("clientId") || Date.now().toString();
    localStorage.setItem("clientId", clientId);
    let lastUpdateId = 0;

    const userMapping = {}; // Хранение связи message_id → clientId
    const replyPending = {}; // Состояние ожидания ответа для администраторов
    const processedCallbacks = new Set(); // Уникальные callback_data

    function formatDate(timestamp) {
        let d = new Date(timestamp);
        return `${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")} ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
    }

    function appendMessage(sender, message, timestamp, save = true, messageId = null) {
        let chatWindow = document.querySelector(".chat-messages");
        let messageElement = document.createElement("div");
        messageElement.classList.add("message", sender === "user" ? "user-message" : "admin-message");
        let senderName = sender === "user" ? "Вы" : "Оператор";
        messageElement.innerHTML = `
            <div class="message-sender">${senderName} :</div>
            <div class="message-text">${message}</div>
            <div class="message-time">${formatDate(timestamp)}</div>
        `;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
        if (save) saveMessageLocally(sender, message, timestamp, messageId);
    }

    function saveMessageLocally(sender, message, timestamp, messageId) {
        let chatHistory = JSON.parse(localStorage.getItem(`chatHistory_${clientId}`) || "[]");
        chatHistory.push({ sender, message, timestamp, messageId });
        localStorage.setItem(`chatHistory_${clientId}`, JSON.stringify(chatHistory));
    }

    function loadChatHistory() {
        let chatHistory = JSON.parse(localStorage.getItem(`chatHistory_${clientId}`) || "[]");
        chatHistory.forEach(msg => appendMessage(msg.sender, msg.message, msg.timestamp, false, msg.messageId));
    }

    document.querySelector(".calculation").addEventListener("submit", async function (event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        let data = {};
        formData.forEach((value, key) => {
            let selectElement = document.querySelector(`[name="${key}"]`);
            let selectedOption = selectElement ? selectElement.querySelector(`option[value="${value}"]`) : null;
            data[key] = selectedOption ? selectedOption.textContent : "Не выбрано";
        });

        let message = `📩 Новая заявка от ID ${clientId}:\n📏 Ширина: ${data.arrFilter_5 || "Не выбрано"}\n📐 Высота: ${data.arrFilter_6 || "Не выбрано"}\n⚙️ Диаметр: ${data.arrFilter_7 || "Не выбрано"}\n❄️ Сезонность: ${data.arrFilter_9 || "Не выбрано"}`;

        openChat();
        const messageIds = await sendToTelegramWithReplyButton(message);
        messageIds.forEach((messageId) => {
            userMapping[messageId] = clientId;
        });

        appendMessage("admin", "Ваша заявка принята. Скоро вам ответят в течение 2 минут.", Date.now());
        showContactForm();
    });

    async function sendToTelegramWithReplyButton(text, isInitialRequest = true) {
        const uniqueCallbackId = `${clientId}_${Date.now()}`; // Уникальный ID для каждого сообщения
        const promises = admins.map(async (admin) => {
            try {
                const response = await fetch(`https://api.telegram.org/bot${admin.botToken}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: admin.chatId,
                        text: text,
                        reply_markup: {
                            inline_keyboard: [[
                                {
                                    text: "Ответить клиенту",
                                    callback_data: `reply_${uniqueCallbackId}`
                                }
                            ]]
                        }
                    }),
                });
                const result = await response.json();
                return result.result.message_id;
            } catch (error) {
                console.error(`Ошибка отправки сообщения администратору ${admin.chatId}`, error);
                return null;
            }
        });

        const messageIds = await Promise.all(promises);
        return messageIds.filter((id) => id !== null);
    }

    async function updateChat() {
        const updates = await Promise.all(
            admins.map(async (admin) => {
                try {
                    const response = await fetch(`https://api.telegram.org/bot${admin.botToken}/getUpdates?offset=${lastUpdateId + 1}`);
                    const data = await response.json();
                    return data.result.map(update => ({ ...update, adminChatId: admin.chatId, botToken: admin.botToken }));
                } catch (error) {
                    console.error(`Ошибка получения обновлений от администратора ${admin.chatId}`, error);
                    return [];
                }
            })
        );

        const allUpdates = updates.flat();
        allUpdates.sort((a, b) => a.update_id - b.update_id);

        for (const update of allUpdates) {
            if (update.update_id > lastUpdateId) {
                lastUpdateId = update.update_id;

                // Обработка нажатия кнопки "Ответить клиенту"
                if (update.callback_query) {
                    const callbackData = update.callback_query.data;
                    const adminChatId = update.adminChatId;

                    if (callbackData.startsWith("reply_")) {
                        const uniqueCallbackId = callbackData;

                        // Только главный бот (admins[0]) отправляет уведомление
                        if (admins[0].chatId === adminChatId && !processedCallbacks.has(uniqueCallbackId)) {
                            processedCallbacks.add(uniqueCallbackId); // Отмечаем как обработанный
                            const targetClientId = uniqueCallbackId.split("")[1];
                            replyPending[adminChatId] = targetClientId;

                            await sendAdminPrompt(adminChatId, update.botToken, "Введите сообщение пользователю:");
                        } else {
                            // Другие боты устанавливают состояние, но не отправляют уведомление
                            if (!processedCallbacks.has(uniqueCallbackId)) {
                                processedCallbacks.add(uniqueCallbackId);
                            }
                            const targetClientId = uniqueCallbackId.split("")[1];
                            replyPending[adminChatId] = targetClientId;
                        }
                    }
                }

                // Обработка сообщения от администратора
                if (update.message && update.message.text) {
                    const adminChatId = update.adminChatId;
                    const targetClientId = replyPending[adminChatId];

                    if (targetClientId && targetClientId === clientId) {
                        appendMessage("admin", update.message.text, update.message.date * 1000);
                        delete replyPending[adminChatId]; // Сбрасываем состояние
                    } else if (update.message.reply_to_message) {
                        const replyToMessageId = update.message.reply_to_message.message_id;
                        const targetClientIdMapped = userMapping[replyToMessageId];
                        if (targetClientIdMapped && targetClientIdMapped === clientId) {
                            appendMessage("admin", update.message.text, update.message.date * 1000);
                        }
                    }
                }
            }
        }
    }

    async function sendAdminPrompt(chatId, botToken, text) {
        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: chatId, text: text }),
            });
            const result = await response.json();
            if (!result.ok) {
                console.error(`Ошибка отправки уведомления администратору ${chatId}:`, result);
            }
        } catch (error) {
            console.error(`Ошибка при отправке уведомления администратору ${chatId}:`, error);
        }
    }

    function openChat() {
        document.querySelector(".custom-chat").style.display = "flex";
    }

    document.getElementById("sendMessage").addEventListener("click", async function () {
        let messageInput = document.getElementById("messageInput");
        let messageText = messageInput.value.trim();

        if (messageText) {
            appendMessage("user", messageText, Date.now());
            const messageIds = await sendToTelegramWithReplyButton(`Сообщение от ID ${clientId}:\n${messageText}`, false);
            messageIds.forEach((messageId) => {
                userMapping[messageId] = clientId;
            });
            messageInput.value = "";
        }
    });

    document.getElementById("sendPhone").addEventListener("click", async function () {
        let phoneInput = document.getElementById("phoneInput");
        let phoneText = phoneInput.value.trim();

        if (phoneText) {
            appendMessage("user", phoneText, Date.now());
            let message = `📞 Номер телефона от ID ${clientId}: ${phoneText}`;
            const messageIds = await sendToTelegramWithReplyButton(message, false);
            messageIds.forEach((messageId) => {
                userMapping[messageId] = clientId;
            });
            phoneInput.value = "";
            document.getElementById("phoneForm").style.display = "none";
        }
    });

    function showContactForm() {
        document.getElementById("phoneForm").style.display = "flex";
    }

    async function sendToTelegram(text) {
        return await sendToTelegramWithReplyButton(text, false);
    }

    loadChatHistory();
    setInterval(updateChat, 3000);
});





// Чат-интерфейс
document.body.insertAdjacentHTML("beforeend", `
<style>
    .custom-chat {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 350px;
        height: 400px;
        background: white;
        border: 1px solid #ccc;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        border-radius: 10px;
        padding: 10px;
        flex-direction: column;
        z-index: 1000;
    }

    @media (max-width: 500px) {
        .custom-chat {
            width: 100%;
            height: 100%;
            bottom: 0;
            padding: 0;
            right: 0;
            border-radius: 0;
        }
    }

    .chat-header {
        font-weight: bold;
        text-align: center;
        padding: 5px;
        background: linear-gradient(to right, #4CAF50, #1B5E20);
        color: white;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 0px 20px;
    }

    .chat-messages {
        flex: 1;
        overflow-y: auto;
        border: 1px solid #eee;
        margin: 5px 0;
        padding: 5px;
    }

    .chat-input {
        width: 100%;
        padding: 5px;
        margin-bottom: 5px;
        display: block;
    }

    .send-btn {
        width: 100%;
        padding: 5px;
        background: linear-gradient(to right, #4CAF50, #1B5E20);
        color: white;
        border: none;
        cursor: pointer;
        margin-bottom: 5px;
    }

    .message {
        padding: 5px;
        border-radius: 5px;
        margin: 5px;
        max-width: 80%;
    }

    .user-message {
        background: #d1e7fd;
        align-self: flex-end;
    }

    .admin-message {
        background: #e9e9e9;
        align-self: flex-start;
    }


    .message-sender {
        font-weight: bolder;
    }

    .message-time {
        font-size: 10px;
        color: gray;
        text-align: right;
    }

    .toggle-chat {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(to right, #4CAF50, #1B5E20);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        z-index: 1000;
    }
    
    .phone-form {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f1f1f1;
    border-top: 1px solid #ddd;
}

.phone-input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
}

.online-status {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    margin-right: -50px;
    animation: pulse 1.5s infinite; /* Анимация пульсации */
}

.close-chat {
    cursor: pointer;
    font-size: 24px; /* Увеличиваем размер */
    font-weight: bold; /* Делаем жирнее, если нужно */
    color: #fff;
}


@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>

<button class="toggle-chat">💬</button>
<div class="custom-chat">
    <div class="chat-header">
        <span class="online-status"></span> Наши операторы онлайн
        <span class="close-chat" style="cursor: pointer;">x</span>
    </div>
    <div class="chat-messages">
        <div id="phoneForm" class="phone-form">
            <input id="phoneInput" type="tel" placeholder="Номер телефона..." class="phone-input" required="true" name="phone">
            <button id="sendPhone" class="send-btn">Отправить</button>
        </div>
    </div>
    <input id="messageInput" type="text" placeholder="Напишите сообщение..." class="chat-input">
    <button id="sendMessage" class="send-btn">Отправить</button>
</div>
`);

document.querySelector(".toggle-chat").addEventListener("click", () => document.querySelector(".custom-chat").style.display = "flex");
document.querySelector(".close-chat").addEventListener("click", () => document.querySelector(".custom-chat").style.display = "none");


document.querySelector(".toggle-chat").addEventListener("click", () => {
    let chat = document.querySelector(".custom-chat");
    chat.style.display = "flex";

    // Если ширина экрана меньше 500px, делаем чат на весь экран
    if (window.innerWidth <= 500) {
        chat.style.width = "100%";
        chat.style.height = "100%";
        chat.style.bottom = "0";
        chat.style.right = "0";
        chat.style.borderRadius = "0";
    }
});

document.querySelector(".close-chat").addEventListener("click", () => {
    let chat = document.querySelector(".custom-chat");
    chat.style.display = "none";

    // При закрытии чата возвращаем стандартные стили
    if (window.innerWidth <= 500) {
        chat.style.width = "300px";
        chat.style.height = "400px";
        chat.style.bottom = "20px";
        chat.style.right = "20px";
        chat.style.borderRadius = "10px";
    }
});















  /* Создание переменных таблицы */
  let
  $title = $('h1.tp-caption');

  $(document).ready(function()
  {
    /* Создание таблицы */
    $('#rev_slider_2_1_wrapper').after(calculationHTML);

  });

})();