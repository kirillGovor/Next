import { Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Crashable.module.css";

const Crashable = () => (
  <div className={styles.crashable}>
    <Image
      src="/smth went wrong.png"
      alt="smth went wrong"
      width={300}
      height={300}
    />
    <Typography gutterBottom variant="h5" component="div">
      Something went wrong
    </Typography>
  </div>
);

export default Crashable;
