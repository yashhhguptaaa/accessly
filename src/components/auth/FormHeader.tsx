import React from "react";
import doorEnterImage from "/svg/door-enter.svg";
import {
  formHeaderContainer,
  formHeaderDescription,
  formHeaderIconContainer,
  formHeaderTitle,
  formHeaderTitleContainer,
} from "./style";

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader: React.FC<FormHeaderProps> = React.memo(
  ({ title, description }) => {
    return (
      <div className={formHeaderContainer}>
        <div className={formHeaderIconContainer}>
          <img src={doorEnterImage} alt="door enter" width={30} height={30} />
        </div>

        {/* Title */}
        <div className={formHeaderTitleContainer}>
          <h1 className={formHeaderTitle}>{title}</h1>

          {/* Description */}
          <p className={formHeaderDescription}>{description}</p>
        </div>
      </div>
    );
  }
);

FormHeader.displayName = "FormHeader";

export default FormHeader;
