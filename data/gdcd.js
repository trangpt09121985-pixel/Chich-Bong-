/* MÔN GDCD 7 – Bài 1: Tự hào về truyền thống quê hương · Bài 2: Quan tâm, cảm thông và chia sẻ · Bài 3: Học tập tự giác, tích cực */
window.QZ = window.QZ || { subjects: {} };
(function () {
  const B1 = 'Truyền thống quê hương', B2 = 'Quan tâm, chia sẻ', B3 = 'Học tập tự giác';
  const D1 = 'Dạng 1 · Nhiều lựa chọn', D2 = 'Dạng 2 · Đúng/Sai', TL = 'Từ câu hỏi ôn tập';
  const INFO = '<p>Trường của K xây dựng góc cộng đồng "Không gian văn hoá dân tộc Thái". Là một học sinh dân tộc Thái, K rất tự hào và cùng các thầy cô vẽ trang trí những hoạ tiết đặc trưng, ủng hộ một số đồ dùng, trang phục truyền thống của người dân tộc Thái. Tuy nhiên, bạn T cùng lớp cho rằng có một không gian như vậy trong trường là không phù hợp.</p><p><i>Nguồn: Trích câu c, Bài tập 4 trang 6 SBT GDCD 7 – Bộ sách Kết nối tri thức với cuộc sống.</i></p>';

  QZ.subjects.gdcd = {
    name: 'GDCD 7', short: 'GDCD',
    tagline: 'Truyền thống quê hương, quan tâm – chia sẻ, học tập tự giác',
    topics: [B1, B2, B3],
    scope: [
      { h: 'Bài 1. Tự hào về truyền thống quê hương', items: [
        'Truyền thống quê hương: giá trị tốt đẹp do người dân quê hương sáng tạo, lưu truyền từ đời này sang đời khác.',
        'Ví dụ: yêu nước, cần cù lao động, hiếu học, đoàn kết, nghề thủ công (gốm Bát Tràng, cốm Vòng, lụa Vạn Phúc…), lễ hội.',
        'Học sinh: tìm hiểu, trân trọng, tham gia giữ gìn và giới thiệu truyền thống quê hương; phê phán việc làm xúc phạm, làm tổn hại truyền thống.'] },
      { h: 'Bài 2. Quan tâm, cảm thông và chia sẻ', items: [
        'Biểu hiện: hỏi han, động viên, giúp đỡ người gặp khó khăn; lắng nghe, thấu hiểu; quyên góp, tham gia hoạt động thiện nguyện.',
        'Ý nghĩa: giúp người được quan tâm vượt khó; gắn kết mọi người; người biết chia sẻ được yêu quý, tôn trọng.',
        'Tục ngữ: "Lá lành đùm lá rách", "Nhường cơm sẻ áo", "Thương người như thể thương thân".'] },
      { h: 'Bài 3. Học tập tự giác, tích cực', items: [
        'Biểu hiện: xác định đúng mục đích học tập; tự lập kế hoạch; chủ động, kiên trì, không cần nhắc nhở; hăng hái phát biểu; tự tìm phương pháp phù hợp.',
        'Ý nghĩa: tiến bộ trong học tập, rèn tính kỉ luật, tự lập, được thầy cô và bạn bè quý mến.',
        'Phê phán: lười học, học đối phó, nghỉ học đi chơi, chép bài của bạn.'] },
      { h: 'Tự luận', items: ['Xem lại các bài tập giải quyết tình huống tương ứng với nội dung bài 1, 2, 3 SGK.', 'Câu 3 ôn tập: liệt kê 5 việc làm cụ thể để học tập tự giác, tích cực.'] }
    ],
    questions: [
      { t: B1, src: D1, ic: '🏮', q: 'Sự tự tin, hãnh diện về những giá trị mà người dân ở quê hương đã sáng tạo ra và được lưu truyền từ thế hệ này sang thế hệ khác là tự hào về',
        o: ['truyền thống quê hương', 'truyền thống gia đình', 'truyền thống dòng họ', 'truyền thống dân tộc'], a: 0,
        e: '<p>Từ khoá: giá trị do <b>người dân ở quê hương</b> sáng tạo và lưu truyền → <b>truyền thống quê hương</b>. Truyền thống gia đình, dòng họ có phạm vi hẹp hơn; truyền thống dân tộc có phạm vi cả nước.</p>' },
      { t: B1, src: D1, ic: '🏺', q: 'Làng quê của bạn H có nghề gốm truyền thống. H thường dành thời gian rảnh học kĩ thuật nặn gốm từ các nghệ nhân, mong sau này quảng bá sản phẩm của quê hương. Khi bố mẹ khuyên H chỉ tập trung học văn hoá để theo ngành khác, H nhẹ nhàng giải thích mong muốn gìn giữ và quảng bá gốm quê mình. Việc làm của H thể hiện nhận thức đúng đắn nào?',
        o: ['Biết trân trọng, giữ gìn và có ý thức tiếp nối giá trị văn hoá truyền thống của quê hương', 'Kiên định, luôn đặt sự nghiệp cá nhân lên trên định hướng của gia đình', 'Ý thức rõ trách nhiệm cá nhân trong việc xây dựng và bảo vệ gia đình', 'Đề cao lựa chọn ngành nghề theo sở thích cá nhân thay vì nhu cầu của xã hội'], a: 0,
        e: '<p>H học nghề gốm để <b>gìn giữ và quảng bá</b> sản phẩm quê hương → trân trọng và tiếp nối truyền thống.</p><p>H vẫn <i>nhẹ nhàng giải thích</i> với bố mẹ, không coi thường ý kiến gia đình, nên B sai.</p>' },
      { t: B2, src: D1, ic: '🤗', q: 'Hành động nào dưới đây thể hiện sự quan tâm, cảm thông, chia sẻ?',
        o: ['Giúp đỡ người khác khi thấy việc đó đem lại lợi ích cho bản thân', 'Tự giác hoàn thành tốt các nhiệm vụ học tập mà không cần nhắc nhở', 'Khích lệ, động viên, an ủi khi bạn bè, người thân gặp khó khăn', 'Thẳng thắn nhận lỗi và sửa chữa khi bản thân mắc phải sai lầm'], a: 2,
        e: '<ul><li>A: giúp vì <b>lợi ích của mình</b> là vụ lợi, không phải quan tâm thật lòng.</li><li>B: biểu hiện học tập tự giác (Bài 3).</li><li>D: biểu hiện trung thực, dũng cảm nhận lỗi.</li><li><b>C</b>: hướng tới người đang khó khăn → quan tâm, cảm thông, chia sẻ.</li></ul>' },
      { t: B2, src: D1, ic: '🍚', q: 'Câu tục ngữ nào dưới đây nói về sự chia sẻ?',
        o: ['Nhường cơm sẻ áo', 'Uống nước nhớ nguồn', 'Học ăn, học nói, học gói, học mở', 'Lửa thử vàng, gian nan thử sức'], a: 0,
        e: '<ul><li><b>Nhường cơm sẻ áo</b>: chia cho người khác cả miếng ăn, cái mặc → chia sẻ.</li><li>Uống nước nhớ nguồn: lòng biết ơn.</li><li>Học ăn, học nói…: học cách ứng xử.</li><li>Lửa thử vàng…: thử thách giúp con người trưởng thành.</li></ul>' },
      { t: B3, src: D1, ic: '📚', q: 'Nội dung nào dưới đây <b>không</b> là biểu hiện của học tập tự giác, tích cực?',
        o: ['Xác định đúng mục đích học tập', 'Luôn cố gắng, kiên trì trong học tập', 'Hăng hái phát biểu xây dựng bài', 'Thường xuyên nghỉ học để đi chơi'], a: 3,
        e: '<p>Nghỉ học để đi chơi là biểu hiện của <b>lười học</b>, trái với học tập tự giác. Ba phương án còn lại đều là biểu hiện tích cực.</p>' },
      { t: B3, src: D1, ic: '🗓️', q: 'Nhận thấy mình còn yếu kĩ năng làm bài tập nhóm và ghi nhớ kiến thức, bạn M (lớp 7) chủ động lập thời khoá biểu cá nhân, tự phân bổ thời gian ôn luyện hợp lí và tìm phương pháp học phù hợp. Việc làm của M là biểu hiện của',
        o: ['Học tập tự giác, tích cực', 'Tính tự trọng và tinh thần trung thực', 'Sự giản dị và lối sống tự giác', 'Lòng nhân ái và sự tích cực'], a: 0,
        e: '<p>M <b>tự nhận ra</b> điểm yếu, <b>tự lập kế hoạch</b>, <b>chủ động</b> tìm cách học → học tập tự giác, tích cực.</p>',
        ef: ['flow', ['Tự nhận ra điểm yếu', 'Lập thời khoá biểu', 'Phân bổ thời gian', 'Tìm phương pháp phù hợp']] },
      { t: B3, src: D1, ic: '✏️', q: 'Việc làm nào dưới đây là biểu hiện của thái độ học tập tự giác và tích cực?',
        o: ['Luôn ghi chép lại đầy đủ lời giải của thầy cô và học thuộc lòng để làm bài', 'Tích cực tham gia các hoạt động phong trào và văn nghệ của trường, lớp', 'Luôn giữ thái độ tôn trọng, lễ phép và biết ơn đối với các thầy cô giáo', 'Tự lập kế hoạch ôn tập và chủ động đào sâu kiến thức khi gặp bài tập khó'], a: 3,
        e: '<ul><li>A: học thuộc lời giải là học thụ động.</li><li>B: tích cực hoạt động phong trào, không phải học tập.</li><li>C: biểu hiện tôn sư trọng đạo.</li><li><b>D</b>: tự lập kế hoạch + chủ động đào sâu → tự giác, tích cực.</li></ul>' },
      { t: B2, src: D1, ic: '♿', q: 'Lúc rảnh rỗi, N thường sang nhà dạy V học vì bạn V là người khuyết tật, không thể đến trường được. Việc làm của N thể hiện bạn là người có đức tính nào?',
        o: ['Quan tâm, cảm thông, chia sẻ', 'Chí công vô tư', 'Tôn trọng sự thật', 'Bảo vệ lẽ phải'], a: 0,
        e: '<p>N hiểu hoàn cảnh khó khăn của V (cảm thông) và dành thời gian giúp bạn học (chia sẻ) → <b>quan tâm, cảm thông, chia sẻ</b>.</p>' },
      { t: B1, src: D1, ic: '🌾', q: 'Câu ca dao <i>"Cốm Vòng thơm mãi bàn tay / Đi xa Hà Nội nhớ ngày cốm thơm"</i> thể hiện truyền thống nào của làng Vòng?',
        o: ['Truyền thống làm nón lá', 'Truyền thống mây, tre đan', 'Truyền thống làm lụa', 'Truyền thống làm cốm'], a: 3,
        e: '<p>Làng Vòng (nay thuộc phường Dịch Vọng, Hà Nội) nổi tiếng với nghề <b>làm cốm</b> từ lúa nếp non, đặc sản mùa thu của Hà Nội.</p>' },
      { t: B1, src: D1, ic: '🧳', q: 'Việc làm nào dưới đây góp phần quảng bá các giá trị truyền thống của quê hương?',
        o: ['Phát triển du lịch văn hoá cộng đồng tại quê hương', 'Sửa đổi các nghi lễ truyền thống cho phù hợp với thị hiếu du khách', 'Sưu tầm, cất giữ cổ vật quý của quê hương tại nhà riêng', 'Giới thiệu phóng đại về các dịp lễ hội truyền thống của quê hương'], a: 0,
        e: '<ul><li><b>A</b>: du khách được trải nghiệm trực tiếp văn hoá địa phương → quảng bá đúng cách.</li><li>B: làm sai lệch giá trị truyền thống.</li><li>C: cổ vật nên được bảo tồn, trưng bày cho cộng đồng.</li><li>D: phóng đại là thiếu trung thực.</li></ul>' },
      { t: B1, src: D2, ic: '🎎', type: 'tf', passage: INFO, q: 'Đọc thông tin và chọn Đúng hoặc Sai cho mỗi ý.',
        s: [
          { t: 'Việc K đóng góp đồ dùng, trang phục truyền thống là hành động tự nguyện, xuất phát từ tình yêu và lòng tự hào về nguồn cội của bản thân.', a: true, e: 'K tự hào và chủ động đóng góp → hành động tự nguyện, thể hiện tình yêu với truyền thống dân tộc mình.' },
          { t: 'Bạn T có quyền tự do đưa ra ý kiến cá nhân nên việc phủ nhận ý nghĩa của không gian văn hoá dân tộc trong nhà trường là hoàn toàn phù hợp.', a: false, e: 'T có quyền nêu ý kiến, nhưng phủ nhận giá trị văn hoá của một dân tộc là nhận thức chưa đúng.' },
          { t: 'Việc giữ gìn và phát huy truyền thống quê hương chỉ là trách nhiệm riêng của các học sinh thuộc nhóm dân tộc thiểu số như bạn K.', a: false, e: 'Giữ gìn truyền thống là trách nhiệm của mọi công dân, không riêng dân tộc nào.' },
          { t: 'Việc K nhẹ nhàng giải thích và chia sẻ những nét đẹp văn hoá dân tộc Thái cho T sẽ giúp bạn nâng cao hiểu biết và xua tan những định kiến chưa đúng.', a: true, e: 'Chia sẻ nhẹ nhàng giúp bạn hiểu và tôn trọng sự đa dạng văn hoá.' }
        ],
        e: '<p>Việt Nam có 54 dân tộc; tôn trọng, giữ gìn bản sắc văn hoá của mỗi dân tộc là trách nhiệm chung.</p>' },
      { t: B1, src: TL, ic: '🏯', q: 'Là học sinh, việc làm nào <b>phù hợp nhất</b> để gìn giữ, phát huy truyền thống quê hương?',
        o: ['Tìm hiểu về lịch sử, lễ hội, nghề truyền thống của quê hương và giới thiệu cho bạn bè', 'Chỉ học thật giỏi, việc giữ gìn truyền thống là của người lớn', 'Chê bai những phong tục cũ là lạc hậu', 'Chỉ đi lễ hội để chụp ảnh check-in'], a: 0,
        e: '<p>Học sinh góp phần giữ gìn truyền thống bằng những việc vừa sức: tìm hiểu, trân trọng, tham gia các hoạt động văn hoá, giới thiệu với bạn bè; đồng thời phê phán hành vi làm tổn hại truyền thống.</p>' },
      { t: B2, src: TL, ic: '💞', q: 'Ý nghĩa của quan tâm, cảm thông và chia sẻ là gì?',
        o: ['Chỉ giúp người được giúp đỡ có thêm tiền bạc', 'Giúp mọi người gắn kết, người gặp khó khăn có thêm động lực vượt qua; người biết chia sẻ được yêu quý, tôn trọng', 'Giúp bản thân được nổi tiếng', 'Không có ý nghĩa gì nếu người kia không trả ơn'], a: 1,
        e: '<p>Quan tâm, chia sẻ mang lại ý nghĩa cho <b>cả hai phía</b>: người nhận được động viên, vượt khó; người cho được mọi người yêu quý, cuộc sống thêm gắn bó.</p>' },
      { t: B3, src: TL, ic: '✅', q: 'Việc nào sau đây <b>không</b> nên có trong kế hoạch học tập tự giác của em?',
        o: ['Làm bài tập về nhà trước khi xem ti vi', 'Ôn lại bài cũ trước giờ học mới', 'Chép đáp án của bạn để nộp cho kịp', 'Hỏi thầy cô khi chưa hiểu bài'], a: 2,
        e: '<p>Chép bài của bạn là học đối phó, thiếu trung thực. Các việc còn lại thể hiện sự chủ động, tự giác.</p>' }
    ]
  };
})();
