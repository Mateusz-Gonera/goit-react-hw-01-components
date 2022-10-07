import PropTypes from 'prop-types';
import StatisticsCSS from './Statistic.module.css';

export const Statistics = ({ title = null, stats }) => {
  const liRender = stats.map(stat => {
    return (
      <li key={stat.id} className={StatisticsCSS.item}>
        <span className={StatisticsCSS.label}>{stat.label}</span>
        <span className={StatisticsCSS.percentage}>{stat.percentage}%</span>
      </li>
    );
  });
  return (
    <section className={StatisticsCSS.statistics}>
      {{ title } !== null && <h2 className="title">{title}</h2>}

      <ul className={StatisticsCSS.statList}>{liRender}</ul>
    </section>
  );
};
