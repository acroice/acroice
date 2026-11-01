import { mkdirSync, writeFileSync } from 'node:fs';
const out = new URL('../assets/profile/', import.meta.url);
mkdirSync(out, { recursive: true });
const c = { bg:'#18212b', panel:'#222f3d', text:'#eef3f8', muted:'#b4c3d2', blue:'#87aacc', accent:'#63d2bd', grid:'#405063' };
const text=(x,y,s,size=20,fill=c.text)=>`<text x="${x}" y="${y}" font-size="${size}" fill="${fill}">${s}</text>`;
const line=(x,y,a,b,color=c.grid,dash='')=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${color}" stroke-width="2" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
const rect=(x,y,w,h,fill=c.panel,dash='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${c.grid}" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
function save(name,h,title,body){writeFileSync(new URL(name+'.svg',out),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 ${h}" role="img" aria-label="${title}"><title>${title}</title><rect width="720" height="${h}" rx="16" fill="${c.bg}"/><g font-family="Arial, Helvetica, sans-serif">${body}</g></svg>\n`);}
save('header',230,'Damian — Data Scientist',text(32,42,'ACROICE / ANALYTICAL PORTFOLIO',16,c.accent)+text(32,106,'Damian',48)+text(32,151,'Data Scientist',30,c.blue)+text(32,195,'Forecasting · Applied machine learning',21,c.muted)+line(590,56,590,180,c.grid)+text(616,118,'3×3',26,c.accent));
save('architecture',650,'FPL333: built and planned',text(28,38,'FPL333 / SYSTEM OVERVIEW',19,c.accent)+text(28,73,'BUILT · automated ingestion',20)+rect(28,92,664,88)+text(48,125,'Cloud Scheduler → Cloud Functions',23)+text(48,156,'Python ingestion → BigQuery RAW',23,c.blue)+line(360,180,360,210,c.blue)+rect(28,210,664,90)+text(48,244,'RAW → STAGING → FEATURES',24)+text(48,277,'Manual build · one row per player–gameweek',21,c.muted)+rect(28,322,664,84)+text(48,355,'LIVE · League dashboard',23)+text(48,386,'Next.js / TypeScript · separate application',21,c.muted)+text(28,449,'PLANNED · modelling workflow',20,c.accent)+rect(28,469,664,145,c.panel,'7 6')+text(48,506,'Baseline → chronological validation',23)+text(48,544,'Points model → error analysis',23)+text(48,581,'Vertex AI · future ML tooling',21,c.muted));
let eda=text(28,39,'EDA / CHECK THE OBSERVATIONS',20,c.accent)+text(28,72,'Synthetic data · arbitrary units',18,c.muted);
const vals=[40,44,42,48,51,null,53,82,57,60,58,64];
const x=i=>80+i*53, y=v=>337-v*2.6;
for(const v of [0,40,80]) eda+=line(80,y(v),663,y(v))+text(32,y(v)+6,String(v),18,c.muted);
let pts=[];
for(let i=0;i<vals.length;i++){if(vals[i]===null){if(pts.length)eda+=`<polyline points="${pts.join(' ')}" fill="none" stroke="${c.blue}" stroke-width="3"/>`;pts=[];continue;}pts.push(`${x(i)},${y(vals[i])}`);eda+=`<circle cx="${x(i)}" cy="${y(vals[i])}" r="5" fill="${i===7?c.accent:c.blue}"/>`;}
eda+=`<polyline points="${pts.join(' ')}" fill="none" stroke="${c.blue}" stroke-width="3"/>`;
for(const i of [0,5,11])eda+=text(x(i)-5,366,String(i+1),18,c.muted);
eda+=line(x(5),120,x(5),337,c.muted,'5 5')+text(268,110,'Missing week',18,c.muted)+text(468,105,'Investigate spike',18,c.accent)+text(300,399,'Week',19,c.muted);
save('eda',425,'Synthetic weekly series: missing data and a spike',eda);
let v=text(28,40,'VALIDATION / RESPECT TIME',20,c.accent)+text(28,74,'Conceptual expanding windows · no scores reported',18,c.muted);
for(let r=0;r<3;r++){v+=text(28,135+r*62,`Fold ${r+1}`,18,c.muted);for(let k=0;k<8;k++)v+=rect(117+k*59,106+r*62,51,38,k<3+r?c.blue:k===3+r?c.accent:c.panel);}
v+=rect(117,343,24,20,c.blue)+text(152,360,'Train',18)+rect(260,343,24,20,c.accent)+text(296,360,'Validate',18)+rect(600,106,94,162,c.panel,'5 5')+text(613,173,'Final',18)+text(610,201,'holdout',18)+line(117,308,694,308,c.muted)+text(290,298,'Time →',18,c.muted);
save('validation',390,'Expanding-window validation with final holdout',v);
let f=text(28,40,'FORECASTING / START WITH A BASELINE',20,c.accent)+text(28,74,'Synthetic illustration · repeat the last four weeks',18,c.muted);
const hist=[40,45,43,48,44,49,47,52,48,53,51,56];
const fx=i=>70+i*41, fy=n=>330-n*3;
for(const n of [0,30,60]) f+=line(70,fy(n),685,fy(n))+text(28,fy(n)+6,String(n),18,c.muted);
f+=`<polyline points="${hist.map((n,i)=>`${fx(i)},${fy(n)}`).join(' ')}" fill="none" stroke="${c.blue}" stroke-width="3"/>`;
const future=[hist[11],...hist.slice(-4)];
f+=`<polyline points="${future.map((n,i)=>`${fx(i+11)},${fy(n)}`).join(' ')}" fill="none" stroke="${c.accent}" stroke-width="3" stroke-dasharray="7 5"/>`;
f+=line(fx(11)+20,98,fx(11)+20,330,c.muted,'4 5')+text(73,112,'History',18,c.blue)+text(555,112,'Baseline',18,c.accent);
for(const i of [0,7,11,15])f+=text(fx(i)-8,359,String(i+1),18,c.muted);
f+=text(300,389,'Week',19,c.muted)+text(28,419,'Arbitrary units · no FPL results or uncertainty estimates',17,c.muted);
save('forecast',445,'Synthetic seasonal-naive baseline with a four-week horizon',f);
