// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';
import { SprinkleCookie } from './models/SprinkleCookie';
import { Colours } from './models/Colours.enum';

const sprinkleSelector: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('sprinkleSelector')
);
const cookieName: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('cookieName-inp')
);
const addCookieButton: HTMLElement = document.getElementById('addCookie-btn');
addCookieButton.addEventListener('click', event => {
  addCookie();
});

const cookieSelector: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('cookieSelector')
);
// const cookieColour: HTMLSelectElement = <HTMLSelectElement>(
//   document.getElementById('cookieColour-inp')
// );
const cookieColour: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('cookieColourSelector')
);
const cookiesDiv: HTMLElement = document.getElementById('cookiesDiv');

const colourButton: HTMLElement = document.getElementById('changeColour-btn');
colourButton.addEventListener('click', event => {
  changeColour();
});

const chipButton: HTMLElement = document.getElementById('addChocolateChip-btn');
chipButton.addEventListener('click', event => {
  addChocolateChip();
});

// Create a array/list of cookies named cookies
const cookies: Cookie[] = [];

function cookieNames(){
  cookieSelector.innerHTML='';
  for (let c in cookies) {
    // console.log(cookies[c].name);
    let newOption: HTMLOptionElement = document.createElement('option');
    newOption.innerHTML = cookies[c].name;
    newOption.value = String(cookies.indexOf(cookies[c]));
    cookieSelector.add(newOption);
  }
}

// create an init() function
// init() will create two cookies called Cookie1 and Cookie2, and add them to the array of cookies
function init() {
  //TO(DONE)DO: add code here
  // create the two cookies
  const cookie1: Cookie = new Cookie('Yum');
  const cookie2: Cookie = new Cookie('Tasty');

  // add them to the array
  cookies.push(cookie1);
  cookies.push(cookie2);

  // add them as options in the select/dropdown (cookieSelector) element
  cookieNames();

  let count = 0;
  for (let c in Colours) {
    if (isNaN(Number(c))) {
      let newOption: HTMLOptionElement = document.createElement('option');
      newOption.innerHTML = c;
      newOption.value = count.toString();
      count++;
      cookieColour.add(newOption);
    }
  }

  // initialise the cookieColour-inp to the colour of the first cookie created
  cookieColour.value = String(cookies[0].colour);

  updateDisplay();
}

init();

//TO(DONE)DO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
  cookiesDiv.innerHTML = '';
  for (let c in cookies) {
    let cookieDiv: HTMLElement = document.createElement('div');
    cookieDiv.innerHTML = String(cookies[c].chocolateChipNum);
    cookieDiv.classList.add('cookie');
    cookieDiv.id = cookies[c].name;
    cookieDiv.setAttribute(
      'style',
      `background-color: ${Colours[cookies[c].colour]}`
    );
    cookiesDiv.appendChild(cookieDiv);
  }
}

//TO(DONE)DO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
function changeColour() {
  cookies[cookieSelector.value].colour = cookieColour.value;
  updateDisplay();
}

//TO(DONE)DO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
function addChocolateChip() {
  cookies[cookieSelector.value].chocolateChipNum++;
  updateDisplay();
}

function addCookie() {
  if ((sprinkleSelector.value == 'Cookie')) {
    cookies.push(new Cookie(cookieName.value));
  } else {
    cookies.push(new SprinkleCookie(cookieName.value));
  }
  cookieNames();
  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}
