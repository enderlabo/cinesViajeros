//Peliculas
import Brightburn from '../assets/images/Brightburn.jpg';
import HolmesandWatson from '../assets/images/Holmes and Watson.jpg';
import Marmaduke from '../assets/images/Marmaduke.jpg';
//Banners
import firstBanner from '../assets/images/banners/greatest_movie.jpg';
import secondBanner from '../assets/images/banners/meninblack_movie.jpg';
import thridBanner from '../assets/images/banners/shapeofwater_movie.jpg';
import fourthBanner from '../assets/images/banners/thegirl_movie.jpg';
import fithBanner from '../assets/images/banners/ocean_movie.jpg';

//Peliculas Slider
import firstMovie from '../assets/images/movies/equalizer_movie.jpg';
import secondMovie from '../assets/images/movies/frontrunner_movie.jpg';
import thridMovie from '../assets/images/movies/girl_movie.jpg';
import fourthMovie from '../assets/images/movies/theshape_movie.jpg';
import fithMovie from '../assets/images/movies/greatest_movie.jpg';


//Combos
import firstCombo from '../assets/images/combos/combo_personal1.jpg';
import secondCombo from '../assets/images/combos/combo_personal2.jpg';
import thridCombo from '../assets/images/combos/combo_pareja.jpg';
export const peliculas = [
    {
        imagen: Brightburn,
        title: 'Brightburn: hijo de la oscuridad',
        description: '¿Qué pasaría si un niño con poderes de otro mundo aterrizara de emergencia en la Tierra, pero en lugar de convertirse en un héroe para la humanidad fuera algo mucho más siniestro? Después de que Tori logra ser madre con la llegada de un misterioso bebé, parece ser todo felicidad. Pero cuando se acerca a la pubertad, una poderosa oscuridad se manifiesta en su interior.',
        horarios:[
            {
                sala: 2,
                comienzo: '14:45',
                fin: '16:30',
            }
        ],
        duracion: '1hr 53min',
        Precio: '20',
        comision: false,
        trailer: 'https://www.youtube.com/embed/fRvhuAIh5dA',
        compra_link: 'link de teleticket',
    },
    {
        imagen: HolmesandWatson,
        title: 'Holmes and Watson',
        description: 'Después de cometerse un asesinato en el Buckingham Palace, Sherlock Holmes y su fiel compañero el Doctor Watson se ven obligados a resolver el caso. Deberán hacerlo en tan solo cuatro días, ya que de lo contrario el autor del crimen matará a su Majetad la Reina.',
        horarios:[
            {
                sala: 2,
                comienzo: '14:45',
                fin: '16:30',
            }
        ],
        duracion: '1hr 36min',
        Precio: 16,
        comision: false,
        trailer: 'https://www.youtube.com/embed/fRvhuAIh5dA',
        compra_link: 'link de teleticket',
    },
    {
        imagen: Marmaduke,
        title: 'Marmaduke',
        description: 'Una divertídisima comedia protagonizada por un huracán de cuatro patas que provoca terror a su alrededor, aunque siempre se las arregla para parecer un buen perro.',
        horarios:[
            {
                sala: 2,
                comienzo: '14:45',
                fin: '16:30',
            }
        ],
        duracion: '1hr 49min',
        Precio: '12',
        comision: false,
        trailer: 'https://www.youtube.com/embed/fRvhuAIh5dA',
        compra_link: 'link de teleticket',
    },

];

export const banners = [
    {
        _id:1,
        imagen:firstBanner,
        title:'The Greatest Showman',
        text:'P.T. Barnum se entrega a su imaginación para crear el circo Barnum & Bailey en el siglo XIX. Con números musicales, artistas exóticos y hazañas, el fascinante espectáculo toma al mundo por asalto para convertirse en el mejor espectáculo de la Tierra.',
        trailer:'https://www.youtube.com/watch?v=j_ndfF553Mc&ab_channel=AlexRose',
        link_teleticket:'link teleticket',
    },
    {
        _id:2,
        imagen:secondBanner,
        title:'Men in Black: International',
        text:'En esta entrega, los Hombres de Negro, que siempre han protegido la Tierra, deben descubrir un topo dentro de la organización MIB. Para luchar contra unos nuevos malévolos aliens camuflados como humanos utilizarán una gran tecnología.',
        trailer:'https://www.youtube.com/embed/fRvhuAIh5dA',
        link_teleticket:'link teleticket',
    },
    {
        _id:1,
        imagen:thridBanner,
        title:'The Shape of Water',
        text:'Baltimore, década de 1960. Elisa, muda desde que era un bebé, trabaja como limpiadora nocturna en un centro de investigación aeroespacial. Una noche, mientras está limpiando en una zona de alta seguridad, ve cómo llevan al laboratorio una cápsula con un extraño ser en su interior. Se trata de un hombre anfibio, del que se enamora. A partir de entonces, Elisa elabora un plan para liberar al mutante.',
        trailer:'https://www.youtube.com/embed/fRvhuAIh5dA',
        link_teleticket:'link teleticket',
    },
    {
        _id:1,
        imagen:fourthBanner,
        title:"The Girl in the Spider's Web",
        text:'La hacker Lisbeth Salander (Claire Foy) y el periodista Mikael Blomkvist (Sverrir Gudnason) se encuentran atrapados en una red de espías, ciberdelincuentes y funcionarios corruptos del gobierno.',
        trailer:'https://www.youtube.com/embed/fRvhuAIh5dA',
        link_teleticket:'link teleticket',
    },
    {
        _id:1,
        imagen:fithBanner,
        title:"Ocean's 8",
        text:'Debbie Ocean, la hermana de Danny, pretende cometer el atraco del siglo durante la gala Met que se celebra en Nueva York: quiere robar un collar valorado en más de 150 millones de dólares. Debbie embarca en la misión a siete ladronas expertas.',
        trailer:'https://www.youtube.com/embed/fRvhuAIh5dA',
        link_teleticket:'link teleticket',
    },
]

export const peliculasSlider = [
    {   _id:1,
        imagen: firstMovie,
        title: 'The Equalizer 2',
        trailer: 'https://www.youtube.com/embed/fRvhuAIh5dA',
    },
    {   _id:2,
        imagen: secondMovie,
        title: 'The Front Runner',
        trailer: 'https://www.youtube.com/embed/fRvhuAIh5dA',
    },
    {   _id:3,
        imagen: thridMovie,
        title: 'The Girl in the Spiders web ',
        trailer: 'https://www.youtube.com/embed/fRvhuAIh5dA',
    },
    {   _id:4,
        imagen: fourthMovie,
        title: 'The Shape of the Water',
        trailer: 'https://www.youtube.com/embed/fRvhuAIh5dA',
    },
    {   _id:5,
        imagen: fithMovie,
        title: 'The Greatest Showma',
        trailer: 'https://www.youtube.com/embed/fRvhuAIh5dA',
    },
]

export const combos = [
    {   _id:1,
        imagen: firstCombo,
        title: 'Combo Personal 1',
    },
    {   _id:2,
        imagen: secondCombo,
        title: 'Combo Personal 2',
    },
    {   _id:3,
        imagen: thridCombo,
        title: 'Combo Pareja',
    },
]