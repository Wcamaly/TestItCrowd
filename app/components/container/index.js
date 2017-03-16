import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LocalForageModule from 'angular-localForage';

import containerComponent from './container.component';
import containerService from './container.services';
import containerDragAndDrop from './containerDragAndDrop';
import panelControll from './panelControll';


const container = angular
  .module('app.components.container', [
  	uiRouter,
    LocalForageModule,
    containerDragAndDrop,
    panelControll
  ])
  .component('container',containerComponent)
  .service('containerService',containerService)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('app', {
        url: '/app',
        component: 'container',
       
      })
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default container;