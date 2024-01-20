import { Router } from "express";
import { ADMIN_KEY } from "../Modules/Constants";

const App = Router();

// ! ANY ENDPOINTS DEFINED IN THIS FILE WILL REQUIRE ADMIN AUTHORIZATION !
// ! ANY ENDPOINTS DEFINED IN THIS FILE WILL REQUIRE ADMIN AUTHORIZATION !
// ! ANY ENDPOINTS DEFINED IN THIS FILE WILL REQUIRE ADMIN AUTHORIZATION !

App.use((req, res, next) => {
    if (req.path === "/key")
        return res.status(req.body.Key === ADMIN_KEY ? 200 : 403).send(req.body.Key === ADMIN_KEY ? "Login successful!" : "Key doesn't match. Try again.");

    if (req.cookies["AdminKey"] !== ADMIN_KEY)
        return res.status(403).send("You don't have permission to access this endpoint.");

    next();
});

App.get("/test", (_, res) => res.send("Permission check OK"));

export default {
    App,
    DefaultAPI: "/admin/api"
}