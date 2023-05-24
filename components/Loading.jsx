import React from "react";

const Loading = () => {
  return (
    <div className="friends-tile">
      <div className="loaders">
        <div className="loaders-group">
          <div className="top-left-loader"></div>
          <div className="top-right-loader"></div>
        </div>
        <div className="loaders-group">
          <div className="bottom-left-loader"></div>
          <div className="bottom-right-loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
