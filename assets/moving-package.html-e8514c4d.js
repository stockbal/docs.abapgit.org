import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as l,a as t,b as i,d as o,w as a,e as g}from"./app-7082fc8a.js";const c="/img/existing_package.png",p="/img/existing_git_before.png",d="/img/existing_clone.png",m="/img/existing_repo.png",u="/img/existing_result.png",_="/img/existing_git_after.png",h={},f=g('<p>You have an existing package in your system that you want to copy to a new git repository:</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Initialize the git repository, make sure it is not emtpy (typically you add README and LICENSE files from a template):</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="new-repository" tabindex="-1"><a class="header-anchor" href="#new-repository" aria-hidden="true">#</a> New Repository</h2><p>In abapGit, create a repository via the &quot;New Online&quot; button:</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>The existing objects will show up in the worklist making it possible to commit the objects to the git repository:</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="stage-and-commit" tabindex="-1"><a class="header-anchor" href="#stage-and-commit" aria-hidden="true">#</a> Stage and Commit</h2>',10),y=t("br",null,null,-1),x=t("p",null,"Now your local abapGit repo and the remote git repository are in sync.",-1),b=t("figure",null,[t("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),w=t("br",null,null,-1),k=t("code",null,"/src/",-1),v=t("figure",null,[t("img",{src:_,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1);function N(z,C){const e=s("RouterLink");return r(),l("div",null,[f,t("p",null,[i('Select "Stage", "Add All and Commit", and finally "Commit" to transfer all changes to your git repository. For details, see'),y,o(e,{to:"/user-guide/projects/online/stage-commit.html"},{default:a(()=>[i("Committing changes to git")]),_:1}),i(".")]),x,b,t("p",null,[i("You can view the updated repository, which will contains a "),o(e,{to:"/user-guide/repo-settings/dot-abapgit.html"},{default:a(()=>[i(".abapgit.xml")]),_:1}),i(" file"),w,i(" and a "),k,i(" folder with all your objects.")]),v])}const j=n(h,[["render",N],["__file","moving-package.html.vue"]]);export{j as default};
