import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../components/layouts/NavigationBar';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

const RouteValidator = ({hasNavbar, component: Component, path}) => {
    const isLoggedInStatus = useSelector(state => state.userReducer.isLoggedIn )
    console.log(path === "/" && !isLoggedInStatus);

    if (path === "/" && !isLoggedInStatus) {
        return <Redirect to="/home"></Redirect>;
    }


    if (hasNavbar) {
        return (
            <Fragment>
                <NavigationBar />
                <Component />
            </Fragment>
        );
    }
    return <Component />
}

RouteValidator.propTypes = {
  component: PropTypes.func.isRequired,
  hasNavbar: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
}

export default RouteValidator
