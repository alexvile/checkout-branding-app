import { Card, Page, Layout, Button } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useAuthenticatedFetch } from "../hooks";
import { Select } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import Settings from "../components/Settings";

export default function HomePage() {
  const fetch = useAuthenticatedFetch();

  const [settings, setSettings] = useState();

  const [checkouts, setCheckouts] = useState([]);
  const [selected, setSelected] = useState();
  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const getCheckouts = async () => {
    const res = await fetch("/api/checkouts");
    const json = await res.json();
    if (res.ok) {
      const checkoutOptions = json.chekouts.map(({ id, name }) => ({
        label: name,
        value: id,
      }));
      setCheckouts(checkoutOptions);
    } else {
      console.log(json);
    }
  };

  const getCheckoutSettings = async () => {
    const checkoutID = selected.split("/CheckoutProfile/")[1];
    const res = await fetch(`/api/checkout-settings/${checkoutID}`);
    const json = await res.json();
    if (res.ok) {
      setSettings(json.settings.data);
    } else {
      console.log(json);
    }
  };

  const defaultValues = {
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

  //     checkbox: {
  //       cornerRadius: "NONE",
  //     },
  //   },
  //   designSystem: {
  //     colorPalette: {
  //       canvas: {
  //         accent: "#1f9",
  //         background: "#ffffff",
  //         foreground: null,
  //       },
  //       color1: {
  //         accent: "#1f9",
  //         background: "#ffffff",
  //         foreground: "#000000",
  //       },
  //       color2: {
  //         accent: "#1f9",
  //         background: "#fafafa",
  //         foreground: "#000000",
  //       },
  //       critical: {
  //         accent: "#f55353",
  //         background: null,
  //         foreground: null,
  //       },
  //       interactive: {
  //         accent: null,
  //         background: null,
  //         foreground: "#1f9",
  //       },
  //       primary: {
  //         accent: null,
  //         background: "#1f9",
  //         foreground: "#ffffff",
  //       },
  //     },
  //   },
  // };

  const setDefaultCheckoutSettings = async () => {
    const checkoutID = selected.split("/CheckoutProfile/")[1];
    const res = await fetch(`/api/checkout-settings/${checkoutID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(defaultValues),
    });
    const json = await res.json();
    if (res.ok) {
      console.log(json);
    } else {
      console.log(json);
    }
  };

  useEffect(() => {
    getCheckouts();
  }, []);

  useEffect(() => {
    setSelected(checkouts[0]?.value);
  }, [checkouts]);

  return (
    <Page>
      <TitleBar title="Checkout customizer" primaryAction={null} />
      <Layout>
        <Layout.Section>
          {checkouts.length > 0 && (
            <Card sectioned>
              <Select
                label="Choose checkout"
                options={checkouts}
                onChange={handleSelectChange}
                value={selected}
              />

              <Button onClick={getCheckoutSettings}>
                Get checkout settings
              </Button>

              <Button onClick={setDefaultCheckoutSettings}>
                SET DEFAULT (WARNING)
              </Button>
            </Card>
          )}
          <Card sectioned>
            <Settings data={settings} checkout={selected} />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
