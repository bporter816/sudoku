import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
} from "@material-ui/core";

import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    settingsButton: {
      marginLeft: theme.spacing(2),
    },

    title: {
      flexGrow: 1,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" color="inherit">
              Sudoku with Friends
            </Link>
          </Typography>
          <Typography variant="body1">generic-username</Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.settingsButton}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
