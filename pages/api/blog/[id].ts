import { NextApiRequest, NextApiResponse } from "next"
import { getPost } from "utils/posts"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let {id} = req.query
    if(!id){
        res.status(400).json({error: "No id provided"})
        return
    }

    if(id instanceof Array){
        id = id[0]
    }

    const post = await getPost(id)

    if(!post){
        res.status(404).json({error: `Id ${id} not found`})
        return
    }

    res.status(200).json(post)
    return
  }
  