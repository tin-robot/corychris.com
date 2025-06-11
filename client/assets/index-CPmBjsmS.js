import{p as h,i as x,t as v,g as a,b as w,c as y,e as p,o as P,k as A,h as B,n as M,q as j,m as L,l as e,r as q}from"./index-BjupUAFU.js";import{B as z}from"./BlogPost-CkPxSWNx.js";import{M as D}from"./MetaTags-DiGhpb5G.js";import{p as F,P as G}from"./Placeholder-aSgtxXEm.js";import"./index-HNmk3Fiy.js";var O=v('<section class="flex items-center justify-center"><div class="max-w-2xl px-6"><h1 class="text-4xl">Building Software for Social Good</h1> <p class="py-6 text-lg p-4 block"></p></div></section>');function H(n,i){h(i,!1);const m=new Date().getFullYear()-2010;x();var c=O(),d=p(c),o=a(p(d),2);o.textContent=`I'm Cory Chris, a technology leader and founder with ${m??""} years
      of experience creating real-world impact through software. I lead teams, scale
      platforms, and spearhead projects that make life better, from modernizing government
      systems to building Open Source tools and developing ethical AI for social
      good. My work focuses on using AI to fight misinformation, expand access to
      education, and strengthen communities. I believe great software, especially
      when powered by thoughtful, human-centered AI, can make the world more accessible,
      equitable, and truly human.`,w(n,c),y()}var R=v('<!> <!> <section class="max-w-2xl mx-auto px-4 py-10"><h1 class="text-4xl mb-6">Latest Posts</h1> <!> <!></section>',1);function Q(n,i){h(i,!1);let l={items:[]},r=L([]);P(async()=>{l=await F.collection("posts").getList(1,3,{sort:"-created"}),A(r,l.items)});const d=new Date().getFullYear()-2010;x();var o=R(),u=B(o);D(u,{title:"Building Software for Social Good - Cory Chris",description:`I'm Cory Chris, a technology leader and founder with ${d??""} years
      of experience creating real-world impact through software. I lead teams, scale
      platforms, and spearhead projects that make life better, from modernizing government
      systems to building Open Source tools and developing ethical AI for social
      good.`});var g=a(u,2);H(g,{});var b=a(g,2),f=a(p(b),2);{var Y=t=>{G(t,{type:"blogPost",amount:3})};M(f,t=>{e(r).length===0&&t(Y)})}var I=a(f,2);j(I,1,()=>e(r),q,(t,s)=>{let k=()=>e(s).slug,C=()=>e(s).title,S=()=>e(s).created,_=()=>e(s).excerpt;z(t,{get slug(){return k()},get title(){return C()},get date(){return S()},get excerpt(){return _()}})}),w(n,o),y()}export{Q as default};
