import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as a,c as t,a as e,b as n,d as l,e as i}from"./app-1c49d7d2.js";const o={},c=i(`<p><code>history</code>模式会出现刷新页面后，页面出现 404。解决的办法是用<code>nginx</code>配置一下。 在<code>nginx</code>的配置文件中修改</p><h1 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一：</h1><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /{
    root   /data/nginx/html;
    index  index.html index.htm;
    if (!-e $request_filename) {
        rewrite ^/(.*) /index.html last;
        break;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二：</h1>`,5),v={href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  server {
        listen       8081;#默认端口是80，如果端口没被占用可以不用修改
        server_name  myapp.com;
        root        D:/vue/my_app/dist;#vue项目的打包后的dist
        location / {
            try_files $uri $uri/ @router;#需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404
            index  index.html index.htm;
        }
        #对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件
        #因此需要rewrite到index.html中，然后交给路由在处理请求资源
        location @router {
            rewrite ^.*$ /index.html last;
        }
        #.......其他部分省略
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两种方案的的本质是一样的，就是 rewrite 一下，将 router 写到 index.html 中，然后交由路由处理资源才可以。</p><p>自己记录一下本方案，方便后续出现问题使用。</p>`,3);function m(h,b){const r=d("ExternalLinkIcon");return a(),t("div",null,[c,e("p",null,[n("vue.js 官方教程里提到的"),e("a",v,[n("https://router.vuejs.org/zh/guide/essentials/history-mode.html"),l(r)])]),u])}const p=s(o,[["render",m],["__file","9.html.vue"]]);export{p as default};
