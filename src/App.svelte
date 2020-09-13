<script>
	import AddItemForm from './AddItemForm.svelte';
	let items=[
	  {
	    id:1,
	    item_name:'Tomato',
	    item_cat:'Vegitable',
	    item_sub_cat:'Normal',
	    item_qty_type:'kg',
	    item_price_ws:'15.00',
	    item_price_rt:'18.00',
	  },
	  {
	    id:2,
	    item_name:'Potato',
	    item_cat:'Vegitable',
	    item_sub_cat:'Normal',
	    item_qty_type:'kg',
			item_price_ws:'45.00',
	    item_price_rt:'48.00',
	  },
	  {
	    id:3,
	    item_name:'Onion',
	    item_cat:'Vegitable',
	    item_sub_cat:'Savala',
	    item_qty_type:'kg',
			item_price_ws:'30.00',
	    item_price_rt:'35.00',
	  },
	  {
	    id:4,
	    item_name:'Onion',
	    item_cat:'Vegitable',
	    item_sub_cat:'Small',
	    item_qty_type:'kg',
			item_price_ws:'24.00',
	    item_price_rt:'28.00',
	  },
	];
	const pushNewItem=(e)=>{
		console.log(e.detail);
		const newItem = e.detail;
		items=[newItem, ...items];
	}
</script>

<AddItemForm on:pushNewItem={pushNewItem}></AddItemForm>
<main>
<table border="1">
<tr>
	<th>Item</th>
	<th>Category</th>
	<th>Sub-category</th>
	<th>Price W/S</th>
	<th>Price R/T</th>
</tr>
{#each items as item}
<tr>
	<td>{item.item_name}</td>
	<td>{item.item_cat}</td>
	<td>{item.item_sub_cat}</td>
	<td>{item.item_price_rt}</td>
	<td>{item.item_price_ws}</td>
</tr>
{/each}
</table>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
