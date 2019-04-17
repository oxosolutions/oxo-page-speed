$(document).ready(function(){
     var htmlContent = `
	 <div class="auto-linkedin-sidebar">
		<div class="auto-linkedin-group">
			<a class="auto-linkedin-title" title="Manage invitations" href="https://www.linkedin.com/mynetwork/invitation-manager/">Manage Invitations</a>
			<a class="auto-linkedin-subtitle" title="Manage invitations" href="https://www.linkedin.com/mynetwork/invitation-manager/">Received</a>
			<button class="auto-linkedin-button auto-linkedin-invitation-manager-ignore">Ignore</button>
			<button class="auto-linkedin-button auto-linkedin-invitation-manager-accept">Accept</button>
			<a class="auto-linkedin-subtitle" title="Withdraw Sent Invitations" href="https://www.linkedin.com/mynetwork/invitation-manager/sent/">Sent</a>
			<button class="auto-linkedin-button auto-linkedin-invitation-manager-withdraw">Withdraw</button>
		</div>
		<div class="auto-linkedin-group">
			<a class="auto-linkedin-title" title="My Network" href="https://www.linkedin.com/mynetwork/">My Network</a>
			<button class="auto-linkedin-button auto-linkedin-mynetwork-connect" title="Connect All People you may know" >Connect</button>
			<a class="auto-linkedin-subtitle" title="Search" href="#">Search</a>
			<button class="auto-linkedin-button auto-linkedin-connect-searched">Connect Searched</button>
		</div>
		<div class="auto-linkedin-group">
			<a class="auto-linkedin-title" title="Messages" href="https://www.linkedin.com/messaging/">Messages</a>
			<button class="auto-linkedin-button auto-linkedin-send-message">Send Message</button>
		</div>
	</div>

	<style type="text/css">
	.application-outlet {
		margin-left: 140px;
	}
	.auto-linkedin-sidebar {
		width: 140px;
		height: 100%;
		position: fixed;
		top: 52px;
		left: 0;
		padding:10px;
		background-color: #283e4a;
		z-index: 999;
	}
	.auto-linkedin-sidebar .auto-linkedin-group {
		margin-bottom: 10px;
		border-bottom: 1px solid #e8e8e8;
	}
	.auto-linkedin-sidebar .auto-linkedin-button{
		background-color: #ffffff;
		color: #0084bf;
		padding: 8px 6px;
		margin: 10px auto 10px auto;
		width: 100%;
		display: block;
		font-size: 16px;
		line-height: 22px;
		-webkit-transition: all 200ms ease-in-out;
		-moz-transition: all 200ms ease-in-out;
		-o-transition: all 200ms ease-in-out;
		transition: all 200ms ease-in-out;
	}
	.auto-linkedin-sidebar .auto-linkedin-button:hover{
		background-color: #0077b5;
		color: #ffffff;
	}
	.auto-linkedin-sidebar .auto-linkedin-title,
	.auto-linkedin-sidebar .auto-linkedin-subtitle{
		color: #d8d8d8;
		text-decoration: none;
		text-align: center;
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.auto-linkedin-sidebar .auto-linkedin-title{
		font-size: 15px;
		line-height: 30px;
	}
	.auto-linkedin-sidebar .auto-linkedin-subtitle{
		font-size: 13px;
		line-height: 18px;
	}
	.auto-linkedin-sidebar .auto-linkedin-title:hover,
	.auto-linkedin-sidebar .auto-linkedin-subtitle:hover{
		color:#ED6F1D;
	}
	</style>`;

	$('body').append(htmlContent);
	
	//Ignore
	$('.auto-linkedin-invitation-manager-ignore').click(function(){
		var invitation_manager_ignore = setInterval(function(){
			var items = $('.mn-invitation-list .button-tertiary-medium-muted');
			if(items.length == 0){
				clearInterval(invitation_manager_ignore);
			}else{
				items.each(function(){
					$(this).click();
				});
			}
		},5000);
	});
	//Accept
	$('.auto-linkedin-invitation-manager-accept').click(function(){
		var invitation_manager_accept = setInterval(function(){
			var items = $('.mn-invitation-list .button-secondary-medium');
			if(items.length == 0){
				clearInterval(invitation_manager_accept);
			}else{
				items.each(function(){
					$(this).click();
				});
			}
		},5000);
	});
	//Withdraw
	$('.auto-linkedin-invitation-manager-withdraw').click(function(){
		var invitation_manager_withdraw = setInterval(function(){
			var items = $('.mn-invitation-list .button-tertiary-medium-muted');
			if(items.length == 0){
				clearInterval(invitation_manager_withdraw);
			}else{
				items.each(function(){
					$(this).click();
				});
			}
		},5000);
	});
	
	 //Connect
     $('.auto-linkedin-mynetwork-connect').click(function(){
	   var connectInterval = setInterval(function(){
		var allElements = $('.mn-pymk-list__cards .button-secondary-small').length;
		if(allElements == 0){
			clearInterval(connectInterval);
		}else{
			$('.mn-pymk-list__cards .button-secondary-small').each(function(){
				var elem = $(this);
				var n = $(document).height();
    				$('html, body').animate({ scrollTop: n }, 0);
				elem.click();
			});
		}
	   },5000);  
     }); 
	 
	 
	 
     $('.auto-linkedin-connect-searched').click(function(){
	  
	var buttonsLength = $('.search-result__occluded-item').length;
	var index = 1;
	function clickEvent(){
		console.log(index);
		$('.send-invite__actions .button-primary-large').click();
		$('.search-result__occluded-item:nth-child('+index+')').find('.search-result__actions--primary').click();
		setTimeout(function(){
			
			$('.send-invite__actions .button-primary-large').click();
			
			if(index <= buttonsLength){
				index++;
				clickEvent();
			}else{
			   $('.next').click();
			   index = 1;
		           clickEvent();
			}
		},5000);
	}
	clickEvent();
     });
     
     $('.auto-linkedin-send-message').click(function(){
	     console.log($('.msg-conversation-listitem').length);
	     $('.msg-conversation-listitem').each(function(){
		     $(this).find('a').click();
		     console.log($(this).find('a').attr('href'));
		     $(this).click();
		     console.log('Each');
// 		     $('.msg-compose-form__message-text').val('Hello');
// 		     var press = jQuery.Event("keypress");
// 		     press.ctrlKey = false;
// 		     press.which = 13;
// 		     $('.msg-compose-form__message-text').trigger(press);
// 		     var n = $('.msg-conversations-container__conversations-list').height();
//     		     $('.msg-conversations-container__conversations-list').animate({ scrollTop: n }, 0);
	     });
     });
});
