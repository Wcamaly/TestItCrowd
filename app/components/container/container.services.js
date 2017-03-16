class containerService {
  constructor($localForage,$q) {
    this.localForage =$localForage ;
    this.$q = $q;
  }

  // Save the Change in the model
  changes(dragonZone) {
    this.localForage.setItem('dragonZone',dragonZone).then(
    	() =>  true, () => false)
  }













  // Get the model
  getModel (){
    
      var deferred = this.$q.defer();

      this.localForage.getItem('dragonZone').then(
        (value)=>{
          if(value != null){
            deferred.resolve(value);
          }else{
            deferred.resolve([]);
          }
          console.log('VALUE',value);
        })      
      return deferred.promise;
  }

}
containerService.$inject = ['$localForage','$q'];

export default containerService;