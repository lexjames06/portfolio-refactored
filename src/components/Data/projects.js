import tile_1 from '../../assets/images/phone_black_tile.png';
import tile_2 from '../../assets/images/phone_white_tile.png';
import tile_3 from '../../assets/images/phone_black_tile_hover.png';
import tile_4 from '../../assets/images/phone_white_tile_hover.png';
import kodflix1 from '../../assets/images/kodflix_light_1.png';
import kodflix2 from '../../assets/images/kodflix_light_2.png';
import kodflix3 from '../../assets/images/kodflix_dark_1.png';
import kodflix4 from '../../assets/images/kodflix_dark_2.png';
import f4y1 from '../../assets/images/f4y_light_1.png';
import f4y2 from '../../assets/images/f4y_light_2.png';
import f4y3 from '../../assets/images/f4y_dark_1.png';
import f4y4 from '../../assets/images/f4y_dark_2.png';
import paperWeather1 from '../../assets/images/paper_weather_light_1.png';
import paperWeather2 from '../../assets/images/paper_weather_light_2.png';
import paperWeather3 from '../../assets/images/paper_weather_dark_1.png';
import paperWeather4 from '../../assets/images/paper_weather_dark_2.png';

export default function ImportedProjects(tileOneExpanded, tileTwoExpanded, tileThreeExpanded, tileFourExpanded) {

const projects = [
    {
        title: 'Fit-4-You',
        description: 'A fitness phone app',
        light1: f4y1,
        light2: f4y2,
        dark1: f4y3,
        dark2: f4y4,
        isExpanded: tileOneExpanded,
        technologies: ['flutter', 'firebase'],
    },
    {
        title: 'Kodflix',
        description: 'A video streaming web app',
        light1: kodflix1,
        light2: kodflix2,
        dark1: kodflix3,
        dark2: kodflix4,
        isExpanded: tileThreeExpanded,
        technologies: ['javascript', 'react', 'node'],
    },
    {
        title: 'Paper Weather',
        description: 'A simple weather phone app',
        light1: paperWeather1,
        light2: paperWeather2,
        dark1: paperWeather3,
        dark2: paperWeather4,
        isExpanded: tileTwoExpanded,
        technologies: ['flutter'],
    },
    {
        title: 'The Quiet Room',
        description: 'A real-time chat app',
        light1: tile_2,
        light2: tile_4,
        dark1: tile_1,
        dark2: tile_3,
        isExpanded: tileFourExpanded,
        technologies: ['flutter', 'firebase'],
    },
];

return projects;

}