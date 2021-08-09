import { Button, Container, Grid } from "@material-ui/core";
import PageTitle from "../../components/PageTitle";

export default function Room(): JSX.Element {
  const gameId = window.location.pathname.split("/").slice(-1).pop();

  return (
    <Container>
      <PageTitle>Waiting Room</PageTitle>
      <Grid container justify="center">
        <Button href={`/game/${gameId}`}>START GAME</Button>
      </Grid>
    </Container>
  );
}
