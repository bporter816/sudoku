import Button from "@material-ui/core/Button";

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>This is a home page!</h1>
      <Button href="/about">About Page</Button>
      <Button href="/button">Button Clicker Page</Button>
    </div>
  );
}
