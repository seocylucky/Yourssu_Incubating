import axios from "axios";
import { TodoTypes } from '../recoil/todo';

export const requestPost = async (item: string) => {
    return await axios
    .post("/todo", {
        headers: {
            "Content-Type": "application-json",
        },
        data: {
            item,
        }
    })
}

export const requestGetTodo = async () => {
    return await axios
    .get("/todo", {
        headers: {
            "Content-Type": "application-json",
        },
    })
}

export const requestDeleteTodo = async (id: string) => {
    return await axios
    .delete("/todo", {
        headers: {
            "Content-Type": "application-json",
        },
        data: {
            id
        }
    })
}

export const requestPatchTodo = async (id: string, item: string) => {
    return await axios
    .patch("/todo", {
        headers: {
            "Content-Type": "application-json",
        },
        data: {
            id,
            item,
            status: "DONE"
        }
    })
}