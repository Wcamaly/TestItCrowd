// IMPORTS
import angular from 'angular';
import actionNewComponent from './actionNew.component';


// Imports aditional Directives

// Defination and configuration Components
const actionNew = angular
  .module('app.component.actionNew', [
  ])
  .component('actionNew', actionNewComponent)
  .name;

export default actionNew;