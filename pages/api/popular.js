import data from "./data";
import runMiddleware, { cors } from "./middleware";

export default async function handler (req, res) {
    await runMiddleware(req, res, cors)
    const {Popular} = data
    if (Popular) {
        return res.status(200).json(Popular);
    } else {
        return res.status(404).json({
            error: true,
            message: "Data not found"
        })
    }
}