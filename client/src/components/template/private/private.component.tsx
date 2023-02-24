import React from "react";
import "./private.component.css";

type childProps = {
  children: React.ReactNode;
};

const PrivateTemplate: React.FC<childProps> = ({ children }) => {
  return <div className="privateContainer">{children}</div>;
};

export default PrivateTemplate;
