import { writable } from 'svelte/store'
export let products = writable([
		{id:1,name:'Tomato',cat:'Veg'},
		{id:2,name:'Cabage',cat:'Veg',},
		{id:3,name:'Mango',cat:'Veg',},
	]);
export default products; 