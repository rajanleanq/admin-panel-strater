import React from "react";
import { Drawer } from "antd";

export interface CusDrawerProps {
  open: boolean;
  handleDrawerToogle: any;
  children: React.ReactNode;
  width?: number;
  title?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function CusDrawer({
  open,
  handleDrawerToogle,
  children,
  footer,
  title,
  width,
}: CusDrawerProps) {
  return (
    <Drawer
      footer={footer ?? <></>}
      className="bg-white"
      title={title ?? <div></div>}
      width={width ?? 900}
      closable={false}
      onClose={handleDrawerToogle}
      open={open}
    >
      {children}
    </Drawer>
  );
}