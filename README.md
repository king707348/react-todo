React Todo (react-todo)
雙語說明：這是一個使用 Next.js + React 打造的待辦事項（Todo）範例應用，內含簡單的佈局、主題切換與可重用 UI 元件。

Brief (EN): A small Next.js Todo app example with theme support and reusable UI components.

主要特色

簡單的 Todo 功能：新增、編輯、切換完成狀態（以組件化方式實作）。
主題支援：使用 next-themes 提供深色/淺色主題切換。
Radix UI & ShadCN 風格元件：Radix 的 Tooltip / Slot 等小工具，以及可重用的 UI component（src/components）。
技術棧

Next.js 16
React 19
TypeScript
Tailwind CSS 4
Radix UI
next-themes
--

快速開始（Windows / PowerShell）
先安裝相依套件：
npm install

啟動開發伺服器（專案預設使用 port 3001）：
npm run dev
開啟瀏覽器並前往 http://localhost:3001。

建置與執行生產模式：
npm run build
npm run start

程式碼檢查（ESLint）：
npm run lint

--

專案結構（重點）
app/ - Next.js app router 的 entry（page.tsx, layout.tsx）
src/components/ - UI 與 layout 元件：layout/, ui/, providers/
src/lib/utils.ts - 公用工具函式
public/ - 靜態資源
範例：
react-todo/
├─ src/
│  ├─ app/
│  ├─ components/
│  │  ├─ layout/
│  │  ├─ providers/
│  │  └─ ui/
│  └─ lib/
└─ public/

--

開發者提示
入口頁面：src/app/page.tsx。
若要新增 UI 元件，請放在 src/components/ui/ 並使用一致的樣式與 class-variance-authority 管理變體。
主題邏輯可在 src/components/providers/theme-provider.tsx 找到。
相依與版本
重要相依（見 package.json）：

next v16
react v19
tailwindcss v4
建議 Node.js 版本 >= 18。

--

部署
這是一個標準的 Next.js 應用，可部署到 Vercel、Netlify 或任何支援 Node.js 的平台。若部署到 Vercel，直接連接 GitHub repository 並使用 npm run build 即可。

--

可進一步改進（建議）
加入測試（Jest / React Testing Library）
CI: GitHub Actions 用於 lint 與 build 驗證
使用 Storybook 建立與展示元件庫
--
貢獻
歡迎 PR 與 issue。請在提交前先執行 npm run lint 並保持 commit 訊息清楚。

授權
此專案目前未指定授權，請根據需要加入 LICENSE 檔案（例如 MIT）。