import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-1c49d7d2.js";const p={},t=e(`<p>本文将介绍大量的 JavaScript 速记优化技巧，这些技巧可以帮助大家编写更好的代码。</p><h2 id="_1-多个字符串检查" tabindex="-1"><a class="header-anchor" href="#_1-多个字符串检查" aria-hidden="true">#</a> 1. 多个字符串检查</h2><hr><p>通常，如果我们需要检查字符串是否等于多个值中的一个，往往很快会觉得疲惫不堪。幸运的是，JavaScript 有一个内置的方法来帮助你解决这个问题。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 普通写法</span>
<span class="token keyword">const</span> <span class="token function-variable function">isVowel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">letter</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    letter <span class="token operator">===</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">||</span>
    letter <span class="token operator">===</span> <span class="token string">&quot;e&quot;</span> <span class="token operator">||</span>
    letter <span class="token operator">===</span> <span class="token string">&quot;i&quot;</span> <span class="token operator">||</span>
    letter <span class="token operator">===</span> <span class="token string">&quot;o&quot;</span> <span class="token operator">||</span>
    letter <span class="token operator">===</span> <span class="token string">&quot;u&quot;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 简写方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">isVowel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">letter</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;o&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;u&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>letter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-for-of-和-for-in-循环" tabindex="-1"><a class="header-anchor" href="#_2-for-of-和-for-in-循环" aria-hidden="true">#</a> 2. For-of 和 For-in 循环</h2><hr><p><code>For-of</code>和<code>For-in</code>循环是迭代<code>array</code>或<code>object</code>的好方法，因为无需手动跟踪<code>object</code>键的索引。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>For<span class="token operator">-</span><span class="token keyword">of</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 普通写法</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简写方法</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> element <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
For<span class="token operator">-</span><span class="token keyword">in</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 普通写法</span>
<span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简写方法</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-falsey-假值-检查" tabindex="-1"><a class="header-anchor" href="#_3-falsey-假值-检查" aria-hidden="true">#</a> 3. Falsey（假值）检查</h2><hr><p>如果要检查变量是<code>null</code>、<code>undefined</code>、<code>0</code>、<code>false</code>、<code>NaN</code>还是空<code>string</code>，可以使用逻辑非 (<code>!</code>)运算符一次检查所有变量，而无需编写多个条件。这使得检查变量是否包含有效数据变得相对容易多了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 普通写法</span>
<span class="token keyword">const</span> <span class="token function-variable function">isFalsey</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    value <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span>
    value <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span>
    value <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span>
    value <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">||</span>
    value <span class="token operator">===</span> <span class="token number">NaN</span> <span class="token operator">||</span>
    value <span class="token operator">===</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 简写方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">isFalsey</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-三元运算符" tabindex="-1"><a class="header-anchor" href="#_4-三元运算符" aria-hidden="true">#</a> 4. 三元运算符</h2><hr><p>作为 JavaScript 开发人员，你一定遇到过三元运算符。这是编写简洁<code>if-else</code>语句的好方法。但是，也可用来编写简洁的代码，甚至将它们链接起来来检查多个条件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 普通写法</span>
<span class="token keyword">let</span> info<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> minValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  info <span class="token operator">=</span> <span class="token string">&quot;Value is too small&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;</span> maxValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  info <span class="token operator">=</span> <span class="token string">&quot;Value is too large&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  info <span class="token operator">=</span> <span class="token string">&quot;Value is in range&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简写方法</span>
<span class="token keyword">const</span> info <span class="token operator">=</span>
  value <span class="token operator">&lt;</span> minValue
    <span class="token operator">?</span> <span class="token string">&quot;Value is too small&quot;</span>
    <span class="token operator">:</span> value <span class="token operator">&gt;</span> maxValue
    <span class="token operator">?</span> <span class="token string">&quot;Value is too large&quot;</span>
    <span class="token operator">:</span> <span class="token string">&quot;Value is in range&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-函数调用" tabindex="-1"><a class="header-anchor" href="#_5-函数调用" aria-hidden="true">#</a> 5. 函数调用</h2><hr><p>在三元运算符的帮助下，你还可以根据条件确定要调用哪个函数。</p><blockquote><p>注：函数的<code>call signature</code>必须相同，否则可能会遇到错误。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 普通写法</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简写方法</span>
<span class="token punctuation">(</span>condition <span class="token operator">?</span> f1 <span class="token operator">:</span> f2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-switch-简写" tabindex="-1"><a class="header-anchor" href="#_6-switch-简写" aria-hidden="true">#</a> 6. Switch 简写</h2><hr><p>通常我们可以使用以键作为<code>switch</code>条件并将值作为返回值的对象来优化长<code>switch</code>语句。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> dayNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 普通写法</span>
<span class="token keyword">let</span> day<span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>dayNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
    day <span class="token operator">=</span> <span class="token string">&quot;Sunday&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    day <span class="token operator">=</span> <span class="token string">&quot;Monday&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    day <span class="token operator">=</span> <span class="token string">&quot;Tuesday&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
    day <span class="token operator">=</span> <span class="token string">&quot;Wednesday&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
    day <span class="token operator">=</span> <span class="token string">&quot;Thursday&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
    day <span class="token operator">=</span> <span class="token string">&quot;Friday&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
    day <span class="token operator">=</span> <span class="token string">&quot;Saturday&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简写方法</span>
<span class="token keyword">const</span> days <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&quot;Sunday&quot;</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&quot;Monday&quot;</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&quot;Tuesday&quot;</span><span class="token punctuation">,</span>
  <span class="token number">3</span><span class="token operator">:</span> <span class="token string">&quot;Wednesday&quot;</span><span class="token punctuation">,</span>
  <span class="token number">4</span><span class="token operator">:</span> <span class="token string">&quot;Thursday&quot;</span><span class="token punctuation">,</span>
  <span class="token number">5</span><span class="token operator">:</span> <span class="token string">&quot;Friday&quot;</span><span class="token punctuation">,</span>
  <span class="token number">6</span><span class="token operator">:</span> <span class="token string">&quot;Saturday&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> day <span class="token operator">=</span> days<span class="token punctuation">[</span>dayNumber<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-回退值" tabindex="-1"><a class="header-anchor" href="#_7-回退值" aria-hidden="true">#</a> 7. 回退值</h2><hr><p><code>||</code>运算符可以为变量设置回退值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 普通写法</span>
<span class="token keyword">let</span> name<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token operator">?.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&quot;Anonymous&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简写方法</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> user<span class="token operator">?.</span>name <span class="token operator">||</span> <span class="token string">&quot;Anonymous&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本文完，感谢阅读！</p>`,31),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","2.html.vue"]]);export{d as default};
