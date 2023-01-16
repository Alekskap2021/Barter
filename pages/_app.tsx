import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { GlobalStyle } from "../src/global-style";
import store from "../src/store";
import "../src/views/main/sliders/default-style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
