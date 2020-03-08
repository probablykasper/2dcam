var myPanel = (this instanceof Panel) ? this : new Window("palette", "Cambox", undefined, { resizeable: true });

res = "group{orientation:'row',\
  groupTwo: Panel{orientation:'row',\
    deleteCompButton: Button{text:'+'},\
    deleteText: StaticText{text:'Add Cambox'},\
  },\
}";

myPanel.grp = myPanel.add(res);

// Defaults
myPanel.grp.groupTwo.deleteCompButton.size = [25, 25];

// Add Cambox
myPanel.grp.groupTwo.deleteCompButton.onClick = function () {
  if (app.project.activeItem == undefined || app.project.activeItem == null) {
    alert("Please select a comp to delete");
    return false;
  } else {
    // delete comp
    currentComp = app.project.activeItem;

    // ask for name, width, height then apply preset.
    var camWidth = 1920;
    var camHeight = 1080;
    var strokeWidth = 20; // 50 * width or height, whichever is lowest

    // app.project.activeItem.remove();
    var shapeLayer = app.project.activeItem.layers.addShape();
    shapeLayer.name = 'Cambox';
    shapeLayer.guideLayer = true;

    var contents = shapeLayer.property('ADBE Root Vectors Group');

    // rectangle
    var rectangle = contents.addProperty("ADBE Vector Shape - Rect");
    rectangle.name = 'Rectangle';
    rectangle.property('ADBE Vector Rect Size').setValue([camWidth, camHeight]);
    rectangle.property('ADBE Vector Rect Size');

    // stroke
    var stroke = contents.addProperty('ADBE Vector Graphic - Stroke');
    stroke.name = 'Stroke';
    stroke.property('ADBE Vector Stroke Width').setValue(strokeWidth);

    // offset stroke
    var offsetPaths = contents.addProperty('ADBE Vector Filter - Offset');
    offsetPaths.name = 'Offset Paths';
    offsetPaths.property('ADBE Vector Offset Amount').expression = '-content("Stroke").strokeWidth/2';

    // invert effect
    var effects = shapeLayer.property('ADBE Effect Parade');
    effects.addProperty('ADBE Invert');

    // set to adjustment layer, for invert effect
    shapeLayer.adjustmentLayer = true;
  }
}

myPanel.layout.layout(true);

if (myPanel != null && myPanel instanceof Window) {
  myPanel.center();
  myPanel.show();
}

// log all match names of selected layer (for example "ADBE Vector Stroke Width"):

// (function () { // wrap entire script in an anonymous function to create a private scope within AE's global namespace   
//   main();
//   function dumpPropTree(rootObj, nestingLevel) {
//     var countProps = rootObj.numProperties;
//     for (var propIndex = 1; propIndex <= countProps; propIndex++) {
//       var prop = rootObj.property(propIndex);
//       $.writeln(Array(nestingLevel * 4).join(" ") + "[" + nestingLevel + "-" + propIndex + "] " + "matchName: \"" + prop.matchName + "\", name: \"" + prop.name + "\"");
//       if (prop.numProperties > 0)
//         dumpPropTree(prop, nestingLevel + 1);
//     }
//   }
//   function main() {
//     var activeComp = app.project.activeItem;
//     if (activeComp == null) {
//       alert("Error: No active composition");
//       return;
//     }
//     var countSelectedLayers = activeComp.selectedLayers.length;
//     if (countSelectedLayers == 0) {
//       alert("Error: No selected layer(s)");
//       return;
//     }
//     for (selectedLayerIndex = 0; selectedLayerIndex < countSelectedLayers; selectedLayerIndex++) {
//       var layer = activeComp.selectedLayers[selectedLayerIndex];
//       $.writeln("***************** [ Layer: \"" + layer.name + "\" ] *****************");
//       dumpPropTree(layer, 0);
//     }
//   }
// })();   // end of anonymous function that encapsulates entire script
