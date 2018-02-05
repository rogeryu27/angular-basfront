import {nodeListConfig} from './list/stateconfig.js'
import {nodeDetailConfig} from './detail/stateconfig.js'


function nodeListResource($resource){
    return $resource('node/list/node.json');
}

function nodeResource($resource, $stateParams){
	return $resource('api/v1/node/{${$stateParams.objectName}')
}

export default angular
.module('basfront.node', [
	'ui.router',
	'ngMaterial',
	'ngResource',
	'mdDataTable',
])
.config(stateConfig)
.factory('basNodeListResource', nodeListResource)
.factory('baseNodeResource', nodeResource);

function stateConfig($stateProvider){
	$stateProvider.state('nodeState', {
		abstract: true,
        template: '<ui-view/>',
	}).state('nodeListState', nodeListConfig)
	.state('nodeDetailState', nodeDetailConfig);
}

// function nodeController($scope, $mdToast){
// 	$scope.selectedRowCallback = function(rows){
//             $mdToast.show(
//                 $mdToast.simple()
//                     .content('Selected row id(s): '+rows)
//                     .hideDelay(3000)
//             );
//         };
// }