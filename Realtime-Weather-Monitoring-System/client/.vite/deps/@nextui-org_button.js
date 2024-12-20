"use client";
import {
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $6179b936705e76d3$export$ae780daf29e6d456,
  $65484d02dcb7eb3e$export$457c3d6518dd4c6f,
  $e6afbd83fe6ebbd2$export$4c014de7c8940b4c,
  $f6c31cce2adf654f$export$45712eceda6fad21,
  $f7dceffc5ad7768b$export$4e328f61c538687f,
  $ff5963eb1fccf552$export$e08e3b67e392101e,
  AnimatePresence,
  LazyMotion,
  button,
  buttonGroup,
  clamp,
  clsx,
  createContext2,
  dataAttr,
  domAnimation,
  filterDOMProps,
  forwardRef,
  getUniqueID,
  m,
  mapPropsVariants,
  objectToDeps,
  spinner,
  useDOMRef,
  useProviderContext
} from "./chunk-N7R2X2Z4.js";
import {
  require_jsx_runtime
} from "./chunk-J3GJSMK3.js";
import "./chunk-TNTPHDQH.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@nextui-org/button/dist/chunk-O2AYGUH3.mjs
var import_react = __toESM(require_react(), 1);
function useButtonGroup(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, buttonGroup.variantKeys);
  const {
    ref,
    as,
    children,
    color = "default",
    size = "md",
    variant = "solid",
    radius,
    isDisabled = false,
    isIconOnly = false,
    disableRipple = (_a = globalContext == null ? void 0 : globalContext.disableRipple) != null ? _a : false,
    disableAnimation = (_b = globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false,
    className,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const classNames = (0, import_react.useMemo)(
    () => buttonGroup({
      ...variantProps,
      className
    }),
    [objectToDeps(variantProps), className]
  );
  const context = (0, import_react.useMemo)(
    () => ({
      size,
      color,
      variant,
      radius,
      isIconOnly,
      isDisabled,
      disableAnimation,
      disableRipple,
      fullWidth: !!(originalProps == null ? void 0 : originalProps.fullWidth)
    }),
    [
      size,
      color,
      variant,
      radius,
      isDisabled,
      isIconOnly,
      disableAnimation,
      disableRipple,
      originalProps == null ? void 0 : originalProps.fullWidth
    ]
  );
  const getButtonGroupProps = (0, import_react.useCallback)(
    () => ({
      role: "group",
      ...otherProps
    }),
    [otherProps]
  );
  return {
    Component,
    children,
    domRef,
    context,
    classNames,
    getButtonGroupProps
  };
}

// node_modules/@nextui-org/button/dist/chunk-BOMWXXSL.mjs
var [ButtonGroupProvider, useButtonGroupContext] = createContext2({
  name: "ButtonGroupContext",
  strict: false
});

// node_modules/@nextui-org/button/dist/chunk-34VS2GW4.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var ButtonGroup = forwardRef((props, ref) => {
  const { Component, domRef, context, children, classNames, getButtonGroupProps } = useButtonGroup({
    ...props,
    ref
  });
  return (0, import_jsx_runtime.jsx)(ButtonGroupProvider, { value: context, children: (0, import_jsx_runtime.jsx)(Component, { ref: domRef, className: classNames, ...getButtonGroupProps(), children }) });
});
ButtonGroup.displayName = "NextUI.ButtonGroup";
var button_group_default = ButtonGroup;

// node_modules/@nextui-org/button/dist/chunk-P5GIOWF5.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);

// node_modules/@nextui-org/use-aria-button/dist/index.mjs
function useAriaButton(props, ref) {
  let {
    elementType = "button",
    isDisabled,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    preventFocusOnPress,
    allowFocusWhenDisabled,
    onClick: deprecatedOnClick,
    href,
    target,
    rel,
    type = "button",
    allowTextSelectionOnPress
  } = props;
  let additionalProps;
  if (elementType === "button") {
    additionalProps = {
      type,
      disabled: isDisabled
    };
  } else {
    additionalProps = {
      role: "button",
      tabIndex: isDisabled ? void 0 : 0,
      href: elementType === "a" && isDisabled ? void 0 : href,
      target: elementType === "a" ? target : void 0,
      type: elementType === "input" ? type : void 0,
      disabled: elementType === "input" ? isDisabled : void 0,
      "aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
      rel: elementType === "a" ? rel : void 0
    };
  }
  let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    isDisabled,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    ref
  });
  let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
  if (allowFocusWhenDisabled) {
    focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
  }
  let buttonProps = $3ef42575df84b30b$export$9d1611c77c2fe928(
    focusableProps,
    pressProps,
    $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { labelable: true })
  );
  return {
    isPressed,
    buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(additionalProps, buttonProps, {
      "aria-haspopup": props["aria-haspopup"],
      "aria-expanded": props["aria-expanded"],
      "aria-controls": props["aria-controls"],
      "aria-pressed": props["aria-pressed"],
      onClick: (e) => {
        deprecatedOnClick == null ? void 0 : deprecatedOnClick(e);
      }
    })
  };
}

// node_modules/@nextui-org/ripple/dist/chunk-SC6YC33A.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var Ripple = (props) => {
  const { ripples = [], motionProps, color = "currentColor", style, onClear } = props;
  return (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: ripples.map((ripple) => {
    const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5);
    return (0, import_jsx_runtime2.jsx)(LazyMotion, { features: domAnimation, children: (0, import_jsx_runtime2.jsx)(AnimatePresence, { mode: "popLayout", children: (0, import_jsx_runtime2.jsx)(
      m.span,
      {
        animate: { transform: "scale(2)", opacity: 0 },
        className: "nextui-ripple",
        exit: { opacity: 0 },
        initial: { transform: "scale(0)", opacity: 0.35 },
        style: {
          position: "absolute",
          backgroundColor: color,
          borderRadius: "100%",
          transformOrigin: "center",
          pointerEvents: "none",
          overflow: "hidden",
          inset: 0,
          zIndex: 0,
          top: ripple.y,
          left: ripple.x,
          width: `${ripple.size}px`,
          height: `${ripple.size}px`,
          ...style
        },
        transition: { duration },
        onAnimationComplete: () => {
          onClear(ripple.key);
        },
        ...motionProps
      }
    ) }) }, ripple.key);
  }) });
};
Ripple.displayName = "NextUI.Ripple";
var ripple_default = Ripple;

// node_modules/@nextui-org/ripple/dist/chunk-6NL67ZRH.mjs
var import_react2 = __toESM(require_react(), 1);
function useRipple(props = {}) {
  const [ripples, setRipples] = (0, import_react2.useState)([]);
  const onClick = (0, import_react2.useCallback)((event) => {
    const trigger = event.currentTarget;
    const size = Math.max(trigger.clientWidth, trigger.clientHeight);
    const rect = trigger.getBoundingClientRect();
    setRipples((prevRipples) => [
      ...prevRipples,
      {
        key: getUniqueID(prevRipples.length.toString()),
        size,
        x: event.clientX - rect.left - size / 2,
        y: event.clientY - rect.top - size / 2
      }
    ]);
  }, []);
  const onClear = (0, import_react2.useCallback)((key) => {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key));
  }, []);
  return { ripples, onClick, onClear, ...props };
}

// node_modules/@nextui-org/button/dist/chunk-P5GIOWF5.mjs
function useButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const groupContext = useButtonGroupContext();
  const globalContext = useProviderContext();
  const isInGroup = !!groupContext;
  const {
    ref,
    as,
    children,
    startContent: startContentProp,
    endContent: endContentProp,
    autoFocus,
    className,
    spinner: spinner2,
    isLoading = false,
    disableRipple: disableRippleProp = false,
    fullWidth = (_a = groupContext == null ? void 0 : groupContext.fullWidth) != null ? _a : false,
    radius = groupContext == null ? void 0 : groupContext.radius,
    size = (_b = groupContext == null ? void 0 : groupContext.size) != null ? _b : "md",
    color = (_c = groupContext == null ? void 0 : groupContext.color) != null ? _c : "default",
    variant = (_d = groupContext == null ? void 0 : groupContext.variant) != null ? _d : "solid",
    disableAnimation = (_f = (_e = groupContext == null ? void 0 : groupContext.disableAnimation) != null ? _e : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _f : false,
    isDisabled: isDisabledProp = (_g = groupContext == null ? void 0 : groupContext.isDisabled) != null ? _g : false,
    isIconOnly = (_h = groupContext == null ? void 0 : groupContext.isIconOnly) != null ? _h : false,
    spinnerPlacement = "start",
    onPress,
    onClick,
    ...otherProps
  } = props;
  const Component = as || "button";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const disableRipple = (_i = disableRippleProp || (globalContext == null ? void 0 : globalContext.disableRipple)) != null ? _i : disableAnimation;
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus
  });
  const isDisabled = isDisabledProp || isLoading;
  const styles = (0, import_react4.useMemo)(
    () => button({
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      disableAnimation,
      isIconOnly,
      className
    }),
    [
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      isIconOnly,
      disableAnimation,
      className
    ]
  );
  const { onClick: onRippleClickHandler, onClear: onClearRipple, ripples } = useRipple();
  const handleClick = (0, import_react3.useCallback)(
    (e) => {
      if (disableRipple || isDisabled || disableAnimation)
        return;
      domRef.current && onRippleClickHandler(e);
    },
    [disableRipple, isDisabled, disableAnimation, domRef, onRippleClickHandler]
  );
  const { buttonProps: ariaButtonProps, isPressed } = useAriaButton(
    {
      elementType: as,
      isDisabled,
      onPress,
      onClick: $ff5963eb1fccf552$export$e08e3b67e392101e(onClick, handleClick),
      ...otherProps
    },
    domRef
  );
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  const getButtonProps = (0, import_react3.useCallback)(
    (props2 = {}) => ({
      "data-disabled": dataAttr(isDisabled),
      "data-focus": dataAttr(isFocused),
      "data-pressed": dataAttr(isPressed),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-loading": dataAttr(isLoading),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        ariaButtonProps,
        focusProps,
        hoverProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        filterDOMProps(props2)
      )
    }),
    [
      isLoading,
      isDisabled,
      isFocused,
      isPressed,
      shouldFilterDOMProps,
      isFocusVisible,
      isHovered,
      ariaButtonProps,
      focusProps,
      hoverProps,
      otherProps
    ]
  );
  const getIconClone = (icon) => (0, import_react4.isValidElement)(icon) ? (0, import_react4.cloneElement)(icon, {
    "aria-hidden": true,
    focusable: false,
    tabIndex: -1
  }) : null;
  const startContent = getIconClone(startContentProp);
  const endContent = getIconClone(endContentProp);
  const spinnerSize = (0, import_react4.useMemo)(() => {
    const buttonSpinnerSizeMap = {
      sm: "sm",
      md: "sm",
      lg: "md"
    };
    return buttonSpinnerSizeMap[size];
  }, [size]);
  const getRippleProps = (0, import_react3.useCallback)(
    () => ({ ripples, onClear: onClearRipple }),
    [ripples, onClearRipple]
  );
  return {
    Component,
    children,
    domRef,
    spinner: spinner2,
    styles,
    startContent,
    endContent,
    isLoading,
    spinnerPlacement,
    spinnerSize,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly
  };
}

// node_modules/@nextui-org/spinner/dist/chunk-GF2IUMUE.mjs
var import_react5 = __toESM(require_react(), 1);
function useSpinner(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, spinner.variantKeys);
  const { children, className, classNames, label: labelProp, ...otherProps } = props;
  const slots = (0, import_react5.useMemo)(() => spinner({ ...variantProps }), [objectToDeps(variantProps)]);
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const label = labelProp || children;
  const ariaLabel = (0, import_react5.useMemo)(() => {
    if (label && typeof label === "string") {
      return label;
    }
    return !otherProps["aria-label"] ? "Loading" : "";
  }, [children, label, otherProps["aria-label"]]);
  const getSpinnerProps = (0, import_react5.useCallback)(
    () => ({
      "aria-label": ariaLabel,
      className: slots.base({
        class: baseStyles
      }),
      ...otherProps
    }),
    [ariaLabel, slots, baseStyles, otherProps]
  );
  return { label, slots, classNames, getSpinnerProps };
}

// node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var Spinner = forwardRef((props, ref) => {
  const { slots, classNames, label, getSpinnerProps } = useSpinner({ ...props });
  return (0, import_jsx_runtime3.jsxs)("div", { ref, ...getSpinnerProps(), children: [
    (0, import_jsx_runtime3.jsxs)("div", { className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }), children: [
      (0, import_jsx_runtime3.jsx)("i", { className: slots.circle1({ class: classNames == null ? void 0 : classNames.circle1 }) }),
      (0, import_jsx_runtime3.jsx)("i", { className: slots.circle2({ class: classNames == null ? void 0 : classNames.circle2 }) })
    ] }),
    label && (0, import_jsx_runtime3.jsx)("span", { className: slots.label({ class: classNames == null ? void 0 : classNames.label }), children: label })
  ] });
});
Spinner.displayName = "NextUI.Spinner";
var spinner_default = Spinner;

// node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var Button = forwardRef((props, ref) => {
  const {
    Component,
    domRef,
    children,
    styles,
    spinnerSize,
    spinner: spinner2 = (0, import_jsx_runtime4.jsx)(spinner_default, { color: "current", size: spinnerSize }),
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly
  } = useButton({ ...props, ref });
  return (0, import_jsx_runtime4.jsxs)(Component, { ref: domRef, className: styles, ...getButtonProps(), children: [
    startContent,
    isLoading && spinnerPlacement === "start" && spinner2,
    isLoading && isIconOnly ? null : children,
    isLoading && spinnerPlacement === "end" && spinner2,
    endContent,
    !disableRipple && (0, import_jsx_runtime4.jsx)(ripple_default, { ...getRippleProps() })
  ] });
});
Button.displayName = "NextUI.Button";
var button_default = Button;
export {
  button_default as Button,
  button_group_default as ButtonGroup,
  ButtonGroupProvider,
  useButton,
  useButtonGroup,
  useButtonGroupContext
};
//# sourceMappingURL=@nextui-org_button.js.map
