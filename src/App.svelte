<script>
import Header from './components/Header.svelte';
import Tabs from './shared/Tabs.svelte';
import AddProduct from './components/AddProduct.svelte';
import Footer from './components/Footer.svelte';
let items=[
	'List',
	'Update Price',
];
let activeItem='List';
let shopItems=[
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
let itemCat;
let itemSubCat;
let itemQtyType;
let itemPriceWs;
let itemPriceRt;
const tabChange=(e)=>{
	activeItem=e.detail;
};
</script>
<Header />

<main>
<div>
	<div class="itemList">
	<Tabs {activeItem}{items} on:tabChange={tabChange}/>
	{#if activeItem==='List'}
	<table border="1">
		<tr>
			<th>Item</th>
			<th>Category</th>
			<th>Sub-category</th>
			<th>Price W/S</th>
			<th>Price R/T</th>
		</tr>
		{#each shopItems as item}
		<tr>
			<td>{item.item_name}</td>
			<td>{item.item_cat}</td>
			<td>{item.item_sub_cat}</td>
			<td>{item.item_price_rt}</td>
			<td>{item.item_price_ws}</td>
		</tr>
		{/each}
		</table>
		<div class="addProduct">
			<AddProduct />
		</div>
	{:else if activeItem==='Update'}
	<p>Price updation segment</p>
	{/if}
	</div>
</div>

</main>
<Footer />
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
	.itemList{
		width:80%;
		text-align:center;
		float:left;
	}
	.addProduct{
		text-align:right;
		width:20%;
		float:right;
	}
</style>
