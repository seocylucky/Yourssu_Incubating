# 유어슈 마지막 과제

## TODO

# **과제3 투두리스트 만들기 (w. 리엑트 타입스크립트)**

## 사용한 라이브러리
- 스타일 라이브러리: tailwindCSS
- 통신 라이브러리: Axios
- 전역 상태 라이브러리: recoil

<br/>

## 상태관리

### **todo.ts**
input에 새로 입력된 todo를 관리하는 inputState atom 생성  
각 컴포넌트에 이용할 임의의 데이터를 넣은 todosState atom 배열 생성

<br/>

## 컴포넌트

### **ToDoInput.tsx**
todo를 입력하는 input과 add 버튼이 있는 컴포넌트  
item 추가하는 함수인 addTodo 함수  
nextId: 추가되는 item id 값  
requestPost로 post 요청  

#### **TodoItem.tsx**
하나의 투두 컴포넌트  
interface TodoPropTypes를 이용하여 TodoItem에 인자 전달  

### **TodoList.tsx**
TodoItem 컴포넌트 배열들을 가진 전체 투두 컴포넌트  
체크박스 input을 누를 때 실행되는 onComplete 함수(requestPatchTodo로 Patch 요청)  
TodoItem을 삭제할 onDelete 함수(requestDeleteTodo로 Delete 요청)  
투두리스트가 있을 때와 없을 때 구분  

<br/>

## **API**

### **apis/index.ts**
get, post, delete, patch 요청하기 위한 함수들  

<br/>

### **[GET] /todo**

- **응답 예시**

```jsx
{
  todos: [
    {
      id: '1234-4567',
      item: "TODO1",
      status: "DONE",
    },
  ];

```

### **[POST] /todo**

- **파라미터**

```jsx
Body: {
	item: string,
	stauts: "DONE" | "NOT_DONE"
}
```

- **응답 예시**

```jsx
{
  message: '성공'
}
```

### **[DELETE] /todo**

- **파라미터**

```jsx
Body: {
  id: number
}
```

- **응답 예시**

```jsx
{
  message: '성공'
}
```

### **[PATCH] /todo**

- **파라미터**

```jsx
Body: {
	id: string,
	item: string | null,
	stauts: "DONE" | "NOT_DONE"
}
```

- **응답 예시**
