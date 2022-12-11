import { IoAddCircleOutline } from 'react-icons/io5';
import styles from './index.module.scss';

export const PaymentMethodHeader = () => {
	return (
		<div className={styles.paymentMethodHeader}>
			<div>
				<span>Payment Methods</span>
			</div>
			<IoAddCircleOutline size={32} />
		</div>
	);
};