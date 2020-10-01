<script>
	import {products} from './products.js';	
</script>
<div style="overflow-x:auto;">
	<table>
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Category</th>
			<th>Sub-category</th>
			<th>Brand</th>
			<th>Quantity</th>
			<th>Price</th>
		</tr>
		{#each $products as product}
		<tr>
			<td>{product.id}</td>
			<td>{product.name}</td>
			<td>{product.cat}</td>
			<td>{product.subcat}</td>
			<td>{product.brand}</td>
			<td>{product.qty}</td>
			<td>{product.price}</td>
		</tr>
		{/each}
	</table>
</div>
<style>
	table {
		border-collapse: collapse;
		border-spacing: 0;
		width: 100%;
		border: 1px solid #ddd;
	}

	th, td {
		text-align: left;
		padding: 8px;
	}

	tr:nth-child(even){background-color: #f2f2f2}
</style>