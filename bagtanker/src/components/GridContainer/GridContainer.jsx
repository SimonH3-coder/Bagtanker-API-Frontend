import style from "./GrindContainer.module.scss";

export function GridContainer({ children, styleprops }) {
    return (
        <section style = {{... styleprops }} className = {style.gridContainer}>
            {children}
        </section>
    )
}