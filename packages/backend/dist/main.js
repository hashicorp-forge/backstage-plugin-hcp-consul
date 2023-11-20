/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?cd5e\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/backend-tasks */ \"@backstage/backend-tasks\");\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _plugins_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/app */ \"./src/plugins/app.ts\");\n/* harmony import */ var _plugins_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/auth */ \"./src/plugins/auth.ts\");\n/* harmony import */ var _plugins_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/catalog */ \"./src/plugins/catalog.ts\");\n/* harmony import */ var _plugins_scaffolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/scaffolder */ \"./src/plugins/scaffolder.ts\");\n/* harmony import */ var _plugins_proxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/proxy */ \"./src/plugins/proxy.ts\");\n/* harmony import */ var _plugins_techdocs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/techdocs */ \"./src/plugins/techdocs.ts\");\n/* harmony import */ var _plugins_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/search */ \"./src/plugins/search.ts\");\n/* harmony import */ var _plugins_hcp_consul_backend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins/hcp-consul-backend */ \"./src/plugins/hcp-consul-backend.ts\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @backstage/plugin-permission-node */ \"@backstage/plugin-permission-node\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @backstage/plugin-auth-node */ \"@backstage/plugin-auth-node\");\n/* harmony import */ var _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/*\n * Hi!\n *\n * Note that this is an EXAMPLE Backstage backend. Please check the README.\n *\n * Happy hacking!\n */ var _module_hot;\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction makeCreateEnv(config) {\n    const root = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.getRootLogger)();\n    const reader = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.UrlReaders.default({\n        logger: root,\n        config\n    });\n    const discovery = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.HostDiscovery.fromConfig(config);\n    const cacheManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.CacheManager.fromConfig(config);\n    const databaseManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.DatabaseManager.fromConfig(config, {\n        logger: root\n    });\n    const tokenManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.ServerTokenManager.noop();\n    const taskScheduler = _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__.TaskScheduler.fromConfig(config, {\n        databaseManager\n    });\n    const identity = _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12__.DefaultIdentityClient.create({\n        discovery\n    });\n    const permissions = _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11__.ServerPermissionClient.fromConfig(config, {\n        discovery,\n        tokenManager\n    });\n    root.info(`Created UrlReader ${reader}`);\n    return (plugin)=>{\n        const logger = root.child({\n            type: 'plugin',\n            plugin\n        });\n        const database = databaseManager.forPlugin(plugin);\n        const cache = cacheManager.forPlugin(plugin);\n        const scheduler = taskScheduler.forPlugin(plugin);\n        return {\n            logger,\n            database,\n            cache,\n            config,\n            reader,\n            discovery,\n            tokenManager,\n            scheduler,\n            permissions,\n            identity\n        };\n    };\n}\nasync function main() {\n    const config = await (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.loadBackendConfig)({\n        argv: process.argv,\n        logger: (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.getRootLogger)()\n    });\n    const createEnv = makeCreateEnv(config);\n    const catalogEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('catalog'));\n    const scaffolderEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('scaffolder'));\n    const authEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('auth'));\n    const proxyEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('proxy'));\n    const techdocsEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('techdocs'));\n    const searchEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('search'));\n    const appEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('app'));\n    const consulBackendEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('consul'));\n    const apiRouter = express_promise_router__WEBPACK_IMPORTED_MODULE_0___default()();\n    apiRouter.use('/catalog', await (0,_plugins_catalog__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(catalogEnv));\n    apiRouter.use('/scaffolder', await (0,_plugins_scaffolder__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(scaffolderEnv));\n    apiRouter.use('/auth', await (0,_plugins_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(authEnv));\n    apiRouter.use('/techdocs', await (0,_plugins_techdocs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(techdocsEnv));\n    apiRouter.use('/proxy', await (0,_plugins_proxy__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(proxyEnv));\n    apiRouter.use('/search', await (0,_plugins_search__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(searchEnv));\n    apiRouter.use('/hcp-consul-backend', await (0,_plugins_hcp_consul_backend__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(consulBackendEnv));\n    // Add backends ABOVE this line; this 404 handler is the catch-all fallback\n    apiRouter.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.notFoundHandler)());\n    const service = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.createServiceBuilder)(module).loadConfig(config).addRouter('/api', apiRouter).addRouter('', await (0,_plugins_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appEnv));\n    await service.start().catch((err)=>{\n        console.log(err);\n        process.exit(1);\n    });\n}\n(_module_hot = module.hot) === null || _module_hot === void 0 ? void 0 : _module_hot.accept();\nmain().catch((error)=>{\n    console.error('Backend failed to start up', error);\n    process.exit(1);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTUE7QUFFQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FiaGlzaGVrc2FodS9Eb2N1bWVudHMvaGFzaGljb3JwLXBsYXlncm91bmQvaGFzaGljb3JwLWZvcmdlL2JhY2tzdGFnZS1wbHVnaW4vcGFja2FnZXMvYmFja2VuZC9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEhpIVxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGlzIGFuIEVYQU1QTEUgQmFja3N0YWdlIGJhY2tlbmQuIFBsZWFzZSBjaGVjayB0aGUgUkVBRE1FLlxuICpcbiAqIEhhcHB5IGhhY2tpbmchXG4gKi9cblxuaW1wb3J0IFJvdXRlciBmcm9tICdleHByZXNzLXByb21pc2Utcm91dGVyJztcbmltcG9ydCB7XG4gIGNyZWF0ZVNlcnZpY2VCdWlsZGVyLFxuICBsb2FkQmFja2VuZENvbmZpZyxcbiAgZ2V0Um9vdExvZ2dlcixcbiAgdXNlSG90TWVtb2l6ZSxcbiAgbm90Rm91bmRIYW5kbGVyLFxuICBDYWNoZU1hbmFnZXIsXG4gIERhdGFiYXNlTWFuYWdlcixcbiAgSG9zdERpc2NvdmVyeSxcbiAgVXJsUmVhZGVycyxcbiAgU2VydmVyVG9rZW5NYW5hZ2VyLFxufSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCB7IFRhc2tTY2hlZHVsZXIgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtdGFza3MnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGJhY2tzdGFnZS9jb25maWcnO1xuaW1wb3J0IGFwcCBmcm9tICcuL3BsdWdpbnMvYXBwJztcbmltcG9ydCBhdXRoIGZyb20gJy4vcGx1Z2lucy9hdXRoJztcbmltcG9ydCBjYXRhbG9nIGZyb20gJy4vcGx1Z2lucy9jYXRhbG9nJztcbmltcG9ydCBzY2FmZm9sZGVyIGZyb20gJy4vcGx1Z2lucy9zY2FmZm9sZGVyJztcbmltcG9ydCBwcm94eSBmcm9tICcuL3BsdWdpbnMvcHJveHknO1xuaW1wb3J0IHRlY2hkb2NzIGZyb20gJy4vcGx1Z2lucy90ZWNoZG9jcyc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vcGx1Z2lucy9zZWFyY2gnO1xuaW1wb3J0IGNvbnN1bCBmcm9tICcuL3BsdWdpbnMvaGNwLWNvbnN1bC1iYWNrZW5kJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTZXJ2ZXJQZXJtaXNzaW9uQ2xpZW50IH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tcGVybWlzc2lvbi1ub2RlJztcbmltcG9ydCB7IERlZmF1bHRJZGVudGl0eUNsaWVudCB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWF1dGgtbm9kZSc7XG5cbmZ1bmN0aW9uIG1ha2VDcmVhdGVFbnYoY29uZmlnOiBDb25maWcpIHtcbiAgY29uc3Qgcm9vdCA9IGdldFJvb3RMb2dnZXIoKTtcbiAgY29uc3QgcmVhZGVyID0gVXJsUmVhZGVycy5kZWZhdWx0KHsgbG9nZ2VyOiByb290LCBjb25maWcgfSk7XG4gIGNvbnN0IGRpc2NvdmVyeSA9IEhvc3REaXNjb3ZlcnkuZnJvbUNvbmZpZyhjb25maWcpO1xuICBjb25zdCBjYWNoZU1hbmFnZXIgPSBDYWNoZU1hbmFnZXIuZnJvbUNvbmZpZyhjb25maWcpO1xuICBjb25zdCBkYXRhYmFzZU1hbmFnZXIgPSBEYXRhYmFzZU1hbmFnZXIuZnJvbUNvbmZpZyhjb25maWcsIHsgbG9nZ2VyOiByb290IH0pO1xuICBjb25zdCB0b2tlbk1hbmFnZXIgPSBTZXJ2ZXJUb2tlbk1hbmFnZXIubm9vcCgpO1xuICBjb25zdCB0YXNrU2NoZWR1bGVyID0gVGFza1NjaGVkdWxlci5mcm9tQ29uZmlnKGNvbmZpZywgeyBkYXRhYmFzZU1hbmFnZXIgfSk7XG5cbiAgY29uc3QgaWRlbnRpdHkgPSBEZWZhdWx0SWRlbnRpdHlDbGllbnQuY3JlYXRlKHtcbiAgICBkaXNjb3ZlcnksXG4gIH0pO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IFNlcnZlclBlcm1pc3Npb25DbGllbnQuZnJvbUNvbmZpZyhjb25maWcsIHtcbiAgICBkaXNjb3ZlcnksXG4gICAgdG9rZW5NYW5hZ2VyLFxuICB9KTtcblxuICByb290LmluZm8oYENyZWF0ZWQgVXJsUmVhZGVyICR7cmVhZGVyfWApO1xuXG4gIHJldHVybiAocGx1Z2luOiBzdHJpbmcpOiBQbHVnaW5FbnZpcm9ubWVudCA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gcm9vdC5jaGlsZCh7IHR5cGU6ICdwbHVnaW4nLCBwbHVnaW4gfSk7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBkYXRhYmFzZU1hbmFnZXIuZm9yUGx1Z2luKHBsdWdpbik7XG4gICAgY29uc3QgY2FjaGUgPSBjYWNoZU1hbmFnZXIuZm9yUGx1Z2luKHBsdWdpbik7XG4gICAgY29uc3Qgc2NoZWR1bGVyID0gdGFza1NjaGVkdWxlci5mb3JQbHVnaW4ocGx1Z2luKTtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VyLFxuICAgICAgZGF0YWJhc2UsXG4gICAgICBjYWNoZSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHJlYWRlcixcbiAgICAgIGRpc2NvdmVyeSxcbiAgICAgIHRva2VuTWFuYWdlcixcbiAgICAgIHNjaGVkdWxlcixcbiAgICAgIHBlcm1pc3Npb25zLFxuICAgICAgaWRlbnRpdHksXG4gICAgfTtcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZEJhY2tlbmRDb25maWcoe1xuICAgIGFyZ3Y6IHByb2Nlc3MuYXJndixcbiAgICBsb2dnZXI6IGdldFJvb3RMb2dnZXIoKSxcbiAgfSk7XG4gIGNvbnN0IGNyZWF0ZUVudiA9IG1ha2VDcmVhdGVFbnYoY29uZmlnKTtcblxuICBjb25zdCBjYXRhbG9nRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignY2F0YWxvZycpKTtcbiAgY29uc3Qgc2NhZmZvbGRlckVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ3NjYWZmb2xkZXInKSk7XG4gIGNvbnN0IGF1dGhFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdhdXRoJykpO1xuICBjb25zdCBwcm94eUVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ3Byb3h5JykpO1xuICBjb25zdCB0ZWNoZG9jc0VudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ3RlY2hkb2NzJykpO1xuICBjb25zdCBzZWFyY2hFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdzZWFyY2gnKSk7XG4gIGNvbnN0IGFwcEVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ2FwcCcpKTtcbiAgY29uc3QgY29uc3VsQmFja2VuZEVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ2NvbnN1bCcpKTtcblxuICBjb25zdCBhcGlSb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgYXBpUm91dGVyLnVzZSgnL2NhdGFsb2cnLCBhd2FpdCBjYXRhbG9nKGNhdGFsb2dFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL3NjYWZmb2xkZXInLCBhd2FpdCBzY2FmZm9sZGVyKHNjYWZmb2xkZXJFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL2F1dGgnLCBhd2FpdCBhdXRoKGF1dGhFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL3RlY2hkb2NzJywgYXdhaXQgdGVjaGRvY3ModGVjaGRvY3NFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL3Byb3h5JywgYXdhaXQgcHJveHkocHJveHlFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL3NlYXJjaCcsIGF3YWl0IHNlYXJjaChzZWFyY2hFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL2hjcC1jb25zdWwtYmFja2VuZCcsIGF3YWl0IGNvbnN1bChjb25zdWxCYWNrZW5kRW52KSk7XG5cbiAgLy8gQWRkIGJhY2tlbmRzIEFCT1ZFIHRoaXMgbGluZTsgdGhpcyA0MDQgaGFuZGxlciBpcyB0aGUgY2F0Y2gtYWxsIGZhbGxiYWNrXG4gIGFwaVJvdXRlci51c2Uobm90Rm91bmRIYW5kbGVyKCkpO1xuXG4gIGNvbnN0IHNlcnZpY2UgPSBjcmVhdGVTZXJ2aWNlQnVpbGRlcihtb2R1bGUpXG4gICAgLmxvYWRDb25maWcoY29uZmlnKVxuICAgIC5hZGRSb3V0ZXIoJy9hcGknLCBhcGlSb3V0ZXIpXG4gICAgLmFkZFJvdXRlcignJywgYXdhaXQgYXBwKGFwcEVudikpO1xuXG4gIGF3YWl0IHNlcnZpY2Uuc3RhcnQoKS5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9KTtcbn1cblxubW9kdWxlLmhvdD8uYWNjZXB0KCk7XG5tYWluKCkuY2F0Y2goZXJyb3IgPT4ge1xuICBjb25zb2xlLmVycm9yKCdCYWNrZW5kIGZhaWxlZCB0byBzdGFydCB1cCcsIGVycm9yKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/plugins/app.ts":
/*!****************************!*\
  !*** ./src/plugins/app.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-app-backend */ \"@backstage/plugin-app-backend\");\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        appPackageName: 'app'\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hcHAudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hYmhpc2hla3NhaHUvRG9jdW1lbnRzL2hhc2hpY29ycC1wbGF5Z3JvdW5kL2hhc2hpY29ycC1mb3JnZS9iYWNrc3RhZ2UtcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWFwcC1iYWNrZW5kJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgZGF0YWJhc2U6IGVudi5kYXRhYmFzZSxcbiAgICBhcHBQYWNrYWdlTmFtZTogJ2FwcCcsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/app.ts\n");

/***/ }),

/***/ "./src/plugins/auth.ts":
/*!*****************************!*\
  !*** ./src/plugins/auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-auth-backend */ \"@backstage/plugin-auth-backend\");\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        discovery: env.discovery,\n        tokenManager: env.tokenManager,\n        providerFactories: {\n            ..._backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.defaultAuthProviderFactories,\n            // This replaces the default GitHub auth provider with a customized one.\n            // The `signIn` option enables sign-in for this provider, using the\n            // identity resolution logic that's provided in the `resolver` callback.\n            //\n            // This particular resolver makes all users share a single \"guest\" identity.\n            // It should only be used for testing and trying out Backstage.\n            //\n            // If you want to use a production ready resolver you can switch to\n            // the one that is commented out below, it looks up a user entity in the\n            // catalog using the GitHub username of the authenticated user.\n            // That resolver requires you to have user entities populated in the catalog,\n            // for example using https://backstage.io/docs/integrations/github/org\n            //\n            // There are other resolvers to choose from, and you can also create\n            // your own, see the auth documentation for more details:\n            //\n            //   https://backstage.io/docs/auth/identity-resolver\n            github: _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.providers.github.create({\n                signIn: {\n                    resolver (_, ctx) {\n                        const userRef = 'user:default/guest'; // Must be a full entity reference\n                        return ctx.issueToken({\n                            claims: {\n                                sub: userRef,\n                                ent: [\n                                    userRef\n                                ]\n                            }\n                        });\n                    }\n                }\n            })\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYWJoaXNoZWtzYWh1L0RvY3VtZW50cy9oYXNoaWNvcnAtcGxheWdyb3VuZC9oYXNoaWNvcnAtZm9yZ2UvYmFja3N0YWdlLXBsdWdpbi9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlUm91dGVyLFxuICBwcm92aWRlcnMsXG4gIGRlZmF1bHRBdXRoUHJvdmlkZXJGYWN0b3JpZXMsXG59IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWF1dGgtYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGRhdGFiYXNlOiBlbnYuZGF0YWJhc2UsXG4gICAgZGlzY292ZXJ5OiBlbnYuZGlzY292ZXJ5LFxuICAgIHRva2VuTWFuYWdlcjogZW52LnRva2VuTWFuYWdlcixcbiAgICBwcm92aWRlckZhY3Rvcmllczoge1xuICAgICAgLi4uZGVmYXVsdEF1dGhQcm92aWRlckZhY3RvcmllcyxcblxuICAgICAgLy8gVGhpcyByZXBsYWNlcyB0aGUgZGVmYXVsdCBHaXRIdWIgYXV0aCBwcm92aWRlciB3aXRoIGEgY3VzdG9taXplZCBvbmUuXG4gICAgICAvLyBUaGUgYHNpZ25JbmAgb3B0aW9uIGVuYWJsZXMgc2lnbi1pbiBmb3IgdGhpcyBwcm92aWRlciwgdXNpbmcgdGhlXG4gICAgICAvLyBpZGVudGl0eSByZXNvbHV0aW9uIGxvZ2ljIHRoYXQncyBwcm92aWRlZCBpbiB0aGUgYHJlc29sdmVyYCBjYWxsYmFjay5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIHBhcnRpY3VsYXIgcmVzb2x2ZXIgbWFrZXMgYWxsIHVzZXJzIHNoYXJlIGEgc2luZ2xlIFwiZ3Vlc3RcIiBpZGVudGl0eS5cbiAgICAgIC8vIEl0IHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIHRlc3RpbmcgYW5kIHRyeWluZyBvdXQgQmFja3N0YWdlLlxuICAgICAgLy9cbiAgICAgIC8vIElmIHlvdSB3YW50IHRvIHVzZSBhIHByb2R1Y3Rpb24gcmVhZHkgcmVzb2x2ZXIgeW91IGNhbiBzd2l0Y2ggdG9cbiAgICAgIC8vIHRoZSBvbmUgdGhhdCBpcyBjb21tZW50ZWQgb3V0IGJlbG93LCBpdCBsb29rcyB1cCBhIHVzZXIgZW50aXR5IGluIHRoZVxuICAgICAgLy8gY2F0YWxvZyB1c2luZyB0aGUgR2l0SHViIHVzZXJuYW1lIG9mIHRoZSBhdXRoZW50aWNhdGVkIHVzZXIuXG4gICAgICAvLyBUaGF0IHJlc29sdmVyIHJlcXVpcmVzIHlvdSB0byBoYXZlIHVzZXIgZW50aXRpZXMgcG9wdWxhdGVkIGluIHRoZSBjYXRhbG9nLFxuICAgICAgLy8gZm9yIGV4YW1wbGUgdXNpbmcgaHR0cHM6Ly9iYWNrc3RhZ2UuaW8vZG9jcy9pbnRlZ3JhdGlvbnMvZ2l0aHViL29yZ1xuICAgICAgLy9cbiAgICAgIC8vIFRoZXJlIGFyZSBvdGhlciByZXNvbHZlcnMgdG8gY2hvb3NlIGZyb20sIGFuZCB5b3UgY2FuIGFsc28gY3JlYXRlXG4gICAgICAvLyB5b3VyIG93biwgc2VlIHRoZSBhdXRoIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgZGV0YWlsczpcbiAgICAgIC8vXG4gICAgICAvLyAgIGh0dHBzOi8vYmFja3N0YWdlLmlvL2RvY3MvYXV0aC9pZGVudGl0eS1yZXNvbHZlclxuICAgICAgZ2l0aHViOiBwcm92aWRlcnMuZ2l0aHViLmNyZWF0ZSh7XG4gICAgICAgIHNpZ25Jbjoge1xuICAgICAgICAgIHJlc29sdmVyKF8sIGN0eCkge1xuICAgICAgICAgICAgY29uc3QgdXNlclJlZiA9ICd1c2VyOmRlZmF1bHQvZ3Vlc3QnOyAvLyBNdXN0IGJlIGEgZnVsbCBlbnRpdHkgcmVmZXJlbmNlXG4gICAgICAgICAgICByZXR1cm4gY3R4Lmlzc3VlVG9rZW4oe1xuICAgICAgICAgICAgICBjbGFpbXM6IHtcbiAgICAgICAgICAgICAgICBzdWI6IHVzZXJSZWYsIC8vIFRoZSB1c2VyJ3Mgb3duIGlkZW50aXR5XG4gICAgICAgICAgICAgICAgZW50OiBbdXNlclJlZl0sIC8vIEEgbGlzdCBvZiBpZGVudGl0aWVzIHRoYXQgdGhlIHVzZXIgY2xhaW1zIG93bmVyc2hpcCB0aHJvdWdoXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHJlc29sdmVyOiBwcm92aWRlcnMuZ2l0aHViLnJlc29sdmVycy51c2VybmFtZU1hdGNoaW5nVXNlckVudGl0eU5hbWUoKSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/auth.ts\n");

/***/ }),

/***/ "./src/plugins/catalog.ts":
/*!********************************!*\
  !*** ./src/plugins/catalog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function createPlugin(env) {\n    const builder = await _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__.CatalogBuilder.create(env);\n    builder.addProcessor(new _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.ScaffolderEntitiesProcessor());\n    const { processingEngine, router } = await builder.build();\n    await processingEngine.start();\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9jYXRhbG9nLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hYmhpc2hla3NhaHUvRG9jdW1lbnRzL2hhc2hpY29ycC1wbGF5Z3JvdW5kL2hhc2hpY29ycC1mb3JnZS9iYWNrc3RhZ2UtcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvY2F0YWxvZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRhbG9nQnVpbGRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWNhdGFsb2ctYmFja2VuZCc7XG5pbXBvcnQgeyBTY2FmZm9sZGVyRW50aXRpZXNQcm9jZXNzb3IgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1zY2FmZm9sZGVyLWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgY29uc3QgYnVpbGRlciA9IGF3YWl0IENhdGFsb2dCdWlsZGVyLmNyZWF0ZShlbnYpO1xuICBidWlsZGVyLmFkZFByb2Nlc3NvcihuZXcgU2NhZmZvbGRlckVudGl0aWVzUHJvY2Vzc29yKCkpO1xuICBjb25zdCB7IHByb2Nlc3NpbmdFbmdpbmUsIHJvdXRlciB9ID0gYXdhaXQgYnVpbGRlci5idWlsZCgpO1xuICBhd2FpdCBwcm9jZXNzaW5nRW5naW5lLnN0YXJ0KCk7XG4gIHJldHVybiByb3V0ZXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/catalog.ts\n");

/***/ }),

/***/ "./src/plugins/hcp-consul-backend.ts":
/*!*******************************************!*\
  !*** ./src/plugins/hcp-consul-backend.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_hcp_consul_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-hcp-consul-backend */ \"../../plugins/hcp-consul-backend/src/index.ts\");\n\nasync function createPlugin(env) {\n    // Here is where you will add all of the required initialization code that\n    // your backend plugin needs to be able to start!\n    // The env contains a lot of goodies, but our router currently only\n    // needs a logger\n    return await (0,_backstage_plugin_hcp_consul_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)(env);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9oY3AtY29uc3VsLWJhY2tlbmQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hYmhpc2hla3NhaHUvRG9jdW1lbnRzL2hhc2hpY29ycC1wbGF5Z3JvdW5kL2hhc2hpY29ycC1mb3JnZS9iYWNrc3RhZ2UtcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvaGNwLWNvbnN1bC1iYWNrZW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWhjcC1jb25zdWwtYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICAvLyBIZXJlIGlzIHdoZXJlIHlvdSB3aWxsIGFkZCBhbGwgb2YgdGhlIHJlcXVpcmVkIGluaXRpYWxpemF0aW9uIGNvZGUgdGhhdFxuICAvLyB5b3VyIGJhY2tlbmQgcGx1Z2luIG5lZWRzIHRvIGJlIGFibGUgdG8gc3RhcnQhXG5cbiAgLy8gVGhlIGVudiBjb250YWlucyBhIGxvdCBvZiBnb29kaWVzLCBidXQgb3VyIHJvdXRlciBjdXJyZW50bHkgb25seVxuICAvLyBuZWVkcyBhIGxvZ2dlclxuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKCAgICBlbnYgICk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/hcp-consul-backend.ts\n");

/***/ }),

/***/ "./src/plugins/proxy.ts":
/*!******************************!*\
  !*** ./src/plugins/proxy.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-proxy-backend */ \"@backstage/plugin-proxy-backend\");\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        discovery: env.discovery\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9wcm94eS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hYmhpc2hla3NhaHUvRG9jdW1lbnRzL2hhc2hpY29ycC1wbGF5Z3JvdW5kL2hhc2hpY29ycC1mb3JnZS9iYWNrc3RhZ2UtcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvcHJveHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUm91dGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tcHJveHktYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/proxy.ts\n");

/***/ }),

/***/ "./src/plugins/scaffolder.ts":
/*!***********************************!*\
  !*** ./src/plugins/scaffolder.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/catalog-client */ \"@backstage/catalog-client\");\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function createPlugin(env) {\n    const catalogClient = new _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__.CatalogClient({\n        discoveryApi: env.discovery\n    });\n    return await (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        reader: env.reader,\n        catalogClient,\n        identity: env.identity,\n        permissions: env.permissions\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zY2FmZm9sZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FiaGlzaGVrc2FodS9Eb2N1bWVudHMvaGFzaGljb3JwLXBsYXlncm91bmQvaGFzaGljb3JwLWZvcmdlL2JhY2tzdGFnZS1wbHVnaW4vcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9zY2FmZm9sZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhdGFsb2dDbGllbnQgfSBmcm9tICdAYmFja3N0YWdlL2NhdGFsb2ctY2xpZW50JztcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXNjYWZmb2xkZXItYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB0eXBlIHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIGNvbnN0IGNhdGFsb2dDbGllbnQgPSBuZXcgQ2F0YWxvZ0NsaWVudCh7XG4gICAgZGlzY292ZXJ5QXBpOiBlbnYuZGlzY292ZXJ5LFxuICB9KTtcblxuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGRhdGFiYXNlOiBlbnYuZGF0YWJhc2UsXG4gICAgcmVhZGVyOiBlbnYucmVhZGVyLFxuICAgIGNhdGFsb2dDbGllbnQsXG4gICAgaWRlbnRpdHk6IGVudi5pZGVudGl0eSxcbiAgICBwZXJtaXNzaW9uczogZW52LnBlcm1pc3Npb25zLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/scaffolder.ts\n");

/***/ }),

/***/ "./src/plugins/search.ts":
/*!*******************************!*\
  !*** ./src/plugins/search.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?cd5e\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-search-backend */ \"@backstage/plugin-search-backend\");\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-search-backend-node */ \"@backstage/plugin-search-backend-node\");\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @backstage/plugin-techdocs-backend */ \"@backstage/plugin-techdocs-backend\");\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nasync function createPlugin(env) {\n    // Initialize a connection to a search engine.\n    const searchEngine = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.LunrSearchEngine({\n        logger: env.logger\n    });\n    const indexBuilder = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.IndexBuilder({\n        logger: env.logger,\n        searchEngine\n    });\n    const schedule = env.scheduler.createScheduledTaskRunner({\n        frequency: {\n            minutes: 10\n        },\n        timeout: {\n            minutes: 15\n        },\n        // A 3 second delay gives the backend server a chance to initialize before\n        // any collators are executed, which may attempt requests against the API.\n        initialDelay: {\n            seconds: 3\n        }\n    });\n    // Collators are responsible for gathering documents known to plugins. This\n    // collator gathers entities from the software catalog.\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__.DefaultCatalogCollatorFactory.fromConfig(env.config, {\n            discovery: env.discovery,\n            tokenManager: env.tokenManager\n        })\n    });\n    // collator gathers entities from techdocs.\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__.DefaultTechDocsCollatorFactory.fromConfig(env.config, {\n            discovery: env.discovery,\n            logger: env.logger,\n            tokenManager: env.tokenManager\n        })\n    });\n    // The scheduler controls when documents are gathered from collators and sent\n    // to the search engine for indexing.\n    const { scheduler } = await indexBuilder.build();\n    scheduler.start();\n    (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotCleanup)(module, ()=>scheduler.stop());\n    return await (0,_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        engine: indexBuilder.getSearchEngine(),\n        types: indexBuilder.getDocumentTypes(),\n        permissions: env.permissions,\n        config: env.config,\n        logger: env.logger\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zZWFyY2gudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FiaGlzaGVrc2FodS9Eb2N1bWVudHMvaGFzaGljb3JwLXBsYXlncm91bmQvaGFzaGljb3JwLWZvcmdlL2JhY2tzdGFnZS1wbHVnaW4vcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9zZWFyY2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlSG90Q2xlYW51cCB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHsgY3JlYXRlUm91dGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tc2VhcmNoLWJhY2tlbmQnO1xuaW1wb3J0IHtcbiAgSW5kZXhCdWlsZGVyLFxuICBMdW5yU2VhcmNoRW5naW5lLFxufSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1zZWFyY2gtYmFja2VuZC1ub2RlJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGVmYXVsdENhdGFsb2dDb2xsYXRvckZhY3RvcnkgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1jYXRhbG9nLWJhY2tlbmQnO1xuaW1wb3J0IHsgRGVmYXVsdFRlY2hEb2NzQ29sbGF0b3JGYWN0b3J5IH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tdGVjaGRvY3MtYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgLy8gSW5pdGlhbGl6ZSBhIGNvbm5lY3Rpb24gdG8gYSBzZWFyY2ggZW5naW5lLlxuICBjb25zdCBzZWFyY2hFbmdpbmUgPSBuZXcgTHVuclNlYXJjaEVuZ2luZSh7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICB9KTtcbiAgY29uc3QgaW5kZXhCdWlsZGVyID0gbmV3IEluZGV4QnVpbGRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIHNlYXJjaEVuZ2luZSxcbiAgfSk7XG5cbiAgY29uc3Qgc2NoZWR1bGUgPSBlbnYuc2NoZWR1bGVyLmNyZWF0ZVNjaGVkdWxlZFRhc2tSdW5uZXIoe1xuICAgIGZyZXF1ZW5jeTogeyBtaW51dGVzOiAxMCB9LFxuICAgIHRpbWVvdXQ6IHsgbWludXRlczogMTUgfSxcbiAgICAvLyBBIDMgc2Vjb25kIGRlbGF5IGdpdmVzIHRoZSBiYWNrZW5kIHNlcnZlciBhIGNoYW5jZSB0byBpbml0aWFsaXplIGJlZm9yZVxuICAgIC8vIGFueSBjb2xsYXRvcnMgYXJlIGV4ZWN1dGVkLCB3aGljaCBtYXkgYXR0ZW1wdCByZXF1ZXN0cyBhZ2FpbnN0IHRoZSBBUEkuXG4gICAgaW5pdGlhbERlbGF5OiB7IHNlY29uZHM6IDMgfSxcbiAgfSk7XG5cbiAgLy8gQ29sbGF0b3JzIGFyZSByZXNwb25zaWJsZSBmb3IgZ2F0aGVyaW5nIGRvY3VtZW50cyBrbm93biB0byBwbHVnaW5zLiBUaGlzXG4gIC8vIGNvbGxhdG9yIGdhdGhlcnMgZW50aXRpZXMgZnJvbSB0aGUgc29mdHdhcmUgY2F0YWxvZy5cbiAgaW5kZXhCdWlsZGVyLmFkZENvbGxhdG9yKHtcbiAgICBzY2hlZHVsZSxcbiAgICBmYWN0b3J5OiBEZWZhdWx0Q2F0YWxvZ0NvbGxhdG9yRmFjdG9yeS5mcm9tQ29uZmlnKGVudi5jb25maWcsIHtcbiAgICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgICAgIHRva2VuTWFuYWdlcjogZW52LnRva2VuTWFuYWdlcixcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gY29sbGF0b3IgZ2F0aGVycyBlbnRpdGllcyBmcm9tIHRlY2hkb2NzLlxuICBpbmRleEJ1aWxkZXIuYWRkQ29sbGF0b3Ioe1xuICAgIHNjaGVkdWxlLFxuICAgIGZhY3Rvcnk6IERlZmF1bHRUZWNoRG9jc0NvbGxhdG9yRmFjdG9yeS5mcm9tQ29uZmlnKGVudi5jb25maWcsIHtcbiAgICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICAgIHRva2VuTWFuYWdlcjogZW52LnRva2VuTWFuYWdlcixcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gVGhlIHNjaGVkdWxlciBjb250cm9scyB3aGVuIGRvY3VtZW50cyBhcmUgZ2F0aGVyZWQgZnJvbSBjb2xsYXRvcnMgYW5kIHNlbnRcbiAgLy8gdG8gdGhlIHNlYXJjaCBlbmdpbmUgZm9yIGluZGV4aW5nLlxuICBjb25zdCB7IHNjaGVkdWxlciB9ID0gYXdhaXQgaW5kZXhCdWlsZGVyLmJ1aWxkKCk7XG4gIHNjaGVkdWxlci5zdGFydCgpO1xuXG4gIHVzZUhvdENsZWFudXAobW9kdWxlLCAoKSA9PiBzY2hlZHVsZXIuc3RvcCgpKTtcblxuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBlbmdpbmU6IGluZGV4QnVpbGRlci5nZXRTZWFyY2hFbmdpbmUoKSxcbiAgICB0eXBlczogaW5kZXhCdWlsZGVyLmdldERvY3VtZW50VHlwZXMoKSxcbiAgICBwZXJtaXNzaW9uczogZW52LnBlcm1pc3Npb25zLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/search.ts\n");

/***/ }),

/***/ "./src/plugins/techdocs.ts":
/*!*********************************!*\
  !*** ./src/plugins/techdocs.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?cd5e\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-techdocs-backend */ \"@backstage/plugin-techdocs-backend\");\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dockerode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dockerode */ \"dockerode\");\n/* harmony import */ var dockerode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dockerode__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function createPlugin(env) {\n    // Preparers are responsible for fetching source files for documentation.\n    const preparers = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Preparers.fromConfig(env.config, {\n        logger: env.logger,\n        reader: env.reader\n    });\n    // Docker client (conditionally) used by the generators, based on techdocs.generators config.\n    const dockerClient = new (dockerode__WEBPACK_IMPORTED_MODULE_2___default())();\n    const containerRunner = new _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.DockerContainerRunner({\n        dockerClient\n    });\n    // Generators are used for generating documentation sites.\n    const generators = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Generators.fromConfig(env.config, {\n        logger: env.logger,\n        containerRunner\n    });\n    // Publisher is used for\n    // 1. Publishing generated files to storage\n    // 2. Fetching files from storage and passing them to TechDocs frontend.\n    const publisher = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Publisher.fromConfig(env.config, {\n        logger: env.logger,\n        discovery: env.discovery\n    });\n    // checks if the publisher is working and logs the result\n    await publisher.getReadiness();\n    return await (0,_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        preparers,\n        generators,\n        publisher,\n        logger: env.logger,\n        config: env.config,\n        discovery: env.discovery,\n        cache: env.cache\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy90ZWNoZG9jcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYWJoaXNoZWtzYWh1L0RvY3VtZW50cy9oYXNoaWNvcnAtcGxheWdyb3VuZC9oYXNoaWNvcnAtZm9yZ2UvYmFja3N0YWdlLXBsdWdpbi9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3RlY2hkb2NzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY2tlckNvbnRhaW5lclJ1bm5lciB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHtcbiAgY3JlYXRlUm91dGVyLFxuICBHZW5lcmF0b3JzLFxuICBQcmVwYXJlcnMsXG4gIFB1Ymxpc2hlcixcbn0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tdGVjaGRvY3MtYmFja2VuZCc7XG5pbXBvcnQgRG9ja2VyIGZyb20gJ2RvY2tlcm9kZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICAvLyBQcmVwYXJlcnMgYXJlIHJlc3BvbnNpYmxlIGZvciBmZXRjaGluZyBzb3VyY2UgZmlsZXMgZm9yIGRvY3VtZW50YXRpb24uXG4gIGNvbnN0IHByZXBhcmVycyA9IGF3YWl0IFByZXBhcmVycy5mcm9tQ29uZmlnKGVudi5jb25maWcsIHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgcmVhZGVyOiBlbnYucmVhZGVyLFxuICB9KTtcblxuICAvLyBEb2NrZXIgY2xpZW50IChjb25kaXRpb25hbGx5KSB1c2VkIGJ5IHRoZSBnZW5lcmF0b3JzLCBiYXNlZCBvbiB0ZWNoZG9jcy5nZW5lcmF0b3JzIGNvbmZpZy5cbiAgY29uc3QgZG9ja2VyQ2xpZW50ID0gbmV3IERvY2tlcigpO1xuICBjb25zdCBjb250YWluZXJSdW5uZXIgPSBuZXcgRG9ja2VyQ29udGFpbmVyUnVubmVyKHsgZG9ja2VyQ2xpZW50IH0pO1xuXG4gIC8vIEdlbmVyYXRvcnMgYXJlIHVzZWQgZm9yIGdlbmVyYXRpbmcgZG9jdW1lbnRhdGlvbiBzaXRlcy5cbiAgY29uc3QgZ2VuZXJhdG9ycyA9IGF3YWl0IEdlbmVyYXRvcnMuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbnRhaW5lclJ1bm5lcixcbiAgfSk7XG5cbiAgLy8gUHVibGlzaGVyIGlzIHVzZWQgZm9yXG4gIC8vIDEuIFB1Ymxpc2hpbmcgZ2VuZXJhdGVkIGZpbGVzIHRvIHN0b3JhZ2VcbiAgLy8gMi4gRmV0Y2hpbmcgZmlsZXMgZnJvbSBzdG9yYWdlIGFuZCBwYXNzaW5nIHRoZW0gdG8gVGVjaERvY3MgZnJvbnRlbmQuXG4gIGNvbnN0IHB1Ymxpc2hlciA9IGF3YWl0IFB1Ymxpc2hlci5mcm9tQ29uZmlnKGVudi5jb25maWcsIHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgZGlzY292ZXJ5OiBlbnYuZGlzY292ZXJ5LFxuICB9KTtcblxuICAvLyBjaGVja3MgaWYgdGhlIHB1Ymxpc2hlciBpcyB3b3JraW5nIGFuZCBsb2dzIHRoZSByZXN1bHRcbiAgYXdhaXQgcHVibGlzaGVyLmdldFJlYWRpbmVzcygpO1xuXG4gIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgIHByZXBhcmVycyxcbiAgICBnZW5lcmF0b3JzLFxuICAgIHB1Ymxpc2hlcixcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgICBjYWNoZTogZW52LmNhY2hlLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/techdocs.ts\n");

/***/ }),

/***/ "../../plugins/hcp-consul-backend/src/index.ts":
/*!*****************************************************!*\
  !*** ../../plugins/hcp-consul-backend/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRouter: () => (/* reexport safe */ _service_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)\n/* harmony export */ });\n/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/router */ \"../../plugins/hcp-consul-backend/src/service/router.ts\");\n/**\n * Copyright (c) HashiCorp, Inc.\n * SPDX-License-Identifier: MPL-2.0\n */ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9oY3AtY29uc3VsLWJhY2tlbmQvc3JjL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUdBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hYmhpc2hla3NhaHUvRG9jdW1lbnRzL2hhc2hpY29ycC1wbGF5Z3JvdW5kL2hhc2hpY29ycC1mb3JnZS9iYWNrc3RhZ2UtcGx1Z2luL3BsdWdpbnMvaGNwLWNvbnN1bC1iYWNrZW5kL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2Uvcm91dGVyJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/hcp-consul-backend/src/index.ts\n");

/***/ }),

/***/ "../../plugins/hcp-consul-backend/src/service/router.ts":
/*!**************************************************************!*\
  !*** ../../plugins/hcp-consul-backend/src/service/router.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRouter: () => (/* binding */ createRouter)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?d634\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * Copyright (c) HashiCorp, Inc.\n * SPDX-License-Identifier: MPL-2.0\n */ \n\n\nasync function createRouter(options) {\n    const { config, logger } = options;\n    // Get Consul baseUrl and creds\n    const baseUrl = config.getString('backend.baseUrl');\n    const clientID = config.getString('consul.clientID');\n    const clientSecret = config.getString('consul.clientSecret');\n    const router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()();\n    router.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\n    router.get('/health', (_, response)=>{\n        logger.info('PONG!');\n        response.json({\n            status: 'ok'\n        });\n    });\n    router.get('/oauth/token', async (_, response)=>{\n        const body = {\n            audience: 'https://api.hashicorp.cloud',\n            grant_type: 'client_credentials',\n            client_id: clientID,\n            client_secret: clientSecret\n        };\n        const auth = await fetch(`${baseUrl}/api/proxy/hcpAuth/oauth/token`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(body)\n        });\n        const data = await auth.json();\n        response.json(data);\n    });\n    router.get('/2023-10-10/consul/project/:project_id/clusters', async (req, res)=>{\n        const projectID = req.params.project_id;\n        var _req_query;\n        const queryParams = (_req_query = req.query) !== null && _req_query !== void 0 ? _req_query : '';\n        const params = new URLSearchParams(queryParams);\n        const endpoint = `${baseUrl}/api/proxy/hcp/2023-10-10/consul/project/${projectID}/clusters?${params}`;\n        const authorizationHeaderValue = req.headers.authorization || '';\n        const clustersResp = await fetch(endpoint, {\n            method: 'GET',\n            headers: {\n                Accept: 'application/json',\n                Authorization: authorizationHeaderValue\n            }\n        });\n        // Check response\n        if (clustersResp.status !== 200) {\n            const body = await clustersResp.text();\n            logger.error(`failed to call list clusters endpoint: ${body}`);\n            res.status(clustersResp.status).json({\n                message: body\n            });\n            return;\n        }\n        // Deserialize and return\n        const clustersBody = await clustersResp.json();\n        res.json(clustersBody);\n    });\n    router.get('/2023-10-10/consul/project/:project_id/cluster/:cluster_name', async (req, res)=>{\n        const clusterName = req.params.cluster_name;\n        const projectID = req.params.project_id;\n        const endpoint = `${baseUrl}/api/proxy/hcp/2023-10-10/consul/project/${projectID}/cluster/${clusterName}`;\n        // Access and get the 'Authorization' header\n        const authorizationHeaderValue = req.headers.authorization || '';\n        const clusterResp = await fetch(endpoint, {\n            method: 'GET',\n            headers: {\n                Accept: 'application/json',\n                Authorization: authorizationHeaderValue\n            }\n        });\n        // Check response\n        if (clusterResp.status !== 200) {\n            const body = await clusterResp.text();\n            logger.error(`failed to call get cluster endpoint: ${body}`);\n            res.status(clusterResp.status).json({\n                message: body\n            });\n            return;\n        }\n        // Deserialize and return\n        const servicesBody = await clusterResp.json();\n        res.json(servicesBody);\n    });\n    router.get('/2023-10-10/consul/project/:project_id/services', async (req, res)=>{\n        const projectID = req.params.project_id;\n        var _req_query;\n        const queryParams = (_req_query = req.query) !== null && _req_query !== void 0 ? _req_query : '';\n        const params = new URLSearchParams(queryParams);\n        // convert status param from multi to csv query format\n        if (queryParams.status) {\n            params.delete('status');\n            const statusValues = Array.isArray(queryParams.status) ? queryParams.status : [\n                queryParams.status\n            ];\n            for (const status of statusValues){\n                params.append('status', status);\n            }\n        }\n        const endpoint = `${baseUrl}/api/proxy/hcp/2023-10-10/consul/project/${projectID}/services?${params}`;\n        // Access and get the 'Authorization' header\n        const authorizationHeaderValue = req.headers.authorization || '';\n        const servicesResp = await fetch(endpoint, {\n            method: 'GET',\n            headers: {\n                Accept: 'application/json',\n                Authorization: authorizationHeaderValue\n            }\n        });\n        // Check response\n        if (servicesResp.status !== 200) {\n            const body = await servicesResp.text();\n            logger.error(`failed to call list services endpoint: ${body}`);\n            res.status(servicesResp.status).json({\n                message: body\n            });\n            return;\n        }\n        // Deserialize and return\n        const servicesBody = await servicesResp.json();\n        res.json(servicesBody);\n    });\n    router.get('/2023-10-10/consul/project/:project_id/cluster/:cluster_name/service/:service_name', async (req, res)=>{\n        const clusterName = req.params.cluster_name;\n        const projectID = req.params.project_id;\n        const serviceName = req.params.service_name;\n        var _req_query;\n        const queryParams = (_req_query = req.query) !== null && _req_query !== void 0 ? _req_query : '';\n        const params = new URLSearchParams(queryParams);\n        const endpoint = `${baseUrl}/api/proxy/hcp/2023-10-10/consul/project/${projectID}/cluster/${clusterName}/service/${serviceName}?${params}`;\n        const authorizationHeaderValue = req.headers.authorization || '';\n        const servicesResp = await fetch(endpoint, {\n            method: 'GET',\n            headers: {\n                Accept: 'application/json',\n                Authorization: authorizationHeaderValue\n            }\n        });\n        // Check response\n        if (servicesResp.status !== 200) {\n            const body = await servicesResp.text();\n            logger.error(`failed to call get service endpoint: ${body}`);\n            res.status(servicesResp.status).json({\n                message: body\n            });\n            return;\n        }\n        // Deserialize and return\n        const servicesBody = await servicesResp.json();\n        res.json(servicesBody);\n    });\n    router.get('/2023-10-10/consul/project/:project_id/cluster/:cluster_name/service/:service_name/instances', async (req, res)=>{\n        const clusterName = req.params.cluster_name;\n        const projectID = req.params.project_id;\n        const serviceName = req.params.service_name;\n        var _req_query;\n        const queryParams = (_req_query = req.query) !== null && _req_query !== void 0 ? _req_query : '';\n        const params = new URLSearchParams(queryParams);\n        const endpoint = `${baseUrl}/api/proxy/hcp/2023-10-10/consul/project/${projectID}/cluster/${clusterName}/service/${serviceName}/instances?${params}`;\n        // Access and get the 'Authorization' header\n        const authorizationHeaderValue = req.headers.authorization || '';\n        const servicesResp = await fetch(endpoint, {\n            method: 'GET',\n            headers: {\n                Accept: 'application/json',\n                Authorization: authorizationHeaderValue\n            }\n        });\n        // Check response\n        if (servicesResp.status !== 200) {\n            const body = await servicesResp.text();\n            logger.error(`failed to call list service instances endpoint: ${body}`);\n            res.status(servicesResp.status).json({\n                message: body\n            });\n            return;\n        }\n        // Deserialize and return\n        const servicesBody = await servicesResp.json();\n        res.json(servicesBody);\n    });\n    router.get('/2022-02-15/organizations/:organization_id/projects/:project_id/aggregate_service_summary', async (req, res)=>{\n        const organizationID = req.params.organization_id;\n        const projectID = req.params.project_id;\n        // Append the query string to the endpoint\n        const endpoint = `${baseUrl}/api/proxy/hcp/global-network-manager/2022-02-15/organizations/${organizationID}/projects/${projectID}/aggregate_service_summary`;\n        // Access and get the 'Authorization' header\n        const authorizationHeaderValue = req.headers.authorization || '';\n        const aggregateServicesResp = await fetch(endpoint, {\n            method: 'GET',\n            headers: {\n                Accept: 'application/json',\n                Authorization: authorizationHeaderValue\n            }\n        });\n        // Check response\n        if (aggregateServicesResp.status !== 200) {\n            const body = await aggregateServicesResp.text();\n            logger.error(`failed to call aggregate-service-summary endpoint: ${body}`);\n            res.status(aggregateServicesResp.status).json({\n                message: body\n            });\n            return;\n        }\n        // Deserialize and return\n        const servicesBody = await aggregateServicesResp.json();\n        res.json(servicesBody);\n    });\n    router.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.errorHandler)());\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9oY3AtY29uc3VsLWJhY2tlbmQvc3JjL3NlcnZpY2Uvcm91dGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0E7QUFFQTtBQUNBO0FBU0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FiaGlzaGVrc2FodS9Eb2N1bWVudHMvaGFzaGljb3JwLXBsYXlncm91bmQvaGFzaGljb3JwLWZvcmdlL2JhY2tzdGFnZS1wbHVnaW4vcGx1Z2lucy9oY3AtY29uc3VsLWJhY2tlbmQvc3JjL3NlcnZpY2Uvcm91dGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ2V4cHJlc3MtcHJvbWlzZS1yb3V0ZXInO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAYmFja3N0YWdlL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyT3B0aW9ucyB7XG4gIGxvZ2dlcjogTG9nZ2VyO1xuICBjb25maWc6IENvbmZpZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihcbiAgb3B0aW9uczogUm91dGVyT3B0aW9ucyxcbik6IFByb21pc2U8ZXhwcmVzcy5Sb3V0ZXI+IHtcbiAgY29uc3QgeyBjb25maWcsIGxvZ2dlciB9ID0gb3B0aW9ucztcblxuICAvLyBHZXQgQ29uc3VsIGJhc2VVcmwgYW5kIGNyZWRzXG4gIGNvbnN0IGJhc2VVcmwgPSBjb25maWcuZ2V0U3RyaW5nKCdiYWNrZW5kLmJhc2VVcmwnKTtcbiAgY29uc3QgY2xpZW50SUQgPSBjb25maWcuZ2V0U3RyaW5nKCdjb25zdWwuY2xpZW50SUQnKTtcbiAgY29uc3QgY2xpZW50U2VjcmV0ID0gY29uZmlnLmdldFN0cmluZygnY29uc3VsLmNsaWVudFNlY3JldCcpO1xuXG4gIGNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuICByb3V0ZXIudXNlKGV4cHJlc3MuanNvbigpKTtcblxuICByb3V0ZXIuZ2V0KCcvaGVhbHRoJywgKF8sIHJlc3BvbnNlKSA9PiB7XG4gICAgbG9nZ2VyLmluZm8oJ1BPTkchJyk7XG4gICAgcmVzcG9uc2UuanNvbih7IHN0YXR1czogJ29rJyB9KTtcbiAgfSk7XG5cbiAgcm91dGVyLmdldCgnL29hdXRoL3Rva2VuJywgYXN5bmMgKF8sIHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIGF1ZGllbmNlOiAnaHR0cHM6Ly9hcGkuaGFzaGljb3JwLmNsb3VkJyxcbiAgICAgIGdyYW50X3R5cGU6ICdjbGllbnRfY3JlZGVudGlhbHMnLFxuICAgICAgY2xpZW50X2lkOiBjbGllbnRJRCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICB9O1xuXG4gICAgY29uc3QgYXV0aCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS9wcm94eS9oY3BBdXRoL29hdXRoL3Rva2VuYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aC5qc29uKCk7XG4gICAgcmVzcG9uc2UuanNvbihkYXRhKTtcbiAgfSk7XG5cbiAgcm91dGVyLmdldChcbiAgICAnLzIwMjMtMTAtMTAvY29uc3VsL3Byb2plY3QvOnByb2plY3RfaWQvY2x1c3RlcnMnLFxuICAgIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElEID0gcmVxLnBhcmFtcy5wcm9qZWN0X2lkO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAocmVxLnF1ZXJ5IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID8/ICcnO1xuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YmFzZVVybH0vYXBpL3Byb3h5L2hjcC8yMDIzLTEwLTEwL2NvbnN1bC9wcm9qZWN0LyR7cHJvamVjdElEfS9jbHVzdGVycz8ke3BhcmFtc31gO1xuXG4gICAgICBjb25zdCBhdXRob3JpemF0aW9uSGVhZGVyVmFsdWUgPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uIHx8ICcnO1xuICAgICAgY29uc3QgY2x1c3RlcnNSZXNwID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25IZWFkZXJWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDaGVjayByZXNwb25zZVxuICAgICAgaWYgKGNsdXN0ZXJzUmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgY2x1c3RlcnNSZXNwLnRleHQoKTtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGBmYWlsZWQgdG8gY2FsbCBsaXN0IGNsdXN0ZXJzIGVuZHBvaW50OiAke2JvZHl9YCk7XG4gICAgICAgIHJlcy5zdGF0dXMoY2x1c3RlcnNSZXNwLnN0YXR1cykuanNvbih7IG1lc3NhZ2U6IGJvZHkgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRGVzZXJpYWxpemUgYW5kIHJldHVyblxuICAgICAgY29uc3QgY2x1c3RlcnNCb2R5ID0gYXdhaXQgY2x1c3RlcnNSZXNwLmpzb24oKTtcbiAgICAgIHJlcy5qc29uKGNsdXN0ZXJzQm9keSk7XG4gICAgfSxcbiAgKTtcblxuICByb3V0ZXIuZ2V0KFxuICAgICcvMjAyMy0xMC0xMC9jb25zdWwvcHJvamVjdC86cHJvamVjdF9pZC9jbHVzdGVyLzpjbHVzdGVyX25hbWUnLFxuICAgIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgY29uc3QgY2x1c3Rlck5hbWUgPSByZXEucGFyYW1zLmNsdXN0ZXJfbmFtZTtcbiAgICAgIGNvbnN0IHByb2plY3RJRCA9IHJlcS5wYXJhbXMucHJvamVjdF9pZDtcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YmFzZVVybH0vYXBpL3Byb3h5L2hjcC8yMDIzLTEwLTEwL2NvbnN1bC9wcm9qZWN0LyR7cHJvamVjdElEfS9jbHVzdGVyLyR7Y2x1c3Rlck5hbWV9YDtcblxuICAgICAgLy8gQWNjZXNzIGFuZCBnZXQgdGhlICdBdXRob3JpemF0aW9uJyBoZWFkZXJcbiAgICAgIGNvbnN0IGF1dGhvcml6YXRpb25IZWFkZXJWYWx1ZSA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgJyc7XG4gICAgICBjb25zdCBjbHVzdGVyUmVzcCA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uSGVhZGVyVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gQ2hlY2sgcmVzcG9uc2VcbiAgICAgIGlmIChjbHVzdGVyUmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgY2x1c3RlclJlc3AudGV4dCgpO1xuICAgICAgICBsb2dnZXIuZXJyb3IoYGZhaWxlZCB0byBjYWxsIGdldCBjbHVzdGVyIGVuZHBvaW50OiAke2JvZHl9YCk7XG4gICAgICAgIHJlcy5zdGF0dXMoY2x1c3RlclJlc3Auc3RhdHVzKS5qc29uKHsgbWVzc2FnZTogYm9keSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBEZXNlcmlhbGl6ZSBhbmQgcmV0dXJuXG4gICAgICBjb25zdCBzZXJ2aWNlc0JvZHkgPSBhd2FpdCBjbHVzdGVyUmVzcC5qc29uKCk7XG4gICAgICByZXMuanNvbihzZXJ2aWNlc0JvZHkpO1xuICAgIH0sXG4gICk7XG5cbiAgcm91dGVyLmdldChcbiAgICAnLzIwMjMtMTAtMTAvY29uc3VsL3Byb2plY3QvOnByb2plY3RfaWQvc2VydmljZXMnLFxuICAgIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElEID0gcmVxLnBhcmFtcy5wcm9qZWN0X2lkO1xuXG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IChyZXEucXVlcnkgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPz8gJyc7XG4gICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuICAgICAgLy8gY29udmVydCBzdGF0dXMgcGFyYW0gZnJvbSBtdWx0aSB0byBjc3YgcXVlcnkgZm9ybWF0XG4gICAgICBpZiAocXVlcnlQYXJhbXMuc3RhdHVzKSB7XG4gICAgICAgIHBhcmFtcy5kZWxldGUoJ3N0YXR1cycpO1xuICAgICAgICBjb25zdCBzdGF0dXNWYWx1ZXMgPSBBcnJheS5pc0FycmF5KHF1ZXJ5UGFyYW1zLnN0YXR1cylcbiAgICAgICAgICA/IHF1ZXJ5UGFyYW1zLnN0YXR1c1xuICAgICAgICAgIDogW3F1ZXJ5UGFyYW1zLnN0YXR1c107XG4gICAgICAgIGZvciAoY29uc3Qgc3RhdHVzIG9mIHN0YXR1c1ZhbHVlcykge1xuICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ3N0YXR1cycsIHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZW5kcG9pbnQgPSBgJHtiYXNlVXJsfS9hcGkvcHJveHkvaGNwLzIwMjMtMTAtMTAvY29uc3VsL3Byb2plY3QvJHtwcm9qZWN0SUR9L3NlcnZpY2VzPyR7cGFyYW1zfWA7XG5cbiAgICAgIC8vIEFjY2VzcyBhbmQgZ2V0IHRoZSAnQXV0aG9yaXphdGlvbicgaGVhZGVyXG4gICAgICBjb25zdCBhdXRob3JpemF0aW9uSGVhZGVyVmFsdWUgPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uIHx8ICcnO1xuICAgICAgY29uc3Qgc2VydmljZXNSZXNwID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25IZWFkZXJWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDaGVjayByZXNwb25zZVxuICAgICAgaWYgKHNlcnZpY2VzUmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgc2VydmljZXNSZXNwLnRleHQoKTtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGBmYWlsZWQgdG8gY2FsbCBsaXN0IHNlcnZpY2VzIGVuZHBvaW50OiAke2JvZHl9YCk7XG4gICAgICAgIHJlcy5zdGF0dXMoc2VydmljZXNSZXNwLnN0YXR1cykuanNvbih7IG1lc3NhZ2U6IGJvZHkgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRGVzZXJpYWxpemUgYW5kIHJldHVyblxuICAgICAgY29uc3Qgc2VydmljZXNCb2R5ID0gYXdhaXQgc2VydmljZXNSZXNwLmpzb24oKTtcbiAgICAgIHJlcy5qc29uKHNlcnZpY2VzQm9keSk7XG4gICAgfSxcbiAgKTtcblxuICByb3V0ZXIuZ2V0KFxuICAgICcvMjAyMy0xMC0xMC9jb25zdWwvcHJvamVjdC86cHJvamVjdF9pZC9jbHVzdGVyLzpjbHVzdGVyX25hbWUvc2VydmljZS86c2VydmljZV9uYW1lJyxcbiAgICBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgIGNvbnN0IGNsdXN0ZXJOYW1lID0gcmVxLnBhcmFtcy5jbHVzdGVyX25hbWU7XG4gICAgICBjb25zdCBwcm9qZWN0SUQgPSByZXEucGFyYW1zLnByb2plY3RfaWQ7XG4gICAgICBjb25zdCBzZXJ2aWNlTmFtZSA9IHJlcS5wYXJhbXMuc2VydmljZV9uYW1lO1xuXG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IChyZXEucXVlcnkgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPz8gJyc7XG4gICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuICAgICAgY29uc3QgZW5kcG9pbnQgPSBgJHtiYXNlVXJsfS9hcGkvcHJveHkvaGNwLzIwMjMtMTAtMTAvY29uc3VsL3Byb2plY3QvJHtwcm9qZWN0SUR9L2NsdXN0ZXIvJHtjbHVzdGVyTmFtZX0vc2VydmljZS8ke3NlcnZpY2VOYW1lfT8ke3BhcmFtc31gO1xuICAgICAgY29uc3QgYXV0aG9yaXphdGlvbkhlYWRlclZhbHVlID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiB8fCAnJztcblxuICAgICAgY29uc3Qgc2VydmljZXNSZXNwID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25IZWFkZXJWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDaGVjayByZXNwb25zZVxuICAgICAgaWYgKHNlcnZpY2VzUmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgc2VydmljZXNSZXNwLnRleHQoKTtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGBmYWlsZWQgdG8gY2FsbCBnZXQgc2VydmljZSBlbmRwb2ludDogJHtib2R5fWApO1xuICAgICAgICByZXMuc3RhdHVzKHNlcnZpY2VzUmVzcC5zdGF0dXMpLmpzb24oeyBtZXNzYWdlOiBib2R5IH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERlc2VyaWFsaXplIGFuZCByZXR1cm5cbiAgICAgIGNvbnN0IHNlcnZpY2VzQm9keSA9IGF3YWl0IHNlcnZpY2VzUmVzcC5qc29uKCk7XG4gICAgICByZXMuanNvbihzZXJ2aWNlc0JvZHkpO1xuICAgIH0sXG4gICk7XG5cbiAgcm91dGVyLmdldChcbiAgICAnLzIwMjMtMTAtMTAvY29uc3VsL3Byb2plY3QvOnByb2plY3RfaWQvY2x1c3Rlci86Y2x1c3Rlcl9uYW1lL3NlcnZpY2UvOnNlcnZpY2VfbmFtZS9pbnN0YW5jZXMnLFxuICAgIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgY29uc3QgY2x1c3Rlck5hbWUgPSByZXEucGFyYW1zLmNsdXN0ZXJfbmFtZTtcbiAgICAgIGNvbnN0IHByb2plY3RJRCA9IHJlcS5wYXJhbXMucHJvamVjdF9pZDtcbiAgICAgIGNvbnN0IHNlcnZpY2VOYW1lID0gcmVxLnBhcmFtcy5zZXJ2aWNlX25hbWU7XG5cbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gKHJlcS5xdWVyeSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA/PyAnJztcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlQYXJhbXMpO1xuXG4gICAgICBjb25zdCBlbmRwb2ludCA9IGAke2Jhc2VVcmx9L2FwaS9wcm94eS9oY3AvMjAyMy0xMC0xMC9jb25zdWwvcHJvamVjdC8ke3Byb2plY3RJRH0vY2x1c3Rlci8ke2NsdXN0ZXJOYW1lfS9zZXJ2aWNlLyR7c2VydmljZU5hbWV9L2luc3RhbmNlcz8ke3BhcmFtc31gO1xuICAgICAgLy8gQWNjZXNzIGFuZCBnZXQgdGhlICdBdXRob3JpemF0aW9uJyBoZWFkZXJcbiAgICAgIGNvbnN0IGF1dGhvcml6YXRpb25IZWFkZXJWYWx1ZSA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgJyc7XG5cbiAgICAgIGNvbnN0IHNlcnZpY2VzUmVzcCA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uSGVhZGVyVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gQ2hlY2sgcmVzcG9uc2VcbiAgICAgIGlmIChzZXJ2aWNlc1Jlc3Auc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHNlcnZpY2VzUmVzcC50ZXh0KCk7XG4gICAgICAgIGxvZ2dlci5lcnJvcihgZmFpbGVkIHRvIGNhbGwgbGlzdCBzZXJ2aWNlIGluc3RhbmNlcyBlbmRwb2ludDogJHtib2R5fWApO1xuICAgICAgICByZXMuc3RhdHVzKHNlcnZpY2VzUmVzcC5zdGF0dXMpLmpzb24oeyBtZXNzYWdlOiBib2R5IH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERlc2VyaWFsaXplIGFuZCByZXR1cm5cbiAgICAgIGNvbnN0IHNlcnZpY2VzQm9keSA9IGF3YWl0IHNlcnZpY2VzUmVzcC5qc29uKCk7XG4gICAgICByZXMuanNvbihzZXJ2aWNlc0JvZHkpO1xuICAgIH0sXG4gICk7XG5cbiAgcm91dGVyLmdldChcbiAgICAnLzIwMjItMDItMTUvb3JnYW5pemF0aW9ucy86b3JnYW5pemF0aW9uX2lkL3Byb2plY3RzLzpwcm9qZWN0X2lkL2FnZ3JlZ2F0ZV9zZXJ2aWNlX3N1bW1hcnknLFxuICAgIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgY29uc3Qgb3JnYW5pemF0aW9uSUQgPSByZXEucGFyYW1zLm9yZ2FuaXphdGlvbl9pZDtcbiAgICAgIGNvbnN0IHByb2plY3RJRCA9IHJlcS5wYXJhbXMucHJvamVjdF9pZDtcblxuICAgICAgLy8gQXBwZW5kIHRoZSBxdWVyeSBzdHJpbmcgdG8gdGhlIGVuZHBvaW50XG4gICAgICBjb25zdCBlbmRwb2ludCA9IGAke2Jhc2VVcmx9L2FwaS9wcm94eS9oY3AvZ2xvYmFsLW5ldHdvcmstbWFuYWdlci8yMDIyLTAyLTE1L29yZ2FuaXphdGlvbnMvJHtvcmdhbml6YXRpb25JRH0vcHJvamVjdHMvJHtwcm9qZWN0SUR9L2FnZ3JlZ2F0ZV9zZXJ2aWNlX3N1bW1hcnlgO1xuXG4gICAgICAvLyBBY2Nlc3MgYW5kIGdldCB0aGUgJ0F1dGhvcml6YXRpb24nIGhlYWRlclxuICAgICAgY29uc3QgYXV0aG9yaXphdGlvbkhlYWRlclZhbHVlID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiB8fCAnJztcbiAgICAgIGNvbnN0IGFnZ3JlZ2F0ZVNlcnZpY2VzUmVzcCA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uSGVhZGVyVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gQ2hlY2sgcmVzcG9uc2VcbiAgICAgIGlmIChhZ2dyZWdhdGVTZXJ2aWNlc1Jlc3Auc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IGFnZ3JlZ2F0ZVNlcnZpY2VzUmVzcC50ZXh0KCk7XG4gICAgICAgIGxvZ2dlci5lcnJvcihcbiAgICAgICAgICBgZmFpbGVkIHRvIGNhbGwgYWdncmVnYXRlLXNlcnZpY2Utc3VtbWFyeSBlbmRwb2ludDogJHtib2R5fWAsXG4gICAgICAgICk7XG4gICAgICAgIHJlcy5zdGF0dXMoYWdncmVnYXRlU2VydmljZXNSZXNwLnN0YXR1cykuanNvbih7IG1lc3NhZ2U6IGJvZHkgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRGVzZXJpYWxpemUgYW5kIHJldHVyblxuICAgICAgY29uc3Qgc2VydmljZXNCb2R5ID0gYXdhaXQgYWdncmVnYXRlU2VydmljZXNSZXNwLmpzb24oKTtcbiAgICAgIHJlcy5qc29uKHNlcnZpY2VzQm9keSk7XG4gICAgfSxcbiAgKTtcblxuICByb3V0ZXIudXNlKGVycm9ySGFuZGxlcigpKTtcbiAgcmV0dXJuIHJvdXRlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/hcp-consul-backend/src/service/router.ts\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log-apply-result.js":
/*!**********************************************************!*\
  !*** ../../node_modules/webpack/hot/log-apply-result.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FiaGlzaGVrc2FodS9Eb2N1bWVudHMvaGFzaGljb3JwLXBsYXlncm91bmQvaGFzaGljb3JwLWZvcmdlL2JhY2tzdGFnZS1wbHVnaW4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxuLyoqXG4gKiBAcGFyYW0geyhzdHJpbmcgfCBudW1iZXIpW119IHVwZGF0ZWRNb2R1bGVzIHVwZGF0ZWQgbW9kdWxlc1xuICogQHBhcmFtIHsoc3RyaW5nIHwgbnVtYmVyKVtdIHwgbnVsbH0gcmVuZXdlZE1vZHVsZXMgcmVuZXdlZCBtb2R1bGVzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcykge1xuXHR2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0cmV0dXJuIHJlbmV3ZWRNb2R1bGVzICYmIHJlbmV3ZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMDtcblx0fSk7XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cblx0aWYgKHVuYWNjZXB0ZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcblx0XHRsb2coXG5cdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFwiW0hNUl0gVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkbid0IGJlIGhvdCB1cGRhdGVkOiAoVGhleSB3b3VsZCBuZWVkIGEgZnVsbCByZWxvYWQhKVwiXG5cdFx0KTtcblx0XHR1bmFjY2VwdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCFyZW5ld2VkTW9kdWxlcyB8fCByZW5ld2VkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gTm90aGluZyBob3QgdXBkYXRlZC5cIik7XG5cdH0gZWxzZSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIFVwZGF0ZWQgbW9kdWxlczpcIik7XG5cdFx0cmVuZXdlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGlmICh0eXBlb2YgbW9kdWxlSWQgPT09IFwic3RyaW5nXCIgJiYgbW9kdWxlSWQuaW5kZXhPZihcIiFcIikgIT09IC0xKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IG1vZHVsZUlkLnNwbGl0KFwiIVwiKTtcblx0XHRcdFx0bG9nLmdyb3VwQ29sbGFwc2VkKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgcGFydHMucG9wKCkpO1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHRcdGxvZy5ncm91cEVuZChcImluZm9cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dmFyIG51bWJlcklkcyA9IHJlbmV3ZWRNb2R1bGVzLmV2ZXJ5KGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBtb2R1bGVJZCA9PT0gXCJudW1iZXJcIjtcblx0XHR9KTtcblx0XHRpZiAobnVtYmVySWRzKVxuXHRcdFx0bG9nKFxuXHRcdFx0XHRcImluZm9cIixcblx0XHRcdFx0J1tITVJdIENvbnNpZGVyIHVzaW5nIHRoZSBvcHRpbWl6YXRpb24ubW9kdWxlSWRzOiBcIm5hbWVkXCIgZm9yIG1vZHVsZSBuYW1lcy4nXG5cdFx0XHQpO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log-apply-result.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log.js":
/*!*********************************************!*\
  !*** ../../node_modules/webpack/hot/log.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\n\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FiaGlzaGVrc2FodS9Eb2N1bWVudHMvaGFzaGljb3JwLXBsYXlncm91bmQvaGFzaGljb3JwLWZvcmdlL2JhY2tzdGFnZS1wbHVnaW4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQHR5cGVkZWYge1wiaW5mb1wiIHwgXCJ3YXJuaW5nXCIgfCBcImVycm9yXCJ9IExvZ0xldmVsICovXG5cbi8qKiBAdHlwZSB7TG9nTGV2ZWx9ICovXG52YXIgbG9nTGV2ZWwgPSBcImluZm9cIjtcblxuZnVuY3Rpb24gZHVtbXkoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUsIGlmIHNob3VsZCBsb2dcbiAqL1xuZnVuY3Rpb24gc2hvdWxkTG9nKGxldmVsKSB7XG5cdHZhciBzaG91bGRMb2cgPVxuXHRcdChsb2dMZXZlbCA9PT0gXCJpbmZvXCIgJiYgbGV2ZWwgPT09IFwiaW5mb1wiKSB8fFxuXHRcdChbXCJpbmZvXCIsIFwid2FybmluZ1wiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcIndhcm5pbmdcIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIiwgXCJlcnJvclwiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcImVycm9yXCIpO1xuXHRyZXR1cm4gc2hvdWxkTG9nO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KG1zZz86IHN0cmluZykgPT4gdm9pZH0gbG9nRm4gbG9nIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7KGxldmVsOiBMb2dMZXZlbCwgbXNnPzogc3RyaW5nKSA9PiB2b2lkfSBmdW5jdGlvbiB0aGF0IGxvZ3Mgd2hlbiBsb2cgbGV2ZWwgaXMgc3VmZmljaWVudFxuICovXG5mdW5jdGlvbiBsb2dHcm91cChsb2dGbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0XHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdFx0bG9nRm4obXNnKTtcblx0XHR9XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtMb2dMZXZlbH0gbGV2ZWwgbG9nIGxldmVsXG4gKiBAcGFyYW0ge3N0cmluZ3xFcnJvcn0gbXNnIG1lc3NhZ2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGV2ZWwsIG1zZykge1xuXHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdGlmIChsZXZlbCA9PT0gXCJpbmZvXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKG1zZyk7XG5cdFx0fSBlbHNlIGlmIChsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHtcblx0XHRcdGNvbnNvbGUud2Fybihtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwiZXJyb3JcIikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihtc2cpO1xuXHRcdH1cblx0fVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zICovXG52YXIgZ3JvdXAgPSBjb25zb2xlLmdyb3VwIHx8IGR1bW15O1xudmFyIGdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZCB8fCBkdW1teTtcbnZhciBncm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQgfHwgZHVtbXk7XG4vKiBlc2xpbnQtZW5hYmxlIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGlucyAqL1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cCA9IGxvZ0dyb3VwKGdyb3VwKTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXBDb2xsYXBzZWQgPSBsb2dHcm91cChncm91cENvbGxhcHNlZCk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwRW5kID0gbG9nR3JvdXAoZ3JvdXBFbmQpO1xuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICovXG5tb2R1bGUuZXhwb3J0cy5zZXRMb2dMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuXHRsb2dMZXZlbCA9IGxldmVsO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgZXJyb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGZvcm1hdHRlZCBlcnJvclxuICovXG5tb2R1bGUuZXhwb3J0cy5mb3JtYXRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0dmFyIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcblx0dmFyIHN0YWNrID0gZXJyLnN0YWNrO1xuXHRpZiAoIXN0YWNrKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0gZWxzZSBpZiAoc3RhY2suaW5kZXhPZihtZXNzYWdlKSA8IDApIHtcblx0XHRyZXR1cm4gbWVzc2FnZSArIFwiXFxuXCIgKyBzdGFjaztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/poll.js?100":
/*!**************************************************!*\
  !*** ../../node_modules/webpack/hot/poll.js?100 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\t/**\n\t * @param {boolean=} fromUpdate true when called from update\n\t */\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"../../node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L3BvbGwuanM/MTAwIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hYmhpc2hla3NhaHUvRG9jdW1lbnRzL2hhc2hpY29ycC1wbGF5Z3JvdW5kL2hhc2hpY29ycC1mb3JnZS9iYWNrc3RhZ2UtcGx1Z2luL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9wb2xsLmpzPzEwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLypnbG9iYWxzIF9fcmVzb3VyY2VRdWVyeSAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcblx0dmFyIGhvdFBvbGxJbnRlcnZhbCA9ICtfX3Jlc291cmNlUXVlcnkuc2xpY2UoMSkgfHwgMTAgKiA2MCAqIDEwMDA7XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbj19IGZyb21VcGRhdGUgdHJ1ZSB3aGVuIGNhbGxlZCBmcm9tIHVwZGF0ZVxuXHQgKi9cblx0dmFyIGNoZWNrRm9yVXBkYXRlID0gZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGUoZnJvbVVwZGF0ZSkge1xuXHRcdGlmIChtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImlkbGVcIikge1xuXHRcdFx0bW9kdWxlLmhvdFxuXHRcdFx0XHQuY2hlY2sodHJ1ZSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdFx0aWYgKCF1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRcdFx0aWYgKGZyb21VcGRhdGUpIGxvZyhcImluZm9cIiwgXCJbSE1SXSBVcGRhdGUgYXBwbGllZC5cIik7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlcXVpcmUoXCIuL2xvZy1hcHBseS1yZXN1bHRcIikodXBkYXRlZE1vZHVsZXMsIHVwZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0XHRjaGVja0ZvclVwZGF0ZSh0cnVlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0XHR2YXIgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcblx0XHRcdFx0XHRpZiAoW1wiYWJvcnRcIiwgXCJmYWlsXCJdLmluZGV4T2Yoc3RhdHVzKSA+PSAwKSB7XG5cdFx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gQ2Fubm90IGFwcGx5IHVwZGF0ZS5cIik7XG5cdFx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gWW91IG5lZWQgdG8gcmVzdGFydCB0aGUgYXBwbGljYXRpb24hXCIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gVXBkYXRlIGZhaWxlZDogXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cdHNldEludGVydmFsKGNoZWNrRm9yVXBkYXRlLCBob3RQb2xsSW50ZXJ2YWwpO1xufSBlbHNlIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/poll.js?100\n");

/***/ }),

/***/ "@backstage/backend-common?cd5e":
/*!***************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/backend-common/dist/index.cjs.js" ***!
  \***************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/backend-common/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/backend-tasks":
/*!**************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/backend-tasks/dist/index.cjs.js" ***!
  \**************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/backend-tasks/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/catalog-client":
/*!***************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/catalog-client/dist/index.cjs.js" ***!
  \***************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/catalog-client/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-app-backend":
/*!*******************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js" ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-auth-backend":
/*!********************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js" ***!
  \********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend":
/*!***********************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js" ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-permission-node":
/*!***********************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js" ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-proxy-backend":
/*!*********************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js" ***!
  \*********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-scaffolder-backend":
/*!**************************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js" ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend-node":
/*!***************************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js" ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend":
/*!**********************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js" ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-techdocs-backend":
/*!************************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-techdocs-backend/dist/index.cjs.js" ***!
  \************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/@backstage/plugin-techdocs-backend/dist/index.cjs.js");

/***/ }),

/***/ "dockerode":
/*!*******************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/dockerode/lib/docker.js" ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/dockerode/lib/docker.js");

/***/ }),

/***/ "express-promise-router":
/*!************************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/express-promise-router/lib/express-promise-router.js" ***!
  \************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/express-promise-router/lib/express-promise-router.js");

/***/ }),

/***/ "express":
/*!************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/express/index.js" ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/node_modules/express/index.js");

/***/ }),

/***/ "@backstage/plugin-auth-node":
/*!**********************************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/packages/backend/node_modules/@backstage/plugin-auth-node/dist/index.cjs.js" ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/packages/backend/node_modules/@backstage/plugin-auth-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/backend-common?d634":
/*!******************************************************************************************************************************************************************************************!*\
  !*** external "/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/plugins/hcp-consul-backend/node_modules/@backstage/backend-common/dist/index.cjs.js" ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/abhisheksahu/Documents/hashicorp-playground/hashicorp-forge/backstage-plugin/plugins/hcp-consul-backend/node_modules/@backstage/backend-common/dist/index.cjs.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b1a110bac05eb677f203")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("../../node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;