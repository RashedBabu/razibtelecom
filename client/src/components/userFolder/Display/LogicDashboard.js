import React from "react";
import AddDisplay from "./addLogic";
import AllDisplay from "./allLogic";

const LogicDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m_dis">
          <div className="table_side">
            <AllDisplay />
          </div>
          <div className="create_side">
            <AddDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogicDashboard;
