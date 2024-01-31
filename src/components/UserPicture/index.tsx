import { FC, useState } from "react";

import style from "./index.module.scss";

interface IProps {
  picture: {
    large: string;
    thumbnail: string;
  };
}

export const UserPicture: FC<IProps> = (props) => {
  const { picture } = props;

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={style.wrapper}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {" "}
      <img src={picture.thumbnail} alt="Profile" />
      {isHovered && (
        <div className={style.large_image}>
          <img src={picture.large} alt="Profile" />
        </div>
      )}
    </div>
  );
};
