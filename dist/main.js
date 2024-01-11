/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/homepage.js":
/*!****************************!*\
  !*** ./module/homepage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   movieApi: () => (/* binding */ movieApi),\n/* harmony export */   movieList: () => (/* binding */ movieList)\n/* harmony export */ });\n/* harmony import */ var _likeApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeApi.js */ \"./module/likeApi.js\");\n\r\nconst url = 'https://api.tvmaze.com/shows';\r\nconst movieApi = async () => {\r\n  const fetchResult = await fetch(url);\r\n  const ShowResult = await fetchResult.json();\r\n  return ShowResult.slice(0, 15);\r\n};\r\n\r\nwindow.onload = movieApi();\r\n\r\nconst movieList = async () => {\r\n  const allMovies = await movieApi();\r\n  const likesApi = await (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_0__.LikeApi)();\r\n  allMovies.forEach((movie) => {\r\n    const cardLikes = likesApi.find((like) => like.item_id === movie.id);\r\n    const { id } = movie;\r\n    let liveCount = +cardLikes?.likes;\r\n\r\n    const moviesContainer = document.querySelector('#movie-display');\r\n    const movieUL = document.createElement('ul');\r\n    const movieLI = document.createElement('li');\r\n    movieLI.className = 'movie-cards';\r\n    movieLI.innerHTML = `<div>\r\n      <img src=${movie.image.original} alt=${movie.name}>\r\n      </div>\r\n      <a href=\"${movie.officialSite}\" class=\"movie-title\">${movie.name}</a>\r\n      <div class=\"movie-info\">\r\n        <p<i class=\"fa-solid fa-star\" id='rating'></i>${movie.rating.average}</p>\r\n        </div>\r\n        <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\r\n        <p class = \"totalLikes\">${liveCount} likes</p>\r\n        <button id = ${id} class = \"commentBtn\">Comments</button>`;\r\n\r\n    movieUL.appendChild(movieLI);\r\n    moviesContainer.appendChild(movieUL);\r\n\r\n    const likeButton = movieLI.getElementsByClassName('fa-heart')[0];\r\n    likeButton.addEventListener(\r\n      'click', (btn) => {\r\n        const liveCountElement = movieLI.getElementsByClassName('totalLikes')[0];\r\n        liveCount += 1;\r\n        liveCountElement.innerHTML = `${liveCount} likes`;\r\n        (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_0__.submitLike)(id);\r\n        btn.disabled = true;\r\n        likeButton.style.color = 'red';\r\n      },\r\n      { once: true },\r\n    );\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://ns-movies/./module/homepage.js?");

/***/ }),

/***/ "./module/likeApi.js":
/*!***************************!*\
  !*** ./module/likeApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LikeApi: () => (/* binding */ LikeApi),\n/* harmony export */   submitLike: () => (/* binding */ submitLike)\n/* harmony export */ });\nconst tvId =  'MjgCDPvMKfBMbwFq4McF';\r\nconst url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${tvId}/likes`;\r\n\r\nconst LikeApi = async () => {\r\n    const LikeResult = await fetch(url);\r\n    const getLikeResult =await LikeResult.json();\r\n    return getLikeResult;\r\n}\r\n\r\nconst submitLike = async (id) => {\r\n    await fetch(url, {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n            item_id: id,\r\n        }),\r\n        headers: {\r\n            'content-type': 'application/json'\r\n        }\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://ns-movies/./module/likeApi.js?");

/***/ }),

/***/ "./module/movieLength.js":
/*!*******************************!*\
  !*** ./module/movieLength.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./module/homepage.js\");\n\r\n\r\nconst getMovieLength = async () => {\r\n    const movieLength = document.getElementById('movielength');\r\n    const getLengthAPI = await (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.movieApi)();\r\n    const getLength = getLengthAPI.length;\r\n    const lengthPgh = document.createElement('p');\r\n    lengthPgh.innerHTML = `Best Tv Series of all Time (${getLength})`;\r\n    movieLength.appendChild(lengthPgh)\r\n    console.log(getLength)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieLength); \n\n//# sourceURL=webpack://ns-movies/./module/movieLength.js?");

/***/ }),

/***/ "./module/popup.js":
/*!*************************!*\
  !*** ./module/popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popup)\n/* harmony export */ });\nclass Popup {\r\n    static getInfos = async (id) => {\r\n        const movieInfo = await fetch(`https://api.tvmaze.com/shows/${id}`).then((result) => result.json());\r\n        return movieInfo;\r\n    }\r\n\r\n    static countComments = (len) => len.length;\r\n\r\n    static display = async (movieInfo, id, comList) => {\r\n        const mi = await movieInfo;\r\n        const arr = comList;\r\n        const popup = document.querySelector('.popup');\r\n        popup.innerHTML = `\r\n            <div class= \"description\">\r\n                <div class = \"D-description\">\r\n                    <a href=\"${mi.network.officialSite}\"><img src=\"${mi.image.medium}\" class = \"image\" id = \"movie-img\" alt=\"\"></a>\r\n\r\n                    <div class = \"comments\">\r\n                        <div class = \"form\" >\r\n                            <label for=\"fname\">Name:</label><br>\r\n                            <input type=\"text\" id=\"fname\" name=\"fname\" placeholder = \"Enter your name\"><br><br>\r\n                            <label for=\"comment\">Comment:</label><br>\r\n                            <textarea name=\"comment\" id=\"comment\" cols=\"20\" rows=\"3\" placeholder = \"Enter comment\"></textarea>\r\n                            <input id = ${id} class= \"submit\" type=\"submit\" value=\"Submit\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class = \"summary-tag\">\r\n                    <h1>${mi.name}</h1>\r\n                    ${mi.summary}\r\n                </div>\r\n            </div>\r\n\r\n            <ul class = \"mInfo\">\r\n            <h1 class = \"remove\"> TV SHOW INFO</h1>\r\n            <li class = \"remove\"><a href=\"${mi.network.officialSite}\">${mi.network.name}</a> (${mi.premiered} - ${mi.ended})</li>\r\n            <li class = \"remove\"><b>Schedule</b>: ${mi.schedule.days[0]} at ${mi.schedule.time} (${mi.runtime}min)</li>\r\n            <li class = \"remove\"><b>Status</b>: ${mi.status}</li>\r\n            <li class = \"remove\"><b>Show Type:</b> ${mi.type}</li>\r\n            <li><b>Genres</b>: ${mi.genres}</li>\r\n            <li class = \"remove\"><b>Episodes Ordered</b> </li>\r\n            <li><b>language:</b>: ${mi.language}</li>\r\n            <li><b>Rating:</b>: ${mi.rating.average}</li>\r\n            <div>\r\n              <h3 class = \"class-heading\"> All Comments (${this.countComments(arr)})</h3>\r\n              <ul class =\"D-comments\">\r\n              </ul>\r\n            </div>\r\n          </ul>`; \r\n        //   done with html structuring\r\n    }\r\n    static displayCom = async (MoveInfo) => {\r\n        const commentList = document.querySelector('.D-comments');\r\n        commentList.innerHTML = '';\r\n        const arr = await MoveInfo;\r\n        arr.forEach((item) => {\r\n          commentList.innerHTML += `<li class = \"listCom\">${item.username}: ${item.comment} <br> :${item.creation_date.slice(-5, -1)}</li>`;\r\n        });\r\n    };\r\n}\n\n//# sourceURL=webpack://ns-movies/./module/popup.js?");

/***/ }),

/***/ "./module/popupApi.js":
/*!****************************!*\
  !*** ./module/popupApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Involvement: () => (/* binding */ Involvement)\n/* harmony export */ });\nconst url =  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nclass Involvement {\r\n    static postApp = async () => {\r\n        const response = await fetch (url, {\r\n            method: 'POST',\r\n            headers: {\r\n                'content-type': 'application/json',\r\n            }\r\n        });\r\n        const data = await response.json();\r\n        return data\r\n    };\r\n\r\n    static postComments = async (id, name, com) => {\r\n        await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HW8Zns3g7hE8XehtHEw6/comments', {\r\n            method: 'POST',\r\n            body: JSON.stringify({\r\n                item_id: id,\r\n                username: name,\r\n                Comment: com,\r\n            }),\r\n            headers: {\r\n                'content-type': 'application/json'\r\n            }\r\n        })\r\n    }\r\n\r\n    static getComments = async (id) => {\r\n        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4va6c4ouZmpzSETsANV3/comments?item_id=${id}`).then((res) => res.json());\r\n        return response;\r\n    };\r\n}\r\n\r\n\n\n//# sourceURL=webpack://ns-movies/./module/popupApi.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n#nav-container {\r\n    background: brown;\r\n    color: #F5DEB3;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: larger;\r\n    font-weight: 600;\r\n    padding: 10px;\r\n    justify-content: space-between;\r\n}\r\nul {\r\n    display: flex;\r\n    list-style-type: none;\r\n}\r\nli {\r\n    cursor: pointer;\r\n    font-weight: 100;\r\n    font-size: 1.2rem;\r\n    padding: 0 20px;\r\n}\r\n.logotext {\r\n    font-size: xx-large;\r\n    padding-left: 10px;\r\n}\r\n#ns {\r\n    color: #000;\r\n}\r\ninput {\r\n    border: none;\r\n    outline: none;\r\n    padding:5px 10px;\r\n}\r\nfooter {\r\n    background-color: wheat;\r\n    text-align: center;\r\n    padding: 15px;\r\n    /* position: relative; */\r\n}\r\nimg {\r\n    width: 300px;\r\n    height: 350px;\r\n    border-radius: 5px;\r\n  }\r\n.bodyDiv {\r\n    background-color: wheat;\r\n    gap: 10px;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n#movie-display {\r\n    display: grid;\r\n    grid-template-columns: 33% 33% 33%;\r\n}\r\n.movie-cards {\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: #22242f;\r\n    width: fit-content;\r\n    gap: 10px;\r\n  }\r\n.imgDiv {\r\n    width: 90%;\r\n}\r\n#up-icon,\r\na {\r\n    color: brown;\r\n    cursor: pointer;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.movie-cards:hover {\r\n    box-shadow: 0 0 4px #747474ab;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .movie-info {\r\n    display: flex;\r\n    font-size: 12px;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n  }\r\n  \r\n  #movielength {\r\n    color: black;\r\n    text-align: center;\r\n    font-size: x-large;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  #rating {\r\n    color: #ffcd1b;\r\n    padding: 0.5em;\r\n    border: 1px solid #ffcd1b;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #22242f;\r\n    width: 100%;\r\n    height: 100px;\r\n  }\r\n  \r\n  /* For mobile screens */\r\n  @media screen and (max-width: 768px) {\r\n    .mobile {\r\n      color: white;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      margin-top: 10px;\r\n      margin-left: 30px;\r\n    }\r\n  \r\n    .movies-container {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n      width: 100%;\r\n      max-width: 1500px;\r\n    }\r\n  \r\n    .nav-items {\r\n      display: none;\r\n    }\r\n  \r\n    img {\r\n      width: 300px;\r\n      height: 400px;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 768px) {\r\n    .mobile {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  h1 {\r\n    color: wheat;\r\n  }\r\n  \r\n  span {\r\n    color: #000;\r\n  }\r\n  \r\n  .nav-items a {\r\n    color: wheat;\r\n    text-decoration: none;\r\n    font-size: 1.2rem;\r\n    padding-right: 20px;\r\n  }\r\n  \r\n  /* stylings for the display items */\r\n  h2 {\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n  \r\n  button {\r\n    padding: 8px;\r\n    background-color: beige;\r\n    border: 1px solid #ffcd1b;\r\n    border-radius: 6px;\r\n    font-size: 1.2rem;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  button:hover {\r\n    background-color: wheat;\r\n  }\r\n  \r\n  button:active {\r\n    background-color: brown;\r\n    color: #fff;\r\n  }\r\n  \r\n  .fa {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .fa:hover {\r\n    color: red;\r\n  }\r\n  \r\n  .description {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex: 2;\r\n    gap: 30px;\r\n  }\r\n  \r\n  .comments {\r\n    display: flex;\r\n    gap: 25px;\r\n  }\r\n  \r\n  .mInfo {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #f7f7f7;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\r\n    border-color: #22242f;\r\n  }\r\n  \r\n  .D-description {\r\n    display: block;\r\n    gap: 20px;\r\n  }\r\n  \r\n  .all-comments {\r\n    text-align: center;\r\n  }\r\n  \r\n  .official_site {\r\n    color: #000;\r\n    font-weight: 700;\r\n  }\r\n  \r\n  #comment {\r\n    display: block;\r\n    outline: 0;\r\n    width: 15rem;\r\n    padding: 10px;\r\n    border: 1px solid brown;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .popup {\r\n    transition: 200ms ease-in-out;\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    width: 80%;\r\n    height: 99%;\r\n    padding: 2%;\r\n    display: flex;\r\n    background-color: white;\r\n    z-index: 10;\r\n    color: #000;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .summary-tag h1 {\r\n    color: brown;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  .summary-tag {\r\n    margin-right: 20px;\r\n    text-align: justify;\r\n  }\r\n  \r\n  .image {\r\n    width: 250px;\r\n    height: 370px;\r\n  }\r\n  \r\n  .popup.active {\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n  \r\n  .overlay {\r\n    transition: 200ms ease-in-out;\r\n    position: fixed;\r\n    opacity: 0;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n  \r\n  #fname {\r\n    outline: 0;\r\n    width: 15rem;\r\n    padding: 10px;\r\n    border: 1px solid brown;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  h3 {\r\n    margin-left: 33px;\r\n  }\r\n  \r\n  .summary {\r\n    height: 200px;\r\n    overflow-x: scroll;\r\n  }\r\n  \r\n  .submit {\r\n    width: 100%;\r\n    padding: 7px;\r\n    background-color: beige;\r\n    border: 1px solid brown;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .submit:hover {\r\n    background-color: bisque;\r\n  }\r\n  \r\n  .submit:active {\r\n    background-color: brown;\r\n    color: #fff;\r\n  }\r\n  \r\n  .text_d {\r\n    color: rgb(0, 0, 0);\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .D-comments {\r\n    height: 250px;\r\n    gap: 10px;\r\n    overflow: scroll;\r\n  }\r\n  \r\n  .tv_show {\r\n    color: brown;\r\n    text-align: center;\r\n  }\r\n  \r\n  /* For mobile screens */\r\n  @media screen and (max-width: 768px) {\r\n    .mobile {\r\n      color: wheat;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      margin-top: 10px;\r\n      margin-left: 30px;\r\n    }\r\n  \r\n    .card-container {\r\n      display: block;\r\n      margin: auto;\r\n    }\r\n  \r\n    .nav-items {\r\n      display: none;\r\n    }\r\n  \r\n    img {\r\n      width: 300px;\r\n      height: 400px;\r\n    }\r\n  \r\n    #movie-img {\r\n      width: 130px;\r\n      height: 200px;\r\n    }\r\n  \r\n    .summary-tag {\r\n      display: none;\r\n    }\r\n  \r\n    #fname {\r\n      outline: 0;\r\n      width: 8rem;\r\n      border: 1px solid brown;\r\n      border-width: 0 0 1px;\r\n    }\r\n  \r\n    #comment {\r\n      outline: 0;\r\n      width: 8rem;\r\n      height: 2.5rem;\r\n      padding-bottom: 0;\r\n      border-width: 0 0 1px;\r\n      transition: all 0.5s ease-in-out;\r\n    }\r\n  \r\n    #comment::placeholder {\r\n      padding: 0;\r\n      font-family: 'Inter', sans-serif;\r\n    }\r\n  \r\n    .remove {\r\n      display: none;\r\n      color: black;\r\n    }\r\n  \r\n    .mInfo {\r\n      padding: 0;\r\n      margin-left: 10px;\r\n      display: flex;\r\n      flex-direction: column;\r\n    }\r\n  \r\n    .description {\r\n      flex: none;\r\n    }\r\n  \r\n    .D-comments {\r\n      overflow-y: scroll;\r\n      max-height: 250px;\r\n      max-width: 300px;\r\n      margin: 0;\r\n      padding: 10px;\r\n      transform: translateX(0);\r\n      cursor: grab;\r\n      font-size: 0.7rem;\r\n    }\r\n  \r\n    .class-heading {\r\n      font-size: 0.8rem;\r\n      margin: 0;\r\n      padding: 10px;\r\n      text-align: center;\r\n    }\r\n  \r\n    .D-comments > li:nth-child(odd) {\r\n      background-color: grey;\r\n      color: #fff;\r\n    }\r\n  \r\n    .listCom {\r\n      padding: 3px 10px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-evenly;\r\n    }\r\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ns-movies/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ns-movies/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ns-movies/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ns-movies/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ns-movies/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ns-movies/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ns-movies/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ns-movies/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ns-movies/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ns-movies/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/homepage */ \"./module/homepage.js\");\n/* harmony import */ var _module_movieLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/movieLength */ \"./module/movieLength.js\");\n/* harmony import */ var _module_popupApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/popupApi */ \"./module/popupApi.js\");\n/* harmony import */ var _module_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../module/popup */ \"./module/popup.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction pageLoad () {\r\n    (0,_module_movieLength__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_module_homepage__WEBPACK_IMPORTED_MODULE_1__.movieList)();\r\n}\r\npageLoad();\r\n\r\ndocument.addEventListener('click', async (e) => {\r\n    if (!e.target.matches('.commentBtn')) { return };\r\n    const { id } = e.target;\r\n    const comList = await _module_popupApi__WEBPACK_IMPORTED_MODULE_3__.Involvement.getComments(id);\r\n    const MoveInfo = await _module_popup__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getInfos(id);\r\n    await _module_popup__WEBPACK_IMPORTED_MODULE_4__[\"default\"].display(MoveInfo, id, comList);\r\n    const overlay = document.querySelector('.overlay');\r\n    const popup = document.querySelector('.popup');\r\n    popup.classList.add('active');\r\n    overlay.classList.add('active');\r\n    _module_popup__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayCom(comList);\r\n});\r\n\r\ndocument.querySelector('.overlay').addEventListener('click', () => {\r\n    const overlay = document.querySelector('.overlay');\r\n    const popup = document.querySelector('.popup');\r\n    popup.classList.remove('active');\r\n    overlay.classList.remove('active');\r\n  });\r\n  \r\n  document.addEventListener('click', async (e) => {\r\n    if (!e.target.matches('.submit')) {\r\n      return;\r\n    }\r\n    e.preventDefault();\r\n    const name = document.getElementById('fname').value;\r\n    const com = document.getElementById('comment').value;\r\n    const { id } = e.target;\r\n    await Involvemnt.postComments(id, name, com);\r\n    const comList = await Involvemnt.getComments(id);\r\n    _module_popup__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayCom(comList);\r\n    _module_popup__WEBPACK_IMPORTED_MODULE_4__[\"default\"].countComments(comList);\r\n })\n\n//# sourceURL=webpack://ns-movies/./src/index.js?");

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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;