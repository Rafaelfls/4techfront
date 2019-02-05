import React from 'react';

const jobForm = () => (
  <div className="card card-body mb-3">
    <form className="row mb-0">
      <div className="form-group col-12">
        <label for="nome">Nome</label>
        <input type="text" className="form-control" id="nome" />
      </div>
      <div className="form-group col-12">
        <label for="descricao">Descrição</label>
        <textarea className="form-control" id="descricao" rows="3"></textarea>
      </div>
      <div className="form-group col-sm-12 col-md-6">
        <label for="habilidades">Habilidades necessárias</label>
        <textarea className="form-control" id="habilidades" rows="3"></textarea>
      </div>
      <div className="form-group col-sm-12 col-md-6">
        <label for="diferenciais">Diferenciais</label>
        <textarea className="form-control" id="diferenciais" rows="3"></textarea>
      </div>
      <div className="form-group col-sm-12 col-md-6">
        <label for="salario">Salário Base</label>
        <input type="text" className="form-control" id="salario" />
      </div>
      <div className="form-group col-sm-12 col-md-6">
        <label for="area">Área</label>
        <select className="form-control" id="area">
          <option>Dev</option>
          <option>Design</option>
          <option>Test</option>
        </select>
      </div>
      <div className="form-group form-check col-sm-12 col-md-6 ml-3">
        <input type="checkbox" className="form-check-input" id="isPCD" />
        <label className="form-check-label" for="isPCD">Vaga para PCD</label>
      </div>

      <div className="form-group col-12 text-right mb-0">
        <button type="submit" className="btn btn-success">Criar vaga</button>
      </div>

    </form>
  </div>
)
export default jobForm;
