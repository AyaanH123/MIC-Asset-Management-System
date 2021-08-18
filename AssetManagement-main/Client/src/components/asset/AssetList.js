import { React, useState, useEffect } from 'react'
import AssetService from '../../services/asset.service';
import { Link } from 'react-router-dom'

const AssetList = props => {
    const [message, setMessage] = useState("");
    const [assets, setAssets] = useState(undefined);

    useEffect(() => {
        const assets = AssetService.getAssets()
            .then((response) => {
                setAssets(response.data.data);
            });

    }, []);


    return (
        <div>
            <div className="card">
                <h3 className="card-header text-primary border-primary">Asset List</h3>
                <div className="card-body">
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}

                    {(!assets || assets.length <= 0) && (
                        <div className="form-group">
                            <div className="alert alert-info" role="alert">
                                <p>No Asset Found</p>
                            </div>
                        </div>
                    )}

                    {(assets && assets.length > 0) && (
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-sm">
                                <thead>
                                    <tr className="table-success">
                                        <td>Name</td>
                                        <td>Description</td>
                                        <td>Category</td>
                                        <td>Status</td>
                                        <td>Serial #</td>
                                        <td>Asset Tag</td>
                                        <td>Location</td>
                                        <td>Edit</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assets.map((asset, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{asset.name}</td>
                                                <td>{asset.description}</td>
                                                <td>{asset.category}</td>
                                                <td>{asset.status_code}</td>
                                                <td>{asset.serial_number}</td>
                                                <td>{asset.asset_tag}</td>
                                                <td>{asset.location.location_name}</td>
                                                <td><Link className="btn btn-primary btn-sm" to={{pathname:'/editasset/' + asset.asset_id}}>Edit</Link></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default AssetList
