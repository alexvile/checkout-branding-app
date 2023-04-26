import {
  Select,
  Layout,
  Card,
  Heading,
  RangeSlider,
  Banner,
} from "@shopify/polaris";
import { CustomCard } from "./CustomCard";
import { ColorInput } from "./ColorInput";
import { OPTIONS } from "../settings/options";
// import ImageUploader from "../components/ImageUploader";
import { SHOPIFY_FONTS } from "../settings/fonts";
import { ImagePreview } from "../components/ImagePreview";

export default function Settings({ data, configsAndMethods }) {
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
  const {
    checkboxCornerRadius,
    seCheckboxCornerRadius,

    controlBorder,
    setControlBorder,
    controlColor,
    setControlColor,
    controlCornerRadius,
    setControlCornerRadius,

    labelPosition,
    setLabelPosition,

    globalCornerRadius,
    setGlobalCornerRadius,
    globalTKerning,
    setGlobalTKerning,
    globalTLetterCase,
    setGlobalTLetterCase,

    headerAlignment,
    setHeaderAlignment,
    headerPosition,
    setHeaderPosition,

    headerLogoImageUrl,
    setHeaderLogoImageUrl,
    headerLogoImageID,
    setHeaderLogoImageID,

    headerLogoMaxW,
    setHeaderLogoMaxW,

    headerBannerImageUrl,
    setHeaderBannerImageUrl,
    headerBannerImageID,
    setHeaderBannerImageID,

    h1TFont,
    setH1TFont,
    h1TKerning,
    setH1TKerning,
    h1TLetterCase,
    setH1TLetterCase,
    h1TSize,
    setH1TSize,
    h1TWeight,
    setH1TWeight,

    h2TFont,
    setH2TFont,
    h2TKerning,
    setH2TKerning,
    h2TLetterCase,
    setH2TLetterCase,
    h2TSize,
    setH2TSize,
    h2TWeight,
    setH2TWeight,

    h3TFont,
    setH3TFont,
    h3TKerning,
    setH3TKerning,
    h3TLetterCase,
    setH3TLetterCase,
    h3TSize,
    setH3TSize,
    h3TWeight,
    setH3TWeight,

    mainBGImageUrl,
    setMainBGImageUrl,
    mainBGImageID,
    setMainBGImageID,

    orderBGImageUrl,
    setOrderBGImageUrl,
    orderBGImageID,
    setOrderBGImageID,

    // faviconImageUrl, setFaviconImageUrl
    // faviconImageID, setFaviconImageID

    pBtnBG,
    setPBtnBG,
    pBtnBlockPadding,
    setPBtnBlockPadding,
    pBtnBorder,
    setPBtnBorder,
    pBtnCornerRadius,
    setPBtnCornerRadius,
    pBtnInlinePadding,
    setPBtnInlinePadding,

    pBtnTFont,
    setPBtnTFont,
    pBtnTKerning,
    setPBtnTKerning,
    pBtnTLetterCase,
    setPBtnTLetterCase,
    pBtnTSize,
    setPBtnTSize,
    pBtnTWeight,
    setPBtnTWeight,

    sBtnBG,
    setSBtnBG,
    sBtnBlockPadding,
    setSBtnBlockPadding,
    sBtnBorder,
    setSBtnBorder,
    sBtnCornerRadius,
    setSBtnCornerRadius,
    sBtnInlinePadding,
    setSBtnInlinePadding,

    sBtnTFont,
    setSBtnTFont,
    sBtnTKerning,
    setSBtnTKerning,
    sBtnTLetterCase,
    setSBtnTLetterCase,
    sBtnTSize,
    setSBtnTSize,
    sBtnTWeight,
    setSBtnTWeight,

    selectBorder,
    setSelectBorder,
    selectTFont,
    setSelectTFont,
    selectTKerning,
    setSelectTKerning,
    selectTLetterCase,
    setSelectTLetterCase,
    selectTSize,
    setSelectTSize,
    selectTWeight,
    setSelectTWeight,

    textFieldBorder,
    setTextFieldBorder,
    textFieldTFont,
    setTextFieldTFont,
    textFieldTKerning,
    setTextFieldTKerning,
    textFieldTLetterCase,
    setTextFieldTLetterCase,
    textFieldTSize,
    setTextFieldTSize,
    textFieldTWeight,
    setTextFieldTWeight,

    // Design System
    canvasAccent,
    setCanvasAccent,
    canvasBackground,
    setCanvasBackground,
    canvasForeground,
    setCanvasForeground,

    color1Accent,
    setColor1Accent,
    color1Background,
    setColor1Background,
    color1Foreground,
    setColor1Foreground,

    color2Accent,
    setColor2Accent,
    color2Background,
    setColor2Background,
    color2Foreground,
    setColor2Foreground,

    criticalAccent,
    setCriticalAccent,
    criticalBackground,
    setCriticalBackground,
    criticalForeground,
    setCriticalForeground,

    interactiveAccent,
    setInteractiveAccent,
    interactiveBackground,
    setInteractiveBackground,
    interactiveForeground,
    setInteractiveForeground,

    primaryAccent,
    setPrimaryAccent,
    primaryBackground,
    setPrimaryBackground,
    primaryForeground,
    setPrimaryForeground,

    cornerRadiusIntBase,
    setCornerRadiusIntBase,
    cornerRadiusIntLarge,
    setCornerRadiusIntLarge,
    cornerRadiusIntSmall,
    setCornerRadiusIntSmall,

    tPrimaryFont,
    setTPrimaryFont,
    tPrimaryWeightBase,
    setTPrimaryWeightBase,
    tPrimaryWeightBold,
    setTPrimaryWeightBold,

    tSecondaryFont,
    setTSecondaryFont,
    tSecondaryWeightBase,
    setTSecondaryWeightBase,
    tSecondaryWeightBold,
    setTSecondaryWeightBold,

    tSizeBase,
    setTSizeBase,
    tSizeRatio,
    setTSizeRatio,
  } = configsAndMethods;

  return (
    <>
      <Heading>Settings</Heading>
      <Layout>
        <Layout.Section oneThird>
          <div title="CUSTOMIZATIONS">
            {data?.checkoutBranding?.customizations && (
              <div>
                <CustomCard title="Test title">
                  <p>Hello word</p>
                  <p>Hello word</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, eveniet odit distinctio iusto dolore totam doloribus
                    quisquam vitae repudiandae, et nesciunt iure asperiores
                    optio fugiat.
                  </p>
                </CustomCard>

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

                  <div className="pt-5" title="Typography" sectioned>
                    <Heading>Typography</Heading>
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
                  </div>
                </Card>
                <Card title="Header" sectioned>
                  <Select
                    label="Alignment"
                    options={alignmentOptions}
                    onChange={(value) => setHeaderAlignment(value)}
                    value={headerAlignment}
                  />
                  {/* {headerPosition !== "START" && <p>now is hidden</p>} */}
                  <ImagePreview
                    url={headerBannerImageUrl}
                    title={"Header banner image"}
                  />
                  <ImagePreview
                    url={headerLogoImageUrl}
                    title={"Header logo image"}
                  />
                  <RangeSlider
                    output
                    label="Logo max width"
                    min={0}
                    max={1000}
                    suffix={headerLogoMaxW}
                    value={headerLogoMaxW || 0}
                    onChange={(value) => {
                      setHeaderLogoMaxW(value);
                    }}
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
                <Card title="H3" sectioned>
                  <Select
                    label="Font"
                    options={fontTypeOptions}
                    onChange={(value) => setH3TFont(value)}
                    value={h3TFont}
                  />
                  <Select
                    label="Kerning"
                    options={kerningOptions}
                    onChange={(value) => setH3TKerning(value)}
                    value={h3TKerning}
                  />
                  <Select
                    label="Letter Case"
                    options={letterCaseOptions}
                    onChange={(value) => setH3TLetterCase(value)}
                    value={h3TLetterCase}
                  />
                  <Select
                    label="Size"
                    options={fontSizeOptions}
                    onChange={(value) => setH3TSize(value)}
                    value={h3TSize}
                  />
                  <Select
                    label="Weight"
                    options={fontWeightOptions}
                    onChange={(value) => setH3TWeight(value)}
                    value={h3TWeight}
                  />
                </Card>
                <Card title="Main background image" sectioned>
                  <ImagePreview url={mainBGImageUrl} />
                </Card>
                <Card title="Order background image" sectioned>
                  <ImagePreview url={orderBGImageUrl} />
                </Card>
              </div>
            )}
          </div>
        </Layout.Section>
        <Layout.Section oneThird>
          <div title="CUSTOMIZATIONS2">
            {data?.checkoutBranding?.customizations && (
              <div>
                <Card title="Primary button" sectioned>
                  <div title="Geometry" sectioned>
                    <Heading>Geometry</Heading>
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
                  </div>
                  <div className="pt-5" title="Typography" sectioned>
                    <Heading>Typography</Heading>
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
                  </div>
                </Card>
                <Card title="Secondary button" sectioned>
                  <div title="Geometry" sectioned>
                    <Heading>Geometry</Heading>
                    <Select
                      label="Background"
                      options={backgroundOptions}
                      onChange={(value) => setSBtnBG(value)}
                      value={sBtnBG}
                    />
                    <Select
                      label="Block Padding (Vertical)"
                      options={paddingOptions}
                      onChange={(value) => setSBtnBlockPadding(value)}
                      value={sBtnBlockPadding}
                    />
                    <Select
                      label="Inline Padding (Horizontal)"
                      options={paddingOptions}
                      onChange={(value) => setSBtnInlinePadding(value)}
                      value={sBtnInlinePadding}
                    />
                    <Select
                      label="Border"
                      options={borderOptions}
                      onChange={(value) => setSBtnBorder(value)}
                      value={sBtnBorder}
                    />
                    <Select
                      label="Corner Radius"
                      options={cornerRadiusOptions}
                      onChange={(value) => setSBtnCornerRadius(value)}
                      value={sBtnCornerRadius}
                    />
                  </div>
                  <div className="pt-5" title="Typography" sectioned>
                    <Heading>Typography</Heading>
                    <Select
                      label="Font"
                      options={fontTypeOptions}
                      onChange={(value) => setSBtnTFont(value)}
                      value={sBtnTFont}
                    />
                    <Select
                      label="Kerning"
                      options={kerningOptions}
                      onChange={(value) => setSBtnTKerning(value)}
                      value={sBtnTKerning}
                    />
                    <Select
                      label="Letter Case"
                      options={letterCaseOptions}
                      onChange={(value) => setSBtnTLetterCase(value)}
                      value={sBtnTLetterCase}
                    />
                    <Select
                      label="Size"
                      options={fontSizeOptions}
                      onChange={(value) => setSBtnTSize(value)}
                      value={sBtnTSize}
                    />
                    <Select
                      label="Weight"
                      options={fontWeightOptions}
                      onChange={(value) => setSBtnTWeight(value)}
                      value={sBtnTWeight}
                    />
                  </div>
                </Card>
                <Card title="Select" sectioned>
                  <Select
                    label="Border"
                    options={borderOptions}
                    onChange={(value) => setSelectBorder(value)}
                    value={selectBorder}
                  />
                  <div className="pt-5" title="Typography" sectioned>
                    <Heading>Typography</Heading>
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
                  </div>
                </Card>
                <Card title="Text field" sectioned>
                  <Select
                    label="Border"
                    options={borderOptions}
                    onChange={(value) => setTextFieldBorder(value)}
                    value={textFieldBorder}
                  />
                  <div className="pt-5" title="Typography" sectioned>
                    <Heading>Typography</Heading>
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
                  </div>
                </Card>
              </div>
            )}
          </div>
        </Layout.Section>

        <Layout.Section oneThird>
          <div title="DESIGN SYSTEM">
            {data?.checkoutBranding?.designSystem && (
              <div>
                <Card title="Color palette" sectioned>
                  <div title="Canvas" className="pb-5">
                    <Heading>Canvas</Heading>

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
                  </div>
                  <div title="Color 1" className="pb-5">
                    <Heading>Color 1</Heading>
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
                  </div>
                  <div title="Color 2" className="pb-5">
                    <Heading>Color 2</Heading>
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
                  </div>
                  <div title="Critical" className="pb-5">
                    <Heading>Critical</Heading>
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
                  </div>
                  <div title="Interactive" className="pb-5">
                    <Heading>Interactive</Heading>
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
                  </div>
                  <div title="Primary" className="pb-5">
                    <Heading>Primary</Heading>
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
                  </div>
                </Card>

                <Card title="Corner radius" sectioned>
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
                  <div className="pb-5">
                    <Banner status="warning">
                      <p>
                        Not all fonts have all weights, so after selecting, the
                        closest font weights will be selected and change value
                        at your select.
                      </p>
                    </Banner>
                  </div>

                  <div title="Primary" className="pb-5">
                    <Heading>Primary</Heading>
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
                  </div>
                  <div title="Secondary" className="pb-5">
                    <Heading>Secondary</Heading>

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
                  </div>
                  <div title="Size" className="pb-5">
                    <Heading>Size</Heading>

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
                  </div>
                </Card>
              </div>
            )}
          </div>
        </Layout.Section>
      </Layout>
    </>
  );
}
