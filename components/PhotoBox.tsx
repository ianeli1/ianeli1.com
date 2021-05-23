import { CSSProperties } from "react";
import { Title } from "./Title";

export interface PhotoBoxProps{
    src?: string
    title?: string
    desc?: string
    className?: string
    styles?: CSSProperties
}

export function PhotoBox({src, title, desc, className, styles}: PhotoBoxProps){
    return (
        <div className={`${className} border rounded bg-white `} style={styles}>
            { src && <img src={src} className="absolute top-0 right-0 w-full h-full object-cover" />}
            <section className="p-2 absolute bottom-0 left-0 right-0 bg-opacity-70 bg-gray-200">
                <Title>
                    {title}
                </Title>
                <p>
                    {desc}
                </p>
            </section>
        </div>
    )
}