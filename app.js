// ====== COLE AQUI AS DUAS CHAVES DO SUPABASE (passo 3 do guia) ======
const SUPABASE_URL = "https://iihesjxzqeovplqxeaod.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable__0H4IPQ0HNr2cxxcLcr-fg_dlQ1Qqjh";
// Doações (deixe "" pra esconder)
const PIX_KEY = "503f4b26-1281-4cb3-8ad2-280fe4c51b39";
const PAYPAL_URL = "https://ko-fi.com/matchifesto";
// ====================================================================

const T={
 pt:{tag:"Brasileiros 🇧🇷 × Franceses 🇫🇷",foot:"Só maiores de 18 anos. O ❤️ mostra o @ da pessoa: a conversa continua na rede social dela.",
  loading:"Carregando…",login:"Entre com seu e-mail",loginP:"A gente te manda um link mágico. Sem senha.",email:"Seu e-mail",send:"Enviar link",
  sent:"Pronto! Abra seu e-mail e clique no link pra entrar.",eMail:"Digite um e-mail válido.",eSend:"Não deu pra enviar o link. Espere um minutinho e tente de novo.",
  welcome:"Crie seu cartão",welcomeP:"Escolha seu lado. Você só vai ver gente do outro país.",
  iam:"Eu sou",br:"🇧🇷 Brasileira(o)",fr:"🇫🇷 Française / Français",name:"Nome",age:"Idade",city:"Cidade",
  langs:"Idiomas que você fala",langsPh:"português, um pouco de francês",bio:"Uma frase sobre você",bioPh:"Faço o melhor pão de queijo de Lyon",
  photo:"Suas fotos (1 a 5)",photoBtn:"Escolher foto",photoChange:"Trocar foto",ePhoto:"Coloque pelo menos uma foto sua pra criar o cartão.",photoHint:"A primeira é a capa. Toque no cartão pra ver as outras.",ePhotoBig:"Não deu pra usar essa imagem. Tente outra (JPG ou PNG).",handle:"Seu @ (Instagram, X, Bluesky…)",handlePh:"@seunome no Instagram",save:"Publicar meu cartão",
  e18:"O app é só para maiores de 18 anos.",eReq:"Preencha nome, idade, cidade e seu @.",eSave:"Não deu pra salvar. Tente de novo.",
  empty:"Você viu todo mundo por enquanto",emptyP:"Volte mais tarde ou compartilhe o link pra chegar mais gente!",
  match:"Deu match! 🎉",matchP:"Vocês se curtiram. Chama essa pessoa em:",sentLike:"❤️ enviado! Se a pessoa te curtir também, o @ dela aparece nos seus matches.",copy:"Copiar @",copied:"Copiado!",next:"Próximo cartão",
  edit:"Editar meu cartão",likes:"Meus matches",report:"Denunciar",reported:"Denúncia enviada. Obrigada!",back:"Voltar",
  likesEmpty:"Ainda sem match. Continue deslizando!",admin:"Moderação",remove:"Remover",reports:"denúncias",del:"Apagar meu cartão",
  confirmDel:"Toque de novo para apagar",logout:"Sair",tip:"☕ Me paga um café",tipT:"Gostou? Me paga um café",tipP:"É só uma brincadeira, o app continua de graça. Se quiser apoiar, qualquer valor ajuda!",pix:"Pix (Brasil)",copyKey:"Copiar chave",euro:"Euro / outros países",open:"Abrir Ko-fi",close:"Fechar"},
 fr:{tag:"Brésiliens 🇧🇷 × Français 🇫🇷",foot:"Réservé aux plus de 18 ans. Le ❤️ révèle le @ de la personne : la conversation continue sur son réseau.",
  loading:"Chargement…",login:"Connecte-toi avec ton e-mail",loginP:"On t'envoie un lien magique. Pas de mot de passe.",email:"Ton e-mail",send:"Envoyer le lien",
  sent:"C'est parti ! Ouvre ton e-mail et clique sur le lien.",eMail:"Entre un e-mail valide.",eSend:"Impossible d'envoyer le lien. Attends une minute et réessaie.",
  welcome:"Crée ta carte",welcomeP:"Choisis ton camp. Tu ne verras que des gens de l'autre pays.",
  iam:"Je suis",br:"🇧🇷 Brésilien·ne",fr:"🇫🇷 Française / Français",name:"Prénom",age:"Âge",city:"Ville",
  langs:"Langues parlées",langsPh:"français, un peu de portugais",bio:"Une phrase sur toi",bioPh:"Je connais tous les bars de samba de Paris",
  photo:"Tes photos (1 à 5)",photoBtn:"Choisir une photo",photoChange:"Changer la photo",ePhoto:"Ajoute au moins une photo de toi pour créer ta carte.",photoHint:"La première est la couverture. Touche la carte pour voir les autres.",ePhotoBig:"Impossible d'utiliser cette image. Essaie une autre (JPG ou PNG).",handle:"Ton @ (Instagram, X, Bluesky…)",handlePh:"@tonnom sur Instagram",save:"Publier ma carte",
  e18:"L'appli est réservée aux plus de 18 ans.",eReq:"Remplis prénom, âge, ville et ton @.",eSave:"Impossible d'enregistrer. Réessaie.",
  empty:"Tu as vu tout le monde pour l'instant",emptyP:"Reviens plus tard ou partage le lien pour faire venir du monde !",
  match:"C'est un match ! 🎉",matchP:"Vous vous êtes plu. Écris à cette personne sur :",sentLike:"❤️ envoyé ! Si la personne te like aussi, son @ apparaîtra dans tes matchs.",copy:"Copier le @",copied:"Copié !",next:"Carte suivante",
  edit:"Modifier ma carte",likes:"Mes matchs",report:"Signaler",reported:"Signalement envoyé. Merci !",back:"Retour",
  likesEmpty:"Pas encore de match. Continue à swiper !",admin:"Modération",remove:"Retirer",reports:"signalements",del:"Supprimer ma carte",
  confirmDel:"Touche encore pour supprimer",logout:"Déconnexion",tip:"☕ Paie-moi un café",tipT:"Ça te plaît ? Paie-moi un café",tipP:"C’est juste pour le fun, l’appli reste gratuite. Si tu veux soutenir, chaque euro compte !",pix:"Pix (Brésil)",copyKey:"Copier la clé",euro:"Euro / autres pays",open:"Ouvrir Ko-fi",close:"Fermer"}
};
let L=(navigator.language||"").startsWith("fr")?"fr":"pt";
try{const s=localStorage.getItem("cc-lang");if(s==="fr"||s==="pt")L=s}catch(e){}
const t=k=>T[L][k];
const $=s=>document.querySelector(s);
const view=$("#view");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const sb=supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);

const S={pidx:{},tip:false,matches:new Set(),me:null,admin:false,profiles:[],mine:null,myHandle:"",liked:new Set(),passed:new Set(),mode:"loading",reveal:null,note:""};

function setLang(l){L=l;try{localStorage.setItem("cc-lang",l)}catch(e){}
  document.documentElement.lang=l==="pt"?"pt-BR":"fr";
  $("#lang-pt").setAttribute("aria-pressed",l==="pt");$("#lang-fr").setAttribute("aria-pressed",l==="fr");
  document.querySelectorAll("[data-t]").forEach(el=>el.textContent=t(el.dataset.t));render()}
$("#lang-pt").onclick=()=>setLang("pt");$("#lang-fr").onclick=()=>setLang("fr");

const deck=()=>!S.mine?[]:S.profiles.filter(p=>p.country!==S.mine.country&&p.id!==S.me&&!S.liked.has(p.id)&&!S.passed.has(p.id));

function cardHTML(p,back){
  return `<article class="card${back?" back":""}" ${back?'aria-hidden="true"':''}>
   <div class="band ${p.country}${p.photoUrls?.length?" has-photo":""}">${p.photoUrls?.length?`<img class="photo" src="${esc(p.photoUrls[pi(p)])}" alt="" draggable="false">${p.photoUrls.length>1?`<div class="dots">${p.photoUrls.map((_,i)=>`<i class="${i===pi(p)?"on":""}"></i>`).join("")}</div>`:""}`:`<div class="initial">${esc((p.name||"?").trim().charAt(0).toUpperCase())}</div>`}<span class="flag">${p.country==="br"?"🇧🇷 Brasil":"🇫🇷 France"}</span></div>
   <div class="info"><div class="name">${esc(p.name)} <small>${esc(p.age)}</small></div>
   <div class="meta">📍 ${esc(p.city)}</div><div class="bio">${esc(p.bio)}</div>
   ${p.langs?`<div class="chips">${p.langs.split(/[,;]/).map(x=>x.trim()).filter(Boolean).slice(0,5).map(x=>`<span class="chip">${esc(x)}</span>`).join("")}</div>`:""}
   </div><span class="stamp like">❤️</span><span class="stamp nope">✖️</span></article>`;
}

function render(){
  if(S.mode==="loading"){view.innerHTML=`<div class="deck"><div class="empty"><h3>${t("loading")}</h3></div></div>`;return}
  if(S.mode==="login")return renderLogin();
  if(S.mode==="form")return renderForm();
  if(S.mode==="likes")return renderLikes();
  if(S.mode==="admin")return renderAdmin();
  const d=deck(),top=d[0],nxt=d[1];
  view.innerHTML=`<div class="deck">${top?(nxt?cardHTML(nxt,true):"")+cardHTML(top,false):
   `<div class="empty"><div style="font-size:2.4rem">🥐🇧🇷</div><h3>${t("empty")}</h3><p>${t("emptyP")}</p></div>`}</div>
   <div class="actions"><button class="round no" id="b-no" aria-label="✖️" ${top?"":"disabled"}>✖️</button>
   <button class="round yes" id="b-yes" aria-label="❤️" ${top?"":"disabled"}>❤️</button></div>
   <div class="toolbar"><button class="ghost" id="b-likes">${t("likes")} (${S.matches.size})</button>
   <button class="ghost" id="b-edit">${t("edit")}</button>
   ${top?`<button class="ghost" id="b-rep">${t("report")}</button>`:""}
   ${S.admin?`<button class="ghost" id="b-admin">${t("admin")}</button>`:""}
   <button class="ghost" id="b-out">${t("logout")}</button></div>
   ${PIX_KEY||PAYPAL_URL?`<button class="tipbtn" id="b-tip">${t("tip")}</button>`:""}
   ${S.note?`<p class="foot">${esc(S.note)}</p>`:""}
   ${S.reveal?revealHTML(S.reveal):""}${S.tip?tipHTML():""}`;
  S.note="";
  $("#b-likes").onclick=()=>{S.mode="likes";render()};
  $("#b-edit").onclick=()=>{S.mode="form";render()};
  $("#b-out").onclick=async()=>{await sb.auth.signOut();location.reload()};
  if(S.admin)$("#b-admin").onclick=()=>{S.mode="admin";render()};
  if(top){$("#b-no").onclick=()=>swipe(top,false);$("#b-yes").onclick=()=>swipe(top,true);
    $("#b-rep").onclick=()=>report(top);drag(view.querySelector(".card:not(.back)"),top)}
  if(S.reveal)wireReveal();
  if(PIX_KEY||PAYPAL_URL)$("#b-tip").onclick=()=>{S.tip=true;render()};
  if(S.tip)wireTip();
}
function tipHTML(){
  return `<div class="overlay" role="dialog" aria-modal="true"><div class="panel reveal">
   <div style="font-size:2.4rem">☕</div><h2>${t("tipT")}</h2><p>${t("tipP")}</p>
   ${PIX_KEY?`<div class="tipbox"><b>${t("pix")}</b><span class="handle" id="pix-key" style="font-size:1rem">${esc(PIX_KEY)}</span><button class="ghost" id="b-pix">${t("copyKey")}</button></div>`:""}
   ${PAYPAL_URL?`<div class="tipbox"><b>${t("euro")}</b><a class="primary" href="${esc(PAYPAL_URL)}" target="_blank" rel="noopener" style="text-decoration:none">${t("open")}</a></div>`:""}
   <button class="ghost" id="b-tipx">${t("close")}</button></div></div>`;
}
function wireTip(){
  $("#b-tipx").onclick=()=>{S.tip=false;render()};
  const b=$("#b-pix");if(b)b.onclick=()=>navigator.clipboard.writeText(PIX_KEY).then(()=>b.textContent=t("copied")).catch(()=>{
    const r=document.createRange();r.selectNodeContents($("#pix-key"));const g=getSelection();g.removeAllRanges();g.addRange(r)});
}

function revealHTML(r){
  return `<div class="overlay" role="dialog" aria-modal="true"><div class="panel reveal">
   <div style="font-size:2.4rem">💌</div><h2>${t("match")}</h2><p>${t("matchP")}</p>
   <div class="handle" id="h-text">${esc(r.handle||"…")}</div>
   <div class="toolbar"><button class="ghost" id="b-copy">${t("copy")}</button><button class="primary" id="b-next">${t("next")}</button></div></div></div>`;
}
function wireReveal(){
  $("#b-next").onclick=()=>{S.reveal=null;render()};
  $("#b-copy").onclick=e=>{const b=e.currentTarget;
    navigator.clipboard.writeText(S.reveal.handle||"").then(()=>b.textContent=t("copied")).catch(()=>{
      const r=document.createRange();r.selectNodeContents($("#h-text"));const s=getSelection();s.removeAllRanges();s.addRange(r)})};
  $("#b-next").focus();
}

function drag(el,p){
  if(!el)return;let x0=null,dx=0;const like=el.querySelector(".like"),nope=el.querySelector(".nope");
  el.addEventListener("pointerdown",e=>{x0=e.clientX;el.setPointerCapture(e.pointerId);el.style.transition="none"});
  el.addEventListener("pointermove",e=>{if(x0===null)return;dx=e.clientX-x0;
    el.style.transform=`translateX(${dx}px) rotate(${dx/18}deg)`;like.style.opacity=Math.max(0,dx/100);nope.style.opacity=Math.max(0,-dx/100)});
  const end=()=>{if(x0===null)return;x0=null;el.style.transition="";
    if(Math.abs(dx)<8&&p.photoUrls?.length>1){S.pidx[p.id]=(pi(p)+1)%p.photoUrls.length;
      el.querySelector(".photo").src=p.photoUrls[pi(p)];el.querySelectorAll(".dots i").forEach((d,i)=>d.className=i===pi(p)?"on":"");}
    if(Math.abs(dx)>110){el.style.transform=`translateX(${dx>0?600:-600}px) rotate(${dx/10}deg)`;const v=dx>0;setTimeout(()=>swipe(p,v),180)}
    else{el.style.transform="";like.style.opacity=0;nope.style.opacity=0}dx=0};
  el.addEventListener("pointerup",end);el.addEventListener("pointercancel",end);
}

async function swipe(p,liked){
  if(liked){
    S.liked.add(p.id);render();
    await sb.from("likes").upsert({liker:S.me,target:p.id},{ignoreDuplicates:true});
    const {data:ok}=await sb.rpc("is_match",{other:p.id});
    if(ok){S.matches.add(p.id);
      const {data}=await sb.from("handles").select("handle").eq("id",p.id).maybeSingle();
      S.reveal={id:p.id,handle:data?.handle||"?"};
    }else S.note=t("sentLike");
    render();
  }else{
    S.passed.add(p.id);render();
    await sb.from("passes").upsert({passer:S.me,target:p.id},{ignoreDuplicates:true});
  }
}

async function report(p){
  S.passed.add(p.id);S.note=t("reported");render();
  await sb.from("reports").upsert({reporter:S.me,target:p.id},{ignoreDuplicates:true});
  await sb.from("passes").upsert({passer:S.me,target:p.id},{ignoreDuplicates:true});
}

function renderLogin(){
  view.innerHTML=`<form class="panel" id="lf" novalidate><h2>${t("login")}</h2><p>${t("loginP")}</p>
   <label for="l-email">${t("email")}<input id="l-email" type="email" autocomplete="email" inputmode="email"></label>
   <div class="err" id="l-err" role="alert"></div><button class="primary" type="submit" id="l-btn">${t("send")}</button></form>`;
  $("#lf").onsubmit=async e=>{e.preventDefault();const email=$("#l-email").value.trim();
    if(!/^\S+@\S+\.\S+$/.test(email)){$("#l-err").textContent=t("eMail");return}
    $("#l-btn").disabled=true;
    const {error}=await sb.auth.signInWithOtp({email,options:{emailRedirectTo:location.origin+location.pathname}});
    $("#l-btn").disabled=false;
    if(error){$("#l-err").textContent=t("eSend");return}
    $("#lf").innerHTML=`<h2>💌</h2><p>${t("sent")}</p>`};
}

function renderForm(){
  const m=S.mine||{country:L==="fr"?"fr":"br"};
  view.innerHTML=`<form class="panel" id="f" novalidate><h2>${t("welcome")}</h2><p>${t("welcomeP")}</p>
   <div><div style="font-size:.85rem;font-weight:700;margin-bottom:5px">${t("iam")}</div>
   <div class="pick"><button type="button" id="c-br" aria-pressed="${m.country==="br"}">${t("br")}</button>
   <button type="button" id="c-fr" aria-pressed="${m.country==="fr"}">${t("fr")}</button></div></div>
   <div><div style="font-size:.85rem;font-weight:700;margin-bottom:5px">${t("photo")}</div>
   <div class="ph-grid" id="f-grid"></div><p class="meta" style="margin:6px 0 0">${t("photoHint")}</p>
   <input id="f-photo" type="file" accept="image/*" hidden></div>
   <div class="row"><label for="f-name">${t("name")}<input id="f-name" maxlength="30" value="${esc(m.name)}"></label>
   <label for="f-age">${t("age")}<input id="f-age" type="number" min="18" max="99" inputmode="numeric" value="${esc(m.age)}"></label></div>
   <label for="f-city">${t("city")}<input id="f-city" maxlength="40" value="${esc(m.city)}"></label>
   <label for="f-langs">${t("langs")}<input id="f-langs" maxlength="60" placeholder="${t("langsPh")}" value="${esc(m.langs)}"></label>
   <label for="f-bio">${t("bio")}<textarea id="f-bio" maxlength="160" placeholder="${t("bioPh")}">${esc(m.bio)}</textarea></label>
   <label for="f-handle">${t("handle")}<input id="f-handle" maxlength="60" placeholder="${t("handlePh")}" value="${esc(S.myHandle)}"></label>
   <div class="err" id="f-err" role="alert"></div>
   <button class="primary" type="submit" id="f-btn">${t("save")}</button>
   ${S.mine?`<div class="toolbar"><button class="ghost" type="button" id="f-back">${t("back")}</button><button class="ghost" type="button" id="f-del">${t("del")}</button></div>`:""}
   </form>`;
  let country=m.country;
  const old=(S.mine?.photos||[]).map((path,i)=>({path,url:S.mine.photoUrls?.[i]||""}));
  let slots=old.slice();
  const drawGrid=()=>{$("#f-grid").innerHTML=Array.from({length:5},(_,i)=>{const s=slots[i];
      return s?`<div class="ph-slot"><img src="${esc(s.url)}" alt=""><button type="button" class="ph-x" data-i="${i}" aria-label="remover">×</button>${i===0?`<span class="ph-cover">capa</span>`:""}</div>`
        :`<button type="button" class="ph-slot ph-add" ${i===slots.length?"":"disabled"} aria-label="${t("photoBtn")}">+</button>`}).join("");
    $("#f-grid").querySelectorAll(".ph-x").forEach(b=>b.onclick=()=>{slots.splice(+b.dataset.i,1);drawGrid()});
    const a=$("#f-grid").querySelector(".ph-add:not([disabled])");if(a)a.onclick=()=>$("#f-photo").click()};
  drawGrid();
  $("#f-photo").onchange=async e=>{const f=e.target.files[0];e.target.value="";if(!f||slots.length>=5)return;
    try{const blob=await shrink(f);slots.push({blob,url:URL.createObjectURL(blob)});$("#f-err").textContent="";drawGrid()}
    catch(err){$("#f-err").textContent=t("ePhotoBig")}};
  const setC=c=>{country=c;$("#c-br").setAttribute("aria-pressed",c==="br");$("#c-fr").setAttribute("aria-pressed",c==="fr")};
  $("#c-br").onclick=()=>setC("br");$("#c-fr").onclick=()=>setC("fr");
  if(S.mine){$("#f-back").onclick=()=>{S.mode="deck";render()};
    let armed=false;$("#f-del").onclick=async e=>{if(!armed){armed=true;e.currentTarget.textContent=t("confirmDel");return}
      if(S.mine?.photos?.length)await sb.storage.from("photos").remove(S.mine.photos);
      const {error}=await sb.from("profiles").delete().eq("id",S.me);
      if(error){$("#f-err").textContent=t("eSave");return}
      S.mine=null;S.myHandle="";await loadProfiles();S.mode="form";render()}}
  $("#f").onsubmit=async e=>{e.preventDefault();const v=id=>$("#"+id).value.trim();
    const d={id:S.me,country,name:v("f-name"),age:parseInt(v("f-age"),10),city:v("f-city"),langs:v("f-langs"),bio:v("f-bio"),updated_at:new Date().toISOString()};
    const handle=v("f-handle");
    if(!d.name||!d.age||!d.city||!handle){$("#f-err").textContent=t("eReq");return}
    if(d.age<18){$("#f-err").textContent=t("e18");return}
    if(!slots.length){$("#f-err").textContent=t("ePhoto");return}
    $("#f-btn").disabled=true;
    const paths=[];
    for(const [i,sl] of slots.entries()){
      if(sl.path){paths.push(sl.path);continue}
      const path=`${S.me}/${Date.now()}-${i}.jpg`;
      const up=await sb.storage.from("photos").upload(path,sl.blob,{contentType:"image/jpeg",upsert:true});
      if(up.error){$("#f-btn").disabled=false;$("#f-err").textContent=t("eSave");return}
      sl.path=path;paths.push(path)}
    d.photos=paths;
    const gone=old.map(o=>o.path).filter(x=>!paths.includes(x));
    if(gone.length)sb.storage.from("photos").remove(gone);
    const r1=await sb.from("profiles").upsert(d);
    const r2=r1.error?r1:await sb.from("handles").upsert({id:S.me,handle});
    $("#f-btn").disabled=false;
    if(r1.error||r2.error){$("#f-err").textContent=t("eSave");return}
    S.myHandle=handle;await loadProfiles();S.mode="deck";render()};
}

async function renderLikes(){
  view.innerHTML=`<div class="panel"><h2>${t("likes")}</h2><p>${t("loading")}</p></div>`;
  const {data:mm}=await sb.rpc("my_matches");S.matches=new Set(mm||[]);
  const ids=[...S.matches];let rows=[];
  if(ids.length){const {data}=await sb.from("handles").select("id,handle").in("id",ids);rows=data||[]}
  const hs=Object.fromEntries(rows.map(r=>[r.id,r.handle]));
  const ps=ids.map(id=>S.profiles.find(p=>p.id===id)).filter(Boolean);
  view.innerHTML=`<div class="panel"><h2>${t("likes")}</h2>
   ${ps.length?`<div class="list">${ps.map(p=>`<div class="li"><div><b>${esc(p.name)}, ${esc(p.age)} · ${esc(p.city)}</b><span class="handle" style="font-size:1rem">${esc(hs[p.id]||"")}</span></div></div>`).join("")}</div>`:`<p>${t("likesEmpty")}</p>`}
   <button class="ghost" id="l-back">${t("back")}</button></div>`;
  $("#l-back").onclick=()=>{S.mode="deck";render()};
}

async function renderAdmin(){
  view.innerHTML=`<div class="panel"><h2>${t("admin")}</h2><p>${t("loading")}</p></div>`;
  const [{data:reps},{data:hs}]=await Promise.all([sb.from("reports").select("target"),sb.from("handles").select("id,handle")]);
  const count={};(reps||[]).forEach(r=>count[r.target]=(count[r.target]||0)+1);
  const hm=Object.fromEntries((hs||[]).map(h=>[h.id,h.handle]));
  const ps=[...S.profiles].sort((a,b)=>(count[b.id]||0)-(count[a.id]||0));
  view.innerHTML=`<div class="panel"><h2>${t("admin")}</h2><p>${ps.length} perfis</p><div class="list">
   ${ps.map(p=>`<div class="li"><div><b>${p.country==="br"?"🇧🇷":"🇫🇷"} ${esc(p.name)}, ${esc(p.age)}</b><span class="meta">${esc(hm[p.id]||"")} · ${count[p.id]||0} ${t("reports")}</span></div>
   <button class="ghost" data-rm="${esc(p.id)}">${t("remove")}</button></div>`).join("")}</div>
   <button class="ghost" id="a-back">${t("back")}</button></div>`;
  $("#a-back").onclick=()=>{S.mode="deck";render()};
  view.querySelectorAll("[data-rm]").forEach(b=>b.onclick=async()=>{
    const p=S.profiles.find(x=>x.id===b.dataset.rm);if(p?.photos?.length)await sb.storage.from("photos").remove(p.photos);
    await sb.from("profiles").delete().eq("id",b.dataset.rm);await loadProfiles();renderAdmin()});
}

async function loadProfiles(){
  const {data}=await sb.from("profiles").select("*").order("updated_at",{ascending:false}).limit(2000);
  S.profiles=data||[];
  const paths=S.profiles.flatMap(p=>p.photos||[]);
  if(paths.length){const {data:su}=await sb.storage.from("photos").createSignedUrls(paths,60*60*6);
    const m=Object.fromEntries((su||[]).filter(x=>x.signedUrl).map(x=>[x.path,x.signedUrl]));
    S.profiles.forEach(p=>{p.photoUrls=(p.photos||[]).map(x=>m[x]).filter(Boolean)})}
  S.mine=S.profiles.find(p=>p.id===S.me)||null;
}

async function boot(session){
  if(!session){S.mode="login";render();return}
  S.me=session.user.id;
  const [ ,lk,ps,hd,ad,mt]=await Promise.all([loadProfiles(),
    sb.from("likes").select("target"),sb.from("passes").select("target"),
    sb.from("handles").select("handle").eq("id",S.me).maybeSingle(),
    sb.from("admins").select("user_id").eq("user_id",S.me).maybeSingle(),sb.rpc("my_matches")]);
  S.matches=new Set(mt.data||[]);
  S.liked=new Set((lk.data||[]).map(r=>r.target));S.passed=new Set((ps.data||[]).map(r=>r.target));
  S.myHandle=hd.data?.handle||"";S.admin=!!ad.data;
  S.mode=S.mine?"deck":"form";render();
}

const pi=p=>S.pidx[p.id]||0;
function shrink(file){return new Promise((res,rej)=>{const img=new Image();img.onload=()=>{
  const max=900,k=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement("canvas");
  c.width=Math.round(img.width*k);c.height=Math.round(img.height*k);c.getContext("2d").drawImage(img,0,0,c.width,c.height);
  c.toBlob(b=>b?res(b):rej(new Error("x")),"image/jpeg",0.82);URL.revokeObjectURL(img.src)};
  img.onerror=()=>rej(new Error("x"));img.src=URL.createObjectURL(file)})}

setLang(L);
let booted=false;
sb.auth.onAuthStateChange((_e,session)=>{if(booted&&session?.user?.id===S.me)return;booted=true;boot(session)});
