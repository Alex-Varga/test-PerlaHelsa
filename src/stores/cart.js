import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useCartStore = defineStore('cartStore', () => {

  const cart = ref([])

  const cartItemOnLocal = localStorage.getItem('cart')
  if (cartItemOnLocal) {
    cart.value = JSON.parse(cartItemOnLocal)._value;
  }

  watch(() => cart, (state) => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, {deep: true})

  const addToCart = (product, count) => {
    if (cart.value.length) {
      let isproductExist = false;
      cart.value.map((item) => {
        if (item.id === product.id) {
          isproductExist = true
          item.count >= 10 ? item.count : item.count += count
        }
      })
      if (!isproductExist) {
        cart.value.push({...product, count})
      }
    } else {
      cart.value.push({...product, count})
    }
  }

  const removeItem = (id) => {
    cart.value = cart.value.filter((el => el.id !== id))
  }

  return {
    cart, addToCart, removeItem
  }

})