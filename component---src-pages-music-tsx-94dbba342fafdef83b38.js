(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return c});var a=n(0),r=n(168),A=n(175),i=n(173),o=n(167);t.default=function(e){var t=e.data,n=t.site.siteMetadata.title,c=t.allMarkdownRemark.edges;return a.createElement(A.a,{location:e.location,title:n},a.createElement(i.a,{title:"Music Blog",keywords:["music","punk","post-metal","metal"]}),c.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return a.createElement("div",{key:t.fields.slug},a.createElement("h3",{style:{marginBottom:Object(o.a)(.25)}},a.createElement(r.a,{style:{boxShadow:"none"},to:t.fields.slug},n)),a.createElement("small",null," ",t.frontmatter.date," "),a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))})," ")};var c="2008959770"},167:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var a=n(178),r=n.n(a),A=n(179),i=n.n(A);i.a.headerFontFamily=["Fira Mono","monospace"],i.a.bodyFontFamily=["Fira Sans","sans-serif"];var o=r()(i.a),c=o.rhythm,l=o.scale},168:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),A=n(4),i=n.n(A),o=n(34),c=n.n(o);n.d(t,"a",function(){return c.a});n(169);var l=r.a.createContext({}),s=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},169:function(e,t,n){var a;e.exports=(a=n(170))&&a.default||a},170:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),A=n(4),i=n.n(A),o=n(59),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},171:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMGAQIEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGfvztLV3tLKxIEAP/EABkQAAMBAQEAAAAAAAAAAAAAAAECAwQAEf/aAAgBAQABBQLLmWcyisNGVp1Vg816+lJOHbw0fiSx/8QAFREBAQAAAAAAAAAAAAAAAAAAIEH/2gAIAQMBAT8Bg//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB8QAAICAQQDAAAAAAAAAAAAAAERAAISEDEyQWGRof/aAAgBAQAGPwIWsHc/IrDIeYqB1gsOxpid1EypyPuMlmf/xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMVFh/9oACAEBAAE/IRCgvS4pWTxGCGLPkYvLCJWd26QgO26vJkdTniOVJ1Z//9oADAMBAAIAAwAAABCnzzz/xAAWEQADAAAAAAAAAAAAAAAAAAABIDH/2gAIAQMBAT8QFJ//xAAWEQADAAAAAAAAAAAAAAAAAAABIDH/2gAIAQIBAT8QNT//xAAfEAEAAgICAgMAAAAAAAAAAAABABEhMVFxQZFhgcH/2gAIAQEAAT8QP06+40Bz8xnhhRNdPiCDs/kN4eqgqKycY17xMiEK08wKWIqLq1x+/cp6lF9HkJURthXpmJEG1Wr3P//Z",width:125,height:125,src:"/static/a4ada756940647903f6125db7bb4488c/9b2dd/profile-pic.jpg",srcSet:"/static/a4ada756940647903f6125db7bb4488c/9b2dd/profile-pic.jpg 1x,\n/static/a4ada756940647903f6125db7bb4488c/7a791/profile-pic.jpg 1.5x,\n/static/a4ada756940647903f6125db7bb4488c/5f9d5/profile-pic.jpg 2x,\n/static/a4ada756940647903f6125db7bb4488c/2b25d/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Jean-Louis Leysens"}}}}},172:function(e){e.exports={data:{site:{siteMetadata:{author:"Jean-Louis Leysens"}}}}},173:function(e,t,n){"use strict";var a=n(174),r=n(0),A=n.n(r),i=n(182),o=n.n(i).a;function c(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,c=e.title,l=a.data.site,s=t||l.siteMetadata.description;return A.a.createElement(o,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{property:"og:url",content:"https://jloleysens.github.io/index.html"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat({name:"keywords",content:["jloleysens","Jean-Louis","Leysens","Jean-Louis Leysens","blog"].concat(i).join(", ")}).concat(r)})}c.defaultProps={lang:"",meta:[],keywords:[],description:""},t.a=c},174:function(e){e.exports={data:{site:{siteMetadata:{title:"Jean-Louis Leysens",description:"Jean-Louis Leysens' blog",author:"Jean-Louis Leysens"}}}}},175:function(e,t,n){"use strict";n(176);var a=n(171),r=n(0),A=n.n(r),i=n(168),o=n(58),c=n(177),l=n.n(c),s=n(167),u=n(172);var d="4027657132",m=function(){return A.a.createElement(i.b,{query:d,render:function(e){var t=e.site.siteMetadata.author;return A.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},A.a.createElement("p",null,"Hi, I'm ",A.a.createElement("strong",null,t),". I like writing software in JavaScript and TypeScript and listening to noisey music."))},data:u})};n(180);var f=n(181),g=n.n(f);function p(){var e=g()(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ",";\n  padding: ",";\n"]);return p=function(){return e},e}function y(){var e=g()(["\n  display: flex;\n  align-self: center;\n  margin-left: ",";\n  margin-right: ",";\n  margin-top: 0;\n  color: ",";\n"]);return y=function(){return e},e}function h(){var e=g()(["\n  display: flex;\n  align-self: center;\n  text-align: center;\n  margin-bottom: 0;\n  transform: ",";\n"]);return h=function(){return e},e}function E(){var e=g()(["\n  padding-top: ",";\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid grey;\n  height: ",";\n  justify-content: center;\n  padding-top: ",";\n  background: ",";\n"]);return E=function(){return e},e}var b=o.c.header(E(),function(){return Object(s.a)(1.5)},function(e){return e.isRootPath?Object(s.a)(6):Object(s.a)(3)},function(e){return e.isRootPath?Object(s.a)(1.5):Object(s.a)(.5)},function(){return"linear-gradient(45deg, var(--a-dark), var(--c-dark-cold-grey), var(--a-cold))"}),j=o.c.div(h(),function(){return"translate(0, "+Object(s.a)(1.5)+")"}),x=(o.c.h3(y(),function(){return Object(s.a)(.5)},function(){return Object(s.a)(.5)},function(e){return e.theme.lightText}),o.c.main(p(),function(){return Object(s.a)(24)},function(){return Object(s.a)(1.5)+" "+Object(s.a)(.75)}));t.a=function(e){var t,n=e.location,c=e.children,u=e.back,d=A.a.useContext(o.a),f=a.data,g=f.site.siteMetadata.author,p="/"===n.pathname;return t=d,r.useEffect(function(){var e=document.querySelector("#managed-style");e?e.remove():(e=document.createElement("style")).setAttribute("id","managed-style"),e.innerHTML="\n      body {\n        background-color: "+t.background+";\n      }\n\n      body a {\n        color: "+t.link+";\n        transition: color 0.2s ease-in-out;\n        text-decoration: none;\n      }\n\n      body a:hover {\n        color: "+t.linkHover+";\n        transition: color 0.2s ease-in-out;\n      }\n    ",document.head.appendChild(e)},[t]),A.a.createElement("div",null,A.a.createElement(b,{isRootPath:p},p?function(e){var t=e.author,n=e.image;return A.a.createElement(A.a.Fragment,null,A.a.createElement("h1",{style:{display:"flex",alignSelf:"center",marginBottom:0,marginTop:0}},A.a.createElement(i.a,{style:{color:"var(--a-light)"},to:"/"},"J",A.a.createElement("span",{style:{fontFamily:"sans-serif"}},"λ"),"O")),A.a.createElement(j,null,A.a.createElement(l.a,{fixed:n,alt:t,style:{width:75,height:75,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})))}({author:g,image:f.avatar.childImageSharp.fixed}):A.a.createElement("h3",{style:{display:"flex",alignSelf:"center",marginLeft:Object(s.a)(.5),marginRight:Object(s.a)(.5),marginTop:0,color:"var(--a-light)"}},A.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"J",A.a.createElement("span",{style:{fontFamily:"sans-serif"}},"λ"),"O"))),A.a.createElement(x,null,u?A.a.createElement(i.a,{style:{fontSize:Object(s.a)(1.5),position:"fixed",top:"120px",transform:"translateX(-100px)"},to:"/"+u},"<"):null,c,A.a.createElement("hr",{style:{marginTop:Object(s.a)(.5),marginBottom:Object(s.a)(1)}}),A.a.createElement(m,null)," "))}}}]);
//# sourceMappingURL=component---src-pages-music-tsx-94dbba342fafdef83b38.js.map