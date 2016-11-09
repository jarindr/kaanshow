export function checkRectIntersection (rectA, rectB) {
  return !(rectA.top > rectB.bottom ||
    rectA.bottom < rectB.top ||
    rectA.left > rectB.right ||
    rectA.right < rectB.left)
}

export function checkIfInView (rect) {
  const windowRect = {
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
    left: 0
  }
  return checkRectIntersection(rect, windowRect)
}
