import{i as M,j as r,$ as a,k as g,p as $,v as n,m as t,y as h,z as p,F as H,s as ae,n as V,u as ie,l as O,X as Me,r as x,c as ne,a as oe,B as I,q as P,H as Pe,Y as Ue,O as He}from"./@vue.0987707a.js";import{u as F}from"./vue-request.6886b8d7.js";import{u as se,k as Ke,e as U,i as qe,m as Ee,n as Ge,o as Te,p as We,q as Ae,r as Je,s as Xe}from"./index.8b92274b.js";import{a as Ye}from"./@vueuse.d5398ce4.js";import{j as Qe,M as Ze}from"./@arco-design.55369db5.js";import{f as le}from"./naive-ui.506a45a0.js";const et={__name:"Checkbox",setup(e){const i=M("selectedKeys"),s=M("batchDelete"),o=M("modelName");return(v,_)=>{const y=r("icon-down"),m=r("a-button"),C=r("icon-delete"),S=r("a-doption"),L=r("a-dropdown"),R=r("a-tag");return a(i).length>0?(g(),$(H,{key:0},[n(L,{"popup-max-height":!1,trigger:"hover"},{content:t(()=>[n(S,{onClick:_[0]||(_[0]=B=>a(s)(a(o),a(i))),style:{color:"rgb(var(--red-6))"}},{icon:t(()=>[n(C)]),default:t(()=>[h(" "+p(v.$t("delete")),1)]),_:1})]),default:t(()=>[n(m,{size:"small"},{icon:t(()=>[n(y)]),default:t(()=>[h(" "+p(v.$t("action")),1)]),_:1})]),_:1}),n(R,{class:"ml-4 overflow-hidden",style:{"border-radius":"18px","background-color":"var(--color-fill-2)"},onClose:_[1]||(_[1]=B=>i.value=[]),closable:""},{default:t(()=>[h(p(v.$t("checked"))+" "+p(a(i).length),1)]),_:1})],64)):ae("",!0)}}},tt={class:"flex justify-between select-none"},nt={__name:"ColumnSearch",props:{filterValue:Object,setFilterValue:Function,handleFilterReset:Function,handleFilterConfirm:Function},setup(e){const i=se();return(s,o)=>{const v=r("a-input"),_=r("a-checkbox"),y=r("a-button"),m=r("a-space");return g(),$("div",{class:ie(["p-3 shadow-md",{border:!a(i).dark}]),style:{"background-color":"var(--color-bg-1)"}},[n(m,{direction:"vertical"},{default:t(()=>[n(v,{"model-value":e.filterValue[0],placeholder:s.$t("search"),onInput:o[0]||(o[0]=C=>e.setFilterValue([C,e.filterValue[1]]))},null,8,["model-value","placeholder"]),V("div",tt,[n(_,{modelValue:e.filterValue[1],"onUpdate:modelValue":o[1]||(o[1]=C=>e.filterValue[1]=C)},{default:t(()=>[h("Like")]),_:1},8,["modelValue"]),n(m,{class:"pl-5"},{default:t(()=>[n(y,{size:"mini",onClick:e.handleFilterReset},{default:t(()=>[h(p(s.$t("reset")),1)]),_:1},8,["onClick"]),n(y,{type:"primary",size:"mini",onClick:e.handleFilterConfirm},{default:t(()=>[h(p(s.$t("confirm")),1)]),_:1},8,["onClick"])]),_:1})])]),_:1})],2)}}},ot={__name:"Action",props:{record:Object,modelName:String,rowIndex:Number,runDelete:Function,onEdit:Function},setup(e){return(i,s)=>{const o=r("a-button"),v=r("icon-down"),_=r("icon-delete"),y=r("a-doption"),m=r("a-dropdown"),C=r("a-button-group");return g(),O(C,{size:"mini"},{default:t(()=>[n(o,{onClick:s[0]||(s[0]=S=>e.onEdit(e.record,e.rowIndex))},{default:t(()=>[h(p(i.$t("edit")),1)]),_:1}),n(m,{position:"br",size:"small"},{content:t(()=>[n(y,{onClick:s[1]||(s[1]=S=>e.runDelete(e.modelName,e.record.id)),style:{color:"rgb(var(--red-6))"}},{icon:t(()=>[n(_)]),default:t(()=>[h(" "+p(i.$t("delete")),1)]),_:1})]),default:t(()=>[n(o,null,{icon:t(()=>[n(v)]),_:1})]),_:1})]),_:1})}}},xt={slotName:"column-search",icon:()=>Me(Qe)};function lt(e,i,s,o){return{total:e.value?9999:i.value,defaultPageSize:s.limit,showTotal:!e.value,showJumper:!o.isMobile&&!e.value,showPageSize:!o.isMobile&&!e.value,simple:o.isMobile||e.value,pageSizeOptions:[10,20,30,40,50,100,500,1e3,2e3,5e3]}}function at(e,i){return{defaultParams:[e,i]}}function it(e){return{manual:!0,onSuccess:i=>{i.success&&e()}}}function st(e,i){return{manual:!0,onSuccess:s=>{!s.success||(e.value=[],i())}}}function rt(e,i){return{manual:!0,onSuccess:s=>{e.value=s,i.value&&i.value(s)}}}function ut(e,i,s){return{manual:!0,onBefore:()=>{s.value&&s.value()},onSuccess:o=>{if(!o.success)return re(o);e.value=!1,i()}}}function ct(e,i,s,o,v){return{manual:!0,onSuccess:_=>{if(!_.success)return re(_);e.value=!1;for(let y in i.value[s.value])i.value[s.value][y]=o.value[y];v.value&&v.value()}}}function re(e){e.message.toLowerCase().indexOf("unique")>-1&&e.message.toLowerCase().indexOf("slug")>-1&&Ze.error(Ke("message.exists",[$t("slug")]))}const dt=V("th",{style:{color:"var(--color-text-3)"}},null,-1),mt=["onDblclick"],ft={key:1},pt={key:1},gt=["onClick"],ht={key:0},_t={key:1},St={__name:"index",props:{columns:Object,order:String,modelName:String,postWidth:{type:String,default:()=>500},formLayout:{type:String,default:()=>"horizontal"},formStyle:String,postHeight:String,postComponent:Object},setup(e){const{columns:i,order:s,modelName:o,postWidth:v,postHeight:_,postComponent:y}=e;i.push({title:"",slotName:"action",align:"right",width:120});const m=se(),C=x(null),S=x([]),L=ne(()=>m.mainHeight-38),R=oe({type:"checkbox",showCheckedAll:!0}),B=ne(()=>lt(J,me,d,m)),K=x(null),q=Ye("data_table_limit",20),ue={page:1,limit:q.value,order:s,where:{field:"",operator:"",value:""}},d=oe(ue),D=x(!1),k=x({}),E=x(null),G=x(null),T=x(null),W=x(null),{data:A,run:ce,loading:de}=F(qe,at(o,d)),{data:me,run:fe,loading:J}=F(Ee,{defaultParams:[o,d]}),{run:pe}=F(Ge,it(z)),{run:ge,loading:he}=F(Te,st(S,Y)),{run:_e,loading:j}=F(We,rt(k,G)),{run:ve,loading:be}=F(Ae,ut(D,Y,T)),{run:ye,loading:ke}=F(Je,ct(D,A,E,k,W));I("record",k),I("selectedKeys",S),I("batchDelete",ge),I("modelName",o),I("postRecordGetSuccessCallback",G),I("createBeforeCallback",T),I("updateSuccessCallback",W);function we(){k.value={},D.value=!0}function X(u,c){D.value=!0,k.value={},E.value=c,_e(o,u.id)}function Ce(){K.value.validate(u=>{u===void 0&&(k.value.id>0?ye(o,k.value):ve(o,k.value))})}function xe(){D.value=!1}function Y(){z(),Q()}function z(){ce(o,d)}function Q(){fe(o,d.where)}function Se(u){d.page=u,z()}function Fe(u){d.page=1,d.limit=u,q.value=u,z()}function $e(u,c){d.page=1,c?d.order=u+" "+c.replace("end",""):d.order=s,z()}function De(u,[c,w]){c===void 0?d.where={field:"",operator:"",value:""}:(d.where.field=u,d.where.value=c,d.where.operator=w===!0?"like":"equal"),d.page=1,z(),Q()}function Ie(u){let c;o==="article"?c=m.config.router.article_rule:o==="category"?c=m.config.router.category_rule:o==="tag"&&(c=m.config.router.tag_rule);let w=c.replace("{slug}",u);return w.indexOf("/")!==0&&(w="/"+w),m.config.site.url+w}const{run:ze}=F(Xe,{manual:!0});function Ne(u){return new Date().getTime()/1e3-u.create_time<u.detect_delay*60}return(u,c)=>{const w=r("a-button"),Z=r("a-space"),ee=r("a-spin"),te=r("a-tag"),Oe=r("icon-clock-circle"),Ve=r("a-switch"),Be=r("a-table"),Le=r("a-divider"),Re=r("a-form"),je=r("a-modal");return g(),$(H,null,[n(Z,{class:"mb-2",size:"medium"},{default:t(()=>[n(w,{size:"small",type:"primary",onClick:we},{default:t(()=>[h(p(u.$t("create")),1)]),_:1}),n(et)]),_:1}),n(Be,{ref_key:"table",ref:C,"row-key":"id",style:P({height:a(L)+"px"}),columns:e.columns,data:a(A),bordered:!1,loading:a(de)||a(he),"filter-icon-align-left":"",scroll:{x:"100%",y:a(L)-78},"row-selection":R,selectedKeys:S.value,"onUpdate:selectedKeys":c[2]||(c[2]=l=>S.value=l),pagination:a(B),"onUpdate:pagination":c[3]||(c[3]=l=>Ue(B)?B.value=l:null),"virtual-list-props":d.limit>100?{height:"100%"}:void 0,onPageChange:Se,onPageSizeChange:Fe,onSorterChange:$e,onFilterChange:De},{th:t(()=>[dt]),td:t(({record:l,rowIndex:b})=>[V("td",{style:{color:"var(--color-text-1)"},class:"border-opacity-30",onDblclick:f=>X(l,b)},null,40,mt)]),"pagination-left":t(()=>[V("div",null,[a(J)?(g(),O(ee,{key:0})):ae("",!0)])]),"column-search":t(({filterValue:l,setFilterValue:b,handleFilterConfirm:f,handleFilterReset:N})=>[n(nt,{filterValue:l,setFilterValue:b,handleFilterConfirm:f,handleFilterReset:N},null,8,["filterValue","setFilterValue","handleFilterConfirm","handleFilterReset"])]),action:t(({record:l,rowIndex:b})=>[n(ot,{record:l,rowIndex:b,onEdit:X,runDelete:a(pe),modelName:e.modelName},null,8,["record","rowIndex","runDelete","modelName"])]),time:t(({record:l,rowIndex:b,column:f})=>[l[f.dataIndex]>0?(g(),O(a(le),{key:0,time:l[f.dataIndex],to:Date.now()/1e3,type:"relative",unix:""},null,8,["time","to"])):(g(),$("span",ft," - "))]),expire_time:t(({record:l,rowIndex:b,column:f})=>[l[f.dataIndex]>0?(g(),$(H,{key:0},[l[f.dataIndex]<=Date.now()/1e3?(g(),O(te,{key:0,color:"red"},{default:t(()=>[h(p(u.$t("expired")),1)]),_:1})):(g(),O(te,{key:1,color:"blue"},{default:t(()=>[n(a(le),{time:l[f.dataIndex],to:Date.now()/1e3,type:"relative",unix:""},null,8,["time","to"])]),_:2},1024))],64)):(g(),$("span",pt," - "))]),title:t(({record:l,rowIndex:b,column:f})=>[V("span",{onClick:N=>a(U)(Ie(l.slug)),style:{"min-width":"50px"},class:"inline-block cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-blue-500"},p(l[f.dataIndex]),9,gt)]),detect:t(({record:l,rowIndex:b,column:f})=>[l[f.dataIndex]?(g(),$("span",ht,[n(Oe,{size:16,strokeWidth:5,style:P({color:Ne(l)?"#FBBF24":"#3B82F6"})},null,8,["style"])])):(g(),$("span",_t," - "))]),linkStatus:t(({record:l,rowIndex:b,column:f})=>[n(Ve,{type:"line","default-checked":l.status,onChange:N=>a(ze)(l.id,N),onDblclick:c[0]||(c[0]=Pe(()=>{},["stop"]))},null,8,["default-checked","onChange"])]),url:t(({record:l,rowIndex:b,column:f})=>[V("span",{onClick:c[1]||(c[1]=(...N)=>a(U)&&a(U)(...N)),class:"inline-block cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-blue-500"},p(l[f.dataIndex]),1)]),_:1},8,["style","columns","data","loading","scroll","row-selection","selectedKeys","pagination","virtual-list-props"]),n(je,{visible:D.value,"onUpdate:visible":c[4]||(c[4]=l=>D.value=l),width:e.postWidth,unmountOnClose:"",titleAlign:"start",escToClose:!1,"mask-closable":!1,"mask-style":{backdropFilter:"blur(2px)"},"body-style":{height:a(m).isMobile?"100%":"calc(100% - 48px)",padding:a(m).isMobile?"5px":"7px 10px"},"modal-class":"data-table-modal",modalStyle:{height:e.postHeight?e.postHeight:void 0},footer:!1},{title:t(()=>[h(p(k.value.id>0?u.$t("edit"):u.$t("create")),1)]),default:t(()=>[n(Re,{ref_key:"formRef",ref:K,layout:e.formLayout,class:"w-full h-full",model:k.value,style:P(e.formStyle)},{default:t(()=>[n(ee,{loading:a(j),class:ie(["w-full h-full overflow-auto",{"overflow-hidden":a(j)}]),size:28},{default:t(()=>[(g(),O(He(e.postComponent)))]),_:1},8,["loading","class"]),n(Le,{margin:a(m).isMobile?5:10},null,8,["margin"]),n(Z,{class:"w-full flex justify-end"},{default:t(()=>[n(w,{onClick:xe},{default:t(()=>[h(p(u.$t("cancel")),1)]),_:1}),n(w,{type:"primary",onClick:Ce,disabled:a(j),loading:a(be)||a(ke)},{default:t(()=>[h(p(u.$t("confirm")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1},8,["layout","model","style"])]),_:1},8,["visible","width","mask-style","body-style","modalStyle"])],64)}}};export{St as _,xt as s};
