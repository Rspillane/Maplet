import { AppProps } from "next/app";

export default function MyApp( {Components, pageProps}: AppProps ) {
    return <Components {...pageProps} />

}