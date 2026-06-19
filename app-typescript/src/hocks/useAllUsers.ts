import { useState } from "react";
import type { UserProfile1 } from "../Types/userProfile";
import axios from "axios";
import type { User1 } from "../Types/api/user";

// カスタムフック
export const useAllUsers = () => {
    const [userProfile, setUserProfile] = useState<Array<UserProfile1>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getUsers = () => {
        setLoading(true);
        setError(false);
        axios.get<Array<User1>>("https://jsonplaceholder.typicode.com/users").then(
            (res) => {
                const data = res.data.map((user) => ({
                    id: user.id,
                    name: `${user.name}(${user.username})`,
                    email: user.email,
                    address: `${user.address}${user.address.city}`
                }));

                setUserProfile(data);
            }).catch(() => { setError(true) }).finally(() => { setLoading(false) });


    }
    return { getUsers, userProfile, loading, error }
}