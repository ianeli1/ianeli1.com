export interface DefaultProps {
    children: React.ReactNode
}

export function Default({children}: DefaultProps){

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden overscroll-y-auto">
            <header className="h-16 text-white bg-black flex items-center p-1 fixed w-full justify-between">
                <h1 className="text-5xl"> 
                    header
                </h1>
                menu options
            </header>

            <main className="flex-grow pt-16">
                {children}
            </main>

            <footer className="h-16 flex items-center p-1 justify-between">
           
                ian elizondo - 2021 
                <a href="/" className="ml-2">github</a>
                   
                <h1>fsajf</h1>
            </footer>
        </main>
    )
    
}