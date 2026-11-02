/* NGỮ VĂN – Văn bản đọc hiểu: hướng dẫn đọc + các chi tiết cần tô màu.
   Toàn văn KHÔNG được chép sẵn ở đây (tác phẩm còn bản quyền). Thầy cô có thể dán toàn văn
   từ tập đề cương vào trường body: `...` bên dưới (mỗi đoạn/khổ một dòng) nếu đã được phép sử dụng;
   khi để trống, học sinh dán văn bản ngay trên trang và văn bản chỉ lưu trên máy của em. */
(function () {
  const S = window.QZ.subjects.van; if (!S) return;
  S.texts = [
    {
      id: 'vexemxiec', title: 'Vé xem xiếc', author: 'Tống Phù Sa', ic: '🎪',
      source: 'Theo Tống Phù Sa, Truyện ngắn hay 2015, NXB Văn học (đề cương – Bài luyện tập số 1)',
      legend: [['me', 'Tình thương, sự hi sinh của mẹ'], ['con', 'Cậu bé (Bi)'], ['xh', 'Hoàn cảnh, thái độ người xung quanh'], ['tv', 'Từ ngữ cần hiểu'], ['nt', 'Chi tiết nghệ thuật, ý nghĩa']],
      body: ``,
      guide: `<p><b>Bố cục 3 phần</b> (đọc theo từng phần, mỗi phần tự hỏi 1 câu):</p>
        <ol class="step-guide">
          <li><b>Phần 1 – Lược trích (đầu → "dẫn con đi xem xiếc"):</b> hoàn cảnh hai mẹ con. ❓ <i>Vì sao mẹ chỉ đứng ngoài cổng trường?</i></li>
          <li><b>Phần 2 – Trên đường đến rạp và ở cổng soát vé:</b> niềm háo hức của con, nỗi tủi nhục và lựa chọn đau đớn của mẹ. ❓ <i>Vì sao mẹ quyết định đưa con về?</i></li>
          <li><b>Phần 3 – Trên đường về (từ "Mẹ xin lỗi con" → hết):</b> phản ứng của cậu bé và hình ảnh kết truyện. ❓ <i>Câu nói "non nghề" của con thật lòng hay để an ủi mẹ?</i></li>
        </ol>
        <p><b>Khi đọc, hãy chú ý:</b> ngôi kể (người kể gọi nhân vật là gì?), lời người kể và lời nhân vật (lời thoại bắt đầu bằng dấu gạch ngang), các từ ngữ tả cảm xúc của mẹ, và các hành động trước – sau của cậu bé.</p>`,
      marks: [
        { k: 'mẹ đơn thân', c: 'xh', n: 'Hoàn cảnh: một mình nuôi con.' },
        { k: 'bánh mì rong', c: 'xh', n: 'Nghề vất vả, thu nhập thấp → cuộc sống eo hẹp.' },
        { k: 'chị sợ các bạn', c: 'me', n: 'Mẹ đứng ngoài cổng vì sợ con bị bạn chê cười → thương con một cách tế nhị.' },
        { k: 'lếch thếch', c: 'tv', n: 'Từ láy: quần áo, dáng vẻ luộm thuộm.' },
        { k: 'phá lệ', c: 'me', n: 'Ngày đặc biệt, mẹ vượt qua nỗi ngại để đón con.' },
        { k: 'nhảy chân sáo', c: 'con', n: 'Cụm động từ tả niềm vui hồn nhiên của cậu bé (Câu 4).' },
        { k: 'líu lo', c: 'con', n: 'Từ láy: con vui, nói không ngớt.' },
        { k: 'nắm chặt tay con', c: 'con', n: 'Cậu bé ngây thơ, sợ lạc mẹ.' },
        { k: 'rưng rưng', c: 'me', n: 'Mẹ xúc động trước niềm vui của con.' },
        { k: 'lè lưỡi liếm môi', c: 'con', n: 'Con thèm quà nhưng không đòi → hiểu chuyện.' },
        { k: 'vờ như không biết', c: 'me', n: 'Mẹ không có tiền mua quà, đành giả vờ, lặng lẽ khóc.' },
        { k: 'thẳng thớm', c: 'con', n: 'Con nâng niu tấm vé như báu vật.' },
        { k: 'Bà khốt', c: 'xh', n: 'Tiếng lóng chế giễu (xem chú thích) → thái độ coi thường của anh soát vé.' },
        { k: 'đẩy chị ra', c: 'xh', n: 'Hành động thô bạo, vô cảm.' },
        { k: 'lạnh toát', c: 'me', n: 'Cú sốc, nỗi lo lắng tột độ của mẹ.' },
        { k: 'đếm lại số tiền', c: 'me', n: 'Mẹ phải cân nhắc: tiền vé hay cái ăn ngày mai.' },
        { k: 'ngày mai, ngày kia', c: 'me', n: 'Lo toan cho cuộc sống những ngày sau → lựa chọn đau lòng.' },
        { k: 'trong veo', c: 'con', n: 'Đôi mắt ngây thơ, háo hức → làm nỗi đau của mẹ càng lớn.' },
        { k: 'mình về thôi con', c: 'me', n: 'Câu nói phải "lấy hết can đảm" mới thốt ra được.' },
        { k: 'buông thõng', c: 'con', n: 'Thất vọng hiện rõ qua dáng vẻ.' },
        { k: 'Mẹ xin lỗi con', c: 'me', n: 'Lời xin lỗi đầy yêu thương, day dứt.' },
        { k: 'thoáng chốc', c: 'con', n: 'Con nén buồn rất nhanh để mẹ yên lòng (Câu 3).' },
        { k: 'méo xệch', c: 'con', n: 'Giọng nói run vì buồn nhưng con cố giấu.' },
        { k: 'non nghề', c: 'tv', n: 'Chưa thạo nghề – lời nói dối thương mẹ (trái với "có nghề" lúc đầu).' },
        { k: 'ánh đèn', c: 'nt', n: 'Hơi ấm, niềm hi vọng từ tình thương của hai mẹ con.' },
        { k: 'chìm dần trong bóng tối', c: 'nt', n: 'Buổi xiếc ồn ào lùi lại phía sau, đối lập với ánh đèn phía trước.' }
      ]
    },
    {
      id: 'emnghivetraidat', title: 'Em nghĩ về Trái Đất', author: 'Nguyễn Lãm Thắng', ic: '🌍',
      source: 'In trong tập "Giấc mơ buổi sáng" – 1977 (đề cương – Bài luyện tập số 2)',
      legend: [['nt', 'Biện pháp tu từ, hình ảnh nghệ thuật'], ['tm', 'Thông điệp, tình cảm'], ['tv', 'Từ ngữ gợi tả thiên nhiên']],
      body: ``,
      guide: `<p><b>Thể thơ:</b> năm chữ · 6 khổ, mỗi khổ 4 dòng. Đọc chậm, ngắt nhịp 3/2 hoặc 2/3.</p>
        <ol class="step-guide">
          <li><b>Khổ 1 – 2:</b> vẻ đẹp xanh tươi của Trái Đất; Trái Đất được nhân hoá như người mẹ. ❓ <i>Những từ nào cho thấy Trái Đất làm việc giống con người?</i></li>
          <li><b>Khổ 3:</b> tình người – khác màu da nhưng chung nụ cười. ❓ <i>Tác giả so sánh tình người với hình ảnh nào?</i></li>
          <li><b>Khổ 4:</b> thiên nhiên bình yên. ❓ <i>Kể tên các hình ảnh thiên nhiên (Câu 2).</i></li>
          <li><b>Khổ 5 – 6:</b> khát vọng hoà bình, năm châu hội ngộ. ❓ <i>"Bồ câu trắng" tượng trưng cho điều gì (Câu 3)?</i></li>
        </ol>
        <p><b>Mẹo:</b> dòng thơ mở đầu khổ 1 được lặp lại ở khổ 5 → điệp ngữ, nối hai phần của bài thơ.</p>`,
      marks: [
        { k: 'vươn vai', c: 'nt', n: 'Điệp ngữ (lặp ở khổ 1 và khổ 5); tư thế lớn lên, sẵn sàng hành động.' },
        { k: 'biêng biếc', c: 'tv', n: 'Từ láy gợi màu xanh trong, đẹp của bầu trời.' },
        { k: 'Tiếng chim', c: 'tv', n: 'Âm thanh vui tươi của thiên nhiên.' },
        { k: 'Quàng khăn', c: 'nt', n: 'Nhân hoá: Trái Đất như người mẹ quàng khăn biển cả (Câu 4).' },
        { k: 'Khoác áo', c: 'nt', n: 'Nhân hoá: rừng xanh là chiếc áo thơm của Trái Đất.' },
        { k: 'mang trên lưng', c: 'nt', n: 'Nhân hoá: Trái Đất che chở, nâng đỡ con người.' },
        { k: 'con của đất', c: 'tm', n: 'Con người là con của Trái Đất → phải yêu thương, bảo vệ "mẹ".' },
        { k: 'màu da', c: 'tm', n: 'Khác biệt bề ngoài giữa các dân tộc.' },
        { k: 'nụ cười', c: 'tm', n: 'Điểm chung: tình yêu thương, niềm vui → bình đẳng, đoàn kết.' },
        { k: 'không vơi', c: 'nt', n: 'So sánh tình người với biển cả không vơi: rộng lớn, bền lâu.' },
        { k: 'ban mai', c: 'tv', n: 'Hình ảnh thiên nhiên khổ 4: buổi sáng sớm.' },
        { k: 'thảo nguyên', c: 'tv', n: 'Hình ảnh thiên nhiên khổ 4: đồng cỏ rộng lớn.' },
        { k: 'bình yên', c: 'tm', n: 'Mong ước giữ gìn cuộc sống yên ổn.' },
        { k: 'hòa bình', c: 'tm', n: 'Khát vọng chính của bài thơ.' },
        { k: 'chiến tranh', c: 'tm', n: 'Điều tác giả mong không bao giờ xảy ra.' },
        { k: 'năm châu', c: 'nt', n: 'Hoán dụ: chỉ mọi người trên thế giới.' },
        { k: 'tình thương', c: 'tm', n: 'Sợi dây gắn kết loài người.' },
        { k: 'bồ câu trắng', c: 'nt', n: 'Biểu tượng của hoà bình (Câu 3).' }
      ]
    }
  ];

  /* Gợi mở cho các câu tự luận (theo thứ tự trong tl-van.js) */
  const H = (hoi, tim, khung) => `<p>🔎 <b>Đề hỏi gì?</b> ${hoi}</p><p>📍 <b>Tìm ở đâu?</b> ${tim}</p><p>🧱 <b>Khung trả lời:</b> ${khung}</p>`;
  window.QZ.essayHints = window.QZ.essayHints || {};
  window.QZ.essayHints.van = [
    H('Câu có 2 ý: (1) gọi tên ngôi kể; (2) nêu tác dụng.', 'Xem người kể gọi nhân vật là gì: "tôi" hay "chị", "thằng bé"? Mở tab 📖 Văn bản để xem các chỗ tô màu.', 'Văn bản kể theo ngôi thứ … · Dấu hiệu: … · Tác dụng: (1) khách quan… (2) thấy được cả hành động và tâm trạng nhân vật…'),
    H('Liệt kê các <b>chi tiết</b> (hành động, cử chỉ, lời nói, suy nghĩ) của người mẹ thể hiện tình thương và sự hi sinh.', 'Các chỗ tô <span class="hl hl-me">màu hồng</span> trong tab 📖 Văn bản: trước khi đi xem xiếc, ở cổng soát vé, trên đường về.', 'Gạch đầu dòng 4–5 chi tiết, mỗi chi tiết 1 dòng → câu kết: "Qua đó, người mẹ là người…"'),
    H('Chi tiết đó cho thấy <b>tính cách, tình cảm</b> gì của cậu bé?', 'So sánh cậu bé <b>trước</b> khi đến cổng (háo hức, khen đoàn xiếc "có nghề") với <b>sau</b> khi phải về (nói "non nghề"). Chú ý từ "thoáng chốc", "méo xệch".', 'Hoàn cảnh → hành động của cậu bé → ý nghĩa thật của lời nói → nhận xét: cậu bé hiểu chuyện, thương mẹ…'),
    H('3 yêu cầu: (1) thành phần nào được mở rộng; (2) loại cụm từ gì; (3) tác dụng.', 'Tìm chủ ngữ ("Thằng bé"), phần còn lại là vị ngữ. Vị ngữ có động từ chính kèm từ ngữ phụ → cụm động từ.', 'Thành phần mở rộng: … · Cụm từ: cụm … (động từ trung tâm …) · Tác dụng: miêu tả cụ thể…, thể hiện…'),
    H('Nêu các <b>bài học, thông điệp</b> tác giả muốn gửi.', 'Nghĩ về 3 nhân vật: người mẹ (hi sinh), cậu bé (thấu hiểu), anh soát vé (vô cảm). Mỗi nhân vật gợi một thông điệp.', 'Thông điệp 1: … · Thông điệp 2: … · Thông điệp 3: … (mỗi ý 1–2 câu).'),
    H('Viết <b>đoạn văn nghị luận</b> 10–15 câu về ý nghĩa của sự chia sẻ, đồng cảm.', 'Lấy dẫn chứng từ chính câu chuyện (cậu bé an ủi mẹ; anh soát vé vô cảm) và từ đời sống (quyên góp, giúp bạn).', 'Mở đoạn (nêu vấn đề) → Giải thích → Ý nghĩa (2–3 lí lẽ) → Dẫn chứng → Phản đề → Bài học.'),
    H('Tóm tắt khoảng 150 chữ.', 'Đọc lại 3 phần của truyện; mỗi phần chọn 1–2 sự việc chính.', 'Viết 6–8 câu theo đúng trình tự, dùng lời của em, KHÔNG thêm nhận xét.'),
    H('2 ý: (1) gọi tên thể thơ; (2) chỉ ra đặc điểm qua bài.', 'Đếm số tiếng mỗi dòng, số dòng mỗi khổ; đọc to để nghe nhịp; tìm tiếng cuối dòng có vần giống nhau.', 'Thể thơ … · Số tiếng · Khổ thơ · Nhịp · Vần.'),
    H('2 ý: (1) liệt kê hình ảnh thiên nhiên ở khổ 4; (2) suy nghĩ của em.', 'Khổ 4 (khổ đầu tiên ở cột bên phải trong đề cương). Xem các chỗ tô <span class="hl hl-tv">màu xanh lá</span>.', 'Các hình ảnh: … → Gợi cho em: Trái Đất tươi đẹp… → cần giữ gìn…'),
    H('Hình ảnh "bồ câu trắng" là biểu tượng của điều gì?', 'Dòng thơ cuối bài; liên hệ khổ 5 nói về mong ước không có chiến tranh.', 'Bồ câu trắng tượng trưng cho … → Câu thơ thể hiện mong ước …'),
    H('Chỉ ra <b>một</b> biện pháp tu từ và phân tích tác dụng.', 'Khổ 2: Trái Đất "quàng khăn", "khoác áo", "mang trên lưng" – đây là hoạt động của ai?', 'Biện pháp: … · Từ ngữ: … · Tác dụng nghệ thuật: sinh động, gợi hình… · Tác dụng nội dung: Trái Đất như… · Tình cảm tác giả: …'),
    H('Chọn <b>một</b> thông điệp em ấn tượng nhất và giải thích vì sao (5–7 câu).', 'Các thông điệp chính: yêu thương, bảo vệ Trái Đất · bình đẳng, đoàn kết · khát vọng hoà bình.', 'Câu 1: nêu thông điệp → Câu 2–3: dẫn câu thơ, giải thích → Câu 4–5: liên hệ thực tế → Câu 6: hành động của em.'),
    H('Viết <b>đoạn văn khoảng 200 chữ</b> ghi lại cảm xúc sau khi đọc bài thơ.', 'Chọn 2–3 hình ảnh em thích nhất (xem các chỗ tô màu trong tab 📖 Văn bản).', 'Mở đoạn: tác giả, tác phẩm, cảm xúc chung → Thân đoạn: cảm nhận từng hình ảnh/biện pháp + vì sao em xúc động → Kết đoạn: khẳng định cảm xúc, liên hệ bản thân. Dùng ngôi "em", từ bộc lộ cảm xúc.')
  ];
})();
