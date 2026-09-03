# GitHub Pages 部署指南

## 部署步骤

### 第一步：创建 GitHub 仓库

1. 登录 GitHub (https://github.com)
2. 点击右上角 `+` → `New repository`
3. **重要**：仓库名必须是 `你的用户名.github.io`
   - 例如：`xiaobing.github.io`
   - 这样你的网站地址就是 `https://xiaobing.github.io`
4. 选择 **Public**（公开）
5. 点击 `Create repository`

### 第二步：上传代码

在项目根目录执行以下命令：

```bash
# 初始化 git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "feat: 小冰个人主页"

# 关联 GitHub 仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git

# 推送
git branch -M main
git push -u origin main
```

### 第三步：开启 GitHub Pages

1. 进入你的仓库页面
2. 点击 `Settings`（设置）
3. 左侧菜单找到 `Pages`
4. 在 `Build and deployment` 下：
   - **Source** 选择 `GitHub Actions`
5. 完成！

### 第四步：等待部署

- 推送代码后，GitHub Actions 会自动构建部署
- 在仓库的 `Actions` 标签页可以看到部署进度
- 部署成功后，访问 `https://你的用户名.github.io` 即可

---

## 后续更新

以后每次修改代码后，只需：

```bash
git add .
git commit -m "更新内容"
git push
```

GitHub 会自动重新部署，1-2 分钟后生效。

---

## 注意事项

1. **仓库名必须正确**：使用 `用户名.github.io` 格式
2. **图片路径**：所有图片放在 `public/` 目录下
3. **自定义域名**（可选）：
   - 在 `public/` 目录下创建 `CNAME` 文件
   - 文件内容是你的域名，如 `www.xiaobing.com`
   - 在域名服务商处设置 CNAME 记录指向 `用户名.github.io`

---

## 免费 + 永久

GitHub Pages 完全免费，没有流量限制，适合个人网站使用。
