import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-1c49d7d2.js";const t="/assets/1-405e142c.gif",e="/assets/2-12e6d90e.png",c="/assets/3-e038812e.png",i="/assets/4-d48a9b35.png",o={},l=p('<h2 id="成品效果" tabindex="-1"><a class="header-anchor" href="#成品效果" aria-hidden="true">#</a> 成品效果</h2><hr><p>今天分享一个用 css3 来实现一个最近特别流行的故障风格的文字展示动画，我敢说，只要你在你的项目中用到这个动画，面试官看到了一定会眼前一亮。下面先来看一下成品图：</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>该动画效果就比较复杂了，用到的知识比较多，例如 <strong>「css 伪元素 、元素自定义属性 、蒙版属性 、animation 动画等等」</strong></p><h2 id="标签元素部分" tabindex="-1"><a class="header-anchor" href="#标签元素部分" aria-hidden="true">#</a> 标签元素部分</h2><hr><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>txt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>我是故障风格的文字<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是故障风格的文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们使用了自定义属性，即 <strong>「data-」</strong> 加上我们自定义的属性名，我们将我们的文字内容作为该属性的值，方便之后伪元素获取到对应的文字</p><h2 id="keyframes-部分" tabindex="-1"><a class="header-anchor" href="#keyframes-部分" aria-hidden="true">#</a> @keyframes 部分</h2><hr><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> animation-before</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0 0 0 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">5%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.8em 0 0.4em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">10%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.4em 0 0.8em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">15%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.1em 0 1em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">20%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.3em 0 0.6em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">25%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.6em 0 0.3em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">30%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.8em 0 0.5em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">35%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>1em 0 0.1em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">40%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.7em 0 0.35em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">45%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.5em 0 0.2em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.2em 0 0.5em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">55%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.35em 0 0.7em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">60%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.1em 0 0.9em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">65%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.8em 0 0.46em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">70%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.66em 0 0.33em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">75%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.48em 0 0.23em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">80%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.23em 0 0.48em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">85%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.39em 0 0.79em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">90%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.33em 0 0.66em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">95%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>1em 0 0.3em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.62em 0 0.29em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> animation-after</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0 0 0 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">5%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.4em 0 0.8em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">10%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.8em 0 0.4em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">15%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>1em 0 0.1em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">20%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.6em 0 0.3em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">25%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.3em 0 0.6em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">30%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.5em 0 0.8em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">35%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.1em 0 1em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">40%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.35em 0 0.7em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">45%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.2em 0 0.5em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.5em 0 0.2em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">55%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.7em 0 0.35em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">60%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.9em 0 0.1em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">65%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.46em 0 0.8em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">70%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.3em 0 0.66em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">75%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.23em 0 0.48em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">80%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.48em 0 0.23em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">85%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.79em 0 0.39em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">90%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.66em 0 0.33em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">95%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.3em 0 1em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>0.29em 0 0.62em 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们设置了两个 keyframes，分别为 <strong>「animation-before」</strong> 、<strong>「animation-after」</strong></p><p>想必已经很明显了，前者是准备给我们后面的伪元素 before 使用的 ；后者是给我们后面的伪元素 after 使用的</p><p>那么其中用到的 clip-path 是干什么用的呢？这个是 css3 的一个新属性，叫做「蒙版」，而其中的 inset() 值表示的是蒙版形状为矩形</p><p>我们来看一下它的用法</p><p>首先 inset() 接收四个长度参数，分别表示蒙版距离元素标签的「上侧」、「右侧」、「下侧」 、「左侧」的距离，从而决定了蒙版的大小</p><p>当我们设置为 inset(0 0 0 0)时，表示蒙版作用区域大小跟元素标签一样大，如下图所示（红色边框表示蒙版的作用区域）</p><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时我们的文字是可以完全展示出来的，因为蒙版的作用区域就是我们标签元素的大小</p><p>然后我们再来看一下，如果我们的设置为 inset(30px 0 0 0) ，则测试表示，蒙版的作用区域距离标签元素的上侧 30px，距离其它的边 0px，如图所示</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>图中蓝色边框的部分不是蒙版的作用区域，因此我们无法看到该区域的内容，真实情况如下图所示</p><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在了解了蒙版的使用情况了以后，我们就通过 @keyframes 来设置逐帧动画，使蒙版的作用区域在垂直方向一直变化，实现上下抖动的效果，代码就如上所述</p><h2 id="具体样式" tabindex="-1"><a class="header-anchor" href="#具体样式" aria-hidden="true">#</a> <strong>具体样式</strong></h2><hr><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.txt</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 65px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 4px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.txt::before</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 获取文本 */</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token comment">/* 向左侧移2px */</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token comment">/* 将背景色设为与主背景同样的颜色，用于遮挡我们的标签元素 */</span>
  <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token comment">/* 给before伪元素的文本添加左侧2px大小的红色文字阴影 */</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 2px 0 red<span class="token punctuation">;</span>
  <span class="token comment">/* 应用蒙版垂直变化动画，并一直循环 */</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> animation-before 3s infinite linear alternate-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.txt::after</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 获取文本 */</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token comment">/* 向左侧移2px */</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token comment">/* 将背景色设为与主背景同样的颜色，用于遮挡我们的标签元素 */</span>
  <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token comment">/* 给before伪元素的文本添加右侧2px大小的蓝色文字阴影 */</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> -2px 0 blue<span class="token punctuation">;</span>
  <span class="token comment">/* 应用蒙版垂直变化动画，并一直循环 */</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> animation-after 3s infinite linear alternate-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们设置了两个伪元素 before 和 after，分别定位到跟父元素同样的位置，然后分别向左、右侧移一点点的距离，制作一个错位的效果，然后都将背景色设置为与父元素背景色一样的颜色，用于遮挡父元素。</p><p>然后设置了蒙版垂直变化动画以后，被蒙版遮挡的部分虽然看不到了，但是会露出下面一层的父元素内容，这样就可以实现了一个完美的故障风格的文字展示动画了。</p>`,30),u=[l];function k(r,d){return s(),a("div",null,u)}const b=n(o,[["render",k],["__file","2.html.vue"]]);export{b as default};
