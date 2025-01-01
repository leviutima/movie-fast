import { Header } from "@/components/appComponents/header";
import { Outlet, useLocation } from "react-router-dom";

export function AppLayout() {
  const location = useLocation();

  const hideHeaderRoutes = ["/sign-in", "/sign-up"];
  const isHeaderHidden = hideHeaderRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col gap-32">
      <div>{!isHeaderHidden && <Header />}</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
