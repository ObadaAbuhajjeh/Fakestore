const getProduct = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
}

const displayProduct = async () => {
    const data = await getProduct();

    const images = data.images.map((img) => {
        return `
        <img src="${img}" width="200px" />
         `
    }).join(' ');

    const result = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <h3>${data.price}</h3>
    `
    document.querySelector(".product").innerHTML = result;
    document.querySelector(".product-img").innerHTML = images;
    document.querySelector(".overlay").classList.add('d-none');
}

displayProduct();