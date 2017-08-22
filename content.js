'use strict';

InboxSDK.load(2, 'sidebar-example').then(sdk => {
	sdk.Conversations.registerThreadViewHandler(threadView => {
		const el = document.createElement("div");
		el.innerHTML = 'Hello world!';

		threadView.addSidebarContentPanel({
			title: 'Sidebar Example',
			iconUrl: chrome.runtime.getURL('monkey.png'),
			el
		});
	});
});
