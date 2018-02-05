import baseModule from './base/module.js';
import overviewModule from './overview/module.js';
import nodeModule from './node/module.js';
import jobModule from './job/module.js';
import monitorModule from './monitor/module.js';

angular.module('basfront', [
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngResource',
  'ngMaterial',
  baseModule.name,
  overviewModule.name,
  nodeModule.name,
  jobModule.name,
  monitorModule.name,
])
.config(routeConfig)
.config(themeConfig)
.controller('ctrl', function(){

});

function themeConfig($mdThemingProvider){
	var primary = 'brown';
	var accent = 'red';
	$mdThemingProvider.theme('default')
      .primaryPalette(primary)
      .accentPalette(accent);
}

function routeConfig($urlRouterProvider){
 	$urlRouterProvider.otherwise('/nodes/detail');
}