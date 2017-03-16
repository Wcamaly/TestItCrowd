import containerDragAndDropController from './containerDragAndDrop.controller';
import './containerDragAndDrop.css';

const containerDragAndDropComponent = {
	bindings:{
		models : '=',

	},
	controller: containerDragAndDropController,
	template : `
		<md-content layout="column" layout-aling="" class="margin-top" >
			<md-toolbar class="md-default">
			    <div class="md-toolbar-tools">
			      <h2 class="md-flex">{{$ctrl.models.dropzones.title}}</h2>
			    </div>
			</md-toolbar>
			<div  class="dropzone">
				<list-item list="$ctrl.models.dropzones.list" models="$ctrl.models"></list-item>
			</div>
		</md-content>
	`
}

export default containerDragAndDropComponent;