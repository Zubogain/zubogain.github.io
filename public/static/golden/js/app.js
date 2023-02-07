var _0x3aaf = [
  'offset',
  'top',
  'removeClass',
  'menu__mobile--active',
  'toggleClass',
  'menu__mobile--change',
  'scrollY',
  'contains',
  'classList',
  'add',
  'remove',
  '#header',
  '#home',
  'position',
  '#anchor-home',
  '#services',
  '#anchor-services',
  '#portfolio',
  '#anchor-portfolio',
  '#about',
  '#contact',
  '#anchor-contact',
  'scrollTop',
  'height',
  'addClass',
  'current',
  'call',
  'exports',
  'defineProperty',
  'undefined',
  'toStringTag',
  'Module',
  '__esModule',
  'default',
  'string',
  'bind',
  'prototype',
  'hasOwnProperty',
  'DOMContentLoaded',
  'getElementById',
  'header',
  'header__scrolled',
  '#header-menu',
  'addEventListener',
  'ready',
  'click',
  'hash',
  'preventDefault',
  'html, body',
]
!(function (e, x) {
  !(function (x) {
    for (; --x; ) e.push(e.shift())
  })(++x)
})(_0x3aaf, 418)
var _0x5ee4 = function (e, x) {
  return _0x3aaf[(e -= 0)]
}
!(function (e) {
  var x = {}
  function n(t) {
    if (x[t]) return x[t].exports
    var _ = (x[t] = { i: t, l: !1, exports: {} })
    return (
      e[t][_0x5ee4('0x0')](_[_0x5ee4('0x1')], _, _[_0x5ee4('0x1')], n),
      (_.l = !0),
      _[_0x5ee4('0x1')]
    )
  }
  ;(n.m = e),
    (n.c = x),
    (n.d = function (e, x, t) {
      n.o(e, x) || Object[_0x5ee4('0x2')](e, x, { enumerable: !0, get: t })
    }),
    (n.r = function (e) {
      typeof Symbol !== _0x5ee4('0x3') &&
        Symbol[_0x5ee4('0x4')] &&
        Object[_0x5ee4('0x2')](e, Symbol[_0x5ee4('0x4')], {
          value: _0x5ee4('0x5'),
        }),
        Object[_0x5ee4('0x2')](e, _0x5ee4('0x6'), { value: !0 })
    }),
    (n.t = function (e, x) {
      if ((1 & x && (e = n(e)), 8 & x)) return e
      if (4 & x && 'object' == typeof e && e && e.__esModule) return e
      var t = Object.create(null)
      if (
        (n.r(t),
        Object[_0x5ee4('0x2')](t, _0x5ee4('0x7'), { enumerable: !0, value: e }),
        2 & x && typeof e != _0x5ee4('0x8'))
      )
        for (var _ in e)
          n.d(
            t,
            _,
            function (x) {
              return e[x]
            }[_0x5ee4('0x9')](null, _),
          )
      return t
    }),
    (n.n = function (e) {
      var x =
        e && e[_0x5ee4('0x6')]
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(x, 'a', x), x
    }),
    (n.o = function (e, x) {
      return Object[_0x5ee4('0xa')][_0x5ee4('0xb')][_0x5ee4('0x0')](e, x)
    }),
    (n.p = ''),
    n((n.s = 0))
})([
  function (e, x, n) {
    'use strict'
    n.r(x)
    var t = n(1)
    n.n(t)
    function _(e, x) {
      window[_0x5ee4('0x1d')] < 1 &&
        !e.classList[_0x5ee4('0x1e')](x) &&
        e[_0x5ee4('0x1f')][_0x5ee4('0x20')](x)
    }
    function o(e, x) {
      window[_0x5ee4('0x1d')] > 1
        ? e[_0x5ee4('0x1f')][_0x5ee4('0x1e')](x) ||
          e.classList[_0x5ee4('0x20')](x)
        : e.classList[_0x5ee4('0x1e')](x) && e.classList[_0x5ee4('0x21')](x)
    }
    function r() {
      var e = $(_0x5ee4('0x22')).height(),
        x = $(_0x5ee4('0x23'))[_0x5ee4('0x24')](),
        n = $(_0x5ee4('0x25')),
        t = $(_0x5ee4('0x26')).position(),
        _ = $(_0x5ee4('0x27')),
        o = $(_0x5ee4('0x28')),
        r = o[_0x5ee4('0x24')](),
        a = $(_0x5ee4('0x29')),
        i = $(_0x5ee4('0x2a')),
        c = i[_0x5ee4('0x24')](),
        u = $('#anchor-about'),
        l = $(_0x5ee4('0x2b')),
        s = l[_0x5ee4('0x24')](),
        f = $(_0x5ee4('0x2c')),
        d = $(document)[_0x5ee4('0x2d')]() + e,
        m =
          $(document)[_0x5ee4('0x2d')]() + $(window)[_0x5ee4('0x2e')]() ==
          $(document)[_0x5ee4('0x2e')]()
      d >= x[_0x5ee4('0x18')] && d < t.top
        ? n[_0x5ee4('0x2f')]('current')
        : n[_0x5ee4('0x19')](_0x5ee4('0x30')),
        d >= t.top && d < r[_0x5ee4('0x18')]
          ? _.addClass(_0x5ee4('0x30'))
          : _[_0x5ee4('0x19')](_0x5ee4('0x30')),
        d >= r.top && d < r[_0x5ee4('0x18')] + o[_0x5ee4('0x2e')]()
          ? a[_0x5ee4('0x2f')](_0x5ee4('0x30'))
          : a[_0x5ee4('0x19')](_0x5ee4('0x30')),
        d >= c[_0x5ee4('0x18')] && d < c[_0x5ee4('0x18')] + i[_0x5ee4('0x2e')]()
          ? u[_0x5ee4('0x2f')](_0x5ee4('0x30'))
          : u[_0x5ee4('0x19')]('current'),
        (d >= s[_0x5ee4('0x18')] &&
          d < s[_0x5ee4('0x18')] + l[_0x5ee4('0x2e')]()) ||
        m
          ? (f[_0x5ee4('0x2f')](_0x5ee4('0x30')), u[_0x5ee4('0x19')]('current'))
          : f[_0x5ee4('0x19')]('current')
    }
    window.addEventListener(_0x5ee4('0xc'), function () {
      var e = document[_0x5ee4('0xd')](_0x5ee4('0xe')),
        x = _0x5ee4('0xf'),
        n = $('#header-mobile-toggle'),
        t = $(_0x5ee4('0x10'))
      _(e, 'animation__linear'),
        o(e, x),
        window[_0x5ee4('0x11')]('scroll', function () {
          _(e, 'animation__linear'), o(e, x), r()
        }),
        r(),
        $(document)[_0x5ee4('0x12')](function () {
          $('a').on(_0x5ee4('0x13'), function (e) {
            '' !== this[_0x5ee4('0x14')] && e[_0x5ee4('0x15')]()
            var x = this.hash
            $(_0x5ee4('0x16')).animate(
              { scrollTop: $(x)[_0x5ee4('0x17')]()[_0x5ee4('0x18')] },
              500,
              function () {
                ;(window.location[_0x5ee4('0x14')] = x),
                  n.removeClass(_0x5ee4('0x1c')),
                  t[_0x5ee4('0x19')](_0x5ee4('0x1a'))
              },
            )
          })
        }),
        n.on(_0x5ee4('0x13'), function () {
          n.toggleClass(_0x5ee4('0x1c')),
            t[_0x5ee4('0x1b')]('menu__mobile--active')
        })
    })
  },
  function (e, x, n) {},
])
