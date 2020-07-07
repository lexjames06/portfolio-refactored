import bmi1 from '../../assets/images/bmi_light_1.png';
import bmi2 from '../../assets/images/bmi_light_2.png';
import bmi3 from '../../assets/images/bmi_dark_1.png';
import bmi4 from '../../assets/images/bmi_dark_2.png';
import quiet1 from '../../assets/images/quiet_light_1.png';
import quiet2 from '../../assets/images/quiet_light_2.png';
import quiet3 from '../../assets/images/quiet_dark_1.png';
import quiet4 from '../../assets/images/quiet_dark_2.png';
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
import ljb1 from '../../assets/images/ljb_light_1.png';
import ljb2 from '../../assets/images/ljb_light_2.png';
import ljb3 from '../../assets/images/ljb_dark_1.png';
import ljb4 from '../../assets/images/ljb_dark_2.png';
import ljc1 from '../../assets/images/ljc_light_1.png';
import ljc2 from '../../assets/images/ljc_light_2.png';
import ljc3 from '../../assets/images/ljc_dark_1.png';
import ljc4 from '../../assets/images/ljc_dark_2.png';
import ku1 from '../../assets/images/ku_light_1.png';
import ku2 from '../../assets/images/ku_light_2.png';
import ku3 from '../../assets/images/ku_dark_1.png';
import ku4 from '../../assets/images/ku_dark_2.png';

export default function ImportedProjects(
    tileOneExpanded,
    tileTwoExpanded,
    tileThreeExpanded,
    tileFourExpanded,
    tileFiveExpanded,
    tileSixExpanded,
    tileSevenExpanded,
    tileEightExpanded
) {
    const projects = [
        {
            title: 'Fit-4-You',
            shortDescription: 'A fitness phone app',
            longDescription:
                'This is a passion project of mine. The aim is to create a tool that personal trainers and coaches can use to give their clients a better experience, while simultaneously creating a public access platform to give direction for those that feel they don\'t need support.',
            light1: f4y1,
            light2: f4y2,
            dark1: f4y3,
            dark2: f4y4,
            isExpanded: tileOneExpanded,
            technologies: ['flutter', 'firebase'],
            github: 'https://youtu.be/2L-gl3ftnmc',
            website: 'preview',
        },
        {
            title: 'LJ CLothing',
            shortDescription: 'A demo clothing e-commerce store',
            longDescription:
                'Built primarily to learn more technologies, including Redux, GraphQL, and Context API. Once finished, more consideration will be placed on design and mobile responsiveness.',
            light1: ljc1,
            light2: ljc2,
            dark1: ljc3,
            dark2: ljc4,
            isExpanded: tileTwoExpanded,
            technologies: ['javascript', 'react', 'redux'],
            github: 'https://github.com/lexjames06/demo-clothing-store',
            website: 'http://lj-clothing.herokuapp.com/',
        },
        {
            title: 'Paper Weather',
            shortDescription: 'A simple weather phone app',
            longDescription: 'A novel complementary complimentary weather app. While you quickly go to Paper Weather to check the week\'s forcast, why not be complimented at the same time and give yourself a little self-esteem boost? With every weather refresh, Paper Weather gives you a new compliment.',
            light1: paperWeather1,
            light2: paperWeather2,
            dark1: paperWeather3,
            dark2: paperWeather4,
            isExpanded: tileThreeExpanded,
            technologies: ['flutter'],
            github: 'https://github.com/lexjames06/paper-weather',
            website: null,
        },
        {
            title: 'The Quiet Room',
            shortDescription: 'A real-time chat app',
            longDescription: 'One of the quietest chat rooms around, The Quiet Room is a project-only chat app that sends messages between multiple users in real-time and stores the conversation for later, when you want to pick back up.',
            light1: quiet1,
            light2: quiet2,
            dark1: quiet3,
            dark2: quiet4,
            isExpanded: tileFourExpanded,
            technologies: ['flutter', 'firebase'],
            github: 'https://github.com/lexjames06/quiet-room',
            website: null,
        },
        {
            title: 'Kodflix',
            shortDescription: 'A video library web app',
            longDescription: 'A psuedo Netflix project worked through in the first stage of the Kodiri Bootcamp in early 2020. This project was my first real insight into the MERN stack and is simply designed to replicate the appearance and functionality of Netflix.',
            light1: kodflix1,
            light2: kodflix2,
            dark1: kodflix3,
            dark2: kodflix4,
            isExpanded: tileFiveExpanded,
            technologies: ['javascript', 'react', 'node'],
            github: 'https://github.com/lexjames06/kodflix',
            website: 'http://kodflix-lj.herokuapp.com/kodflix',
        },
        {
            title: 'BMI Calculator',
            shortDescription: 'A simple BMI Calculator',
            longDescription: 'If you want to find out your current BMI, this will help you easily get the data and even give a quick tip on how to move forward with that new information.',
            light1: bmi1,
            light2: bmi2,
            dark1: bmi3,
            dark2: bmi4,
            isExpanded: tileSixExpanded,
            technologies: ['flutter'],
            github: 'https://github.com/lexjames06/bmi-calculator',
            website: null,
        },
        {
            title: 'Lex James Blogs',
            shortDescription: 'A simple blog website',
            longDescription:
                'A website with all CRUD operations, and markup language supported in both creating and reading blogs, to make for an easier blogging experience.',
            light1: ljb1,
            light2: ljb2,
            dark1: ljb3,
            dark2: ljb4,
            isExpanded: tileSevenExpanded,
            technologies: ['javascript', 'react', 'node', 'mongo'],
            github: 'https://github.com/lexjames06/lex-james-blogs',
            website: null,
        },
        {
            title: 'Keepie Uppie Challenge',
            shortDescription: 'A basic game built in Scratch',
            longDescription:
                'While working through a HarvardX online introdutory Computer Science course, I was introduced to Scratch and challenged to create my own game.',
            light1: ku1,
            light2: ku2,
            dark1: ku3,
            dark2: ku4,
            isExpanded: tileEightExpanded,
            technologies: ['scratch'],
            github: 'https://scratch.mit.edu/projects/409818003/',
            website: 'preview',
        },
    ];

    return projects;
}
