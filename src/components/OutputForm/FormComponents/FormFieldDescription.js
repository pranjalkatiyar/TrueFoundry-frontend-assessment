import React from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import styled from "@emotion/styled";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="right" />
))(({}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
  },
}));

const FormFieldDescription = ({ description, lable }) => {
  return (
    <HtmlTooltip
      title={
          <div className="font-bold text-base py-1 px-3 shadow-2xl border rounded border-gray-200">
            <div className="border-b border-gray-200">{lable}</div>
            <div className="text-gray-500">{description}</div>
        </div>
      }
    >
      <FontAwesomeIcon
        icon={faInfoCircle}
        className="cursor-pointer text-blue-900"
      />
    </HtmlTooltip>
  );
};

export default FormFieldDescription;
