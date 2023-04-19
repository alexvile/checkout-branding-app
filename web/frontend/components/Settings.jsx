import { Select, Layout, Card, Heading } from "@shopify/polaris";
import { useState, useEffect } from "react";
import { useAuthenticatedFetch } from "../hooks";

export default function Settings({ data, checkout }) {
  const fetch = useAuthenticatedFetch();
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
  const letterCaseOptions = [
    { label: "Lower", value: "LOWER" },
    { label: "None", value: "NONE" },
    { label: "Title", value: "TITLE" },
    { label: "Upper", value: "UPPER" },
  ];
  const alignmentOptions = [
    { label: "Start", value: "START" },
    { label: "Center", value: "CENTER" },
    { label: "End", value: "END" },
  ];
  const positionOptions = [
    { label: "Inline", value: "INLINE" },
    { label: "Inline secondary", value: "INLINE_SECONDARY" },
    { label: "Start", value: "START" },
  ];
  const fontTypeOptions = [
    { label: "Primary", value: "PRIMARY" },
    { label: "Secondary", value: "SECONDARY" },
  ];
  const fontSizeOptions = [
    { label: "XXL", value: "EXTRA_EXTRA_LARGE" },
    { label: "XL", value: "EXTRA_LARGE" },
    { label: "L", value: "LARGE" },
    { label: "Base", value: "BASE" },
    { label: "M", value: "MEDIUM" },
    { label: "S", value: "SMALL" },
    { label: "XS", value: "EXTRA_SMALL" },
  ];
  const fontWeightOptions = [
    { label: "Base", value: "BASE" },
    { label: "Bold", value: "BOLD" },
  ];
  const backgroundOptions = [
    { label: "None", value: "NONE" },
    { label: "Solid", value: "SOLID" },
  ];
  const paddingOptions = [
    { label: "Base", value: "BASE" },
    { label: "Extra loose", value: "EXTRA_LOOSE" },
    { label: "Extra tight", value: "EXTRA_TIGHT" },
    { label: "Loose", value: "LOOSE" },
    { label: "None", value: "NONE" },
    { label: "Tight", value: "TIGHT" },
  ];

  const [checkboxCornerRadius, seCheckboxCornerRadius] = useState();

  const [controlBorder, setControlBorder] = useState();
  const [controlColor, setControlColor] = useState();
  const [controlCornerRadius, setControlCornerRadius] = useState();

  const [labelPosition, setLabelPosition] = useState();

  const [globalCornerRadius, setGlobalCornerRadius] = useState();
  const [globalTKerning, setGlobalTKerning] = useState();
  const [globalTLetterCase, setGlobalTLetterCase] = useState();

  const [headerAlignment, setHeaderAlignment] = useState();
  const [headerPosition, setHeaderPosition] = useState();

  const [h1TFont, setH1TFont] = useState();
  const [h1TKerning, setH1TKerning] = useState();
  const [h1TLetterCase, setH1TLetterCase] = useState();
  const [h1TSize, setH1TSize] = useState();
  const [h1TWeight, setH1TWeight] = useState();

  const [h2TFont, setH2TFont] = useState();
  const [h2TKerning, setH2TKerning] = useState();
  const [h2TLetterCase, setH2TLetterCase] = useState();
  const [h2TSize, setH2TSize] = useState();
  const [h2TWeight, setH2TWeight] = useState();

  const [pBtnBG, setPBtnBG] = useState();
  const [pBtnBlockPadding, setPBtnBlockPadding] = useState();
  const [pBtnBorder, setPBtnBorder] = useState();
  const [pBtnCornerRadius, setPBtnCornerRadius] = useState();
  const [pBtnInlinePadding, setPBtnInlinePadding] = useState();

  const [pBtnTFont, setPBtnTFont] = useState();
  const [pBtnTKerning, setPBtnTKerning] = useState();
  const [pBtnTLetterCase, setPBtnTLetterCase] = useState();
  const [pBtnTSize, setPBtnTSize] = useState();
  const [pBtnTWeight, setPBtnTWeight] = useState();

  const [selectBorder, setSelectBorder] = useState();
  const [selectTFont, setSelectTFont] = useState();
  const [selectTKerning, setSelectTKerning] = useState();
  const [selectTLetterCase, setSelectTLetterCase] = useState();
  const [selectTSize, setSelectTSize] = useState();
  const [selectTWeight, setSelectTWeight] = useState();

  const [textFieldBorder, setTextFieldBorder] = useState();
  const [textFieldTFont, setTextFieldTFont] = useState();
  const [textFieldTKerning, setTextFieldTKerning] = useState();
  const [textFieldTLetterCase, setTextFieldTLetterCase] = useState();
  const [textFieldTSize, setTextFieldTSize] = useState();
  const [textFieldTWeight, setTextFieldTWeight] = useState();

  const values = {
    customizations: {
      checkbox: {
        cornerRadius: checkboxCornerRadius,
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
        cornerRadius: globalCornerRadius,
        typography: {
          kerning: globalTKerning,
          letterCase: globalTLetterCase,
        },
      },
      header: {
        alignment: headerAlignment,
        banner: {
          mediaImageId: null,
        },
        logo: {
          image: {
            mediaImageId: null,
          },
          maxWidth: null,
        },
        position: headerPosition,
      },
      headingLevel1: {
        typography: {
          font: h1TFont,
          kerning: h1TKerning,
          letterCase: h1TLetterCase,
          size: h1TSize,
          weight: h1TWeight,
        },
      },
      headingLevel2: {
        typography: {
          font: h2TFont,
          kerning: h2TKerning,
          letterCase: h2TLetterCase,
          size: h2TSize,
          weight: h2TWeight,
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
        background: pBtnBG,
        blockPadding: pBtnBlockPadding,
        border: pBtnBorder,
        cornerRadius: pBtnCornerRadius,
        inlinePadding: pBtnInlinePadding,
        typography: {
          font: pBtnTFont,
          kerning: pBtnTKerning,
          letterCase: pBtnTLetterCase,
          size: pBtnTSize,
          weight: pBtnTWeight,
        },
      },
      secondaryButton: {},
      select: {
        border: selectBorder,
        typography: {
          font: selectTFont,
          kerning: selectTKerning,
          letterCase: selectTLetterCase,
          size: selectTSize,
          weight: selectTWeight,
        },
      },

      textField: {
        border: textFieldBorder,
        typography: {
          font: textFieldTFont,
          kerning: textFieldTKerning,
          weight: textFieldTWeight,
          letterCase: textFieldTLetterCase,
          size: textFieldTSize,
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

  useEffect(() => {
    if (!data) {
      return;
    } else {
      const { customizations, designSystem } = data.checkoutBranding;
      console.log(designSystem);
      seCheckboxCornerRadius(customizations.checkbox.cornerRadius);
      setControlBorder(customizations.control.border);
      setControlColor(customizations.control.color);
      setControlCornerRadius(customizations.control.cornerRadius);
      setLabelPosition(customizations.control.labelPosition);
      setGlobalCornerRadius(customizations.global.cornerRadius);
      setGlobalTKerning(customizations.global.typography.kerning);
      setGlobalTLetterCase(customizations.global.typography.letterCase);
      setHeaderAlignment(customizations.header.alignment);
      setHeaderPosition(customizations.header.position);
      setH1TFont(customizations.headingLevel1.typography.font);
      setH1TKerning(customizations.headingLevel1.typography.kerning);
      setH1TLetterCase(customizations.headingLevel1.typography.letterCase);
      setH1TLetterCase(customizations.headingLevel1.typography.letterCase);
      setH1TSize(customizations.headingLevel1.typography.size);
      setH1TWeight(customizations.headingLevel1.typography.weight);
      setH2TFont(customizations.headingLevel2.typography.font);
      setH2TKerning(customizations.headingLevel2.typography.kerning);
      setH2TLetterCase(customizations.headingLevel2.typography.letterCase);
      setH2TLetterCase(customizations.headingLevel2.typography.letterCase);
      setH2TSize(customizations.headingLevel2.typography.size);
      setH2TWeight(customizations.headingLevel2.typography.weight);
      setPBtnBG(customizations.primaryButton.background);
      setPBtnBlockPadding(customizations.primaryButton.blockPadding);
      setPBtnBorder(customizations.primaryButton.border);
      setPBtnCornerRadius(customizations.primaryButton.cornerRadius);
      setPBtnInlinePadding(customizations.primaryButton.inlinePadding);
      setPBtnTFont(customizations.primaryButton.typography.font);
      setPBtnTKerning(customizations.primaryButton.typography.kerning);
      setPBtnTLetterCase(customizations.primaryButton.typography.letterCase);
      setPBtnTSize(customizations.primaryButton.typography.size);
      setPBtnTWeight(customizations.primaryButton.typography.weight);
      setSelectBorder(customizations.select.border);
      setSelectTFont(customizations.select.typography.font);
      setSelectTKerning(customizations.select.typography.kerning);
      setSelectTLetterCase(customizations.select.typography.letterCase);
      setSelectTSize(customizations.select.typography.size);
      setSelectTWeight(customizations.select.typography.weight);
      setTextFieldBorder(customizations.textField.border);
      setTextFieldTFont(customizations.textField.typography.font);
      setTextFieldTKerning(customizations.textField.typography.kerning);
      setTextFieldTLetterCase(customizations.textField.typography.letterCase);
      setTextFieldTSize(customizations.textField.typography.size);
      setTextFieldTWeight(customizations.textField.typography.weight);
    }
  }, [data]);

  const setCheckoutSettings = async () => {
    const checkoutID = checkout.split("/CheckoutProfile/")[1];
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
      <Heading>Settings</Heading>
      <Layout>
        <Layout.Section>
          <Card title="CUSTOMIZATIONS" sectioned>
            {data?.checkoutBranding?.customizations && (
              <div>
                <Card title="Checkbox" sectioned>
                  <Select
                    label="Corner Radius"
                    options={cornerRadiusOptions}
                    onChange={(value) => seCheckboxCornerRadius(value)}
                    value={checkboxCornerRadius}
                  />
                </Card>
                <Card title="Control (Left panel)" sectioned>
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
                </Card>
                <Card title="Global" sectioned>
                  <Select
                    label="Corner Radius"
                    options={cornerRadiusOptions}
                    onChange={(value) => setGlobalCornerRadius(value)}
                    value={globalCornerRadius}
                  />
                  <Card title="Typography" sectioned>
                    <Select
                      label="Kerning"
                      options={kerningOptions}
                      onChange={(value) => setGlobalTKerning(value)}
                      value={globalTKerning}
                    />
                    <Select
                      label="Letter Case"
                      options={letterCaseOptions}
                      onChange={(value) => setGlobalTLetterCase(value)}
                      value={globalTLetterCase}
                    />
                  </Card>
                </Card>
                <Card title="Header" sectioned>
                  <Select
                    label="Alignment"
                    options={alignmentOptions}
                    onChange={(value) => setHeaderAlignment(value)}
                    value={headerAlignment}
                  />
                  <Select
                    label="Position"
                    options={positionOptions}
                    onChange={(value) => setHeaderPosition(value)}
                    value={headerPosition}
                  />
                </Card>
                <Card title="H1" sectioned>
                  <Select
                    label="Font"
                    options={fontTypeOptions}
                    onChange={(value) => setH1TFont(value)}
                    value={h1TFont}
                  />
                  <Select
                    label="Kerning"
                    options={kerningOptions}
                    onChange={(value) => setH1TKerning(value)}
                    value={h1TKerning}
                  />
                  <Select
                    label="Letter Case"
                    options={letterCaseOptions}
                    onChange={(value) => setH1TLetterCase(value)}
                    value={h1TLetterCase}
                  />
                  <Select
                    label="Size"
                    options={fontSizeOptions}
                    onChange={(value) => setH1TSize(value)}
                    value={h1TSize}
                  />
                  <Select
                    label="Weight"
                    options={fontWeightOptions}
                    onChange={(value) => setH1TWeight(value)}
                    value={h1TWeight}
                  />
                </Card>
                <Card title="H2" sectioned>
                  <Select
                    label="Font"
                    options={fontTypeOptions}
                    onChange={(value) => setH2TFont(value)}
                    value={h2TFont}
                  />
                  <Select
                    label="Kerning"
                    options={kerningOptions}
                    onChange={(value) => setH2TKerning(value)}
                    value={h2TKerning}
                  />
                  <Select
                    label="Letter Case"
                    options={letterCaseOptions}
                    onChange={(value) => setH2TLetterCase(value)}
                    value={h2TLetterCase}
                  />
                  <Select
                    label="Size"
                    options={fontSizeOptions}
                    onChange={(value) => setH2TSize(value)}
                    value={h2TSize}
                  />
                  <Select
                    label="Weight"
                    options={fontWeightOptions}
                    onChange={(value) => setH2TWeight(value)}
                    value={h2TWeight}
                  />
                </Card>
                <Card title="Primary button" sectioned>
                  <Card title="Geometry" sectioned>
                    <Select
                      label="Background"
                      options={backgroundOptions}
                      onChange={(value) => setPBtnBG(value)}
                      value={pBtnBG}
                    />
                    <Select
                      label="Block Padding (Vertical)"
                      options={paddingOptions}
                      onChange={(value) => setPBtnBlockPadding(value)}
                      value={pBtnBlockPadding}
                    />
                    <Select
                      label="Inline Padding (Horizontal)"
                      options={paddingOptions}
                      onChange={(value) => setPBtnInlinePadding(value)}
                      value={pBtnInlinePadding}
                    />
                    <Select
                      label="Border"
                      options={borderOptions}
                      onChange={(value) => setPBtnBorder(value)}
                      value={pBtnBorder}
                    />
                    <Select
                      label="Corner Radius"
                      options={cornerRadiusOptions}
                      onChange={(value) => setPBtnCornerRadius(value)}
                      value={pBtnCornerRadius}
                    />
                  </Card>
                  <Card title="Typography" sectioned>
                    <Select
                      label="Font"
                      options={fontTypeOptions}
                      onChange={(value) => setPBtnTFont(value)}
                      value={pBtnTFont}
                    />
                    <Select
                      label="Kerning"
                      options={kerningOptions}
                      onChange={(value) => setPBtnTKerning(value)}
                      value={pBtnTKerning}
                    />
                    <Select
                      label="Letter Case"
                      options={letterCaseOptions}
                      onChange={(value) => setPBtnTLetterCase(value)}
                      value={pBtnTLetterCase}
                    />
                    <Select
                      label="Size"
                      options={fontSizeOptions}
                      onChange={(value) => setPBtnTSize(value)}
                      value={pBtnTSize}
                    />
                    <Select
                      label="Weight"
                      options={fontWeightOptions}
                      onChange={(value) => setPBtnTWeight(value)}
                      value={pBtnTWeight}
                    />
                  </Card>
                </Card>
                <Card title="Select" sectioned>
                  <Select
                    label="Border"
                    options={borderOptions}
                    onChange={(value) => setSelectBorder(value)}
                    value={selectBorder}
                  />
                  <Card title="Typography" sectioned>
                    <Select
                      label="Font"
                      options={fontTypeOptions}
                      onChange={(value) => setSelectTFont(value)}
                      value={selectTFont}
                    />
                    <Select
                      label="Kerning"
                      options={kerningOptions}
                      onChange={(value) => setSelectTKerning(value)}
                      value={selectTKerning}
                    />
                    <Select
                      label="Letter Case"
                      options={letterCaseOptions}
                      onChange={(value) => setSelectTLetterCase(value)}
                      value={selectTLetterCase}
                    />
                    <Select
                      label="Size"
                      options={fontSizeOptions}
                      onChange={(value) => setSelectTSize(value)}
                      value={selectTSize}
                    />
                    <Select
                      label="Weight"
                      options={fontWeightOptions}
                      onChange={(value) => setSelectTWeight(value)}
                      value={selectTWeight}
                    />
                  </Card>
                </Card>
                <Card title="Text field" sectioned>
                  <Select
                    label="Border"
                    options={borderOptions}
                    onChange={(value) => setTextFieldBorder(value)}
                    value={textFieldBorder}
                  />
                  <Card title="Typography" sectioned>
                    <Select
                      label="Font"
                      options={fontTypeOptions}
                      onChange={(value) => setTextFieldTFont(value)}
                      value={textFieldTFont}
                    />
                    <Select
                      label="Kerning"
                      options={kerningOptions}
                      onChange={(value) => setTextFieldTKerning(value)}
                      value={textFieldTKerning}
                    />
                    <Select
                      label="Letter Case"
                      options={letterCaseOptions}
                      onChange={(value) => setTextFieldTLetterCase(value)}
                      value={textFieldTLetterCase}
                    />
                    <Select
                      label="Size"
                      options={fontSizeOptions}
                      onChange={(value) => setTextFieldTSize(value)}
                      value={textFieldTSize}
                    />
                    <Select
                      label="Weight"
                      options={fontWeightOptions}
                      onChange={(value) => setTextFieldTWeight(value)}
                      value={textFieldTWeight}
                    />
                  </Card>
                </Card>
              </div>
            )}
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card title="DESIGN SYSTEM" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </Card>
        </Layout.Section>
      </Layout>
      <button onClick={setCheckoutSettings}>Send</button>
    </>
  );
}
