// script.js

/* Select the elements you want to interact with
const navMenu = document.querySelector('.nav-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const crossIcon = document.querySelector('.cross-icon');
const menuList = document.querySelector('.menu-list');

// Add event listeners to the elements
navMenu.addEventListener('click', () => {
  // Toggle the menu list
  menuList.classList.toggle('active');
});

hamburgerIcon.addEventListener('click', () => {
  // Show the menu list
  menuList.classList.add('active');
});

crossIcon.addEventListener('click', () => {
  // Hide the menu list
  menuList.classList.remove('active');
});

// Add other event listeners and functions as needed