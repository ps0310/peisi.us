"use client";
import { motion } from "framer-motion";
import type { Project } from "../../content/types";
import { MetricDisplay } from "./MetricDisplay";
export function ProjectCaseStudy({project}:{project:Project}){return <article className={`caseStudy ${project.id}`}><div className="caseTop"><span>{project.number} / {project.title}</span><div>{project.tags.map(t=><i key={t}>{t}</i>)}</div></div><motion.h3 initial={{opacity:.25,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}}>{project.headline}</motion.h3><div className="caseGrid"><div><b>PROBLEM</b><p>{project.problem}</p></div><div><b>ANALYSIS</b><ul>{project.analysis.map(x=><li key={x}>{x}</li>)}</ul></div><div><b>INTERVENTION</b><ul>{project.intervention.map(x=><li key={x}>{x}</li>)}</ul></div></div>{project.metrics.length>0&&<div className="metrics">{project.metrics.map(m=><MetricDisplay key={m.value} metric={m}/>)}</div>}</article>}
