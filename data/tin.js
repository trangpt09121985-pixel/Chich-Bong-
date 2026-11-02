/* MÔN TIN HỌC 7 – Bài 6: Làm quen với phần mềm bảng tính · Bài 7: Tính toán tự động · Bài 8: Công cụ hỗ trợ tính toán
   Câu hỏi xây dựng từ 3 bài thực hành Excel trong đề cương (Hoá đơn mua hàng, Bảng điểm khảo sát, Bảng lương). */
window.QZ = window.QZ || { subjects: {} };
(function () {
  const B6 = 'Làm quen bảng tính', B7 = 'Công thức', B8 = 'Hàm SUM, AVERAGE, MAX, MIN';
  const C1 = 'Câu 1 · Hoá đơn', C2 = 'Câu 2 · Bảng điểm', C3 = 'Câu 3 · Bảng lương', KT = 'Kiến thức chung';
  const HD = { cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], start: 2, rows: [
    ['STT', 'LOẠI SẢN PHẨM', 'TÊN SẢN PHẨM', 'ĐƠN GIÁ', 'SỐ LƯỢNG', 'THÀNH TIỀN', 'GIẢM GIÁ', 'THỰC TRẢ'],
    ['1', 'Đồ gia dụng', 'Nồi', '259000', '5', '', '', ''],
    ['2', '', 'Chảo', '232500', '3', '', '', ''],
    ['3', '', 'Bát', '25000', '20', '', '', ''],
    ['…', '…', '…', '…', '…', '', '', ''],
    ['15', 'Bánh, kẹo', 'Bánh bông lan', '143200', '6', '', '', ''],
    ['', 'Tổng cộng', '', '', '', '', '', '']] };
  const hd = (patch) => { const o = JSON.parse(JSON.stringify(HD)); Object.assign(o, patch); return o; };
  const BD = { cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], start: 2, rows: [
    ['TT', 'Họ và tên', 'Lớp', 'Toán', 'Ngữ Văn', 'Tiếng Anh', 'Tổng', 'Trung bình'],
    ['1', 'Nguyễn Bảo Long', '7A', '8.50', '8.50', '9.00', '', ''],
    ['2', 'Trần Phúc Minh', '7A', '9.00', '9.50', '10.00', '', ''],
    ['…', '…', '…', '…', '…', '…', '', ''],
    ['10', 'Trần Đức Cảnh', '7A', '8.50', '8.25', '9.25', '', '']] };
  const bd = (patch) => { const o = JSON.parse(JSON.stringify(BD)); Object.assign(o, patch); return o; };
  const BL = { cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], start: 2, rows: [
    ['STT', 'HỌ', 'TÊN', 'CHỨC VỤ', 'LƯƠNG CB', 'NGÀY CÔNG', 'PHỤ CẤP', 'LƯƠNG', 'TẠM ỨNG', 'CÒN LẠI'],
    ['1', 'Đỗ Bảo', 'Nam', 'NV', '220000', '26', '300000', '', '4013000', ''],
    ['2', 'Nguyễn Thị', 'Trang', 'NV', '230000', '25', '300000', '', '4033000', ''],
    ['…', '…', '…', '…', '…', '…', '…', '', '…', ''],
    ['7', 'Nguyễn Anh', 'Tuấn', 'BV', '150000', '30', '300000', '', '4200000', '']] };
  const bl = (patch) => { const o = JSON.parse(JSON.stringify(BL)); Object.assign(o, patch); return o; };
  const fill = (o, ref, v) => { const col = o.cols.indexOf(ref[0]), row = +ref.slice(1) - o.start; o.rows[row][col] = v; return o; };

  QZ.subjects.tin = {
    name: 'Tin học 7', short: 'Tin học',
    tagline: 'Bảng tính Excel: địa chỉ ô, công thức, hàm SUM, AVERAGE, MAX, MIN',
    topics: [B6, B7, B8],
    scope: [
      { h: 'Phạm vi kiến thức', items: ['Bài 6. Làm quen với phần mềm bảng tính.', 'Bài 7. Tính toán tự động trên bảng tính.', 'Bài 8. Công cụ hỗ trợ tính toán.'] },
      { h: 'Kiến thức cần nhớ', items: [
        'Ô = giao của cột (chữ cái) và hàng (số): ô D3 nằm ở cột D, hàng 3. Khối ô: D3:F3.',
        'Công thức luôn bắt đầu bằng dấu <b>=</b>; phép toán + − * / ^ và %.',
        'Dùng <b>địa chỉ ô</b> trong công thức để kết quả tự cập nhật khi dữ liệu thay đổi.',
        'Sao chép công thức bằng kéo thả nút điền (fill handle): địa chỉ ô tự thay đổi theo hàng.',
        '=SUM(…) tổng · =AVERAGE(…) trung bình cộng · =MAX(…) lớn nhất · =MIN(…) nhỏ nhất · =COUNT(…) đếm ô chứa số.'] },
      { h: 'Định dạng', items: ['Font chữ, cỡ chữ: thẻ Home → nhóm Font.', 'Gộp ô tiêu đề: Merge &amp; Center.', 'Dấu ngăn cách hàng nghìn: Comma Style hoặc Format Cells → Number → Use 1000 Separator (,).', 'Số chữ số thập phân: Increase / Decrease Decimal, hoặc Format Cells → Number → Decimal places.'] },
      { h: 'Bài thực hành trong đề cương', items: ['Câu 1: Hoá đơn mua hàng – Thành tiền, Giảm giá 12,5%, Thực trả, Tổng cộng.', 'Câu 2: Bảng điểm khảo sát khối 7 – Tổng, Trung bình (3 chữ số thập phân), MAX, MIN.', 'Câu 3: Bảng lương nhân viên – Lương, Còn lại, Tổng cộng, Trung bình, Lớn nhất, Thấp nhất.'],
        tip: 'Hãy tự mở Excel làm lại cả 3 bài; các câu trắc nghiệm ở đây giúp kiểm tra công thức trước khi làm trên máy.' }
    ],
    questions: [
      { t: B6, src: KT, ic: '🔲', q: 'Trong bảng tính, ô <b>E3</b> là ô nằm ở',
        o: ['Cột E, hàng 3', 'Hàng E, cột 3', 'Cột 3, hàng E', 'Trang tính E3'], a: 0,
        e: '<p>Địa chỉ ô = <b>tên cột</b> (chữ cái) + <b>tên hàng</b> (số). E3: cột E, hàng 3.</p>', ef: ['sheet', hd({ hl: { E3: 'w1' } })] },
      { t: B6, src: KT, ic: '🔲', q: 'Khối ô <b>D3:F3</b> gồm bao nhiêu ô?',
        o: ['2 ô', '3 ô', '4 ô', '6 ô'], a: 1,
        e: '<p>D3:F3 là các ô liền nhau từ D3 đến F3 trên hàng 3: D3, E3, F3 → <b>3 ô</b>.</p>', ef: ['sheet', bd({ hl: { D3: 'w1', E3: 'w1', F3: 'w1' } })] },
      { t: B7, src: KT, ic: '🟰', q: 'Khi nhập công thức vào ô tính, ta phải gõ kí tự nào đầu tiên?',
        o: ['Dấu =', 'Dấu +', 'Dấu :', 'Dấu $'], a: 0,
        e: '<p>Công thức luôn bắt đầu bằng dấu <b>=</b>. Nếu gõ D3*E3 mà không có "=", Excel hiểu đó là chữ và không tính.</p>' },
      { t: B7, src: C1, ic: '🧾', q: 'Câu 1 (Hoá đơn mua hàng): Thành tiền = Đơn giá × Số lượng. Công thức đúng tại ô <b>F3</b> là',
        f: ['sheet', hd({ hl: { F3: 'w1' } })],
        o: ['=D3*E3', '=D3xE3', 'D3*E3', '=SUM(D3:E3)'], a: 0,
        e: '<ul><li>Phép nhân trong Excel dùng dấu <b>*</b>, không dùng chữ x.</li><li>Phải có dấu = ở đầu.</li><li>SUM(D3:E3) là <i>cộng</i> D3 + E3, sai yêu cầu.</li></ul><p>Kết quả: 259 000 × 5 = <b>1 295 000</b>. Kéo nút điền xuống F17 để tính cho các mặt hàng còn lại.</p>',
        ef: ['sheet', fill(hd({ hl: { F3: 'w3' }, formula: '=D3*E3', cell: 'F3' }), 'F3', '1295000')] },
      { t: B7, src: C1, ic: '🏷️', q: 'Siêu thị giảm giá 12,5%. Công thức tính <b>Giảm giá</b> tại ô G3 là',
        o: ['=F3*12.5%', '=F3-12.5%', '=F3/12.5', '=D3-12.5%'], a: 0,
        e: '<p>Tiền giảm = Thành tiền × 12,5% → <b>=F3*12.5%</b> (hoặc =F3*0.125). Kết quả: 1 295 000 × 12,5% = <b>161 875</b>.</p><p>Lưu ý: Excel cài đặt kiểu Mỹ dùng dấu chấm thập phân (12.5); máy cài kiểu Việt Nam có thể dùng dấu phẩy (12,5).</p>',
        ef: ['sheet', fill(fill(hd({ hl: { G3: 'w3' }, formula: '=F3*12.5%', cell: 'G3' }), 'F3', '1295000'), 'G3', '161875')] },
      { t: B7, src: C1, ic: '💵', q: 'Công thức tính <b>Thực trả</b> (số tiền phải trả sau khi giảm giá) tại ô H3 là',
        o: ['=F3+G3', '=F3-G3', '=F3*G3', '=G3-F3'], a: 1,
        e: '<p>Thực trả = Thành tiền − Giảm giá → <b>=F3-G3</b> = 1 295 000 − 161 875 = <b>1 133 125</b>.</p><p>Cách khác cùng kết quả: =F3*(1-12.5%) hoặc =F3*87.5%.</p>',
        ef: ['sheet', fill(fill(fill(hd({ hl: { H3: 'w3' }, formula: '=F3-G3', cell: 'H3' }), 'F3', '1295000'), 'G3', '161875'), 'H3', '1133125')] },
      { t: B8, src: C1, ic: '➕', q: 'Hàng 18 "Tổng cộng" của cột Thành tiền (F3 đến F17). Công thức đúng tại ô F18 là',
        o: ['=SUM(F3:F17)', '=SUM(F3;F17)', '=SUM(F3+F17)', '=TOTAL(F3:F17)'], a: 0,
        e: '<p><b>=SUM(F3:F17)</b> cộng tất cả các ô từ F3 đến F17 (dấu hai chấm = "đến").</p><ul><li>SUM(F3;F17) hoặc SUM(F3,F17) chỉ cộng 2 ô F3 và F17.</li><li>Excel không có hàm TOTAL.</li></ul><p>Kết quả Tổng Thành tiền của hoá đơn là <b>8 899 100</b> đồng.</p>' },
      { t: B8, src: C1, ic: '🧮', q: 'Tổng cộng cột Thành tiền là 8 899 100 đồng. Tổng cộng cột <b>Thực trả</b> (H18) bằng',
        o: ['7 786 712,5 đồng', '1 112 387,5 đồng', '8 899 100 đồng', '7 786 000 đồng'], a: 0,
        e: '<p>Thực trả = 87,5% Thành tiền → 8 899 100 × 0,875 = <b>7 786 712,5</b>. Tổng Giảm giá = 8 899 100 × 0,125 = 1 112 387,5.</p><p>Kiểm tra: 7 786 712,5 + 1 112 387,5 = 8 899 100 ✔.</p>' },
      { t: B6, src: C1, ic: '🔢', q: 'Để thêm dấu ngăn cách hàng nghìn, triệu, tỷ (VD: 1295000 → 1,295,000) ở các cột D, F, G, H, ta dùng',
        o: ['Nút Comma Style (,) hoặc Format Cells → Number → chọn Use 1000 Separator', 'Gõ dấu chấm bằng tay vào từng số', 'Nút Merge & Center', 'Nút Bold (B)'], a: 0,
        e: '<p>Bôi đen các cột → thẻ Home → nhóm Number → <b>Comma Style</b>, hoặc nháy chuột phải → Format Cells → Number → đánh dấu <b>Use 1000 Separator (,)</b>. Không gõ dấu bằng tay vì Excel sẽ hiểu thành chữ, không tính được.</p>' },
      { t: B6, src: C1, ic: '🔤', q: 'Để tiêu đề "HOÁ ĐƠN MUA HÀNG" nằm giữa bảng trên các cột A đến H, ta bôi đen A1:H1 rồi chọn',
        o: ['Merge & Center', 'Wrap Text', 'Sort', 'AutoSum'], a: 0,
        e: '<p><b>Merge &amp; Center</b> gộp các ô thành một và căn giữa nội dung. Sau đó chọn font Times New Roman, cỡ chữ 18 cho tiêu đề (cỡ 14 cho phần còn lại).</p>' },
      { t: B7, src: C2, ic: '📊', q: 'Câu 2 (Bảng điểm khảo sát): Cột Tổng là tổng ba môn Toán, Ngữ Văn, Tiếng Anh. Công thức nào tại ô G3 là <b>sai</b>?',
        f: ['sheet', bd({ hl: { G3: 'w1' } })],
        o: ['=D3+E3+F3', '=SUM(D3:F3)', '=SUM(D3,E3,F3)', '=D3:F3'], a: 3,
        e: '<p>"D3:F3" chỉ là tên một khối ô, không phải phép tính. Ba công thức còn lại đều cho kết quả 8,50 + 8,50 + 9,00 = <b>26,000</b>.</p>' },
      { t: B8, src: C2, ic: '📈', q: 'Công thức tính <b>Trung bình</b> tại ô H3 (trung bình 3 môn) là',
        o: ['=AVERAGE(D3:F3)', '=SUM(D3:F3)/2', '=AVERAGE(D3:G3)', '=MAX(D3:F3)'], a: 0,
        e: '<p><b>=AVERAGE(D3:F3)</b> (hoặc =G3/3). Nguyễn Bảo Long: 26 : 3 = 8,6666… → hiển thị 3 chữ số thập phân là <b>8,667</b>.</p><p>AVERAGE(D3:G3) sai vì lấy cả ô Tổng vào trung bình.</p>',
        ef: ['sheet', fill(fill(bd({ hl: { H3: 'w3', G3: 'w2' }, formula: '=AVERAGE(D3:F3)', cell: 'H3' }), 'G3', '26.000'), 'H3', '8.667')] },
      { t: B8, src: C2, ic: '🏆', q: 'Bạn Trần Phúc Minh có điểm 9,00; 9,50; 10,00. Tổng và Trung bình của bạn (lấy 3 chữ số thập phân) là',
        o: ['28,500 và 9,500', '28,500 và 9,167', '27,500 và 9,500', '28,000 và 9,333'], a: 0,
        e: '<p>Tổng = 9 + 9,5 + 10 = <b>28,500</b>. Trung bình = 28,5 : 3 = <b>9,500</b>. Đây cũng là Điểm TB cao nhất của bảng.</p>' },
      { t: B8, src: C2, ic: '🥇', q: 'Để tìm <b>Điểm TB cao nhất</b> của 10 học sinh (cột H từ H3 đến H12), dùng công thức',
        o: ['=MAX(H3:H12)', '=MIN(H3:H12)', '=SUM(H3:H12)', '=AVERAGE(H3:H12)'], a: 0,
        e: '<p><b>MAX</b> trả về giá trị lớn nhất; <b>MIN</b> trả về giá trị nhỏ nhất → Điểm TB thấp nhất dùng =MIN(H3:H12).</p>',
        ef: ['table', { head: ['Hàm', 'Ý nghĩa', 'Ví dụ'], rows: [['SUM', 'Tính tổng', '=SUM(D3:F3)'], ['AVERAGE', 'Trung bình cộng', '=AVERAGE(D3:F3)'], ['MAX', 'Giá trị lớn nhất', '=MAX(H3:H12)'], ['MIN', 'Giá trị nhỏ nhất', '=MIN(H3:H12)'], ['COUNT', 'Đếm ô chứa số', '=COUNT(D3:D12)']] }] },
      { t: B6, src: C2, ic: '🔟', q: 'Để cột Tổng và Trung bình hiển thị đúng <b>3 chữ số</b> sau dấu thập phân, ta',
        o: ['Format Cells → Number → Decimal places: 3 (hoặc dùng nút Increase/Decrease Decimal)', 'Gõ thêm số 0 vào cuối mỗi ô', 'Dùng hàm MAX', 'Đổi font chữ'], a: 0,
        e: '<p>Định dạng số thập phân không làm thay đổi giá trị ô, chỉ thay đổi cách hiển thị (8,6666… hiện là 8,667).</p>' },
      { t: B7, src: C3, ic: '💼', q: 'Câu 3 (Bảng lương): Lương = Lương cơ bản × Ngày công. Công thức tại ô H3 và kết quả của nhân viên Đỗ Bảo Nam là',
        f: ['sheet', bl({ hl: { H3: 'w1' } })],
        o: ['=E3*F3 → 5 720 000', '=E3+F3 → 220 026', '=E3*G3 → 66 000 000 000', '=F3*G3 → 7 800 000'], a: 0,
        e: '<p>Lương cơ bản ở cột <b>E</b>, ngày công ở cột <b>F</b> → <b>=E3*F3</b> = 220 000 × 26 = <b>5 720 000</b>.</p>',
        ef: ['sheet', fill(bl({ hl: { H3: 'w3' }, formula: '=E3*F3', cell: 'H3' }), 'H3', '5720000')] },
      { t: B7, src: C3, ic: '💰', q: 'Nếu quy ước <b>Còn lại = Lương + Phụ cấp − Tạm ứng</b>, công thức tại ô J3 là',
        o: ['=H3+G3-I3', '=H3-G3-I3', '=SUM(G3:I3)', '=H3+G3+I3'], a: 0,
        e: '<p>Lương (H3) + Phụ cấp (G3) − Tạm ứng (I3) → <b>=H3+G3-I3</b> = 5 720 000 + 300 000 − 4 013 000 = <b>2 007 000</b>.</p><p><i>Lưu ý: đề cương chỉ ghi "tính số tiền được nhận sau khi đã tạm ứng". Nếu thầy cô quy ước không cộng phụ cấp thì công thức là =H3-I3 (= 1 707 000). Hãy làm theo hướng dẫn của thầy cô trên lớp.</i></p>' },
      { t: B8, src: C3, ic: '📋', q: 'Lương của 7 nhân viên (H3:H9) lần lượt là 5 720 000; 5 750 000; 8 680 000; 9 240 000; 6 000 000; 5 750 000; 4 500 000. Kết quả của =MAX(H3:H9) và =MIN(H3:H9) là',
        o: ['9 240 000 và 4 500 000', '8 680 000 và 5 720 000', '45 640 000 và 4 500 000', '9 240 000 và 6 520 000'], a: 0,
        e: '<ul><li>=MAX(H3:H9) = <b>9 240 000</b> (Đinh Thanh Hải, TGĐ: 330 000 × 28).</li><li>=MIN(H3:H9) = <b>4 500 000</b> (Nguyễn Anh Tuấn, BV: 150 000 × 30).</li><li>=SUM(H3:H9) = 45 640 000; =AVERAGE(H3:H9) = 6 520 000.</li></ul>' },
      { t: B7, src: KT, ic: '🔄', q: 'Ô F3 có công thức =D3*E3. Khi kéo nút điền (fill handle) sao chép công thức xuống ô F4, công thức ở F4 là',
        o: ['=D4*E4', '=D3*E3', '=D3*E4', '=F3*E4'], a: 0,
        e: '<p>Địa chỉ ô trong công thức là <b>địa chỉ tương đối</b>: sao chép xuống 1 hàng thì số hàng tăng 1 → =D4*E4. Nhờ vậy chỉ cần viết công thức một lần cho cả cột.</p>' },
      { t: B7, src: KT, ic: '⚡', q: 'Ưu điểm của việc dùng địa chỉ ô trong công thức (VD: =D3*E3 thay vì =259000*5) là',
        o: ['Khi dữ liệu trong ô D3 hoặc E3 thay đổi, kết quả tự động cập nhật', 'Công thức ngắn hơn', 'Không cần dấu =', 'Không phải định dạng số'], a: 0,
        e: '<p>Đây là ý chính của Bài 7 "Tính toán tự động": bảng tính tự tính lại khi số liệu thay đổi, không phải sửa công thức.</p>' }
    ]
  };
})();
