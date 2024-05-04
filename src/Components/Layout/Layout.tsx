import React from "react";

export interface Prop {
  children: React.ReactNode;
}

export const Layout = ({ children }: Prop) => {
  return <div className="m-0 p-0 box-border">{children}</div>;
};
