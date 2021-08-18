import React from 'react'
import { Jumbotron, Card } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <>
            <Jumbotron>
                <h1>Asset Management System</h1>
                <p>
                    This application provides the following features:
                </p>
                <ul>
                    <li>Asset Life Cycle Management</li>
                    <li>Asset Allocation</li>
                    <li>Reports</li>
                    <li>Master Data Management</li>
                </ul>
            </Jumbotron>
            <Card bg={'light'}>
                <Card.Header><b>System Messages</b></Card.Header>
                <Card.Body>
                    <Card.Text>No message found.</Card.Text>
                </Card.Body>
            </Card>
         </>
    );
}

export default Dashboard