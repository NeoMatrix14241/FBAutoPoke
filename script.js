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

var display = "content";
function jsonColumnToParagraph(jsonData, display) {
	var htmlContent = "<strong>" + display + ":</strong> " + jsonData[display];
	return htmlContent;
}

fetch('lib.json')
	.then(response => response.json())
	.then(data => {
		var paragraphElement = document.getElementById("scriptcontent");
		paragraphElement.innerHTML = jsonColumnToParagraph(data, display);
		console.log("working");
	})