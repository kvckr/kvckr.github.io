/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define("vs/language/typescript/tsMode",["require","require"],(e=>(()=>{var t,i=Object.create,r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,a=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,l=e=>r(e,"__esModule",{value:!0}),d=(t=function(t){if(void 0!==e)return e.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')},void 0!==e?e:"undefined"!=typeof Proxy?new Proxy(t,{get:(t,i)=>(void 0!==e?e:t)[i]}):t),u=(e,t,i,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of n(t))!o.call(e,l)&&(i||"default"!==l)&&r(e,l,{get:()=>t[l],enumerable:!(a=s(t,l))||a.enumerable});return e},c=(e,t)=>u(l(r(null!=e?i(a(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),g=(e=>(t,i)=>e&&e.get(t)||(i=u(l({}),t,1),e&&e.set(t,i),i))("undefined"!=typeof WeakMap?new WeakMap:0),p=(e,t,i)=>(((e,t,i)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),m=((e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports))(((e,t)=>{var i=c(d("vs/editor/editor.api"));t.exports=i})),f={};((e,t)=>{for(var i in t)r(e,i,{get:t[i],enumerable:!0})})(f,{Adapter:()=>x,CodeActionAdaptor:()=>W,DefinitionAdapter:()=>L,DiagnosticsAdapter:()=>k,FormatAdapter:()=>E,FormatHelper:()=>R,FormatOnTypeAdapter:()=>H,InlayHintsAdapter:()=>j,Kind:()=>T,LibFiles:()=>v,OccurrencesAdapter:()=>I,OutlineAdapter:()=>O,QuickInfoAdapter:()=>F,ReferenceAdapter:()=>P,RenameAdapter:()=>V,SignatureHelpAdapter:()=>A,SuggestAdapter:()=>C,WorkerManager:()=>h,flattenDiagnosticMessageText:()=>w,getJavaScriptWorker:()=>$,getTypeScriptWorker:()=>z,setupJavaScript:()=>U,setupTypeScript:()=>B});var b={};u(b,c(m()));var h=class{_modeId;_defaults;_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}async _updateExtraLibs(){if(!this._worker)return;let e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){if(!this._client){this._worker=b.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});let e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then((e=>this._worker?this._worker.withSyncedResources(b.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):e))),this._client=e}return this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}},_=d("./monaco.contribution"),y={};function w(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let r="";if(i){r+=t;for(let e=0;e<i;e++)r+="  "}if(r+=e.messageText,i++,e.next)for(let s of e.next)r+=w(s,t,i);return r}function S(e){return e?e.map((e=>e.text)).join(""):""}y["lib.d.ts"]=!0,y["lib.dom.d.ts"]=!0,y["lib.dom.iterable.d.ts"]=!0,y["lib.es2015.collection.d.ts"]=!0,y["lib.es2015.core.d.ts"]=!0,y["lib.es2015.d.ts"]=!0,y["lib.es2015.generator.d.ts"]=!0,y["lib.es2015.iterable.d.ts"]=!0,y["lib.es2015.promise.d.ts"]=!0,y["lib.es2015.proxy.d.ts"]=!0,y["lib.es2015.reflect.d.ts"]=!0,y["lib.es2015.symbol.d.ts"]=!0,y["lib.es2015.symbol.wellknown.d.ts"]=!0,y["lib.es2016.array.include.d.ts"]=!0,y["lib.es2016.d.ts"]=!0,y["lib.es2016.full.d.ts"]=!0,y["lib.es2017.d.ts"]=!0,y["lib.es2017.full.d.ts"]=!0,y["lib.es2017.intl.d.ts"]=!0,y["lib.es2017.object.d.ts"]=!0,y["lib.es2017.sharedmemory.d.ts"]=!0,y["lib.es2017.string.d.ts"]=!0,y["lib.es2017.typedarrays.d.ts"]=!0,y["lib.es2018.asyncgenerator.d.ts"]=!0,y["lib.es2018.asynciterable.d.ts"]=!0,y["lib.es2018.d.ts"]=!0,y["lib.es2018.full.d.ts"]=!0,y["lib.es2018.intl.d.ts"]=!0,y["lib.es2018.promise.d.ts"]=!0,y["lib.es2018.regexp.d.ts"]=!0,y["lib.es2019.array.d.ts"]=!0,y["lib.es2019.d.ts"]=!0,y["lib.es2019.full.d.ts"]=!0,y["lib.es2019.object.d.ts"]=!0,y["lib.es2019.string.d.ts"]=!0,y["lib.es2019.symbol.d.ts"]=!0,y["lib.es2020.bigint.d.ts"]=!0,y["lib.es2020.d.ts"]=!0,y["lib.es2020.full.d.ts"]=!0,y["lib.es2020.intl.d.ts"]=!0,y["lib.es2020.promise.d.ts"]=!0,y["lib.es2020.sharedmemory.d.ts"]=!0,y["lib.es2020.string.d.ts"]=!0,y["lib.es2020.symbol.wellknown.d.ts"]=!0,y["lib.es2021.d.ts"]=!0,y["lib.es2021.full.d.ts"]=!0,y["lib.es2021.intl.d.ts"]=!0,y["lib.es2021.promise.d.ts"]=!0,y["lib.es2021.string.d.ts"]=!0,y["lib.es2021.weakref.d.ts"]=!0,y["lib.es5.d.ts"]=!0,y["lib.es6.d.ts"]=!0,y["lib.esnext.d.ts"]=!0,y["lib.esnext.full.d.ts"]=!0,y["lib.esnext.intl.d.ts"]=!0,y["lib.esnext.promise.d.ts"]=!0,y["lib.esnext.string.d.ts"]=!0,y["lib.esnext.weakref.d.ts"]=!0,y["lib.scripthost.d.ts"]=!0,y["lib.webworker.d.ts"]=!0,y["lib.webworker.importscripts.d.ts"]=!0,y["lib.webworker.iterable.d.ts"]=!0;var x=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length),{lineNumber:s,column:n}=i,{lineNumber:a,column:o}=r;return{startLineNumber:s,startColumn:n,endLineNumber:a,endColumn:o}}},v=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return!(!e||0!==e.path.indexOf("/lib."))&&!!y[e.path.slice(1)]}getOrCreateModel(e){let t=b.Uri.parse(e),i=b.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return b.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);let r=_.typescriptDefaults.getExtraLibs()[e];return r?b.editor.createModel(r.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){!this._containsLibFile(e)||await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},k=class extends x{constructor(e,t,i,r){super(r),this._libFiles=e,this._defaults=t,this._selector=i;let s=e=>{if(e.getLanguageId()!==i)return;let t,r=()=>{let{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)},s=e.onDidChangeContent((()=>{clearTimeout(t),t=window.setTimeout(r,500)})),n=e.onDidChangeAttached((()=>{let{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t&&(e.isAttachedToEditor()?r():b.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){s.dispose(),n.dispose(),clearTimeout(t)}},r()},n=e=>{b.editor.setModelMarkers(e,this._selector,[]);let t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(b.editor.onDidCreateModel((e=>s(e)))),this._disposables.push(b.editor.onWillDisposeModel(n)),this._disposables.push(b.editor.onDidChangeModelLanguage((e=>{n(e.model),s(e.model)}))),this._disposables.push({dispose(){for(let e of b.editor.getModels())n(e)}});let a=()=>{for(let e of b.editor.getModels())n(e),s(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),b.editor.getModels().forEach((e=>s(e)))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){let t=await this._worker(e.uri);if(e.isDisposed())return;let i=[],{noSyntaxValidation:r,noSemanticValidation:s,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();r||i.push(t.getSyntacticDiagnostics(e.uri.toString())),s||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));let a=await Promise.all(i);if(!a||e.isDisposed())return;let o=a.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),l=o.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?b.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(l),!e.isDisposed()&&b.editor.setModelMarkers(e,this._selector,o.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){let i=t.start||0,r=t.length||1,{lineNumber:s,column:n}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+r),l=[];return t.reportsUnnecessary&&l.push(b.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(b.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:s,startColumn:n,endLineNumber:a,endColumn:o,message:w(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];let i=[];return t.forEach((t=>{let r=e;if(t.file&&(r=this._libFiles.getOrCreateModel(t.file.fileName)),!r)return;let s=t.start||0,n=t.length||1,{lineNumber:a,column:o}=r.getPositionAt(s),{lineNumber:l,column:d}=r.getPositionAt(s+n);i.push({resource:r.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:d,message:w(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return b.MarkerSeverity.Error;case 3:return b.MarkerSeverity.Info;case 0:return b.MarkerSeverity.Warning;case 2:return b.MarkerSeverity.Hint}return b.MarkerSeverity.Info}},C=class extends x{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,r){let s=e.getWordUntilPosition(t),n=new b.Range(t.lineNumber,s.startColumn,t.lineNumber,s.endColumn),a=e.uri,o=e.getOffsetAt(t),l=await this._worker(a);if(e.isDisposed())return;let d=await l.getCompletionsAtPosition(a.toString(),o);return!d||e.isDisposed()?void 0:{suggestions:d.entries.map((i=>{let r=n;if(i.replacementSpan){let t=e.getPositionAt(i.replacementSpan.start),s=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);r=new b.Range(t.lineNumber,t.column,s.lineNumber,s.column)}let s=[];return-1!==i.kindModifiers?.indexOf("deprecated")&&s.push(b.languages.CompletionItemTag.Deprecated),{uri:a,position:t,offset:o,range:r,label:i.name,insertText:i.name,sortText:i.sortText,kind:C.convertKind(i.kind),tags:s}}))}}async resolveCompletionItem(e,t){let i=e,r=i.uri,s=i.position,n=i.offset,a=await(await this._worker(r)).getCompletionEntryDetails(r.toString(),n,i.label);return a?{uri:r,position:s,label:a.name,kind:C.convertKind(a.kind),detail:S(a.displayParts),documentation:{value:C.createDocumentationString(a)}}:i}static convertKind(e){switch(e){case T.primitiveType:case T.keyword:return b.languages.CompletionItemKind.Keyword;case T.variable:case T.localVariable:return b.languages.CompletionItemKind.Variable;case T.memberVariable:case T.memberGetAccessor:case T.memberSetAccessor:return b.languages.CompletionItemKind.Field;case T.function:case T.memberFunction:case T.constructSignature:case T.callSignature:case T.indexSignature:return b.languages.CompletionItemKind.Function;case T.enum:return b.languages.CompletionItemKind.Enum;case T.module:return b.languages.CompletionItemKind.Module;case T.class:return b.languages.CompletionItemKind.Class;case T.interface:return b.languages.CompletionItemKind.Interface;case T.warning:return b.languages.CompletionItemKind.File}return b.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=S(e.documentation);if(e.tags)for(let i of e.tags)t+=`\n\n${D(i)}`;return t}};function D(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){let[i,...r]=e.text;t+=`\`${i.text}\``,r.length>0&&(t+=` — ${r.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var A=class extends x{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case b.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case b.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case b.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,r){let s=e.uri,n=e.getOffsetAt(t),a=await this._worker(s);if(e.isDisposed())return;let o=await a.getSignatureHelpItems(s.toString(),n,{triggerReason:A._toSignatureHelpTriggerReason(r)});if(!o||e.isDisposed())return;let l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{let t={label:"",parameters:[]};t.documentation={value:S(e.documentation)},t.label+=S(e.prefixDisplayParts),e.parameters.forEach(((i,r,s)=>{let n=S(i.displayParts),a={label:n,documentation:{value:S(i.documentation)}};t.label+=n,t.parameters.push(a),r<s.length-1&&(t.label+=S(e.separatorDisplayParts))})),t.label+=S(e.suffixDisplayParts),l.signatures.push(t)})),{value:l,dispose(){}}}},F=class extends x{async provideHover(e,t,i){let r=e.uri,s=e.getOffsetAt(t),n=await this._worker(r);if(e.isDisposed())return;let a=await n.getQuickInfoAtPosition(r.toString(),s);if(!a||e.isDisposed())return;let o=S(a.documentation),l=a.tags?a.tags.map((e=>D(e))).join("  \n\n"):"",d=S(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+d+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},I=class extends x{async provideDocumentHighlights(e,t,i){let r=e.uri,s=e.getOffsetAt(t),n=await this._worker(r);if(e.isDisposed())return;let a=await n.getOccurrencesAtPosition(r.toString(),s);return a&&!e.isDisposed()?a.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?b.languages.DocumentHighlightKind.Write:b.languages.DocumentHighlightKind.Text}))):void 0}},L=class extends x{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){let r=e.uri,s=e.getOffsetAt(t),n=await this._worker(r);if(e.isDisposed())return;let a=await n.getDefinitionAtPosition(r.toString(),s);if(!a||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>b.Uri.parse(e.fileName)))),e.isDisposed()))return;let o=[];for(let e of a){let t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}},P=class extends x{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,r){let s=e.uri,n=e.getOffsetAt(t),a=await this._worker(s);if(e.isDisposed())return;let o=await a.getReferencesAtPosition(s.toString(),n);if(!o||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>b.Uri.parse(e.fileName)))),e.isDisposed()))return;let l=[];for(let e of o){let t=this._libFiles.getOrCreateModel(e.fileName);t&&l.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return l}},O=class extends x{async provideDocumentSymbols(e,t){let i=e.uri,r=await this._worker(i);if(e.isDisposed())return;let s=await r.getNavigationBarItems(i.toString());if(!s||e.isDisposed())return;let n=(t,i,r)=>{let s={name:i.text,detail:"",kind:N[i.kind]||b.languages.SymbolKind.Variable,range:this._textSpanToRange(e,i.spans[0]),selectionRange:this._textSpanToRange(e,i.spans[0]),tags:[]};if(r&&(s.containerName=r),i.childItems&&i.childItems.length>0)for(let e of i.childItems)n(t,e,s.name);t.push(s)},a=[];return s.forEach((e=>n(a,e))),a}},T=class{};p(T,"unknown",""),p(T,"keyword","keyword"),p(T,"script","script"),p(T,"module","module"),p(T,"class","class"),p(T,"interface","interface"),p(T,"type","type"),p(T,"enum","enum"),p(T,"variable","var"),p(T,"localVariable","local var"),p(T,"function","function"),p(T,"localFunction","local function"),p(T,"memberFunction","method"),p(T,"memberGetAccessor","getter"),p(T,"memberSetAccessor","setter"),p(T,"memberVariable","property"),p(T,"constructorImplementation","constructor"),p(T,"callSignature","call"),p(T,"indexSignature","index"),p(T,"constructSignature","construct"),p(T,"parameter","parameter"),p(T,"typeParameter","type parameter"),p(T,"primitiveType","primitive type"),p(T,"label","label"),p(T,"alias","alias"),p(T,"const","const"),p(T,"let","let"),p(T,"warning","warning");var N=Object.create(null);N[T.module]=b.languages.SymbolKind.Module,N[T.class]=b.languages.SymbolKind.Class,N[T.enum]=b.languages.SymbolKind.Enum,N[T.interface]=b.languages.SymbolKind.Interface,N[T.memberFunction]=b.languages.SymbolKind.Method,N[T.memberVariable]=b.languages.SymbolKind.Property,N[T.memberGetAccessor]=b.languages.SymbolKind.Property,N[T.memberSetAccessor]=b.languages.SymbolKind.Property,N[T.variable]=b.languages.SymbolKind.Variable,N[T.const]=b.languages.SymbolKind.Variable,N[T.localVariable]=b.languages.SymbolKind.Variable,N[T.variable]=b.languages.SymbolKind.Variable,N[T.function]=b.languages.SymbolKind.Function,N[T.localFunction]=b.languages.SymbolKind.Function;var M,K,R=class extends x{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},E=class extends R{async provideDocumentRangeFormattingEdits(e,t,i,r){let s=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);if(e.isDisposed())return;let l=await o.getFormattingEditsForRange(s.toString(),n,a,R._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},H=class extends R{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,r,s){let n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;let l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,i,R._convertOptions(r));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},W=class extends R{async provideCodeActions(e,t,i,r){let s=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=R._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),d=await this._worker(s);if(e.isDisposed())return;let u=await d.getCodeFixesAtPosition(s.toString(),n,a,l,o);return!u||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:u.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){let r=[];for(let t of i.changes)for(let i of t.textChanges)r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,i.span),text:i.newText}});return{title:i.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}}},V=class extends x{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,r){let s=e.uri,n=s.toString(),a=e.getOffsetAt(t),o=await this._worker(s);if(e.isDisposed())return;let l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");let d=await o.findRenameLocations(n,a,!1,!1,!1);if(!d||e.isDisposed())return;let u=[];for(let e of d){let t=this._libFiles.getOrCreateModel(e.fileName);if(!t)throw new Error(`Unknown file ${e.fileName}.`);u.push({resource:t.uri,edit:{range:this._textSpanToRange(t,e.textSpan),text:i}})}return{edits:u}}},j=class extends x{async provideInlayHints(e,t,i){let r=e.uri,s=r.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);return e.isDisposed()?null:{hints:(await o.provideInlayHints(s,n,a)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return b.languages.InlayHintKind.Parameter;case"Type":return b.languages.InlayHintKind.Type;default:return b.languages.InlayHintKind.Other}}};function B(e){K=q(e,"typescript")}function U(e){M=q(e,"javascript")}function $(){return new Promise(((e,t)=>{if(!M)return t("JavaScript not registered!");e(M)}))}function z(){return new Promise(((e,t)=>{if(!K)return t("TypeScript not registered!");e(K)}))}function q(e,t){let i=new h(t,e),r=(...e)=>i.getLanguageServiceWorker(...e),s=new v(r);return b.languages.registerCompletionItemProvider(t,new C(r)),b.languages.registerSignatureHelpProvider(t,new A(r)),b.languages.registerHoverProvider(t,new F(r)),b.languages.registerDocumentHighlightProvider(t,new I(r)),b.languages.registerDefinitionProvider(t,new L(s,r)),b.languages.registerReferenceProvider(t,new P(s,r)),b.languages.registerDocumentSymbolProvider(t,new O(r)),b.languages.registerDocumentRangeFormattingEditProvider(t,new E(r)),b.languages.registerOnTypeFormattingEditProvider(t,new H(r)),b.languages.registerCodeActionProvider(t,new W(r)),b.languages.registerRenameProvider(t,new V(s,r)),b.languages.registerInlayHintsProvider(t,new j(r)),new k(s,e,t,r),r}return g(f)})()));