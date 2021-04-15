import { useEffect, useState } from "react";

const Counter = (props)=>{

    const [count , setCount] = useState(props.count);
    const [name, setName] = useState("Anonymous")
    const [visibility , setVisibility] = useState(false)


    const IncrementCount = ()=>{
        setCount(count + 1)
    }

    const DecrementCount = ()=>{
        setCount(count - 1)
    }

    const ResetCount = ()=>{
        setCount(0)
    }

    const changeName = (e)=>{
        setName(e.target.value)
    }

    const setVisibilityFunction = ()=>{
        setVisibility(!visibility);
    }

    useEffect(()=>{
      console.log("Use effect runs");
      document.title = count
    }, [count])

    return (
      <div>
        <div className="container">
          <div className="row">
            <h1 className="col-lg-12 heading text-center">
              Counter App Using Hooks
            </h1>
          </div>
          <br />

          <div className="row">
            <div className="col-lg-12">
              <h2 className="brown">Hi {name} !</h2>
                <br/>
                <form>
                    <div className="form-row">
                        <div className="col-lg-2">
                            <h5>Type Your Name :</h5>
                        </div>
                        <div className="col-lg-10">
                            <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" onChange={changeName}/>
                        </div>
                    </div>
                </form>
                <br/>
              <button className="btn btn-warning" onClick={setVisibilityFunction}>{visibility ? "Hide Details" : "Show Details"}</button>
                {
                    visibility &&
                    (<p>Use +1, -1 and reset buttons to use counter.</p>)
                }

                <br/><br/>
              <h2>Counter : {count}</h2>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-lg-4">
              <button className="btn btn-success" onClick={IncrementCount}>+1</button>
            </div>
            <div className="col-lg-4">
              <button className="btn btn-danger" onClick={DecrementCount}>-1</button>
            </div>
            <div className="col-lg-4">
              <button className="btn btn-primary" onClick={ResetCount}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    );
}

//default props
Counter.defaultProps = {
  count: 0,
};


export default Counter;