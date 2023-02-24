import { SelectParty } from "@/features/select-party/ui";
import Layout from "@/widget/layout";
import React from "react";

function Settings(): JSX.Element {
  return (
    <Layout header="settings">
      <SelectParty />
    </Layout>
  );
}

export default Settings;
