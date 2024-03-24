fetch('https://dummyjson.com/recipes')
    .then(res => {
        return res.json()
    })
    .then(value => {
        const majorDiv = document.createElement('div');

        document.body.appendChild(majorDiv);

        value.recipes.map(recipe => {
            const mainDiv = document.createElement('div');
            majorDiv.appendChild(mainDiv);

            const caloriesPerServing = document.createElement('p');
            caloriesPerServing.innerText = `caloriesPerServing - ${recipe.caloriesPerServing}`;
            mainDiv.appendChild(caloriesPerServing)

            const id = document.createElement('p');
            id.innerText = `id - ${recipe.id}`

            const name = document.createElement('h1');
            name.innerText = `name - ${recipe.name}`;

            const cookTimeMinutes = document.createElement('p');
            cookTimeMinutes.innerText = `cookTimeMinutes - ${recipe.cookTimeMinutes}`;

            const cuisine = document.createElement('p');
            cuisine.innerText = `cuisine - ${recipe.cuisine}`;

            const prepTimeMinutes = document.createElement('p');
            prepTimeMinutes.innerText = `prepTimeMinutes - ${recipe.prepTimeMinutes}`;

            const userId = document.createElement('p');
            userId.innerText = `userId - ${recipe.userId}`;

            const servings = document.createElement('p');
            servings.innerText = `servings - ${recipe.servings}`;

            const difficulty = document.createElement('p');
            difficulty.innerText = `difficulty - ${recipe.difficulty}`;

            const image = document.createElement('img');
            image.setAttribute('src', `${recipe.image}`);
            image.setAttribute('alt', `${recipe.name}`);

            const reviewCount = document.createElement('p');
            reviewCount.innerText = `rating - ${recipe.reviewCount}`

            const rating = document.createElement('p');
            rating.innerText = `rating - ${recipe.rating}`

            const ingredients = document.createElement('ol');
            ingredients.innerText = 'Ingredients'

            const instructions = document.createElement('ol');
            instructions.innerText = 'Instructions'

            const mealType = document.createElement('ol');
            mealType.innerText = 'MealType'

            const tags = document.createElement('ol');
            tags.innerText = 'Tags'
            mainDiv.append(id, userId, difficulty, reviewCount, rating, caloriesPerServing, cookTimeMinutes, cuisine, name, prepTimeMinutes, image, ingredients, instructions, mealType, tags)

            recipe.ingredients.map(ingredient => {
                const li = document.createElement('li');
                li.innerText = ingredient;
                ingredients.appendChild(li)
            })
            recipe.instructions.map(instruction => {
                const li = document.createElement('li');
                li.innerText = instruction;
                instructions.appendChild(li)
            })
            recipe.mealType.map(meal => {
                const li = document.createElement('li');
                li.innerText = meal;
                mealType.appendChild(li);
            })
            recipe.tags.map(tag => {
                const li = document.createElement('li')
                li.innerText = tag;
                tags.appendChild(li)
            })
        })
    })
