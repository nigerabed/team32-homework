export default function Page(){
    return(
        <>
        <h1>Geetings.....</h1>
        <Cards />
        <Person />
        
        </>
    )
}

 function Greeting(){
    return(
        <>
        <h1>
        "Hello, React!"
        </h1>
        </>
    )
}

function Card(){
    return(
       <>
       <h2>Card Title</h2>
       <p>"This is a card component"</p>
       </>
    )
}

 function Cards(){
    return(
        <>
        <Greeting />
        <Card />
        </>
    )
}

function Person(){
    const name = "Ali";
    const age = 15;
    return(
        <>
        {name} is {age >= 18 ?  "an adult" :  "a minor"}
        </>
    )
}