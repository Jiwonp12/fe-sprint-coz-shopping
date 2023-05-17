import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from "./Notify.module.css";

const Notify = ({ showAddNotify, showDelNotify }) => {
  return (
    <div>
      {showAddNotify && (
        <div className={classes.notify}>
          <FontAwesomeIcon
            className={classes.colored}
            size="lg"
            icon={faStar}
          />
          <span className={classes.add}>추가했어잉!</span>
        </div>
      )}
      {showDelNotify && (
        <div className={classes.notifyDel}>
          <FontAwesomeIcon
            className={classes.noColored}
            size="lg"
            icon={faStar}
          />
          <span className={classes.add}>삭제했어잉!</span>
        </div>
      )}
    </div>
  );
};

export default Notify;
