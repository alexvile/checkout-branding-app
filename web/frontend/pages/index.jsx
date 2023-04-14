import { Card, Page, Layout, Button } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useAuthenticatedFetch } from "../hooks";

export default function HomePage() {
  const fetch = useAuthenticatedFetch();

  const getCheckouts = async () => {
    const res = await fetch("/api/checkouts");
    const json = await res.json();
    if (res.ok) {
      console.log(json);
    } else {
      console.log(json);
    }
  };

  return (
    <Page>
      <TitleBar title="Checkout customizer" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Button onClick={getCheckouts}>get</Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
