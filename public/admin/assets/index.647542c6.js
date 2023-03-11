import{p as Y,v as R,T as ae,a as U,g as G,i as q,b as Q,c as z,d as H,s as ie,e as C,r as te,F as $,f as de,h as J,N as A,j as le,G as me,k as re,R as V,l as K,m as S,u as X,n as oe,o as se,_ as ue,q as pe,t as ce,w as ke,x as ye,M as Z,y as Ne,z as fe}from"./vendor.fa9427ba.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const ve=async({schema:e,optimizedDocumentNode:n})=>{const t=[],i=R(n,{OperationDefinition:l=>l.name?l:{...l,name:{kind:"Name",value:"QueryOperation"}}}),r=new ae(e),p=l=>{var k;return{...l,selectionSet:{...l.selectionSet||{kind:"SelectionSet",selections:[]},selections:[...((k=l.selectionSet)==null?void 0:k.selections)||[],...Te]}}},s=(l,k)=>{let u=k;const g=[];return l.forEach(T=>{u=u[T],Array.isArray(u)||u.kind==="Field"&&g.push(u.name.value)}),g},m=(l,k,u,g,T)=>{const y=s(g,T[0]),c=h=>{var w,P;const b=[];return R(h,U(r,{Field:{enter:D=>{var I,F,E;if(r.enter(D),D.name.value!==h.name.value)if((I=D.selectionSet)!=null&&I.selections.length){const j=c(D);return b.push({name:D.name.value,alias:((F=D.alias)==null?void 0:F.value)||D.name.value,fields:j.fields}),!1}else b.push({name:D.name.value,alias:((E=D.alias)==null?void 0:E.value)||D.name.value})},leave:D=>{r.leave(D)}}})),b!=null&&b.length?{name:h.name.value,alias:((w=h.alias)==null?void 0:w.value)||h.name.value,fields:b}:{name:h.name.value,alias:((P=h.alias)==null?void 0:P.value)||h.name.value}},N=c(l),_=(h=>{if(!h)return[];const w=((D,I)=>D.reduce((F,E)=>({...F,[E[I]]:[...F[E[I]]||[],E]}),{}))(h,"alias"),P=[];return Object.entries(w).forEach(([D,I])=>{const F=[];I.forEach(ee=>{var B;(B=ee.fields)==null||B.forEach(ne=>F.push(ne))});const E=I[0].name,j=I[0].alias;F!=null&&F.length?P.push({name:E,alias:j,fields:F}):P.push({name:E,alias:j})}),P})(N.fields);_!=null&&_.length?t.push({name:N.name,alias:N.alias,fields:_,path:y}):t.push({name:N.name,alias:N.alias,path:y})},f={InlineFragment:{enter:l=>{r.enter(l)},leave:l=>{r.leave(l)}},Field:{enter:(l,k,u,g,T)=>{r.enter(l);const y=r.getType();if(y){const c=G(y);if(q(c)&&c.name==="Node"||Q(c)&&c.getTypes().every(O=>O.getInterfaces().some(_=>_.name==="Node"))||z(c)&&c.getInterfaces().some(N=>N.name==="Node"))return p(l)}}}},o={InlineFragment:{enter:l=>{r.enter(l)},leave:l=>{r.leave(l)}},Field:{enter:(l,k,u,g,T)=>{r.enter(l);const y=r.getType();if(y){const c=G(y);if(q(c)&&c.name==="Node"||Q(c)&&c.getTypes().every(O=>O.getInterfaces().some(_=>_.name==="Node"))||z(c)&&c.getInterfaces().some(N=>N.name==="Node"))return m(l,k,u,g,T),!1}}}},v=R(i,U(r,f));return R(v,U(r,o)),{formifiedQuery:v,blueprints:t}},ge=Y(`
 query Sample {
  ...on Document {
    _internalValues: _values
    _internalSys: _sys {
      breadcrumbs
      basename
      filename
      path
      extension
      relativePath
      title
      template
      collection {
        name
        slug
        label
        path
        format
        matches
        templates
        fields
        __typename
      }
      __typename
    }
  }
 }`),Te=ge.definitions[0].selectionSet.selections,De=H({schema:{context:{},services:{},events:{}},id:"(machine)",initial:"initializing",states:{initializing:{invoke:{src:"initializer",onDone:[{actions:["storeFormAndData","notifyParent"],target:"ready"}],onError:[{actions:"handleError",target:"error"}]}},ready:{},error:{}}},{actions:{notifyParent:ie(e=>({type:"DOCUMENT_READY",value:e.id})),handleError:(e,n)=>{console.error(n.data)},storeFormAndData:C((e,n)=>({...e,form:n.data.form,data:n.data.data}))},services:{initializer:async e=>{const n=e.cms.api.tina;let t;e.data?t=e.data:t=(await n.request(`query GetNode($id: String!) {
        node(id: $id) {
          ...on Document {
            _internalValues: _values
            _internalSys: _sys {
              breadcrumbs
              basename
              filename
              path
              extension
              relativePath
              title
              template
              collection {
                name
                slug
                label
                path
                format
                matches
                templates
                fields
                __typename
              }
              __typename
            }
          }
        }
      }`,{variables:{id:e.id}})).node;const d=e.cms.api.tina.schema;if(!d)throw new Error("Schema must be provided");const a=d.getCollection(t._internalSys.collection.name);let i;if(a.templates?i=a.templates.find(o=>{if(typeof o=="string")throw new Error("Global templates not supported");return o.name===t._internalSys.template}):i=a,!i)throw new Error(`Unable to find template for node ${t._internalSys.path}`);const r=te({collection:a,basename:t._internalSys.filename,schema:d,template:i}),p=async o=>{try{const v=`#graphql
              mutation UpdateDocument($collection: String!, $relativePath: String!, $params: DocumentUpdateMutation!) {
                updateDocument(collection: $collection, relativePath: $relativePath, params: $params) {
                  __typename
                }
              }
            `;await e.cms.api.tina.request(v,{variables:{collection:t._internalSys.collection.name,relativePath:t._internalSys.relativePath,params:d.transformPayload(t._internalSys.collection.name,o)}}),e.cms.alerts.success("Document saved!")}catch(v){e.cms.alerts.error("There was a problem saving your document"),console.error(v)}},s={id:e.id,label:t._internalSys.title||t._internalSys.collection.label,initialValues:t._internalValues,fields:r.fields,onSubmit:p},m=e.formifyCallback;return{form:be(s,e.cms,o=>m?m(o,e.cms):o.createForm(o.formConfig),!0),data:t}}}}),he=(e,n)=>({createForm:a=>new $(a),createGlobalForm:(a,i)=>new $({...a,global:{global:!0,...i}})}),be=(e,n,t,d=!1,a)=>{const{createForm:i,createGlobalForm:r}=he(),p="SKIPPED";let s,m;const f=()=>{m=p};if(!m){if(t?s=t({formConfig:e,createForm:i,createGlobalForm:r,skip:f},n):s=i(e),!(s instanceof $)){if(m===p)return;throw new Error("formify must return a form or skip()")}return s}},x={id:null,data:null,variables:{},documentMap:{},documents:[],documentNode:{kind:"Document",definitions:[]},iframe:null},Se=H({tsTypes:{},schema:{context:{},services:{},events:{}},id:"(machine)",type:"parallel",states:{pipeline:{initial:"idle",states:{idle:{entry:"clear",on:{ADD_QUERY:{target:"initializing"},SUBDOCUMENTS:{target:"pending"},IFRAME_MOUNTED:{actions:"setIframe"}}},initializing:{invoke:{src:"initializer",onDone:[{actions:"storeInitialValues",target:"pending"}],onError:[{actions:"handleError",target:"error"}]}},waiting:{on:{DOCUMENT_READY:{target:"pending"}}},pending:{invoke:{src:"setter",onDone:[{target:"ready"}],onError:[{actions:"handleMissingDocument",target:"waiting"}]}},ready:{entry:"resolveData",invoke:{src:"onChangeCallback"},on:{NAVIGATE:{target:"idle"},REMOVE_QUERY:{target:"idle"},FIELD_CHANGE:{target:"pending"}}},error:{}}}}},{actions:{handleError:(e,n)=>console.error(n.data),handleMissingDocument:C((e,n)=>{if(n.data instanceof W){if(e.documentMap[n.data.id]||!n.data.id)return e;const t=e.documents.find(a=>a._internalSys.path===n.data.id),d={ref:re(De.withContext({id:n.data.id,cms:e.cms,formifyCallback:e.formifyCallback,form:null,data:t||null}))};return{...e,documentMap:{...e.documentMap,[n.data.id]:{...d,skipFormRegister:n.data.skipFormRegister}}}}else return console.error(n.data),e}),clear:C(e=>(e.cms.forms.all().forEach(n=>{e.cms.forms.remove(n.id)}),{...x,formifyCallback:e.formifyCallback,cms:e.cms,iframe:e.iframe})),storeInitialValues:C((e,n)=>({...e,...n.data})),setIframe:C((e,n)=>({...e,iframe:n.value})),resolveData:C((e,n)=>{var t,d;return e.iframe&&((d=(t=e.iframe)==null?void 0:t.contentWindow)==null||d.postMessage({type:"updateData",id:e.id,data:n.data.data})),{...e,data:n.data.data}})},services:{setter:async e=>{const n=e.cms.api.tina.schema,t=e.cms.api.tina.gqlSchema,d=[],a=await de({schema:t,source:J(e.documentNode),rootValue:e.data,variableValues:e.variables,fieldResolver:(s,m,f,o)=>{var u,g,T;const v=o.fieldName,l=[];o.fieldNodes.forEach(y=>{y.alias&&l.push(y.alias.value)});let k=s[v];if(k||l.forEach(y=>{const c=s[y];c&&(k=c)}),v==="_sys")return s._internalSys;if(v==="_values")return s._internalValues;if(Fe(o.returnType)){const y=s[v];let c=!1;if(!y)return null;let N="";if(typeof y=="string"?(c=!0,N=y):N=y._internalSys.path,e.documentMap[N]){const _=(u=e.documentMap[N].ref.getSnapshot())==null?void 0:u.context;if(!_)throw new Error(`Document not set up properly for id: ${N}`);const{data:h,form:b}=_,w=b==null?void 0:b.values;if(!h||!b||!w)throw new Error(`Document not set up properly for id: ${N}`);const P=h._internalSys.collection.name,D=_.data,I=L({fields:b.fields,values:w,tinaSchema:n}),F=n.getTemplateForData({data:b.values,collection:n.getCollection(P)});return{...D,...I,_sys:h._internalSys,id:N,__typename:A.dataTypeName(F.namespace)}}else return(T=(g=o.path)==null?void 0:g.prev)!=null&&T.prev&&(c=!0),d.push({id:N,skipFormRegister:c}),null}return k}});if(d.length>0){const s=d[0];throw new W("Unable to resolve form for initial document",s.id,s.skipFormRegister)}const i="__meta__";function*r(s){const m=new Set;function*f(o,v=[]){if(!m.has(o)){m.add(o);for(let l of Object.keys(o)){const k=v.concat(l);yield[l,o[l],k,o],o[l]!==null&&typeof o[l]=="object"&&["_internalSys","_internalValues","_sys",i].includes(l)&&(yield*f(o[l],k))}}}yield*f(s)}const p=[];for(let[s,m,f,o]of r(a.data))if(m!=null&&m._internalSys){p.push(f);const v={},k=p.filter(u=>f.join(".").startsWith(u.join("."))).reduce(function(u,g){return u.length<g.length?u:g});Object.keys(m).map(u=>{if(["__typename","_internalSys","_internalValues","_sys"].includes(u))return!1;v[u]=[...f.slice(k.length+1),u].join(".")}),m[i]={id:m==null?void 0:m._internalSys.path,name:f.slice(k.length).join("."),fields:v}}else if(typeof m=="object"&&!Array.isArray(m)&&m!==null&&s!==i){const v=p.filter(l=>f.join(".").startsWith(l.join(".")));if(v.length){const l=v.reduce(function(T,y){return T.length<y.length?T:y}),u=le(a.data,l.join("."))._internalSys.path,g={};Object.keys(m).map(T=>{if(["__typename","_internalSys","_internalValues","_sys"].includes(T))return!1;g[T]=[...f.slice(l.length),T].join(".")}),m[i]={id:u,name:f.slice(l.length).join("."),fields:g}}}return{data:a.data}},initializer:async(e,n)=>{const d=await e.cms.api.tina.getSchema(),a=Y(n.value.query),{formifiedQuery:i}=await ve({schema:d,optimizedDocumentNode:a}),r=await e.cms.api.tina.request(J(i),{variables:n.value.variables}),p=[];return JSON.stringify(r,(s,m)=>(m!=null&&m._internalValues&&p.push(m),m)),{data:r,documents:p,variables:n.value.variables,documentNode:i,id:n.value.id}},onChangeCallback:e=>(n,t)=>{const d=e.cms.api.tina.schema;Object.values(e.documentMap).forEach(a=>{var s,m,f;if(!e.registerSubForms&&a.skipFormRegister)return;const i=(s=a.ref.getSnapshot())==null?void 0:s.context,r=(m=i==null?void 0:i.data)==null?void 0:m._internalSys.collection.name,p=d.getCollection(r||"");i!=null&&i.form&&((f=p.ui)!=null&&f.global?e.cms.plugins.add(new me(i.form)):e.cms.forms.add(i.form))})}}});class W extends Error{constructor(n,t,d){super(n),this.name="QueryError",this.id=t,this.skipFormRegister=d}}const Fe=e=>{const n=G(e);if(q(n)&&n.name==="Node"||Q(n)&&n.getTypes().every(d=>d.getInterfaces().some(a=>a.name==="Node"))||z(n)&&n.getInterfaces().some(t=>t.name==="Node"))return!0},L=({fields:e,values:n,tinaSchema:t})=>{const d={};return e.forEach(a=>{const i=n[a.name];typeof i>"u"||i!==null&&(d[a.name]=_e({field:a,value:i,tinaSchema:t}))}),d},_e=({field:e,value:n,tinaSchema:t})=>{switch(e.type){case"object":{if(e.templates&&e.list&&Array.isArray(n))return n.map(a=>{const i=e.templates[a._template];if(typeof i=="string")throw new Error("Global templates not supported");return{__typename:A.dataTypeName(i.namespace),...L({fields:i.fields,values:a,tinaSchema:t})}});const d=e.fields;if(typeof d=="string")throw new Error("Global templates not supported");if(!d)throw new Error(`Expected to find sub-fields on field ${e.name}`);if(e.list){if(Array.isArray(n))return n.map(a=>({__typename:A.dataTypeName(e.namespace),...L({fields:d,values:a,tinaSchema:t})}))}else return{__typename:A.dataTypeName(e.namespace),...L({fields:d,values:n,tinaSchema:t})}}default:return n}},Ie=e=>{const[n,t]=V.useState(null);return V.useEffect(()=>{e.iframeRef.current&&(window.addEventListener("message",d=>{d.data.type==="open"&&t(d.data)}),window.addEventListener("message",d=>{var a,i,r,p;((a=d==null?void 0:d.data)==null?void 0:a.type)==="isEditMode"&&((p=(r=(i=e.iframeRef)==null?void 0:i.current)==null?void 0:r.contentWindow)==null||p.postMessage({type:"tina:editMode"}))}))},[e.iframeRef.current]),K("div",{className:"tina-tailwind",children:[n&&S(Ee,{payload:n,iframeRef:e.iframeRef,formifyCallback:e.formifyCallback},n.id),S("iframe",{"data-test":"tina-iframe",id:"tina-iframe",ref:e.iframeRef,className:"h-screen w-full bg-white",src:e.url})]})},Ee=e=>{const n=X(),t=V.useMemo(()=>Se.withContext({...x,cms:n,formifyCallback:e.formifyCallback}),[]),[d,a]=oe(t);return V.useEffect(()=>{const i=n.events.subscribe("forms:fields:onChange",p=>{Object.keys(d.context.documentMap).includes(p.formId)&&a({type:"FIELD_CHANGE"})}),r=n.events.subscribe("forms:reset",p=>{Object.keys(d.context.documentMap).includes(p.formId)&&a({type:"FIELD_CHANGE"})});return()=>{i(),r()}},[n,d.context.documentMap]),V.useEffect(()=>{d.matches("pipeline.ready")?n.events.dispatch({type:"forms:register",value:"complete"}):d.matches("pipeline.initializing")&&n.events.dispatch({type:"forms:register",value:"start"})},[JSON.stringify(d.value)]),V.useEffect(()=>{e.iframeRef.current&&(a({type:"IFRAME_MOUNTED",value:e.iframeRef.current}),e.payload.type==="open"&&a({type:"ADD_QUERY",value:e.payload}),window.addEventListener("message",i=>{i.data.type==="close"&&a({type:"REMOVE_QUERY"})}))},[e.iframeRef.current]),null},Ve=new Object({NODE_ENV:"production"}).HEAD||new Object({NODE_ENV:"production"}).VERCEL_GIT_COMMIT_REF||"main",M=se({branch:Ve,clientId:"b0cbd30d-c318-480b-ae05-b45d562d7b0f",token:"1119a786bc854f860520aad43e2e50ffda483c89",build:{outputFolder:"admin",publicFolder:"static"},media:{tina:{mediaRoot:"",publicFolder:"static"}},schema:{collections:[{label:"Pages",name:"pages",path:"content",fields:[{type:"rich-text",name:"body",label:"Body of Document",description:"This is the markdown body",isBody:!0}]}]}}),Pe="Document",we=[{kind:"ScalarTypeDefinition",name:{kind:"Name",value:"Reference"},description:{kind:"StringValue",value:"References another document, used as a foreign key"},directives:[]},{kind:"ScalarTypeDefinition",name:{kind:"Name",value:"JSON"},description:{kind:"StringValue",value:""},directives:[]},{kind:"ObjectTypeDefinition",interfaces:[],directives:[],name:{kind:"Name",value:"SystemInfo"},fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"filename"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"title"},arguments:[],type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"FieldDefinition",name:{kind:"Name",value:"basename"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"breadcrumbs"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"excludeExtension"},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}],type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"path"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"relativePath"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"extension"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"template"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"collection"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Collection"}}}}]},{kind:"ObjectTypeDefinition",interfaces:[],directives:[],name:{kind:"Name",value:"PageInfo"},fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"hasPreviousPage"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"hasNextPage"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"startCursor"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"endCursor"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}]},{kind:"InterfaceTypeDefinition",description:{kind:"StringValue",value:""},name:{kind:"Name",value:"Node"},interfaces:[],directives:[],fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"id"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}]},{kind:"InterfaceTypeDefinition",description:{kind:"StringValue",value:""},name:{kind:"Name",value:"Document"},interfaces:[],directives:[],fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"id"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"_sys"},arguments:[],type:{kind:"NamedType",name:{kind:"Name",value:"SystemInfo"}}},{kind:"FieldDefinition",name:{kind:"Name",value:"_values"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}}}}]},{kind:"InterfaceTypeDefinition",description:{kind:"StringValue",value:"A relay-compliant pagination connection"},name:{kind:"Name",value:"Connection"},interfaces:[],directives:[],fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"totalCount"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"pageInfo"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PageInfo"}}}}]},{kind:"ObjectTypeDefinition",interfaces:[],directives:[],name:{kind:"Name",value:"Query"},fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"getOptimizedQuery"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"queryString"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"FieldDefinition",name:{kind:"Name",value:"collection"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"collection"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Collection"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"collections"},arguments:[],type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Collection"}}}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"node"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"id"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Node"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"document"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"collection"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"relativePath"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"DocumentNode"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"pages"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"relativePath"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Pages"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"pagesConnection"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"before"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"after"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"first"},type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"last"},type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"sort"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"filter"},type:{kind:"NamedType",name:{kind:"Name",value:"PagesFilter"}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PagesConnection"}}}}]},{kind:"InputObjectTypeDefinition",name:{kind:"Name",value:"DocumentFilter"},fields:[{kind:"InputValueDefinition",name:{kind:"Name",value:"pages"},type:{kind:"NamedType",name:{kind:"Name",value:"PagesFilter"}}}]},{kind:"ObjectTypeDefinition",interfaces:[],directives:[],name:{kind:"Name",value:"DocumentConnectionEdges"},fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"cursor"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"node"},arguments:[],type:{kind:"NamedType",name:{kind:"Name",value:"DocumentNode"}}}]},{kind:"ObjectTypeDefinition",interfaces:[{kind:"NamedType",name:{kind:"Name",value:"Connection"}}],directives:[],name:{kind:"Name",value:"DocumentConnection"},fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"pageInfo"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PageInfo"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"totalCount"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"edges"},arguments:[],type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"DocumentConnectionEdges"}}}}]},{kind:"ObjectTypeDefinition",interfaces:[],directives:[],name:{kind:"Name",value:"Collection"},fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"name"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"slug"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"label"},arguments:[],type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"FieldDefinition",name:{kind:"Name",value:"path"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"format"},arguments:[],type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"FieldDefinition",name:{kind:"Name",value:"matches"},arguments:[],type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"FieldDefinition",name:{kind:"Name",value:"templates"},arguments:[],type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"fields"},arguments:[],type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"documents"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"before"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"after"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"first"},type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"last"},type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"sort"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"filter"},type:{kind:"NamedType",name:{kind:"Name",value:"DocumentFilter"}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"DocumentConnection"}}}}]},{kind:"UnionTypeDefinition",name:{kind:"Name",value:"DocumentNode"},directives:[],types:[{kind:"NamedType",name:{kind:"Name",value:"Pages"}}]},{kind:"ObjectTypeDefinition",interfaces:[{kind:"NamedType",name:{kind:"Name",value:"Node"}},{kind:"NamedType",name:{kind:"Name",value:"Document"}}],directives:[],name:{kind:"Name",value:"Pages"},fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"body"},arguments:[],type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}}},{kind:"FieldDefinition",name:{kind:"Name",value:"id"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"_sys"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"SystemInfo"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"_values"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}}}}]},{kind:"InputObjectTypeDefinition",name:{kind:"Name",value:"RichTextFilter"},fields:[{kind:"InputValueDefinition",name:{kind:"Name",value:"startsWith"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"eq"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"exists"},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}]},{kind:"InputObjectTypeDefinition",name:{kind:"Name",value:"PagesFilter"},fields:[{kind:"InputValueDefinition",name:{kind:"Name",value:"body"},type:{kind:"NamedType",name:{kind:"Name",value:"RichTextFilter"}}}]},{kind:"ObjectTypeDefinition",interfaces:[],directives:[],name:{kind:"Name",value:"PagesConnectionEdges"},fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"cursor"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"node"},arguments:[],type:{kind:"NamedType",name:{kind:"Name",value:"Pages"}}}]},{kind:"ObjectTypeDefinition",interfaces:[{kind:"NamedType",name:{kind:"Name",value:"Connection"}}],directives:[],name:{kind:"Name",value:"PagesConnection"},fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"pageInfo"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PageInfo"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"totalCount"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"edges"},arguments:[],type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"PagesConnectionEdges"}}}}]},{kind:"ObjectTypeDefinition",interfaces:[],directives:[],name:{kind:"Name",value:"Mutation"},fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"addPendingDocument"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"collection"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"relativePath"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"template"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"DocumentNode"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"updateDocument"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"collection"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"relativePath"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"params"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"DocumentUpdateMutation"}}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"DocumentNode"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"deleteDocument"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"collection"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"relativePath"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"DocumentNode"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"createDocument"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"collection"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"relativePath"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"params"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"DocumentMutation"}}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"DocumentNode"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"updatePages"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"relativePath"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"params"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PagesMutation"}}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Pages"}}}},{kind:"FieldDefinition",name:{kind:"Name",value:"createPages"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"relativePath"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"params"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PagesMutation"}}}}],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Pages"}}}}]},{kind:"InputObjectTypeDefinition",name:{kind:"Name",value:"DocumentUpdateMutation"},fields:[{kind:"InputValueDefinition",name:{kind:"Name",value:"pages"},type:{kind:"NamedType",name:{kind:"Name",value:"PagesMutation"}}},{kind:"InputValueDefinition",name:{kind:"Name",value:"relativePath"},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}]},{kind:"InputObjectTypeDefinition",name:{kind:"Name",value:"DocumentMutation"},fields:[{kind:"InputValueDefinition",name:{kind:"Name",value:"pages"},type:{kind:"NamedType",name:{kind:"Name",value:"PagesMutation"}}}]},{kind:"InputObjectTypeDefinition",name:{kind:"Name",value:"PagesMutation"},fields:[{kind:"InputValueDefinition",name:{kind:"Name",value:"body"},type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}}}]}],Me={kind:Pe,definitions:we},Ce=V.lazy(()=>ue(()=>import("./index.6a390a22.js"),["assets/index.6a390a22.js","assets/vendor.fa9427ba.js"])),Oe=e=>{const[n,t]=V.useState(!1);return S(Z.Component,{rawMode:n,setRawMode:t,...e,rawEditor:S(Ne.exports.Suspense,{fallback:S("div",{children:"Loading raw editor..."}),children:S(Ce,{...e,setRawMode:t,rawMode:n})})})},je=({outputFolder:e})=>{const n=X();return n.flags.set("tina-preview",e),n.fields.add({...Z,Component:Oe}),null},Re=()=>{const e={...M==null?void 0:M.schema,config:M};return K(ce,{...M,schema:e,client:{apiUrl:"https://content.tinajs.io/content/b0cbd30d-c318-480b-ae05-b45d562d7b0f/github/main"},children:[S(je,{outputFolder:M.build.outputFolder}),S(ke,{preview:Ie,config:M,schemaJson:Me})]})},Ae=()=>{const{setEdit:e}=ye();return e(!0),S("div",{children:"Going into edit mode"})};function Le(){return S(pe,{editMode:S(Re,{}),children:S(Ae,{})})}fe.render(S(V.StrictMode,{children:S(Le,{})}),document.getElementById("root"));
//# sourceMappingURL=index.647542c6.js.map
