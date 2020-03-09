var win = (this instanceof Panel) ? this : new Window("palette", "2dCam", undefined, { resizeable: true });

icons = {
  screen: "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1A\x00\x00\x00\x1A\b\x06\x00\x00\x00\u00A9JL\u00CE\x00\x00\x01\u0082iCCPsRGB IEC61966-2.1\x00\x00(\u0091u\u0091\u00CBKBA\x14\u0087?5)\u00CA0(\u00A2E\x0B\tkea\x05Q\x04AJX !f\u00D0k\u00A37\x1F\u0081\u00DA\u00E5^#\u00A4m\u00D0V(\u0088\u00DA\u00F4Z\u00D4_P\u00DB\u00A0u\x10\x14E\x10\u00ADZ\u00B4.jSr;7\x05%\u00F2\fg\u00CE7\u00BF\u0099s\u00989\x03\u00D6HZ\u00C9\u00E8u^\u00C8dsZ8\u00E0s\u00CD\u00CD/\u00B8\u00EA_\u00B0\u00D1@;vF\u00A3\u008A\u00AE\u008E\u0087BAj\u00DA\u00E7=\x163\u00DE\u00F6\u009A\u00B5j\u009F\u00FB\u00D7\u009A\u0096\u00E3\u00BA\x02\u0096\x06\u00E11E\u00D5r\u00C2\u0093\u00C2\u00C1\u00F5\u009Cj\u00F2\u008Ep\u009B\u0092\u008A.\x0B\u009F\t{4\u00B9\u00A0\u00F0\u009D\u00A9\u00C7J\u00FCjr\u00B2\u00C4\u00DF&k\u0091\u00B0\x1F\u00AC-\u00C2\u00AEd\x15\u00C7\u00AAXIi\x19ay9\u00EELzM)\u00DF\u00C7|\u0089#\u009E\u009D\u009D\u0091\u00D8%\u00DE\u0089N\u0098\x00>\\L1\u0081\u009F!\u00FA\x19\u0091y\u0088^\x06\u00E8\u0093\x155\u00F2\u00BD\u00BF\u00F9\u00D3\u00ACJ\u00AE\"\u00B3J\x1E\u008D\x15\u0092\u00A4\u00C8\u00E1\x11uM\u00AA\u00C7%&D\u008F\u00CBH\u00937\u00FB\u00FF\u00B7\u00AFzbp\u00A0T\u00DD\u00E1\x03\u00FB\u00B3a\u00BCwC\u00FD6\x14\x0B\u0086\u00F1ud\x18\u00C5c\u00B0=\u00C1e\u00B6\u0092\u00BFz\b\u00C3\x1F\u00A2\x17*\u009A\u00FB\x00\u009C\u009Bp~U\u00D1b\u00BBp\u00B1\x05\x1D\u008FjT\u008B\u00FEJ6qk\"\x01o\u00A7\u00D0<\x0F\u00AD7\u00D0\u00B8X\u00EAYy\u009F\u0093\x07\u0088l\u00C8W]\u00C3\u00DE>\u00F4\u00C8y\u00E7\u00D2\x0FHkg\u00D8X\u00BD\u00A4\u00BC\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00dIDATH\u0089\u00ED\u0094\u00B1\r\u00C0 \f\x04\u00ADLFO\x136f\x11\u009CQ.\x0B\x10G\x02K4\x7F\u00B5\u00F5\u00F7.l3!\u008E\x024\u00C0\u00D9\u00C7\u0081\x16\u0089\x1C\u00A8\t\u0085+\u00E0\u00D1\x00\u00BB\u0092\u00AF\u00AC++\u00F8\x0F\u0089$:/z\u00B2\x0E\u00D6\u00CC\u00C2\u0083m\u00C0HxA\x03\u00B8W[\u0096I`Y\u00DB9\x16\u00F5\u0089\u00A8\u00A7\u008B\u0084H\u00E3\x05ym\u00E8\u0091\u00E2m\u00DB\u00E3\x00\x00\x00\x00IEND\u00AEB`\u0082",
  camera: "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1A\x00\x00\x00\x1A\b\x06\x00\x00\x00\u00A9JL\u00CE\x00\x00\x01\u0082iCCPsRGB IEC61966-2.1\x00\x00(\u0091u\u0091\u00CBKBA\x14\u0087?5)\u00CA0(\u00A2E\x0B\tkea\x05Q\x04AJX !f\u00D0k\u00A37\x1F\u0081\u00DA\u00E5^#\u00A4m\u00D0V(\u0088\u00DA\u00F4Z\u00D4_P\u00DB\u00A0u\x10\x14E\x10\u00ADZ\u00B4.jSr;7\x05%\u00F2\fg\u00CE7\u00BF\u0099s\u00989\x03\u00D6HZ\u00C9\u00E8u^\u00C8dsZ8\u00E0s\u00CD\u00CD/\u00B8\u00EA_\u00B0\u00D1@;vF\u00A3\u008A\u00AE\u008E\u0087BAj\u00DA\u00E7=\x163\u00DE\u00F6\u009A\u00B5j\u009F\u00FB\u00D7\u009A\u0096\u00E3\u00BA\x02\u0096\x06\u00E11E\u00D5r\u00C2\u0093\u00C2\u00C1\u00F5\u009Cj\u00F2\u008Ep\u009B\u0092\u008A.\x0B\u009F\t{4\u00B9\u00A0\u00F0\u009D\u00A9\u00C7J\u00FCjr\u00B2\u00C4\u00DF&k\u0091\u00B0\x1F\u00AC-\u00C2\u00AEd\x15\u00C7\u00AAXIi\x19ay9\u00EELzM)\u00DF\u00C7|\u0089#\u009E\u009D\u009D\u0091\u00D8%\u00DE\u0089N\u0098\x00>\\L1\u0081\u009F!\u00FA\x19\u0091y\u0088^\x06\u00E8\u0093\x155\u00F2\u00BD\u00BF\u00F9\u00D3\u00ACJ\u00AE\"\u00B3J\x1E\u008D\x15\u0092\u00A4\u00C8\u00E1\x11uM\u00AA\u00C7%&D\u008F\u00CBH\u00937\u00FB\u00FF\u00B7\u00AFzbp\u00A0T\u00DD\u00E1\x03\u00FB\u00B3a\u00BCwC\u00FD6\x14\x0B\u0086\u00F1ud\x18\u00C5c\u00B0=\u00C1e\u00B6\u0092\u00BFz\b\u00C3\x1F\u00A2\x17*\u009A\u00FB\x00\u009C\u009Bp~U\u00D1b\u00BBp\u00B1\x05\x1D\u008FjT\u008B\u00FEJ6qk\"\x01o\u00A7\u00D0<\x0F\u00AD7\u00D0\u00B8X\u00EAYy\u009F\u0093\x07\u0088l\u00C8W]\u00C3\u00DE>\u00F4\u00C8y\u00E7\u00D2\x0FHkg\u00D8X\u00BD\u00A4\u00BC\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\u0081IDATH\u0089\u00ED\u0094;\x12\u00C3 \f\x05\u00F52\u00E3\x1B\u0085>\u0097\u00F2\u00F9 '\u00DB4\u00A10\u00B6\x07\f1i\u00B4\u00A5\x10Z\r\x1F\u00999\u00CE_\x00\x02\u0090\x18#\x01\u00A1&J\u00C0\n,\u009D\u008D.\u00DF\u00FD\u00B1\u0096H\u00AF\u00A4\u0090Q\u00C4^@\u00DA\u0088F$e\u009D,\u00C8gz\u008B\u00E8\u00E8\u00AE\u00CD\u00CC\u0094\x13$\u00E9\x17\u00A2\u00A3\u00B8$=F\u008B\u00B7\u00E2\u00A2\x16\u00DE\u00A7+S\u009F\u00F7\u00AC\x0F;m\x04\x05 ^\x1A\u00A1{\"\u00F0\u00ECi\u00D4q\u00EE\u00E1\x03?\u009D8B\u00C4\u00BC<\u00F7\x00\x00\x00\x00IEND\u00AEB`\u0082",
}

res = 'group{ \
  orientation:"row",\
  newCamButton: IconButton{ \
    properties: {style:"toolbutton"}, \
    preferredSize: [30, 30], \
    helpTip: "New 2dCam\\nAlt+click: New 2dCam and output comp", \
  }, \
  newOutputButton: IconButton{ \
    properties: {style:"toolbutton"}, \
    preferredSize: [30, 30], \
    helpTip: "New 2dCam output comp\\nAlt+click: Apply 2dCam output on the selected layer" \
  }, \
}';
win.grp = win.add(res);

win.grp.newCamButton.image = ScriptUI.newImage(icons.camera);
// win.grp.newCamButton.image = ScriptUI.newImage('./icons/camera.png');
win.grp.newOutputButton.image = ScriptUI.newImage(icons.screen);
// win.grp.newOutputButton.image = ScriptUI.newImage('./icons/screen.png');

function newCamDialog(currentComp, alt, ok) {
  var dialog = new Window("dialog", "New 2dCam", undefined, { resizeable: false });

  var width = currentComp.width;
  var height = currentComp.height;
  res = 'group{ \
    orientation:"column", \
    panelGroup: Panel{ \
      orientation:"column", \
      alignChildren:"left", \
      nameGroup: Group{orientation:"row", \
        nameText: StaticText{text:"Name:", justify:"right", preferredSize: [40, 20]}, \
        name: EditText{text:"2dCam", characters:15}, \
      }, \
      widthGroup: Group{ \
        orientation:"row", \
        widthText: StaticText{text:"Width:", justify:"right", preferredSize: [40, 20]},\
        width: EditText{text:"'+width+'", characters:6}, \
      }, \
      heightGroup: Group{ \
        orientation:"row", \
        heightText: StaticText{text:"Height:", justify:"right", preferredSize: [40, 20]}, \
        height: EditText{text:"'+height+'", characters:6}, \
      }, \
      createOutputComp: Checkbox{text:"Create output comp", alignment:"center", value:'+alt+'}, \
    }, \
    buttonsGroup: Group{ \
      orientation:"row", \
      cancelButton: Button{text:"Cancel"}, \
      okButton: Button{text:"OK"}, \
    }, \
  }';

  dialog.grp = dialog.add(res);
  dialog.grp.panelGroup.nameGroup.name.active = true;

  dialog.grp.buttonsGroup.cancelButton.onClick = function() {
    dialog.close();
  }
  dialog.grp.buttonsGroup.okButton.onClick = function() {
    var options = {
      name: dialog.grp.panelGroup.nameGroup.name.text,
      width: dialog.grp.panelGroup.widthGroup.width.text,
      height: dialog.grp.panelGroup.heightGroup.height.text,
      createOutputComp: dialog.grp.panelGroup.createOutputComp,
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
    newCamDialog(currentComp, ScriptUI.environment.keyboardState.altKey, function(options) {
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

win.layout.layout(true);

if (win != null && win instanceof Window) {
  win.center();
  win.show();
}
