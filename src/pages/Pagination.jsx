import PropTypes from "prop-types";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
   let pages = [];

   for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
   }

    return (
        <div style={styles.pagination}>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        style={page === currentPage ? styles.activeButton : styles.button}>
                        {page}
                    </button>
                );
            })}
        </div>
    )
}

const styles = {
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    button: {
      width: '40px',
      height: '40px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: '600',
      fontSize: '16px',
      margin: '0 5px',
      borderRadius: '50%',
      cursor: 'pointer',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      color: '#333',
      transition: 'background-color 0.3s, color 0.3s',
    },
    activeButton: {
      width: '40px',
      height: '40px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: '600',
      fontSize: '16px',
      margin: '0 5px',
      borderRadius: '50%',
      cursor: 'pointer',
      border: '1px solid #ccc',
      backgroundColor: '#007bff',
      color: '#fff',
      transition: 'background-color 0.3s, color 0.3s',
    },
};

Pagination.propTypes = {
    totalPosts: PropTypes.number,
    postsPerPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.number,
}

export default Pagination;
