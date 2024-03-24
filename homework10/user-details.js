console.log(location)

let userId = new URL(location.href).searchParams.get('id');
console.log(userId)

function getUserInfo(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => {
            const h1 = document.createElement('h1');
            h1.innerText = ` Вся інформація про користувача - ${user.name}`;

            const username = document.createElement('h2');
            username.innerText = `Username - ${user.username}`;

            const email = document.createElement('p');
            email.innerText = `Email - ${user.email}`;

            const phone = document.createElement('p');
            phone.innerText = `Phone - ${user.phone}`;

            const website = document.createElement('p');
            website.innerText = `Website - ${user.website}`;

            const address = document.createElement('div');
            address.innerText = `Adress`;

            const company = document.createElement('div');
            company.innerText = `Company`;


            document.body.append(h1, username, email, phone, website, address, company)

            const addressesArray = Object.keys(user.address);

            for (const addressOfUser of addressesArray) {
                if (typeof user.address[addressOfUser] === 'object') {
                    const keys = Object.keys(user.address[addressOfUser]);
                    for (const key of keys) {
                        const h3 = document.createElement('h3');
                        h3.innerText = `${key}`
                        const p = document.createElement('p');
                        p.innerText = `${key} - ${user.address[addressOfUser][key]}`;
                        address.append(h3, p)
                    }
                } else {
                    const p = document.createElement('p');
                    p.innerText = `${addressOfUser} - ${user.address[addressOfUser]}`;
                    address.appendChild(p)

                }

            }

            const companiesArray = Object.keys(user.company);

            for (const userCompany of companiesArray) {
                const p = document.createElement('p');
                p.innerText = `${userCompany} - ${user.company[userCompany]}`;
                company.appendChild(p)
            }

        })
}


getUserInfo(userId)