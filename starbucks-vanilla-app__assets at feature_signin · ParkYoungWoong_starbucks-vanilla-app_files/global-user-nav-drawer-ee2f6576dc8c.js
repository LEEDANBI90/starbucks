"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["global-user-nav-drawer"],{69280:(e,t,a)=>{var r=a(72245),n=a(74848),s=a(38621),i=a(16823),o=a(3121),c=a(38553),l=a(30631),d=a(30729),u=a(96540),h=a(92240),m=a(22084),p=a(92979),f=a(75014),y=a(86079),x=a(22868),g=a(5225),j=a(71312),_=a(28784);async function A(e){return e.set("_method","put"),(await (0,_.DI)("/users/status",{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"},body:e})).json()}function v({onClose:e}){let[t,a]=(0,u.useState)(!1),r=(0,u.useRef)(null),i=(0,u.useId)(),o=(0,u.useCallback)(t=>{t.preventDefault(),e(A(new FormData(t.target)))},[e]),l=(0,u.useCallback)(()=>{A(new FormData),e(Promise.resolve({}))},[e]);return(0,u.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("load",t),()=>{e.removeEventListener("load",t)};function t(){a(!0)}},[r]),(0,n.jsx)(y.l,{width:"large",title:"Edit status",onClose:e,footerButtons:[{buttonType:"normal",content:"Clear status",onClick:l},{buttonType:"primary",type:"submit",content:"Set status",form:i,disabled:!t}],children:(0,n.jsx)("form",{id:i,onSubmit:o,className:"user-status-dialog-fragment js-user-status-container",children:(0,n.jsxs)("include-fragment",{src:"/users/status",accept:"text/fragment+html",ref:r,...(0,h.G)("user-status-dialog-include-fragment"),children:[(0,n.jsx)("p",{className:"text-center mt-3","data-hide-on-error":!0,children:(0,n.jsx)(c.A,{})}),(0,n.jsxs)("p",{className:"flash flash-error mb-0 mt-2","data-show-on-error":!0,hidden:!0,children:[(0,n.jsx)(s.AlertIcon,{}),"Sorry, something went wrong and we were not able to fetch the user settings form"]})]})})})}try{v.displayName||(v.displayName="UserStatusDialog")}catch{}let w={emojiIcon:"styles-module__emojiIcon--AXyd_",emojiContainer:"styles-module__emojiContainer--yBvrp"};var S=a(20053);function b(e){let{class:t}=e.attributes,a=(0,S.$)(t,w.emojiIcon),r={...e.attributes};switch(delete r.class,e.tag){case"g-emoji":return(0,u.createElement)(e.tag,{...r,class:a},e.raw);case"img":return(0,n.jsx)("img",{alt:"",src:e.imgPath,...r,className:a})}return(0,n.jsx)(n.Fragment,{})}try{b.displayName||(b.displayName="Emoji")}catch{}var N=a(59572);function I({title:e,error:t,onClose:a}){return(0,n.jsx)(y.l,{onClose:a,title:e,children:(0,n.jsx)(y.l.Body,{children:(0,n.jsxs)(N.A,{children:[(0,n.jsx)(N.A.Visual,{children:(0,n.jsx)(s.AlertIcon,{size:"medium",className:"fgColor-danger"})}),t]})})})}try{I.displayName||(I.displayName="ErrorDialog")}catch{}var P=a(89323),C=a(87330),L=a(47767),E=a(97156);function T({addAccountPath:e,canAddAccount:t,switchAccountPath:a,stashedAccounts:r,loginAccountPath:i,setError:o}){let[c,l]=(0,u.useState)(!1),d=null===r,h=!d&&r.length>0;return(0,n.jsxs)(P.W,{open:c,onOpenChange:l,children:[(0,n.jsx)(P.W.Anchor,{children:(0,n.jsx)(C.K,{icon:s.ArrowSwitchIcon,"aria-label":"Account switcher",variant:"invisible",tooltipDirection:"s"})}),d?(0,n.jsx)(k,{}):h?(0,n.jsx)(O,{stashedAccounts:r,canAddAccount:t,addAccountPath:e,switchAccountPath:a,loginAccountPath:i,setError:o}):(0,n.jsx)(R,{addAccountPath:e})]})}function k(){return(0,n.jsx)(P.W.Overlay,{align:"end",children:(0,n.jsx)(i.l,{children:(0,n.jsxs)(i.l.Item,{children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(c.A,{size:"small"})}),"Loading..."]})})})}function R({addAccountPath:e}){return(0,n.jsx)(P.W.Overlay,{align:"end",children:(0,n.jsx)(i.l,{children:(0,n.jsx)(U,{href:e})})})}function U({href:e,inactive:t}){return(0,n.jsxs)(i.l.LinkItem,{href:e||void 0,inactiveText:t||void 0,children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(s.PersonAddIcon,{})}),"Add account"]})}function O({addAccountPath:e,canAddAccount:t,switchAccountPath:a,stashedAccounts:r,loginAccountPath:o,setError:c}){return(0,n.jsx)(P.W.Overlay,{align:"end",width:"small",children:(0,n.jsxs)(i.l,{children:[(0,n.jsxs)(i.l.Group,{children:[(0,n.jsx)(i.l.GroupHeading,{children:"Switch account"}),r.map(e=>"number"==typeof e.userSessionId?(0,n.jsx)(D,{switchAccountPath:a,account:e,setError:c},e.login):(0,n.jsx)(G,{loginAccountPath:o,account:e},e.login)),(0,n.jsx)(i.l.Divider,{})]}),(0,n.jsx)(U,{href:t?e:void 0,inactive:t?void 0:"Maximum accounts reached"}),(0,n.jsxs)(i.l.LinkItem,{href:"/logout",children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(s.SignOutIcon,{})}),"Sign out..."]})]})})}function D({account:e,switchAccountPath:t,setError:a}){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.l.Item,{onSelect:()=>H(t,e.userSessionId,a),children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(x.r,{src:e.avatarUrl,size:20})}),e.login,(0,n.jsx)(i.l.Description,{children:e.name})]})})}function G({account:e,loginAccountPath:t}){let a=(0,L.zy)(),r=(0,u.useMemo)(()=>{let a=new URL(t,E.fV.toString());return a.searchParams.set("login",e.login),a.searchParams.set("return_to",E.fV.toString()),a.toString()},[t,e.login,a.key]);return(0,n.jsxs)(i.l.LinkItem,{href:r,children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(x.r,{src:e.avatarUrl,size:20,className:"inactive-user-avatar"})}),e.login,(0,n.jsx)(i.l.Description,{children:e.name})]})}async function H(e,t,a){try{let r=new FormData;r.append("user_session_id",String(t)),r.append("from","nav_panel");let n=await (0,_.DI)(e,{method:"POST",body:r,headers:{Accept:"application/json"}});if(n.ok){let e=await n.json();e.success?window.location.reload():"emu_sso_redirect"===e.reason&&e.redirect_to?window.location.href=e.redirect_to:a(M("An error has occurred while switching accounts. Please try again."))}else{let{error:e,reason:t}=await n.json();a(M(e,t))}}catch(e){a(M("An error occurred while switching accounts. Please try again."))}}function M(e,t){return{title:"Switch account",error:"enterprise access denied"===t?(0,n.jsx)(N.A.Description,{children:e}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.A.Heading,{children:"Unable to switch to the selected account."}),(0,n.jsx)(N.A.Description,{children:"Please try again. If the issue persists, try adding the account again."})]})}}try{T.displayName||(T.displayName="AccountSwitcher")}catch{}try{k.displayName||(k.displayName="AccountSwitcherOverlayLoading")}catch{}try{R.displayName||(R.displayName="AccountSwitcherOverlayEmpty")}catch{}try{U.displayName||(U.displayName="AddAccountLinkItem")}catch{}try{O.displayName||(O.displayName="AccountSwitcherOverlayHasAccounts")}catch{}try{D.displayName||(D.displayName="StashedAccountItem")}catch{}try{G.displayName||(G.displayName="InactiveStashedAccountItem")}catch{}var F=a(22629);let z=(0,g.A)(async function(e){let t=await fetch(e);if(!t.ok)throw Error(`Failed to fetch data from ${e}`);return t.json()}),Y={fetchError:!0,userStatus:{},hasUnseenFeatures:!1,stashedAccounts:[]};function V({href:e,icon:t,analyticsCategory:a="Global navigation",analyticsAction:r,analyticsLabel:s,children:o}){let{sendClickAnalyticsEvent:c}=(0,j.S)(),l=(0,u.useCallback)(()=>{c({category:a,action:r,label:s})},[c,a,r,s]);return(0,n.jsxs)(i.l.LinkItem,{href:e,onClick:l,children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(d.A,{icon:t})}),o]})}let B=(0,u.memo)(function({lazyLoadItemData:e,onClick:t}){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.l.Item,{...(0,h.G)("global-user-nav-set-status-item"),onSelect:t,children:[(0,n.jsx)(i.l.LeadingVisual,{children:e?.userStatus?.emojiAttributes?(0,n.jsx)(b,{...e?.userStatus.emojiAttributes}):(0,n.jsx)(d.A,{icon:s.SmileyIcon})}),e?(0,n.jsx)(m.oG,{className:w.emojiContainer,unverifiedHTML:e.userStatus.messageHtml||"Set status"}):(0,n.jsx)(p.O,{height:"md"})]})})});function X(e){let t=e.lazyLoadItemData?.enterpriseTrialUrl;return t?(0,n.jsxs)(V,{href:t,icon:s.UploadIcon,analyticsCategory:"start_a_free_trial",analyticsAction:"click_to_set_up_enterprise_trial",analyticsLabel:"ref_loc:side_panel;ref_cta:try_enterprise",children:["Try Enterprise",(0,n.jsx)(i.l.TrailingVisual,{children:(0,n.jsx)(o.A,{variant:"primary",children:"Free"})})]}):(0,n.jsx)(V,{href:"/account/choose?action=upgrade",icon:s.UploadIcon,analyticsAction:"UPGRADE_PLAN",children:"Upgrade"})}function W({onClose:e,login:t}){return(0,n.jsx)(y.l,{title:"Feature preview dialog",sx:{width:960},onClose:e,renderBody:()=>(0,n.jsx)(y.l.Body,{className:"p-0",children:(0,n.jsxs)("include-fragment",{src:`/users/${t}/feature_previews`,children:[(0,n.jsx)("p",{className:"text-center mt-3","data-hide-on-error":!0,children:(0,n.jsx)(c.A,{})}),(0,n.jsxs)("p",{className:"flash flash-error mb-0 mt-2","data-show-on-error":!0,hidden:!0,children:[(0,n.jsx)(s.AlertIcon,{}),"Sorry, something went wrong and we were not able to fetch the feature previews"]})]})})})}function $(e){let[t,a]=(0,u.useState)(null),[r,c]=(0,u.useState)(!1),[h,m]=(0,u.useState)(!1),{onClose:p,owner:f}=e,g=`/${f.login}`,{sendClickAnalyticsEvent:_}=(0,j.S)(),A=(0,u.useCallback)(()=>{c(!0),_({category:"Global navigation",action:"USER_STATUS"})},[_]),w=(0,u.useCallback)(async e=>{if(c(!1),e&&"string"!=typeof e&&t)try{let r=await e;a({...t,userStatus:r})}catch(e){}},[t]),S=(0,u.useCallback)(()=>{m(!0),_({category:"Global navigation",action:"FEATURE_PREVIEW"})},[_]);(0,u.useEffect)(()=>{t||(async()=>{try{let t=await z(e.lazyLoadItemDataFetchUrl);a({fetchError:!1,...t})}catch(e){a(Y)}})()},[e.lazyLoadItemDataFetchUrl,t]);let b=(0,u.useCallback)(({dialogLabelId:a})=>(0,n.jsxs)("div",{className:"d-flex pr-3 pl-3 pt-3",id:a,"aria-label":"User navigation",role:"heading","aria-level":1,children:[(0,n.jsx)("div",{className:"d-flex flex-1",children:(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)(x.r,{src:f.avatarUrl,size:32}),(0,n.jsxs)("div",{className:"lh-condensed overflow-hidden d-flex flex-column flex-justify-center ml-2 f5 mr-auto",children:[(0,n.jsx)("div",{className:"text-bold",children:(0,n.jsx)(l.A,{title:f.login,children:f.login})}),(0,n.jsx)("div",{className:"fgColor-muted",children:(0,n.jsx)(l.A,{title:f.name,children:f.name})})]})]})}),e.showAccountSwitcher&&(0,n.jsx)(T,{canAddAccount:e.canAddAccount,addAccountPath:e.addAccountPath,switchAccountPath:e.switchAccountPath,stashedAccounts:t?.stashedAccounts??null,loginAccountPath:e.loginAccountPath,setError:P}),(0,n.jsx)(y.l.CloseButton,{onClose:()=>p("close-button")})]}),[p,f,t?.stashedAccounts,e.canAddAccount,e.addAccountPath,e.switchAccountPath,e.loginAccountPath,e.showAccountSwitcher]),[N,P]=(0,u.useState)(!1);return N?(0,n.jsx)(I,{...N,onClose:()=>P(!1)}):(0,n.jsxs)(y.l,{onClose:e.onClose,width:"medium",position:"right",renderHeader:b,children:[r&&(0,n.jsx)(v,{onClose:w}),h&&(0,n.jsx)(W,{onClose:()=>m(!1),login:e.owner.login}),(0,n.jsxs)(i.l,{variant:"full",children:[(0,n.jsx)(B,{lazyLoadItemData:t,onClick:A}),(0,n.jsx)(i.l.Divider,{}),(0,n.jsx)(V,{href:g,icon:s.PersonIcon,analyticsAction:"PROFILE",children:"Your profile"}),(0,n.jsx)(V,{href:`${g}?tab=repositories`,icon:s.RepoIcon,analyticsAction:"YOUR_REPOSITORIES",children:"Your repositories"}),(0,n.jsx)(V,{href:"/github-copilot/signup",icon:s.CopilotIcon,analyticsCategory:"try_copilot",analyticsAction:"click_to_try_copilot",analyticsLabel:"ref_loc:side_panel;ref_cta:your_copilot",children:"Your Copilot"}),(0,n.jsx)(V,{href:e.projectsPath,icon:s.ProjectIcon,analyticsAction:"YOUR_PROJECTS",children:"Your projects"}),(0,n.jsx)(V,{href:`${g}?tab=stars`,icon:s.StarIcon,analyticsAction:"YOUR_STARS",children:"Your stars"}),e.showGists&&(0,n.jsx)(V,{href:e.gistsUrl,icon:s.CodeSquareIcon,analyticsAction:"YOUR_GISTS",children:"Your gists"}),(0,n.jsx)(V,{href:"/settings/organizations",icon:s.OrganizationIcon,analyticsAction:"YOUR_ORGANIZATIONS",children:"Your organizations"}),e.showEnterprises&&(0,n.jsx)(V,{href:"/settings/enterprises",icon:s.GlobeIcon,analyticsCategory:"enterprises_more_discoverable",analyticsAction:"click_your_enterprises",analyticsLabel:"ref_loc:side_panel;ref_cta:your_enterprises;is_navigation_redesign:true",children:"Your enterprises"}),e.showEnterprise&&(0,n.jsx)(V,{href:e.yourEnterpriseUrl,icon:s.GlobeIcon,analyticsAction:"YOUR_ENTERPRISE",children:"Your enterprise"}),e.showSponsors&&(0,n.jsx)(V,{href:"/sponsors/accounts",icon:s.HeartIcon,analyticsAction:"SPONSORS",children:"Your sponsors"}),(0,n.jsx)(i.l.Divider,{}),(0,n.jsx)(F.O,{...e.createMenuProps}),(0,n.jsx)(X,{lazyLoadItemData:t}),e.showFeaturesPreviews&&(0,n.jsxs)(i.l.Item,{onSelect:S,children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(d.A,{icon:s.BeakerIcon})}),t?.hasUnseenFeatures&&(0,n.jsx)(i.l.TrailingVisual,{children:(0,n.jsx)(o.A,{variant:"accent",children:"New"})}),"Feature preview"]}),(0,n.jsx)(V,{href:"/settings/profile",icon:s.GearIcon,analyticsAction:"SETTINGS",children:"Settings"}),e.showEnterpriseSettings&&(0,n.jsx)(V,{href:e.enterpriseSettingsUrl,icon:s.GlobeIcon,analyticsAction:"ENTERPRISE_SETTINGS",children:"Enterprise settings"}),(0,n.jsx)(i.l.Divider,{}),(0,n.jsx)(V,{href:e.docsUrl,icon:s.BookIcon,analyticsAction:"DOCS",children:"GitHub Docs"}),(0,n.jsx)(V,{href:e.supportUrl,icon:s.PeopleIcon,analyticsAction:"SUPPORT",children:"GitHub Support"}),(0,n.jsx)(V,{href:"https://community.github.com",icon:s.CommentDiscussionIcon,analyticsAction:"COMMUNITY",children:"GitHub Community"}),(0,n.jsx)(i.l.Divider,{}),(0,n.jsx)(V,{href:"/logout",icon:s.SignOutIcon,analyticsAction:"LOGOUT",children:"Sign out"})]})]})}function q(e){let{open:t,setOpen:a,ref:r}=(0,f.Mm)(e.reactPartialAnchor),s=(0,u.useCallback)(()=>{a(!1),setTimeout(()=>{r.current?.focus()})},[a,r]);return t?(0,n.jsx)($,{...e,onClose:s}):(0,n.jsx)(n.Fragment,{})}function J(e){return e.reactPartialAnchor?(0,n.jsx)(q,{...e,reactPartialAnchor:e.reactPartialAnchor}):(0,n.jsx)($,{...e})}try{V.displayName||(V.displayName="NavLink")}catch{}try{B.displayName||(B.displayName="UserStatusNavItem")}catch{}try{X.displayName||(X.displayName="UpgradeNavItem")}catch{}try{W.displayName||(W.displayName="FeaturePreviewDialog")}catch{}try{$.displayName||($.displayName="GlobalUserNavDrawerDialog")}catch{}try{q.displayName||(q.displayName="ExternallyAnchoredGlobalUserNavDrawer")}catch{}try{J.displayName||(J.displayName="GlobalUserNavDrawer")}catch{}(0,r.k)("global-user-nav-drawer",{Component:J})},92240:(e,t,a)=>{a.d(t,{G:()=>r});let r=e=>({"data-testid":e})},28784:(e,t,a)=>{function r(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let a={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:a})}function n(e,t){let a={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},n=t?.body?JSON.stringify(t.body):void 0;return r(e,{...t,body:n,headers:a})}function s(e,t={}){let a={...t.headers,"GitHub-Is-React":"true"};return r(e,{...t,headers:a})}function i(e,t){let a={...t?.headers??{},"GitHub-Is-React":"true"};return n(e,{...t,headers:a})}a.d(t,{DI:()=>r,QJ:()=>s,Sr:()=>i,lS:()=>n})},22868:(e,t,a)=>{a.d(t,{r:()=>o});var r=a(74848),n=a(97156),s=a(75861),i=a(96540);let o=(0,i.forwardRef)(function({src:e,size:t=20,...a},o){let c=(0,i.useMemo)(()=>{let a=new URL(e,n.fV.origin);return a.searchParams.has("size")||a.searchParams.has("s")||a.searchParams.set("size",String(2*Number(t))),a.toString()},[e,t]);return(0,r.jsx)(s.A,{ref:o,src:c,size:t,"data-testid":"github-avatar",...a})});try{o.displayName||(o.displayName="GitHubAvatar")}catch{}},22084:(e,t,a)=>{a.d(t,{mo:()=>p,oG:()=>u,yx:()=>h});var r,n=a(74848),s=a(75177),i=a(52464),o=a(42838),c=a.n(o),l=a(96540);function d(e){if("html"in e&&void 0!==e.html){let{html:t,...a}=e;return{safeHTML:t,props:a}}let{unverifiedHTML:t,unverifiedHTMLConfig:a,...r}=e,n={...a,RETURN_DOM:!1,RETURN_DOM_FRAGMENT:!1};return{safeHTML:c().sanitize(t,n),props:r}}let u=m(s.A);u.displayName="SafeHTMLBox";let h=m(i.A);function m(e){return(0,l.forwardRef)((t,a)=>{let{safeHTML:r,props:s}=d(t);return(0,n.jsx)(e,{ref:a,...s,dangerouslySetInnerHTML:r?{__html:r}:void 0})})}h.displayName="SafeHTMLText";let p=(0,l.forwardRef)((e,t)=>{let{safeHTML:a,props:r}=d(e);return(0,n.jsx)("div",{ref:t,...r,dangerouslySetInnerHTML:a?{__html:a}:void 0})});p.displayName="SafeHTMLDiv";try{(r=SafeHTMLComponent).displayName||(r.displayName="SafeHTMLComponent")}catch{}},92979:(e,t,a)=>{a.d(t,{O:()=>u});var r=a(75177),n=a(59299),s=a(44999),i=a(38267);let o=(0,i.i7)(["0%{transform:translateX(-100%);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}"]),c=(0,i.AH)(["animation:"," 1.5s infinite linear;"],o),l=(0,i.i7)(["0%{opacity:.3;}10%{opacity:1;}100%{opacity:.3;}"]),d=(0,i.AH)(["animation:"," 2s infinite linear;"],l),u=(0,i.Ay)(r.A).withConfig({displayName:"LoadingSkeleton",componentId:"sc-bcbf24f9-0"})(["position:relative;overflow:hidden;mask-image:radial-gradient(white,black);",";&::after{",";background:linear-gradient(90deg,transparent,",",transparent);content:'';position:absolute;transform:translateX(-100%);bottom:0;left:0;right:0;top:0;}background-color:",";border-radius:",";display:block;height:1.2em;"," width:",";height:",";",""],({animationStyle:e})=>"pulse"===e&&d,({animationStyle:e})=>"pulse"!==e&&c,(0,n.Jt)("colors.neutral.subtle"),(0,n.Jt)("colors.neutral.subtle"),({theme:e,variant:t})=>{switch(t){case"rounded":return(0,n.Jt)("radii.1")(e);case"pill":return"100px";case"elliptical":return"50%";default:return"0"}},({variant:e})=>"elliptical"===e&&{borderRadius:"50%"},({width:e})=>{switch(e){case"random":return`${Math.floor(40*Math.random()+40)}%`;case"xl":return"32px";case"lg":return"24px";case"md":return"20px";case"sm":return"16px";default:return e}},({height:e})=>{switch(e){case"xl":return"32px";case"lg":return"24px";case"md":return"20px";case"sm":return"16px";default:return e}},s.A);try{u.displayName||(u.displayName="LoadingSkeleton")}catch{}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react","react-core","react-lib","octicons-react","vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-41da55","vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-3af2330","ui_packages_failbot_failbot_ts","ui_packages_analytics-provider_analytics-provider_ts-ui_packages_deferred_deferred_ts-ui_pack-65f632"],()=>t(69280)),e.O()}]);
//# sourceMappingURL=global-user-nav-drawer-d4b081acb2b6.js.map