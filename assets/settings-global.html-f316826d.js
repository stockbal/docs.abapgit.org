import{_ as l,X as c,Y as d,Z as t,$ as e,a0 as a,a1 as o,a2 as s,H as i}from"./framework-c1ee72d8.js";const h="/img/settings-global-0.png",m="/img/settings-global-1.png",p="/img/settings-global-2.png",g="/img/settings-global-3.png",u={},f=s('<p>Global settings in abapGit are valid system-wide and for all users. You can maintain the settings from the repository list or repository view by selecting &quot;Settings &gt; Global&quot;.</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Note: Global settings are relevant for online projects, only.</p><p><img src="'+m+'" alt="" loading="lazy"><img src="'+p+'" alt="" loading="lazy"></p><h2 id="proxy-settings" tabindex="-1"><a class="header-anchor" href="#proxy-settings" aria-hidden="true">#</a> Proxy Settings</h2><p>If your server is behind a proxy, you can maintain the proxy host and port here. Do not enter any &quot;http://&quot; or &quot;https://&quot; prefix for the proxy host. Just enter the host name or its IP address.</p><p>If your proxy requires you to login, set the proxy authentication flag. Then abapGit will prompt you for your proxy user and password, when an online connection is required.</p><p>In case the proxy should not be used for all repositories, exceptions can be maintained. Enter each exception on a separate line. Patterns are allowed, for example &quot;<em>.sap.internal</em>&quot;.</p><h2 id="commit-message-settings" tabindex="-1"><a class="header-anchor" href="#commit-message-settings" aria-hidden="true">#</a> Commit Message Settings</h2>',9),b={href:"https://www.midori-global.com/blog/2018/04/02/git-50-72-rule",target:"_blank",rel:"noopener noreferrer"},y=t("p",null,"You can also maintain a default for the comment. Variables $OBJECT and $FILE will be replaced by the number of objects or files contained in the commit.",-1),_=t("h2",{id:"development-internal-settings",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#development-internal-settings","aria-hidden":"true"},"#"),e(" Development Internal Settings")],-1),x=s('<figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="enable-critical-unit-tests" tabindex="-1"><a class="header-anchor" href="#enable-critical-unit-tests" aria-hidden="true">#</a> Enable Critical Unit Tests</h3><p>The developer version of abapGit might contain unit tests that impact system settings (like creating/deleting test objects). By default, these test are disabled.</p><h3 id="enable-experimental-features" tabindex="-1"><a class="header-anchor" href="#enable-experimental-features" aria-hidden="true">#</a> Enable Experimental Features</h3><p>There might be features that are not completely implemented or tested yet but already included in the developer version. By default, these features are disabled.</p>',5);function v(w,q){const r=i("ExternalLinkIcon"),n=i("RouterLink");return c(),d("div",null,[f,t("p",null,[e('Each commit to an online repository requires a commit message. The corresponding settings define the maximum length for the comment (message header) and body. Defaults are set to 50/72 according to the "'),t("a",b,[e("Rule of Well Formed Git Commit Messages"),a(r)]),e('".')]),y,t("p",null,[e("By default, the "),a(n,{to:"/user-guide/projects/online/stage-commit.html#commit"},{default:o(()=>[e("commit page")]),_:1}),e(' contains fields for "Author Name" and "Author Email" which you can enter in case they are different from the committer. If the author is always the same as the committer, these fields are not required and you can use the "Hide Author Fields" option to remove them from on the commit page.')]),_,t("p",null,[e("Note: These settings are only available when using the "),a(n,{to:"/user-guide/getting-started/install.html#install-developer-version"},{default:o(()=>[e("Development Version")]),_:1}),e(" of abapGit.")]),x])}const G=l(u,[["render",v],["__file","settings-global.html.vue"]]);export{G as default};
