import react, { useState } from "react";
import "./header.scss";
import Logo from "./logo";
import Title from "./title";
import Navigation from "./navigation";
import Print_Download from "./print-download";
import { InfoCircleOutlined, MailOutlined } from "@ant-design/icons";

const AppHeader = () => {
  const navigationOptions = [
    { name: "About", isActive: true, component: InfoCircleOutlined },
    { name: "Contact", isActive: false, component: MailOutlined },
  ];
  const [navigations] = useState(navigationOptions);
  return (
    <div className="app-header">
      <div className="logo-title">
        <Logo />
        <Title />
      </div>
      <div className="navigation">
        <Navigation items={navigations}></Navigation>
      </div>
      <div className="print-download">
        <Print_Download />
      </div>
    </div>
  );
};

export default AppHeader;
