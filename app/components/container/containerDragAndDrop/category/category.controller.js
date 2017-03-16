class categoryController{
  constructor() {
    
  }
  $onInit() {
    
  }
  $onChanges(changes) {
  	if (changes.zone) {
      this.zone = Object.assign({}, this.zone);
    }
    if (changes.list) {
      this.list = Object.assign({}, this.list);
    }
    if (changes.models) {
      this.models = Object.assign({}, this.models);
    }
  }
}



export default categoryController;