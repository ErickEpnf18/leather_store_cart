import "../styles/globals.css";
import React from "react";
import Head from "next/head";
//**********REDUX********** */
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "../redux/store";
import { auth } from "firebase-config";


import Layout from "components/layout";
import "node_modules/bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps: {...pageProps } }) {
  const [data, setData] = React.useState({ view: true });
  const handlerBack = (e) => {
    setData(e);
  };

  function AuthIsLoaded({ children }) {
    const auth__ = useSelector((state) => state.user.user);
    const isLoading = useSelector((state) => state.user.load);
    console.log(auth, "************", auth__);
    console.log("**********esential**", isLoading);

    //!isLoaded(auth)
    if (!isLoading)
      return (
        <div className="text-center">
          <div
            className="spinner-grow text-primary"
            style={{ width: "7rem", height: "7rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    return children;
  }

  return (
    <Provider store={store}>
      <Layout data={data}>
        <Head>
          <title>Leather Store</title>
        </Head>
          {/* <AuthIsLoaded> */}
          <Component {...pageProps} handlerBack={handlerBack} data={data} />
          {/* </AuthIsLoaded> */}
      </Layout>
    </Provider>
  );
}

export default MyApp;
