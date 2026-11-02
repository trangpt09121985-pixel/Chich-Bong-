/* TỰ LUẬN TIẾNG ANH 7 – đáp án và giải thích các bài viết trong Revision 1 & 2 */
(function () {
  const S = window.QZ.subjects.anh; if (!S) return;
  const T1 = 'Verb tenses', T2 = 'Word forms', T3 = 'Complete sentences', T4 = 'Rewrite sentences';
  const li = (q, a, why) => `<li><span class="q-en">${q}</span><div class="ans">${a}</div>${why ? `<small class="why">💡 ${why}</small>` : ''}</li>`;
  S.essays = [
    { t: T1, src: 'Revision 1 · IV', ic: '⏳', q: 'Put the following verbs into the correct tense (10 sentences).',
      a: `<div class="memo">🧠 Dấu hiệu: <b>last summer, yesterday, in 1946, last night</b> → quá khứ đơn · <b>once a week, every day</b> → hiện tại đơn · lịch trình (flight, train) → hiện tại đơn · sau <b>be fond of, dislike, suggest</b> → V-ing.</div>
      <ol class="steps">
        ${li('1. Last summer, my mother (teach) ___ me to bake cupcakes.', 'taught', 'last summer → quá khứ đơn; teach → taught (bất quy tắc).')}
        ${li('2. My sister is fond of (arrange) ___ flowers in her free time.', 'arranging', 'be fond of + V-ing.')}
        ${li('3. Her children dislike (get) ___ up early every morning.', 'getting', 'dislike + V-ing.')}
        ${li('4. What (you/ watch) ___ on TV last night?', 'did you watch', 'Câu hỏi quá khứ: Wh- + did + S + V.')}
        ${li('5. I got to the post office just before it closed and (send) ___ the letter.', 'sent', 'Hai hành động nối tiếp trong quá khứ.')}
        ${li('6. ___ (you/ go) to see the concert yesterday?', 'Did you go', 'yesterday → quá khứ đơn.')}
        ${li('7. Claire (volunteer) ___ at the homeless shelter once a week.', 'volunteers', 'once a week → hiện tại đơn; chủ ngữ số ít thêm -s.')}
        ${li('8. They (establish) ___ the Viet Nam Red Cross Society in 1946.', 'established', 'Mốc năm trong quá khứ. (Bản in ghi 1916; Hội Chữ thập đỏ Việt Nam thành lập năm 1946.)')}
        ${li('9. My flight (depart) ___ for Ho Chi Minh City at 3 p.m.', 'departs', 'Lịch trình chuyến bay → hiện tại đơn.')}
        ${li('10. Jane suggested (donate) ___ old books and toys to needy children.', 'donating', 'suggest + V-ing.')}
      </ol>` },
    { t: T1, src: 'Revision 2 · V', ic: '⏳', q: 'Put the verbs in brackets into the correct form (5 sentences).',
      a: `<ol class="steps">
        ${li('1. ___ the Sun (rise) ___ in the East or in the West, Mom?', 'Does … rise', 'Sự thật hiển nhiên → hiện tại đơn; câu hỏi: Does + S + V.')}
        ${li('2. We (donate) ___ some toys and (visit) ___ sick children in the hospital last month.', 'donated … visited', 'last month → quá khứ đơn.')}
        ${li('3. Tom shouldn\'t (eat) ___ so many sweets.', 'eat', 'should / shouldn\'t + V nguyên mẫu.')}
        ${li('4. He often spends an hour as minimum (read) ___ books daily.', 'reading', 'spend + time + V-ing.')}
        ${li('5. We find (arrange) ___ flowers interesting because it helps us relax.', 'arranging', 'find + V-ing + adj.')}
      </ol>` },
    { t: T2, src: 'Revision 1 · V', ic: '🔤', q: 'Put the correct form of the words in the following sentences (8 sentences).',
      a: `<div class="memo">🧠 Xác định từ loại cần điền: sau <b>a/an/the, a bit of</b> → danh từ · trước danh từ → tính từ · bổ nghĩa động từ → trạng từ · sau <b>make + O</b> → tính từ.</div>
      <ol class="steps">
        ${li('1. She needs a bit of ___. (create)', 'creativity', 'Sau "a bit of" cần danh từ.')}
        ${li('2. Eating more vegetables and less meat will make you ___. (health)', 'healthier', 'make sb + adj; có "more…less" → so sánh hơn.')}
        ${li('3. There are ___ symptoms when you have a cold. (differ)', 'different', 'Trước danh từ "symptoms" cần tính từ.')}
        ${li('4. Eating ___ is good for our health. (health)', 'healthily', 'Bổ nghĩa cho động từ "eating" → trạng từ.')}
        ${li('5. Lifting weights helps build ___ in your arms and legs. (strong)', 'strength', 'Sau "build" cần danh từ (sức mạnh).')}
        ${li('6. My uncle is a ___. He doesn\'t eat meat or fish. (vegetable)', 'vegetarian', 'Danh từ chỉ người ăn chay.')}
        ${li('7. Community ___ have a lot of positive effects on students. (serve)', 'services', 'Danh từ số nhiều (động từ "have").')}
        ${li('8. John is a stamp ___. He has a lot of rare stamps. (collect)', 'collector', 'Danh từ chỉ người sưu tầm.')}
      </ol>` },
    { t: T2, src: 'Revision 2 · IV', ic: '🔤', q: 'Put the correct form of the words in the following sentences (6 sentences).',
      a: `<ol class="steps">
        ${li('1. We help the ___ with housework and gardening. (old)', 'elderly', 'the elderly = người cao tuổi.')}
        ${li('2. He made a $5000 ___ to charity. (donate)', 'donation', 'Sau "a $5000" cần danh từ.')}
        ${li('3. The homeless shelters are entirely staffed by ___ workers. (volunteer)', 'voluntary', 'Trước danh từ "workers" cần tính từ.')}
        ${li('4. She dreams of becoming a professional ___. (photograph)', 'photographer', 'Danh từ chỉ người: nhiếp ảnh gia.')}
        ${li('5. Carving shells is difficult and ___. (bore)', 'boring', 'Tính từ đuôi -ing tả tính chất của sự việc.')}
        ${li('6. People in this area have a problem with ___. (obese)', 'obesity', 'Sau giới từ "with" cần danh từ.')}
      </ol>` },
    { t: T3, src: 'Revision 1 · VIII', ic: '🧱', q: 'Write complete sentences, using the given words/phrases (5 sentences).',
      a: `<div class="memo">🧠 3 bước: (1) xác định thì qua dấu hiệu thời gian · (2) chia động từ · (3) thêm mạo từ, giới từ còn thiếu.</div>
      <ol class="steps">
        ${li('1. Last week/ our school/ organize/ musical concert/ raise fund/ for/ the orphan/ in the local area.', 'Last week, our school organized a musical concert to raise funds for the orphans in the local area.', 'Thêm "a", "to"; số nhiều funds, orphans.')}
        ${li('2. All the students/ at my school/ be excited/ join hands/ in/ the special event/ yesterday.', 'All the students at my school were excited to join hands in the special event yesterday.', 'be excited + to V; yesterday → were.')}
        ${li('3. We/ take/ part/ a clean-up campaign/ last weekend.', 'We took part in a clean-up campaign last weekend.', 'take part in = tham gia.')}
        ${li('4. My dad/ be/ in London/ last month/ but he/ not see/ Big Ben.', 'My dad was in London last month, but he didn\'t see Big Ben.', 'Phủ định quá khứ: didn\'t + V.')}
        ${li('5. My sister/ interested/ cook/ and/ make/ new dishes.', 'My sister is interested in cooking and making new dishes.', 'be interested in + V-ing.')}
      </ol>` },
    { t: T3, src: 'Revision 2 · IX', ic: '🧱', q: 'Write complete sentences, using the given words and phrases (6 sentences).',
      a: `<ol class="steps">
        ${li('1. mother/ like/ listen/ classical music.', 'My mother likes listening to classical music.', 'listen to sth.')}
        ${li('2. John/ keen/ make/ model/ free time.', 'John is keen on making models in his free time.', 'be keen on + V-ing.')}
        ${li('3. Colour/ vegetables/ provide/ us/ lot/ vitamins.', 'Colourful vegetables provide us with a lot of vitamins.', 'provide sb with sth; colour → colourful (tính từ).')}
        ${li('4. Acne/ usually/ cause/ small, red/ spot/ face.', 'Acne usually causes small, red spots on the face.', 'Hiện tại đơn, chủ ngữ số ít → causes.')}
        ${li('5. We/ collect/ book/ clothes/ poor/ children/ last summer.', 'We collected books and clothes for poor children last summer.', 'last summer → collected.')}
        ${li('6. My dad / find / gardening / amaze / because it / help / him control / stress.', 'My dad finds gardening amazing because it helps him control stress.', 'find + V-ing + adj (amazing).')}
      </ol>` },
    { t: T4, src: 'Revision 1 · IX', ic: '🔁', q: 'Rewrite the sentences without changing the meaning (5 sentences).',
      a: `<div class="memo">🧠 Công thức hay gặp:<br>S + spend + time + V-ing = It takes + O + time + to V<br>S + think + V-ing + is + adj = S + find + V-ing + adj<br>Let's + V = Why don't we + V?</div>
      <ol class="steps">
        ${li('1. He spends hours researching and learning about the history of each piece in his stamp collection. (takes)', 'It takes him hours to research and learn about the history of each piece in his stamp collection.', '')}
        ${li('2. My brother thinks making models is incredibly interesting and challenging. (finds)', 'My brother finds making models incredibly interesting and challenging.', '')}
        ${li('3. She fancies trying new recipes and experimenting with different flavors. (of)', 'She is fond of trying new recipes and experimenting with different flavors.', 'fancy = be fond of + V-ing.')}
        ${li('4. I eat less junk food because I don\'t want to put on weight. (avoid)', 'I eat less junk food to avoid putting on weight.', 'avoid + V-ing.')}
        ${li('5. Let\'s join a program that helps the elderly! (Why)', 'Why don\'t we join a program that helps the elderly?', '')}
      </ol>` },
    { t: T4, src: 'Revision 2 · X', ic: '🔁', q: 'Rewrite the sentences without changing the meaning (6 sentences).',
      a: `<div class="memo">🧠 <b>Unless = If … not</b>: dùng Unless thì bỏ "not" ở mệnh đề đó.</div>
      <ol class="steps">
        ${li('1. If everyone doesn\'t throw rubbish into the right bin, our classroom will be dirty and untidy. (Unless)', 'Unless everyone throws rubbish into the right bin, our classroom will be dirty and untidy.', 'everyone + động từ số ít: throws.')}
        ${li('2. Unless we stop cutting down so many trees, we will endanger our oxygen supply. (If)', 'If we don\'t stop cutting down so many trees, we will endanger our oxygen supply.', '')}
        ${li('3. My daughter detests making pottery. (enjoy)', 'My daughter doesn\'t enjoy making pottery.', 'detest = rất ghét → không thích.')}
        ${li('4. My mum thinks arranging flowers is difficult. (finds)', 'My mum finds arranging flowers difficult.', '')}
        ${li('5. It takes us 30 minutes to do the gardening every day. (spend)', 'We spend 30 minutes doing the gardening every day.', '')}
        ${li('6. The farmer often spends fifteen minutes leading the buffalo to the field every day. (takes)', 'It often takes the farmer fifteen minutes to lead the buffalo to the field every day.', 'Giữ trạng từ "often".')}
      </ol>` }
  ];
})();
