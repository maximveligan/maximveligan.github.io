(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/nes_wasm.js":
/*!**************************!*\
  !*** ../pkg/nes_wasm.js ***!
  \**************************/
/*! exports provided: BufferStruct, EmuInterface, KeyCode, __wbindgen_string_new, __wbindgen_throw, __wbindgen_rethrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BufferStruct\", function() { return BufferStruct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmuInterface\", function() { return EmuInterface; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeyCode\", function() { return KeyCode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony import */ var _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nes_wasm_bg.wasm */ \"../pkg/nes_wasm_bg.wasm\");\n\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm(arg) {\n    const ptr = _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](arg.length * 1);\n    getUint8Memory().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n*/\nclass BufferStruct {\n\n    static __wrap(ptr) {\n        const obj = Object.create(BufferStruct.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_bufferstruct_free\"](ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get pointer() {\n        const ret = _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_bufferstruct_pointer\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set pointer(arg0) {\n        _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_bufferstruct_pointer\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get length() {\n        const ret = _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_bufferstruct_length\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set length(arg0) {\n        _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_bufferstruct_length\"](this.ptr, arg0);\n    }\n}\n/**\n*/\nclass EmuInterface {\n\n    static __wrap(ptr) {\n        const obj = Object.create(EmuInterface.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_emuinterface_free\"](ptr);\n    }\n    /**\n    * @param {Uint8Array} buffer\n    * @returns {EmuInterface}\n    */\n    static new(buffer) {\n        const ret = _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emuinterface_new\"](passArray8ToWasm(buffer), WASM_VECTOR_LEN);\n        return EmuInterface.__wrap(ret);\n    }\n    /**\n    * @returns {BufferStruct}\n    */\n    get_frame() {\n        const ret = _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emuinterface_get_frame\"](this.ptr);\n        return BufferStruct.__wrap(ret);\n    }\n    /**\n    * @param {KeyCode} key\n    * @param {boolean} state\n    */\n    set_button(key, state) {\n        _assertClass(key, KeyCode);\n        const ptr0 = key.ptr;\n        key.ptr = 0;\n        _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emuinterface_set_button\"](this.ptr, ptr0, state);\n    }\n}\n/**\n*/\nclass KeyCode {\n\n    static __wrap(ptr) {\n        const obj = Object.create(KeyCode.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_keycode_free\"](ptr);\n    }\n    /**\n    * @param {number} val\n    * @returns {KeyCode}\n    */\n    static new(val) {\n        const ret = _nes_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"keycode_new\"](val);\n        return KeyCode.__wrap(ret);\n    }\n}\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    const ret = getStringFromWasm(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\n\n\n//# sourceURL=webpack:///../pkg/nes_wasm.js?");

/***/ }),

/***/ "../pkg/nes_wasm_bg.wasm":
/*!*******************************!*\
  !*** ../pkg/nes_wasm_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, __wbg_bufferstruct_free, __wbg_get_bufferstruct_pointer, __wbg_set_bufferstruct_pointer, __wbg_get_bufferstruct_length, __wbg_set_bufferstruct_length, __wbg_keycode_free, keycode_new, __wbg_emuinterface_free, emuinterface_new, emuinterface_get_frame, emuinterface_set_button, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./nes_wasm.js */ \"../pkg/nes_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/nes_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nes_wasm_nes_wasm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nes-wasm/nes_wasm_bg */ \"../pkg/nes_wasm_bg.wasm\");\n/* harmony import */ var nes_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nes-wasm */ \"../pkg/nes_wasm.js\");\n\n\n\nconst PIXEL_SCALE = 5; // px\nconst SCREEN_HEIGHT = 240;\nconst SCREEN_WIDTH = 256;\nconst SCREEN_SIZE = SCREEN_HEIGHT * SCREEN_WIDTH;\nconst COLOR_CHANNELS = 3;\n\nvar nes_fe;\nlet animationId = null;\n\nconst playPauseButton = document.getElementById(\"play-pause\");\nconst canvas = document.getElementById(\"nes-wasm-canvas\");\n\nvar windowScale = [0, 0];\n\ncanvas.height = PIXEL_SCALE * SCREEN_HEIGHT;\ncanvas.width = PIXEL_SCALE * SCREEN_WIDTH;\n\nconst ctx = canvas.getContext('2d');\n\nplayPauseButton.textContent = \"⏸\";\n\nconst play = () => {\n  playPauseButton.textContent = \"⏸\";\n  renderLoop();\n};\n\nconst pause = () => {\n  playPauseButton.textContent = \"▶\";\n  cancelAnimationFrame(animationId);\n  animationId = null;\n};\n\nplayPauseButton.addEventListener(\"click\", event => {\n  if (isPaused()) {\n    play();\n  } else {\n    pause();\n  }\n});\n\ndocument.addEventListener('keydown', function(event) {\n    nes_fe.set_button(nes_wasm__WEBPACK_IMPORTED_MODULE_1__[\"KeyCode\"].new(event.keyCode), true);\n});\n\ndocument.addEventListener('keyup', function(event) {\n    nes_fe.set_button(nes_wasm__WEBPACK_IMPORTED_MODULE_1__[\"KeyCode\"].new(event.keyCode), false);\n});\n\nconst drawFrameBuff = (frameBuffPtr, length) => {\n    const frameBuffer = new Uint8Array(\n        nes_wasm_nes_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, frameBuffPtr, length);\n    var pixelBuffer = ctx.createImageData(SCREEN_WIDTH, SCREEN_HEIGHT);\n    for (var i=0; i < SCREEN_SIZE; i++) {\n        pixelBuffer.data[(i * 4)] = frameBuffer[i * 3];\n        pixelBuffer.data[(i * 4) + 1] = frameBuffer[(i * 3) + 1];\n        pixelBuffer.data[(i * 4) + 2] = frameBuffer[(i * 3) + 2];\n    // No transparent pixels here\n        pixelBuffer.data[(i * 4) + 3] = 0xFF;\n    }\n    ctx.putImageData(pixelBuffer, 0, 0);\n    ctx.drawImage(canvas, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, 0, 0, canvas.width, canvas.height);\n};\n\nconst isPaused = () => {\n  return animationId === null;\n};\n\nconst renderLoop = () => {\n  const bufferStruct = nes_fe.get_frame();\n  drawFrameBuff(bufferStruct.pointer, bufferStruct.length);\n  animationId = requestAnimationFrame(renderLoop);\n};\n\ndocument.querySelector(\"#file-input\").addEventListener('change', function() {\n    var reader = new FileReader();\n    reader.onload = function() {\n        const romBuffer = new Uint8Array(this.result);\n\n        nes_fe = nes_wasm__WEBPACK_IMPORTED_MODULE_1__[\"EmuInterface\"].new(romBuffer);\n        requestAnimationFrame(renderLoop);\n    }\n\n    reader.readAsArrayBuffer(this.files[0]);\n}, false);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);