import { NavLink } from "react-router";
import style from "./ProductCard.module.scss";

export function ProductCard({ id, title, slug, imageUrl, price, description }) {
  return (
    <NavLink to={`/products/${slug}`}>
      <div className={style.productCard}>
        <figure>
          <img src={imageUrl} alt={title} />
        </figure>
        <section>
          <span>
            <h5>{title}</h5>
            <p>{description}</p>
            <button>Læs mere</button>
          </span>
        </section>
        <h4>{price} DKK</h4>
      </div>
    </NavLink>
  );
}






