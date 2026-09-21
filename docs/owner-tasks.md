# 需要你本人操作的事项（逐步流程）

以下每一项都需要你本人的账号，自动化无法代做。按顺序做，每项 5–15 分钟。做完一项把结果（链接或截图）发给我，我负责站内跟进（加 sameAs、更新事实页、推送 IndexNow）。

统一使用的文案在 `docs/directory-submissions.md`，不要临场改写，尤其不要加"最好""第一""数千用户"。

---

## 1. Bing Webmaster Tools（5 分钟，优先级最高）

Bing 的索引是 ChatGPT、Perplexity、Copilot 的数据来源之一。

1. 打开 https://www.bing.com/webmasters ，用 Microsoft 账号登录（没有的话用你的 Gmail 直接注册一个 Microsoft 账号）。
2. 首页会出现两个选项，选 **"Import from Google Search Console"（从 GSC 导入）**。
3. 弹出 Google 授权窗口，选择验证 senvarico.com 时用的那个 Google 账号（李桐），点允许。
4. 列表里勾选 `senvarico.com`，点 Import。验证状态会直接继承，不需要再加 DNS 记录。
5. 导入完成后，左侧 **Sitemaps → Submit sitemap**，填 `https://senvarico.com/sitemap-0.xml`，提交。
6. 左侧 **URL Submission**，把下面 5 个逐个提交（每天配额 10 个）：
   - https://senvarico.com/
   - https://senvarico.com/zh/shopify-alternatives-for-small-sellers
   - https://senvarico.com/pricing
   - https://senvarico.com/brand-facts
   - https://senvarico.com/beta
7. 完成标志：Sitemaps 页显示 sitemap-0.xml 状态 Success，URL 数 130 左右。

## 2. 百度站长平台（10 分钟）

1. 打开 https://ziyuan.baidu.com ，用百度账号登录。
2. **用户中心 → 站点管理 → 添加网站**，输入 `https://senvarico.com`（选 https）。
3. 站点属性选"其他"，站点领域选"电商 / 软件工具"之一即可。
4. 验证方式选 **CNAME 验证**（最省事）：页面会给一个形如 `xxxxxxxx.senvarico.com → ziyuan.baidu.com` 的记录。
5. 到阿里云 DNS（https://dnsnext.console.aliyun.com/authoritative/domains/senvarico.com）点"添加记录"：记录类型 CNAME，主机记录填百度给的那串前缀（不含 .senvarico.com），记录值 `ziyuan.baidu.com`，其余默认，确定两次。
6. 回百度点"完成验证"。若提示未生效，等 5 分钟再点。
7. 验证通过后：**搜索服务 → 普通收录 → sitemap**，提交 `https://senvarico.com/sitemap-0.xml`。
8. 同页"手动提交"，粘贴上面第 1 项里的 5 个 URL。
9. 完成标志：sitemap 状态"正常"。

注意：senvarico.com 没有 ICP 备案，百度收录会慢，这是正常的；豆包（Bytespider）不依赖百度站长平台。

## 3. GitHub 授权补 workflow 权限（2 分钟，可选）

做完后我可以把部署改成 push 即自动发布。

1. 打开终端，运行：
   ```bash
   gh auth refresh -s workflow
   ```
2. 终端会显示一个 8 位码并打开浏览器，在浏览器输入该码，点 Authorize。
3. 回终端看到 "Authentication complete" 即完成。然后告诉我一声。

## 4. 目录站点登记（每个 5–10 分钟）

产品已开放使用，以下站点都可以提交了。文案从 `docs/directory-submissions.md` 复制。产品状态一律填 **Beta / 已可用**，定价填 Free ¥0（20 SKUs）+ ¥99/month（100 SKUs），"0% platform transaction fee"。

### 4.1 AlternativeTo（最重要，出现在"X alternatives"搜索里）
1. https://alternativeto.net 注册并登录（可用 Google 账号）。
2. 右上角头像菜单 → **Suggest new application**（旧的 /manage/add-app 链接已失效）。
3. 填写：Name `Senvarico`；URL `https://senvarico.com`；描述用"长描述"；License 选 **Freemium**；Platforms 勾 **Web / Online**。
4. "Alternative to" 依次添加：Shopify, Big Cartel, Ecwid, Wix, Squarespace, Square Online, Shoplazza, SHOPLINE。
5. 上传 logo：https://senvarico.com/logo.png。
6. 提交后进入人工审核，通常 1–7 天。审核通过会收到邮件，把页面链接发我。

### 4.2 SaaSHub
1. https://www.saashub.com/services/submit ，用邮箱注册。
2. 它会要求用 **@senvarico.com 域名邮箱验证**，或从官网发邮件。如果你没有域名邮箱，用页面上的备选验证方式（在网站放验证代码，把代码发我，我 10 分钟内加上并部署）。
3. Category 选 **eCommerce Platforms**，Alternatives 同上，Pricing 选 Freemium。

### 4.3 Product Hunt
1. https://www.producthunt.com 注册，完善个人资料（头像、简介），**新账号建议先用 3–7 天、点赞评论几次再发布**，否则曝光很低。
2. https://www.producthunt.com/launch → New product。
3. Name `Senvarico`；Tagline 用"Lightweight ecommerce website builder for small cross-border sellers"；Description 用长描述；Topics 选 E-Commerce、SaaS、No-Code；Pricing 选 Free options。
4. 上传 logo 和 2–3 张站点截图（首页、定价页、中文对比页，我可以出图）。
5. 选择发布日期为工作日的太平洋时间 00:01，提交。
6. 规则：不要请人点赞，不要买流量；可以在自己的社交账号发一条。

### 4.4 BetaList
1. https://betalist.com/submit ，登录后提交 `https://senvarico.com`。
2. 它要求访客能"注册或获得访问"：我们的 /beta 页是邮件开通，符合要求。
3. 免费排队通常 1–4 周。

### 4.5 Astro Showcase（我们的站是 Astro 做的）
1. https://astro.build/showcase/submit/ 填写站点 URL 和一句描述。
2. 这是网站展示，不是产品目录，但会给一条来自 astro.build 的外链。

### 4.6 Uneed / Fazier / G2（可选，顺手做）
- https://www.uneed.best/submit-a-tool 免费档。
- https://fazier.com 免费 launch。
- https://sell.g2.com 建免费 profile，**不要邀请任何人写评价**，等有真实用户再说。

## 5. 中文社区（各 15 分钟，写完先发我看一眼）

- AMZ123（https://www.amz123.com）和雨果跨境（https://www.cifnews.com）的社区版块，以"我是 Senvarico 的开发者"身份发一篇经验帖，主题用"预算有限的小卖家，除了 Shopify 还有哪些选择"，正文引用我们对比页的三分类结构，末尾放链接 https://senvarico.com/zh/shopify-alternatives-for-small-sellers 。
- 知乎：搜索"Shopify 替代""独立站 建站工具 小卖家"下的问题，用同样的内容回答，末尾注明"利益相关：Senvarico 开发者"。
- 不要写"最好""完胜"，不要贬低其他平台。

## 6. 每做完一项，发我什么

| 事项 | 发我 |
|---|---|
| Bing 导入 | 一句"完成"即可 |
| 百度 | CNAME 验证前缀（我可以代加 DNS），以及"完成" |
| gh auth | 一句"完成" |
| 目录登记 | 审核通过后的页面链接 |
| 社区帖 | 发布后的链接 |

我收到链接后会：加到 Organization 的 sameAs、更新 brand-facts.json、推送 IndexNow、并在一周后复查收录。
