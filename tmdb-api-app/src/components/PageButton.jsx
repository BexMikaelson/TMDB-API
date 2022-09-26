const PageButton = ({ pg, setPage }) => {
    return <button className="pagination-button activ" onClick={() => setPage(pg)}>{pg}</button>
}

export default PageButton