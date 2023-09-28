export default function Listing({pic, country, location, rating, price}){

    //const styles = {color: }

    return(
        <div className="Listing">
            <img src={pic} alt="" width="120"/>
           <div className="Listing-Text">
                <h2>{country}</h2>
                <p>{location}</p>
                <p>{rating}&#9733;</p>
                <p>${price}/night</p>
            </div>
        </div>
    )
}