/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_catwalk"] = self["webpackChunkproject_catwalk"] || []).push([["client_src_components_QA_Question_jsx"],{

/***/ "./client/src/components/QA/Question.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/QA/Question.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Loading_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loading.jsx */ \"./client/src/components/Loading.jsx\");\n\n\n\nvar _templateObject, _templateObject2, _templateObject3;\n\n\n\n //import AnswersList from \"./AnswersList.jsx\";\n\nvar AnswersList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"client_src_components_QA_AnswersList_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./AnswersList.jsx */ \"./client/src/components/QA/AnswersList.jsx\"));\n});\nvar Q_div = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\nwidth: 100%;\\ndisplay: flex;\\nflex-direction: row;\\njustify-content: space-between;\\nalign-items: center;\\n\"])));\nvar Q_title = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\npadding: 10px;\\nfont-size: 16px;\\nfont-weight: bold;\\n\"])));\nvar Add_span = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\npadding: 10px;\\nfont-size: 12px;\\nfont-weight: bold;\\n&:hover {\\n  color: green;\\n}\\n\"])));\n\nvar Question = function Question(_ref) {\n  var question = _ref.question;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      answers = _useState2[0],\n      setAnswers = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),\n      sortedAnswers = _useState4[0],\n      setSortedAnswers = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    //console.log('question: ', question);\n    if (question.answers) {\n      setAnswers(Object.entries(question.answers));\n    }\n  }, [question]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var sortedA = answers.sort(function (a, b) {\n      return b.helpfulness - a.helpfulness;\n    });\n    setSortedAnswers(sortedA);\n  }, [answers]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Loading_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Q_div, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Q_title, null, \"Q: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, \" \"), \" \", question.question_body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Add_span, null, \"+ Add Answer\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(AnswersList, {\n    answers: sortedAnswers\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/QA/Question.jsx?");

/***/ })

}]);