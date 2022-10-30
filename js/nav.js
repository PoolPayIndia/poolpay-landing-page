fetch('nav.html')
    .then(res => res.text())
        .then(text => {
            let oldelem = document.querySelector("script#replace_with_navbar");
            let newelem = document.createElement("nav");
            
            newelem.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'fixed-top', 'shadow-sm')
            newelem.setAttribute('id', 'mainNav');

            newelem.innerHTML = text;
            oldelem.parentNode.replaceChild(newelem,oldelem);
        })
