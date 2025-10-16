
import {
  MantineThemeOverride,
  PasswordInput,
  Input,
  Card,
  Button,
  Modal,
  ActionIcon,
  NavLink,
  Checkbox,
  Select,
  Switch,
  Menu,
} from "@mantine/core";

export const themeOverrides: MantineThemeOverride = {
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
    Menu: Menu.extend({
      classNames: {
        dropdown: "mapka-menu-dropdown",
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
        content: "mapka-modal",
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
