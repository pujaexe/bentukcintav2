// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 62fk78rY9xoShC3bnaKgA9
// Component: -w4zVRfnGC

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_bentuk_cintav_2.module.css"; // plasmic-import: 62fk78rY9xoShC3bnaKgA9/projectcss
import sty from "./PlasmicWhatsappButton.module.css"; // plasmic-import: -w4zVRfnGC/css

import WhatsappSvgrepoComsvgIcon from "./icons/PlasmicIcon__WhatsappSvgrepoComsvg"; // plasmic-import: 8wYuQ9ltP1/icon

export type PlasmicWhatsappButton__VariantMembers = {};
export type PlasmicWhatsappButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicWhatsappButton__VariantsArgs;
export const PlasmicWhatsappButton__VariantProps = new Array<VariantPropType>();

export type PlasmicWhatsappButton__ArgsType = {
  whatsapp2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicWhatsappButton__ArgsType;
export const PlasmicWhatsappButton__ArgProps = new Array<ArgPropType>(
  "whatsapp2"
);

export type PlasmicWhatsappButton__OverridesType = {
  whatsapp?: p.Flex<"div">;
};

export interface DefaultWhatsappButtonProps {
  whatsapp2?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicWhatsappButton__RenderFunc(props: {
  variants: PlasmicWhatsappButton__VariantsArgs;
  args: PlasmicWhatsappButton__ArgsType;
  overrides: PlasmicWhatsappButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"whatsapp"}
      data-plasmic-override={overrides.whatsapp}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.whatsapp
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__k89Ds
            )}
            component={Link}
            platform={"nextjs"}
          >
            <WhatsappSvgrepoComsvgIcon
              className={classNames(projectcss.all, sty.svg__jLqHh)}
              role={"img"}
            />
          </p.PlasmicLink>
        ),
        value: args.whatsapp2
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  whatsapp: ["whatsapp"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  whatsapp: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWhatsappButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWhatsappButton__VariantsArgs;
    args?: PlasmicWhatsappButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWhatsappButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWhatsappButton__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicWhatsappButton__ArgProps,
          internalVariantPropNames: PlasmicWhatsappButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWhatsappButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "whatsapp") {
    func.displayName = "PlasmicWhatsappButton";
  } else {
    func.displayName = `PlasmicWhatsappButton.${nodeName}`;
  }
  return func;
}

export const PlasmicWhatsappButton = Object.assign(
  // Top-level PlasmicWhatsappButton renders the root element
  makeNodeComponent("whatsapp"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicWhatsappButton
    internalVariantProps: PlasmicWhatsappButton__VariantProps,
    internalArgProps: PlasmicWhatsappButton__ArgProps
  }
);

export default PlasmicWhatsappButton;
/* prettier-ignore-end */
