import DashboardLayout from "../components/layout/dashboardLayout/dashboardLayout";
import type { NextPageWithLayout } from "./_app";

const DashboardPage: NextPageWithLayout = () => {
  return (
    <h1 style={{color: 'white'}}>Website Analytics</h1>
  )
}

DashboardPage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default DashboardPage;