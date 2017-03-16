class containerController {
	// Constructor
	constructor(containerService, $scope){
		this.scope= $scope;
		this.scope.models ={
			
		};
	
		this.containerService = containerService;
		
	}
	// Event On Change
	$onChange(changes){
		
	}
	// Event On Init
	$onInit() {
		// Structur Model 
		this.scope.models={
			selected : null,
			templates:[
				{
		            "type": "item",
		            "description":"nuevo",
		            "title":"item",
		            "id": "2"
			    },
           		{type: "category", id: 1, columns: [[], []]}
			],
			dropzones:{
				title : 'Section A',
				list : []
			}
		}


		// Waitin to promise return to models Saves. Function Initializes 
		this.containerService.getModel().then(
			(value)=>{
				this.scope.models.dropzones.list = value;
				console.log('Value',value);
			});

		// Listener to Change in the Models
		this.scope.$watch('models',()=>{
			console.log('change');
			if(this.scope.models.dropzones.list.length > 0)
				this.containerService.changes(this.scope.models.dropzones.list);
		} ,true);
		/*{	dropzones: {		
			  "SecctionA": [
			    {
			      "type": "category",
			      "id": 1,
			      "title":"Box 1",
			      "columns": [
			        [
			          {
			            "type": "item",
			            "description":"nuevo",
			            "title":"item",
			            "id": "1000"
			          },
			          {
			            "type": "item",
			            "description":"nuevo",
			            "title":"item",
			            "id": "1"
			          }
			        ],
			      ]
			    },
			    {
			      "type": "item",
			      "description":"description Box2",
			      "title":"Box 2",
			      "id": "6"
			    }
			  ]
			}


		}*/
	}


}
// Injection dependencies
containerController.$inject = ['containerService','$scope'];

export default containerController;