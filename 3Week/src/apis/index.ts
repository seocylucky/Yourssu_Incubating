import axios from "axios";
import { useRecoilState } from "recoil";
import { TodoTypes, todosState } from '../recoil/todo';

export const requestPost = async (item: string, status: string) => {
    return axios({
        method: "POST",
        url: `/todo`,
        headers: {
            "Content-Type": "application-json",
        },
        data: {
            item: item,
            status: status,
        },
    });
}

export const requestGetTodo = async () => {
    return axios({
        method: "GET",
        url: `/todo`,
        headers: {
            "Content-Type": "application-json",
        },
    });3
}

export const requestDeleteTodo = async (id: string) => {
    return axios({
        method: "DELETE",
        url: `/todo`,
        headers: {
            "Content-Type": "application-json",
        },
        data: {
            id,
        },
    });
}

export const requestPatchTodo = async (id: string, item: string) => {
    return axios({
        method: "PATCH",
        url: `/todo`,
        headers: {
            "Content-Type": "application-json",
        },
        data: {
            id,
            item,
            status: "DONE"
        },
    });3
}