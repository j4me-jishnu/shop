<script>
	import {products} from './products.js';	
</script>
<div id="show">
	<table>
		<tr>
			<td><b>Id</b></td>
			<td><b>Product Name</b></td>
			<td><b>Category</b></td>
		</tr>
		{#each $products as product}
		<tr>
			<td>{product.id}</td>
			<td>{product.name}</td>
			<td>{product.cat}</td>
		</tr>
		{/each}

	</table>
</div>
<style></style>