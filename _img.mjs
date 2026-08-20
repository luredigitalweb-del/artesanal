import puppeteer from "puppeteer-core";
const b=await puppeteer.launch({executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe",headless:"new",args:["--hide-scrollbars"]});
const p=await b.newPage();
await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
await p.goto("https://artesanal-mu.vercel.app",{waitUntil:"networkidle0",timeout:90000});
await p.evaluate(async()=>{const s=innerHeight*0.5;for(let y=0;y<document.body.scrollHeight;y+=s){scrollTo(0,y);await new Promise(r=>setTimeout(r,200));}});
await new Promise(r=>setTimeout(r,2500));
const m=await p.evaluate(()=>[...document.querySelectorAll("img")]
  .filter(i=>!i.complete||i.naturalWidth===0)
  .map(i=>({src:i.currentSrc||i.src, lazy:i.loading, visivel:i.offsetParent!==null})));
console.log("quebradas apos carregar tudo:", m.length? JSON.stringify(m,null,1) : "nenhuma");
await b.close();
