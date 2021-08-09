import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Paper, Typography, Link } from "@material-ui/core";
import PageTitle from "../../components/PageTitle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginTop: 24,
    },
    paper: {
      padding: "1rem",
      maxWidth: 720,
      margin: "12px auto",
    },
  })
);

export default function About(): JSX.Element {
  const classes = useStyles();
  return (
    <Container>
      <PageTitle>About</PageTitle>
      <Paper className={classes.paper}>
        <Typography variant="body1" align="center">
          Sudoku with Friends was started by Ashika Verma and Ben Porter in the
          summer of 2021. We were both super interested in making lobby type
          games, and this was the result!
        </Typography>
      </Paper>
      <Typography variant="body1" align="center">
        <Link href="/">Return home</Link>
      </Typography>
    </Container>
  );
}
