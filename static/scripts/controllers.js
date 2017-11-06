var app = angular.module('testctrl', [ ]);



// app.controller('twocntrl',['$scope','UserService','testservice',function($scope,UserService,testservice){
// 		$scope.test = "hello welcome to angular js";
// 		$scope.firstuser = UserService.first();
// 		$scope.name = testservice.name();
// 		$scope.mesg  = testservice.message();
// }]);	

// app.controller('eventController',['$scope','$http','UserService','movie','NodeAppBaseUrl',function($scope,$http,UserService,movie,NodeAppBaseUrl){

// 		$scope.addEvent = function(event) {
// 			event.preventDefault();
// 			console.log("succ");
// 			console.log($scope.eventName);
// 			console.log($scope.eventDesc);
// 			console.log($scope.createdBy);
// 			$http({
// 		      method: 'POST',
// 		      url: NodeAppBaseUrl.url + '/api/addevent/',
// 		      data: {
// 		        eventName: $scope.eventName,
// 		        eventDesc: $scope.eventDesc,
// 		        createdBy: $scope.createdBy
// 		      }
// 		    }).then(function success(response) {
// 		    	console.log(response);

// 		      // $scope.data = response.data;
// 		      if (response.data.result == 1) {
// 		        window.location="/events";
// 		      } 
// 		      // else if ($scope.data.result == 0) {
// 		      //   //console.log("error");
// 		      //   $scope.errormsg = true;
// 		      //   $scope.showerror = response.data.message;
// 		      //   $('#loading').hide();
// 		      //   $('#container').fadeIn();
// 		      // }
// 		    });


// 		};


// }]);	
// app.controller('indexController',['$scope','$http','UserService','movie','NodeAppBaseUrl',function($scope,$http,UserService,movie,NodeAppBaseUrl){

// 		$scope.signUp = function() {
// 			event.preventDefault();
// 			console.log("succ");
// 			$http({
// 		      method: 'POST',
// 		      url: NodeAppBaseUrl.url + '/api/signup/',
// 		      data: {
// 		        email: $scope.email,
// 		        password: $scope.password
// 		      }
// 		    }).then(function success(response) {
// 		    	console.log(response)
// 		    	if(response.data.result==1){
// 		    		window.location="/login";
// 		    	}

// 		    });


// 		};


// }]);
// app.controller('LoginController',['$scope','$http','UserService','movie','NodeAppBaseUrl',function($scope,$http,UserService,movie,NodeAppBaseUrl){
	
// 	$scope.signIn = function() {
// 		$http({
// 	      method: 'POST',
// 	      url: NodeAppBaseUrl.url + '/api/signin/',
// 	      data: {
// 	        email: $scope.email,
// 	        password: $scope.password
// 	      }
// 	    }).then(function success(response) {
// 	    	console.log(response)
// 	    	if(response.data.result==1){
// 	    		window.location="/events";
// 	    	}
// 	    });
// 	};

// }]);
// app.controller('ListController',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl){
	
// 	$scope.getEvents = function() {
// 		GetDataService.getEvents().then(function(res) {
// 			// console.log(res);
// 	      if (res.result == 1) {
// 	      	console.log(res);
// 	        $scope.eventList = res.data;
// 	        // $scope.emailprf = res.preferences;
// 	        // $scope.resetsetting();
// 	      }
// 	    });
// 	};
// 	$scope.getEvents();

// }]);
// // 
// app.controller('ChatController',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl){
	
// 	$scope.sendMsg = function() {

// 	};

// }]);
// app.controller('TestController',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl){
	
// 	$scope.sendMsg = function() {

// 	};

// }]);

// app.controller('SideBarController',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl){
	
// 	$scope.sidebar = "dsfasdfasdfasdf";

// }]);
// app.controller('center1Controller',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl){
	
// 		$scope.center = "zxczxvc";


// }]);
// app.controller('center2Controller',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl){
	
// 			$scope.center = "qwerqwer";


// }]);
// app.controller('pdfCtrl',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl){
	
// 	$scope.pdfUrl = 'assets/techspecs.pdf';
// 	$scope.pdfName = 'test';
// 	$scope.scroll = 0;
// 	$scope.loading = 'loading';

// 	$scope.getNavStyle = function(scroll) {
// 		if(scroll > 100) return 'pdf-controls fixed';
// 		else return 'pdf-controls';
// 	}

// 	$scope.onError = function(error) {
// 		console.log(error);
// 	}

// 	$scope.onLoad = function() {
// 		$scope.loading = '';
// 	}

// 	$scope.onProgress = function (progressData) {
// 		console.log(progressData);
// 	};

// }]);
// app.controller('pdfListCtrl',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl','$timeout',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl,$timeout){
	
// // $scope.pdf = 'assets/pdftest.pdf';
//     var url = 'assets/techspecs.pdf';

//  	$scope.pdf = {
//         src: url,  // get pdf source from a URL that points to a pdf
//         data: null // get pdf source from raw data of a pdf
//     };

//     getPdfAsArrayBuffer(url).then(function (response) {
//         $scope.pdf.data = new Uint8Array(response.data);
//     }, function (err) {
//         console.log('failed to get pdf as binary:', err);
//     });

//     function getPdfAsArrayBuffer (url) {
//         return $http.get(url, {
//             responseType: 'arraybuffer',
//             headers: {
//                 'foo': 'bar'
//             }
//         });
//     }

// }]);


app.controller('homecontroller',['$scope','$http','UserService','GetDataService','NodeAppBaseUrl',function($scope,$http,UserService,GetDataService,NodeAppBaseUrl){
	
			$scope.addInfo = function() {
				console.log($scope.name);
				console.log($scope.desc);
				$http({
			      method: 'POST',
			      url: NodeAppBaseUrl.url + '/api/addinfo/',
			      data: {
			        name: $scope.name,
			        desc: $scope.desc
			      }
			    }).then(function success(response) {
			    	console.log(response);
			    });
		    };	

}]);