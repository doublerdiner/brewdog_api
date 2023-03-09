import React from "react";
import Beer from "./Beer";
import Pages from "./Pages";

const AllBeers = ({addFavourite, removeFavourite, beers, favourites})=>{

    const favItems = favourites.map((beer)=>{
        return <Beer key={beer.id} beer={beer} removeFavourite={removeFavourite} favourites={favourites} addFavourite={addFavourite}/>
    })

    const beerItems = beers.map((beer)=>{
        return <Beer key={beer.id} beer={beer} removeFavourite={removeFavourite} favourites={favourites} addFavourite={addFavourite}/>
    })

    const beerHandleClick = ()=>{
        document.getElementById("favourites").style.display = "none";
        document.getElementById("beers").style.display = "block";
        document.getElementById("beers").style.display = "flex";
    }
    
    const favHandleClick = ()=>{
        document.getElementById("beers").style.display="none";
        document.getElementById("favourites").style.display = "block";
        document.getElementById("favourites").style.display = "flex";
    }
    
    return(
        <>
            <div className="view">
                <button onClick={beerHandleClick}>All Beers</button>
                <button onClick={favHandleClick}>Favourites</button>
            </div>
            <section id="favourites" className="favbeers">
                {favItems}
            </section>
            <section id="beers" className="allbeers">
                {beerItems}
                <Pages/>
            </section>
        </>
    )
};

export default AllBeers;