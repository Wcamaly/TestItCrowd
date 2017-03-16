import angular from 'angular';
import itemComponent from './item.component';


const item = angular
  .module('app.component.category.listItem.item', [
    
  ])
  .component('item', itemComponent)
  .name;

export default item;