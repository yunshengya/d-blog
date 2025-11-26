import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-1c49d7d2.js";const i={},p=e(`<h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h2><hr><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span>                            root</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>                <span class="token number">1</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">worker_connections</span>            <span class="token number">10240</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">log_format</span>                    <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &#39;</span> <span class="token string">&#39;&quot;<span class="token variable">$request</span>&quot; <span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &#39;</span> <span class="token string">&#39;&quot;<span class="token variable">$http_referer</span>&quot; &quot;<span class="token variable">$http_user_agent</span>&quot;&#39;</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">include</span>                       mime.types</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">default_type</span>                  application/octet-stream</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">sendfile</span>                      <span class="token boolean">on</span></span><span class="token punctuation">;</span>
  <span class="token comment">#autoindex                    on;</span>
  <span class="token comment">#autoindex_exact_size         off;</span>
  <span class="token directive"><span class="token keyword">autoindex_localtime</span>           <span class="token boolean">on</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">keepalive_timeout</span>             <span class="token number">65</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">gzip</span>                          <span class="token boolean">on</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">gzip_disable</span>                  <span class="token string">&quot;msie6&quot;</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">gzip_min_length</span>               <span class="token number">100</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">gzip_buffers</span>                  <span class="token number">4</span> <span class="token number">16k</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">gzip_comp_level</span>               <span class="token number">1</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">gzip_types</span>                  text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">gzip_types</span>                    <span class="token string">&quot;*&quot;</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">gzip_vary</span>                     <span class="token boolean">off</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_tokens</span>                 <span class="token boolean">off</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">client_max_body_size</span>          <span class="token number">200m</span></span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>                      <span class="token number">80</span> default_server</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>                 _</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">return</span>                      <span class="token number">403</span> /www/403/index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">include</span>                       ../serve/*.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="隐藏-nginx-版本信息" tabindex="-1"><a class="header-anchor" href="#隐藏-nginx-版本信息" aria-hidden="true">#</a> 隐藏 Nginx 版本信息</h2><hr><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server_tokens</span>         <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="禁止-ip-直接访问-80-端口" tabindex="-1"><a class="header-anchor" href="#禁止-ip-直接访问-80-端口" aria-hidden="true">#</a> 禁止 ip 直接访问 80 端口</h2><hr><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>                <span class="token number">80</span> default</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>           _</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">return</span>                <span class="token number">500</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动-web-服务-vue-项目为例" tabindex="-1"><a class="header-anchor" href="#启动-web-服务-vue-项目为例" aria-hidden="true">#</a> 启动 web 服务 (vue 项目为例)</h2><hr><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token comment"># 项目启动端口</span>
  <span class="token directive"><span class="token keyword">listen</span>            <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token comment"># 域名（localhost）</span>
  <span class="token directive"><span class="token keyword">server_name</span>       _</span><span class="token punctuation">;</span>
  <span class="token comment"># 禁止 iframe 嵌套</span>
  <span class="token directive"><span class="token keyword">add_header</span>        X-Frame-Options SAMEORIGIN</span><span class="token punctuation">;</span>

  <span class="token comment"># 访问地址 根路径配置</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token comment"># 项目目录</span>
    <span class="token directive"><span class="token keyword">root</span> 	    html</span><span class="token punctuation">;</span>
    <span class="token comment"># 默认读取文件</span>
    <span class="token directive"><span class="token keyword">index</span>           index.html</span><span class="token punctuation">;</span>
    <span class="token comment"># 配置 history 模式的刷新空白</span>
    <span class="token directive"><span class="token keyword">try_files</span>       <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 后缀匹配，解决静态资源找不到问题</span>
  <span class="token directive"><span class="token keyword">location</span> ~* \\.(gif|jpg|jpeg|png|css|js|ico)$</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>           html/static/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 图片防盗链</span>
  <span class="token directive"><span class="token keyword">location</span> ~/static/.*\\.(jpg|jpeg|png|gif|webp)$</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>              html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">valid_referers</span>    *.deeruby.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$invalid_referer</span>)</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">return</span>          <span class="token number">403</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 访问限制</span>
  <span class="token directive"><span class="token keyword">location</span> /static</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>               html</span><span class="token punctuation">;</span>
    <span class="token comment"># allow 允许</span>
    <span class="token directive"><span class="token keyword">allow</span>              39.xxx.xxx.xxx</span><span class="token punctuation">;</span>
    <span class="token comment"># deny  拒绝</span>
    <span class="token directive"><span class="token keyword">deny</span>               all</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pc-端和移动端使用不同的项目文件映射" tabindex="-1"><a class="header-anchor" href="#pc-端和移动端使用不同的项目文件映射" aria-hidden="true">#</a> PC 端和移动端使用不同的项目文件映射</h2><hr><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  ......
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /home/static/pc</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_user_agent</span> ~* <span class="token string">&#39;(mobile|android|iphone|ipad|phone)&#39;</span>)</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">root</span> /home/static/mobile</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一个-web-服务-配置多个项目-location-匹配路由区别" tabindex="-1"><a class="header-anchor" href="#一个-web-服务-配置多个项目-location-匹配路由区别" aria-hidden="true">#</a> 一个 web 服务，配置多个项目 (location 匹配路由区别)</h2><hr><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>                <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>           _</span><span class="token punctuation">;</span>

  <span class="token comment"># 主应用</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>          html/main</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>               index.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">try_files</span>           <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 子应用一</span>
  <span class="token directive"><span class="token keyword">location</span> ^~ /store/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>          http://localhost:8001</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_redirect</span>      <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>    Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>    X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>    X-Forwarded-For
    proxy_set_header    X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 子应用二</span>
  <span class="token directive"><span class="token keyword">location</span> ^~ /school/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>          http://localhost:8002</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_redirect</span>      <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>    Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>    X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>    X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 静态资源读取不到问题处理</span>
  <span class="token directive"><span class="token keyword">rewrite</span> ^/api/profile/(.*)$ /(替换成正确路径的文件的上一层目录)/<span class="token variable">$1</span> last</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 子应用一服务</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>                <span class="token number">8001</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>           _</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>          html/store</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>               index.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">try_files</span>           <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> ^~ /store/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span>               html/store/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>               index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">try_files</span>           <span class="token variable">$uri</span> /store/index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 接口代理</span>
  <span class="token directive"><span class="token keyword">location</span>  /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>          http://localhost:8089</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 子应用二服务</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>                <span class="token number">8002</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>           _</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>          html/school</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>               index.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">try_files</span>           <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> ^~ /school/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span>               html/school/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>               index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">try_files</span>           <span class="token variable">$uri</span> /school/index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 接口代理</span>
  <span class="token directive"><span class="token keyword">location</span>  /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>          http://localhost:10010</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置负载均衡" tabindex="-1"><a class="header-anchor" href="#配置负载均衡" aria-hidden="true">#</a> 配置负载均衡</h2><hr><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> my_upstream</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span>                http://localhost:9001</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server</span>                http://localhost:9002</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server</span>                http://localhost:9003</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>                <span class="token number">9000</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>           test.com</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>          my_upstream</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>    Host <span class="token variable">$proxy_host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>    X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>    X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssl-配置-https" tabindex="-1"><a class="header-anchor" href="#ssl-配置-https" aria-hidden="true">#</a> SSL 配置 HTTPS</h2><hr><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>                      <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>                 www.xxx.com</span><span class="token punctuation">;</span>
  <span class="token comment"># 将 http 重定向转移到 https</span>
  <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://<span class="token variable">$server_name</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>                      <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>                 www.xxx.com</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_certificate</span>             /etc/nginx/ssl/www.xxx.com.pem</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_certificate_key</span>         /etc/nginx/ssl/www.xxx.com.key</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_session_timeout</span>         <span class="token number">10m</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_ciphers</span>                 ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_protocols</span>               TLSv1 TLSv1.1 TLSv1.2</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span>   <span class="token boolean">on</span></span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>                    /project/xxx</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>                   index.html index.htm index.md</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">try_files</span>               <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),t=[p];function c(l,o){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","1.html.vue"]]);export{u as default};
