export const insideInstalledApp = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  window.navigator.standalone === true

export const forceScreenSize = (width, height) => {
  if (insideInstalledApp()) {
    window.addEventListener('resize', () => {
      window.resizeTo(width, height)
    })
  }
}
