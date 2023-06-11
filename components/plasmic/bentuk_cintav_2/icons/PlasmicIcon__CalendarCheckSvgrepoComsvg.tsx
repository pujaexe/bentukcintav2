// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarCheckSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CalendarCheckSvgrepoComsvgIcon(
  props: CalendarCheckSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8 2a1 1 0 011 1h6a1 1 0 112 0 5 5 0 015 5v9a5 5 0 01-5 5H7a5 5 0 01-5-5V8a5 5 0 015-5 1 1 0 011-1zm7.73 9.684a1 1 0 10-1.46-1.368l-3.114 3.322-1.527-1.234A1 1 0 008.37 13.96l2.25 1.818a1 1 0 001.358-.094l3.75-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CalendarCheckSvgrepoComsvgIcon;
/* prettier-ignore-end */
