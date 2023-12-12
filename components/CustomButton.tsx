"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";
import { PiArrowCircleRightDuotone } from "react-icons/pi";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`relative custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && rightIcon === "rightArrow" && (
        <PiArrowCircleRightDuotone
          className="text-xl text-white absolute right-0 mr-6"
          alt="right icon"
        />
      )}
    </button>
  );
};

export default CustomButton;
