export default function Listing({pic, country, location, rating, price}){

    const styles = {color: rating < 4 && "red"}

    return(
        <div className="Listing">
            <img src={pic} alt="" width="120"/>
           <div className="Listing-Text">
                <h2>{country}</h2>
                <div className="location"><p>{location}</p></div>
                {rating &&<div className="rating" style={styles}><p>{rating}&#9733;</p></div>}
                <p>${price}/night</p>
            </div>
        </div>
    )
}