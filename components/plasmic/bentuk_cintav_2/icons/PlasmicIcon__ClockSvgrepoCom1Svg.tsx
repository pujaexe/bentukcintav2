// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockSvgrepoCom1SvgIcon(props: ClockSvgrepoCom1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 11h-5a1 1 0 01-1-1V6a1 1 0 012 0v5h4a1 1 0 010 2z"
        }
      ></path>
    </svg>
  );
}

export default ClockSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
