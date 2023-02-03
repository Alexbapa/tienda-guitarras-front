import { useState, useEffect } from "react"

const Carrito = () =>{

    const [count, setCount] = useState(0);

    const buttonColor = count % 2 === 0 ? "red" : "blue";
    console.log("I'm called with count", count);
    return (
      <div>
        <CustomButton color={buttonColor} onClick={() => setCount(count + 1)} />
        <CustomButton color="red" onClick={() => setCount(count + 1)} />
        <p>Button was clicked {count} times</p>
      </div>
    );
  }

  const CustomButton = ({color, onClick}) => {
    console.log("I'm called with color", color);
    return <button style={{color}} onClick={onClick}>Click me</button>;
  }

export default Carrito;