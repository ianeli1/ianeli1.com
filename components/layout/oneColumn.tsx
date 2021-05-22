export interface oneColumnProps{
    children: React.ReactNode
    minWidth?: string
}

export function OneColumn({children, minWidth}: oneColumnProps){
    return <section className="lg:m-auto m-0 w-min p-2" style={{minWidth: minWidth}}>
        {children}
    </section>
}