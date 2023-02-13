import React from 'react';
import { Provider } from "react-redux";
import { AppProps } from 'next/app';
import { wrapper } from '@/store';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};

export default App;