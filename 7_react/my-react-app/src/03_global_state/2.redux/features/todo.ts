import { createSlice} from "@reduxjs/toolkit";

/*

1. 입력창에 할 일을 입력하고 Add 버튼을 누르면 목록에 추가된다.
2. 입력창이 비어있는데 Add 버튼을 누르면 → "값을 입력해주세요" 라는 경고창(alert)이 뜬다.
3. 각 Todo 항목 옆의 ❌ 버튼을 누르면 해당 항목이 삭제된다.
4. Todo 항목을 클릭하면 취소선(완료 처리)이 표시된다. (다시 클릭하면 취소선이 사라진다 → toggle 기능)
5. Todo와 관련된 모든 상태(리스트, 완료 여부)는 todoSlice.ts에서 관리한다.
6. Todo 추가, 삭제, 완료 상태 변경 로직은 전부 todoSlice 안의 reducer 함수에서 처리한다.
7. 프로젝트 전체 상태 관리는 store.ts에서 한다.
    여기서 todoSlice와 교육시  작성한 counterSlice를 함께 통합한다.
8. React 컴포넌트 파일은 .tsx, Redux 로직 파일은 .ts 확장자로 관리한다.
*/
export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};
  
// 객체배열
export type TodoState = {
  todos: Todo[];
};

// 객체배열 깊은 복사할거
export const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name : 'todoList',
  initialState : initialState,

  reducers : {
    addTodos : (state, action) => {
      const newTodo:Todo = {
        id : Math.max(0, ...state.todos.map(todo => todo.id) ) +1,
        text : action.payload,
        completed : false
      }
      state.todos.push(newTodo);
    },
    deleteTodo : (state, action) => {
      const id = action.payload;
      state.todos =state.todos.filter((todo) => todo.id != id);
    },
    toggleComplete : (state, action) => {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id == id);
      todo && (todo.completed = !todo?.completed);
    }
  }
});

export const{addTodos,deleteTodo, toggleComplete} = todoSlice.actions;

export default todoSlice.reducer;