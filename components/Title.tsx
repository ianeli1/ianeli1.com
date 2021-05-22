export interface TitleProps {
    children: React.ReactNode
    className?: string
}

export function Title({children, className}: TitleProps){
    return (
        <h1 className={"text-3xl " + className}>
            {children}
        </h1>
    )
}