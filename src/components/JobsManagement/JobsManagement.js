import React from 'react';

import JobCard from './JobCard/JobCard';
import JobForm from './JobForm/JobForm';
import Collapse from '../navigation/Collapse/Collapse';

import axios from 'axios';

export default class JobsManagement extends React.Component {

  state = {
    jobs: [],
    hasError: false,
    selectedId: ''
  }

  jobCreateHandler = (paramNewJob) => {
    let newList = this.state.jobs;
    newList.push(paramNewJob);
    this.setState({ jobs: newList });
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

  

  jobRemoveHandler = (paramId, paramName) => {
    if (window.confirm(`Deseja realmente remover a vaga "${paramName}"?`)) {

      axios.delete(`/jobs/${paramId}`, window.getAxiosConfig())
        .then(_ => {
          const index = this.state.jobs.findIndex(job => job.id === paramId);

          let newList = this.state.jobs;
          newList.splice(index, 1);
          this.setState({ jobs: newList });

          window.alert('Removido com sucesso!');
        })
        .catch(error => {
          console.error(error);
        })
    }
  }

  componentWillUnmount() {
    console.log("WILL UNMOUNT");
  }

  componentDidMount() {

    axios.get('/jobs', window.getAxiosConfig())
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


  render() {

    const renderJobs = this.state.jobs.map(job => {
      return <JobCard
        key={job.id}
        id={job.id}
        name={job.name}
        description={job.description}
        salary={job.salary}
        area={job.area}
        panelId="newJobForm"
        removeHandler={() => this.jobRemoveHandler(job.id, job.name)}
        editHandler={() => this.jobEditHandler(job.id)}
      />
    });

    return (
      <div>
        <Collapse buttonText="CRIAR VAGA" btnClass='btn-secondary'
          collapseId="newJobForm">
          <JobForm addItemList={this.jobCreateHandler}
            editJobId={this.state.selectedId} panelId="newJobForm"
            clearSelectedId={this.clearSelectedId}
            editedHandler={this.jobEditedHandler} />
        </Collapse>

        <div className="row">
          {renderJobs}
        </div>
      </div>
    )
  }
}