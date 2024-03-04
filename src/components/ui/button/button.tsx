import React from "react";
import { CircularLoader } from "../loaders/circularLoader";

export interface FlatButtonProps {
    title: string;
    icon?: any;
    onClick?: any;
    color?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    loading?: boolean;
  }

export default function FlatButton({
  title,
  icon,
  onClick,
  loading,
  color,
  type = "button",
}: FlatButtonProps) {
  if (loading === true) {
    return <CircularLoader />;
  }
  return (
    <button
      onClick={onClick ? () => onClick() : () => {}}
      type={type}
      className={`rounded-sm cursor-pointer hover:scale-105 transition-all ${
        color ?? "bg-primary-button text-black border-0"
      } px-4 py-2 flex gap-4 items-center`}
    >
      {icon && <span>{icon}</span>}
      <span className="text-[16px]"> {title}</span>
    </button>
  );
}