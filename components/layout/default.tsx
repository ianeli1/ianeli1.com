import { Header } from "components/Header";

export interface DefaultProps {
    children: React.ReactNode
}

export function Default({children}: DefaultProps){

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden overscroll-y-auto">
            <Header />

            <main className="flex-grow pt-16">
                {children}
            </main>

            <footer className="h-16 flex items-center p-3 justify-between">
           
                ian elizondo - 2021 
                <a href="/" className="ml-2">github</a>
                   
                <h1>fsajf</h1>
            </footer>
        </main>
    )
    
}