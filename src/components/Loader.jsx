import React from "react";

const Loader = () => {
  return (
    <div className="loader_container">
      <div className="loader_parent">
        <img loading="lazy" src="/logo.png" alt="loader" />
      </div>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
