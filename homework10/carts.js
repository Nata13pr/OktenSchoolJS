fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(value => {
        const mainDiv = document.createElement('div')
        document.body.appendChild(mainDiv);
        value.carts.map(cart => {

            const divForEachElementOfArray = document.createElement('div');
            mainDiv.appendChild(divForEachElementOfArray);

            const id1 = document.createElement('p')
            id1.innerText = `id - ${cart.id}`;

            const discountedTotal = document.createElement('p');
            discountedTotal.innerText = `discountedTotal - ${cart.discountedTotal}`;

            const total1 = document.createElement('p');
            total1.innerText = `total - ${cart.total}`;

            const totalProducts = document.createElement('p');
            totalProducts.innerText = `totalProducts - ${cart.totalProducts}`;

            const totalQuantity = document.createElement('p');
            totalQuantity.innerText = `totalQuantity - ${cart.totalQuantity}`;

            const userId = document.createElement('p');
            userId.innerText = `userId - ${cart.userId}`;

            const ol = document.createElement('ol');
            divForEachElementOfArray.append(id1, discountedTotal, total1, totalQuantity, totalProducts, userId, ol);
            cart.products.map(product => {
                const li = document.createElement('li');
                ol.appendChild(li);

                const discountPercentage = document.createElement('p');
                discountPercentage.innerText = `discountPercentage - ${product.discountPercentage}`;

                const discountedPrice = document.createElement('p');
                discountedPrice.innerText = `discountedPrice - ${product.discountedPrice}`;

                const id = document.createElement('p');
                id.innerText = `id - ${product.id}`;

                const price = document.createElement('p');
                price.innerText = `price - ${product.price}`;

                const quantity = document.createElement('p');
                quantity.innerText = `quantity - ${product.quantity}`

                const title = document.createElement('h2');
                title.innerText = `title - ${product.title}`

                const total = document.createElement('p');
                total.innerText = `total - ${product.total}`

                const thumbnail = document.createElement('img');
                thumbnail.setAttribute('src', `${product.thumbnail}`);
                thumbnail.setAttribute('alt', `${product.title}`);

                li.append(id, title, discountedPrice, discountPercentage, price, quantity, total, thumbnail)
            })
        })
    });