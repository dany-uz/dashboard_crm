import AccessRoute from "#routes/auth/access.js";
import RootRoute from "#routes/root.js";

const Routes = [
    ...AccessRoute
]

export default Routes;
export { RootRoute };