/**
 * Страница с фоном
 */

import React from "react";
import "./index.css";

interface IProps {
  children: any;
}

const Component: React.FunctionComponent<IProps> = ({ children }) => {
  return (
  <div className="page">
    <div className="section">
      <div className="section-content">
        <div className="page-content">{ children }</div>
      </div>
    </div>
  </div>
  );
}

export default Component;