function changeBackground() {
  // You should be able to get the value of the select by now
  const color = document.querySelector("#backgroundColor").value;
  // This should be available for students to see how to update CSS
}

function updateFontSize() {
  // This is something you can do based on exercices on Calculator
  const fontSize = parseFloat(document.querySelector("#fontSize").value);
  document.body.style.fontSize = fontSize + "px";
  // The tricky part here is to do a querySelector on your own
  // And play with concatenation to add the 'px' unit in the string
  /* SOLUTION */
}

function colorKeyword() {
  const keywords =
    "aqua black blue fuchsia gray green lime maroon navy olive purple red silver teal white yellow aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkturquoise darkviolet deeppink deepskyblue dimgray dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy navyblue oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen";
  const backgroundColor = document.querySelector("#colorWord").value;

  if (keywords.includes(backgroundColor)) {
    document.body.style.backgroundColor = backgroundColor;
  } else {
    document.body.style.backgroundColor = "red";
  }
  /* SOLUTION */
}

function changeBoxColor() {
  let coloredBox = document.querySelector("#coloredBox");
  let color = coloredBox.style.backgroundColor;
  let width = coloredBox.style.width;
  console.log(width);
  const array = ["red", "green", "blue"];
  let i = array.indexOf(color);
  if (i < array.length - 1) {
    coloredBox.style.backgroundColor = array[i + 1];
  } else {
    coloredBox.style.backgroundColor = array[0];
  }
}
/* SOLUTION */

function sliderChanged(value) {
  var sizedBox = document.querySelector("#sizedBox");
  sizedBox.style.width = 100 * value + "px";
  sizedBox.style.height = 100 * value + "px";
  console.log(sizedBox.style.width, sizedBox.style.height);
  console.log("the value of the slider is " + value);
}

//Write the rest of the code here
/* SOLUTION */
