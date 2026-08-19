"use client";
/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { AvatarState } from "../../content/types";
export function SiAvatar({state}:{state:AvatarState}){
 const group=useRef<THREE.Group>(null);const head=useRef<THREE.Group>(null);const arm=useRef<THREE.Group>(null);
 useFrame(({pointer,clock})=>{if(!group.current||!head.current)return;const t=clock.getElapsedTime();head.current.rotation.y=THREE.MathUtils.lerp(head.current.rotation.y,THREE.MathUtils.clamp(pointer.x*.28,-.28,.28),.06);head.current.rotation.x=THREE.MathUtils.lerp(head.current.rotation.x,THREE.MathUtils.clamp(-pointer.y*.12,-.12,.12),.06);group.current.position.y=Math.sin(t*1.35)*.025-.45;if(arm.current){const wave=state==="greeting"?Math.sin(t*7)*.24:0;arm.current.rotation.z=THREE.MathUtils.lerp(arm.current.rotation.z,state==="greeting"?-2.25+wave:-.22,.08)}});
 return <group ref={group} scale={1.17}>
  <mesh position={[0,-1.15,0]} scale={[1.02,1.35,.58]}><capsuleGeometry args={[.72,1.25,8,20]}/><meshStandardMaterial color="#282923" roughness={.75}/></mesh>
  <mesh position={[0,-.37,.56]} scale={[.55,.7,.12]}><circleGeometry args={[.62,32]}/><meshStandardMaterial color="#f1d6b4"/></mesh>
  <group ref={head} position={[0,.48,.03]}><mesh><sphereGeometry args={[.68,32,32]}/><meshStandardMaterial color="#d99b78" roughness={.7}/></mesh><mesh position={[0,.18,-.04]} scale={[1.06,.72,1.05]}><sphereGeometry args={[.7,32,16]}/><meshStandardMaterial color="#211916" roughness={.95}/></mesh><mesh position={[0,-.17,.16]} scale={[.84,.78,.88]}><sphereGeometry args={[.68,32,24]}/><meshStandardMaterial color="#e3a783" roughness={.68}/></mesh><mesh position={[-.22,-.08,.74]}><sphereGeometry args={[.035,16,16]}/><meshStandardMaterial color="#181411"/></mesh><mesh position={[.22,-.08,.74]}><sphereGeometry args={[.035,16,16]}/><meshStandardMaterial color="#181411"/></mesh><mesh position={[0,-.29,.76]} rotation={[0,0,Math.PI]}><torusGeometry args={[.12,.012,8,24,Math.PI]}/><meshStandardMaterial color="#8b4537"/></mesh></group>
  <group ref={arm} position={[.7,-.5,0]} rotation={[0,0,-.22]}><mesh position={[0,-.65,0]}><capsuleGeometry args={[.18,.95,8,16]}/><meshStandardMaterial color="#282923"/></mesh><mesh position={[0,-1.28,0]}><sphereGeometry args={[.2,16,16]}/><meshStandardMaterial color="#d99b78"/></mesh></group>
  <mesh position={[-.76,-1.15,0]} rotation={[0,0,-.2]}><capsuleGeometry args={[.18,1.15,8,16]}/><meshStandardMaterial color="#282923"/></mesh>
 </group>;
}
