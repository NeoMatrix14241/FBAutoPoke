function copyCode() {
	const codeBox = document.getElementById('codeBox');
	const codeToCopy = codeBox.querySelector('p');

	const textarea = document.createElement('textarea');
	textarea.value = codeToCopy.innerText;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);

	const notificationContainer = document.getElementById('notificationContainer');
	const notification = document.createElement('div');
	notification.classList.add('notification');
	notification.textContent = 'Code copied to clipboard!';
	notificationContainer.appendChild(notification);
	setTimeout(function() {
		notificationContainer.removeChild(notification);
	}, 3000);
}

fetch('auto-poke-lib.js')
	.then(response => response.text())
	.then(text => {
		document.getElementById('myParagraph').innerText = text;
			const scriptElement = document.createElement('script');
			scriptElement.text = text;
			document.head.appendChild(scriptElement);
		})
	.catch(error => console.error('Error fetching file:', error));
