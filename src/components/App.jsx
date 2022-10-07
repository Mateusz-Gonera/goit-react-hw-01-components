import PropTypes from 'prop-types';

export const App = ({ children }) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.string.isRequired,
};
