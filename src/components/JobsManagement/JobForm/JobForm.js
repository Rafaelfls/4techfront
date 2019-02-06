import React from 'react';

export default class jobForm extends React.Component {

  state ={
    newJob: { }
  }

  postJobHandler = (event) =>{
    this.props.addItemList(this.state.newJob)
    event.preventDefault();
  }

  onValueChangeHandler = (attrName , value) =>{
    let currentJob = this.state.newJob;
    currentJob[attrName] = value;
    this.setState({newJob: currentJob});
  }

  render(){

    return(
        <form className="row mb-0" >
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
            <input type="text" className="form-control" id="salario" required value = {this.state.newJob.sallary} onChange={ (event) => this.onValueChangeHandler('sallary',event.target.value)}/>
          </div>
          <div className="form-group col-sm-12 col-md-6">
            <label for="area">Área</label>
            <select className="form-control" id="area" value = {this.state.newJob.area} onChange={ (event) => this.onValueChangeHandler('area',event.target.value)}>
              <option value ='Dev'>Development</option>
              <option value ='Design'>Design</option>
              <option value ='Test'>Test</option>
            </select>
          </div>
          <div className="form-group form-check col-sm-12 col-md-6 ml-3">
            <input type="checkbox" className="form-check-input" id="isPcd" checked = {this.state.newJob.isPcd} onChange={ (event) => this.onValueChangeHandler('isPcd',event.target.checked)} />
            <label className="form-check-label" for="isPCD">Vaga para PCD</label>
          </div>

          <div className="form-group col-12 text-right mb-0">
            <button type="submit" className="btn btn-success" onClick={this.postJobHandler}>Criar vaga</button>
          </div>

        </form>
    )
  }

}
