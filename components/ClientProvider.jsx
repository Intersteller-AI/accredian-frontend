"use client";

import Navbar from "@/components/Generals/Navbar";
import { Provider } from "react-redux";
import store from "../store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const ClientProvider = ({ children }) => {
  const [client] = useState(new QueryClient());

  return (
    <>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          {/* <Navbar /> */}
          {children}
          <Toaster />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default ClientProvider;
