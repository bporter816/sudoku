import { Grid, Button, Container, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { connect, sendMsg } from "../../hooks/connectSocket";

export default function Game(): JSX.Element {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
    console.log("hello");
    sendMsg("hello");
  };

  useEffect(() => {
    connect();
  });

  return (
    <Container>
      <PageTitle>Actual Game!</PageTitle>
      <Typography align="center" variant="h3">
        {count}
      </Typography>
      <Grid container justify="center">
        <Button onClick={handleClick}>Increment Counter!</Button>
      </Grid>
    </Container>
  );
}
