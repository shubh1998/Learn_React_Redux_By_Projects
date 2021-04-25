import { computed, observable } from "mobx";

const defaultState =  localStorage.getItem("todos") || [
    {
        "id": 1,
        "todo": "Learn mobx",
        "status": true
    }
]

class TodoStore {
    @observable todos = defaultState
    @observable filter = ""
    @observable getEditTodo = null
    @computed get filteredTodos() {
        switch (this.filter) {
            case "completed":
                return this.todos.filter((item) => item.status)

            case "incompleted":
                return this.todos.filter((item) => !item.status)
        
            default:
                return this.todos
        }
    }

    createNewTodo(newTodo){
        this.todos.push(newTodo)
        // localStorage.setItem("todos", this.todos)
    }

    removeAllTodos(){
        this.todos = []
    }

    removeSingleTodo(id){
        this.todos = this.todos.filter((item) => item.id !== id);
    }

    storeEditedTodoInForm(item){
        this.getEditTodo = item;
    }

    updateTodoStatus(payload){
        this.todos = this.todos.map((item) => ((item.id === payload.id) ? payload : item));
    }
}

let store = new TodoStore();

export default store;