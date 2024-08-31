import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const MyApp = ({ Component, pageProps }) => {
    const [queryClient] = useState(() => new QueryClient());
  return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
  )
}

export default MyApp
