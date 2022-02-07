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

const nav = document.querySelectorAll("nav a");
const nav1 = document.querySelector("nav a");
const nav2 =nav1.nextElementSibling;
const nav3 =nav2.nextElementSibling;
const nav4 =nav3.nextElementSibling;
const nav5 =nav4.nextElementSibling;
const nav6 =nav5.nextElementSibling;

const logo = document.querySelector("#logo-image");
const title = document.querySelector("h1");

const button = document.querySelector("button");

const ctaImage = document.querySelector("#cta-img");

const features = document.querySelector("h4:nth-of-type(1)");
const featureText = features.nextElementSibling;

const about = document.querySelector("h4:nth-of-type(2)")
const aboutText = about.nextElementSibling;

const middleImage = document.querySelector(".middle-img");

const services = document.querySelector("h4:nth-of-type(3)");
const servicesText = services.nextElementSibling;

const product = document.querySelector("h4:nth-of-type(4)");
const productText = product.nextElementSibling;

const vision = document.querySelector("h4:nth-of-type(5)");
const visionText = nextElementSibling;

const contact = document.querySelector(".contact h4");
const address = contact.nextElementSibling;
const phone = address.nextElementSibling;
const email = phone.nextElementSibling;

const copyright = document.querySelector("footer a")