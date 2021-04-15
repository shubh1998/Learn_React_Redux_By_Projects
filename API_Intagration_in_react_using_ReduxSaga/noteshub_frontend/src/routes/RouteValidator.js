import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../components/layouts/NavigationBar';

const RouteValidator = ({hasNavbar, component: Component}) => {
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
