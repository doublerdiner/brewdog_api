import React from "react";


const Beer = ({beer, addFavourite, removeFavourite, favourites})=>{

    const malt = Object.values(beer.ingredients['malt']).map(ingredients=>{
        return ingredients.name;
    })
    const yeast = beer.ingredients['yeast']
    const hops = Object.values(beer.ingredients['hops']).map(ingredients=>{
        return  ingredients.name;
    })
    const concat = malt.concat(yeast, hops)
    const ingredients = new Array(new Set(concat))
    const ingredientList = ingredients.map((ingredient)=>{
        return(
            <p>{ingredient}</p>
        )
    })


    const handleClick = ()=>{
        let i = document.getElementById([beer.id])
        if (i.style.display == "block"){
            i.style.display = "none";
        } else {
            i.style.display = "block";
        }
    };



    const favClick = ()=>{
                const names = favourites.map((beer)=>{
                    return beer.name
                })
                
                let i = document.getElementById([beer.name])
                if (names.includes(beer.name)){
                    removeFavourite(beer)
                } else {
                    addFavourite(beer)
                };
        // if (i.style.background != "gold"){
        // i.style.background = "gold";
        // } else {
        // i.style.background = "none";
        // };

    };

    const listFavourites = (beer)=>{
        const names = favourites.map((beer)=>{
            return beer.name
        })

        if (names.includes(beer.name)){
            console.log("true")
            return true
        } else {
            console.log("false")
            return false
        }
    }

    return(
        <div className="beer">
            <h3>{beer.name}</h3>
            <p><i>{beer.tagline}</i></p>
            <img src={beer.image_url}/>
            <button onClick={handleClick}>More Info</button>
            <div id={beer.id} className="hidden">
                <p>Description: {beer.description}</p>
                <p>Ingredients:</p>
                {ingredientList}
            </div>
                {listFavourites(beer) ? <button id={beer.name} className="fav" onClick={favClick}>Favourites
                </button> : <button id={beer.name} className="all" onClick={favClick}>Favourites
                </button>}
        </div>
    )
};

export default Beer;