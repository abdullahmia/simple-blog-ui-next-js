import data from "../data";

export default function handler (req, res) {
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