import DashboardPage from "@pages/DashboardPage";
import SettingsPage from "@pages/SettingsPage";

const routes = [
  {
    path: "/",
    element: <DashboardPage />
  },
  {
    path: "/settings",
    element: <SettingsPage />
  }
];

export default routes;