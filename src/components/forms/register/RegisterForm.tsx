import { FC } from "react";
import { Button } from "../../buttons/Button";
import { InputField } from "../../inputs/InputField";
import styles from './index.module.scss';

export const RegisterForm: FC<HTMLButtonElement> = () => {
	return (
		<form className={styles.form}>
			<div className={styles.nameContainer}>
				<InputField id="firstname" label="First Name" />
				<InputField id="lastname" label="Last Name" />
			</div>
			<InputField id="username" label="Username" />
			<InputField id="password" label="Password" />
			<Button className={styles.button}>Create Account</Button>
		</form>
	);
};