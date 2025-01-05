function slugify(title) {
    const wordsArray = title.split(' ');
    const newArray = [];
    for (let i = 0; i < wordsArray.length; i++) {
      newArray.push(wordsArray[i].toLowerCase()); 
    }
    return newArray.join('-');
  }
console.log(slugify("Arrays for beginners")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 