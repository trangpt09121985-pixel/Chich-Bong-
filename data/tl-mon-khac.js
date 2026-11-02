/* TỰ LUẬN: LỊCH SỬ & ĐỊA LÍ, GDCD, CÔNG NGHỆ, TIN HỌC */
(function () {
  const QZ = window.QZ, FIG = window.FIG;

  /* ================= LỊCH SỬ & ĐỊA LÍ ================= */
  if (QZ.subjects.lsdl) QZ.subjects.lsdl.essays = [
    { t: 'Lịch sử', src: 'Câu 1', ic: '🏙️', q: 'Phân tích vai trò của thành thị trung đại.',
      a: `<div class="memo">🧠 Nhớ theo 3 mặt: <b>Kinh tế – Chính trị – Văn hoá</b>.</div>
      <ol class="steps"><li><b>Kinh tế:</b> thúc đẩy thủ công nghiệp và thương nghiệp phát triển; hàng hoá được trao đổi rộng rãi; phá vỡ nền kinh tế tự cung tự cấp của lãnh địa.</li>
      <li><b>Chính trị – xã hội:</b> góp phần xoá bỏ chế độ phong kiến phân quyền, xây dựng chế độ phong kiến tập quyền, thống nhất quốc gia; hình thành tầng lớp thị dân (thợ thủ công, thương nhân).</li>
      <li><b>Văn hoá:</b> mang lại không khí tự do; là nơi ra đời các trường đại học (như Bô-lô-nha, Pa-ri, Ốc-xphớt), mở mang tri thức.</li></ol>
      <div class="ans">Thành thị là "bông hoa rực rỡ" của thời trung đại, thúc đẩy xã hội Tây Âu phát triển.</div>` },
    { t: 'Lịch sử', src: 'Câu 2', ic: '🐉', q: 'Trình bày những thành tựu văn hoá tiêu biểu của Trung Quốc từ thế kỉ III TCN đến giữa thế kỉ XIX.',
      a: FIG.table({ head: ['Lĩnh vực', 'Thành tựu tiêu biểu'], rows: [
        ['Tư tưởng', 'Nho giáo giữ vai trò hệ tư tưởng chính thống của nhà nước phong kiến'],
        ['Sử học', 'Sử kí (Tư Mã Thiên); các bộ sử lớn như Hán thư, Minh sử'],
        ['Văn học', 'Thơ Đường (Lý Bạch, Đỗ Phủ, Bạch Cư Dị); tiểu thuyết Minh – Thanh: Tam quốc diễn nghĩa, Thuỷ hử, Tây du kí, Hồng lâu mộng'],
        ['Kiến trúc, điêu khắc', 'Vạn Lý Trường Thành, Tử Cấm Thành (Bắc Kinh), tượng Phật, chùa tháp'],
        ['Khoa học – kĩ thuật', 'Bốn phát minh lớn: giấy, kĩ thuật in, la bàn, thuốc súng; thành tựu về y học, thiên văn, toán học']] }) +
        `<div class="memo">🧠 Mẹo nhớ "4 phát minh": <b>Giấy – In – La bàn – Thuốc súng</b> (G-I-L-T).</div>` },
    { t: 'Lịch sử', src: 'Câu 3', ic: '🌍', q: 'Dựa vào Hình 1 (Lược đồ một số cuộc phát kiến địa lí lớn), em hãy mô tả hành trình các cuộc đại phát kiến địa lí của C. Cô-lôm-bô và Ph. Ma-gien-lăng.',
      f: ['voyages', {}],
      a: `<p><b>C. Cô-lôm-bô (1492)</b></p><ol class="steps"><li>Tháng 8/1492, đoàn thuyền được Tây Ban Nha tài trợ rời cảng, đi về phía tây.</li><li>Vượt Đại Tây Dương, tháng 10/1492 đến các đảo vùng biển Ca-ri-bê (Ba-ha-ma, Cu-ba…). Ông tưởng đó là Ấn Độ, thật ra là châu Mĩ.</li></ol>
      <p><b>Ph. Ma-gien-lăng (1519 – 1522)</b></p><ol class="steps"><li>Năm 1519, rời Tây Ban Nha, vượt Đại Tây Dương, men theo bờ biển Nam Mĩ.</li><li>Đi qua eo biển ở cực nam châu Mĩ (sau mang tên Ma-gien-lăng), tiến vào một đại dương mênh mông, ông đặt tên là Thái Bình Dương.</li><li>Đến Phi-líp-pin (1521), Ma-gien-lăng tử trận.</li><li>Đoàn còn lại vượt Ấn Độ Dương, vòng qua cực nam châu Phi, về Tây Ban Nha năm 1522.</li></ol>
      <div class="ans">Đây là chuyến đi vòng quanh thế giới đầu tiên bằng đường biển, chứng minh Trái Đất hình cầu.</div>` },
    { t: 'Địa lí', src: 'Câu 1', ic: '💶', q: 'Chứng minh rằng Liên minh châu Âu (EU) là một trong bốn trung tâm kinh tế lớn trên thế giới.',
      a: `<div class="memo">🧠 Bốn trung tâm kinh tế lớn: Hoa Kỳ, EU, Trung Quốc, Nhật Bản.</div>
      <ol class="steps"><li><b>Quy mô kinh tế:</b> GDP của EU thuộc nhóm lớn nhất thế giới (số liệu cụ thể xem SGK Lịch sử và Địa lí 7, Bài 4).</li>
      <li><b>Thương mại:</b> EU là một trong những trung tâm thương mại hàng đầu thế giới; thị trường chung cho phép hàng hoá, dịch vụ, con người và tiền vốn tự do lưu thông giữa các nước thành viên.</li>
      <li><b>Đồng tiền chung ơ-rô (EUR)</b> có vị thế quan trọng trong thanh toán và dự trữ quốc tế.</li>
      <li><b>Công nghiệp, dịch vụ hiện đại:</b> nhiều tập đoàn hàng đầu thế giới về hàng không, ô tô, hoá chất, ngân hàng, du lịch.</li></ol>` },
    { t: 'Địa lí', src: 'Câu 2', ic: '💧', q: 'Em hãy đề xuất một số giải pháp nhằm giảm thiểu ô nhiễm và bảo vệ môi trường nước ở châu Âu.',
      a: `<ol class="steps"><li>Xử lí nước thải công nghiệp và sinh hoạt trước khi thải ra sông, hồ, biển.</li><li>Giảm sử dụng phân bón, thuốc trừ sâu hoá học; khuyến khích nông nghiệp hữu cơ.</li><li>Kiểm soát tàu thuyền, phòng chống và xử lí sự cố tràn dầu trên biển.</li><li>Ban hành và thực hiện nghiêm luật bảo vệ môi trường nước; xử phạt vi phạm.</li><li>Hợp tác giữa các nước có chung dòng sông (Rai-nơ, Đa-nuýp…) để cùng giám sát chất lượng nước.</li><li>Tuyên truyền nâng cao ý thức người dân: tiết kiệm nước, không xả rác xuống nguồn nước.</li></ol>` }
  ];

  /* ================= GDCD ================= */
  if (QZ.subjects.gdcd) QZ.subjects.gdcd.essays = [
    { t: 'Câu hỏi ôn tập', src: 'Câu 1', ic: '🏮', q: 'Hãy nêu một số truyền thống của quê hương. Là học sinh, em cần làm gì để gìn giữ, phát huy truyền thống quê hương?',
      a: `<p><b>Một số truyền thống quê hương:</b></p><ul><li>Yêu nước, đoàn kết, cần cù lao động, hiếu học, tôn sư trọng đạo.</li><li>Nghề truyền thống: gốm Bát Tràng, lụa Vạn Phúc, cốm Vòng…</li><li>Văn hoá, lễ hội: hội Gióng, ca trù, quan họ…</li></ul>
      <p><b>Việc học sinh cần làm:</b></p><ol class="steps"><li>Tìm hiểu, tự hào về truyền thống quê hương.</li><li>Tích cực học tập, rèn luyện để xứng đáng với truyền thống hiếu học.</li><li>Tham gia các hoạt động văn hoá, lễ hội, giữ gìn di tích ở địa phương.</li><li>Giới thiệu, quảng bá nét đẹp quê hương với bạn bè.</li><li>Phê phán việc làm xúc phạm, làm tổn hại truyền thống quê hương.</li></ol>` },
    { t: 'Câu hỏi ôn tập', src: 'Câu 2', ic: '🤗', q: 'Hãy nêu những biểu hiện của quan tâm, cảm thông và chia sẻ trong cuộc sống thường ngày. Quan tâm, cảm thông và chia sẻ có ý nghĩa như thế nào đối với mỗi người?',
      a: `<p><b>Biểu hiện:</b></p><ul><li>Hỏi han, động viên, an ủi khi người khác gặp chuyện buồn.</li><li>Lắng nghe, thấu hiểu hoàn cảnh của người khác.</li><li>Giúp đỡ bạn học yếu, người già, người khuyết tật.</li><li>Tham gia quyên góp, hoạt động thiện nguyện.</li></ul>
      <p><b>Ý nghĩa:</b></p><ol class="steps"><li>Giúp người được quan tâm có thêm động lực vượt qua khó khăn.</li><li>Gắn kết mọi người, xây dựng các mối quan hệ tốt đẹp.</li><li>Người biết quan tâm, chia sẻ được mọi người yêu quý, tôn trọng.</li><li>Góp phần xây dựng xã hội nhân ái.</li></ol>
      <div class="memo">📜 "Lá lành đùm lá rách" · "Thương người như thể thương thân".</div>` },
    { t: 'Câu hỏi ôn tập', src: 'Câu 3', ic: '📚', q: 'Trình bày biểu hiện, ý nghĩa của học tập tự giác, tích cực. Liệt kê 5 việc làm cụ thể của em để giúp bản thân học tập tự giác, tích cực.',
      a: `<p><b>Biểu hiện:</b> xác định đúng mục đích học tập; tự lập kế hoạch và thực hiện; chủ động học, không cần nhắc nhở; kiên trì vượt khó; hăng hái phát biểu, tìm tòi mở rộng kiến thức.</p>
      <p><b>Ý nghĩa:</b> giúp kết quả học tập tiến bộ; rèn tính kỉ luật, tự lập; được thầy cô, bạn bè quý mến; là nền tảng để thành công sau này.</p>
      <p><b>5 việc làm cụ thể:</b></p><ol class="steps"><li>Lập thời gian biểu học tập hằng ngày và thực hiện đúng.</li><li>Chuẩn bị bài trước khi đến lớp, làm đủ bài tập về nhà.</li><li>Chủ động hỏi thầy cô, bạn bè khi chưa hiểu bài.</li><li>Tích cực phát biểu, thảo luận nhóm trong giờ học.</li><li>Tự đọc thêm sách, tìm hiểu kiến thức mở rộng; hạn chế dùng điện thoại để chơi game.</li></ol>` },
    { t: 'Tình huống', src: 'Luyện tập', ic: '🎭', q: 'Tình huống: Lớp em quyên góp ủng hộ đồng bào vùng lũ. Bạn P nói: "Nhà mình cũng không giàu, việc đó để người lớn lo." Em có đồng tình với P không? Em sẽ nói gì với P?',
      a: `<ol class="steps"><li><b>Nêu quan điểm:</b> Em không đồng tình với ý kiến của P.</li><li><b>Giải thích:</b> chia sẻ không cần nhiều tiền; mỗi người góp một phần nhỏ (quần áo, sách vở, lời động viên) cũng giúp đồng bào bớt khó khăn. Quan tâm, chia sẻ là trách nhiệm của mọi người, kể cả học sinh.</li><li><b>Cách nói với P:</b> "Mình có thể góp sách vở, quần áo cũ còn tốt hoặc tiết kiệm tiền ăn sáng một hôm. Ít thôi nhưng có ý nghĩa lắm!"</li></ol>
      <div class="memo">✍️ Khung giải quyết tình huống: <b>Đồng tình / không đồng tình → Vì sao → Em sẽ làm/nói gì</b>.</div>` }
  ];

  /* ================= CÔNG NGHỆ ================= */
  if (QZ.subjects.cn) QZ.subjects.cn.essays = [
    { t: 'Tự luận', src: 'Câu 1', ic: '🪨', q: 'Đất trồng có những thành phần nào? Trình bày vai trò của các thành phần đối với cây trồng.',
      a: FIG.table({ head: ['Thành phần', 'Gồm', 'Vai trò với cây trồng'], rows: [['Phần rắn', 'Hạt khoáng, chất hữu cơ', 'Cung cấp chất dinh dưỡng; giúp cây đứng vững'], ['Phần lỏng', 'Nước trong đất', 'Cung cấp nước; hoà tan chất dinh dưỡng để cây hút'], ['Phần khí', 'Oxygen, nitrogen, carbon dioxide…', 'Cung cấp oxygen cho rễ hô hấp']] }) + '<div class="memo">🧠 Mẹo nhớ: <b>Rắn – nuôi & đỡ · Lỏng – nước · Khí – thở</b>.</div>' },
    { t: 'Tự luận', src: 'Câu 2', ic: '🐛', q: 'Nêu ưu, nhược điểm của biện pháp thủ công và biện pháp hoá học trong phòng trừ sâu, bệnh hại.',
      a: FIG.table({ head: ['Biện pháp', 'Ưu điểm', 'Nhược điểm'], rows: [['Thủ công (bắt sâu, ngắt lá bệnh, bẫy đèn…)', 'Đơn giản, dễ làm; an toàn cho người và môi trường; rẻ', 'Tốn công; hiệu quả thấp khi sâu bệnh phát triển mạnh, diện rộng'], ['Hoá học (phun thuốc bảo vệ thực vật)', 'Diệt sâu bệnh nhanh, hiệu quả cao, trên diện rộng; ít tốn công', 'Gây ô nhiễm môi trường; độc hại cho người, vật nuôi; diệt cả sinh vật có ích; có thể để lại dư lượng trong nông sản']] }) + '<div class="memo">⚠️ Chỉ dùng thuốc hoá học khi cần thiết, đúng thuốc, đúng liều, đúng lúc, đúng cách.</div>' },
    { t: 'Tự luận', src: 'Câu 3', ic: '✂️', q: 'Trình bày kĩ thuật nhân giống cây trồng bằng giâm cành. Cho ví dụ.',
      a: `<ol class="steps"><li><b>Chọn cành giâm:</b> cành bánh tẻ (không quá non, không quá già), khoẻ, không sâu bệnh.</li><li><b>Cắt cành giâm:</b> cắt đoạn cành có vài mắt (đốt), cắt vát gốc; tỉa bớt lá để giảm thoát hơi nước.</li><li><b>Xử lí cành giâm:</b> nhúng phần gốc vào dung dịch thuốc kích thích ra rễ.</li><li><b>Cắm cành giâm:</b> cắm vào giá thể (đất, cát ẩm) đã chuẩn bị.</li><li><b>Chăm sóc:</b> tưới phun sương giữ ẩm, che nắng; khi cành ra rễ thì đem trồng.</li></ol>
      <div class="ans">Ví dụ: rau muống, sắn (khoai mì), mía, hoa hồng, cây dâu tằm.</div>`,
      ef: ['flow', ['Chọn cành', 'Cắt cành', 'Xử lí', 'Cắm cành', 'Chăm sóc']] },
    { t: 'Tự luận', src: 'Câu 4', ic: '🏠', q: 'Trình bày ưu điểm, nhược điểm của hình thức trồng trọt trong nhà có mái che.',
      a: FIG.table({ head: ['Ưu điểm', 'Nhược điểm'], rows: [['Chủ động điều chỉnh nhiệt độ, ánh sáng, độ ẩm; trồng được rau trái vụ', 'Chi phí đầu tư xây dựng, thiết bị cao'], ['Hạn chế sâu bệnh, ít dùng thuốc → nông sản an toàn', 'Đòi hỏi kĩ thuật, người lao động có trình độ'], ['Năng suất, chất lượng cao, ổn định', 'Diện tích trồng thường hạn chế']] }) },
    { t: 'Tự luận', src: 'Câu 5', ic: '🧺', q: 'Nêu các dụng cụ được sử dụng để thu hoạch sản phẩm trồng trọt mà em biết vào mẫu bảng (Dụng cụ thu hoạch – Sử dụng cho loại cây trồng).',
      a: FIG.table({ head: ['Dụng cụ thu hoạch', 'Sử dụng cho loại cây trồng'], rows: [['Liềm, máy gặt đập liên hợp', 'Lúa'], ['Kéo cắt cành', 'Cam, bưởi, nhãn, hoa'], ['Cuốc, thuổng, mai', 'Khoai lang, sắn, lạc (đào)'], ['Dao', 'Rau cải, bắp cải, chuối'], ['Sào có lưỡi móc, giỏ', 'Xoài, mít trên cao']] }) }
  ];

  /* ================= TIN HỌC ================= */
  const n = (v) => Number(v).toLocaleString('en-US', { maximumFractionDigits: 3 });
  const n3 = (v) => v.toFixed(3);
  const items = [['Đồ gia dụng', 'Nồi', 259000, 5], ['', 'Chảo', 232500, 3], ['', 'Bát', 25000, 20], ['', 'Đũa', 15300, 30], ['', 'Thìa', 8700, 20], ['Rau, củ, quả', 'Cà rốt', 27000, 10], ['', 'Bí đỏ', 45600, 7], ['', 'Bí đao', 43200, 9], ['', 'Khoai tây', 33000, 15], ['', 'Ngô', 50000, 20], ['', 'Rau tiến vua', 79900, 8], ['Bánh, kẹo', 'Bánh quy', 123000, 5], ['', 'Kẹo trái cây', 89900, 8], ['', 'Kẹo socola', 156000, 3], ['', 'Bánh bông lan', 143200, 6]];
  let sF = 0, sG = 0, sH = 0, sD = 0;
  const r1 = items.map((it, i) => { const F = it[2] * it[3], G = F * 0.125, H = F - G; sF += F; sG += G; sH += H; sD += it[2]; return [i + 1, it[0], it[1], n(it[2]), it[3], n(F), n(G), n(H)]; });
  r1.unshift(['STT', 'LOẠI SP', 'TÊN SP', 'ĐƠN GIÁ', 'SL', 'THÀNH TIỀN', 'GIẢM GIÁ', 'THỰC TRẢ']);
  r1.push(['', '<b>Tổng cộng</b>', '', n(sD), '', '<b>' + n(sF) + '</b>', '<b>' + n(sG) + '</b>', '<b>' + n(sH) + '</b>']);
  const sts = [['Nguyễn Bảo Long', '7A', 8.5, 8.5, 9], ['Trần Phúc Minh', '7A', 9, 9.5, 10], ['Lê Anh Nam', '7B', 8.25, 9, 9.5], ['Hoàng Anh', '7D', 9.75, 8.75, 8.75], ['Phạm Thanh Giang', '7C', 9, 8.25, 8.75], ['Phùng Hải Bình', '7C', 8, 8.75, 9.25], ['Chu Thanh Thuý', '7D', 8.75, 9, 9.25], ['Trần Kiều Tâm', '7B', 9.25, 9, 8.75], ['Nguyễn Kiều Mây', '7C', 9, 8, 9], ['Trần Đức Cảnh', '7A', 8.5, 8.25, 9.25]];
  const tbs = sts.map(s => (s[2] + s[3] + s[4]) / 3);
  const r2 = sts.map((s, i) => [i + 1, s[0], s[1], s[2].toFixed(2), s[3].toFixed(2), s[4].toFixed(2), n3(s[2] + s[3] + s[4]), n3(tbs[i])]);
  r2.unshift(['TT', 'Họ và tên', 'Lớp', 'Toán', 'Văn', 'Anh', 'Tổng', 'TB']);
  const emp = [['Đỗ Bảo', 'Nam', 'NV', 220000, 26, 300000, 4013000], ['Nguyễn Thị', 'Trang', 'NV', 230000, 25, 300000, 4033000], ['Đỗ Đức', 'Trí', 'GĐ', 310000, 28, 1000000, 5000000], ['Đinh Thanh', 'Hải', 'TGĐ', 330000, 28, 2000000, 5000000], ['Nguyễn Thị', 'Tuyến', 'TP', 250000, 24, 800000, 5000000], ['Đặng Xuân', 'Cảnh', 'KT', 230000, 25, 600000, 4233000], ['Nguyễn Anh', 'Tuấn', 'BV', 150000, 30, 300000, 4200000]];
  const cols3 = [[], [], [], [], []]; // E G H I J
  const r3 = emp.map((e, i) => { const L = e[3] * e[4], J = L + e[5] - e[6]; [e[3], e[5], L, e[6], J].forEach((v, k) => cols3[k].push(v)); return [i + 1, e[0], e[1], e[2], n(e[3]), e[4], n(e[5]), n(L), n(e[6]), n(J)]; });
  r3.unshift(['STT', 'HỌ', 'TÊN', 'CV', 'LƯƠNG CB', 'NC', 'PHỤ CẤP', 'LƯƠNG', 'TẠM ỨNG', 'CÒN LẠI']);
  const n2 = (v) => Number(v).toLocaleString('en-US', { maximumFractionDigits: 2 });
  const agg = (f, lab) => ['', '', '', lab, n2(f(cols3[0])), '', n2(f(cols3[1])), n2(f(cols3[2])), n2(f(cols3[3])), n2(f(cols3[4]))];
  const sum = a => a.reduce((x, y) => x + y, 0), avg = a => sum(a) / a.length;
  r3.push(agg(sum, '<b>Tổng cộng</b>'), agg(avg, '<b>Trung bình</b>'), agg(a => Math.max(...a), '<b>Lớn nhất</b>'), agg(a => Math.min(...a), '<b>Thấp nhất</b>'));

  if (QZ.subjects.tin) QZ.subjects.tin.essays = [
    { t: 'Thực hành Excel', src: 'Câu 1 · Hoá đơn mua hàng', ic: '🧾', q: 'Tạo bảng "HOÁ ĐƠN MUA HÀNG" theo mẫu. Yêu cầu: font Times New Roman cỡ 14 (tiêu đề cỡ 18); Thành tiền = Đơn giá × Số lượng; siêu thị giảm giá 12,5%, tính cột Giảm giá; tính Thực trả; dùng hàm SUM tính hàng Tổng cộng; thêm dấu ngăn cách hàng nghìn ở các cột D, F, G, H.',
      a: `<ol class="steps"><li><b>Nhập dữ liệu, định dạng:</b> bôi đen cả bảng → chọn font Times New Roman, cỡ 14. Bôi đen A1:H1 → Merge &amp; Center, cỡ 18, in đậm.</li>
      <li><b>Thành tiền</b> – nhập vào F3: <code>=D3*E3</code> → kéo nút điền xuống F17.</li>
      <li><b>Giảm giá</b> – nhập vào G3: <code>=F3*12.5%</code> → kéo xuống G17.</li>
      <li><b>Thực trả</b> – nhập vào H3: <code>=F3-G3</code> → kéo xuống H17.</li>
      <li><b>Tổng cộng</b> – D18: <code>=SUM(D3:D17)</code>; F18: <code>=SUM(F3:F17)</code>; G18: <code>=SUM(G3:G17)</code>; H18: <code>=SUM(H3:H17)</code>.</li>
      <li><b>Dấu ngăn cách:</b> bôi đen cột D, F, G, H → Home → Comma Style (hoặc Format Cells → Number → Use 1000 Separator).</li></ol>
      <h4>Bảng kết quả</h4>${FIG.sheet({ cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], start: 2, rows: r1, hl: { F18: 'w3', G18: 'w3', H18: 'w3' } })}` },
    { t: 'Thực hành Excel', src: 'Câu 2 · Bảng điểm khảo sát', ic: '📊', q: 'Tạo "BẢNG ĐIỂM KHẢO SÁT KHỐI 7". Yêu cầu: tính cột Tổng, Trung bình; dùng hàm MAX tìm Điểm TB cao nhất, MIN tìm Điểm TB thấp nhất; cột Tổng và Trung bình lấy 3 chữ số thập phân.',
      a: `<ol class="steps"><li><b>Tổng</b> – G3: <code>=SUM(D3:F3)</code> (hoặc <code>=D3+E3+F3</code>) → kéo xuống G12.</li>
      <li><b>Trung bình</b> – H3: <code>=AVERAGE(D3:F3)</code> (hoặc <code>=G3/3</code>) → kéo xuống H12.</li>
      <li><b>Điểm TB cao nhất:</b> <code>=MAX(H3:H12)</code> → kết quả <b>9.500</b> (Trần Phúc Minh).</li>
      <li><b>Điểm TB thấp nhất:</b> <code>=MIN(H3:H12)</code> → kết quả <b>8.667</b>.</li>
      <li><b>3 chữ số thập phân:</b> bôi đen G3:H12 → Format Cells → Number → Decimal places: 3.</li></ol>
      <h4>Bảng kết quả</h4>${FIG.sheet({ cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], start: 2, rows: r2, hl: { H4: 'w3' } })}
      <p class="note">Điểm số được đọc từ ảnh đề cương; nếu thầy cô cho bảng khác, các bước làm vẫn giữ nguyên.</p>` },
    { t: 'Thực hành Excel', src: 'Câu 3 · Bảng lương nhân viên', ic: '💼', q: 'Tạo "BẢNG LƯƠNG NHÂN VIÊN". Yêu cầu: Lương = Lương cơ bản × Ngày công; tính cột Còn lại (số tiền được nhận sau khi đã tạm ứng); dùng SUM, AVERAGE, MAX, MIN để tính các hàng Tổng cộng, Trung bình, Lớn nhất, Thấp nhất; thêm dấu ngăn cách hàng nghìn ở cột E, G, H, I, J.',
      a: `<ol class="steps"><li><b>Lương</b> – H3: <code>=E3*F3</code> → kéo xuống H9.</li>
      <li><b>Còn lại</b> – J3: <code>=H3+G3-I3</code> (Lương + Phụ cấp − Tạm ứng) → kéo xuống J9.</li>
      <li><b>Tổng cộng</b> (hàng 10): <code>=SUM(E3:E9)</code>, rồi kéo sang các cột G, H, I, J.</li>
      <li><b>Trung bình</b> (hàng 11): <code>=AVERAGE(E3:E9)</code>; <b>Lớn nhất</b> (hàng 12): <code>=MAX(E3:E9)</code>; <b>Thấp nhất</b> (hàng 13): <code>=MIN(E3:E9)</code>, kéo sang các cột tương tự.</li>
      <li><b>Dấu ngăn cách:</b> bôi đen cột E, G, H, I, J → Comma Style.</li></ol>
      <h4>Bảng kết quả</h4>${FIG.sheet({ cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], start: 2, rows: r3 })}
      <p class="note">Đề không ghi rõ cột Còn lại có cộng phụ cấp hay không. Nếu thầy cô quy ước Còn lại = Lương − Tạm ứng thì dùng <code>=H3-I3</code>.</p>` }
  ];
})();
