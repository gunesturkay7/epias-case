/* Dependencies */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
/* Components */
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import HomePage from "./views/HomePage/HomePage";

/* Styles */
import "./App.scss";

function App() {
  const header = <Header />;
  const footer = <div>Footer</div>;
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout header={header} footer={footer}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/workspace" element={<HomePage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
