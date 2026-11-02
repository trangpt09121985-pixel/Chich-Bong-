/* TỰ LUẬN TIẾNG ANH 7 – bài tập tương tác theo Revision 1 & 2
   kind 'fill': điền vào chỗ trống, có ngân hàng đáp án xáo trộn · kind 'build': bấm các ô từ đã xáo trộn để ghép thành câu đúng */
(function () {
  const S = window.QZ.subjects.anh; if (!S) return;
  const T1 = 'Verb tenses', T2 = 'Word forms', T3 = 'Complete sentences', T4 = 'Rewrite sentences';
  const G = (...li) => '<ol class="step-guide">' + li.map(x => `<li>${x}</li>`).join('') + '</ol>';
  S.essays = [
    { t: T1, src: 'Revision 1 · IV', ic: '⏳', kind: 'fill', q: 'Put the following verbs into the correct tense. <i>(Chia động từ trong ngoặc.)</i>',
      hint: G('Gạch chân <b>dấu hiệu thời gian</b> trong câu: <i>last summer, last night, yesterday, in 1946</i> → quá khứ đơn; <i>once a week, every day</i> → hiện tại đơn.',
        'Lịch trình (chuyến bay, tàu xe) dùng <b>hiện tại đơn</b>.',
        'Sau <i>be fond of, dislike, suggest</i> → động từ thêm <b>-ing</b>.',
        'Câu hỏi quá khứ: <b>Did + S + V</b>; Wh-: <b>What did + S + V</b>?',
        'Chủ ngữ số ít (he, she, Claire, my flight) + hiện tại đơn → thêm <b>-s/-es</b>.'),
      items: [
        { q: '1. Last summer, my mother (teach) ___ me to bake cupcakes.', a: ['taught'], why: '"Last summer" → quá khứ đơn; teach – taught (bất quy tắc).' },
        { q: '2. My sister is fond of (arrange) ___ flowers in her free time.', a: ['arranging'], why: 'be fond of + V-ing.' },
        { q: '3. Her children dislike (get) ___ up early every morning.', a: ['getting'], why: 'dislike + V-ing; get → getting (gấp đôi t).' },
        { q: '4. What ___ (you/ watch) on TV last night?', a: ['did you watch'], why: 'Câu hỏi quá khứ: What + did + you + watch.' },
        { q: '5. I got to the post office just before it closed and (send) ___ the letter.', a: ['sent'], why: 'Nối tiếp hành động quá khứ "got"; send – sent.' },
        { q: '6. ___ (you/ go) to see the concert yesterday?', a: ['did you go'], why: '"yesterday" → Did + you + go?' },
        { q: '7. Claire (volunteer) ___ at the homeless shelter once a week.', a: ['volunteers'], why: '"once a week" → hiện tại đơn, Claire số ít → volunteers.' },
        { q: '8. They (establish) ___ the Viet Nam Red Cross Society in 1946.', a: ['established'], why: 'Năm 1946 trong quá khứ → established.' },
        { q: '9. My flight (depart) ___ for Ho Chi Minh City at 3 p.m.', a: ['departs'], why: 'Lịch trình chuyến bay → hiện tại đơn.' },
        { q: '10. Jane suggested (donate) ___ old books and toys to needy children.', a: ['donating'], why: 'suggest + V-ing.' }
      ],
      a: '<div class="memo">🧠 Hiện tại đơn: thói quen, sự thật, lịch trình · Quá khứ đơn: việc đã xong có mốc thời gian · like/love/enjoy/dislike/hate/fancy/suggest/be fond of + V-ing.</div><p class="note">Câu 8: bản in đề cương ghi năm 1916; Hội Chữ thập đỏ Việt Nam thành lập năm 1946.</p>' },
    { t: T1, src: 'Revision 2 · V', ic: '⏳', kind: 'fill', q: 'Put the verbs in brackets into the correct form. <i>(Câu có hai chỗ trống: gõ cả hai từ, cách nhau dấu phẩy.)</i>',
      hint: G('Câu 1: sự thật hiển nhiên → hiện tại đơn; câu hỏi với "the Sun" (số ít) dùng trợ động từ gì?',
        'Câu 2: "last month" → quá khứ đơn cho <b>cả hai</b> động từ.',
        'Câu 3: sau <b>should / shouldn\'t</b> là động từ nguyên mẫu.',
        'Câu 4: <b>spend + thời gian + V-ing</b>.', 'Câu 5: <b>find + V-ing + adj</b>.'),
      items: [
        { q: '1. ___ the Sun (rise) in the East or in the West, Mom?', a: ['Does, rise', 'does rise', 'does, rise', 'does ... rise'], clue: 'Gõ: trợ động từ, động từ', why: 'Does … rise: câu hỏi hiện tại đơn, chủ ngữ số ít.' },
        { q: '2. We (donate) … some toys and (visit) … sick children in the hospital last month. → ___', a: ['donated, visited', 'donated visited', 'donated - visited'], clue: 'Gõ: động từ 1, động từ 2', why: '"last month" → donated, visited.' },
        { q: '3. Tom shouldn\'t (eat) ___ so many sweets. It\'s bad for his teeth.', a: ['eat'], why: 'shouldn\'t + V nguyên mẫu.' },
        { q: '4. He often spends an hour as minimum (read) ___ books daily.', a: ['reading'], why: 'spend + time + V-ing.' },
        { q: '5. We find (arrange) ___ flowers interesting because it helps us relax.', a: ['arranging'], why: 'find + V-ing + adj.' }
      ] },
    { t: T2, src: 'Revision 1 · V', ic: '🔤', kind: 'fill', q: 'Put the correct form of the words in the following sentences. <i>(Viết dạng đúng của từ trong ngoặc.)</i>',
      hint: G('Nhìn <b>từ đứng trước và sau</b> chỗ trống để biết cần loại từ gì.',
        'Sau <i>a, an, the, a bit of</i> hoặc trước động từ làm chủ ngữ → <b>danh từ</b>. Danh từ chỉ người thường có đuôi <i>-er, -or, -ist, -ian</i>.',
        'Trước danh từ, hoặc sau <i>make + somebody</i> → <b>tính từ</b> (đuôi <i>-ful, -y, -ent, -ive</i>).',
        'Đứng sau, bổ nghĩa cho động từ → <b>trạng từ</b> (đuôi <i>-ly</i>).',
        'Kiểm tra số ít/số nhiều: động từ sau chỗ trống là "have" → danh từ số nhiều.'),
      items: [
        { q: '1. Her painting isn\'t very impressive. She needs a bit of ___. (create)', a: ['creativity'], why: 'Sau "a bit of" → danh từ.' },
        { q: '2. Eating more vegetables and less meat will make you ___. (health)', a: ['healthier'], why: 'make + O + adj; "more… less" → so sánh hơn.' },
        { q: '3. There are ___ symptoms when you have a cold. (differ)', a: ['different'], why: 'Trước danh từ "symptoms" → tính từ.' },
        { q: '4. Eating ___ is good for our health. (health)', a: ['healthily'], why: 'Bổ nghĩa cho động từ "eating" → trạng từ.' },
        { q: '5. Lifting weights helps build ___ in your arms and legs. (strong)', a: ['strength'], why: 'Sau động từ "build" cần danh từ.' },
        { q: '6. My uncle is a ___. He doesn\'t eat meat or fish. (vegetable)', a: ['vegetarian'], why: 'Danh từ chỉ người ăn chay.' },
        { q: '7. Community ___ have a lot of positive effects on students. (serve)', a: ['services'], why: 'Danh từ số nhiều (động từ "have").' },
        { q: '8. John is a stamp ___. He has a lot of rare and valuable stamps. (collect)', a: ['collector'], why: 'Danh từ chỉ người: người sưu tầm.' }
      ] },
    { t: T2, src: 'Revision 2 · IV', ic: '🔤', kind: 'fill', q: 'Put the correct form of the words in the following sentences.',
      hint: G('Xác định loại từ cần điền như bài trên.', '"the + tính từ" chỉ một nhóm người: the elderly, the poor.', 'Tính từ <b>-ing</b> tả tính chất của sự việc (boring); <b>-ed</b> tả cảm xúc của người (bored).'),
      items: [
        { q: '1. We help the ___ with housework and gardening. (old)', a: ['elderly'], why: 'the elderly = người cao tuổi.' },
        { q: '2. He made a $5000 ___ to charity. (donate)', a: ['donation'], why: 'Sau "a $5000" → danh từ.' },
        { q: '3. The homeless shelters are entirely staffed by ___ workers. (volunteer)', a: ['voluntary'], why: 'Trước danh từ "workers" → tính từ.' },
        { q: '4. She dreams of becoming a professional ___. (photograph)', a: ['photographer'], why: 'Danh từ chỉ người.' },
        { q: '5. Carving shells is difficult and ___. (bore)', a: ['boring'], why: 'Tả tính chất công việc → -ing.' },
        { q: '6. People in this area have a problem with ___. (obese)', a: ['obesity'], why: 'Sau giới từ "with" → danh từ.' }
      ] },
    { t: T3, src: 'Revision 1 · VIII', ic: '🧱', kind: 'build', q: 'Write complete sentences, using the given words/phrases. <i>Bấm các ô từ đã xáo trộn theo đúng thứ tự để tạo câu.</i>',
      hint: G('Tìm <b>dấu hiệu thời gian</b> để chia động từ (last week, yesterday, last month → quá khứ).',
        'Xác định khung câu: <b>Chủ ngữ + Động từ + Tân ngữ + Trạng ngữ</b>.',
        'Thêm từ còn thiếu: mạo từ (a, the), giới từ (in, to, for), "to" trước động từ chỉ mục đích.',
        'Trạng ngữ thời gian có thể đứng đầu câu (có dấu phẩy) hoặc cuối câu.'),
      items: [
        { q: 'Last week/ our school/ organize/ musical concert/ raise fund/ for/ the orphan/ in the local area.', clue: 'Quá khứ · "to + V" chỉ mục đích', a: 'Last week, our school organized a musical concert to raise funds for the orphans in the local area.', why: 'organized (quá khứ) · to raise funds (mục đích).' },
        { q: 'All the students/ at my school/ be excited/ join hands/ in/ the special event/ yesterday.', clue: 'be excited + to V', a: 'All the students at my school were excited to join hands in the special event yesterday.', why: 'were excited to join hands.' },
        { q: 'We/ take/ part/ a clean-up campaign/ last weekend.', clue: 'take part in = tham gia', a: 'We took part in a clean-up campaign last weekend.', why: 'took part in.' },
        { q: 'My dad/ be/ in London/ last month/ but he/ not see/ Big Ben.', clue: 'Phủ định quá khứ: didn\'t + V', a: 'My dad was in London last month, but he didn\'t see Big Ben.', why: 'was · didn\'t see.' },
        { q: 'My sister/ interested/ cook/ and/ make/ new dishes.', clue: 'be interested in + V-ing', a: 'My sister is interested in cooking and making new dishes.', why: 'is interested in cooking and making.' }
      ] },
    { t: T3, src: 'Revision 2 · IX', ic: '🧱', kind: 'build', q: 'Write complete sentences, using the given words and phrases.',
      hint: G('Xác định thì (không có dấu hiệu quá khứ → hiện tại đơn; chủ ngữ số ít thêm -s).',
        'Ghi nhớ cấu trúc: <b>like + V-ing</b> · <b>be keen on + V-ing</b> · <b>provide sb with sth</b> · <b>find + V-ing + adj</b>.',
        'Biến đổi từ loại khi cần: colour → colourful, amaze → amazing.'),
      items: [
        { q: 'mother/ like/ listen/ classical music.', clue: 'like + V-ing · listen to', a: 'My mother likes listening to classical music.', why: 'likes listening to.' },
        { q: 'John/ keen/ make/ model/ free time.', clue: 'be keen on + V-ing', a: 'John is keen on making models in his free time.', why: 'is keen on making models.' },
        { q: 'Colour/ vegetables/ provide/ us/ lot/ vitamins.', clue: 'provide sb with sth', a: 'Colourful vegetables provide us with a lot of vitamins.', why: 'Colourful (tính từ) · provide us with.' },
        { q: 'Acne/ usually/ cause/ small, red/ spot/ face.', clue: 'Hiện tại đơn · on the face', a: 'Acne usually causes small, red spots on the face.', why: 'causes · spots on the face.' },
        { q: 'We/ collect/ book/ clothes/ poor/ children/ last summer.', clue: 'Quá khứ đơn', a: 'We collected books and clothes for poor children last summer.', why: 'collected … for poor children.' },
        { q: 'My dad / find / gardening / amaze / because it / help / him control / stress.', clue: 'find + V-ing + adj', a: 'My dad finds gardening amazing because it helps him control stress.', why: 'finds gardening amazing · helps him control.' }
      ] },
    { t: T4, src: 'Revision 1 · IX', ic: '🔁', kind: 'build', q: 'Rewrite the sentences without changing the meaning, using the word in brackets.',
      hint: G('Đọc từ gợi ý trong ngoặc → nhớ <b>công thức đi kèm</b>:<br>• spend + time + V-ing = <b>It takes + O + time + to V</b><br>• think + V-ing + is + adj = <b>find + V-ing + adj</b><br>• fancy + V-ing = <b>be fond of + V-ing</b><br>• because I don\'t want to = <b>to avoid + V-ing</b><br>• Let\'s + V = <b>Why don\'t we + V?</b>',
        'Giữ nguyên thì của câu gốc.', 'Kiểm tra lại: nghĩa câu mới có giống câu gốc không?'),
      items: [
        { q: 'He spends hours researching and learning about the history of each piece in his stamp collection. (takes)', a: 'It takes him hours to research and learn about the history of each piece in his stamp collection.', why: 'It takes + him + hours + to V.' },
        { q: 'My brother thinks making models is incredibly interesting and challenging. (finds)', a: 'My brother finds making models incredibly interesting and challenging.', why: 'finds + V-ing + adj.' },
        { q: 'She fancies trying new recipes and experimenting with different flavors. (of)', a: 'She is fond of trying new recipes and experimenting with different flavors.', why: 'be fond of + V-ing.' },
        { q: 'I eat less junk food because I don\'t want to put on weight. (avoid)', a: 'I eat less junk food to avoid putting on weight.', why: 'to avoid + V-ing.' },
        { q: 'Let\'s join a program that helps the elderly! (Why)', a: 'Why don\'t we join a program that helps the elderly?', why: 'Why don\'t we + V?' }
      ] },
    { t: T4, src: 'Revision 2 · X', ic: '🔁', kind: 'build', q: 'Rewrite the sentences without changing the meaning, using the word in brackets.',
      hint: G('<b>Unless = If … not</b>: đổi If…not sang Unless thì bỏ "not" (và ngược lại thêm "don\'t").',
        'detest (rất ghét) → viết lại với enjoy phải dùng <b>phủ định</b>.',
        'It takes + O + time + to V ⇄ S + spend + time + V-ing.', 'think … is + adj → find + V-ing + adj.'),
      items: [
        { q: 'If everyone doesn\'t throw rubbish into the right bin, our classroom will be dirty and untidy. (Unless)', a: 'Unless everyone throws rubbish into the right bin, our classroom will be dirty and untidy.', why: 'Unless + everyone throws (số ít).' },
        { q: 'Unless we stop cutting down so many trees, we will endanger our oxygen supply. (If)', a: 'If we don\'t stop cutting down so many trees, we will endanger our oxygen supply.', why: 'If + don\'t.' },
        { q: 'My daughter detests making pottery. (enjoy)', a: 'My daughter doesn\'t enjoy making pottery.', why: 'doesn\'t enjoy + V-ing.' },
        { q: 'My mum thinks arranging flowers is difficult. (finds)', a: 'My mum finds arranging flowers difficult.', why: 'finds + V-ing + adj.' },
        { q: 'It takes us 30 minutes to do the gardening every day. (spend)', a: 'We spend 30 minutes doing the gardening every day.', why: 'spend + time + V-ing.' },
        { q: 'The farmer often spends fifteen minutes leading the buffalo to the field every day. (takes)', a: 'It often takes the farmer fifteen minutes to lead the buffalo to the field every day.', why: 'It often takes + O + time + to V (giữ "often").' }
      ] }
  ];
})();
