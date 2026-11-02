/* TIẾNG ANH 7 – PHIẾU 4 (Grade 7 – 1st Mid-term Revision – Practice 4): 40 câu, có gợi ý cách làm và phân tích từng phương án.
   Phần nghe (37–40): phiếu không kèm file âm thanh, lời thoại dưới đây được soạn để khớp với các phương án và đọc bằng giọng máy của trình duyệt. */
(function () {
  const S = window.QZ.subjects.anh; if (!S) return;
  const P4 = 'Phiếu 4', SRC = 'Practice 4';
  if (!S.topics.includes(P4)) S.topics.push(P4);
  const G = (...li) => '<ol class="step-guide">' + li.map(x => `<li>${x}</li>`).join('') + '</ol>';

  const CHARITY = '<p><b>Young Charity</b></p><p>Young Charity is a non-profit (19) ______. Its aim is to help orphans and disadvantaged children in developing countries. It is involved in improving the health and education of needy children. With the help of local governments and the (20) ______ support of volunteers and donors, it has built a lot of (21) ______, making sure that orphans have their own home. It has also established many children\'s hospitals in far-away areas. It (22) ______ a lot of poor children finish their education and have a better future. You can join Young Charity now! You can (23) ______ to making a difference to the lives of many needy children.</p>';
  const DIET = '<p><b>(1)</b> There are two important matters in eating. First is eating enough food. If people eat too little food or wrong food, they will not have enough energy. If they eat too much, they are easy to get <u>overweight</u>. Secondly is eating right food. It means we need to eat correct quantity of each type of food. For example, it is not good to eat too much food in high-calorie group and too little fresh and vegetable. So, how do we have a right and balanced diet?</p><p><b>(2)</b> Firstly, we need to <u>reduce</u> the amount of high-calorie food. Fat in that type of food may lead you to heart disease.</p><p><b>(3)</b> Secondly, you also should not eat too much sugar. You can completely get energy from other food. Eating sugar is bad for your teeth.</p><p><b>(4)</b> Thirdly, it is good to have a rich-fibre diet. We can find fibre from rice, bread, etc. <u>It</u> is nutrients. It can give you lots of energy, but it does not contain much calories, so you are not afraid of getting overweight when you eat much fibre.</p>';
  const STAMPS = '<p>Collecting stamps is a popular hobby among many teenagers. <b>(30)</b> ______ because it does not cost much money to start. You can simply save used stamps from old envelopes, letters, or postcards sent by family members and friends.</p><p>Many collectors keep their stamps in special albums, which <b>(31)</b> ______. Arranging them neatly by country, topic, or year helps collectors organize their collections easily. It also teaches young students how to be careful and patient.</p><p>In addition, each postage stamp tells a fascinating story about history, famous people, or culture. For many young learners, studying the pictures and dates on stamps <b>(32)</b> ______ without leaving their homes. <b>(33)</b> ______ as collectors often meet online or at school clubs to trade rare stamps and share stories.</p>';
  const STAMP_OPTS = ['Connecting with other hobbyists is also much easier', 'helps them discover interesting facts about the world', 'helps protect them from dust and damage', 'It is an easy and affordable pastime for beginners'];
  const NOTICE = (html, bg, fg) => `<div style="display:flex;justify-content:center"><div style="background:${bg};color:${fg};border-radius:14px;padding:14px 22px;text-align:center;font-family:var(--font-display);font-weight:800;line-height:1.35;max-width:320px">${html}</div></div>`;
  const EMAIL = '<div style="display:flex;justify-content:center"><div style="border:2px solid var(--line);border-radius:10px;max-width:340px;width:100%;font-size:.9rem;background:var(--card)"><div style="background:var(--soft);padding:4px 10px;font-weight:700">New Message</div><div style="padding:4px 10px;border-top:1px solid var(--line)"><b>From:</b> James</div><div style="padding:4px 10px;border-top:1px solid var(--line)"><b>To:</b> Andrew</div><div style="padding:8px 10px;border-top:1px solid var(--line)">Hello Andrew<br>I\'m very sorry, I can\'t go to the concert on Saturday. I feel very sick. I think I ate something bad.</div></div></div>';

  const L37 = [['W', 'What shall we buy Timmy for his birthday? How about a nice shirt?'], ['M', 'He has lots of shirts already. And he never wears jeans.'], ['W', 'Hmm. He plays football every weekend, right?'], ['M', 'Yes, and his old football boots are too small for him now.'], ['W', 'Great idea! Let\'s buy him a new pair of football boots.']];
  const L38 = [['M', 'Shall we meet at ten o\'clock tomorrow morning?'], ['W', 'Sorry, I have a piano lesson until ten. How about eleven?'], ['M', 'That\'s too late. The film starts at eleven thirty.'], ['W', 'OK. Then let\'s meet at half past ten.'], ['M', 'Ten thirty is perfect. See you then!']];
  const L39 = [['M', 'Are we going skiing in France again this winter?'], ['W', 'No, France was too expensive last year. My cousin says Poland is cheap, but the snow wasn\'t good there.'], ['M', 'What about Iceland?'], ['W', 'Iceland is much too cold for me! Let\'s go to Italy. The mountains are beautiful and the hotels are not expensive.'], ['M', 'OK, Italy it is!']];
  const L40 = [['W', 'How shall we get to the stadium on Sunday? By bus?'], ['M', 'The bus is too slow, it stops everywhere. And my dad can\'t drive us, his car is broken.'], ['W', 'A taxi is too expensive for four people.'], ['M', 'Then let\'s take the train. The station is near my house, and it only takes twenty minutes.'], ['W', 'Good idea. The train it is!']];
  const script = (L) => '<div class="script">' + L.map(([s, t]) => `<p><b>${s === 'W' ? '👩 Woman' : '👨 Man'}:</b> ${t}</p>`).join('') + '</div><p class="note">Lời thoại do trang soạn (phiếu không kèm file nghe); máy đọc bằng giọng tiếng Anh của trình duyệt.</p>';

  const add = (o) => S.questions.push(Object.assign({ t: P4, src: SRC }, o));

  /* ---------- PHÁT ÂM (1–6) ---------- */
  const PR = '<p>Đọc to từng từ, chỉ chú ý phần được gạch chân. Bấm 🔊 cạnh mỗi từ để nghe phát âm.</p>';
  add({ ic: '🔤', say: true, q: '1. Choose the word whose underlined part is pronounced differently.', o: ['n<u>ur</u>se', 'b<u>ir</u>thday', 'ret<u>ur</u>n', 'gov<u>er</u>nment'], a: 3,
    e: '<p>Ba từ đầu có phần gạch chân ở <b>âm tiết được nhấn</b> nên đọc dài /ɜː/ (giống "ơ" kéo dài). Ở <b>government</b>, "er" nằm trong âm tiết <b>không được nhấn</b> nên đọc nhẹ, ngắn /ə/.</p>',
    hint: PR + G('Phần gạch chân là "ur", "ir", "er". Ở âm tiết được nhấn, nhóm chữ này thường đọc /ɜː/.', 'Tìm từ có phần gạch chân nằm ở âm tiết <b>không</b> được nhấn.'),
    why: ['nurse /nɜːs/ – đọc /ɜː/', 'birthday /ˈbɜːθdeɪ/ – đọc /ɜː/', 'return /rɪˈtɜːn/ – đọc /ɜː/', 'government /ˈɡʌvənmənt/ – "er" không nhấn, đọc /ə/ → khác'] });
  add({ ic: '🔤', say: true, q: '2. Choose the word whose underlined part is pronounced differently.', o: ['<u>ear</u>n', 'f<u>ir</u>st', 'st<u>ir</u>', 'fut<u>ure</u>'], a: 3,
    e: '<p>earn, first, stir đều có phần gạch chân đọc /ɜː/. Đuôi "-ure" trong <b>future</b> /ˈfjuːtʃə/ ở âm tiết không nhấn, đọc /ə/.</p>',
    hint: PR + G('"ear" trong earn, "ir" trong first, stir đọc giống nhau.', 'Đuôi "-ure" ở cuối từ 2 âm tiết thường đọc nhẹ.'),
    why: ['earn /ɜːn/ – /ɜː/', 'first /fɜːst/ – /ɜː/', 'stir /stɜː/ – /ɜː/', 'future /ˈfjuːtʃə/ – /ə/ → khác'] });
  add({ ic: '🔤', say: true, q: '3. Choose the word whose underlined part is pronounced differently.', o: ['pur<u>ch</u>ase', '<u>ch</u>aracter', 'mer<u>ch</u>andise', '<u>ch</u>ocolate'], a: 1,
    e: '<p>"ch" thường đọc /tʃ/ (giống "ch" tiếng Việt). Một số từ gốc Hy Lạp đọc "ch" là /k/: <b>character</b>, chemistry, school, mechanic, stomach.</p>',
    hint: PR + G('"ch" có hai cách đọc chính: /tʃ/ và /k/.', 'Nhớ nhóm từ "ch" đọc /k/: character, chemistry, school, mechanic.'),
    why: ['purchase /ˈpɜːtʃəs/ – /tʃ/', 'character /ˈkærəktə/ – /k/ → khác', 'merchandise /ˈmɜːtʃəndaɪs/ – /tʃ/', 'chocolate /ˈtʃɒklət/ – /tʃ/'] });
  const ST = '<p>Đọc to, vỗ tay theo từng âm tiết; âm tiết đọc to, rõ, kéo dài hơn là âm được nhấn. Bấm 🔊 để nghe.</p>';
  add({ ic: '🎵', say: true, q: '4. Choose the word that differs from the other three in the position of primary stress.', o: ['above', 'apple', 'alone', 'again'], a: 1,
    e: '<p>above, alone, again đều bắt đầu bằng "a" đọc /ə/. Âm /ə/ không bao giờ được nhấn, nên trọng âm rơi vào âm tiết 2. <b>apple</b> /ˈæpl/ nhấn âm tiết 1.</p>',
    hint: ST + G('Âm "a-" đầu từ đọc /ə/ (rất nhẹ) thì <b>không</b> được nhấn.', 'Từ nào có "a" đầu đọc rõ /æ/?'),
    why: ['a<b>BOVE</b> /əˈbʌv/ – âm 2', '<b>AP</b>ple /ˈæpl/ – âm 1 → khác', 'a<b>LONE</b> /əˈləʊn/ – âm 2', 'a<b>GAIN</b> /əˈɡen/ – âm 2'] });
  add({ ic: '🎵', say: true, q: '5. Choose the word that differs from the other three in the position of primary stress.', o: ['dictation', 'decision', 'librarian', 'carefully'], a: 3,
    e: '<p>Quy tắc: từ có đuôi <b>-tion, -sion, -ian</b> nhấn vào âm tiết <b>ngay trước</b> đuôi đó → dic<b>TA</b>tion, de<b>CI</b>sion, li<b>BRA</b>rian (âm 2). Hậu tố -ful, -ly không làm đổi trọng âm của từ gốc: <b>CARE</b>fully (âm 1).</p>',
    hint: ST + G('Nhìn đuôi từ: -tion, -sion, -ian → trọng âm ở âm tiết ngay trước.', 'Hậu tố -ful, -ly không đổi trọng âm: care → carefully.'),
    why: ['dic<b>TA</b>tion – âm 2', 'de<b>CI</b>sion – âm 2', 'li<b>BRA</b>rian – âm 2', '<b>CARE</b>fully – âm 1 → khác'] });
  add({ ic: '🎵', say: true, q: '6. Choose the word that differs from the other three in the position of primary stress.', o: ['encounter', 'determine', 'entertain', 'endanger'], a: 2,
    e: '<p>encounter, determine, endanger nhấn âm tiết 2. <b>entertain</b> /ˌentəˈteɪn/ nhấn âm tiết 3 ("tain"), giống maintain, obtain.</p>',
    hint: ST + G('Ba từ bắt đầu bằng en-, de- và nhấn ngay sau tiền tố.', 'Từ nào có trọng âm rơi vào âm tiết cuối "-tain"?'),
    why: ['en<b>COUN</b>ter – âm 2', 'de<b>TER</b>mine – âm 2', 'enter<b>TAIN</b> – âm 3 → khác', 'en<b>DAN</b>ger – âm 2'] });

  /* ---------- TỪ VỰNG – NGỮ PHÁP (7–16) ---------- */
  add({ ic: '🪙', q: '7. My sister has a lot of coins from different countries. Her hobby is ______.', o: ['building dollhouses', 'collecting coins', 'swimming', 'making models'], a: 1,
    e: '<p>Câu đầu nói chị gái có <b>rất nhiều đồng xu</b> từ nhiều nước → sở thích là <b>collecting coins</b> (sưu tầm tiền xu).</p>',
    hint: G('Đọc câu đầu, tìm danh từ chính: "coins" (đồng xu).', 'Chọn sở thích có liên quan tới danh từ đó.'),
    why: ['building dollhouses = làm nhà búp bê – không liên quan', 'collecting coins = sưu tầm tiền xu', 'swimming = bơi', 'making models = làm mô hình'] });
  add({ ic: '🦐', q: '8. The seafood she ate this morning makes her feel ______ all over.', o: ['well', 'good', 'itchy', 'weak'], a: 2,
    e: '<p>Ăn hải sản rồi "feel ___ all over" (khắp người) là dấu hiệu <b>dị ứng</b> → <b>itchy</b> (ngứa). Cấu trúc: make + sb + feel + tính từ.</p>',
    hint: G('Ngữ cảnh: ăn hải sản → thường bị gì?', '"all over" = khắp người. Cảm giác nào thường xuất hiện khắp người khi dị ứng?'),
    why: ['well = khoẻ – không hợp', 'good = tốt – không hợp', 'itchy = ngứa (dị ứng)', 'weak = yếu – không đi với "all over" trong ngữ cảnh này'] });
  add({ ic: '👨‍👧', q: '9. You can help your young children learn better by ______ them how to do homework after school.', o: ['teaching', 'doing', 'offering', 'helping'], a: 0,
    e: '<p>Cấu trúc <b>teach somebody how to do something</b> = dạy ai cách làm gì. Sau giới từ "by" dùng V-ing → <b>teaching</b>.</p>',
    hint: G('Sau "by" động từ thêm -ing (cả 4 phương án đều đúng dạng).', 'Tìm động từ đi được với cấu trúc "___ them <b>how to</b> do homework".'),
    why: ['teaching them how to… = dạy chúng cách…', 'doing them = sai nghĩa', 'offering them how to = không có cấu trúc này', '"help" đi với "help sb (to) do", không đi với "how to"'] });
  add({ ic: '🤧', q: '10. When you have a flu, you may have a cough and a ______ nose.', o: ['run', 'flying', 'runny', 'flowing'], a: 2,
    e: '<p><b>a runny nose</b> = sổ mũi (cụm cố định). Đứng trước danh từ "nose" phải là <b>tính từ</b> → runny.</p>',
    hint: G('Chỗ trống đứng giữa "a" và danh từ "nose" → cần <b>tính từ</b>.', 'Nhớ triệu chứng cảm cúm: a cough (ho), a runny nose (sổ mũi), a sore throat (đau họng).'),
    why: ['run = động từ', 'flying = bay – sai nghĩa', 'runny – a runny nose = sổ mũi', 'flowing = chảy (dòng nước) – không dùng với nose'] });
  add({ ic: '😂', q: '11. Laughing is very good ______ your health.', o: ['for', 'of', 'at', 'to'], a: 0,
    e: '<p><b>be good for</b> sth = có lợi cho cái gì. Phân biệt: be good <b>at</b> = giỏi về; be good <b>to</b> sb = tử tế với ai.</p>',
    hint: G('Đây là câu hỏi về giới từ đi với "good".', 'Nghĩa câu: Cười rất <i>có lợi cho</i> sức khoẻ.'),
    why: ['good for = có lợi cho', 'good of sb = ai đó thật tốt bụng', 'good at = giỏi về', 'good to sb = tử tế với ai'] });
  add({ ic: '🛠️', q: '12. Volunteers always do general ______ such as talking with the elderly, repairing houses, providing food and so on.', o: ['matters', 'labors', 'jobs', 'activities'], a: 2,
    e: '<p>Cụm <b>do jobs</b> = làm các công việc. "such as talking…, repairing…, providing…" là các <b>công việc</b> cụ thể → general jobs (những việc chung, việc lặt vặt).</p><p class="note">Câu 12 và 16 trong phiếu giống hệt nhau.</p>',
    hint: G('Động từ đứng trước chỗ trống là <b>do</b> → danh từ nào hay đi với "do"?', 'Các ví dụ sau "such as" là những việc làm cụ thể.'),
    why: ['matters = vấn đề – "do matters" không tự nhiên', 'labors = sức lao động – ít dùng số nhiều với "do"', 'jobs – do jobs = làm việc', 'activities thường đi với "take part in / join", không đi với "do general"'] });
  add({ ic: '💰', q: '13. Volunteer activities often include ______ money for people in need, cooking and giving food.', o: ['rising', 'raising', 'taking', 'getting'], a: 1,
    e: '<p><b>raise money</b> = quyên góp, gây quỹ. <i>raise</i> là ngoại động từ (có tân ngữ "money"); <i>rise</i> là nội động từ (tự tăng lên, không có tân ngữ).</p>',
    hint: G('Cụm "___ money for people in need" = gây quỹ cho người khó khăn.', 'Phân biệt raise (nâng/quyên góp, CÓ tân ngữ) và rise (tự tăng, KHÔNG có tân ngữ).'),
    why: ['rising: rise không có tân ngữ', 'raising – raise money = gây quỹ', 'taking money = lấy tiền – sai nghĩa', 'getting money = nhận tiền – không phải việc tình nguyện'] });
  add({ ic: '🍳', q: '14. A breakfast provides your body with the calories it needs for ______.', o: ['strength', 'energy', 'power', 'effort'], a: 1,
    e: '<p>Calo (calories) là đơn vị đo <b>năng lượng</b> mà cơ thể nhận từ thức ăn → energy.</p>',
    hint: G('Calo dùng để đo cái gì?', 'Chọn danh từ hợp nghĩa nhất.'),
    why: ['strength = sức mạnh cơ bắp', 'energy = năng lượng', 'power = công suất, quyền lực', 'effort = sự cố gắng'] });
  add({ ic: '👨‍🏫', q: '15. You can help your young children learn better by ______ them how to do homework after school.', o: ['tutoring', 'doing', 'offering', 'helping'], a: 0,
    e: '<p>Câu giống câu 9 nhưng đổi phương án. <b>tutor</b> = kèm cặp, dạy riêng → tutoring them how to do homework = kèm con cách làm bài tập. Các động từ còn lại không đi với "sb how to do".</p>',
    hint: G('So sánh với câu 9: cần động từ mang nghĩa "dạy, kèm".', 'Trong 4 phương án, từ nào có nghĩa gần với "teach"?'),
    why: ['tutoring = kèm cặp, dạy', 'doing them – sai nghĩa', 'offering them how to – không có cấu trúc này', 'helping them how to – sai cấu trúc (help sb do sth)'] });
  add({ ic: '🛠️', q: '16. Volunteers always do general ______ such as talking with the elderly, repairing houses, providing food and so on.', o: ['matters', 'labors', 'jobs', 'activities'], a: 2,
    e: '<p>Câu này giống câu 12. <b>do jobs</b> = làm các công việc.</p>',
    hint: G('Giống câu 12: danh từ nào đi với "do"?'),
    why: ['matters – không đi với do', 'labors – không tự nhiên', 'jobs', 'activities – thường dùng "take part in activities"'] });

  /* ---------- GIAO TIẾP (17–18) ---------- */
  add({ ic: '⚽', q: '17. Anna: "What sports do you like?" – Tom: "______"', o: ['Well, I love football and swimming.', 'No, I don\'t know.', 'Yes, it is my favourite sport.', 'I think it is boring.'], a: 0,
    e: '<p>Câu hỏi bắt đầu bằng <b>What</b> (môn thể thao nào?) → câu trả lời phải <b>nêu tên môn thể thao</b>, không trả lời Yes/No.</p>',
    hint: G('Câu hỏi bắt đầu bằng từ để hỏi (What) hay trợ động từ (Do/Is)?', 'Câu hỏi Wh- không trả lời bằng Yes/No → loại B, C.', 'Câu trả lời phải chứa thông tin "môn thể thao nào".'),
    why: ['Nêu rõ môn thể thao yêu thích', 'Trả lời No – sai với câu hỏi What', 'Trả lời Yes – sai với câu hỏi What', '"it" chỉ cái gì? Không trả lời đúng câu hỏi'] });
  add({ ic: '🧳', q: '18. Mrs. Green: "This suitcase is really heavy, and my back is killing me!" – Peter: "______"', o: ['I sometimes have backache.', 'Shall I carry it?', 'Oh, thanks for your help.', 'It\'s very good of you to do that.'], a: 1,
    e: '<p>Bà Green than vali nặng, đau lưng → Peter nên <b>đề nghị giúp đỡ</b>. Mẫu đề nghị giúp: <b>Shall I + V?</b> (Để cháu… nhé?).</p>',
    hint: G('Bà Green đang gặp khó khăn gì?', 'Phản ứng lịch sự nhất là <b>đề nghị giúp đỡ</b>. Mẫu câu: Shall I…? / Let me…', 'Loại các câu cảm ơn (người được giúp mới nói cảm ơn).'),
    why: ['Nói về bản thân, không giúp được bà', 'Shall I carry it? = Để cháu xách giúp nhé?', 'Câu cảm ơn – người được giúp mới nói', 'Câu khen người giúp mình – sai vai'] });

  /* ---------- ĐIỀN TỪ VÀO ĐOẠN VĂN (19–23) ---------- */
  const CL = G('Đọc cả đoạn trước để hiểu ý chính: Young Charity là tổ chức giúp trẻ mồ côi.', 'Với mỗi chỗ trống, xác định cần <b>loại từ</b> gì (danh từ, động từ, tính từ) rồi mới chọn nghĩa.');
  add({ ic: '🏢', passage: CHARITY, q: '19. Choose the word that best fits blank (19).', o: ['organisation', 'organise', 'organiser', 'organising'], a: 0,
    e: '<p>"a non-profit ___" → sau tính từ "non-profit" cần <b>danh từ</b>. Young Charity là một tổ chức → <b>organisation</b> (tổ chức phi lợi nhuận).</p>',
    hint: CL + G('Trước chỗ trống là "a non-profit" (mạo từ + tính từ) → cần danh từ.', 'Có hai danh từ: organisation (tổ chức) và organiser (người tổ chức). Young Charity là gì?'),
    why: ['organisation = tổ chức', 'organise = động từ', 'organiser = người tổ chức – Young Charity không phải một người', 'organising = V-ing'] });
  add({ ic: '🤲', passage: CHARITY, q: '20. Choose the word that best fits blank (20).', o: ['personal', 'generous', 'limited', 'terrible'], a: 1,
    e: '<p>"the ___ support of volunteers and donors" → sự ủng hộ của tình nguyện viên và nhà tài trợ đã giúp xây rất nhiều nhà → sự ủng hộ <b>hào phóng</b> → generous.</p>',
    hint: CL + G('Chỗ trống đứng trước danh từ "support" → cần tính từ (cả 4 đều là tính từ).', 'Nhờ sự ủng hộ này mà tổ chức xây được "a lot of…" → sự ủng hộ tốt hay xấu, nhiều hay ít?'),
    why: ['personal = cá nhân – không hợp', 'generous = hào phóng', 'limited = hạn chế – trái ý "a lot of"', 'terrible = tồi tệ – trái ý'] });
  add({ ic: '🏠', passage: CHARITY, q: '21. Choose the word that best fits blank (21).', o: ['libraries', 'hospitals', 'orphanages', 'nursing homes'], a: 2,
    e: '<p>Vế sau giải thích: "making sure that <b>orphans have their own home</b>" (đảm bảo trẻ mồ côi có nhà) → <b>orphanages</b> = trại trẻ mồ côi.</p>',
    hint: CL + G('Đọc phần ngay sau chỗ trống: "making sure that orphans have their own home".', 'Nơi nào là "nhà" của trẻ mồ côi (orphans)?'),
    why: ['libraries = thư viện', 'hospitals = bệnh viện – câu sau mới nói tới bệnh viện', 'orphanages = trại trẻ mồ côi', 'nursing homes = viện dưỡng lão – dành cho người già'] });
  add({ ic: '🎓', passage: CHARITY, q: '22. Choose the word that best fits blank (22).', o: ['helping', 'helped', 'help', 'helps'], a: 3,
    e: '<p>Đoạn văn viết ở <b>hiện tại đơn</b> (Its aim <b>is</b>…, It <b>is</b> involved…). Chủ ngữ <b>It</b> số ít → động từ thêm -s → <b>helps</b>.</p>',
    hint: CL + G('Chỗ trống là <b>động từ chính</b> của câu, chủ ngữ là "It".', 'Đoạn văn dùng thì gì? (xem các câu "Its aim is…", "It is involved…").', 'Chủ ngữ số ít + hiện tại đơn → thêm -s.'),
    why: ['helping – thiếu trợ động từ', 'helped – quá khứ, không hợp với thì của đoạn', 'help – thiếu -s với chủ ngữ It', 'helps'] });
  add({ ic: '🤝', passage: CHARITY, q: '23. Choose the word that best fits blank (23).', o: ['contribute', 'collect', 'donate', 'exchange'], a: 0,
    e: '<p>Cấu trúc <b>contribute to + V-ing / N</b> = góp phần vào. "contribute to making a difference" = góp phần tạo nên sự thay đổi.</p>',
    hint: CL + G('Nhìn từ đứng sau chỗ trống: "<b>to</b> making a difference".', 'Động từ nào đi với "to + V-ing" và mang nghĩa "góp phần"?'),
    why: ['contribute to + V-ing = góp phần', 'collect = thu gom – không đi với "to making"', 'donate to = quyên tặng cho ai/tổ chức nào, không đi với "making a difference"', 'exchange = trao đổi – sai nghĩa'] });

  /* ---------- ĐỌC HIỂU (24–29) ---------- */
  const DH = G('Đọc câu hỏi trước, gạch chân <b>từ khoá</b>.', 'Quay lại bài, tìm đoạn chứa từ khoá rồi đọc kĩ câu đó.');
  add({ ic: '🥗', passage: DIET, q: '24. What is the main idea of the passage?', o: ['Eating the right amount and types of food is important for health.', 'Eating too much food can lead to weight gain.', 'Reducing high-calorie foods is the key to a balanced diet.', 'Fibre-rich foods are the most important part of a healthy diet.'], a: 0,
    e: '<p>Câu mở đầu: "There are two important matters in eating" – (1) ăn <b>đủ lượng</b>, (2) ăn <b>đúng loại</b>. Các đoạn sau hướng dẫn cách ăn cân bằng. Ý chính phải bao quát cả hai ý → A.</p>',
    hint: G('Ý chính thường nằm ở <b>câu đầu</b> của bài.', 'Phương án đúng phải bao quát <b>cả bài</b>; phương án chỉ nói một chi tiết (một đoạn) là ý phụ.'),
    why: ['Bao quát: lượng thức ăn + loại thức ăn', 'Chỉ là một chi tiết ở đoạn 1', 'Chỉ là một chi tiết ở đoạn 2', 'Chỉ là một chi tiết ở đoạn 4; bài không nói "most important"'] });
  add({ ic: '🍟', passage: DIET, q: '25. Which type of food should we try to reduce according to the passage?', o: ['High-calorie foods', 'Sugary foods', 'Fiber-rich foods', 'All types of food'], a: 0,
    e: '<p>Đoạn 2: "we need to <b>reduce</b> the amount of <b>high-calorie food</b>." Bài có khuyên không ăn quá nhiều đường, nhưng từ "reduce" đi đúng với high-calorie food.</p>',
    hint: DH + G('Từ khoá: "reduce". Tìm từ này trong bài (đoạn 2).'),
    why: ['High-calorie foods – đúng câu trong bài', 'Đường: bài chỉ nói "should not eat too much", không dùng "reduce"', 'Chất xơ: bài khuyên ăn nhiều', 'Bài không nói giảm mọi loại'] });
  add({ ic: '🚫', passage: DIET, q: '26. Which of the following is NOT mentioned in the passage as an important part of a balanced diet?', o: ['Eating a variety of foods', 'Avoiding high-calorie foods', 'Eating only vegetables and fruits', 'Having a diet rich in fibre'], a: 2,
    e: '<p>Bài nói: ăn đúng lượng từng loại (A), giảm thức ăn nhiều calo (B), ăn nhiều chất xơ (D). Bài <b>không</b> khuyên "<b>chỉ</b> ăn rau và trái cây".</p>',
    hint: G('Câu hỏi <b>NOT mentioned</b>: lần lượt tìm từng phương án trong bài, phương án nào có thì gạch đi.', 'Chú ý các từ tuyệt đối như "only" (chỉ) – thường là bẫy.'),
    why: ['Có: "eat correct quantity of each type of food"', 'Có: đoạn 2', 'Không có – bài không nói "chỉ ăn rau quả"', 'Có: đoạn 4 "rich-fibre diet"'] });
  add({ ic: '👉', passage: DIET, q: '27. The word "it" in the last paragraph refers to ______.', o: ['diet', 'fibre', 'energy', 'rice'], a: 1,
    e: '<p>Đoạn cuối: "We can find <b>fibre</b> from rice, bread, etc. <u>It</u> is nutrients. It can give you lots of energy…" → "It" thay cho <b>fibre</b> (chất xơ) – chủ đề của cả đoạn.</p>',
    hint: G('Đại từ "it" thay cho một danh từ số ít đã nhắc <b>trước đó</b>.', 'Đọc câu ngay trước "It" và xác định chủ đề của đoạn cuối.', 'Thử thay từng phương án vào chỗ "It" xem câu có hợp nghĩa không.'),
    why: ['diet – không phải chủ đề câu trước', 'fibre – chủ đề đoạn cuối', 'energy – "it can give you energy" thì it không thể là energy', 'rice chỉ là ví dụ nguồn chất xơ'] });
  add({ ic: '↕️', passage: DIET, q: '28. The word "reduce" in paragraph 2 is OPPOSITE in meaning to ______.', o: ['avoid', 'decline', 'increase', 'affect'], a: 2,
    e: '<p>reduce = giảm bớt → trái nghĩa là <b>increase</b> = tăng lên.</p>',
    hint: G('Đề hỏi <b>OPPOSITE</b> (trái nghĩa), không phải đồng nghĩa.', 'reduce = giảm. Tìm từ có nghĩa ngược lại.'),
    why: ['avoid = tránh – không trái nghĩa', 'decline = giảm – gần nghĩa (bẫy)', 'increase = tăng', 'affect = ảnh hưởng'] });
  add({ ic: '⚖️', passage: DIET, q: '29. The word "overweight" in paragraph 1 is CLOSEST in meaning to ______.', o: ['fat', 'slender', 'healthy', 'skinny'], a: 0,
    e: '<p>overweight = thừa cân (over = quá, weight = cân nặng) → gần nghĩa nhất là <b>fat</b> (béo).</p>',
    hint: G('Đề hỏi <b>CLOSEST</b> (gần nghĩa nhất).', 'Tách từ: over (quá) + weight (cân nặng).'),
    why: ['fat = béo', 'slender = mảnh mai – trái nghĩa', 'healthy = khoẻ mạnh', 'skinny = gầy – trái nghĩa'] });

  /* ---------- ĐIỀN CÂU VÀO ĐOẠN (30–33) ---------- */
  const SH = G('Đọc 4 câu/cụm A–D. Câu nào bắt đầu bằng chữ <b>viết hoa</b> thì đứng đầu câu; cụm bắt đầu bằng chữ thường thì nối tiếp vào giữa câu.', 'Với mỗi chỗ trống, đọc từ đứng <b>ngay trước</b> và <b>ngay sau</b> để chọn cho khớp ngữ pháp và nghĩa.');
  add({ ic: '📮', passage: STAMPS, q: '30. Which option best fits blank (30)?', o: STAMP_OPTS, a: 3,
    e: '<p>Chỗ (30) đứng <b>đầu câu</b> và ngay sau là "<b>because</b> it does not cost much money to start" → cần câu nói sở thích này dễ, rẻ → D "It is an easy and <b>affordable</b> pastime for beginners" (affordable = giá cả phải chăng).</p>',
    hint: SH + G('Chỗ (30) đứng đầu câu → chọn câu bắt đầu bằng chữ hoa (A hoặc D).', 'Vế sau "because it does not cost much money" giải thích cho ý gì?'),
    why: ['Nói về kết nối với người khác – hợp chỗ (33)', 'Chữ thường, không đứng đầu câu', 'Chữ thường, không đứng đầu câu', 'Dễ và rẻ – khớp "does not cost much money"'] });
  add({ ic: '📒', passage: STAMPS, q: '31. Which option best fits blank (31)?', o: STAMP_OPTS, a: 2,
    e: '<p>"special albums, <b>which</b> ___" → "which" thay cho "albums", cần động từ: albums giúp gì cho tem? → C "<b>helps protect them from dust and damage</b>" (giúp bảo vệ tem khỏi bụi và hư hỏng).</p>',
    hint: SH + G('Trước chỗ trống là "which" (thay cho albums) → cần cụm bắt đầu bằng động từ (B hoặc C).', 'Cuốn album có tác dụng gì đối với những con tem?'),
    why: ['Câu hoàn chỉnh, không nối sau "which"', 'Tìm hiểu thế giới – hợp với "studying stamps" hơn (chỗ 32)', 'Bảo vệ tem khỏi bụi, hư hỏng', 'Câu hoàn chỉnh, không nối sau "which"'] });
  add({ ic: '🌍', passage: STAMPS, q: '32. Which option best fits blank (32)?', o: STAMP_OPTS, a: 1,
    e: '<p>"studying the pictures and dates on stamps ___ <b>without leaving their homes</b>" → việc ngắm tem giúp học sinh khám phá điều thú vị về thế giới mà không cần ra khỏi nhà → B.</p>',
    hint: SH + G('Chủ ngữ là "studying the pictures and dates on stamps" → cần động từ (B hoặc C).', 'Vế sau "without leaving their homes" (không cần rời khỏi nhà) gợi ý việc gì – như đi du lịch khám phá thế giới?'),
    why: ['Câu hoàn chỉnh – đứng đầu câu (33)', 'Khám phá thế giới – khớp "without leaving their homes"', 'Đã dùng cho (31), và không hợp nghĩa', 'Câu hoàn chỉnh'] });
  add({ ic: '👫', passage: STAMPS, q: '33. Which option best fits blank (33)?', o: STAMP_OPTS, a: 0,
    e: '<p>Chỗ (33) đứng <b>đầu câu</b>, vế sau "as collectors often <b>meet online or at school clubs</b> to trade rare stamps" (vì người sưu tầm hay gặp nhau…) → A "<b>Connecting with other hobbyists</b> is also much easier" (kết nối với người cùng sở thích cũng dễ hơn).</p>',
    hint: SH + G('Chỗ (33) đứng đầu câu → A hoặc D (D đã dùng cho chỗ 30).', 'Vế sau nói về việc gặp gỡ, trao đổi tem với người khác.'),
    why: ['Kết nối với người cùng sở thích', 'Chữ thường', 'Chữ thường', 'Đã dùng cho (30)'] });

  /* ---------- BIỂN BÁO, TIN NHẮN (34–36) ---------- */
  const NT = G('Đọc kĩ <b>từng dòng</b> của biển báo/tin nhắn, dịch sang tiếng Việt.', 'So từng phương án với thông tin trên biển; loại phương án <b>thêm</b> hoặc <b>sai</b> thông tin (về số, giờ, đối tượng).');
  add({ ic: '🪧', f: NOTICE('OPEN FROM 8 P.M. – 10 P.M.<br>EVERYONE AGED 15 – 17<br>WELCOME.', '#c8102e', '#fff'), q: '34. What does the notice say?', o: ['Only 15-17 people can enter the place.', 'Only teenagers who are over 15 can enter this place.', 'The venue is open to all teenagers under the age of 17.', 'Teenagers aged 15-17 can visit the venue from 8 p.m. to 10 p.m.'], a: 3,
    e: '<p>Biển báo có 2 thông tin: <b>giờ mở cửa 8 – 10 giờ tối</b> và <b>chào đón người từ 15 đến 17 tuổi</b>. Chỉ phương án D nêu đủ và đúng cả hai.</p>',
    hint: NT + G('Biển có 2 thông tin: <b>giờ mở cửa</b> và <b>độ tuổi</b>.', '"aged 15 – 17" là độ tuổi, không phải số lượng người.'),
    why: ['Hiểu sai "15-17" thành số người', '"over 15" sai – biển ghi từ 15 đến 17 tuổi', '"under 17" sai – thiếu giới hạn từ 15 tuổi', 'Đúng độ tuổi và đúng giờ mở cửa'] });
  add({ ic: '✉️', f: EMAIL, q: '35. What is the main reason James cannot attend the concert?', o: ['He lost his ticket.', 'He doesn\'t like the music.', 'He has another commitment.', 'He is feeling unwell.'], a: 3,
    e: '<p>James viết: "I feel very <b>sick</b>. I think I ate something bad." (Mình thấy rất mệt, chắc ăn phải đồ hỏng) → sick = <b>unwell</b> (không khoẻ).</p>',
    hint: NT + G('Tìm câu nói <b>lí do</b> ngay sau lời xin lỗi.', 'Tìm phương án đồng nghĩa với "feel very sick".'),
    why: ['Không nhắc vé', 'Không nói không thích nhạc', 'commitment = việc bận khác – không có', 'unwell = sick'] });
  add({ ic: '🍎', f: NOTICE('<span style="color:#d7263d">SPECIAL<br>SUPERMARKET OFFER<br>TODAY ONLY!</span><br><span style="color:#1d7a3a;font-size:1.15em">5 APPLES FOR $2 ONLY<br>OFFER ENDS AT 6 P.M.</span>', '#eef1ec', '#1b2232'), q: '36. What does the notice say?', o: ['Today you can buy apples at a cheaper price before 6 p.m.', 'You can\'t buy any apples before 6 p.m.', 'You can buy cheaper apples after 6 p.m.', 'You can only buy apples today.'], a: 0,
    e: '<p>"Special offer, today only" = khuyến mãi chỉ hôm nay; "5 apples for $2" = giá rẻ; "<b>Offer ends at 6 p.m.</b>" = khuyến mãi <b>kết thúc</b> lúc 6 giờ chiều → hôm nay mua táo giá rẻ <b>trước</b> 6 giờ chiều.</p>',
    hint: NT + G('"offer ends at 6 p.m." – khuyến mãi <b>kết thúc</b> lúc 6 giờ → giá rẻ trước hay sau 6 giờ?', '"today only" nói về khuyến mãi, không phải về việc bán táo.'),
    why: ['Đúng: hôm nay, giá rẻ, trước 6 giờ', 'Sai: trước 6 giờ vẫn mua được, còn đang giảm giá', 'Sai: sau 6 giờ hết khuyến mãi', 'Sai: "today only" là khuyến mãi, ngày khác vẫn bán táo'] });

  /* ---------- NGHE (37–40) ---------- */
  const LH = G('<b>Trước khi nghe:</b> đọc câu hỏi, gạch chân từ để hỏi (What / What time / Where / How) và đọc 4 phương án.', '<b>Khi nghe:</b> các phương án sai thường <b>cũng được nhắc tới</b> rồi bị loại ("too expensive", "too late", "he has lots of…"). Chờ nghe đến <b>câu chốt cuối</b>.', 'Được nghe 2 lần: lần 1 đánh dấu các phương án bị loại, lần 2 kiểm tra lại.');
  add({ ic: '🎁', listen: L37, q: 'Bấm nút để nghe (được nghe 2 lần). <b>37. What will they buy Timmy for his birthday?</b>', o: ['football boots', 'jeans', 'a shirt', 'a skirt'], a: 0,
    e: '<p>Cả 3 thứ đều được nhắc tới, nhưng: áo sơ mi → "He has lots of shirts already" (loại); quần jeans → "he never wears jeans" (loại); giày bóng đá cũ đã chật → chốt: "Let\'s buy him a new pair of <b>football boots</b>".</p><h4>Lời thoại</h4>' + script(L37),
    hint: LH + G('Nghe xem món nào bị loại và vì sao.', '"a skirt" (váy) – có hợp làm quà cho bạn trai Timmy không?'),
    why: ['Câu chốt: "Let\'s buy him a new pair of football boots"', 'Bị loại: "he never wears jeans"', 'Bị loại: "He has lots of shirts already"', 'Không được nhắc tới'] });
  add({ ic: '⏰', listen: L38, q: 'Bấm nút để nghe. <b>38. What time will they meet?</b>', o: ['11:30', '10:30', '10:00', '11:00'], a: 1,
    e: '<p>10:00 → bạn gái có giờ học piano (loại); 11:00 → "too late" (loại); 11:30 → giờ phim bắt đầu (bẫy). Chốt: "let\'s meet at <b>half past ten</b>" = 10:30.</p><h4>Lời thoại</h4>' + script(L38),
    hint: LH + G('Bài nghe nhắc tới cả 4 mốc giờ. Mỗi mốc giờ gắn với việc gì?', 'Nhớ: <b>half past ten</b> = 10 giờ 30.'),
    why: ['11:30 là giờ phim bắt đầu – bẫy', 'half past ten = 10:30', '10:00 – bạn gái học piano đến 10 giờ', '11:00 – "That\'s too late"'] });
  add({ ic: '⛷️', listen: L39, q: 'Bấm nút để nghe. <b>39. Where will they go skiing?</b>', o: ['Italy', 'Iceland', 'France', 'Poland'], a: 0,
    e: '<p>Pháp → "too expensive" (loại); Ba Lan → tuyết không tốt (loại); Iceland → "much too cold" (loại). Chốt: "Let\'s go to <b>Italy</b>… OK, Italy it is!"</p><h4>Lời thoại</h4>' + script(L39),
    hint: LH + G('Cả 4 nước đều được nhắc. Ghi bên cạnh mỗi nước lí do bị loại (expensive, cold…).', '"… it is!" ở cuối là câu chốt quyết định.'),
    why: ['"Let\'s go to Italy… Italy it is!"', 'Bị loại: "much too cold"', 'Bị loại: "too expensive last year"', 'Bị loại: "the snow wasn\'t good"'] });
  add({ ic: '🚆', listen: L40, q: 'Bấm nút để nghe. <b>40. How will the friends travel?</b>', o: ['by taxi', 'by train', 'by bus', 'by car'], a: 1,
    e: '<p>Xe buýt → "too slow" (loại); ô tô → xe của bố bị hỏng (loại); taxi → "too expensive" (loại). Chốt: "let\'s take the <b>train</b>… The train it is!"</p><h4>Lời thoại</h4>' + script(L40),
    hint: LH + G('Nghe lí do loại từng phương tiện: slow, broken, expensive.', '"take the + phương tiện" = đi bằng…'),
    why: ['Bị loại: "too expensive for four people"', '"Then let\'s take the train"', 'Bị loại: "The bus is too slow"', 'Bị loại: "his car is broken"'] });
})();
