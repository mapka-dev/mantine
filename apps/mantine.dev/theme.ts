/* eslint-disable no-duplicate-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type {
  MantineThemeOverride,
  VariantColorsResolver,
} from "@mantine/core";
import {
  PasswordInput,
  Input,
  Card,
  Button,
  createTheme,
  virtualColor,
  Modal,
  ActionIcon,
  defaultVariantColorsResolver,
  parseThemeColor,
  NavLink,
  Checkbox,
  Select,
  Switch,
} from "@mantine/core";

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const { color, isLight } = parseThemeColor({
    color: input.color ?? input.theme.primaryColor,
    theme: input.theme,
  });

  if (input.variant === "default") {
    return {
      ...defaultResolvedColors,
      border: "2px solid black",
    };
  }

  if (input.variant === "filled") {
    return {
      ...defaultResolvedColors,
      border: "2px solid black",
      color: "light-dark(black, white)",
    };
  }

  if (input.variant === "outline") {
    const themeColor = input.theme.colors[color];

    if (themeColor) {
      return {
        ...defaultResolvedColors,
        border: `2px solid ${themeColor[7]}`,
      };
    }
    return {
      ...defaultResolvedColors,
      border: `2px solid ${color}`,
    };
  }
  return defaultResolvedColors;
};

const themeOverrides: MantineThemeOverride = {
  fontFamilyMonospace: "Geist Mono",
  primaryColor: "orange",
  fontFamily: "Geist, sans-serif",
  defaultRadius: "md",
  colors: {
    orange: [
      "#FEF9EC",
      "#FDF4DA",
      "#FDEFC7",
      "#FCE9B5",
      "#FBE3A2",
      "#FADE90",
      "#F9D97E",
      "#F9D36B",
      "#F8CD59",
      "#F7C846",
    ],
  },
  variantColorResolver,
  components: {
    Button: Button.extend({
      classNames: {
        root: "font-mono mapka-button",
      },
      vars: (_, __) => {
        return { root: {} };
      },
    }),
    NavLink: NavLink.extend({
      classNames: {
        root: "font-mono mapka-nav-link",
        label: "mapka-nav-link-label",
        section: "mapka-nav-link-section",
      },
    }),
    ActionIcon: ActionIcon.extend({
      classNames: {
        root: "mapka-action-icon",
      },
      vars: (_, __) => {
        return {
          root: {},
        };
      },
    }),
    Card: Card.extend({
      classNames: {
        root: "mapka-think-shadow",
      },
      vars: (_, __) => {
        return {
          root: {

          },
        };
      },
    }),
    Input: Input.extend({
      classNames: {
        input: "mapka-input",
      },
    }),
    PasswordInput: PasswordInput.extend({
      classNames: {
        input: "mapka-input",
      },
    }),
    Checkbox: Checkbox.extend({
      classNames: {
        input: "mapka-input",
      },
    }),
    Select: Select.extend({
      classNames: {
        dropdown: "mapka-select-dropdown",
      },
    }),
    Switch: Switch.extend({
      classNames: {
        track: "mapka-switch-track",
        thumb: "mapka-switch-thumb",
      },
    }),
    Modal: Modal.extend({
      classNames: {
        content: "mapka-think-shadow",
      },
      vars: (_, __) => {
        return {
          root: {

          },
        };
      },
    }),
  },
};

export const theme = createTheme({
  ...themeOverrides,
  colors: {
    ...themeOverrides.colors,
    "virtual": virtualColor({ name: "virtual", dark: "pink", light: "cyan" }),
    "ocean-blue": [
      "#7AD1DD",
      "#5FCCDB",
      "#44CADC",
      "#2AC9DE",
      "#1AC2D9",
      "#11B7CD",
      "#09ADC3",
      "#0E99AC",
      "#128797",
      "#147885",
    ],
    "oklch-blue": [
      "oklch(96.27% 0.0217 238.66)",
      "oklch(92.66% 0.0429 240.01)",
      "oklch(86.02% 0.0827 241.66)",
      "oklch(78.2% 0.13 243.83)",
      "oklch(71.8% 0.1686 246.06)",
      "oklch(66.89% 0.1986 248.32)",
      "oklch(62.59% 0.2247 250.29)",
      "oklch(58.56% 0.2209 251.26)",
      "oklch(54.26% 0.2067 251.67)",
      "oklch(49.72% 0.1888 251.59)",
    ],
    "bright-pink": [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },
});
