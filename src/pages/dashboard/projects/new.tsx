import { Create } from "../../../components/dashboard/create/create";
import DashboardLayout from "../../../components/layout/dashboardLayout/dashboardLayout";
import { NextPageWithLayout } from "../../_app";

const CreateNewProjectPage: NextPageWithLayout = () => {
  return <Create />
}

CreateNewProjectPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default CreateNewProjectPage;