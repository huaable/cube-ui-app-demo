webpackJsonp([1],{"3pwf":function(e,t){},"64cm":function(e,t){},"7uYa":function(e,t){},Asdd:function(e,t){},Bz1w:function(e,t){},G2h1:function(e,t){},NHnr:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("//Fk"),n=l.n(a),o=l("7+uW"),r=l("/ocq"),i=l("ffKC"),u=l.n(i),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"page-move"}},[t("router-view",{staticClass:"cube-view"})],1)},staticRenderFns:[]};var c=l("VU/8")({},s,!1,function(e){l("7uYa")},null,null).exports,d={data:function(){return{}},components:{CubeView:c},methods:{showAlert:function(){this.dialog=this.$createDialog({type:"alert",title:"我是标题",content:"我是内容",icon:"cubeic-alert"}),this.dialog.show()}}},p={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),l("section",{ref:"mfct",staticClass:"cube-content"},[l("router-link",{attrs:{to:"index/view"}},[l("cube-button",[e._v("index/view page ")])],1),e._v(" "),l("router-link",{attrs:{to:"about"}},[l("cube-button",[e._v("about page")])],1),e._v(" "),l("cube-button",{on:{click:e.showAlert}},[e._v("Dialog - alert")])],1),e._v(" "),l("cube-view")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"cube-bar"},[t("h1",[this._v("cube-ui")])])}]};var v=l("VU/8")(d,p,!1,function(e){l("bX2N")},null,null).exports,b={props:{title:{type:String,default:"",required:!0},type:{type:String,default:""},desc:{type:String,default:""},content:{type:String,default:""}},methods:{back:function(){this.$router.back()}}},h={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"cube-page",class:e.type},[l("header",{staticClass:"header"},[l("h1",[e._v(e._s(e.title))]),e._v(" "),l("i",{staticClass:"cubeic-back",on:{click:e.back}})]),e._v(" "),l("div",{staticClass:"wrapper"},[l("section",{directives:[{name:"show",rawName:"v-show",value:e.desc,expression:"desc"}],staticClass:"desc"},[e._t("desc",[e._v(e._s(e.desc))])],2),e._v(" "),l("main",{staticClass:"content"},[e._t("content",[e._v(e._s(e.content))])],2)])])},staticRenderFns:[]};var f=l("VU/8")(b,h,!1,function(e){l("G2h1")},null,null).exports,m={props:{direction:{type:String,default:"column"}}},y={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"cube-btn-group",class:this.direction},[this._t("default")],2)},staticRenderFns:[]};var g=l("VU/8")(m,y,!1,function(e){l("Bz1w")},null,null).exports,_={components:{CubePage:f,CubeButtonGroup:g,CubeView:c},methods:{goTo:function(e){this.$router.push("/"+e)}}},V={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("cube-page",{attrs:{type:"",title:""}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("cube-button-group",[l("cube-button",{on:{click:function(t){e.goTo("a/sub")}}},[e._v("a")]),e._v(" "),l("cube-button",{on:{click:function(t){e.goTo("b")}}},[e._v("b")])],1),e._v(" "),l("cube-view")],1)])},staticRenderFns:[]};var w=l("VU/8")(_,V,!1,function(e){l("3pwf")},null,null).exports,x=l("70Rd"),k=l.n(x),C=l("GdJY"),q=l.n(C);l("64cm");k.a.registerLanguage("json",q.a);var K={props:{data:{type:Object,default:function(){return{}}},title:{type:String,default:""}},data:function(){return{changed:!0}},watch:{data:{handler:function(){var e=this;this.changed=!1,this.$nextTick(function(){e.changed=!0,e.$nextTick(function(){e.$refs.code&&k.a.highlightBlock(e.$refs.code)})})},deep:!0}},mounted:function(){this.$refs.code&&k.a.highlightBlock(this.$refs.code)}},$={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"cube-json-view"},[l("h3",[e._v(e._s(e.title))]),e._v(" "),e.changed?l("pre",[e._v("    "),l("code",{ref:"code"},[e._v(e._s(e.data))]),e._v("\n  ")]):e._e()])},staticRenderFns:[]};var R=l("VU/8")(K,$,!1,function(e){l("Asdd")},null,null).exports,F={data:function(){return{validity:{},valid:void 0,model:{checkboxValue:!1,checkboxGroupValue:[],inputValue:"",radioValue:"",rateValue:0,selectValue:2018,switchValue:!0,textareaValue:"",uploadValue:[]},schema:{groups:[{legend:"基础",fields:[{type:"checkbox",modelKey:"checkboxValue",label:"Checkbox",props:{option:{label:"Checkbox",value:!0}},rules:{required:!0},messages:{required:"Please check this field"}},{type:"checkbox-group",modelKey:"checkboxGroupValue",label:"CheckboxGroup",props:{options:["1","2","3"]},rules:{required:!0}},{type:"input",modelKey:"inputValue",label:"Input",props:{placeholder:"请输入"},rules:{required:!0},trigger:"blur"},{type:"radio-group",modelKey:"radioValue",label:"Radio",props:{options:["1","2","3"]},rules:{required:!0}},{type:"select",modelKey:"selectValue",label:"Select",props:{options:[2015,2016,2017,2018,2019,2020]},rules:{required:!0}},{type:"switch",modelKey:"switchValue",label:"Switch",rules:{required:!0}},{type:"textarea",modelKey:"textareaValue",label:"Textarea",rules:{required:!0},debounce:100}]},{legend:"高级",fields:[{type:"rate",modelKey:"rateValue",label:"Rate",rules:{required:!0}},{type:"upload",modelKey:"uploadValue",label:"Upload",events:{"file-removed":function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];console.log("file removed",t)}},rules:{required:!0,uploaded:function(e,t){return n.a.all(e.map(function(e,t){return new n.a(function(l,a){if(e.uploadedUrl)return l();setTimeout(function(){t%2?a(new Error):(e.uploadedUrl="uploaded/url",l())},1e3)})})).then(function(){return!0})}},messages:{uploaded:"上传失败"}}]},{fields:[{type:"submit",label:"Submit"},{type:"reset",label:"Reset"}]}]},options:{scrollToInvalidField:!0,layout:"standard"}}},methods:{submitHandler:function(e){e.preventDefault(),console.log("submit",e)},validateHandler:function(e){this.validity=e.validity,this.valid=e.valid,console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)},resetHandler:function(e){console.log("reset",e)}},components:{CubePage:f,CubeButtonGroup:g,JsonView:R}},H={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("cube-page",{attrs:{type:"",title:"A"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("cube-form",{attrs:{model:e.model,schema:e.schema,"immediate-validate":!1,options:e.options},on:{validate:e.validateHandler,submit:e.submitHandler,reset:e.resetHandler}}),e._v(" "),l("json-view",{attrs:{title:"model",data:e.model}}),e._v(" "),l("json-view",{attrs:{title:"validity",data:e.validity}})],1)])},staticRenderFns:[]},U={data:function(){return{validity:{},valid:void 0,model:{checkboxValue:!1,checkboxGroupValue:[],inputValue:"",radioValue:"",rateValue:0,selectValue:2018,switchValue:!0,textareaValue:"",uploadValue:[]},schema:{groups:[{legend:"基础",fields:[{type:"checkbox",modelKey:"checkboxValue",label:"Checkbox",props:{option:{label:"Checkbox",value:!0}},rules:{required:!0},messages:{required:"Please check this field"}},{type:"checkbox-group",modelKey:"checkboxGroupValue",label:"CheckboxGroup",props:{options:["1","2","3"]},rules:{required:!0}},{type:"input",modelKey:"inputValue",label:"Input",props:{placeholder:"请输入"},rules:{required:!0},trigger:"blur"},{type:"radio-group",modelKey:"radioValue",label:"Radio",props:{options:["1","2","3"]},rules:{required:!0}},{type:"select",modelKey:"selectValue",label:"Select",props:{options:[2015,2016,2017,2018,2019,2020]},rules:{required:!0}},{type:"switch",modelKey:"switchValue",label:"Switch",rules:{required:!0}},{type:"textarea",modelKey:"textareaValue",label:"Textarea",rules:{required:!0},debounce:100}]},{legend:"高级",fields:[{type:"rate",modelKey:"rateValue",label:"Rate",rules:{required:!0}},{type:"upload",modelKey:"uploadValue",label:"Upload",rules:{required:!0,uploaded:function(e,t){return n.a.all(e.map(function(e,t){return new n.a(function(l,a){if(e.uploadedUrl)return l();setTimeout(function(){t%2?a(new Error):(e.uploadedUrl="uploaded/url",l())},1e3)})})).then(function(){return!0})}},messages:{uploaded:"上传失败"}}]},{fields:[{type:"submit",label:"Submit"},{type:"reset",label:"Reset"}]}]},options:{scrollToInvalidField:!0,layout:"fresh"}}},methods:{submitHandler:function(e){e.preventDefault(),console.log("submit",e)},validateHandler:function(e){this.validity=e.validity,this.valid=e.valid,console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)},resetHandler:function(e){console.log("reset",e)}},components:{CubePage:f,CubeButtonGroup:g,JsonView:R}},G={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("cube-page",{attrs:{type:"form-def",title:"Form 表单"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("cube-form",{attrs:{model:e.model,schema:e.schema,"immediate-validate":!1,options:e.options},on:{validate:e.validateHandler,submit:e.submitHandler,reset:e.resetHandler}}),e._v(" "),l("json-view",{attrs:{title:"model",data:e.model}}),e._v(" "),l("json-view",{attrs:{title:"validity",data:e.validity}})],1)])},staticRenderFns:[]},S=[{path:"/index",component:w,children:[{path:"view",component:l("VU/8")(F,H,!1,null,null,null).exports}]},{path:"/about",component:l("VU/8")(U,G,!1,null,null,null).exports}];o.a.use(r.a);var T=new r.a({routes:S}),E=l("v5o6"),j=l.n(E),I=l("cTzj"),P=l.n(I);window.Promise=window.Promise||n.a,j.a.attach(document.body),o.a.use(u.a),o.a.use(r.a),o.a.use(P.a),new o.a({router:T,render:function(e){return e(v)}}).$mount("#app")},bX2N:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.34ba3a1a75eff2664659.js.map