import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query"; //react query
import "./static/lib/animate/animate.min.css";
// import "./static/lib/bootstrap/css/bootstrap.css";

import "./static/css/style.css";
import "./static/lib/ionicons/css/ionicons.min.css";
import "./static/css/font-icon.css";
import "./static/lib/magnific-popup/magnific-popup.css";

import "./static/lib/owlcarousel/assets/owl.carousel.min.css";
import "./static/lib/ionicons/css/ionicons.min.css";
import "./static/lib/animate/animate.css";
import "./static/lib/font-awesome/css/font-awesome.min.css";

const queryClient = new QueryClient();
let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div id="body">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
