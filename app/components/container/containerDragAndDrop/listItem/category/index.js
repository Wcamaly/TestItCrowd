import angular from 'angular';
import categoryComponent from './category.component';


// Imports aditional Directives



// Defination and configuration Components
const category = angular
  .module('app.component.containerDragAndDrop.category', [

  ])
  .component('category', categoryComponent)
  .name;

export default category;