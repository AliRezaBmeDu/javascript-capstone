"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Style the header section */\r\nnav {\r\n  background-color: rgb(121, 5, 5);\r\n  color: lightblue;\r\n  padding: 0.5rem 5rem;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  font-family: 'Franklin Gothic Medium', Courier, monospace, sans-serif;\r\n}\r\n\r\nnav ul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.my-logo {\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n.main-section {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  background-color: #363434;\r\n}\r\n\r\n.grid-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: auto;\r\n  margin-top: 2rem;\r\n  margin-bottom: 3rem;\r\n  padding: 3rem;\r\n  gap: 2rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.single-item {\r\n  width: 300px;\r\n  height: 375px;\r\n  background-color: lightblue;\r\n  box-sizing: border-box;\r\n  border: 1px solid gray;\r\n  border-radius: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2px;\r\n}\r\n\r\n.single-item img {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.overhead {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-inline: 1rem;\r\n  gap: 2rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.name {\r\n  font-family: 'Franklin Gothic Medium', Courier, monospace, sans-serif;\r\n  width: 70%;\r\n}\r\n\r\n.like-container {\r\n  width: 30%;\r\n  height: 1.2rem;\r\n  margin-top: 1.2rem;\r\n}\r\n\r\n.like-detail {\r\n  margin-left: 2px;\r\n  font-size: 0.8rem;\r\n  font-style: italic;\r\n}\r\n\r\n.button-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.reserve,\r\n.comment {\r\n  margin: auto;\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  height: 1.5rem;\r\n  background-color: #4b4c4e;\r\n  color: lightblue;\r\n}\r\n\r\n/* Style the footer section */\r\nfooter {\r\n  border-top: 2px solid rgb(29, 28, 28);\r\n  background-color: rgb(29, 28, 28);\r\n  color: lightblue;\r\n\r\n  /* Add the following Flexbox rules */\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 1rem 0.5rem;\r\n}\r\n\r\n/* Add style for comment popup */\r\n.hidden,\r\n.popup--hide {\r\n  display: none;\r\n}\r\n\r\n.popup {\r\n  padding: 1rem 2rem;\r\n  box-sizing: border-box;\r\n  border-radius: 8px;\r\n  background-color: #f1f1f1;\r\n  display: grid;\r\n  width: 60vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  overflow: scroll;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.container {\r\n  width: 88%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.top {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: -1.5rem;\r\n}\r\n\r\n.img {\r\n  width: 90%;\r\n  height: 70vh;\r\n}\r\n\r\nul.user-comment li {\r\n  list-style: none;\r\n  line-height: 1.5;\r\n}\r\n\r\n.channel-name {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.comments-heading {\r\n  text-align: center;\r\n  font-size: 1rem;\r\n}\r\n\r\n.channel {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n}\r\n\r\n#x-icon {\r\n  float: right;\r\n  font-size: 1.5rem;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 2rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n.add-comment > * {\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  margin: 0.2rem;\r\n}\r\n\r\n.submitBtn {\r\n  background-color: white;\r\n  border: 1px solid #888;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n\r\n.submitBtn:hover {\r\n  background-color: wheat;\r\n}\r\n\r\n.hide-seek {\r\n  display: none !important;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/router */ \"./src/modules/router.js\");\n/* harmony import */ var _assets_images_movieDB_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/movieDB.png */ \"./src/assets/images/movieDB.png\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  const myLogo = document.querySelector('.my-logo');\r\n  myLogo.src = _assets_images_movieDB_png__WEBPACK_IMPORTED_MODULE_2__;\r\n  (0,_modules_router__WEBPACK_IMPORTED_MODULE_1__.callCreateItems)();\r\n});\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLikes: () => (/* binding */ getLikes),\n/* harmony export */   pressLike: () => (/* binding */ pressLike)\n/* harmony export */ });\n// import { renderList, createItems } from \"./router\";\r\n\r\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\r\n\r\nconst appId = 'ligjx4FFa0ZgHF7dDHG4';\r\n\r\nconst likeBtn = document.getElementById('likeBtn-1');\r\nconst likeBtnId = 'likeBtn-1';\r\nconst itemId = 'item-1';\r\nconst pressLike = async (itemId) => {\r\n    try{\r\n        const response = await fetch(`${baseUrl}/apps/${appId}/likes/`, {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json;  charset=UTF-8',\r\n              },\r\n            body: JSON.stringify({\r\n                \"item_id\": itemId,\r\n            })\r\n        });\r\n    } catch (error) {\r\n        console.error('Error posting the like', error);\r\n    }\r\n}\r\n\r\n\r\nconst getLikes = async () => {\r\n    try {\r\n        const response = await fetch(`${baseUrl}/apps/${appId}/likes/`);\r\n        const data = await response.json();\r\n        // console.log(data)\r\n        return data;\r\n    } catch(error) {\r\n        console.error('Error getting the likes: ', error);\r\n    }\r\n};\r\n\r\n\r\nconst addComment = async (newComment) => {\r\n    const response = await fetch(`${baseUrl}/apps/${appId}/comments`, {\r\n      method: 'POST',\r\n      headers: { \r\n        'Content-type': 'application/json' \r\n    },\r\n      body: JSON.stringify(newComment),\r\n    });\r\n  };\r\n  \r\nconst getComment = async (itemId) => {\r\n    const response = await fetch(`${baseUrl}/apps/${appId}/?item_id=${itemId}`);\r\n    const data = await response.json();\r\n    console.log(data);\r\n    return data;\r\n  };\r\n\r\n// getLikes();\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popup = (indx, seriesList) => {\r\n  const popupContainer = document.querySelector('.popup--hide');\r\n\r\n  seriesList.forEach((element, index) => {\r\n    if (indx === index) {\r\n      popupContainer.innerHTML = `\r\n        <div class=\"container\">\r\n        <i id=\"x-icon\" id=\"close-icon\" class=\"close-icon bi bi-x-lg\"></i>\r\n        <div class=\"top\">\r\n            <img  class=\"img\" src=\"${element.image}\" alt=\"${element.name}\">\r\n        </div>\r\n\r\n        <h2 class=\"channel-name\">${element.name}</h2>\r\n        <div class=\"channel\">\r\n          ${element.summary}\r\n        </div>           \r\n\r\n        <h2 class=\"comments-heading\">Comments (2)</h2>\r\n        <div class=\"comments\">\r\n            <ul class=\"user-comment\">\r\n                <li>2023/8/8 Ahmad: Great</li>\r\n                <li>2023/8/8 Ahmad: Good and Excellent</li>\r\n            </ul>\r\n        </div>\r\n\r\n        <h2 class=\"comments-heading\">Add a Comment</h2>\r\n        <div class=\"form-container\">\r\n            <form data-index=${index} class='add-comment'>\r\n                <input type='text' name='name' id='name' placeholder='Your name' required>\r\n                <textarea col=30 rows='10' name='insights' placeholder='Your insights' required></textarea>\r\n                <input class=\"submitBtn\" type='submit' value='Comment'>\r\n            </form>\r\n        </div>   \r\n    </div>  \r\n        `;\r\n    }\r\n  });\r\n\r\n  popupContainer.className = 'popup';\r\n  const container = document.getElementById('items-container');\r\n  container.appendChild(popupContainer);\r\n\r\n  const closeIcon = document.querySelector('.close-icon');\r\n  closeIcon.addEventListener('click', () => {\r\n    popupContainer.innerHTML = '';\r\n    popupContainer.className = 'popup--hide';\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/router.js":
/*!*******************************!*\
  !*** ./src/modules/router.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callCreateItems: () => (/* binding */ callCreateItems),\n/* harmony export */   createItems: () => (/* binding */ createItems),\n/* harmony export */   renderList: () => (/* binding */ renderList)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\n\r\n\r\n\r\nconst container = document.getElementById('items-container');\r\n\r\nconst renderList = (seriesList, likeData) => {\r\n  container.innerHTML = '';\r\n  seriesList.sort((a, b) => a.id - b.id);\r\n  seriesList.forEach((series) => {\r\n    const singleItem = document.createElement('div');\r\n    singleItem.className = 'single-item';\r\n    singleItem.id = `item-${series.id}`;\r\n    const image = document.createElement('img');\r\n    image.src = series.image;\r\n    const overhead = document.createElement('div');\r\n    overhead.className = 'overhead';\r\n    if(series.id === 1) {\r\n      console.log('Is this the likeData?: ',likeData);\r\n    }\r\n    const likesForSpecificItem = likeData.find(item => item.item_id === `item-${series.id}`)?.likes;\r\n    console.log(likesForSpecificItem);\r\n    overhead.innerHTML = `<p class='name'>${series.name}</p>\r\n                          <div class='like-container'>\r\n                            <i class=\"bi bi-hand-thumbs-up like-btn\" id=\"like-${series.id}\"></i>\r\n                            <i class=\"bi bi-hand-thumbs-up-fill like-btn-fill\" id=\"fill-${series.id}\"></i>\r\n                            <span class=\"like-detail\" id=\"likes-\">${likesForSpecificItem} likes</span>\r\n                          </div>`;\r\n    const fillBtn = document.getElementById(`fill-${series.id}`);\r\n    fillBtn.classList.add('hide-seek');                   \r\n    const likeBtn = document.getElementById(`like-${series.id}`);\r\n    likeBtn.addEventListener('click', () => {\r\n      (0,_involvement_js__WEBPACK_IMPORTED_MODULE_1__.pressLike)(singleItem.id);\r\n      likeBtn.classList.add('hide-seek');\r\n      fillBtn.classList.remove('hide-seek');\r\n      const likeDetail = document.getElementById(`likes-${series.id}`);\r\n      likeDetail.innerText = `${likesForSpecificItem + 1} likes`;\r\n    });\r\n    \r\n    const btnContainer = document.createElement('div');\r\n    btnContainer.className = 'button-container';\r\n    const comment = document.createElement('button');\r\n    comment.innerText = 'Comments';\r\n    comment.className = 'comment';\r\n    comment.id = series.name;\r\n    const reserve = document.createElement('button');\r\n    reserve.innerText = 'Reservation';\r\n    reserve.className = 'reserve';\r\n    btnContainer.appendChild(comment);\r\n    btnContainer.appendChild(reserve);\r\n\r\n    singleItem.appendChild(image);\r\n    singleItem.appendChild(overhead);\r\n    singleItem.appendChild(btnContainer);\r\n    container.appendChild(singleItem);\r\n  });\r\n\r\n  const commentsBtn = document.querySelectorAll('.comment');\r\n  const popupSection = document.createElement('section');\r\n  popupSection.className = 'popup--hide';\r\n  container.appendChild(popupSection);\r\n\r\n  commentsBtn.forEach((button, index) => {\r\n    button.addEventListener('click', () => {\r\n      (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index, seriesList);\r\n    });\r\n  });\r\n};\r\n\r\nconst result = [];\r\nconst totalItem = 6;\r\nconst likeData = (0,_involvement_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\r\nconst createItems = async (id) => {\r\n  try {\r\n    const likeData = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\r\n    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);\r\n    const data = await response.json();\r\n    const [name, image, rating,\r\n      language, genre,\r\n      summary, idNum] = await [data.name, data.image.medium,\r\n      data.rating.average, data.language, data.genres, data.summary, data.id];\r\n\r\n    await result.push({\r\n      id: idNum,\r\n      name,\r\n      image,\r\n      rating,\r\n      language,\r\n      genre,\r\n      summary,\r\n    });\r\n    \r\n    if (result.length === totalItem) {\r\n      renderList(result, likeData);\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching data: ', error);\r\n  }\r\n};\r\n\r\nconst callCreateItems = () => {\r\n  for (let i = 1; i <= totalItem; i += 1) {\r\n    createItems(i);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/router.js?");

/***/ }),

/***/ "./src/assets/images/movieDB.png":
/*!***************************************!*\
  !*** ./src/assets/images/movieDB.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e0351cf18d0bdcb40ae.png\";\n\n//# sourceURL=webpack://javascript-capstone/./src/assets/images/movieDB.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);