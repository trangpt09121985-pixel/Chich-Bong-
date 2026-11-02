# Ôn tập giữa kỳ I – Lớp 7 – THCS Trần Duy Hưng (2026–2027)

Dashboard ôn tập trực tuyến cho học sinh lớp 7, soạn theo "Nội dung ôn tập giữa học kì I" của Trường THCS Trần Duy Hưng (phường Yên Hòa, Hà Nội).

| Môn | Số câu | Chủ đề |
|---|---|---|
| Toán 7 | 52 | Số hữu tỉ · Số thực · Góc & song song · Toán thực tế |
| Ngữ văn 7 | 32 | Đọc hiểu truyện · Thơ 4–5 chữ · Tiếng Việt · Viết |
| Tiếng Anh 7 | 60 | Phát âm · Ngữ pháp & từ vựng · Đọc hiểu · Nghe · Viết câu |
| KHTN 7 | 39 | Kĩ năng học KHTN · Tốc độ & âm thanh · Nguyên tử · Vật sống |
| Lịch sử & Địa lí 7 | 38 | Tây Âu trung đại · Phát kiến & Phục hưng · Trung Quốc · Đô thị · Châu Âu · Châu Á |
| GDCD 7 | 14 | Truyền thống quê hương · Quan tâm, chia sẻ · Học tập tự giác |
| Công nghệ 7 | 25 | Trồng trọt · Đất trồng & làm đất · Gieo trồng & chăm sóc · Thu hoạch · Nhân giống |
| Tin học 7 | 20 | Làm quen bảng tính · Công thức · Hàm SUM, AVERAGE, MAX, MIN |

Tính năng:
- Mỗi môn có tab **Phạm vi ôn tập** (tóm tắt đề cương) và **Luyện trắc nghiệm**.
- Chọn đáp án → hiện ngay đúng/sai và **lời giải chi tiết**, kèm hình vẽ, bảng, sơ đồ hoặc **mô phỏng động** (góc so le/đồng vị nhấp nháy, xe chạy trên đồ thị s–t, electron quay quanh hạt nhân, sóng âm lan từ đàn guitar đến tai, camera bắn tốc độ…).
- Câu Đúng/Sai 4 ý (KHTN), câu nghe và nút 🔊 nghe phát âm (Tiếng Anh, dùng giọng đọc có sẵn của trình duyệt).
- Bảng số câu tô màu xanh/đỏ, lọc theo chủ đề, "Làm lại câu sai", giao diện sáng/tối, dùng tốt trên điện thoại.
- Tiến độ lưu trên trình duyệt của từng học sinh (localStorage), không cần tài khoản, không có máy chủ.

## Đưa lên GitHub Pages

1. Đăng nhập GitHub → **New repository** → đặt tên, ví dụ `on-tap-giua-ky-lop7` → chọn **Public** → **Create repository**.
2. Trong repository mới: **Add file → Upload files** → kéo thả **toàn bộ nội dung** thư mục này (file `index.html`, `README.md`, `.nojekyll`, thư mục `assets/` và `data/`) → **Commit changes**.
   - Lưu ý: `index.html` phải nằm ở thư mục gốc của repository, không nằm trong thư mục con.
   - File `.nojekyll` là file ẩn; nếu máy không hiện, có thể bỏ qua, trang vẫn chạy.
3. Vào **Settings → Pages** → mục *Build and deployment* chọn **Source: Deploy from a branch**, **Branch: main**, thư mục **/(root)** → **Save**.
4. Sau khoảng 1–2 phút, trang có địa chỉ dạng `https://<tên-tài-khoản>.github.io/on-tap-giua-ky-lop7/`. Gửi đường link này cho học sinh.

Dùng dòng lệnh (nếu đã cài git):

```bash
cd on-tap-giua-ky-lop7
git init && git add . && git commit -m "Ôn tập giữa kỳ I lớp 7"
git branch -M main
git remote add origin https://github.com/<tên-tài-khoản>/on-tap-giua-ky-lop7.git
git push -u origin main
```

Xem thử trên máy: mở trực tiếp file `index.html` bằng trình duyệt (không cần cài gì).

## Cấu trúc thư mục

```
index.html          Trang chính
assets/style.css    Giao diện
assets/app.js       Logic: trang chủ, trang môn, chấm điểm, lưu tiến độ
assets/figures.js   Thư viện hình minh hoạ & mô phỏng động (SVG vẽ bằng mã)
data/toan.js        Câu hỏi Toán
data/van.js         Câu hỏi Ngữ văn
data/anh.js         Câu hỏi Tiếng Anh
data/khtn.js        Câu hỏi KHTN
data/lsdl.js        Câu hỏi Lịch sử & Địa lí
data/gdcd.js        Câu hỏi GDCD
data/cn.js          Câu hỏi Công nghệ
data/tin.js         Câu hỏi Tin học
```

## Thêm hoặc sửa câu hỏi

Mở file trong `data/`, mỗi câu là một khối:

```js
{ t: 'Số thực', src: 'Đề cương', ic: '🎯',
  q: 'Nội dung câu hỏi, phân số viết {{3|4}}, căn viết √{2}',
  o: ['Phương án A', 'Phương án B', 'Phương án C', 'Phương án D'],
  a: 2,                       // đáp án đúng: 0 = A, 1 = B, 2 = C, 3 = D
  e: '<p>Lời giải…</p>',
  f: ['numberLine', {...}],   // (tuỳ chọn) hình kèm câu hỏi
  ef: ['atom', { Z: 8 }]      // (tuỳ chọn) hình/mô phỏng trong lời giải
}
```

- `t` phải trùng một chủ đề trong danh sách `topics` của môn.
- Câu Đúng/Sai: `type: 'tf'`, thay `o`, `a` bằng `s: [{ t: 'ý a', a: true, e: 'giải thích' }, …]` (4 ý).
- Câu nghe Tiếng Anh: thêm `listen: 'đoạn văn tiếng Anh'`; thêm `say: true` để có nút 🔊 ở từng phương án.
- Các loại hình có sẵn trong `assets/figures.js`: `parallel`, `numberLine`, `protractor`, `rays`, `triangle`, `sets`, `stGraph`, `atom`, `sound`, `speedCam`, `photo`, `trip`, `match`, `signs`, `voyages`, `timeline`, `pyramid`, `seasons`, `sheet`, `sentence`, `flow`, `table`, `html`.

## Ghi chú nội dung

- Toán, Câu 3 (đề cương): bản in ghi phương án D là −13/29, không có trong dãy số; câu đã được chỉnh để có đáp án −15/29.
- Toán, Câu 19 (đề cương): phương án A gốc (M₁ = N₄, cặp so le ngoài) cũng suy ra x // y; đã thay phương án A, D để chỉ còn một đáp án đúng.
- Ngữ văn: không chép lại toàn văn "Vé xem xiếc" (Tống Phù Sa) và "Em nghĩ về Trái Đất" (Nguyễn Lãm Thắng); trang chỉ tóm lược nội dung, học sinh đọc văn bản gốc trong tập đề cương.
- Tiếng Anh: các đoạn đọc hiểu, biển báo và bài nghe là bài bổ sung tự soạn theo chủ đề Unit 1–3; phần nghe dùng giọng đọc máy của trình duyệt (Chrome, Edge, Safari đều hỗ trợ).
- Công nghệ: câu 9, 10, 14 trong bản đề cương có đánh dấu khoanh tròn khác với đáp án theo SGK (đáp án đúng: 9-B kĩ sư bảo vệ thực vật, 10-A Cày → Bừa → Lên luống, 14-A tháng 11 đến tháng 4 năm sau). Câu 15 (mục đích cày đất) có 3 phương án cùng đúng nên đã chuyển sang dạng "không phải".
- Tin học: đề cương là bài thực hành Excel; trang chuyển thành câu hỏi về công thức, hàm và kết quả tính. Cột "Còn lại" (Câu 3) chưa ghi rõ có cộng phụ cấp hay không, câu hỏi đã nêu rõ quy ước.
- Lịch sử & Địa lí: sơ đồ hành trình phát kiến địa lí là hình giản lược, không theo tỉ lệ; học sinh xem lược đồ Hình 1 trong đề cương khi làm tự luận.
- Giáo viên nên rà soát lại đáp án trước khi gửi học sinh.
