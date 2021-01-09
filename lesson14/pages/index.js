const test=(props)=>(
    <html>
        <h2>
            <p>host:{props.host}</p>
            <p>Username:{props.username}</p>
            <p>Password:</p>
        </h2>
    </html>
)

export  function getProps(){
    return{
        props:{
            host:process.env.DB_HOST,
            username:"wolker",
            password:"*****"
        }
    }
}
export default test