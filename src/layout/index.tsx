import Sidebar from "components/Sidebar";
import React, { ReactNode } from "react";
interface AppLayoutProps {
  children: ReactNode;
}
const index = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="pl-8">{children}</div>
    </div>
  );
};

export default index;
