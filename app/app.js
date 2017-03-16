// Vendor
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import dndLists from 'angular-drag-and-drop-lists'
import 'angular-material/angular-material.css'


// App
import AppComponent from './app.component';
import Components from './components';
import Common from './common';

const app = angular
    .module('app', [
        Components,
        Common,
        uiRouter,
        'ngMaterial',
        'dndLists'
    ])
    .component('app', AppComponent)
    .name;

export default app;