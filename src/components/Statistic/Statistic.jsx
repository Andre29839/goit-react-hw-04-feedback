import css from "./Statistic.module.css"

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={css.statistic_list}>
            <li className={css.statistic_list_item}>Good: {good}</li>
            <li className={css.statistic_list_item}>Neutral: {neutral}</li>
            <li className={css.statistic_list_item}>Bad: {bad}</li>
            <li className={css.statistic_list_item}>Total: {total}</li>
            <li className={css.statistic_list_item}>Positive feedback: { positivePercentage } %</li>
        </ul>
    )
}