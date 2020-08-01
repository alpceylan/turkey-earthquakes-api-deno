import { soxa } from "https://deno.land/x/soxa/mod.ts";

// Models
import Earthquake from "./models/earthquake.ts";

const url: string = "http://www.koeri.boun.edu.tr/scripts/lst1.asp";

const earthquakes: Array<Earthquake> = [];

const res: any = await soxa.get(url);
const resHtml: string = res.data;

const newHtml: string = resHtml.slice(5199, 69853);

const earthquakeList: Array<string> = newHtml.split("\n");

earthquakeList.forEach((earthquake) => {
  let earthquakeDetailList: Array<string> = earthquake.split(" ");
  const list: Array<string> = earthquakeDetailList.filter((detail) =>
    detail != "" && detail != "-.-"
  );

  if (list != []) {
    console.log(list);

    const date: string = list[0];
    const hour: string = list[1];
    const latitude: string = list[2];
    const longitude: string = list[3];
    const depth: string = list[4];
    const magnitude: string = list[5];

    if (
      date != undefined &&
      hour != undefined &&
      latitude != undefined &&
      longitude != undefined &&
      depth != undefined &&
      magnitude != undefined
    ) {
      const newEarthquake: Earthquake = new Earthquake(
        date,
        hour,
        latitude,
        longitude,
        depth,
        magnitude,
      );

      earthquakes.push(newEarthquake);
    }
  }

  console.log(earthquakes);
});
