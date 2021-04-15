//TodoAppReducer contains a logic when state mgmt become complex by using useState 
//Behind the scene useState uses useReducer to manage state and its operations with actions 
const TodoAppReducer = (state, action)=>{
    switch(action.type){
        case 'POPULATE_TASKS':
            return action.tasks;

        case 'ADD_TASK':
            return [...state, action.task];

        case 'DELETE_TASK':
            return state.filter(result => result !== action.task);

        case 'DELETE_ALL_TASK':
            return []

        default:
            return state;
    }
}

export default TodoAppReducer