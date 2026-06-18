import type { FC } from "react";
import type { TodoType } from "./Types/todo";


// Pick 必要なもの Omit 不要なもの
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "[完]" : "[未]";
    return (
        <p>{`${completeMark}${title}ユーザー：${userId}`}</p>

    )
}