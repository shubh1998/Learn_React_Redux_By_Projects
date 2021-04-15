import {NavLink, Link} from "react-router-dom";

const NavigationBar = ()=>{
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    NOTESHUB
                </Link>
                <div>
                    <NavLink to="/" exact={true} style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark">
                        Home
                    </NavLink>
                    <NavLink to="/addnote" exact={true} style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark">
                        Add Notes
                    </NavLink>
                    <NavLink to="/contactus" exact={true} style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark">
                        Contact Us
                    </NavLink>
                    <NavLink to="/aboutus" exact={true} className="btn btn-light ml-auto mr-auto" activeClassName="btn btn-dark ml-auto">
                        About Us
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar