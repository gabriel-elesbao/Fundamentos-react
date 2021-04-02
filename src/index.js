import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/layout/Card'

// import Primeiro from './components/Pirmeiro'
// import WithParameters from './components/WithParameters';
// import WithChildren from './components/WithChildren';

ReactDOM.render(    // esse metodo vai receber o elemento a qual eu quero redenrizar 
    <div>

        {/* <Primeiro>  </Primeiro>

        <WithParameters 
        title="This is the title"
        subtitle="This is the subtitle"> </WithParameters>

        <WithParameters 
        title="Opa"
        subtitle="Epa"> </WithParameters> */}
        {/* <WithChildren> 
            <ul>
              <h1>teste</h1>
                <li>Ana</li>
                <li>Calros</li>
                <li>Bia</li>
                <li>Daniel</li>
            </ul>
        </WithChildren> */}
        <div>
            <Card title = "Exercicio X">
                 Conteudo
            </Card>  
            
        </div>

    </div>,
    

    document.getElementById('root')
);  
 