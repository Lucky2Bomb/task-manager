import { SelectGroup } from '@/features/select-group';
import Layout from '@/widget/layout';
import React from 'react';

function Settings() {
    return (
        <Layout header="settings">
            <SelectGroup />
        </Layout>
    );
}

export default Settings;