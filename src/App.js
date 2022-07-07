import { createStore } from "redux";
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";
import allReducer from "./reduces/index";

export default function App() {
    const store = createStore(allReducer);
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
  