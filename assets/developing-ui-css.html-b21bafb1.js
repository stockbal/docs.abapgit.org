import{_ as c,X as p,Y as r,Z as e,$ as n,a0 as s,a1 as i,a2 as a,H as l}from"./framework-c1ee72d8.js";const d="/img/w3mimepoller-1.png",u="/img/w3mimepoller-2.png",m="/img/w3mimepoller-3.png",h={},g=e("h2",{id:"tl-dr",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tl-dr","aria-hidden":"true"},"#"),n(" TL;DR")],-1),k=e("li",null,[n("If you add an asset - code it in "),e("code",null,"ZCL_ABAPGIT_UI_FACTORY=>INIT_ASSET_MANAGER")],-1),b=e("li",null,[n("There are 3 main CSS sheets to mind: "),e("code",null,"ag-icons.css"),n(" with icon definitions, "),e("code",null,"common.css"),n(" with layouts (don't use for colors!), and "),e("code",null,"theme-default.css"),n(" for colors")],-1),v=e("li",null,'Custom themes ("Dark" and "Belize") are combined with "Default" so that missing attributes are inherited from the default one',-1),_=e("li",null,"abapGit uses internal CSS preprocessing to support CSS variables (which are otherwise not supported by IE - undercover browser of SAP GUI)",-1),f={href:"https://github.com/sbcgua/abap_w3mi_poller",target:"_blank",rel:"noopener noreferrer"},S=a(`<h2 id="asset-manager" tabindex="-1"><a class="header-anchor" href="#asset-manager" aria-hidden="true">#</a> Asset Manager</h2><p><code>ZCL_ABAPGIT_GUI_ASSET_MANAGER</code> class is responsible for managing static assets. Very briefly: relevant assets must be registered in the asset manager instance during GUI initiation so that they can be used in the browser UI. The registration happens in <code>ZCL_ABAPGIT_UI_FACTORY=&gt;INIT_ASSET_MANAGER</code>. Here is an abstract from the method for example:</p><div class="language-abap line-numbers-mode" data-ext="abap"><pre class="language-abap"><code><span class="token keyword">DEFINE</span> _inline<span class="token punctuation">.</span>
    <span class="token keyword">APPEND</span> &amp;<span class="token number">1</span> <span class="token keyword">TO</span> lt_inline<span class="token punctuation">.</span> <span class="token eol-comment comment">&quot; &lt;&lt;&lt; THIS IS USED TO INCLUDE ASSET IN-CODE WITH ABAPMERGE</span>
<span class="token keyword">END-OF-DEFINITION</span><span class="token punctuation">.</span>

<span class="token keyword">DATA</span> lt_inline <span class="token keyword">TYPE</span> string_table<span class="token punctuation">.</span>

<span class="token keyword">CLEAR</span> lt_inline<span class="token punctuation">.</span>
<span class="token eol-comment comment">&quot; @@abapmerge include zabapgit_css_common.w3mi.data.css &gt; _inline </span><span class="token string">&#39;$$&#39;</span><span class="token punctuation">.</span>
ro_asset_man<span class="token token-operator punctuation">-&gt;</span>register_asset<span class="token punctuation">(</span>
    iv_url       <span class="token operator">=</span> <span class="token string">&#39;css/common.css&#39;</span>         <span class="token eol-comment comment">&quot; &lt;&lt;&lt; PATH TO THE ASSET FROM HTML, WHICH IS ALSO IT&#39;S UNIQUE NAME</span>
    iv_type      <span class="token operator">=</span> <span class="token string">&#39;text/css&#39;</span>               <span class="token eol-comment comment">&quot; &lt;&lt;&lt; CONTENT TYPE OF THE ASSET</span>
    iv_mime_name <span class="token operator">=</span> <span class="token string">&#39;ZABAPGIT_CSS_COMMON&#39;</span>    <span class="token eol-comment comment">&quot; &lt;&lt;&lt; MIME OBJECT NAME</span>
    iv_inline    <span class="token operator">=</span> concat_lines_of<span class="token punctuation">(</span> <span class="token keyword">table</span> <span class="token operator">=</span> lt_inline sep <span class="token operator">=</span> cl_abap_char_utilities<span class="token token-operator punctuation">=&gt;</span>newline <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">.</span>

<span class="token keyword">CLEAR</span> lt_inline<span class="token punctuation">.</span>
<span class="token eol-comment comment">&quot; @@abapmerge include-base64 zabapgit_icon_font.w3mi.data.woff &gt; _inline </span><span class="token string">&#39;$$&#39;</span><span class="token punctuation">.</span> <span class="token eol-comment comment">&quot; &lt;&lt;&lt; THE FILE BINARY !!!</span>
ro_asset_man<span class="token token-operator punctuation">-&gt;</span>register_asset<span class="token punctuation">(</span>
    iv_url       <span class="token operator">=</span> <span class="token string">&#39;font/ag-icons.woff&#39;</span>
    iv_type      <span class="token operator">=</span> <span class="token string">&#39;font/woff&#39;</span>
    iv_mime_name <span class="token operator">=</span> <span class="token string">&#39;ZABAPGIT_ICON_FONT&#39;</span>
    iv_base64    <span class="token operator">=</span> concat_lines_of<span class="token punctuation">(</span> <span class="token keyword">table</span> <span class="token operator">=</span> lt_inline <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">.</span>

<span class="token eol-comment comment">&quot; see https://github.com/abapGit/abapGit/issues/201 for source SVG</span>
ro_asset_man<span class="token token-operator punctuation">-&gt;</span>register_asset<span class="token punctuation">(</span>
    iv_url       <span class="token operator">=</span> <span class="token string">&#39;img/logo&#39;</span>
    iv_type      <span class="token operator">=</span> <span class="token string">&#39;image/png&#39;</span>
    iv_base64    <span class="token operator">=</span>
        <span class="token string">&#39;iVBORw0KGgoAAAANSUhENCSVQICAgIfAhkiAAA...&#39;</span><span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are several ways to store the content of a static asset in abapGit.</p><ol><li>Pass the asset inline. e.g. the logo at the end is a PNG image. It is encoded as BASE64 and passed as <code>iv_base64</code> param</li><li>Inline can be also a text then should be passed with <code>iv_inline</code></li><li>Read from a MIME object - if inline is not passed, the asset falls back to the MIME</li></ol><h3 id="compiling-standalone-version-of-abapgit-abapmerge" tabindex="-1"><a class="header-anchor" href="#compiling-standalone-version-of-abapgit-abapmerge" aria-hidden="true">#</a> Compiling Standalone Version of abapGit (abapmerge)</h3><p>The tricky thing is that abapGit can be either installed as a development version, deploying all the MIME objects in particular <strong>or</strong> as a single program (standalone version). This program must contain all the assets (images, CSS, JavaScript, and fonts) <strong>in-code</strong>. This is enabled by <strong>abapmerge</strong> tool. Consider the <code>css/common.css</code> registration above.</p><ul><li>First, <code>lt_inline</code> is cleared. And in the development version of abapGit, it is then just passed to <code>register_asset</code> being initial. The asset manager thus falls back to <code>ZABAPGIT_CSS_COMMON</code> MIME object (which is conveniently deployed with the developer version).</li><li>In case of the standalone version of abapGit, there is no MIME object. However, <code>@@abapmerge include</code> statement is processed by abapmerge and the file <code>zabapgit_css_common.w3mi.data.css</code> is included to the code line by line in form of <code>_inline &#39;$$&#39;</code>, where <code>$$</code> is the text file line. Thus, at the moment of <code>register_asset</code> the content of <code>lt_inline</code> is <strong>not</strong> initial and takes the priority over the missing MIME.</li></ul><p>Note: for the binary files, like fonts, use <code>@@abapmerge include-base64</code> pragma.</p><h2 id="css-structure-and-themes" tabindex="-1"><a class="header-anchor" href="#css-structure-and-themes" aria-hidden="true">#</a> CSS Structure and Themes</h2><p>abapGit uses several CSS sheets to style its visual design:</p>`,11),I=e("code",null,"ag-icons.css",-1),A=e("code",null,"ZABAPGIT_ICON_FONT_CSS",-1),y=a("<li><code>common.css</code> (<code>ZABAPGIT_CSS_COMMON</code>) - main CSS sheet which defines the layout. <strong>Please don&#39;t define colors in it</strong></li><li><code>theme-default.css</code> (<code>ZABAPGIT_CSS_THEME_DEFAULT</code>) - default color scheme</li><li><code>theme-belize-blue.css</code> and <code>theme-dark.css</code> ( <code>ZABAPGIT_CSS_THEME_BELIZE_BLUE</code> and <code>ZABAPGIT_CSS_THEME_DARK</code> ) - custom color schemes.</li>",3),T=a(`<p>A regular page loads: icons, common, default theme, and optionally, one of the custom themes. So the resulting style is defined by a combination of them. <strong>Importantly</strong> custom themes take the default one as the basis, so colors and variables <strong>not</strong> defined explicitly in the theme will be taken from the default one.</p><h3 id="css-variables-support" tabindex="-1"><a class="header-anchor" href="#css-variables-support" aria-hidden="true">#</a> CSS Variables Support</h3><p>Internet explorer - which is the undercover browser component of SAP GUI - does not support CSS variables which are quite useful, for example, color definitions. However, abapGit preprocesses <code>theme-*</code> files, detecting the variables and applying them explicitly to other attributes and classes.</p><p>Internally this is done by a combination of <code>ZCL_ABAPGIT_GUI_HTML_PROCESSOR</code> and <code>ZCL_ABAPGIT_GUI_CSS_PROCESSOR</code>. The first one detects CSS links in the HTML head, the second one merges them into <code>bundle.css</code> which is then re-linked from the HTML head instead of <code>theme-*</code>.</p><p><strong>Debugging note</strong>: the links to the replaced CSS files remain in the HTML head, they are just commented out. So if you what to edit UI files locally, just uncomment them and comment out the <code>bundle.css</code> link.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css/common.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css/ag-icons.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- by AG HTML preprocessor &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;css/theme-default.css&quot;&gt;--&gt;</span>
    <span class="token comment">&lt;!-- UNCOMMENT THIS ^^^^^^^^^^^^^^^^^^ --&gt;</span>
    <span class="token comment">&lt;!-- by AG HTML preprocessor --&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css/bundle.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- COMMENT THIS ^^^^^^^^^^^^^^^^^^ --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recommended-asset-development-flow" tabindex="-1"><a class="header-anchor" href="#recommended-asset-development-flow" aria-hidden="true">#</a> Recommended Asset Development Flow</h2>`,7),E={href:"https://github.com/sbcgua/abap_w3mi_poller",target:"_blank",rel:"noopener noreferrer"},w=a('<figure><img src="'+d+'" alt="sel.screen" tabindex="0" loading="lazy"><figcaption>sel.screen</figcaption></figure><p>In the selection screen, you define one or several pairs MIME-to-File. You can also save them as variants. Choose the right option at the bottom:</p><ul><li>Just start polling - just start the detection of changes</li><li>Download before polling - take existing MIME object and overwrite the files - useful for initial setup or after remote AG changes</li><li>Upload before polling - overwrites MIME object with existing files</li></ul><p>Just a handy recommendation: if you save a variant, save it with &quot;just start polling&quot;, not to overwrite something occasionally.</p><p>Run the program. After the initial action (if chosen) it will start monitoring file changes - leave it running. Eventually, after a file was modified, it will report the upload on the screen.</p><figure><img src="'+u+'" alt="result" tabindex="0" loading="lazy"><figcaption>result</figcaption></figure><p>The latest version of the w3mipoller has also an option to track <strong>all</strong> W3MI files in the package (and its sub-packages) at once. This can be convenient in case of simultaneous multiple file editing. Briefly:</p>',7),M=e("li",null,[n("choose the "),e("code",null,"$ABAPGIT"),n(" package")],-1),C=e("li",null,"choose the root directory to save files to",-1),q=e("li",null,'optionally enter regex for file names (e.g. ".*css$" if you intend to edit css file only)',-1),G=e("li",null,[n('optionally select "Sort by ..." flag to split files by sub-directories by extension (since abapgit html pages refer to '),e("code",null,"css/.."),n(" and "),e("code",null,"js/.."),n(" URIs is may be helpful)")],-1),N={href:"https://github.com/sbcgua/abap_w3mi_poller",target:"_blank",rel:"noopener noreferrer"},x=e("figure",null,[e("img",{src:m,alt:"whole project",tabindex:"0",loading:"lazy"}),e("figcaption",null,"whole project")],-1);function O(L,P){const o=l("RouterLink"),t=l("ExternalLinkIcon");return p(),r("div",null,[e("p",null,[n("This documentation covers asset management, CSS processing, and recommended asset development flow. See also the "),s(o,{to:"/development-guide/user-interface/developing-ui.html"},{default:i(()=>[n("UI - HTML Pages")]),_:1}),n(".")]),g,e("ul",null,[k,b,v,_,e("li",null,[n("A convenient way for changing and uploading CSS and other assets is "),e("a",f,[n("W3MIPOLLER"),s(t)])])]),S,e("ul",null,[e("li",null,[I,n(" ("),A,n(") - defines the icons. See "),s(o,{to:"/development-guide/user-interface/adding-icons.html"},{default:i(()=>[n("Adding Icons")]),_:1}),n(" for details")]),y]),T,e("p",null,[n("To edit CSS files you have to download them to the frontend, edit, debug in IE or Chrome Devtools, and upload them back. Doing so via SMW0 may be inconvenient for multiple assets (main CSS + themes + js). One of the solutions is to use "),e("a",E,[n("W3MIPOLLER"),s(t)]),n(". The idea of the tool is to define a connection between a MIME asset and a frontend file and then monitor file changes - as soon as you save the file, the poller detects it and automatically uploads it to the MIME storage.")]),w,e("ul",null,[M,C,q,G,e("li",null,[n("see more in "),e("a",N,[n("project readme"),s(t)])])]),x])}const H=c(h,[["render",O],["__file","developing-ui-css.html.vue"]]);export{H as default};
