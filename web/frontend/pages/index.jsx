import { Page, Layout, Spinner } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { Select } from "@shopify/polaris";
import Settings from "../components/Settings";
import { useCustomizeData } from "../hooks";

export default function HomePage() {
  const {
    selected,
    checkouts,
    handleSelectChange,
    settings,
    loading,
    setLoading,
    setDefaultCheckoutSettings,
    configsAndMethods,
    setCheckoutSettings,
  } = useCustomizeData();

  const primaryAction = {
    content: "Save",
    disabled: loading,
    onAction: () => {
      setCheckoutSettings();
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
              <div>
                <Select
                  disabled={loading}
                  label="Choose checkout"
                  options={checkouts}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </div>
            )}
          </div>
          <Settings
            data={settings}
            loading={loading}
            setLoading={setLoading}
            checkout={selected}
            configsAndMethods={configsAndMethods}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
