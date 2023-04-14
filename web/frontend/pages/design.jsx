import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function PageName() {
  return (
    <Page>
      <TitleBar title="Design system" />
      <Layout>
        <Layout.Section>
          <Card sectioned>Design</Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
