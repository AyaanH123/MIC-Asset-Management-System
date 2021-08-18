import { React, useState, useEffect } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Stuff from './components/Stuff';
import AssetList from './components/asset/AssetList';
import AddAsset from './components/asset/AddAsset';
import EditAsset from './components/asset/EditAsset';
import EmployeeList from './components/employee/EmployeeList';
import AddEmployee from './components/employee/AddEmployee';
import Admin from './components/admin/Admin';
import Report from './components/reports/Report';
import AuthService from './services/auth.service';


const App = () => {

  const [currentUser, setCurrentUser] = useState(undefined);
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if(user) {
      setCurrentUser(user);
      setIsAdminUser(user.roles.includes("ROLE_ADMIN"));
    }

  }, []);
  
  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <HashRouter>
      <div>
        <Header />
        <Navigation user={currentUser} isAdmin={isAdminUser} logOut={logOut} />

        {/* Container for display */}
        <div className="content">
          <Container>
            <Route exact path={["/","/home"]} component={Dashboard} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/login" component={Login} />
            <Route path="/assetlist" component={AssetList} />
            <Route path="/addasset" component={AddAsset} />
            <Route path="/editasset/:id" component={EditAsset} />
            <Route path="/emplist" component={EmployeeList} />
            <Route path="/addemp" component={AddEmployee} />
            <Route path="/admin" component={Admin} />
            <Route path="/report" component={Report} />

            {/* <Route
              path='/dashboard'
              component={() => <Dashboard isAuthed={true} />}
            /> */}
          </Container>
        </div>
        <br/>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
