class NodeDetailController {
	// constructor(nodeList){
	// 	this.nodeList = nodeList;
	// }
}

// const nodeListComponent = {
// 	controller: NodeListController,
// 	templateUrl: 'node/list/nodelist.html'
// }

// function resolveNodeList(basNodeListResource){
//     return basNodeListResource.query();
// }

export const nodeDetailConfig = {
		url: '/nodes/detail',
        resolve: {
            'nodeDetail': getNodeDetail,
        },
		views: {
			'': {
                controller: NodeDetailController,
                controllerAs: '$ctrl',
				templateUrl: 'node/detail/node_detail.html',
			},
		},
}

function getNodeDetail(basNodeResource, $stateParams){
	return basNodeResource.query();
}
