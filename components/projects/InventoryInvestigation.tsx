"use client";
import { useState } from "react";
const causes=["Receiving Error","Putaway Error","Replenishment Error","Pick Error","Wrong Location","Label Error","System Error","Unknown"];
export function InventoryInvestigation(){const[open,setOpen]=useState(false);return <div className="investigate"><div><span>EXPECTED<strong>100</strong></span><b>−</b><span>ACTUAL<strong>87</strong></span><b>=</b><span>VARIANCE<strong>−13</strong></span></div><button onClick={()=>setOpen(!open)}>Investigate <span>→</span></button>{open&&<section><p>TRACE THE EXCEPTION <small>DEMO CATEGORIES</small></p>{causes.map((c,i)=><button key={c}><span>0{i+1}</span>{c}<b>↗</b></button>)}</section>}</div>}
