"use client";
import { Suspense } from "react";
import { AvatarFallback } from "./AvatarFallback";
import Scene from "./AvatarScene";
export function AvatarCanvas(){return <Suspense fallback={<AvatarFallback/>}><Scene/></Suspense>}
