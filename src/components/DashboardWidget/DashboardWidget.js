import React from "react";
import { Divider, Checkbox } from "@material-ui/core";
import { dashboard_widgets } from "../../config/dummyData";
import "./DashboardWidget.css";

const DashboardWidget = () => {
  return (
    <div className="DashboardWidget">
      <p style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
        Dashboard Widgets
      </p>
      <Divider />
      {dashboard_widgets.map((widget, i) => (
        <>
          <p style={{ textAlign: "start" }} key={widget}>
            <Checkbox
              color="primary"
              // checked={false}
              // onChange={handleChange}
              // inputProps={{ "aria-label": "primary checkbox" }}
            />
            {widget}
          </p>
          {dashboard_widgets.length - 1 !== i && <Divider />}
        </>
      ))}
    </div>
  );
};

export default DashboardWidget;
