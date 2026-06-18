import axios from "axios"
import { useState } from "react"
import { Todo } from "./Todo";
import type { TodoType } from "./Types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import type { User } from "./Types/user";


const user: User = {
  name: "masa",
  // hobbies: ["映画","ゲーム"]
}

function App() {



  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then(
      (res) => {
        setTodos(res.data);
      }
    )
  }
  return (
    <>
    <UserProfile user={user}/>
      <Text color="red" fontSize="18px" ></Text>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </>
  )
}

export default App
