// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

window.onbeforeunload = function () {
  return 'You have made changes on this page that you have not yet confirmed. If you navigate away from this page you will lose your unsaved changes';
};
appDiv.innerHTML = `<h1>JS Starter</h1>`;
