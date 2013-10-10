 

var status_label = [];

var status_value = [];

 status_label.push("");
 status_value.push("");
 

 jQuery('#block-system-main .milestone-status-count').each(function() {	
	
	/*if(jQuery.trim(jQuery(this).html()) == "Completed") {
	completed =  jQuery(this).next().html();
	 
	//console.log($.trim( completed));
 
	}*/

  status_label.push(jQuery.trim(jQuery(this).html()));
  status_value.push( parseInt(jQuery.trim( jQuery(this).next().html()  ), 10)   );
 	
});
console.log( status_label);
console.log( status_value);
  status_label.pop();
	status_value.pop();

console.log( status_label);
console.log( status_value);
 // google chart
 
  
  google.load('visualization', '1.0');
 
      
  function drawStatusChart() {
		var wrapper = new google.visualization.ChartWrapper({
			chartType: 'BarChart',
			dataTable:[status_label,status_value],
			options: {title: 'Milestone Status' }	
 		});
		
		wrapper.draw('views-aggregator-datatable');
  }


 
	google.setOnLoadCallback(drawStatusChart);

//dataTable:[["","A","B" ],["",1,2 ]]
