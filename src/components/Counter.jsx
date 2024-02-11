import React, { useState } from "react";
import { Button } from "bootstrap";

const Counter = () => {

   const [state, setState] = useState({
      count: 0,
      tags: [],
   });

   const handleCount = () => {
      setState((prevState) => {
         return {
            ...prevState,
            count: state.count + 1,
         }  
      })
   }

   return (
      <div className="container pt-3" >
         <ul>
            {
               state.tags.length ? (
                 state.tags.map((tag, i) => <ul key={i}>{tag}</ul>) 
               ) : (
                  <h1>Empty array</h1>
               )
            }
         </ul>
      </div>
   );
};

export default Counter;

// 57