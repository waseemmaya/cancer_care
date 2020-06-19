import React from "react";
import { Divider } from "@material-ui/core";

const RenderLinks = ({ links }) => {
  return (
    <div className="link_section">
      {links.map((link) => {
        return (
          <>
            <a key={link} href="#" className="link">
              <p className="link_name">{link}</p>
              <Divider variant="middle" />
            </a>
          </>
        );
      })}
    </div>
  );
};

export default RenderLinks;
