import PropTypes from "prop-types";
import css from './Statistics.module.css';

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    
};

export const Statistics = ({ stats, title }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stats}>

                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li key={id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percent}>{percentage} %</span>
                        </li>
                    )
                })}

            </ul>
        </section>
    );
}

Statistics.propTypes = {
stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
})),
    title: PropTypes.string
}