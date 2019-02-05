import React from 'react';

import JobCard from './JobCard/JobCard';

class JobsList extends React.Component {

  state = {
    jobs: [
      {name: 'Desenvolvedor jr', description: ' doaejfnifpona', sallary:'1500,00', area:'Dev'},
      {name: 'Tester jr', description: ' fvbavawrdv', sallary:'1000,00', area:'Test'}
    ]
  }
  render(){

    const renderJobs = this.state.jobs.map(job =>{
      return <JobCard name={job.name} description={job.description} sallary={job.sallary} area={job.area}/>
    })
    
    return(
        <div className="row">
        { renderJobs }
        </div>
    )
  }
}

// const jobsList = () => (
//   <div className="row">
//     <JobCard/>
//     <JobCard/>
//     <JobCard/>

//   </div>
// );

export default JobsList;
