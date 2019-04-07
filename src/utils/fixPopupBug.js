export function fixBgScroll (v, name) {
  console.log(v)
  console.log(name)
  let listener = function (event) {
    event.preventDefault()
  }
  if (v) {
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'
    // document.body.style.position = 'fixed'
    // document.html.style.height = '100vh'
    // document.html.style['overflow-y'] = 'hidden'
    document.body.addEventListener('touchmove', listener, false)
  } else {
    document.body.style.height = 'auto'
    // document.body.style['overflow-y'] = 'auto'
    document.body.style.overflow = 'auto'
    // document.body.style.position = 'static'
    // document.html.style.height = 'auto'
    // document.html.style['overflow-y'] = 'auto'
    document.body.removeEventListener('touchmove', listener, false)
  }
}
