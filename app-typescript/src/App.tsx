import axios from "axios"
import { useState } from "react"
import { Todo } from "./Todo";
import type { TodoType } from "./Types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import type { User } from "./Types/user";
import { UserCard } from "./componetns/UserCard";
import { useAllUsers } from "./hocks/useAllUsers";


const user: User = {
  name: "masa",
  // hobbies: ["映画","ゲーム"]
}

function App() {


  const { getUsers, userProfile, loading, error } = useAllUsers();


  const [todos, setTodos] = useState<Array<TodoType>>([]);


  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then(
      (res) => {
        setTodos(res.data);
      }
    )
  }

  const onClickFetchUser = () => {
    getUsers();
  }


  return (
    <>
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" ></Text>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
      <br />
      <br />
      <br />
      <button onClick={onClickFetchUser}>データ取得</button>
      {error ? (
        <p>データの取得に失敗しました</p>
      ) : loading ? (<p>Loading....</p>) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}

    </>
  )
}

export default App
