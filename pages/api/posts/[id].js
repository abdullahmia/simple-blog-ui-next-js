import data from "../data";
import runMiddleware, { cors } from "../middleware";


export default async function handler (req, res) {
    await runMiddleware(req, res, cors)
    const { id } = req.query;
    const { Posts } = data;
    if (id) {
        const post = Posts.find((value) => value.id == id)
        if (post) {
            return res.status(200).json(post)
        } else {
            return res.status(200).json({
                error: true,
                message: 'Post not found'
            })
        }
    } else {
        return res.status(200).json({
            error: true,
            message: 'Post not found'
        })
    }
}