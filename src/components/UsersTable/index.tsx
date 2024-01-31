import { FC, useEffect, useState } from "react";
import { IRandomUser } from "../../types";
import { formatDate } from "../../utils/formatDate";
import { UserPicture } from "../UserPicture";
import { Input } from "../Input";

import style from "./index.module.scss";

interface IProps {
  users: IRandomUser[];
}

export const UsersTable: FC<IProps> = (props) => {
  const { users } = props;
  const [usersList, setUsersList] = useState<IRandomUser[]>([]);

  useEffect(() => {
    setUsersList(users);
  }, []);

  const filterUsers = (value: string | undefined) => {
    if (!value || !value.trim()) {
      setUsersList(users);
    } else {
      const searchTerms = value.toLowerCase().split(" ");
      const filtered = users.filter((user) => {
        const fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
        return searchTerms.every((term) => fullName.includes(term));
      });
      setUsersList(filtered);
    }
  };

  return (
    <div className={style.wrapper}>
      <Input onChange={filterUsers} onReset={() => setUsersList(users)} />
      {!!usersList.length && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
              <th>Location</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Registered Date</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user, index) => (
              <tr key={index}>
                <td>{`${user.name.first} ${user.name.last}`}</td>
                <td>
                  <UserPicture picture={user.picture} />
                </td>
                <td>{`${user.location.state}, ${user.location.city}`}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{formatDate(user.registered.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!usersList.length && "Ничего не найдено"}
    </div>
  );
};
