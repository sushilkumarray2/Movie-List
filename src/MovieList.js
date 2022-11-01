import {useEffect,useState} from 'react';
import './MovieList.css'
import records from './api/data.json';
function MovieList()
{
  return(
        <div class>
        <center><h1 id="project">Movie List</h1></center>
         {records.map((data)=>{
          let url =require(""+data.img.src);
        return(
            <div class='container'>
            <ul class="list">
            <li><img src={url} class="image"/></li>  
            <li class="info"><b>Movie: </b> {data.title}</li> 
            <li class="info"><b>Production:</b> {data.distributor}</li>
            <li class="info"><b>Amount:</b> {data.amount}</li>
            <li class="info"><b>Rating:</b> {data.ranking}</li>            
            </ul>
            </div>
            
        );
     })}
        </div>
    );
}

export default MovieList;