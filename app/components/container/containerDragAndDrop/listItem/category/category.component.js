import categoryController from './category.controller';
import './category.css';

const categoryComponent = {
	requiere : 'listItem',
	bindings:{
		models: '=',
		card:'<'
		
	},
	controller: categoryController,
	template : `

		<md-card class="category">
	        <md-toolbar class="md-default cursor">
			    <div class="md-toolbar-tools">
			      <h2 class="md-flex">{{$ctrl.card.title}}</h2>
			    </div>
			</md-toolbar>
	        <md-card-content>
	          <list-item list="$ctrl.card.columns" models="$ctrl.models" flex="100" ></list-item>
	        </md-card-content>
	    </md-card>
	`
}

export default categoryComponent;