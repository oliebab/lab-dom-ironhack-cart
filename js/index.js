// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');
  getSubtotal = subTotal.innerHTML = `${price.textContent * quantity.value}`;
  return getSubtotal;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  const total = document.querySelector("#total-value span"); 
  // products.forEach((product) => updateSubtotal(products))
  let cumul = 0;
  for (let i =0; i<products.length; i++){
    cumul += parseInt(updateSubtotal(products[i]));
  }
  document.getElementById("total").textContent = `${cumul}`
  console.log(cumul)
  return cumul;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
