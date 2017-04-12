;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-huanzheduancaidanxiaoguotu11" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M678.159445 782.767317 349.38299 782.767317c-91.275231 0-165.249333-73.980103-165.249333-165.217329L184.133657 369.69649c0-91.26323 73.974102-165.243333 165.249333-165.243333l206.529413 0c11.406404 0 20.64054 9.233136 20.64054 20.664543 0 11.405403-9.233136 20.651541-20.64054 20.651541L349.38299 245.769241c-68.487427 0-123.93825 55.476826-123.93825 123.926249l0 247.852497c0 68.400416 55.450823 123.925249 123.93825 123.925249l328.776455 0c68.456423 0 123.93325-55.525832 123.93325-123.925249l0-82.635168c0-11.431407 9.239137-20.63954 20.64554-20.63954 11.3764 0 20.64054 9.208133 20.64054 20.63954l0 82.635168C843.377775 708.787214 769.397672 782.767317 678.159445 782.767317L678.159445 782.767317z"  ></path>' +
    '' +
    '<path d="M893.138898 355.820783c-9.856213 5.739706-22.504769 2.333287-28.189469-7.517925l-46.747752-80.966963C804.907041 415.630142 678.863532 518.953856 530.736305 532.890571c-2.647326 1.246153-19.284373 1.731213-19.284373 1.731213-5.501677 0.16102-10.003231-4.211518-10.003231-9.715195l0-21.326624c0-5.503677 4.498554-10.228259 9.99523-10.496292l10.676314-0.522064c134.831591-10.308268 226.58288-111.347701 232.26658-247.445447l-86.9607 50.267185c-9.881216 5.6897-22.496768 2.308284-28.188469-7.579933-5.715703-9.91222-2.333287-22.491768 7.522926-28.207471l143.140613-82.633168c9.857213-5.678699 22.497768-2.309284 28.189469 7.55493l82.621166 143.133612C906.40253 337.51553 903.021114 350.130082 893.138898 355.820783zM418.826535 503.580964c0-5.503677 4.503554-10.007231 10.007231-10.007231L450.15539 493.573733c5.503677 0 10.007231 4.503554 10.007231 10.007231l0 21.326624c0 5.503677-4.503554 10.007231-10.007231 10.007231l-21.320623 0c-5.503677 0-10.007231-4.503554-10.007231-10.007231L418.827535 503.580964zM336.230372 503.580964c0-5.503677 4.503554-10.007231 10.007231-10.007231l21.29562 0c5.503677 0 10.007231 4.503554 10.007231 10.007231l0 21.326624c0 5.503677-4.503554 10.007231-10.007231 10.007231l-21.29562 0c-5.503677 0-10.007231-4.503554-10.007231-10.007231L336.230372 503.580964z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)