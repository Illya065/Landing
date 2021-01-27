/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style/style.scss":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style/style.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/iconsburg.png */ \"./img/iconsburg.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/icon_search.png */ \"./img/icon_search.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/bg_photo.png */ \"./img/bg_photo.png\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../img/left.png */ \"./img/left.png\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../img/right.png */ \"./img/right.png\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../img/pen_c.png */ \"./img/pen_c.png\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../img/stack_c.png */ \"./img/stack_c.png\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../img/set_c.png */ \"./img/set_c.png\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../img/buy_c.png */ \"./img/buy_c.png\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../img/pen.png */ \"./img/pen.png\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../img/stack.png */ \"./img/stack.png\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../img/set.png */ \"./img/set.png\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../img/buy.png */ \"./img/buy.png\");\nvar ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ../img/bg_video.png */ \"./img/bg_video.png\");\nvar ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ../img/li.png */ \"./img/li.png\");\nvar ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ../img/bg_photo_brand.png */ \"./img/bg_photo_brand.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Raleway:wght@300;400;500;600;700;800;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n/* Указываем box sizing */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n/* Убираем внутренние отступы */\\nul[class],\\nol[class] {\\n  padding: 0;\\n}\\n\\n/* Убираем внешние отступы */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np,\\nul[class],\\nol[class],\\nli,\\nfigure,\\nfigcaption,\\nblockquote,\\ndl,\\ndd {\\n  margin: 0;\\n}\\n\\n/* Выставляем основные настройки по-умолчанию для body */\\nbody {\\n  min-height: 100vh;\\n  scroll-behavior: smooth;\\n  text-rendering: optimizeSpeed;\\n  line-height: 1.5;\\n}\\n\\n/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/\\nul[class],\\nol[class] {\\n  list-style: none;\\n}\\n\\n/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */\\na:not([class]) {\\n  text-decoration-skip-ink: auto;\\n}\\n\\n/* Упрощаем работу с изображениями */\\nimg {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* Указываем понятную периодичность в потоке данных у article*/\\narticle > * + * {\\n  margin-top: 1em;\\n}\\n\\n/* Наследуем шрифты для инпутов и кнопок */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */\\n@media (prefers-reduced-motion: reduce) {\\n  * {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n.container {\\n  max-width: 1210px;\\n  padding: 0 15px;\\n  margin: 0 auto;\\n}\\n\\n.header {\\n  position: fixed;\\n  width: 100%;\\n  z-index: 2;\\n}\\n.header__content {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  height: 100px;\\n  margin-bottom: 60px;\\n}\\n.header__logo {\\n  display: flex;\\n  align-items: center;\\n}\\n.header__logo img {\\n  width: 64px;\\n  height: 56px;\\n}\\n.header__logo-name {\\n  font-family: Raleway;\\n  font-size: 34px;\\n  line-height: 1.2;\\n  font-weight: 400;\\n  letter-spacing: -0.04em;\\n  color: #ffffff;\\n}\\n.header__links {\\n  display: flex;\\n  align-items: center;\\n}\\n.header__links li {\\n  margin-left: 30px;\\n}\\n.header__links li:first-child {\\n  margin-left: 0;\\n}\\n.header__links a {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  line-height: 1.2;\\n  font-weight: 300;\\n  color: #ffffff;\\n  text-decoration: none;\\n  transition: color 0.2s;\\n}\\n.header__links a:hover {\\n  color: #c7b299;\\n}\\n.header__btns {\\n  display: flex;\\n}\\n.header__btns div {\\n  width: 24px;\\n  height: 24px;\\n  margin-left: 28px;\\n  cursor: pointer;\\n}\\n.header__btns div:first-child {\\n  margin-left: 0;\\n}\\n.header__burger {\\n  width: 24px;\\n  height: 24px;\\n  cursor: pointer;\\n  display: none;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center/contain no-repeat;\\n}\\n.header__search {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") center/contain no-repeat;\\n}\\n.header__links-burger {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.header__links-burger a {\\n  font-family: Montserrat;\\n  font-size: 16px;\\n  line-height: 1.9em;\\n  font-weight: 300;\\n  color: #ffffff;\\n  text-decoration: none;\\n  transition: color 0.2s;\\n}\\n.header__links-burger a:hover {\\n  color: #c7b299;\\n}\\n.header__form {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin-bottom: 15px;\\n}\\n.header__input {\\n  font-family: Montserrat;\\n  background-color: transparent;\\n  opacity: 1;\\n  color: #fff;\\n  margin-right: 15px;\\n}\\n.header__send-btn {\\n  width: 30px;\\n  height: 30px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") center/contain no-repeat;\\n}\\n\\n.home {\\n  height: 100vh;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") center/cover no-repeat;\\n}\\n.home__first {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n  margin-top: 30px;\\n  padding: 0px 48px;\\n}\\n.home__first-uptitle {\\n  font-family: Raleway;\\n  font-size: 36px;\\n  font-weight: 500;\\n  color: #ffffff;\\n  margin-bottom: 15px;\\n  text-align: center;\\n}\\n.home__first-title {\\n  font-family: Raleway;\\n  font-size: 52px;\\n  font-weight: 800;\\n  color: #ffffff;\\n  margin-bottom: 20px;\\n  text-align: center;\\n}\\n.home__first-text {\\n  font-family: Montserrat;\\n  font-size: 16px;\\n  font-weight: 300;\\n  color: #ffffff;\\n  text-align: center;\\n  margin-bottom: 50px;\\n  max-width: 570px;\\n}\\n.home__first-btn button {\\n  font-family: Raleway;\\n  font-size: 14px;\\n  font-weight: 800;\\n  text-transform: uppercase;\\n  color: #ffffff;\\n  background-color: #998675;\\n  box-shadow: inset 0px -3px 0px 0px #736357;\\n  border-radius: 3px;\\n  padding: 20px 35px;\\n  transition: background-color 0.2s;\\n}\\n.home__first-btn button:hover {\\n  background-color: #80644c;\\n}\\n.home__second {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n}\\n.home__third {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  ight: 100vh;\\n}\\n\\n.slider {\\n  position: relative;\\n  overflow: hidden;\\n}\\n.slider__wrapper {\\n  display: flex;\\n  transition: transform 0.6s ease;\\n}\\n.slider__item {\\n  flex: 0 0 100%;\\n  max-width: 100%;\\n}\\n.slider__control {\\n  position: absolute;\\n  top: 50%;\\n  display: none;\\n  align-items: center;\\n  justify-content: center;\\n  width: 40px;\\n  color: #fff;\\n  text-align: center;\\n  height: 73px;\\n  transform: translateY(-50%);\\n  background: transparent;\\n}\\n.slider__control_show {\\n  display: flex;\\n}\\n.slider__control:hover, .slider__control:focus {\\n  color: #fff;\\n  text-decoration: none;\\n  outline: 0;\\n  opacity: 0.9;\\n}\\n.slider__control_left {\\n  left: 0;\\n}\\n.slider__control_right {\\n  right: 0;\\n}\\n.slider__control::before {\\n  content: \\\"\\\";\\n  display: inline-block;\\n  width: 40px;\\n  height: 73px;\\n  background: transparent no-repeat center center;\\n  background-size: 100% 100%;\\n}\\n.slider__control_left::before {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n.slider__control_right::before {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n\\n.features {\\n  position: relative;\\n  z-index: 3;\\n  min-height: 375px;\\n  display: flex;\\n  align-items: center;\\n  padding: 35px 0;\\n  background-color: #fff;\\n}\\n.features__content {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  column-gap: 30px;\\n}\\n.features__item {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.features__item::after {\\n  content: \\\"\\\";\\n  width: 70px;\\n  height: 3px;\\n  background-color: #f1eee9;\\n  margin-top: 30px;\\n}\\n.features__item:hover .features__title {\\n  color: #c7b299;\\n}\\n.features__item:hover .features__web {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") center/contain no-repeat;\\n}\\n.features__item:hover .features__dev {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") center/contain no-repeat;\\n}\\n.features__item:hover .features__set {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") center/contain no-repeat;\\n}\\n.features__item:hover .features__buy {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \") center/contain no-repeat;\\n}\\n.features__item:hover .features__item::after {\\n  content: \\\"\\\";\\n  width: 70px;\\n  height: 3px;\\n  margin-top: 30px;\\n  background-color: #c7b299;\\n}\\n.features__web {\\n  width: 49px;\\n  height: 49px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \") center/contain no-repeat;\\n}\\n.features__dev {\\n  width: 49px;\\n  height: 49px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \") center/contain no-repeat;\\n}\\n.features__set {\\n  width: 49px;\\n  height: 49px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \") center/contain no-repeat;\\n}\\n.features__buy {\\n  width: 49px;\\n  height: 49px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \") center/contain no-repeat;\\n}\\n.features__title {\\n  margin: 30px 0 20px;\\n  font-family: Raleway;\\n  font-size: 22px;\\n  line-height: 1.2;\\n  font-weight: 600;\\n  color: #555555;\\n}\\n.features__text {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  line-height: 24px;\\n  font-weight: 300;\\n  color: #8c8c8c;\\n  text-align: center;\\n}\\n\\n.second {\\n  background-color: #fbfaf8;\\n  position: relative;\\n  z-index: 3;\\n}\\n.second__content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.second__title {\\n  font-family: Raleway;\\n  font-size: 30px;\\n  line-height: 1.2;\\n  font-weight: 600;\\n  color: #555555;\\n  margin: 80px 0 25px;\\n  text-align: center;\\n}\\n.second__subtitle {\\n  font-family: Montserrat;\\n  font-size: 16px;\\n  line-height: 28px;\\n  font-weight: 300;\\n  color: #8c8c8c;\\n  text-align: center;\\n  max-width: 760px;\\n  margin-bottom: 30px;\\n}\\n.second__block-image {\\n  display: flex;\\n  align-items: flex-end;\\n  height: 473px;\\n  position: relative;\\n  width: 100%;\\n}\\n.second__left {\\n  position: absolute;\\n  width: 770px;\\n  z-index: 2;\\n}\\n.second__center {\\n  position: absolute;\\n  left: 50%;\\n  transform: translate(-50%);\\n  z-index: 3;\\n  width: 770px;\\n}\\n.second__right {\\n  position: absolute;\\n  width: 770px;\\n  left: 100%;\\n  transform: translate(-100%);\\n  z-index: 1;\\n}\\n\\n.purchase {\\n  position: relative;\\n  z-index: 3;\\n  min-height: 150px;\\n  background-color: #f4f5f8;\\n  background-image: linear-gradient(90deg, #211b19 0%, #4e3427 100%);\\n}\\n.purchase__content {\\n  min-height: 150px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.purchase__left {\\n  margin-right: 15px;\\n}\\n.purchase__title {\\n  font-family: Raleway;\\n  font-size: 28px;\\n  line-height: 1.2;\\n  font-weight: 400;\\n  color: #fff;\\n}\\n.purchase__title span {\\n  color: #c7b299;\\n}\\n.purchase__subtitle {\\n  font-family: Montserrat;\\n  font-size: 18px;\\n  line-height: 1.2;\\n  font-weight: 300;\\n  color: #615855;\\n}\\n.purchase__btn {\\n  font-family: Raleway;\\n  font-size: 14px;\\n  font-weight: 800;\\n  text-transform: uppercase;\\n  color: #ffffff;\\n  background-color: #998675;\\n  box-shadow: inset 0px -3px 0px 0px #736357;\\n  border-radius: 3px;\\n  cursor: pointer;\\n  padding: 13px 26.5px;\\n  white-space: nowrap;\\n  transition: background-color 0.2s;\\n}\\n.purchase__btn:hover {\\n  background-color: #80644c;\\n}\\n\\n.articles {\\n  background-color: #fff;\\n  position: relative;\\n  z-index: 3;\\n}\\n.articles__content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.articles__title {\\n  margin: 80px 0 25px;\\n  font-family: Raleway;\\n  font-size: 30px;\\n  line-height: 1.2;\\n  font-weight: 600;\\n  color: #555555;\\n  text-align: center;\\n}\\n.articles__subtitle {\\n  font-family: Montserrat;\\n  font-size: 16px;\\n  line-height: 28px;\\n  font-weight: 300;\\n  color: #8c8c8c;\\n  text-align: center;\\n  margin-bottom: 40px;\\n}\\n.articles__block {\\n  margin-bottom: 40px;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  column-gap: 30px;\\n  row-gap: 30px;\\n  width: 100%;\\n}\\n.articles__btn button {\\n  margin-bottom: 80px;\\n  background-color: #998675;\\n  box-shadow: inset 0px -3px 0px 0px #736357;\\n  border-radius: 3px;\\n  font-family: Raleway;\\n  font-size: 14px;\\n  font-weight: 800;\\n  text-transform: uppercase;\\n  color: #ffffff;\\n  padding: 13px 42.5px;\\n  transition: background-color 0.2s;\\n}\\n.articles__btn button:hover {\\n  background-color: #80644c;\\n}\\n.articles__item:hover .articles__item-info {\\n  background-color: #362f2d;\\n}\\n.articles__item:hover .articles__item-title {\\n  color: #fff;\\n}\\n.articles__item:hover .articles__item-subtitle {\\n  color: #c7b299;\\n}\\n.articles__item-img {\\n  height: 235px;\\n  overflow: hidden;\\n}\\n.articles__item-info {\\n  height: 100px;\\n  background-color: #fbfaf8;\\n  padding: 20px 0px 0px 30px;\\n  transition: background-color 0.2s;\\n}\\n.articles__item-title {\\n  font-family: Raleway;\\n  font-size: 20px;\\n  line-height: 1.2;\\n  font-weight: 500;\\n  color: #c7b299;\\n  margin-bottom: 15px;\\n  transition: color 0.2s;\\n}\\n.articles__item-subtitle {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  line-height: 20px;\\n  font-weight: 300;\\n  color: #d1d1d1;\\n  transition: color 0.2s;\\n}\\n\\n.video {\\n  height: 705px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \") center/cover no-repeat;\\n}\\n.video__container {\\n  height: 100%;\\n  max-width: 590px;\\n  padding: 0 15px;\\n  margin: 0 auto;\\n}\\n.video__content {\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.video__btn {\\n  margin-bottom: 45px;\\n  position: relative;\\n}\\n.video__btn-wrapper {\\n  width: 100px;\\n  height: 100px;\\n  opacity: 0.2;\\n  background-color: #000000;\\n  border-radius: 50%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.video__btn-image {\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 50%;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: 3;\\n}\\n.video__title {\\n  font-family: Raleway;\\n  font-size: 30px;\\n  line-height: 1.2;\\n  font-weight: 500;\\n  color: #ffffff;\\n  text-align: center;\\n  margin-bottom: 30px;\\n}\\n.video__subtitle {\\n  font-family: Montserrat;\\n  font-size: 16px;\\n  line-height: 28px;\\n  font-weight: 300;\\n  color: #ffffff;\\n  text-align: center;\\n  margin-bottom: 40px;\\n}\\n.video__time {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  line-height: 24px;\\n  font-weight: 400;\\n  color: #c7b299;\\n  text-align: center;\\n}\\n\\n.phone {\\n  position: relative;\\n  z-index: 3;\\n  height: 695px;\\n  background-color: #fbfaf8;\\n}\\n.phone__content {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.phone__content img {\\n  height: 615px;\\n  margin: 80px 30px 0 45px;\\n}\\n.phone__info-title {\\n  font-family: Raleway;\\n  font-size: 30px;\\n  line-height: 1.2;\\n  font-weight: 600;\\n  color: #555555;\\n  margin-bottom: 40px;\\n}\\n.phone__info-text {\\n  font-family: Montserrat;\\n  font-size: 16px;\\n  line-height: 28px;\\n  font-weight: 300;\\n  color: #8c8c8c;\\n  margin-bottom: 45px;\\n}\\n.phone__info-list {\\n  font-family: Montserrat;\\n  font-size: 16px;\\n  line-height: 32px;\\n  font-weight: 300;\\n  color: #8c8c8c;\\n}\\n.phone__info-list li {\\n  position: relative;\\n  margin-left: 100px;\\n}\\n.phone__info-list li::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 21px;\\n  height: 21px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \");\\n  top: 5px;\\n  left: -60px;\\n}\\n\\n.statistic {\\n  position: relative;\\n  z-index: 3;\\n  min-height: 300px;\\n  background-color: #f4f5f8;\\n  background-image: linear-gradient(90deg, #211b19 0%, #4e3427 100%);\\n}\\n.statistic__content {\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n  column-gap: 75px;\\n  min-height: 300px;\\n}\\n.statistic__item {\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n}\\n.statistic__item::after {\\n  content: \\\"\\\";\\n  width: 30px;\\n  height: 2px;\\n  background-color: #ffffff;\\n  margin-top: 30px;\\n}\\n.statistic__item-img {\\n  width: 44px;\\n  height: 44px;\\n  margin-bottom: 30px;\\n}\\n.statistic__item-nums {\\n  font-family: Montserrat;\\n  font-size: 48px;\\n  line-height: 36px;\\n  font-weight: 200;\\n  color: #ffffff;\\n  margin-bottom: 20px;\\n}\\n.statistic__item-name {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  line-height: 20px;\\n  font-weight: 300;\\n  text-transform: uppercase;\\n  color: #c7b299;\\n  white-space: nowrap;\\n}\\n\\n.posts {\\n  background-color: #fff;\\n  position: relative;\\n  z-index: 3;\\n}\\n.posts__content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.posts__title {\\n  font-family: Raleway;\\n  font-size: 30px;\\n  line-height: 1.2;\\n  font-weight: 600;\\n  color: #555555;\\n  text-align: center;\\n  margin: 80px 0px 30px;\\n}\\n.posts__subtitle {\\n  font-family: Montserrat;\\n  font-size: 16px;\\n  line-height: 28px;\\n  font-weight: 300;\\n  color: #8c8c8c;\\n  text-align: center;\\n  margin-bottom: 40px;\\n  max-width: 760px;\\n}\\n.posts__block {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  column-gap: 30px;\\n  row-gap: 30px;\\n  margin-bottom: 40px;\\n}\\n.posts__post:hover .posts__post-info {\\n  background-color: #362f2d;\\n}\\n.posts__post:hover .posts__info-title {\\n  color: #c7b299;\\n}\\n.posts__post:hover .posts__info-text {\\n  color: #ffffff;\\n}\\n.posts__post:hover .posts__date-day {\\n  background-color: #c7b299;\\n}\\n.posts__post:hover .posts__date-month {\\n  background-color: #a48d72;\\n}\\n.posts__post-img {\\n  height: 220px;\\n  padding: 20px 0px 0px 20px;\\n}\\n.posts__date-day {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 50px;\\n  height: 35px;\\n  background-color: #363636;\\n  border-radius: 3px 3px 0px 0px;\\n  font-family: Montserrat;\\n  font-size: 24px;\\n  font-weight: 300;\\n  color: #ffffff;\\n  transition: background-color 0.2s;\\n}\\n.posts__date-month {\\n  width: 50px;\\n  height: 25px;\\n  background-color: #252525;\\n  border-radius: 0px 0px 3px 3px;\\n  font-family: \\\"Roboto\\\";\\n  font-size: 12px;\\n  font-weight: 400;\\n  color: #ffffff;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transition: background-color 0.2s;\\n}\\n.posts__post-info {\\n  padding: 30px 30px 35px 30px;\\n  border: 1px solid #f8f8f8;\\n  transition: background-color 0.2s;\\n}\\n.posts__info-title {\\n  font-family: Raleway;\\n  font-size: 20px;\\n  line-height: 1.2;\\n  font-weight: 500;\\n  color: #555555;\\n  margin-bottom: 20px;\\n  transition: color 0.2s;\\n}\\n.posts__info-text {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  line-height: 22px;\\n  font-weight: 300;\\n  color: #8c8c8c;\\n  margin-bottom: 25px;\\n  transition: color 0.2s;\\n}\\n.posts__info-link a {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  line-height: 20px;\\n  font-weight: 300;\\n  color: #c7b299;\\n  margin-bottom: 35px;\\n}\\n\\n.brands {\\n  position: relative;\\n  z-index: 3;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \") center/cover no-repeat;\\n  min-height: 490px;\\n  display: flex;\\n  align-items: center;\\n}\\n.brands__content {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  column-gap: 90px;\\n  row-gap: 60px;\\n}\\n.brands__item {\\n  display: flex;\\n  align-items: center;\\n}\\n.brands__item img {\\n  width: 210px;\\n}\\n\\n.contacts {\\n  position: relative;\\n  z-index: 3;\\n  min-height: 508px;\\n  background-color: #191919;\\n  display: flex;\\n  align-items: center;\\n}\\n.contacts__content {\\n  height: 100%;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  column-gap: 40px;\\n}\\n.contacts__first-title {\\n  display: flex;\\n  align-items: center;\\n  margin-bottom: 30px;\\n}\\n.contacts__first-title img {\\n  width: 64px;\\n  height: 56px;\\n}\\n.contacts__first-title p {\\n  font-family: Raleway;\\n  font-size: 34px;\\n  font-weight: 400;\\n  letter-spacing: -0.04em;\\n  color: #ffffff;\\n}\\n.contacts__first-text {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  line-height: 24px;\\n  font-weight: 300;\\n  color: #555555;\\n  margin-bottom: 30px;\\n}\\n.contacts__first-link a {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  font-weight: 400;\\n  color: #d1d1d1;\\n}\\n.contacts__second-title {\\n  font-family: Raleway;\\n  font-size: 24px;\\n  font-weight: 700;\\n  color: #ffffff;\\n  margin-bottom: 30px;\\n}\\n.contacts__second-item {\\n  border-bottom: 2px solid #252525;\\n  margin-bottom: 20px;\\n}\\n.contacts__second-date {\\n  font-family: Montserrat;\\n  font-size: 12px;\\n  font-weight: 300;\\n  color: #363636;\\n  margin-bottom: 10px;\\n}\\n.contacts__second-text {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  line-height: 20px;\\n  font-weight: 300;\\n  color: #555555;\\n  margin-bottom: 20px;\\n}\\n.contacts__third-title {\\n  font-family: Raleway;\\n  font-size: 24px;\\n  line-height: 1.2;\\n  font-weight: 700;\\n  color: #ffffff;\\n  margin-bottom: 30px;\\n}\\n.contacts__third-item {\\n  border-bottom: 2px solid #252525;\\n  margin-bottom: 20px;\\n}\\n.contacts__third-text {\\n  font-family: Montserrat;\\n  font-size: 14px;\\n  line-height: 20px;\\n  font-weight: 300;\\n  color: #555555;\\n  margin-bottom: 10px;\\n}\\n.contacts__third-text p span {\\n  color: #00bff3;\\n}\\n.contacts__third-date {\\n  font-family: Montserrat;\\n  font-size: 12px;\\n  line-height: 20px;\\n  font-weight: 300;\\n  color: #363636;\\n  margin-bottom: 15px;\\n}\\n.contacts__fourth-title {\\n  font-family: Raleway;\\n  font-size: 24px;\\n  line-height: 1.2;\\n  font-weight: 700;\\n  color: #ffffff;\\n  margin-bottom: 30px;\\n}\\n.contacts__fourth-block {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  gap: 10px;\\n}\\n.contacts__fourth-block img {\\n  width: 130px;\\n  height: 98px;\\n}\\n\\n.bottom {\\n  min-height: 110px;\\n  background-color: #111111;\\n}\\n.bottom__content {\\n  height: 110px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.bottom__left {\\n  font-family: Montserrat;\\n  font-size: 13px;\\n  font-weight: 300;\\n  color: #555555;\\n  margin-right: 20px;\\n  text-align: center;\\n}\\n.bottom__wax {\\n  color: #959595;\\n}\\n.bottom__faq {\\n  color: #c7b299;\\n}\\n.bottom__right {\\n  font-family: Montserrat;\\n  font-size: 13px;\\n  font-weight: 300;\\n  color: #555555;\\n  text-align: center;\\n}\\n.bottom__right span {\\n  color: #959595;\\n}\\n\\n@media (max-width: 1000px) {\\n  .header__links {\\n    display: none;\\n  }\\n  .header__burger {\\n    display: block;\\n  }\\n\\n  .features__content {\\n    grid-template-columns: 1fr 1fr;\\n    row-gap: 25px;\\n  }\\n\\n  .articles__block {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n\\n  .phone {\\n    height: auto;\\n  }\\n  .phone__content img {\\n    display: none;\\n  }\\n  .phone__info {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    margin-bottom: 30px;\\n  }\\n  .phone__info-title {\\n    margin-top: 30px;\\n    text-align: center;\\n  }\\n  .phone__info-text {\\n    text-align: center;\\n  }\\n\\n  .statistic__content {\\n    padding: 25px 0;\\n    grid-template-columns: repeat(2, 1fr);\\n    row-gap: 40px;\\n  }\\n  .statistic__item:last-child {\\n    grid-column: 1/3;\\n  }\\n\\n  .posts__block {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n\\n  .brands__content {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n\\n  .contacts__content {\\n    grid-template-columns: repeat(2, 1fr);\\n    row-gap: 40px;\\n    padding: 40px 0px;\\n  }\\n\\n  .home__first-uptitle {\\n    font-size: 30px;\\n    margin-bottom: 5px;\\n  }\\n  .home__first-title {\\n    font-size: 42px;\\n    margin-bottom: 10px;\\n  }\\n  .home__first-text {\\n    margin-bottom: 30px;\\n  }\\n  .home__first-btn button {\\n    padding: 15px 30px;\\n  }\\n}\\n@media (max-width: 800px) {\\n  .second__block-image {\\n    height: 310px;\\n  }\\n  .second__block-image div {\\n    width: 470px;\\n  }\\n}\\n@media (max-width: 625px) {\\n  .articles__block {\\n    grid-template-columns: repeat(1, 1fr);\\n  }\\n\\n  .posts__block {\\n    grid-template-columns: repeat(1, 1fr);\\n  }\\n\\n  .brands__content {\\n    grid-template-columns: repeat(1, 1fr);\\n    margin: 30px 0px;\\n  }\\n\\n  .contacts__content {\\n    grid-template-columns: repeat(1, 1fr);\\n  }\\n  .contacts__item {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n  .contacts__third-posts {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    text-align: center;\\n  }\\n\\n  .home__first-uptitle {\\n    font-size: 27px;\\n  }\\n  .home__first-title {\\n    font-size: 35px;\\n  }\\n  .home__first-text {\\n    font-size: 15px;\\n  }\\n}\\n@media (max-width: 500px) {\\n  .second__block-image {\\n    height: 200px;\\n  }\\n  .second__block-image div {\\n    width: 290px;\\n  }\\n\\n  .purchase__title {\\n    font-size: 21px;\\n    text-align: center;\\n    margin-top: 15px;\\n  }\\n  .purchase__subtitle {\\n    text-align: center;\\n    font-size: 16px;\\n    margin-bottom: 20px;\\n  }\\n  .purchase__btn {\\n    padding: 10px 16px;\\n    margin-bottom: 15px;\\n  }\\n  .purchase__content {\\n    flex-direction: column;\\n    justify-content: center;\\n  }\\n\\n  .features__content {\\n    grid-template-columns: 1fr;\\n  }\\n\\n  .articles__title {\\n    margin-top: 40px;\\n  }\\n\\n  .phone__info-list li {\\n    margin-left: 45px;\\n  }\\n  .phone__info-list li::before {\\n    left: -40px;\\n  }\\n\\n  .statistic__content {\\n    grid-template-columns: 1fr;\\n    row-gap: 60px;\\n  }\\n  .statistic__item:last-child {\\n    grid-column: 1/2;\\n  }\\n\\n  .bottom__content {\\n    flex-direction: column;\\n    justify-content: center;\\n  }\\n\\n  .home__first {\\n    padding: 0px 38px;\\n  }\\n\\n  .slider__control {\\n    width: 30px;\\n    height: 60px;\\n  }\\n  .slider__control::before {\\n    width: 30px;\\n    height: 60px;\\n  }\\n}\\n@media (max-width: 360px) {\\n  .header__content {\\n    height: 70px;\\n  }\\n  .header__logo img {\\n    width: 40px;\\n    height: 35px;\\n  }\\n  .header__btns div {\\n    margin-left: 15px;\\n  }\\n  .header__logo-name {\\n    display: none;\\n  }\\n\\n  .home__first-uptitle {\\n    font-size: 24px;\\n  }\\n  .home__first-title {\\n    font-size: 30px;\\n  }\\n  .home__first-text {\\n    font-size: 14px;\\n  }\\n}\\n.d-none {\\n  display: none;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style/style.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url[\"default\"] : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"../node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///../node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  } // blank or null?\n\n\n  if (!css || typeof css !== \"string\") {\n    return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\"); // convert each url(...)\n\n  /*\n  This regular expression is just a way to recursively match brackets within\n  a string.\n  \t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n     (  = Start a capturing group\n       (?:  = Start a non-capturing group\n           [^)(]  = Match anything that isn't a parentheses\n           |  = OR\n           \\(  = Match a start parentheses\n               (?:  = Start another non-capturing groups\n                   [^)(]+  = Match anything that isn't a parentheses\n                   |  = OR\n                   \\(  = Match a start parentheses\n                       [^)(]*  = Match anything that isn't a parentheses\n                   \\)  = Match a end parentheses\n               )  = End Group\n               *\\) = Match anything and then a close parens\n           )  = Close non-capturing group\n           *  = Match anything\n        )  = Close capturing group\n   \\)  = Match a close parens\n  \t /gi  = Get all matches, not the first.  Be case insensitive.\n   */\n\n  var fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n    // strip quotes (if they exist)\n    var unquotedOrigUrl = origUrl.trim().replace(/^\"(.*)\"$/, function (o, $1) {\n      return $1;\n    }).replace(/^'(.*)'$/, function (o, $1) {\n      return $1;\n    }); // already a full url? no change\n\n    if (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n      return fullMatch;\n    } // convert the url to a full url\n\n\n    var newUrl;\n\n    if (unquotedOrigUrl.indexOf(\"//\") === 0) {\n      //TODO: should we add protocol?\n      newUrl = unquotedOrigUrl;\n    } else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n      // path should be relative to the base url\n      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n    } else {\n      // path should be relative to current directory\n      newUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n    } // send back the fixed url(...)\n\n\n    return \"url(\" + JSON.stringify(newUrl) + \")\";\n  }); // send back the fixed css\n\n  return fixedCss;\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./img/bg_photo.png":
/*!**************************!*\
  !*** ./img/bg_photo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bg_photo.png\";\n\n//# sourceURL=webpack:///./img/bg_photo.png?");

/***/ }),

/***/ "./img/bg_photo_brand.png":
/*!********************************!*\
  !*** ./img/bg_photo_brand.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bg_photo_brand.png\";\n\n//# sourceURL=webpack:///./img/bg_photo_brand.png?");

/***/ }),

/***/ "./img/bg_video.png":
/*!**************************!*\
  !*** ./img/bg_video.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bg_video.png\";\n\n//# sourceURL=webpack:///./img/bg_video.png?");

/***/ }),

/***/ "./img/buy.png":
/*!*********************!*\
  !*** ./img/buy.png ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/buy.png\";\n\n//# sourceURL=webpack:///./img/buy.png?");

/***/ }),

/***/ "./img/buy_c.png":
/*!***********************!*\
  !*** ./img/buy_c.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/buy_c.png\";\n\n//# sourceURL=webpack:///./img/buy_c.png?");

/***/ }),

/***/ "./img/icon_search.png":
/*!*****************************!*\
  !*** ./img/icon_search.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/icon_search.png\";\n\n//# sourceURL=webpack:///./img/icon_search.png?");

/***/ }),

/***/ "./img/iconsburg.png":
/*!***************************!*\
  !*** ./img/iconsburg.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/iconsburg.png\";\n\n//# sourceURL=webpack:///./img/iconsburg.png?");

/***/ }),

/***/ "./img/left.png":
/*!**********************!*\
  !*** ./img/left.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/left.png\";\n\n//# sourceURL=webpack:///./img/left.png?");

/***/ }),

/***/ "./img/li.png":
/*!********************!*\
  !*** ./img/li.png ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/li.png\";\n\n//# sourceURL=webpack:///./img/li.png?");

/***/ }),

/***/ "./img/pen.png":
/*!*********************!*\
  !*** ./img/pen.png ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/pen.png\";\n\n//# sourceURL=webpack:///./img/pen.png?");

/***/ }),

/***/ "./img/pen_c.png":
/*!***********************!*\
  !*** ./img/pen_c.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/pen_c.png\";\n\n//# sourceURL=webpack:///./img/pen_c.png?");

/***/ }),

/***/ "./img/right.png":
/*!***********************!*\
  !*** ./img/right.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/right.png\";\n\n//# sourceURL=webpack:///./img/right.png?");

/***/ }),

/***/ "./img/set.png":
/*!*********************!*\
  !*** ./img/set.png ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/set.png\";\n\n//# sourceURL=webpack:///./img/set.png?");

/***/ }),

/***/ "./img/set_c.png":
/*!***********************!*\
  !*** ./img/set_c.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/set_c.png\";\n\n//# sourceURL=webpack:///./img/set_c.png?");

/***/ }),

/***/ "./img/stack.png":
/*!***********************!*\
  !*** ./img/stack.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/stack.png\";\n\n//# sourceURL=webpack:///./img/stack.png?");

/***/ }),

/***/ "./img/stack_c.png":
/*!*************************!*\
  !*** ./img/stack_c.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/stack_c.png\";\n\n//# sourceURL=webpack:///./img/stack_c.png?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_clickBurger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/clickBurger */ \"./js/modules/clickBurger.js\");\n/* harmony import */ var _modules_clickSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/clickSearch */ \"./js/modules/clickSearch.js\");\n/* harmony import */ var _modules_publicArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/publicArticles */ \"./js/modules/publicArticles.js\");\n/* harmony import */ var _modules_publicPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/publicPosts */ \"./js/modules/publicPosts.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_loadArticles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/loadArticles */ \"./js/modules/loadArticles.js\");\n\n\n\n\n\n\n\nObject(_modules_clickBurger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modules_clickSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_modules_publicArticles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nObject(_modules_publicPosts__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nObject(_modules_loadArticles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/modules/clickBurger.js":
/*!***********************************!*\
  !*** ./js/modules/clickBurger.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar burger = document.querySelector(\".header__burger\");\nvar links = document.querySelector(\".header__links-burger\");\nvar headLinks = document.querySelector(\".header__links\");\nvar slider = document.querySelector(\".slider\");\nvar headerForm = document.querySelector(\".header__form\");\n\nfunction clickBurger() {\n  burger.addEventListener(\"click\", function (e) {\n    links.classList.toggle(\"d-none\");\n    headLinks.classList.toggle(\"d-none\");\n\n    if (!slider.classList.contains(\"d-none\")) {\n      slider.classList.add(\"d-none\");\n    } else if (headerForm.classList.contains(\"d-none\")) {\n      slider.classList.remove(\"d-none\");\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clickBurger);\n\n//# sourceURL=webpack:///./js/modules/clickBurger.js?");

/***/ }),

/***/ "./js/modules/clickSearch.js":
/*!***********************************!*\
  !*** ./js/modules/clickSearch.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar headerSearch = document.querySelector(\".header__search\");\nvar headerForm = document.querySelector(\".header__form\");\nvar slider = document.querySelector(\".slider\");\nvar links = document.querySelector(\".header__links-burger\");\n\nfunction clickSearch() {\n  headerSearch.addEventListener(\"click\", function (e) {\n    headerForm.classList.toggle(\"d-none\");\n\n    if (!slider.classList.contains(\"d-none\")) {\n      slider.classList.add(\"d-none\");\n    } else if (links.classList.contains(\"d-none\")) {\n      slider.classList.remove(\"d-none\");\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clickSearch);\n\n//# sourceURL=webpack:///./js/modules/clickSearch.js?");

/***/ }),

/***/ "./js/modules/loadArticles.js":
/*!************************************!*\
  !*** ./js/modules/loadArticles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar loadButtonArticles = document.querySelector(\".articles__btn\");\nvar button = document.querySelector(\".articles__btn>button\");\n\nfunction loadArticles() {\n  var articlesArr = Array.from(document.querySelectorAll(\".unactive\"));\n  loadButtonArticles.addEventListener(\"click\", function (e) {\n    articlesArr.forEach(function (elem) {\n      elem.classList.toggle(\"d-none\");\n    });\n    button.classList.toggle(\"active\");\n    checkBtn();\n  });\n}\n\nfunction checkBtn() {\n  if (button.classList.contains(\"active\")) {\n    button.textContent = \"Hide\";\n  } else {\n    button.textContent = \"Load More\";\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadArticles);\n\n//# sourceURL=webpack:///./js/modules/loadArticles.js?");

/***/ }),

/***/ "./js/modules/publicArticles.js":
/*!**************************************!*\
  !*** ./js/modules/publicArticles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar articlesBlock = document.querySelector(\".articles__block\");\nvar articlesArr = [{\n  id: 1,\n  img: \"bg_photo_1\",\n  title: \"Claritas Etiam Processus\",\n  sub: \"Photography, Nature\",\n  condition: \"active\"\n}, {\n  id: 2,\n  img: \"bg_photo_2\",\n  title: \"Quam Nutamus Farum\",\n  sub: \"Graphic Design, Mock-Up\",\n  condition: \"active\"\n}, {\n  id: 3,\n  img: \"bg_photo_3\",\n  title: \"Usus Legentis Videntur\",\n  sub: \"Photography, Holiday\",\n  condition: \"active\"\n}, {\n  id: 4,\n  img: \"bg_photo_4\",\n  title: \"Claritas Etiam Processus\",\n  sub: \"Photography, Nature\",\n  condition: \"active\"\n}, {\n  id: 5,\n  img: \"bg_photo_5\",\n  title: \"Quam Nutamus Farum\",\n  sub: \"Graphic Design, Mock-Up\",\n  condition: \"active\"\n}, {\n  id: 6,\n  img: \"bg_photo_6\",\n  title: \"Usus Legentis Videntur\",\n  sub: \"Photography, Holiday\",\n  condition: \"active\"\n}, {\n  id: 7,\n  img: \"bg_photo_1\",\n  title: \"Claritas Etiam Processus\",\n  sub: \"Photography, Nature\",\n  condition: \"hide\"\n}, {\n  id: 8,\n  img: \"bg_photo_2\",\n  title: \"Quam Nutamus Farum\",\n  sub: \"Graphic Design, Mock-Up\",\n  condition: \"hide\"\n}, {\n  id: 9,\n  img: \"bg_photo_3\",\n  title: \"Usus Legentis Videntur\",\n  sub: \"Photography, Holiday\",\n  condition: \"hide\"\n}, {\n  id: 10,\n  img: \"bg_photo_4\",\n  title: \"Claritas Etiam Processus\",\n  sub: \"Photography, Nature\",\n  condition: \"hide\"\n}, {\n  id: 11,\n  img: \"bg_photo_5\",\n  title: \"Quam Nutamus Farum\",\n  sub: \"Graphic Design, Mock-Up\",\n  condition: \"hide\"\n}, {\n  id: 12,\n  img: \"bg_photo_6\",\n  title: \"Usus Legentis Videntur\",\n  sub: \"Photography, Holiday\",\n  condition: \"hide\"\n}];\n\nfunction publicArticles() {\n  var item = document.createDocumentFragment();\n\n  var _iterator = _createForOfIteratorHelper(articlesArr),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var key = _step.value;\n      createArticles(key, item);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  articlesBlock.appendChild(item);\n}\n\nfunction createArticles(key, item) {\n  if (key.condition === \"active\") {\n    var elem = document.createElement(\"div\");\n    elem.classList.add(\"articles__item\");\n    item.appendChild(elem);\n    var img = document.createElement(\"div\");\n    img.classList.add(\"articles__item-img\");\n    img.style.background = \"url('img/\".concat(key.img, \".png') center / cover no-repeat\");\n    elem.appendChild(img);\n    var info = document.createElement(\"div\");\n    info.classList.add(\"articles__item-info\");\n    elem.appendChild(info);\n    var title = document.createElement(\"div\");\n    title.classList.add(\"articles__item-title\");\n    info.appendChild(title);\n    var titleText = document.createElement(\"p\");\n    titleText.textContent = key.title;\n    title.appendChild(titleText);\n    var subtitle = document.createElement(\"div\");\n    subtitle.classList.add(\"articles__item-subtitle\");\n    info.appendChild(subtitle);\n    var subtitleText = document.createElement(\"p\");\n    subtitleText.textContent = key.sub;\n    subtitle.appendChild(subtitleText);\n  } else if (key.condition === \"hide\") {\n    var _elem = document.createElement(\"div\");\n\n    _elem.classList.add(\"articles__item\");\n\n    _elem.classList.add(\"d-none\");\n\n    _elem.classList.add(\"unactive\");\n\n    item.appendChild(_elem);\n\n    var _img = document.createElement(\"div\");\n\n    _img.classList.add(\"articles__item-img\");\n\n    _img.style.background = \"url('img/\".concat(key.img, \".png') center / cover no-repeat\");\n\n    _elem.appendChild(_img);\n\n    var _info = document.createElement(\"div\");\n\n    _info.classList.add(\"articles__item-info\");\n\n    _elem.appendChild(_info);\n\n    var _title = document.createElement(\"div\");\n\n    _title.classList.add(\"articles__item-title\");\n\n    _info.appendChild(_title);\n\n    var _titleText = document.createElement(\"p\");\n\n    _titleText.textContent = key.title;\n\n    _title.appendChild(_titleText);\n\n    var _subtitle = document.createElement(\"div\");\n\n    _subtitle.classList.add(\"articles__item-subtitle\");\n\n    _info.appendChild(_subtitle);\n\n    var _subtitleText = document.createElement(\"p\");\n\n    _subtitleText.textContent = key.sub;\n\n    _subtitle.appendChild(_subtitleText);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (publicArticles);\n\n//# sourceURL=webpack:///./js/modules/publicArticles.js?");

/***/ }),

/***/ "./js/modules/publicPosts.js":
/*!***********************************!*\
  !*** ./js/modules/publicPosts.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar postsBlock = document.querySelector(\".posts__block\");\nvar postsArr = [{\n  id: 1,\n  img: \"bg_post1\",\n  day: \"30\",\n  month: \"Sep.\",\n  title: \"Lorem ipsum dolor sit amet\",\n  text: \"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.\"\n}, {\n  id: 2,\n  img: \"bg_post2\",\n  day: \"28\",\n  month: \"Oct.\",\n  title: \"Lorem ipsum dolor sit amet\",\n  text: \"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.\"\n}, {\n  id: 3,\n  img: \"bg_post3\",\n  day: \"01\",\n  month: \"Dec.\",\n  title: \"Lorem ipsum dolor sit amet\",\n  text: \"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.\"\n}];\n\nfunction publicPosts() {\n  var fragment = document.createDocumentFragment();\n\n  var _iterator = _createForOfIteratorHelper(postsArr),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var key = _step.value;\n      createPosts(key, fragment);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  postsBlock.appendChild(fragment);\n  console.log(fragment);\n}\n\nfunction createPosts(key, fragment) {\n  var post = document.createElement(\"div\");\n  post.classList.add(\"posts__post\");\n  fragment.appendChild(post);\n  var image = document.createElement(\"div\");\n  image.classList.add(\"posts__post-img\");\n  image.style.background = \"url(../img/\".concat(key.img, \".png) center / cover no-repeat\");\n  post.appendChild(image);\n  var date = document.createElement(\"div\");\n  date.classList.add(\"posts__post-date\");\n  image.appendChild(date);\n  var day = document.createElement(\"div\");\n  day.classList.add(\"posts__date-day\");\n  day.textContent = key.day;\n  date.appendChild(day);\n  var month = document.createElement(\"div\");\n  month.classList.add(\"posts__date-month\");\n  month.textContent = key.month;\n  date.appendChild(month);\n  var info = document.createElement(\"div\");\n  info.classList.add(\"posts__post-info\");\n  post.appendChild(info);\n  var title = document.createElement(\"div\");\n  title.classList.add(\"posts__info-title\");\n  title.textContent = key.title;\n  info.appendChild(title);\n  var text = document.createElement(\"div\");\n  text.classList.add(\"posts__info-text\");\n  text.textContent = key.text;\n  info.appendChild(text);\n  var link = document.createElement(\"div\");\n  link.classList.add(\"posts__info-link\");\n  info.appendChild(link);\n  var linkText = document.createElement(\"a\");\n  linkText.textContent = \"Read More\";\n  linkText.setAttribute(\"href\", \"#\");\n  link.appendChild(linkText);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (publicPosts);\n\n//# sourceURL=webpack:///./js/modules/publicPosts.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar multiItemSlider = function () {\n  return function (selector, config) {\n    var _mainElement = document.querySelector(selector),\n        // основный элемент блока\n    _sliderWrapper = _mainElement.querySelector(\".slider__wrapper\"),\n        // обертка для .slider-item\n    _sliderItems = _mainElement.querySelectorAll(\".slider__item\"),\n        // элементы (.slider-item)\n    _sliderControls = _mainElement.querySelectorAll(\".slider__control\"),\n        // элементы управления\n    _sliderControlLeft = _mainElement.querySelector(\".slider__control_left\"),\n        // кнопка \"LEFT\"\n    _sliderControlRight = _mainElement.querySelector(\".slider__control_right\"),\n        // кнопка \"RIGHT\"\n    _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),\n        // ширина обёртки\n    _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),\n        // ширина одного элемента\n    _positionLeftItem = 0,\n        // позиция левого активного элемента\n    _transform = 0,\n        // значение транфсофрмации .slider_wrapper\n    _step = _itemWidth / _wrapperWidth * 100,\n        // величина шага (для трансформации)\n    _items = []; // массив элементов\n    // наполнение массива _items\n\n\n    _sliderItems.forEach(function (item, index) {\n      _items.push({\n        item: item,\n        position: index,\n        transform: 0\n      });\n    });\n\n    var position = {\n      getMin: 0,\n      getMax: _items.length - 1\n    };\n\n    var _transformItem = function _transformItem(direction) {\n      if (direction === \"right\") {\n        if (_positionLeftItem + _wrapperWidth / _itemWidth - 1 >= position.getMax) {\n          return;\n        }\n\n        if (!_sliderControlLeft.classList.contains(\"slider__control_show\")) {\n          _sliderControlLeft.classList.add(\"slider__control_show\");\n        }\n\n        if (_sliderControlRight.classList.contains(\"slider__control_show\") && _positionLeftItem + _wrapperWidth / _itemWidth >= position.getMax) {\n          _sliderControlRight.classList.remove(\"slider__control_show\");\n        }\n\n        _positionLeftItem++;\n        _transform -= _step;\n      }\n\n      if (direction === \"left\") {\n        if (_positionLeftItem <= position.getMin) {\n          return;\n        }\n\n        if (!_sliderControlRight.classList.contains(\"slider__control_show\")) {\n          _sliderControlRight.classList.add(\"slider__control_show\");\n        }\n\n        if (_sliderControlLeft.classList.contains(\"slider__control_show\") && _positionLeftItem - 1 <= position.getMin) {\n          _sliderControlLeft.classList.remove(\"slider__control_show\");\n        }\n\n        _positionLeftItem--;\n        _transform += _step;\n      }\n\n      _sliderWrapper.style.transform = \"translateX(\" + _transform + \"%)\";\n    }; // обработчик события click для кнопок \"назад\" и \"вперед\"\n\n\n    var _controlClick = function _controlClick(e) {\n      if (e.target.classList.contains(\"slider__control\")) {\n        e.preventDefault();\n        var direction = e.target.classList.contains(\"slider__control_right\") ? \"right\" : \"left\";\n\n        _transformItem(direction);\n      }\n    };\n\n    var _setUpListeners = function _setUpListeners() {\n      // добавление к кнопкам \"назад\" и \"вперед\" обрботчика _controlClick для событя click\n      _sliderControls.forEach(function (item) {\n        item.addEventListener(\"click\", _controlClick);\n      });\n    }; // инициализация\n\n\n    _setUpListeners();\n\n    return {\n      right: function right() {\n        // метод right\n        _transformItem(\"right\");\n      },\n      left: function left() {\n        // метод left\n        _transformItem(\"left\");\n      }\n    };\n  };\n}();\n\nvar slider = multiItemSlider(\".slider\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (multiItemSlider);\n\n//# sourceURL=webpack:///./js/modules/slider.js?");

/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./style/style.scss?");

/***/ })

/******/ });