<script>
import {createEventDispatcher} from 'svelte';
  let dispatch=createEventDispatcher();
  let item_name;
  let category;
  let sub_category;
  let price_ws;
  let price_rt;

  const handleSubmit=()=>{
    const data={
      id: Math.floor(Math.random() * 100),
      item_name,
      category,
      sub_category,
      price_ws,
      price_rt
    };
    dispatch('pushNewItem',data);
  };
</script>
<form on:submit="{handleSubmit}">
  <table>
    <tr><input type="text" placeholder="Item name" bind:value={item_name}></tr>
    <tr><select bind:value={category}>
      <option value="vegitables">Vegitables</option>
      <option value="fruits">Fruits</option>
      <option value="dairy">Dairy</option>
      <option value="meat">Meat</option>
    </select></tr>
    <tr><input type="text" placeholder="sub category" bind:value={sub_category}></tr>
    <tr><input type="text" placeholder="Wholsale price" bind:value={price_ws}></tr>
    <tr><input type="text" placeholder="Retail price" bind:value={price_rt}></tr>
    <tr><button type="submit">Add Item</button></tr>
  </table>
</form>
