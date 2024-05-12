import boxShadow from "./components/functions/boxShadow";
import hexToRgb from "./components/functions/hexToRgb";
import linearGradient from "./components/functions/linearGradient";
import pxToRem from "./components/functions/pxToRem";
import rgba from "./components/functions/rgba";
import borders from "./components/base/borders";

 

export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
    },
    primary: {
      50: "#E6FBFF",
      100: "##A2C4F5",
      200: "#A2C4F5",
      300: "#90BAF5",
      400: "#7EAEF2",
      500: "#69A1F0",
      600: "#5192ED",
      700: "#5192e0",
      800: "#5192ED",
      900: "#001519",
    },
  };
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      borders: { ...borders },
      functions: {
        boxShadow,
        hexToRgb,
        linearGradient,
        pxToRem,
        rgba,
      },
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // palette values for light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },
      typography: {
        fontFamily: ['Poppins','sans-serif'].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ['Poppins','sans-serif'].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ['Poppins','sans-serif'].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ['Poppins','sans-serif'].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ['Poppins','sans-serif'].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ['Poppins','sans-serif'].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ['Poppins','sans-serif'].join(","),
          fontSize: 14,
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: 'transparent', // AppBar background color
              boxShadow: 'none', // Remove shadow from AppBar
              // Add more styles if needed
            },
          },
        },
    }
    }
  };
  
  