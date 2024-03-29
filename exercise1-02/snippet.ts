function snippet(text: string, length: number): string {
  if (text.length < length) {
    return text;
  }
  const ellipsis = "...";
  let result = text.slice(0, length - ellipsis.length);
  const lastSpace = result.lastIndexOf(" ");
  result = `${result.slice(0, lastSpace)}${ellipsis}`;
  return result;
}

const resultOne = snippet("Typescript jest językiem programowania, który jest ścisłym synktatycznym nadzbiorem JavaScriptu i dodaje do niego opcjonalne typowanie statyczne", 40);
console.log(resultOne);

// const resultTwo = snippet("Lorem ipsum dolor sit amet");
// console.log(resultTwo);

// const resultThree = snippet(false, 40);
// console.log(resultThree);

// const resultFour = snippet("Lorem ipsum dolor sit amet", false);
// console.log(resultFour);

// var resultFive: number = snippet("Lorem ipsum dolor sit amet", 20);
// console.log(resultFive);