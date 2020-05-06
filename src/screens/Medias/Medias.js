import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
const Medias = ({ classes, data }) => {
  console.log("Media", data);
  return (
    <>
      {data.map((media, index) => {
        return (
          <>
            <img src={media.thumbnail} alt={media.title} />
            <p>{media.title}</p>
            <p>{media.description}</p>
          </>
        );
      })}
    </>
  );
};

export default withStyles(styles)(Medias);
