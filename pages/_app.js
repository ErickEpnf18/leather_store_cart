import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//**********REDUX********** */
import { Provider } from "react-redux";
import store from "../redux/store";
import { auth } from "firebase-config";
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from "redux/reducers/authSlice";
import { fetchKarts } from "redux/reducers/kartsSlice";
      //////categories/////
import { fetchCoats } from "redux/reducers/categories/coatsSlice";
import { fetchDresses } from "redux/reducers/categories/dressesSlice";
import { fetchFormalShirts } from "redux/reducers/categories/formalshirtsSlice";
import { fetchJeans } from "redux/reducers/categories/jeansSlice";
import { fetchMakeUp } from "redux/reducers/categories/makeupSlice";
import { fetchSportsWear } from "redux/reducers/categories/sportswearSlice";
import store_redux from "redux/store";


import Layout from "components/layout";
import "node_modules/bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps: {...pageProps } }) {

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

  //////////redux/////////
  store_redux.dispatch(fetchUser());
  //store_redux.dispatch(fetchKarts());
  ////////redux-categories///////
  store_redux.dispatch(fetchCoats());
  store_redux.dispatch(fetchDresses());
  store_redux.dispatch(fetchFormalShirts());
  store_redux.dispatch(fetchJeans());
  store_redux.dispatch(fetchMakeUp());
  store_redux.dispatch(fetchSportsWear());
  ////////redux-categories///////
  return (
    <Provider store={store}>
      {/* <Layout data={data}> */}
        <Head>
          <title>Leather Store</title>
        </Head>
          {/* <AuthIsLoaded> */}
          <Component {...pageProps} />
          {/* </AuthIsLoaded> */}
      {/* </Layout> */}
      <ToastContainer/>
    </Provider>
  );
}

export default MyApp;
