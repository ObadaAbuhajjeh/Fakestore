const getProducts = async () => {
    const {data} = await axios.get('https://dummyjson.com/products')
    return data;
}
    const displayProducts = async () =>{
        try{
        const data = await getProducts();
        const products = data.products;
    
    const result = products.map( (product)=>{
        return `
        <div class="product">
        <h2>${product.title}</h2>
        <img src='${product.thumbnail}' />
        <a href="details.html?id=${product.id}">details</a>
        <button onclick='deleteProduct(${product.id})'>delete</button>
        </div>
        `;
    }).join(' ');
    document.querySelector(".products").innerHTML = result;
    
}catch(error){
    const result = `
    <h2>error</h2>
    <p>${error.message}</p>
    `;
    document.querySelector(".products").innerHTML = result;
}finally{
    document.querySelector(".overlay").classList.add('d-none');
}
}

const deleteProduct = async(id) => {
    try{
        const {data} = await axios.delete(`https://dummyjson.com/products/${id}`);
        alert("successfuly deleted product");
        location.href="index.html";
    }catch{
        alert("can not delete this product");
    }
}

displayProducts();