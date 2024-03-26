/*eslint max-classes-per-file: "warning"*/

;(() => {
  var __webpack_modules__ = {
    63: (module) => {
      'use strict'
      module.exports = function equal(a, b) {
        if (a === b) return true
        if (a && b && 'object' == typeof a && 'object' == typeof b) {
          if (a.constructor !== b.constructor) return false
          var length, i, keys
          if (Array.isArray(a)) {
            length = a.length
            if (length != b.length) return false
            for (i = length; 0 !== i--; ) if (!equal(a[i], b[i])) return false
            return true
          }
          if (a.constructor === RegExp)
            return a.source === b.source && a.flags === b.flags
          if (a.valueOf !== Object.prototype.valueOf)
            return a.valueOf() === b.valueOf()
          if (a.toString !== Object.prototype.toString)
            return a.toString() === b.toString()
          keys = Object.keys(a)
          length = keys.length
          if (length !== Object.keys(b).length) return false
          for (i = length; 0 !== i--; )
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false
          for (i = length; 0 !== i--; ) {
            var key = keys[i]
            if (!equal(a[key], b[key])) return false
          }
          return true
        }
        return a !== a && b !== b
      }
    },
    125: (module) => {
      /*!
       * dist/inputmask.min
       * https://github.com/RobinHerbots/Inputmask
       * Copyright (c) 2010 - 2021 Robin Herbots
       * Licensed under the MIT license
       * Version: 5.0.7
       */
      !(function (e, t) {
        if (true) module.exports = t()
        else;
      })(self, function () {
        return (function () {
          'use strict'
          var e = {
              8741: function (e, t) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.default = void 0)
                var i = !(
                  'undefined' == typeof window ||
                  !window.document ||
                  !window.document.createElement
                )
                t.default = i
              },
              3976: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.default = void 0)
                var a,
                  n =
                    (a = i(5581)) && a.__esModule
                      ? a
                      : {
                          default: a,
                        }
                var r = {
                  _maxTestPos: 500,
                  placeholder: '_',
                  optionalmarker: ['[', ']'],
                  quantifiermarker: ['{', '}'],
                  groupmarker: ['(', ')'],
                  alternatormarker: '|',
                  escapeChar: '\\',
                  mask: null,
                  regex: null,
                  oncomplete: function () {},
                  onincomplete: function () {},
                  oncleared: function () {},
                  repeat: 0,
                  greedy: !1,
                  autoUnmask: !1,
                  removeMaskOnSubmit: !1,
                  clearMaskOnLostFocus: !0,
                  insertMode: !0,
                  insertModeVisual: !0,
                  clearIncomplete: !1,
                  alias: null,
                  onKeyDown: function () {},
                  onBeforeMask: null,
                  onBeforePaste: function (e, t) {
                    return 'function' == typeof t.onBeforeMask
                      ? t.onBeforeMask.call(this, e, t)
                      : e
                  },
                  onBeforeWrite: null,
                  onUnMask: null,
                  showMaskOnFocus: !0,
                  showMaskOnHover: !0,
                  onKeyValidation: function () {},
                  skipOptionalPartCharacter: ' ',
                  numericInput: !1,
                  rightAlign: !1,
                  undoOnEscape: !0,
                  radixPoint: '',
                  _radixDance: !1,
                  groupSeparator: '',
                  keepStatic: null,
                  positionCaretOnTab: !0,
                  tabThrough: !1,
                  supportsInputType: [
                    'text',
                    'tel',
                    'url',
                    'password',
                    'search',
                  ],
                  ignorables: [
                    n.default.BACKSPACE,
                    n.default.TAB,
                    n.default['PAUSE/BREAK'],
                    n.default.ESCAPE,
                    n.default.PAGE_UP,
                    n.default.PAGE_DOWN,
                    n.default.END,
                    n.default.HOME,
                    n.default.LEFT,
                    n.default.UP,
                    n.default.RIGHT,
                    n.default.DOWN,
                    n.default.INSERT,
                    n.default.DELETE,
                    93,
                    112,
                    113,
                    114,
                    115,
                    116,
                    117,
                    118,
                    119,
                    120,
                    121,
                    122,
                    123,
                    0,
                    229,
                  ],
                  isComplete: null,
                  preValidation: null,
                  postValidation: null,
                  staticDefinitionSymbol: void 0,
                  jitMasking: !1,
                  nullable: !0,
                  inputEventOnly: !1,
                  noValuePatching: !1,
                  positionCaretOnClick: 'lvp',
                  casing: null,
                  inputmode: 'text',
                  importDataAttributes: !0,
                  shiftPositions: !0,
                  usePrototypeDefinitions: !0,
                  validationEventTimeOut: 3e3,
                  substitutes: {},
                }
                t.default = r
              },
              7392: function (e, t) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.default = void 0)
                t.default = {
                  9: {
                    validator: '[0-9０-９]',
                    definitionSymbol: '*',
                  },
                  a: {
                    validator: '[A-Za-zА-яЁёÀ-ÿµ]',
                    definitionSymbol: '*',
                  },
                  '*': {
                    validator: '[0-9０-９A-Za-zА-яЁёÀ-ÿµ]',
                  },
                }
              },
              253: function (e, t) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.default = function (e, t, i) {
                    if (void 0 === i) return e.__data ? e.__data[t] : null
                    ;(e.__data = e.__data || {}), (e.__data[t] = i)
                  })
              },
              3776: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.Event = void 0),
                  (t.off = function (e, t) {
                    var i, a
                    function n(e, t, n) {
                      if (e in i == !0)
                        if (
                          (a.removeEventListener
                            ? a.removeEventListener(e, n, !1)
                            : a.detachEvent && a.detachEvent('on' + e, n),
                          'global' === t)
                        )
                          for (var r in i[e])
                            i[e][r].splice(i[e][r].indexOf(n), 1)
                        else i[e][t].splice(i[e][t].indexOf(n), 1)
                    }
                    function r(e, a) {
                      var n,
                        r,
                        o = []
                      if (e.length > 0)
                        if (void 0 === t)
                          for (n = 0, r = i[e][a].length; n < r; n++)
                            o.push({
                              ev: e,
                              namespace: a && a.length > 0 ? a : 'global',
                              handler: i[e][a][n],
                            })
                        else
                          o.push({
                            ev: e,
                            namespace: a && a.length > 0 ? a : 'global',
                            handler: t,
                          })
                      else if (a.length > 0)
                        for (var l in i)
                          for (var s in i[l])
                            if (s === a)
                              if (void 0 === t)
                                for (n = 0, r = i[l][s].length; n < r; n++)
                                  o.push({
                                    ev: l,
                                    namespace: s,
                                    handler: i[l][s][n],
                                  })
                              else
                                o.push({
                                  ev: l,
                                  namespace: s,
                                  handler: t,
                                })
                      return o
                    }
                    if (u(this[0]) && e) {
                      ;(i = this[0].eventRegistry), (a = this[0])
                      for (var o = e.split(' '), l = 0; l < o.length; l++)
                        for (
                          var s = o[l].split('.'),
                            c = r(s[0], s[1]),
                            f = 0,
                            d = c.length;
                          f < d;
                          f++
                        )
                          n(c[f].ev, c[f].namespace, c[f].handler)
                    }
                    return this
                  }),
                  (t.on = function (e, t) {
                    function i(e, i) {
                      n.addEventListener
                        ? n.addEventListener(e, t, !1)
                        : n.attachEvent && n.attachEvent('on' + e, t),
                        (a[e] = a[e] || {}),
                        (a[e][i] = a[e][i] || []),
                        a[e][i].push(t)
                    }
                    if (u(this[0]))
                      for (
                        var a = this[0].eventRegistry,
                          n = this[0],
                          r = e.split(' '),
                          o = 0;
                        o < r.length;
                        o++
                      ) {
                        var l = r[o].split('.'),
                          s = l[0],
                          c = l[1] || 'global'
                        i(s, c)
                      }
                    return this
                  }),
                  (t.trigger = function (e) {
                    if (u(this[0]))
                      for (
                        var t = this[0].eventRegistry,
                          i = this[0],
                          a = 'string' == typeof e ? e.split(' ') : [e.type],
                          r = 0;
                        r < a.length;
                        r++
                      ) {
                        var l = a[r].split('.'),
                          s = l[0],
                          c = l[1] || 'global'
                        if (void 0 !== document && 'global' === c) {
                          var f,
                            d,
                            p = {
                              bubbles: !0,
                              cancelable: !0,
                              detail: arguments[1],
                            }
                          if (document.createEvent) {
                            try {
                              if ('input' === s)
                                (p.inputType = 'insertText'),
                                  (f = new InputEvent(s, p))
                              else f = new CustomEvent(s, p)
                            } catch (e) {
                              ;(f =
                                document.createEvent(
                                  'CustomEvent',
                                )).initCustomEvent(
                                s,
                                p.bubbles,
                                p.cancelable,
                                p.detail,
                              )
                            }
                            e.type && (0, n.default)(f, e), i.dispatchEvent(f)
                          } else
                            ((f = document.createEventObject()).eventType = s),
                              (f.detail = arguments[1]),
                              e.type && (0, n.default)(f, e),
                              i.fireEvent('on' + f.eventType, f)
                        } else if (void 0 !== t[s])
                          if (
                            ((arguments[0] = arguments[0].type
                              ? arguments[0]
                              : o.default.Event(arguments[0])),
                            (arguments[0].detail = arguments.slice(1)),
                            'global' === c)
                          )
                            for (var h in t[s])
                              for (d = 0; d < t[s][h].length; d++)
                                t[s][h][d].apply(i, arguments)
                          else
                            for (d = 0; d < t[s][c].length; d++)
                              t[s][c][d].apply(i, arguments)
                      }
                    return this
                  })
                var a,
                  n = s(i(600)),
                  r = s(i(9380)),
                  o = s(i(4963)),
                  l = s(i(8741))
                function s(e) {
                  return e && e.__esModule
                    ? e
                    : {
                        default: e,
                      }
                }
                function u(e) {
                  return e instanceof Element
                }
                ;(t.Event = a),
                  'function' == typeof r.default.CustomEvent
                    ? (t.Event = a = r.default.CustomEvent)
                    : l.default &&
                      ((t.Event = a =
                        function (e, t) {
                          t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0,
                          }
                          var i = document.createEvent('CustomEvent')
                          return (
                            i.initCustomEvent(
                              e,
                              t.bubbles,
                              t.cancelable,
                              t.detail,
                            ),
                            i
                          )
                        }),
                      (a.prototype = r.default.Event.prototype))
              },
              600: function (e, t) {
                function i(e) {
                  return (
                    (i =
                      'function' == typeof Symbol &&
                      'symbol' == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e
                          }
                        : function (e) {
                            return e &&
                              'function' == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                          }),
                    i(e)
                  )
                }
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.default = function e() {
                    var t,
                      a,
                      n,
                      r,
                      o,
                      l,
                      s = arguments[0] || {},
                      u = 1,
                      c = arguments.length,
                      f = !1
                    'boolean' == typeof s &&
                      ((f = s), (s = arguments[u] || {}), u++)
                    'object' !== i(s) && 'function' != typeof s && (s = {})
                    for (; u < c; u++)
                      if (null != (t = arguments[u]))
                        for (a in t)
                          (n = s[a]),
                            (r = t[a]),
                            s !== r &&
                              (f &&
                              r &&
                              ('[object Object]' ===
                                Object.prototype.toString.call(r) ||
                                (o = Array.isArray(r)))
                                ? (o
                                    ? ((o = !1),
                                      (l = n && Array.isArray(n) ? n : []))
                                    : (l =
                                        n &&
                                        '[object Object]' ===
                                          Object.prototype.toString.call(n)
                                          ? n
                                          : {}),
                                  (s[a] = e(f, l, r)))
                                : void 0 !== r && (s[a] = r))
                    return s
                  })
              },
              4963: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.default = void 0)
                var a = l(i(600)),
                  n = l(i(9380)),
                  r = l(i(253)),
                  o = i(3776)
                function l(e) {
                  return e && e.__esModule
                    ? e
                    : {
                        default: e,
                      }
                }
                var s = n.default.document
                function u(e) {
                  return e instanceof u
                    ? e
                    : this instanceof u
                    ? void (
                        null != e &&
                        e !== n.default &&
                        ((this[0] = e.nodeName
                          ? e
                          : void 0 !== e[0] && e[0].nodeName
                          ? e[0]
                          : s.querySelector(e)),
                        void 0 !== this[0] &&
                          null !== this[0] &&
                          (this[0].eventRegistry = this[0].eventRegistry || {}))
                      )
                    : new u(e)
                }
                ;(u.prototype = {
                  on: o.on,
                  off: o.off,
                  trigger: o.trigger,
                }),
                  (u.extend = a.default),
                  (u.data = r.default),
                  (u.Event = o.Event)
                var c = u
                t.default = c
              },
              9845: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.ua = t.mobile = t.iphone = t.iemobile = t.ie = void 0)
                var a,
                  n =
                    (a = i(9380)) && a.__esModule
                      ? a
                      : {
                          default: a,
                        }
                var r =
                    (n.default.navigator && n.default.navigator.userAgent) ||
                    '',
                  o = r.indexOf('MSIE ') > 0 || r.indexOf('Trident/') > 0,
                  l = 'ontouchstart' in n.default,
                  s = /iemobile/i.test(r),
                  u = /iphone/i.test(r) && !s
                ;(t.iphone = u),
                  (t.iemobile = s),
                  (t.mobile = l),
                  (t.ie = o),
                  (t.ua = r)
              },
              7184: function (e, t) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.default = function (e) {
                    return e.replace(i, '\\$1')
                  })
                var i = new RegExp(
                  '(\\' +
                    [
                      '/',
                      '.',
                      '*',
                      '+',
                      '?',
                      '|',
                      '(',
                      ')',
                      '[',
                      ']',
                      '{',
                      '}',
                      '\\',
                      '$',
                      '^',
                    ].join('|\\') +
                    ')',
                  'gim',
                )
              },
              6030: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.EventHandlers = void 0)
                var a,
                  n = i(8711),
                  r =
                    (a = i(5581)) && a.__esModule
                      ? a
                      : {
                          default: a,
                        },
                  o = i(9845),
                  l = i(7215),
                  s = i(7760),
                  u = i(4713)
                function c(e, t) {
                  var i =
                    ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
                  if (!i) {
                    if (
                      Array.isArray(e) ||
                      (i = (function (e, t) {
                        if (!e) return
                        if ('string' == typeof e) return f(e, t)
                        var i = Object.prototype.toString.call(e).slice(8, -1)
                        'Object' === i &&
                          e.constructor &&
                          (i = e.constructor.name)
                        if ('Map' === i || 'Set' === i) return Array.from(e)
                        if (
                          'Arguments' === i ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                        )
                          return f(e, t)
                      })(e)) ||
                      (t && e && 'number' == typeof e.length)
                    ) {
                      i && (e = i)
                      var a = 0,
                        n = function () {}
                      return {
                        s: n,
                        n: function () {
                          return a >= e.length
                            ? {
                                done: !0,
                              }
                            : {
                                done: !1,
                                value: e[a++],
                              }
                        },
                        e: function (e) {
                          throw e
                        },
                        f: n,
                      }
                    }
                    throw new TypeError(
                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    )
                  }
                  var r,
                    o = !0,
                    l = !1
                  return {
                    s: function () {
                      i = i.call(e)
                    },
                    n: function () {
                      var e = i.next()
                      return (o = e.done), e
                    },
                    e: function (e) {
                      ;(l = !0), (r = e)
                    },
                    f: function () {
                      try {
                        o || null == i.return || i.return()
                      } finally {
                        if (l) throw r
                      }
                    },
                  }
                }
                function f(e, t) {
                  ;(null == t || t > e.length) && (t = e.length)
                  for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i]
                  return a
                }
                var d = {
                  keydownEvent: function (e) {
                    var t = this.inputmask,
                      i = t.opts,
                      a = t.dependencyLib,
                      c = t.maskset,
                      f = this,
                      d = a(f),
                      p = e.keyCode,
                      h = n.caret.call(t, f),
                      v = i.onKeyDown.call(this, e, n.getBuffer.call(t), h, i)
                    if (void 0 !== v) return v
                    if (
                      p === r.default.BACKSPACE ||
                      p === r.default.DELETE ||
                      (o.iphone && p === r.default.BACKSPACE_SAFARI) ||
                      (e.ctrlKey && p === r.default.X && !('oncut' in f))
                    )
                      e.preventDefault(),
                        l.handleRemove.call(t, f, p, h),
                        (0, s.writeBuffer)(
                          f,
                          n.getBuffer.call(t, !0),
                          c.p,
                          e,
                          f.inputmask._valueGet() !==
                            n.getBuffer.call(t).join(''),
                        )
                    else if (p === r.default.END || p === r.default.PAGE_DOWN) {
                      e.preventDefault()
                      var m = n.seekNext.call(t, n.getLastValidPosition.call(t))
                      n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0)
                    } else
                      (p === r.default.HOME && !e.shiftKey) ||
                      p === r.default.PAGE_UP
                        ? (e.preventDefault(),
                          n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0))
                        : i.undoOnEscape &&
                          p === r.default.ESCAPE &&
                          !0 !== e.altKey
                        ? ((0, s.checkVal)(f, !0, !1, t.undoValue.split('')),
                          d.trigger('click'))
                        : p !== r.default.INSERT ||
                          e.shiftKey ||
                          e.ctrlKey ||
                          void 0 !== t.userOptions.insertMode
                        ? !0 === i.tabThrough && p === r.default.TAB
                          ? !0 === e.shiftKey
                            ? ((h.end = n.seekPrevious.call(t, h.end, !0)),
                              !0 ===
                                u.getTest.call(t, h.end - 1).match.static &&
                                h.end--,
                              (h.begin = n.seekPrevious.call(t, h.end, !0)),
                              h.begin >= 0 &&
                                h.end > 0 &&
                                (e.preventDefault(),
                                n.caret.call(t, f, h.begin, h.end)))
                            : ((h.begin = n.seekNext.call(t, h.begin, !0)),
                              (h.end = n.seekNext.call(t, h.begin, !0)),
                              h.end < c.maskLength && h.end--,
                              h.begin <= c.maskLength &&
                                (e.preventDefault(),
                                n.caret.call(t, f, h.begin, h.end)))
                          : e.shiftKey ||
                            (i.insertModeVisual &&
                              !1 === i.insertMode &&
                              (p === r.default.RIGHT
                                ? setTimeout(function () {
                                    var e = n.caret.call(t, f)
                                    n.caret.call(t, f, e.begin)
                                  }, 0)
                                : p === r.default.LEFT &&
                                  setTimeout(function () {
                                    var e = n.translatePosition.call(
                                      t,
                                      f.inputmask.caretPos.begin,
                                    )
                                    n.translatePosition.call(
                                      t,
                                      f.inputmask.caretPos.end,
                                    )
                                    t.isRTL
                                      ? n.caret.call(
                                          t,
                                          f,
                                          e + (e === c.maskLength ? 0 : 1),
                                        )
                                      : n.caret.call(
                                          t,
                                          f,
                                          e - (0 === e ? 0 : 1),
                                        )
                                  }, 0)))
                        : l.isSelection.call(t, h)
                        ? (i.insertMode = !i.insertMode)
                        : ((i.insertMode = !i.insertMode),
                          n.caret.call(t, f, h.begin, h.begin))
                    t.ignorable = i.ignorables.includes(p)
                  },
                  keypressEvent: function (e, t, i, a, o) {
                    var u = this.inputmask || this,
                      c = u.opts,
                      f = u.dependencyLib,
                      d = u.maskset,
                      p = u.el,
                      h = f(p),
                      v = e.keyCode
                    if (
                      !(!0 === t || (e.ctrlKey && e.altKey)) &&
                      (e.ctrlKey || e.metaKey || u.ignorable)
                    )
                      return (
                        v === r.default.ENTER &&
                          u.undoValue !== u._valueGet(!0) &&
                          ((u.undoValue = u._valueGet(!0)),
                          setTimeout(function () {
                            h.trigger('change')
                          }, 0)),
                        (u.skipInputEvent = !0),
                        !0
                      )
                    if (v) {
                      ;(44 !== v && 46 !== v) ||
                        3 !== e.location ||
                        '' === c.radixPoint ||
                        (v = c.radixPoint.charCodeAt(0))
                      var m,
                        g = t
                          ? {
                              begin: o,
                              end: o,
                            }
                          : n.caret.call(u, p),
                        k = String.fromCharCode(v)
                      ;(k = c.substitutes[k] || k), (d.writeOutBuffer = !0)
                      var y = l.isValid.call(
                        u,
                        g,
                        k,
                        a,
                        void 0,
                        void 0,
                        void 0,
                        t,
                      )
                      if (
                        (!1 !== y &&
                          (n.resetMaskSet.call(u, !0),
                          (m =
                            void 0 !== y.caret
                              ? y.caret
                              : n.seekNext.call(
                                  u,
                                  y.pos.begin ? y.pos.begin : y.pos,
                                )),
                          (d.p = m)),
                        (m =
                          c.numericInput && void 0 === y.caret
                            ? n.seekPrevious.call(u, m)
                            : m),
                        !1 !== i &&
                          (setTimeout(function () {
                            c.onKeyValidation.call(p, v, y)
                          }, 0),
                          d.writeOutBuffer && !1 !== y))
                      ) {
                        var b = n.getBuffer.call(u)
                        ;(0, s.writeBuffer)(p, b, m, e, !0 !== t)
                      }
                      if ((e.preventDefault(), t))
                        return !1 !== y && (y.forwardPosition = m), y
                    }
                  },
                  keyupEvent: function (e) {
                    var t = this.inputmask
                    !t.isComposing ||
                      (e.keyCode !== r.default.KEY_229 &&
                        e.keyCode !== r.default.ENTER) ||
                      t.$el.trigger('input')
                  },
                  pasteEvent: function (e) {
                    var t,
                      i = this.inputmask,
                      a = i.opts,
                      r = i._valueGet(!0),
                      o = n.caret.call(i, this)
                    i.isRTL &&
                      ((t = o.end),
                      (o.end = n.translatePosition.call(i, o.begin)),
                      (o.begin = n.translatePosition.call(i, t)))
                    var l = r.substr(0, o.begin),
                      u = r.substr(o.end, r.length)
                    if (
                      (l ==
                        (i.isRTL
                          ? n.getBufferTemplate.call(i).slice().reverse()
                          : n.getBufferTemplate.call(i)
                        )
                          .slice(0, o.begin)
                          .join('') && (l = ''),
                      u ==
                        (i.isRTL
                          ? n.getBufferTemplate.call(i).slice().reverse()
                          : n.getBufferTemplate.call(i)
                        )
                          .slice(o.end)
                          .join('') && (u = ''),
                      window.clipboardData && window.clipboardData.getData)
                    )
                      r = l + window.clipboardData.getData('Text') + u
                    else {
                      if (!e.clipboardData || !e.clipboardData.getData)
                        return !0
                      r = l + e.clipboardData.getData('text/plain') + u
                    }
                    var f = r
                    if (i.isRTL) {
                      f = f.split('')
                      var d,
                        p = c(n.getBufferTemplate.call(i))
                      try {
                        for (p.s(); !(d = p.n()).done; ) {
                          var h = d.value
                          f[0] === h && f.shift()
                        }
                      } catch (e) {
                        p.e(e)
                      } finally {
                        p.f()
                      }
                      f = f.join('')
                    }
                    if ('function' == typeof a.onBeforePaste) {
                      if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1
                      f || (f = r)
                    }
                    ;(0, s.checkVal)(this, !0, !1, f.toString().split(''), e),
                      e.preventDefault()
                  },
                  inputFallBackEvent: function (e) {
                    var t = this.inputmask,
                      i = t.opts,
                      a = t.dependencyLib
                    var l = this,
                      c = l.inputmask._valueGet(!0),
                      f = (
                        t.isRTL
                          ? n.getBuffer.call(t).slice().reverse()
                          : n.getBuffer.call(t)
                      ).join(''),
                      p = n.caret.call(t, l, void 0, void 0, !0)
                    if (f !== c) {
                      c = (function (e, i, a) {
                        if (o.iemobile) {
                          var r = i.replace(n.getBuffer.call(t).join(''), '')
                          if (1 === r.length) {
                            var l = i.split('')
                            l.splice(a.begin, 0, r), (i = l.join(''))
                          }
                        }
                        return i
                      })(0, c, p)
                      var h = (function (e, a, r) {
                        for (
                          var o,
                            l,
                            s,
                            c = e.substr(0, r.begin).split(''),
                            f = e.substr(r.begin).split(''),
                            d = a.substr(0, r.begin).split(''),
                            p = a.substr(r.begin).split(''),
                            h = c.length >= d.length ? c.length : d.length,
                            v = f.length >= p.length ? f.length : p.length,
                            m = '',
                            g = [],
                            k = '~';
                          c.length < h;

                        )
                          c.push(k)
                        for (; d.length < h; ) d.push(k)
                        for (; f.length < v; ) f.unshift(k)
                        for (; p.length < v; ) p.unshift(k)
                        var y = c.concat(f),
                          b = d.concat(p)
                        for (l = 0, o = y.length; l < o; l++)
                          switch (
                            ((s = u.getPlaceholder.call(
                              t,
                              n.translatePosition.call(t, l),
                            )),
                            m)
                          ) {
                            case 'insertText':
                              b[l - 1] === y[l] &&
                                r.begin == y.length - 1 &&
                                g.push(y[l]),
                                (l = o)
                              break

                            case 'insertReplacementText':
                            case 'deleteContentBackward':
                              y[l] === k ? r.end++ : (l = o)
                              break

                            default:
                              y[l] !== b[l] &&
                                ((y[l + 1] !== k &&
                                  y[l + 1] !== s &&
                                  void 0 !== y[l + 1]) ||
                                ((b[l] !== s || b[l + 1] !== k) && b[l] !== k)
                                  ? b[l + 1] === k && b[l] === y[l + 1]
                                    ? ((m = 'insertText'),
                                      g.push(y[l]),
                                      r.begin--,
                                      r.end--)
                                    : y[l] !== s &&
                                      y[l] !== k &&
                                      (y[l + 1] === k ||
                                        (b[l] !== y[l] &&
                                          b[l + 1] === y[l + 1]))
                                    ? ((m = 'insertReplacementText'),
                                      g.push(y[l]),
                                      r.begin--)
                                    : y[l] === k
                                    ? ((m = 'deleteContentBackward'),
                                      (n.isMask.call(
                                        t,
                                        n.translatePosition.call(t, l),
                                        !0,
                                      ) ||
                                        b[l] === i.radixPoint) &&
                                        r.end++)
                                    : (l = o)
                                  : ((m = 'insertText'),
                                    g.push(y[l]),
                                    r.begin--,
                                    r.end--))
                          }
                        return {
                          action: m,
                          data: g,
                          caret: r,
                        }
                      })(c, f, p)
                      switch (
                        ((l.inputmask.shadowRoot || l.ownerDocument)
                          .activeElement !== l && l.focus(),
                        (0, s.writeBuffer)(l, n.getBuffer.call(t)),
                        n.caret.call(t, l, p.begin, p.end, !0),
                        h.action)
                      ) {
                        case 'insertText':
                        case 'insertReplacementText':
                          h.data.forEach(function (e, i) {
                            var n = new a.Event('keypress')
                            ;(n.keyCode = e.charCodeAt(0)),
                              (t.ignorable = !1),
                              d.keypressEvent.call(l, n)
                          }),
                            setTimeout(function () {
                              t.$el.trigger('keyup')
                            }, 0)
                          break

                        case 'deleteContentBackward':
                          var v = new a.Event('keydown')
                          ;(v.keyCode = r.default.BACKSPACE),
                            d.keydownEvent.call(l, v)
                          break

                        default:
                          ;(0, s.applyInputValue)(l, c)
                      }
                      e.preventDefault()
                    }
                  },
                  compositionendEvent: function (e) {
                    var t = this.inputmask
                    ;(t.isComposing = !1), t.$el.trigger('input')
                  },
                  setValueEvent: function (e) {
                    var t = this.inputmask,
                      i = this,
                      a = e && e.detail ? e.detail[0] : arguments[1]
                    void 0 === a && (a = i.inputmask._valueGet(!0)),
                      (0, s.applyInputValue)(i, a),
                      ((e.detail && void 0 !== e.detail[1]) ||
                        void 0 !== arguments[2]) &&
                        n.caret.call(
                          t,
                          i,
                          e.detail ? e.detail[1] : arguments[2],
                        )
                  },
                  focusEvent: function (e) {
                    var t = this.inputmask,
                      i = t.opts,
                      a = this,
                      r = a.inputmask._valueGet()
                    i.showMaskOnFocus &&
                      r !== n.getBuffer.call(t).join('') &&
                      (0, s.writeBuffer)(
                        a,
                        n.getBuffer.call(t),
                        n.seekNext.call(t, n.getLastValidPosition.call(t)),
                      ),
                      !0 !== i.positionCaretOnTab ||
                        !1 !== t.mouseEnter ||
                        (l.isComplete.call(t, n.getBuffer.call(t)) &&
                          -1 !== n.getLastValidPosition.call(t)) ||
                        d.clickEvent.apply(a, [e, !0]),
                      (t.undoValue = t._valueGet(!0))
                  },
                  invalidEvent: function (e) {
                    this.inputmask.validationEvent = !0
                  },
                  mouseleaveEvent: function () {
                    var e = this.inputmask,
                      t = e.opts,
                      i = this
                    ;(e.mouseEnter = !1),
                      t.clearMaskOnLostFocus &&
                        (i.inputmask.shadowRoot || i.ownerDocument)
                          .activeElement !== i &&
                        (0, s.HandleNativePlaceholder)(i, e.originalPlaceholder)
                  },
                  clickEvent: function (e, t) {
                    var i = this.inputmask,
                      a = this
                    if (
                      (a.inputmask.shadowRoot || a.ownerDocument)
                        .activeElement === a
                    ) {
                      var r = n.determineNewCaretPosition.call(
                        i,
                        n.caret.call(i, a),
                        t,
                      )
                      void 0 !== r && n.caret.call(i, a, r)
                    }
                  },
                  cutEvent: function (e) {
                    var t = this.inputmask,
                      i = t.maskset,
                      a = this,
                      o = n.caret.call(t, a),
                      u = t.isRTL
                        ? n.getBuffer.call(t).slice(o.end, o.begin)
                        : n.getBuffer.call(t).slice(o.begin, o.end),
                      c = t.isRTL ? u.reverse().join('') : u.join('')
                    window.navigator.clipboard
                      ? window.navigator.clipboard.writeText(c)
                      : window.clipboardData &&
                        window.clipboardData.getData &&
                        window.clipboardData.setData('Text', c),
                      l.handleRemove.call(t, a, r.default.DELETE, o),
                      (0, s.writeBuffer)(
                        a,
                        n.getBuffer.call(t),
                        i.p,
                        e,
                        t.undoValue !== t._valueGet(!0),
                      )
                  },
                  blurEvent: function (e) {
                    var t = this.inputmask,
                      i = t.opts,
                      a = (0, t.dependencyLib)(this),
                      r = this
                    if (r.inputmask) {
                      ;(0, s.HandleNativePlaceholder)(r, t.originalPlaceholder)
                      var o = r.inputmask._valueGet(),
                        u = n.getBuffer.call(t).slice()
                      '' !== o &&
                        (i.clearMaskOnLostFocus &&
                          (-1 === n.getLastValidPosition.call(t) &&
                          o === n.getBufferTemplate.call(t).join('')
                            ? (u = [])
                            : s.clearOptionalTail.call(t, u)),
                        !1 === l.isComplete.call(t, u) &&
                          (setTimeout(function () {
                            a.trigger('incomplete')
                          }, 0),
                          i.clearIncomplete &&
                            (n.resetMaskSet.call(t),
                            (u = i.clearMaskOnLostFocus
                              ? []
                              : n.getBufferTemplate.call(t).slice()))),
                        (0, s.writeBuffer)(r, u, void 0, e)),
                        t.undoValue !== t._valueGet(!0) &&
                          ((t.undoValue = t._valueGet(!0)), a.trigger('change'))
                    }
                  },
                  mouseenterEvent: function () {
                    var e = this.inputmask,
                      t = e.opts,
                      i = this
                    if (
                      ((e.mouseEnter = !0),
                      (i.inputmask.shadowRoot || i.ownerDocument)
                        .activeElement !== i)
                    ) {
                      var a = (
                        e.isRTL
                          ? n.getBufferTemplate.call(e).slice().reverse()
                          : n.getBufferTemplate.call(e)
                      ).join('')
                      e.placeholder !== a &&
                        i.placeholder !== e.originalPlaceholder &&
                        (e.originalPlaceholder = i.placeholder),
                        t.showMaskOnHover &&
                          (0, s.HandleNativePlaceholder)(i, a)
                    }
                  },
                  submitEvent: function () {
                    var e = this.inputmask,
                      t = e.opts
                    e.undoValue !== e._valueGet(!0) && e.$el.trigger('change'),
                      -1 === n.getLastValidPosition.call(e) &&
                        e._valueGet &&
                        e._valueGet() ===
                          n.getBufferTemplate.call(e).join('') &&
                        e._valueSet(''),
                      t.clearIncomplete &&
                        !1 === l.isComplete.call(e, n.getBuffer.call(e)) &&
                        e._valueSet(''),
                      t.removeMaskOnSubmit &&
                        (e._valueSet(e.unmaskedvalue(), !0),
                        setTimeout(function () {
                          ;(0, s.writeBuffer)(e.el, n.getBuffer.call(e))
                        }, 0))
                  },
                  resetEvent: function () {
                    var e = this.inputmask
                    ;(e.refreshValue = !0),
                      setTimeout(function () {
                        ;(0, s.applyInputValue)(e.el, e._valueGet(!0))
                      }, 0)
                  },
                }
                t.EventHandlers = d
              },
              9716: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.EventRuler = void 0)
                var a = l(i(2394)),
                  n = l(i(5581)),
                  r = i(8711),
                  o = i(7760)
                function l(e) {
                  return e && e.__esModule
                    ? e
                    : {
                        default: e,
                      }
                }
                var s = {
                  on: function (e, t, i) {
                    var l = e.inputmask.dependencyLib,
                      s = function (t) {
                        t.originalEvent &&
                          ((t = t.originalEvent || t), (arguments[0] = t))
                        var s,
                          u = this,
                          c = u.inputmask,
                          f = c ? c.opts : void 0
                        if (void 0 === c && 'FORM' !== this.nodeName) {
                          var d = l.data(u, '_inputmask_opts')
                          l(u).off(), d && new a.default(d).mask(u)
                        } else {
                          if (
                            ['submit', 'reset', 'setvalue'].includes(t.type) ||
                            'FORM' === this.nodeName ||
                            !(
                              u.disabled ||
                              (u.readOnly &&
                                !(
                                  ('keydown' === t.type &&
                                    t.ctrlKey &&
                                    67 === t.keyCode) ||
                                  (!1 === f.tabThrough &&
                                    t.keyCode === n.default.TAB)
                                ))
                            )
                          ) {
                            switch (t.type) {
                              case 'input':
                                if (
                                  !0 === c.skipInputEvent ||
                                  (t.inputType &&
                                    'insertCompositionText' === t.inputType)
                                )
                                  return (
                                    (c.skipInputEvent = !1), t.preventDefault()
                                  )
                                break

                              case 'keydown':
                                ;(c.skipKeyPressEvent = !1),
                                  (c.skipInputEvent = c.isComposing =
                                    t.keyCode === n.default.KEY_229)
                                break

                              case 'keyup':
                              case 'compositionend':
                                c.isComposing && (c.skipInputEvent = !1)
                                break

                              case 'keypress':
                                if (!0 === c.skipKeyPressEvent)
                                  return t.preventDefault()
                                c.skipKeyPressEvent = !0
                                break

                              case 'click':
                              case 'focus':
                                return c.validationEvent
                                  ? ((c.validationEvent = !1),
                                    e.blur(),
                                    (0, o.HandleNativePlaceholder)(
                                      e,
                                      (c.isRTL
                                        ? r.getBufferTemplate
                                            .call(c)
                                            .slice()
                                            .reverse()
                                        : r.getBufferTemplate.call(c)
                                      ).join(''),
                                    ),
                                    setTimeout(function () {
                                      e.focus()
                                    }, f.validationEventTimeOut),
                                    !1)
                                  : ((s = arguments),
                                    setTimeout(function () {
                                      e.inputmask && i.apply(u, s)
                                    }, 0),
                                    !1)
                            }
                            var p = i.apply(u, arguments)
                            return (
                              !1 === p &&
                                (t.preventDefault(), t.stopPropagation()),
                              p
                            )
                          }
                          t.preventDefault()
                        }
                      }
                    ;['submit', 'reset'].includes(t)
                      ? ((s = s.bind(e)), null !== e.form && l(e.form).on(t, s))
                      : l(e).on(t, s),
                      (e.inputmask.events[t] = e.inputmask.events[t] || []),
                      e.inputmask.events[t].push(s)
                  },
                  off: function (e, t) {
                    if (e.inputmask && e.inputmask.events) {
                      var i = e.inputmask.dependencyLib,
                        a = e.inputmask.events
                      for (var n in (t && ((a = [])[t] = e.inputmask.events[t]),
                      a)) {
                        for (var r = a[n]; r.length > 0; ) {
                          var o = r.pop()
                          ;['submit', 'reset'].includes(n)
                            ? null !== e.form && i(e.form).off(n, o)
                            : i(e).off(n, o)
                        }
                        delete e.inputmask.events[n]
                      }
                    }
                  },
                }
                t.EventRuler = s
              },
              219: function (e, t, i) {
                var a = d(i(2394)),
                  n = d(i(5581)),
                  r = d(i(7184)),
                  o = i(8711),
                  l = i(4713)
                function s(e) {
                  return (
                    (s =
                      'function' == typeof Symbol &&
                      'symbol' == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e
                          }
                        : function (e) {
                            return e &&
                              'function' == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                          }),
                    s(e)
                  )
                }
                function u(e, t) {
                  return (
                    (function (e) {
                      if (Array.isArray(e)) return e
                    })(e) ||
                    (function (e, t) {
                      var i =
                        null == e
                          ? null
                          : ('undefined' != typeof Symbol &&
                              e[Symbol.iterator]) ||
                            e['@@iterator']
                      if (null == i) return
                      var a,
                        n,
                        r = [],
                        o = !0,
                        l = !1
                      try {
                        for (
                          i = i.call(e);
                          !(o = (a = i.next()).done) &&
                          (r.push(a.value), !t || r.length !== t);
                          o = !0
                        );
                      } catch (e) {
                        ;(l = !0), (n = e)
                      } finally {
                        try {
                          o || null == i.return || i.return()
                        } finally {
                          if (l) throw n
                        }
                      }
                      return r
                    })(e, t) ||
                    (function (e, t) {
                      if (!e) return
                      if ('string' == typeof e) return c(e, t)
                      var i = Object.prototype.toString.call(e).slice(8, -1)
                      'Object' === i &&
                        e.constructor &&
                        (i = e.constructor.name)
                      if ('Map' === i || 'Set' === i) return Array.from(e)
                      if (
                        'Arguments' === i ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                      )
                        return c(e, t)
                    })(e, t) ||
                    (function () {
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                      )
                    })()
                  )
                }
                function c(e, t) {
                  ;(null == t || t > e.length) && (t = e.length)
                  for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i]
                  return a
                }
                function f(e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var a = t[i]
                    ;(a.enumerable = a.enumerable || !1),
                      (a.configurable = !0),
                      'value' in a && (a.writable = !0),
                      Object.defineProperty(e, a.key, a)
                  }
                }
                function d(e) {
                  return e && e.__esModule
                    ? e
                    : {
                        default: e,
                      }
                }
                var p = a.default.dependencyLib,
                  h = (function () {
                    function e(t, i, a) {
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            'Cannot call a class as a function',
                          )
                      })(this, e),
                        (this.mask = t),
                        (this.format = i),
                        (this.opts = a),
                        (this._date = new Date(1, 0, 1)),
                        this.initDateObject(t, this.opts)
                    }
                    var t, i, a
                    return (
                      (t = e),
                      (i = [
                        {
                          key: 'date',
                          get: function () {
                            return (
                              void 0 === this._date &&
                                ((this._date = new Date(1, 0, 1)),
                                this.initDateObject(void 0, this.opts)),
                              this._date
                            )
                          },
                        },
                        {
                          key: 'initDateObject',
                          value: function (e, t) {
                            var i
                            for (
                              P(t).lastIndex = 0;
                              (i = P(t).exec(this.format));

                            ) {
                              var a = new RegExp('\\d+$').exec(i[0]),
                                n = a ? i[0][0] + 'x' : i[0],
                                r = void 0
                              if (void 0 !== e) {
                                if (a) {
                                  var o = P(t).lastIndex,
                                    l = O(i.index, t)
                                  ;(P(t).lastIndex = o),
                                    (r = e.slice(0, e.indexOf(l.nextMatch[0])))
                                } else r = e.slice(0, n.length)
                                e = e.slice(r.length)
                              }
                              Object.prototype.hasOwnProperty.call(g, n) &&
                                this.setValue(this, r, n, g[n][2], g[n][1])
                            }
                          },
                        },
                        {
                          key: 'setValue',
                          value: function (e, t, i, a, n) {
                            if (
                              (void 0 !== t &&
                                ((e[a] =
                                  'ampm' === a ? t : t.replace(/[^0-9]/g, '0')),
                                (e['raw' + a] = t.replace(/\s/g, '_'))),
                              void 0 !== n)
                            ) {
                              var r = e[a]
                              ;(('day' === a && 29 === parseInt(r)) ||
                                ('month' === a && 2 === parseInt(r))) &&
                                (29 !== parseInt(e.day) ||
                                  2 !== parseInt(e.month) ||
                                  ('' !== e.year && void 0 !== e.year) ||
                                  e._date.setFullYear(2012, 1, 29)),
                                'day' === a &&
                                  ((m = !0), 0 === parseInt(r) && (r = 1)),
                                'month' === a && (m = !0),
                                'year' === a &&
                                  ((m = !0), r.length < 4 && (r = _(r, 4, !0))),
                                '' === r || isNaN(r) || n.call(e._date, r),
                                'ampm' === a && n.call(e._date, r)
                            }
                          },
                        },
                        {
                          key: 'reset',
                          value: function () {
                            this._date = new Date(1, 0, 1)
                          },
                        },
                        {
                          key: 'reInit',
                          value: function () {
                            ;(this._date = void 0), this.date
                          },
                        },
                      ]) && f(t.prototype, i),
                      a && f(t, a),
                      Object.defineProperty(t, 'prototype', {
                        writable: !1,
                      }),
                      e
                    )
                  })(),
                  v = new Date().getFullYear(),
                  m = !1,
                  g = {
                    d: [
                      '[1-9]|[12][0-9]|3[01]',
                      Date.prototype.setDate,
                      'day',
                      Date.prototype.getDate,
                    ],
                    dd: [
                      '0[1-9]|[12][0-9]|3[01]',
                      Date.prototype.setDate,
                      'day',
                      function () {
                        return _(Date.prototype.getDate.call(this), 2)
                      },
                    ],
                    ddd: [''],
                    dddd: [''],
                    m: [
                      '[1-9]|1[012]',
                      function (e) {
                        var t = e ? parseInt(e) : 0
                        return (
                          t > 0 && t--, Date.prototype.setMonth.call(this, t)
                        )
                      },
                      'month',
                      function () {
                        return Date.prototype.getMonth.call(this) + 1
                      },
                    ],
                    mm: [
                      '0[1-9]|1[012]',
                      function (e) {
                        var t = e ? parseInt(e) : 0
                        return (
                          t > 0 && t--, Date.prototype.setMonth.call(this, t)
                        )
                      },
                      'month',
                      function () {
                        return _(Date.prototype.getMonth.call(this) + 1, 2)
                      },
                    ],
                    mmm: [''],
                    mmmm: [''],
                    yy: [
                      '[0-9]{2}',
                      Date.prototype.setFullYear,
                      'year',
                      function () {
                        return _(Date.prototype.getFullYear.call(this), 2)
                      },
                    ],
                    yyyy: [
                      '[0-9]{4}',
                      Date.prototype.setFullYear,
                      'year',
                      function () {
                        return _(Date.prototype.getFullYear.call(this), 4)
                      },
                    ],
                    h: [
                      '[1-9]|1[0-2]',
                      Date.prototype.setHours,
                      'hours',
                      Date.prototype.getHours,
                    ],
                    hh: [
                      '0[1-9]|1[0-2]',
                      Date.prototype.setHours,
                      'hours',
                      function () {
                        return _(Date.prototype.getHours.call(this), 2)
                      },
                    ],
                    hx: [
                      function (e) {
                        return '[0-9]{'.concat(e, '}')
                      },
                      Date.prototype.setHours,
                      'hours',
                      function (e) {
                        return Date.prototype.getHours
                      },
                    ],
                    H: [
                      '1?[0-9]|2[0-3]',
                      Date.prototype.setHours,
                      'hours',
                      Date.prototype.getHours,
                    ],
                    HH: [
                      '0[0-9]|1[0-9]|2[0-3]',
                      Date.prototype.setHours,
                      'hours',
                      function () {
                        return _(Date.prototype.getHours.call(this), 2)
                      },
                    ],
                    Hx: [
                      function (e) {
                        return '[0-9]{'.concat(e, '}')
                      },
                      Date.prototype.setHours,
                      'hours',
                      function (e) {
                        return function () {
                          return _(Date.prototype.getHours.call(this), e)
                        }
                      },
                    ],
                    M: [
                      '[1-5]?[0-9]',
                      Date.prototype.setMinutes,
                      'minutes',
                      Date.prototype.getMinutes,
                    ],
                    MM: [
                      '0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]',
                      Date.prototype.setMinutes,
                      'minutes',
                      function () {
                        return _(Date.prototype.getMinutes.call(this), 2)
                      },
                    ],
                    s: [
                      '[1-5]?[0-9]',
                      Date.prototype.setSeconds,
                      'seconds',
                      Date.prototype.getSeconds,
                    ],
                    ss: [
                      '0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]',
                      Date.prototype.setSeconds,
                      'seconds',
                      function () {
                        return _(Date.prototype.getSeconds.call(this), 2)
                      },
                    ],
                    l: [
                      '[0-9]{3}',
                      Date.prototype.setMilliseconds,
                      'milliseconds',
                      function () {
                        return _(Date.prototype.getMilliseconds.call(this), 3)
                      },
                    ],
                    L: [
                      '[0-9]{2}',
                      Date.prototype.setMilliseconds,
                      'milliseconds',
                      function () {
                        return _(Date.prototype.getMilliseconds.call(this), 2)
                      },
                    ],
                    t: ['[ap]', y, 'ampm', b, 1],
                    tt: ['[ap]m', y, 'ampm', b, 2],
                    T: ['[AP]', y, 'ampm', b, 1],
                    TT: ['[AP]M', y, 'ampm', b, 2],
                    Z: [
                      '.*',
                      void 0,
                      'Z',
                      function () {
                        var e = this.toString().match(/\((.+)\)/)[1]
                        e.includes(' ') &&
                          (e = (e = e.replace('-', ' ').toUpperCase())
                            .split(' ')
                            .map(function (e) {
                              return u(e, 1)[0]
                            })
                            .join(''))
                        return e
                      },
                    ],
                    o: [''],
                    S: [''],
                  },
                  k = {
                    isoDate: 'yyyy-mm-dd',
                    isoTime: 'HH:MM:ss',
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
                  }
                function y(e) {
                  var t = this.getHours()
                  e.toLowerCase().includes('p')
                    ? this.setHours(t + 12)
                    : e.toLowerCase().includes('a') &&
                      t >= 12 &&
                      this.setHours(t - 12)
                }
                function b() {
                  var e = this.getHours()
                  return (e = e || 12) >= 12 ? 'PM' : 'AM'
                }
                function x(e) {
                  var t = new RegExp('\\d+$').exec(e[0])
                  if (t && void 0 !== t[0]) {
                    var i = g[e[0][0] + 'x'].slice('')
                    return (i[0] = i[0](t[0])), (i[3] = i[3](t[0])), i
                  }
                  if (g[e[0]]) return g[e[0]]
                }
                function P(e) {
                  if (!e.tokenizer) {
                    var t = [],
                      i = []
                    for (var a in g)
                      if (/\.*x$/.test(a)) {
                        var n = a[0] + '\\d+'
                        ;-1 === i.indexOf(n) && i.push(n)
                      } else -1 === t.indexOf(a[0]) && t.push(a[0])
                    ;(e.tokenizer =
                      '(' +
                      (i.length > 0 ? i.join('|') + '|' : '') +
                      t.join('+|') +
                      ')+?|.'),
                      (e.tokenizer = new RegExp(e.tokenizer, 'g'))
                  }
                  return e.tokenizer
                }
                function E(e, t, i) {
                  if (!m) return !0
                  if (
                    void 0 === e.rawday ||
                    (!isFinite(e.rawday) &&
                      new Date(
                        e.date.getFullYear(),
                        isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1,
                        0,
                      ).getDate() >= e.day) ||
                    ('29' == e.day &&
                      (!isFinite(e.rawyear) ||
                        void 0 === e.rawyear ||
                        '' === e.rawyear)) ||
                    new Date(
                      e.date.getFullYear(),
                      isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1,
                      0,
                    ).getDate() >= e.day
                  )
                    return t
                  if ('29' == e.day) {
                    var a = O(t.pos, i)
                    if (
                      'yyyy' === a.targetMatch[0] &&
                      t.pos - a.targetMatchIndex == 2
                    )
                      return (t.remove = t.pos + 1), t
                  } else if ('02' == e.month && '30' == e.day && void 0 !== t.c)
                    return (
                      (e.day = '03'),
                      e.date.setDate(3),
                      e.date.setMonth(1),
                      (t.insert = [
                        {
                          pos: t.pos,
                          c: '0',
                        },
                        {
                          pos: t.pos + 1,
                          c: t.c,
                        },
                      ]),
                      (t.caret = o.seekNext.call(this, t.pos + 1)),
                      t
                    )
                  return !1
                }
                function S(e, t, i, a) {
                  var n,
                    o,
                    l = ''
                  for (P(i).lastIndex = 0; (n = P(i).exec(e)); )
                    if (void 0 === t)
                      if ((o = x(n))) l += '(' + o[0] + ')'
                      else
                        switch (n[0]) {
                          case '[':
                            l += '('
                            break

                          case ']':
                            l += ')?'
                            break

                          default:
                            l += (0, r.default)(n[0])
                        }
                    else if ((o = x(n)))
                      if (!0 !== a && o[3]) l += o[3].call(t.date)
                      else o[2] ? (l += t['raw' + o[2]]) : (l += n[0])
                    else l += n[0]
                  return l
                }
                function _(e, t, i) {
                  for (e = String(e), t = t || 2; e.length < t; )
                    e = i ? e + '0' : '0' + e
                  return e
                }
                function w(e, t, i) {
                  return 'string' == typeof e
                    ? new h(e, t, i)
                    : e &&
                      'object' === s(e) &&
                      Object.prototype.hasOwnProperty.call(e, 'date')
                    ? e
                    : void 0
                }
                function M(e, t) {
                  return S(
                    t.inputFormat,
                    {
                      date: e,
                    },
                    t,
                  )
                }
                function O(e, t) {
                  var i,
                    a,
                    n = 0,
                    r = 0
                  for (P(t).lastIndex = 0; (a = P(t).exec(t.inputFormat)); ) {
                    var o = new RegExp('\\d+$').exec(a[0])
                    if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
                      ;(i = a), (a = P(t).exec(t.inputFormat))
                      break
                    }
                  }
                  return {
                    targetMatchIndex: n - r,
                    nextMatch: a,
                    targetMatch: i,
                  }
                }
                a.default.extendAliases({
                  datetime: {
                    mask: function (e) {
                      return (
                        (e.numericInput = !1),
                        (g.S = e.i18n.ordinalSuffix.join('|')),
                        (e.inputFormat = k[e.inputFormat] || e.inputFormat),
                        (e.displayFormat =
                          k[e.displayFormat] ||
                          e.displayFormat ||
                          e.inputFormat),
                        (e.outputFormat =
                          k[e.outputFormat] || e.outputFormat || e.inputFormat),
                        (e.placeholder =
                          '' !== e.placeholder
                            ? e.placeholder
                            : e.inputFormat.replace(/[[\]]/, '')),
                        (e.regex = S(e.inputFormat, void 0, e)),
                        (e.min = w(e.min, e.inputFormat, e)),
                        (e.max = w(e.max, e.inputFormat, e)),
                        null
                      )
                    },
                    placeholder: '',
                    inputFormat: 'isoDateTime',
                    displayFormat: null,
                    outputFormat: null,
                    min: null,
                    max: null,
                    skipOptionalPartCharacter: '',
                    i18n: {
                      dayNames: [
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat',
                        'Sun',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday',
                      ],
                      monthNames: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                      ],
                      ordinalSuffix: ['st', 'nd', 'rd', 'th'],
                    },
                    preValidation: function (e, t, i, a, n, r, o, l) {
                      if (l) return !0
                      if (isNaN(i) && e[t] !== i) {
                        var s = O(t, n)
                        if (
                          s.nextMatch &&
                          s.nextMatch[0] === i &&
                          s.targetMatch[0].length > 1
                        ) {
                          var u = g[s.targetMatch[0]][0]
                          if (new RegExp(u).test('0' + e[t - 1]))
                            return (
                              (e[t] = e[t - 1]),
                              (e[t - 1] = '0'),
                              {
                                fuzzy: !0,
                                buffer: e,
                                refreshFromBuffer: {
                                  start: t - 1,
                                  end: t + 1,
                                },
                                pos: t + 1,
                              }
                            )
                        }
                      }
                      return !0
                    },
                    postValidation: function (e, t, i, a, n, r, o, s) {
                      var u, c
                      if (o) return !0
                      if (
                        !1 === a &&
                        ((((u = O(t + 1, n)).targetMatch &&
                          u.targetMatchIndex === t &&
                          u.targetMatch[0].length > 1 &&
                          void 0 !== g[u.targetMatch[0]]) ||
                          ((u = O(t + 2, n)).targetMatch &&
                            u.targetMatchIndex === t + 1 &&
                            u.targetMatch[0].length > 1 &&
                            void 0 !== g[u.targetMatch[0]])) &&
                          (c = g[u.targetMatch[0]][0]),
                        void 0 !== c &&
                          (void 0 !== r.validPositions[t + 1] &&
                          new RegExp(c).test(i + '0')
                            ? ((e[t] = i),
                              (e[t + 1] = '0'),
                              (a = {
                                pos: t + 2,
                                caret: t,
                              }))
                            : new RegExp(c).test('0' + i) &&
                              ((e[t] = '0'),
                              (e[t + 1] = i),
                              (a = {
                                pos: t + 2,
                              }))),
                        !1 === a)
                      )
                        return a
                      if (
                        (a.fuzzy && ((e = a.buffer), (t = a.pos)),
                        (u = O(t, n)).targetMatch &&
                          u.targetMatch[0] &&
                          void 0 !== g[u.targetMatch[0]])
                      ) {
                        var f = g[u.targetMatch[0]]
                        c = f[0]
                        var d = e.slice(
                          u.targetMatchIndex,
                          u.targetMatchIndex + u.targetMatch[0].length,
                        )
                        if (
                          (!1 === new RegExp(c).test(d.join('')) &&
                            2 === u.targetMatch[0].length &&
                            r.validPositions[u.targetMatchIndex] &&
                            r.validPositions[u.targetMatchIndex + 1] &&
                            (r.validPositions[u.targetMatchIndex + 1].input =
                              '0'),
                          'year' == f[2])
                        )
                          for (
                            var p = l.getMaskTemplate.call(
                                this,
                                !1,
                                1,
                                void 0,
                                !0,
                              ),
                              h = t + 1;
                            h < e.length;
                            h++
                          )
                            (e[h] = p[h]), delete r.validPositions[h]
                      }
                      var m = a,
                        k = w(e.join(''), n.inputFormat, n)
                      return (
                        m &&
                          k.date.getTime() == k.date.getTime() &&
                          (n.prefillYear &&
                            (m = (function (e, t, i) {
                              if (e.year !== e.rawyear) {
                                var a = v.toString(),
                                  n = e.rawyear.replace(/[^0-9]/g, ''),
                                  r = a.slice(0, n.length),
                                  o = a.slice(n.length)
                                if (2 === n.length && n === r) {
                                  var l = new Date(v, e.month - 1, e.day)
                                  e.day == l.getDate() &&
                                    (!i.max ||
                                      i.max.date.getTime() >= l.getTime()) &&
                                    (e.date.setFullYear(v),
                                    (e.year = a),
                                    (t.insert = [
                                      {
                                        pos: t.pos + 1,
                                        c: o[0],
                                      },
                                      {
                                        pos: t.pos + 2,
                                        c: o[1],
                                      },
                                    ]))
                                }
                              }
                              return t
                            })(k, m, n)),
                          (m = (function (e, t, i, a, n) {
                            if (!t) return t
                            if (
                              t &&
                              i.min &&
                              i.min.date.getTime() == i.min.date.getTime()
                            ) {
                              var r
                              for (
                                e.reset(), P(i).lastIndex = 0;
                                (r = P(i).exec(i.inputFormat));

                              ) {
                                var o
                                if ((o = x(r)) && o[3]) {
                                  for (
                                    var l = o[1],
                                      s = e[o[2]],
                                      u = i.min[o[2]],
                                      c = i.max ? i.max[o[2]] : u,
                                      f = [],
                                      d = !1,
                                      p = 0;
                                    p < u.length;
                                    p++
                                  )
                                    void 0 !== a.validPositions[p + r.index] ||
                                    d
                                      ? ((f[p] = s[p]), (d = d || s[p] > u[p]))
                                      : ((f[p] = u[p]),
                                        'year' === o[2] &&
                                          s.length - 1 == p &&
                                          u != c &&
                                          (f = (parseInt(f.join('')) + 1)
                                            .toString()
                                            .split('')),
                                        'ampm' === o[2] &&
                                          u != c &&
                                          i.min.date.getTime() >
                                            e.date.getTime() &&
                                          (f[p] = c[p]))
                                  l.call(e._date, f.join(''))
                                }
                              }
                              ;(t = i.min.date.getTime() <= e.date.getTime()),
                                e.reInit()
                            }
                            return (
                              t &&
                                i.max &&
                                i.max.date.getTime() == i.max.date.getTime() &&
                                (t = i.max.date.getTime() >= e.date.getTime()),
                              t
                            )
                          })(k, (m = E.call(this, k, m, n)), n, r))),
                        void 0 !== t && m && a.pos !== t
                          ? {
                              buffer: S(n.inputFormat, k, n).split(''),
                              refreshFromBuffer: {
                                start: t,
                                end: a.pos,
                              },
                              pos: a.caret || a.pos,
                            }
                          : m
                      )
                    },
                    onKeyDown: function (e, t, i, a) {
                      e.ctrlKey &&
                        e.keyCode === n.default.RIGHT &&
                        (this.inputmask._valueSet(M(new Date(), a)),
                        p(this).trigger('setvalue'))
                    },
                    onUnMask: function (e, t, i) {
                      return t
                        ? S(i.outputFormat, w(e, i.inputFormat, i), i, !0)
                        : t
                    },
                    casing: function (e, t, i, a) {
                      return 0 == t.nativeDef.indexOf('[ap]')
                        ? e.toLowerCase()
                        : 0 == t.nativeDef.indexOf('[AP]')
                        ? e.toUpperCase()
                        : e
                    },
                    onBeforeMask: function (e, t) {
                      return (
                        '[object Date]' === Object.prototype.toString.call(e) &&
                          (e = M(e, t)),
                        e
                      )
                    },
                    insertMode: !1,
                    shiftPositions: !1,
                    keepStatic: !1,
                    inputmode: 'numeric',
                    prefillYear: !0,
                  },
                })
              },
              3851: function (e, t, i) {
                var a,
                  n =
                    (a = i(2394)) && a.__esModule
                      ? a
                      : {
                          default: a,
                        },
                  r = i(8711),
                  o = i(4713)
                n.default.extendDefinitions({
                  A: {
                    validator: '[A-Za-zА-яЁёÀ-ÿµ]',
                    casing: 'upper',
                  },
                  '&': {
                    validator: '[0-9A-Za-zА-яЁёÀ-ÿµ]',
                    casing: 'upper',
                  },
                  '#': {
                    validator: '[0-9A-Fa-f]',
                    casing: 'upper',
                  },
                })
                var l = new RegExp('25[0-5]|2[0-4][0-9]|[01][0-9][0-9]')
                function s(e, t, i, a, n) {
                  return (
                    i - 1 > -1 && '.' !== t.buffer[i - 1]
                      ? ((e = t.buffer[i - 1] + e),
                        (e =
                          i - 2 > -1 && '.' !== t.buffer[i - 2]
                            ? t.buffer[i - 2] + e
                            : '0' + e))
                      : (e = '00' + e),
                    l.test(e)
                  )
                }
                n.default.extendAliases({
                  cssunit: {
                    regex:
                      '[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)',
                  },
                  url: {
                    regex: '(https?|ftp)://.*',
                    autoUnmask: !1,
                    keepStatic: !1,
                    tabThrough: !0,
                  },
                  ip: {
                    mask: 'i{1,3}.j{1,3}.k{1,3}.l{1,3}',
                    definitions: {
                      i: {
                        validator: s,
                      },
                      j: {
                        validator: s,
                      },
                      k: {
                        validator: s,
                      },
                      l: {
                        validator: s,
                      },
                    },
                    onUnMask: function (e, t, i) {
                      return e
                    },
                    inputmode: 'decimal',
                    substitutes: {
                      ',': '.',
                    },
                  },
                  email: {
                    mask: function (e) {
                      var t =
                          '*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]',
                        i = t
                      if (e.separator)
                        for (var a = 0; a < e.quantifier; a++)
                          i += '['.concat(e.separator).concat(t, ']')
                      return i
                    },
                    greedy: !1,
                    casing: 'lower',
                    separator: null,
                    quantifier: 5,
                    skipOptionalPartCharacter: '',
                    onBeforePaste: function (e, t) {
                      return (e = e.toLowerCase()).replace('mailto:', '')
                    },
                    definitions: {
                      '*': {
                        validator:
                          "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]",
                      },
                      '-': {
                        validator: '[0-9A-Za-z-]',
                      },
                    },
                    onUnMask: function (e, t, i) {
                      return e
                    },
                    inputmode: 'email',
                  },
                  mac: {
                    mask: '##:##:##:##:##:##',
                  },
                  vin: {
                    mask: 'V{13}9{4}',
                    definitions: {
                      V: {
                        validator: '[A-HJ-NPR-Za-hj-npr-z\\d]',
                        casing: 'upper',
                      },
                    },
                    clearIncomplete: !0,
                    autoUnmask: !0,
                  },
                  ssn: {
                    mask: '999-99-9999',
                    postValidation: function (e, t, i, a, n, l, s) {
                      var u = o.getMaskTemplate.call(
                        this,
                        !0,
                        r.getLastValidPosition.call(this),
                        !0,
                        !0,
                      )
                      return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(
                        u.join(''),
                      )
                    },
                  },
                })
              },
              207: function (e, t, i) {
                var a = l(i(2394)),
                  n = l(i(5581)),
                  r = l(i(7184)),
                  o = i(8711)
                function l(e) {
                  return e && e.__esModule
                    ? e
                    : {
                        default: e,
                      }
                }
                var s = a.default.dependencyLib
                function u(e, t) {
                  for (var i = '', n = 0; n < e.length; n++)
                    a.default.prototype.definitions[e.charAt(n)] ||
                    t.definitions[e.charAt(n)] ||
                    t.optionalmarker[0] === e.charAt(n) ||
                    t.optionalmarker[1] === e.charAt(n) ||
                    t.quantifiermarker[0] === e.charAt(n) ||
                    t.quantifiermarker[1] === e.charAt(n) ||
                    t.groupmarker[0] === e.charAt(n) ||
                    t.groupmarker[1] === e.charAt(n) ||
                    t.alternatormarker === e.charAt(n)
                      ? (i += '\\' + e.charAt(n))
                      : (i += e.charAt(n))
                  return i
                }
                function c(e, t, i, a) {
                  if (e.length > 0 && t > 0 && (!i.digitsOptional || a)) {
                    var n = e.indexOf(i.radixPoint),
                      r = !1
                    i.negationSymbol.back === e[e.length - 1] &&
                      ((r = !0), e.length--),
                      -1 === n && (e.push(i.radixPoint), (n = e.length - 1))
                    for (var o = 1; o <= t; o++)
                      isFinite(e[n + o]) || (e[n + o] = '0')
                  }
                  return r && e.push(i.negationSymbol.back), e
                }
                function f(e, t) {
                  var i = 0
                  if ('+' === e) {
                    for (i in t.validPositions);
                    i = o.seekNext.call(this, parseInt(i))
                  }
                  for (var a in t.tests)
                    if ((a = parseInt(a)) >= i)
                      for (var n = 0, r = t.tests[a].length; n < r; n++)
                        if (
                          (void 0 === t.validPositions[a] || '-' === e) &&
                          t.tests[a][n].match.def === e
                        )
                          return (
                            a +
                            (void 0 !== t.validPositions[a] && '-' !== e
                              ? 1
                              : 0)
                          )
                  return i
                }
                function d(e, t) {
                  var i = -1
                  for (var a in t.validPositions) {
                    var n = t.validPositions[a]
                    if (n && n.match.def === e) {
                      i = parseInt(a)
                      break
                    }
                  }
                  return i
                }
                function p(e, t, i, a, n) {
                  var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1,
                    o =
                      (-1 !== r || (a && n.jitMasking)) &&
                      new RegExp(n.definitions[9].validator).test(e)
                  return n._radixDance &&
                    -1 !== r &&
                    o &&
                    null == t.validPositions[r]
                    ? {
                        insert: {
                          pos: r === i ? r + 1 : r,
                          c: n.radixPoint,
                        },
                        pos: i,
                      }
                    : o
                }
                a.default.extendAliases({
                  numeric: {
                    mask: function (e) {
                      ;(e.repeat = 0),
                        e.groupSeparator === e.radixPoint &&
                          e.digits &&
                          '0' !== e.digits &&
                          ('.' === e.radixPoint
                            ? (e.groupSeparator = ',')
                            : ',' === e.radixPoint
                            ? (e.groupSeparator = '.')
                            : (e.groupSeparator = '')),
                        ' ' === e.groupSeparator &&
                          (e.skipOptionalPartCharacter = void 0),
                        e.placeholder.length > 1 &&
                          (e.placeholder = e.placeholder.charAt(0)),
                        'radixFocus' === e.positionCaretOnClick &&
                          '' === e.placeholder &&
                          (e.positionCaretOnClick = 'lvp')
                      var t = '0',
                        i = e.radixPoint
                      !0 === e.numericInput && void 0 === e.__financeInput
                        ? ((t = '1'),
                          (e.positionCaretOnClick =
                            'radixFocus' === e.positionCaretOnClick
                              ? 'lvp'
                              : e.positionCaretOnClick),
                          (e.digitsOptional = !1),
                          isNaN(e.digits) && (e.digits = 2),
                          (e._radixDance = !1),
                          (i = ',' === e.radixPoint ? '?' : '!'),
                          '' !== e.radixPoint &&
                            void 0 === e.definitions[i] &&
                            ((e.definitions[i] = {}),
                            (e.definitions[i].validator =
                              '[' + e.radixPoint + ']'),
                            (e.definitions[i].placeholder = e.radixPoint),
                            (e.definitions[i].static = !0),
                            (e.definitions[i].generated = !0)))
                        : ((e.__financeInput = !1), (e.numericInput = !0))
                      var a,
                        n = '[+]'
                      if (
                        ((n += u(e.prefix, e)),
                        '' !== e.groupSeparator
                          ? (void 0 === e.definitions[e.groupSeparator] &&
                              ((e.definitions[e.groupSeparator] = {}),
                              (e.definitions[e.groupSeparator].validator =
                                '[' + e.groupSeparator + ']'),
                              (e.definitions[e.groupSeparator].placeholder =
                                e.groupSeparator),
                              (e.definitions[e.groupSeparator].static = !0),
                              (e.definitions[e.groupSeparator].generated = !0)),
                            (n += e._mask(e)))
                          : (n += '9{+}'),
                        void 0 !== e.digits && 0 !== e.digits)
                      ) {
                        var o = e.digits.toString().split(',')
                        isFinite(o[0]) && o[1] && isFinite(o[1])
                          ? (n += i + t + '{' + e.digits + '}')
                          : (isNaN(e.digits) || parseInt(e.digits) > 0) &&
                            (e.digitsOptional || e.jitMasking
                              ? ((a = n + i + t + '{0,' + e.digits + '}'),
                                (e.keepStatic = !0))
                              : (n += i + t + '{' + e.digits + '}'))
                      } else e.inputmode = 'numeric'
                      return (
                        (n += u(e.suffix, e)),
                        (n += '[-]'),
                        a && (n = [a + u(e.suffix, e) + '[-]', n]),
                        (e.greedy = !1),
                        (function (e) {
                          void 0 === e.parseMinMaxOptions &&
                            (null !== e.min &&
                              ((e.min = e.min
                                .toString()
                                .replace(
                                  new RegExp(
                                    (0, r.default)(e.groupSeparator),
                                    'g',
                                  ),
                                  '',
                                )),
                              ',' === e.radixPoint &&
                                (e.min = e.min.replace(e.radixPoint, '.')),
                              (e.min = isFinite(e.min)
                                ? parseFloat(e.min)
                                : NaN),
                              isNaN(e.min) && (e.min = Number.MIN_VALUE)),
                            null !== e.max &&
                              ((e.max = e.max
                                .toString()
                                .replace(
                                  new RegExp(
                                    (0, r.default)(e.groupSeparator),
                                    'g',
                                  ),
                                  '',
                                )),
                              ',' === e.radixPoint &&
                                (e.max = e.max.replace(e.radixPoint, '.')),
                              (e.max = isFinite(e.max)
                                ? parseFloat(e.max)
                                : NaN),
                              isNaN(e.max) && (e.max = Number.MAX_VALUE)),
                            (e.parseMinMaxOptions = 'done'))
                        })(e),
                        '' !== e.radixPoint &&
                          (e.substitutes['.' == e.radixPoint ? ',' : '.'] =
                            e.radixPoint),
                        n
                      )
                    },
                    _mask: function (e) {
                      return '(' + e.groupSeparator + '999){+|1}'
                    },
                    digits: '*',
                    digitsOptional: !0,
                    enforceDigitsOnBlur: !1,
                    radixPoint: '.',
                    positionCaretOnClick: 'radixFocus',
                    _radixDance: !0,
                    groupSeparator: '',
                    allowMinus: !0,
                    negationSymbol: {
                      front: '-',
                      back: '',
                    },
                    prefix: '',
                    suffix: '',
                    min: null,
                    max: null,
                    SetMaxOnOverflow: !1,
                    step: 1,
                    inputType: 'text',
                    unmaskAsNumber: !1,
                    roundingFN: Math.round,
                    inputmode: 'decimal',
                    shortcuts: {
                      k: '1000',
                      m: '1000000',
                    },
                    placeholder: '0',
                    greedy: !1,
                    rightAlign: !0,
                    insertMode: !0,
                    autoUnmask: !1,
                    skipOptionalPartCharacter: '',
                    usePrototypeDefinitions: !1,
                    stripLeadingZeroes: !0,
                    definitions: {
                      0: {
                        validator: p,
                      },
                      1: {
                        validator: p,
                        definitionSymbol: '9',
                      },
                      9: {
                        validator: '[0-9０-９٠-٩۰-۹]',
                        definitionSymbol: '*',
                      },
                      '+': {
                        validator: function (e, t, i, a, n) {
                          return (
                            n.allowMinus &&
                            ('-' === e || e === n.negationSymbol.front)
                          )
                        },
                      },
                      '-': {
                        validator: function (e, t, i, a, n) {
                          return n.allowMinus && e === n.negationSymbol.back
                        },
                      },
                    },
                    preValidation: function (e, t, i, a, n, r, o, l) {
                      if (!1 !== n.__financeInput && i === n.radixPoint)
                        return !1
                      var s = e.indexOf(n.radixPoint),
                        u = t
                      if (
                        ((t = (function (e, t, i, a, n) {
                          return (
                            n._radixDance &&
                              n.numericInput &&
                              t !== n.negationSymbol.back &&
                              e <= i &&
                              (i > 0 || t == n.radixPoint) &&
                              (void 0 === a.validPositions[e - 1] ||
                                a.validPositions[e - 1].input !==
                                  n.negationSymbol.back) &&
                              (e -= 1),
                            e
                          )
                        })(t, i, s, r, n)),
                        '-' === i || i === n.negationSymbol.front)
                      ) {
                        if (!0 !== n.allowMinus) return !1
                        var c = !1,
                          p = d('+', r),
                          h = d('-', r)
                        return (
                          -1 !== p && (c = [p, h]),
                          !1 !== c
                            ? {
                                remove: c,
                                caret: u - n.negationSymbol.back.length,
                              }
                            : {
                                insert: [
                                  {
                                    pos: f.call(this, '+', r),
                                    c: n.negationSymbol.front,
                                    fromIsValid: !0,
                                  },
                                  {
                                    pos: f.call(this, '-', r),
                                    c: n.negationSymbol.back,
                                    fromIsValid: void 0,
                                  },
                                ],
                                caret: u + n.negationSymbol.back.length,
                              }
                        )
                      }
                      if (i === n.groupSeparator)
                        return {
                          caret: u,
                        }
                      if (l) return !0
                      if (
                        -1 !== s &&
                        !0 === n._radixDance &&
                        !1 === a &&
                        i === n.radixPoint &&
                        void 0 !== n.digits &&
                        (isNaN(n.digits) || parseInt(n.digits) > 0) &&
                        s !== t
                      )
                        return {
                          caret: n._radixDance && t === s - 1 ? s + 1 : s,
                        }
                      if (!1 === n.__financeInput)
                        if (a) {
                          if (n.digitsOptional)
                            return {
                              rewritePosition: o.end,
                            }
                          if (!n.digitsOptional) {
                            if (o.begin > s && o.end <= s)
                              return i === n.radixPoint
                                ? {
                                    insert: {
                                      pos: s + 1,
                                      c: '0',
                                      fromIsValid: !0,
                                    },
                                    rewritePosition: s,
                                  }
                                : {
                                    rewritePosition: s + 1,
                                  }
                            if (o.begin < s)
                              return {
                                rewritePosition: o.begin - 1,
                              }
                          }
                        } else if (
                          !n.showMaskOnHover &&
                          !n.showMaskOnFocus &&
                          !n.digitsOptional &&
                          n.digits > 0 &&
                          '' === this.__valueGet.call(this.el)
                        )
                          return {
                            rewritePosition: s,
                          }
                      return {
                        rewritePosition: t,
                      }
                    },
                    postValidation: function (e, t, i, a, n, r, o) {
                      if (!1 === a) return a
                      if (o) return !0
                      if (null !== n.min || null !== n.max) {
                        var l = n.onUnMask(
                          e.slice().reverse().join(''),
                          void 0,
                          s.extend({}, n, {
                            unmaskAsNumber: !0,
                          }),
                        )
                        if (
                          null !== n.min &&
                          l < n.min &&
                          (l.toString().length > n.min.toString().length ||
                            l < 0)
                        )
                          return !1
                        if (null !== n.max && l > n.max)
                          return (
                            !!n.SetMaxOnOverflow && {
                              refreshFromBuffer: !0,
                              buffer: c(
                                n.max
                                  .toString()
                                  .replace('.', n.radixPoint)
                                  .split(''),
                                n.digits,
                                n,
                              ).reverse(),
                            }
                          )
                      }
                      return a
                    },
                    onUnMask: function (e, t, i) {
                      if ('' === t && !0 === i.nullable) return t
                      var a = e.replace(i.prefix, '')
                      return (
                        (a = (a = a.replace(i.suffix, '')).replace(
                          new RegExp((0, r.default)(i.groupSeparator), 'g'),
                          '',
                        )),
                        '' !== i.placeholder.charAt(0) &&
                          (a = a.replace(
                            new RegExp(i.placeholder.charAt(0), 'g'),
                            '0',
                          )),
                        i.unmaskAsNumber
                          ? ('' !== i.radixPoint &&
                              -1 !== a.indexOf(i.radixPoint) &&
                              (a = a.replace(
                                r.default.call(this, i.radixPoint),
                                '.',
                              )),
                            (a = (a = a.replace(
                              new RegExp(
                                '^' + (0, r.default)(i.negationSymbol.front),
                              ),
                              '-',
                            )).replace(
                              new RegExp(
                                (0, r.default)(i.negationSymbol.back) + '$',
                              ),
                              '',
                            )),
                            Number(a))
                          : a
                      )
                    },
                    isComplete: function (e, t) {
                      var i = (t.numericInput ? e.slice().reverse() : e).join(
                        '',
                      )
                      return (
                        (i = (i = (i = (i = (i = i.replace(
                          new RegExp(
                            '^' + (0, r.default)(t.negationSymbol.front),
                          ),
                          '-',
                        )).replace(
                          new RegExp(
                            (0, r.default)(t.negationSymbol.back) + '$',
                          ),
                          '',
                        )).replace(t.prefix, '')).replace(
                          t.suffix,
                          '',
                        )).replace(
                          new RegExp(
                            (0, r.default)(t.groupSeparator) + '([0-9]{3})',
                            'g',
                          ),
                          '$1',
                        )),
                        ',' === t.radixPoint &&
                          (i = i.replace((0, r.default)(t.radixPoint), '.')),
                        isFinite(i)
                      )
                    },
                    onBeforeMask: function (e, t) {
                      var i = t.radixPoint || ','
                      isFinite(t.digits) && (t.digits = parseInt(t.digits)),
                        ('number' != typeof e && 'number' !== t.inputType) ||
                          '' === i ||
                          (e = e.toString().replace('.', i))
                      var a =
                          '-' === e.charAt(0) ||
                          e.charAt(0) === t.negationSymbol.front,
                        n = e.split(i),
                        o = n[0].replace(/[^\-0-9]/g, ''),
                        l = n.length > 1 ? n[1].replace(/[^0-9]/g, '') : '',
                        s = n.length > 1
                      e = o + ('' !== l ? i + l : l)
                      var u = 0
                      if (
                        '' !== i &&
                        ((u = t.digitsOptional
                          ? t.digits < l.length
                            ? t.digits
                            : l.length
                          : t.digits),
                        '' !== l || !t.digitsOptional)
                      ) {
                        var f = Math.pow(10, u || 1)
                        ;(e = e.replace((0, r.default)(i), '.')),
                          isNaN(parseFloat(e)) ||
                            (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(
                              u,
                            )),
                          (e = e.toString().replace('.', i))
                      }
                      if (
                        (0 === t.digits &&
                          -1 !== e.indexOf(i) &&
                          (e = e.substring(0, e.indexOf(i))),
                        null !== t.min || null !== t.max)
                      ) {
                        var d = e.toString().replace(i, '.')
                        null !== t.min && d < t.min
                          ? (e = t.min.toString().replace('.', i))
                          : null !== t.max &&
                            d > t.max &&
                            (e = t.max.toString().replace('.', i))
                      }
                      return (
                        a && '-' !== e.charAt(0) && (e = '-' + e),
                        c(e.toString().split(''), u, t, s).join('')
                      )
                    },
                    onBeforeWrite: function (e, t, i, a) {
                      function n(e, t) {
                        if (!1 !== a.__financeInput || t) {
                          var i = e.indexOf(a.radixPoint)
                          ;-1 !== i && e.splice(i, 1)
                        }
                        if ('' !== a.groupSeparator)
                          for (; -1 !== (i = e.indexOf(a.groupSeparator)); )
                            e.splice(i, 1)
                        return e
                      }
                      var o, l
                      if (
                        a.stripLeadingZeroes &&
                        (l = (function (e, t) {
                          var i = new RegExp(
                              '(^' +
                                ('' !== t.negationSymbol.front
                                  ? (0, r.default)(t.negationSymbol.front) + '?'
                                  : '') +
                                (0, r.default)(t.prefix) +
                                ')(.*)(' +
                                (0, r.default)(t.suffix) +
                                ('' != t.negationSymbol.back
                                  ? (0, r.default)(t.negationSymbol.back) + '?'
                                  : '') +
                                '$)',
                            ).exec(e.slice().reverse().join('')),
                            a = i ? i[2] : '',
                            n = !1
                          return (
                            a &&
                              ((a = a.split(t.radixPoint.charAt(0))[0]),
                              (n = new RegExp(
                                '^[0' + t.groupSeparator + ']*',
                              ).exec(a))),
                            !(
                              !n ||
                              !(
                                n[0].length > 1 ||
                                (n[0].length > 0 && n[0].length < a.length)
                              )
                            ) && n
                          )
                        })(t, a))
                      )
                        for (
                          var u =
                              t
                                .join('')
                                .lastIndexOf(
                                  l[0].split('').reverse().join(''),
                                ) - (l[0] == l.input ? 0 : 1),
                            f = l[0] == l.input ? 1 : 0,
                            d = l[0].length - f;
                          d > 0;
                          d--
                        )
                          delete this.maskset.validPositions[u + d],
                            delete t[u + d]
                      if (e)
                        switch (e.type) {
                          case 'blur':
                          case 'checkval':
                            if (null !== a.min) {
                              var p = a.onUnMask(
                                t.slice().reverse().join(''),
                                void 0,
                                s.extend({}, a, {
                                  unmaskAsNumber: !0,
                                }),
                              )
                              if (null !== a.min && p < a.min)
                                return {
                                  refreshFromBuffer: !0,
                                  buffer: c(
                                    a.min
                                      .toString()
                                      .replace('.', a.radixPoint)
                                      .split(''),
                                    a.digits,
                                    a,
                                  ).reverse(),
                                }
                            }
                            if (t[t.length - 1] === a.negationSymbol.front) {
                              var h = new RegExp(
                                '(^' +
                                  ('' != a.negationSymbol.front
                                    ? (0, r.default)(a.negationSymbol.front) +
                                      '?'
                                    : '') +
                                  (0, r.default)(a.prefix) +
                                  ')(.*)(' +
                                  (0, r.default)(a.suffix) +
                                  ('' != a.negationSymbol.back
                                    ? (0, r.default)(a.negationSymbol.back) +
                                      '?'
                                    : '') +
                                  '$)',
                              ).exec(n(t.slice(), !0).reverse().join(''))
                              0 == (h ? h[2] : '') &&
                                (o = {
                                  refreshFromBuffer: !0,
                                  buffer: [0],
                                })
                            } else if ('' !== a.radixPoint)
                              t.indexOf(a.radixPoint) === a.suffix.length &&
                                (o && o.buffer
                                  ? o.buffer.splice(0, 1 + a.suffix.length)
                                  : (t.splice(0, 1 + a.suffix.length),
                                    (o = {
                                      refreshFromBuffer: !0,
                                      buffer: n(t),
                                    })))
                            if (a.enforceDigitsOnBlur) {
                              var v =
                                ((o = o || {}) && o.buffer) ||
                                t.slice().reverse()
                              ;(o.refreshFromBuffer = !0),
                                (o.buffer = c(v, a.digits, a, !0).reverse())
                            }
                        }
                      return o
                    },
                    onKeyDown: function (e, t, i, a) {
                      var r,
                        o,
                        l = s(this),
                        u = String.fromCharCode(e.keyCode).toLowerCase()
                      if ((o = a.shortcuts && a.shortcuts[u]) && o.length > 1)
                        return (
                          this.inputmask.__valueSet.call(
                            this,
                            parseFloat(this.inputmask.unmaskedvalue()) *
                              parseInt(o),
                          ),
                          l.trigger('setvalue'),
                          !1
                        )
                      if (e.ctrlKey)
                        switch (e.keyCode) {
                          case n.default.UP:
                            return (
                              this.inputmask.__valueSet.call(
                                this,
                                parseFloat(this.inputmask.unmaskedvalue()) +
                                  parseInt(a.step),
                              ),
                              l.trigger('setvalue'),
                              !1
                            )

                          case n.default.DOWN:
                            return (
                              this.inputmask.__valueSet.call(
                                this,
                                parseFloat(this.inputmask.unmaskedvalue()) -
                                  parseInt(a.step),
                              ),
                              l.trigger('setvalue'),
                              !1
                            )
                        }
                      if (
                        !e.shiftKey &&
                        (e.keyCode === n.default.DELETE ||
                          e.keyCode === n.default.BACKSPACE ||
                          e.keyCode === n.default.BACKSPACE_SAFARI) &&
                        i.begin !== t.length
                      ) {
                        if (
                          t[
                            e.keyCode === n.default.DELETE ? i.begin - 1 : i.end
                          ] === a.negationSymbol.front
                        )
                          return (
                            (r = t.slice().reverse()),
                            '' !== a.negationSymbol.front && r.shift(),
                            '' !== a.negationSymbol.back && r.pop(),
                            l.trigger('setvalue', [r.join(''), i.begin]),
                            !1
                          )
                        if (!0 === a._radixDance) {
                          var f = t.indexOf(a.radixPoint)
                          if (a.digitsOptional) {
                            if (0 === f)
                              return (
                                (r = t.slice().reverse()).pop(),
                                l.trigger('setvalue', [
                                  r.join(''),
                                  i.begin >= r.length ? r.length : i.begin,
                                ]),
                                !1
                              )
                          } else if (
                            -1 !== f &&
                            (i.begin < f ||
                              i.end < f ||
                              (e.keyCode === n.default.DELETE && i.begin === f))
                          )
                            return (
                              i.begin !== i.end ||
                                (e.keyCode !== n.default.BACKSPACE &&
                                  e.keyCode !== n.default.BACKSPACE_SAFARI) ||
                                i.begin++,
                              (r = t.slice().reverse()).splice(
                                r.length - i.begin,
                                i.begin - i.end + 1,
                              ),
                              (r = c(r, a.digits, a).join('')),
                              l.trigger('setvalue', [
                                r,
                                i.begin >= r.length ? f + 1 : i.begin,
                              ]),
                              !1
                            )
                        }
                      }
                    },
                  },
                  currency: {
                    prefix: '',
                    groupSeparator: ',',
                    alias: 'numeric',
                    digits: 2,
                    digitsOptional: !1,
                  },
                  decimal: {
                    alias: 'numeric',
                  },
                  integer: {
                    alias: 'numeric',
                    inputmode: 'numeric',
                    digits: 0,
                  },
                  percentage: {
                    alias: 'numeric',
                    min: 0,
                    max: 100,
                    suffix: ' %',
                    digits: 0,
                    allowMinus: !1,
                  },
                  indianns: {
                    alias: 'numeric',
                    _mask: function (e) {
                      return (
                        '(' +
                        e.groupSeparator +
                        '99){*|1}(' +
                        e.groupSeparator +
                        '999){1|1}'
                      )
                    },
                    groupSeparator: ',',
                    radixPoint: '.',
                    placeholder: '0',
                    digits: 2,
                    digitsOptional: !1,
                  },
                })
              },
              9380: function (e, t, i) {
                var a
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.default = void 0)
                var n = ((a = i(8741)) && a.__esModule
                  ? a
                  : {
                      default: a,
                    }
                ).default
                  ? window
                  : {}
                t.default = n
              },
              7760: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.HandleNativePlaceholder = function (e, t) {
                    var i = e ? e.inputmask : this
                    if (s.ie) {
                      if (
                        e.inputmask._valueGet() !== t &&
                        (e.placeholder !== t || '' === e.placeholder)
                      ) {
                        var a = o.getBuffer.call(i).slice(),
                          n = e.inputmask._valueGet()
                        if (n !== t) {
                          var r = o.getLastValidPosition.call(i)
                          ;-1 === r &&
                          n === o.getBufferTemplate.call(i).join('')
                            ? (a = [])
                            : -1 !== r && f.call(i, a),
                            p(e, a)
                        }
                      }
                    } else
                      e.placeholder !== t &&
                        ((e.placeholder = t),
                        '' === e.placeholder &&
                          e.removeAttribute('placeholder'))
                  }),
                  (t.applyInputValue = c),
                  (t.checkVal = d),
                  (t.clearOptionalTail = f),
                  (t.unmaskedvalue = function (e) {
                    var t = e ? e.inputmask : this,
                      i = t.opts,
                      a = t.maskset
                    if (e) {
                      if (void 0 === e.inputmask) return e.value
                      e.inputmask &&
                        e.inputmask.refreshValue &&
                        c(e, e.inputmask._valueGet(!0))
                    }
                    var n = [],
                      r = a.validPositions
                    for (var l in r)
                      r[l] &&
                        r[l].match &&
                        (1 != r[l].match.static ||
                          (Array.isArray(a.metadata) &&
                            !0 !== r[l].generatedInput)) &&
                        n.push(r[l].input)
                    var s =
                      0 === n.length ? '' : (t.isRTL ? n.reverse() : n).join('')
                    if ('function' == typeof i.onUnMask) {
                      var u = (
                        t.isRTL
                          ? o.getBuffer.call(t).slice().reverse()
                          : o.getBuffer.call(t)
                      ).join('')
                      s = i.onUnMask.call(t, u, s, i)
                    }
                    return s
                  }),
                  (t.writeBuffer = p)
                var a,
                  n =
                    (a = i(5581)) && a.__esModule
                      ? a
                      : {
                          default: a,
                        },
                  r = i(4713),
                  o = i(8711),
                  l = i(7215),
                  s = i(9845),
                  u = i(6030)
                function c(e, t) {
                  var i = e ? e.inputmask : this,
                    a = i.opts
                  ;(e.inputmask.refreshValue = !1),
                    'function' == typeof a.onBeforeMask &&
                      (t = a.onBeforeMask.call(i, t, a) || t),
                    d(e, !0, !1, (t = t.toString().split(''))),
                    (i.undoValue = i._valueGet(!0)),
                    (a.clearMaskOnLostFocus || a.clearIncomplete) &&
                      e.inputmask._valueGet() ===
                        o.getBufferTemplate.call(i).join('') &&
                      -1 === o.getLastValidPosition.call(i) &&
                      e.inputmask._valueSet('')
                }
                function f(e) {
                  e.length = 0
                  for (
                    var t,
                      i = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0);
                    void 0 !== (t = i.shift());

                  )
                    e.push(t)
                  return e
                }
                function d(e, t, i, a, n) {
                  var s = e ? e.inputmask : this,
                    c = s.maskset,
                    f = s.opts,
                    d = s.dependencyLib,
                    h = a.slice(),
                    v = '',
                    m = -1,
                    g = void 0,
                    k = f.skipOptionalPartCharacter
                  ;(f.skipOptionalPartCharacter = ''),
                    o.resetMaskSet.call(s),
                    (c.tests = {}),
                    (m = f.radixPoint
                      ? o.determineNewCaretPosition.call(
                          s,
                          {
                            begin: 0,
                            end: 0,
                          },
                          !1,
                          !1 === f.__financeInput ? 'radixFocus' : void 0,
                        ).begin
                      : 0),
                    (c.p = m),
                    (s.caretPos = {
                      begin: m,
                    })
                  var y = [],
                    b = s.caretPos
                  if (
                    (h.forEach(function (e, t) {
                      if (void 0 !== e) {
                        var a = new d.Event('_checkval')
                        ;(a.keyCode = e.toString().charCodeAt(0)), (v += e)
                        var n = o.getLastValidPosition.call(s, void 0, !0)
                        !(function (e, t) {
                          for (
                            var i = r.getMaskTemplate
                                .call(s, !0, 0)
                                .slice(e, o.seekNext.call(s, e, !1, !1))
                                .join('')
                                .replace(/'/g, ''),
                              a = i.indexOf(t);
                            a > 0 && ' ' === i[a - 1];

                          )
                            a--
                          var n =
                            0 === a &&
                            !o.isMask.call(s, e) &&
                            (r.getTest.call(s, e).match.nativeDef ===
                              t.charAt(0) ||
                              (!0 === r.getTest.call(s, e).match.static &&
                                r.getTest.call(s, e).match.nativeDef ===
                                  "'" + t.charAt(0)) ||
                              (' ' === r.getTest.call(s, e).match.nativeDef &&
                                (r.getTest.call(s, e + 1).match.nativeDef ===
                                  t.charAt(0) ||
                                  (!0 ===
                                    r.getTest.call(s, e + 1).match.static &&
                                    r.getTest.call(s, e + 1).match.nativeDef ===
                                      "'" + t.charAt(0)))))
                          if (!n && a > 0 && !o.isMask.call(s, e, !1, !0)) {
                            var l = o.seekNext.call(s, e)
                            s.caretPos.begin < l &&
                              (s.caretPos = {
                                begin: l,
                              })
                          }
                          return n
                        })(m, v)
                          ? (g = u.EventHandlers.keypressEvent.call(
                              s,
                              a,
                              !0,
                              !1,
                              i,
                              s.caretPos.begin,
                            )) && ((m = s.caretPos.begin + 1), (v = ''))
                          : (g = u.EventHandlers.keypressEvent.call(
                              s,
                              a,
                              !0,
                              !1,
                              i,
                              n + 1,
                            )),
                          g
                            ? (void 0 !== g.pos &&
                                c.validPositions[g.pos] &&
                                !0 === c.validPositions[g.pos].match.static &&
                                void 0 ===
                                  c.validPositions[g.pos].alternation &&
                                (y.push(g.pos),
                                s.isRTL || (g.forwardPosition = g.pos + 1)),
                              p.call(
                                s,
                                void 0,
                                o.getBuffer.call(s),
                                g.forwardPosition,
                                a,
                                !1,
                              ),
                              (s.caretPos = {
                                begin: g.forwardPosition,
                                end: g.forwardPosition,
                              }),
                              (b = s.caretPos))
                            : void 0 === c.validPositions[t] &&
                              h[t] === r.getPlaceholder.call(s, t) &&
                              o.isMask.call(s, t, !0)
                            ? s.caretPos.begin++
                            : (s.caretPos = b)
                      }
                    }),
                    y.length > 0)
                  ) {
                    var x,
                      P,
                      E = o.seekNext.call(s, -1, void 0, !1)
                    if (
                      (!l.isComplete.call(s, o.getBuffer.call(s)) &&
                        y.length <= E) ||
                      (l.isComplete.call(s, o.getBuffer.call(s)) &&
                        y.length > 0 &&
                        y.length !== E &&
                        0 === y[0])
                    )
                      for (var S = E; void 0 !== (x = y.shift()); ) {
                        var _ = new d.Event('_checkval')
                        if (
                          (((P = c.validPositions[x]).generatedInput = !0),
                          (_.keyCode = P.input.charCodeAt(0)),
                          (g = u.EventHandlers.keypressEvent.call(
                            s,
                            _,
                            !0,
                            !1,
                            i,
                            S,
                          )) &&
                            void 0 !== g.pos &&
                            g.pos !== x &&
                            c.validPositions[g.pos] &&
                            !0 === c.validPositions[g.pos].match.static)
                        )
                          y.push(g.pos)
                        else if (!g) break
                        S++
                      }
                  }
                  t &&
                    p.call(
                      s,
                      e,
                      o.getBuffer.call(s),
                      g ? g.forwardPosition : s.caretPos.begin,
                      n || new d.Event('checkval'),
                      n &&
                        (('input' === n.type &&
                          s.undoValue !== o.getBuffer.call(s).join('')) ||
                          'paste' === n.type),
                    ),
                    (f.skipOptionalPartCharacter = k)
                }
                function p(e, t, i, a, r) {
                  var s = e ? e.inputmask : this,
                    u = s.opts,
                    c = s.dependencyLib
                  if (a && 'function' == typeof u.onBeforeWrite) {
                    var f = u.onBeforeWrite.call(s, a, t, i, u)
                    if (f) {
                      if (f.refreshFromBuffer) {
                        var d = f.refreshFromBuffer
                        l.refreshFromBuffer.call(
                          s,
                          !0 === d ? d : d.start,
                          d.end,
                          f.buffer || t,
                        ),
                          (t = o.getBuffer.call(s, !0))
                      }
                      void 0 !== i && (i = void 0 !== f.caret ? f.caret : i)
                    }
                  }
                  if (
                    void 0 !== e &&
                    (e.inputmask._valueSet(t.join('')),
                    void 0 === i ||
                      (void 0 !== a && 'blur' === a.type) ||
                      o.caret.call(
                        s,
                        e,
                        i,
                        void 0,
                        void 0,
                        void 0 !== a &&
                          'keydown' === a.type &&
                          (a.keyCode === n.default.DELETE ||
                            a.keyCode === n.default.BACKSPACE),
                      ),
                    !0 === r)
                  ) {
                    var p = c(e),
                      h = e.inputmask._valueGet()
                    ;(e.inputmask.skipInputEvent = !0),
                      p.trigger('input'),
                      setTimeout(function () {
                        h === o.getBufferTemplate.call(s).join('')
                          ? p.trigger('cleared')
                          : !0 === l.isComplete.call(s, t) &&
                            p.trigger('complete')
                      }, 0)
                  }
                }
              },
              2394: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.default = void 0),
                  i(7149),
                  i(3194)
                var a = i(157),
                  n = m(i(4963)),
                  r = m(i(9380)),
                  o = i(2391),
                  l = i(4713),
                  s = i(8711),
                  u = i(7215),
                  c = i(7760),
                  f = i(9716),
                  d = m(i(7392)),
                  p = m(i(3976)),
                  h = m(i(8741))
                function v(e) {
                  return (
                    (v =
                      'function' == typeof Symbol &&
                      'symbol' == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e
                          }
                        : function (e) {
                            return e &&
                              'function' == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                          }),
                    v(e)
                  )
                }
                function m(e) {
                  return e && e.__esModule
                    ? e
                    : {
                        default: e,
                      }
                }
                var g = r.default.document,
                  k = '_inputmask_opts'
                function y(e, t, i) {
                  if (h.default) {
                    if (!(this instanceof y)) return new y(e, t, i)
                    ;(this.dependencyLib = n.default),
                      (this.el = void 0),
                      (this.events = {}),
                      (this.maskset = void 0),
                      !0 !== i &&
                        ('[object Object]' === Object.prototype.toString.call(e)
                          ? (t = e)
                          : ((t = t || {}), e && (t.alias = e)),
                        (this.opts = n.default.extend(
                          !0,
                          {},
                          this.defaults,
                          t,
                        )),
                        (this.noMasksCache = t && void 0 !== t.definitions),
                        (this.userOptions = t || {}),
                        b(this.opts.alias, t, this.opts)),
                      (this.refreshValue = !1),
                      (this.undoValue = void 0),
                      (this.$el = void 0),
                      (this.skipKeyPressEvent = !1),
                      (this.skipInputEvent = !1),
                      (this.validationEvent = !1),
                      (this.ignorable = !1),
                      this.maxLength,
                      (this.mouseEnter = !1),
                      (this.originalPlaceholder = void 0),
                      (this.isComposing = !1)
                  }
                }
                function b(e, t, i) {
                  var a = y.prototype.aliases[e]
                  return a
                    ? (a.alias && b(a.alias, void 0, i),
                      n.default.extend(!0, i, a),
                      n.default.extend(!0, i, t),
                      !0)
                    : (null === i.mask && (i.mask = e), !1)
                }
                ;(y.prototype = {
                  dataAttribute: 'data-inputmask',
                  defaults: p.default,
                  definitions: d.default,
                  aliases: {},
                  masksCache: {},
                  get isRTL() {
                    return this.opts.isRTL || this.opts.numericInput
                  },
                  mask: function (e) {
                    var t = this
                    return (
                      'string' == typeof e &&
                        (e = g.getElementById(e) || g.querySelectorAll(e)),
                      (e = e.nodeName
                        ? [e]
                        : Array.isArray(e)
                        ? e
                        : Array.from(e)).forEach(function (e, i) {
                        var l = n.default.extend(!0, {}, t.opts)
                        if (
                          (function (e, t, i, a) {
                            function o(t, n) {
                              var o = '' === a ? t : a + '-' + t
                              null !==
                                (n = void 0 !== n ? n : e.getAttribute(o)) &&
                                ('string' == typeof n &&
                                  (0 === t.indexOf('on')
                                    ? (n = r.default[n])
                                    : 'false' === n
                                    ? (n = !1)
                                    : 'true' === n && (n = !0)),
                                (i[t] = n))
                            }
                            if (!0 === t.importDataAttributes) {
                              var l,
                                s,
                                u,
                                c,
                                f = e.getAttribute(a)
                              if (
                                (f &&
                                  '' !== f &&
                                  ((f = f.replace(/'/g, '"')),
                                  (s = JSON.parse('{' + f + '}'))),
                                s)
                              )
                                for (c in ((u = void 0), s))
                                  if ('alias' === c.toLowerCase()) {
                                    u = s[c]
                                    break
                                  }
                              for (l in (o('alias', u),
                              i.alias && b(i.alias, i, t),
                              t)) {
                                if (s)
                                  for (c in ((u = void 0), s))
                                    if (c.toLowerCase() === l.toLowerCase()) {
                                      u = s[c]
                                      break
                                    }
                                o(l, u)
                              }
                            }
                            n.default.extend(!0, t, i),
                              ('rtl' === e.dir || t.rightAlign) &&
                                (e.style.textAlign = 'right')
                            ;('rtl' === e.dir || t.numericInput) &&
                              ((e.dir = 'ltr'),
                              e.removeAttribute('dir'),
                              (t.isRTL = !0))
                            return Object.keys(i).length
                          })(
                            e,
                            l,
                            n.default.extend(!0, {}, t.userOptions),
                            t.dataAttribute,
                          )
                        ) {
                          var s = (0, o.generateMaskSet)(l, t.noMasksCache)
                          void 0 !== s &&
                            (void 0 !== e.inputmask &&
                              ((e.inputmask.opts.autoUnmask = !0),
                              e.inputmask.remove()),
                            (e.inputmask = new y(void 0, void 0, !0)),
                            (e.inputmask.opts = l),
                            (e.inputmask.noMasksCache = t.noMasksCache),
                            (e.inputmask.userOptions = n.default.extend(
                              !0,
                              {},
                              t.userOptions,
                            )),
                            (e.inputmask.el = e),
                            (e.inputmask.$el = (0, n.default)(e)),
                            (e.inputmask.maskset = s),
                            n.default.data(e, k, t.userOptions),
                            a.mask.call(e.inputmask))
                        }
                      }),
                      (e && e[0] && e[0].inputmask) || this
                    )
                  },
                  option: function (e, t) {
                    return 'string' == typeof e
                      ? this.opts[e]
                      : 'object' === v(e)
                      ? (n.default.extend(this.userOptions, e),
                        this.el && !0 !== t && this.mask(this.el),
                        this)
                      : void 0
                  },
                  unmaskedvalue: function (e) {
                    if (
                      ((this.maskset =
                        this.maskset ||
                        (0, o.generateMaskSet)(this.opts, this.noMasksCache)),
                      void 0 === this.el || void 0 !== e)
                    ) {
                      var t = (
                        ('function' == typeof this.opts.onBeforeMask &&
                          this.opts.onBeforeMask.call(this, e, this.opts)) ||
                        e
                      ).split('')
                      c.checkVal.call(this, void 0, !1, !1, t),
                        'function' == typeof this.opts.onBeforeWrite &&
                          this.opts.onBeforeWrite.call(
                            this,
                            void 0,
                            s.getBuffer.call(this),
                            0,
                            this.opts,
                          )
                    }
                    return c.unmaskedvalue.call(this, this.el)
                  },
                  remove: function () {
                    if (this.el) {
                      n.default.data(this.el, k, null)
                      var e = this.opts.autoUnmask
                        ? (0, c.unmaskedvalue)(this.el)
                        : this._valueGet(this.opts.autoUnmask)
                      e !== s.getBufferTemplate.call(this).join('')
                        ? this._valueSet(e, this.opts.autoUnmask)
                        : this._valueSet(''),
                        f.EventRuler.off(this.el),
                        Object.getOwnPropertyDescriptor && Object.getPrototypeOf
                          ? Object.getOwnPropertyDescriptor(
                              Object.getPrototypeOf(this.el),
                              'value',
                            ) &&
                            this.__valueGet &&
                            Object.defineProperty(this.el, 'value', {
                              get: this.__valueGet,
                              set: this.__valueSet,
                              configurable: !0,
                            })
                          : g.__lookupGetter__ &&
                            this.el.__lookupGetter__('value') &&
                            this.__valueGet &&
                            (this.el.__defineGetter__('value', this.__valueGet),
                            this.el.__defineSetter__('value', this.__valueSet)),
                        (this.el.inputmask = void 0)
                    }
                    return this.el
                  },
                  getemptymask: function () {
                    return (
                      (this.maskset =
                        this.maskset ||
                        (0, o.generateMaskSet)(this.opts, this.noMasksCache)),
                      s.getBufferTemplate.call(this).join('')
                    )
                  },
                  hasMaskedValue: function () {
                    return !this.opts.autoUnmask
                  },
                  isComplete: function () {
                    return (
                      (this.maskset =
                        this.maskset ||
                        (0, o.generateMaskSet)(this.opts, this.noMasksCache)),
                      u.isComplete.call(this, s.getBuffer.call(this))
                    )
                  },
                  getmetadata: function () {
                    if (
                      ((this.maskset =
                        this.maskset ||
                        (0, o.generateMaskSet)(this.opts, this.noMasksCache)),
                      Array.isArray(this.maskset.metadata))
                    ) {
                      var e = l.getMaskTemplate.call(this, !0, 0, !1).join('')
                      return (
                        this.maskset.metadata.forEach(function (t) {
                          return t.mask !== e || ((e = t), !1)
                        }),
                        e
                      )
                    }
                    return this.maskset.metadata
                  },
                  isValid: function (e) {
                    if (
                      ((this.maskset =
                        this.maskset ||
                        (0, o.generateMaskSet)(this.opts, this.noMasksCache)),
                      e)
                    ) {
                      var t = (
                        ('function' == typeof this.opts.onBeforeMask &&
                          this.opts.onBeforeMask.call(this, e, this.opts)) ||
                        e
                      ).split('')
                      c.checkVal.call(this, void 0, !0, !1, t)
                    } else
                      e = this.isRTL
                        ? s.getBuffer.call(this).slice().reverse().join('')
                        : s.getBuffer.call(this).join('')
                    for (
                      var i = s.getBuffer.call(this),
                        a = s.determineLastRequiredPosition.call(this),
                        n = i.length - 1;
                      n > a && !s.isMask.call(this, n);
                      n--
                    );
                    return (
                      i.splice(a, n + 1 - a),
                      u.isComplete.call(this, i) &&
                        e ===
                          (this.isRTL
                            ? s.getBuffer.call(this).slice().reverse().join('')
                            : s.getBuffer.call(this).join(''))
                    )
                  },
                  format: function (e, t) {
                    this.maskset =
                      this.maskset ||
                      (0, o.generateMaskSet)(this.opts, this.noMasksCache)
                    var i = (
                      ('function' == typeof this.opts.onBeforeMask &&
                        this.opts.onBeforeMask.call(this, e, this.opts)) ||
                      e
                    ).split('')
                    c.checkVal.call(this, void 0, !0, !1, i)
                    var a = this.isRTL
                      ? s.getBuffer.call(this).slice().reverse().join('')
                      : s.getBuffer.call(this).join('')
                    return t
                      ? {
                          value: a,
                          metadata: this.getmetadata(),
                        }
                      : a
                  },
                  setValue: function (e) {
                    this.el && (0, n.default)(this.el).trigger('setvalue', [e])
                  },
                  analyseMask: o.analyseMask,
                }),
                  (y.extendDefaults = function (e) {
                    n.default.extend(!0, y.prototype.defaults, e)
                  }),
                  (y.extendDefinitions = function (e) {
                    n.default.extend(!0, y.prototype.definitions, e)
                  }),
                  (y.extendAliases = function (e) {
                    n.default.extend(!0, y.prototype.aliases, e)
                  }),
                  (y.format = function (e, t, i) {
                    return y(t).format(e, i)
                  }),
                  (y.unmask = function (e, t) {
                    return y(t).unmaskedvalue(e)
                  }),
                  (y.isValid = function (e, t) {
                    return y(t).isValid(e)
                  }),
                  (y.remove = function (e) {
                    'string' == typeof e &&
                      (e = g.getElementById(e) || g.querySelectorAll(e)),
                      (e = e.nodeName ? [e] : e).forEach(function (e) {
                        e.inputmask && e.inputmask.remove()
                      })
                  }),
                  (y.setValue = function (e, t) {
                    'string' == typeof e &&
                      (e = g.getElementById(e) || g.querySelectorAll(e)),
                      (e = e.nodeName ? [e] : e).forEach(function (e) {
                        e.inputmask
                          ? e.inputmask.setValue(t)
                          : (0, n.default)(e).trigger('setvalue', [t])
                      })
                  }),
                  (y.dependencyLib = n.default),
                  (r.default.Inputmask = y)
                var x = y
                t.default = x
              },
              5296: function (e, t, i) {
                function a(e) {
                  return (
                    (a =
                      'function' == typeof Symbol &&
                      'symbol' == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e
                          }
                        : function (e) {
                            return e &&
                              'function' == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                          }),
                    a(e)
                  )
                }
                var n = h(i(9380)),
                  r = h(i(2394)),
                  o = h(i(8741))
                function l(e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var a = t[i]
                    ;(a.enumerable = a.enumerable || !1),
                      (a.configurable = !0),
                      'value' in a && (a.writable = !0),
                      Object.defineProperty(e, a.key, a)
                  }
                }
                function s(e, t) {
                  if (t && ('object' === a(t) || 'function' == typeof t))
                    return t
                  if (void 0 !== t)
                    throw new TypeError(
                      'Derived constructors may only return object or undefined',
                    )
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      )
                    return e
                  })(e)
                }
                function u(e) {
                  var t = 'function' == typeof Map ? new Map() : void 0
                  return (
                    (u = function (e) {
                      if (
                        null === e ||
                        ((i = e),
                        -1 ===
                          Function.toString.call(i).indexOf('[native code]'))
                      )
                        return e
                      var i
                      if ('function' != typeof e)
                        throw new TypeError(
                          'Super expression must either be null or a function',
                        )
                      if (void 0 !== t) {
                        if (t.has(e)) return t.get(e)
                        t.set(e, a)
                      }
                      function a() {
                        return c(e, arguments, p(this).constructor)
                      }
                      return (
                        (a.prototype = Object.create(e.prototype, {
                          constructor: {
                            value: a,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                        d(a, e)
                      )
                    }),
                    u(e)
                  )
                }
                function c(e, t, i) {
                  return (
                    (c = f()
                      ? Reflect.construct
                      : function (e, t, i) {
                          var a = [null]
                          a.push.apply(a, t)
                          var n = new (Function.bind.apply(e, a))()
                          return i && d(n, i.prototype), n
                        }),
                    c.apply(null, arguments)
                  )
                }
                function f() {
                  if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1
                  if (Reflect.construct.sham) return !1
                  if ('function' == typeof Proxy) return !0
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    )
                  } catch (e) {
                    return !1
                  }
                }
                function d(e, t) {
                  return (
                    (d =
                      Object.setPrototypeOf ||
                      function (e, t) {
                        return (e.__proto__ = t), e
                      }),
                    d(e, t)
                  )
                }
                function p(e) {
                  return (
                    (p = Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e)
                        }),
                    p(e)
                  )
                }
                function h(e) {
                  return e && e.__esModule
                    ? e
                    : {
                        default: e,
                      }
                }
                var v = n.default.document
                if (
                  o.default &&
                  v &&
                  v.head &&
                  v.head.attachShadow &&
                  n.default.customElements &&
                  void 0 === n.default.customElements.get('input-mask')
                ) {
                  var m = (function (e) {
                    !(function (e, t) {
                      if ('function' != typeof t && null !== t)
                        throw new TypeError(
                          'Super expression must either be null or a function',
                        )
                      Object.defineProperty(e, 'prototype', {
                        value: Object.create(t && t.prototype, {
                          constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                          },
                        }),
                        writable: !1,
                      }),
                        t && d(e, t)
                    })(c, e)
                    var t,
                      i,
                      a,
                      n,
                      o,
                      u =
                        ((t = c),
                        (i = f()),
                        function () {
                          var e,
                            a = p(t)
                          if (i) {
                            var n = p(this).constructor
                            e = Reflect.construct(a, arguments, n)
                          } else e = a.apply(this, arguments)
                          return s(this, e)
                        })
                    function c() {
                      var e
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            'Cannot call a class as a function',
                          )
                      })(this, c)
                      var t = (e = u.call(this)).getAttributeNames(),
                        i = e.attachShadow({
                          mode: 'closed',
                        }),
                        a = v.createElement('input')
                      for (var n in ((a.type = 'text'), i.appendChild(a), t))
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          a.setAttribute(t[n], e.getAttribute(t[n]))
                      var o = new r.default()
                      return (
                        (o.dataAttribute = ''),
                        o.mask(a),
                        (a.inputmask.shadowRoot = i),
                        e
                      )
                    }
                    return (
                      (a = c),
                      n && l(a.prototype, n),
                      o && l(a, o),
                      Object.defineProperty(a, 'prototype', {
                        writable: !1,
                      }),
                      a
                    )
                  })(u(HTMLElement))
                  n.default.customElements.define('input-mask', m)
                }
              },
              2391: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.analyseMask = function (e, t, i) {
                    var a,
                      o,
                      l,
                      s,
                      u,
                      c,
                      f =
                        /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                      d =
                        /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                      p = !1,
                      h = new n.default(),
                      v = [],
                      m = [],
                      g = !1
                    function k(e, a, n) {
                      n = void 0 !== n ? n : e.matches.length
                      var o = e.matches[n - 1]
                      if (t)
                        0 === a.indexOf('[') ||
                        (p && /\\d|\\s|\\w/i.test(a)) ||
                        '.' === a
                          ? e.matches.splice(n++, 0, {
                              fn: new RegExp(a, i.casing ? 'i' : ''),
                              static: !1,
                              optionality: !1,
                              newBlockMarker:
                                void 0 === o ? 'master' : o.def !== a,
                              casing: null,
                              def: a,
                              placeholder: void 0,
                              nativeDef: a,
                            })
                          : (p && (a = a[a.length - 1]),
                            a.split('').forEach(function (t, a) {
                              ;(o = e.matches[n - 1]),
                                e.matches.splice(n++, 0, {
                                  fn: /[a-z]/i.test(
                                    i.staticDefinitionSymbol || t,
                                  )
                                    ? new RegExp(
                                        '[' +
                                          (i.staticDefinitionSymbol || t) +
                                          ']',
                                        i.casing ? 'i' : '',
                                      )
                                    : null,
                                  static: !0,
                                  optionality: !1,
                                  newBlockMarker:
                                    void 0 === o
                                      ? 'master'
                                      : o.def !== t && !0 !== o.static,
                                  casing: null,
                                  def: i.staticDefinitionSymbol || t,
                                  placeholder:
                                    void 0 !== i.staticDefinitionSymbol
                                      ? t
                                      : void 0,
                                  nativeDef: (p ? "'" : '') + t,
                                })
                            })),
                          (p = !1)
                      else {
                        var l =
                          (i.definitions && i.definitions[a]) ||
                          (i.usePrototypeDefinitions &&
                            r.default.prototype.definitions[a])
                        l && !p
                          ? e.matches.splice(n++, 0, {
                              fn: l.validator
                                ? 'string' == typeof l.validator
                                  ? new RegExp(l.validator, i.casing ? 'i' : '')
                                  : new (function () {
                                      this.test = l.validator
                                    })()
                                : new RegExp('.'),
                              static: l.static || !1,
                              optionality: l.optional || !1,
                              newBlockMarker:
                                void 0 === o || l.optional
                                  ? 'master'
                                  : o.def !== (l.definitionSymbol || a),
                              casing: l.casing,
                              def: l.definitionSymbol || a,
                              placeholder: l.placeholder,
                              nativeDef: a,
                              generated: l.generated,
                            })
                          : (e.matches.splice(n++, 0, {
                              fn: /[a-z]/i.test(i.staticDefinitionSymbol || a)
                                ? new RegExp(
                                    '[' + (i.staticDefinitionSymbol || a) + ']',
                                    i.casing ? 'i' : '',
                                  )
                                : null,
                              static: !0,
                              optionality: !1,
                              newBlockMarker:
                                void 0 === o
                                  ? 'master'
                                  : o.def !== a && !0 !== o.static,
                              casing: null,
                              def: i.staticDefinitionSymbol || a,
                              placeholder:
                                void 0 !== i.staticDefinitionSymbol
                                  ? a
                                  : void 0,
                              nativeDef: (p ? "'" : '') + a,
                            }),
                            (p = !1))
                      }
                    }
                    function y() {
                      if (v.length > 0) {
                        if ((k((s = v[v.length - 1]), o), s.isAlternator)) {
                          u = v.pop()
                          for (var e = 0; e < u.matches.length; e++)
                            u.matches[e].isGroup && (u.matches[e].isGroup = !1)
                          v.length > 0
                            ? (s = v[v.length - 1]).matches.push(u)
                            : h.matches.push(u)
                        }
                      } else k(h, o)
                    }
                    function b(e) {
                      var t = new n.default(!0)
                      return (t.openGroup = !1), (t.matches = e), t
                    }
                    function x() {
                      if ((((l = v.pop()).openGroup = !1), void 0 !== l))
                        if (v.length > 0) {
                          if (
                            ((s = v[v.length - 1]).matches.push(l),
                            s.isAlternator)
                          ) {
                            for (
                              var e = (u = v.pop()).matches[0].matches
                                  ? u.matches[0].matches.length
                                  : 1,
                                t = 0;
                              t < u.matches.length;
                              t++
                            )
                              (u.matches[t].isGroup = !1),
                                (u.matches[t].alternatorGroup = !1),
                                null === i.keepStatic &&
                                  e <
                                    (u.matches[t].matches
                                      ? u.matches[t].matches.length
                                      : 1) &&
                                  (i.keepStatic = !0),
                                (e = u.matches[t].matches
                                  ? u.matches[t].matches.length
                                  : 1)
                            v.length > 0
                              ? (s = v[v.length - 1]).matches.push(u)
                              : h.matches.push(u)
                          }
                        } else h.matches.push(l)
                      else y()
                    }
                    function P(e) {
                      var t = e.pop()
                      return t.isQuantifier && (t = b([e.pop(), t])), t
                    }
                    t &&
                      ((i.optionalmarker[0] = void 0),
                      (i.optionalmarker[1] = void 0))
                    for (; (a = t ? d.exec(e) : f.exec(e)); ) {
                      if (((o = a[0]), t)) {
                        switch (o.charAt(0)) {
                          case '?':
                            o = '{0,1}'
                            break

                          case '+':
                          case '*':
                            o = '{' + o + '}'
                            break

                          case '|':
                            if (0 === v.length) {
                              var E = b(h.matches)
                              ;(E.openGroup = !0),
                                v.push(E),
                                (h.matches = []),
                                (g = !0)
                            }
                        }
                        if ('\\d' === o) o = '[0-9]'
                      }
                      if (p) y()
                      else
                        switch (o.charAt(0)) {
                          case '$':
                          case '^':
                            t || y()
                            break

                          case i.escapeChar:
                            ;(p = !0), t && y()
                            break

                          case i.optionalmarker[1]:
                          case i.groupmarker[1]:
                            x()
                            break

                          case i.optionalmarker[0]:
                            v.push(new n.default(!1, !0))
                            break

                          case i.groupmarker[0]:
                            v.push(new n.default(!0))
                            break

                          case i.quantifiermarker[0]:
                            var S = new n.default(!1, !1, !0),
                              _ = (o = o.replace(/[{}?]/g, '')).split('|'),
                              w = _[0].split(','),
                              M = isNaN(w[0]) ? w[0] : parseInt(w[0]),
                              O =
                                1 === w.length
                                  ? M
                                  : isNaN(w[1])
                                  ? w[1]
                                  : parseInt(w[1]),
                              T = isNaN(_[1]) ? _[1] : parseInt(_[1])
                            ;('*' !== M && '+' !== M) ||
                              (M = '*' === O ? 0 : 1),
                              (S.quantifier = {
                                min: M,
                                max: O,
                                jit: T,
                              })
                            var C =
                              v.length > 0 ? v[v.length - 1].matches : h.matches
                            if ((a = C.pop()).isAlternator) {
                              C.push(a), (C = a.matches)
                              var A = new n.default(!0),
                                D = C.pop()
                              C.push(A), (C = A.matches), (a = D)
                            }
                            a.isGroup || (a = b([a])), C.push(a), C.push(S)
                            break

                          case i.alternatormarker:
                            if (v.length > 0) {
                              var j = (s = v[v.length - 1]).matches[
                                s.matches.length - 1
                              ]
                              c =
                                s.openGroup &&
                                (void 0 === j.matches ||
                                  (!1 === j.isGroup && !1 === j.isAlternator))
                                  ? v.pop()
                                  : P(s.matches)
                            } else c = P(h.matches)
                            if (c.isAlternator) v.push(c)
                            else if (
                              (c.alternatorGroup
                                ? ((u = v.pop()), (c.alternatorGroup = !1))
                                : (u = new n.default(!1, !1, !1, !0)),
                              u.matches.push(c),
                              v.push(u),
                              c.openGroup)
                            ) {
                              c.openGroup = !1
                              var B = new n.default(!0)
                              ;(B.alternatorGroup = !0), v.push(B)
                            }
                            break

                          default:
                            y()
                        }
                    }
                    g && x()
                    for (; v.length > 0; ) (l = v.pop()), h.matches.push(l)
                    h.matches.length > 0 &&
                      (!(function e(a) {
                        a &&
                          a.matches &&
                          a.matches.forEach(function (n, r) {
                            var o = a.matches[r + 1]
                            ;(void 0 === o ||
                              void 0 === o.matches ||
                              !1 === o.isQuantifier) &&
                              n &&
                              n.isGroup &&
                              ((n.isGroup = !1),
                              t ||
                                (k(n, i.groupmarker[0], 0),
                                !0 !== n.openGroup && k(n, i.groupmarker[1]))),
                              e(n)
                          })
                      })(h),
                      m.push(h))
                    ;(i.numericInput || i.isRTL) &&
                      (function e(t) {
                        for (var a in ((t.matches = t.matches.reverse()),
                        t.matches))
                          if (
                            Object.prototype.hasOwnProperty.call(t.matches, a)
                          ) {
                            var n = parseInt(a)
                            if (
                              t.matches[a].isQuantifier &&
                              t.matches[n + 1] &&
                              t.matches[n + 1].isGroup
                            ) {
                              var r = t.matches[a]
                              t.matches.splice(a, 1),
                                t.matches.splice(n + 1, 0, r)
                            }
                            void 0 !== t.matches[a].matches
                              ? (t.matches[a] = e(t.matches[a]))
                              : (t.matches[a] =
                                  ((o = t.matches[a]) === i.optionalmarker[0]
                                    ? (o = i.optionalmarker[1])
                                    : o === i.optionalmarker[1]
                                    ? (o = i.optionalmarker[0])
                                    : o === i.groupmarker[0]
                                    ? (o = i.groupmarker[1])
                                    : o === i.groupmarker[1] &&
                                      (o = i.groupmarker[0]),
                                  o))
                          }
                        var o
                        return t
                      })(m[0])
                    return m
                  }),
                  (t.generateMaskSet = function (e, t) {
                    var i
                    function n(e, i, n) {
                      var o,
                        l,
                        s = !1
                      if (
                        ((null !== e && '' !== e) ||
                          ((s = null !== n.regex)
                            ? (e = (e = n.regex).replace(
                                /^(\^)(.*)(\$)$/,
                                '$2',
                              ))
                            : ((s = !0), (e = '.*'))),
                        1 === e.length &&
                          !1 === n.greedy &&
                          0 !== n.repeat &&
                          (n.placeholder = ''),
                        n.repeat > 0 || '*' === n.repeat || '+' === n.repeat)
                      ) {
                        var u =
                          '*' === n.repeat ? 0 : '+' === n.repeat ? 1 : n.repeat
                        e =
                          n.groupmarker[0] +
                          e +
                          n.groupmarker[1] +
                          n.quantifiermarker[0] +
                          u +
                          ',' +
                          n.repeat +
                          n.quantifiermarker[1]
                      }
                      return (
                        (l = s
                          ? 'regex_' + n.regex
                          : n.numericInput
                          ? e.split('').reverse().join('')
                          : e),
                        null !== n.keepStatic && (l = 'ks_' + n.keepStatic + l),
                        void 0 === r.default.prototype.masksCache[l] || !0 === t
                          ? ((o = {
                              mask: e,
                              maskToken: r.default.prototype.analyseMask(
                                e,
                                s,
                                n,
                              ),
                              validPositions: {},
                              _buffer: void 0,
                              buffer: void 0,
                              tests: {},
                              excludes: {},
                              metadata: i,
                              maskLength: void 0,
                              jitOffset: {},
                            }),
                            !0 !== t &&
                              ((r.default.prototype.masksCache[l] = o),
                              (o = a.default.extend(
                                !0,
                                {},
                                r.default.prototype.masksCache[l],
                              ))))
                          : (o = a.default.extend(
                              !0,
                              {},
                              r.default.prototype.masksCache[l],
                            )),
                        o
                      )
                    }
                    'function' == typeof e.mask && (e.mask = e.mask(e))
                    if (Array.isArray(e.mask)) {
                      if (e.mask.length > 1) {
                        null === e.keepStatic && (e.keepStatic = !0)
                        var o = e.groupmarker[0]
                        return (
                          (e.isRTL ? e.mask.reverse() : e.mask).forEach(
                            function (t) {
                              o.length > 1 && (o += e.alternatormarker),
                                void 0 !== t.mask && 'function' != typeof t.mask
                                  ? (o += t.mask)
                                  : (o += t)
                            },
                          ),
                          n((o += e.groupmarker[1]), e.mask, e)
                        )
                      }
                      e.mask = e.mask.pop()
                    }
                    i =
                      e.mask &&
                      void 0 !== e.mask.mask &&
                      'function' != typeof e.mask.mask
                        ? n(e.mask.mask, e.mask, e)
                        : n(e.mask, e.mask, e)
                    null === e.keepStatic && (e.keepStatic = !1)
                    return i
                  })
                var a = o(i(4963)),
                  n = o(i(9695)),
                  r = o(i(2394))
                function o(e) {
                  return e && e.__esModule
                    ? e
                    : {
                        default: e,
                      }
                }
              },
              157: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.mask = function () {
                    var e = this,
                      t = this.opts,
                      i = this.el,
                      a = this.dependencyLib
                    l.EventRuler.off(i)
                    var f = (function (t, i) {
                      'textarea' !== t.tagName.toLowerCase() &&
                        i.ignorables.push(n.default.ENTER)
                      var s = t.getAttribute('type'),
                        u =
                          ('input' === t.tagName.toLowerCase() &&
                            i.supportsInputType.includes(s)) ||
                          t.isContentEditable ||
                          'textarea' === t.tagName.toLowerCase()
                      if (!u)
                        if ('input' === t.tagName.toLowerCase()) {
                          var c = document.createElement('input')
                          c.setAttribute('type', s),
                            (u = 'text' === c.type),
                            (c = null)
                        } else u = 'partial'
                      return (
                        !1 !== u
                          ? (function (t) {
                              var n, s
                              function u() {
                                return this.inputmask
                                  ? this.inputmask.opts.autoUnmask
                                    ? this.inputmask.unmaskedvalue()
                                    : -1 !== r.getLastValidPosition.call(e) ||
                                      !0 !== i.nullable
                                    ? (
                                        this.inputmask.shadowRoot ||
                                        this.ownerDocument
                                      ).activeElement === this &&
                                      i.clearMaskOnLostFocus
                                      ? (e.isRTL
                                          ? o.clearOptionalTail
                                              .call(
                                                e,
                                                r.getBuffer.call(e).slice(),
                                              )
                                              .reverse()
                                          : o.clearOptionalTail.call(
                                              e,
                                              r.getBuffer.call(e).slice(),
                                            )
                                        ).join('')
                                      : n.call(this)
                                    : ''
                                  : n.call(this)
                              }
                              function c(e) {
                                s.call(this, e),
                                  this.inputmask &&
                                    (0, o.applyInputValue)(this, e)
                              }
                              if (!t.inputmask.__valueGet) {
                                if (!0 !== i.noValuePatching) {
                                  if (Object.getOwnPropertyDescriptor) {
                                    var f = Object.getPrototypeOf
                                      ? Object.getOwnPropertyDescriptor(
                                          Object.getPrototypeOf(t),
                                          'value',
                                        )
                                      : void 0
                                    f && f.get && f.set
                                      ? ((n = f.get),
                                        (s = f.set),
                                        Object.defineProperty(t, 'value', {
                                          get: u,
                                          set: c,
                                          configurable: !0,
                                        }))
                                      : 'input' !== t.tagName.toLowerCase() &&
                                        ((n = function () {
                                          return this.textContent
                                        }),
                                        (s = function (e) {
                                          this.textContent = e
                                        }),
                                        Object.defineProperty(t, 'value', {
                                          get: u,
                                          set: c,
                                          configurable: !0,
                                        }))
                                  } else
                                    document.__lookupGetter__ &&
                                      t.__lookupGetter__('value') &&
                                      ((n = t.__lookupGetter__('value')),
                                      (s = t.__lookupSetter__('value')),
                                      t.__defineGetter__('value', u),
                                      t.__defineSetter__('value', c))
                                  ;(t.inputmask.__valueGet = n),
                                    (t.inputmask.__valueSet = s)
                                }
                                ;(t.inputmask._valueGet = function (t) {
                                  return e.isRTL && !0 !== t
                                    ? n
                                        .call(this.el)
                                        .split('')
                                        .reverse()
                                        .join('')
                                    : n.call(this.el)
                                }),
                                  (t.inputmask._valueSet = function (t, i) {
                                    s.call(
                                      this.el,
                                      null == t
                                        ? ''
                                        : !0 !== i && e.isRTL
                                        ? t.split('').reverse().join('')
                                        : t,
                                    )
                                  }),
                                  void 0 === n &&
                                    ((n = function () {
                                      return this.value
                                    }),
                                    (s = function (e) {
                                      this.value = e
                                    }),
                                    (function (t) {
                                      if (
                                        a.valHooks &&
                                        (void 0 === a.valHooks[t] ||
                                          !0 !== a.valHooks[t].inputmaskpatch)
                                      ) {
                                        var n =
                                            a.valHooks[t] && a.valHooks[t].get
                                              ? a.valHooks[t].get
                                              : function (e) {
                                                  return e.value
                                                },
                                          l =
                                            a.valHooks[t] && a.valHooks[t].set
                                              ? a.valHooks[t].set
                                              : function (e, t) {
                                                  return (e.value = t), e
                                                }
                                        a.valHooks[t] = {
                                          get: function (t) {
                                            if (t.inputmask) {
                                              if (t.inputmask.opts.autoUnmask)
                                                return t.inputmask.unmaskedvalue()
                                              var a = n(t)
                                              return -1 !==
                                                r.getLastValidPosition.call(
                                                  e,
                                                  void 0,
                                                  void 0,
                                                  t.inputmask.maskset
                                                    .validPositions,
                                                ) || !0 !== i.nullable
                                                ? a
                                                : ''
                                            }
                                            return n(t)
                                          },
                                          set: function (e, t) {
                                            var i = l(e, t)
                                            return (
                                              e.inputmask &&
                                                (0, o.applyInputValue)(e, t),
                                              i
                                            )
                                          },
                                          inputmaskpatch: !0,
                                        }
                                      }
                                    })(t.type),
                                    (function (t) {
                                      l.EventRuler.on(
                                        t,
                                        'mouseenter',
                                        function () {
                                          var t = this.inputmask._valueGet(!0)
                                          t !==
                                            (e.isRTL
                                              ? r.getBuffer.call(e).reverse()
                                              : r.getBuffer.call(e)
                                            ).join('') &&
                                            (0, o.applyInputValue)(this, t)
                                        },
                                      )
                                    })(t))
                              }
                            })(t)
                          : (t.inputmask = void 0),
                        u
                      )
                    })(i, t)
                    if (!1 !== f) {
                      ;(e.originalPlaceholder = i.placeholder),
                        (e.maxLength = void 0 !== i ? i.maxLength : void 0),
                        -1 === e.maxLength && (e.maxLength = void 0),
                        'inputMode' in i &&
                          null === i.getAttribute('inputmode') &&
                          ((i.inputMode = t.inputmode),
                          i.setAttribute('inputmode', t.inputmode)),
                        !0 === f &&
                          ((t.showMaskOnFocus =
                            t.showMaskOnFocus &&
                            -1 ===
                              ['cc-number', 'cc-exp'].indexOf(i.autocomplete)),
                          s.iphone && (t.insertModeVisual = !1),
                          l.EventRuler.on(
                            i,
                            'submit',
                            c.EventHandlers.submitEvent,
                          ),
                          l.EventRuler.on(
                            i,
                            'reset',
                            c.EventHandlers.resetEvent,
                          ),
                          l.EventRuler.on(i, 'blur', c.EventHandlers.blurEvent),
                          l.EventRuler.on(
                            i,
                            'focus',
                            c.EventHandlers.focusEvent,
                          ),
                          l.EventRuler.on(
                            i,
                            'invalid',
                            c.EventHandlers.invalidEvent,
                          ),
                          l.EventRuler.on(
                            i,
                            'click',
                            c.EventHandlers.clickEvent,
                          ),
                          l.EventRuler.on(
                            i,
                            'mouseleave',
                            c.EventHandlers.mouseleaveEvent,
                          ),
                          l.EventRuler.on(
                            i,
                            'mouseenter',
                            c.EventHandlers.mouseenterEvent,
                          ),
                          l.EventRuler.on(
                            i,
                            'paste',
                            c.EventHandlers.pasteEvent,
                          ),
                          l.EventRuler.on(i, 'cut', c.EventHandlers.cutEvent),
                          l.EventRuler.on(i, 'complete', t.oncomplete),
                          l.EventRuler.on(i, 'incomplete', t.onincomplete),
                          l.EventRuler.on(i, 'cleared', t.oncleared),
                          !0 !== t.inputEventOnly &&
                            (l.EventRuler.on(
                              i,
                              'keydown',
                              c.EventHandlers.keydownEvent,
                            ),
                            l.EventRuler.on(
                              i,
                              'keypress',
                              c.EventHandlers.keypressEvent,
                            ),
                            l.EventRuler.on(
                              i,
                              'keyup',
                              c.EventHandlers.keyupEvent,
                            )),
                          (s.mobile || t.inputEventOnly) &&
                            i.removeAttribute('maxLength'),
                          l.EventRuler.on(
                            i,
                            'input',
                            c.EventHandlers.inputFallBackEvent,
                          ),
                          l.EventRuler.on(
                            i,
                            'compositionend',
                            c.EventHandlers.compositionendEvent,
                          )),
                        l.EventRuler.on(
                          i,
                          'setvalue',
                          c.EventHandlers.setValueEvent,
                        ),
                        r.getBufferTemplate.call(e).join(''),
                        (e.undoValue = e._valueGet(!0))
                      var d = (i.inputmask.shadowRoot || i.ownerDocument)
                        .activeElement
                      if (
                        '' !== i.inputmask._valueGet(!0) ||
                        !1 === t.clearMaskOnLostFocus ||
                        d === i
                      ) {
                        ;(0, o.applyInputValue)(i, i.inputmask._valueGet(!0), t)
                        var p = r.getBuffer.call(e).slice()
                        !1 === u.isComplete.call(e, p) &&
                          t.clearIncomplete &&
                          r.resetMaskSet.call(e),
                          t.clearMaskOnLostFocus &&
                            d !== i &&
                            (-1 === r.getLastValidPosition.call(e)
                              ? (p = [])
                              : o.clearOptionalTail.call(e, p)),
                          (!1 === t.clearMaskOnLostFocus ||
                            (t.showMaskOnFocus && d === i) ||
                            '' !== i.inputmask._valueGet(!0)) &&
                            (0, o.writeBuffer)(i, p),
                          d === i &&
                            r.caret.call(
                              e,
                              i,
                              r.seekNext.call(
                                e,
                                r.getLastValidPosition.call(e),
                              ),
                            )
                      }
                    }
                  })
                var a,
                  n =
                    (a = i(5581)) && a.__esModule
                      ? a
                      : {
                          default: a,
                        },
                  r = i(8711),
                  o = i(7760),
                  l = i(9716),
                  s = i(9845),
                  u = i(7215),
                  c = i(6030)
              },
              9695: function (e, t) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.default = function (e, t, i, a) {
                    ;(this.matches = []),
                      (this.openGroup = e || !1),
                      (this.alternatorGroup = !1),
                      (this.isGroup = e || !1),
                      (this.isOptional = t || !1),
                      (this.isQuantifier = i || !1),
                      (this.isAlternator = a || !1),
                      (this.quantifier = {
                        min: 1,
                        max: 1,
                      })
                  })
              },
              3194: function () {
                Array.prototype.includes ||
                  Object.defineProperty(Array.prototype, 'includes', {
                    value: function (e, t) {
                      if (null == this)
                        throw new TypeError('"this" is null or not defined')
                      var i = Object(this),
                        a = i.length >>> 0
                      if (0 === a) return !1
                      for (
                        var n = 0 | t,
                          r = Math.max(n >= 0 ? n : a - Math.abs(n), 0);
                        r < a;

                      ) {
                        if (i[r] === e) return !0
                        r++
                      }
                      return !1
                    },
                  })
              },
              7149: function () {
                function e(t) {
                  return (
                    (e =
                      'function' == typeof Symbol &&
                      'symbol' == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e
                          }
                        : function (e) {
                            return e &&
                              'function' == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                          }),
                    e(t)
                  )
                }
                'function' != typeof Object.getPrototypeOf &&
                  (Object.getPrototypeOf =
                    'object' === e('test'.__proto__)
                      ? function (e) {
                          return e.__proto__
                        }
                      : function (e) {
                          return e.constructor.prototype
                        })
              },
              8711: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.caret = function (e, t, i, a, n) {
                    var r,
                      o = this,
                      l = this.opts
                    if (void 0 === t)
                      return (
                        'selectionStart' in e && 'selectionEnd' in e
                          ? ((t = e.selectionStart), (i = e.selectionEnd))
                          : window.getSelection
                          ? ((r = window.getSelection().getRangeAt(0))
                              .commonAncestorContainer.parentNode !== e &&
                              r.commonAncestorContainer !== e) ||
                            ((t = r.startOffset), (i = r.endOffset))
                          : document.selection &&
                            document.selection.createRange &&
                            ((r = document.selection.createRange()),
                            (t =
                              0 -
                              r
                                .duplicate()
                                .moveStart(
                                  'character',
                                  -e.inputmask._valueGet().length,
                                )),
                            (i = t + r.text.length)),
                        {
                          begin: a ? t : u.call(o, t),
                          end: a ? i : u.call(o, i),
                        }
                      )
                    if (
                      (Array.isArray(t) &&
                        ((i = o.isRTL ? t[0] : t[1]),
                        (t = o.isRTL ? t[1] : t[0])),
                      void 0 !== t.begin &&
                        ((i = o.isRTL ? t.begin : t.end),
                        (t = o.isRTL ? t.end : t.begin)),
                      'number' == typeof t)
                    ) {
                      ;(t = a ? t : u.call(o, t)),
                        (i =
                          'number' == typeof (i = a ? i : u.call(o, i)) ? i : t)
                      var s =
                        parseInt(
                          ((e.ownerDocument.defaultView || window)
                            .getComputedStyle
                            ? (
                                e.ownerDocument.defaultView || window
                              ).getComputedStyle(e, null)
                            : e.currentStyle
                          ).fontSize,
                        ) * i
                      if (
                        ((e.scrollLeft = s > e.scrollWidth ? s : 0),
                        (e.inputmask.caretPos = {
                          begin: t,
                          end: i,
                        }),
                        l.insertModeVisual &&
                          !1 === l.insertMode &&
                          t === i &&
                          (n || i++),
                        e ===
                          (e.inputmask.shadowRoot || e.ownerDocument)
                            .activeElement)
                      )
                        if ('setSelectionRange' in e) e.setSelectionRange(t, i)
                        else if (window.getSelection) {
                          if (
                            ((r = document.createRange()),
                            void 0 === e.firstChild || null === e.firstChild)
                          ) {
                            var c = document.createTextNode('')
                            e.appendChild(c)
                          }
                          r.setStart(
                            e.firstChild,
                            t < e.inputmask._valueGet().length
                              ? t
                              : e.inputmask._valueGet().length,
                          ),
                            r.setEnd(
                              e.firstChild,
                              i < e.inputmask._valueGet().length
                                ? i
                                : e.inputmask._valueGet().length,
                            ),
                            r.collapse(!0)
                          var f = window.getSelection()
                          f.removeAllRanges(), f.addRange(r)
                        } else
                          e.createTextRange &&
                            ((r = e.createTextRange()).collapse(!0),
                            r.moveEnd('character', i),
                            r.moveStart('character', t),
                            r.select())
                    }
                  }),
                  (t.determineLastRequiredPosition = function (e) {
                    var t,
                      i,
                      r = this,
                      l = this.maskset,
                      s = this.dependencyLib,
                      u = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0),
                      c = u.length,
                      f = o.call(r),
                      d = {},
                      p = l.validPositions[f],
                      h = void 0 !== p ? p.locator.slice() : void 0
                    for (t = f + 1; t < u.length; t++)
                      (i = a.getTestTemplate.call(r, t, h, t - 1)),
                        (h = i.locator.slice()),
                        (d[t] = s.extend(!0, {}, i))
                    var v =
                      p && void 0 !== p.alternation
                        ? p.locator[p.alternation]
                        : void 0
                    for (
                      t = c - 1;
                      t > f &&
                      ((i = d[t]).match.optionality ||
                        (i.match.optionalQuantifier &&
                          i.match.newBlockMarker) ||
                        (v &&
                          ((v !== d[t].locator[p.alternation] &&
                            1 != i.match.static) ||
                            (!0 === i.match.static &&
                              i.locator[p.alternation] &&
                              n.checkAlternationMatch.call(
                                r,
                                i.locator[p.alternation].toString().split(','),
                                v.toString().split(','),
                              ) &&
                              '' !== a.getTests.call(r, t)[0].def)))) &&
                      u[t] === a.getPlaceholder.call(r, t, i.match);
                      t--
                    )
                      c--
                    return e
                      ? {
                          l: c,
                          def: d[c] ? d[c].match : void 0,
                        }
                      : c
                  }),
                  (t.determineNewCaretPosition = function (e, t, i) {
                    var n = this,
                      u = this.maskset,
                      c = this.opts
                    t && (n.isRTL ? (e.end = e.begin) : (e.begin = e.end))
                    if (e.begin === e.end) {
                      switch ((i = i || c.positionCaretOnClick)) {
                        case 'none':
                          break

                        case 'select':
                          e = {
                            begin: 0,
                            end: r.call(n).length,
                          }
                          break

                        case 'ignore':
                          e.end = e.begin = s.call(n, o.call(n))
                          break

                        case 'radixFocus':
                          if (
                            (function (e) {
                              if ('' !== c.radixPoint && 0 !== c.digits) {
                                var t = u.validPositions
                                if (
                                  void 0 === t[e] ||
                                  t[e].input === a.getPlaceholder.call(n, e)
                                ) {
                                  if (e < s.call(n, -1)) return !0
                                  var i = r.call(n).indexOf(c.radixPoint)
                                  if (-1 !== i) {
                                    for (var o in t)
                                      if (
                                        t[o] &&
                                        i < o &&
                                        t[o].input !==
                                          a.getPlaceholder.call(n, o)
                                      )
                                        return !1
                                    return !0
                                  }
                                }
                              }
                              return !1
                            })(e.begin)
                          ) {
                            var f = r.call(n).join('').indexOf(c.radixPoint)
                            e.end = e.begin = c.numericInput ? s.call(n, f) : f
                            break
                          }

                        default:
                          var d = e.begin,
                            p = o.call(n, d, !0),
                            h = s.call(n, -1 !== p || l.call(n, 0) ? p : -1)
                          if (d <= h)
                            e.end = e.begin = l.call(n, d, !1, !0)
                              ? d
                              : s.call(n, d)
                          else {
                            var v = u.validPositions[p],
                              m = a.getTestTemplate.call(
                                n,
                                h,
                                v ? v.match.locator : void 0,
                                v,
                              ),
                              g = a.getPlaceholder.call(n, h, m.match)
                            if (
                              ('' !== g &&
                                r.call(n)[h] !== g &&
                                !0 !== m.match.optionalQuantifier &&
                                !0 !== m.match.newBlockMarker) ||
                              (!l.call(n, h, c.keepStatic, !0) &&
                                m.match.def === g)
                            ) {
                              var k = s.call(n, h)
                              ;(d >= k || d === h) && (h = k)
                            }
                            e.end = e.begin = h
                          }
                      }
                      return e
                    }
                  }),
                  (t.getBuffer = r),
                  (t.getBufferTemplate = function () {
                    var e = this.maskset
                    void 0 === e._buffer &&
                      ((e._buffer = a.getMaskTemplate.call(this, !1, 1)),
                      void 0 === e.buffer && (e.buffer = e._buffer.slice()))
                    return e._buffer
                  }),
                  (t.getLastValidPosition = o),
                  (t.isMask = l),
                  (t.resetMaskSet = function (e) {
                    var t = this.maskset
                    ;(t.buffer = void 0),
                      !0 !== e && ((t.validPositions = {}), (t.p = 0))
                  }),
                  (t.seekNext = s),
                  (t.seekPrevious = function (e, t) {
                    var i = this,
                      n = e - 1
                    if (e <= 0) return 0
                    for (
                      ;
                      n > 0 &&
                      ((!0 === t &&
                        (!0 !== a.getTest.call(i, n).match.newBlockMarker ||
                          !l.call(i, n, void 0, !0))) ||
                        (!0 !== t && !l.call(i, n, void 0, !0)));

                    )
                      n--
                    return n
                  }),
                  (t.translatePosition = u)
                var a = i(4713),
                  n = i(7215)
                function r(e) {
                  var t = this.maskset
                  return (
                    (void 0 !== t.buffer && !0 !== e) ||
                      ((t.buffer = a.getMaskTemplate.call(
                        this,
                        !0,
                        o.call(this),
                        !0,
                      )),
                      void 0 === t._buffer && (t._buffer = t.buffer.slice())),
                    t.buffer
                  )
                }
                function o(e, t, i) {
                  var a = this.maskset,
                    n = -1,
                    r = -1,
                    o = i || a.validPositions
                  for (var l in (void 0 === e && (e = -1), o)) {
                    var s = parseInt(l)
                    o[s] &&
                      (t || !0 !== o[s].generatedInput) &&
                      (s <= e && (n = s), s >= e && (r = s))
                  }
                  return -1 === n || n == e
                    ? r
                    : -1 == r || e - n < r - e
                    ? n
                    : r
                }
                function l(e, t, i) {
                  var n = this,
                    r = this.maskset,
                    o = a.getTestTemplate.call(n, e).match
                  if (
                    ('' === o.def && (o = a.getTest.call(n, e).match),
                    !0 !== o.static)
                  )
                    return o.fn
                  if (
                    !0 === i &&
                    void 0 !== r.validPositions[e] &&
                    !0 !== r.validPositions[e].generatedInput
                  )
                    return !0
                  if (!0 !== t && e > -1) {
                    if (i) {
                      var l = a.getTests.call(n, e)
                      return (
                        l.length >
                        1 + ('' === l[l.length - 1].match.def ? 1 : 0)
                      )
                    }
                    var s = a.determineTestTemplate.call(
                        n,
                        e,
                        a.getTests.call(n, e),
                      ),
                      u = a.getPlaceholder.call(n, e, s.match)
                    return s.match.def !== u
                  }
                  return !1
                }
                function s(e, t, i) {
                  var n = this
                  void 0 === i && (i = !0)
                  for (
                    var r = e + 1;
                    '' !== a.getTest.call(n, r).match.def &&
                    ((!0 === t &&
                      (!0 !== a.getTest.call(n, r).match.newBlockMarker ||
                        !l.call(n, r, void 0, !0))) ||
                      (!0 !== t && !l.call(n, r, void 0, i)));

                  )
                    r++
                  return r
                }
                function u(e) {
                  var t = this.opts,
                    i = this.el
                  return (
                    !this.isRTL ||
                      'number' != typeof e ||
                      (t.greedy && '' === t.placeholder) ||
                      !i ||
                      (e = Math.abs(this._valueGet().length - e)),
                    e
                  )
                }
              },
              4713: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.determineTestTemplate = u),
                  (t.getDecisionTaker = o),
                  (t.getMaskTemplate = function (e, t, i, a, n) {
                    var r = this,
                      o = this.opts,
                      c = this.maskset,
                      f = o.greedy
                    n && o.greedy && ((o.greedy = !1), (r.maskset.tests = {}))
                    t = t || 0
                    var p,
                      h,
                      v,
                      m,
                      g = [],
                      k = 0
                    do {
                      if (!0 === e && c.validPositions[k])
                        (v =
                          n &&
                          c.validPositions[k].match.optionality &&
                          void 0 === c.validPositions[k + 1] &&
                          (!0 === c.validPositions[k].generatedInput ||
                            (c.validPositions[k].input ==
                              o.skipOptionalPartCharacter &&
                              k > 0))
                            ? u.call(r, k, d.call(r, k, p, k - 1))
                            : c.validPositions[k]),
                          (h = v.match),
                          (p = v.locator.slice()),
                          g.push(
                            !0 === i
                              ? v.input
                              : !1 === i
                              ? h.nativeDef
                              : l.call(r, k, h),
                          )
                      else {
                        ;(v = s.call(r, k, p, k - 1)),
                          (h = v.match),
                          (p = v.locator.slice())
                        var y =
                          !0 !== a &&
                          (!1 !== o.jitMasking ? o.jitMasking : h.jit)
                        ;(m =
                          ((m &&
                            h.static &&
                            h.def !== o.groupSeparator &&
                            null === h.fn) ||
                            (c.validPositions[k - 1] &&
                              h.static &&
                              h.def !== o.groupSeparator &&
                              null === h.fn)) &&
                          c.tests[k] &&
                          1 === c.tests[k].length) ||
                        !1 === y ||
                        void 0 === y ||
                        ('number' == typeof y && isFinite(y) && y > k)
                          ? g.push(!1 === i ? h.nativeDef : l.call(r, k, h))
                          : (m = !1)
                      }
                      k++
                    } while (!0 !== h.static || '' !== h.def || t > k)
                    '' === g[g.length - 1] && g.pop()
                    ;(!1 === i && void 0 !== c.maskLength) ||
                      (c.maskLength = k - 1)
                    return (o.greedy = f), g
                  }),
                  (t.getPlaceholder = l),
                  (t.getTest = c),
                  (t.getTestTemplate = s),
                  (t.getTests = d),
                  (t.isSubsetOf = f)
                var a,
                  n =
                    (a = i(2394)) && a.__esModule
                      ? a
                      : {
                          default: a,
                        }
                function r(e, t) {
                  var i = (
                    null != e.alternation ? e.mloc[o(e)] : e.locator
                  ).join('')
                  if ('' !== i) for (; i.length < t; ) i += '0'
                  return i
                }
                function o(e) {
                  var t = e.locator[e.alternation]
                  return (
                    'string' == typeof t &&
                      t.length > 0 &&
                      (t = t.split(',')[0]),
                    void 0 !== t ? t.toString() : ''
                  )
                }
                function l(e, t, i) {
                  var a = this.opts,
                    n = this.maskset
                  if (
                    void 0 !== (t = t || c.call(this, e).match).placeholder ||
                    !0 === i
                  )
                    return 'function' == typeof t.placeholder
                      ? t.placeholder(a)
                      : t.placeholder
                  if (!0 === t.static) {
                    if (e > -1 && void 0 === n.validPositions[e]) {
                      var r,
                        o = d.call(this, e),
                        l = []
                      if (
                        o.length >
                        1 + ('' === o[o.length - 1].match.def ? 1 : 0)
                      )
                        for (var s = 0; s < o.length; s++)
                          if (
                            '' !== o[s].match.def &&
                            !0 !== o[s].match.optionality &&
                            !0 !== o[s].match.optionalQuantifier &&
                            (!0 === o[s].match.static ||
                              void 0 === r ||
                              !1 !==
                                o[s].match.fn.test(r.match.def, n, e, !0, a)) &&
                            (l.push(o[s]),
                            !0 === o[s].match.static && (r = o[s]),
                            l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))
                          )
                            return a.placeholder.charAt(
                              e % a.placeholder.length,
                            )
                    }
                    return t.def
                  }
                  return a.placeholder.charAt(e % a.placeholder.length)
                }
                function s(e, t, i) {
                  return (
                    this.maskset.validPositions[e] ||
                    u.call(this, e, d.call(this, e, t ? t.slice() : t, i))
                  )
                }
                function u(e, t) {
                  var i = this.opts,
                    a = (function (e, t) {
                      var i = 0,
                        a = !1
                      t.forEach(function (e) {
                        e.match.optionality &&
                          (0 !== i && i !== e.match.optionality && (a = !0),
                          (0 === i || i > e.match.optionality) &&
                            (i = e.match.optionality))
                      }),
                        i && (0 == e || 1 == t.length ? (i = 0) : a || (i = 0))
                      return i
                    })(e, t)
                  e = e > 0 ? e - 1 : 0
                  var n,
                    o,
                    l,
                    s = r(c.call(this, e))
                  i.greedy &&
                    t.length > 1 &&
                    '' === t[t.length - 1].match.def &&
                    t.pop()
                  for (var u = 0; u < t.length; u++) {
                    var f = t[u]
                    n = r(f, s.length)
                    var d = Math.abs(n - s)
                    ;(void 0 === o ||
                      ('' !== n && d < o) ||
                      (l &&
                        !i.greedy &&
                        l.match.optionality &&
                        l.match.optionality - a > 0 &&
                        'master' === l.match.newBlockMarker &&
                        (!f.match.optionality ||
                          f.match.optionality - a < 1 ||
                          !f.match.newBlockMarker)) ||
                      (l &&
                        !i.greedy &&
                        l.match.optionalQuantifier &&
                        !f.match.optionalQuantifier)) &&
                      ((o = d), (l = f))
                  }
                  return l
                }
                function c(e, t) {
                  var i = this.maskset
                  return i.validPositions[e]
                    ? i.validPositions[e]
                    : (t || d.call(this, e))[0]
                }
                function f(e, t, i) {
                  function a(e) {
                    for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++)
                      if ('-' === e.charAt(n))
                        for (t = e.charCodeAt(n + 1); ++a < t; )
                          i.push(String.fromCharCode(a))
                      else (a = e.charCodeAt(n)), i.push(e.charAt(n))
                    return i.join('')
                  }
                  return (
                    e.match.def === t.match.nativeDef ||
                    (!(
                      !(
                        i.regex ||
                        (e.match.fn instanceof RegExp &&
                          t.match.fn instanceof RegExp)
                      ) ||
                      !0 === e.match.static ||
                      !0 === t.match.static
                    ) &&
                      -1 !==
                        a(t.match.fn.toString().replace(/[[\]/]/g, '')).indexOf(
                          a(e.match.fn.toString().replace(/[[\]/]/g, '')),
                        ))
                  )
                }
                function d(e, t, i) {
                  var a,
                    r,
                    o = this,
                    l = this.dependencyLib,
                    s = this.maskset,
                    c = this.opts,
                    d = this.el,
                    p = s.maskToken,
                    h = t ? i : 0,
                    v = t ? t.slice() : [0],
                    m = [],
                    g = !1,
                    k = t ? t.join('') : ''
                  function y(t, i, r, o) {
                    function l(r, o, u) {
                      function p(e, t) {
                        var i = 0 === t.matches.indexOf(e)
                        return (
                          i ||
                            t.matches.every(function (a, n) {
                              return (
                                !0 === a.isQuantifier
                                  ? (i = p(e, t.matches[n - 1]))
                                  : Object.prototype.hasOwnProperty.call(
                                      a,
                                      'matches',
                                    ) && (i = p(e, a)),
                                !i
                              )
                            }),
                          i
                        )
                      }
                      function v(e, t, i) {
                        var a, n
                        if (
                          ((s.tests[e] || s.validPositions[e]) &&
                            (s.tests[e] || [s.validPositions[e]]).every(
                              function (e, r) {
                                if (e.mloc[t]) return (a = e), !1
                                var o = void 0 !== i ? i : e.alternation,
                                  l =
                                    void 0 !== e.locator[o]
                                      ? e.locator[o].toString().indexOf(t)
                                      : -1
                                return (
                                  (void 0 === n || l < n) &&
                                    -1 !== l &&
                                    ((a = e), (n = l)),
                                  !0
                                )
                              },
                            ),
                          a)
                        ) {
                          var r = a.locator[a.alternation]
                          return (a.mloc[t] || a.mloc[r] || a.locator).slice(
                            (void 0 !== i ? i : a.alternation) + 1,
                          )
                        }
                        return void 0 !== i ? v(e, t) : void 0
                      }
                      function b(e, t) {
                        var i = e.alternation,
                          a =
                            void 0 === t ||
                            (i === t.alternation &&
                              -1 ===
                                e.locator[i].toString().indexOf(t.locator[i]))
                        if (!a && i > t.alternation)
                          for (var n = t.alternation; n < i; n++)
                            if (e.locator[n] !== t.locator[n]) {
                              ;(i = n), (a = !0)
                              break
                            }
                        if (a) {
                          e.mloc = e.mloc || {}
                          var r = e.locator[i]
                          if (void 0 !== r) {
                            if (
                              ('string' == typeof r && (r = r.split(',')[0]),
                              void 0 === e.mloc[r] &&
                                (e.mloc[r] = e.locator.slice()),
                              void 0 !== t)
                            ) {
                              for (var o in t.mloc)
                                'string' == typeof o && (o = o.split(',')[0]),
                                  void 0 === e.mloc[o] &&
                                    (e.mloc[o] = t.mloc[o])
                              e.locator[i] = Object.keys(e.mloc).join(',')
                            }
                            return !0
                          }
                          e.alternation = void 0
                        }
                        return !1
                      }
                      function x(e, t) {
                        if (e.locator.length !== t.locator.length) return !1
                        for (
                          var i = e.alternation + 1;
                          i < e.locator.length;
                          i++
                        )
                          if (e.locator[i] !== t.locator[i]) return !1
                        return !0
                      }
                      if (h > e + c._maxTestPos)
                        throw (
                          'Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ' +
                          s.mask
                        )
                      if (h === e && void 0 === r.matches) {
                        if (
                          (m.push({
                            match: r,
                            locator: o.reverse(),
                            cd: k,
                            mloc: {},
                          }),
                          !r.optionality ||
                            void 0 !== u ||
                            !(
                              (c.definitions &&
                                c.definitions[r.nativeDef] &&
                                c.definitions[r.nativeDef].optional) ||
                              (n.default.prototype.definitions[r.nativeDef] &&
                                n.default.prototype.definitions[r.nativeDef]
                                  .optional)
                            ))
                        )
                          return !0
                        ;(g = !0), (h = e)
                      } else if (void 0 !== r.matches) {
                        if (r.isGroup && u !== r) {
                          if (
                            (r = l(t.matches[t.matches.indexOf(r) + 1], o, u))
                          )
                            return !0
                        } else if (r.isOptional) {
                          var P = r,
                            E = m.length
                          if ((r = y(r, i, o, u))) {
                            if (
                              (m.forEach(function (e, t) {
                                t >= E &&
                                  (e.match.optionality = e.match.optionality
                                    ? e.match.optionality + 1
                                    : 1)
                              }),
                              (a = m[m.length - 1].match),
                              void 0 !== u || !p(a, P))
                            )
                              return !0
                            ;(g = !0), (h = e)
                          }
                        } else if (r.isAlternator) {
                          var S,
                            _ = r,
                            w = [],
                            M = m.slice(),
                            O = o.length,
                            T = !1,
                            C = i.length > 0 ? i.shift() : -1
                          if (-1 === C || 'string' == typeof C) {
                            var A,
                              D = h,
                              j = i.slice(),
                              B = []
                            if ('string' == typeof C) B = C.split(',')
                            else
                              for (A = 0; A < _.matches.length; A++)
                                B.push(A.toString())
                            if (void 0 !== s.excludes[e]) {
                              for (
                                var R = B.slice(),
                                  L = 0,
                                  I = s.excludes[e].length;
                                L < I;
                                L++
                              ) {
                                var F = s.excludes[e][L].toString().split(':')
                                o.length == F[1] && B.splice(B.indexOf(F[0]), 1)
                              }
                              0 === B.length && (delete s.excludes[e], (B = R))
                            }
                            ;(!0 === c.keepStatic ||
                              (isFinite(parseInt(c.keepStatic)) &&
                                D >= c.keepStatic)) &&
                              (B = B.slice(0, 1))
                            for (var N = 0; N < B.length; N++) {
                              ;(A = parseInt(B[N])),
                                (m = []),
                                (i =
                                  ('string' == typeof C && v(h, A, O)) ||
                                  j.slice())
                              var V = _.matches[A]
                              if (V && l(V, [A].concat(o), u)) r = !0
                              else if (
                                (0 === N && (T = !0),
                                V &&
                                  V.matches &&
                                  V.matches.length >
                                    _.matches[0].matches.length)
                              )
                                break
                              ;(S = m.slice()), (h = D), (m = [])
                              for (var G = 0; G < S.length; G++) {
                                var H = S[G],
                                  K = !1
                                ;(H.match.jit = H.match.jit || T),
                                  (H.alternation = H.alternation || O),
                                  b(H)
                                for (var U = 0; U < w.length; U++) {
                                  var $ = w[U]
                                  if (
                                    'string' != typeof C ||
                                    (void 0 !== H.alternation &&
                                      B.includes(
                                        H.locator[H.alternation].toString(),
                                      ))
                                  ) {
                                    if (
                                      H.match.nativeDef === $.match.nativeDef
                                    ) {
                                      ;(K = !0), b($, H)
                                      break
                                    }
                                    if (f(H, $, c)) {
                                      b(H, $) &&
                                        ((K = !0), w.splice(w.indexOf($), 0, H))
                                      break
                                    }
                                    if (f($, H, c)) {
                                      b($, H)
                                      break
                                    }
                                    if (
                                      ((Z = $),
                                      !0 === (Q = H).match.static &&
                                        !0 !== Z.match.static &&
                                        Z.match.fn.test(
                                          Q.match.def,
                                          s,
                                          e,
                                          !1,
                                          c,
                                          !1,
                                        ))
                                    ) {
                                      x(H, $) ||
                                      void 0 !==
                                        d.inputmask.userOptions.keepStatic
                                        ? b(H, $) &&
                                          ((K = !0),
                                          w.splice(w.indexOf($), 0, H))
                                        : (c.keepStatic = !0)
                                      break
                                    }
                                  }
                                }
                                K || w.push(H)
                              }
                            }
                            ;(m = M.concat(w)),
                              (h = e),
                              (g = m.length > 0),
                              (r = w.length > 0),
                              (i = j.slice())
                          } else
                            r = l(
                              _.matches[C] || t.matches[C],
                              [C].concat(o),
                              u,
                            )
                          if (r) return !0
                        } else if (
                          r.isQuantifier &&
                          u !== t.matches[t.matches.indexOf(r) - 1]
                        )
                          for (
                            var q = r, z = i.length > 0 ? i.shift() : 0;
                            z <
                              (isNaN(q.quantifier.max)
                                ? z + 1
                                : q.quantifier.max) && h <= e;
                            z++
                          ) {
                            var W = t.matches[t.matches.indexOf(q) - 1]
                            if ((r = l(W, [z].concat(o), W))) {
                              if (
                                (((a =
                                  m[m.length - 1].match).optionalQuantifier =
                                  z >= q.quantifier.min),
                                (a.jit =
                                  (z + 1) * (W.matches.indexOf(a) + 1) >
                                  q.quantifier.jit),
                                a.optionalQuantifier && p(a, W))
                              ) {
                                ;(g = !0), (h = e)
                                break
                              }
                              return (
                                a.jit &&
                                  (s.jitOffset[e] =
                                    W.matches.length - W.matches.indexOf(a)),
                                !0
                              )
                            }
                          }
                        else if ((r = y(r, i, o, u))) return !0
                      } else h++
                      var Q, Z
                    }
                    for (
                      var u = i.length > 0 ? i.shift() : 0;
                      u < t.matches.length;
                      u++
                    )
                      if (!0 !== t.matches[u].isQuantifier) {
                        var p = l(t.matches[u], [u].concat(r), o)
                        if (p && h === e) return p
                        if (h > e) break
                      }
                  }
                  if (e > -1) {
                    if (void 0 === t) {
                      for (
                        var b, x = e - 1;
                        void 0 === (b = s.validPositions[x] || s.tests[x]) &&
                        x > -1;

                      )
                        x--
                      void 0 !== b &&
                        x > -1 &&
                        ((v = (function (e, t) {
                          var i,
                            a = []
                          return (
                            Array.isArray(t) || (t = [t]),
                            t.length > 0 &&
                              (void 0 === t[0].alternation ||
                              !0 === c.keepStatic
                                ? 0 ===
                                    (a = u
                                      .call(o, e, t.slice())
                                      .locator.slice()).length &&
                                  (a = t[0].locator.slice())
                                : t.forEach(function (e) {
                                    '' !== e.def &&
                                      (0 === a.length
                                        ? ((i = e.alternation),
                                          (a = e.locator.slice()))
                                        : e.locator[i] &&
                                          -1 ===
                                            a[i]
                                              .toString()
                                              .indexOf(e.locator[i]) &&
                                          (a[i] += ',' + e.locator[i]))
                                  })),
                            a
                          )
                        })(x, b)),
                        (k = v.join('')),
                        (h = x))
                    }
                    if (s.tests[e] && s.tests[e][0].cd === k) return s.tests[e]
                    for (var P = v.shift(); P < p.length; P++)
                      if ((y(p[P], v, [P]) && h === e) || h > e) break
                  }
                  return (
                    (0 === m.length || g) &&
                      m.push({
                        match: {
                          fn: null,
                          static: !0,
                          optionality: !1,
                          casing: null,
                          def: '',
                          placeholder: '',
                        },
                        locator: [],
                        mloc: {},
                        cd: k,
                      }),
                    void 0 !== t && s.tests[e]
                      ? (r = l.extend(!0, [], m))
                      : ((s.tests[e] = l.extend(!0, [], m)), (r = s.tests[e])),
                    m.forEach(function (e) {
                      e.match.optionality = !1
                    }),
                    r
                  )
                }
              },
              7215: function (e, t, i) {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.alternate = s),
                  (t.checkAlternationMatch = function (e, t, i) {
                    for (
                      var a,
                        n = this.opts.greedy ? t : t.slice(0, 1),
                        r = !1,
                        o = void 0 !== i ? i.split(',') : [],
                        l = 0;
                      l < o.length;
                      l++
                    )
                      -1 !== (a = e.indexOf(o[l])) && e.splice(a, 1)
                    for (var s = 0; s < e.length; s++)
                      if (n.includes(e[s])) {
                        r = !0
                        break
                      }
                    return r
                  }),
                  (t.handleRemove = function (e, t, i, a, l) {
                    var u = this,
                      c = this.maskset,
                      f = this.opts
                    if (
                      (f.numericInput || u.isRTL) &&
                      (t === r.default.BACKSPACE
                        ? (t = r.default.DELETE)
                        : t === r.default.DELETE && (t = r.default.BACKSPACE),
                      u.isRTL)
                    ) {
                      var d = i.end
                      ;(i.end = i.begin), (i.begin = d)
                    }
                    var p,
                      h = o.getLastValidPosition.call(u, void 0, !0)
                    i.end >= o.getBuffer.call(u).length &&
                      h >= i.end &&
                      (i.end = h + 1)
                    t === r.default.BACKSPACE
                      ? i.end - i.begin < 1 &&
                        (i.begin = o.seekPrevious.call(u, i.begin))
                      : t === r.default.DELETE &&
                        i.begin === i.end &&
                        (i.end = o.isMask.call(u, i.end, !0, !0)
                          ? i.end + 1
                          : o.seekNext.call(u, i.end) + 1)
                    if (!1 !== (p = m.call(u, i))) {
                      if (
                        (!0 !== a && !1 !== f.keepStatic) ||
                        (null !== f.regex &&
                          -1 !==
                            n.getTest.call(u, i.begin).match.def.indexOf('|'))
                      ) {
                        var v = s.call(u, !0)
                        if (v) {
                          var g =
                            void 0 !== v.caret
                              ? v.caret
                              : v.pos
                              ? o.seekNext.call(
                                  u,
                                  v.pos.begin ? v.pos.begin : v.pos,
                                )
                              : o.getLastValidPosition.call(u, -1, !0)
                          ;(t !== r.default.DELETE || i.begin > g) && i.begin
                        }
                      }
                      !0 !== a &&
                        ((c.p = t === r.default.DELETE ? i.begin + p : i.begin),
                        (c.p = o.determineNewCaretPosition.call(
                          u,
                          {
                            begin: c.p,
                            end: c.p,
                          },
                          !1,
                          !1 === f.insertMode && t === r.default.BACKSPACE
                            ? 'none'
                            : void 0,
                        ).begin))
                    }
                  }),
                  (t.isComplete = c),
                  (t.isSelection = f),
                  (t.isValid = d),
                  (t.refreshFromBuffer = h),
                  (t.revalidateMask = m)
                var a,
                  n = i(4713),
                  r =
                    (a = i(5581)) && a.__esModule
                      ? a
                      : {
                          default: a,
                        },
                  o = i(8711),
                  l = i(6030)
                function s(e, t, i, a, r, l) {
                  var u,
                    c,
                    f,
                    p,
                    h,
                    v,
                    m,
                    g,
                    k,
                    y,
                    b,
                    x = this,
                    P = this.dependencyLib,
                    E = this.opts,
                    S = x.maskset,
                    _ = P.extend(!0, {}, S.validPositions),
                    w = P.extend(!0, {}, S.tests),
                    M = !1,
                    O = !1,
                    T = void 0 !== r ? r : o.getLastValidPosition.call(x)
                  if (
                    (l &&
                      ((y = l.begin),
                      (b = l.end),
                      l.begin > l.end && ((y = l.end), (b = l.begin))),
                    -1 === T && void 0 === r)
                  )
                    (u = 0), (c = (p = n.getTest.call(x, u)).alternation)
                  else
                    for (; T >= 0; T--)
                      if (
                        (f = S.validPositions[T]) &&
                        void 0 !== f.alternation
                      ) {
                        if (
                          p &&
                          p.locator[f.alternation] !== f.locator[f.alternation]
                        )
                          break
                        ;(u = T), (c = S.validPositions[u].alternation), (p = f)
                      }
                  if (void 0 !== c) {
                    ;(m = parseInt(u)),
                      (S.excludes[m] = S.excludes[m] || []),
                      !0 !== e &&
                        S.excludes[m].push(
                          (0, n.getDecisionTaker)(p) + ':' + p.alternation,
                        )
                    var C = [],
                      A = -1
                    for (
                      h = m;
                      h < o.getLastValidPosition.call(x, void 0, !0) + 1;
                      h++
                    )
                      -1 === A &&
                        e <= h &&
                        void 0 !== t &&
                        (C.push(t), (A = C.length - 1)),
                        (v = S.validPositions[h]) &&
                          !0 !== v.generatedInput &&
                          (void 0 === l || h < y || h >= b) &&
                          C.push(v.input),
                        delete S.validPositions[h]
                    for (
                      -1 === A &&
                      void 0 !== t &&
                      (C.push(t), (A = C.length - 1));
                      void 0 !== S.excludes[m] && S.excludes[m].length < 10;

                    ) {
                      for (
                        S.tests = {}, o.resetMaskSet.call(x, !0), M = !0, h = 0;
                        h < C.length &&
                        ((g =
                          M.caret ||
                          o.getLastValidPosition.call(x, void 0, !0) + 1),
                        (k = C[h]),
                        (M = d.call(x, g, k, !1, a, !0)));
                        h++
                      )
                        h === A && (O = M),
                          1 == e &&
                            M &&
                            (O = {
                              caretPos: h,
                            })
                      if (M) break
                      if (
                        (o.resetMaskSet.call(x),
                        (p = n.getTest.call(x, m)),
                        (S.validPositions = P.extend(!0, {}, _)),
                        (S.tests = P.extend(!0, {}, w)),
                        !S.excludes[m])
                      ) {
                        O = s.call(x, e, t, i, a, m - 1, l)
                        break
                      }
                      var D = (0, n.getDecisionTaker)(p)
                      if (
                        -1 !== S.excludes[m].indexOf(D + ':' + p.alternation)
                      ) {
                        O = s.call(x, e, t, i, a, m - 1, l)
                        break
                      }
                      for (
                        S.excludes[m].push(D + ':' + p.alternation), h = m;
                        h < o.getLastValidPosition.call(x, void 0, !0) + 1;
                        h++
                      )
                        delete S.validPositions[h]
                    }
                  }
                  return (O && !1 === E.keepStatic) || delete S.excludes[m], O
                }
                function u(e, t, i) {
                  var a = this.opts,
                    n = this.maskset
                  switch (a.casing || t.casing) {
                    case 'upper':
                      e = e.toUpperCase()
                      break

                    case 'lower':
                      e = e.toLowerCase()
                      break

                    case 'title':
                      var o = n.validPositions[i - 1]
                      e =
                        0 === i ||
                        (o && o.input === String.fromCharCode(r.default.SPACE))
                          ? e.toUpperCase()
                          : e.toLowerCase()
                      break

                    default:
                      if ('function' == typeof a.casing) {
                        var l = Array.prototype.slice.call(arguments)
                        l.push(n.validPositions), (e = a.casing.apply(this, l))
                      }
                  }
                  return e
                }
                function c(e) {
                  var t = this,
                    i = this.opts,
                    a = this.maskset
                  if ('function' == typeof i.isComplete)
                    return i.isComplete(e, i)
                  if ('*' !== i.repeat) {
                    var r = !1,
                      l = o.determineLastRequiredPosition.call(t, !0),
                      s = o.seekPrevious.call(t, l.l)
                    if (
                      void 0 === l.def ||
                      l.def.newBlockMarker ||
                      l.def.optionality ||
                      l.def.optionalQuantifier
                    ) {
                      r = !0
                      for (var u = 0; u <= s; u++) {
                        var c = n.getTestTemplate.call(t, u).match
                        if (
                          (!0 !== c.static &&
                            void 0 === a.validPositions[u] &&
                            !0 !== c.optionality &&
                            !0 !== c.optionalQuantifier) ||
                          (!0 === c.static &&
                            e[u] !== n.getPlaceholder.call(t, u, c))
                        ) {
                          r = !1
                          break
                        }
                      }
                    }
                    return r
                  }
                }
                function f(e) {
                  var t = this.opts.insertMode ? 0 : 1
                  return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t
                }
                function d(e, t, i, a, r, l, p) {
                  var g = this,
                    k = this.dependencyLib,
                    y = this.opts,
                    b = g.maskset
                  i = !0 === i
                  var x = e
                  function P(e) {
                    if (void 0 !== e) {
                      if (
                        (void 0 !== e.remove &&
                          (Array.isArray(e.remove) || (e.remove = [e.remove]),
                          e.remove
                            .sort(function (e, t) {
                              return t.pos - e.pos
                            })
                            .forEach(function (e) {
                              m.call(g, {
                                begin: e,
                                end: e + 1,
                              })
                            }),
                          (e.remove = void 0)),
                        void 0 !== e.insert &&
                          (Array.isArray(e.insert) || (e.insert = [e.insert]),
                          e.insert
                            .sort(function (e, t) {
                              return e.pos - t.pos
                            })
                            .forEach(function (e) {
                              '' !== e.c &&
                                d.call(
                                  g,
                                  e.pos,
                                  e.c,
                                  void 0 === e.strict || e.strict,
                                  void 0 !== e.fromIsValid ? e.fromIsValid : a,
                                )
                            }),
                          (e.insert = void 0)),
                        e.refreshFromBuffer && e.buffer)
                      ) {
                        var t = e.refreshFromBuffer
                        h.call(g, !0 === t ? t : t.start, t.end, e.buffer),
                          (e.refreshFromBuffer = void 0)
                      }
                      void 0 !== e.rewritePosition &&
                        ((x = e.rewritePosition), (e = !0))
                    }
                    return e
                  }
                  function E(t, i, r) {
                    var l = !1
                    return (
                      n.getTests.call(g, t).every(function (s, c) {
                        var d = s.match
                        if (
                          (o.getBuffer.call(g, !0),
                          !1 !==
                            (l =
                              (!d.jit ||
                                void 0 !==
                                  b.validPositions[
                                    o.seekPrevious.call(g, t)
                                  ]) &&
                              (null != d.fn
                                ? d.fn.test(i, b, t, r, y, f.call(g, e))
                                : (i === d.def ||
                                    i === y.skipOptionalPartCharacter) &&
                                  '' !== d.def && {
                                    c:
                                      n.getPlaceholder.call(g, t, d, !0) ||
                                      d.def,
                                    pos: t,
                                  })))
                        ) {
                          var p = void 0 !== l.c ? l.c : i,
                            h = t
                          return (
                            (p =
                              p === y.skipOptionalPartCharacter &&
                              !0 === d.static
                                ? n.getPlaceholder.call(g, t, d, !0) || d.def
                                : p),
                            !0 !== (l = P(l)) &&
                              void 0 !== l.pos &&
                              l.pos !== t &&
                              (h = l.pos),
                            !0 !== l && void 0 === l.pos && void 0 === l.c
                              ? !1
                              : (!1 ===
                                  m.call(
                                    g,
                                    e,
                                    k.extend({}, s, {
                                      input: u.call(g, p, d, h),
                                    }),
                                    a,
                                    h,
                                  ) && (l = !1),
                                !1)
                          )
                        }
                        return !0
                      }),
                      l
                    )
                  }
                  void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin)
                  var S = !0,
                    _ = k.extend(!0, {}, b.validPositions)
                  if (
                    !1 === y.keepStatic &&
                    void 0 !== b.excludes[x] &&
                    !0 !== r &&
                    !0 !== a
                  )
                    for (var w = x; w < (g.isRTL ? e.begin : e.end); w++)
                      void 0 !== b.excludes[w] &&
                        ((b.excludes[w] = void 0), delete b.tests[w])
                  if (
                    ('function' == typeof y.preValidation &&
                      !0 !== a &&
                      !0 !== l &&
                      (S = P(
                        (S = y.preValidation.call(
                          g,
                          o.getBuffer.call(g),
                          x,
                          t,
                          f.call(g, e),
                          y,
                          b,
                          e,
                          i || r,
                        )),
                      )),
                    !0 === S)
                  ) {
                    if (
                      ((S = E(x, t, i)),
                      (!i || !0 === a) && !1 === S && !0 !== l)
                    ) {
                      var M = b.validPositions[x]
                      if (
                        !M ||
                        !0 !== M.match.static ||
                        (M.match.def !== t && t !== y.skipOptionalPartCharacter)
                      ) {
                        if (
                          y.insertMode ||
                          void 0 === b.validPositions[o.seekNext.call(g, x)] ||
                          e.end > x
                        ) {
                          var O = !1
                          if (
                            (b.jitOffset[x] &&
                              void 0 ===
                                b.validPositions[o.seekNext.call(g, x)] &&
                              !1 !==
                                (S = d.call(
                                  g,
                                  x + b.jitOffset[x],
                                  t,
                                  !0,
                                  !0,
                                )) &&
                              (!0 !== r && (S.caret = x), (O = !0)),
                            e.end > x && (b.validPositions[x] = void 0),
                            !O && !o.isMask.call(g, x, y.keepStatic && 0 === x))
                          )
                            for (
                              var T = x + 1,
                                C = o.seekNext.call(g, x, !1, 0 !== x);
                              T <= C;
                              T++
                            )
                              if (!1 !== (S = E(T, t, i))) {
                                ;(S =
                                  v.call(g, x, void 0 !== S.pos ? S.pos : T) ||
                                  S),
                                  (x = T)
                                break
                              }
                        }
                      } else
                        S = {
                          caret: o.seekNext.call(g, x),
                        }
                    }
                    !1 !== S ||
                    !y.keepStatic ||
                    (!c.call(g, o.getBuffer.call(g)) && 0 !== x) ||
                    i ||
                    !0 === r
                      ? f.call(g, e) &&
                        b.tests[x] &&
                        b.tests[x].length > 1 &&
                        y.keepStatic &&
                        !i &&
                        !0 !== r &&
                        (S = s.call(g, !0))
                      : (S = s.call(g, x, t, i, a, void 0, e)),
                      !0 === S &&
                        (S = {
                          pos: x,
                        })
                  }
                  if (
                    'function' == typeof y.postValidation &&
                    !0 !== a &&
                    !0 !== l
                  ) {
                    var A = y.postValidation.call(
                      g,
                      o.getBuffer.call(g, !0),
                      void 0 !== e.begin ? (g.isRTL ? e.end : e.begin) : e,
                      t,
                      S,
                      y,
                      b,
                      i,
                      p,
                    )
                    void 0 !== A && (S = !0 === A ? S : A)
                  }
                  S && void 0 === S.pos && (S.pos = x),
                    !1 === S || !0 === l
                      ? (o.resetMaskSet.call(g, !0),
                        (b.validPositions = k.extend(!0, {}, _)))
                      : v.call(g, void 0, x, !0)
                  var D = P(S)
                  void 0 !== g.maxLength &&
                    o.getBuffer.call(g).length > g.maxLength &&
                    !a &&
                    (o.resetMaskSet.call(g, !0),
                    (b.validPositions = k.extend(!0, {}, _)),
                    (D = !1))
                  return D
                }
                function p(e, t, i) {
                  for (
                    var a = this.maskset,
                      r = !1,
                      o = n.getTests.call(this, e),
                      l = 0;
                    l < o.length;
                    l++
                  ) {
                    if (
                      o[l].match &&
                      ((o[l].match.nativeDef ===
                        t.match[i.shiftPositions ? 'def' : 'nativeDef'] &&
                        (!i.shiftPositions || !t.match.static)) ||
                        o[l].match.nativeDef === t.match.nativeDef ||
                        (i.regex &&
                          !o[l].match.static &&
                          o[l].match.fn.test(t.input)))
                    ) {
                      r = !0
                      break
                    }
                    if (o[l].match && o[l].match.def === t.match.nativeDef) {
                      r = void 0
                      break
                    }
                  }
                  return (
                    !1 === r &&
                      void 0 !== a.jitOffset[e] &&
                      (r = p.call(this, e + a.jitOffset[e], t, i)),
                    r
                  )
                }
                function h(e, t, i) {
                  var a,
                    n,
                    r = this,
                    s = this.maskset,
                    u = this.opts,
                    c = this.dependencyLib,
                    f = u.skipOptionalPartCharacter,
                    d = r.isRTL ? i.slice().reverse() : i
                  if (((u.skipOptionalPartCharacter = ''), !0 === e))
                    o.resetMaskSet.call(r),
                      (s.tests = {}),
                      (e = 0),
                      (t = i.length),
                      (n = o.determineNewCaretPosition.call(
                        r,
                        {
                          begin: 0,
                          end: 0,
                        },
                        !1,
                      ).begin)
                  else {
                    for (a = e; a < t; a++) delete s.validPositions[a]
                    n = e
                  }
                  var p = new c.Event('keypress')
                  for (a = e; a < t; a++) {
                    ;(p.keyCode = d[a].toString().charCodeAt(0)),
                      (r.ignorable = !1)
                    var h = l.EventHandlers.keypressEvent.call(
                      r,
                      p,
                      !0,
                      !1,
                      !1,
                      n,
                    )
                    !1 !== h && void 0 !== h && (n = h.forwardPosition)
                  }
                  u.skipOptionalPartCharacter = f
                }
                function v(e, t, i) {
                  var a = this,
                    r = this.maskset,
                    l = this.dependencyLib
                  if (void 0 === e)
                    for (e = t - 1; e > 0 && !r.validPositions[e]; e--);
                  for (var s = e; s < t; s++)
                    if (
                      void 0 === r.validPositions[s] &&
                      !o.isMask.call(a, s, !1)
                    )
                      if (
                        0 == s ? n.getTest.call(a, s) : r.validPositions[s - 1]
                      ) {
                        var u = n.getTests.call(a, s).slice()
                        '' === u[u.length - 1].match.def && u.pop()
                        var c,
                          f = n.determineTestTemplate.call(a, s, u)
                        if (
                          f &&
                          (!0 !== f.match.jit ||
                            ('master' === f.match.newBlockMarker &&
                              (c = r.validPositions[s + 1]) &&
                              !0 === c.match.optionalQuantifier)) &&
                          (((f = l.extend({}, f, {
                            input:
                              n.getPlaceholder.call(a, s, f.match, !0) ||
                              f.match.def,
                          })).generatedInput = !0),
                          m.call(a, s, f, !0),
                          !0 !== i)
                        ) {
                          var p = r.validPositions[t].input
                          return (
                            (r.validPositions[t] = void 0),
                            d.call(a, t, p, !0, !0)
                          )
                        }
                      }
                }
                function m(e, t, i, a) {
                  var r = this,
                    l = this.maskset,
                    s = this.opts,
                    u = this.dependencyLib
                  function c(e, t, i) {
                    var a = t[e]
                    if (
                      void 0 !== a &&
                      !0 === a.match.static &&
                      !0 !== a.match.optionality &&
                      (void 0 === t[0] || void 0 === t[0].alternation)
                    ) {
                      var n =
                          i.begin <= e - 1
                            ? t[e - 1] &&
                              !0 === t[e - 1].match.static &&
                              t[e - 1]
                            : t[e - 1],
                        r =
                          i.end > e + 1
                            ? t[e + 1] &&
                              !0 === t[e + 1].match.static &&
                              t[e + 1]
                            : t[e + 1]
                      return n && r
                    }
                    return !1
                  }
                  var f = 0,
                    h = void 0 !== e.begin ? e.begin : e,
                    v = void 0 !== e.end ? e.end : e,
                    m = !0
                  if (
                    (e.begin > e.end && ((h = e.end), (v = e.begin)),
                    (a = void 0 !== a ? a : h),
                    h !== v ||
                      (s.insertMode &&
                        void 0 !== l.validPositions[a] &&
                        void 0 === i) ||
                      void 0 === t ||
                      t.match.optionalQuantifier ||
                      t.match.optionality)
                  ) {
                    var g,
                      k = u.extend(!0, {}, l.validPositions),
                      y = o.getLastValidPosition.call(r, void 0, !0)
                    for (l.p = h, g = y; g >= h; g--)
                      delete l.validPositions[g],
                        void 0 === t && delete l.tests[g + 1]
                    var b,
                      x,
                      P = a,
                      E = P
                    for (
                      t &&
                        ((l.validPositions[a] = u.extend(!0, {}, t)), E++, P++),
                        g = t ? v : v - 1;
                      g <= y;
                      g++
                    ) {
                      if (
                        void 0 !== (b = k[g]) &&
                        !0 !== b.generatedInput &&
                        (g >= v ||
                          (g >= h &&
                            c(g, k, {
                              begin: h,
                              end: v,
                            })))
                      ) {
                        for (; '' !== n.getTest.call(r, E).match.def; ) {
                          if (
                            !1 !== (x = p.call(r, E, b, s)) ||
                            '+' === b.match.def
                          ) {
                            '+' === b.match.def && o.getBuffer.call(r, !0)
                            var S = d.call(
                              r,
                              E,
                              b.input,
                              '+' !== b.match.def,
                              !0,
                            )
                            if (
                              ((m = !1 !== S), (P = (S.pos || E) + 1), !m && x)
                            )
                              break
                          } else m = !1
                          if (m) {
                            void 0 === t &&
                              b.match.static &&
                              g === e.begin &&
                              f++
                            break
                          }
                          if ((!m && o.getBuffer.call(r), E > l.maskLength))
                            break
                          E++
                        }
                        '' == n.getTest.call(r, E).match.def && (m = !1),
                          (E = P)
                      }
                      if (!m) break
                    }
                    if (!m)
                      return (
                        (l.validPositions = u.extend(!0, {}, k)),
                        o.resetMaskSet.call(r, !0),
                        !1
                      )
                  } else
                    t &&
                      n.getTest.call(r, a).match.cd === t.match.cd &&
                      (l.validPositions[a] = u.extend(!0, {}, t))
                  return o.resetMaskSet.call(r, !0), f
                }
              },
              5581: function (e) {
                e.exports = JSON.parse(
                  '{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}',
                )
              },
            },
            t = {}
          function i(a) {
            var n = t[a]
            if (void 0 !== n) return n.exports
            var r = (t[a] = {
              exports: {},
            })
            return e[a](r, r.exports, i), r.exports
          }
          var a = {}
          return (
            (function () {
              var e,
                t = a
              Object.defineProperty(t, '__esModule', {
                value: !0,
              }),
                (t.default = void 0),
                i(3851),
                i(219),
                i(207),
                i(5296)
              var n = (
                (e = i(2394)) && e.__esModule
                  ? e
                  : {
                      default: e,
                    }
              ).default
              t.default = n
            })(),
            a
          )
        })()
      })
    },
    211: function (__unused_webpack_module, exports) {
      ;(function (global, factory) {
        true ? factory(exports) : 0
      })(0, function (exports) {
        'use strict'
        exports.PipsMode = void 0
        ;(function (PipsMode) {
          PipsMode['Range'] = 'range'
          PipsMode['Steps'] = 'steps'
          PipsMode['Positions'] = 'positions'
          PipsMode['Count'] = 'count'
          PipsMode['Values'] = 'values'
        })(exports.PipsMode || (exports.PipsMode = {}))
        exports.PipsType = void 0
        ;(function (PipsType) {
          PipsType[(PipsType['None'] = -1)] = 'None'
          PipsType[(PipsType['NoValue'] = 0)] = 'NoValue'
          PipsType[(PipsType['LargeValue'] = 1)] = 'LargeValue'
          PipsType[(PipsType['SmallValue'] = 2)] = 'SmallValue'
        })(exports.PipsType || (exports.PipsType = {}))
        function isValidFormatter(entry) {
          return (
            isValidPartialFormatter(entry) && 'function' === typeof entry.from
          )
        }
        function isValidPartialFormatter(entry) {
          return 'object' === typeof entry && 'function' === typeof entry.to
        }
        function removeElement(el) {
          el.parentElement.removeChild(el)
        }
        function isSet(value) {
          return null !== value && void 0 !== value
        }
        function preventDefault(e) {
          e.preventDefault()
        }
        function unique(array) {
          return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false
          }, {})
        }
        function closest(value, to) {
          return Math.round(value / to) * to
        }
        function offset(elem, orientation) {
          var rect = elem.getBoundingClientRect()
          var doc = elem.ownerDocument
          var docElem = doc.documentElement
          var pageOffset = getPageOffset(doc)
          if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent))
            pageOffset.x = 0
          return orientation
            ? rect.top + pageOffset.y - docElem.clientTop
            : rect.left + pageOffset.x - docElem.clientLeft
        }
        function isNumeric(a) {
          return 'number' === typeof a && !isNaN(a) && isFinite(a)
        }
        function addClassFor(element, className, duration) {
          if (duration > 0) {
            addClass(element, className)
            setTimeout(function () {
              removeClass(element, className)
            }, duration)
          }
        }
        function limit(a) {
          return Math.max(Math.min(a, 100), 0)
        }
        function asArray(a) {
          return Array.isArray(a) ? a : [a]
        }
        function countDecimals(numStr) {
          numStr = String(numStr)
          var pieces = numStr.split('.')
          return pieces.length > 1 ? pieces[1].length : 0
        }
        function addClass(el, className) {
          if (el.classList && !/\s/.test(className)) el.classList.add(className)
          else el.className += ' ' + className
        }
        function removeClass(el, className) {
          if (el.classList && !/\s/.test(className))
            el.classList.remove(className)
          else
            el.className = el.className.replace(
              new RegExp(
                '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
                'gi',
              ),
              ' ',
            )
        }
        function hasClass(el, className) {
          return el.classList
            ? el.classList.contains(className)
            : new RegExp('\\b' + className + '\\b').test(el.className)
        }
        function getPageOffset(doc) {
          var supportPageOffset = void 0 !== window.pageXOffset
          var isCSS1Compat = 'CSS1Compat' === (doc.compatMode || '')
          var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
            ? doc.documentElement.scrollLeft
            : doc.body.scrollLeft
          var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
            ? doc.documentElement.scrollTop
            : doc.body.scrollTop
          return {
            x,
            y,
          }
        }
        function getActions() {
          return window.navigator.pointerEnabled
            ? {
                start: 'pointerdown',
                move: 'pointermove',
                end: 'pointerup',
              }
            : window.navigator.msPointerEnabled
            ? {
                start: 'MSPointerDown',
                move: 'MSPointerMove',
                end: 'MSPointerUp',
              }
            : {
                start: 'mousedown touchstart',
                move: 'mousemove touchmove',
                end: 'mouseup touchend',
              }
        }
        function getSupportsPassive() {
          var supportsPassive = false
          try {
            var opts = Object.defineProperty({}, 'passive', {
              get: function () {
                supportsPassive = true
              },
            })
            window.addEventListener('test', null, opts)
          } catch (e) {}
          return supportsPassive
        }
        function getSupportsTouchActionNone() {
          return (
            window.CSS && CSS.supports && CSS.supports('touch-action', 'none')
          )
        }
        function subRangeRatio(pa, pb) {
          return 100 / (pb - pa)
        }
        function fromPercentage(range, value, startRange) {
          return (100 * value) / (range[startRange + 1] - range[startRange])
        }
        function toPercentage(range, value) {
          return fromPercentage(
            range,
            range[0] < 0 ? value + Math.abs(range[0]) : value - range[0],
            0,
          )
        }
        function isPercentage(range, value) {
          return (value * (range[1] - range[0])) / 100 + range[0]
        }
        function getJ(value, arr) {
          var j = 1
          while (value >= arr[j]) j += 1
          return j
        }
        function toStepping(xVal, xPct, value) {
          if (value >= xVal.slice(-1)[0]) return 100
          var j = getJ(value, xVal)
          var va = xVal[j - 1]
          var vb = xVal[j]
          var pa = xPct[j - 1]
          var pb = xPct[j]
          return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb)
        }
        function fromStepping(xVal, xPct, value) {
          if (value >= 100) return xVal.slice(-1)[0]
          var j = getJ(value, xPct)
          var va = xVal[j - 1]
          var vb = xVal[j]
          var pa = xPct[j - 1]
          var pb = xPct[j]
          return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb))
        }
        function getStep(xPct, xSteps, snap, value) {
          if (100 === value) return value
          var j = getJ(value, xPct)
          var a = xPct[j - 1]
          var b = xPct[j]
          if (snap) {
            if (value - a > (b - a) / 2) return b
            return a
          }
          if (!xSteps[j - 1]) return value
          return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1])
        }
        var Spectrum = (function () {
          function Spectrum(entry, snap, singleStep) {
            this.xPct = []
            this.xVal = []
            this.xSteps = []
            this.xNumSteps = []
            this.xHighestCompleteStep = []
            this.xSteps = [singleStep || false]
            this.xNumSteps = [false]
            this.snap = snap
            var index
            var ordered = []
            Object.keys(entry).forEach(function (index) {
              ordered.push([asArray(entry[index]), index])
            })
            ordered.sort(function (a, b) {
              return a[0][0] - b[0][0]
            })
            for (index = 0; index < ordered.length; index++)
              this.handleEntryPoint(ordered[index][1], ordered[index][0])
            this.xNumSteps = this.xSteps.slice(0)
            for (index = 0; index < this.xNumSteps.length; index++)
              this.handleStepPoint(index, this.xNumSteps[index])
          }
          Spectrum.prototype.getDistance = function (value) {
            var distances = []
            for (var index = 0; index < this.xNumSteps.length - 1; index++)
              distances[index] = fromPercentage(this.xVal, value, index)
            return distances
          }
          Spectrum.prototype.getAbsoluteDistance = function (
            value,
            distances,
            direction,
          ) {
            var xPct_index = 0
            if (value < this.xPct[this.xPct.length - 1])
              while (value > this.xPct[xPct_index + 1]) xPct_index++
            else if (value === this.xPct[this.xPct.length - 1])
              xPct_index = this.xPct.length - 2
            if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++
            if (null === distances) distances = []
            var start_factor
            var rest_factor = 1
            var rest_rel_distance = distances[xPct_index]
            var range_pct = 0
            var rel_range_distance = 0
            var abs_distance_counter = 0
            var range_counter = 0
            if (direction)
              start_factor =
                (value - this.xPct[xPct_index]) /
                (this.xPct[xPct_index + 1] - this.xPct[xPct_index])
            else
              start_factor =
                (this.xPct[xPct_index + 1] - value) /
                (this.xPct[xPct_index + 1] - this.xPct[xPct_index])
            while (rest_rel_distance > 0) {
              range_pct =
                this.xPct[xPct_index + 1 + range_counter] -
                this.xPct[xPct_index + range_counter]
              if (
                distances[xPct_index + range_counter] * rest_factor +
                  100 -
                  100 * start_factor >
                100
              ) {
                rel_range_distance = range_pct * start_factor
                rest_factor =
                  (rest_rel_distance - 100 * start_factor) /
                  distances[xPct_index + range_counter]
                start_factor = 1
              } else {
                rel_range_distance =
                  ((distances[xPct_index + range_counter] * range_pct) / 100) *
                  rest_factor
                rest_factor = 0
              }
              if (direction) {
                abs_distance_counter -= rel_range_distance
                if (this.xPct.length + range_counter >= 1) range_counter--
              } else {
                abs_distance_counter += rel_range_distance
                if (this.xPct.length - range_counter >= 1) range_counter++
              }
              rest_rel_distance =
                distances[xPct_index + range_counter] * rest_factor
            }
            return value + abs_distance_counter
          }
          Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value)
            return value
          }
          Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value)
          }
          Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value)
            return value
          }
          Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct)
            if (100 === value || (isDown && value === this.xPct[j - 1]))
              j = Math.max(j - 1, 1)
            return (this.xVal[j] - this.xVal[j - 1]) / size
          }
          Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct)
            return {
              stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2],
              },
              thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1],
              },
              stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j],
              },
            }
          }
          Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals)
            return Math.max.apply(null, stepDecimals)
          }
          Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1]
          }
          Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value))
          }
          Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage
            if ('min' === index) percentage = 0
            else if ('max' === index) percentage = 100
            else percentage = parseFloat(index)
            if (!isNumeric(percentage) || !isNumeric(value[0]))
              throw new Error("noUiSlider: 'range' value isn't numeric.")
            this.xPct.push(percentage)
            this.xVal.push(value[0])
            var value1 = Number(value[1])
            if (!percentage) {
              if (!isNaN(value1)) this.xSteps[0] = value1
            } else this.xSteps.push(isNaN(value1) ? false : value1)
            this.xHighestCompleteStep.push(0)
          }
          Spectrum.prototype.handleStepPoint = function (i, n) {
            if (!n) return
            if (this.xVal[i] === this.xVal[i + 1]) {
              this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i]
              return
            }
            this.xSteps[i] =
              fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) /
              subRangeRatio(this.xPct[i], this.xPct[i + 1])
            var totalSteps =
              (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i]
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1)
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep
            this.xHighestCompleteStep[i] = step
          }
          return Spectrum
        })()
        var defaultFormatter = {
          to: function (value) {
            return void 0 === value ? '' : value.toFixed(2)
          },
          from: Number,
        }
        var cssClasses = {
          target: 'target',
          base: 'base',
          origin: 'origin',
          handle: 'handle',
          handleLower: 'handle-lower',
          handleUpper: 'handle-upper',
          touchArea: 'touch-area',
          horizontal: 'horizontal',
          vertical: 'vertical',
          background: 'background',
          connect: 'connect',
          connects: 'connects',
          ltr: 'ltr',
          rtl: 'rtl',
          textDirectionLtr: 'txt-dir-ltr',
          textDirectionRtl: 'txt-dir-rtl',
          draggable: 'draggable',
          drag: 'state-drag',
          tap: 'state-tap',
          active: 'active',
          tooltip: 'tooltip',
          pips: 'pips',
          pipsHorizontal: 'pips-horizontal',
          pipsVertical: 'pips-vertical',
          marker: 'marker',
          markerHorizontal: 'marker-horizontal',
          markerVertical: 'marker-vertical',
          markerNormal: 'marker-normal',
          markerLarge: 'marker-large',
          markerSub: 'marker-sub',
          value: 'value',
          valueHorizontal: 'value-horizontal',
          valueVertical: 'value-vertical',
          valueNormal: 'value-normal',
          valueLarge: 'value-large',
          valueSub: 'value-sub',
        }
        var INTERNAL_EVENT_NS = {
          tooltips: '.__tooltips',
          aria: '.__aria',
        }
        function testStep(parsed, entry) {
          if (!isNumeric(entry))
            throw new Error("noUiSlider: 'step' is not numeric.")
          parsed.singleStep = entry
        }
        function testKeyboardPageMultiplier(parsed, entry) {
          if (!isNumeric(entry))
            throw new Error(
              "noUiSlider: 'keyboardPageMultiplier' is not numeric.",
            )
          parsed.keyboardPageMultiplier = entry
        }
        function testKeyboardMultiplier(parsed, entry) {
          if (!isNumeric(entry))
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.")
          parsed.keyboardMultiplier = entry
        }
        function testKeyboardDefaultStep(parsed, entry) {
          if (!isNumeric(entry))
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.")
          parsed.keyboardDefaultStep = entry
        }
        function testRange(parsed, entry) {
          if ('object' !== typeof entry || Array.isArray(entry))
            throw new Error("noUiSlider: 'range' is not an object.")
          if (void 0 === entry.min || void 0 === entry.max)
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.")
          parsed.spectrum = new Spectrum(
            entry,
            parsed.snap || false,
            parsed.singleStep,
          )
        }
        function testStart(parsed, entry) {
          entry = asArray(entry)
          if (!Array.isArray(entry) || !entry.length)
            throw new Error("noUiSlider: 'start' option is incorrect.")
          parsed.handles = entry.length
          parsed.start = entry
        }
        function testSnap(parsed, entry) {
          if ('boolean' !== typeof entry)
            throw new Error("noUiSlider: 'snap' option must be a boolean.")
          parsed.snap = entry
        }
        function testAnimate(parsed, entry) {
          if ('boolean' !== typeof entry)
            throw new Error("noUiSlider: 'animate' option must be a boolean.")
          parsed.animate = entry
        }
        function testAnimationDuration(parsed, entry) {
          if ('number' !== typeof entry)
            throw new Error(
              "noUiSlider: 'animationDuration' option must be a number.",
            )
          parsed.animationDuration = entry
        }
        function testConnect(parsed, entry) {
          var connect = [false]
          var i
          if ('lower' === entry) entry = [true, false]
          else if ('upper' === entry) entry = [false, true]
          if (true === entry || false === entry) {
            for (i = 1; i < parsed.handles; i++) connect.push(entry)
            connect.push(false)
          } else if (
            !Array.isArray(entry) ||
            !entry.length ||
            entry.length !== parsed.handles + 1
          )
            throw new Error(
              "noUiSlider: 'connect' option doesn't match handle count.",
            )
          else connect = entry
          parsed.connect = connect
        }
        function testOrientation(parsed, entry) {
          switch (entry) {
            case 'horizontal':
              parsed.ort = 0
              break

            case 'vertical':
              parsed.ort = 1
              break

            default:
              throw new Error("noUiSlider: 'orientation' option is invalid.")
          }
        }
        function testMargin(parsed, entry) {
          if (!isNumeric(entry))
            throw new Error("noUiSlider: 'margin' option must be numeric.")
          if (0 === entry) return
          parsed.margin = parsed.spectrum.getDistance(entry)
        }
        function testLimit(parsed, entry) {
          if (!isNumeric(entry))
            throw new Error("noUiSlider: 'limit' option must be numeric.")
          parsed.limit = parsed.spectrum.getDistance(entry)
          if (!parsed.limit || parsed.handles < 2)
            throw new Error(
              "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.",
            )
        }
        function testPadding(parsed, entry) {
          var index
          if (!isNumeric(entry) && !Array.isArray(entry))
            throw new Error(
              "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.",
            )
          if (
            Array.isArray(entry) &&
            !(2 === entry.length || isNumeric(entry[0]) || isNumeric(entry[1]))
          )
            throw new Error(
              "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.",
            )
          if (0 === entry) return
          if (!Array.isArray(entry)) entry = [entry, entry]
          parsed.padding = [
            parsed.spectrum.getDistance(entry[0]),
            parsed.spectrum.getDistance(entry[1]),
          ]
          for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++)
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0)
              throw new Error(
                "noUiSlider: 'padding' option must be a positive number(s).",
              )
          var totalPadding = entry[0] + entry[1]
          var firstValue = parsed.spectrum.xVal[0]
          var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1]
          if (totalPadding / (lastValue - firstValue) > 1)
            throw new Error(
              "noUiSlider: 'padding' option must not exceed 100% of the range.",
            )
        }
        function testDirection(parsed, entry) {
          switch (entry) {
            case 'ltr':
              parsed.dir = 0
              break

            case 'rtl':
              parsed.dir = 1
              break

            default:
              throw new Error(
                "noUiSlider: 'direction' option was not recognized.",
              )
          }
        }
        function testBehaviour(parsed, entry) {
          if ('string' !== typeof entry)
            throw new Error(
              "noUiSlider: 'behaviour' must be a string containing options.",
            )
          var tap = entry.indexOf('tap') >= 0
          var drag = entry.indexOf('drag') >= 0
          var fixed = entry.indexOf('fixed') >= 0
          var snap = entry.indexOf('snap') >= 0
          var hover = entry.indexOf('hover') >= 0
          var unconstrained = entry.indexOf('unconstrained') >= 0
          var dragAll = entry.indexOf('drag-all') >= 0
          var smoothSteps = entry.indexOf('smooth-steps') >= 0
          if (fixed) {
            if (2 !== parsed.handles)
              throw new Error(
                "noUiSlider: 'fixed' behaviour must be used with 2 handles",
              )
            testMargin(parsed, parsed.start[1] - parsed.start[0])
          }
          if (unconstrained && (parsed.margin || parsed.limit))
            throw new Error(
              "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit",
            )
          parsed.events = {
            tap: tap || snap,
            drag,
            dragAll,
            smoothSteps,
            fixed,
            snap,
            hover,
            unconstrained,
          }
        }
        function testTooltips(parsed, entry) {
          if (false === entry) return
          if (true === entry || isValidPartialFormatter(entry)) {
            parsed.tooltips = []
            for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry)
          } else {
            entry = asArray(entry)
            if (entry.length !== parsed.handles)
              throw new Error(
                'noUiSlider: must pass a formatter for all handles.',
              )
            entry.forEach(function (formatter) {
              if (
                'boolean' !== typeof formatter &&
                !isValidPartialFormatter(formatter)
              )
                throw new Error(
                  "noUiSlider: 'tooltips' must be passed a formatter or 'false'.",
                )
            })
            parsed.tooltips = entry
          }
        }
        function testHandleAttributes(parsed, entry) {
          if (entry.length !== parsed.handles)
            throw new Error(
              'noUiSlider: must pass a attributes for all handles.',
            )
          parsed.handleAttributes = entry
        }
        function testAriaFormat(parsed, entry) {
          if (!isValidPartialFormatter(entry))
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.")
          parsed.ariaFormat = entry
        }
        function testFormat(parsed, entry) {
          if (!isValidFormatter(entry))
            throw new Error(
              "noUiSlider: 'format' requires 'to' and 'from' methods.",
            )
          parsed.format = entry
        }
        function testKeyboardSupport(parsed, entry) {
          if ('boolean' !== typeof entry)
            throw new Error(
              "noUiSlider: 'keyboardSupport' option must be a boolean.",
            )
          parsed.keyboardSupport = entry
        }
        function testDocumentElement(parsed, entry) {
          parsed.documentElement = entry
        }
        function testCssPrefix(parsed, entry) {
          if ('string' !== typeof entry && false !== entry)
            throw new Error(
              "noUiSlider: 'cssPrefix' must be a string or `false`.",
            )
          parsed.cssPrefix = entry
        }
        function testCssClasses(parsed, entry) {
          if ('object' !== typeof entry)
            throw new Error("noUiSlider: 'cssClasses' must be an object.")
          if ('string' === typeof parsed.cssPrefix) {
            parsed.cssClasses = {}
            Object.keys(entry).forEach(function (key) {
              parsed.cssClasses[key] = parsed.cssPrefix + entry[key]
            })
          } else parsed.cssClasses = entry
        }
        function testOptions(options) {
          var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
          }
          var tests = {
            step: {
              r: false,
              t: testStep,
            },
            keyboardPageMultiplier: {
              r: false,
              t: testKeyboardPageMultiplier,
            },
            keyboardMultiplier: {
              r: false,
              t: testKeyboardMultiplier,
            },
            keyboardDefaultStep: {
              r: false,
              t: testKeyboardDefaultStep,
            },
            start: {
              r: true,
              t: testStart,
            },
            connect: {
              r: true,
              t: testConnect,
            },
            direction: {
              r: true,
              t: testDirection,
            },
            snap: {
              r: false,
              t: testSnap,
            },
            animate: {
              r: false,
              t: testAnimate,
            },
            animationDuration: {
              r: false,
              t: testAnimationDuration,
            },
            range: {
              r: true,
              t: testRange,
            },
            orientation: {
              r: false,
              t: testOrientation,
            },
            margin: {
              r: false,
              t: testMargin,
            },
            limit: {
              r: false,
              t: testLimit,
            },
            padding: {
              r: false,
              t: testPadding,
            },
            behaviour: {
              r: true,
              t: testBehaviour,
            },
            ariaFormat: {
              r: false,
              t: testAriaFormat,
            },
            format: {
              r: false,
              t: testFormat,
            },
            tooltips: {
              r: false,
              t: testTooltips,
            },
            keyboardSupport: {
              r: true,
              t: testKeyboardSupport,
            },
            documentElement: {
              r: false,
              t: testDocumentElement,
            },
            cssPrefix: {
              r: true,
              t: testCssPrefix,
            },
            cssClasses: {
              r: true,
              t: testCssClasses,
            },
            handleAttributes: {
              r: false,
              t: testHandleAttributes,
            },
          }
          var defaults = {
            connect: false,
            direction: 'ltr',
            behaviour: 'tap',
            orientation: 'horizontal',
            keyboardSupport: true,
            cssPrefix: 'noUi-',
            cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
          }
          if (options.format && !options.ariaFormat)
            options.ariaFormat = options.format
          Object.keys(tests).forEach(function (name) {
            if (!isSet(options[name]) && void 0 === defaults[name]) {
              if (tests[name].r)
                throw new Error("noUiSlider: '" + name + "' is required.")
              return
            }
            tests[name].t(
              parsed,
              !isSet(options[name]) ? defaults[name] : options[name],
            )
          })
          parsed.pips = options.pips
          var d = document.createElement('div')
          var msPrefix = void 0 !== d.style.msTransform
          var noPrefix = void 0 !== d.style.transform
          parsed.transformRule = noPrefix
            ? 'transform'
            : msPrefix
            ? 'msTransform'
            : 'webkitTransform'
          var styles = [
            ['left', 'top'],
            ['right', 'bottom'],
          ]
          parsed.style = styles[parsed.dir][parsed.ort]
          return parsed
        }
        function scope(target, options, originalOptions) {
          var actions = getActions()
          var supportsTouchActionNone = getSupportsTouchActionNone()
          var supportsPassive = supportsTouchActionNone && getSupportsPassive()
          var scope_Target = target
          var scope_Base
          var scope_Handles
          var scope_Connects
          var scope_Pips
          var scope_Tooltips
          var scope_Spectrum = options.spectrum
          var scope_Values = []
          var scope_Locations = []
          var scope_HandleNumbers = []
          var scope_ActiveHandlesCount = 0
          var scope_Events = {}
          var scope_Document = target.ownerDocument
          var scope_DocumentElement =
            options.documentElement || scope_Document.documentElement
          var scope_Body = scope_Document.body
          var scope_DirOffset =
            'rtl' === scope_Document.dir || 1 === options.ort ? 0 : 100
          function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement('div')
            if (className) addClass(div, className)
            addTarget.appendChild(div)
            return div
          }
          function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin)
            var handle = addNodeTo(origin, options.cssClasses.handle)
            addNodeTo(handle, options.cssClasses.touchArea)
            handle.setAttribute('data-handle', String(handleNumber))
            if (options.keyboardSupport) {
              handle.setAttribute('tabindex', '0')
              handle.addEventListener('keydown', function (event) {
                return eventKeydown(event, handleNumber)
              })
            }
            if (void 0 !== options.handleAttributes) {
              var attributes_1 = options.handleAttributes[handleNumber]
              Object.keys(attributes_1).forEach(function (attribute) {
                handle.setAttribute(attribute, attributes_1[attribute])
              })
            }
            handle.setAttribute('role', 'slider')
            handle.setAttribute(
              'aria-orientation',
              options.ort ? 'vertical' : 'horizontal',
            )
            if (0 === handleNumber)
              addClass(handle, options.cssClasses.handleLower)
            else if (handleNumber === options.handles - 1)
              addClass(handle, options.cssClasses.handleUpper)
            return origin
          }
          function addConnect(base, add) {
            if (!add) return false
            return addNodeTo(base, options.cssClasses.connect)
          }
          function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects)
            scope_Handles = []
            scope_Connects = []
            scope_Connects.push(addConnect(connectBase, connectOptions[0]))
            for (var i = 0; i < options.handles; i++) {
              scope_Handles.push(addOrigin(base, i))
              scope_HandleNumbers[i] = i
              scope_Connects.push(
                addConnect(connectBase, connectOptions[i + 1]),
              )
            }
          }
          function addSlider(addTarget) {
            addClass(addTarget, options.cssClasses.target)
            if (0 === options.dir) addClass(addTarget, options.cssClasses.ltr)
            else addClass(addTarget, options.cssClasses.rtl)
            if (0 === options.ort)
              addClass(addTarget, options.cssClasses.horizontal)
            else addClass(addTarget, options.cssClasses.vertical)
            var textDirection = getComputedStyle(addTarget).direction
            if ('rtl' === textDirection)
              addClass(addTarget, options.cssClasses.textDirectionRtl)
            else addClass(addTarget, options.cssClasses.textDirectionLtr)
            return addNodeTo(addTarget, options.cssClasses.base)
          }
          function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber])
              return false
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip)
          }
          function isSliderDisabled() {
            return scope_Target.hasAttribute('disabled')
          }
          function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber]
            return handleOrigin.hasAttribute('disabled')
          }
          function removeTooltips() {
            if (scope_Tooltips) {
              removeEvent('update' + INTERNAL_EVENT_NS.tooltips)
              scope_Tooltips.forEach(function (tooltip) {
                if (tooltip) removeElement(tooltip)
              })
              scope_Tooltips = null
            }
          }
          function tooltips() {
            removeTooltips()
            scope_Tooltips = scope_Handles.map(addTooltip)
            bindEvent(
              'update' + INTERNAL_EVENT_NS.tooltips,
              function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) return
                if (false === scope_Tooltips[handleNumber]) return
                var formattedValue = values[handleNumber]
                if (true !== options.tooltips[handleNumber])
                  formattedValue = options.tooltips[handleNumber].to(
                    unencoded[handleNumber],
                  )
                scope_Tooltips[handleNumber].innerHTML = formattedValue
              },
            )
          }
          function aria() {
            removeEvent('update' + INTERNAL_EVENT_NS.aria)
            bindEvent(
              'update' + INTERNAL_EVENT_NS.aria,
              function (values, handleNumber, unencoded, tap, positions) {
                scope_HandleNumbers.forEach(function (index) {
                  var handle = scope_Handles[index]
                  var min = checkHandlePosition(
                    scope_Locations,
                    index,
                    0,
                    true,
                    true,
                    true,
                  )
                  var max = checkHandlePosition(
                    scope_Locations,
                    index,
                    100,
                    true,
                    true,
                    true,
                  )
                  var now = positions[index]
                  var text = String(options.ariaFormat.to(unencoded[index]))
                  min = scope_Spectrum.fromStepping(min).toFixed(1)
                  max = scope_Spectrum.fromStepping(max).toFixed(1)
                  now = scope_Spectrum.fromStepping(now).toFixed(1)
                  handle.children[0].setAttribute('aria-valuemin', min)
                  handle.children[0].setAttribute('aria-valuemax', max)
                  handle.children[0].setAttribute('aria-valuenow', now)
                  handle.children[0].setAttribute('aria-valuetext', text)
                })
              },
            )
          }
          function getGroup(pips) {
            if (
              pips.mode === exports.PipsMode.Range ||
              pips.mode === exports.PipsMode.Steps
            )
              return scope_Spectrum.xVal
            if (pips.mode === exports.PipsMode.Count) {
              if (pips.values < 2)
                throw new Error(
                  "noUiSlider: 'values' (>= 2) required for mode 'count'.",
                )
              var interval = pips.values - 1
              var spread = 100 / interval
              var values = []
              while (interval--) values[interval] = interval * spread
              values.push(100)
              return mapToRange(values, pips.stepped)
            }
            if (pips.mode === exports.PipsMode.Positions)
              return mapToRange(pips.values, pips.stepped)
            if (pips.mode === exports.PipsMode.Values) {
              if (pips.stepped)
                return pips.values.map(function (value) {
                  return scope_Spectrum.fromStepping(
                    scope_Spectrum.getStep(scope_Spectrum.toStepping(value)),
                  )
                })
              return pips.values
            }
            return []
          }
          function mapToRange(values, stepped) {
            return values.map(function (value) {
              return scope_Spectrum.fromStepping(
                stepped ? scope_Spectrum.getStep(value) : value,
              )
            })
          }
          function generateSpread(pips) {
            function safeIncrement(value, increment) {
              return Number((value + increment).toFixed(7))
            }
            var group = getGroup(pips)
            var indexes = {}
            var firstInRange = scope_Spectrum.xVal[0]
            var lastInRange =
              scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1]
            var ignoreFirst = false
            var ignoreLast = false
            var prevPct = 0
            group = unique(
              group.slice().sort(function (a, b) {
                return a - b
              }),
            )
            if (group[0] !== firstInRange) {
              group.unshift(firstInRange)
              ignoreFirst = true
            }
            if (group[group.length - 1] !== lastInRange) {
              group.push(lastInRange)
              ignoreLast = true
            }
            group.forEach(function (current, index) {
              var step
              var i
              var q
              var low = current
              var high = group[index + 1]
              var newPct
              var pctDifference
              var pctPos
              var type
              var steps
              var realSteps
              var stepSize
              var isSteps = pips.mode === exports.PipsMode.Steps
              if (isSteps) step = scope_Spectrum.xNumSteps[index]
              if (!step) step = high - low
              if (void 0 === high) high = low
              step = Math.max(step, 1e-7)
              for (i = low; i <= high; i = safeIncrement(i, step)) {
                newPct = scope_Spectrum.toStepping(i)
                pctDifference = newPct - prevPct
                steps = pctDifference / (pips.density || 1)
                realSteps = Math.round(steps)
                stepSize = pctDifference / realSteps
                for (q = 1; q <= realSteps; q += 1) {
                  pctPos = prevPct + q * stepSize
                  indexes[pctPos.toFixed(5)] = [
                    scope_Spectrum.fromStepping(pctPos),
                    0,
                  ]
                }
                type =
                  group.indexOf(i) > -1
                    ? exports.PipsType.LargeValue
                    : isSteps
                    ? exports.PipsType.SmallValue
                    : exports.PipsType.NoValue
                if (!index && ignoreFirst && i !== high) type = 0
                if (!(i === high && ignoreLast))
                  indexes[newPct.toFixed(5)] = [i, type]
                prevPct = newPct
              }
            })
            return indexes
          }
          function addMarking(spread, filterFunc, formatter) {
            var _a, _b
            var element = scope_Document.createElement('div')
            var valueSizeClasses =
              ((_a = {}),
              (_a[exports.PipsType.None] = ''),
              (_a[exports.PipsType.NoValue] = options.cssClasses.valueNormal),
              (_a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge),
              (_a[exports.PipsType.SmallValue] = options.cssClasses.valueSub),
              _a)
            var markerSizeClasses =
              ((_b = {}),
              (_b[exports.PipsType.None] = ''),
              (_b[exports.PipsType.NoValue] = options.cssClasses.markerNormal),
              (_b[exports.PipsType.LargeValue] =
                options.cssClasses.markerLarge),
              (_b[exports.PipsType.SmallValue] = options.cssClasses.markerSub),
              _b)
            var valueOrientationClasses = [
              options.cssClasses.valueHorizontal,
              options.cssClasses.valueVertical,
            ]
            var markerOrientationClasses = [
              options.cssClasses.markerHorizontal,
              options.cssClasses.markerVertical,
            ]
            addClass(element, options.cssClasses.pips)
            addClass(
              element,
              0 === options.ort
                ? options.cssClasses.pipsHorizontal
                : options.cssClasses.pipsVertical,
            )
            function getClasses(type, source) {
              var a = source === options.cssClasses.value
              var orientationClasses = a
                ? valueOrientationClasses
                : markerOrientationClasses
              var sizeClasses = a ? valueSizeClasses : markerSizeClasses
              return (
                source +
                ' ' +
                orientationClasses[options.ort] +
                ' ' +
                sizeClasses[type]
              )
            }
            function addSpread(offset, value, type) {
              type = filterFunc ? filterFunc(value, type) : type
              if (type === exports.PipsType.None) return
              var node = addNodeTo(element, false)
              node.className = getClasses(type, options.cssClasses.marker)
              node.style[options.style] = offset + '%'
              if (type > exports.PipsType.NoValue) {
                node = addNodeTo(element, false)
                node.className = getClasses(type, options.cssClasses.value)
                node.setAttribute('data-value', String(value))
                node.style[options.style] = offset + '%'
                node.innerHTML = String(formatter.to(value))
              }
            }
            Object.keys(spread).forEach(function (offset) {
              addSpread(offset, spread[offset][0], spread[offset][1])
            })
            return element
          }
          function removePips() {
            if (scope_Pips) {
              removeElement(scope_Pips)
              scope_Pips = null
            }
          }
          function pips(pips) {
            removePips()
            var spread = generateSpread(pips)
            var filter = pips.filter
            var format = pips.format || {
              to: function (value) {
                return String(Math.round(value))
              },
            }
            scope_Pips = scope_Target.appendChild(
              addMarking(spread, filter, format),
            )
            return scope_Pips
          }
          function baseSize() {
            var rect = scope_Base.getBoundingClientRect()
            var alt = 'offset' + ['Width', 'Height'][options.ort]
            return 0 === options.ort
              ? rect.width || scope_Base[alt]
              : rect.height || scope_Base[alt]
          }
          function attachEvent(events, element, callback, data) {
            var method = function (event) {
              var e = fixEvent(event, data.pageOffset, data.target || element)
              if (!e) return false
              if (isSliderDisabled() && !data.doNotReject) return false
              if (
                hasClass(scope_Target, options.cssClasses.tap) &&
                !data.doNotReject
              )
                return false
              if (
                events === actions.start &&
                void 0 !== e.buttons &&
                e.buttons > 1
              )
                return false
              if (data.hover && e.buttons) return false
              if (!supportsPassive) e.preventDefault()
              e.calcPoint = e.points[options.ort]
              callback(e, data)
              return
            }
            var methods = []
            events.split(' ').forEach(function (eventName) {
              element.addEventListener(
                eventName,
                method,
                supportsPassive
                  ? {
                      passive: true,
                    }
                  : false,
              )
              methods.push([eventName, method])
            })
            return methods
          }
          function fixEvent(e, pageOffset, eventTarget) {
            var touch = 0 === e.type.indexOf('touch')
            var mouse = 0 === e.type.indexOf('mouse')
            var pointer = 0 === e.type.indexOf('pointer')
            var x = 0
            var y = 0
            if (0 === e.type.indexOf('MSPointer')) pointer = true
            if ('mousedown' === e.type && !e.buttons && !e.touches) return false
            if (touch) {
              var isTouchOnTarget = function (checkTouch) {
                var target = checkTouch.target
                return (
                  target === eventTarget ||
                  eventTarget.contains(target) ||
                  (e.composed && e.composedPath().shift() === eventTarget)
                )
              }
              if ('touchstart' === e.type) {
                var targetTouches = Array.prototype.filter.call(
                  e.touches,
                  isTouchOnTarget,
                )
                if (targetTouches.length > 1) return false
                x = targetTouches[0].pageX
                y = targetTouches[0].pageY
              } else {
                var targetTouch = Array.prototype.find.call(
                  e.changedTouches,
                  isTouchOnTarget,
                )
                if (!targetTouch) return false
                x = targetTouch.pageX
                y = targetTouch.pageY
              }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document)
            if (mouse || pointer) {
              x = e.clientX + pageOffset.x
              y = e.clientY + pageOffset.y
            }
            e.pageOffset = pageOffset
            e.points = [x, y]
            e.cursor = mouse || pointer
            return e
          }
          function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort)
            var proposal = (100 * location) / baseSize()
            proposal = limit(proposal)
            return options.dir ? 100 - proposal : proposal
          }
          function getClosestHandle(clickedPosition) {
            var smallestDifference = 100
            var handleNumber = false
            scope_Handles.forEach(function (handle, index) {
              if (isHandleDisabled(index)) return
              var handlePosition = scope_Locations[index]
              var differenceWithThisHandle = Math.abs(
                handlePosition - clickedPosition,
              )
              var clickAtEdge =
                100 === differenceWithThisHandle && 100 === smallestDifference
              var isCloser = differenceWithThisHandle < smallestDifference
              var isCloserAfter =
                differenceWithThisHandle <= smallestDifference &&
                clickedPosition > handlePosition
              if (isCloser || isCloserAfter || clickAtEdge) {
                handleNumber = index
                smallestDifference = differenceWithThisHandle
              }
            })
            return handleNumber
          }
          function documentLeave(event, data) {
            if (
              'mouseout' === event.type &&
              'HTML' === event.target.nodeName &&
              null === event.relatedTarget
            )
              eventEnd(event, data)
          }
          function eventMove(event, data) {
            if (
              -1 === navigator.appVersion.indexOf('MSIE 9') &&
              0 === event.buttons &&
              0 !== data.buttonsProperty
            )
              return eventEnd(event, data)
            var movement =
              (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint)
            var proposal = (100 * movement) / data.baseSize
            moveHandles(
              movement > 0,
              proposal,
              data.locations,
              data.handleNumbers,
              data.connect,
            )
          }
          function eventEnd(event, data) {
            if (data.handle) {
              removeClass(data.handle, options.cssClasses.active)
              scope_ActiveHandlesCount -= 1
            }
            data.listeners.forEach(function (c) {
              scope_DocumentElement.removeEventListener(c[0], c[1])
            })
            if (0 === scope_ActiveHandlesCount) {
              removeClass(scope_Target, options.cssClasses.drag)
              setZindex()
              if (event.cursor) {
                scope_Body.style.cursor = ''
                scope_Body.removeEventListener('selectstart', preventDefault)
              }
            }
            if (options.events.smoothSteps) {
              data.handleNumbers.forEach(function (handleNumber) {
                setHandle(
                  handleNumber,
                  scope_Locations[handleNumber],
                  true,
                  true,
                  false,
                  false,
                )
              })
              data.handleNumbers.forEach(function (handleNumber) {
                fireEvent('update', handleNumber)
              })
            }
            data.handleNumbers.forEach(function (handleNumber) {
              fireEvent('change', handleNumber)
              fireEvent('set', handleNumber)
              fireEvent('end', handleNumber)
            })
          }
          function eventStart(event, data) {
            if (data.handleNumbers.some(isHandleDisabled)) return
            var handle
            if (1 === data.handleNumbers.length) {
              var handleOrigin = scope_Handles[data.handleNumbers[0]]
              handle = handleOrigin.children[0]
              scope_ActiveHandlesCount += 1
              addClass(handle, options.cssClasses.active)
            }
            event.stopPropagation()
            var listeners = []
            var moveEvent = attachEvent(
              actions.move,
              scope_DocumentElement,
              eventMove,
              {
                target: event.target,
                handle,
                connect: data.connect,
                listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice(),
              },
            )
            var endEvent = attachEvent(
              actions.end,
              scope_DocumentElement,
              eventEnd,
              {
                target: event.target,
                handle,
                listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
              },
            )
            var outEvent = attachEvent(
              'mouseout',
              scope_DocumentElement,
              documentLeave,
              {
                target: event.target,
                handle,
                listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
              },
            )
            listeners.push.apply(
              listeners,
              moveEvent.concat(endEvent, outEvent),
            )
            if (event.cursor) {
              scope_Body.style.cursor = getComputedStyle(event.target).cursor
              if (scope_Handles.length > 1)
                addClass(scope_Target, options.cssClasses.drag)
              scope_Body.addEventListener('selectstart', preventDefault, false)
            }
            data.handleNumbers.forEach(function (handleNumber) {
              fireEvent('start', handleNumber)
            })
          }
          function eventTap(event) {
            event.stopPropagation()
            var proposal = calcPointToPercentage(event.calcPoint)
            var handleNumber = getClosestHandle(proposal)
            if (false === handleNumber) return
            if (!options.events.snap)
              addClassFor(
                scope_Target,
                options.cssClasses.tap,
                options.animationDuration,
              )
            setHandle(handleNumber, proposal, true, true)
            setZindex()
            fireEvent('slide', handleNumber, true)
            fireEvent('update', handleNumber, true)
            if (!options.events.snap) {
              fireEvent('change', handleNumber, true)
              fireEvent('set', handleNumber, true)
            } else
              eventStart(event, {
                handleNumbers: [handleNumber],
              })
          }
          function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint)
            var to = scope_Spectrum.getStep(proposal)
            var value = scope_Spectrum.fromStepping(to)
            Object.keys(scope_Events).forEach(function (targetEvent) {
              if ('hover' === targetEvent.split('.')[0])
                scope_Events[targetEvent].forEach(function (callback) {
                  callback.call(scope_Self, value)
                })
            })
          }
          function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber))
              return false
            var horizontalKeys = ['Left', 'Right']
            var verticalKeys = ['Down', 'Up']
            var largeStepKeys = ['PageDown', 'PageUp']
            var edgeKeys = ['Home', 'End']
            if (options.dir && !options.ort) horizontalKeys.reverse()
            else if (options.ort && !options.dir) {
              verticalKeys.reverse()
              largeStepKeys.reverse()
            }
            var key = event.key.replace('Arrow', '')
            var isLargeDown = key === largeStepKeys[0]
            var isLargeUp = key === largeStepKeys[1]
            var isDown =
              key === verticalKeys[0] ||
              key === horizontalKeys[0] ||
              isLargeDown
            var isUp =
              key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp
            var isMin = key === edgeKeys[0]
            var isMax = key === edgeKeys[1]
            if (!isDown && !isUp && !isMin && !isMax) return true
            event.preventDefault()
            var to
            if (isUp || isDown) {
              var direction = isDown ? 0 : 1
              var steps = getNextStepsForHandle(handleNumber)
              var step = steps[direction]
              if (null === step) return false
              if (false === step)
                step = scope_Spectrum.getDefaultStep(
                  scope_Locations[handleNumber],
                  isDown,
                  options.keyboardDefaultStep,
                )
              if (isLargeUp || isLargeDown)
                step *= options.keyboardPageMultiplier
              else step *= options.keyboardMultiplier
              step = Math.max(step, 1e-7)
              step *= isDown ? -1 : 1
              to = scope_Values[handleNumber] + step
            } else if (isMax)
              to = options.spectrum.xVal[options.spectrum.xVal.length - 1]
            else to = options.spectrum.xVal[0]
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true)
            fireEvent('slide', handleNumber)
            fireEvent('update', handleNumber)
            fireEvent('change', handleNumber)
            fireEvent('set', handleNumber)
            return false
          }
          function bindSliderEvents(behaviour) {
            if (!behaviour.fixed)
              scope_Handles.forEach(function (handle, index) {
                attachEvent(actions.start, handle.children[0], eventStart, {
                  handleNumbers: [index],
                })
              })
            if (behaviour.tap)
              attachEvent(actions.start, scope_Base, eventTap, {})
            if (behaviour.hover)
              attachEvent(actions.move, scope_Base, eventHover, {
                hover: true,
              })
            if (behaviour.drag)
              scope_Connects.forEach(function (connect, index) {
                if (
                  false === connect ||
                  0 === index ||
                  index === scope_Connects.length - 1
                )
                  return
                var handleBefore = scope_Handles[index - 1]
                var handleAfter = scope_Handles[index]
                var eventHolders = [connect]
                var handlesToDrag = [handleBefore, handleAfter]
                var handleNumbersToDrag = [index - 1, index]
                addClass(connect, options.cssClasses.draggable)
                if (behaviour.fixed) {
                  eventHolders.push(handleBefore.children[0])
                  eventHolders.push(handleAfter.children[0])
                }
                if (behaviour.dragAll) {
                  handlesToDrag = scope_Handles
                  handleNumbersToDrag = scope_HandleNumbers
                }
                eventHolders.forEach(function (eventHolder) {
                  attachEvent(actions.start, eventHolder, eventStart, {
                    handles: handlesToDrag,
                    handleNumbers: handleNumbersToDrag,
                    connect,
                  })
                })
              })
          }
          function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || []
            scope_Events[namespacedEvent].push(callback)
            if ('update' === namespacedEvent.split('.')[0])
              scope_Handles.forEach(function (a, index) {
                fireEvent('update', index)
              })
          }
          function isInternalNamespace(namespace) {
            return (
              namespace === INTERNAL_EVENT_NS.aria ||
              namespace === INTERNAL_EVENT_NS.tooltips
            )
          }
          function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split('.')[0]
            var namespace = event
              ? namespacedEvent.substring(event.length)
              : namespacedEvent
            Object.keys(scope_Events).forEach(function (bind) {
              var tEvent = bind.split('.')[0]
              var tNamespace = bind.substring(tEvent.length)
              if (
                (!event || event === tEvent) &&
                (!namespace || namespace === tNamespace)
              )
                if (
                  !isInternalNamespace(tNamespace) ||
                  namespace === tNamespace
                )
                  delete scope_Events[bind]
            })
          }
          function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
              var eventType = targetEvent.split('.')[0]
              if (eventName === eventType)
                scope_Events[targetEvent].forEach(function (callback) {
                  callback.call(
                    scope_Self,
                    scope_Values.map(options.format.to),
                    handleNumber,
                    scope_Values.slice(),
                    tap || false,
                    scope_Locations.slice(),
                    scope_Self,
                  )
                })
            })
          }
          function checkHandlePosition(
            reference,
            handleNumber,
            to,
            lookBackward,
            lookForward,
            getValue,
            smoothSteps,
          ) {
            var distance
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
              if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(
                  reference[handleNumber - 1],
                  options.margin,
                  false,
                )
                to = Math.max(to, distance)
              }
              if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(
                  reference[handleNumber + 1],
                  options.margin,
                  true,
                )
                to = Math.min(to, distance)
              }
            }
            if (scope_Handles.length > 1 && options.limit) {
              if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(
                  reference[handleNumber - 1],
                  options.limit,
                  false,
                )
                to = Math.min(to, distance)
              }
              if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(
                  reference[handleNumber + 1],
                  options.limit,
                  true,
                )
                to = Math.max(to, distance)
              }
            }
            if (options.padding) {
              if (0 === handleNumber) {
                distance = scope_Spectrum.getAbsoluteDistance(
                  0,
                  options.padding[0],
                  false,
                )
                to = Math.max(to, distance)
              }
              if (handleNumber === scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(
                  100,
                  options.padding[1],
                  true,
                )
                to = Math.min(to, distance)
              }
            }
            if (!smoothSteps) to = scope_Spectrum.getStep(to)
            to = limit(to)
            if (to === reference[handleNumber] && !getValue) return false
            return to
          }
          function inRuleOrder(v, a) {
            var o = options.ort
            return (o ? a : v) + ', ' + (o ? v : a)
          }
          function moveHandles(
            upward,
            proposal,
            locations,
            handleNumbers,
            connect,
          ) {
            var proposals = locations.slice()
            var firstHandle = handleNumbers[0]
            var smoothSteps = options.events.smoothSteps
            var b = [!upward, upward]
            var f = [upward, !upward]
            handleNumbers = handleNumbers.slice()
            if (upward) handleNumbers.reverse()
            if (handleNumbers.length > 1)
              handleNumbers.forEach(function (handleNumber, o) {
                var to = checkHandlePosition(
                  proposals,
                  handleNumber,
                  proposals[handleNumber] + proposal,
                  b[o],
                  f[o],
                  false,
                  smoothSteps,
                )
                if (false === to) proposal = 0
                else {
                  proposal = to - proposals[handleNumber]
                  proposals[handleNumber] = to
                }
              })
            else b = f = [true]
            var state = false
            handleNumbers.forEach(function (handleNumber, o) {
              state =
                setHandle(
                  handleNumber,
                  locations[handleNumber] + proposal,
                  b[o],
                  f[o],
                  false,
                  smoothSteps,
                ) || state
            })
            if (state) {
              handleNumbers.forEach(function (handleNumber) {
                fireEvent('update', handleNumber)
                fireEvent('slide', handleNumber)
              })
              if (void 0 != connect) fireEvent('drag', firstHandle)
            }
          }
          function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a
          }
          function updateHandlePosition(handleNumber, to) {
            scope_Locations[handleNumber] = to
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to)
            var translation = transformDirection(to, 0) - scope_DirOffset
            var translateRule =
              'translate(' + inRuleOrder(translation + '%', '0') + ')'
            scope_Handles[handleNumber].style[options.transformRule] =
              translateRule
            updateConnect(handleNumber)
            updateConnect(handleNumber + 1)
          }
          function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
              var dir = scope_Locations[handleNumber] > 50 ? -1 : 1
              var zIndex = 3 + (scope_Handles.length + dir * handleNumber)
              scope_Handles[handleNumber].style.zIndex = String(zIndex)
            })
          }
          function setHandle(
            handleNumber,
            to,
            lookBackward,
            lookForward,
            exactInput,
            smoothSteps,
          ) {
            if (!exactInput)
              to = checkHandlePosition(
                scope_Locations,
                handleNumber,
                to,
                lookBackward,
                lookForward,
                false,
                smoothSteps,
              )
            if (false === to) return false
            updateHandlePosition(handleNumber, to)
            return true
          }
          function updateConnect(index) {
            if (!scope_Connects[index]) return
            var l = 0
            var h = 100
            if (0 !== index) l = scope_Locations[index - 1]
            if (index !== scope_Connects.length - 1) h = scope_Locations[index]
            var connectWidth = h - l
            var translateRule =
              'translate(' +
              inRuleOrder(transformDirection(l, connectWidth) + '%', '0') +
              ')'
            var scaleRule =
              'scale(' + inRuleOrder(connectWidth / 100, '1') + ')'
            scope_Connects[index].style[options.transformRule] =
              translateRule + ' ' + scaleRule
          }
          function resolveToValue(to, handleNumber) {
            if (null === to || false === to || void 0 === to)
              return scope_Locations[handleNumber]
            if ('number' === typeof to) to = String(to)
            to = options.format.from(to)
            if (false !== to) to = scope_Spectrum.toStepping(to)
            if (false === to || isNaN(to)) return scope_Locations[handleNumber]
            return to
          }
          function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input)
            var isInit = void 0 === scope_Locations[0]
            fireSetEvent = void 0 === fireSetEvent ? true : fireSetEvent
            if (options.animate && !isInit)
              addClassFor(
                scope_Target,
                options.cssClasses.tap,
                options.animationDuration,
              )
            scope_HandleNumbers.forEach(function (handleNumber) {
              setHandle(
                handleNumber,
                resolveToValue(values[handleNumber], handleNumber),
                true,
                false,
                exactInput,
              )
            })
            var i = 1 === scope_HandleNumbers.length ? 0 : 1
            if (isInit && scope_Spectrum.hasNoSize()) {
              exactInput = true
              scope_Locations[0] = 0
              if (scope_HandleNumbers.length > 1) {
                var space_1 = 100 / (scope_HandleNumbers.length - 1)
                scope_HandleNumbers.forEach(function (handleNumber) {
                  scope_Locations[handleNumber] = handleNumber * space_1
                })
              }
            }
            for (; i < scope_HandleNumbers.length; ++i)
              scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(
                  handleNumber,
                  scope_Locations[handleNumber],
                  true,
                  true,
                  exactInput,
                )
              })
            setZindex()
            scope_HandleNumbers.forEach(function (handleNumber) {
              fireEvent('update', handleNumber)
              if (null !== values[handleNumber] && fireSetEvent)
                fireEvent('set', handleNumber)
            })
          }
          function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent)
          }
          function valueSetHandle(
            handleNumber,
            value,
            fireSetEvent,
            exactInput,
          ) {
            handleNumber = Number(handleNumber)
            if (
              !(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)
            )
              throw new Error(
                'noUiSlider: invalid handle number, got: ' + handleNumber,
              )
            setHandle(
              handleNumber,
              resolveToValue(value, handleNumber),
              true,
              true,
              exactInput,
            )
            fireEvent('update', handleNumber)
            if (fireSetEvent) fireEvent('set', handleNumber)
          }
          function valueGet(unencoded) {
            if (void 0 === unencoded) unencoded = false
            if (unencoded)
              return 1 === scope_Values.length
                ? scope_Values[0]
                : scope_Values.slice(0)
            var values = scope_Values.map(options.format.to)
            if (1 === values.length) return values[0]
            return values
          }
          function destroy() {
            removeEvent(INTERNAL_EVENT_NS.aria)
            removeEvent(INTERNAL_EVENT_NS.tooltips)
            Object.keys(options.cssClasses).forEach(function (key) {
              removeClass(scope_Target, options.cssClasses[key])
            })
            while (scope_Target.firstChild)
              scope_Target.removeChild(scope_Target.firstChild)
            delete scope_Target.noUiSlider
          }
          function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber]
            var nearbySteps = scope_Spectrum.getNearbySteps(location)
            var value = scope_Values[handleNumber]
            var increment = nearbySteps.thisStep.step
            var decrement = null
            if (options.snap)
              return [
                value - nearbySteps.stepBefore.startValue || null,
                nearbySteps.stepAfter.startValue - value || null,
              ]
            if (false !== increment)
              if (value + increment > nearbySteps.stepAfter.startValue)
                increment = nearbySteps.stepAfter.startValue - value
            if (value > nearbySteps.thisStep.startValue)
              decrement = nearbySteps.thisStep.step
            else if (false === nearbySteps.stepBefore.step) decrement = false
            else decrement = value - nearbySteps.stepBefore.highestStep
            if (100 === location) increment = null
            else if (0 === location) decrement = null
            var stepDecimals = scope_Spectrum.countStepDecimals()
            if (null !== increment && false !== increment)
              increment = Number(increment.toFixed(stepDecimals))
            if (null !== decrement && false !== decrement)
              decrement = Number(decrement.toFixed(stepDecimals))
            return [decrement, increment]
          }
          function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle)
          }
          function updateOptions(optionsToUpdate, fireSetEvent) {
            var v = valueGet()
            var updateAble = [
              'margin',
              'limit',
              'padding',
              'range',
              'animate',
              'snap',
              'step',
              'format',
              'pips',
              'tooltips',
            ]
            updateAble.forEach(function (name) {
              if (void 0 !== optionsToUpdate[name])
                originalOptions[name] = optionsToUpdate[name]
            })
            var newOptions = testOptions(originalOptions)
            updateAble.forEach(function (name) {
              if (void 0 !== optionsToUpdate[name])
                options[name] = newOptions[name]
            })
            scope_Spectrum = newOptions.spectrum
            options.margin = newOptions.margin
            options.limit = newOptions.limit
            options.padding = newOptions.padding
            if (options.pips) pips(options.pips)
            else removePips()
            if (options.tooltips) tooltips()
            else removeTooltips()
            scope_Locations = []
            valueSet(
              isSet(optionsToUpdate.start) ? optionsToUpdate.start : v,
              fireSetEvent,
            )
          }
          function setupSlider() {
            scope_Base = addSlider(scope_Target)
            addElements(options.connect, scope_Base)
            bindSliderEvents(options.events)
            valueSet(options.start)
            if (options.pips) pips(options.pips)
            if (options.tooltips) tooltips()
            aria()
          }
          setupSlider()
          var scope_Self = {
            destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            __moveHandles: function (upward, proposal, handleNumbers) {
              moveHandles(upward, proposal, scope_Locations, handleNumbers)
            },
            options: originalOptions,
            updateOptions,
            target: scope_Target,
            removePips,
            removeTooltips,
            getPositions: function () {
              return scope_Locations.slice()
            },
            getTooltips: function () {
              return scope_Tooltips
            },
            getOrigins: function () {
              return scope_Handles
            },
            pips,
          }
          return scope_Self
        }
        function initialize(target, originalOptions) {
          if (!target || !target.nodeName)
            throw new Error(
              'noUiSlider: create requires a single element, got: ' + target,
            )
          if (target.noUiSlider)
            throw new Error('noUiSlider: Slider was already initialized.')
          var options = testOptions(originalOptions)
          var api = scope(target, options, originalOptions)
          target.noUiSlider = api
          return api
        }
        var nouislider = {
          __spectrum: Spectrum,
          cssClasses,
          create: initialize,
        }
        exports.create = initialize
        exports.cssClasses = cssClasses
        exports['default'] = nouislider
        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
      })
    },
  }
  var __webpack_module_cache__ = {}
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId]
    if (void 0 !== cachedModule) return cachedModule.exports
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    })
    __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    )
    return module.exports
  }
  ;(() => {
    'use strict'
    const modules_flsModules = {}
    function isWebp() {
      function testWebP(callback) {
        let webP = new Image()
        webP.onload = webP.onerror = function () {
          callback(2 == webP.height)
        }
        webP.src =
          'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
      }
      testWebP(function (support) {
        let className = true === support ? 'webp' : 'no-webp'
        document.documentElement.classList.add(className)
      })
    }
    function functions_getHash() {
      if (location.hash) return location.hash.replace('#', '')
    }
    function setHash(hash) {
      hash = hash ? `#${hash}` : window.location.href.split('#')[0]
      history.pushState('', '', hash)
    }
    let _slideUp = (target, duration = 500, showmore = 0) => {
      if (!target.classList.contains('_slide')) {
        target.classList.add('_slide')
        target.style.transitionProperty = 'height, margin, padding'
        target.style.transitionDuration = duration + 'ms'
        target.style.height = `${target.offsetHeight}px`
        target.offsetHeight
        target.style.overflow = 'hidden'
        target.style.height = showmore ? `${showmore}px` : `0px`
        target.style.paddingTop = 0
        target.style.paddingBottom = 0
        target.style.marginTop = 0
        target.style.marginBottom = 0
        window.setTimeout(() => {
          target.hidden = !showmore ? true : false
          !showmore ? target.style.removeProperty('height') : null
          target.style.removeProperty('padding-top')
          target.style.removeProperty('padding-bottom')
          target.style.removeProperty('margin-top')
          target.style.removeProperty('margin-bottom')
          !showmore ? target.style.removeProperty('overflow') : null
          target.style.removeProperty('transition-duration')
          target.style.removeProperty('transition-property')
          target.classList.remove('_slide')
          document.dispatchEvent(
            new CustomEvent('slideUpDone', {
              detail: {
                target,
              },
            }),
          )
        }, duration)
      }
    }
    let _slideDown = (target, duration = 500, showmore = 0) => {
      if (!target.classList.contains('_slide')) {
        target.classList.add('_slide')
        target.hidden = target.hidden ? false : null
        showmore ? target.style.removeProperty('height') : null
        let height = target.offsetHeight
        target.style.overflow = 'hidden'
        target.style.height = showmore ? `${showmore}px` : `0px`
        target.style.paddingTop = 0
        target.style.paddingBottom = 0
        target.style.marginTop = 0
        target.style.marginBottom = 0
        target.offsetHeight
        target.style.transitionProperty = 'height, margin, padding'
        target.style.transitionDuration = duration + 'ms'
        target.style.height = height + 'px'
        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-top')
        target.style.removeProperty('margin-bottom')
        window.setTimeout(() => {
          target.style.removeProperty('height')
          target.style.removeProperty('overflow')
          target.style.removeProperty('transition-duration')
          target.style.removeProperty('transition-property')
          target.classList.remove('_slide')
          document.dispatchEvent(
            new CustomEvent('slideDownDone', {
              detail: {
                target,
              },
            }),
          )
        }, duration)
      }
    }
    let _slideToggle = (target, duration = 500) => {
      if (target.hidden) return _slideDown(target, duration)
      else return _slideUp(target, duration)
    }
    let bodyLockStatus = true
    let bodyLockToggle = (delay = 500) => {
      if (document.documentElement.classList.contains('lock')) bodyUnlock(delay)
      else bodyLock(delay)
    }
    let bodyUnlock = (delay = 500) => {
      let body = document.querySelector('body')
      if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll('[data-lp]')
        setTimeout(() => {
          for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index]
            el.style.paddingRight = '0px'
          }
          body.style.paddingRight = '0px'
          document.documentElement.classList.remove('lock')
        }, delay)
        bodyLockStatus = false
        setTimeout(function () {
          bodyLockStatus = true
        }, delay)
      }
    }
    let bodyLock = (delay = 500) => {
      let body = document.querySelector('body')
      if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll('[data-lp]')
        for (let index = 0; index < lock_padding.length; index++) {
          const el = lock_padding[index]
          el.style.paddingRight =
            window.innerWidth -
            document.querySelector('.wrapper').offsetWidth +
            'px'
        }
        body.style.paddingRight =
          window.innerWidth -
          document.querySelector('.wrapper').offsetWidth +
          'px'
        document.documentElement.classList.add('lock')
        bodyLockStatus = false
        setTimeout(function () {
          bodyLockStatus = true
        }, delay)
      }
    }
    function spollers() {
      const spollersArray = document.querySelectorAll('[data-spollers]')
      if (spollersArray.length > 0) {
        const spollersRegular = Array.from(spollersArray).filter(function (
          item,
          index,
          self,
        ) {
          return !item.dataset.spollers.split(',')[0]
        })
        if (spollersRegular.length) initSpollers(spollersRegular)
        let mdQueriesArray = dataMediaQueries(spollersArray, 'spollers')
        if (mdQueriesArray && mdQueriesArray.length)
          mdQueriesArray.forEach((mdQueriesItem) => {
            mdQueriesItem.matchMedia.addEventListener('change', function () {
              initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia)
            })
            initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia)
          })
        function initSpollers(spollersArray, matchMedia = false) {
          spollersArray.forEach((spollersBlock) => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock
            if (matchMedia.matches || !matchMedia) {
              spollersBlock.classList.add('_spoller-init')
              initSpollerBody(spollersBlock)
              spollersBlock.addEventListener('click', setSpollerAction)
            } else {
              spollersBlock.classList.remove('_spoller-init')
              initSpollerBody(spollersBlock, false)
              spollersBlock.removeEventListener('click', setSpollerAction)
            }
          })
        }
        function initSpollerBody(spollersBlock, hideSpollerBody = true) {
          let spollerTitles = spollersBlock.querySelectorAll('[data-spoller]')
          if (spollerTitles.length) {
            spollerTitles = Array.from(spollerTitles).filter(
              (item) => item.closest('[data-spollers]') === spollersBlock,
            )
            spollerTitles.forEach((spollerTitle) => {
              if (hideSpollerBody) {
                spollerTitle.removeAttribute('tabindex')
                if (!spollerTitle.classList.contains('_spoller-active'))
                  spollerTitle.nextElementSibling.hidden = true
              } else {
                spollerTitle.setAttribute('tabindex', '-1')
                spollerTitle.nextElementSibling.hidden = false
              }
            })
          }
        }
        function setSpollerAction(e) {
          const el = e.target
          if (el.closest('[data-spoller]')) {
            const spollerTitle = el.closest('[data-spoller]')
            const spollersBlock = spollerTitle.closest('[data-spollers]')
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller')
            const spollerSpeed = spollersBlock.dataset.spollersSpeed
              ? parseInt(spollersBlock.dataset.spollersSpeed)
              : 500
            if (!spollersBlock.querySelectorAll('._slide').length) {
              if (
                oneSpoller &&
                !spollerTitle.classList.contains('_spoller-active')
              )
                hideSpollersBody(spollersBlock)
              spollerTitle.classList.toggle('_spoller-active')
              spollerTitle.classList.toggle('active')
              _slideToggle(spollerTitle.nextElementSibling, spollerSpeed)
            }
            e.preventDefault()
          }
        }
        function hideSpollersBody(spollersBlock) {
          const spollerActiveTitle = spollersBlock.querySelector(
            '[data-spoller]._spoller-active',
          )
          const spollerSpeed = spollersBlock.dataset.spollersSpeed
            ? parseInt(spollersBlock.dataset.spollersSpeed)
            : 500
          if (
            spollerActiveTitle &&
            !spollersBlock.querySelectorAll('._slide').length
          ) {
            spollerActiveTitle.classList.remove('_spoller-active')
            spollerActiveTitle.classList.remove('active')
            _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed)
          }
        }
        const spollersClose = document.querySelectorAll('[data-spoller-close]')
        if (spollersClose.length)
          document.addEventListener('click', function (e) {
            const el = e.target
            if (!el.closest('[data-spollers]'))
              spollersClose.forEach((spollerClose) => {
                const spollersBlock = spollerClose.closest('[data-spollers]')
                if (spollersBlock.classList.contains('_spoller-init')) {
                  const spollerSpeed = spollersBlock.dataset.spollersSpeed
                    ? parseInt(spollersBlock.dataset.spollersSpeed)
                    : 500
                  spollerClose.classList.remove('_spoller-active')
                  spollerClose.classList.remove('active')
                  _slideUp(spollerClose.nextElementSibling, spollerSpeed)
                }
              })
          })
      }
    }
    function tabs() {
      const tabs = document.querySelectorAll('[data-tabs]')
      let tabsActiveHash = []
      if (tabs.length > 0) {
        const hash = functions_getHash()
        if (hash && hash.startsWith('tab-'))
          tabsActiveHash = hash.replace('tab-', '').split('-')
        tabs.forEach((tabsBlock, index) => {
          tabsBlock.classList.add('_tab-init')
          tabsBlock.setAttribute('data-tabs-index', index)
          tabsBlock.addEventListener('click', setTabsAction)
          initTabs(tabsBlock)
        })
        let mdQueriesArray = dataMediaQueries(tabs, 'tabs')
        if (mdQueriesArray && mdQueriesArray.length)
          mdQueriesArray.forEach((mdQueriesItem) => {
            mdQueriesItem.matchMedia.addEventListener('change', function () {
              setTitlePosition(
                mdQueriesItem.itemsArray,
                mdQueriesItem.matchMedia,
              )
            })
            setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia)
          })
      }
      function setTitlePosition(tabsMediaArray, matchMedia) {
        tabsMediaArray.forEach((tabsMediaItem) => {
          tabsMediaItem = tabsMediaItem.item
          let tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]')
          let tabsTitleItems =
            tabsMediaItem.querySelectorAll('[data-tabs-title]')
          let tabsContent = tabsMediaItem.querySelector('[data-tabs-body]')
          let tabsContentItems =
            tabsMediaItem.querySelectorAll('[data-tabs-item]')
          tabsTitleItems = Array.from(tabsTitleItems).filter(
            (item) => item.closest('[data-tabs]') === tabsMediaItem,
          )
          tabsContentItems = Array.from(tabsContentItems).filter(
            (item) => item.closest('[data-tabs]') === tabsMediaItem,
          )
          tabsContentItems.forEach((tabsContentItem, index) => {
            if (matchMedia.matches) {
              tabsContent.append(tabsTitleItems[index])
              tabsContent.append(tabsContentItem)
              tabsMediaItem.classList.add('_tab-spoller')
            } else {
              tabsTitles.append(tabsTitleItems[index])
              tabsMediaItem.classList.remove('_tab-spoller')
            }
          })
        })
      }
      function initTabs(tabsBlock) {
        let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*')
        let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*')
        const tabsBlockIndex = tabsBlock.dataset.tabsIndex
        const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex
        if (tabsActiveHashBlock) {
          const tabsActiveTitle = tabsBlock.querySelector(
            '[data-tabs-titles]>._tab-active',
          )
          tabsActiveTitle
            ? tabsActiveTitle.classList.remove('_tab-active')
            : null
        }
        if (tabsContent.length) {
          tabsContent = Array.from(tabsContent).filter(
            (item) => item.closest('[data-tabs]') === tabsBlock,
          )
          tabsTitles = Array.from(tabsTitles).filter(
            (item) => item.closest('[data-tabs]') === tabsBlock,
          )
          tabsContent.forEach((tabsContentItem, index) => {
            tabsTitles[index].setAttribute('data-tabs-title', '')
            tabsContentItem.setAttribute('data-tabs-item', '')
            if (tabsActiveHashBlock && index == tabsActiveHash[1])
              tabsTitles[index].classList.add('_tab-active')
            tabsContentItem.hidden =
              !tabsTitles[index].classList.contains('_tab-active')
          })
        }
      }
      function setTabsStatus(tabsBlock) {
        let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]')
        let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]')
        const tabsBlockIndex = tabsBlock.dataset.tabsIndex
        function isTabsAnamate(tabsBlock) {
          if (tabsBlock.hasAttribute('data-tabs-animate'))
            return tabsBlock.dataset.tabsAnimate > 0
              ? Number(tabsBlock.dataset.tabsAnimate)
              : 500
        }
        const tabsBlockAnimate = isTabsAnamate(tabsBlock)
        if (tabsContent.length > 0) {
          const isHash = tabsBlock.hasAttribute('data-tabs-hash')
          tabsContent = Array.from(tabsContent).filter(
            (item) => item.closest('[data-tabs]') === tabsBlock,
          )
          tabsTitles = Array.from(tabsTitles).filter(
            (item) => item.closest('[data-tabs]') === tabsBlock,
          )
          tabsContent.forEach((tabsContentItem, index) => {
            if (tabsTitles[index].classList.contains('_tab-active')) {
              if (tabsBlockAnimate)
                _slideDown(tabsContentItem, tabsBlockAnimate)
              else tabsContentItem.hidden = false
              if (isHash && !tabsContentItem.closest('.popup'))
                setHash(`tab-${tabsBlockIndex}-${index}`)
            } else if (tabsBlockAnimate)
              _slideUp(tabsContentItem, tabsBlockAnimate)
            else tabsContentItem.hidden = true
          })
        }
      }
      function setTabsAction(e) {
        const el = e.target
        if (el.closest('[data-tabs-title]')) {
          const tabTitle = el.closest('[data-tabs-title]')
          const tabsBlock = tabTitle.closest('[data-tabs]')
          if (
            !tabTitle.classList.contains('_tab-active') &&
            !tabsBlock.querySelector('._slide')
          ) {
            let tabActiveTitle = tabsBlock.querySelectorAll(
              '[data-tabs-title]._tab-active',
            )
            tabActiveTitle.length
              ? (tabActiveTitle = Array.from(tabActiveTitle).filter(
                  (item) => item.closest('[data-tabs]') === tabsBlock,
                ))
              : null
            tabActiveTitle.length
              ? tabActiveTitle[0].classList.remove('_tab-active')
              : null
            tabTitle.classList.add('_tab-active')
            setTabsStatus(tabsBlock)
          }
          e.preventDefault()
        }
      }
    }
    function menuInit() {
      const headerMain = document.querySelector('.header__wrap')
      if (document.querySelector('.icon-menu'))
        document.addEventListener('click', function (e) {
          if (bodyLockStatus && e.target.closest('.icon-menu')) {
            bodyLockToggle()
            document.documentElement.classList.toggle('menu-open')
          } else if (!headerMain.contains(e.target)) functions_menuClose()
        })
    }
    function functions_menuClose() {
      bodyUnlock()
      document.documentElement.classList.remove('menu-open')
    }
    function menuInitCategory() {
      const categoryNav = document.querySelector('.category-header__nav')
      if (categoryNav)
        if (document.querySelector('.icon-close'))
          document.addEventListener('click', function (e) {
            if (bodyLockStatus && e.target.closest('.icon-close')) {
              bodyUnlock()
              document.documentElement.classList.toggle('menu-category')
              document.documentElement.classList.remove('menu-open')
            } else if (!categoryNav.contains(e.target)) menuCloseC()
          })
    }
    function menuCloseC() {
      bodyUnlock()
      document.documentElement.classList.remove('menu-category')
    }
    function FLS(message) {
      setTimeout(() => {
        if (window.FLS) console.log(message)
      }, 0)
    }
    function uniqArray(array) {
      return array.filter(function (item, index, self) {
        return self.indexOf(item) === index
      })
    }
    function dataMediaQueries(array, dataSetValue) {
      const media = Array.from(array).filter(function (item, index, self) {
        if (item.dataset[dataSetValue])
          return item.dataset[dataSetValue].split(',')[0]
      })
      if (media.length) {
        const breakpointsArray = []
        media.forEach((item) => {
          const params = item.dataset[dataSetValue]
          const breakpoint = {}
          const paramsArray = params.split(',')
          breakpoint.value = paramsArray[0]
          breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max'
          breakpoint.item = item
          breakpointsArray.push(breakpoint)
        })
        let mdQueries = breakpointsArray.map(function (item) {
          return (
            '(' +
            item.type +
            '-width: ' +
            item.value +
            'px),' +
            item.value +
            ',' +
            item.type
          )
        })
        mdQueries = uniqArray(mdQueries)
        const mdQueriesArray = []
        if (mdQueries.length) {
          mdQueries.forEach((breakpoint) => {
            const paramsArray = breakpoint.split(',')
            const mediaBreakpoint = paramsArray[1]
            const mediaType = paramsArray[2]
            const matchMedia = window.matchMedia(paramsArray[0])
            const itemsArray = breakpointsArray.filter(function (item) {
              if (item.value === mediaBreakpoint && item.type === mediaType)
                return true
            })
            mdQueriesArray.push({
              itemsArray,
              matchMedia,
            })
          })
          return mdQueriesArray
        }
      }
    }
    document.addEventListener('click', (e) => {
      const telAuthTrigger = e.target.closest('.tel-auth-trigger')
      if (!telAuthTrigger) return
      const authParent = telAuthTrigger.closest('.auth-parent')
      const authCurrentTel = authParent.querySelector('.auth-current-tel')
      const getCodeTimer = authParent.querySelector('.get-code-timer')
      const telAuthTriggerWrapper = authParent.querySelector(
        '.login-popup__social-wrapper',
      )
      const telAuthInput = authParent.querySelector('.tel-auth-input')
      const telAuthTelConfirm = authParent.querySelector(
        '.tel-auth-tel-confirm',
      )
      const telAuthConfirmWrapper = authParent.querySelector(
        '.login-popup__tel-input',
      )
      const telAuthCodeWrapper = authParent.querySelector('.login-popup__code')
      const telAuthCodeConfirm = authParent.querySelector(
        '.tel-auth-code-confirm',
      )
      const telAuthCodeInput = authParent.querySelector('.tel-auth-code-input')
      const authErrorMessage = authParent.querySelector('.auth-error-message')
      const authSuccessMessage = authParent.querySelector(
        '.auth-success-message',
      )
      const authResult = authParent.querySelector('.login-popup__auth-result')
      const codeTryAgain = authParent.querySelector('.auth-code-again')
      const repeatMessage = authParent.querySelector('.login-popup__repeat')
      const numberMessage = authParent.querySelector('.login-popup__tel-number')
      const authButtonRow = authParent.querySelector('.tab-order__row')
      let timer
      telAuthConfirmWrapper.style.display = 'flex'
      telAuthTriggerWrapper.style.display = 'none'
      if (authButtonRow) authButtonRow.style.display = 'none'
      telAuthTelConfirm.addEventListener('click', () => {
        const currentNumber = telAuthInput.value
        if (isTelValid(currentNumber)) {
          telAuthConfirmWrapper.style.display = 'none'
          telAuthCodeWrapper.style.display = 'block'
          authCurrentTel.textContent = currentNumber
          startTimer()
        } else console.log('Oops')
      })
      telAuthCodeConfirm.addEventListener('click', () => {
        const receivedCode = '1234'
        if (telAuthCodeInput.value == receivedCode) {
          authErrorMessage.style.display = 'none'
          telAuthCodeWrapper.style.display = 'none'
          authSuccessMessage.style.display = 'block'
          telAuthInput.value = ''
          telAuthCodeInput.value = ''
        } else {
          authErrorMessage.style.display = 'flex'
          authResult.style.display = 'block'
          numberMessage.style.display = 'none'
          telAuthCodeInput.value = ''
        }
      })
      codeTryAgain.addEventListener('click', () => {
        codeTryAgain.style.display = 'none'
        repeatMessage.style.display = 'block'
        authErrorMessage.style.display = 'none'
        numberMessage.style.display = 'block'
        telAuthCodeInput.value = ''
        clearInterval(timer)
        startTimer()
      })
      function isTelValid(currentNumber) {
        if (currentNumber.match(/^\+40/))
          return currentNumber.match(/^\+40 [0-9]{3} [0-9]{3} [0-9]{3}$/)
        else if (currentNumber.match(/^\+90/))
          return currentNumber.match(/^\+90 [0-9]{3} [0-9]{3} [0-9]{4}$/)
        else if (currentNumber.match(/^\+37 3/))
          return currentNumber.match(/^\+37 3[0-9]{2} [0-9]{3} [0-9]{4}$/)
        else if (currentNumber.match(/^\+38 0/))
          return currentNumber.match(/^\+38 0[0-9]{2} [0-9]{3} [0-9]{4}$/)
        else return false
      }
      function startTimer() {
        const timeoutTime = 119e3 + Date.now()
        timer = setInterval(() => {
          let ms = timeoutTime - Date.now()
          let secs = Math.round(ms / 1e3)
          let leftMins = Math.floor(secs / 60)
          let leftSec = secs % 60
          let result =
            secs > 0
              ? `${leftMins.toString().padStart(2, 0)}:${leftSec
                  .toString()
                  .padStart(2, 0)}`
              : '00:00'
          if (secs <= 0) {
            codeTryAgain.style.display = 'block'
            repeatMessage.style.display = 'none'
            clearInterval(timer)
          }
          getCodeTimer.textContent = result
        }, 1e3)
      }
    })
    function e(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
    }
    function t(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return o(e)
        })(e) ||
        (function (e) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e)
        })(e) ||
        (function (e, t) {
          if (!e) return
          if ('string' == typeof e) return o(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          'Object' === n && e.constructor && (n = e.constructor.name)
          if ('Map' === n || 'Set' === n) return Array.from(e)
          if (
            'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return o(e, t)
        })(e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        })()
      )
    }
    function o(e, t) {
      ;(null == t || t > e.length) && (t = e.length)
      for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o]
      return n
    }
    var n,
      i,
      a,
      r,
      s,
      l =
        ((n = [
          'a[href]',
          'area[href]',
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          'select:not([disabled]):not([aria-hidden])',
          'textarea:not([disabled]):not([aria-hidden])',
          'button:not([disabled]):not([aria-hidden])',
          'iframe',
          'object',
          'embed',
          '[contenteditable]',
          '[tabindex]:not([tabindex^="-"])',
        ]),
        (i = (function () {
          function o(e) {
            var n = e.targetModal,
              i = e.triggers,
              a = void 0 === i ? [] : i,
              r = e.onShow,
              s = void 0 === r ? function () {} : r,
              l = e.onClose,
              c = void 0 === l ? function () {} : l,
              d = e.openTrigger,
              u = void 0 === d ? 'data-micromodal-trigger' : d,
              f = e.closeTrigger,
              h = void 0 === f ? 'data-micromodal-close' : f,
              v = e.openClass,
              g = void 0 === v ? 'is-open' : v,
              m = e.disableScroll,
              b = void 0 !== m && m,
              y = e.disableFocus,
              p = void 0 !== y && y,
              w = e.awaitCloseAnimation,
              E = void 0 !== w && w,
              k = e.awaitOpenAnimation,
              M = void 0 !== k && k,
              A = e.debugMode,
              C = void 0 !== A && A
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, o),
              (this.modal = document.getElementById(n)),
              (this.config = {
                debugMode: C,
                disableScroll: b,
                openTrigger: u,
                closeTrigger: h,
                openClass: g,
                onShow: s,
                onClose: c,
                awaitCloseAnimation: E,
                awaitOpenAnimation: M,
                disableFocus: p,
              }),
              a.length > 0 && this.registerTriggers.apply(this, t(a)),
              (this.onClick = this.onClick.bind(this)),
              (this.onKeydown = this.onKeydown.bind(this))
          }
          var i, a, r
          return (
            (i = o),
            (a = [
              {
                key: 'registerTriggers',
                value: function () {
                  for (
                    var e = this, t = arguments.length, o = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    o[n] = arguments[n]
                  o.filter(Boolean).forEach(function (t) {
                    t.addEventListener('click', function (t) {
                      return e.showModal(t)
                    })
                  })
                },
              },
              {
                key: 'showModal',
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null
                  if (
                    ((this.activeElement = document.activeElement),
                    this.modal.setAttribute('aria-hidden', 'false'),
                    this.modal.classList.add(this.config.openClass),
                    this.scrollBehaviour('disable'),
                    this.addEventListeners(),
                    this.config.awaitOpenAnimation)
                  ) {
                    var o = function t() {
                      e.modal.removeEventListener('animationend', t, !1),
                        e.setFocusToFirstNode()
                    }
                    this.modal.addEventListener('animationend', o, !1)
                  } else this.setFocusToFirstNode()
                  this.config.onShow(this.modal, this.activeElement, t)
                },
              },
              {
                key: 'closeModal',
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t = this.modal
                  if (
                    (this.modal.setAttribute('aria-hidden', 'true'),
                    this.removeEventListeners(),
                    this.scrollBehaviour('enable'),
                    this.activeElement &&
                      this.activeElement.focus &&
                      this.activeElement.focus(),
                    this.config.onClose(this.modal, this.activeElement, e),
                    this.config.awaitCloseAnimation)
                  ) {
                    var o = this.config.openClass
                    this.modal.addEventListener(
                      'animationend',
                      function e() {
                        t.classList.remove(o),
                          t.removeEventListener('animationend', e, !1)
                      },
                      !1,
                    )
                  } else t.classList.remove(this.config.openClass)
                },
              },
              {
                key: 'closeModalById',
                value: function (e) {
                  ;(this.modal = document.getElementById(e)),
                    this.modal && this.closeModal()
                },
              },
              {
                key: 'scrollBehaviour',
                value: function (e) {
                  if (this.config.disableScroll) {
                    var t = document.querySelector('body')
                    switch (e) {
                      case 'enable':
                        Object.assign(t.style, {
                          overflow: '',
                        })
                        break

                      case 'disable':
                        Object.assign(t.style, {
                          overflow: 'hidden',
                        })
                    }
                  }
                },
              },
              {
                key: 'addEventListeners',
                value: function () {
                  this.modal.addEventListener('touchstart', this.onClick),
                    this.modal.addEventListener('click', this.onClick),
                    document.addEventListener('keydown', this.onKeydown)
                },
              },
              {
                key: 'removeEventListeners',
                value: function () {
                  this.modal.removeEventListener('touchstart', this.onClick),
                    this.modal.removeEventListener('click', this.onClick),
                    document.removeEventListener('keydown', this.onKeydown)
                },
              },
              {
                key: 'onClick',
                value: function (e) {
                  ;(e.target.hasAttribute(this.config.closeTrigger) ||
                    e.target.parentNode.hasAttribute(
                      this.config.closeTrigger,
                    )) &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    this.closeModal(e))
                },
              },
              {
                key: 'onKeydown',
                value: function (e) {
                  27 === e.keyCode && this.closeModal(e),
                    9 === e.keyCode && this.retainFocus(e)
                },
              },
              {
                key: 'getFocusableNodes',
                value: function () {
                  var e = this.modal.querySelectorAll(n)
                  return Array.apply(void 0, t(e))
                },
              },
              {
                key: 'setFocusToFirstNode',
                value: function () {
                  var e = this
                  if (!this.config.disableFocus) {
                    var t = this.getFocusableNodes()
                    if (0 !== t.length) {
                      var o = t.filter(function (t) {
                        return !t.hasAttribute(e.config.closeTrigger)
                      })
                      o.length > 0 && o[0].focus(),
                        0 === o.length && t[0].focus()
                    }
                  }
                },
              },
              {
                key: 'retainFocus',
                value: function (e) {
                  var t = this.getFocusableNodes()
                  if (0 !== t.length)
                    if (
                      ((t = t.filter(function (e) {
                        return null !== e.offsetParent
                      })),
                      this.modal.contains(document.activeElement))
                    ) {
                      var o = t.indexOf(document.activeElement)
                      e.shiftKey &&
                        0 === o &&
                        (t[t.length - 1].focus(), e.preventDefault()),
                        !e.shiftKey &&
                          t.length > 0 &&
                          o === t.length - 1 &&
                          (t[0].focus(), e.preventDefault())
                    } else t[0].focus()
                },
              },
            ]) && e(i.prototype, a),
            r && e(i, r),
            o
          )
        })()),
        (a = null),
        (r = function (e) {
          if (!document.getElementById(e))
            return (
              console.warn(
                "MicroModal: ❗Seems like you have missed %c'".concat(e, "'"),
                'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                'ID somewhere in your code. Refer example below to resolve it.',
              ),
              console.warn(
                '%cExample:',
                'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                '<div class="modal" id="'.concat(e, '"></div>'),
              ),
              !1
            )
        }),
        (s = function (e, t) {
          if (
            ((function (e) {
              e.length <= 0 &&
                (console.warn(
                  "MicroModal: ❗Please specify at least one %c'micromodal-trigger'",
                  'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                  'data attribute.',
                ),
                console.warn(
                  '%cExample:',
                  'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                  '<a href="#" data-micromodal-trigger="my-modal"></a>',
                ))
            })(e),
            !t)
          )
            return !0
          for (var o in t) r(o)
          return !0
        }),
        {
          init: function (e) {
            var o = Object.assign(
                {},
                {
                  openTrigger: 'data-micromodal-trigger',
                },
                e,
              ),
              n = t(document.querySelectorAll('['.concat(o.openTrigger, ']'))),
              r = (function (e, t) {
                var o = []
                return (
                  e.forEach(function (e) {
                    var n = e.attributes[t].value
                    void 0 === o[n] && (o[n] = []), o[n].push(e)
                  }),
                  o
                )
              })(n, o.openTrigger)
            if (!0 !== o.debugMode || !1 !== s(n, r))
              for (var l in r) {
                var c = r[l]
                ;(o.targetModal = l), (o.triggers = t(c)), (a = new i(o))
              }
          },
          show: function (e, t) {
            var o = t || {}
            ;(o.targetModal = e),
              (!0 === o.debugMode && !1 === r(e)) ||
                (a && a.removeEventListeners(), (a = new i(o)).showModal())
          },
          close: function (e) {
            e ? a.closeModalById(e) : a.closeModal()
          },
        })
    'undefined' != typeof window && (window.MicroModal = l)
    const micromodal_es = l
    micromodal_es.init({
      disableScroll: true,
    })
    const addWrapper = document.querySelector('.popup-add__inner')
    if (addWrapper) {
      const addPrevSlide = document.querySelector('.popup-add__button_prev')
      const addNextSlide = document.querySelector('.popup-add__button_next')
      const addSteps = document.querySelectorAll('.popup-add__step')
      const addSlides = document.querySelectorAll('.popup-add__slide')
      const maxSlides = addSlides.length
      let i = 0
      addPrevSlide.style.display = 'none'
      addPrevSlide.addEventListener('click', () => {
        i--
        if (i <= 0) {
          i = 0
          addPrevSlide.style.display = 'none'
        }
        addWrapper.style.transform = `translateX(-${100 * i}%)`
        activeStep(i)
        addNextSlide.style.display = 'block'
      })
      addNextSlide.addEventListener('click', () => {
        addPrevSlide.style.display = 'block'
        i++
        if (i >= maxSlides) i = maxSlides - 1
        addWrapper.style.transform = `translateX(-${100 * i}%)`
        activeStep(i)
        if (3 === i) {
          getResults()
          addNextSlide.style.display = 'none'
          addPrevSlide.style.display = 'none'
        }
      })
      function activeStep(i) {
        addSteps.forEach((step) => {
          step.classList.remove('active-step')
        })
        addSteps[i]?.classList.add('active-step')
      }
      function getListValue(item) {
        const selectedItemId = item.querySelector('button').dataset.value
        const options = item.querySelectorAll('li')
        let result
        options.forEach((option) => {
          if (option.dataset.value == selectedItemId)
            result = option.textContent
        })
        return result || '-'
      }
      function getResults() {
        const selectCategories = document.querySelector(
          '.popup-add__categories',
        )
        const selectlocation = document.querySelector('.popup-add__location')
        const selectBrand = document.querySelector('.popup-add__brand')
        const perHours = document.getElementById('popup-add-2hours')
        const perDay = document.getElementById('popup-add-24hours')
        const descArea = document.getElementById('popup-add-description')
        const resultCategories = document.getElementById(
          'popup-add-result-category',
        )
        const resultLocation = document.getElementById(
          'popup-add-result-location',
        )
        const resultBrand = document.getElementById('popup-add-result-brand')
        const resultPerHours = document.getElementById(
          'popup-add-result-perhours',
        )
        const resultPerDay = document.getElementById('popup-add-result-perday')
        const resultDesc = document.getElementById('popup-add-result-desc')
        resultDesc.textContent = descArea.value || '-'
        resultPerHours.textContent = perHours.value || '-'
        resultPerDay.textContent = perDay.value || '-'
        resultCategories.textContent = getListValue(selectCategories)
        resultLocation.textContent = getListValue(selectlocation)
        resultBrand.textContent = getListValue(selectBrand)
      }
    }
    const orderCategory = document.querySelector('.order-category')
    const orderCategoryButton = document.querySelector('.order-category button')
    const orderLocation = document.querySelector('.order-location')
    const orderLocationButton = document.querySelector('.order-location button')
    const orderButton = document.querySelector('.order-button')
    const errorMessage = document.querySelector('.order-error-info')
    const successMessage = document.querySelector('.auth-success-message')
    if (orderButton)
      orderButton.addEventListener('click', (e) => {
        const orderCategoryId =
          orderCategory.querySelector('button').dataset.value
        const orderLocationId =
          orderLocation.querySelector('button').dataset.value
        if (false == orderCategoryId) {
          e.preventDefault()
          e.stopPropagation()
          orderCategoryButton.style.border = '1px solid #e74c3c'
          orderCategoryButton.style.backgroundColor = '#ffa69c'
          errorMessage.classList.add('error-message')
        } else {
          orderCategoryButton.style.border = '1px solid #A2A2A2'
          orderCategoryButton.style.backgroundColor = '#292929'
          errorMessage.classList.remove('error-message')
        }
        if (false == orderLocationId) {
          e.preventDefault()
          e.stopPropagation()
          orderLocationButton.style.border = '1px solid #e74c3c'
          orderLocationButton.style.backgroundColor = '#ffa69c'
          errorMessage.classList.add('error-message')
        } else {
          orderLocationButton.style.border = '1px solid #A2A2A2'
          orderLocationButton.style.backgroundColor = '#292929'
          errorMessage.classList.remove('error-message')
        }
        if ('block' !== successMessage.style.display) {
          e.preventDefault()
          e.stopPropagation()
          errorMessage.classList.add('error-message')
        } else errorMessage.classList.remove('error-message')
      })
    const useFilter = () => {
      const sidebarClose = document.querySelector('.sidebar__close')
      const sidebarOpen = document.querySelector('.open-filter')
      const sidebar = document.querySelector('.sidebar')
      if (sidebar) {
        sidebarClose.addEventListener('click', () => {
          sidebar.classList.remove('active')
        })
        sidebarOpen.addEventListener('click', () => {
          sidebar.classList.add('active')
        })
        let selectedItems = []
        const filterResetLocal = document.querySelectorAll(
          '.sidebar__items-container button',
        )
        const filterReset = document.querySelector('.filter__reset')
        const filterCheckboxes = document.querySelectorAll(
          '.sidebar__item input',
        )
        const filteredItemsContainers = document.querySelectorAll(
          '.sidebar__selected-items',
        )
        filterCheckboxes.forEach((checkbox) => {
          checkbox.addEventListener('change', handleFilter)
        })
        filterReset.addEventListener('click', filtersReset)
        filterResetLocal.forEach((item) => {
          item.addEventListener('click', filtersReset)
          if (0 === selectedItems.length) item.classList.add('hidden')
        })
        function filtersReset() {
          filterCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) checkbox.checked = false
          })
          selectedItems = []
          renderList()
        }
        function handleFilter() {
          selectedItems = []
          filterCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
              const item = checkbox.nextElementSibling
              const itemText = item.querySelector(
                '.sidebar__item-text',
              ).textContent
              selectedItems.push(itemText)
            }
          })
          renderList()
        }
        function renderList() {
          const template = selectedItems
            .map(
              (item) => `<span class="sidebar__selected-item">${item}</span>`,
            )
            .join('')
          filteredItemsContainers.forEach(
            (container) => (container.innerHTML = template),
          )
          filterResetLocal.forEach((item) => {
            0 === selectedItems.length
              ? item.classList.add('hidden')
              : item.classList.remove('hidden')
          })
        }
      }
    }
    const useTranslate = () => {
      const elementsToTranslate = document.querySelectorAll('[data-translate]')
      const translationsURL = {
        UK_UA: 'https://api.npoint.io/38e0577f8bc9a1ef8354',
        EN: 'https://api.npoint.io/69ced25cec9eb8aa2f4c',
        PL_PL: '',
        RO_RO: '',
        TR_TR: '',
      }
      const changeLangTrigers = document.querySelectorAll(
        '.location-header__radio-input',
      )
      changeLangTrigers.forEach((item) => {
        item.addEventListener('change', () => {
          if (item.checked) changeLang(item)
        })
      })
      function changeLang(item) {
        const translateLang = item.value
        getTranlsate(translateLang)
      }
      async function getTranlsate(translateLang) {
        try {
          const response = await fetch(
            translationsURL[translateLang] || translationsURL.UK_UA,
          )
          const translations = await response.json()
          elementsToTranslate.forEach((element) => {
            const translateKey = element.getAttribute('data-translate')
            const translation = translations[translateKey]
            if ('INPUT' === element.tagName || 'TEXTAREA' === element.tagName)
              element.placeholder = translation
            else element.textContent = translation
          })
        } catch (error) {
          console.log(error)
        }
      }
      getTranlsate()
    }
    class Popup {
      constructor(options) {
        let config = {
          logging: true,
          init: true,
          attributeOpenButton: 'data-popup',
          attributeCloseButton: 'data-close',
          fixElementSelector: '[data-lp]',
          youtubeAttribute: 'data-popup-youtube',
          youtubePlaceAttribute: 'data-popup-youtube-place',
          setAutoplayYoutube: true,
          classes: {
            popup: 'popup',
            popupContent: 'popup__content',
            popupActive: 'popup_show',
            bodyActive: 'popup-show',
          },
          focusCatch: true,
          closeEsc: true,
          bodyLock: true,
          hashSettings: {
            location: true,
            goHash: true,
          },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        }
        this.youTubeCode
        this.isOpen = false
        this.targetOpen = {
          selector: false,
          element: false,
        }
        this.previousOpen = {
          selector: false,
          element: false,
        }
        this.lastClosed = {
          selector: false,
          element: false,
        }
        this._dataValue = false
        this.hash = false
        this._reopen = false
        this._selectorOpen = false
        this.lastFocusEl = false
        this._focusEl = [
          'a[href]',
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          'button:not([disabled]):not([aria-hidden])',
          'select:not([disabled]):not([aria-hidden])',
          'textarea:not([disabled]):not([aria-hidden])',
          'area[href]',
          'iframe',
          'object',
          'embed',
          '[contenteditable]',
          '[tabindex]:not([tabindex^="-"])',
        ]
        this.options = {
          ...config,
          ...options,
          classes: {
            ...config.classes,
            ...options?.classes,
          },
          hashSettings: {
            ...config.hashSettings,
            ...options?.hashSettings,
          },
          on: {
            ...config.on,
            ...options?.on,
          },
        }
        this.bodyLock = false
        this.options.init ? this.initPopups() : null
      }
      initPopups() {
        this.eventsPopup()
      }
      eventsPopup() {
        document.addEventListener(
          'click',
          function (e) {
            const buttonOpen = e.target.closest(
              `[${this.options.attributeOpenButton}]`,
            )
            if (buttonOpen) {
              e.preventDefault()
              this._dataValue = buttonOpen.getAttribute(
                this.options.attributeOpenButton,
              )
                ? buttonOpen.getAttribute(this.options.attributeOpenButton)
                : 'error'
              this.youTubeCode = buttonOpen.getAttribute(
                this.options.youtubeAttribute,
              )
                ? buttonOpen.getAttribute(this.options.youtubeAttribute)
                : null
              if ('error' !== this._dataValue) {
                if (!this.isOpen) this.lastFocusEl = buttonOpen
                this.targetOpen.selector = `${this._dataValue}`
                this._selectorOpen = true
                this.open()
                return
              } else return
            }
            const buttonClose = e.target.closest(
              `[${this.options.attributeCloseButton}]`,
            )
            if (buttonClose && this.isOpen) {
              e.preventDefault()
              this.close()
              return
            }
          }.bind(this),
        )
        document.addEventListener(
          'keydown',
          function (e) {
            if (
              this.options.closeEsc &&
              27 == e.which &&
              'Escape' === e.code &&
              this.isOpen
            ) {
              e.preventDefault()
              this.close()
              return
            }
            if (this.options.focusCatch && 9 == e.which && this.isOpen) {
              this._focusCatch(e)
              return
            }
          }.bind(this),
        )
        if (this.options.hashSettings.goHash) {
          window.addEventListener(
            'hashchange',
            function () {
              if (window.location.hash) this._openToHash()
              else this.close(this.targetOpen.selector)
            }.bind(this),
          )
          window.addEventListener(
            'load',
            function () {
              if (window.location.hash) this._openToHash()
            }.bind(this),
          )
        }
      }
      open(selectorValue) {
        if (bodyLockStatus) {
          this.bodyLock =
            document.documentElement.classList.contains('lock') && !this.isOpen
              ? true
              : false
          if (
            selectorValue &&
            'string' === typeof selectorValue &&
            '' !== selectorValue.trim()
          ) {
            this.targetOpen.selector = selectorValue
            this._selectorOpen = true
          }
          if (this.isOpen) {
            this._reopen = true
            this.close()
          }
          if (!this._selectorOpen)
            this.targetOpen.selector = this.lastClosed.selector
          if (!this._reopen) this.previousActiveElement = document.activeElement
          this.targetOpen.element = document.querySelector(
            this.targetOpen.selector,
          )
          if (this.targetOpen.element) {
            if (this.youTubeCode) {
              const codeVideo = this.youTubeCode
              const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`
              const iframe = document.createElement('iframe')
              iframe.setAttribute('allowfullscreen', '')
              const autoplay = this.options.setAutoplayYoutube
                ? 'autoplay;'
                : ''
              iframe.setAttribute('allow', `${autoplay}; encrypted-media`)
              iframe.setAttribute('src', urlVideo)
              if (
                !this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`,
                )
              ) {
                this.targetOpen.element
                  .querySelector('.popup__text')
                  .setAttribute(`${this.options.youtubePlaceAttribute}`, '')
              }
              this.targetOpen.element
                .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                .appendChild(iframe)
            }
            if (this.options.hashSettings.location) {
              this._getHash()
              this._setHash()
            }
            this.options.on.beforeOpen(this)
            document.dispatchEvent(
              new CustomEvent('beforePopupOpen', {
                detail: {
                  popup: this,
                },
              }),
            )
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive,
            )
            document.documentElement.classList.add(
              this.options.classes.bodyActive,
            )
            if (!this._reopen) !this.bodyLock ? bodyLock() : null
            else this._reopen = false
            this.targetOpen.element.setAttribute('aria-hidden', 'false')
            this.previousOpen.selector = this.targetOpen.selector
            this.previousOpen.element = this.targetOpen.element
            this._selectorOpen = false
            this.isOpen = true
            setTimeout(() => {
              this._focusTrap()
            }, 50)
            this.options.on.afterOpen(this)
            document.dispatchEvent(
              new CustomEvent('afterPopupOpen', {
                detail: {
                  popup: this,
                },
              }),
            )
          }
        }
      }
      close(selectorValue) {
        if (
          selectorValue &&
          'string' === typeof selectorValue &&
          '' !== selectorValue.trim()
        )
          this.previousOpen.selector = selectorValue
        if (!this.isOpen || !bodyLockStatus) return
        this.options.on.beforeClose(this)
        document.dispatchEvent(
          new CustomEvent('beforePopupClose', {
            detail: {
              popup: this,
            },
          }),
        )
        if (this.youTubeCode)
          if (
            this.targetOpen.element.querySelector(
              `[${this.options.youtubePlaceAttribute}]`,
            )
          )
            this.targetOpen.element.querySelector(
              `[${this.options.youtubePlaceAttribute}]`,
            ).innerHTML = ''
        this.previousOpen.element.classList.remove(
          this.options.classes.popupActive,
        )
        this.previousOpen.element.setAttribute('aria-hidden', 'true')
        if (!this._reopen) {
          document.documentElement.classList.remove(
            this.options.classes.bodyActive,
          )
          !this.bodyLock ? bodyUnlock() : null
          this.isOpen = false
        }
        this._removeHash()
        if (this._selectorOpen) {
          this.lastClosed.selector = this.previousOpen.selector
          this.lastClosed.element = this.previousOpen.element
        }
        this.options.on.afterClose(this)
        document.dispatchEvent(
          new CustomEvent('afterPopupClose', {
            detail: {
              popup: this,
            },
          }),
        )
        setTimeout(() => {
          this._focusTrap()
        }, 50)
      }
      _getHash() {
        if (this.options.hashSettings.location)
          this.hash = this.targetOpen.selector.includes('#')
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace('.', '#')
      }
      _openToHash() {
        let classInHash = document.querySelector(
          `.${window.location.hash.replace('#', '')}`,
        )
          ? `.${window.location.hash.replace('#', '')}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null
        const buttons = document.querySelector(
          `[${this.options.attributeOpenButton} = "${classInHash}"]`,
        )
          ? document.querySelector(
              `[${this.options.attributeOpenButton} = "${classInHash}"]`,
            )
          : document.querySelector(
              `[${this.options.attributeOpenButton} = "${classInHash.replace(
                '.',
                '#',
              )}"]`,
            )
        this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute)
          ? buttons.getAttribute(this.options.youtubeAttribute)
          : null
        if (buttons && classInHash) this.open(classInHash)
      }
      _setHash() {
        history.pushState('', '', this.hash)
      }
      _removeHash() {
        history.pushState('', '', window.location.href.split('#')[0])
      }
      _focusCatch(e) {
        const focusable = this.targetOpen.element.querySelectorAll(
          this._focusEl,
        )
        const focusArray = Array.prototype.slice.call(focusable)
        const focusedIndex = focusArray.indexOf(document.activeElement)
        if (e.shiftKey && 0 === focusedIndex) {
          focusArray[focusArray.length - 1].focus()
          e.preventDefault()
        }
        if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
          focusArray[0].focus()
          e.preventDefault()
        }
      }
      _focusTrap() {
        const focusable = this.previousOpen.element.querySelectorAll(
          this._focusEl,
        )
        if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus()
        else focusable[0].focus()
      }
      popupLogging(message) {
        this.options.logging ? FLS(`[Попапос]: ${message}`) : null
      }
    }
    modules_flsModules.popup = new Popup({})
    let gotoblock_gotoBlock = (
      targetBlock,
      noHeader = false,
      speed = 500,
      offsetTop = 0,
    ) => {
      const targetBlockElement = document.querySelector(targetBlock)
      if (targetBlockElement) {
        let headerItem = ''
        let headerItemHeight = 0
        if (noHeader) {
          headerItem = 'header.header'
          const headerElement = document.querySelector(headerItem)
          if (!headerElement.classList.contains('_header-scroll')) {
            headerElement.style.cssText = `transition-duration: 0s;`
            headerElement.classList.add('_header-scroll')
            headerItemHeight = headerElement.offsetHeight
            headerElement.classList.remove('_header-scroll')
            setTimeout(() => {
              headerElement.style.cssText = ``
            }, 0)
          } else headerItemHeight = headerElement.offsetHeight
        }
        let options = {
          speedAsDuration: true,
          speed,
          header: headerItem,
          offset: offsetTop,
          easing: 'easeOutQuad',
        }
        document.documentElement.classList.contains('menu-open')
          ? functions_menuClose()
          : null
        if ('undefined' !== typeof SmoothScroll)
          new SmoothScroll().animateScroll(targetBlockElement, '', options)
        else {
          let targetBlockElementPosition =
            targetBlockElement.getBoundingClientRect().top + scrollY
          targetBlockElementPosition = headerItemHeight
            ? targetBlockElementPosition - headerItemHeight
            : targetBlockElementPosition
          targetBlockElementPosition = offsetTop
            ? targetBlockElementPosition - offsetTop
            : targetBlockElementPosition
          window.scrollTo({
            top: targetBlockElementPosition,
            behavior: 'smooth',
          })
        }
      }
    }
    function formFieldsInit(
      options = {
        viewPass: false,
        autoHeight: false,
      },
    ) {
      document.body.addEventListener('focusin', function (e) {
        const targetElement = e.target
        if (
          'INPUT' === targetElement.tagName ||
          'TEXTAREA' === targetElement.tagName
        ) {
          if (!targetElement.hasAttribute('data-no-focus-classes')) {
            targetElement.classList.add('_form-focus')
            targetElement.parentElement.classList.add('_form-focus')
          }
          targetElement.hasAttribute('data-validate')
            ? formValidate.removeError(targetElement)
            : null
        }
      })
      document.body.addEventListener('focusout', function (e) {
        const targetElement = e.target
        if (
          'INPUT' === targetElement.tagName ||
          'TEXTAREA' === targetElement.tagName
        ) {
          if (!targetElement.hasAttribute('data-no-focus-classes')) {
            targetElement.classList.remove('_form-focus')
            targetElement.parentElement.classList.remove('_form-focus')
          }
          targetElement.hasAttribute('data-validate')
            ? formValidate.validateInput(targetElement)
            : null
        }
      })
      if (options.viewPass)
        document.addEventListener('click', function (e) {
          let targetElement = e.target
          if (targetElement.closest('[class*="__viewpass"]')) {
            let inputType = targetElement.classList.contains('_viewpass-active')
              ? 'password'
              : 'text'
            targetElement.parentElement
              .querySelector('input')
              .setAttribute('type', inputType)
            targetElement.classList.toggle('_viewpass-active')
          }
        })
      if (options.autoHeight) {
        const textareas = document.querySelectorAll('textarea[data-autoheight]')
        if (textareas.length) {
          textareas.forEach((textarea) => {
            const startHeight = textarea.hasAttribute('data-autoheight-min')
              ? Number(textarea.dataset.autoheightMin)
              : Number(textarea.offsetHeight)
            const maxHeight = textarea.hasAttribute('data-autoheight-max')
              ? Number(textarea.dataset.autoheightMax)
              : 1 / 0
            setHeight(textarea, Math.min(startHeight, maxHeight))
            textarea.addEventListener('input', () => {
              if (textarea.scrollHeight > startHeight) {
                textarea.style.height = `auto`
                setHeight(
                  textarea,
                  Math.min(
                    Math.max(textarea.scrollHeight, startHeight),
                    maxHeight,
                  ),
                )
              }
            })
          })
          function setHeight(textarea, height) {
            textarea.style.height = `${height}px`
          }
        }
      }
    }
    let formValidate = {
      getErrors(form) {
        let error = 0
        let formRequiredItems = form.querySelectorAll('*[data-required]')
        if (formRequiredItems.length)
          formRequiredItems.forEach((formRequiredItem) => {
            if (
              (null !== formRequiredItem.offsetParent ||
                'SELECT' === formRequiredItem.tagName) &&
              !formRequiredItem.disabled
            )
              error += this.validateInput(formRequiredItem)
          })
        return error
      },
      validateInput(formRequiredItem) {
        let error = 0
        if ('email' === formRequiredItem.dataset.required) {
          formRequiredItem.value = formRequiredItem.value.replace(' ', '')
          if (this.emailTest(formRequiredItem)) {
            this.addError(formRequiredItem)
            error++
          } else this.removeError(formRequiredItem)
        } else if (
          'checkbox' === formRequiredItem.type &&
          !formRequiredItem.checked
        ) {
          this.addError(formRequiredItem)
          error++
        } else if (!formRequiredItem.value.trim()) {
          this.addError(formRequiredItem)
          error++
        } else this.removeError(formRequiredItem)
        return error
      },
      addError(formRequiredItem) {
        formRequiredItem.classList.add('_form-error')
        formRequiredItem.parentElement.classList.add('_form-error')
        let inputError =
          formRequiredItem.parentElement.querySelector('.form__error')
        if (inputError) formRequiredItem.parentElement.removeChild(inputError)
        if (formRequiredItem.dataset.error)
          formRequiredItem.parentElement.insertAdjacentHTML(
            'beforeend',
            `<div class="form__error">${formRequiredItem.dataset.error}</div>`,
          )
      },
      removeError(formRequiredItem) {
        formRequiredItem.classList.remove('_form-error')
        formRequiredItem.parentElement.classList.remove('_form-error')
        if (formRequiredItem.parentElement.querySelector('.form__error'))
          formRequiredItem.parentElement.removeChild(
            formRequiredItem.parentElement.querySelector('.form__error'),
          )
      },
      formClean(form) {
        form.reset()
        setTimeout(() => {
          let inputs = form.querySelectorAll('input,textarea')
          for (let index = 0; index < inputs.length; index++) {
            const el = inputs[index]
            el.parentElement.classList.remove('_form-focus')
            el.classList.remove('_form-focus')
            formValidate.removeError(el)
          }
          let checkboxes = form.querySelectorAll('.checkbox__input')
          if (checkboxes.length > 0)
            for (let index = 0; index < checkboxes.length; index++) {
              const checkbox = checkboxes[index]
              checkbox.checked = false
            }
          if (modules_flsModules.select) {
            let selects = form.querySelectorAll('.select')
            if (selects.length)
              for (let index = 0; index < selects.length; index++) {
                const select = selects[index].querySelector('select')
                modules_flsModules.select.selectBuild(select)
              }
          }
        }, 0)
      },
      emailTest(formRequiredItem) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
          formRequiredItem.value,
        )
      },
    }
    function formSubmit() {
      const forms = document.forms
      if (forms.length)
        for (const form of forms) {
          form.addEventListener('submit', function (e) {
            const form = e.target
            formSubmitAction(form, e)
          })
          form.addEventListener('reset', function (e) {
            const form = e.target
            formValidate.formClean(form)
          })
        }
      async function formSubmitAction(form, e) {
        const error = !form.hasAttribute('data-no-validate')
          ? formValidate.getErrors(form)
          : 0
        if (0 === error) {
          const ajax = form.hasAttribute('data-ajax')
          if (ajax) {
            e.preventDefault()
            const formAction = form.getAttribute('action')
              ? form.getAttribute('action').trim()
              : '#'
            const formMethod = form.getAttribute('method')
              ? form.getAttribute('method').trim()
              : 'GET'
            const formData = new FormData(form)
            form.classList.add('_sending')
            const response = await fetch(formAction, {
              method: formMethod,
              body: formData,
            })
            if (response.ok) {
              let responseResult = await response.json()
              form.classList.remove('_sending')
              formSent(form, responseResult)
            } else {
              alert('Помилка')
              form.classList.remove('_sending')
            }
          } else if (form.hasAttribute('data-dev')) {
            e.preventDefault()
            formSent(form)
          }
        } else {
          e.preventDefault()
          if (
            form.querySelector('._form-error') &&
            form.hasAttribute('data-goto-error')
          ) {
            const formGoToErrorClass = form.dataset.gotoError
              ? form.dataset.gotoError
              : '._form-error'
            gotoblock_gotoBlock(formGoToErrorClass, true, 1e3)
          }
        }
      }
      function formSent(form, responseResult = ``) {
        document.dispatchEvent(
          new CustomEvent('formSent', {
            detail: {
              form,
            },
          }),
        )
        setTimeout(() => {
          if (modules_flsModules.popup) {
            const popup = form.dataset.popupMessage
            popup ? modules_flsModules.popup.open(popup) : null
          }
        }, 500)
        formValidate.formClean(form)
        formLogging(`Форму отправлено!`)
      }
      function formLogging(message) {
        FLS(`${message}`)
      }
    }
    class SelectConstructor {
      constructor(props, data = null) {
        let defaultConfig = {
          init: true,
          logging: true,
        }
        this.config = Object.assign(defaultConfig, props)
        this.selectClasses = {
          classSelect: 'select',
          classSelectBody: 'select__body',
          classSelectTitle: 'select__title',
          classSelectValue: 'select__value',
          classSelectLabel: 'select__label',
          classSelectInput: 'select__input',
          classSelectText: 'select__text',
          classSelectLink: 'select__link',
          classSelectOptions: 'select__options',
          classSelectOptionsScroll: 'select__scroll',
          classSelectOption: 'select__option',
          classSelectContent: 'select__content',
          classSelectRow: 'select__row',
          classSelectData: 'select__asset',
          classSelectDisabled: '_select-disabled',
          classSelectTag: '_select-tag',
          classSelectOpen: '_select-open',
          classSelectActive: '_select-active',
          classSelectFocus: '_select-focus',
          classSelectMultiple: '_select-multiple',
          classSelectCheckBox: '_select-checkbox',
          classSelectOptionSelected: '_select-selected',
          classSelectPseudoLabel: '_select-pseudo-label',
        }
        this._this = this
        if (this.config.init) {
          const selectItems = data
            ? document.querySelectorAll(data)
            : document.querySelectorAll('select')
          if (selectItems.length) this.selectsInit(selectItems)
        }
      }
      getSelectClass(className) {
        return `.${className}`
      }
      getSelectElement(selectItem, className) {
        return {
          originalSelect: selectItem.querySelector('select'),
          selectElement: selectItem.querySelector(
            this.getSelectClass(className),
          ),
        }
      }
      selectsInit(selectItems) {
        selectItems.forEach((originalSelect, index) => {
          this.selectInit(originalSelect, index + 1)
        })
        document.addEventListener(
          'click',
          function (e) {
            this.selectsActions(e)
          }.bind(this),
        )
        document.addEventListener(
          'keydown',
          function (e) {
            this.selectsActions(e)
          }.bind(this),
        )
        document.addEventListener(
          'focusin',
          function (e) {
            this.selectsActions(e)
          }.bind(this),
        )
        document.addEventListener(
          'focusout',
          function (e) {
            this.selectsActions(e)
          }.bind(this),
        )
      }
      selectInit(originalSelect, index) {
        const _this = this
        let selectItem = document.createElement('div')
        selectItem.classList.add(this.selectClasses.classSelect)
        originalSelect.parentNode.insertBefore(selectItem, originalSelect)
        selectItem.appendChild(originalSelect)
        originalSelect.hidden = true
        index ? (originalSelect.dataset.id = index) : null
        if (this.getSelectPlaceholder(originalSelect)) {
          originalSelect.dataset.placeholder =
            this.getSelectPlaceholder(originalSelect).value
          if (this.getSelectPlaceholder(originalSelect).label.show) {
            const selectItemTitle = this.getSelectElement(
              selectItem,
              this.selectClasses.classSelectTitle,
            ).selectElement
            selectItemTitle.insertAdjacentHTML(
              'afterbegin',
              `<span class="${this.selectClasses.classSelectLabel}">${
                this.getSelectPlaceholder(originalSelect).label.text
                  ? this.getSelectPlaceholder(originalSelect).label.text
                  : this.getSelectPlaceholder(originalSelect).value
              }</span>`,
            )
          }
        }
        selectItem.insertAdjacentHTML(
          'beforeend',
          `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`,
        )
        this.selectBuild(originalSelect)
        originalSelect.dataset.speed = originalSelect.dataset.speed
          ? originalSelect.dataset.speed
          : '150'
        originalSelect.addEventListener('change', function (e) {
          _this.selectChange(e)
        })
      }
      selectBuild(originalSelect) {
        const selectItem = originalSelect.parentElement
        selectItem.dataset.id = originalSelect.dataset.id
        originalSelect.dataset.classModif
          ? selectItem.classList.add(
              `select_${originalSelect.dataset.classModif}`,
            )
          : null
        originalSelect.multiple
          ? selectItem.classList.add(this.selectClasses.classSelectMultiple)
          : selectItem.classList.remove(this.selectClasses.classSelectMultiple)
        originalSelect.hasAttribute('data-checkbox') && originalSelect.multiple
          ? selectItem.classList.add(this.selectClasses.classSelectCheckBox)
          : selectItem.classList.remove(this.selectClasses.classSelectCheckBox)
        this.setSelectTitleValue(selectItem, originalSelect)
        this.setOptions(selectItem, originalSelect)
        originalSelect.hasAttribute('data-search')
          ? this.searchActions(selectItem)
          : null
        originalSelect.hasAttribute('data-open')
          ? this.selectAction(selectItem)
          : null
        this.selectDisabled(selectItem, originalSelect)
      }
      selectsActions(e) {
        const targetElement = e.target
        const targetType = e.type
        if (
          targetElement.closest(
            this.getSelectClass(this.selectClasses.classSelect),
          ) ||
          targetElement.closest(
            this.getSelectClass(this.selectClasses.classSelectTag),
          )
        ) {
          const selectItem = targetElement.closest('.select')
            ? targetElement.closest('.select')
            : document.querySelector(
                `.${this.selectClasses.classSelect}[data-id="${
                  targetElement.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag),
                  ).dataset.selectId
                }"]`,
              )
          const originalSelect =
            this.getSelectElement(selectItem).originalSelect
          if ('click' === targetType) {
            if (!originalSelect.disabled)
              if (
                targetElement.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag),
                )
              ) {
                const targetTag = targetElement.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag),
                )
                const optionItem = document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`,
                )
                this.optionAction(selectItem, originalSelect, optionItem)
              } else if (
                targetElement.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle),
                )
              )
                this.selectAction(selectItem)
              else if (
                targetElement.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption),
                )
              ) {
                const optionItem = targetElement.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption),
                )
                this.optionAction(selectItem, originalSelect, optionItem)
              }
          } else if ('focusin' === targetType || 'focusout' === targetType) {
            if (
              targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelect),
              )
            )
              'focusin' === targetType
                ? selectItem.classList.add(this.selectClasses.classSelectFocus)
                : selectItem.classList.remove(
                    this.selectClasses.classSelectFocus,
                  )
          } else if ('keydown' === targetType && 'Escape' === e.code)
            this.selectsСlose()
        } else this.selectsСlose()
      }
      selectsСlose(selectOneGroup) {
        const selectsGroup = selectOneGroup ? selectOneGroup : document
        const selectActiveItems = selectsGroup.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect,
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`,
        )
        if (selectActiveItems.length)
          selectActiveItems.forEach((selectActiveItem) => {
            this.selectСlose(selectActiveItem)
          })
      }
      selectСlose(selectItem) {
        const originalSelect = this.getSelectElement(selectItem).originalSelect
        const selectOptions = this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectOptions,
        ).selectElement
        if (!selectOptions.classList.contains('_slide')) {
          selectItem.classList.remove(this.selectClasses.classSelectOpen)
          _slideUp(selectOptions, originalSelect.dataset.speed)
        }
      }
      selectAction(selectItem) {
        const originalSelect = this.getSelectElement(selectItem).originalSelect
        const selectOptions = this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectOptions,
        ).selectElement
        if (originalSelect.closest('[data-one-select]')) {
          const selectOneGroup = originalSelect.closest('[data-one-select]')
          this.selectsСlose(selectOneGroup)
        }
        if (!selectOptions.classList.contains('_slide')) {
          selectItem.classList.toggle(this.selectClasses.classSelectOpen)
          _slideToggle(selectOptions, originalSelect.dataset.speed)
        }
      }
      setSelectTitleValue(selectItem, originalSelect) {
        const selectItemBody = this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectBody,
        ).selectElement
        const selectItemTitle = this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectTitle,
        ).selectElement
        if (selectItemTitle) selectItemTitle.remove()
        selectItemBody.insertAdjacentHTML(
          'afterbegin',
          this.getSelectTitleValue(selectItem, originalSelect),
        )
        originalSelect.hasAttribute('data-search')
          ? this.searchActions(selectItem)
          : null
      }
      getSelectTitleValue(selectItem, originalSelect) {
        let selectTitleValue = this.getSelectedOptionsData(
          originalSelect,
          2,
        ).html
        if (
          originalSelect.multiple &&
          originalSelect.hasAttribute('data-tags')
        ) {
          selectTitleValue = this.getSelectedOptionsData(originalSelect)
            .elements.map(
              (option) =>
                `<span role="button" data-select-id="${
                  selectItem.dataset.id
                }" data-value="${
                  option.value
                }" class="_select-tag">${this.getSelectElementContent(
                  option,
                )}</span>`,
            )
            .join('')
          if (
            originalSelect.dataset.tags &&
            document.querySelector(originalSelect.dataset.tags)
          ) {
            document.querySelector(originalSelect.dataset.tags).innerHTML =
              selectTitleValue
            if (originalSelect.hasAttribute('data-search'))
              selectTitleValue = false
          }
        }
        selectTitleValue = selectTitleValue.length
          ? selectTitleValue
          : originalSelect.dataset.placeholder
          ? originalSelect.dataset.placeholder
          : ''
        let pseudoAttribute = ''
        let pseudoAttributeClass = ''
        if (originalSelect.hasAttribute('data-pseudo-label')) {
          pseudoAttribute = originalSelect.dataset.pseudoLabel
            ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"`
            : ` data-pseudo-label="Заповніть атрибут"`
          pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`
        }
        this.getSelectedOptionsData(originalSelect).values.length
          ? selectItem.classList.add(this.selectClasses.classSelectActive)
          : selectItem.classList.remove(this.selectClasses.classSelectActive)
        if (originalSelect.hasAttribute('data-search'))
          return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`
        else {
          const customClass =
            this.getSelectedOptionsData(originalSelect).elements.length &&
            this.getSelectedOptionsData(originalSelect).elements[0].dataset
              .class
              ? ` ${
                  this.getSelectedOptionsData(originalSelect).elements[0]
                    .dataset.class
                }`
              : ''
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`
        }
      }
      getSelectElementContent(selectOption) {
        const selectOptionData = selectOption.dataset.asset
          ? `${selectOption.dataset.asset}`
          : ''
        const selectOptionDataHTML =
          selectOptionData.indexOf('img') >= 0
            ? `<img src="${selectOptionData}" alt="">`
            : selectOptionData
        let selectOptionContentHTML = ``
        selectOptionContentHTML += selectOptionData
          ? `<span class="${this.selectClasses.classSelectRow}">`
          : ''
        selectOptionContentHTML += selectOptionData
          ? `<span class="${this.selectClasses.classSelectData}">`
          : ''
        selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : ''
        selectOptionContentHTML += selectOptionData ? `</span>` : ''
        selectOptionContentHTML += selectOptionData
          ? `<span class="${this.selectClasses.classSelectText}">`
          : ''
        selectOptionContentHTML += selectOption.textContent
        selectOptionContentHTML += selectOptionData ? `</span>` : ''
        selectOptionContentHTML += selectOptionData ? `</span>` : ''
        return selectOptionContentHTML
      }
      getSelectPlaceholder(originalSelect) {
        const selectPlaceholder = Array.from(originalSelect.options).find(
          (option) => !option.value,
        )
        if (selectPlaceholder)
          return {
            value: selectPlaceholder.textContent,
            show: selectPlaceholder.hasAttribute('data-show'),
            label: {
              show: selectPlaceholder.hasAttribute('data-label'),
              text: selectPlaceholder.dataset.label,
            },
          }
      }
      getSelectedOptionsData(originalSelect, type) {
        let selectedOptions = []
        if (originalSelect.multiple)
          selectedOptions = Array.from(originalSelect.options)
            .filter((option) => option.value)
            .filter((option) => option.selected)
        else
          selectedOptions.push(
            originalSelect.options[originalSelect.selectedIndex],
          )
        return {
          elements: selectedOptions.map((option) => option),
          values: selectedOptions
            .filter((option) => option.value)
            .map((option) => option.value),
          html: selectedOptions.map((option) =>
            this.getSelectElementContent(option),
          ),
        }
      }
      getOptions(originalSelect) {
        let selectOptionsScroll = originalSelect.hasAttribute('data-scroll')
          ? `data-simplebar`
          : ''
        let selectOptionsScrollHeight = originalSelect.dataset.scroll
          ? `style="max-height:${originalSelect.dataset.scroll}px"`
          : ''
        let selectOptions = Array.from(originalSelect.options)
        if (selectOptions.length > 0) {
          let selectOptionsHTML = ``
          if (
            (this.getSelectPlaceholder(originalSelect) &&
              !this.getSelectPlaceholder(originalSelect).show) ||
            originalSelect.multiple
          )
            selectOptions = selectOptions.filter((option) => option.value)
          selectOptionsHTML += selectOptionsScroll
            ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${this.selectClasses.classSelectOptionsScroll}">`
            : ''
          selectOptions.forEach((selectOption) => {
            selectOptionsHTML += this.getOption(selectOption, originalSelect)
          })
          selectOptionsHTML += selectOptionsScroll ? `</div>` : ''
          return selectOptionsHTML
        }
      }
      getOption(selectOption, originalSelect) {
        const selectOptionSelected =
          selectOption.selected && originalSelect.multiple
            ? ` ${this.selectClasses.classSelectOptionSelected}`
            : ''
        const selectOptionHide =
          selectOption.selected &&
          !originalSelect.hasAttribute('data-show-selected') &&
          !originalSelect.multiple
            ? `hidden`
            : ``
        const selectOptionClass = selectOption.dataset.class
          ? ` ${selectOption.dataset.class}`
          : ''
        const selectOptionLink = selectOption.dataset.href
          ? selectOption.dataset.href
          : false
        const selectOptionLinkTarget = selectOption.hasAttribute(
          'data-href-blank',
        )
          ? `target="_blank"`
          : ''
        let selectOptionHTML = ``
        selectOptionHTML += selectOptionLink
          ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">`
          : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`
        selectOptionHTML += this.getSelectElementContent(selectOption)
        selectOptionHTML += selectOptionLink ? `</a>` : `</button>`
        return selectOptionHTML
      }
      setOptions(selectItem, originalSelect) {
        const selectItemOptions = this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectOptions,
        ).selectElement
        selectItemOptions.innerHTML = this.getOptions(originalSelect)
      }
      optionAction(selectItem, originalSelect, optionItem) {
        if (originalSelect.multiple) {
          optionItem.classList.toggle(
            this.selectClasses.classSelectOptionSelected,
          )
          const originalSelectSelectedItems =
            this.getSelectedOptionsData(originalSelect).elements
          originalSelectSelectedItems.forEach((originalSelectSelectedItem) => {
            originalSelectSelectedItem.removeAttribute('selected')
          })
          const selectSelectedItems = selectItem.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected),
          )
          selectSelectedItems.forEach((selectSelectedItems) => {
            originalSelect
              .querySelector(
                `option[value="${selectSelectedItems.dataset.value}"]`,
              )
              .setAttribute('selected', 'selected')
          })
        } else {
          if (!originalSelect.hasAttribute('data-show-selected')) {
            if (
              selectItem.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption,
                )}[hidden]`,
              )
            )
              selectItem.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption,
                )}[hidden]`,
              ).hidden = false
            optionItem.hidden = true
          }
          originalSelect.value = optionItem.hasAttribute('data-value')
            ? optionItem.dataset.value
            : optionItem.textContent
          this.selectAction(selectItem)
        }
        this.setSelectTitleValue(selectItem, originalSelect)
        this.setSelectChange(originalSelect)
      }
      selectChange(e) {
        const originalSelect = e.target
        this.selectBuild(originalSelect)
        this.setSelectChange(originalSelect)
      }
      setSelectChange(originalSelect) {
        if (originalSelect.hasAttribute('data-validate'))
          formValidate.validateInput(originalSelect)
        if (
          originalSelect.hasAttribute('data-submit') &&
          originalSelect.value
        ) {
          let tempButton = document.createElement('button')
          tempButton.type = 'submit'
          originalSelect.closest('form').append(tempButton)
          tempButton.click()
          tempButton.remove()
        }
        const selectItem = originalSelect.parentElement
        this.selectCallback(selectItem, originalSelect)
      }
      selectDisabled(selectItem, originalSelect) {
        if (originalSelect.disabled) {
          selectItem.classList.add(this.selectClasses.classSelectDisabled)
          this.getSelectElement(
            selectItem,
            this.selectClasses.classSelectTitle,
          ).selectElement.disabled = true
        } else {
          selectItem.classList.remove(this.selectClasses.classSelectDisabled)
          this.getSelectElement(
            selectItem,
            this.selectClasses.classSelectTitle,
          ).selectElement.disabled = false
        }
      }
      searchActions(selectItem) {
        this.getSelectElement(selectItem).originalSelect
        const selectInput = this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectInput,
        ).selectElement
        const selectOptions = this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectOptions,
        ).selectElement
        const selectOptionsItems = selectOptions.querySelectorAll(
          `.${this.selectClasses.classSelectOption}`,
        )
        const _this = this
        selectInput.addEventListener('input', function () {
          selectOptionsItems.forEach((selectOptionsItem) => {
            if (
              selectOptionsItem.textContent
                .toUpperCase()
                .includes(selectInput.value.toUpperCase())
            )
              selectOptionsItem.hidden = false
            else selectOptionsItem.hidden = true
          })
          true === selectOptions.hidden ? _this.selectAction(selectItem) : null
        })
      }
      selectCallback(selectItem, originalSelect) {
        document.dispatchEvent(
          new CustomEvent('selectCallback', {
            detail: {
              select: originalSelect,
            },
          }),
        )
      }
      setLogging(message) {
        this.config.logging ? FLS(`[select]: ${message}`) : null
      }
    }
    modules_flsModules.select = new SelectConstructor({})
    __webpack_require__(125)
    const inputMasks = document.querySelectorAll('input')
    if (inputMasks.length)
      modules_flsModules.inputmask = Inputmask().mask(inputMasks)
    var phoneInputs = document.querySelectorAll('.phone-mask')
    var maskOptions = {
      mask: '+99 999 999 9999',
      placeholder: '+__ ___ ___ ____',
      oncomplete: function () {
        var inputValue = this.value
        var isValid = false
        if (inputValue.match(/^\+40/))
          isValid = inputValue.match(/^\+40 [0-9]{3} [0-9]{3} [0-9]{3}$/)
        else if (inputValue.match(/^\+90/))
          isValid = inputValue.match(/^\+90 [0-9]{3} [0-9]{3} [0-9]{4}$/)
        else if (inputValue.match(/^\+37 3/))
          isValid = inputValue.match(/^\+37 3[0-9]{2} [0-9]{3} [0-9]{4}$/)
        else if (inputValue.match(/^\+38 0/))
          isValid = inputValue.match(/^\+38 0[0-9]{2} [0-9]{3} [0-9]{4}$/)
        if (!isValid) {
          this.classList.add('_form-error')
          this.parentElement.classList.add('_form-error')
          let inputError = this.parentElement.querySelector('.form__error')
          if (inputError) this.parentElement.removeChild(inputError)
          if (this.dataset.error)
            this.parentElement.insertAdjacentHTML(
              'beforebegin',
              `<div class="form__error">${this.dataset.error}</div>`,
            )
          this.value = ''
        }
      },
    }
    phoneInputs.forEach(function (phoneInput) {
      var inputMask = new Inputmask(maskOptions)
      inputMask.mask(phoneInput)
    })
    var nouislider = __webpack_require__(211)
    function rangeInit() {
      const slider = document.getElementById('sliderPrice')
      if (slider) {
        const rangeMin = parseInt(slider.dataset.min)
        const rangeMax = parseInt(slider.dataset.max)
        const step = parseInt(slider.dataset.step)
        const filterInputs = document.querySelectorAll('input.range__input')
        nouislider.create(slider, {
          start: [rangeMin, rangeMax],
          connect: true,
          step,
          tooltips: [true, true],
          range: {
            min: rangeMin,
            max: rangeMax,
          },
          format: {
            from: function (value) {
              return parseInt(value)
            },
            to: function (value) {
              return parseInt(value)
            },
          },
        })
        slider.noUiSlider.on('update', (values, handle) => {
          filterInputs[handle].value = values[handle]
        })
        filterInputs.forEach((input, indexInput) => {
          input.addEventListener('change', () => {
            slider.noUiSlider.setHandle(indexInput, input.value)
          })
        })
      }
    }
    rangeInit()
    function isObject(obj) {
      return (
        null !== obj &&
        'object' === typeof obj &&
        'constructor' in obj &&
        obj.constructor === Object
      )
    }
    function extend(target = {}, src = {}) {
      Object.keys(src).forEach((key) => {
        if ('undefined' === typeof target[key]) target[key] = src[key]
        else if (
          isObject(src[key]) &&
          isObject(target[key]) &&
          Object.keys(src[key]).length > 0
        )
          extend(target[key], src[key])
      })
    }
    const ssrDocument = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: {
        blur() {},
        nodeName: '',
      },
      querySelector() {
        return null
      },
      querySelectorAll() {
        return []
      },
      getElementById() {
        return null
      },
      createEvent() {
        return {
          initEvent() {},
        }
      },
      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName() {
            return []
          },
        }
      },
      createElementNS() {
        return {}
      },
      importNode() {
        return null
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
      },
    }
    function ssr_window_esm_getDocument() {
      const doc = 'undefined' !== typeof document ? document : {}
      extend(doc, ssrDocument)
      return doc
    }
    const ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: '',
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
      },
      history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {},
      },
      CustomEvent: function CustomEvent() {
        return this
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle() {
        return {
          getPropertyValue() {
            return ''
          },
        }
      },
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia() {
        return {}
      },
      requestAnimationFrame(callback) {
        if ('undefined' === typeof setTimeout) {
          callback()
          return null
        }
        return setTimeout(callback, 0)
      },
      cancelAnimationFrame(id) {
        if ('undefined' === typeof setTimeout) return
        clearTimeout(id)
      },
    }
    function ssr_window_esm_getWindow() {
      const win = 'undefined' !== typeof window ? window : {}
      extend(win, ssrWindow)
      return win
    }
    function makeReactive(obj) {
      const proto = obj.__proto__
      Object.defineProperty(obj, '__proto__', {
        get() {
          return proto
        },
        set(value) {
          proto.__proto__ = value
        },
      })
    }
    class Dom7 extends Array {
      constructor(items) {
        if ('number' === typeof items) super(items)
        else {
          super(...(items || []))
          makeReactive(this)
        }
      }
    }
    function arrayFlat(arr = []) {
      const res = []
      arr.forEach((el) => {
        if (Array.isArray(el)) res.push(...arrayFlat(el))
        else res.push(el)
      })
      return res
    }
    function arrayFilter(arr, callback) {
      return Array.prototype.filter.call(arr, callback)
    }
    function arrayUnique(arr) {
      const uniqueArray = []
      for (let i = 0; i < arr.length; i += 1)
        if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i])
      return uniqueArray
    }
    function qsa(selector, context) {
      if ('string' !== typeof selector) return [selector]
      const a = []
      const res = context.querySelectorAll(selector)
      for (let i = 0; i < res.length; i += 1) a.push(res[i])
      return a
    }
    function dom7_esm_$(selector, context) {
      const window = ssr_window_esm_getWindow()
      const document = ssr_window_esm_getDocument()
      let arr = []
      if (!context && selector instanceof Dom7) return selector
      if (!selector) return new Dom7(arr)
      if ('string' === typeof selector) {
        const html = selector.trim()
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          let toCreate = 'div'
          if (0 === html.indexOf('<li')) toCreate = 'ul'
          if (0 === html.indexOf('<tr')) toCreate = 'tbody'
          if (0 === html.indexOf('<td') || 0 === html.indexOf('<th'))
            toCreate = 'tr'
          if (0 === html.indexOf('<tbody')) toCreate = 'table'
          if (0 === html.indexOf('<option')) toCreate = 'select'
          const tempParent = document.createElement(toCreate)
          tempParent.innerHTML = html
          for (let i = 0; i < tempParent.childNodes.length; i += 1)
            arr.push(tempParent.childNodes[i])
        } else arr = qsa(selector.trim(), context || document)
      } else if (
        selector.nodeType ||
        selector === window ||
        selector === document
      )
        arr.push(selector)
      else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector
        arr = selector
      }
      return new Dom7(arrayUnique(arr))
    }
    dom7_esm_$.fn = Dom7.prototype
    function addClass(...classes) {
      const classNames = arrayFlat(classes.map((c) => c.split(' ')))
      this.forEach((el) => {
        el.classList.add(...classNames)
      })
      return this
    }
    function removeClass(...classes) {
      const classNames = arrayFlat(classes.map((c) => c.split(' ')))
      this.forEach((el) => {
        el.classList.remove(...classNames)
      })
      return this
    }
    function toggleClass(...classes) {
      const classNames = arrayFlat(classes.map((c) => c.split(' ')))
      this.forEach((el) => {
        classNames.forEach((className) => {
          el.classList.toggle(className)
        })
      })
    }
    function hasClass(...classes) {
      const classNames = arrayFlat(classes.map((c) => c.split(' ')))
      return (
        arrayFilter(
          this,
          (el) =>
            classNames.filter((className) => el.classList.contains(className))
              .length > 0,
        ).length > 0
      )
    }
    function attr(attrs, value) {
      if (1 === arguments.length && 'string' === typeof attrs) {
        if (this[0]) return this[0].getAttribute(attrs)
        return
      }
      for (let i = 0; i < this.length; i += 1)
        if (2 === arguments.length) this[i].setAttribute(attrs, value)
        else
          for (const attrName in attrs) {
            this[i][attrName] = attrs[attrName]
            this[i].setAttribute(attrName, attrs[attrName])
          }
      return this
    }
    function removeAttr(attr) {
      for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr)
      return this
    }
    function transform(transform) {
      for (let i = 0; i < this.length; i += 1)
        this[i].style.transform = transform
      return this
    }
    function transition(duration) {
      for (let i = 0; i < this.length; i += 1)
        this[i].style.transitionDuration =
          'string' !== typeof duration ? `${duration}ms` : duration
      return this
    }
    function on(...args) {
      let [eventType, targetSelector, listener, capture] = args
      if ('function' === typeof args[1]) {
        ;[eventType, listener, capture] = args
        targetSelector = void 0
      }
      if (!capture) capture = false
      function handleLiveEvent(e) {
        const target = e.target
        if (!target) return
        const eventData = e.target.dom7EventData || []
        if (eventData.indexOf(e) < 0) eventData.unshift(e)
        if (dom7_esm_$(target).is(targetSelector))
          listener.apply(target, eventData)
        else {
          const parents = dom7_esm_$(target).parents()
          for (let k = 0; k < parents.length; k += 1)
            if (dom7_esm_$(parents[k]).is(targetSelector))
              listener.apply(parents[k], eventData)
        }
      }
      function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : []
        if (eventData.indexOf(e) < 0) eventData.unshift(e)
        listener.apply(this, eventData)
      }
      const events = eventType.split(' ')
      let j
      for (let i = 0; i < this.length; i += 1) {
        const el = this[i]
        if (!targetSelector)
          for (j = 0; j < events.length; j += 1) {
            const event = events[j]
            if (!el.dom7Listeners) el.dom7Listeners = {}
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = []
            el.dom7Listeners[event].push({
              listener,
              proxyListener: handleEvent,
            })
            el.addEventListener(event, handleEvent, capture)
          }
        else
          for (j = 0; j < events.length; j += 1) {
            const event = events[j]
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {}
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = []
            el.dom7LiveListeners[event].push({
              listener,
              proxyListener: handleLiveEvent,
            })
            el.addEventListener(event, handleLiveEvent, capture)
          }
      }
      return this
    }
    function off(...args) {
      let [eventType, targetSelector, listener, capture] = args
      if ('function' === typeof args[1]) {
        ;[eventType, listener, capture] = args
        targetSelector = void 0
      }
      if (!capture) capture = false
      const events = eventType.split(' ')
      for (let i = 0; i < events.length; i += 1) {
        const event = events[i]
        for (let j = 0; j < this.length; j += 1) {
          const el = this[j]
          let handlers
          if (!targetSelector && el.dom7Listeners)
            handlers = el.dom7Listeners[event]
          else if (targetSelector && el.dom7LiveListeners)
            handlers = el.dom7LiveListeners[event]
          if (handlers && handlers.length)
            for (let k = handlers.length - 1; k >= 0; k -= 1) {
              const handler = handlers[k]
              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture)
                handlers.splice(k, 1)
              } else if (
                listener &&
                handler.listener &&
                handler.listener.dom7proxy &&
                handler.listener.dom7proxy === listener
              ) {
                el.removeEventListener(event, handler.proxyListener, capture)
                handlers.splice(k, 1)
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture)
                handlers.splice(k, 1)
              }
            }
        }
      }
      return this
    }
    function trigger(...args) {
      const window = ssr_window_esm_getWindow()
      const events = args[0].split(' ')
      const eventData = args[1]
      for (let i = 0; i < events.length; i += 1) {
        const event = events[i]
        for (let j = 0; j < this.length; j += 1) {
          const el = this[j]
          if (window.CustomEvent) {
            const evt = new window.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true,
            })
            el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0)
            el.dispatchEvent(evt)
            el.dom7EventData = []
            delete el.dom7EventData
          }
        }
      }
      return this
    }
    function transitionEnd(callback) {
      const dom = this
      function fireCallBack(e) {
        if (e.target !== this) return
        callback.call(this, e)
        dom.off('transitionend', fireCallBack)
      }
      if (callback) dom.on('transitionend', fireCallBack)
      return this
    }
    function dom7_esm_outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles()
          return (
            this[0].offsetWidth +
            parseFloat(styles.getPropertyValue('margin-right')) +
            parseFloat(styles.getPropertyValue('margin-left'))
          )
        }
        return this[0].offsetWidth
      }
      return null
    }
    function dom7_esm_outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles()
          return (
            this[0].offsetHeight +
            parseFloat(styles.getPropertyValue('margin-top')) +
            parseFloat(styles.getPropertyValue('margin-bottom'))
          )
        }
        return this[0].offsetHeight
      }
      return null
    }
    function offset() {
      if (this.length > 0) {
        const window = ssr_window_esm_getWindow()
        const document = ssr_window_esm_getDocument()
        const el = this[0]
        const box = el.getBoundingClientRect()
        const body = document.body
        const clientTop = el.clientTop || body.clientTop || 0
        const clientLeft = el.clientLeft || body.clientLeft || 0
        const scrollTop = el === window ? window.scrollY : el.scrollTop
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft,
        }
      }
      return null
    }
    function styles() {
      const window = ssr_window_esm_getWindow()
      if (this[0]) return window.getComputedStyle(this[0], null)
      return {}
    }
    function css(props, value) {
      const window = ssr_window_esm_getWindow()
      let i
      if (1 === arguments.length)
        if ('string' === typeof props) {
          if (this[0])
            return window
              .getComputedStyle(this[0], null)
              .getPropertyValue(props)
        } else {
          for (i = 0; i < this.length; i += 1)
            for (const prop in props) this[i].style[prop] = props[prop]
          return this
        }
      if (2 === arguments.length && 'string' === typeof props) {
        for (i = 0; i < this.length; i += 1) this[i].style[props] = value
        return this
      }
      return this
    }
    function each(callback) {
      if (!callback) return this
      this.forEach((el, index) => {
        callback.apply(el, [el, index])
      })
      return this
    }
    function filter(callback) {
      const result = arrayFilter(this, callback)
      return dom7_esm_$(result)
    }
    function html(html) {
      if ('undefined' === typeof html) return this[0] ? this[0].innerHTML : null
      for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html
      return this
    }
    function dom7_esm_text(text) {
      if ('undefined' === typeof text)
        return this[0] ? this[0].textContent.trim() : null
      for (let i = 0; i < this.length; i += 1) this[i].textContent = text
      return this
    }
    function is(selector) {
      const window = ssr_window_esm_getWindow()
      const document = ssr_window_esm_getDocument()
      const el = this[0]
      let compareWith
      let i
      if (!el || 'undefined' === typeof selector) return false
      if ('string' === typeof selector) {
        if (el.matches) return el.matches(selector)
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector)
        if (el.msMatchesSelector) return el.msMatchesSelector(selector)
        compareWith = dom7_esm_$(selector)
        for (i = 0; i < compareWith.length; i += 1)
          if (compareWith[i] === el) return true
        return false
      }
      if (selector === document) return el === document
      if (selector === window) return el === window
      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector
        for (i = 0; i < compareWith.length; i += 1)
          if (compareWith[i] === el) return true
        return false
      }
      return false
    }
    function index() {
      let child = this[0]
      let i
      if (child) {
        i = 0
        while (null !== (child = child.previousSibling))
          if (1 === child.nodeType) i += 1
        return i
      }
      return
    }
    function eq(index) {
      if ('undefined' === typeof index) return this
      const length = this.length
      if (index > length - 1) return dom7_esm_$([])
      if (index < 0) {
        const returnIndex = length + index
        if (returnIndex < 0) return dom7_esm_$([])
        return dom7_esm_$([this[returnIndex]])
      }
      return dom7_esm_$([this[index]])
    }
    function append(...els) {
      let newChild
      const document = ssr_window_esm_getDocument()
      for (let k = 0; k < els.length; k += 1) {
        newChild = els[k]
        for (let i = 0; i < this.length; i += 1)
          if ('string' === typeof newChild) {
            const tempDiv = document.createElement('div')
            tempDiv.innerHTML = newChild
            while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild)
          } else if (newChild instanceof Dom7)
            for (let j = 0; j < newChild.length; j += 1)
              this[i].appendChild(newChild[j])
          else this[i].appendChild(newChild)
      }
      return this
    }
    function prepend(newChild) {
      const document = ssr_window_esm_getDocument()
      let i
      let j
      for (i = 0; i < this.length; i += 1)
        if ('string' === typeof newChild) {
          const tempDiv = document.createElement('div')
          tempDiv.innerHTML = newChild
          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0])
        } else if (newChild instanceof Dom7)
          for (j = 0; j < newChild.length; j += 1)
            this[i].insertBefore(newChild[j], this[i].childNodes[0])
        else this[i].insertBefore(newChild, this[i].childNodes[0])
      return this
    }
    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (
            this[0].nextElementSibling &&
            dom7_esm_$(this[0].nextElementSibling).is(selector)
          )
            return dom7_esm_$([this[0].nextElementSibling])
          return dom7_esm_$([])
        }
        if (this[0].nextElementSibling)
          return dom7_esm_$([this[0].nextElementSibling])
        return dom7_esm_$([])
      }
      return dom7_esm_$([])
    }
    function nextAll(selector) {
      const nextEls = []
      let el = this[0]
      if (!el) return dom7_esm_$([])
      while (el.nextElementSibling) {
        const next = el.nextElementSibling
        if (selector) {
          if (dom7_esm_$(next).is(selector)) nextEls.push(next)
        } else nextEls.push(next)
        el = next
      }
      return dom7_esm_$(nextEls)
    }
    function prev(selector) {
      if (this.length > 0) {
        const el = this[0]
        if (selector) {
          if (
            el.previousElementSibling &&
            dom7_esm_$(el.previousElementSibling).is(selector)
          )
            return dom7_esm_$([el.previousElementSibling])
          return dom7_esm_$([])
        }
        if (el.previousElementSibling)
          return dom7_esm_$([el.previousElementSibling])
        return dom7_esm_$([])
      }
      return dom7_esm_$([])
    }
    function prevAll(selector) {
      const prevEls = []
      let el = this[0]
      if (!el) return dom7_esm_$([])
      while (el.previousElementSibling) {
        const prev = el.previousElementSibling
        if (selector) {
          if (dom7_esm_$(prev).is(selector)) prevEls.push(prev)
        } else prevEls.push(prev)
        el = prev
      }
      return dom7_esm_$(prevEls)
    }
    function dom7_esm_parent(selector) {
      const parents = []
      for (let i = 0; i < this.length; i += 1)
        if (null !== this[i].parentNode)
          if (selector) {
            if (dom7_esm_$(this[i].parentNode).is(selector))
              parents.push(this[i].parentNode)
          } else parents.push(this[i].parentNode)
      return dom7_esm_$(parents)
    }
    function parents(selector) {
      const parents = []
      for (let i = 0; i < this.length; i += 1) {
        let parent = this[i].parentNode
        while (parent) {
          if (selector) {
            if (dom7_esm_$(parent).is(selector)) parents.push(parent)
          } else parents.push(parent)
          parent = parent.parentNode
        }
      }
      return dom7_esm_$(parents)
    }
    function closest(selector) {
      let closest = this
      if ('undefined' === typeof selector) return dom7_esm_$([])
      if (!closest.is(selector)) closest = closest.parents(selector).eq(0)
      return closest
    }
    function find(selector) {
      const foundElements = []
      for (let i = 0; i < this.length; i += 1) {
        const found = this[i].querySelectorAll(selector)
        for (let j = 0; j < found.length; j += 1) foundElements.push(found[j])
      }
      return dom7_esm_$(foundElements)
    }
    function children(selector) {
      const children = []
      for (let i = 0; i < this.length; i += 1) {
        const childNodes = this[i].children
        for (let j = 0; j < childNodes.length; j += 1)
          if (!selector || dom7_esm_$(childNodes[j]).is(selector))
            children.push(childNodes[j])
      }
      return dom7_esm_$(children)
    }
    function remove() {
      for (let i = 0; i < this.length; i += 1)
        if (this[i].parentNode) this[i].parentNode.removeChild(this[i])
      return this
    }
    const noTrigger = 'resize scroll'.split(' ')
    function shortcut(name) {
      function eventHandler(...args) {
        if ('undefined' === typeof args[0]) {
          for (let i = 0; i < this.length; i += 1)
            if (noTrigger.indexOf(name) < 0)
              if (name in this[i]) this[i][name]()
              else dom7_esm_$(this[i]).trigger(name)
          return this
        }
        return this.on(name, ...args)
      }
      return eventHandler
    }
    shortcut('click')
    shortcut('blur')
    shortcut('focus')
    shortcut('focusin')
    shortcut('focusout')
    shortcut('keyup')
    shortcut('keydown')
    shortcut('keypress')
    shortcut('submit')
    shortcut('change')
    shortcut('mousedown')
    shortcut('mousemove')
    shortcut('mouseup')
    shortcut('mouseenter')
    shortcut('mouseleave')
    shortcut('mouseout')
    shortcut('mouseover')
    shortcut('touchstart')
    shortcut('touchend')
    shortcut('touchmove')
    shortcut('resize')
    shortcut('scroll')
    const Methods = {
      addClass,
      removeClass,
      hasClass,
      toggleClass,
      attr,
      removeAttr,
      transform,
      transition,
      on,
      off,
      trigger,
      transitionEnd,
      outerWidth: dom7_esm_outerWidth,
      outerHeight: dom7_esm_outerHeight,
      styles,
      offset,
      css,
      each,
      html,
      text: dom7_esm_text,
      is,
      index,
      eq,
      append,
      prepend,
      next,
      nextAll,
      prev,
      prevAll,
      parent: dom7_esm_parent,
      parents,
      closest,
      find,
      children,
      filter,
      remove,
    }
    Object.keys(Methods).forEach((methodName) => {
      Object.defineProperty(dom7_esm_$.fn, methodName, {
        value: Methods[methodName],
        writable: true,
      })
    })
    const dom = dom7_esm_$
    function deleteProps(obj) {
      const object = obj
      Object.keys(object).forEach((key) => {
        try {
          object[key] = null
        } catch (e) {}
        try {
          delete object[key]
        } catch (e) {}
      })
    }
    function utils_nextTick(callback, delay = 0) {
      return setTimeout(callback, delay)
    }
    function now() {
      return Date.now()
    }
    function utils_getComputedStyle(el) {
      const window = ssr_window_esm_getWindow()
      let style
      if (window.getComputedStyle) style = window.getComputedStyle(el, null)
      if (!style && el.currentStyle) style = el.currentStyle
      if (!style) style = el.style
      return style
    }
    function utils_getTranslate(el, axis = 'x') {
      const window = ssr_window_esm_getWindow()
      let matrix
      let curTransform
      let transformMatrix
      const curStyle = utils_getComputedStyle(el, null)
      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform
        if (curTransform.split(',').length > 6)
          curTransform = curTransform
            .split(', ')
            .map((a) => a.replace(',', '.'))
            .join(', ')
        transformMatrix = new window.WebKitCSSMatrix(
          'none' === curTransform ? '' : curTransform,
        )
      } else {
        transformMatrix =
          curStyle.MozTransform ||
          curStyle.OTransform ||
          curStyle.MsTransform ||
          curStyle.msTransform ||
          curStyle.transform ||
          curStyle
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')
        matrix = transformMatrix.toString().split(',')
      }
      if ('x' === axis)
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41
        else if (16 === matrix.length) curTransform = parseFloat(matrix[12])
        else curTransform = parseFloat(matrix[4])
      if ('y' === axis)
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42
        else if (16 === matrix.length) curTransform = parseFloat(matrix[13])
        else curTransform = parseFloat(matrix[5])
      return curTransform || 0
    }
    function utils_isObject(o) {
      return (
        'object' === typeof o &&
        null !== o &&
        o.constructor &&
        'Object' === Object.prototype.toString.call(o).slice(8, -1)
      )
    }
    function isNode(node) {
      if (
        'undefined' !== typeof window &&
        'undefined' !== typeof window.HTMLElement
      )
        return node instanceof HTMLElement
      return node && (1 === node.nodeType || 11 === node.nodeType)
    }
    function utils_extend(...args) {
      const to = Object(args[0])
      const noExtend = ['__proto__', 'constructor', 'prototype']
      for (let i = 1; i < args.length; i += 1) {
        const nextSource = args[i]
        if (
          void 0 !== nextSource &&
          null !== nextSource &&
          !isNode(nextSource)
        ) {
          const keysArray = Object.keys(Object(nextSource)).filter(
            (key) => noExtend.indexOf(key) < 0,
          )
          for (
            let nextIndex = 0, len = keysArray.length;
            nextIndex < len;
            nextIndex += 1
          ) {
            const nextKey = keysArray[nextIndex]
            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)
            if (void 0 !== desc && desc.enumerable)
              if (
                utils_isObject(to[nextKey]) &&
                utils_isObject(nextSource[nextKey])
              )
                if (nextSource[nextKey].__swiper__)
                  to[nextKey] = nextSource[nextKey]
                else utils_extend(to[nextKey], nextSource[nextKey])
              else if (
                !utils_isObject(to[nextKey]) &&
                utils_isObject(nextSource[nextKey])
              ) {
                to[nextKey] = {}
                if (nextSource[nextKey].__swiper__)
                  to[nextKey] = nextSource[nextKey]
                else utils_extend(to[nextKey], nextSource[nextKey])
              } else to[nextKey] = nextSource[nextKey]
          }
        }
      }
      return to
    }
    function utils_setCSSProperty(el, varName, varValue) {
      el.style.setProperty(varName, varValue)
    }
    function animateCSSModeScroll({ swiper, targetPosition, side }) {
      const window = ssr_window_esm_getWindow()
      const startPosition = -swiper.translate
      let startTime = null
      let time
      const duration = swiper.params.speed
      swiper.wrapperEl.style.scrollSnapType = 'none'
      window.cancelAnimationFrame(swiper.cssModeFrameID)
      const dir = targetPosition > startPosition ? 'next' : 'prev'
      const isOutOfBound = (current, target) =>
        ('next' === dir && current >= target) ||
        ('prev' === dir && current <= target)
      const animate = () => {
        time = new Date().getTime()
        if (null === startTime) startTime = time
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0)
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2
        let currentPosition =
          startPosition + easeProgress * (targetPosition - startPosition)
        if (isOutOfBound(currentPosition, targetPosition))
          currentPosition = targetPosition
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition,
        })
        if (isOutOfBound(currentPosition, targetPosition)) {
          swiper.wrapperEl.style.overflow = 'hidden'
          swiper.wrapperEl.style.scrollSnapType = ''
          setTimeout(() => {
            swiper.wrapperEl.style.overflow = ''
            swiper.wrapperEl.scrollTo({
              [side]: currentPosition,
            })
          })
          window.cancelAnimationFrame(swiper.cssModeFrameID)
          return
        }
        swiper.cssModeFrameID = window.requestAnimationFrame(animate)
      }
      animate()
    }
    let support
    function calcSupport() {
      const window = ssr_window_esm_getWindow()
      const document = ssr_window_esm_getDocument()
      return {
        smoothScroll:
          document.documentElement &&
          'scrollBehavior' in document.documentElement.style,
        touch: !!(
          'ontouchstart' in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)
        ),
        passiveListener: (function checkPassiveListener() {
          let supportsPassive = false
          try {
            const opts = Object.defineProperty({}, 'passive', {
              get() {
                supportsPassive = true
              },
            })
            window.addEventListener('testPassiveListener', null, opts)
          } catch (e) {}
          return supportsPassive
        })(),
        gestures: (function checkGestures() {
          return 'ongesturestart' in window
        })(),
      }
    }
    function getSupport() {
      if (!support) support = calcSupport()
      return support
    }
    let deviceCached
    function calcDevice({ userAgent } = {}) {
      const support = getSupport()
      const window = ssr_window_esm_getWindow()
      const platform = window.navigator.platform
      const ua = userAgent || window.navigator.userAgent
      const device = {
        ios: false,
        android: false,
      }
      const screenWidth = window.screen.width
      const screenHeight = window.screen.height
      const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/)
      let ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
      const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
      const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      const windows = 'Win32' === platform
      let macos = 'MacIntel' === platform
      const iPadScreens = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810',
      ]
      if (
        !ipad &&
        macos &&
        support.touch &&
        iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0
      ) {
        ipad = ua.match(/(Version)\/([\d.]+)/)
        if (!ipad) ipad = [0, 1, '13_0_0']
        macos = false
      }
      if (android && !windows) {
        device.os = 'android'
        device.android = true
      }
      if (ipad || iphone || ipod) {
        device.os = 'ios'
        device.ios = true
      }
      return device
    }
    function getDevice(overrides = {}) {
      if (!deviceCached) deviceCached = calcDevice(overrides)
      return deviceCached
    }
    let browser
    function calcBrowser() {
      const window = ssr_window_esm_getWindow()
      function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase()
        return (
          ua.indexOf('safari') >= 0 &&
          ua.indexOf('chrome') < 0 &&
          ua.indexOf('android') < 0
        )
      }
      return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          window.navigator.userAgent,
        ),
      }
    }
    function getBrowser() {
      if (!browser) browser = calcBrowser()
      return browser
    }
    function Resize({ swiper, on, emit }) {
      const window = ssr_window_esm_getWindow()
      let observer = null
      let animationFrame = null
      const resizeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return
        emit('beforeResize')
        emit('resize')
      }
      const createObserver = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return
        observer = new ResizeObserver((entries) => {
          animationFrame = window.requestAnimationFrame(() => {
            const { width, height } = swiper
            let newWidth = width
            let newHeight = height
            entries.forEach(({ contentBoxSize, contentRect, target }) => {
              if (target && target !== swiper.el) return
              newWidth = contentRect
                ? contentRect.width
                : (contentBoxSize[0] || contentBoxSize).inlineSize
              newHeight = contentRect
                ? contentRect.height
                : (contentBoxSize[0] || contentBoxSize).blockSize
            })
            if (newWidth !== width || newHeight !== height) resizeHandler()
          })
        })
        observer.observe(swiper.el)
      }
      const removeObserver = () => {
        if (animationFrame) window.cancelAnimationFrame(animationFrame)
        if (observer && observer.unobserve && swiper.el) {
          observer.unobserve(swiper.el)
          observer = null
        }
      }
      const orientationChangeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return
        emit('orientationchange')
      }
      on('init', () => {
        if (
          swiper.params.resizeObserver &&
          'undefined' !== typeof window.ResizeObserver
        ) {
          createObserver()
          return
        }
        window.addEventListener('resize', resizeHandler)
        window.addEventListener('orientationchange', orientationChangeHandler)
      })
      on('destroy', () => {
        removeObserver()
        window.removeEventListener('resize', resizeHandler)
        window.removeEventListener(
          'orientationchange',
          orientationChangeHandler,
        )
      })
    }
    function Observer({ swiper, extendParams, on, emit }) {
      const observers = []
      const window = ssr_window_esm_getWindow()
      const attach = (target, options = {}) => {
        const ObserverFunc =
          window.MutationObserver || window.WebkitMutationObserver
        const observer = new ObserverFunc((mutations) => {
          if (1 === mutations.length) {
            emit('observerUpdate', mutations[0])
            return
          }
          const observerUpdate = function observerUpdate() {
            emit('observerUpdate', mutations[0])
          }
          if (window.requestAnimationFrame)
            window.requestAnimationFrame(observerUpdate)
          else window.setTimeout(observerUpdate, 0)
        })
        observer.observe(target, {
          attributes:
            'undefined' === typeof options.attributes
              ? true
              : options.attributes,
          childList:
            'undefined' === typeof options.childList ? true : options.childList,
          characterData:
            'undefined' === typeof options.characterData
              ? true
              : options.characterData,
        })
        observers.push(observer)
      }
      const init = () => {
        if (!swiper.params.observer) return
        if (swiper.params.observeParents) {
          const containerParents = swiper.$el.parents()
          for (let i = 0; i < containerParents.length; i += 1)
            attach(containerParents[i])
        }
        attach(swiper.$el[0], {
          childList: swiper.params.observeSlideChildren,
        })
        attach(swiper.$wrapperEl[0], {
          attributes: false,
        })
      }
      const destroy = () => {
        observers.forEach((observer) => {
          observer.disconnect()
        })
        observers.splice(0, observers.length)
      }
      extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false,
      })
      on('init', init)
      on('destroy', destroy)
    }
    const events_emitter = {
      on(events, handler, priority) {
        const self = this
        if (!self.eventsListeners || self.destroyed) return self
        if ('function' !== typeof handler) return self
        const method = priority ? 'unshift' : 'push'
        events.split(' ').forEach((event) => {
          if (!self.eventsListeners[event]) self.eventsListeners[event] = []
          self.eventsListeners[event][method](handler)
        })
        return self
      },
      once(events, handler, priority) {
        const self = this
        if (!self.eventsListeners || self.destroyed) return self
        if ('function' !== typeof handler) return self
        function onceHandler(...args) {
          self.off(events, onceHandler)
          if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy
          handler.apply(self, args)
        }
        onceHandler.__emitterProxy = handler
        return self.on(events, onceHandler, priority)
      },
      onAny(handler, priority) {
        const self = this
        if (!self.eventsListeners || self.destroyed) return self
        if ('function' !== typeof handler) return self
        const method = priority ? 'unshift' : 'push'
        if (self.eventsAnyListeners.indexOf(handler) < 0)
          self.eventsAnyListeners[method](handler)
        return self
      },
      offAny(handler) {
        const self = this
        if (!self.eventsListeners || self.destroyed) return self
        if (!self.eventsAnyListeners) return self
        const index = self.eventsAnyListeners.indexOf(handler)
        if (index >= 0) self.eventsAnyListeners.splice(index, 1)
        return self
      },
      off(events, handler) {
        const self = this
        if (!self.eventsListeners || self.destroyed) return self
        if (!self.eventsListeners) return self
        events.split(' ').forEach((event) => {
          if ('undefined' === typeof handler) self.eventsListeners[event] = []
          else if (self.eventsListeners[event])
            self.eventsListeners[event].forEach((eventHandler, index) => {
              if (
                eventHandler === handler ||
                (eventHandler.__emitterProxy &&
                  eventHandler.__emitterProxy === handler)
              )
                self.eventsListeners[event].splice(index, 1)
            })
        })
        return self
      },
      emit(...args) {
        const self = this
        if (!self.eventsListeners || self.destroyed) return self
        if (!self.eventsListeners) return self
        let events
        let data
        let context
        if ('string' === typeof args[0] || Array.isArray(args[0])) {
          events = args[0]
          data = args.slice(1, args.length)
          context = self
        } else {
          events = args[0].events
          data = args[0].data
          context = args[0].context || self
        }
        data.unshift(context)
        const eventsArray = Array.isArray(events) ? events : events.split(' ')
        eventsArray.forEach((event) => {
          if (self.eventsAnyListeners && self.eventsAnyListeners.length)
            self.eventsAnyListeners.forEach((eventHandler) => {
              eventHandler.apply(context, [event, ...data])
            })
          if (self.eventsListeners && self.eventsListeners[event])
            self.eventsListeners[event].forEach((eventHandler) => {
              eventHandler.apply(context, data)
            })
        })
        return self
      },
    }
    function updateSize() {
      const swiper = this
      let width
      let height
      const $el = swiper.$el
      if (
        'undefined' !== typeof swiper.params.width &&
        null !== swiper.params.width
      )
        width = swiper.params.width
      else width = $el[0].clientWidth
      if (
        'undefined' !== typeof swiper.params.height &&
        null !== swiper.params.height
      )
        height = swiper.params.height
      else height = $el[0].clientHeight
      if (
        (0 === width && swiper.isHorizontal()) ||
        (0 === height && swiper.isVertical())
      )
        return
      width =
        width -
        parseInt($el.css('padding-left') || 0, 10) -
        parseInt($el.css('padding-right') || 0, 10)
      height =
        height -
        parseInt($el.css('padding-top') || 0, 10) -
        parseInt($el.css('padding-bottom') || 0, 10)
      if (Number.isNaN(width)) width = 0
      if (Number.isNaN(height)) height = 0
      Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height,
      })
    }
    function updateSlides() {
      const swiper = this
      function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property
        return {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[property]
      }
      function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0)
      }
      const params = swiper.params
      const {
        $wrapperEl,
        size: swiperSize,
        rtlTranslate: rtl,
        wrongRTL,
      } = swiper
      const isVirtual = swiper.virtual && params.virtual.enabled
      const previousSlidesLength = isVirtual
        ? swiper.virtual.slides.length
        : swiper.slides.length
      const slides = $wrapperEl.children(`.${swiper.params.slideClass}`)
      const slidesLength = isVirtual
        ? swiper.virtual.slides.length
        : slides.length
      let snapGrid = []
      const slidesGrid = []
      const slidesSizesGrid = []
      let offsetBefore = params.slidesOffsetBefore
      if ('function' === typeof offsetBefore)
        offsetBefore = params.slidesOffsetBefore.call(swiper)
      let offsetAfter = params.slidesOffsetAfter
      if ('function' === typeof offsetAfter)
        offsetAfter = params.slidesOffsetAfter.call(swiper)
      const previousSnapGridLength = swiper.snapGrid.length
      const previousSlidesGridLength = swiper.slidesGrid.length
      let spaceBetween = params.spaceBetween
      let slidePosition = -offsetBefore
      let prevSlideSize = 0
      let index = 0
      if ('undefined' === typeof swiperSize) return
      if ('string' === typeof spaceBetween && spaceBetween.indexOf('%') >= 0)
        spaceBetween =
          (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize
      swiper.virtualSize = -spaceBetween
      if (rtl)
        slides.css({
          marginLeft: '',
          marginBottom: '',
          marginTop: '',
        })
      else
        slides.css({
          marginRight: '',
          marginBottom: '',
          marginTop: '',
        })
      if (params.centeredSlides && params.cssMode) {
        utils_setCSSProperty(
          swiper.wrapperEl,
          '--swiper-centered-offset-before',
          '',
        )
        utils_setCSSProperty(
          swiper.wrapperEl,
          '--swiper-centered-offset-after',
          '',
        )
      }
      const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid
      if (gridEnabled) swiper.grid.initSlides(slidesLength)
      let slideSize
      const shouldResetSlideSize =
        'auto' === params.slidesPerView &&
        params.breakpoints &&
        Object.keys(params.breakpoints).filter(
          (key) => 'undefined' !== typeof params.breakpoints[key].slidesPerView,
        ).length > 0
      for (let i = 0; i < slidesLength; i += 1) {
        slideSize = 0
        const slide = slides.eq(i)
        if (gridEnabled)
          swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel)
        if ('none' === slide.css('display')) continue
        if ('auto' === params.slidesPerView) {
          if (shouldResetSlideSize)
            slides[i].style[getDirectionLabel('width')] = ``
          const slideStyles = getComputedStyle(slide[0])
          const currentTransform = slide[0].style.transform
          const currentWebKitTransform = slide[0].style.webkitTransform
          if (currentTransform) slide[0].style.transform = 'none'
          if (currentWebKitTransform) slide[0].style.webkitTransform = 'none'
          if (params.roundLengths)
            slideSize = swiper.isHorizontal()
              ? slide.outerWidth(true)
              : slide.outerHeight(true)
          else {
            const width = getDirectionPropertyValue(slideStyles, 'width')
            const paddingLeft = getDirectionPropertyValue(
              slideStyles,
              'padding-left',
            )
            const paddingRight = getDirectionPropertyValue(
              slideStyles,
              'padding-right',
            )
            const marginLeft = getDirectionPropertyValue(
              slideStyles,
              'margin-left',
            )
            const marginRight = getDirectionPropertyValue(
              slideStyles,
              'margin-right',
            )
            const boxSizing = slideStyles.getPropertyValue('box-sizing')
            if (boxSizing && 'border-box' === boxSizing)
              slideSize = width + marginLeft + marginRight
            else {
              const { clientWidth, offsetWidth } = slide[0]
              slideSize =
                width +
                paddingLeft +
                paddingRight +
                marginLeft +
                marginRight +
                (offsetWidth - clientWidth)
            }
          }
          if (currentTransform) slide[0].style.transform = currentTransform
          if (currentWebKitTransform)
            slide[0].style.webkitTransform = currentWebKitTransform
          if (params.roundLengths) slideSize = Math.floor(slideSize)
        } else {
          slideSize =
            (swiperSize - (params.slidesPerView - 1) * spaceBetween) /
            params.slidesPerView
          if (params.roundLengths) slideSize = Math.floor(slideSize)
          if (slides[i])
            slides[i].style[getDirectionLabel('width')] = `${slideSize}px`
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize
        slidesSizesGrid.push(slideSize)
        if (params.centeredSlides) {
          slidePosition =
            slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween
          if (0 === prevSlideSize && 0 !== i)
            slidePosition = slidePosition - swiperSize / 2 - spaceBetween
          if (0 === i)
            slidePosition = slidePosition - swiperSize / 2 - spaceBetween
          if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0
          if (params.roundLengths) slidePosition = Math.floor(slidePosition)
          if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition)
          slidesGrid.push(slidePosition)
        } else {
          if (params.roundLengths) slidePosition = Math.floor(slidePosition)
          if (
            (index - Math.min(swiper.params.slidesPerGroupSkip, index)) %
              swiper.params.slidesPerGroup ===
            0
          )
            snapGrid.push(slidePosition)
          slidesGrid.push(slidePosition)
          slidePosition = slidePosition + slideSize + spaceBetween
        }
        swiper.virtualSize += slideSize + spaceBetween
        prevSlideSize = slideSize
        index += 1
      }
      swiper.virtualSize =
        Math.max(swiper.virtualSize, swiperSize) + offsetAfter
      if (
        rtl &&
        wrongRTL &&
        ('slide' === params.effect || 'coverflow' === params.effect)
      )
        $wrapperEl.css({
          width: `${swiper.virtualSize + params.spaceBetween}px`,
        })
      if (params.setWrapperSize)
        $wrapperEl.css({
          [getDirectionLabel('width')]: `${
            swiper.virtualSize + params.spaceBetween
          }px`,
        })
      if (gridEnabled)
        swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel)
      if (!params.centeredSlides) {
        const newSlidesGrid = []
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i]
          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem)
          if (snapGrid[i] <= swiper.virtualSize - swiperSize)
            newSlidesGrid.push(slidesGridItem)
        }
        snapGrid = newSlidesGrid
        if (
          Math.floor(swiper.virtualSize - swiperSize) -
            Math.floor(snapGrid[snapGrid.length - 1]) >
          1
        )
          snapGrid.push(swiper.virtualSize - swiperSize)
      }
      if (0 === snapGrid.length) snapGrid = [0]
      if (0 !== params.spaceBetween) {
        const key =
          swiper.isHorizontal() && rtl
            ? 'marginLeft'
            : getDirectionLabel('marginRight')
        slides
          .filter((_, slideIndex) => {
            if (!params.cssMode) return true
            if (slideIndex === slides.length - 1) return false
            return true
          })
          .css({
            [key]: `${spaceBetween}px`,
          })
      }
      if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0
        slidesSizesGrid.forEach((slideSizeValue) => {
          allSlidesSize +=
            slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0)
        })
        allSlidesSize -= params.spaceBetween
        const maxSnap = allSlidesSize - swiperSize
        snapGrid = snapGrid.map((snap) => {
          if (snap < 0) return -offsetBefore
          if (snap > maxSnap) return maxSnap + offsetAfter
          return snap
        })
      }
      if (params.centerInsufficientSlides) {
        let allSlidesSize = 0
        slidesSizesGrid.forEach((slideSizeValue) => {
          allSlidesSize +=
            slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0)
        })
        allSlidesSize -= params.spaceBetween
        if (allSlidesSize < swiperSize) {
          const allSlidesOffset = (swiperSize - allSlidesSize) / 2
          snapGrid.forEach((snap, snapIndex) => {
            snapGrid[snapIndex] = snap - allSlidesOffset
          })
          slidesGrid.forEach((snap, snapIndex) => {
            slidesGrid[snapIndex] = snap + allSlidesOffset
          })
        }
      }
      Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid,
      })
      if (
        params.centeredSlides &&
        params.cssMode &&
        !params.centeredSlidesBounds
      ) {
        utils_setCSSProperty(
          swiper.wrapperEl,
          '--swiper-centered-offset-before',
          `${-snapGrid[0]}px`,
        )
        utils_setCSSProperty(
          swiper.wrapperEl,
          '--swiper-centered-offset-after',
          `${
            swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2
          }px`,
        )
        const addToSnapGrid = -swiper.snapGrid[0]
        const addToSlidesGrid = -swiper.slidesGrid[0]
        swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid)
        swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid)
      }
      if (slidesLength !== previousSlidesLength)
        swiper.emit('slidesLengthChange')
      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow()
        swiper.emit('snapGridLengthChange')
      }
      if (slidesGrid.length !== previousSlidesGridLength)
        swiper.emit('slidesGridLengthChange')
      if (params.watchSlidesProgress) swiper.updateSlidesOffset()
      if (
        !isVirtual &&
        !params.cssMode &&
        ('slide' === params.effect || 'fade' === params.effect)
      ) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`
        const hasClassBackfaceClassAdded =
          swiper.$el.hasClass(backFaceHiddenClass)
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
          if (!hasClassBackfaceClassAdded)
            swiper.$el.addClass(backFaceHiddenClass)
        } else if (hasClassBackfaceClassAdded)
          swiper.$el.removeClass(backFaceHiddenClass)
      }
    }
    function updateAutoHeight(speed) {
      const swiper = this
      const activeSlides = []
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled
      let newHeight = 0
      let i
      if ('number' === typeof speed) swiper.setTransition(speed)
      else if (true === speed) swiper.setTransition(swiper.params.speed)
      const getSlideByIndex = (index) => {
        if (isVirtual)
          return swiper.slides.filter(
            (el) =>
              parseInt(el.getAttribute('data-swiper-slide-index'), 10) ===
              index,
          )[0]
        return swiper.slides.eq(index)[0]
      }
      if (
        'auto' !== swiper.params.slidesPerView &&
        swiper.params.slidesPerView > 1
      )
        if (swiper.params.centeredSlides)
          (swiper.visibleSlides || dom([])).each((slide) => {
            activeSlides.push(slide)
          })
        else
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            const index = swiper.activeIndex + i
            if (index > swiper.slides.length && !isVirtual) break
            activeSlides.push(getSlideByIndex(index))
          }
      else activeSlides.push(getSlideByIndex(swiper.activeIndex))
      for (i = 0; i < activeSlides.length; i += 1)
        if ('undefined' !== typeof activeSlides[i]) {
          const height = activeSlides[i].offsetHeight
          newHeight = height > newHeight ? height : newHeight
        }
      if (newHeight || 0 === newHeight)
        swiper.$wrapperEl.css('height', `${newHeight}px`)
    }
    function updateSlidesOffset() {
      const swiper = this
      const slides = swiper.slides
      for (let i = 0; i < slides.length; i += 1)
        slides[i].swiperSlideOffset = swiper.isHorizontal()
          ? slides[i].offsetLeft
          : slides[i].offsetTop
    }
    function updateSlidesProgress(translate = (this && this.translate) || 0) {
      const swiper = this
      const params = swiper.params
      const { slides, rtlTranslate: rtl, snapGrid } = swiper
      if (0 === slides.length) return
      if ('undefined' === typeof slides[0].swiperSlideOffset)
        swiper.updateSlidesOffset()
      let offsetCenter = -translate
      if (rtl) offsetCenter = translate
      slides.removeClass(params.slideVisibleClass)
      swiper.visibleSlidesIndexes = []
      swiper.visibleSlides = []
      for (let i = 0; i < slides.length; i += 1) {
        const slide = slides[i]
        let slideOffset = slide.swiperSlideOffset
        if (params.cssMode && params.centeredSlides)
          slideOffset -= slides[0].swiperSlideOffset
        const slideProgress =
          (offsetCenter +
            (params.centeredSlides ? swiper.minTranslate() : 0) -
            slideOffset) /
          (slide.swiperSlideSize + params.spaceBetween)
        const originalSlideProgress =
          (offsetCenter -
            snapGrid[0] +
            (params.centeredSlides ? swiper.minTranslate() : 0) -
            slideOffset) /
          (slide.swiperSlideSize + params.spaceBetween)
        const slideBefore = -(offsetCenter - slideOffset)
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i]
        const isVisible =
          (slideBefore >= 0 && slideBefore < swiper.size - 1) ||
          (slideAfter > 1 && slideAfter <= swiper.size) ||
          (slideBefore <= 0 && slideAfter >= swiper.size)
        if (isVisible) {
          swiper.visibleSlides.push(slide)
          swiper.visibleSlidesIndexes.push(i)
          slides.eq(i).addClass(params.slideVisibleClass)
        }
        slide.progress = rtl ? -slideProgress : slideProgress
        slide.originalProgress = rtl
          ? -originalSlideProgress
          : originalSlideProgress
      }
      swiper.visibleSlides = dom(swiper.visibleSlides)
    }
    function updateProgress(translate) {
      const swiper = this
      if ('undefined' === typeof translate) {
        const multiplier = swiper.rtlTranslate ? -1 : 1
        translate =
          (swiper && swiper.translate && swiper.translate * multiplier) || 0
      }
      const params = swiper.params
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()
      let { progress, isBeginning, isEnd } = swiper
      const wasBeginning = isBeginning
      const wasEnd = isEnd
      if (0 === translatesDiff) {
        progress = 0
        isBeginning = true
        isEnd = true
      } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff
        isBeginning = progress <= 0
        isEnd = progress >= 1
      }
      Object.assign(swiper, {
        progress,
        isBeginning,
        isEnd,
      })
      if (
        params.watchSlidesProgress ||
        (params.centeredSlides && params.autoHeight)
      )
        swiper.updateSlidesProgress(translate)
      if (isBeginning && !wasBeginning) swiper.emit('reachBeginning toEdge')
      if (isEnd && !wasEnd) swiper.emit('reachEnd toEdge')
      if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd))
        swiper.emit('fromEdge')
      swiper.emit('progress', progress)
    }
    function updateSlidesClasses() {
      const swiper = this
      const { slides, params, $wrapperEl, activeIndex, realIndex } = swiper
      const isVirtual = swiper.virtual && params.virtual.enabled
      slides.removeClass(
        `${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`,
      )
      let activeSlide
      if (isVirtual)
        activeSlide = swiper.$wrapperEl.find(
          `.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`,
        )
      else activeSlide = slides.eq(activeIndex)
      activeSlide.addClass(params.slideActiveClass)
      if (params.loop)
        if (activeSlide.hasClass(params.slideDuplicateClass))
          $wrapperEl
            .children(
              `.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`,
            )
            .addClass(params.slideDuplicateActiveClass)
        else
          $wrapperEl
            .children(
              `.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`,
            )
            .addClass(params.slideDuplicateActiveClass)
      let nextSlide = activeSlide
        .nextAll(`.${params.slideClass}`)
        .eq(0)
        .addClass(params.slideNextClass)
      if (params.loop && 0 === nextSlide.length) {
        nextSlide = slides.eq(0)
        nextSlide.addClass(params.slideNextClass)
      }
      let prevSlide = activeSlide
        .prevAll(`.${params.slideClass}`)
        .eq(0)
        .addClass(params.slidePrevClass)
      if (params.loop && 0 === prevSlide.length) {
        prevSlide = slides.eq(-1)
        prevSlide.addClass(params.slidePrevClass)
      }
      if (params.loop) {
        if (nextSlide.hasClass(params.slideDuplicateClass))
          $wrapperEl
            .children(
              `.${params.slideClass}:not(.${
                params.slideDuplicateClass
              })[data-swiper-slide-index="${nextSlide.attr(
                'data-swiper-slide-index',
              )}"]`,
            )
            .addClass(params.slideDuplicateNextClass)
        else
          $wrapperEl
            .children(
              `.${params.slideClass}.${
                params.slideDuplicateClass
              }[data-swiper-slide-index="${nextSlide.attr(
                'data-swiper-slide-index',
              )}"]`,
            )
            .addClass(params.slideDuplicateNextClass)
        if (prevSlide.hasClass(params.slideDuplicateClass))
          $wrapperEl
            .children(
              `.${params.slideClass}:not(.${
                params.slideDuplicateClass
              })[data-swiper-slide-index="${prevSlide.attr(
                'data-swiper-slide-index',
              )}"]`,
            )
            .addClass(params.slideDuplicatePrevClass)
        else
          $wrapperEl
            .children(
              `.${params.slideClass}.${
                params.slideDuplicateClass
              }[data-swiper-slide-index="${prevSlide.attr(
                'data-swiper-slide-index',
              )}"]`,
            )
            .addClass(params.slideDuplicatePrevClass)
      }
      swiper.emitSlidesClasses()
    }
    function updateActiveIndex(newActiveIndex) {
      const swiper = this
      const translate = swiper.rtlTranslate
        ? swiper.translate
        : -swiper.translate
      const {
        slidesGrid,
        snapGrid,
        params,
        activeIndex: previousIndex,
        realIndex: previousRealIndex,
        snapIndex: previousSnapIndex,
      } = swiper
      let activeIndex = newActiveIndex
      let snapIndex
      if ('undefined' === typeof activeIndex) {
        for (let i = 0; i < slidesGrid.length; i += 1)
          if ('undefined' !== typeof slidesGrid[i + 1]) {
            if (
              translate >= slidesGrid[i] &&
              translate <
                slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
            )
              activeIndex = i
            else if (
              translate >= slidesGrid[i] &&
              translate < slidesGrid[i + 1]
            )
              activeIndex = i + 1
          } else if (translate >= slidesGrid[i]) activeIndex = i
        if (params.normalizeSlideIndex)
          if (activeIndex < 0 || 'undefined' === typeof activeIndex)
            activeIndex = 0
      }
      if (snapGrid.indexOf(translate) >= 0)
        snapIndex = snapGrid.indexOf(translate)
      else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex)
        snapIndex =
          skip + Math.floor((activeIndex - skip) / params.slidesPerGroup)
      }
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1
      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex
          swiper.emit('snapIndexChange')
        }
        return
      }
      const realIndex = parseInt(
        swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') ||
          activeIndex,
        10,
      )
      Object.assign(swiper, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex,
      })
      swiper.emit('activeIndexChange')
      swiper.emit('snapIndexChange')
      if (previousRealIndex !== realIndex) swiper.emit('realIndexChange')
      if (swiper.initialized || swiper.params.runCallbacksOnInit)
        swiper.emit('slideChange')
    }
    function updateClickedSlide(e) {
      const swiper = this
      const params = swiper.params
      const slide = dom(e).closest(`.${params.slideClass}`)[0]
      let slideFound = false
      let slideIndex
      if (slide)
        for (let i = 0; i < swiper.slides.length; i += 1)
          if (swiper.slides[i] === slide) {
            slideFound = true
            slideIndex = i
            break
          }
      if (slide && slideFound) {
        swiper.clickedSlide = slide
        if (swiper.virtual && swiper.params.virtual.enabled)
          swiper.clickedIndex = parseInt(
            dom(slide).attr('data-swiper-slide-index'),
            10,
          )
        else swiper.clickedIndex = slideIndex
      } else {
        swiper.clickedSlide = void 0
        swiper.clickedIndex = void 0
        return
      }
      if (
        params.slideToClickedSlide &&
        void 0 !== swiper.clickedIndex &&
        swiper.clickedIndex !== swiper.activeIndex
      )
        swiper.slideToClickedSlide()
    }
    const update = {
      updateSize,
      updateSlides,
      updateAutoHeight,
      updateSlidesOffset,
      updateSlidesProgress,
      updateProgress,
      updateSlidesClasses,
      updateActiveIndex,
      updateClickedSlide,
    }
    function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
      const swiper = this
      const { params, rtlTranslate: rtl, translate, $wrapperEl } = swiper
      if (params.virtualTranslate) return rtl ? -translate : translate
      if (params.cssMode) return translate
      let currentTranslate = utils_getTranslate($wrapperEl[0], axis)
      if (rtl) currentTranslate = -currentTranslate
      return currentTranslate || 0
    }
    function setTranslate(translate, byController) {
      const swiper = this
      const {
        rtlTranslate: rtl,
        params,
        $wrapperEl,
        wrapperEl,
        progress,
      } = swiper
      let x = 0
      let y = 0
      const z = 0
      if (swiper.isHorizontal()) x = rtl ? -translate : translate
      else y = translate
      if (params.roundLengths) {
        x = Math.floor(x)
        y = Math.floor(y)
      }
      if (params.cssMode)
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
          swiper.isHorizontal() ? -x : -y
      else if (!params.virtualTranslate)
        $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`)
      swiper.previousTranslate = swiper.translate
      swiper.translate = swiper.isHorizontal() ? x : y
      let newProgress
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()
      if (0 === translatesDiff) newProgress = 0
      else newProgress = (translate - swiper.minTranslate()) / translatesDiff
      if (newProgress !== progress) swiper.updateProgress(translate)
      swiper.emit('setTranslate', swiper.translate, byController)
    }
    function minTranslate() {
      return -this.snapGrid[0]
    }
    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1]
    }
    function translateTo(
      translate = 0,
      speed = this.params.speed,
      runCallbacks = true,
      translateBounds = true,
      internal,
    ) {
      const swiper = this
      const { params, wrapperEl } = swiper
      if (swiper.animating && params.preventInteractionOnTransition)
        return false
      const minTranslate = swiper.minTranslate()
      const maxTranslate = swiper.maxTranslate()
      let newTranslate
      if (translateBounds && translate > minTranslate)
        newTranslate = minTranslate
      else if (translateBounds && translate < maxTranslate)
        newTranslate = maxTranslate
      else newTranslate = translate
      swiper.updateProgress(newTranslate)
      if (params.cssMode) {
        const isH = swiper.isHorizontal()
        if (0 === speed)
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate
        else {
          if (!swiper.support.smoothScroll) {
            animateCSSModeScroll({
              swiper,
              targetPosition: -newTranslate,
              side: isH ? 'left' : 'top',
            })
            return true
          }
          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: -newTranslate,
            behavior: 'smooth',
          })
        }
        return true
      }
      if (0 === speed) {
        swiper.setTransition(0)
        swiper.setTranslate(newTranslate)
        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal)
          swiper.emit('transitionEnd')
        }
      } else {
        swiper.setTransition(speed)
        swiper.setTranslate(newTranslate)
        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal)
          swiper.emit('transitionStart')
        }
        if (!swiper.animating) {
          swiper.animating = true
          if (!swiper.onTranslateToWrapperTransitionEnd)
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(
              e,
            ) {
              if (!swiper || swiper.destroyed) return
              if (e.target !== this) return
              swiper.$wrapperEl[0].removeEventListener(
                'transitionend',
                swiper.onTranslateToWrapperTransitionEnd,
              )
              swiper.$wrapperEl[0].removeEventListener(
                'webkitTransitionEnd',
                swiper.onTranslateToWrapperTransitionEnd,
              )
              swiper.onTranslateToWrapperTransitionEnd = null
              delete swiper.onTranslateToWrapperTransitionEnd
              if (runCallbacks) swiper.emit('transitionEnd')
            }
          swiper.$wrapperEl[0].addEventListener(
            'transitionend',
            swiper.onTranslateToWrapperTransitionEnd,
          )
          swiper.$wrapperEl[0].addEventListener(
            'webkitTransitionEnd',
            swiper.onTranslateToWrapperTransitionEnd,
          )
        }
      }
      return true
    }
    const translate = {
      getTranslate: getSwiperTranslate,
      setTranslate,
      minTranslate,
      maxTranslate,
      translateTo,
    }
    function setTransition(duration, byController) {
      const swiper = this
      if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration)
      swiper.emit('setTransition', duration, byController)
    }
    function transitionEmit({ swiper, runCallbacks, direction, step }) {
      const { activeIndex, previousIndex } = swiper
      let dir = direction
      if (!dir)
        if (activeIndex > previousIndex) dir = 'next'
        else if (activeIndex < previousIndex) dir = 'prev'
        else dir = 'reset'
      swiper.emit(`transition${step}`)
      if (runCallbacks && activeIndex !== previousIndex) {
        if ('reset' === dir) {
          swiper.emit(`slideResetTransition${step}`)
          return
        }
        swiper.emit(`slideChangeTransition${step}`)
        if ('next' === dir) swiper.emit(`slideNextTransition${step}`)
        else swiper.emit(`slidePrevTransition${step}`)
      }
    }
    function transitionStart(runCallbacks = true, direction) {
      const swiper = this
      const { params } = swiper
      if (params.cssMode) return
      if (params.autoHeight) swiper.updateAutoHeight()
      transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'Start',
      })
    }
    function transitionEnd_transitionEnd(runCallbacks = true, direction) {
      const swiper = this
      const { params } = swiper
      swiper.animating = false
      if (params.cssMode) return
      swiper.setTransition(0)
      transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'End',
      })
    }
    const core_transition = {
      setTransition,
      transitionStart,
      transitionEnd: transitionEnd_transitionEnd,
    }
    function slideTo(
      index = 0,
      speed = this.params.speed,
      runCallbacks = true,
      internal,
      initial,
    ) {
      if ('number' !== typeof index && 'string' !== typeof index)
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`,
        )
      if ('string' === typeof index) {
        const indexAsNumber = parseInt(index, 10)
        const isValidNumber = isFinite(indexAsNumber)
        if (!isValidNumber)
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`,
          )
        index = indexAsNumber
      }
      const swiper = this
      let slideIndex = index
      if (slideIndex < 0) slideIndex = 0
      const {
        params,
        snapGrid,
        slidesGrid,
        previousIndex,
        activeIndex,
        rtlTranslate: rtl,
        wrapperEl,
        enabled,
      } = swiper
      if (
        (swiper.animating && params.preventInteractionOnTransition) ||
        (!enabled && !internal && !initial)
      )
        return false
      const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex)
      let snapIndex =
        skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup)
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1
      const translate = -snapGrid[snapIndex]
      if (params.normalizeSlideIndex)
        for (let i = 0; i < slidesGrid.length; i += 1) {
          const normalizedTranslate = -Math.floor(100 * translate)
          const normalizedGrid = Math.floor(100 * slidesGrid[i])
          const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1])
          if ('undefined' !== typeof slidesGrid[i + 1]) {
            if (
              normalizedTranslate >= normalizedGrid &&
              normalizedTranslate <
                normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2
            )
              slideIndex = i
            else if (
              normalizedTranslate >= normalizedGrid &&
              normalizedTranslate < normalizedGridNext
            )
              slideIndex = i + 1
          } else if (normalizedTranslate >= normalizedGrid) slideIndex = i
        }
      if (swiper.initialized && slideIndex !== activeIndex) {
        if (
          !swiper.allowSlideNext &&
          translate < swiper.translate &&
          translate < swiper.minTranslate()
        )
          return false
        if (
          !swiper.allowSlidePrev &&
          translate > swiper.translate &&
          translate > swiper.maxTranslate()
        )
          if ((activeIndex || 0) !== slideIndex) return false
      }
      if (slideIndex !== (previousIndex || 0) && runCallbacks)
        swiper.emit('beforeSlideChangeStart')
      swiper.updateProgress(translate)
      let direction
      if (slideIndex > activeIndex) direction = 'next'
      else if (slideIndex < activeIndex) direction = 'prev'
      else direction = 'reset'
      if (
        (rtl && -translate === swiper.translate) ||
        (!rtl && translate === swiper.translate)
      ) {
        swiper.updateActiveIndex(slideIndex)
        if (params.autoHeight) swiper.updateAutoHeight()
        swiper.updateSlidesClasses()
        if ('slide' !== params.effect) swiper.setTranslate(translate)
        if ('reset' !== direction) {
          swiper.transitionStart(runCallbacks, direction)
          swiper.transitionEnd(runCallbacks, direction)
        }
        return false
      }
      if (params.cssMode) {
        const isH = swiper.isHorizontal()
        const t = rtl ? translate : -translate
        if (0 === speed) {
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled
          if (isVirtual) {
            swiper.wrapperEl.style.scrollSnapType = 'none'
            swiper._immediateVirtual = true
          }
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t
          if (isVirtual)
            requestAnimationFrame(() => {
              swiper.wrapperEl.style.scrollSnapType = ''
              swiper._swiperImmediateVirtual = false
            })
        } else {
          if (!swiper.support.smoothScroll) {
            animateCSSModeScroll({
              swiper,
              targetPosition: t,
              side: isH ? 'left' : 'top',
            })
            return true
          }
          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: t,
            behavior: 'smooth',
          })
        }
        return true
      }
      swiper.setTransition(speed)
      swiper.setTranslate(translate)
      swiper.updateActiveIndex(slideIndex)
      swiper.updateSlidesClasses()
      swiper.emit('beforeTransitionStart', speed, internal)
      swiper.transitionStart(runCallbacks, direction)
      if (0 === speed) swiper.transitionEnd(runCallbacks, direction)
      else if (!swiper.animating) {
        swiper.animating = true
        if (!swiper.onSlideToWrapperTransitionEnd)
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return
            if (e.target !== this) return
            swiper.$wrapperEl[0].removeEventListener(
              'transitionend',
              swiper.onSlideToWrapperTransitionEnd,
            )
            swiper.$wrapperEl[0].removeEventListener(
              'webkitTransitionEnd',
              swiper.onSlideToWrapperTransitionEnd,
            )
            swiper.onSlideToWrapperTransitionEnd = null
            delete swiper.onSlideToWrapperTransitionEnd
            swiper.transitionEnd(runCallbacks, direction)
          }
        swiper.$wrapperEl[0].addEventListener(
          'transitionend',
          swiper.onSlideToWrapperTransitionEnd,
        )
        swiper.$wrapperEl[0].addEventListener(
          'webkitTransitionEnd',
          swiper.onSlideToWrapperTransitionEnd,
        )
      }
      return true
    }
    function slideToLoop(
      index = 0,
      speed = this.params.speed,
      runCallbacks = true,
      internal,
    ) {
      if ('string' === typeof index) {
        const indexAsNumber = parseInt(index, 10)
        const isValidNumber = isFinite(indexAsNumber)
        if (!isValidNumber)
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`,
          )
        index = indexAsNumber
      }
      const swiper = this
      let newIndex = index
      if (swiper.params.loop) newIndex += swiper.loopedSlides
      return swiper.slideTo(newIndex, speed, runCallbacks, internal)
    }
    function slideNext(
      speed = this.params.speed,
      runCallbacks = true,
      internal,
    ) {
      const swiper = this
      const { animating, enabled, params } = swiper
      if (!enabled) return swiper
      let perGroup = params.slidesPerGroup
      if (
        'auto' === params.slidesPerView &&
        1 === params.slidesPerGroup &&
        params.slidesPerGroupAuto
      )
        perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1)
      const increment =
        swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup
      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false
        swiper.loopFix()
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft
      }
      if (params.rewind && swiper.isEnd)
        return swiper.slideTo(0, speed, runCallbacks, internal)
      return swiper.slideTo(
        swiper.activeIndex + increment,
        speed,
        runCallbacks,
        internal,
      )
    }
    function slidePrev(
      speed = this.params.speed,
      runCallbacks = true,
      internal,
    ) {
      const swiper = this
      const { params, animating, snapGrid, slidesGrid, rtlTranslate, enabled } =
        swiper
      if (!enabled) return swiper
      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false
        swiper.loopFix()
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft
      }
      const translate = rtlTranslate ? swiper.translate : -swiper.translate
      function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val))
        return Math.floor(val)
      }
      const normalizedTranslate = normalize(translate)
      const normalizedSnapGrid = snapGrid.map((val) => normalize(val))
      let prevSnap =
        snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1]
      if ('undefined' === typeof prevSnap && params.cssMode) {
        let prevSnapIndex
        snapGrid.forEach((snap, snapIndex) => {
          if (normalizedTranslate >= snap) prevSnapIndex = snapIndex
        })
        if ('undefined' !== typeof prevSnapIndex)
          prevSnap =
            snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex]
      }
      let prevIndex = 0
      if ('undefined' !== typeof prevSnap) {
        prevIndex = slidesGrid.indexOf(prevSnap)
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1
        if (
          'auto' === params.slidesPerView &&
          1 === params.slidesPerGroup &&
          params.slidesPerGroupAuto
        ) {
          prevIndex =
            prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1
          prevIndex = Math.max(prevIndex, 0)
        }
      }
      if (params.rewind && swiper.isBeginning) {
        const lastIndex =
          swiper.params.virtual &&
          swiper.params.virtual.enabled &&
          swiper.virtual
            ? swiper.virtual.slides.length - 1
            : swiper.slides.length - 1
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal)
      }
      return swiper.slideTo(prevIndex, speed, runCallbacks, internal)
    }
    function slideReset(
      speed = this.params.speed,
      runCallbacks = true,
      internal,
    ) {
      const swiper = this
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal)
    }
    function slideToClosest(
      speed = this.params.speed,
      runCallbacks = true,
      internal,
      threshold = 0.5,
    ) {
      const swiper = this
      let index = swiper.activeIndex
      const skip = Math.min(swiper.params.slidesPerGroupSkip, index)
      const snapIndex =
        skip + Math.floor((index - skip) / swiper.params.slidesPerGroup)
      const translate = swiper.rtlTranslate
        ? swiper.translate
        : -swiper.translate
      if (translate >= swiper.snapGrid[snapIndex]) {
        const currentSnap = swiper.snapGrid[snapIndex]
        const nextSnap = swiper.snapGrid[snapIndex + 1]
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold)
          index += swiper.params.slidesPerGroup
      } else {
        const prevSnap = swiper.snapGrid[snapIndex - 1]
        const currentSnap = swiper.snapGrid[snapIndex]
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold)
          index -= swiper.params.slidesPerGroup
      }
      index = Math.max(index, 0)
      index = Math.min(index, swiper.slidesGrid.length - 1)
      return swiper.slideTo(index, speed, runCallbacks, internal)
    }
    function slideToClickedSlide() {
      const swiper = this
      const { params, $wrapperEl } = swiper
      const slidesPerView =
        'auto' === params.slidesPerView
          ? swiper.slidesPerViewDynamic()
          : params.slidesPerView
      let slideToIndex = swiper.clickedIndex
      let realIndex
      if (params.loop) {
        if (swiper.animating) return
        realIndex = parseInt(
          dom(swiper.clickedSlide).attr('data-swiper-slide-index'),
          10,
        )
        if (params.centeredSlides)
          if (
            slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
            slideToIndex >
              swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
          ) {
            swiper.loopFix()
            slideToIndex = $wrapperEl
              .children(
                `.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`,
              )
              .eq(0)
              .index()
            utils_nextTick(() => {
              swiper.slideTo(slideToIndex)
            })
          } else swiper.slideTo(slideToIndex)
        else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix()
          slideToIndex = $wrapperEl
            .children(
              `.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`,
            )
            .eq(0)
            .index()
          utils_nextTick(() => {
            swiper.slideTo(slideToIndex)
          })
        } else swiper.slideTo(slideToIndex)
      } else swiper.slideTo(slideToIndex)
    }
    const slide = {
      slideTo,
      slideToLoop,
      slideNext,
      slidePrev,
      slideReset,
      slideToClosest,
      slideToClickedSlide,
    }
    function loopCreate() {
      const swiper = this
      const document = ssr_window_esm_getDocument()
      const { params, $wrapperEl } = swiper
      const $selector =
        $wrapperEl.children().length > 0
          ? dom($wrapperEl.children()[0].parentNode)
          : $wrapperEl
      $selector
        .children(`.${params.slideClass}.${params.slideDuplicateClass}`)
        .remove()
      let slides = $selector.children(`.${params.slideClass}`)
      if (params.loopFillGroupWithBlank) {
        const blankSlidesNum =
          params.slidesPerGroup - (slides.length % params.slidesPerGroup)
        if (blankSlidesNum !== params.slidesPerGroup) {
          for (let i = 0; i < blankSlidesNum; i += 1) {
            const blankNode = dom(document.createElement('div')).addClass(
              `${params.slideClass} ${params.slideBlankClass}`,
            )
            $selector.append(blankNode)
          }
          slides = $selector.children(`.${params.slideClass}`)
        }
      }
      if ('auto' === params.slidesPerView && !params.loopedSlides)
        params.loopedSlides = slides.length
      swiper.loopedSlides = Math.ceil(
        parseFloat(params.loopedSlides || params.slidesPerView, 10),
      )
      swiper.loopedSlides += params.loopAdditionalSlides
      if (
        swiper.loopedSlides > slides.length &&
        swiper.params.loopedSlidesLimit
      )
        swiper.loopedSlides = slides.length
      const prependSlides = []
      const appendSlides = []
      slides.each((el, index) => {
        const slide = dom(el)
        slide.attr('data-swiper-slide-index', index)
      })
      for (let i = 0; i < swiper.loopedSlides; i += 1) {
        const index = i - Math.floor(i / slides.length) * slides.length
        appendSlides.push(slides.eq(index)[0])
        prependSlides.unshift(slides.eq(slides.length - index - 1)[0])
      }
      for (let i = 0; i < appendSlides.length; i += 1)
        $selector.append(
          dom(appendSlides[i].cloneNode(true)).addClass(
            params.slideDuplicateClass,
          ),
        )
      for (let i = prependSlides.length - 1; i >= 0; i -= 1)
        $selector.prepend(
          dom(prependSlides[i].cloneNode(true)).addClass(
            params.slideDuplicateClass,
          ),
        )
    }
    function loopFix() {
      const swiper = this
      swiper.emit('beforeLoopFix')
      const {
        activeIndex,
        slides,
        loopedSlides,
        allowSlidePrev,
        allowSlideNext,
        snapGrid,
        rtlTranslate: rtl,
      } = swiper
      let newIndex
      swiper.allowSlidePrev = true
      swiper.allowSlideNext = true
      const snapTranslate = -snapGrid[activeIndex]
      const diff = snapTranslate - swiper.getTranslate()
      if (activeIndex < loopedSlides) {
        newIndex = slides.length - 3 * loopedSlides + activeIndex
        newIndex += loopedSlides
        const slideChanged = swiper.slideTo(newIndex, 0, false, true)
        if (slideChanged && 0 !== diff)
          swiper.setTranslate(
            (rtl ? -swiper.translate : swiper.translate) - diff,
          )
      } else if (activeIndex >= slides.length - loopedSlides) {
        newIndex = -slides.length + activeIndex + loopedSlides
        newIndex += loopedSlides
        const slideChanged = swiper.slideTo(newIndex, 0, false, true)
        if (slideChanged && 0 !== diff)
          swiper.setTranslate(
            (rtl ? -swiper.translate : swiper.translate) - diff,
          )
      }
      swiper.allowSlidePrev = allowSlidePrev
      swiper.allowSlideNext = allowSlideNext
      swiper.emit('loopFix')
    }
    function loopDestroy() {
      const swiper = this
      const { $wrapperEl, params, slides } = swiper
      $wrapperEl
        .children(
          `.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`,
        )
        .remove()
      slides.removeAttr('data-swiper-slide-index')
    }
    const loop = {
      loopCreate,
      loopFix,
      loopDestroy,
    }
    function setGrabCursor(moving) {
      const swiper = this
      if (
        swiper.support.touch ||
        !swiper.params.simulateTouch ||
        (swiper.params.watchOverflow && swiper.isLocked) ||
        swiper.params.cssMode
      )
        return
      const el =
        'container' === swiper.params.touchEventsTarget
          ? swiper.el
          : swiper.wrapperEl
      el.style.cursor = 'move'
      el.style.cursor = moving ? 'grabbing' : 'grab'
    }
    function unsetGrabCursor() {
      const swiper = this
      if (
        swiper.support.touch ||
        (swiper.params.watchOverflow && swiper.isLocked) ||
        swiper.params.cssMode
      )
        return
      swiper[
        'container' === swiper.params.touchEventsTarget ? 'el' : 'wrapperEl'
      ].style.cursor = ''
    }
    const grab_cursor = {
      setGrabCursor,
      unsetGrabCursor,
    }
    function closestElement(selector, base = this) {
      function __closestFrom(el) {
        if (
          !el ||
          el === ssr_window_esm_getDocument() ||
          el === ssr_window_esm_getWindow()
        )
          return null
        if (el.assignedSlot) el = el.assignedSlot
        const found = el.closest(selector)
        if (!found && !el.getRootNode) return null
        return found || __closestFrom(el.getRootNode().host)
      }
      return __closestFrom(base)
    }
    function onTouchStart(event) {
      const swiper = this
      const document = ssr_window_esm_getDocument()
      const window = ssr_window_esm_getWindow()
      const data = swiper.touchEventsData
      const { params, touches, enabled } = swiper
      if (!enabled) return
      if (swiper.animating && params.preventInteractionOnTransition) return
      if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix()
      let e = event
      if (e.originalEvent) e = e.originalEvent
      let $targetEl = dom(e.target)
      if ('wrapper' === params.touchEventsTarget)
        if (!$targetEl.closest(swiper.wrapperEl).length) return
      data.isTouchEvent = 'touchstart' === e.type
      if (!data.isTouchEvent && 'which' in e && 3 === e.which) return
      if (!data.isTouchEvent && 'button' in e && e.button > 0) return
      if (data.isTouched && data.isMoved) return
      const swipingClassHasValue =
        !!params.noSwipingClass && '' !== params.noSwipingClass
      const eventPath = event.composedPath ? event.composedPath() : event.path
      if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath)
        $targetEl = dom(eventPath[0])
      const noSwipingSelector = params.noSwipingSelector
        ? params.noSwipingSelector
        : `.${params.noSwipingClass}`
      const isTargetShadow = !!(e.target && e.target.shadowRoot)
      if (
        params.noSwiping &&
        (isTargetShadow
          ? closestElement(noSwipingSelector, $targetEl[0])
          : $targetEl.closest(noSwipingSelector)[0])
      ) {
        swiper.allowClick = true
        return
      }
      if (params.swipeHandler)
        if (!$targetEl.closest(params.swipeHandler)[0]) return
      touches.currentX =
        'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX
      touches.currentY =
        'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY
      const startX = touches.currentX
      const startY = touches.currentY
      const edgeSwipeDetection =
        params.edgeSwipeDetection || params.iOSEdgeSwipeDetection
      const edgeSwipeThreshold =
        params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold
      if (
        edgeSwipeDetection &&
        (startX <= edgeSwipeThreshold ||
          startX >= window.innerWidth - edgeSwipeThreshold)
      )
        if ('prevent' === edgeSwipeDetection) event.preventDefault()
        else return
      Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: void 0,
        startMoving: void 0,
      })
      touches.startX = startX
      touches.startY = startY
      data.touchStartTime = now()
      swiper.allowClick = true
      swiper.updateSize()
      swiper.swipeDirection = void 0
      if (params.threshold > 0) data.allowThresholdMove = false
      if ('touchstart' !== e.type) {
        let preventDefault = true
        if ($targetEl.is(data.focusableElements)) {
          preventDefault = false
          if ('SELECT' === $targetEl[0].nodeName) data.isTouched = false
        }
        if (
          document.activeElement &&
          dom(document.activeElement).is(data.focusableElements) &&
          document.activeElement !== $targetEl[0]
        )
          document.activeElement.blur()
        const shouldPreventDefault =
          preventDefault &&
          swiper.allowTouchMove &&
          params.touchStartPreventDefault
        if (
          (params.touchStartForcePreventDefault || shouldPreventDefault) &&
          !$targetEl[0].isContentEditable
        )
          e.preventDefault()
      }
      if (
        swiper.params.freeMode &&
        swiper.params.freeMode.enabled &&
        swiper.freeMode &&
        swiper.animating &&
        !params.cssMode
      )
        swiper.freeMode.onTouchStart()
      swiper.emit('touchStart', e)
    }
    function onTouchMove(event) {
      const document = ssr_window_esm_getDocument()
      const swiper = this
      const data = swiper.touchEventsData
      const { params, touches, rtlTranslate: rtl, enabled } = swiper
      if (!enabled) return
      let e = event
      if (e.originalEvent) e = e.originalEvent
      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling)
          swiper.emit('touchMoveOpposite', e)
        return
      }
      if (data.isTouchEvent && 'touchmove' !== e.type) return
      const targetTouch =
        'touchmove' === e.type &&
        e.targetTouches &&
        (e.targetTouches[0] || e.changedTouches[0])
      const pageX = 'touchmove' === e.type ? targetTouch.pageX : e.pageX
      const pageY = 'touchmove' === e.type ? targetTouch.pageY : e.pageY
      if (e.preventedByNestedSwiper) {
        touches.startX = pageX
        touches.startY = pageY
        return
      }
      if (!swiper.allowTouchMove) {
        if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false
        if (data.isTouched) {
          Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY,
          })
          data.touchStartTime = now()
        }
        return
      }
      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop)
        if (swiper.isVertical()) {
          if (
            (pageY < touches.startY &&
              swiper.translate <= swiper.maxTranslate()) ||
            (pageY > touches.startY &&
              swiper.translate >= swiper.minTranslate())
          ) {
            data.isTouched = false
            data.isMoved = false
            return
          }
        } else if (
          (pageX < touches.startX &&
            swiper.translate <= swiper.maxTranslate()) ||
          (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
        )
          return
      if (data.isTouchEvent && document.activeElement)
        if (
          e.target === document.activeElement &&
          dom(e.target).is(data.focusableElements)
        ) {
          data.isMoved = true
          swiper.allowClick = false
          return
        }
      if (data.allowTouchCallbacks) swiper.emit('touchMove', e)
      if (e.targetTouches && e.targetTouches.length > 1) return
      touches.currentX = pageX
      touches.currentY = pageY
      const diffX = touches.currentX - touches.startX
      const diffY = touches.currentY - touches.startY
      if (
        swiper.params.threshold &&
        Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold
      )
        return
      if ('undefined' === typeof data.isScrolling) {
        let touchAngle
        if (
          (swiper.isHorizontal() && touches.currentY === touches.startY) ||
          (swiper.isVertical() && touches.currentX === touches.startX)
        )
          data.isScrolling = false
        else if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle =
            (180 * Math.atan2(Math.abs(diffY), Math.abs(diffX))) / Math.PI
          data.isScrolling = swiper.isHorizontal()
            ? touchAngle > params.touchAngle
            : 90 - touchAngle > params.touchAngle
        }
      }
      if (data.isScrolling) swiper.emit('touchMoveOpposite', e)
      if ('undefined' === typeof data.startMoving)
        if (
          touches.currentX !== touches.startX ||
          touches.currentY !== touches.startY
        )
          data.startMoving = true
      if (data.isScrolling) {
        data.isTouched = false
        return
      }
      if (!data.startMoving) return
      swiper.allowClick = false
      if (!params.cssMode && e.cancelable) e.preventDefault()
      if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation()
      if (!data.isMoved) {
        if (params.loop && !params.cssMode) swiper.loopFix()
        data.startTranslate = swiper.getTranslate()
        swiper.setTransition(0)
        if (swiper.animating)
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend')
        data.allowMomentumBounce = false
        if (
          params.grabCursor &&
          (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)
        )
          swiper.setGrabCursor(true)
        swiper.emit('sliderFirstMove', e)
      }
      swiper.emit('sliderMove', e)
      data.isMoved = true
      let diff = swiper.isHorizontal() ? diffX : diffY
      touches.diff = diff
      diff *= params.touchRatio
      if (rtl) diff = -diff
      swiper.swipeDirection = diff > 0 ? 'prev' : 'next'
      data.currentTranslate = diff + data.startTranslate
      let disableParentSwiper = true
      let resistanceRatio = params.resistanceRatio
      if (params.touchReleaseOnEdges) resistanceRatio = 0
      if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false
        if (params.resistance)
          data.currentTranslate =
            swiper.minTranslate() -
            1 +
            (-swiper.minTranslate() + data.startTranslate + diff) **
              resistanceRatio
      } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false
        if (params.resistance)
          data.currentTranslate =
            swiper.maxTranslate() +
            1 -
            (swiper.maxTranslate() - data.startTranslate - diff) **
              resistanceRatio
      }
      if (disableParentSwiper) e.preventedByNestedSwiper = true
      if (
        !swiper.allowSlideNext &&
        'next' === swiper.swipeDirection &&
        data.currentTranslate < data.startTranslate
      )
        data.currentTranslate = data.startTranslate
      if (
        !swiper.allowSlidePrev &&
        'prev' === swiper.swipeDirection &&
        data.currentTranslate > data.startTranslate
      )
        data.currentTranslate = data.startTranslate
      if (!swiper.allowSlidePrev && !swiper.allowSlideNext)
        data.currentTranslate = data.startTranslate
      if (params.threshold > 0)
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true
            touches.startX = touches.currentX
            touches.startY = touches.currentY
            data.currentTranslate = data.startTranslate
            touches.diff = swiper.isHorizontal()
              ? touches.currentX - touches.startX
              : touches.currentY - touches.startY
            return
          }
        } else {
          data.currentTranslate = data.startTranslate
          return
        }
      if (!params.followFinger || params.cssMode) return
      if (
        (params.freeMode && params.freeMode.enabled && swiper.freeMode) ||
        params.watchSlidesProgress
      ) {
        swiper.updateActiveIndex()
        swiper.updateSlidesClasses()
      }
      if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode)
        swiper.freeMode.onTouchMove()
      swiper.updateProgress(data.currentTranslate)
      swiper.setTranslate(data.currentTranslate)
    }
    function onTouchEnd(event) {
      const swiper = this
      const data = swiper.touchEventsData
      const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper
      if (!enabled) return
      let e = event
      if (e.originalEvent) e = e.originalEvent
      if (data.allowTouchCallbacks) swiper.emit('touchEnd', e)
      data.allowTouchCallbacks = false
      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false)
        data.isMoved = false
        data.startMoving = false
        return
      }
      if (
        params.grabCursor &&
        data.isMoved &&
        data.isTouched &&
        (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)
      )
        swiper.setGrabCursor(false)
      const touchEndTime = now()
      const timeDiff = touchEndTime - data.touchStartTime
      if (swiper.allowClick) {
        const pathTree = e.path || (e.composedPath && e.composedPath())
        swiper.updateClickedSlide((pathTree && pathTree[0]) || e.target)
        swiper.emit('tap click', e)
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300)
          swiper.emit('doubleTap doubleClick', e)
      }
      data.lastClickTime = now()
      utils_nextTick(() => {
        if (!swiper.destroyed) swiper.allowClick = true
      })
      if (
        !data.isTouched ||
        !data.isMoved ||
        !swiper.swipeDirection ||
        0 === touches.diff ||
        data.currentTranslate === data.startTranslate
      ) {
        data.isTouched = false
        data.isMoved = false
        data.startMoving = false
        return
      }
      data.isTouched = false
      data.isMoved = false
      data.startMoving = false
      let currentPos
      if (params.followFinger)
        currentPos = rtl ? swiper.translate : -swiper.translate
      else currentPos = -data.currentTranslate
      if (params.cssMode) return
      if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
          currentPos,
        })
        return
      }
      let stopIndex = 0
      let groupSize = swiper.slidesSizesGrid[0]
      for (
        let i = 0;
        i < slidesGrid.length;
        i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup
      ) {
        const increment =
          i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup
        if ('undefined' !== typeof slidesGrid[i + increment]) {
          if (
            currentPos >= slidesGrid[i] &&
            currentPos < slidesGrid[i + increment]
          ) {
            stopIndex = i
            groupSize = slidesGrid[i + increment] - slidesGrid[i]
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i
          groupSize =
            slidesGrid[slidesGrid.length - 1] -
            slidesGrid[slidesGrid.length - 2]
        }
      }
      let rewindFirstIndex = null
      let rewindLastIndex = null
      if (params.rewind)
        if (swiper.isBeginning)
          rewindLastIndex =
            swiper.params.virtual &&
            swiper.params.virtual.enabled &&
            swiper.virtual
              ? swiper.virtual.slides.length - 1
              : swiper.slides.length - 1
        else if (swiper.isEnd) rewindFirstIndex = 0
      const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize
      const increment =
        stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup
      if (timeDiff > params.longSwipesMs) {
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex)
          return
        }
        if ('next' === swiper.swipeDirection)
          if (ratio >= params.longSwipesRatio)
            swiper.slideTo(
              params.rewind && swiper.isEnd
                ? rewindFirstIndex
                : stopIndex + increment,
            )
          else swiper.slideTo(stopIndex)
        if ('prev' === swiper.swipeDirection)
          if (ratio > 1 - params.longSwipesRatio)
            swiper.slideTo(stopIndex + increment)
          else if (
            null !== rewindLastIndex &&
            ratio < 0 &&
            Math.abs(ratio) > params.longSwipesRatio
          )
            swiper.slideTo(rewindLastIndex)
          else swiper.slideTo(stopIndex)
      } else {
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex)
          return
        }
        const isNavButtonTarget =
          swiper.navigation &&
          (e.target === swiper.navigation.nextEl ||
            e.target === swiper.navigation.prevEl)
        if (!isNavButtonTarget) {
          if ('next' === swiper.swipeDirection)
            swiper.slideTo(
              null !== rewindFirstIndex
                ? rewindFirstIndex
                : stopIndex + increment,
            )
          if ('prev' === swiper.swipeDirection)
            swiper.slideTo(
              null !== rewindLastIndex ? rewindLastIndex : stopIndex,
            )
        } else if (e.target === swiper.navigation.nextEl)
          swiper.slideTo(stopIndex + increment)
        else swiper.slideTo(stopIndex)
      }
    }
    function onResize() {
      const swiper = this
      const { params, el } = swiper
      if (el && 0 === el.offsetWidth) return
      if (params.breakpoints) swiper.setBreakpoint()
      const { allowSlideNext, allowSlidePrev, snapGrid } = swiper
      swiper.allowSlideNext = true
      swiper.allowSlidePrev = true
      swiper.updateSize()
      swiper.updateSlides()
      swiper.updateSlidesClasses()
      if (
        ('auto' === params.slidesPerView || params.slidesPerView > 1) &&
        swiper.isEnd &&
        !swiper.isBeginning &&
        !swiper.params.centeredSlides
      )
        swiper.slideTo(swiper.slides.length - 1, 0, false, true)
      else swiper.slideTo(swiper.activeIndex, 0, false, true)
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused)
        swiper.autoplay.run()
      swiper.allowSlidePrev = allowSlidePrev
      swiper.allowSlideNext = allowSlideNext
      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid)
        swiper.checkOverflow()
    }
    function onClick(e) {
      const swiper = this
      if (!swiper.enabled) return
      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault()
        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation()
          e.stopImmediatePropagation()
        }
      }
    }
    function onScroll() {
      const swiper = this
      const { wrapperEl, rtlTranslate, enabled } = swiper
      if (!enabled) return
      swiper.previousTranslate = swiper.translate
      if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft
      else swiper.translate = -wrapperEl.scrollTop
      if (0 === swiper.translate) swiper.translate = 0
      swiper.updateActiveIndex()
      swiper.updateSlidesClasses()
      let newProgress
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()
      if (0 === translatesDiff) newProgress = 0
      else
        newProgress =
          (swiper.translate - swiper.minTranslate()) / translatesDiff
      if (newProgress !== swiper.progress)
        swiper.updateProgress(
          rtlTranslate ? -swiper.translate : swiper.translate,
        )
      swiper.emit('setTranslate', swiper.translate, false)
    }
    let dummyEventAttached = false
    function dummyEventListener() {}
    const events = (swiper, method) => {
      const document = ssr_window_esm_getDocument()
      const { params, touchEvents, el, wrapperEl, device, support } = swiper
      const capture = !!params.nested
      const domMethod =
        'on' === method ? 'addEventListener' : 'removeEventListener'
      const swiperMethod = method
      if (!support.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false)
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture)
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false)
      } else {
        const passiveListener =
          'touchstart' === touchEvents.start &&
          support.passiveListener &&
          params.passiveListeners
            ? {
                passive: true,
                capture: false,
              }
            : false
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener)
        el[domMethod](
          touchEvents.move,
          swiper.onTouchMove,
          support.passiveListener
            ? {
                passive: false,
                capture,
              }
            : capture,
        )
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener)
        if (touchEvents.cancel)
          el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener)
      }
      if (params.preventClicks || params.preventClicksPropagation)
        el[domMethod]('click', swiper.onClick, true)
      if (params.cssMode) wrapperEl[domMethod]('scroll', swiper.onScroll)
      if (params.updateOnWindowResize)
        swiper[swiperMethod](
          device.ios || device.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          onResize,
          true,
        )
      else swiper[swiperMethod]('observerUpdate', onResize, true)
    }
    function attachEvents() {
      const swiper = this
      const document = ssr_window_esm_getDocument()
      const { params, support } = swiper
      swiper.onTouchStart = onTouchStart.bind(swiper)
      swiper.onTouchMove = onTouchMove.bind(swiper)
      swiper.onTouchEnd = onTouchEnd.bind(swiper)
      if (params.cssMode) swiper.onScroll = onScroll.bind(swiper)
      swiper.onClick = onClick.bind(swiper)
      if (support.touch && !dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener)
        dummyEventAttached = true
      }
      events(swiper, 'on')
    }
    function detachEvents() {
      const swiper = this
      events(swiper, 'off')
    }
    const core_events = {
      attachEvents,
      detachEvents,
    }
    const isGridEnabled = (swiper, params) =>
      swiper.grid && params.grid && params.grid.rows > 1
    function setBreakpoint() {
      const swiper = this
      const { activeIndex, initialized, loopedSlides = 0, params, $el } = swiper
      const breakpoints = params.breakpoints
      if (
        !breakpoints ||
        (breakpoints && 0 === Object.keys(breakpoints).length)
      )
        return
      const breakpoint = swiper.getBreakpoint(
        breakpoints,
        swiper.params.breakpointsBase,
        swiper.el,
      )
      if (!breakpoint || swiper.currentBreakpoint === breakpoint) return
      const breakpointOnlyParams =
        breakpoint in breakpoints ? breakpoints[breakpoint] : void 0
      const breakpointParams = breakpointOnlyParams || swiper.originalParams
      const wasMultiRow = isGridEnabled(swiper, params)
      const isMultiRow = isGridEnabled(swiper, breakpointParams)
      const wasEnabled = params.enabled
      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(
          `${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`,
        )
        swiper.emitContainerClasses()
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`)
        if (
          (breakpointParams.grid.fill &&
            'column' === breakpointParams.grid.fill) ||
          (!breakpointParams.grid.fill && 'column' === params.grid.fill)
        )
          $el.addClass(`${params.containerModifierClass}grid-column`)
        swiper.emitContainerClasses()
      }
      ;['navigation', 'pagination', 'scrollbar'].forEach((prop) => {
        const wasModuleEnabled = params[prop] && params[prop].enabled
        const isModuleEnabled =
          breakpointParams[prop] && breakpointParams[prop].enabled
        if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable()
        if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable()
      })
      const directionChanged =
        breakpointParams.direction &&
        breakpointParams.direction !== params.direction
      const needsReLoop =
        params.loop &&
        (breakpointParams.slidesPerView !== params.slidesPerView ||
          directionChanged)
      if (directionChanged && initialized) swiper.changeDirection()
      utils_extend(swiper.params, breakpointParams)
      const isEnabled = swiper.params.enabled
      Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      })
      if (wasEnabled && !isEnabled) swiper.disable()
      else if (!wasEnabled && isEnabled) swiper.enable()
      swiper.currentBreakpoint = breakpoint
      swiper.emit('_beforeBreakpoint', breakpointParams)
      if (needsReLoop && initialized) {
        swiper.loopDestroy()
        swiper.loopCreate()
        swiper.updateSlides()
        swiper.slideTo(
          activeIndex - loopedSlides + swiper.loopedSlides,
          0,
          false,
        )
      }
      swiper.emit('breakpoint', breakpointParams)
    }
    function getBreakpoint(breakpoints, base = 'window', containerEl) {
      if (!breakpoints || ('container' === base && !containerEl)) return
      let breakpoint = false
      const window = ssr_window_esm_getWindow()
      const currentHeight =
        'window' === base ? window.innerHeight : containerEl.clientHeight
      const points = Object.keys(breakpoints).map((point) => {
        if ('string' === typeof point && 0 === point.indexOf('@')) {
          const minRatio = parseFloat(point.substr(1))
          const value = currentHeight * minRatio
          return {
            value,
            point,
          }
        }
        return {
          value: point,
          point,
        }
      })
      points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10))
      for (let i = 0; i < points.length; i += 1) {
        const { point, value } = points[i]
        if ('window' === base) {
          if (window.matchMedia(`(min-width: ${value}px)`).matches)
            breakpoint = point
        } else if (value <= containerEl.clientWidth) breakpoint = point
      }
      return breakpoint || 'max'
    }
    const breakpoints = {
      setBreakpoint,
      getBreakpoint,
    }
    function prepareClasses(entries, prefix) {
      const resultClasses = []
      entries.forEach((item) => {
        if ('object' === typeof item)
          Object.keys(item).forEach((classNames) => {
            if (item[classNames]) resultClasses.push(prefix + classNames)
          })
        else if ('string' === typeof item) resultClasses.push(prefix + item)
      })
      return resultClasses
    }
    function addClasses() {
      const swiper = this
      const { classNames, params, rtl, $el, device, support } = swiper
      const suffixes = prepareClasses(
        [
          'initialized',
          params.direction,
          {
            'pointer-events': !support.touch,
          },
          {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled,
          },
          {
            autoheight: params.autoHeight,
          },
          {
            rtl,
          },
          {
            grid: params.grid && params.grid.rows > 1,
          },
          {
            'grid-column':
              params.grid &&
              params.grid.rows > 1 &&
              'column' === params.grid.fill,
          },
          {
            android: device.android,
          },
          {
            ios: device.ios,
          },
          {
            'css-mode': params.cssMode,
          },
          {
            centered: params.cssMode && params.centeredSlides,
          },
          {
            'watch-progress': params.watchSlidesProgress,
          },
        ],
        params.containerModifierClass,
      )
      classNames.push(...suffixes)
      $el.addClass([...classNames].join(' '))
      swiper.emitContainerClasses()
    }
    function removeClasses_removeClasses() {
      const swiper = this
      const { $el, classNames } = swiper
      $el.removeClass(classNames.join(' '))
      swiper.emitContainerClasses()
    }
    const classes = {
      addClasses,
      removeClasses: removeClasses_removeClasses,
    }
    function loadImage(
      imageEl,
      src,
      srcset,
      sizes,
      checkForComplete,
      callback,
    ) {
      const window = ssr_window_esm_getWindow()
      let image
      function onReady() {
        if (callback) callback()
      }
      const isPicture = dom(imageEl).parent('picture')[0]
      if (!isPicture && (!imageEl.complete || !checkForComplete))
        if (src) {
          image = new window.Image()
          image.onload = onReady
          image.onerror = onReady
          if (sizes) image.sizes = sizes
          if (srcset) image.srcset = srcset
          if (src) image.src = src
        } else onReady()
      else onReady()
    }
    function preloadImages() {
      const swiper = this
      swiper.imagesToLoad = swiper.$el.find('img')
      function onReady() {
        if (
          'undefined' === typeof swiper ||
          null === swiper ||
          !swiper ||
          swiper.destroyed
        )
          return
        if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
          if (swiper.params.updateOnImagesReady) swiper.update()
          swiper.emit('imagesReady')
        }
      }
      for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
        const imageEl = swiper.imagesToLoad[i]
        swiper.loadImage(
          imageEl,
          imageEl.currentSrc || imageEl.getAttribute('src'),
          imageEl.srcset || imageEl.getAttribute('srcset'),
          imageEl.sizes || imageEl.getAttribute('sizes'),
          true,
          onReady,
        )
      }
    }
    const core_images = {
      loadImage,
      preloadImages,
    }
    function checkOverflow() {
      const swiper = this
      const { isLocked: wasLocked, params } = swiper
      const { slidesOffsetBefore } = params
      if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1
        const lastSlideRightEdge =
          swiper.slidesGrid[lastSlideIndex] +
          swiper.slidesSizesGrid[lastSlideIndex] +
          2 * slidesOffsetBefore
        swiper.isLocked = swiper.size > lastSlideRightEdge
      } else swiper.isLocked = 1 === swiper.snapGrid.length
      if (true === params.allowSlideNext)
        swiper.allowSlideNext = !swiper.isLocked
      if (true === params.allowSlidePrev)
        swiper.allowSlidePrev = !swiper.isLocked
      if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false
      if (wasLocked !== swiper.isLocked)
        swiper.emit(swiper.isLocked ? 'lock' : 'unlock')
    }
    const check_overflow = {
      checkOverflow,
    }
    const defaults = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      resizeObserver: true,
      nested: false,
      createElements: false,
      enabled: true,
      focusableElements:
        'input, select, option, textarea, button, video, label',
      width: null,
      height: null,
      preventInteractionOnTransition: false,
      userAgent: null,
      url: null,
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      autoHeight: false,
      setWrapperSize: false,
      virtualTranslate: false,
      effect: 'slide',
      breakpoints: void 0,
      breakpointsBase: 'window',
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: false,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      watchOverflow: true,
      roundLengths: false,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      uniqueNavElements: true,
      resistance: true,
      resistanceRatio: 0.85,
      watchSlidesProgress: false,
      grabCursor: false,
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      preloadImages: true,
      updateOnImagesReady: true,
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: true,
      loopFillGroupWithBlank: false,
      loopPreventsSlide: true,
      rewind: false,
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: true,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: 'swiper-',
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      runCallbacksOnInit: true,
      _emitClasses: false,
    }
    function moduleExtendParams(params, allModulesParams) {
      return function extendParams(obj = {}) {
        const moduleParamName = Object.keys(obj)[0]
        const moduleParams = obj[moduleParamName]
        if ('object' !== typeof moduleParams || null === moduleParams) {
          utils_extend(allModulesParams, obj)
          return
        }
        if (
          ['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >=
            0 &&
          true === params[moduleParamName]
        )
          params[moduleParamName] = {
            auto: true,
          }
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
          utils_extend(allModulesParams, obj)
          return
        }
        if (true === params[moduleParamName])
          params[moduleParamName] = {
            enabled: true,
          }
        if (
          'object' === typeof params[moduleParamName] &&
          !('enabled' in params[moduleParamName])
        )
          params[moduleParamName].enabled = true
        if (!params[moduleParamName])
          params[moduleParamName] = {
            enabled: false,
          }
        utils_extend(allModulesParams, obj)
      }
    }
    const prototypes = {
      eventsEmitter: events_emitter,
      update,
      translate,
      transition: core_transition,
      slide,
      loop,
      grabCursor: grab_cursor,
      events: core_events,
      breakpoints,
      checkOverflow: check_overflow,
      classes,
      images: core_images,
    }
    const extendedDefaults = {}
    class core_Swiper {
      constructor(...args) {
        let el
        let params
        if (
          1 === args.length &&
          args[0].constructor &&
          'Object' === Object.prototype.toString.call(args[0]).slice(8, -1)
        )
          params = args[0]
        else [el, params] = args
        if (!params) params = {}
        params = utils_extend({}, params)
        if (el && !params.el) params.el = el
        if (params.el && dom(params.el).length > 1) {
          const swipers = []
          dom(params.el).each((containerEl) => {
            const newParams = utils_extend({}, params, {
              el: containerEl,
            })
            swipers.push(new core_Swiper(newParams))
          })
          return swipers
        }
        const swiper = this
        swiper.__swiper__ = true
        swiper.support = getSupport()
        swiper.device = getDevice({
          userAgent: params.userAgent,
        })
        swiper.browser = getBrowser()
        swiper.eventsListeners = {}
        swiper.eventsAnyListeners = []
        swiper.modules = [...swiper.__modules__]
        if (params.modules && Array.isArray(params.modules))
          swiper.modules.push(...params.modules)
        const allModulesParams = {}
        swiper.modules.forEach((mod) => {
          mod({
            swiper,
            extendParams: moduleExtendParams(params, allModulesParams),
            on: swiper.on.bind(swiper),
            once: swiper.once.bind(swiper),
            off: swiper.off.bind(swiper),
            emit: swiper.emit.bind(swiper),
          })
        })
        const swiperParams = utils_extend({}, defaults, allModulesParams)
        swiper.params = utils_extend({}, swiperParams, extendedDefaults, params)
        swiper.originalParams = utils_extend({}, swiper.params)
        swiper.passedParams = utils_extend({}, params)
        if (swiper.params && swiper.params.on)
          Object.keys(swiper.params.on).forEach((eventName) => {
            swiper.on(eventName, swiper.params.on[eventName])
          })
        if (swiper.params && swiper.params.onAny)
          swiper.onAny(swiper.params.onAny)
        swiper.$ = dom
        Object.assign(swiper, {
          enabled: swiper.params.enabled,
          el,
          classNames: [],
          slides: dom(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return 'horizontal' === swiper.params.direction
          },
          isVertical() {
            return 'vertical' === swiper.params.direction
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: true,
          isEnd: false,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          touchEvents: (function touchEvents() {
            const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel']
            const desktop = ['pointerdown', 'pointermove', 'pointerup']
            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3],
            }
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2],
            }
            return swiper.support.touch || !swiper.params.simulateTouch
              ? swiper.touchEventsTouch
              : swiper.touchEventsDesktop
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: swiper.params.focusableElements,
            lastClickTime: now(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: true,
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
          },
          imagesToLoad: [],
          imagesLoaded: 0,
        })
        swiper.emit('_swiper')
        if (swiper.params.init) swiper.init()
        return swiper
      }
      enable() {
        const swiper = this
        if (swiper.enabled) return
        swiper.enabled = true
        if (swiper.params.grabCursor) swiper.setGrabCursor()
        swiper.emit('enable')
      }
      disable() {
        const swiper = this
        if (!swiper.enabled) return
        swiper.enabled = false
        if (swiper.params.grabCursor) swiper.unsetGrabCursor()
        swiper.emit('disable')
      }
      setProgress(progress, speed) {
        const swiper = this
        progress = Math.min(Math.max(progress, 0), 1)
        const min = swiper.minTranslate()
        const max = swiper.maxTranslate()
        const current = (max - min) * progress + min
        swiper.translateTo(current, 'undefined' === typeof speed ? 0 : speed)
        swiper.updateActiveIndex()
        swiper.updateSlidesClasses()
      }
      emitContainerClasses() {
        const swiper = this
        if (!swiper.params._emitClasses || !swiper.el) return
        const cls = swiper.el.className
          .split(' ')
          .filter(
            (className) =>
              0 === className.indexOf('swiper') ||
              0 === className.indexOf(swiper.params.containerModifierClass),
          )
        swiper.emit('_containerClasses', cls.join(' '))
      }
      getSlideClasses(slideEl) {
        const swiper = this
        if (swiper.destroyed) return ''
        return slideEl.className
          .split(' ')
          .filter(
            (className) =>
              0 === className.indexOf('swiper-slide') ||
              0 === className.indexOf(swiper.params.slideClass),
          )
          .join(' ')
      }
      emitSlidesClasses() {
        const swiper = this
        if (!swiper.params._emitClasses || !swiper.el) return
        const updates = []
        swiper.slides.each((slideEl) => {
          const classNames = swiper.getSlideClasses(slideEl)
          updates.push({
            slideEl,
            classNames,
          })
          swiper.emit('_slideClass', slideEl, classNames)
        })
        swiper.emit('_slideClasses', updates)
      }
      slidesPerViewDynamic(view = 'current', exact = false) {
        const swiper = this
        const {
          params,
          slides,
          slidesGrid,
          slidesSizesGrid,
          size: swiperSize,
          activeIndex,
        } = swiper
        let spv = 1
        if (params.centeredSlides) {
          let slideSize = slides[activeIndex].swiperSlideSize
          let breakLoop
          for (let i = activeIndex + 1; i < slides.length; i += 1)
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize
              spv += 1
              if (slideSize > swiperSize) breakLoop = true
            }
          for (let i = activeIndex - 1; i >= 0; i -= 1)
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize
              spv += 1
              if (slideSize > swiperSize) breakLoop = true
            }
        } else if ('current' === view)
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact
              ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] <
                swiperSize
              : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize
            if (slideInView) spv += 1
          }
        else
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView =
              slidesGrid[activeIndex] - slidesGrid[i] < swiperSize
            if (slideInView) spv += 1
          }
        return spv
      }
      update() {
        const swiper = this
        if (!swiper || swiper.destroyed) return
        const { snapGrid, params } = swiper
        if (params.breakpoints) swiper.setBreakpoint()
        swiper.updateSize()
        swiper.updateSlides()
        swiper.updateProgress()
        swiper.updateSlidesClasses()
        function setTranslate() {
          const translateValue = swiper.rtlTranslate
            ? -1 * swiper.translate
            : swiper.translate
          const newTranslate = Math.min(
            Math.max(translateValue, swiper.maxTranslate()),
            swiper.minTranslate(),
          )
          swiper.setTranslate(newTranslate)
          swiper.updateActiveIndex()
          swiper.updateSlidesClasses()
        }
        let translated
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
          setTranslate()
          if (swiper.params.autoHeight) swiper.updateAutoHeight()
        } else {
          if (
            ('auto' === swiper.params.slidesPerView ||
              swiper.params.slidesPerView > 1) &&
            swiper.isEnd &&
            !swiper.params.centeredSlides
          )
            translated = swiper.slideTo(
              swiper.slides.length - 1,
              0,
              false,
              true,
            )
          else translated = swiper.slideTo(swiper.activeIndex, 0, false, true)
          if (!translated) setTranslate()
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid)
          swiper.checkOverflow()
        swiper.emit('update')
      }
      changeDirection(newDirection, needUpdate = true) {
        const swiper = this
        const currentDirection = swiper.params.direction
        if (!newDirection)
          newDirection =
            'horizontal' === currentDirection ? 'vertical' : 'horizontal'
        if (
          newDirection === currentDirection ||
          ('horizontal' !== newDirection && 'vertical' !== newDirection)
        )
          return swiper
        swiper.$el
          .removeClass(
            `${swiper.params.containerModifierClass}${currentDirection}`,
          )
          .addClass(`${swiper.params.containerModifierClass}${newDirection}`)
        swiper.emitContainerClasses()
        swiper.params.direction = newDirection
        swiper.slides.each((slideEl) => {
          if ('vertical' === newDirection) slideEl.style.width = ''
          else slideEl.style.height = ''
        })
        swiper.emit('changeDirection')
        if (needUpdate) swiper.update()
        return swiper
      }
      changeLanguageDirection(direction) {
        const swiper = this
        if (
          (swiper.rtl && 'rtl' === direction) ||
          (!swiper.rtl && 'ltr' === direction)
        )
          return
        swiper.rtl = 'rtl' === direction
        swiper.rtlTranslate =
          'horizontal' === swiper.params.direction && swiper.rtl
        if (swiper.rtl) {
          swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`)
          swiper.el.dir = 'rtl'
        } else {
          swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`)
          swiper.el.dir = 'ltr'
        }
        swiper.update()
      }
      mount(el) {
        const swiper = this
        if (swiper.mounted) return true
        const $el = dom(el || swiper.params.el)
        el = $el[0]
        if (!el) return false
        el.swiper = swiper
        const getWrapperSelector = () =>
          `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`
        const getWrapper = () => {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            const res = dom(el.shadowRoot.querySelector(getWrapperSelector()))
            res.children = (options) => $el.children(options)
            return res
          }
          if (!$el.children) return dom($el).children(getWrapperSelector())
          return $el.children(getWrapperSelector())
        }
        let $wrapperEl = getWrapper()
        if (0 === $wrapperEl.length && swiper.params.createElements) {
          const document = ssr_window_esm_getDocument()
          const wrapper = document.createElement('div')
          $wrapperEl = dom(wrapper)
          wrapper.className = swiper.params.wrapperClass
          $el.append(wrapper)
          $el.children(`.${swiper.params.slideClass}`).each((slideEl) => {
            $wrapperEl.append(slideEl)
          })
        }
        Object.assign(swiper, {
          $el,
          el,
          $wrapperEl,
          wrapperEl: $wrapperEl[0],
          mounted: true,
          rtl: 'rtl' === el.dir.toLowerCase() || 'rtl' === $el.css('direction'),
          rtlTranslate:
            'horizontal' === swiper.params.direction &&
            ('rtl' === el.dir.toLowerCase() || 'rtl' === $el.css('direction')),
          wrongRTL: '-webkit-box' === $wrapperEl.css('display'),
        })
        return true
      }
      init(el) {
        const swiper = this
        if (swiper.initialized) return swiper
        const mounted = swiper.mount(el)
        if (false === mounted) return swiper
        swiper.emit('beforeInit')
        if (swiper.params.breakpoints) swiper.setBreakpoint()
        swiper.addClasses()
        if (swiper.params.loop) swiper.loopCreate()
        swiper.updateSize()
        swiper.updateSlides()
        if (swiper.params.watchOverflow) swiper.checkOverflow()
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor()
        if (swiper.params.preloadImages) swiper.preloadImages()
        if (swiper.params.loop)
          swiper.slideTo(
            swiper.params.initialSlide + swiper.loopedSlides,
            0,
            swiper.params.runCallbacksOnInit,
            false,
            true,
          )
        else
          swiper.slideTo(
            swiper.params.initialSlide,
            0,
            swiper.params.runCallbacksOnInit,
            false,
            true,
          )
        swiper.attachEvents()
        swiper.initialized = true
        swiper.emit('init')
        swiper.emit('afterInit')
        return swiper
      }
      destroy(deleteInstance = true, cleanStyles = true) {
        const swiper = this
        const { params, $el, $wrapperEl, slides } = swiper
        if ('undefined' === typeof swiper.params || swiper.destroyed)
          return null
        swiper.emit('beforeDestroy')
        swiper.initialized = false
        swiper.detachEvents()
        if (params.loop) swiper.loopDestroy()
        if (cleanStyles) {
          swiper.removeClasses()
          $el.removeAttr('style')
          $wrapperEl.removeAttr('style')
          if (slides && slides.length)
            slides
              .removeClass(
                [
                  params.slideVisibleClass,
                  params.slideActiveClass,
                  params.slideNextClass,
                  params.slidePrevClass,
                ].join(' '),
              )
              .removeAttr('style')
              .removeAttr('data-swiper-slide-index')
        }
        swiper.emit('destroy')
        Object.keys(swiper.eventsListeners).forEach((eventName) => {
          swiper.off(eventName)
        })
        if (false !== deleteInstance) {
          swiper.$el[0].swiper = null
          deleteProps(swiper)
        }
        swiper.destroyed = true
        return null
      }
      static extendDefaults(newDefaults) {
        utils_extend(extendedDefaults, newDefaults)
      }
      static get extendedDefaults() {
        return extendedDefaults
      }
      static get defaults() {
        return defaults
      }
      static installModule(mod) {
        if (!core_Swiper.prototype.__modules__)
          core_Swiper.prototype.__modules__ = []
        const modules = core_Swiper.prototype.__modules__
        if ('function' === typeof mod && modules.indexOf(mod) < 0)
          modules.push(mod)
      }
      static use(module) {
        if (Array.isArray(module)) {
          module.forEach((m) => core_Swiper.installModule(m))
          return core_Swiper
        }
        core_Swiper.installModule(module)
        return core_Swiper
      }
    }
    Object.keys(prototypes).forEach((prototypeGroup) => {
      Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
        core_Swiper.prototype[protoMethod] =
          prototypes[prototypeGroup][protoMethod]
      })
    })
    core_Swiper.use([Resize, Observer])
    const core = core_Swiper
    function Mousewheel({ swiper, extendParams, on, emit }) {
      const window = ssr_window_esm_getWindow()
      extendParams({
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null,
        },
      })
      swiper.mousewheel = {
        enabled: false,
      }
      let timeout
      let lastScrollTime = now()
      let lastEventBeforeSnap
      const recentWheelEvents = []
      function normalize(e) {
        const PIXEL_STEP = 10
        const LINE_HEIGHT = 40
        const PAGE_HEIGHT = 800
        let sX = 0
        let sY = 0
        let pX = 0
        let pY = 0
        if ('detail' in e) sY = e.detail
        if ('wheelDelta' in e) sY = -e.wheelDelta / 120
        if ('wheelDeltaY' in e) sY = -e.wheelDeltaY / 120
        if ('wheelDeltaX' in e) sX = -e.wheelDeltaX / 120
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY
          sY = 0
        }
        pX = sX * PIXEL_STEP
        pY = sY * PIXEL_STEP
        if ('deltaY' in e) pY = e.deltaY
        if ('deltaX' in e) pX = e.deltaX
        if (e.shiftKey && !pX) {
          pX = pY
          pY = 0
        }
        if ((pX || pY) && e.deltaMode)
          if (1 === e.deltaMode) {
            pX *= LINE_HEIGHT
            pY *= LINE_HEIGHT
          } else {
            pX *= PAGE_HEIGHT
            pY *= PAGE_HEIGHT
          }
        if (pX && !sX) sX = pX < 1 ? -1 : 1
        if (pY && !sY) sY = pY < 1 ? -1 : 1
        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY,
        }
      }
      function handleMouseEnter() {
        if (!swiper.enabled) return
        swiper.mouseEntered = true
      }
      function handleMouseLeave() {
        if (!swiper.enabled) return
        swiper.mouseEntered = false
      }
      function animateSlider(newEvent) {
        if (
          swiper.params.mousewheel.thresholdDelta &&
          newEvent.delta < swiper.params.mousewheel.thresholdDelta
        )
          return false
        if (
          swiper.params.mousewheel.thresholdTime &&
          now() - lastScrollTime < swiper.params.mousewheel.thresholdTime
        )
          return false
        if (newEvent.delta >= 6 && now() - lastScrollTime < 60) return true
        if (newEvent.direction < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext()
            emit('scroll', newEvent.raw)
          }
        } else if (
          (!swiper.isBeginning || swiper.params.loop) &&
          !swiper.animating
        ) {
          swiper.slidePrev()
          emit('scroll', newEvent.raw)
        }
        lastScrollTime = new window.Date().getTime()
        return false
      }
      function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel
        if (newEvent.direction < 0) {
          if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges)
            return true
        } else if (
          swiper.isBeginning &&
          !swiper.params.loop &&
          params.releaseOnEdges
        )
          return true
        return false
      }
      function handle(event) {
        let e = event
        let disableParentSwiper = true
        if (!swiper.enabled) return
        const params = swiper.params.mousewheel
        if (swiper.params.cssMode) e.preventDefault()
        let target = swiper.$el
        if ('container' !== swiper.params.mousewheel.eventsTarget)
          target = dom(swiper.params.mousewheel.eventsTarget)
        if (
          !swiper.mouseEntered &&
          !target[0].contains(e.target) &&
          !params.releaseOnEdges
        )
          return true
        if (e.originalEvent) e = e.originalEvent
        let delta = 0
        const rtlFactor = swiper.rtlTranslate ? -1 : 1
        const data = normalize(e)
        if (params.forceToAxis)
          if (swiper.isHorizontal())
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY))
              delta = -data.pixelX * rtlFactor
            else return true
          else if (Math.abs(data.pixelY) > Math.abs(data.pixelX))
            delta = -data.pixelY
          else return true
        else
          delta =
            Math.abs(data.pixelX) > Math.abs(data.pixelY)
              ? -data.pixelX * rtlFactor
              : -data.pixelY
        if (0 === delta) return true
        if (params.invert) delta = -delta
        let positions = swiper.getTranslate() + delta * params.sensitivity
        if (positions >= swiper.minTranslate())
          positions = swiper.minTranslate()
        if (positions <= swiper.maxTranslate())
          positions = swiper.maxTranslate()
        disableParentSwiper = swiper.params.loop
          ? true
          : !(
              positions === swiper.minTranslate() ||
              positions === swiper.maxTranslate()
            )
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation()
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event,
          }
          if (recentWheelEvents.length >= 2) recentWheelEvents.shift()
          const prevEvent = recentWheelEvents.length
            ? recentWheelEvents[recentWheelEvents.length - 1]
            : void 0
          recentWheelEvents.push(newEvent)
          if (prevEvent) {
            if (
              newEvent.direction !== prevEvent.direction ||
              newEvent.delta > prevEvent.delta ||
              newEvent.time > prevEvent.time + 150
            )
              animateSlider(newEvent)
          } else animateSlider(newEvent)
          if (releaseScroll(newEvent)) return true
        } else {
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
          }
          const ignoreWheelEvents =
            lastEventBeforeSnap &&
            newEvent.time < lastEventBeforeSnap.time + 500 &&
            newEvent.delta <= lastEventBeforeSnap.delta &&
            newEvent.direction === lastEventBeforeSnap.direction
          if (!ignoreWheelEvents) {
            lastEventBeforeSnap = void 0
            if (swiper.params.loop) swiper.loopFix()
            let position = swiper.getTranslate() + delta * params.sensitivity
            const wasBeginning = swiper.isBeginning
            const wasEnd = swiper.isEnd
            if (position >= swiper.minTranslate())
              position = swiper.minTranslate()
            if (position <= swiper.maxTranslate())
              position = swiper.maxTranslate()
            swiper.setTransition(0)
            swiper.setTranslate(position)
            swiper.updateProgress()
            swiper.updateActiveIndex()
            swiper.updateSlidesClasses()
            if (
              (!wasBeginning && swiper.isBeginning) ||
              (!wasEnd && swiper.isEnd)
            )
              swiper.updateSlidesClasses()
            if (swiper.params.freeMode.sticky) {
              clearTimeout(timeout)
              timeout = void 0
              if (recentWheelEvents.length >= 15) recentWheelEvents.shift()
              const prevEvent = recentWheelEvents.length
                ? recentWheelEvents[recentWheelEvents.length - 1]
                : void 0
              const firstEvent = recentWheelEvents[0]
              recentWheelEvents.push(newEvent)
              if (
                prevEvent &&
                (newEvent.delta > prevEvent.delta ||
                  newEvent.direction !== prevEvent.direction)
              )
                recentWheelEvents.splice(0)
              else if (
                recentWheelEvents.length >= 15 &&
                newEvent.time - firstEvent.time < 500 &&
                firstEvent.delta - newEvent.delta >= 1 &&
                newEvent.delta <= 6
              ) {
                const snapToThreshold = delta > 0 ? 0.8 : 0.2
                lastEventBeforeSnap = newEvent
                recentWheelEvents.splice(0)
                timeout = utils_nextTick(() => {
                  swiper.slideToClosest(
                    swiper.params.speed,
                    true,
                    void 0,
                    snapToThreshold,
                  )
                }, 0)
              }
              if (!timeout)
                timeout = utils_nextTick(() => {
                  const snapToThreshold = 0.5
                  lastEventBeforeSnap = newEvent
                  recentWheelEvents.splice(0)
                  swiper.slideToClosest(
                    swiper.params.speed,
                    true,
                    void 0,
                    snapToThreshold,
                  )
                }, 500)
            }
            if (!ignoreWheelEvents) emit('scroll', e)
            if (
              swiper.params.autoplay &&
              swiper.params.autoplayDisableOnInteraction
            )
              swiper.autoplay.stop()
            if (
              position === swiper.minTranslate() ||
              position === swiper.maxTranslate()
            )
              return true
          }
        }
        if (e.preventDefault) e.preventDefault()
        else e.returnValue = false
        return false
      }
      function events(method) {
        let target = swiper.$el
        if ('container' !== swiper.params.mousewheel.eventsTarget)
          target = dom(swiper.params.mousewheel.eventsTarget)
        target[method]('mouseenter', handleMouseEnter)
        target[method]('mouseleave', handleMouseLeave)
        target[method]('wheel', handle)
      }
      function enable() {
        if (swiper.params.cssMode) {
          swiper.wrapperEl.removeEventListener('wheel', handle)
          return true
        }
        if (swiper.mousewheel.enabled) return false
        events('on')
        swiper.mousewheel.enabled = true
        return true
      }
      function disable() {
        if (swiper.params.cssMode) {
          swiper.wrapperEl.addEventListener(event, handle)
          return true
        }
        if (!swiper.mousewheel.enabled) return false
        events('off')
        swiper.mousewheel.enabled = false
        return true
      }
      on('init', () => {
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode)
          disable()
        if (swiper.params.mousewheel.enabled) enable()
      })
      on('destroy', () => {
        if (swiper.params.cssMode) enable()
        if (swiper.mousewheel.enabled) disable()
      })
      Object.assign(swiper.mousewheel, {
        enable,
        disable,
      })
    }
    function create_element_if_not_defined_createElementIfNotDefined(
      swiper,
      originalParams,
      params,
      checkProps,
    ) {
      const document = ssr_window_esm_getDocument()
      if (swiper.params.createElements)
        Object.keys(checkProps).forEach((key) => {
          if (!params[key] && true === params.auto) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0]
            if (!element) {
              element = document.createElement('div')
              element.className = checkProps[key]
              swiper.$el.append(element)
            }
            params[key] = element
            originalParams[key] = element
          }
        })
      return params
    }
    function Navigation({ swiper, extendParams, on, emit }) {
      extendParams({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock',
          navigationDisabledClass: 'swiper-navigation-disabled',
        },
      })
      swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }
      function getEl(el) {
        let $el
        if (el) {
          $el = dom(el)
          if (
            swiper.params.uniqueNavElements &&
            'string' === typeof el &&
            $el.length > 1 &&
            1 === swiper.$el.find(el).length
          )
            $el = swiper.$el.find(el)
        }
        return $el
      }
      function toggleEl($el, disabled) {
        const params = swiper.params.navigation
        if ($el && $el.length > 0) {
          $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass)
          if ($el[0] && 'BUTTON' === $el[0].tagName) $el[0].disabled = disabled
          if (swiper.params.watchOverflow && swiper.enabled)
            $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass)
        }
      }
      function update() {
        if (swiper.params.loop) return
        const { $nextEl, $prevEl } = swiper.navigation
        toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind)
        toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind)
      }
      function onPrevClick(e) {
        e.preventDefault()
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
          return
        swiper.slidePrev()
        emit('navigationPrev')
      }
      function onNextClick(e) {
        e.preventDefault()
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return
        swiper.slideNext()
        emit('navigationNext')
      }
      function init() {
        const params = swiper.params.navigation
        swiper.params.navigation =
          create_element_if_not_defined_createElementIfNotDefined(
            swiper,
            swiper.originalParams.navigation,
            swiper.params.navigation,
            {
              nextEl: 'swiper-button-next',
              prevEl: 'swiper-button-prev',
            },
          )
        if (!(params.nextEl || params.prevEl)) return
        const $nextEl = getEl(params.nextEl)
        const $prevEl = getEl(params.prevEl)
        if ($nextEl && $nextEl.length > 0) $nextEl.on('click', onNextClick)
        if ($prevEl && $prevEl.length > 0) $prevEl.on('click', onPrevClick)
        Object.assign(swiper.navigation, {
          $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl,
          prevEl: $prevEl && $prevEl[0],
        })
        if (!swiper.enabled) {
          if ($nextEl) $nextEl.addClass(params.lockClass)
          if ($prevEl) $prevEl.addClass(params.lockClass)
        }
      }
      function destroy() {
        const { $nextEl, $prevEl } = swiper.navigation
        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', onNextClick)
          $nextEl.removeClass(swiper.params.navigation.disabledClass)
        }
        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', onPrevClick)
          $prevEl.removeClass(swiper.params.navigation.disabledClass)
        }
      }
      on('init', () => {
        if (false === swiper.params.navigation.enabled) disable()
        else {
          init()
          update()
        }
      })
      on('toEdge fromEdge lock unlock', () => {
        update()
      })
      on('destroy', () => {
        destroy()
      })
      on('enable disable', () => {
        const { $nextEl, $prevEl } = swiper.navigation
        if ($nextEl)
          $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](
            swiper.params.navigation.lockClass,
          )
        if ($prevEl)
          $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](
            swiper.params.navigation.lockClass,
          )
      })
      on('click', (_s, e) => {
        const { $nextEl, $prevEl } = swiper.navigation
        const targetEl = e.target
        if (
          swiper.params.navigation.hideOnClick &&
          !dom(targetEl).is($prevEl) &&
          !dom(targetEl).is($nextEl)
        ) {
          if (
            swiper.pagination &&
            swiper.params.pagination &&
            swiper.params.pagination.clickable &&
            (swiper.pagination.el === targetEl ||
              swiper.pagination.el.contains(targetEl))
          )
            return
          let isHidden
          if ($nextEl)
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass)
          else if ($prevEl)
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass)
          if (true === isHidden) emit('navigationShow')
          else emit('navigationHide')
          if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass)
          if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass)
        }
      })
      const enable = () => {
        swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass)
        init()
        update()
      }
      const disable = () => {
        swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass)
        destroy()
      }
      Object.assign(swiper.navigation, {
        enable,
        disable,
        update,
        init,
        destroy,
      })
    }
    function Scrollbar({ swiper, extendParams, on, emit }) {
      const document = ssr_window_esm_getDocument()
      let isTouched = false
      let timeout = null
      let dragTimeout = null
      let dragStartPos
      let dragSize
      let trackSize
      let divider
      extendParams({
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag',
          scrollbarDisabledClass: 'swiper-scrollbar-disabled',
          horizontalClass: `swiper-scrollbar-horizontal`,
          verticalClass: `swiper-scrollbar-vertical`,
        },
      })
      swiper.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null,
      }
      function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
        const { scrollbar, rtlTranslate: rtl, progress } = swiper
        const { $dragEl, $el } = scrollbar
        const params = swiper.params.scrollbar
        let newSize = dragSize
        let newPos = (trackSize - dragSize) * progress
        if (rtl) {
          newPos = -newPos
          if (newPos > 0) {
            newSize = dragSize - newPos
            newPos = 0
          } else if (-newPos + dragSize > trackSize)
            newSize = trackSize + newPos
        } else if (newPos < 0) {
          newSize = dragSize + newPos
          newPos = 0
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos
        if (swiper.isHorizontal()) {
          $dragEl.transform(`translate3d(${newPos}px, 0, 0)`)
          $dragEl[0].style.width = `${newSize}px`
        } else {
          $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`)
          $dragEl[0].style.height = `${newSize}px`
        }
        if (params.hide) {
          clearTimeout(timeout)
          $el[0].style.opacity = 1
          timeout = setTimeout(() => {
            $el[0].style.opacity = 0
            $el.transition(400)
          }, 1e3)
        }
      }
      function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
        swiper.scrollbar.$dragEl.transition(duration)
      }
      function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
        const { scrollbar } = swiper
        const { $dragEl, $el } = scrollbar
        $dragEl[0].style.width = ''
        $dragEl[0].style.height = ''
        trackSize = swiper.isHorizontal()
          ? $el[0].offsetWidth
          : $el[0].offsetHeight
        divider =
          swiper.size /
          (swiper.virtualSize +
            swiper.params.slidesOffsetBefore -
            (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0))
        if ('auto' === swiper.params.scrollbar.dragSize)
          dragSize = trackSize * divider
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10)
        if (swiper.isHorizontal()) $dragEl[0].style.width = `${dragSize}px`
        else $dragEl[0].style.height = `${dragSize}px`
        if (divider >= 1) $el[0].style.display = 'none'
        else $el[0].style.display = ''
        if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0
        if (swiper.params.watchOverflow && swiper.enabled)
          scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](
            swiper.params.scrollbar.lockClass,
          )
      }
      function getPointerPosition(e) {
        if (swiper.isHorizontal())
          return 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
        return 'touchstart' === e.type || 'touchmove' === e.type
          ? e.targetTouches[0].clientY
          : e.clientY
      }
      function setDragPosition(e) {
        const { scrollbar, rtlTranslate: rtl } = swiper
        const { $el } = scrollbar
        let positionRatio
        positionRatio =
          (getPointerPosition(e) -
            $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] -
            (null !== dragStartPos ? dragStartPos : dragSize / 2)) /
          (trackSize - dragSize)
        positionRatio = Math.max(Math.min(positionRatio, 1), 0)
        if (rtl) positionRatio = 1 - positionRatio
        const position =
          swiper.minTranslate() +
          (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio
        swiper.updateProgress(position)
        swiper.setTranslate(position)
        swiper.updateActiveIndex()
        swiper.updateSlidesClasses()
      }
      function onDragStart(e) {
        const params = swiper.params.scrollbar
        const { scrollbar, $wrapperEl } = swiper
        const { $el, $dragEl } = scrollbar
        isTouched = true
        dragStartPos =
          e.target === $dragEl[0] || e.target === $dragEl
            ? getPointerPosition(e) -
              e.target.getBoundingClientRect()[
                swiper.isHorizontal() ? 'left' : 'top'
              ]
            : null
        e.preventDefault()
        e.stopPropagation()
        $wrapperEl.transition(100)
        $dragEl.transition(100)
        setDragPosition(e)
        clearTimeout(dragTimeout)
        $el.transition(0)
        if (params.hide) $el.css('opacity', 1)
        if (swiper.params.cssMode)
          swiper.$wrapperEl.css('scroll-snap-type', 'none')
        emit('scrollbarDragStart', e)
      }
      function onDragMove(e) {
        const { scrollbar, $wrapperEl } = swiper
        const { $el, $dragEl } = scrollbar
        if (!isTouched) return
        if (e.preventDefault) e.preventDefault()
        else e.returnValue = false
        setDragPosition(e)
        $wrapperEl.transition(0)
        $el.transition(0)
        $dragEl.transition(0)
        emit('scrollbarDragMove', e)
      }
      function onDragEnd(e) {
        const params = swiper.params.scrollbar
        const { scrollbar, $wrapperEl } = swiper
        const { $el } = scrollbar
        if (!isTouched) return
        isTouched = false
        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', '')
          $wrapperEl.transition('')
        }
        if (params.hide) {
          clearTimeout(dragTimeout)
          dragTimeout = utils_nextTick(() => {
            $el.css('opacity', 0)
            $el.transition(400)
          }, 1e3)
        }
        emit('scrollbarDragEnd', e)
        if (params.snapOnRelease) swiper.slideToClosest()
      }
      function events(method) {
        const {
          scrollbar,
          touchEventsTouch,
          touchEventsDesktop,
          params,
          support,
        } = swiper
        const $el = scrollbar.$el
        if (!$el) return
        const target = $el[0]
        const activeListener =
          support.passiveListener && params.passiveListeners
            ? {
                passive: false,
                capture: false,
              }
            : false
        const passiveListener =
          support.passiveListener && params.passiveListeners
            ? {
                passive: true,
                capture: false,
              }
            : false
        if (!target) return
        const eventMethod =
          'on' === method ? 'addEventListener' : 'removeEventListener'
        if (!support.touch) {
          target[eventMethod](
            touchEventsDesktop.start,
            onDragStart,
            activeListener,
          )
          document[eventMethod](
            touchEventsDesktop.move,
            onDragMove,
            activeListener,
          )
          document[eventMethod](
            touchEventsDesktop.end,
            onDragEnd,
            passiveListener,
          )
        } else {
          target[eventMethod](
            touchEventsTouch.start,
            onDragStart,
            activeListener,
          )
          target[eventMethod](touchEventsTouch.move, onDragMove, activeListener)
          target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener)
        }
      }
      function enableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
        events('on')
      }
      function disableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
        events('off')
      }
      function init() {
        const { scrollbar, $el: $swiperEl } = swiper
        swiper.params.scrollbar =
          create_element_if_not_defined_createElementIfNotDefined(
            swiper,
            swiper.originalParams.scrollbar,
            swiper.params.scrollbar,
            {
              el: 'swiper-scrollbar',
            },
          )
        const params = swiper.params.scrollbar
        if (!params.el) return
        let $el = dom(params.el)
        if (
          swiper.params.uniqueNavElements &&
          'string' === typeof params.el &&
          $el.length > 1 &&
          1 === $swiperEl.find(params.el).length
        )
          $el = $swiperEl.find(params.el)
        $el.addClass(
          swiper.isHorizontal() ? params.horizontalClass : params.verticalClass,
        )
        let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`)
        if (0 === $dragEl.length) {
          $dragEl = dom(
            `<div class="${swiper.params.scrollbar.dragClass}"></div>`,
          )
          $el.append($dragEl)
        }
        Object.assign(scrollbar, {
          $el,
          el: $el[0],
          $dragEl,
          dragEl: $dragEl[0],
        })
        if (params.draggable) enableDraggable()
        if ($el)
          $el[swiper.enabled ? 'removeClass' : 'addClass'](
            swiper.params.scrollbar.lockClass,
          )
      }
      function destroy() {
        const params = swiper.params.scrollbar
        const $el = swiper.scrollbar.$el
        if ($el)
          $el.removeClass(
            swiper.isHorizontal()
              ? params.horizontalClass
              : params.verticalClass,
          )
        disableDraggable()
      }
      on('init', () => {
        if (false === swiper.params.scrollbar.enabled) disable()
        else {
          init()
          updateSize()
          setTranslate()
        }
      })
      on('update resize observerUpdate lock unlock', () => {
        updateSize()
      })
      on('setTranslate', () => {
        setTranslate()
      })
      on('setTransition', (_s, duration) => {
        setTransition(duration)
      })
      on('enable disable', () => {
        const { $el } = swiper.scrollbar
        if ($el)
          $el[swiper.enabled ? 'removeClass' : 'addClass'](
            swiper.params.scrollbar.lockClass,
          )
      })
      on('destroy', () => {
        destroy()
      })
      const enable = () => {
        swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass)
        if (swiper.scrollbar.$el)
          swiper.scrollbar.$el.removeClass(
            swiper.params.scrollbar.scrollbarDisabledClass,
          )
        init()
        updateSize()
        setTranslate()
      }
      const disable = () => {
        swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass)
        if (swiper.scrollbar.$el)
          swiper.scrollbar.$el.addClass(
            swiper.params.scrollbar.scrollbarDisabledClass,
          )
        destroy()
      }
      Object.assign(swiper.scrollbar, {
        enable,
        disable,
        updateSize,
        setTranslate,
        init,
        destroy,
      })
    }
    function Thumb({ swiper, extendParams, on }) {
      extendParams({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: true,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-thumbs',
        },
      })
      let initialized = false
      let swiperCreated = false
      swiper.thumbs = {
        swiper: null,
      }
      function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper
        if (!thumbsSwiper || thumbsSwiper.destroyed) return
        const clickedIndex = thumbsSwiper.clickedIndex
        const clickedSlide = thumbsSwiper.clickedSlide
        if (
          clickedSlide &&
          dom(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)
        )
          return
        if ('undefined' === typeof clickedIndex || null === clickedIndex) return
        let slideToIndex
        if (thumbsSwiper.params.loop)
          slideToIndex = parseInt(
            dom(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'),
            10,
          )
        else slideToIndex = clickedIndex
        if (swiper.params.loop) {
          let currentIndex = swiper.activeIndex
          if (
            swiper.slides
              .eq(currentIndex)
              .hasClass(swiper.params.slideDuplicateClass)
          ) {
            swiper.loopFix()
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft
            currentIndex = swiper.activeIndex
          }
          const prevIndex = swiper.slides
            .eq(currentIndex)
            .prevAll(`[data-swiper-slide-index="${slideToIndex}"]`)
            .eq(0)
            .index()
          const nextIndex = swiper.slides
            .eq(currentIndex)
            .nextAll(`[data-swiper-slide-index="${slideToIndex}"]`)
            .eq(0)
            .index()
          if ('undefined' === typeof prevIndex) slideToIndex = nextIndex
          else if ('undefined' === typeof nextIndex) slideToIndex = prevIndex
          else if (nextIndex - currentIndex < currentIndex - prevIndex)
            slideToIndex = nextIndex
          else slideToIndex = prevIndex
        }
        swiper.slideTo(slideToIndex)
      }
      function init() {
        const { thumbs: thumbsParams } = swiper.params
        if (initialized) return false
        initialized = true
        const SwiperClass = swiper.constructor
        if (thumbsParams.swiper instanceof SwiperClass) {
          swiper.thumbs.swiper = thumbsParams.swiper
          Object.assign(swiper.thumbs.swiper.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false,
          })
          Object.assign(swiper.thumbs.swiper.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false,
          })
        } else if (utils_isObject(thumbsParams.swiper)) {
          const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper)
          Object.assign(thumbsSwiperParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false,
          })
          swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams)
          swiperCreated = true
        }
        swiper.thumbs.swiper.$el.addClass(
          swiper.params.thumbs.thumbsContainerClass,
        )
        swiper.thumbs.swiper.on('tap', onThumbClick)
        return true
      }
      function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper
        if (!thumbsSwiper || thumbsSwiper.destroyed) return
        const slidesPerView =
          'auto' === thumbsSwiper.params.slidesPerView
            ? thumbsSwiper.slidesPerViewDynamic()
            : thumbsSwiper.params.slidesPerView
        let thumbsToActivate = 1
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides)
          thumbsToActivate = swiper.params.slidesPerView
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1
        thumbsToActivate = Math.floor(thumbsToActivate)
        thumbsSwiper.slides.removeClass(thumbActiveClass)
        if (
          thumbsSwiper.params.loop ||
          (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)
        )
          for (let i = 0; i < thumbsToActivate; i += 1)
            thumbsSwiper.$wrapperEl
              .children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`)
              .addClass(thumbActiveClass)
        else
          for (let i = 0; i < thumbsToActivate; i += 1)
            thumbsSwiper.slides
              .eq(swiper.realIndex + i)
              .addClass(thumbActiveClass)
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
          let currentThumbsIndex = thumbsSwiper.activeIndex
          let newThumbsIndex
          let direction
          if (thumbsSwiper.params.loop) {
            if (
              thumbsSwiper.slides
                .eq(currentThumbsIndex)
                .hasClass(thumbsSwiper.params.slideDuplicateClass)
            ) {
              thumbsSwiper.loopFix()
              thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft
              currentThumbsIndex = thumbsSwiper.activeIndex
            }
            const prevThumbsIndex = thumbsSwiper.slides
              .eq(currentThumbsIndex)
              .prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`)
              .eq(0)
              .index()
            const nextThumbsIndex = thumbsSwiper.slides
              .eq(currentThumbsIndex)
              .nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`)
              .eq(0)
              .index()
            if ('undefined' === typeof prevThumbsIndex)
              newThumbsIndex = nextThumbsIndex
            else if ('undefined' === typeof nextThumbsIndex)
              newThumbsIndex = prevThumbsIndex
            else if (
              nextThumbsIndex - currentThumbsIndex ===
              currentThumbsIndex - prevThumbsIndex
            )
              newThumbsIndex =
                thumbsSwiper.params.slidesPerGroup > 1
                  ? nextThumbsIndex
                  : currentThumbsIndex
            else if (
              nextThumbsIndex - currentThumbsIndex <
              currentThumbsIndex - prevThumbsIndex
            )
              newThumbsIndex = nextThumbsIndex
            else newThumbsIndex = prevThumbsIndex
            direction =
              swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev'
          } else {
            newThumbsIndex = swiper.realIndex
            direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev'
          }
          if (useOffset)
            newThumbsIndex +=
              'next' === direction ? autoScrollOffset : -1 * autoScrollOffset
          if (
            thumbsSwiper.visibleSlidesIndexes &&
            thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0
          ) {
            if (thumbsSwiper.params.centeredSlides)
              if (newThumbsIndex > currentThumbsIndex)
                newThumbsIndex =
                  newThumbsIndex - Math.floor(slidesPerView / 2) + 1
              else
                newThumbsIndex =
                  newThumbsIndex + Math.floor(slidesPerView / 2) - 1
            else if (
              newThumbsIndex > currentThumbsIndex &&
              1 === thumbsSwiper.params.slidesPerGroup
            );
            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0)
          }
        }
      }
      on('beforeInit', () => {
        const { thumbs } = swiper.params
        if (!thumbs || !thumbs.swiper) return
        init()
        update(true)
      })
      on('slideChange update resize observerUpdate', () => {
        update()
      })
      on('setTransition', (_s, duration) => {
        const thumbsSwiper = swiper.thumbs.swiper
        if (!thumbsSwiper || thumbsSwiper.destroyed) return
        thumbsSwiper.setTransition(duration)
      })
      on('beforeDestroy', () => {
        const thumbsSwiper = swiper.thumbs.swiper
        if (!thumbsSwiper || thumbsSwiper.destroyed) return
        if (swiperCreated) thumbsSwiper.destroy()
      })
      Object.assign(swiper.thumbs, {
        init,
        update,
      })
    }
    function freeMode({ swiper, extendParams, emit, once }) {
      extendParams({
        freeMode: {
          enabled: false,
          momentum: true,
          momentumRatio: 1,
          momentumBounce: true,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: false,
          minimumVelocity: 0.02,
        },
      })
      function onTouchStart() {
        const translate = swiper.getTranslate()
        swiper.setTranslate(translate)
        swiper.setTransition(0)
        swiper.touchEventsData.velocities.length = 0
        swiper.freeMode.onTouchEnd({
          currentPos: swiper.rtl ? swiper.translate : -swiper.translate,
        })
      }
      function onTouchMove() {
        const { touchEventsData: data, touches } = swiper
        if (0 === data.velocities.length)
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime,
          })
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: now(),
        })
      }
      function onTouchEnd({ currentPos }) {
        const {
          params,
          $wrapperEl,
          rtlTranslate: rtl,
          snapGrid,
          touchEventsData: data,
        } = swiper
        const touchEndTime = now()
        const timeDiff = touchEndTime - data.touchStartTime
        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex)
          return
        }
        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length)
            swiper.slideTo(snapGrid.length - 1)
          else swiper.slideTo(swiper.slides.length - 1)
          return
        }
        if (params.freeMode.momentum) {
          if (data.velocities.length > 1) {
            const lastMoveEvent = data.velocities.pop()
            const velocityEvent = data.velocities.pop()
            const distance = lastMoveEvent.position - velocityEvent.position
            const time = lastMoveEvent.time - velocityEvent.time
            swiper.velocity = distance / time
            swiper.velocity /= 2
            if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity)
              swiper.velocity = 0
            if (time > 150 || now() - lastMoveEvent.time > 300)
              swiper.velocity = 0
          } else swiper.velocity = 0
          swiper.velocity *= params.freeMode.momentumVelocityRatio
          data.velocities.length = 0
          let momentumDuration = 1e3 * params.freeMode.momentumRatio
          const momentumDistance = swiper.velocity * momentumDuration
          let newPosition = swiper.translate + momentumDistance
          if (rtl) newPosition = -newPosition
          let doBounce = false
          let afterBouncePosition
          const bounceAmount =
            20 * Math.abs(swiper.velocity) * params.freeMode.momentumBounceRatio
          let needsLoopFix
          if (newPosition < swiper.maxTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount)
                newPosition = swiper.maxTranslate() - bounceAmount
              afterBouncePosition = swiper.maxTranslate()
              doBounce = true
              data.allowMomentumBounce = true
            } else newPosition = swiper.maxTranslate()
            if (params.loop && params.centeredSlides) needsLoopFix = true
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount)
                newPosition = swiper.minTranslate() + bounceAmount
              afterBouncePosition = swiper.minTranslate()
              doBounce = true
              data.allowMomentumBounce = true
            } else newPosition = swiper.minTranslate()
            if (params.loop && params.centeredSlides) needsLoopFix = true
          } else if (params.freeMode.sticky) {
            let nextSlide
            for (let j = 0; j < snapGrid.length; j += 1)
              if (snapGrid[j] > -newPosition) {
                nextSlide = j
                break
              }
            if (
              Math.abs(snapGrid[nextSlide] - newPosition) <
                Math.abs(snapGrid[nextSlide - 1] - newPosition) ||
              'next' === swiper.swipeDirection
            )
              newPosition = snapGrid[nextSlide]
            else newPosition = snapGrid[nextSlide - 1]
            newPosition = -newPosition
          }
          if (needsLoopFix)
            once('transitionEnd', () => {
              swiper.loopFix()
            })
          if (0 !== swiper.velocity) {
            if (rtl)
              momentumDuration = Math.abs(
                (-newPosition - swiper.translate) / swiper.velocity,
              )
            else
              momentumDuration = Math.abs(
                (newPosition - swiper.translate) / swiper.velocity,
              )
            if (params.freeMode.sticky) {
              const moveDistance = Math.abs(
                (rtl ? -newPosition : newPosition) - swiper.translate,
              )
              const currentSlideSize =
                swiper.slidesSizesGrid[swiper.activeIndex]
              if (moveDistance < currentSlideSize)
                momentumDuration = params.speed
              else if (moveDistance < 2 * currentSlideSize)
                momentumDuration = 1.5 * params.speed
              else momentumDuration = 2.5 * params.speed
            }
          } else if (params.freeMode.sticky) {
            swiper.slideToClosest()
            return
          }
          if (params.freeMode.momentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition)
            swiper.setTransition(momentumDuration)
            swiper.setTranslate(newPosition)
            swiper.transitionStart(true, swiper.swipeDirection)
            swiper.animating = true
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce)
                return
              emit('momentumBounce')
              swiper.setTransition(params.speed)
              setTimeout(() => {
                swiper.setTranslate(afterBouncePosition)
                $wrapperEl.transitionEnd(() => {
                  if (!swiper || swiper.destroyed) return
                  swiper.transitionEnd()
                })
              }, 0)
            })
          } else if (swiper.velocity) {
            emit('_freeModeNoMomentumRelease')
            swiper.updateProgress(newPosition)
            swiper.setTransition(momentumDuration)
            swiper.setTranslate(newPosition)
            swiper.transitionStart(true, swiper.swipeDirection)
            if (!swiper.animating) {
              swiper.animating = true
              $wrapperEl.transitionEnd(() => {
                if (!swiper || swiper.destroyed) return
                swiper.transitionEnd()
              })
            }
          } else swiper.updateProgress(newPosition)
          swiper.updateActiveIndex()
          swiper.updateSlidesClasses()
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest()
          return
        } else if (params.freeMode) emit('_freeModeNoMomentumRelease')
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress()
          swiper.updateActiveIndex()
          swiper.updateSlidesClasses()
        }
      }
      Object.assign(swiper, {
        freeMode: {
          onTouchStart,
          onTouchMove,
          onTouchEnd,
        },
      })
    }
    function initSliders() {
      if (document.querySelector('.swiper')) {
        const thumbsSwiper = new core('.thumbs-images', {
          modules: [Navigation, Thumb],
          slidesPerView: 4,
          spaceBetween: 16,
          freeMode: false,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          watchOverflow: true,
          observer: true,
          watchOverflow: true,
          observeParents: true,
          speed: 800,
          breakpoints: {},
          on: {
            init: function (swiper) {},
          },
        })
        new core('.product__slider', {
          modules: [Navigation, Thumb],
          observer: true,
          watchOverflow: true,
          observeParents: true,
          slidesPerView: 1,
          spaceBetween: 30,
          speed: 800,
          thumbs: {
            swiper: thumbsSwiper,
          },
          on: {
            init: function (swiper) {},
          },
        })
        const mySwiper = new core('.category-popup__slider', {
          modules: [Navigation, Scrollbar, freeMode, Mousewheel],
          direction: 'vertical',
          freeMode: true,
          slidesPerView: 'auto',
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
          mousewheel: true,
          on: {},
        })
        mySwiper.on('slideChange', () => {
          const activeSlide = mySwiper.slides[mySwiper.activeIndex]
          const titleElement = activeSlide.querySelector(
            '.category-popup__title',
          )
          const spanElement = activeSlide.querySelector('.category-popup__span')
          const popupTitleElement = document.querySelector('.popup__row-title')
          const popupSpanElement = document.querySelector('.popup__row-span')
          popupTitleElement.innerText = titleElement.innerText
          popupSpanElement.innerText = spanElement.innerText
        })
      }
    }
    window.addEventListener('load', function (e) {
      initSliders()
    })
    class ScrollWatcher {
      constructor(props) {
        let defaultConfig = {
          logging: true,
        }
        this.config = Object.assign(defaultConfig, props)
        this.observer
        !document.documentElement.classList.contains('watcher')
          ? this.scrollWatcherRun()
          : null
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun()
      }
      scrollWatcherRun() {
        document.documentElement.classList.add('watcher')
        this.scrollWatcherConstructor(document.querySelectorAll('[data-watch]'))
      }
      scrollWatcherConstructor(items) {
        if (items.length) {
          let uniqParams = uniqArray(
            Array.from(items).map(function (item) {
              return `${
                item.dataset.watchRoot ? item.dataset.watchRoot : null
              }|${item.dataset.watchMargin ? item.dataset.watchMargin : '0px'}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`
            }),
          )
          uniqParams.forEach((uniqParam) => {
            let uniqParamArray = uniqParam.split('|')
            let paramsWatch = {
              root: uniqParamArray[0],
              margin: uniqParamArray[1],
              threshold: uniqParamArray[2],
            }
            let groupItems = Array.from(items).filter(function (item) {
              let watchRoot = item.dataset.watchRoot
                ? item.dataset.watchRoot
                : null
              let watchMargin = item.dataset.watchMargin
                ? item.dataset.watchMargin
                : '0px'
              let watchThreshold = item.dataset.watchThreshold
                ? item.dataset.watchThreshold
                : 0
              if (
                String(watchRoot) === paramsWatch.root &&
                String(watchMargin) === paramsWatch.margin &&
                String(watchThreshold) === paramsWatch.threshold
              )
                return item
            })
            let configWatcher = this.getScrollWatcherConfig(paramsWatch)
            this.scrollWatcherInit(groupItems, configWatcher)
          })
        } else this.scrollWatcherLogging('')
      }
      getScrollWatcherConfig(paramsWatch) {
        let configWatcher = {}
        if (document.querySelector(paramsWatch.root))
          configWatcher.root = document.querySelector(paramsWatch.root)
        else if ('null' !== paramsWatch.root)
          this.scrollWatcherLogging(
            `Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`,
          )
        configWatcher.rootMargin = paramsWatch.margin
        if (
          paramsWatch.margin.indexOf('px') < 0 &&
          paramsWatch.margin.indexOf('%') < 0
        ) {
          this.scrollWatcherLogging(
            `йой, налаштування data-watch-margin потрібно задавати в PX або %`,
          )
          return
        }
        if ('prx' === paramsWatch.threshold) {
          paramsWatch.threshold = []
          for (let i = 0; i <= 1; i += 0.005) paramsWatch.threshold.push(i)
        } else paramsWatch.threshold = paramsWatch.threshold.split(',')
        configWatcher.threshold = paramsWatch.threshold
        return configWatcher
      }
      scrollWatcherCreate(configWatcher) {
        this.observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            this.scrollWatcherCallback(entry, observer)
          })
        }, configWatcher)
      }
      scrollWatcherInit(items, configWatcher) {
        this.scrollWatcherCreate(configWatcher)
        items.forEach((item) => this.observer.observe(item))
      }
      scrollWatcherIntersecting(entry, targetElement) {
        if (entry.isIntersecting) {
          !targetElement.classList.contains('_watcher-view')
            ? targetElement.classList.add('_watcher-view')
            : null
          this.scrollWatcherLogging(
            `Я бачу ${targetElement.classList}, додав клас _watcher-view`,
          )
        } else
          targetElement.classList.contains('_watcher-view')
            ? targetElement.classList.remove('_watcher-view')
            : null
      }
      scrollWatcherOff(targetElement, observer) {
        observer.unobserve(targetElement)
      }
      scrollWatcherLogging(message) {}
      scrollWatcherCallback(entry, observer) {
        const targetElement = entry.target
        this.scrollWatcherIntersecting(entry, targetElement)
        targetElement.hasAttribute('data-watch-once') && entry.isIntersecting
          ? this.scrollWatcherOff(targetElement, observer)
          : null
        document.dispatchEvent(
          new CustomEvent('watcherCallback', {
            detail: {
              entry,
            },
          }),
        )
      }
    }
    modules_flsModules.watcher = new ScrollWatcher({})
    let addWindowScrollEvent = false
    function digitsCounter() {
      if (document.querySelectorAll('[data-digits-counter]').length)
        document
          .querySelectorAll('[data-digits-counter]')
          .forEach((element) => {
            element.dataset.digitsCounter = element.innerHTML
            element.innerHTML = `0`
          })
      function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = digitsCountersItems
          ? digitsCountersItems
          : document.querySelectorAll('[data-digits-counter]')
        if (digitsCounters.length)
          digitsCounters.forEach((digitsCounter) => {
            digitsCountersAnimate(digitsCounter)
          })
      }
      function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null
        const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed)
          ? parseInt(digitsCounter.dataset.digitsCounterSpeed)
          : 1e3
        const startValue = parseInt(digitsCounter.dataset.digitsCounter)
        const startPosition = 0
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp
          const progress = Math.min((timestamp - startTimestamp) / duration, 1)
          digitsCounter.innerHTML = Math.floor(
            progress * (startPosition + startValue),
          )
          if (progress < 1) window.requestAnimationFrame(step)
        }
        window.requestAnimationFrame(step)
      }
      function digitsCounterAction(e) {
        const entry = e.detail.entry
        const targetElement = entry.target
        if (targetElement.querySelectorAll('[data-digits-counter]').length)
          digitsCountersInit(
            targetElement.querySelectorAll('[data-digits-counter]'),
          )
      }
      document.addEventListener('watcherCallback', digitsCounterAction)
    }
    setTimeout(() => {
      if (addWindowScrollEvent) {
        let windowScroll = new Event('windowScroll')
        window.addEventListener('scroll', function (e) {
          document.dispatchEvent(windowScroll)
        })
      }
    }, 0)
    class DynamicAdapt {
      constructor(type) {
        this.type = type
      }
      init() {
        this.оbjects = []
        this.daClassname = '_dynamic_adapt_'
        this.nodes = [...document.querySelectorAll('[data-da]')]
        this.nodes.forEach((node) => {
          const data = node.dataset.da.trim()
          const dataArray = data.split(',')
          const оbject = {}
          оbject.element = node
          оbject.parent = node.parentNode
          оbject.destination = document.querySelector(`${dataArray[0].trim()}`)
          оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767'
          оbject.place = dataArray[2] ? dataArray[2].trim() : 'last'
          оbject.index = this.indexInParent(оbject.parent, оbject.element)
          this.оbjects.push(оbject)
        })
        this.arraySort(this.оbjects)
        this.mediaQueries = this.оbjects
          .map(
            ({ breakpoint }) =>
              `(${this.type}-width: ${breakpoint}px),${breakpoint}`,
          )
          .filter((item, index, self) => self.indexOf(item) === index)
        this.mediaQueries.forEach((media) => {
          const mediaSplit = media.split(',')
          const matchMedia = window.matchMedia(mediaSplit[0])
          const mediaBreakpoint = mediaSplit[1]
          const оbjectsFilter = this.оbjects.filter(
            ({ breakpoint }) => breakpoint === mediaBreakpoint,
          )
          matchMedia.addEventListener('change', () => {
            this.mediaHandler(matchMedia, оbjectsFilter)
          })
          this.mediaHandler(matchMedia, оbjectsFilter)
        })
      }
      mediaHandler(matchMedia, оbjects) {
        if (matchMedia.matches)
          оbjects.forEach((оbject) => {
            this.moveTo(оbject.place, оbject.element, оbject.destination)
          })
        else
          оbjects.forEach(({ parent, element, index }) => {
            if (element.classList.contains(this.daClassname))
              this.moveBack(parent, element, index)
          })
      }
      moveTo(place, element, destination) {
        element.classList.add(this.daClassname)
        if ('last' === place || place >= destination.children.length) {
          destination.append(element)
          return
        }
        if ('first' === place) {
          destination.prepend(element)
          return
        }
        destination.children[place].before(element)
      }
      moveBack(parent, element, index) {
        element.classList.remove(this.daClassname)
        if (void 0 !== parent.children[index])
          parent.children[index].before(element)
        else parent.append(element)
      }
      indexInParent(parent, element) {
        return [...parent.children].indexOf(element)
      }
      arraySort(arr) {
        if ('min' === this.type)
          arr.sort((a, b) => {
            if (a.breakpoint === b.breakpoint) {
              if (a.place === b.place) return 0
              if ('first' === a.place || 'last' === b.place) return -1
              if ('last' === a.place || 'first' === b.place) return 1
              return 0
            }
            return a.breakpoint - b.breakpoint
          })
        else {
          arr.sort((a, b) => {
            if (a.breakpoint === b.breakpoint) {
              if (a.place === b.place) return 0
              if ('first' === a.place || 'last' === b.place) return 1
              if ('last' === a.place || 'first' === b.place) return -1
              return 0
            }
            return b.breakpoint - a.breakpoint
          })
          return
        }
      }
    }
    const da = new DynamicAdapt('max')
    da.init()
    __webpack_require__(63)
    Math.fround || ((tmp) => {})(new Float32Array(1))
    var MarkerClustererEvents
    ;(function (MarkerClustererEvents) {
      MarkerClustererEvents['CLUSTERING_BEGIN'] = 'clusteringbegin'
      MarkerClustererEvents['CLUSTERING_END'] = 'clusteringend'
      MarkerClustererEvents['CLUSTER_CLICK'] = 'click'
    })(MarkerClustererEvents || (MarkerClustererEvents = {}))
    var fastDeepEqual = function equal(a, b) {
      if (a === b) return true
      if (a && b && 'object' == typeof a && 'object' == typeof b) {
        if (a.constructor !== b.constructor) return false
        var length, i, keys
        if (Array.isArray(a)) {
          length = a.length
          if (length != b.length) return false
          for (i = length; 0 !== i--; ) if (!equal(a[i], b[i])) return false
          return true
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf()
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString()
        keys = Object.keys(a)
        length = keys.length
        if (length !== Object.keys(b).length) return false
        for (i = length; 0 !== i--; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false
        for (i = length; 0 !== i--; ) {
          var key = keys[i]
          if (!equal(a[key], b[key])) return false
        }
        return true
      }
      return a !== a && b !== b
    }
    const DEFAULT_ID = '__googleMapsScriptId'
    var LoaderStatus
    ;(function (LoaderStatus) {
      LoaderStatus[(LoaderStatus['INITIALIZED'] = 0)] = 'INITIALIZED'
      LoaderStatus[(LoaderStatus['LOADING'] = 1)] = 'LOADING'
      LoaderStatus[(LoaderStatus['SUCCESS'] = 2)] = 'SUCCESS'
      LoaderStatus[(LoaderStatus['FAILURE'] = 3)] = 'FAILURE'
    })(LoaderStatus || (LoaderStatus = {}))
    class Loader {
      constructor({
        apiKey,
        authReferrerPolicy,
        channel,
        client,
        id = DEFAULT_ID,
        language,
        libraries = [],
        mapIds,
        nonce,
        region,
        retries = 3,
        url = 'https://maps.googleapis.com/maps/api/js',
        version,
      }) {
        this.CALLBACK = '__googleMapsCallback'
        this.callbacks = []
        this.done = false
        this.loading = false
        this.errors = []
        this.apiKey = apiKey
        this.authReferrerPolicy = authReferrerPolicy
        this.channel = channel
        this.client = client
        this.id = id || DEFAULT_ID
        this.language = language
        this.libraries = libraries
        this.mapIds = mapIds
        this.nonce = nonce
        this.region = region
        this.retries = retries
        this.url = url
        this.version = version
        if (Loader.instance) {
          if (!fastDeepEqual(this.options, Loader.instance.options))
            throw new Error(
              `Loader must not be called again with different options. ${JSON.stringify(
                this.options,
              )} !== ${JSON.stringify(Loader.instance.options)}`,
            )
          return Loader.instance
        }
        Loader.instance = this
      }
      get options() {
        return {
          version: this.version,
          apiKey: this.apiKey,
          channel: this.channel,
          client: this.client,
          id: this.id,
          libraries: this.libraries,
          language: this.language,
          region: this.region,
          mapIds: this.mapIds,
          nonce: this.nonce,
          url: this.url,
          authReferrerPolicy: this.authReferrerPolicy,
        }
      }
      get status() {
        if (this.errors.length) return LoaderStatus.FAILURE
        if (this.done) return LoaderStatus.SUCCESS
        if (this.loading) return LoaderStatus.LOADING
        return LoaderStatus.INITIALIZED
      }
      get failed() {
        return (
          this.done && !this.loading && this.errors.length >= this.retries + 1
        )
      }
      createUrl() {
        let url = this.url
        url += `?callback=${this.CALLBACK}`
        if (this.apiKey) url += `&key=${this.apiKey}`
        if (this.channel) url += `&channel=${this.channel}`
        if (this.client) url += `&client=${this.client}`
        if (this.libraries.length > 0)
          url += `&libraries=${this.libraries.join(',')}`
        if (this.language) url += `&language=${this.language}`
        if (this.region) url += `&region=${this.region}`
        if (this.version) url += `&v=${this.version}`
        if (this.mapIds) url += `&map_ids=${this.mapIds.join(',')}`
        if (this.authReferrerPolicy)
          url += `&auth_referrer_policy=${this.authReferrerPolicy}`
        return url
      }
      deleteScript() {
        const script = document.getElementById(this.id)
        if (script) script.remove()
      }
      load() {
        return this.loadPromise()
      }
      loadPromise() {
        return new Promise((resolve, reject) => {
          this.loadCallback((err) => {
            if (!err) resolve(window.google)
            else reject(err.error)
          })
        })
      }
      loadCallback(fn) {
        this.callbacks.push(fn)
        this.execute()
      }
      setScript() {
        if (document.getElementById(this.id)) {
          this.callback()
          return
        }
        const url = this.createUrl()
        const script = document.createElement('script')
        script.id = this.id
        script.type = 'text/javascript'
        script.src = url
        script.onerror = this.loadErrorCallback.bind(this)
        script.defer = true
        script.async = true
        if (this.nonce) script.nonce = this.nonce
        document.head.appendChild(script)
      }
      reset() {
        this.deleteScript()
        this.done = false
        this.loading = false
        this.errors = []
        this.onerrorEvent = null
      }
      resetIfRetryingFailed() {
        if (this.failed) this.reset()
      }
      loadErrorCallback(e) {
        this.errors.push(e)
        if (this.errors.length <= this.retries) {
          const delay = this.errors.length * Math.pow(2, this.errors.length)
          console.log(
            `Failed to load Google Maps script, retrying in ${delay} ms.`,
          )
          setTimeout(() => {
            this.deleteScript()
            this.setScript()
          }, delay)
        } else {
          this.onerrorEvent = e
          this.callback()
        }
      }
      setCallback() {
        window.__googleMapsCallback = this.callback.bind(this)
      }
      callback() {
        this.done = true
        this.loading = false
        this.callbacks.forEach((cb) => {
          cb(this.onerrorEvent)
        })
        this.callbacks = []
      }
      execute() {
        this.resetIfRetryingFailed()
        if (this.done) this.callback()
        else {
          if (
            window.google &&
            window.google.maps &&
            window.google.maps.version
          ) {
            console.warn(
              'Google Maps already loaded outside @googlemaps/js-api-loader.' +
                'This may result in undesirable behavior as options and script parameters may not match.',
            )
            this.callback()
            return
          }
          if (this.loading);
          else {
            this.loading = true
            this.setCallback()
            this.setScript()
          }
        }
      }
    }
    const loader = new Loader({
      apiKey: 'AIzaSyAiVOcHP59ZbDgwdKWr4C6j2-7QRbl7tQg',
      version: 'weekly',
    })
    window.mobileCheck = function () {
      let check = false
      ;(function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a,
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4),
          )
        )
          check = true
      })(navigator.userAgent || navigator.vendor || window.opera)
      return check
    }
    const setDataDropdown = (element) => {
      element.removeAttribute('data-dropdown-hover')
      element.setAttribute('data-dropdown', '')
    }
    if (window.mobileCheck()) {
      const location = document.querySelector('.location-header__items')
      const headerLang = document.querySelector('.header__lang')
      const loginHeader = document.querySelector('.login-header__item')
      setDataDropdown(location)
      setDataDropdown(headerLang)
      setDataDropdown(loginHeader)
    }
    const wrapper = document.getElementById('map__button')
    console.log('1231231232132131231233', wrapper)
    if (wrapper)
      wrapper.addEventListener('click', () => {
        wrapper.remove()
        loader.load().then(() => {
          var bounds = new google.maps.LatLngBounds()
          const map = new google.maps.Map(document.getElementById('map'), {
            center: {
              lat: 50.4411073,
              lng: 30.5444523,
            },
            zoom: 12,
            styles: [
              {
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#f5f5f5',
                  },
                ],
              },
              {
                elementType: 'labels.icon',
                stylers: [
                  {
                    visibility: 'off',
                  },
                ],
              },
              {
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#616161',
                  },
                ],
              },
              {
                elementType: 'labels.text.stroke',
                stylers: [
                  {
                    color: '#f5f5f5',
                  },
                ],
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#bdbdbd',
                  },
                ],
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#eeeeee',
                  },
                ],
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#757575',
                  },
                ],
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#e5e5e5',
                  },
                ],
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9e9e9e',
                  },
                ],
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#ffffff',
                  },
                ],
              },
              {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#757575',
                  },
                ],
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#dadada',
                  },
                ],
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#616161',
                  },
                ],
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9e9e9e',
                  },
                ],
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#e5e5e5',
                  },
                ],
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#eeeeee',
                  },
                ],
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#c9c9c9',
                  },
                ],
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9e9e9e',
                  },
                ],
              },
            ],
          })
          var markersLoc = [
            ['Mumbai', 48.2437167, 19.3394151],
            ['Pune', 48.2463182, 17.659755],
            ['Bhopal ', 47.0842848, 3.1437127],
            ['Agra', 50.4268, 30.5632],
            ['Delhi', 50.9684777, 58.38623459999999],
          ]
          var infoTitle = document.querySelectorAll('.info-content__title')
          for (var i = 0; i < infoTitle.length; i++);
          var infoTitleText = document.querySelectorAll(
            '.info-content__title-text',
          )
          for (i = 0; i < infoTitleText.length; i++);
          var infoImg = document.querySelectorAll('.info-content__img')
          for (i = 0; i < infoImg.length; i++);
          var infoName = document.querySelectorAll('.info-content__name-type')
          for (i = 0; i < infoName.length; i++);
          var infoType = document.querySelectorAll('.info-content__descr-type')
          for (i = 0; i < infoType.length; i++);
          var infoBrand = document.querySelectorAll('.info-content__name-brand')
          for (i = 0; i < infoBrand.length; i++);
          var infoDescrBrand = document.querySelectorAll(
            '.info-content__descr-brand',
          )
          for (i = 0; i < infoDescrBrand.length; i++);
          var infoText1 = document.querySelectorAll('.info-content__text-1')
          for (i = 0; i < infoText1.length; i++);
          var infoText2 = document.querySelectorAll('.info-content__text-2')
          for (i = 0; i < infoText2.length; i++);
          var infoText3 = document.querySelectorAll('.info-content__text-3')
          for (i = 0; i < infoText3.length; i++);
          var infoText4 = document.querySelectorAll('.info-content__text-4')
          for (i = 0; i < infoText4.length; i++);
          var infoHour = document.querySelectorAll('.info-content__button-hour')
          for (i = 0; i < infoHour.length; i++);
          var infoDay = document.querySelectorAll('.info-content__button-day')
          for (i = 0; i < infoDay.length; i++);
          var infoOrder = document.querySelectorAll(
            '.info-content__button-order',
          )
          for (i = 0; i < infoOrder.length; i++);
          var infoBtnOrder = document.querySelectorAll(
            '.info-content__button-order',
          )
          for (i = 0; i < infoBtnOrder.length; i++);
          var infoWindowContent = [
            [
              '<div class="info-content">' +
                '<div class="info-content__wrapp">' +
                '<div class="info-content__body-title">' +
                '<div class="info-content__body-title">' +
                infoTitle[0].innerHTML +
                '</div>' +
                '<div class="info-content__title-text">' +
                infoTitleText[0].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__wrapper">' +
                '<div class="info-content__image">' +
                '<img class="info-content__img" src="' +
                infoImg[0].src +
                '" alt="">' +
                '</div>' +
                '<div class="info-content__main">' +
                '<div class="info-content__header">' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-type">' +
                infoName[0].innerHTML +
                '</div>' +
                '<div class="info-content__descr-type">' +
                infoType[0].innerHTML +
                '</div>' +
                '</div>' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-brand">' +
                infoBrand[0].innerHTML +
                '</div>' +
                '<div class="info-content__descr-brand">' +
                infoDescrBrand[0].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__footer">' +
                '<div class="info-content__text info-content__text-1">' +
                infoText1[0].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-2">' +
                infoText2[0].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-3">' +
                infoText3[0].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-4">' +
                infoText4[0].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__price">' +
                '<button type="submit" class="info-content__button-price info-content__button-hour btn">' +
                infoHour[0].innerHTML +
                '</button>' +
                '<button type="submit" class="info-content__button-price info-content__button-day btn">' +
                infoDay[0].innerHTML +
                '</button>' +
                '<a href="' +
                infoOrder[0].href +
                '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c" data-translate="GET_ORDER_BUTTON">' +
                infoBtnOrder[0].innerHTML +
                '</a>' +
                '</div>' +
                '</div>',
            ],
            [
              '<div class="info-content">' +
                '<div class="info-content__wrapp">' +
                '<div class="info-content__body-title">' +
                '<div class="info-content__body-title">' +
                infoTitle[1].innerHTML +
                '</div>' +
                '<div class="info-content__title-text">' +
                infoTitleText[1].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__wrapper">' +
                '<div class="info-content__image">' +
                '<img class="info-content__img" src="' +
                infoImg[1].src +
                '" alt="">' +
                '</div>' +
                '<div class="info-content__main">' +
                '<div class="info-content__header">' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-type">' +
                infoName[1].innerHTML +
                '</div>' +
                '<div class="info-content__descr-type">' +
                infoType[1].innerHTML +
                '</div>' +
                '</div>' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-brand">' +
                infoBrand[1].innerHTML +
                '</div>' +
                '<div class="info-content__descr-brand">' +
                infoDescrBrand[1].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__footer">' +
                '<div class="info-content__text info-content__text-1">' +
                infoText1[1].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-2">' +
                infoText2[1].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-3">' +
                infoText3[1].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-4">' +
                infoText4[1].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__price">' +
                '<button type="submit" class="info-content__button-price info-content__button-hour btn">' +
                infoHour[1].innerHTML +
                '</button>' +
                '<button type="submit" class="info-content__button-price info-content__button-day btn">' +
                infoDay[1].innerHTML +
                '</button>' +
                '<a href="' +
                infoOrder[1].href +
                '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c" data-translate="GET_ORDER_BUTTON">' +
                infoBtnOrder[1].innerHTML +
                '</a>' +
                '</div>' +
                '</div>',
            ],
            [
              '<div class="info-content">' +
                '<div class="info-content__wrapp">' +
                '<div class="info-content__body-title">' +
                '<div class="info-content__body-title">' +
                infoTitle[2].innerHTML +
                '</div>' +
                '<div class="info-content__title-text">' +
                infoTitleText[2].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__wrapper">' +
                '<div class="info-content__image">' +
                '<img class="info-content__img" src="' +
                infoImg[2].src +
                '" alt="">' +
                '</div>' +
                '<div class="info-content__main">' +
                '<div class="info-content__header">' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-type">' +
                infoName[2].innerHTML +
                '</div>' +
                '<div class="info-content__descr-type">' +
                infoType[2].innerHTML +
                '</div>' +
                '</div>' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-brand">' +
                infoBrand[2].innerHTML +
                '</div>' +
                '<div class="info-content__descr-brand">' +
                infoDescrBrand[2].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__footer">' +
                '<div class="info-content__text info-content__text-2">' +
                infoText1[2].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-2">' +
                infoText2[2].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-3">' +
                infoText3[2].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-4">' +
                infoText4[2].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__price">' +
                '<button type="submit" class="info-content__button-price info-content__button-hour btn">' +
                infoHour[2].innerHTML +
                '</button>' +
                '<button type="submit" class="info-content__button-price info-content__button-day btn">' +
                infoDay[2].innerHTML +
                '</button>' +
                '<a href="' +
                infoOrder[2].href +
                '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c" data-translate="GET_ORDER_BUTTON">' +
                infoBtnOrder[2].innerHTML +
                '</a>' +
                '</div>' +
                '</div>',
            ],
            [
              '<div class="info-content">' +
                '<div class="info-content__wrapp">' +
                '<div class="info-content__body-title">' +
                '<div class="info-content__body-title">' +
                infoTitle[3].innerHTML +
                '</div>' +
                '<div class="info-content__title-text">' +
                infoTitleText[3].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__wrapper">' +
                '<div class="info-content__image">' +
                '<img class="info-content__img" src="' +
                infoImg[3].src +
                '" alt="">' +
                '</div>' +
                '<div class="info-content__main">' +
                '<div class="info-content__header">' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-type">' +
                infoName[3].innerHTML +
                '</div>' +
                '<div class="info-content__descr-type">' +
                infoType[3].innerHTML +
                '</div>' +
                '</div>' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-brand">' +
                infoBrand[3].innerHTML +
                '</div>' +
                '<div class="info-content__descr-brand">' +
                infoDescrBrand[3].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__footer">' +
                '<div class="info-content__text info-content__text-1">' +
                infoText1[3].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-2">' +
                infoText2[3].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-3">' +
                infoText3[3].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-4">' +
                infoText4[3].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__price">' +
                '<button type="submit" class="info-content__button-price info-content__button-hour btn">' +
                infoHour[3].innerHTML +
                '</button>' +
                '<button type="submit" class="info-content__button-price info-content__button-day btn">' +
                infoDay[3].innerHTML +
                '</button>' +
                '<a href="' +
                infoOrder[3].href +
                '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c" data-translate="GET_ORDER_BUTTON">' +
                infoBtnOrder[3].innerHTML +
                '</a>' +
                '</div>' +
                '</div>',
            ],
            [
              '<div class="info-content">' +
                '<div class="info-content__wrapp">' +
                '<div class="info-content__body-title">' +
                '<div class="info-content__body-title">' +
                infoTitle[4].innerHTML +
                '</div>' +
                '<div class="info-content__title-text">' +
                infoTitleText[4].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__wrapper">' +
                '<div class="info-content__image">' +
                '<img class="info-content__img" src="' +
                infoImg[4].src +
                '" alt="">' +
                '</div>' +
                '<div class="info-content__main">' +
                '<div class="info-content__header">' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-type">' +
                infoName[4].innerHTML +
                '</div>' +
                '<div class="info-content__descr-type">' +
                infoType[4].innerHTML +
                '</div>' +
                '</div>' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-brand">' +
                infoBrand[4].innerHTML +
                '</div>' +
                '<div class="info-content__descr-brand">' +
                infoDescrBrand[4].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__footer">' +
                '<div class="info-content__text info-content__text-1">' +
                infoText1[4].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-2">' +
                infoText2[4].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-3">' +
                infoText3[4].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-4">' +
                infoText4[4].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__price">' +
                '<button type="submit" class="info-content__button-price info-content__button-hour btn">' +
                infoHour[4].innerHTML +
                '</button>' +
                '<button type="submit" class="info-content__button-price info-content__button-day btn">' +
                infoDay[4].innerHTML +
                '</button>' +
                '<a href="' +
                infoOrder[4].href +
                '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c" data-translate="GET_ORDER_BUTTON">' +
                infoBtnOrder[4].innerHTML +
                '</a>' +
                '</div>' +
                '</div>',
            ],
          ]
          var infoWindow = new google.maps.InfoWindow({
            content: '',
            disableAutoPan: true,
          })
          const image = {
            url: '/static/img/main/marker.png',
            size: new google.maps.Size(51, 51),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(24, 55),
            scaledSize: new google.maps.Size(51, 51),
          }
          for (i = 0; i < markersLoc.length; i++) {
            var position = new google.maps.LatLng(
              markersLoc[i][1],
              markersLoc[i][2],
            )
            bounds.extend(position)
            const marker = new google.maps.Marker({
              position,
              map,
              icon: image,
              title: markersLoc[i][0],
            })
            google.maps.event.addListener(
              marker,
              'click',
              (function (marker, i) {
                return function () {
                  infoWindow.setContent(infoWindowContent[i][0])
                  infoWindow.open(map, marker)
                }
              })(marker, i),
            )
            map.fitBounds(bounds)
          }
        })
      })
    const mapWapper = document.querySelector('map__info-wrapper')
    if (mapWapper) {
      var mapWapperClick = function mapWapperClick() {
        wrapper.addEventListener('click', function () {
          mapWapper.style.display = 'block'
          mapWapper.classList.add('active')
        })
      }
      mapWapperClick()
      // TODO: recheck dom events on mapWapperClick
      // document.addEventListener('DOMContentLoaded', mapWapperClick)
    }
    const wrapperMap = document.getElementById('map__button-map')
    if (wrapperMap)
      wrapperMap.addEventListener('click', () => {
        wrapperMap.remove()
        loader.load().then(() => {
          var bounds = new google.maps.LatLngBounds()
          const map = new google.maps.Map(document.getElementById('map-map'), {
            center: {
              lat: 50.4411073,
              lng: 30.5444523,
            },
            zoom: 12,
            styles: [
              {
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#f5f5f5',
                  },
                ],
              },
              {
                elementType: 'labels.icon',
                stylers: [
                  {
                    visibility: 'off',
                  },
                ],
              },
              {
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#616161',
                  },
                ],
              },
              {
                elementType: 'labels.text.stroke',
                stylers: [
                  {
                    color: '#f5f5f5',
                  },
                ],
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#bdbdbd',
                  },
                ],
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#eeeeee',
                  },
                ],
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#757575',
                  },
                ],
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#e5e5e5',
                  },
                ],
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9e9e9e',
                  },
                ],
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#ffffff',
                  },
                ],
              },
              {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#757575',
                  },
                ],
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#dadada',
                  },
                ],
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#616161',
                  },
                ],
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9e9e9e',
                  },
                ],
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#e5e5e5',
                  },
                ],
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#eeeeee',
                  },
                ],
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#c9c9c9',
                  },
                ],
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9e9e9e',
                  },
                ],
              },
            ],
          })
          var markersLoc = [
            ['Mumbai', 48.2437167, 19.3394151],
            ['Pune', 48.2463182, 17.659755],
            ['Bhopal ', 47.0842848, 3.1437127],
            ['Agra', 50.4268, 30.5632],
            ['Delhi', 50.9684777, 58.38623459999999],
          ]
          var infoTitle = document.querySelectorAll('.info-content__title')
          for (var i = 0; i < infoTitle.length; i++);
          var infoTitleText = document.querySelectorAll(
            '.info-content__title-text',
          )
          for (i = 0; i < infoTitleText.length; i++);
          var infoImg = document.querySelectorAll('.info-content__img')
          for (i = 0; i < infoImg.length; i++);
          var infoName = document.querySelectorAll('.info-content__name-type')
          for (i = 0; i < infoName.length; i++);
          var infoType = document.querySelectorAll('.info-content__descr-type')
          for (i = 0; i < infoType.length; i++);
          var infoBrand = document.querySelectorAll('.info-content__name-brand')
          for (i = 0; i < infoBrand.length; i++);
          var infoDescrBrand = document.querySelectorAll(
            '.info-content__descr-brand',
          )
          for (i = 0; i < infoDescrBrand.length; i++);
          var infoText1 = document.querySelectorAll('.info-content__text-1')
          for (i = 0; i < infoText1.length; i++);
          var infoText2 = document.querySelectorAll('.info-content__text-2')
          for (i = 0; i < infoText2.length; i++);
          var infoText3 = document.querySelectorAll('.info-content__text-3')
          for (i = 0; i < infoText3.length; i++);
          var infoText4 = document.querySelectorAll('.info-content__text-4')
          for (i = 0; i < infoText4.length; i++);
          var infoHour = document.querySelectorAll('.info-content__button-hour')
          for (i = 0; i < infoHour.length; i++);
          var infoDay = document.querySelectorAll('.info-content__button-day')
          for (i = 0; i < infoDay.length; i++);
          var infoOrder = document.querySelectorAll(
            '.info-content__button-order',
          )
          for (i = 0; i < infoOrder.length; i++);
          var infoBtnOrder = document.querySelectorAll(
            '.info-content__button-order',
          )
          for (i = 0; i < infoBtnOrder.length; i++);
          var infoWindowContent = [
            [
              '<div class="info-content">' +
                '<div class="info-content__wrapp">' +
                '<div class="info-content__body-title">' +
                '<div class="info-content__body-title">' +
                infoTitle[0].innerHTML +
                '</div>' +
                '<div class="info-content__title-text">' +
                infoTitleText[0].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__wrapper">' +
                '<div class="info-content__image">' +
                '<img class="info-content__img" src="' +
                infoImg[0].src +
                '" alt="">' +
                '</div>' +
                '<div class="info-content__main">' +
                '<div class="info-content__header">' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-type">' +
                infoName[0].innerHTML +
                '</div>' +
                '<div class="info-content__descr-type">' +
                infoType[0].innerHTML +
                '</div>' +
                '</div>' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-brand">' +
                infoBrand[0].innerHTML +
                '</div>' +
                '<div class="info-content__descr-brand">' +
                infoDescrBrand[0].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__footer">' +
                '<div class="info-content__text info-content__text-1">' +
                infoText1[0].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-2">' +
                infoText2[0].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-3">' +
                infoText3[0].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-4">' +
                infoText4[0].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__price">' +
                '<button type="submit" class="info-content__button-price info-content__button-hour btn">' +
                infoHour[0].innerHTML +
                '</button>' +
                '<button type="submit" class="info-content__button-price info-content__button-day btn">' +
                infoDay[0].innerHTML +
                '</button>' +
                '<a href="' +
                infoOrder[0].href +
                '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c" data-translate="GET_ORDER_BUTTON">' +
                infoBtnOrder[0].innerHTML +
                '</a>' +
                '</div>' +
                '</div>',
            ],
            [
              '<div class="info-content">' +
                '<div class="info-content__wrapp">' +
                '<div class="info-content__body-title">' +
                '<div class="info-content__body-title">' +
                infoTitle[1].innerHTML +
                '</div>' +
                '<div class="info-content__title-text">' +
                infoTitleText[1].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__wrapper">' +
                '<div class="info-content__image">' +
                '<img class="info-content__img" src="' +
                infoImg[1].src +
                '" alt="">' +
                '</div>' +
                '<div class="info-content__main">' +
                '<div class="info-content__header">' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-type">' +
                infoName[1].innerHTML +
                '</div>' +
                '<div class="info-content__descr-type">' +
                infoType[1].innerHTML +
                '</div>' +
                '</div>' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-brand">' +
                infoBrand[1].innerHTML +
                '</div>' +
                '<div class="info-content__descr-brand">' +
                infoDescrBrand[1].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__footer">' +
                '<div class="info-content__text info-content__text-1">' +
                infoText1[1].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-2">' +
                infoText2[1].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-3">' +
                infoText3[1].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-4">' +
                infoText4[1].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__price">' +
                '<button type="submit" class="info-content__button-price info-content__button-hour btn">' +
                infoHour[1].innerHTML +
                '</button>' +
                '<button type="submit" class="info-content__button-price info-content__button-day btn">' +
                infoDay[1].innerHTML +
                '</button>' +
                '<a href="' +
                infoOrder[1].href +
                '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c" data-translate="GET_ORDER_BUTTON">' +
                infoBtnOrder[1].innerHTML +
                '</a>' +
                '</div>' +
                '</div>',
            ],
            [
              '<div class="info-content">' +
                '<div class="info-content__wrapp">' +
                '<div class="info-content__body-title">' +
                '<div class="info-content__body-title">' +
                infoTitle[2].innerHTML +
                '</div>' +
                '<div class="info-content__title-text">' +
                infoTitleText[2].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__wrapper">' +
                '<div class="info-content__image">' +
                '<img class="info-content__img" src="' +
                infoImg[2].src +
                '" alt="">' +
                '</div>' +
                '<div class="info-content__main">' +
                '<div class="info-content__header">' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-type">' +
                infoName[2].innerHTML +
                '</div>' +
                '<div class="info-content__descr-type">' +
                infoType[2].innerHTML +
                '</div>' +
                '</div>' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-brand">' +
                infoBrand[2].innerHTML +
                '</div>' +
                '<div class="info-content__descr-brand">' +
                infoDescrBrand[2].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__footer">' +
                '<div class="info-content__text info-content__text-2">' +
                infoText1[2].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-2">' +
                infoText2[2].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-3">' +
                infoText3[2].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-4">' +
                infoText4[2].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__price">' +
                '<button type="submit" class="info-content__button-price info-content__button-hour btn">' +
                infoHour[2].innerHTML +
                '</button>' +
                '<button type="submit" class="info-content__button-price info-content__button-day btn">' +
                infoDay[2].innerHTML +
                '</button>' +
                '<a href="' +
                infoOrder[2].href +
                '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c" data-translate="GET_ORDER_BUTTON">' +
                infoBtnOrder[2].innerHTML +
                '</a>' +
                '</div>' +
                '</div>',
            ],
            [
              '<div class="info-content">' +
                '<div class="info-content__wrapp">' +
                '<div class="info-content__body-title">' +
                '<div class="info-content__body-title">' +
                infoTitle[3].innerHTML +
                '</div>' +
                '<div class="info-content__title-text">' +
                infoTitleText[3].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__wrapper">' +
                '<div class="info-content__image">' +
                '<img class="info-content__img" src="' +
                infoImg[3].src +
                '" alt="">' +
                '</div>' +
                '<div class="info-content__main">' +
                '<div class="info-content__header">' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-type">' +
                infoName[3].innerHTML +
                '</div>' +
                '<div class="info-content__descr-type">' +
                infoType[3].innerHTML +
                '</div>' +
                '</div>' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-brand">' +
                infoBrand[3].innerHTML +
                '</div>' +
                '<div class="info-content__descr-brand">' +
                infoDescrBrand[3].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__footer">' +
                '<div class="info-content__text info-content__text-1">' +
                infoText1[3].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-2">' +
                infoText2[3].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-3">' +
                infoText3[3].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-4">' +
                infoText4[3].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__price">' +
                '<button type="submit" class="info-content__button-price info-content__button-hour btn">' +
                infoHour[3].innerHTML +
                '</button>' +
                '<button type="submit" class="info-content__button-price info-content__button-day btn">' +
                infoDay[3].innerHTML +
                '</button>' +
                '<a href="' +
                infoOrder[3].href +
                '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c" data-translate="GET_ORDER_BUTTON">' +
                infoBtnOrder[3].innerHTML +
                '</a>' +
                '</div>' +
                '</div>',
            ],
            [
              '<div class="info-content">' +
                '<div class="info-content__wrapp">' +
                '<div class="info-content__body-title">' +
                '<div class="info-content__body-title">' +
                infoTitle[4].innerHTML +
                '</div>' +
                '<div class="info-content__title-text">' +
                infoTitleText[4].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__wrapper">' +
                '<div class="info-content__image">' +
                '<img class="info-content__img" src="' +
                infoImg[4].src +
                '" alt="">' +
                '</div>' +
                '<div class="info-content__main">' +
                '<div class="info-content__header">' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-type">' +
                infoName[4].innerHTML +
                '</div>' +
                '<div class="info-content__descr-type">' +
                infoType[4].innerHTML +
                '</div>' +
                '</div>' +
                '<div class="info-content__row">' +
                '<div class="info-content__name-brand">' +
                infoBrand[4].innerHTML +
                '</div>' +
                '<div class="info-content__descr-brand">' +
                infoDescrBrand[4].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__footer">' +
                '<div class="info-content__text info-content__text-1">' +
                infoText1[4].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-2">' +
                infoText2[4].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-3">' +
                infoText3[4].innerHTML +
                '</div>' +
                '<div class="info-content__text info-content__text-4">' +
                infoText4[4].innerHTML +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="info-content__price">' +
                '<button type="submit" class="info-content__button-price info-content__button-hour btn">' +
                infoHour[4].innerHTML +
                '</button>' +
                '<button type="submit" class="info-content__button-price info-content__button-day btn">' +
                infoDay[4].innerHTML +
                '</button>' +
                '<a href="' +
                infoOrder[4].href +
                '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c" data-translate="GET_ORDER_BUTTON">' +
                infoBtnOrder[4].innerHTML +
                '</a>' +
                '</div>' +
                '</div>',
            ],
          ]
          var marker,
            infoWindow = new google.maps.InfoWindow({
              content: '',
              disableAutoPan: true,
            })
          const image = {
            url: '/static/img/main/marker.png',
            size: new google.maps.Size(51, 51),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(24, 55),
            scaledSize: new google.maps.Size(51, 51),
          }
          for (i = 0; i < markersLoc.length; i++) {
            var position = new google.maps.LatLng(
              markersLoc[i][1],
              markersLoc[i][2],
            )
            bounds.extend(position)
            marker = new google.maps.Marker({
              position,
              map,
              icon: image,
              title: markersLoc[i][0],
            })
            google.maps.event.addListener(
              marker,
              'click',
              (function (marker, i) {
                return function () {
                  infoWindow.setContent(infoWindowContent[i][0])
                  infoWindow.open(map, marker)
                }
              })(marker, i),
            )
            map.fitBounds(bounds)
          }
        })
      })
    var sttElem = document.querySelector('.arrow-up')
    if (sttElem) {
      var screanHeight = window.innerHeight
      var sttScroll = function sttScroll() {
        document.addEventListener('scroll', function (e) {
          if (screanHeight <= window.scrollY)
            sttElem.classList.add('arrow-up__active')
          else if (e.target.scrollingElement.scrollTop <= screanHeight) {
            sttElem.classList.remove('arrow-up__active')
            sttElem.style.pointerEvents = 'auto'
          }
        })
      }
      var sttClick = function sttClick() {
        sttElem.addEventListener('click', function () {
          var docHeight = window.scrollY
          var progress = 0
          var position = docHeight
          var speed = 5
          sttElem.style.pointerEvents = 'none'
          var sttAnim = function sttAnim() {
            progress += 1
            position -= progress * speed
            window.scrollTo(0, position)
            if (position > 0) requestAnimationFrame(sttAnim)
          }
          requestAnimationFrame(sttAnim)
        })
      }
      var sttFunc = function sttFunc() {
        sttScroll()
        sttClick()
      }
      sttFunc()
      // document.addEventListener('DOMContentLoaded', sttFunc)
    }
    const locationBody = document.querySelector('.location-header__body')
    if (locationBody) {
      const locationButtonAgree = document.querySelector(
        '.location-header__button',
      )
      locationButtonAgree.addEventListener('click', () => {
        locationBody.classList.add('hide')
      })
    }
    if (window.matchMedia('(min-width: 768px)').matches) {
      const loginTitle = document.getElementById('header__title-login')
      if (loginTitle) {
        document.documentElement.classList.add('login-hide')
        setTimeout(function () {
          document.documentElement.classList.remove('login-hide')
        }, 1e4)
      }
      const headerTitleLogin = document.querySelector('.login-header__title')
      const loginHeaderBody = document.querySelector('.login-header__body')
      headerTitleLogin.addEventListener('mouseenter', function () {
        loginHeaderBody.classList.add('visible')
        headerTitleLogin.classList.add('active')
        setTimeout(function () {
          document.documentElement.classList.remove('login-hide')
        }, 10)
      })
      document.addEventListener('keydown', function (e) {
        if ('Tab' === e.key || 'Escape' === e.key) {
          headerTitleLogin.classList.remove('active')
          loginHeaderBody.classList.remove('visible')
        }
      })
      const loginHeaderItem = document.querySelector('.login-header__item')
      loginHeaderItem.addEventListener('mouseout', (event) => {
        if (!loginHeaderItem.contains(event.relatedTarget))
          if (loginHeaderBody.classList.contains('visible')) {
            headerTitleLogin.classList.remove('active')
            loginHeaderBody.classList.remove('visible')
            document.documentElement.classList.remove('_bg-body')
          }
      })
    }
    document
      .querySelectorAll('[data-dropdown]')
      .forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector(
          '[data-dropdown-button]',
        )
        const dropDownList = dropDownWrapper.querySelector(
          '[data-dropdown-list]',
        )
        const dropDownListItems = dropDownList?.querySelectorAll(
          '[data-dropdown-item]',
        )
        const dropDownInput = dropDownWrapper.querySelector(
          '[data-dropdown-input]',
        )
        dropDownBtn.addEventListener('click', function (e) {
          dropDownList?.classList.toggle('visible')
          this.classList.toggle('active')
          this.parentElement.classList.toggle('active')
        })
        if (dropDownListItems)
          dropDownListItems.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
              e.stopPropagation()
              dropDownBtn.innerText = this.innerText
              dropDownBtn.setAttribute('data-value', this.dataset.value)
              dropDownBtn.focus()
              dropDownInput.setAttribute('value', this.dataset.value)
              dropDownList.classList.remove('visible')
              dropDownBtn.classList.remove('active')
              dropDownBtn.parentElement.classList.remove('active')
            })
          })
        document.addEventListener('click', function (e) {
          if (!dropDownBtn.contains(e.target)) {
            dropDownBtn.classList.remove('active')
            dropDownList?.classList.remove('visible')
            dropDownBtn.parentElement.classList.remove('active')
          }
        })
        document.addEventListener('keydown', function (e) {
          if ('Tab' === e.key || 'Escape' === e.key) {
            dropDownBtn.classList.remove('active')
            dropDownList?.classList.remove('visible')
            dropDownBtn.parentElement.classList.remove('active')
          }
        })
      })
    document
      .querySelectorAll('[data-dropdown-hover]')
      .forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector(
          '[data-dropdown-button]',
        )

        let dropDownList = getDropDownList()

        function getDropDownList() {
          if (!dropDownList)
            dropDownList = dropDownWrapper.querySelector('[data-dropdown-list]')
        }

        let dropDownListItems
        if (dropDownList) {
          dropDownListItems = dropDownList.querySelectorAll(
            '[data-dropdown-item]',
          )
        }
        const dropDownInput = dropDownWrapper.querySelector(
          '[data-dropdown-input]',
        )
        dropDownBtn.addEventListener('click', function (e) {
          try {
            getDropDownList()
            console.log(dropDownList.classList)
            dropDownList.classList.toggle('visible')
            this.classList.toggle('active')
            this.parentElement.classList.toggle('active')
          } catch (e) {
            console.log(e)
          }
        })
        dropDownBtn.addEventListener('mouseenter', function (e) {
          try {
            getDropDownList()
            dropDownList.classList.add('visible')
            this.classList.add('active')
            this.parentElement.classList.add('active')
          } catch (e) {
            console.log(e)
          }
        })

        if (dropDownListItems) {
          dropDownListItems.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
              e.stopPropagation()
              dropDownBtn.innerText = this.innerText
              dropDownBtn.setAttribute('data-value', this.dataset.value)
              dropDownBtn.focus()
              dropDownInput.setAttribute('value', this.dataset.value)
              dropDownList.classList.remove('visible')
              dropDownBtn.classList.remove('active')
              dropDownBtn.parentElement.classList.remove('active')
            })
          })
        }
        document.addEventListener('keydown', function (e) {
          if ('Tab' === e.key || 'Escape' === e.key) {
            dropDownBtn.classList.remove('active')
            dropDownList.classList.remove('visible')
            dropDownBtn.parentElement.classList.remove('active')
          }
        })
      })
    const locationHeaderTitle = document.querySelector(
      '.location-header__title',
    )
    const locationHeaderBody = document.querySelector('.location-header__body')
    if (!locationHeaderBody.classList.contains('hide'))
      locationHeaderTitle.addEventListener('mouseover', function () {
        locationHeaderBody.classList.add('hide')
      })
    const dropdownElements = document.querySelectorAll('[data-dropdown-hover]')
    dropdownElements.forEach((dropdown) => {
      dropdown.addEventListener('mouseout', (event) => {
        const dropDownList = dropdown.querySelector('[data-dropdown-list]')
        const dropDownBtn = dropdown.querySelector('[data-dropdown-button]')
        if (!dropdown.contains(event.relatedTarget))
          if (dropDownList.classList.contains('visible')) {
            dropDownList.classList.remove('visible')
            dropDownBtn.classList.remove('active')
            dropDownBtn.parentElement.classList.remove('active')
          }
      })
    })
    var checkBox = document.getElementById('myCheck')
    checkBox.onclick = function () {
      if (this.checked) document.body.classList.add('dark-theme')
      else document.body.classList.remove('dark-theme')
    }
    var gridRows = document.getElementById('grid-rows')
    var gridColumns = document.getElementById('grid-columns')
    if (gridRows) {
      gridRows.onclick = function () {
        if (!gridRows.classList.contains('active')) {
          gridRows.classList.add('active')
          document.body.classList.add('rows')
          gridColumns.classList.remove('active')
          document.body.classList.remove('columns')
        } else return
      }
      gridColumns.onclick = function () {
        if (!gridColumns.classList.contains('active')) {
          gridColumns.classList.add('active')
          document.body.classList.add('columns')
          gridRows.classList.remove('active')
          document.body.classList.remove('rows')
        } else return
      }
    }
    var cookieAlert = document.querySelector('.cookies')
    if (cookieAlert) {
      const acceptCookies = document.querySelector('.cookies__accept')
      const closeCookies = document.querySelector('.cookies__button-close')
      const cookiesAccepted = getCookie('cookiesAccepted')
      const cookiesRefused = getCookie('cookiesRefused')
      let scrollHandler = function () {
        const screenPosition = 2 * window.innerHeight
        if (window.pageYOffset > screenPosition)
          cookieAlert.classList.add('show')
      }
      if (!cookiesAccepted && !cookiesRefused)
        window.addEventListener('scroll', scrollHandler)
      acceptCookies.addEventListener('click', function () {
        setCookie('cookiesAccepted', 'true', 365)
        cookieAlert.classList.remove('show')
        console.log('cookiesAccepted')
        window.removeEventListener('scroll', scrollHandler)
      })
      closeCookies.addEventListener('click', function () {
        setCookie('cookiesRefused', 'true', 365)
        cookieAlert.classList.remove('show')
        console.log('cookiesRefused')
        window.removeEventListener('scroll', scrollHandler)
      })
      function setCookie(name, value, days) {
        const expires = new Date()
        expires.setTime(expires.getTime() + 24 * days * 60 * 60 * 1e3)
        document.cookie =
          name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/'
      }
      function getCookie(name) {
        const cookieArr = document.cookie.split(';')
        for (let i = 0; i < cookieArr.length; i++) {
          const cookiePair = cookieArr[i].split('=')
          if (name === cookiePair[0].trim())
            return decodeURIComponent(cookiePair[1])
        }
        return null
      }
      if (cookiesAccepted || cookiesRefused)
        cookieAlert.classList.remove('show')
    }
    const inputFile = document.querySelectorAll('.upload-file__input')
    inputFile.forEach(function (el) {
      const inputFileWrapper = el.closest('.upload-file__input-body')
      let textSelector = inputFileWrapper.querySelector(
        '.upload-file__label-text',
      )
      let fileList
      el.addEventListener('change', function (e) {
        fileList = []
        for (let i = 0; i < el.files.length; i++) fileList.push(el.files[i])
        fileList.forEach((file) => {
          uploadFile(file)
        })
      })
      const uploadFile = (file) => {
        if (file.size > 5 * 1024 * 1024) {
          alert('Файл должен быть не более 5 МБ.')
          return
        }
        if (file && file.length > 1) {
          if (file.length <= 4)
            textSelector.textContent = `Выбрано ${file.length} файла`
          if (file.length > 4)
            textSelector.textContent = `Выбрано ${file.length} файлов`
        } else textSelector.textContent = `Завантажено`
      }
    })
    const searchInput = document.querySelector('#search-input')
    const suggestionsList = document.querySelector('#suggestions-list')
    const clearInputBtn = document.querySelector('.search-header__button-clear')
    function clearInput() {
      searchInput.value = ''
      clearInputBtn.classList.remove('visible')
    }
    function selectSuggestion(e) {
      const clickedListItem = e.target
      const selectedSuggestion = clickedListItem.textContent
      searchInput.value = selectedSuggestion
      suggestionsList.innerHTML = ''
    }
    searchInput.addEventListener('input', () => {
      const inputValue = searchInput.value.trim().toLowerCase()
      suggestionsList.innerHTML = ''
      clearInputBtn.classList.add('visible')
      if (!inputValue) return
      function createSuggestionItem(text) {
        const li = document.createElement('li')
        li.textContent = text
        li.addEventListener('click', selectSuggestion)
        return li
      }
      const suggestions = [
        'Погрузчик на склад',
        'Погрузить дрова в селе',
        'Подйомник со стрелой',
        'Автовышки',
        'Сепараторы',
        'Краны',
        'Мусоровозы',
        'Погрузчики',
        'Самосвалы',
        'Экскаваторы',
        'Экскаваторы-погрузчики',
        'Мини-экскаваторы',
        'Бульдозеры',
        'Фронтальные погрузчики',
        'Мини-погрузчики',
        'Автокраны',
        'Телескопические погрузчики',
        'Вилочные погрузчики',
        'Погрузчики-манипуляторы',
        'Гусеничные краны',
        'Складская техника',
      ]
      const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue),
      )
      filteredSuggestions.forEach((suggestion) => {
        const li = createSuggestionItem(suggestion)
        suggestionsList.appendChild(li)
      })
    })
    clearInputBtn.addEventListener('click', clearInput)
    const htmlEl = document.querySelector('html')
    const bgEls = document.querySelectorAll('._bg')
    const observer = new MutationObserver((mutationsList, observer) => {
      mutationsList.forEach((mutation) => {
        if (
          'attributes' === mutation.type &&
          'class' === mutation.attributeName &&
          mutation.target.classList.contains('active') &&
          mutation.target.classList.contains('_bg')
        )
          htmlEl.classList.add('_bg-body')
        else if (
          'attributes' === mutation.type &&
          'class' === mutation.attributeName &&
          !mutation.target.classList.contains('active') &&
          mutation.target.classList.contains('_bg')
        ) {
          const activeEls = document.querySelectorAll('.active._bg')
          if (0 === activeEls.length) htmlEl.classList.remove('_bg-body')
        }
      })
    })
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleMediaQuery = (mediaQuery) => {
      if (mediaQuery.matches)
        bgEls.forEach((el) => {
          observer.observe(el, {
            attributes: true,
          })
        })
      else htmlEl.classList.remove('_bg-body')
    }
    handleMediaQuery(mediaQuery)
    mediaQuery.addEventListener('change', handleMediaQuery)
    const rootEl = document.querySelector('html')
    const langButton = document.querySelector('.lang-header__button')
    const observerRoot = new MutationObserver((mutationsList, observer) => {
      mutationsList.forEach((mutation) => {
        if (
          'attributes' === mutation.type &&
          'class' === mutation.attributeName &&
          mutation.target.classList.contains('active') &&
          mutation.target.classList.contains('lang-header__button')
        )
          rootEl.classList.add('_bg-body')
        else if (
          'attributes' === mutation.type &&
          'class' === mutation.attributeName &&
          !mutation.target.classList.contains('active') &&
          mutation.target.classList.contains('lang-header__button')
        ) {
          const activeEls = document.querySelectorAll(
            '.active.lang-header__button',
          )
          if (0 === activeEls.length) rootEl.classList.remove('_bg-body')
        }
      })
    })
    const minWidthMediaQuery = window.matchMedia('(max-width: 768px)')
    const handleMinWidthMediaQuery = (mediaQuery) => {
      if (mediaQuery.matches)
        observerRoot.observe(langButton, {
          attributes: true,
        })
      else rootEl.classList.remove('_bg-body')
    }
    handleMinWidthMediaQuery(minWidthMediaQuery)
    minWidthMediaQuery.addEventListener('change', handleMinWidthMediaQuery)
    const searchHeader = document.querySelector('.search-header')
    searchHeader.addEventListener('mouseout', (event) => {
      const searchList = document.querySelector(
        '.search-header__suggestions-list',
      )
      if (!searchHeader.contains(event.relatedTarget)) searchList.innerHTML = ''
    })
    const form1 = document.querySelector('.popup__form-1')
    const form2 = document.querySelector('.popup__form-2')
    const form3 = document.querySelector('.popup__form-3')
    const next1 = document.querySelector('.next-1')
    const prev2 = document.querySelector('.prev-2')
    const prev3 = document.querySelector('.prev-3')
    const next2 = document.querySelector('.next-2')
    const step2 = document.querySelector('.popup__step-2')
    const step3 = document.querySelector('.popup__step-3')
    const steps = document.querySelector('.popup__steps')
    next1.onclick = function () {
      form1.classList.add('slide2')
      form2.classList.add('slide2')
      form1.classList.remove('slide3')
      form2.classList.remove('slide3')
      step2.classList.remove('color')
      step3.classList.add('color')
    }
    prev2.onclick = function () {
      form2.classList.remove('slide2')
      form1.classList.add('slide3')
      form2.classList.add('slide3')
      step2.classList.add('color')
      step3.classList.remove('color')
    }
    next2.onclick = function () {
      form2.classList.add('slide4')
      form3.classList.add('slide4')
      form2.classList.remove('slide2')
      form1.classList.remove('slide3')
      form2.classList.remove('slide3')
      steps.classList.add('hide')
    }
    prev3.onclick = function () {
      form3.classList.remove('slide4')
      form2.classList.add('slide2')
      form2.classList.remove('slide4')
      steps.classList.remove('hide')
    }
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.body.classList.add('dark-theme')
      document.getElementById('myCheck').checked = true
    }
    var body = document.querySelector('body')
    var sideButtonWrap = document.querySelector('.side-button__wrap')
    var buttonClose = document.querySelector('.side-button__close')
    var marginRight = parseInt(
      window.getComputedStyle(body).getPropertyValue('margin-right'),
    )
    if (marginRight < 0) marginRight = -marginRight
    sideButtonWrap.style.marginRight = marginRight + 'px'
    window.addEventListener('resize', function () {
      var marginRight = parseInt(
        window.getComputedStyle(body).getPropertyValue('margin-right'),
      )
      if (marginRight < 0) marginRight = -marginRight
      sideButtonWrap.style.marginRight = marginRight + 'px'
    })
    if (buttonClose)
      buttonClose.addEventListener('click', function () {
        sideButtonWrap.classList.add('close')
      })
    const labels = document.querySelectorAll('.radio__label-icon')
    labels.forEach((label) => {
      label.addEventListener('mouseenter', () => {
        const text = label.getAttribute('data-text')
        document.getElementById('text').innerText = text
      })
    })
    const labelStar = document.querySelector('.radio__label-icon._icon-star')
    const labelAttention = document.querySelector(
      '.radio__label-icon._icon-attention',
    )
    const labelText = document.querySelector('#text')
    const answer1 = document.getElementById('answer-first-1')
    const answer2 = document.getElementById('answer-first-2')
    if (answer1) {
      answer1.addEventListener('change', () => {
        if (answer1.checked) {
          labelStar.classList.add('color')
          labelStar.classList.remove('grey')
          labelText.innerHTML = labelStar.dataset.text
          labelAttention.classList.remove('color')
          labelAttention.classList.add('grey')
        }
      })
      answer2.addEventListener('change', () => {
        if (answer2.checked) {
          labelAttention.classList.add('color')
          labelAttention.classList.remove('grey')
          labelText.innerHTML = labelAttention.dataset.text
          labelStar.classList.remove('color')
          labelStar.classList.add('grey')
        }
      })
    }
    const inputElements = document.querySelectorAll('.successfully__sms-code')
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        const inputValue = inputElement.value
        const numericValue = inputValue.replace(/\D/g, '')
        const maxLength = 4
        if (numericValue.length > maxLength)
          inputElement.value = numericValue.slice(0, maxLength)
        else inputElement.value = numericValue
      })
    })
    window['FLS'] = true
    useFilter()
    isWebp()
    menuInit()
    menuInitCategory()
    spollers()
    tabs()
    formFieldsInit({
      viewPass: true,
      autoHeight: false,
    })
    formSubmit()
    digitsCounter()
    useTranslate()
  })()
})()
