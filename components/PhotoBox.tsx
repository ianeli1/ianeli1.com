import { Title } from "./Title";

export interface PhotoBoxProps{
    src?: string
    title?: string
    desc?: string
}

export function PhotoBox({src, title, desc}: PhotoBoxProps){
    return (
        <div className="relative bg-white">
            { src && <img src={src} className="absolute top-0 right-0 w-full h-full object-cover" />}
            <section className="p-2">
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