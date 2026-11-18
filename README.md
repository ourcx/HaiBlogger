# 小海的角落

一个 Vue 3 + Naive UI 的 CSR 博客，配套 Node.js API 和 SQLite 持久化。文章、评论、访客 UV/PV 都由后端提供，前端不再把 Markdown 打进构建产物。

## 本地运行

需要 Node.js 24（后端使用内置 `node:sqlite`）。

```bash
npm install
npm run dev
```

- 前端开发地址：`http://localhost:5173`
- API 地址：`http://localhost:8787`
- `npm run dev` 会同时启动两者。

## 文章管理

文章源文件放在 `server/content`。新增或修改 Markdown 后运行：

```bash
npm run migrate
```

服务启动时也会自动执行幂等迁移。文章正文存入 SQLite，附件继续放在对应的 `*.assets` 目录，由后端安全地提供访问。

## 生产运行

```bash
npm run build
PORT=8787 DATABASE_PATH=/data/blog.sqlite VISITOR_SALT=请替换为随机字符串 npm start
```

生产环境需要一个可持久化目录保存 SQLite。`VISITOR_SALT` 用于生成访客指纹摘要，不应使用默认值。后端会同时提供 `/api/*` 与构建后的 CSR 页面，因此应把域名直接指向这个 Node 服务，不能再使用只支持静态文件的 GitHub Pages。

也可以使用仓库内的 `Dockerfile` 构建镜像，并把 `/data` 挂载到持久化磁盘。

## 数据口径

- UV：匿名访客 Cookie 去重；“今日 UV”按 Asia/Shanghai 自然日去重。
- PV：每次前端路由变化记录一次。
- 评论：1–24 字昵称、2–500 字正文，30 秒频率限制，并带隐藏蜜罐字段。
- 旅行者一号：以 NASA Voyager Mission Status 的公开基准与速度做动态估算，页面会明确标注为估算值。
