<script>
	import Header from './components/Header.svelte';
	import Tabs from './shared/Tabs.svelte';
	import AddProduct from './components/AddProduct.svelte';
	import Footer from './components/Footer.svelte';
	import ProductList from './components/ProductList.svelte';
	import ShowList from './components/ShowList.svelte';
	import SingleItem from './components/SingleItem.svelte';
	import {products} from './components/products.js';
	let newItem;
	let items=[
	'Add Product',
	'Product List',
	'Update Price',
	];
	let activeItem='Add Product';
	const tabChange=(e)=>{
		activeItem=e.detail;
	};
	const handleAddProduct=(event)=>{
		console.log(event.detail);
		newItem=event.detail;
		$products=[...$products,newItem];
	}
</script>
<!-- ################################################ -->
<Header />
	<div>
		<div class="itemList">
			<Tabs {activeItem}{items} on:tabChange={tabChange}/>
			{#if activeItem==='Add Product'}
				<AddProduct on:products={handleAddProduct}/>
			{:else if activeItem==='Product List'}
			<ShowList />
			{:else if activeItem==='Update Price'}
			<ShowList />
			{/if}
		</div>
	</div>
<Footer />
<!-- ################################################ -->
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
