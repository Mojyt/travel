;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-geren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M816.714414 656.071921l-6.239537-4.500649c-11.456198-8.182999-27.413046-5.625812-35.698332 5.830387-8.285286 11.456198-5.625812 27.413046 5.830387 35.698332l6.444111 4.602937c93.08161 66.282289 145.555089 167.649186 155.988413 302.770952 1.125162 13.297373 12.172211 22.707821 25.265008 22.707821 0.716012 0 1.432025 0 2.148037-0.102287 14.013385-1.125162 24.548996-14.115673 23.423834-28.231346C982.215563 845.610628 922.684247 731.560084 816.714414 656.071921z"  ></path>' +
    '' +
    '<path d="M514.04575 1.022875C325.529917 1.022875 172.303266 152.203776 172.303266 338.060134c0 105.867546 49.916292 200.483468 127.552492 262.265108C147.958845 671.619618 42.807312 824.130257 29.509939 996.382379c-1.125162 14.115673 9.410449 26.390171 23.526121 27.515333 0.716012 0 1.329737 0.102287 2.04575 0.102287 13.195085 0 24.446709-10.228748 25.469583-23.628409 12.581361-162.227949 115.789432-304.816702 263.083408-363.325142 2.250325-0.920587 3.989212-2.352612 5.728099-3.784637 48.893417 26.697033 105.049246 41.937868 164.785136 41.937868 188.413545 0 341.742483-151.180901 341.742483-337.037259C855.788233 152.203776 702.459295 1.022875 514.04575 1.022875zM514.04575 624.055938c-160.284487 0-290.598741-128.268505-290.598741-285.893517C223.447008 180.435121 353.761263 52.166617 514.04575 52.166617 674.330237 52.166617 804.644491 180.435121 804.644491 338.060134 804.644491 495.787434 674.330237 624.055938 514.04575 624.055938z"  ></path>' +
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