import  React  from 'react';


const collapse = (props) =>(
    <div>
        <p>
            <a className={'btn ' + props.btnClass} data-toggle="collapse" data-target="#collapseExample" href={"#"+props.collapseId}>
                {props.buttonText}
            </a>
            <div className="collapse mb-3" id="collapseExample" href={"#"+props.collapseId}>
                {props.children}
            </div>
        </p>
    </div>
)

export default collapse;