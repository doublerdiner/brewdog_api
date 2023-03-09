import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import AllBeers from "../components/AllBeers";

const Brewdog = ()=>{
    const [beers, setBeers] = useState([]);
    const [favourites, setFavourites] = useState([]);

    useEffect(()=>{
        getAllBeers();
    }, [])

    const getAllBeers = async function(){
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const beers = await response.json();
        setBeers(beers);
    };

    function addFavourite (beer){
        const newFavourites = [...favourites, beer];
        setFavourites(newFavourites);
    };

    function removeFavourite (beerToRemove){
        const newFavourites = favourites.filter((beer)=>{
            return beer !== beerToRemove;
        })
        setFavourites(newFavourites);
    }

    return(
        <>
        <Header/>
        <AllBeers removeFavourite={removeFavourite} addFavourite={addFavourite} favourites={favourites} beers={beers}/>
        </>
    )
};

export default Brewdog;