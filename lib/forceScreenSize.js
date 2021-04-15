const insideInstalledApp = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  window.navigator.standalone === true

const forceScreenSize = (width, height) => {
  if (insideInstalledApp()) {
    window.addEventListener('resize', () => {
      window.resizeTo(width, height)
    })
  }
}

export default forceScreenSize
