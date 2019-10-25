import React from "react";
import "./ContentApp.css";

function Card(props){
	return <div className="card">
		{/* <h2>{props.title}</h2> */}
		<div className="content"></div>
		{props.children}
		{props.content}
	</div>
}

// function Veckomeny(props){
// 	return <div className="meny">
// 		<h2>{props.title}</h2>
// 		<div className="content"></div>
// 		{props.children}
// 		{props.content}
// 	</div>
// }



// export function Card(props){
// 	return <div>
// 				<meny
// 					title ="My first card!">
// 						vanlig text
// 						<ul>
// 							<li>html innehåll</li>
// 							<li>html innehåll</li>
// 							<li>html innehåll</li>
// 							<li>html innehåll</li>
// 						</ul>
// 				</meny>

// 				<meny
// 					title ="My first card!">
// 						omae wa mou shindeiru: nani!!!
// 					</meny>
// 				<meny
// 					title ="My first card!"
// 					content = "omae wa mou shindeiru: NANI!!!"/>
// 		</div>
// }

const WEEK12 = [{"day":"Måndag","dish":"\"Daal\" Indisk linsgryta serveras med buljongkokt bulgur och salladsbuffé","alt_dish":"Ugnsgratinerad kycklingkorv serveras med potatismos och salladsbuffé"},{"day":"Tisdag","dish":"Chili sin carne serveras med buljongkokt bulgur och salladsbuffé","alt_dish":"Köttfärslimpa serveras med stekt lök, skysås, kokt potatis, kokta morötter och salladsbuffé"},{"day":"Onsdag","dish":"\"Lasagne Verde\" Lasagne med bladspenat och ostsås serveras med salladsbuffé","alt_dish":"Pocherad torskfilé på rotfruktsbädd serveras med vitvinssås, kokt potatis och salladsbuffé"},{"day":"Torsdag","dish":"Spenatsoppa serveras med pocherat ägg, färskost, bröd, frukt och salladsbuffé","alt_dish":"Grönsakssoppa serveras med bröd, färskost,frukt och salladsbuffé"},{"day":"Fredag","dish":"MAT 2019- Terrin på högrev, aubergine \u0026 zuccinni-","alt_dish":"MAT 2019-Gryta på röttvin, rotfrukter \u0026 svamp, serveras med selleripuré"}];
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function Person(props){
// 	return <li>
// 		<h3>{props.name}</h3>
// 		<span>{props.city}</span>
// 	</li>
// }

// const data = [
// 	{
// 		id: 1,
// 		name: "Gabriel",
// 		city: "Karlshamn"
// 	},
// 	{
// 		id: 2,
// 		name : "Pontus",
// 		city: "Göteborg"
// 	}
// ]


export function ContentApp(props){

	// let persons = data.map(person => <Person key ={person.id} name = {person.name} city={person.city}/>);
	// 	return <ul>{persons}</ul> 


	//skapa Cards utifrån värderna i days - for loop

	// let cards = [];
	// for(let day of days) {
	// 	let card = <Card title = {day} />
	// 	cards.push(card);
	// }
	
//skapa Cards utifråm värderna i days - array.map
// let cards = days.map(day => <Card key = {day} title ={day}/>);
let meals = WEEK12.map(meal => <Card key = {meal} title = {meal}/>);

	return <div>{meals}</div>
}