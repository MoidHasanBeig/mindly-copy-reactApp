function initAngle(e) {

  let angle = Math.atan2(e.touches[0].clientY - 406, e.touches[0].clientX - 186) * (180 / Math.PI);
  if (angle < 0) {
    angle += 360;
  }
  return angle;
}

export default initAngle;
