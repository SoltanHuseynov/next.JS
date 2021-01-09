import {NextApiResponse,NextApiRequest} from "next"
import {name,project} from "../api/json/text.json"

const DB_data=(NextApiRequest,res:NextApiResponse)=>{
    res.status(200);
    res.json([name,project])
}
export default DB_data