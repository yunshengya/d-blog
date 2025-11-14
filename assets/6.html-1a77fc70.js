import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,e as n}from"./app-10308fce.js";const d={},t=n(`<h2 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h2><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>项目初始化之后会生成一个.git 文件，如果看不见，那就是电脑隐藏了以.开头的文件</p></div><h2 id="项目关联" tabindex="-1"><a class="header-anchor" href="#项目关联" aria-hidden="true">#</a> 项目关联</h2><hr><h3 id="克隆项目" tabindex="-1"><a class="header-anchor" href="#克隆项目" aria-hidden="true">#</a> 克隆项目</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone &lt;项目地址&gt;
git clone -branch [tags标签] &lt;项目地址&gt;	或	git clone -b [tags标签] [项目地址]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>表示从远程仓库拉取项目到本地</p><h3 id="本地项目关联远程仓库" tabindex="-1"><a class="header-anchor" href="#本地项目关联远程仓库" aria-hidden="true">#</a> 本地项目关联远程仓库</h3><hr><p>如果我们本地是有项目的，我们想要的是将本地项目和远程仓库关联起来，那么有如下两种情况</p><ul><li>本地已有文件与 Git 仓库关联起来(空仓库)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
git remote add origin &lt;项目地址&gt;
git add .	//记得点(.)是要空格隔开
git commit -m &quot;&lt;提交的信息记录&gt;&quot;
git push --set-upstream origin master 或 git push -u origin master
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>非空仓库的情况:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
git remote add origin xxxx
git add .
git commit -m &#39;init&#39;
git pull origin master --allow-unrelated-histories
//若有冲突,先解决冲突
git push --set-upstream origin master
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出来这两种情况只有在第 5 步的时候才是有区别的.</p><div class="hint-container danger"><p class="hint-container-title">在上面的 commit 到本地仓库后,如果直接推送,它会报错:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>refusing to merge unrelated histories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>意思就是拒绝合并没有历史关系的分支,我们用下面的代码解决这个问题</p></div><div class="hint-container tip"><p class="hint-container-title">然后添加下面这行代码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull origin master --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们允许拉取没有历史关系的分支,这步也就是我们代码的第 5 步</p></div><h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h2><hr><h3 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch //查看本地分支
git branch -r //查看远程分支
git branch -a //查看本地+远程分支
git branch -v //分支最后一次提交的信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch &lt;BranchName&gt; //创建新分支
git checkout &lt;BranchName&gt; //切换分支
git checkout -b &lt;BranchName&gt; //创建新分支并切换到分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉去分支" tabindex="-1"><a class="header-anchor" href="#拉去分支" aria-hidden="true">#</a> 拉去分支</h3><hr><p>将远程 Git 仓库里的指定分支拉取到本地(本地不存在的分支)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b &lt;本地分支名&gt; &lt;origin/远程分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -d &lt;BranchName&gt; //删除本地分支
git push origin :&lt;BranchName&gt; //删除远程分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建本地新分支并推送到远程" tabindex="-1"><a class="header-anchor" href="#创建本地新分支并推送到远程" aria-hidden="true">#</a> 创建本地新分支并推送到远程</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -b &lt;BranchName&gt; //创建本地新分支并切换到新分支
git push --set-upstream origin &lt;BranchName&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="暂存" tabindex="-1"><a class="header-anchor" href="#暂存" aria-hidden="true">#</a> 暂存</h3><hr><div class="hint-container tip"><p class="hint-container-title">不想提交当前代码到远程仓库</p><p>有时候,我们想要切换分支,但是又不想将当前分支代码提交到本地或远程仓库,直接切换过去的话代码会被覆盖,这时候我们可以使用暂存功能</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git stash //存
git stash pop //取出暂存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交操作" tabindex="-1"><a class="header-anchor" href="#提交操作" aria-hidden="true">#</a> 提交操作</h2><hr><h3 id="代码提交" tabindex="-1"><a class="header-anchor" href="#代码提交" aria-hidden="true">#</a> 代码提交</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .
git commit -m &quot;&lt;提交的信息记录&gt;&quot;
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交的时候,可以输入 emoji 表情,可爱又有趣,别人一眼看过来就知道你提交的是关于什么</p><p>🐛 //修复 BUG 💄 //更新样式 🔒 //解决安全问题 ♻️ //重构 ✨ //添加新功能</p><h3 id="提交历史" tabindex="-1"><a class="header-anchor" href="#提交历史" aria-hidden="true">#</a> 提交历史</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log
git log -3 //显示最近3次的更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地代码回滚" tabindex="-1"><a class="header-anchor" href="#本地代码回滚" aria-hidden="true">#</a> 本地代码回滚</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --hard commit-id //回滚到commit-id
git reset --hard HEAD~3 //将最近三次的提交回滚
git reset --hard HEAD^ //将本地代码回退到上一个版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标签功能" tabindex="-1"><a class="header-anchor" href="#标签功能" aria-hidden="true">#</a> 标签功能</h3><hr><p>有时候,我们的项目上线了,我们就需要标签功能,记录我们的版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git tag //显示已有的标签
git tag &lt;v1.0.1&gt; //创建一个轻量级标签
git tag -a &lt;v1.0.2&gt; -m ‘&lt;release version&gt;’ //创建一个带有标注的标签
git tag -d &lt;tag_name&gt; //删除标签
git push //并不会把tag标签传送到远端服务器上,只有通过显式命令才能分享标签到远端仓库
git push origin &lt;tag_name&gt; //push单个tag
git push origin --tags //推送所有本地新增的标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><hr><h3 id="config-配置" tabindex="-1"><a class="header-anchor" href="#config-配置" aria-hidden="true">#</a> config 配置</h3><hr><p>最后我们来说一下 config 配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name  //查看全局配置的用户名
git config --global user.email  //查看全局配置的邮箱
git config --global user.name &#39;zhangsha&#39;  //配置全局的用户名
git config --global user.email &#39;xx@xx.com&#39;  //配置全局的邮箱
//下面是针对单独的项目进行配置和查看
git config user.name &#39;lisi&#39;  //配置当前项目的用户名
git config user.name  //查看当前项目的用户名
git config --list  //查看多个配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>配置分为全局配置和项目配置,没有对项目进行单独配置的时候,会默认使用全局的配置.如果我们在一个项目中进行了单独的配置,那么就会使用项目中配置.这个选项在你切换不同项目(比如公司和个人项目)的时候,可以起到一定的作用.</p></blockquote>`,66),s=[t];function r(l,c){return i(),a("div",null,s)}const v=e(d,[["render",r],["__file","6.html.vue"]]);export{v as default};
