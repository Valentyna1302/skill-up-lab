// const form = document.querySelector('.form');

// form.addEventListener('submit', event => {
//   event.preventDefault;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('');
//     });
//     // Asynchronous operation
//   });
// });

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetch('https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(users => {
//       const markup = users
//         .map(user => {
//           return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`;
//         })
//         .join('');
//       userList.insertAdjacentHTML('beforeend', markup);
//     })
//     .catch(error => console.log(error));
//   s;
// });

// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

const postToAdd = {
  title: 'CRUD',
  body: 'CRUD is awesome!',
};

const options = {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(post => console.log(post))
  .catch(error => console.log(error));
