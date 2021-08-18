import {React, useState} from 'react'

const EmployeeList = props => {
    const [message, setMessage] = useState("");

    return (
        <div>
            <div className="card">
                <h3 className="card-header text-primary border-primary">Employee List</h3>
                <div className="card-body">
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <h3>Coming Soon</h3>
                </div>
            </div>
        </div>
    )
}


export default EmployeeList
