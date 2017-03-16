class containerDragAndDropController {
	constructor() {
	
	}
	$onInit() {    
		
	}
	$onChanges(changes) {
		if(changes.models){
			this.models = Object.assign({}, this.models);
		}
	}
}

export default containerDragAndDropController;