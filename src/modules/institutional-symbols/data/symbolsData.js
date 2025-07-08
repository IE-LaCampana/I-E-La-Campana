import Bandera from "../../../assets/institutional/bandera.png"
import Logo from "../../../assets/logos/Logo-I-E-La-Campana.png"
import himnoMisak from "../../../assets/audios/himno-misak.mp4";
import himnoSilvia from "../../../assets/audios/himno-silvia.mp4";
import himnoCauca from "../../../assets/audios/himno-cauca.mp4";
import UniformeDiario from "../../../assets/institutional/uniforme1.jpg";
import UniformeDiarioAlt from "../../../assets/institutional/uniforme2.jpg";
import UniformeFisica from "../../../assets/institutional/sud1.jpg";


export const symbolsData = [
  {
    title: "Bandera",
    image: Bandera,
    alt: "Bandera del pueblo Misak",
    description: `
      <p class="color-block"><strong>Fucsia:</strong> Representa la fuerza de la mujer Misak como dadora de vida, cuidadora del territorio y transmisora de saberes. Es el color del amanecer, de la fertilidad y del trabajo de cuidado, la espiritualidad de la madre y el empoderamiento.</p>
      <p class="color-block"><strong>Azul:</strong> Simboliza el pensamiento, el cielo, el agua y la espiritualidad. También la introspección y la unidad de los pueblos Misak en armonía con su cosmovisión. Es la fuerza del saber, la guía del pensamiento ancestral y la conexión con lo espiritual.</p>
      <p class="color-block"><strong>Blanco:</strong> Representa la paz, la armonía, el derecho, el equilibrio y la unidad como base de su comunidad. El blanco es también símbolo de respeto hacia la vida en todas sus formas y de la ley natural Misak.</p>
      <p class="color-block"><strong>Negro:</strong> El origen, el todo y el sistema. Es el vínculo con la madre naturaleza, la noche, la sabiduría y la memoria. Es la raíz de la identidad que une el pasado, presente y futuro del pueblo Misak en su lucha y pervivencia.</p>
    `
  },
  {
    title: "Logo",
    image: Logo,
    alt: "Logo de la Institución Educativa La Campana",
    description: "El logo de la Institución Educativa La Campana representa la identidad cultural y el compromiso educativo del pueblo Misak, ubicado en el departamento del Cauca. En el centro, un libro abierto simboliza el conocimiento y la educación. De él nace una espiral negra, símbolo ancestral Misak que representa la sabiduría, el crecimiento espiritual y el aprendizaje continuo. Esta espiral se conecta con el sol, fuente de luz y guía para el conocimiento. El paisaje de montañas verdes y un río serpenteante refleja el entorno natural y territorial de la comunidad, mientras que el arco iris representa la armonía entre la naturaleza, la espiritualidad y el aprendizaje. Las frases en lengua Misak, \"KausrӨ Kusrem Purukuik Ya\" (en la parte superior) y \"Isup Aship MӨrӨp MarӨp\" (en la parte inferior), refuerzan la misión educativa basada en el trabajo colectivo, el respeto y la sabiduría ancestral. Este logo expresa la unión entre el saber ancestral y la educación moderna, proyectando una formación con identidad, territorio y comunidad."
  }
];

export const himnosData = [
  {
  id: 1,
  title: "KӨllӨlei Nu Wam -- Himno Misak",
  verses: [
    "Metrap chikucha isumꝊ, chikucha palꝊmupen, mꝊkelꝊ kuari maren, ishumpur  pasik pasren, maya nu misakwan ala kuallipelꝊ kꝊn, mayankucha tap lincha pailapelꝊ kꝊn tan, metrapelꝊpe kuari marꝊpelꝊ, tru uras srꝊnkutre, lincha kuallipelꝊ.",
    "Metrappe pꝊshik muchip, mꝊilata pena kꝊmꝊ, ayaelꝊ pura kualla, truikwan nena mapelꝊ, pirꝊ kꝊtsꝊyu nena mapelꝊ kꝊpik kꝊn, pꝊshikwan kalikyu muchipelꝊ kꝊn, kitsꝊ srukyupe, purakichipelꝊ, truikwan mapikpe chi kuantrꝊ kaik kꝊpik. ",
    "MꝊik kꝊpen kuantrꝊ kꝊpen, masꝊ pusrtrap ampꝊpelꝊ,kuamꝊntrai map isua mꝊra, yamai mꝊrꝊpik peran, kepasrꝊ mentappe kuantrap kaik kꝊncha mꝊran, kuantrap tikwane yantꝊ mꝊ maram kaik kꝊntan, kan kualꝊm palan kape patru palan, truikwan isupen yantꝊ kuamik nepun. ",
    "Nam misakmera kuapen, mukucha purukuntrun, Maya elꝊ mamik srua ampa, lincha kualmapelꝊ kꝊn, Ꝋsik amꝊñama lincha amꝊnaikwan isuwa,Churas kꝊpen nakucha yawei kuamik kꝊncha, Na kuapen kucha mukꝊpen linchai, ",
    "S Ꝋ rintulyu muta pua, miikmatap putrapelꝊ,manakucha asamik kaik, kansrꝊmai intrap ipen, kansrꝊ mantrap intraincha, chikꝊpen pusra sꝊran, mu kꝊtrꝊmisrꝊpikpe, pipik pꝊnsrꝊpelꝊ, namui musikpe, palai mꝊrꝊpelꝊ metrapelꝊpe pusra sꝊrapelꝊ.",
    "MꝊisrꝊ misakmerape, truikwan chikucha isumꝊn, chi kuikwan waminchene, ka intsatꝊ mꝊrꝊpelꝊ, puleelꝊ wamintiktꝊ, tap kꝊtanmap treintan, namui kꝊllelꝊ, wamintikwan mꝊrmuwa treintan, mayaelꝊ isukun, chi tapik kꝊpikwan, namui kꝊllelꝊ wamintikwane.",
    "Mayaelan kasraanranꝊp, chi patsikwan isumꝊ, Namui luspa palꝊpa, kisamtik wantrinkucha, katꝊ isua kusrentrap, kꝊllelan waminchikun, pirꝊ latawei namuintꝊweik kꝊpik kꝊn tan, chiwantꝊ kucha, wetꝊtrapen kꝊntrun, chiwantꝊ kucha, pesanamumik kꝊn. ",
    
    ],
  audioSrc: himnoMisak,
  },
  {
    id: 2,
    title: "Himno de Silvia",
    verses: [
      "Salve reina del trigo, nodriza del clavel y de la rosa; bajo tu suave abrigo preludia el viento su canción gozosa.",
      "Relumbra en tus alcores la parva luz que nutre tus manzanas, y en la mística lumbre de tus flores fluye un calor de esencia castellana.",
      "Sobre el cristal de la montaña andina, lejos del valle, ausente de los mares, surges, azul, radiante, cristalina, entre los eucaliptos tutelares.",
      "En la dulzura de tus aires luce cándida enseña de apacible aurora cuando la luna tímida reluce y los callados ámbitos decora.",
      "Dora tus campos úberos la llama que anuncia tus feraces sementeras, y sobre surcos ávidos derrama el sol de tropicales primaveras.",
      "A la feroz conquista del hispano opusiste el impulso de tu raza, que con la flecha audaz y firme mano, luchó por su bohío y con su maza.",
      "Conservas de tu indígena realeza vivos retoños de almas abolidas, y muestras con orgullo la entereza de las castas de América, vencidas.",
      "Donas a Dios primicias de tus mieses en anuales ofrendas primitivas: rescoldo de un pasado en el que ofreces viejas leyendas a tu ayer cautivas.",
      "Eres hospitalaria y generosa, noble asilo de paz para el viandante cuando a la sombra de tu lar reposa al caro abrigo de tu amor sedante.",
      "Hay en tu clima efluvios magistrales para el humano corazón que, ansioso, busca alivio y solaz para sus males a la vera del cauce rumoroso.",
      "Relieva los blasones de tu historia el ínclito varón que un día ciñera la banda tricolor y enalteciera las gestas del honor con su victoria."
    ],
    audioSrc: himnoSilvia,
  },
  {
    id: 3,
    title: "Himno del Cauca",
    verses: [
      "Cauca, Cauca, nos une un pasado, un propósito y una intención; voluntad de encontrar un camino compartido hacia un mundo mejor.",
      "Cuna de aguas fecundas, cordillera de sol, mar que lame una costa de oro, mangle y tambor.",
      "Mano abierta a la vida, isla agreste, estación donde el viento se posa a ensayar su canción.",
      "Suelo fértil de valles que un volcán abonó; selva y nubes se funden en un verde crisol.",
      "Blancos, indios y negros, una sola ilusión; hijos de la misma tierra, frutos de la misma flor."
    ],
    audioSrc: himnoCauca,
  }
];

export const uniformesData = {
  title: "UNIFORMES DE LA INSTITUCIÓN",
  description: "Por ser el uniforme un símbolo de identidad y de pertenencia a la institución, durante la jornada escolar y con el uniforme institucional se debe mantener una excelente presentación personal: sin piercing de cabello, maquillaje, adornos y accesorios llamativos y exagerados. El corte de cabello debe ser sencillo, debe ser bajo, bien estructurado y no llamativo. No se permite el uso de crestas, cabello largo o mechones sobre el rostro.",
  uniformes: [
    {
      type: "uniforme-diario",
      label: "Uniforme de diario",
      image: UniformeDiario
    },
    {
      type: "uniforme-diario-alt",
      label: "Uniforme de diario",
      image: UniformeDiarioAlt
    },
    {
      type: "uniforme-educacion-fisica",
      label: "Uniforme de educación física",
      image: UniformeFisica
    }
  ]
};
