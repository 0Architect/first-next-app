import Link from "next/link";
export const getStaticProps = async () =>{

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return{
        props: {ninjas: data}
    }
}

const Profiles = ({ninjas}) => {
    return ( 
        <div>
            <h1>Profiles</h1>
            {ninjas.map((ninja)=>(
                <Link key={ninja.id} href={"/profiles/" + ninja.id}> 
                    <h3>{ninja.name}</h3>
                </Link>  
            ))}
        </div>
     );
}
 
export default Profiles;