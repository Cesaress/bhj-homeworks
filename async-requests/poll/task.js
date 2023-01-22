const getTest = new XMLHttpRequest();
getTest.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
getTest.send();
console.log(getTest.response);