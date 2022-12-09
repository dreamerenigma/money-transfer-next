import { BalanceInfoCard } from "../balance/BalanceInfoCard";
import styles from './index.module.scss'

export const DashboardInformation = () => {
	return (
	<div className={styles.container}>
		<BalanceInfoCard />
		<BalanceInfoCard />
		<BalanceInfoCard />
	</div>
	);
};