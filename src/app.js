import style from './style.scss';

// function getDate() {
//   var date = new Date;
// }
function getDate(callback) {
  callback(new Date);
}

function getYear(date) {
  var year = date.getFullYear();
  console.log(year);
}

getDate(function(date) {
  getYear(date);
});

var result = new Promise(resolve => {
  resolve(new Date);
});
console.log(result);
result.then(data => {
  console.log(data);
  console.log(data.getFullYear());
});

function get(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText);
      } else if (xhr.status !== 200) {
        reject('Error: function get');
      }
    }
  });
}
get('http://localhost:1234')
.then(data => {
  console.log('Success', data);
}, error => {
  console.log('Error', error);
});

async function getget(url) {
  try {
    const result = await get(url);
    console.log(result);
  } catch(e) {
    console.log('Error: function getget');
  }
}
getget('http://localhost:1234');
