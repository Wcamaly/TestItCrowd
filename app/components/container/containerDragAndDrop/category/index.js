import angular from 'angular';
import categoryComponent from './category.component';


// Imports aditional Directives
import listItem from '../listItem/listItem';


// Defination and configuration Components
const category = angular
  .module('app.component.containerDragAndDropComponent.category', [
    listItem

  ])
  .component('category', categoryComponent)
  .name;

export default category;