import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import DeliveryAgentDashboard from "./pages/DeliveryAgentDashboard";
import ActiveDeliveryPage from "./pages/ActiveDeliveryPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import CompletedDeliveryPage from "./pages/CompletedDeliveryPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/delivery"
            element={
              <DeliveryAgentDashboard children={<ActiveDeliveryPage />} />
            }
          />
          <Route
            path="/delivery/:deliveryId"
            element={<DeliveryAgentDashboard children={<OrderDetailsPage />} />}
          />
          <Route
            path="/delivery/pending"
            element={
              <DeliveryAgentDashboard children={<>Pending Deliveries</>} />
            }
          />
          <Route
            path="/delivery/active"
            element={
              <DeliveryAgentDashboard children={<ActiveDeliveryPage/>} />
            }
          />
          <Route
            path="/delivery/completed"
            element={
              <DeliveryAgentDashboard children={<CompletedDeliveryPage/>} />
            }
          />
          <Route
            path="/delivery/profile"
            element={<DeliveryAgentDashboard children={<>My Profile</>} />}
          />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
