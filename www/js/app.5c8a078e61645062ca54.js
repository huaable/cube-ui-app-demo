webpackJsonp([1],{0:function(t,e){},"64cm":function(t,e){},"7uYa":function(t,e){},Asdd:function(t,e){},G2h1:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("//Fk"),a=n.n(s),i=n("7+uW"),o=n("/ocq"),l=n("8+8L"),r=n("ffKC"),c=n.n(r),u=(n("wziQ"),{props:{title:{type:String,default:"",required:!0},type:{type:String,default:""},desc:{type:String,default:""},content:{type:String,default:""}},methods:{back:function(){this.$router.back()}}}),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cube-page",class:t.type},[n("header",{staticClass:"header"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("i",{staticClass:"cubeic-back",on:{click:t.back}})]),t._v(" "),n("div",{staticClass:"wrapper"},[n("section",{directives:[{name:"show",rawName:"v-show",value:t.desc,expression:"desc"}],staticClass:"desc"},[t._t("desc",[t._v(t._s(t.desc))])],2),t._v(" "),n("main",{staticClass:"content"},[t._t("content",[t._v(t._s(t.content))])],2)])])},staticRenderFns:[]};var v=n("VU/8")(u,d,!1,function(t){n("G2h1")},null,null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"page-move"}},[e("router-view",{staticClass:"cube-view"})],1)},staticRenderFns:[]};var h=n("VU/8")({},p,!1,function(t){n("7uYa")},null,null).exports;n("fZjL"),n("bOdI"),n("pFYg");function f(t){var e=Object.prototype.toString;return function(n){return e.call(n)==="[object "+t+"]"}}f("Function"),f("Undefined"),f("Array"),f("String"),f("Object"),f("Number");var b={data:function(){return{selectedLabel:"推荐",disabled:!1,tabLabels:[{label:"关注"},{label:"推荐"},{label:"热榜"}],loop:!1,autoPlay:!1,showDots:!1,slideOptions:{listenScroll:!0,probeType:3,directionLockThreshold:0},scrollOptions:{directionLockThreshold:0},followersData:[],recommendData:[],hotData:[]}},mounted:function(){var t=this;this.$http.get("http://dump123.cn/apix/followers",{}).then(function(e){t.followersData=e.data},function(t){}),this.$http.get("http://dump123.cn/apix/recommends",{}).then(function(e){t.recommendData=e.data},function(t){}),this.$http.get("http://dump123.cn/apix/hots",{}).then(function(e){t.hotData=e.data},function(t){})},methods:{changePage:function(t){this.selectedLabel=this.tabLabels[t].label,console.log(t)},scroll:function(t){var e=Math.abs(t.x),n=this.$refs.tabNav.$el.clientWidth,s=e/this.$refs.slide.slide.scrollerWidth*n;this.$refs.tabNav.setSliderTransform(s)},resolveTitle:function(t){return t.name+"关注了问题 · "+t.postTime+" 小时前"},resolveQuestionFollowers:function(t){return t.answers+" 赞同 · "+t.followers+" 评论"}},computed:{initialIndex:function(){var t=this;return function(t,e){if(t.findIndex)return t.findIndex(e);var n=-1;return t.some(function(t,s,a){var i=e.call(this,t,s,a);if(i)return n=s,i}),n}(this.tabLabels,function(e){return e.label===t.selectedLabel})}},components:{CubePage:v,CubeView:h}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("section",{ref:"mfct",staticClass:"cube-content tab-composite-view"},[n("cube-tab-bar",{ref:"tabNav",attrs:{"show-slider":"","use-transition":t.disabled,data:t.tabLabels},model:{value:t.selectedLabel,callback:function(e){t.selectedLabel=e},expression:"selectedLabel"}}),t._v(" "),n("div",{staticClass:"tab-slide-container"},[n("cube-slide",{ref:"slide",attrs:{loop:t.loop,"initial-index":t.initialIndex,"auto-play":t.autoPlay,"show-dots":t.showDots,options:t.slideOptions},on:{scroll:t.scroll,change:t.changePage}},[n("cube-slide-item",[n("cube-scroll",{attrs:{data:t.followersData,options:t.scrollOptions}},[n("ul",{staticClass:"list-wrapper"},t._l(t.followersData,function(e,s){return n("li",{key:s,staticClass:"list-item"},[n("div",{staticClass:"top"},[n("img",{staticClass:"avatar",attrs:{src:e.avatar}}),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.resolveTitle(e)))])]),t._v(" "),n("div",{staticClass:"middle is-bold line-height"},[t._v(t._s(e.question))]),t._v(" "),n("div",[t._v(t._s(t.resolveQuestionFollowers(e)))])])}))])],1),t._v(" "),n("cube-slide-item",[n("cube-scroll",{attrs:{data:t.recommendData,options:t.scrollOptions}},[n("div",{staticStyle:{padding:"8px"}},[n("router-link",{attrs:{to:"/example"}},[n("cube-button",[t._v("example page")])],1),t._v(" "),n("br"),t._v(" "),n("router-link",{attrs:{to:"/other"}},[n("cube-button",[t._v("other page")])],1)],1),t._v(" "),n("ul",{staticClass:"list-wrapper"},t._l(t.recommendData,function(e,s){return n("li",{key:s,staticClass:"list-item"},[n("div",{staticClass:"top is-black is-bold line-height"},[t._v("\n                    "+t._s(e.question)+"\n                  ")]),t._v(" "),n("div",{staticClass:"middle is-grey line-height"},[t._v(t._s(e.content))]),t._v(" "),n("div",[t._v(t._s(t.resolveQuestionFollowers(e)))])])}))])],1),t._v(" "),n("cube-slide-item",[n("cube-scroll",{attrs:{data:t.hotData,options:t.scrollOptions}},[n("ul",{staticClass:"list-wrapper"},t._l(t.hotData,function(e,s){return n("li",{key:s,staticClass:"list-item"},[n("div",{staticClass:"hot-title"},[n("span",{staticClass:"hot-sequence"},[t._v(t._s(e.sequence))]),t._v(" "),n("span"),t._v("\n                    "+t._s(e.label)+"\n                  ")]),t._v(" "),n("div",{staticClass:"hot-content is-bold is-black"},[t._v(t._s(e.question))])])}))])],1)],1)],1)],1),t._v(" "),n("cube-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"cube-bar"},[e("h1",[this._v("cube-ui 首页")])])}]};var m=n("VU/8")(b,_,!1,function(t){n("q5vJ")},null,null).exports,g={data:function(){return{}},methods:{goTo:function(t){this.$router.push("/example/"+t)}},components:{CubePage:v,CubeView:h}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cube-page",{attrs:{type:"",title:"example"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("p",[t._v("\n      example page\n    ")]),t._v(" "),n("br"),t._v(" "),n("router-link",{attrs:{to:"/example/view"}},[n("cube-button",[t._v("go to example/view page")])],1),t._v(" "),n("br"),t._v(" "),n("cube-button",{on:{click:function(e){t.goTo("view")}}},[t._v("go to example/view page")]),t._v(" "),n("p",[t._v('\n      cube-view 需要放在这里,在属性为 slot="content" 的标签里.这样子级别路由 /example/view 才能正常跳转并显示\n    ')]),t._v(" "),n("cube-view")],1)])},staticRenderFns:[]},x=n("VU/8")(g,w,!1,null,null,null).exports,C={data:function(){return{}},methods:{},components:{CubePage:v,CubeView:h}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("cube-page",{attrs:{type:"",title:"example/view"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("p",[this._v("\n      example view page\n    ")])])])},staticRenderFns:[]},y=n("VU/8")(C,k,!1,null,null,null).exports,$=n("70Rd"),L=n.n($),D=n("GdJY"),F=n.n(D);n("64cm");L.a.registerLanguage("json",F.a);var T={props:{data:{type:Object,default:function(){return{}}},title:{type:String,default:""}},data:function(){return{changed:!0}},watch:{data:{handler:function(){var t=this;this.changed=!1,this.$nextTick(function(){t.changed=!0,t.$nextTick(function(){t.$refs.code&&L.a.highlightBlock(t.$refs.code)})})},deep:!0}},mounted:function(){this.$refs.code&&L.a.highlightBlock(this.$refs.code)}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cube-json-view"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),t.changed?n("pre",[t._v("    "),n("code",{ref:"code"},[t._v(t._s(t.data))]),t._v("\n  ")]):t._e()])},staticRenderFns:[]};var P={data:function(){return{}},methods:{},components:{CubePage:v,JsonView:n("VU/8")(T,O,!1,function(t){n("Asdd")},null,null).exports}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("cube-page",{attrs:{type:"",title:"other"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("p",[this._v("\n      other page\n    ")]),this._v(" "),e("router-link",{attrs:{to:"/example/view"}},[e("cube-button",[this._v("example/view page")])],1)],1)])},staticRenderFns:[]},S=[{path:"/example",component:x,children:[{path:"view",component:y}]},{path:"/other",component:n("VU/8")(P,V,!1,null,null,null).exports}];i.a.use(o.a);var j=new o.a({routes:S}),q=n("v5o6"),E=n.n(q),R=n("cTzj"),U=n.n(R);window.Promise=window.Promise||a.a,E.a.attach(document.body),i.a.use(c.a),i.a.use(o.a),i.a.use(l.a),i.a.use(U.a),new i.a({router:j,render:function(t){return t(m)}}).$mount("#app")},q5vJ:function(t,e){},wziQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5c8a078e61645062ca54.js.map