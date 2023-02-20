(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9604],{9604:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}function f(e){return{}.toString.call(e).includes("Object")}function d(e){return"function"==typeof e}t.d(n,{_m:function(){return D}});var p=s((function(e,n){throw new Error(e[n]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),g={changes:function(e,n){return f(n)||p("changeType"),Object.keys(n).some((function(n){return t=e,r=n,!Object.prototype.hasOwnProperty.call(t,r);var t,r}))&&p("changeField"),n},selector:function(e){d(e)||p("selectorType")},handler:function(e){d(e)||f(e)||p("handlerType"),f(e)&&Object.values(e).some((function(e){return!d(e)}))&&p("handlersType")},initial:function(e){var n;e||p("initialIsRequired"),f(e)||p("initialType"),n=e,Object.keys(n).length||p("initialContent")}};function h(e,n){return d(n)?n(e.current):n}function y(e,n){return e.current=l(l({},e.current),n),n}function b(e,n,t){return d(n)?n(e.current):Object.keys(t).forEach((function(t){var r;return null===(r=n[t])||void 0===r?void 0:r.call(n,e.current[t])})),t}var m,v={create:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g.initial(e),g.handler(n);var t={current:e},r=s(b)(t,n),o=s(y)(t),i=s(g.changes)(e),c=s(h)(t);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return g.selector(e),e(t.current)},function(e){!function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}(r,o,i,c)(e)}]}},O=v,w={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},j=function(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}((function(e,n){throw new Error(e[n]||e.default)}))(w),M={config:function(e){return e||j("configIsRequired"),function(e){return{}.toString.call(e).includes("Object")}(e)||j("configType"),e.urls?(console.warn(w.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},P=M,E=function e(n,t){return Object.keys(t).forEach((function(r){t[r]instanceof Object&&n[r]&&Object.assign(t[r],e(n[r],t[r]))})),i(i({},n),t)},T={type:"cancelation",msg:"operation is manually canceled"},k=function(e){var n=!1,t=new Promise((function(t,r){e.then((function(e){return n?r(T):t(e)})),e.catch(r)}));return t.cancel=function(){return n=!0},t},R=(2,function(e){if(Array.isArray(e))return e}(m=O.create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),2!==t.length);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}}(m)||function(e,n){if(e){if("string"==typeof e)return c(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,2):void 0}}(m)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),S=R[0],C=R[1];function I(e){return document.body.appendChild(e)}function V(e){var n=S((function(e){return{config:e.config,reject:e.reject}})),t=function(e){var n=document.createElement("script");return e&&(n.src=e),n}("".concat(n.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=n.reject,t}function _(){var e=S((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],(function(n){L(n),e.resolve(n)}),(function(n){e.reject(n)}))}function L(e){S().monaco||C({monaco:e})}var x=new Promise((function(e,n){return C({resolve:e,reject:n})})),A={config:function(e){var n=P.config(e),t=n.monaco,r=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(n,["monaco"]);C((function(e){return{config:E(e.config,r),monaco:t}}))},init:function(){var e=S((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(C({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),k(x);if(window.monaco&&window.monaco.editor)return L(window.monaco),e.resolve(window.monaco),k(x);!function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}(I,V)(_)}return k(x)},__getMonacoInstance:function(){return S((function(e){return e.monaco}))}},D=A,q=t(7294),N=t(5697),z=t.n(N);function F(){return F=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},F.apply(this,arguments)}const U={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var W=function({content:e}){return q.createElement("div",{style:U},e)},B={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function Y({width:e,height:n,isEditorReady:t,loading:r,_ref:o,className:i,wrapperProps:c}){return q.createElement("section",F({style:{...B.wrapper,width:e,height:n}},c),!t&&q.createElement(W,{content:r}),q.createElement("div",{ref:o,style:{...B.fullWidth,...!t&&B.hide},className:i}))}Y.propTypes={width:z().oneOfType([z().number,z().string]).isRequired,height:z().oneOfType([z().number,z().string]).isRequired,loading:z().oneOfType([z().element,z().string]).isRequired,isEditorReady:z().bool.isRequired,className:z().string,wrapperProps:z().object};var H=Y,$=(0,q.memo)(H),G=function(e){(0,q.useEffect)(e,[])},J=function(e,n,t=!0){const r=(0,q.useRef)(!0);(0,q.useEffect)(r.current||!t?()=>{r.current=!1}:e,n)};function K(){}function Q(e,n,t,r){return function(e,n){return e.editor.getModel(X(e,n))}(e,r)||function(e,n,t,r){return e.editor.createModel(n,t,r&&X(e,r))}(e,n,t,r)}function X(e,n){return e.Uri.parse(n)}function Z({original:e,modified:n,language:t,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:c,keepCurrentOriginalModel:u,keepCurrentModifiedModel:a,theme:l,loading:s,options:f,height:d,width:p,className:g,wrapperProps:h,beforeMount:y,onMount:b}){const[m,v]=(0,q.useState)(!1),[O,w]=(0,q.useState)(!0),j=(0,q.useRef)(null),M=(0,q.useRef)(null),P=(0,q.useRef)(null),E=(0,q.useRef)(b),T=(0,q.useRef)(y);G((()=>{const e=D.init();return e.then((e=>(M.current=e)&&w(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>j.current?function(){const e=j.current.getModel();var n,t;u||null===(n=e.original)||void 0===n||n.dispose(),a||null===(t=e.modified)||void 0===t||t.dispose(),j.current.dispose()}():e.cancel()})),J((()=>{const e=j.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(n):n!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),e.pushUndoStop())}),[n],m),J((()=>{j.current.getModel().original.setValue(e)}),[e],m),J((()=>{const{original:e,modified:n}=j.current.getModel();M.current.editor.setModelLanguage(e,r||t),M.current.editor.setModelLanguage(n,o||t)}),[t,r,o],m),J((()=>{M.current.editor.setTheme(l)}),[l],m),J((()=>{j.current.updateOptions(f)}),[f],m);const k=(0,q.useCallback)((()=>{T.current(M.current);const u=Q(M.current,e,r||t,i),a=Q(M.current,n,o||t,c);j.current.setModel({original:u,modified:a})}),[t,n,o,e,r,i,c]),R=(0,q.useCallback)((()=>{j.current=M.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...f}),k(),M.current.editor.setTheme(l),v(!0)}),[f,l,k]);return(0,q.useEffect)((()=>{m&&E.current(j.current,M.current)}),[m]),(0,q.useEffect)((()=>{!O&&!m&&R()}),[O,m,R]),q.createElement($,{width:p,height:d,isEditorReady:m,loading:s,_ref:P,className:g,wrapperProps:h})}Z.propTypes={original:z().string,modified:z().string,language:z().string,originalLanguage:z().string,modifiedLanguage:z().string,originalModelPath:z().string,modifiedModelPath:z().string,keepCurrentOriginalModel:z().bool,keepCurrentModifiedModel:z().bool,theme:z().string,loading:z().oneOfType([z().element,z().string]),options:z().object,width:z().oneOfType([z().number,z().string]),height:z().oneOfType([z().number,z().string]),className:z().string,wrapperProps:z().object,beforeMount:z().func,onMount:z().func},Z.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:K,onMount:K};var ee=function(e){const n=(0,q.useRef)();return(0,q.useEffect)((()=>{n.current=e}),[e]),n.current};const ne=new Map;function te({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:o,path:i,theme:c,line:u,loading:a,options:l,overrideServices:s,saveViewState:f,keepCurrentModel:d,width:p,height:g,className:h,wrapperProps:y,beforeMount:b,onMount:m,onChange:v,onValidate:O}){const[w,j]=(0,q.useState)(!1),[M,P]=(0,q.useState)(!0),E=(0,q.useRef)(null),T=(0,q.useRef)(null),k=(0,q.useRef)(null),R=(0,q.useRef)(m),S=(0,q.useRef)(b),C=(0,q.useRef)(null),I=(0,q.useRef)(r),V=ee(i),_=(0,q.useRef)(!1);G((()=>{const e=D.init();return e.then((e=>(E.current=e)&&P(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>T.current?function(){var e,n;null===(e=C.current)||void 0===e||e.dispose(),d?f&&ne.set(i,T.current.saveViewState()):null===(n=T.current.getModel())||void 0===n||n.dispose(),T.current.dispose()}():e.cancel()})),J((()=>{const t=Q(E.current,e||r,n||o,i);t!==T.current.getModel()&&(f&&ne.set(V,T.current.saveViewState()),T.current.setModel(t),f&&T.current.restoreViewState(ne.get(i)))}),[i],w),J((()=>{T.current.updateOptions(l)}),[l],w),J((()=>{T.current.getOption(E.current.editor.EditorOption.readOnly)?T.current.setValue(r):r!==T.current.getValue()&&(T.current.executeEdits("",[{range:T.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),T.current.pushUndoStop())}),[r],w),J((()=>{E.current.editor.setModelLanguage(T.current.getModel(),o)}),[o],w),J((()=>{void 0!==u&&T.current.revealLine(u)}),[u],w),J((()=>{E.current.editor.setTheme(c)}),[c],w);const L=(0,q.useCallback)((()=>{if(!_.current){S.current(E.current);const u=i||t,a=Q(E.current,r||e,n||o,u);T.current=E.current.editor.create(k.current,{model:a,automaticLayout:!0,...l},s),f&&T.current.restoreViewState(ne.get(u)),E.current.editor.setTheme(c),j(!0),_.current=!0}}),[e,n,t,r,o,i,l,s,f,c]);return(0,q.useEffect)((()=>{w&&R.current(T.current,E.current)}),[w]),(0,q.useEffect)((()=>{!M&&!w&&L()}),[M,w,L]),I.current=r,(0,q.useEffect)((()=>{var e,n;w&&v&&(null===(e=C.current)||void 0===e||e.dispose(),C.current=null===(n=T.current)||void 0===n?void 0:n.onDidChangeModelContent((e=>{v(T.current.getValue(),e)})))}),[w,v]),(0,q.useEffect)((()=>{if(w){const e=E.current.editor.onDidChangeMarkers((e=>{var n;const t=null===(n=T.current.getModel())||void 0===n?void 0:n.uri;if(t&&e.find((e=>e.path===t.path))){const e=E.current.editor.getModelMarkers({resource:t});null==O||O(e)}}));return()=>{null==e||e.dispose()}}}),[w,O]),q.createElement($,{width:p,height:g,isEditorReady:w,loading:a,_ref:k,className:h,wrapperProps:y})}te.propTypes={defaultValue:z().string,defaultPath:z().string,defaultLanguage:z().string,value:z().string,language:z().string,path:z().string,theme:z().string,line:z().number,loading:z().oneOfType([z().element,z().string]),options:z().object,overrideServices:z().object,saveViewState:z().bool,keepCurrentModel:z().bool,width:z().oneOfType([z().number,z().string]),height:z().oneOfType([z().number,z().string]),className:z().string,wrapperProps:z().object,beforeMount:z().func,onMount:z().func,onChange:z().func,onValidate:z().func},te.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:K,onMount:K,onValidate:K}},2703:function(e,n,t){"use strict";var r=t(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},5697:function(e,n,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);