

import { Button, createTheme, MantineThemeOverride, virtualColor } from '@mantine/core';

const themeOverrides: MantineThemeOverride = {
  fontFamilyMonospace: "Geist Mono",
  fontFamily: "Geist, sans-serif",
  fontSizes: {
    xxs: '0.625rem',  // 10px
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
  },
  lineHeights: {
    xxs: '1.25',      // 12.5px ÷ 10px = 1.25
    xs: '1.333',      // 16px ÷ 12px = 1.333
    sm: '1.429',      // 20px ÷ 14px = 1.429
    md: '1.5',        // 24px ÷ 16px = 1.5
    lg: '1.556',      // 28px ÷ 18px = 1.556
    xl: '1.6',        // 32px ÷ 20px = 1.6
  },
  headings: {
    // Set Geist as the heading font family
    fontFamily: 'Geist, sans-serif',

    // Configure individual heading sizes
    sizes: {
      h1: {
        fontSize: '4.291rem',    // 68.66px
        fontWeight: '700',
        lineHeight: '1.2',       // Calculate based on your needs
      },
      h2: {
        fontSize: '3.433rem',    // 54.93px
        fontWeight: '600',
        lineHeight: '1.25',
      },
      h3: {
        fontSize: '2.747rem',    // 43.95px
        fontWeight: '600',
        lineHeight: '1.3',
      },
      h4: {
        fontSize: '2.198rem',    // 35.16px
        fontWeight: '600',
        lineHeight: '1.35',
      },
      h5: {
        fontSize: '1.758rem',    // 28.13px
        fontWeight: '600',
        lineHeight: '1.4',
      },
      h6: {
        fontSize: '1.406rem',    // 22.5px
        fontWeight: '600',
        lineHeight: '1.45',
      },
    },
  },
  components: {
    // Button-specific font sizes
    // buttonFontSizes: {
    //   xs: '0.71875rem',  // 11.5px
    //   sm: '0.9rem',      // 14.4px
    //   md: '1rem',        // 16px
    //   lg: '1.125rem',    // 18px
    //   xl: '1.25rem',     // 20px
    // }
    // Button Line Heights (calculated as ratios)
    // buttonLineHeights: {
    //   xs: '1.391',       // 16px ÷ 11.5px = 1.391
    //   sm: '1.389',       // 20px ÷ 14.4px = 1.389
    //   md: '1.5',         // 24px ÷ 16px = 1.5
    //   lg: '1.556',       // 28px ÷ 18px = 1.556
    //   xl: '1.6',         // 32px ÷ 20px = 1.6
    // }
    Button: Button.extend({
      classNames: {
        root: "font-mono"
      },
      vars: (_, props) => {
        if (props.size === 'xs') {
          return {
            root: {
              '--button-line-height': '1.391',
              '--button-fz': '0.71875rem',
            },
          };
        }
        if (props.size === 'sm') {
          return {
            root: {
              '--button-line-height': '1.389',
              '--button-fz': '0.9rem',
            },
          };
        }
        if (props.size === 'md') {
          return {
            root: {
              '--button-line-height': '1.5',
              '--button-fz': '1rem',
            },
          };
        }
        if (props.size === 'lg') {
          return {
            root: {
              '--button-line-height': '1.556',
              '--button-fz': '1.125rem',
            },
          };
        }

        if (props.size === 'lg') {
          return {
            root: {
              '--button-line-height': '1.6',
              '--button-fz': '1.25rem',
            },
          };
        }
        return { root: {} };
      }
    }),
  },
}


export const theme = createTheme({
  ...themeOverrides,
  colors: {
    virtual: virtualColor({ name: 'virtual', dark: 'pink', light: 'cyan' }),
    'ocean-blue': [
      '#7AD1DD',
      '#5FCCDB',
      '#44CADC',
      '#2AC9DE',
      '#1AC2D9',
      '#11B7CD',
      '#09ADC3',
      '#0E99AC',
      '#128797',
      '#147885',
    ],
    'oklch-blue': [
      'oklch(96.27% 0.0217 238.66)',
      'oklch(92.66% 0.0429 240.01)',
      'oklch(86.02% 0.0827 241.66)',
      'oklch(78.2% 0.13 243.83)',
      'oklch(71.8% 0.1686 246.06)',
      'oklch(66.89% 0.1986 248.32)',
      'oklch(62.59% 0.2247 250.29)',
      'oklch(58.56% 0.2209 251.26)',
      'oklch(54.26% 0.2067 251.67)',
      'oklch(49.72% 0.1888 251.59)',
    ],
    'bright-pink': [
      '#F0BBDD',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#F13EAF',
      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ],
  },
});
