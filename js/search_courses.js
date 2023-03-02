$(() => {

    $('body').on("keyup", '.js-search-courses', function(event) {
        let value = $(this).val();

        $(".found_course").empty();
      
      	$(".title_courses_result span").text(value); 
        if(value=="")
        {
        	$(".courses").show();
        	$(".courses .course").show();
        	$(".title_courses_result").hide();
        }
        else
        {        	
        	$(".courses").show();
	        $(".title_courses_result").show();	

	        let	list2 = $(".courses:not(.not_my) .course .name")
	        list2.each(function(index) {	
			    let label = $(this).data("search");

			    let array = value.split(" ");
			    array = array.filter(Boolean);
			    for(let i=0;i<array.length;i++)
			    {	    	
			    	if (label.toLowerCase().indexOf(array[i].toLowerCase()) == -1) {
				        $(this).closest(".course").hide();
				    } else {
				        $(this).closest(".course").show().clone().appendTo(".found_course");
				        break;
				    }
			    }	
			});

			$(".courses:not(.not_my)").each(function(index) {
				let courses = $(this).find(".course");
				let check = false;
				courses.each(function(index) {
					if ($(this).is(':visible')) {
					    check = true;
					}
				});
				if(!check)
				{	
					$(this).hide();
				}
			});			

			$(".courses:not(.not_my)").hide();
        }	

        setTimeout(() => {
			observer = lozad('.lozad', {
				rootMargin: '200px 0px',
				threshold: 0,
				loaded: el => el.classList.add('loaded')
			})

			observer.observe()
		}, 200)

		
    });  

    $(".title_courses_result button").on("click", function(){
		$(".js-search-courses").val("");			
        $(".title_courses_result").hide();
        $(".course, .courses").show();
        $(".found_course").empty();
	});

})

