let cancelActiveScroll = () => {}

function scrollToPosition(targetY) {
  cancelActiveScroll()

  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  const endY = Math.min(Math.max(targetY, 0), maxScroll)
  const startY = window.scrollY
  const distance = endY - startY

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || Math.abs(distance) < 1) {
    window.scrollTo(0, endY)
    return
  }

  const duration = Math.min(1200, Math.max(500, Math.abs(distance) * 0.4))
  let frame = 0
  let startTime

  const cleanup = () => {
    window.cancelAnimationFrame(frame)
    window.removeEventListener('wheel', cancel, { passive: true })
    window.removeEventListener('touchstart', cancel)
    window.removeEventListener('keydown', cancelOnScrollKey)
    if (cancelActiveScroll === cancel) cancelActiveScroll = () => {}
  }

  const cancel = () => cleanup()
  const cancelOnScrollKey = (event) => {
    if (['ArrowDown', 'ArrowUp', 'End', 'Home', 'PageDown', 'PageUp', ' '].includes(event.key)) {
      cancel()
    }
  }

  const animate = (time) => {
    if (startTime === undefined) startTime = time
    const progress = Math.min((time - startTime) / duration, 1)
    const easedProgress = progress < 0.5
      ? 4 * progress ** 3
      : 1 - ((-2 * progress + 2) ** 3) / 2

    window.scrollTo(0, startY + distance * easedProgress)

    if (progress < 1) {
      frame = window.requestAnimationFrame(animate)
    } else {
      cleanup()
    }
  }

  cancelActiveScroll = cancel
  window.addEventListener('wheel', cancel, { passive: true })
  window.addEventListener('touchstart', cancel, { passive: true })
  window.addEventListener('keydown', cancelOnScrollKey)
  frame = window.requestAnimationFrame(animate)
}

export function scrollToElement(element) {
  if (!element) return
  const top = element.getBoundingClientRect().top + window.scrollY
  const scrollMarginTop = Number.parseFloat(window.getComputedStyle(element).scrollMarginTop) || 0
  scrollToPosition(top - scrollMarginTop)
}

export function scrollToTop() {
  scrollToPosition(0)
}
