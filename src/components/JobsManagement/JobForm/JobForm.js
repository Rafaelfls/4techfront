import React from 'react';
import axios from 'axios';

export default class jobForm extends React.Component {

  state ={
    newJob: {...this.objModel },
    idEditing: false
  }

  objModel = Object.freeze({
    name: '',
    description:'',
    skills:'',
    differentials:'',
    salary:'',
    area:'',
    isPcd: false
  }) 

  postJobHandler = (event) =>{
    // this.props.addItemList({...this.state.newJob})

    let objId = '';

    if (this.state.newJob.id) { // se tem id é uma edição
      axios.put('/jobs/' + this.state.newJob.id, this.state.newJob)
        .then(response => {
          this.props.editedHandler(this.state.newJob.id, this.state.newJob);
          this.setState({ newJob: { ...this.objModel } }); //limpar form
        })
        .catch(error => {
          alert('Deu erro no servidor!');
          console.error(error);
        });
    } else {

      axios.post('/jobs', this.state.newJob)
        .then(response => {
          objId = response.data;
          this.props.addItemList({ id: objId, ...this.state.newJob });
          this.setState({ newJob: { ...this.objModel } }); //limpar form
        })
        .catch(error => {
          alert('Deu erro no servidor!');
          console.error(error);
        });
    }
    event.preventDefault();
    // this.setState({newJob:{...this.objModel}})
  }



  componentDidUpdate() {

    console.log('did update - id: ' + this.props.editJobId);
    if (this.props.editJobId && !this.state.isEditing) {
      axios.get('/jobs/' + this.props.editJobId)
        .then(response => {
          this.setState({ newJob: response.data, isEditing: true });
        })
        .catch(error => {
          alert('Deu erro no servidor!');
          console.error(error);
        });
      }

  }

  shouldComponentUpdate(nextProps, nextState) {
    let hasChanged = false;
    if (this.props.editJobId !== nextProps.editJobId) {
      hasChanged = true;
    }
    Object.keys(nextState.newJob).forEach(key => {
      if (this.state.newJob[key] !== nextState.newJob[key]) {
        hasChanged = true;
      }
    });

    return hasChanged;
  }



  onValueChangeHandler = (attrName , value) =>{
    // let currentJob = this.state.newJob;
    let currentJob = { ...this.state.newJob };
    currentJob[attrName] = value;
    this.setState({newJob: currentJob});
  }


  clearFormHandler = () => {
    this.setState({ newJob: { ...this.objModel }, isEditing: false }); //limpar form
    this.props.clearSelectedId();
  }


  render(){

    return(
        <form className="row mb-0" onSubmit={this.postJobHandler}>
          <div className="form-group col-12" >
            <label for="nome">Nome *</label>
            <input type="text" className="form-control" id="nome" required value = {this.state.newJob.name} onChange={ (event) => this.onValueChangeHandler('name',event.target.value)} />
          </div>
          <div className="form-group col-12">
            <label for="descricao">Descrição *</label>
            <textarea className="form-control" id="descricao" rows="3" required value = {this.state.newJob.description} onChange={ (event) => this.onValueChangeHandler('description',event.target.value)} ></textarea>
          </div>
          <div className="form-group col-sm-12 col-md-6">
            <label for="habilidades">Habilidades necessárias</label>
            <textarea className="form-control" id="habilidades" rows="3" value = {this.state.newJob.abilities} onChange={ (event) => this.onValueChangeHandler('abilities',event.target.value)}></textarea>
          </div>
          <div className="form-group col-sm-12 col-md-6">
            <label for="diferenciais">Diferenciais</label>
            <textarea className="form-control" id="diferenciais" rows="3" value = {this.state.newJob.differentials} onChange={ (event) => this.onValueChangeHandler('differentials',event.target.value)}></textarea>
          </div>
          <div className="form-group col-sm-12 col-md-6">
            <label for="salario">Salário Base *</label>
            <input type="text" className="form-control" id="salario" required value = {this.state.newJob.salary} onChange={ (event) => this.onValueChangeHandler('salary',event.target.value)}/>
          </div>
          <div className="form-group col-sm-12 col-md-6">
            <label for="area">Área*</label>
            <select className="form-control" id="area" required value = {this.state.newJob.area} onChange={ (event) => this.onValueChangeHandler('area',event.target.value)}>
              <option value=''>Selecione...</option>
              <option value ='Dev'>Development</option>
              <option value ='Design'>Design</option>
              <option value ='Test'>Test</option>
            </select>
          </div>
          <div className="form-group form-check col-sm-12 col-md-6 ml-3">
            <input type="checkbox" className="form-check-input" id="isPcd" checked = {this.state.newJob.isPcd} onChange={ (event) => this.onValueChangeHandler('isPcd',event.target.checked)} />
            <label className="form-check-label" for="isPcd">Vaga para PCD</label>
          </div>

          <div className="col mt-3 d-flex flex-row-reverse">
          <button onClick={this.clearFormHandler} className="btn btn-light mr-1" data-toggle="collapse" data-target={'#' + this.props.panelId}>Cancelar</button>
          <button type="submit" className="btn btn-success" data-toggle="collapse" data-target={'#' + this.props.panelId}>Salvar vaga</button>
          </div>
        </form>
    )
  }

}
