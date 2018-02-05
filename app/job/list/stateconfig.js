class addJobController {

}

class jobListController {
	constructor(jobList, $mdToast, $mdDialog){
		this.jobList = jobList;
		this.mdDialog = $mdDialog;
	}

	addJob(ev){
    	this.mdDialog.show({
	      controller: addJobController,
	      templateUrl: 'job/list/add_job.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    	}).then(function(answer) {
        }, function() { 
        });
    }
}

// const jobListComponent = {
// 	controller: jobListController,
// 	templateUrl: 'job/list/joblist.html'
// }

function resolvejobList(basJobListResource){
    return basJobListResource.query();
}

export const jobListConfig = {
		url: '/jobs/list',
        resolve: {
            'jobList': resolvejobList,
        },
		views: {
			'': {
                controller: jobListController,
                controllerAs: '$ctrl',
				templateUrl: 'job/list/job_list.html',
			},
		},
}




