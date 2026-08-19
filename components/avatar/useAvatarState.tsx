"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { AvatarState } from "../../content/types";
const AvatarContext = createContext<{state:AvatarState;setState:(s:AvatarState)=>void}>({state:"idle",setState:()=>{}});
export function AvatarProvider({children}:{children:ReactNode}){const [state,setState]=useState<AvatarState>("greeting");return <AvatarContext.Provider value={{state,setState}}>{children}</AvatarContext.Provider>}
export const useAvatarState=()=>useContext(AvatarContext);
