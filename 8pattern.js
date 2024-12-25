function invertedRightTriangle(rows){
  for(let i = rows; i > 0; i--) {
    let stars = "";
    for(let j = 0; j < i; j++){
      stars += "*";
    }
    console.log(stars);
    
  }
}
invertedRightTriangle(3);


function rightTriangle(num) {
  for(let i = 1; i <= num; i++) {  // Outer loop: from 1 to num (number of rows)
    let star = '';                 // Initialize the star string for each row
    for(let j = 1; j <= i; j++) {  // Inner loop: from 1 to i (number of stars in each row)
      star += '*';                 // Append a star to the string
    }
    console.log(star);             // Print the row of stars
  }
}
rightTriangle(5);
