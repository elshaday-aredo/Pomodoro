import React from "react";

function Paused({isTimerRunning}) {
    if(isTimerRunning) return null
return(
<h1> PAUSED </h1>
)    

}


export default Paused