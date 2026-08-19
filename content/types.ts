export type AvatarState = "idle" | "greeting" | "looking" | "presenting" | "thinking" | "working" | "casual";
export interface Metric { value: string; label: string; editable?: boolean }
export interface Project { id:string; number:string; title:string; headline:string; problem:string; evidence:string[]; analysis:string[]; rootCause?:string; intervention:string[]; metrics:Metric[]; lessons:string[]; tags:string[] }
export interface CareerItem { period:string; category:string; title:string; focus:string[]; accent:string }
export interface ThinkingItem { title:string; idea:string; flow?:string[] }
