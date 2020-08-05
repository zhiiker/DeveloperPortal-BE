// Dependencies
const KoaRouter = require('koa-router')

// Local Package
const { app, newApp, getAppDetail, getAppIcon, getAppSecret } = require('../controllers/app')

const AppRouter = new KoaRouter

AppRouter.get("/", app)
AppRouter.get("/detail", getAppDetail)
AppRouter.get("/secret", getAppSecret)
AppRouter.post("/new", newApp)
AppRouter.get("/appIcon", getAppIcon)

module.exports = AppRouter