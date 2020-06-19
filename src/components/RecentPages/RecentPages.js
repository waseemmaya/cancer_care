import React from "react";
import { AppBar, Toolbar, Grid, Paper } from "@material-ui/core";
import { recent_pages } from "../../config/dummyData";
import "./RecentPages.css";

const RecentPages = () => {
  return (
    <div className="RecentPages">
      <p>Recent pages</p>
      <div className="pages">
        {recent_pages.map((page) => (
          <p key={page}>
            <a href="#">{page}</a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default RecentPages;
