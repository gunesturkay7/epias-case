/* Dependencies */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
/* Components */
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
/* Styles */
import "./App.scss";
import { lazy } from "react";
const HomePage = lazy(() => import("./views/HomePage/HomePage"));

function App() {
  const header = <Header />;
  const footer = <Footer />;
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout header={header} footer={footer}>
            <Routes>
              <Route path="/" element={<Navigate to="/workspace" replace />} />
              <Route path="/workspace" element={<HomePage />} />
              <Route
                path="/profile"
                element={
                  <div>
                    <h1>Profile Page</h1>
                  </div>
                }
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
