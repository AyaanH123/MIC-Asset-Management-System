import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Asset from './Asset';
// import { Dropdown, FormGroup, Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Form';
// import AssetService from '../../services/asset.service';
// import MasterDataService from '../../services/master-data.service';


const EditAsset = (props) => {
    //Pull the id information from url
    let {id} = useParams();
    return (
        <Asset mode='edit' id={id} />
    )
}

export default EditAsset