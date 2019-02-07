import React from 'react';
import Collapse from './../navigation/Collapse/Collapse';

import axios from 'axios';

import JobCard from './JobCard/JobCard'
import JobForm from './JobForm/JobForm'

export default class JobsManagement extends React.Component {

  state = {
    jobs: [],
    hasError: false,
    selectedId:''
  }

  jobCreateHandler = (paramNewJob) =>{
    let newList = this.state.jobs;
    newList.push(paramNewJob);
    this.setState({jobs: newList});
  }

  jobEditHandler = (paramId) => {
    console.log(paramId);
    this.setState({ selectedId: paramId });
  }

  jobEditedHandler = (paramId, newJobData) => {
    const index = this.state.jobs.findIndex(job => job.id === paramId);
    let jobsList = this.state.jobs;
    jobsList[index] = newJobData;
    this.setState({ jobs: jobsList });
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

  componentDidMount() {
    axios.get('/jobs')
      .then(response => {
        this.setState({ jobs: response.data })
      })
      .catch(error => {
        console.error(error);
      })
  }

  clearSelectedId = () => {
    this.setState({ selectedId: '' });
  }

  render(){

    const renderJobs = this.state.jobs.map(job =>{
      return <JobCard key= {job.id}
                      name={job.name}
                      description={job.description}
                      salary={job.salary}
                      area={job.area}
                      panelId="newJobForm"
                      removeHandler={() => this.jobRemoveHandler(job.id, job.name)}
                      editHandler={() => this.jobEditHandler(job.id)} 
                      />
    })
    
    return(
      <div>
          <Collapse buttonText ="Criar Vaga" btnClass = "btn-secondary" collapseId ="criarVaga">
          <JobForm addItemList={ this.jobCreateHandler } 
            editJobId={ this.state.selectedId } panelId="newJobForm"
            clearSelectedId={ this.clearSelectedId }
            editedHandler={ this.jobEditedHandler }/>
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

