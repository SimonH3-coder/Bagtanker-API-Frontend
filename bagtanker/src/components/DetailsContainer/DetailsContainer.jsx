import style from "./DetailsContainer.module.scss";

export function DetailsContainer({ estateData}) {
    if (!estateData) {
        return null;
    }
    return (
        <section>
            <div className={style.detailsTop}>
                <div>
                    <h2>{estateData.title}</h2>
                    <p>{estateData.description.name} {estateData.description.zipcode}

                    </p>
                    <p>{estateData.id.name} {estateData.slug} {estateData.price}
                    </p>
                    <p>{estateData.numClicks}</p>
                </div>
                <div>
                    <p>Kontantpris</p>
                    <h3>{estateData.price}</h3>
                    <p>Betaling: {estateData.price}</p>
                    <p> Pris hos Bagtanker: {estateData.price} </p>
                </div>
                 </div>
                 <article className={style.detailsMid}>
                    <section>
                        {estateData.description}
                    </section>
                <div>
                    <h5>Kontakt</h5>
                    <img src={'http://localhost:4000/assets/'+estateData.staff.image} alt={estateData.staff.name + "_image"}
                    />
                    <p>{estateData.staff.firstname} {estateData.staff.lastname}</p>
                    <p>{estateData.staff.position}</p>
                    <p>{estateData.staff.email}</p>
                    <p>Mobil: {estateData.staff.phone}</p>
                    <p>Email: {estateData.staff.email}</p>
                </div>
                 </article>
        </section>

    )

}