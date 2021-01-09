import Link from "next/link"
import Head from "next/head"

export default function test7(props){
    return (
        <html>
            <Head>
                <title>welcom next.js</title>
            </Head>
            <body>
                <div>On Olusturma</div>
                <Link href="/posts/page1">page1-posts</Link>
                <div>Next date:{props.go}</div>
            </body>
        </html>
    )

}
//getServerSideProps -Sunucu tarafdan olusum
export async function getServerSideProps(context){
    const res=await fetch("https://api.github.com/repos/vercel/next.js")
    const json=await res.json()
    return{
        props:{go:json.stargazers_count}
    }
}

