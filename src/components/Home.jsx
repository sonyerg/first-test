/* eslint-disable react/prop-types */
import classes from "./Home.module.css";
import Desktop from "./Desktop";

export default function Home({ label }) {
  return (
    <div className={classes.homeContainer}>
      <p>{label}</p>
      <Desktop />
    </div>
  );
}
