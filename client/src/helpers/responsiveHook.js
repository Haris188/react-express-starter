import React from 'react'

function debounce(fn, ms) {
  let timer
  return (_) => {
    clearTimeout(timer)
    timer = setTimeout((_) => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

function useDimensions() {
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return (_) => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
    
  })
  return ({
        onMobile: dimensions.width <= 480,
        onTablet: dimensions.width <= 900 && dimensions.width > 480,
        onDesktop: dimensions.width > 900
    })
}

export default useDimensions;


