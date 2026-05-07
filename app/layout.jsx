import './globals.css'

export const metadata = {
  title: '学生监督学习系统',
  description: '补习班线上学习监督平台',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="bg-slate-50">{children}</body>
    </html>
  )
}
