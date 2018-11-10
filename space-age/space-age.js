const earthYears = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

const getPlanetAge = (seconds, earthYears) => parseFloat((seconds / (31557600 * earthYears)).toFixed(2));
  
class SpaceAge {
    constructor(age) {
        this.seconds = age;
    }

    onMercury() {
        return getPlanetAge(this.seconds, earthYears.mercury);
    }
    onVenus() {
        return getPlanetAge(this.seconds, earthYears.venus);
    }
    onEarth() {
        return getPlanetAge(this.seconds, earthYears.earth) ;
    }
    onMars() {
        return getPlanetAge(this.seconds, earthYears.mars);
    }
    onJupiter() {
        return getPlanetAge(this.seconds, earthYears.jupiter);
    }
    onSaturn() {
        return getPlanetAge(this.seconds, earthYears.saturn);
    }
    onUranus() {
        return getPlanetAge(this.seconds, earthYears.uranus);
    }
    onNeptune() {
        return getPlanetAge(this.seconds, earthYears.neptune);
    }
}

export default SpaceAge;