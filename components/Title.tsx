export interface TitleProps {
    children: React.ReactNode
    className?: string
}

export function Title({children, className}: TitleProps){
    return (
        <h1 className={"text-3xl font-thin " + className}>
            {children}
        </h1>
    )
}