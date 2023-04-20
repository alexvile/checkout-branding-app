import { Card, Page, Layout, Button, Spinner } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useAuthenticatedFetch } from "../hooks";
import { Select } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import Settings from "../components/Settings";
import { DEFAULT_SETTINGS } from "../settings/default.settings";

export default function HomePage() {
  const fetch = useAuthenticatedFetch();
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState();
  const [checkouts, setCheckouts] = useState([]);
  const [selected, setSelected] = useState();
  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const getCheckouts = async () => {
    setLoading(true);
    const res = await fetch("/api/checkouts");
    const json = await res.json();
    if (res.ok) {
      const checkoutOptions = json.chekouts.map(({ id, name }) => ({
        label: name,
        value: id,
      }));
      setCheckouts(checkoutOptions);
      setLoading(false);
    } else {
      console.log("error", json);
      setLoading(false);
    }
  };

  const getCheckoutSettings = async () => {
    setLoading(true);
    const checkoutID = selected.split("/CheckoutProfile/")[1];
    const res = await fetch(`/api/checkout-settings/${checkoutID}`);
    const json = await res.json();
    if (res.ok) {
      setSettings(json.settings.data);
      setLoading(false);
    } else {
      setLoading(false);
      console.log("error", json);
    }
  };

  const setDefaultCheckoutSettings = async () => {
    setLoading(true);
    const checkoutID = selected.split("/CheckoutProfile/")[1];
    const res = await fetch(`/api/checkout-settings/${checkoutID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DEFAULT_SETTINGS),
    });
    const json = await res.json();
    if (res.ok) {
      setSettings(json.updatedSettings.data.checkoutBrandingUpsert);
      setLoading(false);
    } else {
      console.log("error", json);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCheckouts();
  }, []);

  useEffect(() => {
    setSelected(checkouts[2]?.value);
  }, [checkouts]);

  useEffect(() => {
    if (selected) {
      getCheckoutSettings();
    }
  }, [selected]);

  return (
    <Page>
      <TitleBar title="Checkout customizer" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <div>
            {loading && <Spinner />}
            {checkouts.length > 0 && (
              <Card sectioned>
                <Select
                  disabled={loading}
                  label="Choose checkout"
                  options={checkouts}
                  onChange={handleSelectChange}
                  value={selected}
                />
                <div>
                  <Button
                    onClick={setDefaultCheckoutSettings}
                    disabled={loading}
                  >
                    Set default
                  </Button>
                  (WARNING)
                </div>
              </Card>
            )}
          </div>
          <Settings
            data={settings}
            getCheckoutSettings={getCheckoutSettings}
            loading={loading}
            setLoading={setLoading}
            checkout={selected}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
