import angular from 'angular';
import containerDragAndDropComponent from './containerDragAndDrop.component';



// Imports aditional Directives
import listItem from './listItem'


// Defination and configuration Components
const containerDragAndDrop = angular
  .module('app.component.containerDragAndDropComponent', [
    listItem
  ])
  .component('containerDragAndDrop', containerDragAndDropComponent)
  .name;

export default containerDragAndDrop;