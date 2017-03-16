import angular from 'angular';
import Header from './header';
import Footer from './footer';

const common = angular
  .module('app.common', [
    Header,
    Footer
  ])
  .name;

export default common;