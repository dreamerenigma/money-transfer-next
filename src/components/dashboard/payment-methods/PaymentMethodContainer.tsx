import styles from './index.module.scss';
import { MockPaymentMethodType } from '../../../types';
import { PaymentMethodCardItem } from './PaymentMethodCardItem';
import { PaymentMethodHeader } from './PaymentMethodHeader';

const mockPaymentMethods: MockPaymentMethodType[] = [
	{
		type: 'visa',
		last4: '0036',
		name: 'Gas Cash Back',
	},
	{
		type: 'visa',
		last4: '0036',
		name: 'Gas Cash Back',
	},
	{
		type: 'visa',
		last4: '0036',
		name: 'Gas Cash Back',
	},
];

export const PaymentMethodContainer = () => {
	return (
		<>
			<PaymentMethodHeader />
			<div className={styles.container}>
				{mockPaymentMethods.map((method) => (
					<PaymentMethodCardItem key={method.last4} method={method} />
				))}
			</div>
		</>
	);
};
