import React from 'react';

import JobCard from './JobCard/JobCard';
import JobForm from './JobForm/JobForm';
import Collapse from './../navigation/Collapse/Collapse';

class JobsList extends React.Component {

  state = {
    jobs: [
      {id: 1, name: 'Desenvolvedor jr', description: ' doaejfnifpona', sallary:'1500,00', area:'Dev'},
      {id: 2, name: 'Tester jr', description: ' fvbavawrdv', sallary:'1000,00', area:'Test'},
      {id: 3, name: 'Designer web jr', description: ' asdvcsadvkja', sallary:'500,00', area:'Design'}
    ]
  }

  jobCreateHandler = (paramNewJob) =>{
    let newList = this.state.jobs;
    newList.push(paramNewJob);
    this.setState({jobs: newList});
  }

  jobRemoveHandler = (paramId, paramName) =>{
    if(window.confirm(`Deseja realmente remover a vaga "${paramName}"?`)){
      const index = this.state.jobs.findIndex((job => job.id === paramId) )

      let newList = this.state.jobs
      newList.splice(index, 1)

      this.setState({jobs: newList})
      
      window.alert(`Vaga ${paramName} Removido com sucesso!`);
    }
  }

  jobEditHandler = (paramName) =>{
    if(window.confirm(`Deseja modificar a vaga "${paramName}"?`)){
      window.alert('Modificado com sucesso!');
    }
  }

  render(){

    const renderJobs = this.state.jobs.map(job =>{
      return <JobCard name={job.name}
                      description={job.description}
                      sallary={job.sallary}
                      area={job.area}
                      removeHandler = {() => this.jobRemoveHandler(job.id, job.name) }
                      editHandler = {() => this.jobEditHandler(job.name) }/>
    })
    
    return(
      <div>
          <Collapse buttonText ="Criar Vaga" btnClass = "btn-secondary" collapseId ="criarVaga">
            <JobForm addItemList ={this.jobCreateHandler}/>
          </Collapse>

          <div className="row">
          { renderJobs }
          </div>
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
