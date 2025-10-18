import React from "react";
import classNames from "classnames";
import { formCardContainer } from "./style";

interface FormCardProps {
  children: React.ReactNode;
  className?: string;
}

const FormCard: React.FC<FormCardProps> = ({ children, className }) => {
  return (
    <div className={classNames(formCardContainer, className)}>{children}</div>
  );
};

export default FormCard;
