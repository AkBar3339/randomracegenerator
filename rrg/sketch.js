let data;
let fields = [];
let generatedCarTitleContainer;
let selectedGameIndex;

function preload() {
	//load jsons with data
	let carsPC = loadJSON("./data/carsPC.json");
	let tracksPC = loadJSON("./data/tracksPC.json");
	let carsAC = loadJSON("./data/carsAC.json");
	let tracksAC = loadJSON("./data/tracksAC.json");
	let carsACC = loadJSON("./data/carsACC.json");
	let tracksACC = loadJSON("./data/tracksACC.json");
	let carsRR = loadJSON("./data/carsRR.json");
	let tracksRR = loadJSON("./data/tracksRR.json");

	//create an array of objects containing data
	data = [
		{
			Cars: carsPC,
			Tracks: tracksPC,
			Label1: "Maker:",
			Label2: "Model:",
			CarsListLength: undefined,
			TracksListLength: undefined,
			Game: "Project Cars 2"
		},
		{
			Cars: carsAC,
			Tracks: tracksAC,
			Label1: "Maker:",
			Label2: "Model:",
			CarsListLength: undefined,
			TracksListLength: undefined,
			Game: "Assetto Corsa"
		},
		{
			Cars: carsACC,
			Tracks: tracksACC,
			Label1: "Maker:",
			Label2: "Model:",
			CarsListLength: undefined,
			TracksListLength: undefined,
			Game: "Assetto Corsa Competizione"
		},
		{
			Cars: carsRR,
			Tracks: tracksRR,
			Label1: "Series:",
			Label2: "Car:",
			CarsListLength: undefined,
			TracksListLength: undefined,
			Game: "RaceRoom"
		}
	];
}

function setup() {
	noLoop();
	for (let i = 0; i < data.length; i++) {
		data[i].CarsListLength = Object.keys(data[i].Cars).length;
		data[i].TracksListLength = Object.keys(data[i].Tracks).length;
	}
	//get fields to wite values
	let makerField = document.getElementById("maker_field");
	let modelField = document.getElementById("model_field");
	for (let i = 0; i < 4; i++) {
		fields[i] = document.getElementById(`generated${i}`);
	}
	selectedGameIndex = 0;
	// get buttons
	let buttons = [];
	for (let i = 0; i < 4; i++) {
		buttons[i] = document.getElementById(`button${i}`);
		buttons[i].addEventListener("click",() => {
			selectedGameIndex = i;
			makerField.innerHTML = data[i].Label1; //changing labels for raceroom
			modelField.innerHTML = data[i].Label2;
			let localData = data[selectedGameIndex];
			generate(localData.Cars, localData.Tracks) //generating random race
		});
	}
	//find width of the buttons
	let buttonsContainer = document.getElementById("buttons");
	let buttonsWidth = 0;
	for (let button of buttons) {
		buttonsWidth += button.offsetWidth;
	} 
	buttonsWidth++;
	buttonsContainer.style.width = `${buttonsWidth}px`;
	// write name of the generated game
	generatedCarTitleContainer = document.getElementById("generated_car");
	// generate for the first time
	generate(data[selectedGameIndex].Cars, data[selectedGameIndex].Tracks);
}


function generate(cars, tracks) {
	generatedCarTitleContainer.innerHTML = data[selectedGameIndex].Game; //change displayed game title 
	let randomCar = floor(random(0, data[selectedGameIndex].CarsListLength));
	let randomTrack = floor(random(0, data[selectedGameIndex].TracksListLength));
	fields[0].innerHTML = cars[randomCar].Maker;
	fields[1].innerHTML = cars[randomCar].Model;
	fields[2].innerHTML = tracks[randomTrack].Location;
	fields[3].innerHTML = tracks[randomTrack].Track;
}