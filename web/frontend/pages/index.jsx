import { Card, Page, Layout, Button, Spinner } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useAuthenticatedFetch } from "../hooks";
import { Select } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import Settings from "../components/Settings";
import { DEFAULT_SETTINGS } from "../settings/default.settings";
import { useCustomizeData } from "../hooks";

export default function HomePage() {
  const fetch = useAuthenticatedFetch();

  const data = useCustomizeData();
  console.log("data", data);

  const {
    selected,
    checkouts,
    handleSelectChange,
    settings,
    loading,
    setLoading,
  } = data;

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

  const primaryAction = {
    content: "Save",
    disabled: loading,
    onAction: () => {
      console.log("send");
    },
  };
  const secondaryActions = [
    {
      content: "Set default",
      disabled: loading,
      onAction: () => {
        setDefaultCheckoutSettings();
      },
    },
  ];
  return (
    <Page>
      <TitleBar
        title="Checkout customizer"
        primaryAction={primaryAction}
        secondaryActions={secondaryActions}
      />
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
              </Card>
            )}
          </div>
          <Settings
            data={settings}
            // getCheckoutSettings={getCheckoutSettings}
            loading={loading}
            setLoading={setLoading}
            checkout={selected}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
