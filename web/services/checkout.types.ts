type ICornerRadius = null | "BASE" | "LARGE" | "NONE" | "SMALL";

type IChexbox = null | {
  cornerRadius: ICornerRadius;
};

type IControl = null | {
  border: null | "FULL" | "NONE";
  color: null | "COLOR1" | "COLOR2" | "TRANSPARENT";
  cornerRadius: ICornerRadius;
  labelPosition: null | "INSIDE" | "OUTSIDE";
};

type IImage = null | {
  altText: null | string;
  url: null | string;
};

type IImageContainer = null | {
  image: IImage;
};

type ITypography = {
  font: null | "PRIMARY" | "SECONDARY";
  kerning: null | "BASE" | "EXTRA_LOOSE" | "LOOSE";
  letterCase: null | "LOWER" | "NONE" | "TITLE" | "UPPER";
  // todo
};

export interface ICheckoutBranding {
  checkoutBranding: {
    customizations: null | {
      checkbox: IChexbox;
      control: IControl;
      favicon: IImageContainer;
      global: {
        cornerRadius: ICornerRadius;
        typography: Pick<ITypography, "kerning" | "letterCase">;
      };
      header: {
        alignment: "END";
        banner: null;
        logo: null;
        position: "START";
      };
      headingLevel1: {
        typography: {
          font: "SECONDARY";
          kerning: null;
          letterCase: "UPPER";
          size: "LARGE";
          weight: "BOLD";
        };
      };
      headingLevel2: {
        typography: {
          font: null;
          kerning: "LOOSE";
          letterCase: "UPPER";
          size: "EXTRA_LARGE";
          weight: null;
        };
      };
      headingLevel3: null;
      main: null;
      merchandiseThumbnail: null;
      orderSummary: null;
      primaryButton: {
        background: null;
        blockPadding: "TIGHT";
        border: null;
        cornerRadius: "LARGE";
        inlinePadding: "BASE";
        typography: {
          font: "SECONDARY";
          kerning: null;
          letterCase: "UPPER";
          size: "MEDIUM";
          weight: "BASE";
        };
      };
      secondaryButton: null;
      select: null;
      textField: null;
    };
    designSystem: null | {
      colorPalette: {
        canvas: {
          accent: "#1d3c34";
          background: null;
          foreground: null;
        };
        color1: {
          accent: "#1d3c34";
          background: null;
          foreground: null;
        };
        color2: {
          accent: "#1d3c34";
          background: null;
          foreground: null;
        };
        critical: {
          accent: "#dd1d1d";
          background: null;
          foreground: null;
        };
        interactive: {
          accent: null;
          background: null;
          foreground: "#1d3c34";
        };
        primary: {
          accent: null;
          background: "#1d3c34";
          foreground: null;
        };
      };
      cornerRadius: null;
      typography: {
        primary: {
          base: {
            sources: null;
            weight: 400;
          };
        };
        secondary: {
          base: {
            sources: null;
            weight: 400;
          };
        };
        size: null;
      };
    };
  };
}
