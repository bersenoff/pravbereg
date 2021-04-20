import React from "react";

interface IProps {
  title: string;
  iconComponent: React.ReactNode;
}

const Component: React.FC<IProps> = ({ title, iconComponent, children }) => {
  return (
    <div className="section">
      <div className="section-content">
        <div style={{ textAlign: "center" }}>
          <div className="title-block">{ iconComponent } &nbsp; { title }</div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Component;