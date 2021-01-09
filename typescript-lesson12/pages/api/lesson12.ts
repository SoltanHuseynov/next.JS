import {NextApiRequest,NextApiResponse} from "next"

const test=(NextApiRequest,res:NextApiResponse)=>{
    res.status(200).json({text:"welcome to next.js"})
}
export default test