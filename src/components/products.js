import { writable } from 'svelte/store'
export let products = writable([
		{id:1,name:'Tomato',cat:'Veg',subcat:'Veg',brand:'NA',qty:'kg',price:34,date:'01/10/2020'},
		{id:2,name:'Cabage',cat:'Veg',subcat:'Veg',brand:'NA',qty:'kg',price:30,date:'01/10/2020'},
		{id:3,name:'Mango',cat:'Fruit',subcat:'Fruit',brand:'NA',qty:'kg',price:80,date:'01/10/2020'},
	]);
export default products; 