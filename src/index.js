const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


//header 
const nav = document.querySelectorAll('nav a');
const nav1 = nav[0]
const nav2 = nav[1]
const nav3 = nav[2]
const nav4 = nav[3]
const nav5 = nav[4]
const nav6 = nav[5]
nav1.textContent = siteContent['nav']['nav-item-1'];
nav2.textContent = siteContent['nav']['nav-item-2'];
nav3.textContent = siteContent['nav']['nav-item-3'];
nav4.textContent = siteContent['nav']['nav-item-4'];
nav5.textContent = siteContent['nav']['nav-item-5'];
nav6.textContent = siteContent['nav']['nav-item-6'];

nav.forEach(font => font.classList.add("italic"));

const logo = document.querySelector("#logo-img");
logo.src = siteContent['images']['logo-img'];

const title = document.querySelector("h1");
title.textContent = siteContent['cta']['h1'];

const button = document.querySelector("button");
button.textContent = siteContent['cta']['button'];

const ctaImage = document.querySelector("#cta-img");
ctaImage.src = siteContent['images']['cta-img'];


//main content
const h4 = document.querySelectorAll(".text-content h4");
const mainContentP = document.querySelectorAll(".text-content p");
const features = h4[0];
const featuresText = mainContentP[0];
features.textContent = siteContent['main-content']['features-h4'];
featuresText.textContent = siteContent['main-content']['features-content'];

const about = h4[1];
const aboutText = mainContentP[1];
about.textContent = siteContent['main-content']['about-h4'];
aboutText.textContent = siteContent['main-content']['about-content'];

const services = h4[2];
const servicesText = mainContentP[2];
services.textContent = siteContent['main-content']['services-h4'];
servicesText.textContent = siteContent['main-content']['services-content']

const product = h4[3];
const productText =  mainContentP[3];
product.textContent = siteContent['main-content']['product-h4'];
productText.textContent = siteContent['main-content']['product-content'];

const vision = h4[4];
const visionText = mainContentP[4];
vision.textContent = siteContent['main-content']['vision-h4'];
visionText.textContent = siteContent['main-content']['vision-content']



const middleImage = document.querySelector(".middle-img");
middleImage.src = siteContent['images']['accent-img'];


//contact
const contact = document.querySelector(".contact h4");
contact.textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p')
const address = contactInfo[0];
address.textContent = siteContent['contact']['address'];

const phone = contactInfo[1];
phone.textContent = siteContent['contact']['phone'];

const email = contactInfo[2];
email.textContent = siteContent['contact']['email'];

//footer
const copyright = document.querySelector("footer a")
copyright.textContent = siteContent['footer']['copyright']
copyright.classList = 'bold';




















