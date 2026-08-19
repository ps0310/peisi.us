export function LargeTitle({children,outline=false}:{children:React.ReactNode;outline?:boolean}){return <h2 className={`largeTitle ${outline?"outline":""}`}>{children}</h2>}
