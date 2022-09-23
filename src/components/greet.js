import React from "react";

// function Greet()
// {
//     return<h1>
//         Hellow Ahsan
//     </h1>
// }

export const Greet=(props)=>{
    const {name,heroName,children}=props;
    return (
    <div>
            <h1>Hellow { name } Hero name is { heroName }</h1>
            {children}
    </div>
    );
}

//export default Greet