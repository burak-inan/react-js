import React from "react";
import "./unauthorized-page.scss"

const UnauthorizedPage = () => {
  return (
    <div className="unauthorized-page-container">
      <div class="lock"></div>
      <div class="message">
        <h1>Access to this page is restricted</h1>
        <p>
          Please check with the site admin if you believe this is a mistake.
        </p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
