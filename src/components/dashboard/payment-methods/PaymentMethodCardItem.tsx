import { FC } from "react";
import { MockPaymentMethodType } from "../../../types";
import styles from './index.module.scss';

type Props = {
	method: MockPaymentMethodType;
};

export const PaymentMethodCardItem: FC<Props> = ({ method }) => {
	return (
		<div className={styles.paymentCard}>
			<div className={styles.content}>
				<div>Gas Cashback</div>
				<div className={styles.last4}>**** **** **** *034</div>
			</div>
			<div className={styles.footer}>
				<div>Exp 09/24</div>
				<div>VISA</div>
			</div>
		</div>
	);
};
