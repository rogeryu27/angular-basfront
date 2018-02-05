import {jobListConfig} from './list/stateconfig.js'


function jobListResource($resource){
    return $resource('job/list/job.json');
}

export default angular
.module('basfront.job', [
	'ui.router',
	'ngMaterial',
	'ngResource',
	'mdDataTable',
])
.config(stateConfig)
.factory('basJobListResource', jobListResource)

function stateConfig($stateProvider){
	$stateProvider.state('jobState', {
		abstract: true,
        template: '<ui-view/>',
	}).state('jobListState', jobListConfig);
}

// function jobController($scope, $mdToast){
// 	$scope.selectedRowCallback = function(rows){
//             $mdToast.show(
//                 $mdToast.simple()
//                     .content('Selected row id(s): '+rows)
//                     .hideDelay(3000)
//             );
//         };
// }