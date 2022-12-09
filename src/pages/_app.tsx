import '../styles/globals.css';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import { AppPropsWithLayout } from '../types';

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	return <Component {...pageProps} />;
}
