export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja=>{
        return{
            params: {id: ninja.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {person: data}
    }
}

const Details = ({person}) => {
    return (  
        <div>
           <h1>{person.name}</h1>
           <h1>{person.email}</h1>
           <h1>{person.website}</h1>
           <h1>{person.address.city}</h1>
        </div>
    );
}
 
export default Details;