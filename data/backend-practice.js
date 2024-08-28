const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response); // JSON data from the server
});

xhr.open('GET','https://supersimplebackend.dev');
xhr.send();

