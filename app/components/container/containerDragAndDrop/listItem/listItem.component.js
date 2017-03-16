// IMPORTS 
import listItemController from './listItem.controller';
import './listItem.css';

// Definition
const listItemComponent = {
	bindings:{
		models:'=',
		list :'='
	},
	controller:listItemController,
	template : `
	 <md-content class="md-padding  bak-color" layout-xs="column" layout="row">
	 		
    		<ul dnd-list="$ctrl.list"  layout-wrap="" class="list-card">
		        <li ng-repeat="card in $ctrl.list"
		            dnd-draggable="card"
		            dnd-effect-allowed="move"
		            dnd-moved="$ctrl.list.splice($index, 1)"
		            dnd-selected="$ctrl.models.selected = card"
		            ng-class="{selected: $ctrl.models.selected === card}"
		            
		            >
		            <category card="card" models="$ctrl.models" ng-if="$ctrl.isCategory(card.type)"> </category>
		            
		            <item card="card" ng-if="$ctrl.isItem(card.type)"></item>
		        	
		            
		        </li>
    		</ul>

    </md-content>
   `
}

export default listItemComponent;