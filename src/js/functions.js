function touchAngle(e) {

  let angle = Math.atan2(e.touches[0].clientY - 406, e.touches[0].clientX - 186) * (180 / Math.PI);
  if (angle < 0) {
    angle += 360;
  }
  return angle;
}

function traverseObj(obj,id) {
  if (obj.id === id) {
    return obj;
  }
  else {
    for (let i=0;i<obj.subdata.length;i++) {
      let found = traverseObj(obj.subdata[i],id);
      if(found) {
        return found;
      }
    }
  }
  return null;
}

function updateMainData(obj,id,val) {
  if (obj.id === id) {
    obj.title=val.title;
    obj.noteContent=val.content;
  }
  else {
    for (let i=0;i<obj.subdata.length;i++) {
      let found = updateMainData(obj.subdata[i],id,val);
    }
  }
  return null;
}


export { touchAngle,traverseObj,updateMainData };
