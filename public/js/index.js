const productSection = document.querySelector('.products')
const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:4000/api/product')
    const data = await res.json()
    data.map((product) => {
      createCartForProduct(product)
    })
  } catch (error) {
    console.log(error)
  }
}
const createCartForProduct = (product) => {
  let productCard = `
    <div class="product-card">
        <a href="/details.html">
          <div class="product-image">
            <img
              src="${product.image}"
            />
          </div>
          <div class="product-info">
            <h5>${product.title}</h5>
            <h6>${`$` + product.price}</h6>
          </div>
        </a>
      </div>
    `
  productSection.innerHTML += productCard
}
fetchData()
