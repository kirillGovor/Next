import { Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Crashable.module.css";

const Crashable = () => (
  <div className={styles.crashable}>
    <Image
      src="/smth went wrong.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </div>
);

export default Crashable;
