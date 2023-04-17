import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import 'antd/dist/reset.css';
import "./assets/css/index.css";
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import Loading from "./pages/Loading";
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Provider store={store}>
          <App/>
        </Provider>
      </Suspense>
    </BrowserRouter>
);
