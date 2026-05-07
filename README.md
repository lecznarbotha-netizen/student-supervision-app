# 中学生补习班线上监督学习系统（完整可运行版本）

## 技术栈

### 前端

* Next.js 15
* React
* TailwindCSS
* Framer Motion
* Recharts
* Axios

### 后端

* Node.js
* Next.js API Routes
* Prisma ORM
* MySQL
* JWT 登录认证

### 功能模块

* 学生登录/教师登录
* 在线学习监督
* 摄像头在线状态
* 学习进度统计
* AI专注度记录
* 作业打卡
* 教师后台
* 家长反馈
* 数据分析图表

---

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置数据库

创建 `.env` 文件：

```env
DATABASE_URL="mysql://root:password@localhost:3306/student_app"
JWT_SECRET="super_secret_key"
```

### 3. 初始化数据库

```bash
npx prisma migrate dev --name init
```

### 4. 启动开发服务器

```bash
npm run dev
```

打开 http://localhost:3000

## 默认测试账号

### 教师账号
- Email: teacher@test.com
- Password: 123456

### 学生账号
- Email: student@test.com
- Password: 123456

## 项目结构

```
student-supervision-app/
├── app/
│   ├── api/
│   │   ├── register/
│   │   ├── login/
│   │   └── tasks/
│   ├── login/
│   ├── dashboard/
│   └── layout.jsx
├── lib/
│   ├── prisma.js
│   └── auth.js
├── prisma/
│   └── schema.prisma
├── public/
├── .env
├── tailwind.config.js
├── package.json
└── README.md
```
