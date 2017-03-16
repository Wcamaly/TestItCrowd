import angular from 'angular';
import itemComponent from './item.component';


const item = angular
  .module('app.component.containerDragAndDrop.listItem.item', [
    
  ])
  .component('item', itemComponent)
  .name;

export default item;