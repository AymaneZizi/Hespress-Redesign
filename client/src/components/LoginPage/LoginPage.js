
import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


import './LoginPage.css'
import FormContainer from '../UserAccount/FormContainer/FormContainer'

function LoginPage(props) {
    console.log(props)
    return (
        <div className='loginPage'>
            {
                props.isAuthenticated ?
                    (<Redirect to={{ pathname: '/admin' }} />) :
                    (<FormContainer />)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {})(LoginPage)

