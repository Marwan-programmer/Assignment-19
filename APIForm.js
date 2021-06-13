let array=[];
const authors = document.getElementById('authors');
let add=document.querySelector("#add");


////////////Post///////////////////add a new object and push it to array  

add.addEventListener("click",function(e){
	e.preventDefault();
let firstName=document.querySelector("#first-name").value
let lastName=document.querySelector("#last-name").value
let bookId=document.querySelector("#book-id").value


let headers = new Headers();
headers.append('Content-type', 'application/json');
let options = {
	method: 'POST',
	body: JSON.stringify({
		
	}),
	headers
};



fetch(
	`https://fakerestapi.azurewebsites.net/api/v1/Authors`,
	
).then(response => {
	if (response.status == 200) {
		
array.push({
	idBook: bookId,
	firstName: firstName,
	lastName: lastName,
})
		
	}
})
})



///////Get
document.getElementById('btn-get-authors').addEventListener('click', () => {
	fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors')
		.then(response => response.json())
		.then(result => {

			authors.innerHTML="";
		
			for (let i = 0; i < 10; i++) {
				const author = result[i];
				authors.insertAdjacentHTML('beforeend', `<div id="${author.id}" class="author">
					<button>Do nothing</button>
					<h3>
					 ${author.firstName} ${author.lastName}
					</h3>
					<h4>
						Book ID: ${author.idBook}
					</h4>
					<button class="btn-delete">Delete Author</button>
				</div>`);
			}

           ////for a new objacts that have been 
           for(let i=0;i<array.length;i++){
			let author = array[i];
			authors.insertAdjacentHTML('beforeend', `<div id="${11+i}" class="author">
			<button>Do nothing</button>
			<h3>
			 ${author.firstName} ${author.lastName}
			</h3>
			<h4>
				Book ID: ${author.idBook}
			</h4>
			<button class="btn-delete">Delete Author</button>
		</div>`);


		   }





		});
});





////////////Delete
authors.addEventListener('click', event => {
	if (event.target.className === 'btn-delete') {
		fetch(
			`https://fakerestapi.azurewebsites.net/api/v1/Authors/${event.target.parentElement.id}`,
			{method: 'DELETE'}
		).then(response => {
			if (response.status == 200) {
				event.target.parentElement.remove();
			}
		});
	}
});