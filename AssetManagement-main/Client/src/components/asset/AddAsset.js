import {React, useState} from 'react';
import Asset from './Asset';

const AddAsset = props => {
    const [message, setMessage] = useState("");

    return (
        <Asset mode='add' />
        // <div>
        //     <div className="card">
        //         <h3 className="card-header text-primary border-primary">Add Asset</h3>
        //         <div className="card-body">
        //             {message && (
        //                 <div className="form-group">
        //                     <div className="alert alert-danger" role="alert">
        //                         {message}
        //                     </div>
        //                 </div>
        //             )}
                    
        //         </div>
        //     </div>
        // </div>
    )
}

export default AddAsset
