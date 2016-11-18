var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(3, 5);
var triangle3Area = getTriangleArea(4, 9);

function getTriangleArea (a,h) {
  if (a < 0 &&  h < 0) {
  return console.log ("Nieprawidłowa wartość");
  }
  else {
  return a*h/2;
  }
}

console.log( getTriangleArea (5, 5))