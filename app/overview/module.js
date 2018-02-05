export default angular
.module('basfront-overview', [
		'ngMaterial',
		'ui.router'
])
.config(stateConfig);
// .component()

function stateConfig($stateProvider) {
	$stateProvider.state('overviewState', {
		url: '/overview',
		views: {
			'': {
				templateUrl: 'overview/overview.html',
			},
		},
	});
}