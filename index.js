const url = `https://fakestoreapi.com/products`;
const container = document.querySelector(".container");

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let display = ``;
        for (i = 0; i < data.length; i++) {
            display += ` 
            <div class="product">
            <div>
                <img src = ${data[i].image}>
            </div>
            <p>Title: ${data[i].title}</p>
            <p>Price: ${data[i].price}</p>
            <p>Description: ${data[i].description}</p>
            <p>Category: ${data[i].category}</p> 
            </div>         
            `
        }
        container.innerHTML = display;


    });

