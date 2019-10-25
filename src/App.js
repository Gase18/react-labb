import React from "react";
import "./App.css";

function Headline(props) {
	return <h1>{props.title}</h1> 	
}

function Button(props) {
    return <button>{props.message}</button>
}

function Box(props) {
    return <div>
        <h1>{props.title}</h1>
        {props.message}
    </div>

   }
   

function ApplicationFooter(props){
    let emailString = "";
    if(props.showEmail)
        emailString = props.email;


    return (
    <div>
        <div className ="author">Författare: {props.author}</div>
        <div className ="email">Email: {emailString}</div>
    </div>
    );
}

export function App() {
	return <div>
    <Box message ="hejsann" title = "title"/>
    <Button message = "Dont press here!!"/>
	<Headline title= "Hello there"/>
    <ApplicationFooter 
    author = "Gabriel" 
    email = "glissted@gmail.com"
    showEmail = {true} />
 	</div>
}