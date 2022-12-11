import { Projects } from '../../components/dashboard/projects/projects';
import DashboardLayout from '../../components/layout/dashboardLayout/dashboardLayout';
import { NextPageWithLayout } from '../_app';

const DashboardProjectsPage: NextPageWithLayout = () => {
  return <Projects />
}

DashboardProjectsPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default DashboardProjectsPage;