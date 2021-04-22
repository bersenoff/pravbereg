import React from "react";

interface IProps {
  title?: string;
  iconComponent?: React.ReactNode;
}

const Component: React.FC<IProps> = ({ title, iconComponent, children }) => {
  return (
    <div className="section">
      <div className="section-content">
        {title &&
          <div style={{ textAlign: "center" }}>
            <div className="title-block" style={{ marginTop: 0 }}>{ iconComponent } &nbsp; { title }</div>
          </div>
        }
        {children}
      </div>
    </div>
  );
}

export default Component;