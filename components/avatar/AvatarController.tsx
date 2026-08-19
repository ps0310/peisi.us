"use client";
import { useEffect, type ReactNode } from "react";
import type { AvatarState } from "../../content/types";
import { useAvatarState } from "./useAvatarState";
export function AvatarSection({state,children,id,className}:{state:AvatarState;children:ReactNode;id:string;className?:string}){const{setState}=useAvatarState();useEffect(()=>{const el=document.getElementById(id);if(!el)return;const o=new IntersectionObserver(([entry])=>{if(entry.isIntersecting)setState(state)},{threshold:.34});o.observe(el);return()=>o.disconnect()},[id,state,setState]);return <section id={id} className={className}>{children}</section>}
