import React from 'react';
import developerImg from '../../../assets/developer.png'
import testerImg from '../../../assets/tester.png'
import designerImg from '../../../assets/designer.png'
import defaultImg from '../../../assets/default.png'


const jobCard = (props) => {

  let img = null;

  switch (props.area) {
    case 'Dev':
      img = developerImg;
      break;
    case 'Test':
      img = testerImg;
      break;
    case 'Design':
      img = designerImg;
      break;
    default:
      img = defaultImg;
      break;
  }

    return(
      <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
      <div className="card">
        <img className="card-img-top" src={img} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div>
            <b>Descrição:</b>
            <p>{props.description}</p>

            <b>Salário base:</b>
            <p>R$ {props.salary}</p>

          </div>
          <button onClick={ props.editHandler } data-toggle="collapse" data-target={ '#' + props.panelId } className="btn btn-warning">
            <i className="far fa-edit"></i>
          </button>

          <button onClick = {props.removeHandler} className="btn btn-danger ml-1">
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
      </div>
)}

export default jobCard;