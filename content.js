InboxSDK.load(1, 'sidebar-example').then(function(sdk) {

	sdk.Conversations.registerThreadViewHandler(function(threadView){

		var el = document.createElement("div");
		el.innerHTML = 'Hello world!';


		threadView.addSidebarContentPanel({
			title: 'Sidebar Example',
			el: el
		});

	});

});
