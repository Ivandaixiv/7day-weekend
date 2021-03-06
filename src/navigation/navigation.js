import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Link } from "react-router-dom";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";

const Navigation = (props) => {
  const { classes } = props;
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx({
        [classes.fullList]: anchor === "top",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link className={classes.link} to="/home">
            <Button className={classes.button}>Home</Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className={classes.link} to="/podcasts">
            <Button className={classes.button}>Podcasts</Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className={classes.link} to="/events">
            <Button className={classes.button}>Events</Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className={classes.link} to="/vlogs">
            <Button className={classes.button}>Vlog</Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className={classes.link} to="/webinars">
            <Button className={classes.button}>Webinar</Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className={classes.link} to="/medias">
            <Button className={classes.button}>Media</Button>
          </Link>
        </ListItem>
      </List>
      <Button
        onClick={toggleDrawer("top", false)}
        className={classes.menuButton}
      >
        <DehazeIcon style={{ transform: " rotate(90deg)" }} />
      </Button>
    </div>
  );
  return (
    <div>
      <>
        <div className={classes.navigation}>
          <Link to="/home">
            <img
              src="https://via.placeholder.com/150x100"
              alt="7 Day Weekend Logo"
            />
          </Link>
          <Button
            onClick={toggleDrawer("top", true)}
            className={classes.menuButton}
          >
            <DehazeIcon />
          </Button>
        </div>
        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
      </>
    </div>
  );
};
export default withStyles(styles)(Navigation);
