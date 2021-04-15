import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink, Link, useHistory} from "react-router-dom";
import { getUserProfile, logOut, setIsLoggedIn } from "../../redux-saga/redux/User/userSlice";
import CustomButton from "../ui/Button";

const NavigationBar = ()=>{
    const history = useHistory();
    const dispatch = useDispatch();

    if(localStorage.getItem("token")){
        dispatch(setIsLoggedIn(true))
    }
    
    const isLoggedInStatus = useSelector(state => state.userReducer.isLoggedIn )
    const user_name = useSelector(state => state.userReducer.name)
    const user_id = useSelector(state => state.userReducer.user_id)
    // console.log(isLoggedInStatus)


    const logoutUser = ()=>{
        dispatch(logOut())
        dispatch(setIsLoggedIn(false));
        history.push("/home")
        localStorage.clear();
    }

    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="#" className="navbar-brand">
                    NOTESHUB
                </Link>
                <div>
                    {
                        isLoggedInStatus &&
                        <Fragment>
                            <NavLink to="/" exact={true} style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark">
                                Home
                            </NavLink>
                            <NavLink to="/addnote" exact={true} style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark">
                                Add Notes
                            </NavLink>
                            <NavLink to={`/viewprofile/${user_id}`} exact={true} style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark" onClick={()=>dispatch(getUserProfile())}>
                                Profile - {user_name}
                            </NavLink>
                            <CustomButton style={{"marginRight": 20}} className="btn btn-light" label="Logout" onClick={logoutUser}/>
                        </Fragment>
                    }

                    {
                        !isLoggedInStatus &&
                        <Fragment>
                            <NavLink to="/home" exact={true} style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark">
                                Home
                            </NavLink>
                            <NavLink to="/login" exact={true} style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark">
                                Login
                            </NavLink>
                            <NavLink to="/register" exact={true} style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark">
                                Register
                            </NavLink>
                            <NavLink to="/contactus" exact={true} style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark">
                                Contact Us
                            </NavLink>
                            <NavLink to="/aboutus" exact={true} className="btn btn-light ml-auto mr-auto" activeClassName="btn btn-dark ml-auto">
                                About Us
                            </NavLink>
                        </Fragment>                        
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar