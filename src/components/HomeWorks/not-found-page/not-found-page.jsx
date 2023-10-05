import React from "react";
import "./not-found-page.scss"

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404 Error Page #2</h1>
      <p class="zoom-area">
        <b>CSS</b> animations to make a cool 404 page.{" "}
      </p>
      <section className="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <a
          target="_blank"
          href="#"
          class="more-link"
        >
          Visit the original article
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
