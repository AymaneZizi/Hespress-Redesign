import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                props => isAuthenticated === true ?
                    <Component {...props} /> :
                    <Redirect to={{ pathname: '/login', state: props.location }} />
            }
        />
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps, {})(PrivateRoute)
