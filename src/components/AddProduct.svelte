<script>
  export let itemCat;
  export let itemSubCat;
  export let itemQtyType;
  export let itemPriceWs;
  export let itemPriceRt;
</script>
<div>
<h3>Add Product</h3>
<table>
  <tr>
    <td><input type="text" placeholder="Category" bind:value={itemCat}></td>
  </tr>
  <tr>
    <td><input type="text" placeholder="Sub Category" bind:value={itemSubCat}></td>
  </tr>
  <tr>
    <td><input type="text" placeholder="Quantity Type" bind:value={itemSubCat}></td>
  </tr>
  <tr>
    <td><input type="text" placeholder="Wholesale Price" bind:value={itemSubCat}></td>
  </tr>
  <tr>
    <td><input type="text" placeholder="Retail Price" bind:value={itemSubCat}></td>
  </tr>
  <tr>
    <td><input type="submit" value="Add"></td>
  </tr>
</table>
</div>

<style>
  
</style>
