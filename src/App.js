import React from "react";
import MaintenanceRequests from "./components/MaintenanceRequests";
import LeaseManagement from "./components/LeaseManagement";
import ProfileSection from "./components/ProfileSection";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import Navbar from "./components/navbar";
import PropertyOwnerDashboard from "./components/PropertyOwnerDashboard";

const App = () => {
  return (
    <div>
      {/* <LeaseManagement/> */}
      {/* <MaintenanceRequests isOwner={true} /> */}
      {/* <ProfileSection/> */}
      {/* <LoginPage/> */}
      {/* <RegistrationPage/> */}
      <Navbar/>
      <PropertyOwnerDashboard/>
    </div>
  );
};

export default App;
