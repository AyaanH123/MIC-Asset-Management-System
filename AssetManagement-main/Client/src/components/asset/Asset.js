import { React, useState, useEffect } from 'react'
import { Dropdown, FormGroup, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import AssetService from '../../services/asset.service';
import MasterDataService from '../../services/master-data.service';
import AuthService from '../../services/auth.service';



const Asset = (props) => {
    const [masterData, setMasterData] = useState({ assetCategory: [], assetStatus: [], location: [] });
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("info");
    const [errors, setErrors] = useState({});
    const [invalidState, setInvalidState] = useState(false)
    const [mode, setMode] = useState(props.mode);
    const [id, setId] = useState(props.id);

    //Asset specific data
    const [assetId, setAssetId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [assetTag, setAssetTag] = useState("");
    const [model, setModel] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [acquiredDate, setAcquiredDate] = useState("");
    const [retiredDate, setRetiredDate] = useState("");

    useEffect(() => {

        console.log("Using the mode " + props.mode);
        console.log("Using the id " + props.id);

        //Id must be present in edit mode.
        if (!id && mode === 'edit') {
            setMessageType("error");
            setMessage("Invalid Request. Asset information missing.");
            setInvalidState(true);
            return;
        }

        if (mode !== 'add' || mode !== 'edit') {
            if (!id && mode === 'edit') {
                setMessageType("error");
                setMessage("Invalid Request.");
                setInvalidState(true);
                return;
            }
        }

        MasterDataService.getMasterData()
            .then((response) => {

                setMasterData({
                    ...masterData,
                    assetCategory: response.data.assetCategory,
                    assetStatus: response.data.assetStatus,
                    location: response.data.location
                });
                console.log(masterData.assetCategory)
                console.log(response)
            });

        if (mode === 'edit') {
            //For edit pull the information.
            AssetService.getAssetById(id)
                .then((response) => {
                    if (response.data && response.data.data) {
                        var assetData = response.data.data;
                        setAssetId(assetData.asset_id);
                        setName(assetData.name);
                        setAssetTag(assetData.asset_tag);
                        setCategory(assetData.category);
                        setDescription(assetData.description);
                        setSerialNumber(assetData.serial_number);
                        setModel(assetData.model);
                        setManufacturer(assetData.manufacturer);
                        setStatus(assetData.status_code);
                        setLocation(assetData.location_id);
                        setPurchasePrice(assetData.purchase_price);
                        setAcquiredDate(assetData.acquired_date);
                        setRetiredDate(assetData.retired_date);
                        console.log(response)
                    }
                })
                .catch(err => {
                    console.log("Error while pulling data for edit." + err);
                    setMessageType("error");
                    setMessage("Invalid Request. Asset information missing.");
                    setInvalidState(true);
                })
            return;
        }

        if (mode === 'add') {
            //Add code to insert data.
        }

    }, []);

    const validateForm = () => {
        const formErrors = {};

        if (!name || name.trim() === '') formErrors.name = "Asset Name can't be blank";
        else if (name.length > 50) formErrors.name = "Asset name can't be more than 50 character";

        if (!category || category === '') formErrors.category = "Category can't be blank";

        if (!status || status === '') formErrors.status = "Status can't be blank";

        if (!serialNumber || serialNumber === '') formErrors.serialNumber = "Serial Number can't be blank";

        return formErrors;
    }

    const clearError = (field) => {
        if (!!errors[field]) {
            setErrors({ ...errors, [field]: null });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage('');
        //setLoading(true);

        //get current logged in user
        var user = AuthService.getCurrentUser();
        console.log("USER details : " + JSON.stringify(user));

        //Validate form
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            //We have error
            setErrors(formErrors);
            setMessageType("error");
            setMessage("Please correct the error and submit.");
            return;
        }
        else {
            setErrors({});
            console.log("We do not have error.");
        }

        if (mode === 'edit') {
            //build the object to update
            var assetToUpdate = {
                asset_id: assetId,
                name: name,
                description: description,
                category: category,
                status_code: status,
                serial_number: serialNumber,
                asset_tag: assetTag,
                location_id: location,
                model: model,
                manufacturer: manufacturer,
                acquired_date: acquiredDate,
                retired_date: retiredDate,
                purchase_price: purchasePrice,
                last_mod_by: user.username
            }

            console.log("Asset to update " + JSON.stringify(assetToUpdate));

            AssetService.updateAsset(assetToUpdate)
                .then(response => {
                    setMessageType("info");
                    setMessage("Asset data successfully updated.");
                    console.log(response);
                })
                .catch(err => {
                    setMessageType("error");
                    setMessage("Error occured while updating asset record.");
                    console.log(err);
                })

        } else if (mode === 'add') {
            //build the object to update
            var assetToCreate = {
                name: name,
                description: description,
                category: category,
                status_code: status,
                serial_number: serialNumber,
                asset_tag: assetTag,
                location_id: location,
                model: model,
                manufacturer: manufacturer,
                acquired_date: acquiredDate,
                retired_date: retiredDate,
                purchase_price: purchasePrice,
                last_mod_by: user.username
            }

            console.log("Asset to create " + JSON.stringify(assetToCreate));

            AssetService.createAsset(assetToCreate)
                .then(response => {
                    setMessageType("info");
                    setMessage("Asset data successfully created.");
                    console.log(response);
                    //Set the asset_id value and change the mode now to edit
                    setAssetId(response.data.record.asset_id);
                    setMode('edit');
                    
                })
                .catch(err => {
                    setMessageType("error");
                    setMessage("Error occured while creating asset record.");
                    console.log(err);
                })            
        }

    };


    return (
        < div >
            <div className="card">
                <h3 className="card-header text-primary border-primary">{mode === 'edit' ? 'Edit Asset: ' + name : 'Add Asset'}</h3>
                <div className="card-body">
                    <div>
                        {message && (
                            <div className="form-group">
                                <div className={messageType === "error" ? "alert alert-danger" : "alert alert-success"} role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </div>

                    {(invalidState === false) &&
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} className="col-sm-4 mb-3">
                                        <Form.Label>Asset Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name='name'
                                            value={name}
                                            autoComplete="off"
                                            onChange={(e) => { setName(e.target.value); clearError("name"); }}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} className="col-sm-8 mb-3">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="description"
                                            autoComplete="off"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <FormGroup as={Col} className="col-sm-3 mb-3">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control as="select"
                                            onChange={(e) => { setStatus(e.target.value); clearError('status') }}
                                            isInvalid={!!errors.status}
                                            value={status}
                                        >
                                            <option value=''>Choose Status:</option>
                                            {
                                                masterData.assetStatus.map((status, index) => {
                                                    return (
                                                        <>
                                                            <option key={status.code} value={status.code}>{status.description}</option>
                                                        </>
                                                    );
                                                })
                                            }
                                        </Form.Control>
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.status}
                                        </Form.Control.Feedback>
                                    </FormGroup>
                                    <FormGroup as={Col} className="col-sm-3 mb-3">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control as="select"
                                            onChange={(e) => { setCategory(e.target.value); clearError('category') }}
                                            isInvalid={!!errors.category}
                                            value={category}
                                        >
                                            <option value=''>Choose Category:</option>
                                            {
                                                masterData.assetCategory.map((category, index) => {
                                                    return (
                                                        <>
                                                            <option key={category.code} value={category.code}>{category.description}</option>
                                                        </>
                                                    );
                                                })
                                            }
                                        </Form.Control>
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.category}
                                        </Form.Control.Feedback>
                                    </FormGroup>
                                    <FormGroup as={Col} className="col-sm-6 mb-3">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control as="select"
                                            onChange={(e) => setLocation(e.target.value)}
                                            value={location}
                                        >
                                            <option value=''>Choose Location:</option>
                                            {
                                                masterData.location.map((location, index) => {
                                                    return (
                                                        <>
                                                            <option key={location.location_id} value={location.location_id}>{location.name}</option>
                                                        </>
                                                    );
                                                })
                                            }
                                        </Form.Control>
                                    </FormGroup>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} className="col-sm-6 mb-3">
                                        <Form.Label>Serial #</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="serial_number"
                                            autoComplete="off"
                                            value={serialNumber}
                                            isInvalid={!!errors.serialNumber}
                                            onChange={(e) => { setSerialNumber(e.target.value); clearError('serialNumber') }}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.serialNumber}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} className="col-sm-6 mb-3">
                                        <Form.Label>Asset Tag</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="assetTag"
                                            autoComplete="off"
                                            value={assetTag}
                                            onChange={(e) => setAssetTag(e.target.value)}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} className="col-sm-6 mb-3">
                                        <Form.Label>Model</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="model"
                                            autoComplete="off"
                                            value={model}
                                            onChange={(e) => setModel(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} className="col-sm-6 mb-3">
                                        <Form.Label>Manufacturer</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="manufacturer"
                                            autoComplete="off"
                                            value={manufacturer}
                                            onChange={(e) => setManufacturer(e.target.value)}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <FormGroup as={Col} className="col-sm-4 mb-3">
                                        <Form.Label>Purchase Price</Form.Label>
                                        <Form.Control type="number"
                                            onChange={(e) => setPurchasePrice(e.target.value)}
                                            value={purchasePrice}
                                        >
                                        </Form.Control>
                                    </FormGroup>
                                    <FormGroup as={Col} className="col-sm-4 mb-3">
                                        <Form.Label>Acquired Date</Form.Label>
                                        <Form.Control type="date"
                                            onChange={(e) => setAcquiredDate(e.target.value)}
                                            value={acquiredDate}
                                        >
                                        </Form.Control>
                                    </FormGroup>
                                    <FormGroup as={Col} className="col-sm-4 mb-3">
                                        <Form.Label>Retired Date</Form.Label>
                                        <Form.Control type="date"
                                            onChange={(e) => setRetiredDate(e.target.value)}
                                            value={retiredDate}
                                        >
                                        </Form.Control>
                                    </FormGroup>
                                </Form.Row>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default Asset