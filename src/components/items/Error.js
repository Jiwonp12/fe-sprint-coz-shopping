import beeSad from "../../assets/beesad.png";
import classes from "./Error.module.css";

function Error() {
  return (
    <div className={classes.error}>
      <img className={classes.beeSad} src={beeSad} alt="beeSad" />
      <i>없어잉...</i>
    </div>
  );
}

export default Error;
