import {
  createRoutesFromElements,
  Outlet,
  Route,
  Link,
} from "react-router-dom";
import NavigationManager from "./NavigationManager";

const routes = createRoutesFromElements(
  <Route
    path="/"
    element={
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    }
  >
    <Route path="/">
      <Route
        index
        element={
          <p>
            Curriculum App
            <Link to={"/about"}>
              App 2 about link
              <Link to={"/login"}>App 2 contact link</Link>
            </Link>
          </p>
        }
      />
      <Route path="about" element={<p>App 2 about page</p>} />
      <Route path="contact" element={<p>App 2 contact page</p>} />
      <Route path="about/contact" element={<p>TESt</p>} />
    </Route>
  </Route>
);

export default routes;
