import {
  Select,
  Layout,
  Card,
  Heading,
  RangeSlider,
  Button,
} from "@shopify/polaris";
import { useState, useEffect } from "react";
import { useAuthenticatedFetch } from "../hooks";
import { ColorInput } from "./ColorInput";
import { OPTIONS } from "../settings/options";
import { DEFAULT_SETTINGS } from "../settings/default.settings";

import { SHOPIFY_FONTS } from "../settings/fonts";
export default function Settings({
  data,
  getCheckoutSettings,
  checkout,
  loading,
  setLoading,
}) {
  const {
    cornerRadiusOptions,
    borderOptions,
    colorOptions,
    labelPositionOptions,
    kerningOptions,
    letterCaseOptions,
    alignmentOptions,
    positionOptions,
    fontTypeOptions,
    fontSizeOptions,
    fontWeightOptions,
    backgroundOptions,
    paddingOptions,
  } = OPTIONS;

  const fetch = useAuthenticatedFetch();
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

  // Design System
  const [canvasAccent, setCanvasAccent] = useState();
  const [canvasBackground, setCanvasBackground] = useState();
  const [canvasForeground, setCanvasForeground] = useState();

  const [color1Accent, setColor1Accent] = useState();
  const [color1Background, setColor1Background] = useState();
  const [color1Foreground, setColor1Foreground] = useState();

  const [color2Accent, setColor2Accent] = useState();
  const [color2Background, setColor2Background] = useState();
  const [color2Foreground, setColor2Foreground] = useState();

  const [criticalAccent, setCriticalAccent] = useState();
  const [criticalBackground, setCriticalBackground] = useState();
  const [criticalForeground, setCriticalForeground] = useState();

  const [interactiveAccent, setInteractiveAccent] = useState();
  const [interactiveBackground, setInteractiveBackground] = useState();
  const [interactiveForeground, setInteractiveForeground] = useState();

  const [primaryAccent, setPrimaryAccent] = useState();
  const [primaryBackground, setPrimaryBackground] = useState();
  const [primaryForeground, setPrimaryForeground] = useState();

  const [cornerRadiusIntBase, setCornerRadiusIntBase] = useState();
  const [cornerRadiusIntLarge, setCornerRadiusIntLarge] = useState();
  const [cornerRadiusIntSmall, setCornerRadiusIntSmall] = useState();

  const [tPrimaryFont, setTPrimaryFont] = useState();
  const [tPrimaryWeightBase, setTPrimaryWeightBase] = useState();
  const [tPrimaryWeightBold, setTPrimaryWeightBold] = useState();

  const [tSecondaryFont, setTSecondaryFont] = useState();
  const [tSecondaryWeightBase, setTSecondaryWeightBase] = useState();
  const [tSecondaryWeightBold, setTSecondaryWeightBold] = useState();

  const [tSizeBase, setTSizeBase] = useState();
  const [tSizeRatio, setTSizeRatio] = useState();

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
          accent: canvasAccent,
          background: canvasBackground,
          foreground: canvasForeground,
        },
        color1: {
          accent: color1Accent,
          background: color1Background,
          foreground: color1Foreground,
        },
        color2: {
          accent: color2Accent,
          background: color2Background,
          foreground: color2Foreground,
        },
        critical: {
          accent: criticalAccent,
          background: criticalBackground,
          foreground: criticalForeground,
        },
        interactive: {
          accent: interactiveAccent,
          background: interactiveBackground,
          foreground: interactiveForeground,
        },
        primary: {
          accent: primaryAccent,
          background: primaryBackground,
          foreground: primaryForeground,
        },
      },
      cornerRadius: {
        small: cornerRadiusIntSmall,
        base: cornerRadiusIntBase,
        large: cornerRadiusIntLarge,
      },
      typography: {
        primary: {
          shopifyFontGroup: {
            baseWeight: tPrimaryWeightBase,
            boldWeight: tPrimaryWeightBold,
            name: tPrimaryFont,
          },
        },
        secondary: {
          shopifyFontGroup: {
            baseWeight: tSecondaryWeightBase,
            boldWeight: tSecondaryWeightBold,
            name: tSecondaryFont,
          },
        },
        size: {
          base: tSizeBase,
          ratio: tSizeRatio,
        },
      },
    },
  };

  useEffect(() => {
    if (!data) {
      return;
    } else {
      const { customizations, designSystem } = data.checkoutBranding;
      console.log(designSystem);
      seCheckboxCornerRadius(
        customizations.checkbox.cornerRadius ||
          DEFAULT_SETTINGS.customizations.checkbox.cornerRadius
      );
      setControlBorder(
        customizations.control.border ||
          DEFAULT_SETTINGS.customizations.control.border
      );
      setControlColor(
        customizations.control.color ||
          DEFAULT_SETTINGS.customizations.control.color
      );
      setControlCornerRadius(
        customizations.control.cornerRadius ||
          DEFAULT_SETTINGS.customizations.control.cornerRadius
      );
      setLabelPosition(
        customizations.control.labelPosition ||
          DEFAULT_SETTINGS.customizations.control.labelPosition
      );
      setGlobalCornerRadius(
        customizations.global.cornerRadius ||
          DEFAULT_SETTINGS.customizations.global.cornerRadius
      );
      setGlobalTKerning(
        customizations.global.typography.kerning ||
          DEFAULT_SETTINGS.customizations.global.typography.kerning
      );
      setGlobalTLetterCase(
        customizations.global.typography.letterCase ||
          DEFAULT_SETTINGS.customizations.global.typography.letterCase
      );
      setHeaderAlignment(
        customizations.header.alignment ||
          DEFAULT_SETTINGS.customizations.header.alignment
      );
      setHeaderPosition(
        customizations.header.position ||
          DEFAULT_SETTINGS.customizations.header.position
      );
      setH1TFont(
        customizations.headingLevel1.typography.font ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.font
      );
      setH1TKerning(
        customizations.headingLevel1.typography.kerning ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.kerning
      );
      setH1TLetterCase(
        customizations.headingLevel1.typography.letterCase ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.letterCase
      );
      setH1TLetterCase(
        customizations.headingLevel1.typography.letterCase ||
          DEFAULT_SETTINGS.ustomizations.headingLevel1.typography.letterCase
      );
      setH1TSize(
        customizations.headingLevel1.typography.size ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.size
      );
      setH1TWeight(
        customizations.headingLevel1.typography.weight ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.weight
      );
      setH2TFont(
        customizations.headingLevel2.typography.font ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.font
      );
      setH2TKerning(
        customizations.headingLevel2.typography.kerning ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.kerning
      );
      setH2TLetterCase(
        customizations.headingLevel2.typography.letterCase ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.letterCase
      );
      setH2TLetterCase(
        customizations.headingLevel2.typography.letterCase ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.letterCase
      );
      setH2TSize(
        customizations.headingLevel2.typography.size ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.size
      );
      setH2TWeight(
        customizations.headingLevel2.typography.weight ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.weight
      );
      setPBtnBG(
        customizations.primaryButton.background ||
          DEFAULT_SETTINGS.customizations.primaryButton.background
      );
      setPBtnBlockPadding(
        customizations.primaryButton.blockPadding ||
          DEFAULT_SETTINGS.customizations.primaryButton.blockPadding
      );
      setPBtnBorder(
        customizations.primaryButton.border ||
          DEFAULT_SETTINGS.customizations.primaryButton.border
      );
      setPBtnCornerRadius(
        customizations.primaryButton.cornerRadius ||
          DEFAULT_SETTINGS.customizations.primaryButton.cornerRadius
      );
      setPBtnInlinePadding(
        customizations.primaryButton.inlinePadding ||
          DEFAULT_SETTINGS.customizations.primaryButton.inlinePadding
      );
      setPBtnTFont(
        customizations.primaryButton.typography.font ||
          DEFAULT_SETTINGS.customizations.primaryButton.typography.font
      );
      setPBtnTKerning(
        customizations.primaryButton.typography.kerning ||
          DEFAULT_SETTINGS.customizations.primaryButton.typography.kerning
      );
      setPBtnTLetterCase(
        customizations.primaryButton.typography.letterCase ||
          DEFAULT_SETTINGS.customizations.primaryButton.typography.letterCase
      );
      setPBtnTSize(
        customizations.primaryButton.typography.size ||
          DEFAULT_SETTINGS.customizations.primaryButton.typography.size
      );
      setPBtnTWeight(
        customizations.primaryButton.typography.weight ||
          DEFAULT_SETTINGS.customizations.primaryButton.typography.weight
      );
      setSelectBorder(
        customizations.select.border ||
          DEFAULT_SETTINGS.customizations.select.border
      );
      setSelectTFont(
        customizations.select.typography.font ||
          DEFAULT_SETTINGS.customizations.select.typography.font
      );
      setSelectTKerning(
        customizations.select.typography.kerning ||
          DEFAULT_SETTINGS.customizations.select.typography.kerning
      );
      setSelectTLetterCase(
        customizations.select.typography.letterCase ||
          DEFAULT_SETTINGS.customizations.select.typography.letterCase
      );
      setSelectTSize(
        customizations.select.typography.size ||
          DEFAULT_SETTINGS.customizations.select.typography.size
      );
      setSelectTWeight(
        customizations.select.typography.weight ||
          DEFAULT_SETTINGS.customizations.select.typography.weight
      );
      setTextFieldBorder(
        customizations.textField.border ||
          DEFAULT_SETTINGS.customizations.textField.border
      );
      setTextFieldTFont(
        customizations.textField.typography.font ||
          DEFAULT_SETTINGS.customizations.textField.typography.font
      );
      setTextFieldTKerning(
        customizations.textField.typography.kerning ||
          DEFAULT_SETTINGS.customizations.textField.typography.kerning
      );
      setTextFieldTLetterCase(
        customizations.textField.typography.letterCase ||
          DEFAULT_SETTINGS.customizations.textField.typography.letterCase
      );
      setTextFieldTSize(
        customizations.textField.typography.size ||
          DEFAULT_SETTINGS.customizations.textField.typography.size
      );
      setTextFieldTWeight(
        customizations.textField.typography.weight ||
          DEFAULT_SETTINGS.customizations.textField.typography.weight
      );
      // Design System
      setCanvasAccent(
        designSystem.colorPalette.canvas.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.canvas.accent
      );
      setCanvasBackground(
        designSystem.colorPalette.canvas.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.canvas.background
      );
      setCanvasForeground(
        designSystem.colorPalette.canvas.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.canvas.foreground
      );

      setColor1Accent(
        designSystem.colorPalette.color1.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color1.accent
      );
      setColor1Background(
        designSystem.colorPalette.color1.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color1.background
      );
      setColor1Foreground(
        designSystem.colorPalette.color1.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color1.foreground
      );
      setColor2Accent(
        designSystem.colorPalette.color2.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color2.accent
      );
      setColor2Background(
        designSystem.colorPalette.color2.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color2.background
      );
      setColor2Foreground(
        designSystem.colorPalette.color2.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color2.foreground
      );
      setCriticalAccent(
        designSystem.colorPalette.critical.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.critical.accent
      );
      setCriticalBackground(
        designSystem.colorPalette.critical.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.critical.background
      );
      setCriticalForeground(
        designSystem.colorPalette.critical.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.critical.foreground
      );
      setInteractiveAccent(
        designSystem.colorPalette.interactive.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.interactive.accent
      );
      setInteractiveBackground(
        designSystem.colorPalette.interactive.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.interactive.background
      );
      setInteractiveForeground(
        designSystem.colorPalette.interactive.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.interactive.foreground
      );
      setPrimaryAccent(
        designSystem.colorPalette.primary.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.primary.accent
      );
      setPrimaryBackground(
        designSystem.colorPalette.primary.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.primary.background
      );
      setPrimaryForeground(
        designSystem.colorPalette.primary.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.primary.foreground
      );
      setCornerRadiusIntBase(
        designSystem.cornerRadius.base ||
          DEFAULT_SETTINGS.designSystem.cornerRadius.base
      );
      setCornerRadiusIntLarge(
        designSystem.cornerRadius.large ||
          DEFAULT_SETTINGS.designSystem.cornerRadius.large
      );
      setCornerRadiusIntSmall(
        designSystem.cornerRadius.small ||
          DEFAULT_SETTINGS.designSystem.cornerRadius.small
      );

      setTPrimaryFont(
        designSystem.typography.primary?.name ||
          DEFAULT_SETTINGS.designSystem.typography.primary.shopifyFontGroup.name
      );
      setTPrimaryWeightBase(
        designSystem.typography.primary?.base?.weight ||
          DEFAULT_SETTINGS.designSystem.typography.primary.shopifyFontGroup
            .baseWeight
      );
      setTPrimaryWeightBold(
        designSystem.typography.primary?.bold?.weight ||
          DEFAULT_SETTINGS.designSystem.typography.primary.shopifyFontGroup
            .boldWeight
      );

      setTSecondaryFont(
        designSystem.typography?.secondary?.name ||
          DEFAULT_SETTINGS.designSystem.typography.secondary.shopifyFontGroup
            .name
      );
      setTSecondaryWeightBase(
        designSystem.typography?.secondary?.base?.weight ||
          DEFAULT_SETTINGS.designSystem.typography.secondary.shopifyFontGroup
            .baseWeight
      );
      setTSecondaryWeightBold(
        designSystem.typography?.secondary?.bold?.weight ||
          DEFAULT_SETTINGS.designSystem.typography.secondary.shopifyFontGroup
            .boldWeight
      );
      setTSizeBase(
        designSystem.typography?.size?.base ||
          DEFAULT_SETTINGS.designSystem.typography.size.base
      );
      setTSizeRatio(
        designSystem.typography?.size?.ratio ||
          DEFAULT_SETTINGS.designSystem.typography.size.ratio
      );
    }
  }, [data]);

  const setCheckoutSettings = async () => {
    setLoading(true);
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
      getCheckoutSettings();
      setLoading(false);
      console.log("res", json);
    } else {
      setLoading(false);
      console.log(json);
    }
  };

  return (
    <>
      <Heading>Settings</Heading>
      {data?.checkoutBranding && (
        <Button onClick={setCheckoutSettings} disabled={loading}>
          Send
        </Button>
      )}
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
            {data?.checkoutBranding?.designSystem && (
              <div>
                <Heading>Color palette</Heading>
                <Card title="Canvas" sectioned>
                  <ColorInput
                    label="Accent"
                    size="large"
                    name="canvasAccent"
                    onChange={setCanvasAccent}
                    value={canvasAccent}
                  />
                  <ColorInput
                    label="Background"
                    size="large"
                    name="canvasBackground"
                    onChange={setCanvasBackground}
                    value={canvasBackground}
                  />
                  <ColorInput
                    label="Foreground"
                    size="large"
                    name="canvasForeground"
                    onChange={setCanvasForeground}
                    value={canvasForeground}
                  />
                </Card>
                <Card title="Color 1" sectioned>
                  <ColorInput
                    label="Accent"
                    size="large"
                    name="color1Accent"
                    onChange={setColor1Accent}
                    value={color1Accent}
                  />
                  <ColorInput
                    label="Background"
                    size="large"
                    name="color1Background"
                    onChange={setColor1Background}
                    value={color1Background}
                  />
                  <ColorInput
                    label="Foreground"
                    size="large"
                    name="color1Foreground"
                    onChange={setColor1Foreground}
                    value={color1Foreground}
                  />
                </Card>
                <Card title="Color 2" sectioned>
                  <ColorInput
                    label="Accent"
                    size="large"
                    name="color2Accent"
                    onChange={setColor2Accent}
                    value={color2Accent}
                  />
                  <ColorInput
                    label="Background"
                    size="large"
                    name="color2Background"
                    onChange={setColor2Background}
                    value={color2Background}
                  />
                  <ColorInput
                    label="Foreground"
                    size="large"
                    name="color2Foreground"
                    onChange={setColor2Foreground}
                    value={color2Foreground}
                  />
                </Card>
                <Card title="Critical" sectioned>
                  <ColorInput
                    label="Accent"
                    size="large"
                    name="criticalAccent"
                    onChange={setCriticalAccent}
                    value={criticalAccent}
                  />
                  <ColorInput
                    label="Background"
                    size="large"
                    name="criticalBackground"
                    onChange={setCriticalBackground}
                    value={criticalBackground}
                  />
                  <ColorInput
                    label="Foreground"
                    size="large"
                    name="criticalForeground"
                    onChange={setCriticalForeground}
                    value={criticalForeground}
                  />
                </Card>
                <Card title="Interactive" sectioned>
                  <ColorInput
                    label="Accent"
                    size="large"
                    name="interactiveAccent"
                    onChange={setInteractiveAccent}
                    value={interactiveAccent}
                  />
                  <ColorInput
                    label="Background"
                    size="large"
                    name="interactiveBackground"
                    onChange={setInteractiveBackground}
                    value={interactiveBackground}
                  />
                  <ColorInput
                    label="Foreground"
                    size="large"
                    name="interactiveForeground"
                    onChange={setInteractiveForeground}
                    value={interactiveForeground}
                  />
                </Card>
                <Card title="Primary" sectioned>
                  <ColorInput
                    label="Accent"
                    size="large"
                    name="primaryAccent"
                    onChange={setPrimaryAccent}
                    value={primaryAccent}
                  />
                  <ColorInput
                    label="Background"
                    size="large"
                    name="primaryBackground"
                    onChange={setPrimaryBackground}
                    value={primaryBackground}
                  />
                  <ColorInput
                    label="Foreground"
                    size="large"
                    name="primaryForeground"
                    onChange={setPrimaryForeground}
                    value={primaryForeground}
                  />
                </Card>
                <Heading>Corner Radius</Heading>
                <Card title="Corner radius values" sectioned>
                  <RangeSlider
                    output
                    label="Base"
                    min={0}
                    max={30}
                    suffix={cornerRadiusIntBase}
                    value={cornerRadiusIntBase || 0}
                    onChange={(value) => {
                      setCornerRadiusIntBase(value);
                    }}
                  />
                  <RangeSlider
                    output
                    label="Large"
                    min={0}
                    max={30}
                    suffix={cornerRadiusIntLarge}
                    value={cornerRadiusIntLarge || 0}
                    onChange={(value) => {
                      setCornerRadiusIntLarge(value);
                    }}
                  />
                  <RangeSlider
                    output
                    label="Small"
                    min={0}
                    max={30}
                    suffix={cornerRadiusIntSmall}
                    value={cornerRadiusIntSmall || 0}
                    onChange={(value) => {
                      setCornerRadiusIntSmall(value);
                    }}
                  />
                </Card>
                <Card title="Typography" sectioned>
                  <p>
                    Not all fonts have all weights, so after selecting, the
                    closest font weights will be selected and change value at
                    your select.
                  </p>
                  <Card title="Primary" sectioned>
                    <Select
                      label="Base (font)"
                      options={SHOPIFY_FONTS}
                      onChange={(value) => {
                        setTPrimaryFont(value);
                      }}
                      value={tPrimaryFont}
                    />
                    <RangeSlider
                      output
                      label="Base Weight"
                      min={100}
                      max={900}
                      step={100}
                      suffix={tPrimaryWeightBase}
                      value={tPrimaryWeightBase || 0}
                      onChange={(value) => {
                        setTPrimaryWeightBase(value);
                      }}
                    />
                    <RangeSlider
                      output
                      label="Bold Weight"
                      min={100}
                      max={900}
                      step={100}
                      suffix={tPrimaryWeightBold}
                      value={tPrimaryWeightBold || 0}
                      onChange={(value) => {
                        setTPrimaryWeightBold(value);
                      }}
                    />
                  </Card>
                  <Card title="Secondary" sectioned>
                    <Select
                      label="Base (font)"
                      options={SHOPIFY_FONTS}
                      onChange={(value) => {
                        setTSecondaryFont(value);
                      }}
                      value={tSecondaryFont}
                    />
                    <RangeSlider
                      output
                      label="Base Weight"
                      min={100}
                      max={900}
                      step={100}
                      suffix={tSecondaryWeightBase}
                      value={tSecondaryWeightBase || 0}
                      onChange={(value) => {
                        setTSecondaryWeightBase(value);
                      }}
                    />
                    <RangeSlider
                      output
                      label="Bold Weight"
                      min={100}
                      max={900}
                      step={100}
                      suffix={tSecondaryWeightBold}
                      value={tSecondaryWeightBold || 0}
                      onChange={(value) => {
                        setTSecondaryWeightBold(value);
                      }}
                    />
                  </Card>
                  <Card title="Size">
                    <RangeSlider
                      output
                      label="Base "
                      min={12.0}
                      max={18.0}
                      step={0.1}
                      suffix={tSizeBase}
                      value={tSizeBase || 0}
                      onChange={(value) => {
                        setTSizeBase(value);
                      }}
                    />
                    <RangeSlider
                      output
                      label="Ratio"
                      min={1.0}
                      max={1.4}
                      step={0.1}
                      suffix={tSizeRatio}
                      value={tSizeRatio || 0}
                      onChange={(value) => {
                        setTSizeRatio(value);
                      }}
                    />
                  </Card>
                </Card>
              </div>
            )}
          </Card>
        </Layout.Section>
      </Layout>
    </>
  );
}
