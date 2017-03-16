// IMPORTS
import angular from 'angular';
import actionDeleteComponent from './actionDelete.component';


// Imports aditional Directives

// Defination and configuration Components
const actionDelete = angular
  .module('app.component.actionDelete', [
  ])
  .component('actionDelete', actionDeleteComponent)
  .name;

export default actionDelete;