(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{160:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return o});var a=n(0),r=n.n(a),A=n(173),i=n(171);e.default=function(t){var e=t.data.site.siteMetadata.title;return r.a.createElement(A.a,{location:t.location,title:e},r.a.createElement(i.a,{title:"404: Not Found"}),r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))};var o="1097489062"},165:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return l});var a=n(176),r=n.n(a),A=n(177),i=n.n(A);i.a.headerFontFamily=["Fira Mono","monospace"],i.a.bodyFontFamily=["Fira Sans","sans-serif"];var o=r()(i.a),c=o.rhythm,l=o.scale},166:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var a=n(0),r=n.n(a),A=n(4),i=n.n(A),o=n(34),c=n.n(o);n.d(e,"a",function(){return c.a});n(167);var l=r.a.createContext({}),s=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(t,e,n){var a;t.exports=(a=n(168))&&a.default||a},168:function(t,e,n){"use strict";n.r(e);n(35);var a=n(0),r=n.n(a),A=n(4),i=n.n(A),o=n(59),c=n(2),l=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},169:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMGAQIEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGfvztLV3tLKxIEAP/EABkQAAMBAQEAAAAAAAAAAAAAAAECAwQAEf/aAAgBAQABBQLLmWcyisNGVp1Vg816+lJOHbw0fiSx/8QAFREBAQAAAAAAAAAAAAAAAAAAIEH/2gAIAQMBAT8Bg//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB8QAAICAQQDAAAAAAAAAAAAAAERAAISEDEyQWGRof/aAAgBAQAGPwIWsHc/IrDIeYqB1gsOxpid1EypyPuMlmf/xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMVFh/9oACAEBAAE/IRCgvS4pWTxGCGLPkYvLCJWd26QgO26vJkdTniOVJ1Z//9oADAMBAAIAAwAAABCnzzz/xAAWEQADAAAAAAAAAAAAAAAAAAABIDH/2gAIAQMBAT8QFJ//xAAWEQADAAAAAAAAAAAAAAAAAAABIDH/2gAIAQIBAT8QNT//xAAfEAEAAgICAgMAAAAAAAAAAAABABEhMVFxQZFhgcH/2gAIAQEAAT8QP06+40Bz8xnhhRNdPiCDs/kN4eqgqKycY17xMiEK08wKWIqLq1x+/cp6lF9HkJURthXpmJEG1Wr3P//Z",width:125,height:125,src:"/static/a4ada756940647903f6125db7bb4488c/9b2dd/profile-pic.jpg",srcSet:"/static/a4ada756940647903f6125db7bb4488c/9b2dd/profile-pic.jpg 1x,\n/static/a4ada756940647903f6125db7bb4488c/7a791/profile-pic.jpg 1.5x,\n/static/a4ada756940647903f6125db7bb4488c/5f9d5/profile-pic.jpg 2x,\n/static/a4ada756940647903f6125db7bb4488c/2b25d/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Jean-Louis Leysens"}}}}},170:function(t){t.exports={data:{site:{siteMetadata:{author:"Jean-Louis Leysens"}}}}},171:function(t,e,n){"use strict";var a=n(172),r=n(0),A=n.n(r),i=n(180),o=n.n(i);function c(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title,l=a.data.site,s=e||l.siteMetadata.description;return A.a.createElement(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"",meta:[],keywords:[],description:""},e.a=c},172:function(t){t.exports={data:{site:{siteMetadata:{title:"JλO",description:"Mah blog",author:"Jean-Louis Leysens"}}}}},173:function(t,e,n){"use strict";n(174);var a=n(169),r=n(0),A=n.n(r),i=n(166),o=n(58),c=n(175),l=n.n(c),s=n(165),u=n(170);var d="4027657132",f=function(){return A.a.createElement(i.b,{query:d,render:function(t){var e=t.site.siteMetadata.author;return A.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},A.a.createElement("p",null,"Hi, I'm ",A.a.createElement("strong",null,e),". I like writing software in JavaScript and TypeScript and listening to noisey music."))},data:u})};n(178);var m=n(179),g=n.n(m);function p(){var t=g()(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ",";\n  padding: ",";\n"]);return p=function(){return t},t}function h(){var t=g()(["\n  display: flex;\n  align-self: center;\n  margin-left: ",";\n  margin-right: ",";\n  margin-top: 0;\n  color: ",";\n"]);return h=function(){return t},t}function E(){var t=g()(["\n  display: flex;\n  align-self: center;\n  text-align: center;\n  margin-bottom: 0;\n  transform: ",";\n"]);return E=function(){return t},t}function b(){var t=g()(["\n  padding-top: ",";\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid grey;\n  height: ",";\n  justify-content: center;\n  padding-top: ",";\n  background: ",";\n"]);return b=function(){return t},t}var y=o.c.header(b(),function(){return Object(s.a)(1.5)},function(t){return t.isRootPath?Object(s.a)(6):Object(s.a)(3)},function(t){return t.isRootPath?Object(s.a)(1.5):Object(s.a)(.5)},function(){return"linear-gradient(45deg, var(--a-dark), var(--c-dark-cold-grey), var(--a-cold))"}),j=o.c.div(E(),function(){return"translate(0, "+Object(s.a)(1.5)+")"}),x=(o.c.h3(h(),function(){return Object(s.a)(.5)},function(){return Object(s.a)(.5)},function(t){return t.theme.lightText}),o.c.main(p(),function(){return Object(s.a)(24)},function(){return Object(s.a)(1.5)+" "+Object(s.a)(.75)}));e.a=function(t){var e,n=t.location,c=t.children,u=t.back,d=A.a.useContext(o.a),m=a.data,g=m.site.siteMetadata.author,p="/"===n.pathname;return e=d,r.useEffect(function(){var t=document.querySelector("#managed-style");t?t.remove():(t=document.createElement("style")).setAttribute("id","managed-style"),t.innerHTML="\n      body {\n        background-color: "+e.background+";\n      }\n\n      body a {\n        color: "+e.link+";\n        transition: color 0.2s ease-in-out;\n        text-decoration: none;\n      }\n\n      body a:hover {\n        color: "+e.linkHover+";\n        transition: color 0.2s ease-in-out;\n      }\n    ",document.head.appendChild(t)},[e]),A.a.createElement("div",null,A.a.createElement(y,{isRootPath:p},p?function(t){var e=t.author,n=t.image;return A.a.createElement(A.a.Fragment,null,A.a.createElement("h1",{style:{display:"flex",alignSelf:"center",marginBottom:0,marginTop:0}},A.a.createElement(i.a,{style:{color:"var(--a-light)"},to:"/"},"J",A.a.createElement("span",{style:{fontFamily:"sans-serif"}},"λ"),"O")),A.a.createElement(j,null,A.a.createElement(l.a,{fixed:n,alt:e,style:{width:75,height:75,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})))}({author:g,image:m.avatar.childImageSharp.fixed}):A.a.createElement("h3",{style:{display:"flex",alignSelf:"center",marginLeft:Object(s.a)(.5),marginRight:Object(s.a)(.5),marginTop:0,color:"var(--a-light)"}},A.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"J",A.a.createElement("span",{style:{fontFamily:"sans-serif"}},"λ"),"O"))),A.a.createElement(x,null,u?A.a.createElement(i.a,{style:{fontSize:Object(s.a)(1.5),position:"fixed",top:"120px",transform:"translateX(-100px)"},to:"/"+u},"<"):null,c,A.a.createElement("hr",{style:{marginTop:Object(s.a)(.5),marginBottom:Object(s.a)(1)}}),A.a.createElement(f,null)," "))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-1b32315ed50523a7e9ff.js.map