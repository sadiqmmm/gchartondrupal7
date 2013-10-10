(function($) {
Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {

 var $ = jQuery.noConflict();

$(".group-project-list tr:first").addClass("project-list");
$(".eva-milestone-list tr:first").addClass("milestone-list");
$(".eva-task-list tr:first").addClass("task-list");
$(".eva-milestone-task-list tr:first").addClass("task-list");

$("#block-system-main .field-name-og-group-ref .field-item a").addClass("project-title");
$("#block-system-main .field-name-field-milestone-reference .field-item a").addClass("milestone-title");
$("#block-system-main").append("<div id='gchart-unique'></div>");
 

$("#block-system-main .field-name-add-milestone-entity-ref .field-item a").addClass("milestone-button");
$("#block-system-main .field-name-add-task-entity-ref .field-item a").addClass("milestone-task-button");
$("#block-system-main .update-task-button a").addClass("milestone-task-button");
$("#block-system-main .field-name-field-task-reference .field-item a").addClass("task-title");

// hover effect for Project Green button
$("#block-system-main .field-name-og-group-ref .field-item a").hover(
	 function () {
	    $(this).addClass('project-title-hover');
	  }, 
	  function () {
	    $(this).removeClass('project-title-hover');
	  }
); 

// hover effect for milestone title Green button
$("#block-system-main .field-name-field-milestone-reference .field-item a").hover(
	 function () {
	    $(this).addClass('milestone-title-hover');
	  }, 
	  function () {
	    $(this).removeClass('milestone-title-hover');
	  }
); 

 
// hover effect for task title red button
$("#block-system-main .field-name-field-task-reference .field-item a").hover(
	 function () {
	    $(this).addClass('task-title-hover');
	  }, 
	  function () {
	    $(this).removeClass('task-title-hover');
	  }
); 

 

// hover effect for milestone blue button
$("#block-system-main .field-name-add-milestone-entity-ref .field-item a").hover(
	 function () {
	    $(this).addClass('milestone-button-hover');
	  }, 
	  function () {
	    $(this).removeClass('milestone-button-hover');
	  }
); 


// hover effect for milestone task red button
$("#block-system-main .field-name-add-task-entity-ref .field-item a").hover(
	 function () {
	    $(this).addClass('milestone-task-button-hover');
	  }, 
	  function () {
	    $(this).removeClass('milestone-task-button-hover');
	  }
); 

// hover effect for update task red button
$("#block-system-main .update-task-button a").hover(
	 function () {
	    $(this).addClass('milestone-task-button-hover');
	  }, 
	  function () {
	    $(this).removeClass('milestone-task-button-hover');
	  }
); 





// select  status message
  
 

// -------------------------Start of project progress bar ----------------
 
 
var completed = 0;

var total = 0; 

var progress = 0;

var percentage = 0;


 $('#block-system-main .milestone-status-count').each(function() {	
	
	if($.trim($(this).html()) == "Completed") {
	completed =  $(this).next().html();
	 
	//console.log($.trim( completed));
 
	}
 
 
});

total = $.trim($('#block-system-main .views-field-nid').last().html());

//console.log(total);
 


progress = (completed / total) * 100;

percentage = Math.round(progress);
 



var pmyhtml = '<div class="progress progress-striped active"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:'+ percentage+'%">     <span class="sr-only">'+percentage+'% Complete (success)</span>        </div>      </div>';

var mmyhtml = '<div class="progress progress-striped active"><div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:'+ percentage+'%">     <span class="sr-only">'+percentage+'% Complete (success)</span>        </div>      </div>';

$('.progress').remove();
$('.percentage-para').remove();
$( ".project-label-unique" ).append('<span class="percentage-para">'+percentage+'% completed</span>').append( pmyhtml ); // for projects
$( ".milestone-progress-unique" ).append('<span class="percentage-para">'+percentage+'% completed</span>').append( mmyhtml ); // for milestones
// -------------------------End of project progress bar ----------------





//end- of the behaviors
  }
};
})(jQuery);
