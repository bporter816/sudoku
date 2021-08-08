import Button from "@material-ui/core/Button";
import { useState } from "react";

export default function ButtonClicker(): JSX.Element {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <h1>This is a wonderful app developed by Ashika and Ben!</h1>
      <h3>{count}</h3>
      <Button onClick={handleClick}>Increment Counter!</Button>
    </div>
  );
}
