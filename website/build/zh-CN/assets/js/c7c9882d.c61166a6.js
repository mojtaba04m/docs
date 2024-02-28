"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3039],{71652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(85893),a=n(11151),i=n(77229);const s={id:"unit-test",title:"Unit Testing"},o=void 0,l={id:"develop/testing/unit-test",title:"Unit Testing",description:"Unit tests allow you to test the contract methods individually. They are suitable to check the storage is updated correctly, and that methods return their expected values. They are written in the contract's language and execute locally.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/testing/unit.md",sourceDirName:"2.develop/testing",slug:"/develop/testing/unit-test",permalink:"/zh-CN/develop/testing/unit-test",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/testing/unit.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"unit-test",title:"Unit Testing"},sidebar:"build",previous:{title:"Introduction",permalink:"/zh-CN/develop/testing/introduction"},next:{title:"Integration Test",permalink:"/zh-CN/develop/testing/integration-test"}},u={},c=[{value:"Snippet I: Testing a Counter",id:"snippet-i-testing-a-counter",level:2},{value:"Snippet II: Modifying the Context",id:"snippet-ii-modifying-the-context",level:2},{value:"\u26a0\ufe0f Limitations",id:"\ufe0f-limitations",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Unit tests allow you to test the contract methods individually. They are suitable to check the storage is updated correctly, and that methods return their expected values. They are written in the contract's language and execute locally."}),"\n",(0,r.jsxs)(t.p,{children:["If you used one of our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/docs-examples",children:"examples"})," as template, then you simply need to navigate to the contract's folder, and use ",(0,r.jsx)(t.code,{children:"yarn test"}),". In case you didn't, then we recommend you copy the necessary node files (e.g. ",(0,r.jsx)(t.code,{children:"package.json"}),") from one of our templates."]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["You can run ",(0,r.jsx)(t.code,{children:"yarn test"})," from the root folder of each project to run both unit and ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/testing/integration-test",children:"integration"})," tests. :::"]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"snippet-i-testing-a-counter",children:"Snippet I: Testing a Counter"}),(0,r.jsxs)(t.p,{children:["The tests in the ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/counter-rust",children:"Counter Example"})," rely on basic functions to check that the ",(0,r.jsx)(t.code,{children:"increment"}),", ",(0,r.jsx)(t.code,{children:"decrement"}),", and ",(0,r.jsx)(t.code,{children:"reset"})," methods work properly."]}),(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs",start:"48",end:"83"})})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"snippet-ii-modifying-the-context",children:"Snippet II: Modifying the Context"}),(0,r.jsxs)(t.p,{children:["While doing unit testing you can modify the ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/contracts/environment/",children:"Environment variables"})," through the ",(0,r.jsx)(t.code,{children:"VMContextBuilder"}),". This will enable you to, for example, simulate calls from different users, with specific attached deposit and GAS. Here we present a snippet on how we test the ",(0,r.jsx)(t.code,{children:"donate"})," method from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/donation-rust",children:"Donation Example"})," by manipulating the ",(0,r.jsx)(t.code,{children:"predecessor"})," and ",(0,r.jsx)(t.code,{children:"attached_deposit"}),"."]}),(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-rust/blob/main/contract/src/lib.rs",start:"58",end:"93"})})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"\ufe0f-limitations",children:"\u26a0\ufe0f Limitations"}),(0,r.jsx)(t.p,{children:"Unit tests are useful to check for code integrity, and detect basic errors on isolated methods. However, since unit tests do not run on a blockchain, there are many things which they cannot detect. Unit tests are not suitable for:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Testing ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/contracts/environment/",children:"gas"})," and ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/contracts/storage",children:"storage"})," usage"]}),"\n",(0,r.jsxs)(t.li,{children:["Testing ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/contracts/actions",children:"transfers"})]}),"\n",(0,r.jsxs)(t.li,{children:["Testing ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/contracts/crosscontract",children:"cross-contract calls"})]}),"\n",(0,r.jsx)(t.li,{children:"Testing complex interactions, i.e. multiple users depositing money on the contract"}),"\n"]}),(0,r.jsxs)(t.p,{children:["For all these cases it is necessary to ",(0,r.jsx)(t.strong,{children:"complement"})," unit tests with ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/testing/integration-test",children:"integration tests"}),"."]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),i=n(12466),s=n(16550),o=n(20469),l=n(91980),u=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function m(e){var t,n,a,i,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,m=h(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),g=v[0],b=v[1],x=f({queryString:u,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),T=w[0],I=w[1],k=function(){var e=null!=j?j:T;return p({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){k&&b(k)}),[k]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),I(e)}),[y,I,m]),tabValues:m}}var v=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(u(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;n=null!=(i=l[s])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(x,Object.assign({},e,t)),(0,b.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,v.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>c,O2:()=>l,SQ:()=>u});n(67294);var r=n(74866),a=n(85162),i=n(95665),s=n.n(i),o=n(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,i=n.end,s=n.fname;if(e.type===c)return c({url:r,start:a,end:i,language:t,fname:s});return e}(e,n)})),1==t.length?(0,o.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function c(e){var t=e.url,n=e.start,r=e.end,a=e.language,i=e.fname,l=t+"#";return n&&r&&(l+="L"+n+"-L"+r+"#"),(0,o.jsx)(s(),{language:a,fname:i,children:l})}}}]);