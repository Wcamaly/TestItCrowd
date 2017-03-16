// IMPORTS
import itemController from './item.controller';
import './item.css';

// Definition 
const itemComponent ={
  bindings:{
    card:'<',
  },
	controller: itemController,
  template : `
	    <md-card >
        <md-card-title>
          <md-card-title-text>
            <span class="md-headline">{{$ctrl.card.title}}</span>
          </md-card-title-text>
        </md-card-title>
        <md-card-content>
          <p>
           	{{$ctrl.card.description}}
          </p>
        </md-card-content>
      </md-card>
    `
}

export default itemComponent;