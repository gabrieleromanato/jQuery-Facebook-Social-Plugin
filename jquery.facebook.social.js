/* @name jQuery Facebook Social Plugin
   @version 1
   @author Gabriele Romanato <http://onwebdev.blogspot.com/>
   @requires jQuery 1.4+
   
   @description Adds Facebook buttons to a web document
                Version 1 supports the 'Like' ,'Sharer', 'Activity' buttons
                
   Usage: $(element).FacebookSocial(options);
   
   */


(function($) {
			
	$.fn.FacebookSocial = function(options) {
		
		var defaults = {
		  url: location.href,
		  klass: 'fb-social',
		  wrapper: '<div id="fb-social-wrapper"/>',
		  type: 'sharer',
		  text: 'Facebook',
		  header: false,
		  colorscheme: 'light',
		  recommendations: false,
		  transparency: false
		};
		
		options = $.extend(defaults, options);
		
		var that = this;
		
		return that.each(function() {
			
			switch(options.type) {
				
				
				case 'like':
				
				  
	                    var iframe = '<iframe src="http://www.facebook.com/widgets/like.php?href=' + options.url +
			          '" class="' + options.klass + '" scrolling="no" frameborder="0" border="0" width="450" height="80" />';
					  
					  
					  
					 $(options.wrapper).html(iframe).appendTo(that);
					 
					 break;
					 
					 
				case 'sharer':
				
				    var link = '<a href="http://www.facebook.com/sharer.php?u=' + options.url +
		            '" class="' + options.klass + '" title="Add to Facebook">' + options.text + '</a>';
			
			        $(options.wrapper).html(link).appendTo(that);
					
					break;
					
				case 'activity':
				   var activframe = '<iframe src="http://www.facebook.com/plugins/activity.php?site=' + options.url +
				   '&amp;width=300&amp;height=300&amp;header=' + options.header + '&amp;colorscheme=' + options.colorscheme +               '&amp;recommendations=' + options.recommendations + '" class="' + options.klass + '" scrolling="no" frameborder="0" allowTransparency="' +
				   options.transparency + '" />';
				   
				   $(options.wrapper).html(activframe).appendTo(that);
				   
				   break; 
					
			    default:
				
				    break;
				
				     
				
				
			}
			
		});
		
		
		
		
		
	};
   
   
	
	
})(jQuery);



