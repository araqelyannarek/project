(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{4758:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n(5305)}])},5305:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return v}});var i=n(5893),s=n(7294),t=n(5281),l=n(2757),r=n(7747),u=n(5161),c=n(8020),o=n(6529),d=n(3090),h=n(1666),g=n(4225),x=n(1293),f=n(1163);let j=()=>{let[e,a]=(0,s.useState)(""),[n,j]=(0,s.useState)({value:"",isValid:!0}),[m,p]=(0,s.useState)({value:"",isValid:!0}),[v,w]=(0,s.useState)(""),[_,S]=(0,s.useState)(""),[y,I]=(0,s.useState)(!1),b=(0,f.useRouter)();(0,s.useEffect)(()=>{localStorage.setItem("user_token",v),localStorage.setItem("user_name",e),localStorage.setItem("user_email",n.value)},[v]);let k=e=>a=>{e({value:a.target.value,isValid:!0})},N=async()=>{let e={email:n.value,password:m.value},i=JSON.stringify(e),s=await fetch("".concat("http://connect2hq.com","/api/auth/sign-in"),{method:"POST",headers:{"Content-Type":"application/json"},body:i}),t=await s.json();t.status?b.push("/user-profile"):S("Incorrect email and/or password"),t.data.token&&(w(t.data.token),a(t.data.user.name))},E=async()=>{if(!n.value){j({value:"",isValid:!1});return}if(!m.value){p({value:"",isValid:!1});return}I(!0),await N(),I(!1)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.K,{spacing:8,mx:"auto",width:"full",maxW:"lg",children:[(0,i.jsx)(t.K,{align:"center",children:(0,i.jsx)(l.X,{textAlign:"center",fontSize:"4xl",children:"Sign in to your account"})}),(0,i.jsx)(r.xu,{bg:(0,u.ff)("white","gray.700"),rounded:"lg",p:8,children:(0,i.jsxs)(t.K,{spacing:4,children:[(0,i.jsxs)(c.NI,{id:"email",children:[(0,i.jsx)(o.l,{children:"Email address"}),(0,i.jsx)(d.I,{type:"email",value:n.value,onChange:k(j),isInvalid:!n.isValid})]}),(0,i.jsxs)(c.NI,{id:"password",children:[(0,i.jsx)(o.l,{children:"Password"}),(0,i.jsx)(d.I,{type:"password",value:m.value,onChange:k(p),isInvalid:!m.isValid})]}),"children",(0,i.jsxs)(t.K,{spacing:10,children:[(0,i.jsx)(t.K,{direction:{base:"column",sm:"row"},align:"start",justify:"space-between",children:(0,i.jsx)(h.X,{children:"Remember me"})}),(0,i.jsx)(g.z,{isLoading:y,onClick:E,bg:"#255DB1",color:"white",_hover:{bg:"#3D7DD6"},children:"Sign in"})]}),(0,i.jsx)(x.x,{align:"center",color:"red.500",children:_})]})})]})})};var m=n(7239);let p=()=>(0,i.jsx)(m.M,{w:"full",minH:"70vh",children:(0,i.jsx)(j,{})});var v=p}},function(e){e.O(0,[506,774,888,179],function(){return e(e.s=4758)}),_N_E=e.O()}]);