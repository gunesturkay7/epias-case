import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
              <Route
                path="/a"
                element={
                  <div>
                    asdasd<br></br>
                    asdasd<br></br>
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
