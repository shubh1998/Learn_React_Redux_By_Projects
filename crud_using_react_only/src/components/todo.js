// Class Compoents: State-ful Components, This are generally slower as compared to functional components because it not only contains visual part 
//                  but also methods, constructor and some business logics. Class Component Supports lifecycle method like - componentDidMount(),
//                  componentDidUpdate(), 
//--------------------------------------------------------------------------------------------------------------------------------------------------
// Functional Compoents: State-less Components, This are generally faster as compared to class components because it only contains visual part.
//                      Functional component did not support lifecycle methods.
//--------------------------------------------------------------------------------------------------------------------------------------------------

import React, { Component } from "react";
import './css/style.css'
import Header from './Header';
import AddTasks from './AddTasks';
import GetRandomTask from './GetRandomTask';
import HowtoAddTask from './HowtoAddTask';
import TaskList from "./TaskList";

// Main Component contains all component and rendered by the root component
class Todo extends Component {
    state = {
        tasks: []
    }

    // constructor(props){
    //     super(props);
    //     this.deleteAllTasks = this.deleteAllTasks.bind(this);
    //     this.generateRandomTask = this.generateRandomTask.bind(this);
    //     this.createTaskFunction = this.createTaskFunction.bind(this);
    //     this.deleteIndividualtask = this.deleteIndividualtask.bind(this);

    //     this.state = {
    //         tasks: []
    //     }
    // }
    //

    /*Delete All Tasks i.e. do empty array of tasks*/
    deleteAllTasks = ()=>{
        this.setState(() => {
            return {
                tasks: []
            }
        })
    }
    
    //Delete Indidual Task
    deleteIndividualtask = (deletedTask)=>{
        // console.log("Hello there ", deletedTask);
        this.setState((prevState) => {
            return {
                tasks : prevState.tasks.filter(result => (result !== deletedTask))
            }
        })
    }

    //Generate Random Task
    generateRandomTask = ()=>{
        const randomNum = Math.floor(Math.random() * this.state.tasks.length)
        const taskRandom = this.state.tasks[randomNum];
        alert(taskRandom);
    }

    //Add a task function
    createTaskFunction = (createTask)=>{
        // console.log(createTask)
        if(!createTask){
            return "Enter a valid value to add task !"
        } else if(this.state.tasks.includes(createTask)){
            return "Task already exist !"
        }

        this.setState((prevState) => {
            return {
                tasks : prevState.tasks.concat(createTask)
            }
        })
    }
    
    //-------------------------Lifecycle Method - Run before component loads--------------------------------
    componentDidMount(){
        const fetchTaskData = localStorage.getItem('tasks');
        const fetchedTasks = JSON.parse(fetchTaskData);
        if(fetchedTasks){
            this.setState(() => {
              return {
                tasks: fetchedTasks,
              };
            });
        }
    }

    //Lifecycle method runs after component update its states
    componentDidUpdate(prevProps, prevState){
        if(prevState.tasks.length !== this.state.tasks.length){
            const taskData = JSON.stringify(this.state.tasks);
            localStorage.setItem("tasks", taskData);
        }
    }

    //Lifecycle method runs when component destroyed or rendered
    componentWillUnmount(){
        console.log("componentWillUnmount !")
    }
    
    render() {
        const subtitle = "Put your tasks in the hands of a computer !!";
        
        return(
            <div className="container">
                {/* <button onClick={this.deleteIndividualtask}>bhghjg</button> */}
                <Header title="Let's create todo !" subtitle={subtitle} />
                <HowtoAddTask />
                <GetRandomTask randomTask={this.state.tasks.length} generateRandomTask={this.generateRandomTask} />
                <br />
                <AddTasks createTaskFunction={this.createTaskFunction} />
                <TaskList tasks={this.state.tasks} deleteAllTasks={this.deleteAllTasks} deleteIndividualtask={this.deleteIndividualtask}/>
            </div>
        )
    }
}


// Header Component - Normal Functional Component
// function Header(props) {
//     return (
//         <div className="row">
//         <h1 className="text-center-heading col-lg-12">TODO App</h1>
//         <h2 className="col-lg-12">{props.subtitle}</h2>
//         <h3 className="col-lg-12">{props.title} Click on how to add task for info.</h3>
//         </div>
//     );
// }


// //HowtoAddTask Component tell how to add tasks
// class HowtoAddTask extends Component {
//     helptoAddTask(){
//         alert("Just fill the form and click on submit to add todo. and todo will reflect on the below list.")
//     }   

//     render() {
//         return (
//           <div>
//             <div className="row">
//               <div className="col-lg-12">
//                 <button className="btn btn-info" onClick={this.helptoAddTask}>
//                   How to add a task?
//                 </button>
//               </div>
//             </div>
//             <br/>
//           </div>
//         );
//     }
// }


// //GetRandomTask Component : it will alert the random task from task list - Arrow Functional Component
// const GetRandomTask = (props) => {
//     return (
//         <div className="row">
//             <div className="col-lg-12">
//                 <button className="btn btn-warning" disabled={!props.randomTask} onClick={props.generateRandomTask}>Get Random Task</button>
//             </div>
//         </div>
//     )
// }


// // AddTask Component
// class AddTasks extends Component {
//     constructor(props){
//         super(props)
//         this.formSubmit = this.formSubmit.bind(this);
//         this.state = {
//             error: undefined
//         }
//     }

//     formSubmit(e){
//         e.preventDefault();
//         const formData = e.target.elements.todotask.value.trim();
//         // alert(formData)
//         const errorMessage = this.props.createTaskFunction(formData);
//         if(errorMessage){
//             this.setState(() => {
//                 return {
//                     error: errorMessage
//                 }
//             })
//         }else{
//            this.setState(() => {
//                 return {
//                     error: undefined
//                 }
//             }) 
//         }
//         e.target.elements.todotask.value = '';
//     }

//     render(){
//         return (
//             <div className="row">
//                 <form className="form-horizontal col-lg-12" onSubmit={this.formSubmit}>
//                   <div className="form-group row">
//                     <label className="control-label col-lg-1">TODO : </label>
//                     <div className="col-lg-11">
//                       <input type="text" name="todotask" className="form-control" id="todotask" placeholder="Enter task"/>
//                       {this.state.error && <p className="error-msg">{this.state.error}</p>}
//                     </div>
//                   </div>
//                   <div className="form-group row">
//                     <div className="col-lg-12">
//                       <button type="submit" className="btn btn-primary right">Submit</button>
//                     </div>
//                   </div>
//                 </form>
//             </div>
//         )
//     }
// }


// // TaskList Component
// function TaskList(props) {
//     return (
//         <div>
//             <div className="row">
//                 <h3 className="todolist-heading col-lg-12">ToDo List</h3>
//             </div>
//             <div className="row">
//                 {props.tasks.length === 0 && <p>Please add tasks to get started !</p>}
//                 <h5 className="col-lg-6"> Task Count : {props.tasks.length}</h5>
//                 <span className="col-lg-6"><button className="btn btn-danger right" onClick={props.deleteAllTasks}>Remove All Tasks</button></span>
//             </div>
//             <br/>

//             <div>
//                 {
//                     props.tasks.map(todo => <IndividualTask key={todo} individualTask={todo} deleteTask={props.deleteIndividualtask}/>)
//                 }
//             </div>
//         </div>
//     )
// }


// // IndividualTask Component
// class IndividualTask extends Component {
//     render(){
//          return (
//             <div className="container">
//                 <ol className="list-group col-lg-12">
//                     <li className="list-group-item d-flex justify-content-between align-items-center">
//                     {this.props.individualTask}
//                     <button type="button" className="btn btn-danger" onClick={(e) => {this.props.deleteTask(this.props.individualTask)}}>Delete</button>
//                     </li>
//                 </ol>
//             </div>
//         );
//     }
//}

export default Todo;