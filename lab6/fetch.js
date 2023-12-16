const upperLimit = 50;
const lowerLimit = 0;

document.addEventListener('DOMContentLoaded', function () {
	const fetchDataButton = document.getElementById("fetchButton");
	const usersContainer = document.getElementById("usersContainer");
	const usersAmount = document.getElementById("users-amount");

	fetchDataButton.addEventListener("click", () => {
		fetchDataButton.textContent = "Перезавантажити";
		usersContainer.innerHTML = "";
		let amount = usersAmount.value;
		for (let i = 0; i < amount; i++) {
			fetch("https://randomuser.me/api")
				.then((response) => response.json())
				.then((data) => {
					const userData = data.results[0];
					console.log(userData);

					usersContainer.innerHTML += `<div class="userCard">
						<img class="userPicture" src="${userData.picture.large}" alt="Profile picture"/>
						<p>Name: ${userData.name.first} ${userData.name.last}</p>
						<p>Cell: ${userData.cell}</p>
						<p>City: ${userData.location.city}</p>
						<p>Country: ${userData.location.country}</p>
					</div>`

				})
				.catch((error) => {
					console.error("Помилка при отриманні даних:", error);
				});
		}
	});
	
	usersAmount.addEventListener("input",(value) => {
		console.log(usersAmount.value);
		if(usersAmount.value > upperLimit){
			usersAmount.value = upperLimit;
		}
		else if(usersAmount.value < lowerLimit){
			usersAmount.value = lowerLimit;
			//alert("Amount of users should be above 0 and less than 50.");
		}
	} );
});
