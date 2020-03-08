var win = (this instanceof Panel) ? this : new Window("palette", "2dCam", undefined, { resizeable: true });

icons = {
  screen: "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x16\x00\x00\x00\x16\b\x06\x00\x00\x00\u00C4\u00B4l;\x00\x00\x01\u0081iCCPsRGB IEC61966-2.1\x00\x00(\u0091u\u0091\u00CF+DQ\x14\u00C7?3C#\u0086Q,,,&\x06\x1B4FMl\u0094\u0091P\u0093\u00A61\u00CA`3\u00F3\u00E6\u0097\u009A\x1F\u00AF\u00F7F\u0092\u00AD\u00B2U\u0094\u00D8\u00F8\u00B5\u00E0/`\u00AB\u00AC\u0095\"R\u00B2\u00B2\u00B0&6\u00E89oF\u00CD$sn\u00E7\u009E\u00CF\u00FD\u00DE{N\u00F7\u009E\x0B\u00D6pF\u00C9\u00EA5\x1E\u00C8\u00E6\nZh\u00C2\u00EF\u009A\u008B\u00CC\u00BB\u00EC\u00CF\u00D8\u00A8\u00A3\u0089\x1E:\u00A3\u008A\u00AE\u008E\x06\u0083\x01\u00AA\u00DA\u00C7\x1D\x163\u00DE\u00F4\u0099\u00B5\u00AA\u009F\u00FB\u00D7\x1A\u00E2\t]\x01K\u009D\u00F0\u0088\u00A2j\x05\u00E1I\u00E1\u00C0JA5y[\u00B8UIG\u00E3\u00C2\u00A7\u00C2\u00BD\u009A\\P\u00F8\u00D6\u00D4c%~19U\u00E2/\u0093\u00B5ph\f\u00AC\u00CD\u00C2\u00AET\x05\u00C7*XIkYay9\u00EElfY\u00F9\u00BD\u008F\u00F9\x12G\"7;#\u00B1C\u00BC\x1D\u009D\x10\x13\u00F8q1\u00C58c\u00F8\x18`Xf\x1F}x\u00E9\u0097\x15U\u00F2=\u00C5\u00FCi\u00F2\u0092\u00AB\u00C8\u00AC\u00B2\u008A\u00C6\x12)\u00D2\x14\u00E8\x15uY\u00AA'$&EO\u00C8\u00C8\u00B0j\u00F6\u00FFo_\u00F5\u00E4\u00A0\u00B7T\u00DD\u00E1\u0087\u00DA'\u00C3x\u00EB\x02\u00FB\x16|o\x1A\u00C6\u00E7\u00A1a|\x1F\u0081\u00ED\x11.r\u00E5\u00FC\u00FC\x01\f\u00BD\u008B\u00BEY\u00D6\u00DC\u00FB\u00E0\\\u0087\u00B3\u00CB\u00B2\x16\u00DB\u0081\u00F3\rh{P\u00A3Z\u00B4(\u00D9\u00C4\u00AD\u00C9$\u00BC\u009E@c\x04Z\u00AE\u00A1~\u00A1\u00D4\u00B3\u00DF}\u008E\u00EF!\u00BC&_u\x05\u00BB{\u00D0-\u00E7\u009D\u008B?L\u00F1g\u00DA\u00922\u00E21\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\u0087IDAT8\u008D\u00ED\u00D3\u00B1\r\u00830\x10F\u00E1wtT\u00AC\u0081\u0098\u0082.cd6\u00C6\u00A0\u00F3\x18\u00AC\u0080;*\u00CA\u009F\u00C6\u0091N\u0089\"\x05\u0083\x10\u0091\u00FC\u00DA\u0093?\u00D9\u0092\x0FJ\u00FF\u009F\u00A4NRT~QR\u00F7\u00F2\u00CC\u00C1\x03\u00F0\x00&@;\u00EFe@\x0B\u008Cf\u00F6\x04\u00A8\u00DC\u00B0\x01\u00D6\f\u0094tfM\x06\u00EF\u00F0\u00A9\x15\u00F8Zx\x01j\u00DC\x17\u00DC\u0091\u00A5\u00B3\u00CB\u00C7$-\u00C8|`Af\u00BF ?%\u00A9w@\u009F\u00F1\u00A2\u00AFppp8\r.\u00DD\u00B3\r\x1E\x0E\u00B6\u00BA\u0095\u0086\u00E1*\x00\x00\x00\x00IEND\u00AEB`\u0082",
  camera: "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x16\x00\x00\x00\x16\b\x06\x00\x00\x00\u00C4\u00B4l;\x00\x00\x01\u0081iCCPsRGB IEC61966-2.1\x00\x00(\u0091u\u0091\u00CF+DQ\x14\u00C7?3C#\u0086Q,,,&\x06\x1B4FMl\u0094\u0091P\u0093\u00A61\u00CA`3\u00F3\u00E6\u0097\u009A\x1F\u00AF\u00F7F\u0092\u00AD\u00B2U\u0094\u00D8\u00F8\u00B5\u00E0/`\u00AB\u00AC\u0095\"R\u00B2\u00B2\u00B0&6\u00E89oF\u00CD$sn\u00E7\u009E\u00CF\u00FD\u00DE{N\u00F7\u009E\x0B\u00D6pF\u00C9\u00EA5\x1E\u00C8\u00E6\nZh\u00C2\u00EF\u009A\u008B\u00CC\u00BB\u00EC\u00CF\u00D8\u00A8\u00A3\u0089\x1E:\u00A3\u008A\u00AE\u008E\x06\u0083\x01\u00AA\u00DA\u00C7\x1D\x163\u00DE\u00F4\u0099\u00B5\u00AA\u009F\u00FB\u00D7\x1A\u00E2\t]\x01K\u009D\u00F0\u0088\u00A2j\x05\u00E1I\u00E1\u00C0JA5y[\u00B8UIG\u00E3\u00C2\u00A7\u00C2\u00BD\u009A\\P\u00F8\u00D6\u00D4c%~19U\u00E2/\u0093\u00B5ph\f\u00AC\u00CD\u00C2\u00AET\x05\u00C7*XIkYay9\u00EElfY\u00F9\u00BD\u008F\u00F9\x12G\"7;#\u00B1C\u00BC\x1D\u009D\x10\x13\u00F8q1\u00C58c\u00F8\x18`Xf\x1F}x\u00E9\u0097\x15U\u00F2=\u00C5\u00FCi\u00F2\u0092\u00AB\u00C8\u00AC\u00B2\u008A\u00C6\x12)\u00D2\x14\u00E8\x15uY\u00AA'$&EO\u00C8\u00C8\u00B0j\u00F6\u00FFo_\u00F5\u00E4\u00A0\u00B7T\u00DD\u00E1\u0087\u00DA'\u00C3x\u00EB\x02\u00FB\x16|o\x1A\u00C6\u00E7\u00A1a|\x1F\u0081\u00ED\x11.r\u00E5\u00FC\u00FC\x01\f\u00BD\u008B\u00BEY\u00D6\u00DC\u00FB\u00E0\\\u0087\u00B3\u00CB\u00B2\x16\u00DB\u0081\u00F3\rh{P\u00A3Z\u00B4(\u00D9\u00C4\u00AD\u00C9$\u00BC\u009E@c\x04Z\u00AE\u00A1~\u00A1\u00D4\u00B3\u00DF}\u008E\u00EF!\u00BC&_u\x05\u00BB{\u00D0-\u00E7\u009D\u008B?L\u00F1g\u00DA\u00922\u00E21\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00~IDAT8\u008D\u00ED\u00D3\u00BB\r\u00C20\x14@\u00D1g\u00EA0\r\fB\u0096\u0080\u009D2\x13\u008C\u0090,\x01\u00FDI\u0081@\u0096\"\x119q\x01\"\u00B7\u00B5t,\x7F^\u00C4\u00D6o\u0087\x16\u0083\u00B2\x06\u00B4sp)\u00FA\u00C6\u00E7\u00E0\u00C5e\u00C6\x1E\x17\u00DC\u00AA\u00C08\u00A0\u00C3=\u00DF,\u00BD\u00E0\x15O4)\u00A5\u0094v5\u00C1\u00BC\u00FF\u0084\u008F\x11\u00D1E\u00C4c\u00B2\u00B2\u00E6KdF\u00833\u00AE9\u00BCt@\u00FA\u008Fg\u00F1\x1C\u00E9\u00BE\x14\u00C5\u00A9\u00C2Un}[#\x1Fx\u00CB\u008F*\u00DD\u00AF\u00C9\x00\x00\x00\x00IEND\u00AEB`\u0082",
}

res = 'group{orientation:"row",\
  newCamButton: IconButton{properties:{style:"toolbutton"}}, helpTip:"New 2dCam",\
  newOutputButton: IconButton{properties:{style:"toolbutton"}}, helpTip:"Create 2dCam output composition. Alt+click to enable 2dCam Output selected composition layer"},\
}';

win.grp = win.add(res);
win.grp.newCamButton.image = ScriptUI.newImage(cameraIcon);
// win.grp.newCamButton.image = ScriptUI.newImage('./icons/camera.png');
win.grp.newCamButton.size = [25, 25];
win.grp.newOutputButton.image = ScriptUI.newImage(screenIcon);
// win.grp.newOutputButton.image = ScriptUI.newImage('./icons/screen.png');
win.grp.newOutputButton.size = [25, 25];

var createOutputComp = true;
function newCamDialog(currentComp, cancel, ok) {
  var dialog = new Window("dialog", "New 2dCam", undefined, { resizeable: false });

  var width = currentComp.width;
  var height = currentComp.height;
  res = 'group{orientation:"column",\
    panelGroup: Panel{orientation:"column", alignChildren:"left",\
      nameGroup: Group{orientation:"row",\
        nameText: StaticText{text:"Name:", justify:"right", preferredSize: [40, 20]},\
        name: EditText{text:"A", characters:15},\
      },\
      widthGroup: Group{orientation:"row",\
        widthText: StaticText{text:"Width:", justify:"right", preferredSize: [40, 20]},\
        width: EditText{text:"'+width+'", characters:6},\
      },\
      heightGroup: Group{orientation:"row",\
        heightText: StaticText{text:"Height:", justify:"right", preferredSize: [40, 20]},\
        height: EditText{text:"'+height+'", characters:6},\
      },\
      createOutputCompGroup: Group{orientation:"row",\
        createOutputComp: Checkbox{value:'+createOutputComp+'},\
        createOutputCompText: StaticText{text:"Height:"},\
      },\
    },\
    buttonsGroup: Group{orientation:"row",\
      cancelButton: Button{text:"Cancel"},\
      okButton: Button{text:"OK"},\
    },\
  }';

  dialog.grp = dialog.add(res);

  dialog.grp.buttonsGroup.cancelButton.onClick = function() {
    dialog.close();
    cancel();
  }
  dialog.grp.buttonsGroup.okButton.onClick = function() {
    var options = {
      name: dialog.grp.panelGroup.nameGroup.name.text,
      width: dialog.grp.panelGroup.widthGroup.width.text,
      height: dialog.grp.panelGroup.heightGroup.height.text,
    };
    dialog.close();
    ok(options);
  }

  dialog.layout.layout(true);
  dialog.center();
  dialog.show();
}

// New 2dCam
win.grp.newCamButton.onClick = function() {
  if (app.project.activeItem == undefined || app.project.activeItem == null) {
    alert('Please select a composition');
  } else {
    currentComp = app.project.activeItem;

    // ask for name, width, height then apply preset.
    newCamDialog(currentComp, function() {
      
    }, function(options) {
      var camWidth = options.width;
      var camHeight = options.height;
      var strokeWidth = Math.ceil(Math.min(camWidth/40, camHeight/40));

      app.beginUndoGroup('New 2dCam');

      var shapeLayer = app.project.activeItem.layers.addShape();
      shapeLayer.name = '2dCam';
      shapeLayer.guideLayer = true;
      shapeLayer.blendingMode = BlendingMode.DIFFERENCE;

      var shapeContents = shapeLayer.property('ADBE Root Vectors Group');

      var rectangle = shapeContents.addProperty('ADBE Vector Shape - Rect');
      rectangle.name = 'Rectangle';
      rectangle.property('ADBE Vector Rect Size').setValue([camWidth, camHeight]);

      var stroke = shapeContents.addProperty('ADBE Vector Graphic - Stroke');
      stroke.name = 'Stroke';
      stroke.property('ADBE Vector Stroke Color').setValue([255,255,255]);
      stroke.property('ADBE Vector Stroke Width').setValue(strokeWidth);

      var mask = shapeLayer.Masks.addProperty('Mask');
      mask.name = 'Mask';
      mask.locked = true;
      mask.property('maskShape').expression =
        'w = content("Rectangle").size[0]/2;'+
        'h = content("Rectangle").size[1]/2;'+
        'createPath(points = [[-w,-h], [w,-h], [w,h], [-w,h]])';

      app.endUndoGroup();
    });
  }
}

// New 2dCam output
win.grp.newOutputButton.onClick = function() {
  if (app.project.activeItem == undefined || app.project.activeItem == null) {
    alert('Please select a composition');
  } else {
    currentComp = app.project.activeItem;

    // ask for name, width, height then apply preset.
    var camWidth = 1920;
    var camHeight = 1080;
    var strokeWidth = Math.ceil(Math.min(camWidth/40, camHeight/40));

    var shapeLayer = app.project.activeItem.layers.addShape();
    shapeLayer.name = '2dCam';
    shapeLayer.guideLayer = true;
    shapeLayer.blendingMode = BlendingMode.DIFFERENCE;

    var shapeContents = shapeLayer.property('ADBE Root Vectors Group');

    var rectangle = shapeContents.addProperty('ADBE Vector Shape - Rect');
    rectangle.name = 'Rectangle';
    rectangle.property('ADBE Vector Rect Size').setValue([camWidth, camHeight]);

    var stroke = shapeContents.addProperty('ADBE Vector Graphic - Stroke');
    stroke.name = 'Stroke';
    stroke.property('ADBE Vector Stroke Color').setValue([255,255,255]);
    stroke.property('ADBE Vector Stroke Width').setValue(strokeWidth);

    var mask = shapeLayer.Masks.addProperty('Mask');
    mask.name = 'Mask';
    mask.locked = true;
    mask.property('maskShape').expression =
      'w = content("Rectangle").size[0]/2;'+
      'h = content("Rectangle").size[1]/2;'+
      'createPath(points = [[-w,-h], [w,-h], [w,h], [-w,h]])';
  }
}

win.layout.layout(true);

if (win != null && win instanceof Window) {
  win.center();
  win.show();
}
