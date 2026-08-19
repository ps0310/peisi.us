"use client";
import { useState } from "react";
const links=[["About","about"],["Experience","career"],["Work","work"],["Think","thinking"],["Build","building"],["Beyond","beyond"],["Contact","contact"]];
export function MainNav(){const[open,setOpen]=useState(false);return <header className={`nav ${open?"open":""}`}><a className="brand" href="#top">SI PEI<span>®</span></a><nav className="navLinks" aria-label="Primary navigation">{links.map(([l,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{l}</a>)}</nav><span className="availability"><i/> Open to what’s next</span><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open}>Menu</button></header>}
