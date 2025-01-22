// javascript for Alab316.1.1 Dom Manipulation Part 1 Lab

//1.Select and cache the <main> element in a variable named mainEl.
//Using querySelector to Select the main element in the DOM and cache to variable named mainEl
const mainEl = document.querySelector("main");
//consel log new variable which now represents the MAIN element in the html
console.log(
  `The new representation of the "main" element in the html is now "mainEl": ${mainEl}.`
);

//2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
//var() will retrieve the value of --main-bgg in css
mainEl.style.backgroundColor = "var(--main-bg)";

//3.Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do
//this; pick whichever one that you think works best in this situation.(using innerHTML)

//This assignment uses textContent to assign the string
//mainEl.textContent = "<h1>DOM Manipulation</h1>"; // Displays as plain text
//This method uses the createElement and appendChild for a better display
const mainElContent = document.createElement("h1");
mainElContent.textContent = "DOM Manipulation";
mainEl.appendChild(mainElContent);

//4. Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
//using classList property to assign the flex-ctr class and its attributes to mainE1 element
//This will center horizontally and vertically the h1 element of mainEl
mainEl.classList.add("flex-ctr");

//CREATING A MENU BAR
// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// Select the <nav> element using the id "top-menu"
const topMenuEl = document.getElementById("top-menu");

// Verify that the element is selected - not necessary at this point
//console.log(topMenuEl);

// 2.  Set the height of the topMenuEl element to be 100%.
// Set height of topMenuEl to 100%
topMenuEl.style.height = "100%"; //make sure the parent of topMenuEl has a defined height.

// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
//using the var() function to access the background color style property from existing CSS
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

//Part 3 Adding Menu Buttons
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((aLink) => {
  // Create an <a> element
  const aElem = document.createElement("a");
  // On the new element, add an href attribute with its value set to the href property
  //of the "link" object.
  aElem.href = aLink.text;
  // Set the new element's content to the value of the text property of the "link" object.
  aElem.textContent = aLink.text;
  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(aElem);
});

//Part 4 Adding Interactivity
//Submit work and retain for part 2
