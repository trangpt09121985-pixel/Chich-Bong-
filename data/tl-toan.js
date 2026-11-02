/* TỰ LUẬN TOÁN 7 – lời giải chi tiết theo đề cương (Dạng 1–6) và đề mẫu */
(function () {
  const S = window.QZ.subjects.toan; if (!S) return;
  const D1 = 'Phép tính', D2 = 'Tìm x', D3 = 'Toán thực tế', D4 = 'So sánh, làm tròn', D5 = 'Hình học', D6 = 'Nâng cao', DM = 'Đề mẫu';
  const row = (lab, work, res) => `<li><b>${lab}</b> ${work}<div class="ans">${res}</div></li>`;
  S.essays = [
    { t: D1, src: 'Bài 1 (1–6)', ic: '🧮', q: 'Thực hiện phép tính (tính nhanh nếu có thể):', items: ['{{3|7}} + ({{−5|2}}) + (−{{3|5}})', '0,8 − (−{{2|7}}) − {{7|10}}', '{{−5|4}} + {{1|4}} : (−1,5)', '{{11|24}} − {{5|41}} + {{13|24}} + 0,5 − {{36|41}}', '{{5|14}} − 3,7 − {{19|14}} + {{8|9}} − 6,3', '({{−5|28}} + {{1|13}} + {{12|17}}) − ({{12|17}} − {{5|28}})'],
      hint: '<ol class="step-guide"><li><b>Quan sát trước khi tính:</b> có số thập phân không? Có hai phân số <b>cùng mẫu</b> hoặc hai số <b>đối nhau</b> không?</li><li>Có số thập phân (0,8; 1,5; 0,5; 3,7; 6,3) → đổi ra phân số hoặc nhóm các số thập phân với nhau.</li><li>Ý 4, 5, 6: nhóm các phân số cùng mẫu trước, sẽ ra số tròn (1; −1; 0…).</li><li>Ý 3: làm phép chia trước: chia cho một số = nhân với số nghịch đảo của nó.</li><li>Ý 6: bỏ ngoặc. Trước ngoặc có dấu "−" thì <b>đổi dấu</b> mọi số trong ngoặc.</li><li>Ý 1, 2 không có cặp đặc biệt → quy đồng mẫu rồi cộng, trừ tử số.</li></ol><p>❓ Tự hỏi: Mẫu chung nhỏ nhất của 7, 2 và 5 là bao nhiêu?</p>',
      a: `<div class="memo">🧠 Mẹo: nhìn trước xem có <b>cặp số cùng mẫu</b> hoặc <b>tổng tròn</b> không, nhóm chúng lại trước khi quy đồng.</div>
      <ol class="steps">
        ${row('1)', 'Quy đồng mẫu 70: {{30|70}} − {{175|70}} − {{42|70}}', '= {{−187|70}}')}
        ${row('2)', 'Đổi 0,8 = {{8|10}}: ({{8|10}} − {{7|10}}) + {{2|7}} = {{1|10}} + {{2|7}} = {{7|70}} + {{20|70}}', '= {{27|70}}')}
        ${row('3)', 'Nhân chia trước: {{1|4}} : (−{{3|2}}) = {{1|4}} · {{−2|3}} = {{−1|6}}. Rồi {{−5|4}} − {{1|6}} = {{−15|12}} − {{2|12}}', '= {{−17|12}}')}
        ${row('4)', 'Nhóm cùng mẫu: ({{11|24}} + {{13|24}}) − ({{5|41}} + {{36|41}}) + 0,5 = 1 − 1 + 0,5', '= 0,5')}
        ${row('5)', 'Nhóm: ({{5|14}} − {{19|14}}) − (3,7 + 6,3) + {{8|9}} = −1 − 10 + {{8|9}}', '= {{−91|9}}')}
        ${row('6)', 'Bỏ ngoặc (trước ngoặc có dấu − thì đổi dấu): {{−5|28}} + {{5|28}} + {{12|17}} − {{12|17}} + {{1|13}}', '= {{1|13}}')}
      </ol>` },
    { t: D1, src: 'Bài 1 (7–12)', ic: '🧮', q: 'Thực hiện phép tính (tính nhanh nếu có thể):', items: ['12,5 · (−{{5|7}}) + 1,5 · (−{{5|7}})', '{{−3|11}} · {{5|7}} + {{5|7}} · {{−8|11}} + 2{{5|7}}', '(−{{1|7}})<sup>0</sup> − 2{{4|9}} + (−{{2|3}})<sup>2</sup>', '(40% − 1{{2|3}}) : {{−3|2}} + ({{−1|2}})<sup>2</sup>', '(−{{5|7}})<sup>0</sup> − {{1|5}} : √{ {{9|25}} } + 20%', '({{−2|3}})<sup>2</sup> − |{{−13|15}}| + √{ {{25|9}} }'],
      hint: '<ol class="step-guide"><li>Nhớ thứ tự: <b>( ) → luỹ thừa, căn, | | → nhân, chia → cộng, trừ</b>.</li><li>Ý 7, 8: hai tích có <b>chung một thừa số</b> (−5/7 hoặc 5/7) → đặt thừa số chung ra ngoài: a·c + b·c = (a + b)·c.</li><li>Mọi số khác 0 mũ 0 đều bằng 1 (ý 9, 11).</li><li>Đổi hỗn số ra phân số: 2{{4|9}} = {{22|9}}; 1{{2|3}} = {{5|3}}. Đổi %: 40% = {{2|5}}, 20% = {{1|5}}.</li><li>Căn của phân số: √{ {{9|25}} } = {{3|5}} (lấy căn tử và căn mẫu). Giá trị tuyệt đối của số âm là số đối của nó.</li><li>Tính từng phần nhỏ, ghi kết quả bên dưới, cuối cùng mới cộng trừ.</li></ol>',
      a: `<div class="memo">🧠 Thứ tự: <b>luỹ thừa, căn → nhân, chia → cộng, trừ</b>. Mọi số khác 0 mũ 0 đều bằng 1.</div>
      <ol class="steps">
        ${row('7)', 'Đặt thừa số chung: (−{{5|7}}) · (12,5 + 1,5) = (−{{5|7}}) · 14', '= −10')}
        ${row('8)', '{{5|7}} · ({{−3|11}} + {{−8|11}}) + 2{{5|7}} = {{5|7}} · (−1) + {{19|7}} = {{−5|7}} + {{19|7}} = {{14|7}}', '= 2')}
        ${row('9)', '1 − {{22|9}} + {{4|9}} = 1 − {{18|9}} = 1 − 2', '= −1')}
        ${row('10)', '40% − 1{{2|3}} = {{2|5}} − {{5|3}} = {{−19|15}}; {{−19|15}} : {{−3|2}} = {{−19|15}} · {{−2|3}} = {{38|45}}; {{38|45}} + {{1|4}} = {{152|180}} + {{45|180}}', '= {{197|180}}')}
        ${row('11)', '1 − {{1|5}} : {{3|5}} + {{1|5}} = 1 − {{1|3}} + {{1|5}} = {{15|15}} − {{5|15}} + {{3|15}}', '= {{13|15}}')}
        ${row('12)', '{{4|9}} − {{13|15}} + {{5|3}} = {{20|45}} − {{39|45}} + {{75|45}}', '= {{56|45}}')}
      </ol>` },
    { t: D2, src: 'Bài 2 (1–6)', ic: '🔍', q: 'Tìm x, biết:', items: ['x − {{8|3}} = {{−5|9}}', '{{3|5}} + {{1|2}}x = {{−1|3}}', '{{3|4}} + {{1|4}} : x = 0,4', '0,65 − (1,3 − x) = 0', '{{1|3}}x − 2 = 2x + 1', '(x − {{1|2}})(5x − {{1|3}}) = 0'],
      hint: '<ol class="step-guide"><li>Hỏi: <b>x đang đóng vai trò gì</b>? Số bị trừ, số hạng, thừa số hay số chia?</li><li>Ý 1, 2: chuyển các số không chứa x sang vế phải (nhớ đổi dấu), sau đó tìm x.</li><li>Ý 3: coi cả cụm "{{1|4}} : x" là một số chưa biết → tìm cụm đó trước, rồi mới tìm x (x là số chia = số bị chia : thương).</li><li>Ý 4: coi "(1,3 − x)" là một khối, tìm khối đó trước.</li><li>Ý 5: x xuất hiện ở hai vế → đưa hết các hạng tử chứa x về một vế, số về vế kia.</li><li>Ý 6: tích bằng 0 khi <b>một trong hai thừa số</b> bằng 0 → xét 2 trường hợp.</li></ol>',
      a: `<div class="memo">🧠 Quy tắc chuyển vế: chuyển một số hạng sang vế kia thì <b>đổi dấu</b>. Tìm thừa số chưa biết: lấy tích chia thừa số đã biết.</div>
      <ol class="steps">
        ${row('1)', 'x = {{−5|9}} + {{8|3}} = {{−5|9}} + {{24|9}}', 'x = {{19|9}}')}
        ${row('2)', '{{1|2}}x = {{−1|3}} − {{3|5}} = {{−14|15}} ⇒ x = {{−14|15}} : {{1|2}}', 'x = {{−28|15}}')}
        ${row('3)', '{{1|4}} : x = {{2|5}} − {{3|4}} = {{−7|20}} ⇒ x = {{1|4}} : {{−7|20}} = {{1|4}} · {{−20|7}}', 'x = {{−5|7}}')}
        ${row('4)', '1,3 − x = 0,65 ⇒ x = 1,3 − 0,65', 'x = 0,65')}
        ${row('5)', 'Chuyển vế: {{1|3}}x − 2x = 1 + 2 ⇒ {{−5|3}}x = 3 ⇒ x = 3 : {{−5|3}}', 'x = {{−9|5}}')}
        ${row('6)', 'Tích bằng 0 ⇒ x − {{1|2}} = 0 hoặc 5x − {{1|3}} = 0', 'x = {{1|2}} hoặc x = {{1|15}}')}
      </ol>
      <p class="note">Ý 4): bản in đề cương mất dấu ngoặc ("0,65 − 1,3 − x = 0"); lời giải hiểu đề là 0,65 − (1,3 − x) = 0. Nếu đề đúng là 0,65 − 1,3 − x = 0 thì x = −0,65.</p>` },
    { t: D2, src: 'Bài 2 (7–12)', ic: '🔍', q: 'Tìm x, biết:', items: ['(2x − {{1|5}})<sup>2</sup> + {{16|25}} = 1', '(x − {{1|2}})<sup>3</sup> = {{−8|27}}', '{{1|2}}√{x} − {{1|2}} = {{5|8}}', '{{5|4}} − |x − {{1|2}}| = {{1|6}}', '(x<sup>2</sup> − 7)(9x<sup>2</sup> − 4) = 0', '2<sup>2x+1</sup> + 4<sup>x+3</sup> = 264'],
      hint: '<ol class="step-guide"><li>Đưa về dạng <b>A<sup>2</sup> = số</b>, <b>A<sup>3</sup> = số</b>, <b>√{x} = số</b> hoặc <b>|A| = số</b> rồi mới "gỡ" luỹ thừa, căn, trị tuyệt đối.</li><li>Bình phương bằng một số dương → có <b>2 trường hợp</b> (dương và âm). Lập phương chỉ có <b>1</b> giá trị.</li><li>|A| = k (k > 0) → A = k hoặc A = −k.</li><li>Ý 11: tích bằng 0 → mỗi thừa số bằng 0; x<sup>2</sup> = 7 thì x = ±√{7}.</li><li>Ý 12: viết 4 = 2<sup>2</sup> để đưa mọi số hạng về cùng cơ số 2, rồi đặt 2<sup>2x</sup> làm thừa số chung.</li></ol>',
      a: `<div class="memo">🧠 A<sup>2</sup> = k<sup>2</sup> ⇒ A = k hoặc A = −k (hai trường hợp). |A| = k (k ≥ 0) ⇒ A = k hoặc A = −k. √{x} = a (a ≥ 0) ⇒ x = a<sup>2</sup>.</div>
      <ol class="steps">
        ${row('7)', '(2x − {{1|5}})<sup>2</sup> = {{9|25}} = ({{3|5}})<sup>2</sup> ⇒ 2x − {{1|5}} = {{3|5}} hoặc 2x − {{1|5}} = {{−3|5}} ⇒ 2x = {{4|5}} hoặc 2x = {{−2|5}}', 'x = {{2|5}} hoặc x = {{−1|5}}')}
        ${row('8)', '{{−8|27}} = ({{−2|3}})<sup>3</sup> ⇒ x − {{1|2}} = {{−2|3}} ⇒ x = {{−2|3}} + {{1|2}}', 'x = {{−1|6}}')}
        ${row('9)', '{{1|2}}√{x} = {{5|8}} + {{1|2}} = {{9|8}} ⇒ √{x} = {{9|4}} ⇒ x = ({{9|4}})<sup>2</sup>', 'x = {{81|16}}')}
        ${row('10)', '|x − {{1|2}}| = {{5|4}} − {{1|6}} = {{13|12}} ⇒ x − {{1|2}} = {{13|12}} hoặc x − {{1|2}} = {{−13|12}}', 'x = {{19|12}} hoặc x = {{−7|12}}')}
        ${row('11)', 'x<sup>2</sup> − 7 = 0 ⇒ x<sup>2</sup> = 7 ⇒ x = ±√{7}; &nbsp; 9x<sup>2</sup> − 4 = 0 ⇒ x<sup>2</sup> = {{4|9}} ⇒ x = ±{{2|3}}', 'x ∈ {√{7}; −√{7}; {{2|3}}; {{−2|3}}}')}
        ${row('12)', '4<sup>x+3</sup> = 2<sup>2x+6</sup>. Đặt 2<sup>2x</sup> ra ngoài: 2<sup>2x</sup>(2 + 64) = 264 ⇒ 2<sup>2x</sup> = 4 = 2<sup>2</sup> ⇒ 2x = 2', 'x = 1')}
      </ol>
      <p class="note">Ý 11): bản in mất dấu ngoặc, đề đúng là (x<sup>2</sup> − 7)(9x<sup>2</sup> − 4) = 0.</p>` },
    { t: D3, src: 'Bài 3', ic: '🏦', q: 'Ông An gửi tiết kiệm 100 triệu đồng tại một ngân hàng, kì hạn một năm, lãi suất 5% một năm. Hết mỗi năm, tiền lãi được gộp vào gốc và gửi tiếp theo thể thức cũ.', items: ['Sau ba năm, số tiền cả gốc lẫn lãi của ông An là bao nhiêu?'],
      hint: '<ol class="step-guide"><li>Sau mỗi năm, số tiền = số tiền đầu năm + 5% của nó = số tiền đầu năm × 1,05.</li><li>Lập bảng: Năm 1 → Năm 2 → Năm 3, mỗi năm lấy kết quả năm trước nhân 1,05.</li><li>Cẩn thận: năm sau tính lãi trên số tiền <b>đã cộng lãi</b>, không phải trên 100 triệu ban đầu.</li></ol>',
      a: `<ol class="steps"><li>Mỗi năm, số tiền mới = số tiền cũ × (100% + 5%) = số tiền cũ × 1,05.</li><li>Sau năm 1: 100 000 000 × 1,05 = 105 000 000 (đồng).</li><li>Sau năm 2: 105 000 000 × 1,05 = 110 250 000 (đồng).</li><li>Sau năm 3: 110 250 000 × 1,05 = 115 762 500 (đồng).</li></ol><div class="ans">Sau 3 năm: 115 762 500 đồng</div><div class="memo">🧠 Viết gọn: 100 000 000 × 1,05<sup>3</sup>.</div>` },
    { t: D3, src: 'Bài 4', ic: '👗', q: 'Nhân ngày 10/10, một cửa hàng giảm giá 20% cho tất cả sản phẩm. Khách hàng thân thiết được giảm thêm 10% trên giá đã giảm.', items: ['Chị Lan là khách hàng thân thiết, mua chiếc váy niêm yết 800 000 đồng. Chị Lan phải trả bao nhiêu tiền?', 'Cô Minh cũng là khách hàng thân thiết, mua túi xách và trả 864 000 đồng. Giá ban đầu của túi xách là bao nhiêu?'],
      hint: '<ol class="step-guide"><li>Giảm 20% → còn lại 80% giá. Giảm thêm 10% → còn lại 90% của giá <b>đã giảm</b>.</li><li>Câu a: tính lần lượt 800 000 × 80%, rồi × 90%.</li><li>Câu b: đi ngược lại. Gọi giá gốc là x, ta có x × 80% × 90% = 864 000 → tìm x.</li><li>Bẫy: KHÔNG cộng 20% + 10% = 30%.</li></ol>',
      a: `<ol class="steps"><li><b>a)</b> Giá sau giảm 20%: 800 000 × 80% = 640 000 (đồng).<br>Giảm thêm 10%: 640 000 × 90% = 576 000 (đồng).<div class="ans">Chị Lan trả 576 000 đồng</div></li>
      <li><b>b)</b> Số tiền phải trả = giá gốc × 80% × 90% = giá gốc × 72%.<br>Giá gốc = 864 000 : 72% = 864 000 : 0,72 = 1 200 000 (đồng).<div class="ans">Giá ban đầu: 1 200 000 đồng</div></li></ol>
      <div class="memo">⚠️ Không được cộng 20% + 10% = 30%, vì lần giảm thứ hai tính trên giá <b>đã giảm</b>.</div>`,
      ef: ['flow', ['800 000 đ', '× 80%', '640 000 đ', '× 90%', '576 000 đ']] },
    { t: D3, src: 'Bài 5', ic: '🧁', q: 'Một ngày, cửa hàng Fresh Garden làm được 450 chiếc bánh su kem và đến 17 giờ đã bán hết 70% số bánh với giá 22 000 đồng/chiếc.', items: ['Đến 17 giờ, cửa hàng bán được bao nhiêu chiếc bánh và thu được bao nhiêu tiền?', 'Sau 17 giờ, cửa hàng giảm giá số bánh còn lại; đến 21 giờ bán hết và thu được tổng cộng 9 009 000 đồng. Hỏi cửa hàng đã giảm giá bao nhiêu phần trăm?'],
      hint: '<ol class="step-guide"><li>Câu a: tìm 70% của 450, rồi nhân với giá 22 000.</li><li>Câu b – đi từng bước: (1) số bánh còn lại; (2) số tiền thu được sau 17 giờ = tổng tiền − tiền câu a; (3) giá 1 chiếc sau giảm; (4) giá mới bằng bao nhiêu % giá cũ → giảm bao nhiêu %.</li></ol>',
      a: `<ol class="steps"><li><b>a)</b> Số bánh bán được: 450 × 70% = 315 (chiếc). Số tiền: 315 × 22 000 = 6 930 000 (đồng).<div class="ans">315 chiếc · 6 930 000 đồng</div></li>
      <li><b>b)</b> Số bánh còn lại: 450 − 315 = 135 (chiếc).<br>Tiền bán sau 17 giờ: 9 009 000 − 6 930 000 = 2 079 000 (đồng).<br>Giá mỗi chiếc sau giảm: 2 079 000 : 135 = 15 400 (đồng).<br>Giá mới bằng 15 400 : 22 000 = 70% giá cũ.<div class="ans">Cửa hàng đã giảm giá 30%</div></li></ol>` },
    { t: D4, src: 'Bài 6, 7', ic: '🎯', q: 'Làm tròn số và sắp xếp:', items: ['Bài 6. Làm tròn số 324,081999 với độ chính xác d = 0,5; d = 0,05; d = 0,0005; d = 5; d = 50.', 'Bài 7. Sắp xếp các số 7; √{121}; {{67|3}}; √{88}; 4,32; −2 theo thứ tự từ lớn đến bé.'],
      hint: '<ol class="step-guide"><li>Độ chính xác d cho biết làm tròn đến hàng nào: d = 0,5 → hàng đơn vị; 0,05 → phần mười; 0,0005 → phần nghìn; 5 → hàng chục; 50 → hàng trăm.</li><li>Nhìn chữ số <b>ngay sau</b> hàng làm tròn: ≥ 5 thì cộng 1, &lt; 5 thì giữ nguyên.</li><li>Bài 7: đổi các số ra số thập phân. Với √{88}: tìm hai số chính phương gần nhất (81 và 100) để ước lượng.</li></ol>',
      a: `<div class="memo">🧠 d = 0,5 → hàng đơn vị · 0,05 → hàng phần mười · 0,0005 → hàng phần nghìn · 5 → hàng chục · 50 → hàng trăm.</div>
      <ol class="steps"><li>d = 0,5 → <b>324</b></li><li>d = 0,05 → <b>324,1</b> (chữ số bỏ đi đầu tiên là 8 ≥ 5)</li><li>d = 0,0005 → <b>324,082</b></li><li>d = 5 → <b>320</b></li><li>d = 50 → <b>300</b></li></ol>
      <p><b>Bài 7.</b> {{67|3}} ≈ 22,33; √{121} = 11; √{88} ≈ 9,38 (vì 81 &lt; 88 &lt; 100 nên 9 &lt; √{88} &lt; 10).</p>
      <div class="ans">{{67|3}} &gt; √{121} &gt; √{88} &gt; 7 &gt; 4,32 &gt; −2</div>` },
    { t: D4, src: 'Bài 8', ic: '⚖️', q: 'So sánh hai số thực trong mỗi trường hợp sau:', items: ['0,135 và 0,(135)', '{{2|7}} và 0,(3)', '√{123} và 12', '−√{42} và 12', '13 và √{170}', '5√{6} và 6√{5} <i>(bản in ghi "6√5 và 6√5")</i>'],
      hint: '<ol class="step-guide"><li>Số thập phân vô hạn tuần hoàn: viết ra vài chữ số (0,(135) = 0,135135…) rồi so sánh từng chữ số.</li><li>Phân số: chia ra số thập phân.</li><li>So sánh số với căn: biến số thành căn, ví dụ 12 = √{144}, rồi so sánh hai số dưới dấu căn.</li><li>Số âm luôn nhỏ hơn số dương.</li><li>Ý 6: đưa thừa số vào trong căn: a√{b} = √{a<sup>2</sup>·b}.</li></ol>',
      a: `<div class="memo">🧠 Để so sánh số có căn, đưa cả hai về dạng √{…}: với a, b ≥ 0, a &lt; b ⇔ √{a} &lt; √{b}.</div>
      <ol class="steps"><li>0,(135) = 0,135135… ⇒ <b>0,135 &lt; 0,(135)</b></li>
      <li>{{2|7}} = 0,2857…; 0,(3) = 0,333… ⇒ <b>{{2|7}} &lt; 0,(3)</b></li>
      <li>12 = √{144} và 123 &lt; 144 ⇒ <b>√{123} &lt; 12</b></li>
      <li>−√{42} là số âm, 12 là số dương ⇒ <b>−√{42} &lt; 12</b></li>
      <li>13 = √{169} và 169 &lt; 170 ⇒ <b>13 &lt; √{170}</b></li>
      <li>5√{6} = √{25·6} = √{150}; 6√{5} = √{36·5} = √{180} ⇒ <b>5√{6} &lt; 6√{5}</b></li></ol>
      <p class="note">Ý 6): bản in ghi "6√5 và 6√5" (trùng nhau); lời giải hiểu đề là so sánh 5√6 và 6√5.</p>` },
    { t: D5, src: 'Bài 9', ic: '📐', q: 'Cho góc xOz và tia Oy nằm giữa hai tia Ox và Oz, tia Ot nằm giữa hai tia Oy và Oz sao cho xOy = 35°, yOt = 50°, tOz = 40°.', items: ['Kể tên các góc kề nhau.', 'Tính số đo góc xOz.'],
      hint: '<ol class="step-guide"><li>Vẽ hình theo thứ tự các tia: Ox → Oy → Ot → Oz.</li><li>Hai góc kề nhau: chung đỉnh, chung một cạnh, hai cạnh còn lại nằm về hai phía của cạnh chung.</li><li>Góc lớn xOz được ghép từ các góc nhỏ liền nhau → cộng lại.</li></ol>',
      f: ['rays', { rays: [{ n: 'x', d: 0 }, { n: 'y', d: 35 }, { n: 't', d: 85 }, { n: 'z', d: 125 }], arcs: [{ a: 'x', b: 'y', t: '35°', c: 'w1', r: 42, still: true }, { a: 'y', b: 't', t: '50°', c: 'w2', r: 42, still: true }, { a: 't', b: 'z', t: '40°', c: 'w3', r: 42, still: true }], cy: 170, H: 200, len: 130 }],
      a: `<ol class="steps"><li><b>a)</b> Hai góc kề nhau có chung đỉnh, chung một cạnh, hai cạnh còn lại nằm về hai phía của cạnh chung:<br>xOy và yOt; &nbsp;yOt và tOz; &nbsp;xOy và yOz; &nbsp;xOt và tOz.</li>
      <li><b>b)</b> Các tia theo thứ tự Ox, Oy, Ot, Oz nên xOz = xOy + yOt + tOz = 35° + 50° + 40°.<div class="ans">xOz = 125°</div></li></ol>` },
    { t: D5, src: 'Bài 10', ic: '📐', q: 'Vẽ góc xOz = 100°. Vẽ tia Oy ở trong góc xOz sao cho xOy = 30°. Vẽ tia Ot ở trong góc yOz sao cho yOt = 20°.', items: ['Tia Ot có phải là tia phân giác của góc yOz không? Vì sao?', 'Tia Ot có phải là tia phân giác của góc xOz không? Vì sao?'],
      hint: '<ol class="step-guide"><li>Tính các góc còn thiếu: yOz = xOz − xOy; tOz = yOz − yOt; xOt = xOy + yOt.</li><li>Tia phân giác phải thoả <b>cả 2 điều kiện</b>: nằm giữa hai cạnh của góc <b>và</b> chia góc thành hai góc bằng nhau.</li><li>So sánh hai góc nhỏ ở mỗi câu rồi kết luận.</li></ol>',
      a: `<ol class="steps"><li>yOz = xOz − xOy = 100° − 30° = 70°; tOz = yOz − yOt = 70° − 20° = 50°.</li>
      <li><b>a)</b> yOt = 20° ≠ tOz = 50° ⇒ <b>Ot không là</b> tia phân giác của góc yOz.</li>
      <li><b>b)</b> xOt = xOy + yOt = 30° + 20° = 50° = tOz, và Ot nằm giữa Ox, Oz ⇒ <b>Ot là</b> tia phân giác của góc xOz.</li></ol>
      <div class="memo">🧠 Tia phân giác phải thoả <b>2 điều kiện</b>: nằm giữa hai cạnh <b>và</b> tạo thành hai góc bằng nhau.</div>`,
      ef: ['rays', { rays: [{ n: 'x', d: 0 }, { n: 'y', d: 30 }, { n: 't', d: 50, cls: 'ln-c' }, { n: 'z', d: 100 }], arcs: [{ a: 'x', b: 't', t: '50°', c: 'w1', r: 40 }, { a: 't', b: 'z', t: '50°', c: 'w2', r: 54 }], cx: 120, cy: 180, len: 140 }], efAnim: true },
    { t: D5, src: 'Bài 11, 12', ic: '📐', q: 'Bài 11 và Bài 12:', items: ['Bài 11. Vẽ hai tia BA, BC đối nhau. Lấy điểm D nằm ngoài đường thẳng BC sao cho ABD = 80°. Gọi BE là tia phân giác của góc ABD. Tính số đo các góc ABE và EBC.', 'Bài 12. Cho xOy = 120°. Bên trong xOy vẽ tia Om và On sao cho xOm = 90°, yOn = 90°. a) So sánh xOn và yOm. b) Gọi Ot là phân giác của xOy. Chứng tỏ Ot là tia phân giác của mOn.'],
      hint: '<ol class="step-guide"><li>Bài 11: BE là phân giác → ABE bằng một nửa ABD. Hai tia đối nhau → ABE và EBC là hai góc kề bù (tổng 180°).</li><li>Bài 12a: xOn = xOy − yOn; yOm = xOy − xOm.</li><li>Bài 12b: tính xOt, rồi xếp thứ tự các tia tính từ Ox (On, Ot, Om) để tính tOn và tOm.</li></ol>',
      a: `<p><b>Bài 11.</b></p><ol class="steps"><li>ABE = ABD : 2 = 80° : 2 = 40°.</li><li>ABE và EBC kề bù (BA, BC đối nhau) ⇒ EBC = 180° − 40° = 140°.</li></ol><div class="ans">ABE = 40°; EBC = 140°</div>
      <p><b>Bài 12.</b></p><ol class="steps"><li><b>a)</b> xOn = xOy − yOn = 120° − 90° = 30°; yOm = xOy − xOm = 120° − 90° = 30° ⇒ <b>xOn = yOm</b>.</li>
      <li><b>b)</b> xOt = 120° : 2 = 60°. Thứ tự các tia tính từ Ox: On (30°), Ot (60°), Om (90°).<br>tOn = 60° − 30° = 30°; tOm = 90° − 60° = 30°. Ot nằm giữa On, Om và tOn = tOm ⇒ Ot là tia phân giác của mOn.</li></ol>`,
      ef: ['rays', { rays: [{ n: 'x', d: 0 }, { n: 'n', d: 30 }, { n: 't', d: 60, cls: 'ln-c' }, { n: 'm', d: 90 }, { n: 'y', d: 120 }], arcs: [{ a: 'n', b: 't', t: '30°', c: 'w1', r: 44 }, { a: 't', b: 'm', t: '30°', c: 'w2', r: 44 }], cx: 150, cy: 180, len: 140 }], efAnim: true },
    { t: D5, src: 'Bài 13', ic: '📐', q: 'Cho hình vẽ, biết Om, On lần lượt là tia phân giác của xOz và yOz.', items: ['Biết xOy = 140°, xOm = 30°. Tính số đo của mOz; yOz; nOy; nOz.'],
      hint: '<ol class="step-guide"><li>Om là phân giác của xOz → mOz = xOm và xOz = 2·xOm.</li><li>yOz = xOy − xOz.</li><li>On là phân giác của yOz → chia đôi yOz.</li></ol>',
      f: ['rays', { rays: [{ n: 'x', d: 0 }, { n: 'm', d: 30 }, { n: 'z', d: 60 }, { n: 'n', d: 100 }, { n: 'y', d: 140 }], arcs: [{ a: 'x', b: 'm', t: '30°', c: 'w1', still: true }], cy: 170, H: 200, len: 130 }],
      a: `<ol class="steps"><li>Om là phân giác xOz ⇒ mOz = xOm = 30°, xOz = 60°.</li><li>yOz = xOy − xOz = 140° − 60° = 80°.</li><li>On là phân giác yOz ⇒ nOy = nOz = 80° : 2 = 40°.</li></ol>
      <div class="ans">mOz = 30° · yOz = 80° · nOy = 40° · nOz = 40°</div>` },
    { t: D5, src: 'Bài 14', ic: '📐', q: 'Cho hình vẽ biết AB ⊥ AC; DAC = 140°; B = 50°; C = 40°. Chứng tỏ rằng:', items: ['AD // CF', 'AD // BE'],
      hint: '<ol class="step-guide"><li>Muốn chứng minh hai đường thẳng song song: tìm một cặp góc <b>so le trong bằng nhau</b>, <b>đồng vị bằng nhau</b> hoặc <b>trong cùng phía bù nhau</b>.</li><li>Câu a: xét cát tuyến AC – cặp góc DAC và ACF nằm ở vị trí nào?</li><li>Câu b: cần góc DAB. Các góc quanh điểm A cộng lại bằng 360°. Sau đó xét cát tuyến AB.</li></ol>',
      a: `<ol class="steps"><li><b>a)</b> Hai đường thẳng AD và CF bị cắt bởi AC. DAC và ACF là hai góc trong cùng phía, có DAC + ACF = 140° + 40° = 180° ⇒ <b>AD // CF</b>.</li>
      <li><b>b)</b> Tại A: DAB + BAC + CAD = 360° ⇒ DAB = 360° − 90° − 140° = 130°.<br>Hai đường thẳng AD và BE bị cắt bởi AB: DAB và ABE là hai góc trong cùng phía, có 130° + 50° = 180° ⇒ <b>AD // BE</b>.</li></ol>
      <div class="memo">🧠 Hai góc trong cùng phía <b>bù nhau</b> (tổng 180°) ⇒ hai đường thẳng song song.</div>` },
    { t: D5, src: 'Bài 15', ic: '📐', q: 'Cho hình vẽ (đề cương Bài 15):', items: ['Chứng minh AC // BD.', 'Tính A₁, A₂.', 'Tính B₁.'],
      hint: '<ol class="step-guide"><li>Câu a: xét cát tuyến CD, cặp góc 50° và 130° nằm ở vị trí nào? Tổng của chúng bằng bao nhiêu?</li><li>Câu b: tìm góc tại A tạo thành cặp so le trong với góc 75° tại B. Góc còn lại là đối đỉnh hay kề bù với nó?</li><li>Câu c: B₁ có quan hệ gì với góc 75° (đối đỉnh hay kề bù)? Nhìn kĩ vị trí số 1 trên hình.</li></ol>',
      a: `<ol class="steps"><li><b>a)</b> Với cát tuyến CD: góc 50° tại C và góc 130° tại D là hai góc trong cùng phía, 50° + 130° = 180° ⇒ <b>AC // BD</b>.</li>
      <li><b>b)</b> Theo hình, A₂ và góc 75° tại B là cặp góc so le trong, AC // BD ⇒ A₂ = 75°. A₁ đối đỉnh với A₂ ⇒ A₁ = 75°.</li>
      <li><b>c)</b> B₁ đối đỉnh với góc 75° tại B ⇒ B₁ = 75°.</li></ol>
      <p class="note">Ý b), c) dựa vào vị trí các số 1, 2 trên hình in trong đề cương. Nếu A₁ là góc kề bù với A₂ thì A₁ = 180° − 75° = 105°. Em hãy xem kĩ hình trên đề để chọn đúng.</p>` },
    { t: D5, src: 'Bài 16', ic: '📐', q: 'Cho hình vẽ, biết AC // BD, CAB = 90°, ACD = 120°.', items: ['Tính số đo CDB.', 'Tính B₁.', 'Vẽ tia phân giác Cx của ACD, tia Cx cắt BD tại I. Tính CID.'],
      hint: '<ol class="step-guide"><li>Câu a: AC // BD, cát tuyến CD → ACD và CDB là hai góc trong cùng phía (bù nhau).</li><li>Câu b: một đường thẳng vuông góc với một trong hai đường song song thì vuông góc với đường còn lại.</li><li>Câu c: Cx chia đôi ACD; sau đó tìm cặp so le trong với cát tuyến CI.</li></ol>',
      a: `<ol class="steps"><li><b>a)</b> AC // BD, ACD và CDB là hai góc trong cùng phía ⇒ CDB = 180° − 120° = 60°.<div class="ans">CDB = 60°</div></li>
      <li><b>b)</b> AB ⊥ AC (CAB = 90°) mà AC // BD ⇒ AB ⊥ BD ⇒ B₁ = 90°.<div class="ans">B₁ = 90°</div></li>
      <li><b>c)</b> Cx là phân giác ACD ⇒ ACI = 120° : 2 = 60°. AC // BD nên CID = ACI (so le trong).<div class="ans">CID = 60°</div></li></ol>` },
    { t: D5, src: 'Bài 17', ic: '📐', q: 'Cho hình vẽ, biết cNM = 125°; cPb = 55°; QMN = 90°.', items: ['Chứng tỏ a // b.', 'Chứng tỏ MQ ⊥ QP.', 'Kẻ PK ⊥ MN tại K. Tính KPN.'],
      hint: '<ol class="step-guide"><li>Câu a: tại N, tính góc kề bù với cNM. Góc này với cPb là cặp góc gì?</li><li>Câu b: MQ ⊥ a và a // b → suy ra điều gì với b?</li><li>Câu c: tam giác PKN vuông tại K → hai góc nhọn cộng lại bằng 90°. Tìm góc KNP trước.</li></ol>',
      a: `<ol class="steps"><li><b>a)</b> Tại N: góc giữa tia Nc và tia Na = 180° − 125° = 55° (kề bù với cNM). Góc này và cPb = 55° là hai góc đồng vị bằng nhau ⇒ <b>a // b</b>.</li>
      <li><b>b)</b> MQ ⊥ a (QMN = 90°) mà a // b ⇒ MQ ⊥ b ⇒ <b>MQ ⊥ QP</b>.</li>
      <li><b>c)</b> PK ⊥ a nên K nằm trên a. Tam giác PKN vuông tại K có KNP = 180° − 125° = 55° ⇒ KPN = 90° − 55° = 35°.<div class="ans">KPN = 35°</div></li></ol>` },
    { t: D6, src: 'Bài 18, 19', ic: '🧠', q: 'Nâng cao – Bài 18, 19:', items: ['Bài 18. Tìm x nguyên để biểu thức nguyên: a) {{x + 5|x − 1}}; b) {{4x − 3|2x + 1}}; c) {{3 − 2x|x + 2}}', 'Bài 19. So sánh A = {{3<sup>2024</sup> + 1|3<sup>2025</sup> + 1}} và B = {{3<sup>2025</sup> + 1|3<sup>2026</sup> + 1}}'],
      hint: '<ol class="step-guide"><li>Bài 18: viết tử số = (một bội của mẫu) + (số dư). Ví dụ x + 5 = (x − 1) + 6. Khi đó biểu thức nguyên ⇔ mẫu là ước của số dư.</li><li>Liệt kê đủ các ước <b>âm và dương</b>, rồi tìm x từ mỗi ước.</li><li>Bài 19: nhân A và B với 3 để tử số "gần bằng" mẫu số, viết thành 1 + (phân số nhỏ), rồi so sánh hai phân số nhỏ có cùng tử.</li></ol>',
      a: `<div class="memo">🧠 Cách làm: tách tử số thành <b>(bội của mẫu) + số dư</b>, rồi cho mẫu là ước của số dư.</div>
      <ol class="steps"><li><b>a)</b> {{x + 5|x − 1}} = 1 + {{6|x − 1}} ⇒ x − 1 ∈ Ư(6) = {±1; ±2; ±3; ±6}<div class="ans">x ∈ {2; 0; 3; −1; 4; −2; 7; −5}</div></li>
      <li><b>b)</b> {{4x − 3|2x + 1}} = 2 − {{5|2x + 1}} ⇒ 2x + 1 ∈ {±1; ±5}<div class="ans">x ∈ {0; −1; 2; −3}</div></li>
      <li><b>c)</b> {{3 − 2x|x + 2}} = −2 + {{7|x + 2}} ⇒ x + 2 ∈ {±1; ±7}<div class="ans">x ∈ {−1; −3; 5; −9}</div></li>
      <li><b>Bài 19.</b> 3A = 1 + {{2|3<sup>2025</sup> + 1}}; 3B = 1 + {{2|3<sup>2026</sup> + 1}}. Mẫu của 3A nhỏ hơn nên phân số lớn hơn ⇒ 3A &gt; 3B<div class="ans">A &gt; B</div></li></ol>` },
    { t: D6, src: 'Bài 20, 21', ic: '🧠', q: 'Nâng cao – Bài 20, 21:', items: ['Bài 20. Rút gọn: a) A = {{1|5}} + {{1|5<sup>2</sup>}} + … + {{1|5<sup>2025</sup>}}; b) B = {{1|3}} + {{2|3<sup>2</sup>}} + {{3|3<sup>3</sup>}} + … + {{100|3<sup>100</sup>}}', 'Bài 21. Tìm GTLN hoặc GTNN: a) A = 4,85 + √{ {{2|3}} − x }; b) B = −4,9 − √{x + 1,9}; c) C = −|x − {{3|7}}| + {{4|11}}; d) D = {{1|3 + {{1|3}}|x − 3|}}'],
      hint: '<ol class="step-guide"><li>Bài 20: nhân cả tổng với cơ số (5 hoặc 3), rồi lấy tổng mới trừ tổng cũ: các số hạng ở giữa sẽ triệt tiêu.</li><li>Bài 21: dùng √{…} ≥ 0 và |…| ≥ 0. Dấu "+" trước căn → có GTNN; dấu "−" trước căn hoặc trị tuyệt đối → có GTLN.</li><li>Câu d: mẫu số càng nhỏ thì phân số càng lớn → tìm giá trị nhỏ nhất của mẫu.</li></ol>',
      a: `<p><b>Bài 20.</b> Mẹo: nhân cả tổng với cơ số rồi trừ đi tổng ban đầu để các số hạng triệt tiêu.</p>
      <ol class="steps"><li><b>a)</b> 5A = 1 + {{1|5}} + … + {{1|5<sup>2024</sup>}} ⇒ 5A − A = 1 − {{1|5<sup>2025</sup>}} ⇒ 4A = 1 − {{1|5<sup>2025</sup>}}<div class="ans">A = {{5<sup>2025</sup> − 1|4 · 5<sup>2025</sup>}}</div></li>
      <li><b>b)</b> 3B − B = 1 + {{1|3}} + {{1|3<sup>2</sup>}} + … + {{1|3<sup>99</sup>}} − {{100|3<sup>100</sup>}}. Tổng 1 + {{1|3}} + … + {{1|3<sup>99</sup>}} = {{3|2}}(1 − {{1|3<sup>100</sup>}}) (làm như câu a).<br>⇒ 2B = {{3|2}} − {{203|2 · 3<sup>100</sup>}}<div class="ans">B = {{3|4}} − {{203|4 · 3<sup>100</sup>}}</div></li></ol>
      <p><b>Bài 21.</b> Dùng: √{…} ≥ 0 và |…| ≥ 0.</p>
      <ol class="steps"><li><b>a)</b> A ≥ 4,85. <b>GTNN A = 4,85</b> khi x = {{2|3}}.</li><li><b>b)</b> B ≤ −4,9. <b>GTLN B = −4,9</b> khi x = −1,9.</li><li><b>c)</b> C ≤ {{4|11}}. <b>GTLN C = {{4|11}}</b> khi x = {{3|7}}.</li><li><b>d)</b> Mẫu 3 + {{1|3}}|x − 3| ≥ 3 ⇒ D ≤ {{1|3}}. <b>GTLN D = {{1|3}}</b> khi x = 3.</li></ol>` },
    /* ---------- ĐỀ MẪU ---------- */
    { t: DM, src: 'Câu 1 (2,0 đ)', ic: '📝', q: 'Đề mẫu – Câu 1 (2,0 điểm). Thực hiện phép tính (tính nhanh nếu có thể):', items: ['{{2|7}} − {{4|5}} + {{5|7}}', '{{2|11}} · 19{{1|3}} − {{2|11}} · 30{{1|3}}', '2,56 − {{4|9}} − (7,56 − {{13|9}})', '(−2025)<sup>0</sup> + |{{−5|4}}| · √{64} − 0,5 : {{1|8}}'],
      hint: '<ol class="step-guide"><li>Ý a: hai phân số nào cùng mẫu? Nhóm lại trước.</li><li>Ý b: hai tích có chung thừa số {{2|11}} → đặt ra ngoài.</li><li>Ý c: bỏ ngoặc, nhóm số thập phân với số thập phân, phân số với phân số.</li><li>Ý d: tính từng phần: mũ 0, trị tuyệt đối, căn, phép chia.</li></ol>',
      a: `<ol class="steps">${row('a)', '({{2|7}} + {{5|7}}) − {{4|5}} = 1 − {{4|5}}', '= {{1|5}}')}${row('b)', '{{2|11}} · (19{{1|3}} − 30{{1|3}}) = {{2|11}} · (−11)', '= −2')}${row('c)', '(2,56 − 7,56) + ({{13|9}} − {{4|9}}) = −5 + 1', '= −4')}${row('d)', '1 + {{5|4}} · 8 − 0,5 · 8 = 1 + 10 − 4', '= 7')}</ol>` },
    { t: DM, src: 'Câu 2 (1,5 đ)', ic: '📝', q: 'Đề mẫu – Câu 2 (1,5 điểm). Tìm x biết:', items: ['x − {{1|2}} = −0,75', '{{7|12}} − (x + {{7|6}}) : {{6|5}} = 0', '(x<sup>2</sup> − 7)({{1|2}}x − 3) = 0'],
      hint: '<ol class="step-guide"><li>Ý a: chuyển vế.</li><li>Ý b: coi "(x + {{7|6}}) : {{6|5}}" là một khối → tìm khối đó, rồi tìm (x + {{7|6}}), cuối cùng tìm x.</li><li>Ý c: tích bằng 0 → xét từng thừa số bằng 0.</li></ol>',
      a: `<ol class="steps">${row('a)', 'x = −0,75 + 0,5', 'x = −0,25 = {{−1|4}}')}${row('b)', '(x + {{7|6}}) : {{6|5}} = {{7|12}} ⇒ x + {{7|6}} = {{7|12}} · {{6|5}} = {{7|10}} ⇒ x = {{7|10}} − {{7|6}} = {{21 − 35|30}}', 'x = {{−7|15}}')}${row('c)', 'x<sup>2</sup> − 7 = 0 ⇒ x = ±√{7}; &nbsp;{{1|2}}x − 3 = 0 ⇒ x = 6', 'x ∈ {√{7}; −√{7}; 6}')}</ol>` },
    { t: DM, src: 'Câu 3 (1,0 đ)', ic: '🧥', q: 'Đề mẫu – Câu 3 (1,0 điểm). Một cửa hàng giảm giá đồng loạt 20% cho tất cả áo thu đông. Giá niêm yết của một chiếc áo là 240 000 đồng.', items: ['Tính giá tiền một chiếc áo sau khi được giảm giá.', 'Bạn Hùng mua 2 chiếc áo và đưa thu ngân 500 000 đồng. Hỏi Hùng được trả lại bao nhiêu tiền?'],
      hint: '<ol class="step-guide"><li>Giảm 20% → phải trả 80% giá niêm yết.</li><li>Tiền trả lại = tiền đưa − tiền phải trả cho 2 chiếc.</li></ol>',
      a: `<ol class="steps"><li><b>a)</b> 240 000 × (100% − 20%) = 240 000 × 0,8 = 192 000 (đồng).<div class="ans">192 000 đồng/chiếc</div></li><li><b>b)</b> 2 chiếc: 192 000 × 2 = 384 000 (đồng). Tiền trả lại: 500 000 − 384 000 = 116 000 (đồng).<div class="ans">116 000 đồng</div></li></ol>` },
    { t: DM, src: 'Câu 4 (3,0 đ)', ic: '📐', q: 'Đề mẫu – Câu 4 (3,0 điểm). Cho hình vẽ, biết a ⊥ c, b ⊥ c, EAB = 45°.', items: ['Vẽ hình vào bài kiểm tra và chứng minh a // b.', 'Tính số đo của CAB và ABD.', 'Kẻ Am là tia phân giác của CAB, Bn là tia phân giác của ABD. Hai tia Am và Bn cắt nhau tại O. Tính số đo AOB.'],
      hint: '<ol class="step-guide"><li>Câu a: hai đường thẳng cùng vuông góc với đường thẳng thứ ba thì…?</li><li>Câu b: CAB và EAB là hai góc gì (kề bù)? ABD và EAB là cặp góc gì khi a // b?</li><li>Câu c: tính nửa mỗi góc, rồi dùng tổng ba góc của tam giác AOB bằng 180°.</li></ol>',
      f: ['parallel', { dir: '\\', perp: true, t: '', labels: [{}, {}], vals: { '0LR': '45°' }, texts: [[74, 56, 'C'], [74, 170, 'D'], [310, 56, 'E']] }],
      a: `<ol class="steps"><li><b>a)</b> a ⊥ c và b ⊥ c ⇒ <b>a // b</b> (hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì song song).</li>
      <li><b>b)</b> CAB và EAB kề bù ⇒ CAB = 180° − 45° = <b>135°</b>.<br>a // b, ABD và EAB so le trong ⇒ ABD = <b>45°</b>.</li>
      <li><b>c)</b> OAB = 135° : 2 = 67,5°; OBA = 45° : 2 = 22,5°. Tam giác AOB: AOB = 180° − 67,5° − 22,5° = <b>90°</b>.</li></ol>
      <div class="memo">🧠 Hai góc trong cùng phía bù nhau thì hai tia phân giác của chúng luôn vuông góc với nhau.</div>` },
    { t: DM, src: 'Câu 5 (0,5 đ)', ic: '🧠', q: 'Đề mẫu – Câu 5 (0,5 điểm).', items: ['Cho B = {{3|4}} + {{8|9}} + {{15|16}} + {{24|25}} + … + {{2499|2500}}. Chứng minh B không phải là số nguyên.'],
      hint: '<ol class="step-guide"><li>Nhận xét: {{3|4}} = 1 − {{1|4}}; {{8|9}} = 1 − {{1|9}};… Mỗi số hạng bằng 1 − {{1|k<sup>2</sup>}}.</li><li>Đếm số số hạng (k chạy từ 2 đến 50).</li><li>Chứng minh tổng {{1|2<sup>2</sup>}} + … + {{1|50<sup>2</sup>}} nằm giữa 0 và 1 bằng cách so sánh {{1|k<sup>2</sup>}} &lt; {{1|(k − 1)k}} = {{1|k − 1}} − {{1|k}}.</li><li>Nếu B nằm giữa hai số nguyên liên tiếp thì B không thể là số nguyên.</li></ol>',
      a: `<ol class="steps"><li>Mỗi số hạng có dạng {{k<sup>2</sup> − 1|k<sup>2</sup>}} = 1 − {{1|k<sup>2</sup>}} với k = 2; 3; …; 50 (có 49 số hạng).</li>
      <li>B = 49 − ({{1|2<sup>2</sup>}} + {{1|3<sup>2</sup>}} + … + {{1|50<sup>2</sup>}}). Đặt M là tổng trong ngoặc, M &gt; 0.</li>
      <li>Vì {{1|k<sup>2</sup>}} &lt; {{1|(k − 1)k}} = {{1|k − 1}} − {{1|k}} nên M &lt; (1 − {{1|2}}) + ({{1|2}} − {{1|3}}) + … + ({{1|49}} − {{1|50}}) = 1 − {{1|50}} &lt; 1.</li>
      <li>Vậy 0 &lt; M &lt; 1 ⇒ 48 &lt; B &lt; 49.</li></ol><div class="ans">B nằm giữa hai số nguyên liên tiếp 48 và 49 nên B không phải số nguyên.</div>` }
  ];
  /* Kiểu đánh số các ý: số bắt đầu, 'a' (a, b, c) hoặc 'none' */
  const ST = { 1: 7, 3: 7, 4: 'none', 5: 'a', 6: 'a', 7: 'none', 9: 'a', 10: 'a', 11: 'none', 12: 'none', 13: 'a', 14: 'a', 15: 'a', 16: 'a', 17: 'none', 18: 'none', 19: 'a', 20: 'a', 21: 'a', 22: 'a', 23: 'none' };
  Object.entries(ST).forEach(([i, v]) => { S.essays[i].ist = v; });
})();
