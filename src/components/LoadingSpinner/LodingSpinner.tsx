import classNames from "classnames/bind";
import style from "./style.module.scss";

const cx = classNames.bind(style);

export default function LoadingSpinner() {
  return (
    <div className={cx("container")}>
      <div className={cx("loading")}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
