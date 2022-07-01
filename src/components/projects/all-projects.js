import { Fragment } from 'react'
import ProjectsGrid from './services-grid'
import { useState } from 'react'

function AllProjects(props) {
  const [services, setProjects] = useState(props.services)

  const onFilterHandler = e => {
    e.preventDefault()
    const target = e.target
    const filterValue = target.dataset.filter
    const filteredProject = props.services.filter(pro => pro.category === filterValue)
    filterValue === 'all' ? setProjects(props.services) : setProjects(filteredProject)
  }
  return (
    <Fragment>
      <div className='container'>
        <div className='filter-tab flex xl:justify-end flex-wrap text-[#30373E] uppercase md:pb-155 pb-[55px] max-lg:pt-[55px]'>
          <button onClick={onFilterHandler} data-filter='all'>
            All
          </button>
          <button onClick={onFilterHandler} className='ml-10' data-filter='residenital'>
            Residenital
          </button>
          <button onClick={onFilterHandler} className='ml-10' data-filter='commercial'>
            Commercial
          </button>
          <button onClick={onFilterHandler} className='sm:ml-10 fixed-xs:mt-[10px]' data-filter='suitanable-space'>
            Suitantable Space
          </button>
        </div>
      </div>
      <div className='grid xl:grid-cols-4 fixed-lg:grid-cols-3 fixed-md:grid-cols-2 gap-[5px]'>
        <ProjectsGrid services={services} />
      </div>
    </Fragment>
  )
}

export default AllProjects
