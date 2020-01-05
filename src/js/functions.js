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
      updateMainData(obj.subdata[i],id,val);
    }
  }
  return null;
}

function addNewNote(obj,id,val) {
  let tempObj = {
    title: val.title,
    noteContent: val.content,
    color: "#000",
    pid: id,
    id: "xyz001",
    subdata: []
  };
  if (obj.id === id) {
    obj.subdata.push(tempObj)
  }
  else {
    for (let i=0;i<obj.subdata.length;i++) {
      addNewNote(obj.subdata[i],id,val);
    }
  }
  return null;
}

function deleteSubNote(obj,id,index) {
  if (obj.id === id) {
    obj.subdata.splice(index,1);
  }
  else {
    for (let i=0;i<obj.subdata.length;i++) {
      deleteSubNote(obj.subdata[i],id,index);
    }
  }
}


export {
  touchAngle,
  traverseObj,
  updateMainData,
  addNewNote,
  deleteSubNote
};
