import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../components/ui/Button'

const Home = () => {
    return (
        <div className="container py-3">
            <div className="card border-0 shadow">
                <div className="card-header">
                    <h4 className="text-center">Welcome to NOTESHUB {":)"}</h4>
                </div>
                <div className="card-body">
                    <p>Let's create your notes instead of memorize everything. ":)"</p>
                    <p>Remember your notes by creating, editing and viewing.</p>
                    <p>Mark your notes completed/Incompleted and also you have filter option to filterize your notes.</p>

                    <p>To use the services, Create Your Account just clicking on the SignUp button.</p>
                    <Link to="/register">
                        <CustomButton className="btn btn-primary" label="SignUp"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
