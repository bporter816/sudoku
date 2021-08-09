import { Container, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

export default function Home(): JSX.Element {
  const history = useHistory();
  const onCreateGame = () => {
    const randomGameId = (Math.random() + 1).toString(36).substring(7);
    history.push(`/room/${randomGameId}`);
  };

  return (
    <Container>
      <PageTitle>Welcome To Sudoku With Friends!</PageTitle>
      <Grid container justify="center">
        <Button onClick={onCreateGame}>CREATE A GAME</Button>
        <Button href="/about">About</Button>
      </Grid>
    </Container>
  );
}
