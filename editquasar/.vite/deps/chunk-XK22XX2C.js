import {
  getOverlayAlpha_default
} from "./chunk-YCDGW4RJ.js";
import {
  ThemeProvider_default,
  createCssVarsProvider,
  createGetCssVar,
  prepareCssVars_default
} from "./chunk-QQK7ZWLF.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  createTheme_default2 as createTheme_default,
  createTypography,
  deepmerge,
  defaultSxConfig_default,
  identifier_default,
  init_createMixins,
  init_createTheme2 as init_createTheme,
  init_createTransitions,
  init_createTypography,
  init_deepmerge,
  init_extends,
  init_formatMuiErrorMessage,
  init_identifier,
  init_objectWithoutPropertiesLoose,
  init_styleFunctionSx,
  init_styled,
  init_useThemeProps2 as init_useThemeProps,
  require_colorManipulator,
  require_jsx_runtime,
  require_prop_types,
  styleFunctionSx_default
} from "./chunk-C5GQKIFJ.js";
import {
  __toESM,
  require_react
} from "./chunk-6EPYQA3G.js";

// node_modules/@mui/material/styles/index.js
init_formatMuiErrorMessage();
init_identifier();

// node_modules/@mui/material/styles/adaptV4Theme.js
init_extends();
init_objectWithoutPropertiesLoose();

// node_modules/@mui/material/styles/index.js
init_createTheme();

// node_modules/@mui/material/styles/createMuiStrictModeTheme.js
init_deepmerge();
init_createTheme();

// node_modules/@mui/material/styles/responsiveFontSizes.js
init_extends();
init_formatMuiErrorMessage();

// node_modules/@mui/material/styles/index.js
init_createTransitions();
init_useThemeProps();
init_styled();
init_styled();

// node_modules/@mui/material/styles/ThemeProvider.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_identifier();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["theme"];
function ThemeProvider(_ref) {
  let {
    theme: themeInput
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const scopedTheme = themeInput[identifier_default];
  return (0, import_jsx_runtime.jsx)(ThemeProvider_default, _extends({}, props, {
    themeId: scopedTheme ? identifier_default : void 0,
    theme: scopedTheme || themeInput
  }));
}
true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: import_prop_types.default.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.func]).isRequired
} : void 0;

// node_modules/@mui/material/styles/makeStyles.js
init_formatMuiErrorMessage();

// node_modules/@mui/material/styles/withStyles.js
init_formatMuiErrorMessage();

// node_modules/@mui/material/styles/withTheme.js
init_formatMuiErrorMessage();

// node_modules/@mui/material/styles/CssVarsProvider.js
init_extends();
init_styleFunctionSx();

// node_modules/@mui/material/styles/experimental_extendTheme.js
init_extends();
init_objectWithoutPropertiesLoose();
init_deepmerge();
init_styleFunctionSx();
var import_colorManipulator = __toESM(require_colorManipulator());

// node_modules/@mui/material/styles/shouldSkipGeneratingVar.js
function shouldSkipGeneratingVar(keys) {
  var _keys$;
  return !!keys[0].match(/(cssVarPrefix|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
  keys[0] === "palette" && !!((_keys$ = keys[1]) != null && _keys$.match(/(mode|contrastThreshold|tonalOffset)/));
}

// node_modules/@mui/material/styles/experimental_extendTheme.js
init_createTheme();
var _excluded2 = ["colorSchemes", "cssVarPrefix", "shouldSkipGeneratingVar"];
var _excluded22 = ["palette"];
var defaultDarkOverlays = [...Array(25)].map((_, index) => {
  if (index === 0) {
    return void 0;
  }
  const overlay = getOverlayAlpha_default(index);
  return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function assignNode(obj, keys) {
  keys.forEach((k) => {
    if (!obj[k]) {
      obj[k] = {};
    }
  });
}
function setColor(obj, key, defaultValue) {
  if (!obj[key] && defaultValue) {
    obj[key] = defaultValue;
  }
}
function toRgb(color) {
  if (!color || !color.startsWith("hsl")) {
    return color;
  }
  return (0, import_colorManipulator.hslToRgb)(color);
}
function setColorChannel(obj, key) {
  if (!(`${key}Channel` in obj)) {
    obj[`${key}Channel`] = (0, import_colorManipulator.private_safeColorChannel)(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
  }
}
var silent = (fn) => {
  try {
    return fn();
  } catch (error) {
  }
  return void 0;
};
var createGetCssVar2 = (cssVarPrefix = "mui") => createGetCssVar(cssVarPrefix);
function extendTheme(options = {}, ...args) {
  var _colorSchemesInput$li, _colorSchemesInput$da, _colorSchemesInput$li2, _colorSchemesInput$li3, _colorSchemesInput$da2, _colorSchemesInput$da3;
  const {
    colorSchemes: colorSchemesInput = {},
    cssVarPrefix = "mui",
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2 = shouldSkipGeneratingVar
  } = options, input = _objectWithoutPropertiesLoose(options, _excluded2);
  const getCssVar = createGetCssVar2(cssVarPrefix);
  const _createThemeWithoutVa = createTheme_default(_extends({}, input, colorSchemesInput.light && {
    palette: (_colorSchemesInput$li = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li.palette
  })), {
    palette: lightPalette
  } = _createThemeWithoutVa, muiTheme = _objectWithoutPropertiesLoose(_createThemeWithoutVa, _excluded22);
  const {
    palette: darkPalette
  } = createTheme_default({
    palette: _extends({
      mode: "dark"
    }, (_colorSchemesInput$da = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da.palette)
  });
  let theme = _extends({}, muiTheme, {
    cssVarPrefix,
    getCssVar,
    colorSchemes: _extends({}, colorSchemesInput, {
      light: _extends({}, colorSchemesInput.light, {
        palette: lightPalette,
        opacity: _extends({
          inputPlaceholder: 0.42,
          inputUnderline: 0.42,
          switchTrackDisabled: 0.12,
          switchTrack: 0.38
        }, (_colorSchemesInput$li2 = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li2.opacity),
        overlays: ((_colorSchemesInput$li3 = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li3.overlays) || []
      }),
      dark: _extends({}, colorSchemesInput.dark, {
        palette: darkPalette,
        opacity: _extends({
          inputPlaceholder: 0.5,
          inputUnderline: 0.7,
          switchTrackDisabled: 0.2,
          switchTrack: 0.3
        }, (_colorSchemesInput$da2 = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da2.opacity),
        overlays: ((_colorSchemesInput$da3 = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da3.overlays) || defaultDarkOverlays
      })
    })
  });
  Object.keys(theme.colorSchemes).forEach((key) => {
    const palette = theme.colorSchemes[key].palette;
    const setCssVarColor = (cssVar) => {
      const tokens = cssVar.split("-");
      const color = tokens[1];
      const colorToken = tokens[2];
      return getCssVar(cssVar, palette[color][colorToken]);
    };
    if (key === "light") {
      setColor(palette.common, "background", "#fff");
      setColor(palette.common, "onBackground", "#000");
    } else {
      setColor(palette.common, "background", "#000");
      setColor(palette.common, "onBackground", "#fff");
    }
    assignNode(palette, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]);
    if (key === "light") {
      setColor(palette.Alert, "errorColor", (0, import_colorManipulator.private_safeDarken)(palette.error.light, 0.6));
      setColor(palette.Alert, "infoColor", (0, import_colorManipulator.private_safeDarken)(palette.info.light, 0.6));
      setColor(palette.Alert, "successColor", (0, import_colorManipulator.private_safeDarken)(palette.success.light, 0.6));
      setColor(palette.Alert, "warningColor", (0, import_colorManipulator.private_safeDarken)(palette.warning.light, 0.6));
      setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-main"));
      setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-main"));
      setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-main"));
      setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-main"));
      setColor(palette.Alert, "errorFilledColor", silent(() => lightPalette.getContrastText(palette.error.main)));
      setColor(palette.Alert, "infoFilledColor", silent(() => lightPalette.getContrastText(palette.info.main)));
      setColor(palette.Alert, "successFilledColor", silent(() => lightPalette.getContrastText(palette.success.main)));
      setColor(palette.Alert, "warningFilledColor", silent(() => lightPalette.getContrastText(palette.warning.main)));
      setColor(palette.Alert, "errorStandardBg", (0, import_colorManipulator.private_safeLighten)(palette.error.light, 0.9));
      setColor(palette.Alert, "infoStandardBg", (0, import_colorManipulator.private_safeLighten)(palette.info.light, 0.9));
      setColor(palette.Alert, "successStandardBg", (0, import_colorManipulator.private_safeLighten)(palette.success.light, 0.9));
      setColor(palette.Alert, "warningStandardBg", (0, import_colorManipulator.private_safeLighten)(palette.warning.light, 0.9));
      setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
      setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
      setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
      setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
      setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-100"));
      setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-400"));
      setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-300"));
      setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-A100"));
      setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-400"));
      setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-700"));
      setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-700"));
      setColor(palette.FilledInput, "bg", "rgba(0, 0, 0, 0.06)");
      setColor(palette.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)");
      setColor(palette.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)");
      setColor(palette.LinearProgress, "primaryBg", (0, import_colorManipulator.private_safeLighten)(palette.primary.main, 0.62));
      setColor(palette.LinearProgress, "secondaryBg", (0, import_colorManipulator.private_safeLighten)(palette.secondary.main, 0.62));
      setColor(palette.LinearProgress, "errorBg", (0, import_colorManipulator.private_safeLighten)(palette.error.main, 0.62));
      setColor(palette.LinearProgress, "infoBg", (0, import_colorManipulator.private_safeLighten)(palette.info.main, 0.62));
      setColor(palette.LinearProgress, "successBg", (0, import_colorManipulator.private_safeLighten)(palette.success.main, 0.62));
      setColor(palette.LinearProgress, "warningBg", (0, import_colorManipulator.private_safeLighten)(palette.warning.main, 0.62));
      setColor(palette.Skeleton, "bg", `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.11)`);
      setColor(palette.Slider, "primaryTrack", (0, import_colorManipulator.private_safeLighten)(palette.primary.main, 0.62));
      setColor(palette.Slider, "secondaryTrack", (0, import_colorManipulator.private_safeLighten)(palette.secondary.main, 0.62));
      setColor(palette.Slider, "errorTrack", (0, import_colorManipulator.private_safeLighten)(palette.error.main, 0.62));
      setColor(palette.Slider, "infoTrack", (0, import_colorManipulator.private_safeLighten)(palette.info.main, 0.62));
      setColor(palette.Slider, "successTrack", (0, import_colorManipulator.private_safeLighten)(palette.success.main, 0.62));
      setColor(palette.Slider, "warningTrack", (0, import_colorManipulator.private_safeLighten)(palette.warning.main, 0.62));
      const snackbarContentBackground = (0, import_colorManipulator.private_safeEmphasize)(palette.background.default, 0.8);
      setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
      setColor(palette.SnackbarContent, "color", silent(() => lightPalette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, "fabHoverBg", (0, import_colorManipulator.private_safeEmphasize)(palette.background.paper, 0.15));
      setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-400"));
      setColor(palette.StepContent, "border", setCssVarColor("palette-grey-400"));
      setColor(palette.Switch, "defaultColor", setCssVarColor("palette-common-white"));
      setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-100"));
      setColor(palette.Switch, "primaryDisabledColor", (0, import_colorManipulator.private_safeLighten)(palette.primary.main, 0.62));
      setColor(palette.Switch, "secondaryDisabledColor", (0, import_colorManipulator.private_safeLighten)(palette.secondary.main, 0.62));
      setColor(palette.Switch, "errorDisabledColor", (0, import_colorManipulator.private_safeLighten)(palette.error.main, 0.62));
      setColor(palette.Switch, "infoDisabledColor", (0, import_colorManipulator.private_safeLighten)(palette.info.main, 0.62));
      setColor(palette.Switch, "successDisabledColor", (0, import_colorManipulator.private_safeLighten)(palette.success.main, 0.62));
      setColor(palette.Switch, "warningDisabledColor", (0, import_colorManipulator.private_safeLighten)(palette.warning.main, 0.62));
      setColor(palette.TableCell, "border", (0, import_colorManipulator.private_safeLighten)((0, import_colorManipulator.private_safeAlpha)(palette.divider, 1), 0.88));
      setColor(palette.Tooltip, "bg", (0, import_colorManipulator.private_safeAlpha)(palette.grey[700], 0.92));
    } else {
      setColor(palette.Alert, "errorColor", (0, import_colorManipulator.private_safeLighten)(palette.error.light, 0.6));
      setColor(palette.Alert, "infoColor", (0, import_colorManipulator.private_safeLighten)(palette.info.light, 0.6));
      setColor(palette.Alert, "successColor", (0, import_colorManipulator.private_safeLighten)(palette.success.light, 0.6));
      setColor(palette.Alert, "warningColor", (0, import_colorManipulator.private_safeLighten)(palette.warning.light, 0.6));
      setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-dark"));
      setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-dark"));
      setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-dark"));
      setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-dark"));
      setColor(palette.Alert, "errorFilledColor", silent(() => darkPalette.getContrastText(palette.error.dark)));
      setColor(palette.Alert, "infoFilledColor", silent(() => darkPalette.getContrastText(palette.info.dark)));
      setColor(palette.Alert, "successFilledColor", silent(() => darkPalette.getContrastText(palette.success.dark)));
      setColor(palette.Alert, "warningFilledColor", silent(() => darkPalette.getContrastText(palette.warning.dark)));
      setColor(palette.Alert, "errorStandardBg", (0, import_colorManipulator.private_safeDarken)(palette.error.light, 0.9));
      setColor(palette.Alert, "infoStandardBg", (0, import_colorManipulator.private_safeDarken)(palette.info.light, 0.9));
      setColor(palette.Alert, "successStandardBg", (0, import_colorManipulator.private_safeDarken)(palette.success.light, 0.9));
      setColor(palette.Alert, "warningStandardBg", (0, import_colorManipulator.private_safeDarken)(palette.warning.light, 0.9));
      setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
      setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
      setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
      setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
      setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-900"));
      setColor(palette.AppBar, "darkBg", setCssVarColor("palette-background-paper"));
      setColor(palette.AppBar, "darkColor", setCssVarColor("palette-text-primary"));
      setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-600"));
      setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-800"));
      setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-700"));
      setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-700"));
      setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-300"));
      setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-300"));
      setColor(palette.FilledInput, "bg", "rgba(255, 255, 255, 0.09)");
      setColor(palette.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)");
      setColor(palette.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)");
      setColor(palette.LinearProgress, "primaryBg", (0, import_colorManipulator.private_safeDarken)(palette.primary.main, 0.5));
      setColor(palette.LinearProgress, "secondaryBg", (0, import_colorManipulator.private_safeDarken)(palette.secondary.main, 0.5));
      setColor(palette.LinearProgress, "errorBg", (0, import_colorManipulator.private_safeDarken)(palette.error.main, 0.5));
      setColor(palette.LinearProgress, "infoBg", (0, import_colorManipulator.private_safeDarken)(palette.info.main, 0.5));
      setColor(palette.LinearProgress, "successBg", (0, import_colorManipulator.private_safeDarken)(palette.success.main, 0.5));
      setColor(palette.LinearProgress, "warningBg", (0, import_colorManipulator.private_safeDarken)(palette.warning.main, 0.5));
      setColor(palette.Skeleton, "bg", `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.13)`);
      setColor(palette.Slider, "primaryTrack", (0, import_colorManipulator.private_safeDarken)(palette.primary.main, 0.5));
      setColor(palette.Slider, "secondaryTrack", (0, import_colorManipulator.private_safeDarken)(palette.secondary.main, 0.5));
      setColor(palette.Slider, "errorTrack", (0, import_colorManipulator.private_safeDarken)(palette.error.main, 0.5));
      setColor(palette.Slider, "infoTrack", (0, import_colorManipulator.private_safeDarken)(palette.info.main, 0.5));
      setColor(palette.Slider, "successTrack", (0, import_colorManipulator.private_safeDarken)(palette.success.main, 0.5));
      setColor(palette.Slider, "warningTrack", (0, import_colorManipulator.private_safeDarken)(palette.warning.main, 0.5));
      const snackbarContentBackground = (0, import_colorManipulator.private_safeEmphasize)(palette.background.default, 0.98);
      setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
      setColor(palette.SnackbarContent, "color", silent(() => darkPalette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, "fabHoverBg", (0, import_colorManipulator.private_safeEmphasize)(palette.background.paper, 0.15));
      setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-600"));
      setColor(palette.StepContent, "border", setCssVarColor("palette-grey-600"));
      setColor(palette.Switch, "defaultColor", setCssVarColor("palette-grey-300"));
      setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-600"));
      setColor(palette.Switch, "primaryDisabledColor", (0, import_colorManipulator.private_safeDarken)(palette.primary.main, 0.55));
      setColor(palette.Switch, "secondaryDisabledColor", (0, import_colorManipulator.private_safeDarken)(palette.secondary.main, 0.55));
      setColor(palette.Switch, "errorDisabledColor", (0, import_colorManipulator.private_safeDarken)(palette.error.main, 0.55));
      setColor(palette.Switch, "infoDisabledColor", (0, import_colorManipulator.private_safeDarken)(palette.info.main, 0.55));
      setColor(palette.Switch, "successDisabledColor", (0, import_colorManipulator.private_safeDarken)(palette.success.main, 0.55));
      setColor(palette.Switch, "warningDisabledColor", (0, import_colorManipulator.private_safeDarken)(palette.warning.main, 0.55));
      setColor(palette.TableCell, "border", (0, import_colorManipulator.private_safeDarken)((0, import_colorManipulator.private_safeAlpha)(palette.divider, 1), 0.68));
      setColor(palette.Tooltip, "bg", (0, import_colorManipulator.private_safeAlpha)(palette.grey[700], 0.92));
    }
    setColorChannel(palette.background, "default");
    setColorChannel(palette.background, "paper");
    setColorChannel(palette.common, "background");
    setColorChannel(palette.common, "onBackground");
    setColorChannel(palette, "divider");
    Object.keys(palette).forEach((color) => {
      const colors = palette[color];
      if (colors && typeof colors === "object") {
        if (colors.main) {
          setColor(palette[color], "mainChannel", (0, import_colorManipulator.private_safeColorChannel)(toRgb(colors.main)));
        }
        if (colors.light) {
          setColor(palette[color], "lightChannel", (0, import_colorManipulator.private_safeColorChannel)(toRgb(colors.light)));
        }
        if (colors.dark) {
          setColor(palette[color], "darkChannel", (0, import_colorManipulator.private_safeColorChannel)(toRgb(colors.dark)));
        }
        if (colors.contrastText) {
          setColor(palette[color], "contrastTextChannel", (0, import_colorManipulator.private_safeColorChannel)(toRgb(colors.contrastText)));
        }
        if (color === "text") {
          setColorChannel(palette[color], "primary");
          setColorChannel(palette[color], "secondary");
        }
        if (color === "action") {
          if (colors.active) {
            setColorChannel(palette[color], "active");
          }
          if (colors.selected) {
            setColorChannel(palette[color], "selected");
          }
        }
      }
    });
  });
  theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
  const parserConfig = {
    prefix: cssVarPrefix,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2
  };
  const {
    vars: themeVars,
    generateCssVars
  } = prepareCssVars_default(theme, parserConfig);
  theme.vars = themeVars;
  theme.generateCssVars = generateCssVars;
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar2;
  theme.unstable_sxConfig = _extends({}, defaultSxConfig_default, input == null ? void 0 : input.unstable_sxConfig);
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  return theme;
}

// node_modules/@mui/material/styles/CssVarsProvider.js
init_createTypography();

// node_modules/@mui/material/styles/excludeVariablesFromRoot.js
var excludeVariablesFromRoot = (cssVarPrefix) => [...[...Array(24)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}overlays-${index + 1}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkColor`];
var excludeVariablesFromRoot_default = excludeVariablesFromRoot;

// node_modules/@mui/material/styles/CssVarsProvider.js
init_identifier();
var defaultTheme = extendTheme();
var {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} = createCssVarsProvider({
  themeId: identifier_default,
  theme: defaultTheme,
  attribute: "data-mui-color-scheme",
  modeStorageKey: "mui-mode",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultColorScheme: {
    light: "light",
    dark: "dark"
  },
  resolveTheme: (theme) => {
    const newTheme = _extends({}, theme, {
      typography: createTypography(theme.palette, theme.typography)
    });
    newTheme.unstable_sx = function sx(props) {
      return styleFunctionSx_default({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  },
  excludeVariablesFromRoot: excludeVariablesFromRoot_default
});

// node_modules/@mui/material/styles/index.js
init_createTypography();
init_createMixins();
//# sourceMappingURL=chunk-XK22XX2C.js.map
