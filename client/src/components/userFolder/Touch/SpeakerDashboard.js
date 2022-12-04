import React from "react";
import AddBattery from "./AddSpeaker";
import AllBattery from "./AllSpeaker";

const BetteryDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m table_m_dis">
          <div className="table_side">
            <AllBattery />
          </div>
          <div className="create_side">
            <AddBattery />
          </div>
        </div>
      </div>
    </>
  );
};

export default BetteryDashboard;
