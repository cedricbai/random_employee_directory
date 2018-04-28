$(document).ready(function (){
 //var all_employees = [];
 var modalwindow = '';
 var modals;
 var all_items;
 var spans;
 var employeeHTML = '<ul>';
 for(let index = 0; index < 12; index++)
 {
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json'
	}).done(function (data){
		employeeHTML += '<li style="cursor: pointer;" onclick="the_details()" class="grid-25 tablet-grid-50">';
		employeeHTML += '<div class="the_pic">';
        employeeHTML += '<img class="images" src="' + data.results[0].picture.medium + '"></div>';
        employeeHTML += '<div class="the_info">';
        employeeHTML += '<p class="names">' + data.results[0].name.first + ' ' + data.results[0].name.last + '</p>';
        employeeHTML += '<p class="emails">' + data.results[0].email + '</p>';
        employeeHTML += '<p class="cities">' + data.results[0].location.city + '</p></div></li>'; 
        modalwindow += '<div class="modal-content">';
        modalwindow += '<span class="close">&times;</span>';
        modalwindow += '<div class="detail_pic">';
        modalwindow +='<img class="detail_images" src="' + data.results[0].picture.medium + '"></div>';
        modalwindow += '<div class="detail_info">';
        modalwindow += '<p class="the_names">' + data.results[0].name.first + ' ' + data.results[0].name.last + '</p>';
        modalwindow += '<p class="the_emails">' + data.results[0].email + '</p>';
        modalwindow += '<p class="the_cities">' + data.results[0].location.city + '</p></div>';
        modalwindow += '<hr>'
        modalwindow += '<div class="more_info">';
        modalwindow += '<p class="cells">' + data.results[0].cell + '</p>';
        modalwindow += '<p class="detail_location">' + data.results[0].location.street + ', ' + data.results[0].location.state.slice(0, 2).toUpperCase() + ' ' + data.results[0].location.postcode + '</p>';
        modalwindow += '<p class="birth-date">' + 'Birthday: ' + data.results[0].dob.slice(0, 10) + '</p></div></div>';

        if(index === 11)
        {
        	var modalcontainer = document.getElementById("mymodals");
        	employeeHTML += '</ul>';
        	var current_index;
        	$('#employees').html(employeeHTML);
        	$('#mymodals').html(modalwindow);
        	modals = document.getElementsByClassName("modal-content");
        	all_items = document.getElementsByClassName("grid-25 tablet-grid-50");
        	spans = document.getElementsByClassName("close");
        	for(let m=0; m<12; m++){
        		all_items[m].onclick = function the_details() {
        			$('#mymodals').show();
        			modals[m].style.display = "block";
        			current_index = m;
        		}
        		spans[m].onclick = function() {
        			modals[m].style.display = "none";
        			$('#mymodals').hide();
        		}

        		window.onclick = function(event){
        			if(event.target == modalcontainer) {
        				modals[current_index].style.display = "none";
        				$('#mymodals').hide();
        			}
        		}
        	}
        }
	});
	  
 }
});
//style="cursor: pointer;" onclick="the_details()"