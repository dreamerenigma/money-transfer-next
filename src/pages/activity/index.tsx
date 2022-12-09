import { ReactElement } from "react";
import { DashboardLayout } from "../../components/layouts/DashboardLayout";
import { NextPageWithLayout } from "../../types";

const ActivityPage: NextPageWithLayout = () => {
	return (
		<>
			<div>activity</div>
		</>
	);
};

ActivityPage.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>
};

export default ActivityPage;
