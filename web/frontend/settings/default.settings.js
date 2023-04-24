// const defImgGID = "gid://shopify/ImageSource/33689932398907";
// const defImgGID = "gid://shopify/MediaImage/33775004942651";

// the same gid://shopify/ImageSource/33784757584187 is
// gid://shopify/MediaImage/33775004942651
const defImgGID = null;

export const DEFAULT_SETTINGS = {
  customizations: {
    checkbox: {
      cornerRadius: "BASE",
    },
    control: {
      border: "FULL",
      color: "COLOR1",
      cornerRadius: "BASE",
      labelPosition: "INSIDE",
    },
    favicon: {
      mediaImageId: null,
    },
    global: {
      cornerRadius: "NONE",
      typography: {
        kerning: "BASE",
        letterCase: "NONE",
      },
    },
    header: {
      alignment: "START",
      banner: {
        mediaImageId: defImgGID,
      },
      logo: {
        image: {
          mediaImageId: defImgGID,
        },
        maxWidth: null,
      },
      position: "INLINE",
    },
    headingLevel1: {
      typography: {
        font: "PRIMARY",
        kerning: "BASE",
        letterCase: "NONE",
        size: "LARGE",
        weight: "BOLD",
      },
    },
    headingLevel2: {
      typography: {
        font: "PRIMARY",
        kerning: "BASE",
        letterCase: "NONE",
        size: "LARGE",
        weight: "BOLD",
      },
    },
    headingLevel3: {
      typography: {
        font: "SECONDARY",
        kerning: "BASE",
        letterCase: "NONE",
        size: "BASE",
        weight: "BOLD",
      },
    },
    main: {
      backgroundImage: {
        mediaImageId: defImgGID,
      },
    },
    merchandiseThumbnail: {},
    orderSummary: {
      backgroundImage: {
        mediaImageId: defImgGID,
      },
    },
    primaryButton: {
      background: "SOLID",
      blockPadding: "BASE",
      border: "NONE",
      cornerRadius: "BASE",
      inlinePadding: "BASE",
      typography: {
        font: "PRIMARY",
        kerning: "BASE",
        letterCase: "NONE",
        size: "BASE",
        weight: "BASE",
      },
    },
    secondaryButton: {
      background: "SOLID",
      blockPadding: "BASE",
      border: "NONE",
      cornerRadius: "BASE",
      inlinePadding: "BASE",
      typography: {
        font: "PRIMARY",
        kerning: "BASE",
        letterCase: "NONE",
        size: "BASE",
        weight: "BASE",
      },
    },
    select: {
      border: "FULL",
      typography: {
        font: "PRIMARY",
        kerning: "BASE",
        letterCase: "NONE",
        size: "BASE",
        weight: "BASE",
      },
    },
    textField: {
      border: "FULL",
      typography: {
        font: "PRIMARY",
        kerning: "BASE",
        weight: "BASE",
        letterCase: "NONE",
        size: "BASE",
      },
    },
  },
  designSystem: {
    colorPalette: {
      canvas: {
        accent: "#1878b9",
        background: "#ffffff",
        foreground: null,
      },
      color1: {
        accent: "#1878b9",
        background: "#ffffff",
        foreground: "#000000",
      },
      color2: {
        accent: "#1878b9",
        background: "#fafafa",
        foreground: "#000000",
      },
      critical: {
        accent: "#f55353",
        background: null,
        foreground: null,
      },
      interactive: {
        accent: null,
        background: null,
        foreground: "#1878b9",
      },
      primary: {
        accent: null,
        background: "#1878b9",
        foreground: "#ffffff",
      },
    },
    cornerRadius: {
      small: 2,
      base: 5,
      large: 10,
    },
    typography: {
      primary: {
        shopifyFontGroup: {
          baseWeight: 300,
          boldWeight: 700,
          name: "Agmena",
        },
      },
      secondary: {
        shopifyFontGroup: {
          baseWeight: 400,
          boldWeight: 900,
          name: "Alegreya",
        },
      },
      size: {
        base: 14.0,
        ratio: 1.2,
      },
    },
  },
};
