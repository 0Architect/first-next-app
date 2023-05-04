import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() =>{
        setTimeout(()=>{
        router.push('/')
        }, 2000);
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page can not be found.</h2>
            <p>Go back to the <Link href='/'>homepage</Link></p>
        </div>
     );
}
 
export default NotFound;