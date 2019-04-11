const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']["img-src"])
//NavBar COLOR GREEN
let nav = document.getElementsByTagName('a')[0];
nav.innerText = siteContent['nav']['nav-item-1'];
nav.style.color = 'green';

let navii = document.getElementsByTagName('a')[1];
navii.innerText = siteContent['nav']['nav-item-2'];
navii.style.color = 'green';

let naviii = document.getElementsByTagName('a')[2];
naviii.innerText = siteContent['nav']['nav-item-3'];
naviii.style.color = 'green';

let naviv = document.getElementsByTagName('a')[3];
naviv.innerText = siteContent['nav']['nav-item-4'];
naviv.style.color = 'green';

let navv = document.getElementsByTagName('a')[4];
navv.innerText = siteContent['nav']['nav-item-5'];
navv.style.color = 'green';

let navvi = document.getElementsByTagName('a')[5];
navvi.innerText = siteContent['nav']['nav-item-6'];
navvi.style.color = 'green';

//Header AREA
let varH1 = document.getElementsByTagName('h1')[0];
varH1.innerText = siteContent['cta']['h1'];
//Button Area
let varButton = document.getElementsByTagName('button')[0];
varButton.innerText = siteContent['cta']['button'];

//Images
let varImg = document.getElementsByTagName('img')[1];
varImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Features and about

let FH4 = document.getElementsByTagName('h4')[0];
FH4.innerText = siteContent['main-content']['features-h4'];

let fContent = document.getElementsByTagName('p')[0];
fContent.innerText = siteContent['main-content']['features-content']

let AH4 = document.getElementsByTagName('h4')[1];
AH4.innerText = siteContent['main-content']['about-h4'];

let aContent = document.getElementsByTagName('p')[1];
aContent.innerText = siteContent['main-content']['about-content'];

//Middle IMG
let mImg = document.getElementsByTagName('img')[2];
mImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
//Services, Products and Vision Area

let SH4 = document.getElementsByTagName('h4')[2];
SH4.innerText = siteContent['main-content']['services-h4'];

let sContent = document.getElementsByTagName('p')[2];
sContent.innerText = siteContent['main-content']['services-content'];

let PH4 = document.getElementsByTagName('h4')[3];
PH4.innerText = siteContent['main-content']['product-h4'];

let pContent = document.getElementsByTagName('p')[3];
pContent.innerText = siteContent['main-content']['product-content'];

let VH4 = document.getElementsByTagName('h4')[4];
VH4.innerText = siteContent['main-content']['vision-h4'];

let vContent = document.getElementsByTagName('p')[4];
vContent.innerText = siteContent['main-content']['vision-content'];


//CONTACT Area

let cH4 = document.getElementsByTagName('h4')[5];
cH4.innerText = siteContent['contact']['contact-h4'];

let address = document.getElementsByTagName('p')[5];
address.innerText = siteContent['contact']['address'];

let phone = document.getElementsByTagName('p')[6];
phone.innerText = siteContent['contact']['phone'];

let email = document.getElementsByTagName('p')[7];
email.innerText = siteContent['contact']['email'];

//Footer
let CR = document.getElementsByTagName('p')[8];
CR.innerText = siteContent['footer']['copyright'];