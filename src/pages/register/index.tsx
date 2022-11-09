import { NextPage } from "next";
import { RegisterForm } from "../../components/forms/register/RegisterForm";
import styles from './index.module.scss';

export const RegisterPage: NextPage = () => {
	return (
		<div className={styles.page}>
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;