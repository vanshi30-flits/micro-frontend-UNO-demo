import React from 'react';
import './pagination.css';

const PaginationPageCompo = ({ totalData, currentPage, dataPerPage, handlePageNumberClick }) => {

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentPageData = totalData.slice(indexOfFirstData, indexOfLastData);    

    // logic to display page number
    let pageNumbers = [];    
    for (let i = 1; i <= Math.ceil(totalData.length / dataPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers);
    
    const handleSelectedCSS = (e) => {
        e.preventDefault();
        console.log("heyafirst");

        if (currentPage === e.target.id) {
            console.log("heya");
            e.target.classList.add('pagination-nav-page-btn-selected');
        }
    }

    // const handleLeftArrowClick = (e) =>{
    //     e.preventDefault();

    // }
    return (
        <>

            {pageNumbers.map((number) => {
                return (

                    <>                        
                        <li className='pagination-nav-page-btn-container'>                            
                            <button className={currentPage === number ? 'pagination-nav-page-btn-selected pagination-nav-page-btn2' : 'pagination-nav-page-btn2'} id={number} onClick={(e) => { handlePageNumberClick(e); handleSelectedCSS(e) }}>
                                {number}
                                <span className='pagination-nav-page-span'></span>
                            </button>
                        </li>                    
                    </>
                )
            })}


            
        </>
    )
}

export default PaginationPageCompo
