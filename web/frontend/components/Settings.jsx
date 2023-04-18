import { Select } from "@shopify/polaris";
import { useState, useEffect } from "react";
import { useAuthenticatedFetch } from "../hooks";

export default function Settings({ data, checkout }) {
  // console.log(data);
  const fetch = useAuthenticatedFetch();

  const [cornerRadius, setCornerRadius] = useState();
  const [controlBorder, setControlBorder] = useState();
  const [controlColor, setControlColor] = useState();
  const [controlCornerRadius, setControlCornerRadius] = useState();
  const [labelPosition, setLabelPosition] = useState();
  const [globalCornerRadius, setGlobalCornerRadius] = useState();
  const [globalTKerning, setGlobalTKerning] = useState();

  const cornerRadiusOptions = [
    { label: "Base", value: "BASE" },
    { label: "Large", value: "LARGE" },
    { label: "Small", value: "SMALL" },
    { label: "None", value: "NONE" },
  ];
  const borderOptions = [
    { label: "Full", value: "FULL" },
    { label: "None", value: "NONE" },
  ];
  const colorOptions = [
    { label: "Color1", value: "COLOR1" },
    { label: "Color2", value: "COLOR2" },
    { label: "Transparent", value: "TRANSPARENT" },
  ];
  const labelPositionOptions = [
    { label: "Inside", value: "INSIDE" },
    { label: "Outside", value: "OUTSIDE" },
  ];
  const kerningOptions = [
    { label: "Base", value: "BASE" },
    { label: "Extra loose", value: "EXTRA_LOOSE" },
    { label: "Loose", value: "LOOSE" },
  ];
  useEffect(() => {
    if (!data) {
      return;
    } else {
      const { customizations } = data.checkoutBranding;
      console.log(customizations);
      setCornerRadius(customizations.checkbox.cornerRadius);
      setControlBorder(customizations.control.border);
      setControlColor(customizations.control.color);
      setControlCornerRadius(customizations.control.cornerRadius);
      setLabelPosition(customizations.control.labelPosition);
      setGlobalCornerRadius(customizations.global.cornerRadius);
    }
  }, [data]);

  const values = {
    customizations: {
      checkbox: {
        cornerRadius: cornerRadius,
      },
      control: {
        border: controlBorder,
        color: controlColor,
        cornerRadius: controlCornerRadius,
        labelPosition: labelPosition,
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
          mediaImageId: null,
        },
        logo: {
          image: {
            mediaImageId: null,
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
      headingLevel3: {},
      main: {
        backgroundImage: {
          mediaImageId: null,
        },
      },
      merchandiseThumbnail: {},
      orderSummary: {
        backgroundImage: {
          mediaImageId: null,
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
          size: "LARGE",
          weight: "BOLD",
        },
      },
      secondaryButton: {},
      select: {
        border: "FULL",
        typography: {
          font: "PRIMARY",
          kerning: "BASE",
          letterCase: "NONE",
          size: "LARGE",
          weight: "BOLD",
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
      typography: {},
    },
  };
  const setCheckoutSettings = async () => {
    const checkoutID = checkout.split("/CheckoutProfile/")[1];
    console.log(checkoutID);
    const res = await fetch(`/api/checkout-settings/${checkoutID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const json = await res.json();
    if (res.ok) {
      console.log(json);
    } else {
      console.log(json);
    }
  };

  return (
    <>
      <h1>Settings</h1>
      <h2>Customizations</h2>

      {data && (
        <div>
          <div>
            <div>
              CHECKBOX
              <Select
                label="Corner Radius"
                options={cornerRadiusOptions}
                onChange={(value) => setCornerRadius(value)}
                value={cornerRadius}
              />
            </div>

            <div>
              CONTROL (Left panel)
              <Select
                label="Border"
                options={borderOptions}
                onChange={(value) => setControlBorder(value)}
                value={controlBorder}
              />
              <Select
                label="Color"
                options={colorOptions}
                onChange={(value) => setControlColor(value)}
                value={controlColor}
              />
              <Select
                label="Corner radius"
                options={cornerRadiusOptions}
                onChange={(value) => setControlCornerRadius(value)}
                value={controlCornerRadius}
              />
              <Select
                label="Label position"
                options={labelPositionOptions}
                onChange={(value) => setLabelPosition(value)}
                value={labelPosition}
              />
            </div>

            <div>
              GLOBAL
              <Select
                label="Corner Radius"
                options={cornerRadiusOptions}
                onChange={(value) => setGlobalCornerRadius(value)}
                value={globalCornerRadius}
              />
              -Typography-
              <Select
                label="Kerning"
                options={kerningOptions}
                onChange={(value) => setGlobalTKerning(value)}
                value={globalTKerning}
              />
            </div>
          </div>
          <button onClick={setCheckoutSettings}>Send</button>
        </div>
      )}
    </>
  );
}
