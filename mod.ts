// Services
import EarthquakeService from "./services/earthquake_service.ts";

// Models
import Earthquake from "./models/earthquake.ts";

const earthquakeService: EarthquakeService = new EarthquakeService();

const earthquakes: Array<Earthquake> = await earthquakeService.getData();

console.log(earthquakes);
