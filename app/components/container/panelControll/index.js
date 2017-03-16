// IMPORTS
import angular from 'angular';
import panelControllComponent from './panelControll.component';


// Imports aditional Directives
import actionChange from './actionChange';
import actionDelete from './actionDelete';
import actionNew from './actionNew'
// Defination and configuration Components
const panelControll = angular
  .module('app.component.panelControll', [
    actionNew,
    actionDelete,
    actionChange
  ])
  .component('panelControll', panelControllComponent)
  .name;

export default panelControll;