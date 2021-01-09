/*
1-req.query
2-req.cookies
3-req.body

*/
export default function testing(req,res){
    //res.statusCode=20
    res.setHeader("content-type","json")
    res.json({
        test1:req.query,
        test2:req.body,
        test3:req.cookies
    })
}