
var nodeEntry = document.querySelector('.accordion');
var count = 0


fetch('../assets/files/faqs.json')
	.then(response => response.json())
	.then(jsonResponse => {
		faqs = jsonResponse

		console.log(faqs)
		
		faqs.forEach(function(parentObj){

			// console.log(parentObj.children)

			parentObj.children.forEach(function(obj){

				newItem =

					`
					<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="accordion-item">
					<h2 itemprop="name" class="accordion-header" id="heading` + count + `">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse` + count + `" aria-expanded="false" aria-controls="collapse` + count + `">
						` + obj.question + `
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
						` + obj.answer + `
					</div>
					</div>
					</div>
				
					`
				
				
				nodeEntry.insertAdjacentHTML('beforeend',newItem);
			
				count++;
			})
		
		})

	}) 


					
