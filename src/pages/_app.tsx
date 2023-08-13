import {Layout} from '@/components/Layout/layout';
import type {AppProps} from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
