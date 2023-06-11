// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 62fk78rY9xoShC3bnaKgA9
// Component: pbUMAB_a20

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
import Template1 from "../../Template1"; // plasmic-import: tCLmdV1-a5/component
import Template2 from "../../Template2"; // plasmic-import: Xfvd6ITT7P8/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_bentuk_cintav_2.module.css"; // plasmic-import: 62fk78rY9xoShC3bnaKgA9/projectcss
import sty from "./PlasmicTemplateSelector.module.css"; // plasmic-import: pbUMAB_a20/css

export type PlasmicTemplateSelector__VariantMembers = {
  template: "template1" | "template2";
};
export type PlasmicTemplateSelector__VariantsArgs = {
  template?: SingleChoiceArg<"template1" | "template2">;
};
type VariantPropType = keyof PlasmicTemplateSelector__VariantsArgs;
export const PlasmicTemplateSelector__VariantProps = new Array<VariantPropType>(
  "template"
);

export type PlasmicTemplateSelector__ArgsType = {};
type ArgPropType = keyof PlasmicTemplateSelector__ArgsType;
export const PlasmicTemplateSelector__ArgProps = new Array<ArgPropType>();

export type PlasmicTemplateSelector__OverridesType = {
  root?: p.Flex<"div">;
  template1?: p.Flex<typeof Template1>;
  template2?: p.Flex<typeof Template2>;
};

export interface DefaultTemplateSelectorProps {
  template?: SingleChoiceArg<"template1" | "template2">;
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

function PlasmicTemplateSelector__RenderFunc(props: {
  variants: PlasmicTemplateSelector__VariantsArgs;
  args: PlasmicTemplateSelector__ArgsType;
  overrides: PlasmicTemplateSelector__OverridesType;
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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "template1.previewPopup",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "template1.clickedImgUrl",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "template2.previewPopup",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "template2.clickedImgUrl",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "template",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.template
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.roottemplate_template1]: hasVariant(
            $state,
            "template",
            "template1"
          ),
          [sty.roottemplate_template2]: hasVariant(
            $state,
            "template",
            "template2"
          )
        }
      )}
    >
      {(hasVariant($state, "template", "template2") ? false : true) ? (
        <Template1
          data-plasmic-name={"template1"}
          data-plasmic-override={overrides.template1}
          className={classNames("__wab_instance", sty.template1, {
            [sty.template1template_template1]: hasVariant(
              $state,
              "template",
              "template1"
            ),
            [sty.template1template_template2]: hasVariant(
              $state,
              "template",
              "template2"
            )
          })}
          clickedImgUrl={p.generateStateValueProp($state, [
            "template1",
            "clickedImgUrl"
          ])}
          onClickedImgUrlChange={p.generateStateOnChangeProp($state, [
            "template1",
            "clickedImgUrl"
          ])}
          onPreviewPopupChange={p.generateStateOnChangeProp($state, [
            "template1",
            "previewPopup"
          ])}
          previewPopup={p.generateStateValueProp($state, [
            "template1",
            "previewPopup"
          ])}
        />
      ) : null}
      {(hasVariant($state, "template", "template1") ? false : true) ? (
        <Template2
          data-plasmic-name={"template2"}
          data-plasmic-override={overrides.template2}
          className={classNames("__wab_instance", sty.template2, {
            [sty.template2template_template1]: hasVariant(
              $state,
              "template",
              "template1"
            )
          })}
          clickedImgUrl={p.generateStateValueProp($state, [
            "template2",
            "clickedImgUrl"
          ])}
          onClickedImgUrlChange={p.generateStateOnChangeProp($state, [
            "template2",
            "clickedImgUrl"
          ])}
          onPreviewPopupChange={p.generateStateOnChangeProp($state, [
            "template2",
            "previewPopup"
          ])}
          previewPopup={p.generateStateValueProp($state, [
            "template2",
            "previewPopup"
          ])}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "template1", "template2"],
  template1: ["template1"],
  template2: ["template2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  template1: typeof Template1;
  template2: typeof Template2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTemplateSelector__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTemplateSelector__VariantsArgs;
    args?: PlasmicTemplateSelector__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTemplateSelector__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTemplateSelector__ArgsType,
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
          internalArgPropNames: PlasmicTemplateSelector__ArgProps,
          internalVariantPropNames: PlasmicTemplateSelector__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTemplateSelector__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTemplateSelector";
  } else {
    func.displayName = `PlasmicTemplateSelector.${nodeName}`;
  }
  return func;
}

export const PlasmicTemplateSelector = Object.assign(
  // Top-level PlasmicTemplateSelector renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    template1: makeNodeComponent("template1"),
    template2: makeNodeComponent("template2"),

    // Metadata about props expected for PlasmicTemplateSelector
    internalVariantProps: PlasmicTemplateSelector__VariantProps,
    internalArgProps: PlasmicTemplateSelector__ArgProps
  }
);

export default PlasmicTemplateSelector;
/* prettier-ignore-end */