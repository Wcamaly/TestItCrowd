import categoryController from './category.controller';
import './category.css';

const categoryComponent = {
	bindings:{
		models: '=',
		card:'<'
		
	},
	controller: categoryController,
	template : `
			<md-content flex= layout-padding="" >
				<md-toolbar class="md-default">
				    <div class="md-toolbar-tools">
				      <h2 class="md-flex">card.title</h2>
				    </div>
				</md-toolbar>
				
				<list-item list="$ctrl.card.columns" models="models" ></list-item>

			</md-content>


	`
}

export default categoryComponent;