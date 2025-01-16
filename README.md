# Express.js Project
## 📂 Cấu trúc thư mục

```plaintext
📦 src
├── 📂 controllers   # Xử lý logic API, gọi service layer
├── 📂 databases     # Kết nối cơ sở dữ liệu (ORM, config DB)
├── 📂 entities      # Định nghĩa các model/schema cho dữ liệu
├── 📂 routes        # Định nghĩa các tuyến đường (Express Router)
├── 📂 services      # Business logic, xử lý chính của ứng dụng
├── 📂 views         # Giao diện hiển thị (nếu dùng template engine)
└── index.ts        # Điểm khởi chạy chính của ứng dụng
```

## 🎯 Cài đặt

### 1️⃣ Yêu cầu hệ thống
- **Node.js** >= 14.x
- **MySQL**

### 2️⃣ Clone project
```bash
git clone ...
cd my-express-app
```

### 3️⃣ Cài đặt dependencies
```bash
npm install
```

### 4️⃣ Cấu hình biến môi trường
Tạo file `.env` trong thư mục gốc và điền các thông tin sau:
```env
PORT=3000
DATABASE_PORT=3306
DATABASE_USER="root"
DATABASE_PASS="mypassword"
DATABASE_NAME="demo"
DATABASE_TYPE="mysql"
DATABASE_HOST="localhost"
```

### 5️⃣ Chạy ứng dụng
#### 🔹 Chạy server trong môi trường phát triển
```bash
npm run dev
```
#### 🔹 Chạy server trong môi trường production
```bash
npm start
```

## 🛠️ Các lệnh hữu ích
| Lệnh | Mô tả |
|------|------|
| `npm run dev` | Chạy ứng dụng ở chế độ phát triển |
| `npm start` | Chạy ứng dụng ở chế độ production |
| `npm run lint` | Kiểm tra lỗi cú pháp |
| `npm test` | Chạy test |

## 📜 Giấy phép
Dự án này được phát hành theo giấy phép **MIT License**.

## 🤝 Đóng góp
Nếu bạn muốn đóng góp, hãy mở **Pull Request** hoặc tạo **Issue**.

