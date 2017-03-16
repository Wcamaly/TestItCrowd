class listItemController {
  constructor() {
    
  }
  $onInit() {
    
  }
  $onChanges(changes) {
  	if (changes.list) {
      this.list = Object.assign({}, this.list);
    }
    if (changes.models) {
      this.models = Object.assign({}, this.models);
    }

  }
  isCategory(value){
    return value === 'category';
  }
  isItem(value){
    return value === 'item';
  }
}



export default listItemController;