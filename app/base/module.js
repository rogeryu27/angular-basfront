import { baseComponent } from './component.js'

export default angular.module('basefront.base', [
	'ui.router',
	'ngMaterial'
])
// .component('barBase', {
// 	templateUrl: 'base/base.html',
// });
.config(stateConfig)
.component('barBase', baseComponent);

function stateConfig($stateProvider){
	$stateProvider.state('baseState', {
		url: '/index',
		template: '<span></span>'
	});
}
