import "./App.css";
import { Loader } from "./components/Loader";
import { UsersTable } from "./components/UsersTable";
import { useFetch } from "./hooks/useFetch";
import { IData } from "./types";

function App() {
  const { data, isLoading, error } = useFetch<IData>("https://randomuser.me/api/?results=15");

  return (
    <>
      <div>{isLoading && <Loader />}</div>
      {data?.results && <UsersTable users={data.results} />}
      {error && "Приозошла ошибка"}
    </>
  );
}

export default App;
