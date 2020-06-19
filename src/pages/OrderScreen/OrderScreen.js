import React from "react";
import { AppBar, Toolbar, Grid, Paper, Button } from "@material-ui/core";
import SideLinks from "../../components/SideLinks/SideLinks";
import Table from "../../components/Table/Table";
import {
  orders_data,
  nav_links,
  needs_data,
  follow_data,
} from "../../config/dummyData";
import { withRouter } from "react-router-dom";

import RecentPages from "../../components/RecentPages/RecentPages";
import DashboardWidget from "../../components/DashboardWidget/DashboardWidget";
import Phase from "../../components/Phase/Phase";
import "./OrderScreen.css";

const OrderScreen = (props) => {
  return (
    <div className="OrderScreen">
      <AppBar position="static">
        <Toolbar>
          <Button
            className="login_btn"
            variant="contained"
            disabled={false}
            // disabled={validated}
            onClick={() => props.history.push("/")}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className="nav_links">
            <SideLinks links={nav_links} />
            <RecentPages />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <div className="orders_table">
            <p className="table_title">Orders</p>
            <Paper>
              <Table data={orders_data} />
            </Paper>
          </div>
          <div className="table2">
            <p className="table_title">Needs</p>
            <Paper>
              <Table data={needs_data} />
            </Paper>
          </div>
          <div className="table2">
            <p className="table_title">Follow-ups</p>
            <Paper>
              <Table data={follow_data} />
            </Paper>
          </div>
        </Grid>
        <Grid item xs>
          <Paper className="nav_links">
            <DashboardWidget />
            <Phase />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(OrderScreen);
