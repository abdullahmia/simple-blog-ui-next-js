import data from "../data";
import runMiddleware, { cors } from '../middleware';


export default async function handler (req, res) {
    await runMiddleware(req, res, cors)
    const {Posts} = data;
    if (Posts) {
        return res.status(200).json(Posts)
    } else {
        return res.status(404).json({
            error: true,
            messaeg: "data not found"
        })
    }
}