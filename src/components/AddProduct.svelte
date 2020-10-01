<script>
  import {products} from './products.js';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let id;
  export let name;
  export let cat;
  export let subcat;
  export let brand;
  export let qty;
  export let price;
  export let date;
  const addProduct=()=>{
    id=Math.floor(Math.random()*100);
    dispatch('products', {id,name,cat,subcat,brand,qty,price});
    document.getElementById("name").value="";
    document.getElementById("cat").value="";
    document.getElementById("subcat").value="";
    document.getElementById("brand").value="";
    document.getElementById("qty").value="";
    document.getElementById("price").value="";
  }
</script>
<!-- ############################################### -->
<div>
  <table>
    <tr>
      <td><input type="text" placeholder="Name" id="name" bind:value={name}></td>
    </tr>
    <tr>
      <td><input type="text" placeholder="Category" id="cat" bind:value={cat}></td>
    </tr>
    <tr>
      <td><input type="text" placeholder="Sub Category" id="subcat" bind:value={subcat}></td>
    </tr>
    <tr>
      <td><input type="text" placeholder="Brand name" id="brand" bind:value={brand}></td>
    </tr>
    <tr>
      <td>
        <input type="text" placeholder="Quantity" id="qty" bind:value={qty}></td>
    </tr>
    <tr>
      <td><input type="text" placeholder="Price" id="price" bind:value={price}></td>
    </tr>
    <tr>
      <td><button on:click={addProduct}>Add</button></td>
    </tr>
  </table>
</div>
<!-- ############################################### -->
<style>
</style>
