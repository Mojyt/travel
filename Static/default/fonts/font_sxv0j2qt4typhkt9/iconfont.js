;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zhong-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d=""  ></path>' +
    '' +
    '<path d="M511.747 80.304c-243.898 0-441.617 197.717-441.617 441.617s197.718 441.617 441.617 441.617c243.898 0 441.617-197.717 441.617-441.617s-197.719-441.617-441.617-441.617zM784.047 794.22c-35.385 35.385-76.574 63.159-122.423 82.553-47.439 20.065-97.866 30.24-149.877 30.24-52.013 0-102.437-10.174-149.877-30.24-45.851-19.392-87.039-47.167-122.423-82.553s-63.159-76.574-82.553-122.423c-20.066-47.44-30.24-97.867-30.24-149.877 0-52.013 10.174-102.438 30.24-149.877 19.392-45.851 47.167-87.039 82.553-122.423s76.574-63.159 122.423-82.553c47.439-20.065 97.866-30.24 149.877-30.24s102.438 10.174 149.877 30.24c45.851 19.392 87.039 47.167 122.423 82.553 35.385 35.385 63.159 76.574 82.553 122.423 20.065 47.439 30.24 97.866 30.24 149.877 0 52.013-10.174 102.438-30.24 149.877-19.392 45.849-47.168 87.037-82.553 122.423z"  ></path>' +
    '' +
    '<path d="M732.554 493.659h-192.547v-247.749c0-15.61-12.654-28.26-28.26-28.26-15.61 0-28.26 12.654-28.26 28.26v304.27h249.070c15.61 0 28.26-12.654 28.26-28.26 0.001-15.605-12.652-28.259-28.259-28.259z"  ></path>' +
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