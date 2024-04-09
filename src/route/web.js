import express from "express";
import homeControler from "../controler/homecontroler";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControler.gethomepage);
    router.get('/crud', homeControler.getCRUD);
    router.post('/post-crud', homeControler.postCRUD);
    router.get('/get-crud', homeControler.displayGetCRUD);
    router.get('/get-AboutPage', homeControler.getAboutPage);
    router.get('/edit-crud', homeControler.getEditCRUD);
    router.post('/put-crud', homeControler.putCRUD);
    router.get('/delete-crud', homeControler.deleteCRUD);
    return app.use("/", router);
}

module.exports = initWebRoutes;