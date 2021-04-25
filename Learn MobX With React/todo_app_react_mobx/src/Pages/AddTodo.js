import { inject, observer } from 'mobx-react';
import { Component } from 'react'
import shortid from 'shortid';

// @inject('store')
// @observer
class AddTodo extends Component {

    addToDoFormSubmit = (e) =>{
        e.preventDefault();
        let newTodo = {
            id: shortid.generate(),
            todo: e.target.todo.value.trim(),
            status: false
        }
        this.props.store.createNewTodo(newTodo);
        e.target.todo.value = "";
    }

    render() {
        return (
            <div className="container py-3">
                <div className="card border-0 shadow">
                    <div className="card-header bg-danger text-white">
                        <h6>Add Todo</h6>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.addToDoFormSubmit}>
                            <div className="form-group row">
                                <label className="col-lg-2 col-form-label">Note Title : </label>
                                <input name="todo" type="text" placeholder="Enter Todo" className="form-control col-lg-10" required={true}/>
                            </div>
                            <button className="btn btn-primary float-right" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// export default AddTodo
export default inject('store')(observer(AddTodo))
