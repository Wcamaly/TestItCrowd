import angular from 'angular';
import container from './container';


const components = angular
  .module('app.components', [
    container
  ])
 
  .name;

export default components;