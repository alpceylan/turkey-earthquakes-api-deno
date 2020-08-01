export default class Earthquake {
  date: string;
  hour: string;
  latitude: string;
  longitude: string;
  depth: string;
  magnitude: string;

  constructor(
    date: string,
    hour: string,
    latitude: string,
    longitude: string,
    depth: string,
    magnitude: string,
  ) {
    this.date = date;
    this.hour = hour;
    this.latitude = latitude;
    this.longitude = longitude;
    this.depth = depth;
    this.magnitude = magnitude;
  }
}