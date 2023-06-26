import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
