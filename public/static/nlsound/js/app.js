!(function (e) {
  var t = {}
  function o(n) {
    if (t[n]) return t[n].exports
    var r = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports
  }
  ;(o.m = e),
    (o.c = t),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (o.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t]
            }.bind(null, r),
          )
      return n
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return o.d(t, 'a', t), t
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (o.p = ''),
    o((o.s = 0))
})([
  function (e, t, o) {
    'use strict'
    o.r(t)
    o(1)
    function n(e, t) {
      window.scrollY < 1 && !e.classList.contains(t) && e.classList.add(t)
    }
    function r(e, t) {
      window.scrollY > 1
        ? e.classList.contains(t) || e.classList.add(t)
        : e.classList.contains(t) && e.classList.remove(t)
    }
    function i() {
      var e = $('#header').height(),
        t = $('#home').position(),
        o = $('#anchor-home'),
        n = $('#services').position(),
        r = $('#anchor-services'),
        i = $('#portfolio'),
        a = i.position(),
        s = $('#anchor-portfolio'),
        c = $('#about'),
        l = c.position(),
        u = $('#anchor-about'),
        d = $('#contact'),
        f = d.position(),
        p = $('#anchor-contact'),
        h = $(document).scrollTop() + e,
        m = $(document).scrollTop() + $(window).height() == $(document).height()
      h >= t.top && h < n.top
        ? o.addClass('current')
        : o.removeClass('current'),
        h >= n.top && h < a.top
          ? r.addClass('current')
          : r.removeClass('current'),
        h >= a.top && h < a.top + i.height()
          ? s.addClass('current')
          : s.removeClass('current'),
        h >= l.top && h < l.top + c.height()
          ? u.addClass('current')
          : u.removeClass('current'),
        (h >= f.top && h < f.top + d.height()) || m
          ? (p.addClass('current'), u.removeClass('current'))
          : p.removeClass('current')
    }
    window.addEventListener('DOMContentLoaded', function () {
      var e = document.getElementById('header'),
        t = $('#header-mobile-toggle'),
        o = $('#header-menu')
      n(e, 'animation__linear'),
        r(e, 'header__scrolled'),
        window.addEventListener('scroll', function () {
          n(e, 'animation__linear'), r(e, 'header__scrolled'), i()
        }),
        i(),
        $(document).ready(function () {
          $('a').on('click', function (e) {
            '' !== this.hash && e.preventDefault()
            var n = this.hash
            $('html, body').animate(
              { scrollTop: $(n).offset().top },
              500,
              function () {
                ;(window.location.hash = n),
                  t.removeClass('menu__mobile--change'),
                  (function (e) {
                    e.removeClass('menu__mobile--active')
                  })(o)
              },
            )
          })
        }),
        t.on('click', function () {
          t.toggleClass('menu__mobile--change'),
            (function (e) {
              e.toggleClass('menu__mobile--active')
            })(o)
        })
    })
  },
  function (e, t, o) {},
])
