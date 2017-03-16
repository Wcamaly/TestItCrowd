// IMPORTS
import angular from 'angular';
import actionChangeComponent from './actionChange.component';


// Imports aditional Directives

// Defination and configuration Components
const actionChange = angular
  .module('app.component.actionChange', [
  ])
  .component('actionChange', actionChangeComponent)
  .name;

export default actionChange;