fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        const ul = document.createElement('ul');
        document.body.appendChild(ul)
        for (const user of users) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', `user-details.html?id=${user.id}`);
            a.innerText = `${user.id} - ${user.name}`;
            li.appendChild(a)
            ul.appendChild(li)

            // a.addEventListener('click',()=>{
            // location.href=`user-details.html?id=${user.id}`
            //
            // })
        }
    });
