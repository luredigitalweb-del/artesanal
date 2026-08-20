import puppeteer from "puppeteer-core";
import fs from "fs";
const OUT=process.argv[2];fs.mkdirSync(OUT,{recursive:true});
const URL="https://artesanal-mu.vercel.app";
const b=await puppeteer.launch({executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe",headless:"new",args:["--hide-scrollbars"]});
const p=await b.newPage();
const falhas=[],errs=[];
p.on("pageerror",e=>errs.push(String(e).slice(0,120)));
p.on("response",r=>{if(r.status()>=400)falhas.push(r.status()+" "+r.url().replace(URL,""))});
for (const [w,h,tag,mob] of [[1440,900,"desk",false],[390,844,"mob",true]]) {
  await p.setViewport({width:w,height:h,deviceScaleFactor:2,isMobile:mob,hasTouch:mob});
  await p.goto(URL,{waitUntil:"networkidle0",timeout:90000});
  await p.evaluate(async()=>{const s=innerHeight*0.5;for(let y=0;y<document.body.scrollHeight;y+=s){scrollTo(0,y);await new Promise(r=>setTimeout(r,160));}scrollTo(0,0);await new Promise(r=>setTimeout(r,600));});
  const m=await p.evaluate(()=>({
    secoes:document.querySelectorAll("section").length,
    logos:[...document.querySelectorAll("img[src^='/marcas/']")].filter(i=>i.naturalWidth>0).length/2,
    fotosQuebradas:[...document.querySelectorAll("img")].filter(i=>!i.complete||i.naturalWidth===0).length,
    over:document.documentElement.scrollWidth>innerWidth+1,
    altura:Math.round(document.body.scrollHeight)
  }));
  console.log(tag,"| secoes:",m.secoes,"| marcas ok:",m.logos,"| imagens quebradas:",m.fotosQuebradas,"| pagina:",m.altura+"px", m.over?"OVERFLOW":"sem overflow");
  await p.screenshot({path:`${OUT}/${tag}.png`});
}
// rota inexistente deve cair no fallback de SPA e nao em 404 do servidor
const r=await p.goto(URL+"/rota-que-nao-existe",{waitUntil:"domcontentloaded"});
console.log("rota inexistente ->", r.status(), "| pagina 404 do app:", await p.evaluate(()=>document.body.textContent.includes("não encontrada")));
console.log("respostas >=400:", falhas.length?[...new Set(falhas)].slice(0,5):"nenhuma");
console.log("erros de JS:", errs.length?errs.slice(0,3):"nenhum");
await b.close();
