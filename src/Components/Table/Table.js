import React, { useEffect, useState } from 'react'
import { ITEM_PER_PAGE, WEB_API_URL } from '../../Constants';
import Pagination from '../Pagination/Pagination';
import './Table.css';

const Table = () => {

const [projectsData, setProjectsData] = useState([]);
const [currentPage, setCurrentPage] = useState(1);

const fetchProjects = async (url)=>{
    const response = await fetch(url);
    const data = await response.json();
    setProjectsData(data);
}

useEffect(()=>{
    fetchProjects(WEB_API_URL);
}, []);

const handlePageChange = (number)=>{
    setCurrentPage(number)
}

const startIndex = ITEM_PER_PAGE * (currentPage-1);
const endIndex = ITEM_PER_PAGE * currentPage;

  return (
    
    <div className='container'>
      <table className='tableBody'>
        <thead>
            <tr className='tableHeaderRow'>
                <th className='tableHeader thFirstCellRadius'>S.No.</th>
                <th className='tableHeader'>Percentage Funded</th>
                <th className='tableHeader thLastCellRadius'>Amount Pledged</th>
            </tr>
            <tr></tr>
            <tr></tr>
            </thead>
            <tbody>
            {projectsData.slice( startIndex, endIndex).map((val, key) => {
                return (
                    <tr className='tableDataRow' key={key} data-testid={`key-${val['s.no']}`}>
                        <td className='tableData' >{val['s.no']}</td>
                        <td className='tableData'>{val['percentage.funded']}</td>
                        <td  className='tableData'>{val['amt.pledged']}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        {projectsData?.length > ITEM_PER_PAGE &&
            <Pagination
            totalItems={projectsData?.length}
            itemsPerPage={ITEM_PER_PAGE}
            currentPage={currentPage}
            onPageChange={handlePageChange}
        />
        }
        
        
    </div>
  )
}
export default Table
