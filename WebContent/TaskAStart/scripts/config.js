try{
/*
 * Do not edit this file by hand
 */ 
var TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart_module = angular.module('TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart', ['adf.provider','builder','builder.components','validator.rules'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart', {
        title: 'TaskAStart',
        editTitle :'TaskAStart Settings',
        description: 'TaskAStart Description',
        templateUrl: '/<<CONTEXT_ROOT>>/TaskAStart/views/view.xhtml',
        controller: 'TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart_Controller',
        controllerAs: 'TaskAStart',
        frameless : 'false',
        previewImage: '/<<CONTEXT_ROOT>>/images/TaskAStart/default.png',
        edit: {
          templateUrl: '/<<CONTEXT_ROOT>>/TaskAStart/views/settings.xhtml'
        },
        application : "TaskProject_20171017_459PM",
        gadgetGroup: "TaskProject_20171017_459PM",
        id: "TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart",
        widgetName : "TaskAStart",
        defaults:{ "title": "TaskAStart",
  	      "structure": "6-6",
  	      "rows": [{
  	        "columns": [{
  	          "styleClass": "col-md-12",
  	          "widgets": [ {
  	              "type": "TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart",
  	              "title": "",
  	              "config": {
  	            	  "params":{
  	            	         
                                },
  	            	  "title":""
  	              	}
  	            }]
  	        }]
  	      }]
  	  }
              });
  });
   if(angular.module('TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart')){
    	wmBCGadgets.requires.push('TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart');
    	
    	TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart_module.run(function(){
    		try{
	    		var dep=['builder','builder.components','validator.rules'];//define list of dependencies
	        	for(var module in dep){
	        		if(dep.hasOwnProperty(module)){
	        			angular.module(dep[module]);
	        			TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart_module.requires.push(dep[module]);
	        		}
	        	}
    		}catch(exception){
    			console.error("Gadget Exception: "+exception);
    		}
    	});
    	 
    }

}
catch(exception){
	angular.module('wmBCGadgets').run(function(dashboard){
		dashboard.widgets["TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart"]= TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart_module;
	})
	TaskAStart_bbd9c2d9_46fe_40bb_9f0c_3144e96e767aStart_module["error"]=exception;
	throw new GadgetException(exception);
}