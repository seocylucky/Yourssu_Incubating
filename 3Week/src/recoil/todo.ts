import { atom } from "recoil";

export type TodoTypes = {
  id?: string;
  item?: string;
  status?: "DONE" | "NOT_DONE";
}

export const inputState = atom<string>({
  key: 'inputState',
  default: '',
});

export const todosState = atom<TodoTypes[]>({
  key: 'todosState',
  
  default: [
    {
      id: "1",
      item: 'Todo List를',
      status: "NOT_DONE",
    },

    {
      id: "2",
      item: '자유롭게',
      status: "NOT_DONE",
    },

    {
      id: "3",
      item: '추가해보세요!',
      status: "NOT_DONE",
    }
  ],
});