import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllowNotification from "./pages/AllowNotification";
import CodeConfirm from "./pages/CodeConfirm";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AppLayout from "./pages/layouts/AppLayout";
import PlanLayout from "./pages/layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import Upcoming from "./pages/Upcoming";
import Activity from "./pages/Activity";
import InviteFreind from "./pages/InviteFreind";
function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path="/code_confirm" element={<CodeConfirm />} />
          <Route
            exact
            path="/allow_notification"
            element={<AllowNotification />}
          />
        </Routes>
      </PlanLayout>
      <AppLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/friends_invite" element={<InviteFreind />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
