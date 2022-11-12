import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/App.scss";
import App from "./App";
import store from "./store";
import Footer from "./components/Footer";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <Footer />
    </PersistGate>
  </Provider>
);
