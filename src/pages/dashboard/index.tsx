import { ReactElement } from "react";
import { DashboardInformation } from "../../components/dashboard/info/DashboardInformation";
import { PaymentMethodContainer } from "../../components/dashboard/pyment-methods/PaymentMethodContainer";
import { DashboardLayout } from "../../components/layouts/DashboardLayout";
import { NextPageWithLayout } from "../../types";
import styles from './index.module.scss';

const DashboardPage: NextPageWithLayout = () => {
	return (
		<>
			<header className={styles.header}>
				<h1>Welcome Back</h1>
			</header>
			<div className={styles.main}>
				<DashboardInformation />
				<PaymentMethodContainer />
			</div>
		</>
	);
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;
