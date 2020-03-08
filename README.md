# 2dCam

### Resources
- [After Effects Scripting Guide](https://blogs.adobe.com/wp-content/blogs.dir/48/files/2012/06/After-Effects-CS6-Scripting-Guide.pdf?file=2012/06/After-Effects-CS6-Scripting-Guide.pdf)
- [JavaScript Tools Guide](https://www.adobe.com/content/dam/acom/en/devnet/scripting/estk/javascript_tools_guide.pdf)
- [Match names PDF](https://www.provideocoalition.com/aftereffects-plugin-match-names/)
- Script for logging every match name of selected layer:
  ```js
  (function () { 
    main();
    function dumpPropTree(rootObj, nestingLevel) {
      var countProps = rootObj.numProperties;
      for (var propIndex = 1; propIndex <= countProps; propIndex++) {
        var prop = rootObj.property(propIndex);
        $.writeln(Array(nestingLevel * 4).join(" ") + "[" + nestingLevel + "-" + propIndex + "] " + "matchName: \"" + prop.matchName + "\", name: \"" + prop.name + "\"");
        if (prop.numProperties > 0)
          dumpPropTree(prop, nestingLevel + 1);
      }
    }
    function main() {
      var activeComp = app.project.activeItem;
      if (activeComp == null) {
        alert("Error: No active composition");
        return;
      }
      var countSelectedLayers = activeComp.selectedLayers.length;
      if (countSelectedLayers == 0) {
        alert("Error: No selected layer(s)");
        return;
      }
      for (selectedLayerIndex = 0; selectedLayerIndex < countSelectedLayers; selectedLayerIndex++) {
        var layer = activeComp.selectedLayers[selectedLayerIndex];
        $.writeln("***************** [ Layer: \"" + layer.name + "\" ] *****************");
        dumpPropTree(layer, 0);
      }
    }
  })();
  ```
