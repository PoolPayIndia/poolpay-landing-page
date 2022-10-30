fetch('footer.html')
	.then(res => res.text())
		.then(text => {
			let oldelem = document.querySelector("script#replace_with_footer");
			let newelem = document.createElement("footer");

			newelem.classList.add('bg-black', 'text-center', 'py-5')

			newelem.innerHTML = text;
			oldelem.parentNode.replaceChild(newelem,oldelem);
		})