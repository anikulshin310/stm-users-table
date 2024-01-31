import { FC } from "react";

import style from "./index.module.scss";

export const Loader: FC = () => {
  return (
    <div className={style.loader_container}>
      <div className={style.loader}></div>
    </div>
  );
};
