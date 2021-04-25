import { inject, observer } from 'mobx-react';
import { Component } from 'react';

// @inject('store')
// @observer
class TodoList extends Component{
    applyFilter = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
        this.props.store.filter = e.target.value;
    }

    deleteAllTodos = (e)=>{
        e.preventDefault();
        this.props.store.removeAllTodos()
    }

    deleteTodo = (id)=>{
        this.props.store.removeSingleTodo(id);
        this.props.store.filter = "";
    }

    changeTodoStatus = (todo)=>{
        let todoItem = {...todo, "status": !todo.status}
        this.props.store.updateTodoStatus(todoItem);
        this.props.store.filter = "";
    }
    
    render(){
        let { filteredTodos } = this.props.store;
        let count = 1;

        return (
            <div className="container py-5">  
                <div className="row">
                    <div className="col-lg-12"><h1 className="text-center text-danger">Todo List</h1></div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <button className="btn btn-danger" onClick={this.deleteAllTodos}>Delete All Todos</button>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="mt-1 float-right text-primary">Filter By: </h5>
                    </div>
                    <div className="col-lg-2">
                        <select className="custom-select" onChange={this.applyFilter}>
                            <option value="">Select Filter</option>
                            <option value="completed">Completed</option>
                            <option value="incompleted">InCompleted</option>
                        </select>
                    </div>
                </div>

                <br/>

                <table className="table table-hover text-center shadow">
                    <thead>
                        <tr>
                            <th>S.no.</th>
                            <th>Todo</th>
                            <th>Todo Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredTodos.map(item => (
                                <tr key={item.todo} className={item.status ? "bg-info" : "bg-warning"} onClick={()=> this.changeTodoStatus(item)}>
                                    <td>{count++}</td>
                                    <td>{item.todo}</td>
                                    <td>{item.status ? "Completed" : "InCompleted"}</td>
                                    <td>
                                        <span className="material-icons mr-2" onClick={()=>this.deleteTodo(item.id)}>delete</span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

// export default TodoList
export default inject('store')(observer(TodoList))