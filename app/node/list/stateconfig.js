class addNodeController{

}


class NodeListController {
	constructor(nodeList, $mdToast, $mdDialog){
		this.nodeList = nodeList;
		this.mdToast = $mdToast;
		this.mdDialog = $mdDialog;
	}

	selectedRowCallback(rows){
        this.mdToast.show(
            this.mdToast.simple()
                .content('Selected row id(s): '+rows)
                .hideDelay(3000)
        );
    };

    addNode(ev){
    	this.mdDialog.show({
	      controller: addNodeController,
	      templateUrl: 'node/list/add_node.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    	}).then(function(answer) {
        }, function() { 
        });
    }
}

// const nodeListComponent = {
// 	controller: NodeListController,
// 	templateUrl: 'node/list/nodelist.html'
// }

function resolveNodeList(basNodeListResource){
    return basNodeListResource.query();
}

export const nodeListConfig = {
		url: '/nodes/list',
        resolve: {
            'nodeList': resolveNodeList,
        },
		views: {
			'': {
                controller: NodeListController,
                controllerAs: '$ctrl',
				templateUrl: 'node/list/node_list.html',
			},
		},
}




