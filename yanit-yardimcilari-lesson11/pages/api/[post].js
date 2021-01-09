/*
1.res.json
2.res.status
3.res.send
*/

export default (req,res)=>{
    res.status(200)
    res.json({
        user:"wolker",
        password:"wolker123"
    })
}