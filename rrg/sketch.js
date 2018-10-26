let data;
let games = ["Project Cars", "Assetto Corsa", "Assetto Corsa Competizione", "RaceRoom"];
let fields = [];
let generatedCarTitleContainer;
let selectedGameIndex;

function preload() {
	let carsPC = loadJSON("./data/carsPC.json");
	let tracksPC = loadJSON("./data/tracksPC.json");
	let carsAC = loadJSON("./data/carsAC.json");
	let tracksAC = loadJSON("./data/tracksAC.json");
	let carsACC = loadJSON("./data/carsACC.json");
	let tracksACC = loadJSON("./data/tracksACC.json");
	let carsRR = loadJSON("./data/carsRR.json");
	let tracksRR = loadJSON("./data/tracksRR.json");

	data = [
		{
			Cars: carsPC,
			Tracks: tracksPC
		},
		{
			Cars: carsAC,
			Tracks: tracksAC
		},
		{
			Cars: carsACC,
			Tracks: tracksACC
		},
		{
			Cars: carsRR,
			Tracks: tracksRR
		}
	];
}

function setup() {
	noLoop();
	let makerField = document.getElementById("maker_field");
	let modelField = document.getElementById("model_field");
	//get fields to wite random values
	for (let i = 0; i < 4; i++)
	{
		fields[i] = document.getElementById(`generated${i}`);
	}
	selectedGameIndex = 0;
	// get buttons
	let buttons = [];
	buttons[0] = document.getElementById("buttonPC");
	buttons[1] = document.getElementById("buttonAC");
	buttons[2] = document.getElementById("buttonACC");
	buttons[3] = document.getElementById("buttonRR");
	buttons[0].addEventListener("click",() => {
		selectedGameIndex = 0;
		makerField.innerHTML = "Maker:";
		modelField.innerHTML = "Model:";
		let localData = data[selectedGameIndex];
		generate(localData.Cars, localData.Tracks)
	});
	buttons[1].addEventListener("click",() => {
		selectedGameIndex = 1;
		makerField.innerHTML = "Maker:";
		modelField.innerHTML = "Model:";
		let localData = data[selectedGameIndex];
		generate(localData.Cars, localData.Tracks)
	});
	buttons[2].addEventListener("click",() => {
		selectedGameIndex = 2;
		makerField.innerHTML = "Maker:";
		modelField.innerHTML = "Model:";
		let localData = data[selectedGameIndex];
		generate(localData.Cars, localData.Tracks)
	});
	buttons[3].addEventListener("click",() => {
		selectedGameIndex = 3;
		makerField.innerHTML = "Series:";
		modelField.innerHTML = "Car:";
		let localData = data[selectedGameIndex];
		generate(localData.Cars, localData.Tracks)
	});
	//find width of the buttons
	
	let buttonsContainer = document.getElementById("buttons");
	let buttonsWidth = 0;
	for (let button of buttons)
	{
		buttonsWidth += button.clientWidth;
	} 
	buttonsContainer.style.width = `${buttonsWidth}px`;
	
	generatedCarTitleContainer = document.getElementById("generated_car");
	
	generate(data[selectedGameIndex].Cars, data[selectedGameIndex].Tracks);
}


function generate(cars, tracks) {
	generatedCarTitleContainer.innerHTML = games[selectedGameIndex];
	let carListLength = Object.keys(cars).length;
	let tracksListLength = Object.keys(tracks).length;
	let randomCar = floor(random(0, carListLength + 1));
	let randomTrack = floor(random(0, tracksListLength + 1));
	fields[0].innerHTML = cars[randomCar].Maker;
	fields[1].innerHTML = cars[randomCar].Model;
	fields[2].innerHTML = tracks[randomTrack].Location;
	fields[3].innerHTML = tracks[randomTrack].Track;
}