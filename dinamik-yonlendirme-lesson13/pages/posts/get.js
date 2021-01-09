import Link from "next/link"
import {getPostData, Get_db} from "../data/post"
import {link} from "../data/object.json"
var data=({potsData,jsonfile})=>(
    <body>
        <div> Date bese</div>
        <Link href="/">Home page </Link>
        <h1>{potsData.title}</h1>
        <h1>{potsData.date}</h1>
        <Link href={jsonfile}>link</Link>
    </body>
)

export function getStaticProps(){
    const potsData=getPostData()
    const jsonfile=link
    return{
        props:{
            potsData,
            jsonfile
        }
    
    }
}

export default data