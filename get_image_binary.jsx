var win = new Window("palette", "Binary Image Encoder", undefined, { resizeable: true });

res = 'group{orientation:"column", alignChildren:"center",\
  filePath: EditText{text:"File path", characters:75},\
  button: Button{text:"Get binary"},\
  output: EditText{text:"Output", multiline:true, characters:75},\
}';
win.grp = win.add(res);

win.grp.button.onClick = function() {

  var f = File(win.grp.filePath.text);
  f.encoding = 'BINARY';
  f.open('e');
  var binary = f.read().toSource().replace('(new String("', '').replace(/\")\)$/, "");
  win.grp.output.text = binary;
}

win.layout.layout(true);
win.center();
win.show();
