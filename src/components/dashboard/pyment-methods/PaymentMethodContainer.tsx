import styles from './index.module.scss';
import { IoAddCircleOutline } from 'react-icons/io5';
import { MockPaymentMerthodType } from '../../../types';

const mockPaymentMethods: MockPaymentMerthodType[] = [
	{
		type: 'visa',
		last4: '0036',
		name: 'Gas Cash Back',
	},
];

export const PaymentMethodContainer = () => {
	return (
		<div className={styles.container}>
			{mockPaymentMethods.length < 3 ? (
				<>
					{mockPaymentMethods.map((method) => (
						<div key={method.last4} style={{ width: '500px' }}>
							{method.name}
						</div>
					))}
					<div className={styles.addPaymentCard}>
						<IoAddCircleOutline size={40} />
						<span>Add Payment Method</span>
					</div>
				</>
			) : (
				[]
			)}
		</div>
	);
};
