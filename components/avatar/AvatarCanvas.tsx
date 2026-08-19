"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { AvatarFallback } from "./AvatarFallback";
const Scene=dynamic(()=>import("./AvatarScene"),{ssr:false,loading:()=> <AvatarFallback/>});
export function AvatarCanvas(){return <Suspense fallback={<AvatarFallback/>}><Scene/></Suspense>}
