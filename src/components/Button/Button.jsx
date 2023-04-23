import PropTypes from 'prop-types';

export function Button({ loadMore }) {
  return (
    <button onClick={loadMore} type="button">
      Load more
    </button>
  );
}
Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
