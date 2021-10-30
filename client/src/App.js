import './App.css'
import {BrowserRouter as Router,
        Switch, Route , Link} from 'react-router-dom'
import Navigation from './Component/Nav/Navigation'
import TopBar from './Component/Nav/TopBar'
import Home from './Component/Pages/Home'
import Covid from './Component/Pages/Covid'
import Inbox from './Component/Pages/Inbox'
import OwnerHome from './Component/Pages/SubPages/OwnerHome';
import Records from './Component/Pages/SubPages/Record';
import IndividualRecord from './Component/Pages/SubPages/IndividualRecord';
import { useEffect, useState } from 'react';
import HomeAdmin from './Component/Pages/HomeAdmin';
import Log from './Component/Pages/Log';
import NewRecord from './Component/Pages/SubPages/NewRecord';
import Chat from './Component/Pages/SubPages/Chat';


function App() {
  const [admin,setAdmin] = useState(false)
  return (
    <Router>
      <TopBar admin={admin} />
    <div className="App">
      <div className="fragment mt-16 mx-4 mb-20">
        <Switch>
          <Route exact path="/">
              <Home />            
          </Route>
          <Route exact path="/covid">
              <Covid/>            
          </Route>
          <Route exact path="/inbox">
              <Inbox />            
          </Route>
          <Route exact path="/inbox/chat">
              <Chat/>
          </Route>
          <Route exact path="/myhome">
              <OwnerHome/>
          </Route>
          <Route  exact path="/record">
              <Records/>
          </Route>
          <Route exact path="/record/:id" >
              <IndividualRecord admin={admin}/>
          </Route>

          <Route exact path="/admin/home" onEnter={()=>setAdmin(true)}>
              <HomeAdmin setAdmin={setAdmin}/>
            </Route>

          <Route exact path="/admin/record" onEnter={()=>setAdmin(true)}>
              <Records admin={true}/>
            </Route>

          <Route exact path="/admin/log" onEnter={()=>setAdmin(true)}>
              <Log/>
            </Route>
          
          <Route exact path="/admin/create/record" onEnter={()=>setAdmin(true)}>
              <NewRecord/>
            </Route>


          <Route>
            404 not found
          </Route>
        </Switch>
      </div>

    {!admin && <Navigation/>}
    </div>
    </Router>
  );
}

export default App;
