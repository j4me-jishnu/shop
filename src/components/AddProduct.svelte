<script>
  import {products} from './products.js';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let id;
  export let name;
  export let cat;
  const addProduct=()=>{
    id=Math.floor(Math.random()*100);
    dispatch('products', {id, name, cat});
  }
</script>
<!-- ############################################### -->
<div>
  <h3>Add Product</h3>
  <table>
    <tr>
      <td><input type="text" placeholder="Name" bind:value={name}></td>
    </tr>
    <tr>
      <td><input type="text" placeholder="Category" bind:value={cat}></td>
    </tr>
    <tr>
      <td><button on:click={addProduct}>Add</button></td>
    </tr>
  </table>
</div>
<!-- ############################################### -->
<style>
</style>
