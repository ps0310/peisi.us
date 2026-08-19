"use client";
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { useAvatarState } from "./useAvatarState";
import { SiAvatar } from "./SiAvatar";
export default function AvatarScene(){const{state,setState}=useAvatarState();return <button className="avatarCanvas" onClick={()=>setState("greeting")} aria-label={`Meet Si. Current character state: ${state}`}><Canvas dpr={[1,1.5]} camera={{position:[0,.15,5],fov:36}} gl={{alpha:true,antialias:true}}><ambientLight intensity={2}/><directionalLight position={[3,4,5]} intensity={3}/><directionalLight position={[-3,2,1]} intensity={1.5} color="#d9ff43"/><SiAvatar state={state}/></Canvas><span className="avatarStatus">SI / {state}</span></button>}
