import {NavLink} from "react-router";
import style from "./EstateCard.module.scss";

export function EstateCard({
    id, titel, slug, imageUrl, price, description,
})
{
    function getBroedeImage(imageArray) {
        const broedeImage = imageArray.filter((item) =>
        item.image.description.includes("Broede"),

    )
    if (broedeImage.length > 0) return broedeImage;
    return imageArray[0];
    }
    const broedeImage = getBroedeImage(imageUrl);

    return (
        <NavLink to={`/estate/${id}`}>
        <div className={style.estateCard}>
        <figure>
            <img src={broede[0]?.image.filename} alt={title} />
        </figure>
        <section>
            <span>
                <h5>{title}</h5>
                <p>Når vi sjælden gang køber morgen brød hos bageren, så skal jeg altid have en håndværker, fordi jeg elsker
                    det tykke lag med blå birkes.
                </p>
                <p>{description}</p>
                <button>Læs mere</button>
                <p>{slug.name}</p>
                
            </span>
        </section>
        <h4>{price} DKK</h4>

        </div>
        </NavLink>
    )
}