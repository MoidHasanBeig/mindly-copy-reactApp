function initAngle(e) {

  let angle = Math.atan2(e.clientY - 300, e.clientX - 656) * (180 / Math.PI);
  if (angle < 0) {
    angle += 360;
  }
  console.log(angle);
  return angle;
}

export default initAngle;
