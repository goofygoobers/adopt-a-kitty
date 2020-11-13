import React, { useState } from 'react';

function Button() {

    const availableCats = ['aaChan', 'Rabe', 'Sylvia', 'Jacq', 'Lionel']
    const [cats, setCats] = useState(availableCats)

    const adoptMe = () => {
        console.log("You have chosen me!")
    }
    return(
        <div> 
            <button onClick = {adoptMe} > Choose me! </button>
        </div>
    ) 
}
export default Button;