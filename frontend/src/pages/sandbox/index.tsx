import TaskFields from '@/entities/task/ui/task-fields';
import { Task } from '@/share/api/models';
import ChangeTaskModal from '@/widget/change-task-modal/ui';
import Layout from '@/widget/layout';
import React from 'react';


function Sandbox() {
    return (
        <Layout header="test area of components">
            <ChangeTaskModal />
        </Layout>
    );
}

export default Sandbox;