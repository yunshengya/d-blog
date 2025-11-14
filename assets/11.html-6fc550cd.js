import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as e,a as n,b as o,d as c,e as i}from"./app-10308fce.js";const l={},u=n("p",null,"作者：JetTsang",-1),r={href:"https://juejin.cn/post/7219961144584552504",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><hr><p>现在面试过程当中 ，手写题必然是少不了的，其中碰到比较多的无非就是当属 请求并发控制 了。现在基本上前端项目都是通过 axios 来实现异步请求的封装，因此这其实是考你对 Promise 以及异步编程的理解了。</p><h2 id="引出" tabindex="-1"><a class="header-anchor" href="#引出" aria-hidden="true">#</a> 引出</h2><hr><p>题目：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 设计一个函数，可以限制请求的并发，同时请求结束之后，调用callback函数</span>
<span class="token comment">// sendRequest(requestList:,limits,callback):void</span>
<span class="token function">sendRequest</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">//并发数</span>

  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 其中request 可以是：</span>
<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> time <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;请求结束：&quot;</span> <span class="token operator">+</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;错误;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> time <span class="token operator">*</span> <span class="token number">1e3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="明确概念" tabindex="-1"><a class="header-anchor" href="#明确概念" aria-hidden="true">#</a> 明确概念</h2><hr><p>⚠️ 这里有几个概念需要明确一下</p><ul><li>并发：并发是多个任务同时交替的执行（因为 cpu 执行指令的速度非常之快，它可以不必按顺序一段代码一段代码的执行，这样效率反而更加低下），这样看起来就是一起执行的，所以叫并发。</li><li>并行：可以理解为多个物理 cpu 或者有分布式系统，是真正的&#39;同时&#39;执行</li><li>并发控制：意思是多个并发的任务，一旦有任务完成，就立刻开启下一个任务</li><li>切片控制：将并发任务切片的分配出来，比如 10 个任务，切成 2 个片，每片有 5 个任务，当前一片的任务执行完毕，再开始下一个片的任务，这样明显效率没并发控制那么高了</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><hr><p>首先执行能执行的并发任务，根据并发的概念，每个任务执行完毕后，捞起下一个要执行的任务。</p><p>将关键步骤拆分出合适的函数来组织代码</p><ol><li>循环去启动能执行的任务</li><li>取出任务并且推到执行器执行</li><li>执行器内更新当前的并发数，并且触发捞起任务</li><li>捞起任务里面可以触发最终的回调函数和调起执行器继续执行任务</li></ol><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><hr><ol><li><p>定义常数和函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sendRequest</span><span class="token punctuation">(</span><span class="token parameter">requestList<span class="token punctuation">,</span> limits<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义执行队列，表示所有待执行的任务</span>
  <span class="token keyword">const</span> promises <span class="token operator">=</span> requestList<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 定义开始时能执行的并发数</span>
  <span class="token keyword">const</span> concurrentNum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>limits<span class="token punctuation">,</span> requestList<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> concurrentCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前并发数</span>
  <span class="token comment">// 启动初次能执行的任务</span>
  <span class="token keyword">const</span> <span class="token function-variable function">runTaskNeeded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> concurrentNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">runTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 取出任务并推送到执行器</span>
  <span class="token keyword">const</span> <span class="token function-variable function">runTask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 执行器，这里去执行任务</span>
  <span class="token keyword">const</span> <span class="token function-variable function">runner</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 捞起下一个任务</span>
  <span class="token keyword">const</span> <span class="token function-variable function">picker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 开始执行！</span>
  <span class="token function">runTaskNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实现对应得函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sendRequest</span><span class="token punctuation">(</span><span class="token parameter">requestList<span class="token punctuation">,</span> limits<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> promises <span class="token operator">=</span> requestList<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取得请求list（浅拷贝一份）</span>

  <span class="token comment">// 得到开始时，能执行的并发数</span>

  <span class="token keyword">const</span> concurrentNum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>limits<span class="token punctuation">,</span> requestList<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> concurrentCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前并发数</span>

  <span class="token comment">// 第一次先跑起可以并发的任务</span>

  <span class="token keyword">const</span> <span class="token function-variable function">runTaskNeeded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 启动当前能执行的任务</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> concurrentNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>

      <span class="token function">runTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 取出任务并且执行任务</span>

  <span class="token keyword">const</span> <span class="token function-variable function">runTask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> task <span class="token operator">=</span> promises<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    task <span class="token operator">&amp;&amp;</span> <span class="token function">runner</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 执行器</span>

  <span class="token comment">// 执行任务，同时更新当前并发数</span>

  <span class="token keyword">const</span> <span class="token function-variable function">runner</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      concurrentCount<span class="token operator">++</span><span class="token punctuation">;</span>

      <span class="token keyword">await</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token comment">// 并发数--</span>

      concurrentCount<span class="token operator">--</span><span class="token punctuation">;</span>

      <span class="token comment">// 捞起下一个任务</span>
      <span class="token function">picker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 捞起下一个任务</span>

  <span class="token keyword">const</span> <span class="token function-variable function">picker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 任务队列里还有任务并且此时还有剩余并发数的时候 执行</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>concurrentCount <span class="token operator">&lt;</span> limits <span class="token operator">&amp;&amp;</span> promises<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 继续执行任务</span>

      <span class="token function">runTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 队列为空的时候，并且请求池清空了，就可以执行最后的回调函数了</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> concurrentCount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 执行结束</span>

      callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 入口执行</span>

  <span class="token function">runTaskNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="另一种实现" tabindex="-1"><a class="header-anchor" href="#另一种实现" aria-hidden="true">#</a> 另一种实现</h2><hr><p>核心代码是判断是当你 【有任务执行完成】 ，再去判断是否有剩余还有任务可执行。可以先维护一个 pool（代表当前执行的任务），利用 await Promise.race 这个 pool，不就知道是否有任务执行完毕了吗？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendRequest</span><span class="token punctuation">(</span><span class="token parameter">requestList<span class="token punctuation">,</span> limits<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 维护一个promise队列</span>

  <span class="token keyword">const</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 当前的并发池,用Set结构方便删除</span>

  <span class="token keyword">const</span> pool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set也是Iterable&lt;any&gt;[]类型，因此可以放入到race里</span>

  <span class="token comment">// 开始并发执行所有的任务</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> request <span class="token keyword">of</span> requestList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 开始执行前，先await 判断 当前的并发任务是否超过限制</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pool<span class="token punctuation">.</span>size <span class="token operator">&gt;=</span> limits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里因为没有try catch ，所以要捕获一下错误，不然影响下面微任务的执行</span>

      <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>pool<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拿到promise</span>

    <span class="token comment">// 删除请求结束后，从pool里面移除</span>

    <span class="token keyword">const</span> <span class="token function-variable function">cb</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      pool<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 注册下then的任务</span>

    promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>cb<span class="token punctuation">,</span> cb<span class="token punctuation">)</span><span class="token punctuation">;</span>

    pool<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">;</span>

    promises<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 等最后一个for await 结束，这里是属于最后一个 await 后面的 微任务</span>

  <span class="token comment">// 注意这里其实是在微任务当中了，当前的promises里面是能确保所有的promise都在其中(前提是await那里命中了if)</span>

  Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结一下要点：</p><ol><li>利用 race 的特性可以找到 并发任务 里最快结束的请求</li><li>利用 for await 可以保证 for 结构体下面的代码是最后 await 后的微任务，而在最后一个微任务下，可以保证所有的 promise 已经存入 promises 里（如果没命中任何一个 await，即限制并发数&gt;任务数的时候，虽然不是在微任务当中，也可以保证所有的 promise 都在里面），最后利用 allSettled，等待所有的 promise 状态转变后，调用回调函数</li><li>并发任务池 用 Set 结构存储，可以通过指针来删除对应的任务，通过闭包引用该指针从而达到 动态控制并发池数目</li><li>for await 结构体里，其实 await 下面，包括结构体外 都是属于微任务（前提是有一个 await 里面的 if 被命中），至于这个微任务什么时候被加入微任务队列，要看请求的那里的在什么时候开始标记（resolve/reject ）</li><li>for await 里其实 已经在此轮宏任务当中并发执行了，await 后面的代码被挂起来，等前一个 promise 转变状态--&gt;移出 pool--&gt;将下一个 promise 捞起加入 pool 当中 --&gt;下一个 await 等待最快的 promise，如此往复。</li></ol><p>可以想象这样一个场景，几组人 在玩百米接力赛，每一组分别在 0m,100m,200m 的地方，有几个赛道每组就有几个人。（注意，这里想象成 每个节点（比如 0m 处） 这几个人是一组），每到下一个节点的人，将棒子交给排队在最前面的下一个人，下一个人就开始跑。</p><h3 id="疑问" tabindex="-1"><a class="header-anchor" href="#疑问" aria-hidden="true">#</a> 疑问</h3><ol><li>Promise.allSettled 和 race 传入的<code>Promise&lt;any&gt;[]</code>可以被其中的触发微任务操作增减，这样做会改变结果吗？</li></ol><h2 id="有什么能拓展的功能呢" tabindex="-1"><a class="header-anchor" href="#有什么能拓展的功能呢" aria-hidden="true">#</a> 有什么能拓展的功能呢？</h2><hr><p>1.想要在执行之后得到返回所需要的结果</p><p>（在第二种方法当中已经实现，第一种方法下可以 通过 增加一个 task-&gt;结果 的 map 来收集，或者对所有的 task 分别包裹一层 Promise，形成一个新的 promiseList，放到 Promise.allSettled 里面，再把 resolve 以 task-&gt;resolve 的方式映射出来，在 runner 里面找到把 Promise 实例通过对应的 resolve 暴露出去）</p><p>2.增加一个参数用来控制请求失败的重试次数</p><h2 id="结尾" tabindex="-1"><a class="header-anchor" href="#结尾" aria-hidden="true">#</a> 结尾</h2><hr><p>这种题目是考验你对异步编程的理解，要想写出来，你需要具备事件循环以及 promise 的知识。</p><p>👏👏 最后，有什么错误欢迎大家指出，多多交流才能变得更强！</p>`,37);function d(v,m){const s=t("ExternalLinkIcon");return p(),e("div",null,[n("blockquote",null,[u,n("p",null,[n("a",r,[o("https://juejin.cn/post/7219961144584552504"),c(s)])])]),k])}const h=a(l,[["render",d],["__file","11.html.vue"]]);export{h as default};
