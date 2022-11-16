/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

eval("class Errors {\n\tconstructor(){\n\t\tthis.errors = {}\n\t}\n\n\tget(field) {\n\n\t\tif( this.errors[field]) {\n\t\t\treturn this.errors[field][0]\n\t\t}\n\n\t}\n\trecord(errors){\n\t\tthis.errors = errors\n\t}\n\n\tclear(field) {\n\t\tif (field) {\n\t\t\tdelete this.errors[field]\n\t\t\treturn \n\t\t} \n\n\t\t this.errors = {}\n\t}\n\n\thas(field) {\n\t\treturn this.errors.hasOwnProperty(field)\n\t}\n\tany(){\n\t\treturn Object.keys(this.errors).length > 0\n\t}\n}\n\nclass Form {\n\n\tconstructor(data)\n\t{\n\t\tthis.OriginalData = data\n\n\t\tfor (let field in data) {\n\t\t\tthis[field] = data[field]\n\t\t}\n\n\t\tthis.errors =  new Errors()\n\t}\n\n\treset() {\n\t\tfor (let field in this.OriginalData) {\n\t\t\tthis[field] = ''\n\t\t}\n\t\tthis.errors.clear()\n\t}\n\n\tdata() {\n\n\t\tlet data = {}\n\n\t\tfor (let property in this.OriginalData) {\n\t\t\tdata[property] = this[property]\n\t\t}\n\t\t// let data = Object.assign({}, this);\n\t\t// delete data.OriginalData\n\t\t// delete data.errors\n\n\t\treturn data\n\t}\n\n\tsubmit(requestType, url) {\n\t\treturn new Promise( (resolve, reject) => {\n\t\t\taxios[requestType](url, this.data() )\n\t\t\t.then( response => { \n\t\t\t\tthis.onSuccess(response.data)\n\t\t\t\tresolve(response.data)\n\t\t\t } )\n\t\t\t .catch(error => {\n\t\t\t\t this.onFail(error.response.data.errors)\n\n\t\t\t\t reject(error.response.data.errors)\n\t\t\t })\n\t\t\t\n\t\t})\n\n\t}\n\n\tpost(url) {\n\t\treturn this.submit('post', url)\n\t}\n\n\tdelete(url) {\n\t\treturn this.submit('delete', url)\n\t}\n\n\tonSuccess(data) {\n\t\t///response => this.onSuccess(response)\n\n\t\talert(data.message)\n\n\t\t// this.name=''\n\t\t// this.description=''\n\t\t this.reset()\n\t}\n\tonFail(errors) {\n\t\t//this.errors.record( error.response.data.errors)\n\t\tthis.errors.record(errors)\n\t}\n}\n\nnew Vue({\n\tel: '#root',\n\tdata : {\n\t\tform : new Form({\n\t\t\tname : '',\n\t\t\tdescription : ''\n\t\t}),\n\t\t \n\t},\n\n\tmethods : {\n\t\tonSubmit() {\n\t\t\tthis.form.post('/projects')\n\t\t\t.then(data => console.log(data))\n\t\t\t.catch(errors => console.log(errors))\n\t\t},\n\t}\n})\n\n// alert('fdsfds')\n\n//# sourceURL=webpack:///./resources/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/app.js"]();
/******/ 	
/******/ })()
;