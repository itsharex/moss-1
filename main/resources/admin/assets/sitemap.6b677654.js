import{u as y}from"./index.8b92274b.js";import{c as b,j as p,k as d,p as f,v as t,m as o,$ as u,F as _,i as V,l as g}from"./@vue.0987707a.js";import{S as w}from"./url.1d176357.js";import"./vue-router.0ed66d6f.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@arco-design.55369db5.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./@vueuse.d5398ce4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.506a45a0.js";import"./date-fns.a06005bd.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.c3c7eb03.js";import"./axios.b9f958b0.js";import"./vue-request.6886b8d7.js";/* empty css                    */const s={__name:"option",props:{data:Object},setup(a){y();const n=b(()=>[{label:"always",value:"always"},{label:"hourly",value:"hourly"},{label:"daily",value:"daily"},{label:"weekly",value:"weekly"},{label:"monthly",value:"monthly"},{label:"yearly",value:"yearly"},{label:"never",value:"never"}]);return(e,l)=>{const i=p("a-input-number"),m=p("a-form-item"),c=p("a-select");return d(),f(_,null,[t(m,{label:e.$t("limit")},{default:o(()=>[t(i,{modelValue:a.data.limit,"onUpdate:modelValue":l[0]||(l[0]=r=>a.data.limit=r),class:"w-64",min:0},null,8,["modelValue"])]),_:1},8,["label"]),t(m,{label:e.$t("changeFreq")},{default:o(()=>[t(c,{modelValue:a.data.change_freq,"onUpdate:modelValue":l[1]||(l[1]=r=>a.data.change_freq=r),options:u(n),class:"w-64"},null,8,["modelValue","options"])]),_:1},8,["label"]),t(m,{label:e.$t("priority")},{default:o(()=>[t(i,{modelValue:a.data.priority,"onUpdate:modelValue":l[2]||(l[2]=r=>a.data.priority=r),class:"w-64",min:0,max:1,step:.1,precision:1},null,8,["modelValue","max","step"])]),_:1},8,["label"]),t(m,{label:e.$t("withinHours")},{default:o(()=>[t(i,{modelValue:a.data.in_hours,"onUpdate:modelValue":l[3]||(l[3]=r=>a.data.in_hours=r),class:"w-64",min:0,placeholder:"all"},null,8,["modelValue"])]),_:1},8,["label"])],64)}}},et={__name:"sitemap",setup(a){const n=V("data");return(e,l)=>{const i=p("a-tab-pane"),m=p("a-tabs");return d(),g(m,{type:"card-gutter",animation:"",class:"mb-4",style:{"max-width":"600px"}},{default:o(()=>[t(i,{key:"article",title:e.$t("article"),class:"p-5"},{default:o(()=>[t(s,{data:u(n).article},null,8,["data"])]),_:1},8,["title"]),t(i,{key:"category",title:e.$t("category"),class:"p-5"},{default:o(()=>[t(s,{data:u(n).category},null,8,["data"])]),_:1},8,["title"]),t(i,{key:"tag",title:e.$t("tag"),class:"p-5"},{default:o(()=>[t(s,{data:u(n).tag},null,8,["data"])]),_:1},8,["title"]),t(i,{key:"router",title:e.$t("router"),class:"p-5"},{default:o(()=>[t(w,{class:"w-full"})]),_:1},8,["title"])]),_:1})}}};export{et as default};
