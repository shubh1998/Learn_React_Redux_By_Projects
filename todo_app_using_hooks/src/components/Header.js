// Header Component - Normal Functional Component
const Header = (props)=>{
    return (
        <div className="row">
        <h1 className="text-center-heading col-lg-12">TODO App</h1>
        <h2 className="col-lg-12">{props.subtitle}</h2>
        <h3 className="col-lg-12">{props.title} Click on how to add task for info.</h3>
        </div>
    );
}

export default Header;