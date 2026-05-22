# Jiatong Yao · Personal Website 个人主页

> 灵感参考：[mikechou031-gif.github.io/personal-website1](https://mikechou031-gif.github.io/personal-website1/)

## 📁 文件结构

```
personal-website/
├── index.html       主页面（双语 + 6 个分区）
├── style.css        样式（含深/浅色主题）
├── script.js        交互（主题切换、语言切换、滚动动画）
└── README.md        本文件
```

## 🎨 设计特点

- **现代单页滚动设计** — Hero / Profile / Education / Experience / Projects / Capabilities / Contact
- **双语切换** — 中英一键切换，偏好记忆到 localStorage
- **深/浅主题** — 自动跟随系统 + 手动切换
- **响应式** — 桌面、平板、手机全适配
- **优雅动效** — 滚动渐入、Hero 区域光晕浮动、悬停反馈
- **配色方案** — 暖橙 (#c8553d) + 米白底，专业又有温度

## 🚀 本地预览

直接双击 `index.html` 即可在浏览器打开。

或通过本地服务器（推荐）：
```bash
cd ~/Desktop/personal-website
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 🌐 部署到 GitHub Pages（免费上线）

### 方案 A：新建独立仓库（推荐）

```bash
cd ~/Desktop/personal-website
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
# 在 GitHub 新建仓库 jasmineyao1112.github.io（注意：必须是这个用户名）
git remote add origin git@github.com:jasmineyao1112/jasmineyao1112.github.io.git
git push -u origin main
```
推送完成后，访问 `https://jasmineyao1112.github.io` 即可看到主页。

### 方案 B：作为子仓库

新建仓库 `personal-website` 并推送，然后在仓库 Settings → Pages → 选择 main 分支 → Save。
访问 `https://jasmineyao1112.github.io/personal-website/`

## ✏️ 后续可补充的内容

1. **真实头像照片** — 替换 `index.html` 中 `.photo-frame` 内的 `JY` initials 为 `<img>` 标签
2. **LinkedIn 链接** — 在 Contact 区段把 `href="#"` 改成你的真实 LinkedIn URL
3. **更多项目** — 复制 `.proj__card` 区块添加
4. **简历 PDF 下载** — 在 Hero 区添加 "Download CV" 按钮，链接到上传的 PDF

## 💡 Tips

- 字体使用了 Google Fonts (Inter + Noto Serif SC + JetBrains Mono)，需要联网首次加载
- 默认中文模式，第一次访问会显示中文；切换后会记住偏好
- 所有图标用 inline SVG，无需额外资源
