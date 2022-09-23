import React from "react";

// function Greet()
// {
//     return<h1>
//         Hellow Ahsan
//     </h1>
// }

export const Greet=(props)=>{
    return (
    <div>
            <h1>Hellow { props.name } Hero name is { props.heroName }</h1>
            {props.children}
    </div>
    );
}

//export default Greet