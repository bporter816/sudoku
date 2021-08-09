import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

interface PageTitleProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginTop: 24,
    },
  })
);

export default function PageTitle({ children }: PageTitleProps) {
  const classes = useStyles();

  return (
    <Typography variant="h4" align="center" className={classes.title}>
      {children}
    </Typography>
  );
}
