import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./navbar/Header";
// import Signup from "./signinFolder/Signup";
import Signin from "./signinFolder/Signin";

import LogicDashboard from "./userFolder/Display/LogicDashboard";
import EditLogic from "./userFolder/Display/EditDisplay";

import RibonDashboard from "./userFolder/Battery/RibonDashboard";
import EditRibon from "./userFolder/Battery/EditRibon";

import SpeakerDashboard from "./userFolder/Touch/SpeakerDashboard";
import EditSpeaker from "./userFolder/Touch/EditSpeaker";

import RibonSwitch from "./userFolder/Lcd/RibonSwitchDashboard";
import EditSwitch from "./userFolder/Lcd/EditRibonSwitch";


import NotFound from "./NotFound";
import UserRoute from "./userFolder/UserRoute";

// import AdminRoute from "./AdminRoute";
//import AdminDashboard from "./AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="full_display">
        <Switch>
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/" component={Signin} />

          <UserRoute
            exact
            path="/user/dashboard/display"
            component={LogicDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/display/edit/:id"
            component={EditLogic}
          />
          <UserRoute
            exact
            path="/user/dashboard/battery"
            component={RibonDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/battery/edit/:id"
            component={EditRibon}
          />

          <UserRoute
            exact
            path="/user/dashboard/touch"
            component={SpeakerDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/touch/edit/:id"
            component={EditSpeaker}
          />
          <UserRoute
            exact
            path="/user/dashboard/lcd"
            component={RibonSwitch}
          />
          <UserRoute
            exact
            path="/user/dashboard/lcd/edit/:id"
            component={EditSwitch}
          />




        
          {/* <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          /> */}

          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
