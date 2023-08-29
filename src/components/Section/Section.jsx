import css from "./Section.module.css"

export const Section = ({ title, children }) => {
    return (
        <div className={css.section}>
            <h1 className={css.tittle}>{title}</h1>
            {children}
       </div>
    )
}

