"use client";
import {
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $431fbd86ca7dc216$export$f21a1ffae260145a,
  $458b0a5536c1a7cf$export$40bfa8c7b0832715,
  $6179b936705e76d3$export$ae780daf29e6d456,
  $65484d02dcb7eb3e$export$457c3d6518dd4c6f,
  $99facab73266f662$export$5add1d006293d136,
  $9ab94262bd0047c7$export$420e68273165f4ec,
  $b5e257d569688ac6$export$619500959fc48b26,
  $e6afbd83fe6ebbd2$export$4c014de7c8940b4c,
  $f6c31cce2adf654f$export$45712eceda6fad21,
  $f7dceffc5ad7768b$export$4e328f61c538687f,
  $ff5963eb1fccf552$export$e08e3b67e392101e,
  _class_private_field_get,
  _class_private_field_init,
  _class_private_field_set,
  clsx,
  dataAttr,
  filterDOMProps,
  forwardRef,
  input,
  isEmpty,
  mapPropsVariants,
  objectToDeps,
  safeAriaLabel,
  useDOMRef,
  useProviderContext,
  warn
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

// node_modules/@nextui-org/use-safe-layout-effect/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var useSafeLayoutEffect = Boolean(globalThis == null ? void 0 : globalThis.document) ? import_react.useLayoutEffect : import_react.useEffect;

// node_modules/@nextui-org/input/dist/chunk-ZBD2AF2V.mjs
var import_react53 = __toESM(require_react(), 1);

// node_modules/@react-aria/textfield/dist/useTextField.mjs
var import_react51 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react2 = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react2.default).useLayoutEffect : () => {
};

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react3 = __toESM(require_react(), 1);
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react3.useRef)(null);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react3.useCallback)((...args) => {
    const f = ref.current;
    return f === null || f === void 0 ? void 0 : f(...args);
  }, []);
}

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useValueEffect.mjs
var import_react4 = __toESM(require_react(), 1);
function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
  let [value, setValue] = (0, import_react4.useState)(defaultValue);
  let effect = (0, import_react4.useRef)(null);
  let nextRef = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(() => {
    if (!effect.current) return;
    let newValue = effect.current.next();
    if (newValue.done) {
      effect.current = null;
      return;
    }
    if (value === newValue.value) nextRef();
    else setValue(newValue.value);
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (effect.current) nextRef();
  });
  let queue = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((fn) => {
    effect.current = fn(value);
    nextRef();
  });
  return [
    value,
    queue
  ];
}

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useId.mjs
var import_react5 = __toESM(require_react(), 1);
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let [value, setValue] = (0, import_react5.useState)(defaultId);
  let nextId = (0, import_react5.useRef)(null);
  let res = (0, $b5e257d569688ac6$export$619500959fc48b26)(value);
  let updateValue = (0, import_react5.useCallback)((val) => {
    nextId.current = val;
  }, []);
  if ($bdb11010cef70236$var$canUseDOM) {
    if ($bdb11010cef70236$var$idsUpdaterMap.has(res) && !$bdb11010cef70236$var$idsUpdaterMap.get(res).includes(updateValue)) $bdb11010cef70236$var$idsUpdaterMap.set(res, [
      ...$bdb11010cef70236$var$idsUpdaterMap.get(res),
      updateValue
    ]);
    else $bdb11010cef70236$var$idsUpdaterMap.set(res, [
      updateValue
    ]);
  }
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    let r3 = res;
    return () => {
      $bdb11010cef70236$var$idsUpdaterMap.delete(r3);
    };
  }, [
    res
  ]);
  (0, import_react5.useEffect)(() => {
    let newId = nextId.current;
    if (newId) {
      nextId.current = null;
      setValue(newId);
    }
  });
  return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB) return idA;
  let setIdsA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
  if (setIdsA) {
    setIdsA.forEach((fn) => fn(idB));
    return idB;
  }
  let setIdsB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
  if (setIdsB) {
    setIdsB.forEach((fn) => fn(idA));
    return idA;
  }
  return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
  let id = $bdb11010cef70236$export$f680877a34711e37();
  let [resolvedId, setResolvedId] = (0, $1dbecbe27a04f9af$export$14d238f342723f25)(id);
  let updateId = (0, import_react5.useCallback)(() => {
    setResolvedId(function* () {
      yield id;
      yield document.getElementById(id) ? id : void 0;
    });
  }, [
    id,
    setResolvedId
  ]);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(updateId, [
    id,
    updateId,
    ...depArray
  ]);
  return resolvedId;
}

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/chain.mjs
function $ff5963eb1fccf552$export$e08e3b67e392101e2(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}

// node_modules/@react-aria/label/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx2() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx2;

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe9282(...args) {
  let result = {
    ...args[0]
  };
  for (let i = 1; i < args.length; i++) {
    let props = args[i];
    for (let key in props) {
      let a = result[key];
      let b = props[key];
      if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e2)(a, b);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = (0, clsx_default)(a, b);
      else if (key === "id" && a && b) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a, b);
      else result[key] = b !== void 0 ? b : a;
    }
  }
  return result;
}

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
var $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
var $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
var $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
var $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/openLink.mjs
var import_react6 = __toESM(require_react(), 1);
var $ea8dcbcb9ea1b556$var$RouterContext = (0, import_react6.createContext)({
  isNative: true,
  open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
  useHref: (href) => href
});
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
    else ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
  if (target instanceof HTMLAnchorElement) open(target);
  else if (target.hasAttribute("data-href")) {
    let link = document.createElement("a");
    link.href = target.getAttribute("data-href");
    if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
    if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
    if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
    if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
    if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
    target.appendChild(link);
    open(link);
    target.removeChild(link);
  }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
  $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link) => $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined") return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e) => {
    if (!isTransitionEvent(e) || !e.target) return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
      e.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e.propertyName);
  };
  let onTransitionEnd = (e) => {
    if (!isTransitionEvent(e) || !e.target) return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!properties) return;
    properties.delete(e.propertyName);
    if (properties.size === 0) {
      e.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useDrag1D.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var import_react8 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useLabels.mjs
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
  let { id, "aria-label": label, "aria-labelledby": labelledBy } = props;
  id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
  if (labelledBy && label) {
    let ids = /* @__PURE__ */ new Set([
      id,
      ...labelledBy.trim().split(/\s+/)
    ]);
    labelledBy = [
      ...ids
    ].join(" ");
  } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(" ");
  if (!label && !labelledBy && defaultLabel) label = defaultLabel;
  return {
    id,
    "aria-label": label,
    "aria-labelledby": labelledBy
  };
}

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useObjectRef.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useViewportSize.mjs
var import_react12 = __toESM(require_react(), 1);
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useDescription.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useEvent.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useDeepMemo.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useFormReset.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-aria/utils/dist/useLoadMore.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/node_modules/@react-stately/utils/dist/useControlledState.mjs
var import_react18 = __toESM(require_react(), 1);

// node_modules/@react-aria/label/dist/useLabel.mjs
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
  let { id, label, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, labelElementType = "label" } = props;
  id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
  let labelId = (0, $bdb11010cef70236$export$f680877a34711e37)();
  let labelProps = {};
  if (label) {
    ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
    labelProps = {
      id: labelId,
      htmlFor: labelElementType === "label" ? id : void 0
    };
  } else if (!ariaLabelledby && !ariaLabel) console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let fieldProps = (0, $313b98861ee5dd6c$export$d6875122194c7b44)({
    id,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby
  });
  return {
    labelProps,
    fieldProps
  };
}

// node_modules/@react-aria/label/dist/useField.mjs
function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
  let { description, errorMessage, isInvalid, validationState } = props;
  let { labelProps, fieldProps } = (0, $d191a55c9702f145$export$8467354a121f1b9f)(props);
  let descriptionId = (0, $bdb11010cef70236$export$b4cc09c592e8fdb8)([
    Boolean(description),
    Boolean(errorMessage),
    isInvalid,
    validationState
  ]);
  let errorMessageId = (0, $bdb11010cef70236$export$b4cc09c592e8fdb8)([
    Boolean(description),
    Boolean(errorMessage),
    isInvalid,
    validationState
  ]);
  fieldProps = (0, $3ef42575df84b30b$export$9d1611c77c2fe9282)(fieldProps, {
    "aria-describedby": [
      descriptionId,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      errorMessageId,
      props["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  });
  return {
    labelProps,
    fieldProps,
    descriptionProps: {
      id: descriptionId
    },
    errorMessageProps: {
      id: errorMessageId
    }
  };
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react19 = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2 = typeof document !== "undefined" ? (0, import_react19.default).useLayoutEffect : () => {
};

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react20 = __toESM(require_react(), 1);
function $8ae05eaa5c114e9c$export$7f54fc3180508a522(fn) {
  const ref = (0, import_react20.useRef)(null);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2)(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react20.useCallback)((...args) => {
    const f = ref.current;
    return f === null || f === void 0 ? void 0 : f(...args);
  }, []);
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useValueEffect.mjs
var import_react21 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useId.mjs
var import_react22 = __toESM(require_react(), 1);
var $bdb11010cef70236$var$canUseDOM2 = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$var$idsUpdaterMap2 = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$cd8c9cb68f8426292(idA, idB) {
  if (idA === idB) return idA;
  let setIdsA = $bdb11010cef70236$var$idsUpdaterMap2.get(idA);
  if (setIdsA) {
    setIdsA.forEach((fn) => fn(idB));
    return idB;
  }
  let setIdsB = $bdb11010cef70236$var$idsUpdaterMap2.get(idB);
  if (setIdsB) {
    setIdsB.forEach((fn) => fn(idA));
    return idA;
  }
  return idB;
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/chain.mjs
function $ff5963eb1fccf552$export$e08e3b67e392101e3(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac2 = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a3 = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac2(el);
  return doc.defaultView || window;
};

// node_modules/@react-aria/form/node_modules/clsx/dist/clsx.mjs
function r2(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r2(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx3() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r2(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default2 = clsx3;

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe9283(...args) {
  let result = {
    ...args[0]
  };
  for (let i = 1; i < args.length; i++) {
    let props = args[i];
    for (let key in props) {
      let a = result[key];
      let b = props[key];
      if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e3)(a, b);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = (0, clsx_default2)(a, b);
      else if (key === "id" && a && b) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f8426292)(a, b);
      else result[key] = b !== void 0 ? b : a;
    }
  }
  return result;
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f32(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll2()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements2(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition2(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached2 = null;
function $7215afc6de606d6b$var$supportsPreventScroll2() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached2 == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached2 = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached2 = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached2;
}
function $7215afc6de606d6b$var$getScrollableElements2(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition2(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent2(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform2(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached2(fn) {
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
var $c87311424ea30a05$export$9ac100e40613ea102 = $c87311424ea30a05$var$cached2(function() {
  return $c87311424ea30a05$var$testPlatform2(/^Mac/i);
});
var $c87311424ea30a05$export$186c6964ca17d992 = $c87311424ea30a05$var$cached2(function() {
  return $c87311424ea30a05$var$testPlatform2(/^iPhone/i);
});
var $c87311424ea30a05$export$7bef049ce92e42242 = $c87311424ea30a05$var$cached2(function() {
  return $c87311424ea30a05$var$testPlatform2(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea102() && navigator.maxTouchPoints > 1;
});
var $c87311424ea30a05$export$fedb369cb70207f12 = $c87311424ea30a05$var$cached2(function() {
  return $c87311424ea30a05$export$186c6964ca17d992() || $c87311424ea30a05$export$7bef049ce92e42242();
});
var $c87311424ea30a05$export$e1865c3bedcd822b2 = $c87311424ea30a05$var$cached2(function() {
  return $c87311424ea30a05$export$9ac100e40613ea102() || $c87311424ea30a05$export$fedb369cb70207f12();
});
var $c87311424ea30a05$export$78551043582a6a982 = $c87311424ea30a05$var$cached2(function() {
  return $c87311424ea30a05$var$testUserAgent2(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e2();
});
var $c87311424ea30a05$export$6446a186d09e379e2 = $c87311424ea30a05$var$cached2(function() {
  return $c87311424ea30a05$var$testUserAgent2(/Chrome/i);
});
var $c87311424ea30a05$export$a11b0059900ceec82 = $c87311424ea30a05$var$cached2(function() {
  return $c87311424ea30a05$var$testUserAgent2(/Android/i);
});
var $c87311424ea30a05$export$b7d78993b74f766d2 = $c87311424ea30a05$var$cached2(function() {
  return $c87311424ea30a05$var$testUserAgent2(/Firefox/i);
});

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/openLink.mjs
var import_react23 = __toESM(require_react(), 1);
var $ea8dcbcb9ea1b556$var$RouterContext2 = (0, import_react23.createContext)({
  isNative: true,
  open: $ea8dcbcb9ea1b556$var$openSyntheticLink2,
  useHref: (href) => href
});
function $ea8dcbcb9ea1b556$export$95185d699e05d4d72(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d2)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea102)()) metaKey = true;
    else ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a982)() && (0, $c87311424ea30a05$export$9ac100e40613ea102)() && !(0, $c87311424ea30a05$export$7bef049ce92e42242)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d72.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f32)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d72.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d72.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink2(target, open) {
  if (target instanceof HTMLAnchorElement) open(target);
  else if (target.hasAttribute("data-href")) {
    let link = document.createElement("a");
    link.href = target.getAttribute("data-href");
    if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
    if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
    if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
    if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
    if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
    target.appendChild(link);
    open(link);
    target.removeChild(link);
  }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink2(target, modifiers) {
  $ea8dcbcb9ea1b556$var$getSyntheticLink2(target, (link) => $ea8dcbcb9ea1b556$export$95185d699e05d4d72(link, modifiers));
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement2 = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks2 = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents2() {
  if (typeof window === "undefined") return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e) => {
    if (!isTransitionEvent(e) || !e.target) return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement2.get(e.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement2.set(e.target, transitions);
      e.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e.propertyName);
  };
  let onTransitionEnd = (e) => {
    if (!isTransitionEvent(e) || !e.target) return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement2.get(e.target);
    if (!properties) return;
    properties.delete(e.propertyName);
    if (properties.size === 0) {
      e.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement2.delete(e.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement2.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks2) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks2.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents2();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents2);
}
function $bbed8b41f857bcc0$export$24490316f764c4302(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement2.size === 0) fn();
    else $bbed8b41f857bcc0$var$transitionCallbacks2.add(fn);
  });
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useDrag1D.mjs
var import_react24 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var import_react25 = __toESM(require_react(), 1);
function $03deb23ff14920c4$export$4eaf04e54aa8eed62() {
  let globalListeners = (0, import_react25.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react25.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = (0, import_react25.useCallback)((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react25.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react25.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useObjectRef.mjs
var import_react26 = __toESM(require_react(), 1);
function $df56164dff5785e2$export$4338b53315abf6662(forwardedRef) {
  const objRef = (0, import_react26.useRef)(null);
  return (0, import_react26.useMemo)(() => ({
    get current() {
      return objRef.current;
    },
    set current(value) {
      objRef.current = value;
      if (typeof forwardedRef === "function") forwardedRef(value);
      else if (forwardedRef) forwardedRef.current = value;
    }
  }), [
    forwardedRef
  ]);
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var import_react28 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useSyncRef.mjs
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e2(context, ref) {
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2)(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref) context.ref.current = null;
      };
    }
  });
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useViewportSize.mjs
var import_react29 = __toESM(require_react(), 1);
var $5df64b3807dc15ee$var$visualViewport2 = typeof document !== "undefined" && window.visualViewport;

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useDescription.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useEvent.mjs
var import_react31 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de2(event) {
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec82)() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf632(event) {
  return !(0, $c87311424ea30a05$export$a11b0059900ceec82)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useDeepMemo.mjs
var import_react32 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useFormReset.mjs
var import_react33 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/utils/dist/useLoadMore.mjs
var import_react34 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-stately/utils/dist/useControlledState.mjs
var import_react35 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/textSelection.mjs
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f12)()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac2)(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f12)()) {
    if ($14c0b72509d70225$var$state !== "disabled") return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      (0, $bbed8b41f857bcc0$export$24490316f764c4302)(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac2)(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      if (target.style.userSelect === "none") target.style.userSelect = targetOldUserSelect;
      if (target.getAttribute("style") === "") target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/context.mjs
var import_react36 = __toESM(require_react(), 1);
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, import_react36.default).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/usePress.mjs
var import_react37 = __toESM(require_react(), 1);
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react37.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  if (context) {
    let { register, ...contextProps } = context;
    props = (0, $3ef42575df84b30b$export$9d1611c77c2fe9283)(contextProps, props);
    register();
  }
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e2)(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
var $f6c31cce2adf654f$var$PressEvent = class {
  continuePropagation() {
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent, state) {
    (0, _class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    var _state_target;
    let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
    const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
    let x, y = 0;
    let clientX, clientY = null;
    if (originalEvent.clientX != null && originalEvent.clientY != null) {
      clientX = originalEvent.clientX;
      clientY = originalEvent.clientY;
    }
    if (rect) {
      if (clientX != null && clientY != null) {
        x = clientX - rect.left;
        y = clientY - rect.top;
      } else {
        x = rect.width / 2;
        y = rect.height / 2;
      }
    }
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
    this.x = x;
    this.y = y;
  }
};
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad212(props) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = (0, import_react37.useState)(false);
  let ref = (0, import_react37.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed62)();
  let triggerPressStart = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a522)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled || state.didFirePressStart) return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a522)((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart) return false;
    state.ignoreClickAfterPress = true;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled) {
      let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a522)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled) return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a522)((e) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
    }
  });
  let cancelOnPointerExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a522)((e) => {
    if (shouldCancelOnPointerExit) cancel(e);
  });
  let pressProps = (0, import_react37.useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            shouldStopPropagation = triggerPressStart(e, "keyboard");
            let originalTarget = e.currentTarget;
            let pressUp = (e2) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e2, originalTarget) && !e2.repeat && originalTarget.contains(e2.target) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e2), "keyboard");
            };
            addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac2)(e.currentTarget), "keyup", (0, $ff5963eb1fccf552$export$e08e3b67e392101e3)(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation) e.stopPropagation();
          if (e.metaKey && (0, $c87311424ea30a05$export$9ac100e40613ea102)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
        } else if (e.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e) {
        if (e && !e.currentTarget.contains(e.target)) return;
        if (e && e.button === 0 && !state.isTriggeringEvent && !(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d72).isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled) e.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $6a7db85432448f7f$export$60278871457622de2)(e.nativeEvent))) {
            if (!isDisabled && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f32)(e.currentTarget);
            let stopPressStart = triggerPressStart(e, "virtual");
            let stopPressUp = triggerPressUp(e, "virtual");
            let stopPressEnd = triggerPressEnd(e, "virtual");
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
          if (shouldStopPropagation) e.stopPropagation();
        }
      }
    };
    let onKeyUp = (e) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
        let target = e.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (e.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          (0, $ea8dcbcb9ea1b556$export$95185d699e05d4d72)(state.target, e, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
      } else if (e.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values()) (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e) => {
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
        if ((0, $6a7db85432448f7f$export$29bf1b5f2c56cf632)(e.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e.currentTarget)) e.preventDefault();
        state.pointerType = e.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;
          if (!isDisabled && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f32)(e.currentTarget);
          if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac2)(e.currentTarget), "pointermove", onPointerMove, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac2)(e.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac2)(e.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseDown = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (e.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e.currentTarget)) e.preventDefault();
          e.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e) => {
        if (!e.currentTarget.contains(e.target) || state.pointerType === "virtual") return;
        if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
      };
      let onPointerMove = (e) => {
        if (e.pointerId !== state.activePointerId) return;
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
          }
        } else if (state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
          cancelOnPointerExit(e);
        }
      };
      let onPointerUp = (e) => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
          if ($f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
          else if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
          if ("ontouchend" in state.target && e.pointerType !== "mouse") addGlobalListener(state.target, "touchend", onTouchEnd, {
            once: true
          });
        }
      };
      let onTouchEnd = (e) => {
        if ($f6c31cce2adf654f$var$shouldPreventDefaultUp(e.currentTarget)) e.preventDefault();
      };
      let onPointerCancel = (e) => {
        cancel(e);
      };
      pressProps2.onDragStart = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        cancel(e);
      };
    } else {
      pressProps2.onMouseDown = (e) => {
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e.currentTarget)) e.preventDefault();
        if (state.ignoreEmulatedMouseEvents) {
          e.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e.currentTarget;
        state.pointerType = (0, $6a7db85432448f7f$export$60278871457622de2)(e.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f32)(e.currentTarget);
        let shouldStopPropagation = triggerPressStart(e, state.pointerType);
        if (shouldStopPropagation) e.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac2)(e.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseLeave = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
          cancelOnPointerExit(e);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseUp = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType || "mouse");
      };
      let onMouseUp = (e) => {
        if (e.button !== 0) return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
        else if (state.target && state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
        if (!touch) return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f32)(e.currentTarget);
        if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
        let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
        if (shouldStopPropagation) e.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$f21a1ffae260145a3)(e.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (!state.isPressed) {
          e.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
          cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onTouchEnd = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (!state.isPressed) {
          e.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
          triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
        } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
        if (shouldStopPropagation) e.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        e.stopPropagation();
        if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
      };
      let onScroll = (e) => {
        if (state.isPressed && e.target.contains(state.target)) cancel({
          currentTarget: state.target,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
          altKey: false
        });
      };
      pressProps2.onDragStart = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        cancel(e);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp
  ]);
  (0, import_react37.useEffect)(() => {
    return () => {
      var _ref_current_target;
      if (!allowTextSelectionOnPress)
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : void 0);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe9283)(domProps, pressProps)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a3)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a3)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0) return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i];
    if (touch.identifier === pointerId) return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createTouchEvent(target, e) {
  let clientX = 0;
  let clientY = 0;
  if (e.targetTouches && e.targetTouches.length === 1) {
    clientX = e.targetTouches[0].clientX;
    clientY = e.targetTouches[0].clientY;
  }
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
  let clientX = e.clientX;
  let clientY = e.clientY;
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = 0;
  let offsetY = 0;
  if (point.width !== void 0) offsetX = point.width / 2;
  else if (point.radiusX !== void 0) offsetX = point.radiusX;
  if (point.height !== void 0) offsetY = point.height / 2;
  else if (point.radiusY !== void 0) offsetY = point.radiusY;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
  if (a.left > b.right || b.left > a.right) return false;
  if (a.top > b.bottom || b.top > a.bottom) return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefaultDown(target) {
  return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultUp(target) {
  if (target instanceof HTMLInputElement) return false;
  if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
  return true;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  return $f6c31cce2adf654f$var$shouldPreventDefaultUp(target);
}
var $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/Pressable.mjs
var import_react38 = __toESM(require_react(), 1);
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = (0, import_react38.default).forwardRef(({ children, ...props }, ref) => {
  ref = (0, $df56164dff5785e2$export$4338b53315abf6662)(ref);
  let { pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad212)({
    ...props,
    ref
  });
  let child = (0, import_react38.default).Children.only(children);
  return (0, import_react38.default).cloneElement(
    child,
    // @ts-ignore
    {
      ref,
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe9283)(child.props, pressProps)
    }
  );
});

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/PressResponder.mjs
var import_react39 = __toESM(require_react(), 1);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = (0, import_react39.default).forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react39.useRef)(false);
  let prevContext = (0, import_react39.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  ref = (0, $df56164dff5785e2$export$4338b53315abf6662)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
  let context = (0, $3ef42575df84b30b$export$9d1611c77c2fe9283)(prevContext || {}, {
    ...props,
    ref,
    register() {
      isRegistered.current = true;
      if (prevContext) prevContext.register();
    }
  });
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e2)(prevContext, ref);
  (0, import_react39.useEffect)(() => {
    if (!isRegistered.current) {
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
      isRegistered.current = true;
    }
  }, []);
  return (0, import_react39.default).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
    value: context
  }, children);
});

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/utils.mjs
var import_react40 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/useFocus.mjs
var import_react41 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var import_react42 = __toESM(require_react(), 1);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e);
}
function $507fabe10e71c6fb$var$isValidKey(e) {
  return !(e.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea102)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e.type === "mousedown" || e.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
  if ((0, $6a7db85432448f7f$export$60278871457622de2)(e)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
  if (e.target === window || e.target === document) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a3)(element))) return;
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a3)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac2)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a3)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac2)(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac2)(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
  $507fabe10e71c6fb$var$currentModality = modality;
  $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var import_react43 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/useHover.mjs
var import_react44 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/useInteractOutside.mjs
var import_react45 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/useMove.mjs
var import_react46 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/useScrollWheel.mjs
var import_react47 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/node_modules/@react-aria/interactions/dist/useLongPress.mjs
var import_react48 = __toESM(require_react(), 1);

// node_modules/@react-aria/form/dist/useFormValidation.mjs
var import_react49 = __toESM(require_react(), 1);
function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
  let { validationBehavior, focus } = props;
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2)(() => {
    if (validationBehavior === "native" && (ref === null || ref === void 0 ? void 0 : ref.current)) {
      let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      ref.current.setCustomValidity(errorMessage);
      if (!ref.current.hasAttribute("title")) ref.current.title = "";
      if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
    }
  });
  let onReset = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a522)(() => {
    state.resetValidation();
  });
  let onInvalid = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a522)((e) => {
    var _ref_current;
    if (!state.displayValidation.isInvalid) state.commitValidation();
    let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
    if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
      var _ref_current1;
      if (focus) focus();
      else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
      (0, $507fabe10e71c6fb$export$8397ddfc504fdb9a)("keyboard");
    }
    e.preventDefault();
  });
  let onChange = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a522)(() => {
    state.commitValidation();
  });
  (0, import_react49.useEffect)(() => {
    let input2 = ref === null || ref === void 0 ? void 0 : ref.current;
    if (!input2) return;
    let form = input2.form;
    input2.addEventListener("invalid", onInvalid);
    input2.addEventListener("change", onChange);
    form === null || form === void 0 ? void 0 : form.addEventListener("reset", onReset);
    return () => {
      input2.removeEventListener("invalid", onInvalid);
      input2.removeEventListener("change", onChange);
      form === null || form === void 0 ? void 0 : form.removeEventListener("reset", onReset);
    };
  }, [
    ref,
    onInvalid,
    onChange,
    onReset,
    validationBehavior
  ]);
}
function $e93e671b31057976$var$getValidity(input2) {
  let validity = input2.validity;
  return {
    badInput: validity.badInput,
    customError: validity.customError,
    patternMismatch: validity.patternMismatch,
    rangeOverflow: validity.rangeOverflow,
    rangeUnderflow: validity.rangeUnderflow,
    stepMismatch: validity.stepMismatch,
    tooLong: validity.tooLong,
    tooShort: validity.tooShort,
    typeMismatch: validity.typeMismatch,
    valueMissing: validity.valueMissing,
    valid: validity.valid
  };
}
function $e93e671b31057976$var$getNativeValidity(input2) {
  return {
    isInvalid: !input2.validity.valid,
    validationDetails: $e93e671b31057976$var$getValidity(input2),
    validationErrors: input2.validationMessage ? [
      input2.validationMessage
    ] : []
  };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];
    if (!element.validity.valid) return element;
  }
  return null;
}

// node_modules/@react-stately/form/dist/useFormValidationState.mjs
var import_react50 = __toESM(require_react(), 1);
var $e5be200c675c3b3a$export$aca958c65c314e6c = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valueMissing: false,
  valid: true
};
var $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
  ...$e5be200c675c3b3a$export$aca958c65c314e6c,
  customError: true,
  valid: false
};
var $e5be200c675c3b3a$export$dad6ae84456c676a = {
  isInvalid: false,
  validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
  validationErrors: []
};
var $e5be200c675c3b3a$export$571b5131b7e65c11 = (0, import_react50.createContext)({});
var $e5be200c675c3b3a$export$a763b9476acd3eb = "__formValidationState" + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
  if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
    let { realtimeValidation, displayValidation, updateValidation, resetValidation, commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
    return {
      realtimeValidation,
      displayValidation,
      updateValidation,
      resetValidation,
      commitValidation
    };
  }
  return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
  let { isInvalid, validationState, name, value, builtinValidation, validate, validationBehavior = "aria" } = props;
  if (validationState) isInvalid || (isInvalid = validationState === "invalid");
  let controlledError = isInvalid !== void 0 ? {
    isInvalid,
    validationErrors: [],
    validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
  } : null;
  let clientError = (0, import_react50.useMemo)(() => $e5be200c675c3b3a$var$getValidationResult($e5be200c675c3b3a$var$runValidate(validate, value)), [
    validate,
    value
  ]);
  if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = null;
  let serverErrors = (0, import_react50.useContext)($e5be200c675c3b3a$export$571b5131b7e65c11);
  let serverErrorMessages = (0, import_react50.useMemo)(() => {
    if (name) return Array.isArray(name) ? name.flatMap((name2) => $e5be200c675c3b3a$var$asArray(serverErrors[name2])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
    return [];
  }, [
    serverErrors,
    name
  ]);
  let [lastServerErrors, setLastServerErrors] = (0, import_react50.useState)(serverErrors);
  let [isServerErrorCleared, setServerErrorCleared] = (0, import_react50.useState)(false);
  if (serverErrors !== lastServerErrors) {
    setLastServerErrors(serverErrors);
    setServerErrorCleared(false);
  }
  let serverError = (0, import_react50.useMemo)(() => $e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
    isServerErrorCleared,
    serverErrorMessages
  ]);
  let nextValidation = (0, import_react50.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
  let [currentValidity, setCurrentValidity] = (0, import_react50.useState)($e5be200c675c3b3a$export$dad6ae84456c676a);
  let lastError = (0, import_react50.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
  let commitValidation = () => {
    if (!commitQueued) return;
    setCommitQueued(false);
    let error = clientError || builtinValidation || nextValidation.current;
    if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
      lastError.current = error;
      setCurrentValidity(error);
    }
  };
  let [commitQueued, setCommitQueued] = (0, import_react50.useState)(false);
  (0, import_react50.useEffect)(commitValidation);
  let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
  let displayValidation = validationBehavior === "native" ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
  return {
    realtimeValidation,
    displayValidation,
    updateValidation(value2) {
      if (validationBehavior === "aria" && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value2)) setCurrentValidity(value2);
      else nextValidation.current = value2;
    },
    resetValidation() {
      let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
      if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
        lastError.current = error;
        setCurrentValidity(error);
      }
      if (validationBehavior === "native") setCommitQueued(false);
      setServerErrorCleared(true);
    },
    commitValidation() {
      if (validationBehavior === "native") setCommitQueued(true);
      setServerErrorCleared(true);
    }
  };
}
function $e5be200c675c3b3a$var$asArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [
    v
  ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
  if (typeof validate === "function") {
    let e = validate(value);
    if (e && typeof e !== "boolean") return $e5be200c675c3b3a$var$asArray(e);
  }
  return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
  return errors.length ? {
    isInvalid: true,
    validationErrors: errors,
    validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
  } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
  if (a === b) return true;
  return a && b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a2, i) => a2 === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v]) => b.validationDetails[k] === v);
}

// node_modules/@react-aria/textfield/dist/useTextField.mjs
function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
  let { inputElementType = "input", isDisabled = false, isRequired = false, isReadOnly = false, type = "text", validationBehavior = "aria" } = props;
  let [value, setValue] = (0, $458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.value, props.defaultValue || "", props.onChange);
  let { focusableProps } = (0, $e6afbd83fe6ebbd2$export$4c014de7c8940b4c)(props, ref);
  let validationState = (0, $e5be200c675c3b3a$export$fc1a364ae1f3ff10)({
    ...props,
    value
  });
  let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
  let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, $2baaea4c71418dea$export$294aa081a6c6f55d)({
    ...props,
    isInvalid,
    errorMessage: props.errorMessage || validationErrors
  });
  let domProps = (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
    labelable: true
  });
  const inputOnlyProps = {
    type,
    pattern: props.pattern
  };
  (0, $99facab73266f662$export$5add1d006293d136)(ref, value, setValue);
  (0, $e93e671b31057976$export$b8473d3665f3a75a)(props, validationState, ref);
  (0, import_react51.useEffect)(() => {
    if (ref.current instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(ref.current).HTMLTextAreaElement) {
      let input2 = ref.current;
      Object.defineProperty(input2, "defaultValue", {
        get: () => input2.value,
        set: () => {
        },
        configurable: true
      });
    }
  }, [
    ref
  ]);
  return {
    labelProps,
    inputProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, inputElementType === "input" && inputOnlyProps, {
      disabled: isDisabled,
      readOnly: isReadOnly,
      required: isRequired && validationBehavior === "native",
      "aria-required": isRequired && validationBehavior === "aria" || void 0,
      "aria-invalid": isInvalid || void 0,
      "aria-errormessage": props["aria-errormessage"],
      "aria-activedescendant": props["aria-activedescendant"],
      "aria-autocomplete": props["aria-autocomplete"],
      "aria-haspopup": props["aria-haspopup"],
      value,
      onChange: (e) => setValue(e.target.value),
      autoComplete: props.autoComplete,
      autoCapitalize: props.autoCapitalize,
      maxLength: props.maxLength,
      minLength: props.minLength,
      name: props.name,
      placeholder: props.placeholder,
      inputMode: props.inputMode,
      // Clipboard events
      onCopy: props.onCopy,
      onCut: props.onCut,
      onPaste: props.onPaste,
      // Composition events
      onCompositionEnd: props.onCompositionEnd,
      onCompositionStart: props.onCompositionStart,
      onCompositionUpdate: props.onCompositionUpdate,
      // Selection events
      onSelect: props.onSelect,
      // Input events
      onBeforeInput: props.onBeforeInput,
      onInput: props.onInput,
      ...focusableProps,
      ...fieldProps
    }),
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails
  };
}

// node_modules/@react-aria/textfield/dist/useFormattedTextField.mjs
var import_react52 = __toESM(require_react(), 1);

// node_modules/@nextui-org/input/dist/chunk-ZBD2AF2V.mjs
function useInput(originalProps) {
  var _a, _b, _c, _d;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, input.variantKeys);
  const {
    ref,
    as,
    type,
    label,
    baseRef,
    wrapperRef,
    description,
    className,
    classNames,
    autoFocus,
    startContent,
    endContent,
    onClear,
    onChange,
    validationState,
    validationBehavior = (_a = globalContext == null ? void 0 : globalContext.validationBehavior) != null ? _a : "aria",
    innerWrapperRef: innerWrapperRefProp,
    onValueChange = () => {
    },
    ...otherProps
  } = props;
  const handleValueChange = (0, import_react53.useCallback)(
    (value) => {
      onValueChange(value != null ? value : "");
    },
    [onValueChange]
  );
  const [isFocusWithin, setFocusWithin] = (0, import_react53.useState)(false);
  const Component = as || "div";
  const disableAnimation = (_c = (_b = originalProps.disableAnimation) != null ? _b : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _c : false;
  const domRef = useDOMRef(ref);
  const baseDomRef = useDOMRef(baseRef);
  const inputWrapperRef = useDOMRef(wrapperRef);
  const innerWrapperRef = useDOMRef(innerWrapperRefProp);
  const [inputValue, setInputValue] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(
    props.value,
    (_d = props.defaultValue) != null ? _d : "",
    handleValueChange
  );
  const isFilledByDefault = ["date", "time", "month", "week", "range"].includes(type);
  const isFilled = !isEmpty(inputValue) || isFilledByDefault;
  const isFilledWithin = isFilled || isFocusWithin;
  const isHiddenType = type === "hidden";
  const isMultiline = originalProps.isMultiline;
  const isFileTypeInput = type === "file";
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className, isFilled ? "is-filled" : "");
  const handleClear = (0, import_react53.useCallback)(() => {
    var _a2;
    setInputValue("");
    onClear == null ? void 0 : onClear();
    (_a2 = domRef.current) == null ? void 0 : _a2.focus();
  }, [setInputValue, onClear]);
  useSafeLayoutEffect(() => {
    if (!domRef.current)
      return;
    setInputValue(domRef.current.value);
  }, [domRef.current]);
  const {
    labelProps,
    inputProps,
    isInvalid: isAriaInvalid,
    validationErrors,
    validationDetails,
    descriptionProps,
    errorMessageProps
  } = $2d73ec29415bd339$export$712718f7aec83d5(
    {
      ...originalProps,
      validationBehavior,
      autoCapitalize: originalProps.autoCapitalize,
      value: inputValue,
      "aria-label": safeAriaLabel(
        originalProps["aria-label"],
        originalProps.label,
        originalProps.placeholder
      ),
      inputElementType: isMultiline ? "textarea" : "input",
      onChange: setInputValue
    },
    domRef
  );
  if (isFileTypeInput) {
    delete inputProps.value;
    delete inputProps.onChange;
  }
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus,
    isTextInput: true
  });
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled) });
  const { isHovered: isLabelHovered, hoverProps: labelHoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled)
  });
  const { focusProps: clearFocusProps, isFocusVisible: isClearButtonFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    onFocusWithinChange: setFocusWithin
  });
  const { pressProps: clearPressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled) || !!(originalProps == null ? void 0 : originalProps.isReadOnly),
    onPress: handleClear
  });
  const isInvalid = validationState === "invalid" || originalProps.isInvalid || isAriaInvalid;
  const labelPlacement = (0, import_react53.useMemo)(() => {
    var _a2;
    if (isFileTypeInput) {
      if (!originalProps.labelPlacement)
        return "outside";
      if (originalProps.labelPlacement === "inside") {
        warn("Input with file type doesn't support inside label. Converting to outside ...");
        return "outside";
      }
    }
    if ((!originalProps.labelPlacement || originalProps.labelPlacement === "inside") && !label) {
      return "outside";
    }
    return (_a2 = originalProps.labelPlacement) != null ? _a2 : "inside";
  }, [originalProps.labelPlacement, label]);
  const errorMessage = typeof props.errorMessage === "function" ? props.errorMessage({ isInvalid, validationErrors, validationDetails }) : props.errorMessage || (validationErrors == null ? void 0 : validationErrors.join(" "));
  const isClearable = !!onClear || originalProps.isClearable;
  const hasElements = !!label || !!description || !!errorMessage;
  const hasPlaceholder = !!props.placeholder;
  const hasLabel = !!label;
  const hasHelper = !!description || !!errorMessage;
  const shouldLabelBeOutside = labelPlacement === "outside" || labelPlacement === "outside-left";
  const shouldLabelBeInside = labelPlacement === "inside";
  const isPlaceholderShown = domRef.current ? (!domRef.current.value || domRef.current.value === "" || !inputValue || inputValue === "") && hasPlaceholder : false;
  const isOutsideLeft = labelPlacement === "outside-left";
  const hasStartContent = !!startContent;
  const isLabelOutside = shouldLabelBeOutside ? labelPlacement === "outside-left" || hasPlaceholder || labelPlacement === "outside" && hasStartContent : false;
  const isLabelOutsideAsPlaceholder = labelPlacement === "outside" && !hasPlaceholder && !hasStartContent;
  const slots = (0, import_react53.useMemo)(
    () => input({
      ...variantProps,
      isInvalid,
      labelPlacement,
      isClearable,
      disableAnimation
    }),
    [
      objectToDeps(variantProps),
      isInvalid,
      labelPlacement,
      isClearable,
      hasStartContent,
      disableAnimation
    ]
  );
  const getBaseProps = (0, import_react53.useCallback)(
    (props2 = {}) => {
      return {
        ref: baseDomRef,
        className: slots.base({ class: baseStyles }),
        "data-slot": "base",
        "data-filled": dataAttr(
          isFilled || hasPlaceholder || hasStartContent || isPlaceholderShown || isFileTypeInput
        ),
        "data-filled-within": dataAttr(
          isFilledWithin || hasPlaceholder || hasStartContent || isPlaceholderShown || isFileTypeInput
        ),
        "data-focus-within": dataAttr(isFocusWithin),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-readonly": dataAttr(originalProps.isReadOnly),
        "data-focus": dataAttr(isFocused),
        "data-hover": dataAttr(isHovered || isLabelHovered),
        "data-required": dataAttr(originalProps.isRequired),
        "data-invalid": dataAttr(isInvalid),
        "data-disabled": dataAttr(originalProps.isDisabled),
        "data-has-elements": dataAttr(hasElements),
        "data-has-helper": dataAttr(hasHelper),
        "data-has-label": dataAttr(hasLabel),
        "data-has-value": dataAttr(!isPlaceholderShown),
        "data-hidden": dataAttr(isHiddenType),
        ...focusWithinProps,
        ...props2
      };
    },
    [
      slots,
      baseStyles,
      isFilled,
      isFocused,
      isHovered,
      isLabelHovered,
      isInvalid,
      hasHelper,
      hasLabel,
      hasElements,
      isPlaceholderShown,
      hasStartContent,
      isFocusWithin,
      isFocusVisible,
      isFilledWithin,
      hasPlaceholder,
      focusWithinProps,
      isHiddenType,
      originalProps.isReadOnly,
      originalProps.isRequired,
      originalProps.isDisabled
    ]
  );
  const getLabelProps = (0, import_react53.useCallback)(
    (props2 = {}) => {
      return {
        "data-slot": "label",
        className: slots.label({ class: classNames == null ? void 0 : classNames.label }),
        ...$3ef42575df84b30b$export$9d1611c77c2fe928(labelProps, labelHoverProps, props2)
      };
    },
    [slots, isLabelHovered, labelProps, classNames == null ? void 0 : classNames.label]
  );
  const getInputProps = (0, import_react53.useCallback)(
    (props2 = {}) => {
      return {
        ref: domRef,
        "data-slot": "input",
        "data-filled": dataAttr(isFilled),
        "data-filled-within": dataAttr(isFilledWithin),
        "data-has-start-content": dataAttr(hasStartContent),
        "data-has-end-content": dataAttr(!!endContent),
        className: slots.input({
          class: clsx(classNames == null ? void 0 : classNames.input, isFilled ? "is-filled" : "")
        }),
        ...$3ef42575df84b30b$export$9d1611c77c2fe928(
          focusProps,
          inputProps,
          filterDOMProps(otherProps, {
            enabled: true,
            labelable: true,
            omitEventNames: new Set(Object.keys(inputProps))
          }),
          props2
        ),
        "aria-readonly": dataAttr(originalProps.isReadOnly),
        onChange: $ff5963eb1fccf552$export$e08e3b67e392101e(inputProps.onChange, onChange)
      };
    },
    [
      slots,
      inputValue,
      focusProps,
      inputProps,
      otherProps,
      isFilled,
      isFilledWithin,
      hasStartContent,
      endContent,
      classNames == null ? void 0 : classNames.input,
      originalProps.isReadOnly,
      originalProps.isRequired,
      onChange
    ]
  );
  const getInputWrapperProps = (0, import_react53.useCallback)(
    (props2 = {}) => {
      return {
        ref: inputWrapperRef,
        "data-slot": "input-wrapper",
        "data-hover": dataAttr(isHovered || isLabelHovered),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-focus": dataAttr(isFocused),
        className: slots.inputWrapper({
          class: clsx(classNames == null ? void 0 : classNames.inputWrapper, isFilled ? "is-filled" : "")
        }),
        ...$3ef42575df84b30b$export$9d1611c77c2fe928(props2, hoverProps),
        onClick: (e) => {
          if (domRef.current && e.currentTarget === e.target) {
            domRef.current.focus();
          }
        },
        style: {
          cursor: "text",
          ...props2.style
        }
      };
    },
    [
      slots,
      isHovered,
      isLabelHovered,
      isFocusVisible,
      isFocused,
      inputValue,
      classNames == null ? void 0 : classNames.inputWrapper
    ]
  );
  const getInnerWrapperProps = (0, import_react53.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        ref: innerWrapperRef,
        "data-slot": "inner-wrapper",
        onClick: (e) => {
          if (domRef.current && e.currentTarget === e.target) {
            domRef.current.focus();
          }
        },
        className: slots.innerWrapper({
          class: clsx(classNames == null ? void 0 : classNames.innerWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.innerWrapper]
  );
  const getMainWrapperProps = (0, import_react53.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "main-wrapper",
        className: slots.mainWrapper({
          class: clsx(classNames == null ? void 0 : classNames.mainWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.mainWrapper]
  );
  const getHelperWrapperProps = (0, import_react53.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "helper-wrapper",
        className: slots.helperWrapper({
          class: clsx(classNames == null ? void 0 : classNames.helperWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.helperWrapper]
  );
  const getDescriptionProps = (0, import_react53.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        ...descriptionProps,
        "data-slot": "description",
        className: slots.description({ class: clsx(classNames == null ? void 0 : classNames.description, props2 == null ? void 0 : props2.className) })
      };
    },
    [slots, classNames == null ? void 0 : classNames.description]
  );
  const getErrorMessageProps = (0, import_react53.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        ...errorMessageProps,
        "data-slot": "error-message",
        className: slots.errorMessage({ class: clsx(classNames == null ? void 0 : classNames.errorMessage, props2 == null ? void 0 : props2.className) })
      };
    },
    [slots, errorMessageProps, classNames == null ? void 0 : classNames.errorMessage]
  );
  const getClearButtonProps = (0, import_react53.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        role: "button",
        tabIndex: 0,
        "aria-label": "clear input",
        "data-slot": "clear-button",
        "data-focus-visible": dataAttr(isClearButtonFocusVisible),
        className: slots.clearButton({ class: clsx(classNames == null ? void 0 : classNames.clearButton, props2 == null ? void 0 : props2.className) }),
        ...$3ef42575df84b30b$export$9d1611c77c2fe928(clearPressProps, clearFocusProps)
      };
    },
    [slots, isClearButtonFocusVisible, clearPressProps, clearFocusProps, classNames == null ? void 0 : classNames.clearButton]
  );
  return {
    Component,
    classNames,
    domRef,
    label,
    description,
    startContent,
    endContent,
    labelPlacement,
    isClearable,
    hasHelper,
    hasStartContent,
    isLabelOutside,
    isOutsideLeft,
    isLabelOutsideAsPlaceholder,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    hasPlaceholder,
    isInvalid,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getMainWrapperProps,
    getInputWrapperProps,
    getInnerWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps
  };
}

// node_modules/@nextui-org/shared-icons/dist/chunk-6O2NYG7W.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-D7KR3R5S.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-3KV3RZ3C.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-W5SCNTSN.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-O65ECHHD.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-DF2IDUIR.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-F2DAVTM3.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-NXV7NGR3.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-T2EG23QZ.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-DIGVROZI.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-TAQLMOFL.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-BJ4U5HLX.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-CQZP7JER.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-M4HZWITS.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-4CUIXA2N.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-74IIVLS4.mjs
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-LUENRYJZ.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-C4AGHOLG.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-AZSWQWCV.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-OG4N5BYW.mjs
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-N63WUTHU.mjs
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-RDECS4HA.mjs
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-E6UBK7SP.mjs
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-Z3FKEITW.mjs
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-NDD37WXM.mjs
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-GWSPO6AT.mjs
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-VRKAJVF2.mjs
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-MQHFHAHG.mjs
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-AXKFGFLQ.mjs
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-65C5BFX4.mjs
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-57XIBYQE.mjs
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-UMZA7SPC.mjs
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-2723QZDQ.mjs
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-LQ7V7SFR.mjs
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-VFECWIRF.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-OTX7J53G.mjs
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-ZFNQRZXI.mjs
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-M5FBVHRQ.mjs
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-SX4NWTRP.mjs
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-ZNORX7MG.mjs
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-TQ5NV33I.mjs
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-ZXYURTAY.mjs
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-OH2E76JR.mjs
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-M3MASYO7.mjs
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var CloseFilledIcon = (props) => (0, import_jsx_runtime44.jsx)(
  "svg",
  {
    "aria-hidden": "true",
    focusable: "false",
    height: "1em",
    role: "presentation",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: (0, import_jsx_runtime44.jsx)(
      "path",
      {
        d: "M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",
        fill: "currentColor"
      }
    )
  }
);

// node_modules/@nextui-org/shared-icons/dist/chunk-LJROZDOV.mjs
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-ZXDZZS7M.mjs
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-24KJWBGA.mjs
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-6SIT7J74.mjs
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-BU32PI3O.mjs
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-YA3R5U3J.mjs
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-NS3FXBQF.mjs
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-TWGNUALX.mjs
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-SJODKNZO.mjs
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-FJH2EZEY.mjs
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-FVWMVR6N.mjs
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-7F3ZLNJ6.mjs
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-534KRDYK.mjs
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/shared-icons/dist/chunk-5SI6FX4K.mjs
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nextui-org/input/dist/chunk-IR2E3HZF.mjs
var import_react54 = __toESM(require_react(), 1);
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var Input = forwardRef((props, ref) => {
  const {
    Component,
    label,
    description,
    isClearable,
    startContent,
    endContent,
    labelPlacement,
    hasHelper,
    isOutsideLeft,
    shouldLabelBeOutside,
    errorMessage,
    isInvalid,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getMainWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps
  } = useInput({ ...props, ref });
  const labelContent = label ? (0, import_jsx_runtime59.jsx)("label", { ...getLabelProps(), children: label }) : null;
  const end = (0, import_react54.useMemo)(() => {
    if (isClearable) {
      return (0, import_jsx_runtime59.jsx)("span", { ...getClearButtonProps(), children: endContent || (0, import_jsx_runtime59.jsx)(CloseFilledIcon, {}) });
    }
    return endContent;
  }, [isClearable, getClearButtonProps]);
  const helperWrapper = (0, import_react54.useMemo)(() => {
    if (!hasHelper)
      return null;
    return (0, import_jsx_runtime59.jsx)("div", { ...getHelperWrapperProps(), children: isInvalid && errorMessage ? (0, import_jsx_runtime59.jsx)("div", { ...getErrorMessageProps(), children: errorMessage }) : description ? (0, import_jsx_runtime59.jsx)("div", { ...getDescriptionProps(), children: description }) : null });
  }, [
    hasHelper,
    isInvalid,
    errorMessage,
    description,
    getHelperWrapperProps,
    getErrorMessageProps,
    getDescriptionProps
  ]);
  const innerWrapper = (0, import_react54.useMemo)(() => {
    return (0, import_jsx_runtime59.jsxs)("div", { ...getInnerWrapperProps(), children: [
      startContent,
      (0, import_jsx_runtime59.jsx)("input", { ...getInputProps() }),
      end
    ] });
  }, [startContent, end, getInputProps, getInnerWrapperProps]);
  const mainWrapper = (0, import_react54.useMemo)(() => {
    if (shouldLabelBeOutside) {
      return (0, import_jsx_runtime59.jsxs)("div", { ...getMainWrapperProps(), children: [
        (0, import_jsx_runtime59.jsxs)("div", { ...getInputWrapperProps(), children: [
          !isOutsideLeft ? labelContent : null,
          innerWrapper
        ] }),
        helperWrapper
      ] });
    }
    return (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [
      (0, import_jsx_runtime59.jsxs)("div", { ...getInputWrapperProps(), children: [
        labelContent,
        innerWrapper
      ] }),
      helperWrapper
    ] });
  }, [
    labelPlacement,
    helperWrapper,
    shouldLabelBeOutside,
    labelContent,
    innerWrapper,
    errorMessage,
    description,
    getMainWrapperProps,
    getInputWrapperProps,
    getErrorMessageProps,
    getDescriptionProps
  ]);
  return (0, import_jsx_runtime59.jsxs)(Component, { ...getBaseProps(), children: [
    isOutsideLeft ? labelContent : null,
    mainWrapper
  ] });
});
Input.displayName = "NextUI.Input";
var input_default = Input;

// node_modules/@nextui-org/input/dist/chunk-5NPBG2C5.mjs
var import_react57 = __toESM(require_react(), 1);

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r3 in t) ({}).hasOwnProperty.call(t, r3) && (n[r3] = t[r3]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r3, e) {
  if (null == r3) return {};
  var t = {};
  for (var n in r3) if ({}.hasOwnProperty.call(r3, n)) {
    if (e.includes(n)) continue;
    t[n] = r3[n];
  }
  return t;
}

// node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js
var React2 = __toESM(require_react());

// node_modules/use-latest/dist/use-latest.esm.js
var React = __toESM(require_react());

// node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react55 = __toESM(require_react());
var index = import_react55.useLayoutEffect;
var use_isomorphic_layout_effect_browser_esm_default = index;

// node_modules/use-latest/dist/use-latest.esm.js
var useLatest = function useLatest2(value) {
  var ref = React.useRef(value);
  use_isomorphic_layout_effect_browser_esm_default(function() {
    ref.current = value;
  });
  return ref;
};

// node_modules/use-composed-ref/dist/use-composed-ref.esm.js
var import_react56 = __toESM(require_react());
var updateRef = function updateRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  ref.current = value;
};
var useComposedRef = function useComposedRef2(libRef, userRef) {
  var prevUserRef = (0, import_react56.useRef)();
  return (0, import_react56.useCallback)(function(instance) {
    libRef.current = instance;
    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }
    prevUserRef.current = userRef;
    if (!userRef) {
      return;
    }
    updateRef(userRef, instance);
  }, [userRef]);
};
var use_composed_ref_esm_default = useComposedRef;

// node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js
var HIDDEN_TEXTAREA_STYLE = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0",
  display: "block"
};
var forceHiddenStyles = function forceHiddenStyles2(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
};
var forceHiddenStyles$1 = forceHiddenStyles;
var hiddenTextarea = null;
var getHeight = function getHeight2(node, sizingData) {
  var height = node.scrollHeight;
  if (sizingData.sizingStyle.boxSizing === "border-box") {
    return height + sizingData.borderSize;
  }
  return height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }
  if (maxRows === void 0) {
    maxRows = Infinity;
  }
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tabindex", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    forceHiddenStyles$1(hiddenTextarea);
  }
  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }
  var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function(_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles$1(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = value;
  height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = "x";
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;
  if (boxSizing === "border-box") {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  if (boxSizing === "border-box") {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}
var noop = function noop2() {
};
var pick = function pick2(props, obj) {
  return props.reduce(function(acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};
var SIZING_STYLE = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
];
var isIE = !!document.documentElement.currentStyle;
var getSizingData = function getSizingData2(node) {
  var style = window.getComputedStyle(node);
  if (style === null) {
    return null;
  }
  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing;
  if (boxSizing === "") {
    return null;
  }
  if (isIE && boxSizing === "border-box") {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px";
  }
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle,
    paddingSize,
    borderSize
  };
};
var getSizingData$1 = getSizingData;
function useListener(target, type, listener) {
  var latestListener = useLatest(listener);
  React2.useLayoutEffect(function() {
    var handler = function handler2(ev) {
      return latestListener.current(ev);
    };
    if (!target) {
      return;
    }
    target.addEventListener(type, handler);
    return function() {
      return target.removeEventListener(type, handler);
    };
  }, []);
}
var useWindowResizeListener = function useWindowResizeListener2(listener) {
  useListener(window, "resize", listener);
};
var useFontsLoadedListener = function useFontsLoadedListener2(listener) {
  useListener(document.fonts, "loadingdone", listener);
};
var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"];
var TextareaAutosize = function TextareaAutosize2(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  if (props.style) {
    if ("maxHeight" in props.style) {
      throw new Error("Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.");
    }
    if ("minHeight" in props.style) {
      throw new Error("Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.");
    }
  }
  var isControlled = props.value !== void 0;
  var libRef = React2.useRef(null);
  var ref = use_composed_ref_esm_default(libRef, userRef);
  var heightRef = React2.useRef(0);
  var measurementsCacheRef = React2.useRef();
  var resizeTextarea = function resizeTextarea2() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (!nodeSizingData) {
      return;
    }
    measurementsCacheRef.current = nodeSizingData;
    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty("height", height + "px", "important");
      onHeightChange(height, {
        rowHeight
      });
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };
  {
    React2.useLayoutEffect(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
    useFontsLoadedListener(resizeTextarea);
    return React2.createElement("textarea", _extends({}, props, {
      onChange: handleChange,
      ref
    }));
  }
};
var index2 = React2.forwardRef(TextareaAutosize);

// node_modules/@nextui-org/input/dist/chunk-5NPBG2C5.mjs
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var Textarea = forwardRef(
  ({
    style,
    minRows = 3,
    maxRows = 8,
    cacheMeasurements = false,
    disableAutosize = false,
    onHeightChange,
    ...otherProps
  }, ref) => {
    const {
      Component,
      label,
      description,
      startContent,
      endContent,
      hasHelper,
      shouldLabelBeOutside,
      shouldLabelBeInside,
      isInvalid,
      errorMessage,
      getBaseProps,
      getLabelProps,
      getInputProps,
      getInnerWrapperProps,
      getInputWrapperProps,
      getHelperWrapperProps,
      getDescriptionProps,
      getErrorMessageProps
    } = useInput({ ...otherProps, ref, isMultiline: true });
    const [hasMultipleRows, setIsHasMultipleRows] = (0, import_react57.useState)(minRows > 1);
    const [isLimitReached, setIsLimitReached] = (0, import_react57.useState)(false);
    const labelContent = label ? (0, import_jsx_runtime60.jsx)("label", { ...getLabelProps(), children: label }) : null;
    const inputProps = getInputProps();
    const handleHeightChange = (height, meta) => {
      if (minRows === 1) {
        setIsHasMultipleRows(height >= meta.rowHeight * 2);
      }
      if (maxRows > minRows) {
        const limitReached = height >= maxRows * meta.rowHeight;
        setIsLimitReached(limitReached);
      }
      onHeightChange == null ? void 0 : onHeightChange(height, meta);
    };
    const content = disableAutosize ? (0, import_jsx_runtime60.jsx)("textarea", { ...inputProps, style: $3ef42575df84b30b$export$9d1611c77c2fe928(inputProps.style, style != null ? style : {}) }) : (0, import_jsx_runtime60.jsx)(
      index2,
      {
        ...inputProps,
        cacheMeasurements,
        "data-hide-scroll": dataAttr(!isLimitReached),
        maxRows,
        minRows,
        style: $3ef42575df84b30b$export$9d1611c77c2fe928(inputProps.style, style != null ? style : {}),
        onHeightChange: handleHeightChange
      }
    );
    const innerWrapper = (0, import_react57.useMemo)(() => {
      if (startContent || endContent) {
        return (0, import_jsx_runtime60.jsxs)("div", { ...getInnerWrapperProps(), children: [
          startContent,
          content,
          endContent
        ] });
      }
      return (0, import_jsx_runtime60.jsx)("div", { ...getInnerWrapperProps(), children: content });
    }, [startContent, inputProps, endContent, getInnerWrapperProps]);
    return (0, import_jsx_runtime60.jsxs)(Component, { ...getBaseProps(), children: [
      shouldLabelBeOutside ? labelContent : null,
      (0, import_jsx_runtime60.jsxs)("div", { ...getInputWrapperProps(), "data-has-multiple-rows": dataAttr(hasMultipleRows), children: [
        shouldLabelBeInside ? labelContent : null,
        innerWrapper
      ] }),
      hasHelper ? (0, import_jsx_runtime60.jsx)("div", { ...getHelperWrapperProps(), children: isInvalid && errorMessage ? (0, import_jsx_runtime60.jsx)("div", { ...getErrorMessageProps(), children: errorMessage }) : description ? (0, import_jsx_runtime60.jsx)("div", { ...getDescriptionProps(), children: description }) : null }) : null
    ] });
  }
);
Textarea.displayName = "NextUI.Textarea";
var textarea_default = Textarea;
export {
  input_default as Input,
  textarea_default as Textarea,
  useInput
};
//# sourceMappingURL=@nextui-org_input.js.map
