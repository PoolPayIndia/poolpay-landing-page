
var nodeEntry = document.querySelector('.accordion');
var count = 0


fetch('../assets/files/faqs.json')
	.then(response => response.json())
	.then(jsonResponse => {

		faqlist = jsonResponse
		currhead = null
		
		faqlist.forEach(function(faq){

			if(currhead != faq.topic) {
				currhead = faq.topic

				heading = `<h3 class="heading">`+faq.topic+`</h3>`
				nodeEntry.insertAdjacentHTML('beforeend','<br />');
				nodeEntry.insertAdjacentHTML('beforeend', heading);
			}


			newItem = `
				<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="accordion-item">
				<h2 itemprop="name" class="accordion-header" id="heading` + count + `">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse` + count + `" aria-expanded="false" aria-controls="collapse` + count + `">
					` + faq.question + `
				<div style="float:right;">
					<i class="bi bi-chevron-up"></i>
				</div>
				<div style="float:right;">
					<i class="bi bi-chevron-down"></i>
				</div>
				</button>
				</h2>
				<div id="collapse` + count + `" class="accordion-collapse collapse" aria-labelledby="heading` + count + `" data-bs-parent="#accordionExample" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
				<div class="accordion-body" itemprop="text">
					` + faq.answer + `
				</div>
				</div>
				</div>
			
			`
			
			nodeEntry.insertAdjacentHTML('beforeend',newItem);
		
			count++;
	
		
		})

	}) 


// https://www.convertcsv.com/csv-to-json.htm