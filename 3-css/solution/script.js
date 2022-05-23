function changeBackground () {
  // They should be able to get the value of the select by now
  const color = document.querySelector('#backgroundColor').value;
  
  // This should be available for students to see how to update CSS
  document.body.style.backgroundColor = color;
}

function updateFontSize () {
  // This is something they can do based on exercices on Calculator
  const fontSize = parseFloat(document.querySelector('#fontSize').value);
  // The tricky part here is to do a querySelector on their own
  // And play with concatenation to add the 'px' unit in the string
  document.querySelector('#fontSizeTitle').style.fontSize = fontSize + 'px';
}
function colorKeyword () {
  const keywords = "aqua black blue fuchsia gray green lime maroon navy olive purple red silver teal white yellow aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkturquoise darkviolet deeppink deepskyblue dimgray dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy navyblue oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen";
    
  /* SOLUTION */
  const color = document.querySelector('#colorWord').value;
  if (keywords.includes(color)) {
    document.body.style.backgroundColor = color;
  } else {
    document.body.style.backgroundColor = 'red';
  }
}

function changeBoxColor(){
  /* SOLUTION (SHARED) */
  let coloredBox = document.querySelector('#coloredBox');
  let color = coloredBox.style.backgroundColor;
  
  /* SOLUTION SIMPLE */
    if(color === "red") {
    coloredBox.style.backgroundColor = "green";
  } else if (color === "green"){
    coloredBox.style.backgroundColor = "blue";
  } else if(color === "blue"){
    coloredBox.style.backgroundColor = "red";
  }
  
  /* SOLUTION ADVANCED */
  var colors = ["red","green", "blue"];
  var colorIndex = colors.indexOf(color);
  colorIndex++;
  if(colorIndex > (colors.length - 1)) colorIndex = 0;
  coloredBox.style.backgroundColor = colors[colorIndex];
}

function sliderChanged(value){
  console.log("the value of the slider is "+value);
  
  /* SOLUTION */
  var box = document.querySelector("#sizedBox");
  box.style.width = (100 * value) + "px";
  box.style.height = (100 * value) + "px";
}