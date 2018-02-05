export default angular
.module('basfront.monitor',[
	'ui.router',
	'ngMaterial',
	'ngResource'
])
.config(stateConfig);

function stateConfig($stateProvider){
	$stateProvider.state('monitorState',{
		url: '/monitor',
		templateUrl: 'monitor/monitor.html'
	});
}