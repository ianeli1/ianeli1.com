import fs from "fs"
import path from "path"
import remark from "remark"
import remarkHtml from "remark-html"
import matter from "gray-matter"

const rootFolder = path.join(process.cwd(), "posts")

export interface PostData{
    id: string,
    contentHtml: string,
    author: string,
    avatar: string,
    image: string
    title: string
    date: string
    desc: string
}

//todo: paginate this
export const getPosts = () => fs.readdirSync(rootFolder).map((name) => ({
    id: name.replace(/\.md$/, ""),
    ...matter(fs.readFileSync(path.join(rootFolder, name))).data
} as Omit<PostData, "contentHtml">)).sort((a,b) => +a.date ?? 0 - +b.date ?? 0) 

export const getPost = async (id: string) => {
    try{
        const file = fs.readFileSync(path.join(rootFolder, `${id}.md`))
        const matterResult = matter(file)

        return {
            id,
            contentHtml: await (await remark().use(remarkHtml).process(matterResult.content)).toString(),
            ...matterResult.data,
        } as PostData
    }catch(e){
        console.trace(`[getPosts]: An error ocurred while getting post ${id}:`, e)
        return undefined
    }
    
}