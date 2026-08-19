import style from "./HeaderImage.module.scss";

export function HeaderImage(imageURL) {
<>
return (
    <img className={style.headerImageStyle} src={"http://localhost:4000/assets/" + imageURL} />
)
</>
}