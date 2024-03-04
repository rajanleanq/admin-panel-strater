import React from "react";
import Checkbox from "antd/es/checkbox/Checkbox";
import { CusCheckBoxProps } from "./interface";

export default function CusCheckbox(checkBoxProps: CusCheckBoxProps) {
  const {
    onChange,
    name,
    title,
    disabled,
    value,
    required,
    label,
  }: CusCheckBoxProps = checkBoxProps;
  return (
    <div className="flex flex-col gap-3 text-sm">
      {label && (
        <div className="flex items-center gap-2">
          {required && (
            <span className="text-sm text-primary-danger">*</span>
          )}
          <span>{label}</span>
        </div>
      )}
      <Checkbox
        checked={value}
        disabled={disabled}
        name={name}
        onChange={onChange}
      >
        {title}
      </Checkbox>
    </div>
  );
}

export const MultipleCheckBox = () => { };