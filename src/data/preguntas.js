

const TIPO_UNO = [
    '1. La gente me considera una persona trabajadora, extremadamente responsable y comprometida con mis deberes aunque tal vez un poco seria y exigente.',
    '2. Yo creo que en la vida y sobre todo en los principios y valores casi nunca hay términos medios, las cosas están bien o mal, son blancas o negras.',
    '3. Reconozco que no soy precisamente una persona alocada y efusiva, más bien me considero del tipo autocontrolado.',
    '4. Reconozco que puedo llegar a ser extremadamente exigente con las demás personas, incluso perfeccionista. Pero lo único que quiero es que las cosas se hagan bien.',
    '5. Tal vez debo aceptar que dedico demasiado tiempo a mis asuntos laborales, pero es que me desespera sentir que no aprovecho el tiempo.',
    '6. Me gusta que trabajar de manera ordenada, sistemática y paso a paso. Así se trabaja mejor.',
    '7. Socialmente me considero una persona educada y agradable, aunque no suelo ser de esos tipos “show” o de los que hacen amigos por doquier o son el alma de la fiesta.',
    '8. Mi enfoque de vida ha sido mas bien racional, se me dificulta un poco hablar de lo que siento o dar demostraciones de afecto súper efusivas. ',
    '9. Tengo una habilidad natural para ver los errores en algo o identificar formas mejores de hacer las cosas.',
    '10. Algunas personas dicen que soy muy frio(a) y que necesito relajarme y disfrutar más la vida. Yo creo que tienen algo de razón.',
    '11. Me impacienta que las cosas no se hagan bien y tengo poca tolerancia a los errores. Cuando me enojo, no me gusta que se me note, intento calmarme y no hacer escándalo.',
    '12. “Perder el control” o vivir la vida loca no son propiamente cosas con las que me identifico.',
    '13. Reconozco que podría reírme un poco más, abrazar más, trabajar menos y ser  un poco más flexible.',
    '14. Soy muy controlado en mis emociones, lo que hace que algunas personas me vean frio y distante, pero en mi corazón siento con intensidad.',
    '15. No vivo interesándome en el qué dirán ni me fijo en las tendencias de la moda, la verdad eso es para otros. Yo hago lo mío y lo hago bien y no me importa lo que otros digan.',
] 

    


const TIPO_DOS = [
    '1. Cuando quiero a alguien, me involucro muchísimo en sus cosas y llego a estar enterado(a) de cómo funciona su vida, su trabajo, sus relaciones, etc.',
    '2. Cuando quiero, puedo hacer amigos con facilidad. Tengo un carisma especial, aunque no siempre estoy de ánimo para eso.',
    '3. Me molesta mucho que alguien que quiero esté pasando por una situación importante o difícil y no me lo cuente. Y me molesta más si me doy cuenta de que se lo ha contado a otras personas.',
    '4. Soy una persona de buen genio, pero mis emociones suelen ser cambiantes y hay momentos en los que simplemente no estoy de buen humor. La gente que me rodea diría que soy variable.',
    '5. Me encanta ayudar a otros y creo que lo hago sin esperar nada a cambio, pero es cierto que me irrita que no reconozcan el esfuerzo que pongo en demostrarles mi amor. ',
    '6. Cuando estoy en una relación sentimental, prácticamente el mundo se me olvida y solo quiero estar con mi pareja.',
    '7. A veces se me va la mano dando, creo que necesito equilibrarme y pensar más en mi.',
    '8. Quizás debo reconocer que los celos hacen parte de mis “defecticos”, y siento que algo se me revuelve cuando noto en ellos esa actitud de “mi vida sería igual sin ti”.',
    '9. Me encanta recibir en casa y atender a mis familiares y amigos, además me considero un excelente anfitrión. Pero eso sí, que me digan que la comida quedó excelente o me sentiré frustrado(a).',
    '10. Me cuesta trabajo decir “no” cuando alguien que quiero me pide algo, por difícil que sea para mí.',
    '11. Soy muy sentimental, romántico(a), no tengo problemas en expresar mis sentimientos y me encantan las conversaciones “a corazón abierto”.',
    '12. Reconozco que soy una persona mimada, consentida, un poquito caprichosa y a veces manipuladora. Pero, solo un poquito de cada cosa.',
    '13. Me considero algo así como un “sanador de corazones rotos” o la “doctora corazón” entre mis amistades.',
    '14. Soy una persona esencialmente fiel y entregada, claro que me parece que a veces la gente no te corresponde como debería.',
    '15. Soy un gran apoyo para mis seres queridos, les ayudo con múltiples tareas y me encanta que cuenten conmigo para todo.',
]

    


const TIPO_TRES = [
    '1. Me defino como una persona orientada a los resultados y al éxito. Mi mente casi siempre está trabajando para alcanzar lo que quiero. Triunfo luego existo.',
    '2. Creo que si quieres tener éxito en algo, necesitas algo más que talento. Necesitas contactos, saber rodearte y seleccionar muy bien lo que le muestras a la gente. ',
    '3. Puedo sentir algo con muchísima intensidad en un momento, pero cuando es necesario simplemente paso la página y sigo adelante sin mirar atrás.',
    '4. Soy el tipo de persona que primero dice “Si puedo” y luego pienso en cómo lograr las cosas que dije que soy capaz de hacer.',
    '5. No me considero esclavo(a) del trabajo, pero si del éxito. Si logro ser exitoso trabajando un solo día en el mes, no tengo problema.',
    '6. Para bien o para mal, soy bueno para encubrir mis inseguridades; nadie adivina jamás qué siento realmente.',
    '7. Tengo una habilidad natural para entender qué quiere ver la gente y sé cómo hablarles para convencerlos.',
    '8. Soy muy competitivo, me encanta ganar y que se sepa que soy bueno. El reconocimiento es clave para mi motivación.',
    '9. Sé que mucha gente me admira, pero extrañamente tengo pocos amigos verdaderos y casi nadie conoce mis sentimientos profundos.',
    '10. Creo que guardando las proporciones, la frase “El fin justifica los medios” es perfecta.',
    '11. Me fascina atraer la atención de la gente, soy naturalmente coqueto(a) y disfruto que alguien se interese en mi.',
    '12. Me cuesta trabajo aceptar mis errores y mis fracasos, mejor dicho, prefiero decir que no tengo tiempo para ir a un concierto antes de que se sepa que no tengo dinero para la boleta.',
    '13. Me considero una persona altamente adaptable, analizo las situaciones y si debo cambiar para tener éxito, lo hago sin problemas.',
    '14. “La buena vida cuesta, también la hay barata pero no es vida” es una frase que comparto. Prefiero tener pocas cosas  finas que muchas cosas del montón.',
    '15. Me atrae la gente exitosa y carismática, pero me asusta que mi pareja o mis seres queridos me opaquen profesionalmente.',
]
    


const TIPO_CUATRO = [
    '1. Muchos me consideran una persona enigmática, difícil y contradictoria ¡y eso me gusta de mi!',
    '2. Soy 110% sentimental, romántico, susceptible, idílico, existencial, trascendente, mítico!!!! Y tal vez un poco exagerado con mis emociones.',
    '3. Suelo sentirme solo aunque esté rodeado de gente, es una sensación como de que “no encajo” en ningún lugar.',
    '4. No soy bueno con las críticas, el menor comentario puede herirme casi de muerte.',
    '5. Me encanta crear, poner mi estilo en lo que hago. No me gusta seguir tendencias, quiero dejar una huella única y tan profunda como yo.',
    '6. Mi imaginación es un mundo increíble, de hecho paso bastante tiempo fantaseando situaciones o teniendo conversaciones mentales que pueden nunca llegar a hacerse realidad.',
    '7. La gente dice que soy como depresivo(a) y existencialista, pero no tienen idea de todo lo que llevo bajo la piel ni del sufrimiento que se esconde en mi sonrisa pública.',
    '8. Admiro la belleza, pero no lo que todos consideran hermoso es bello para mí.',
    '9. Puede sonar triste pero creo que un poco de dolor nos recuerda que estamos vivos.',
    '10. Necesito tiempo para estar a solas, estar demasiado tiempo expuesto al mundo me satura.',
    '11. Hay una parte de mi que nadie conoce, un universo que vive a través de alguna forma de arte como la poesía, la escritura, el baile o la pintura. Son cosas que hago para dejar salir lo que siento, pero casi nunca las muestro.',
    '12. Más de una vez en mi vida me he preguntado “Y para qué estoy vivo(a)?”. Siento que hay una verdad que busco y todavía no encuentro.',
    '13. Digo que no me interesa figurar y que la gente me reconozca, pero acepto que tal vez me iría bien si fuera más sociable y espontaneo.',
    '14. Me encanta mi capacidad de emocionarme con las cosas sencillas, creo que casi nadie siente la vida con tanta intensidad.',
    '15. Sé que hay cosas que he hecho que no me hacen mucho bien, pero acepto que dejarlas es difícil, son cosas que me han acompañado en este viaje que es vivir.',
]

    


const TIPO_CINCO = [
    '1. Amo comprender el porqué de las cosas, no me gusta “tragar entero”. Me cuestiono el porqué de casi todo lo que veo.',
    '2. Mi vida social es pequeña, la comparto con personas especiales e importantes. De hecho, ni siquiera me gusta que mis amigos lleven a otras personas a nuestras reuniones.',
    '3. No me interesa ser la estrella de la noche o esa persona que todos admiran. Yo soy más bien observador.',
    '4. Me molesta la gente que no investiga el fondo de las cosas, creo que casi todo el mundo vive sin tener idea porqué hace lo que hace.',
    '5. Si hablo de algo es porque ya lo analicé y estoy seguro. Para decir cosas sin sentido tiempo sobra.',
    '6. Cuando me meto en un proyecto creativo o de investigación se me puede olvidar el mundo y puedo perder la noción del tiempo.',
    '7. Me cansa tener que compartir demasiado tiempo con personas, de hecho me incomoda ser el centro de atención en una fiesta o reunión.',
    '8. Definitivamente trabajo mejor si puedo pensar solo un momento y luego compartir mis ideas.',
    '9. El ejercicio físico no ha sido precisamente mi materia favorita.',
    '10. Tiendo a tardar muchísimo en perfeccionar los proyectos en los que trabajo, pero los resultados son contundentes.',
    '11. La mayoría de las personas son increíblemente ignorantes; piensan por pensar y no tienen un fundamento, una explicación para lo que hacen o dicen.',
    '12. Leo y estudio constantemente. Estoy seguro que he leído más libros que el 95% de la gente que conozco.',
    '13. Las emociones son difíciles de explicar. Ese si es un tema difícil de entender.',
    '14. Las relaciones humanas serían mejor si fueran menos presenciales, yo por mi parte no tengo problema con los amigos virtuales. Internet es lo máximo!',
    '15. Me concentro tanto en lo que hago que suelo no enterarme del paso del tiempo.',
]
    


const TIPO_SEIS = [
    '1. Creo que soy una buena persona, responsable y cumplidora, aunque quizás me asusta relacionarme con personas que representan autoridad para mi.',
    '2. Creo que tengo excelentes ideas, pero no siempre las comunico o las pongo en marcha por el miedo a equivocarme.',
    '3. Si cometo un error, me da miedo que todos me vayan a criticar de inmediato, o a pensar mal de mi.',
    '4. En mis relaciones tiendo a dar amor y respeto, pero necesito espacio para mis cosas y tiempo para cumplir mis compromisos.',
    '5. Me molesta que las personas suelen ser demasiado cómodas y van incumpliendo sus compromisos como si nada.',
    '6. Soy una persona tranquila y respetuosa. En general soy suave al dirigirme a los demás, lo malo es que algunos piensan que eso es inseguridad.',
    '7. Cuando admiro a alguien, me cuesta trabajo ser yo mismo(a) cuando estoy a su lado o llevarle la contraria.',
    '8. Soy muy responsable con mis compromisos. Si digo que voy a hacer algo, lo cumplo cueste lo que cueste.',
    '9. Reconozco que me estreso con facilidad, pero es porque no quiero quedarle mal a nadie.',
    '10. Cuando trabajo en equipo necesito estar seguro(a) de que mis compañeros están haciendo las cosas correctamente, así que doy un vistazo para cerciorarme.',
    '11. A veces armo un enredo gigante para saber qué voy a pedir en un restaurante. Antes de tomar una decisión, procuro consultarlo para tener más seguridad.',
    '12. Me molesta aceptar que a veces termino haciendo cosas que no quería, solo por no hablar a tiempo.',
    '13. Prefiero que me digan qué debo hacer y cómo hacerlo, antes que tener que pensar en cómo voy a alcanzar alguna meta.',
    '14. Tiendo a ser un poco dependiente en mis relaciones, sobre todo porque me gusta consultarle a alguien de confianza qué hacer en momentos de duda.',
    '15. Soy una persona precavida y procuro anticiparme a lo que podría pasar, aunque algunos dicen que me preocupo demasiado.',
]
    


const TIPO_SIETE = [
    '1. Me encanta disfrutar la vida, hay tantas cosas que conocer, intentar y gozar, que siento que no voy a tener tiempo de probarlas todas.',
    '2. Mi agenda suele estar llena, y me gusta que sea así, no pienso quedarme mirando la hierba crecer.',
    '3. Mi enfoque de vida es sencillo: Quiero vivir cada instante con intensidad y locura, ya luego veremos qué pasa. Primero gozo, luego miro las consecuencias.',
    '4. Soy excelente contando historias y divirtiendo a la gente, pero me aburre que me quieran contar sus penas y tragedias. Mi consejo: Olvida lo malo y vamos a gozar!',
    '5. No disfruto mucho de estar solo y en silencio. Prefiero el movimiento y la bulla.',
    '6. Detesto la rutina, hacer siempre lo mismo cansa y desmotiva a cualquiera. Estoy siempre listo para un cambio radical en mi vida.',
    '7. Si estoy triste, prefiero ir a divertirme que ir al psicólogo.',
    '8. Tengo un gusto especial por las cosas buenas, finas, me gusta lo sofisticado.',
    '9. No soy sólo una persona “divertida”, también tengo mi lado serio, incluso oscuro, aunque no es un lugar que visite mucho.',
    '10. Soy bueno para lo genera, no tanto para los detalles; disfruto más teniendo muchas ideas que ocuparme de ponerlas en práctica.',
    '11. Cuando quiero algo, ¡lo quiero en abundancia y lo quiero ahora! Por eso vivo sin cupo en mis tarjetas de crédito.',
    '12. Soy consciente de que en mi vida ha habido periodos de verdaderos excesos… pero no me arrepiento!',
    '13. Una de mis principales problemas es que me distraigo con facilidad.',
    '14. Me gusta cambiar de casa, de automóvil, de restaurante favorito, de música, de amigos y de todo lo que se pueda cambiar de vez en cuando.',
    '15. Me encanta estar con la gente, conocer y relacionarme: definitivamente soy un tipo social.',
]
    


const TIPO_OCHO = [
    '1. Soy extraordinariamente independiente y no me gusta depender de nadie para lo que necesito.',
    '2. Creo que hay que “romper algunos huevos para hacer una tortilla”.',
    '3. Cuando quiero a las personas las considero “mi gente” y siento la necesidad de cuidar sus intereses.',
    '4. Me gusta competir y vencer pero a los mejores. De qué sirve ganarle a los débiles?',
    '5. Creo que si te muestras inseguro la gente te acaba. La debilidad no es lo mío.',
    '6. Jamás renuncio a lo que quiero ni me doy por vencido fácilmente. Claro que otros pensarán que soy terco(a), pero no me importa.',
    '7. Sé que a veces me equivoco, pero prefiero pedir perdón con un regalo o una invitación. No me gusta tener que hablar de mis equivocaciones, simplemente demuestro que entendí mi error y listo.',
    '8. Soy sensible, pero es un lado que dejo ver a muy pocas personas.',
    '9. Mis amigos saben que yo digo exactamente lo que pienso y me agradecen mi honestidad. Las demás personas pueden ponerse susceptibles con mis comentarios, pero es porque no saben que yo hablo así.',
    '10. Si quieres motivarme, rétame diciendo que no soy capaz de hacer algo.',
    '11. Me considero un desafiador, una persona que saca a las personas de su zona de comodidad para que hagan todo lo que son capaces de hacer.',
    '12. “Yo no tengo pelos en la lengua, digo las cosas como son duélale a quien le duela” es una de mis frases favoritas.',
    '13. Yo cumplo las reglas y sigo la autoridad siempre que esta se gane mi respeto, de lo contrario no.',
    '14. Me duele aceptar que mucha gente me admira, pero también me teme.',
    '15. Frecuentemente quiero decirle algo a alguien y lo que logro es que se sienta mal. No sé por qué la gente es tan delicada!',
]
    


const TIPO_NUEVE = [
    '1. Tengo la habilidad natural de hacer que la gente se sienta tranquila a mi lado, no sé por qué pero todos dicen lo mismo.',
    '2. Soy una persona que vive en armonía con la vida, no me complico y fluyo con las cosas que se van dando.',
    '3. Me encanta estar cómodo(a), de hecho sé que podría tener más éxito si me esforzara más, pero para mi es prioridad mi tranquilidad.',
    '4. Soy bastante soñador(a) y paso mucho tiempo imaginando proyectos que no he iniciado.',
    '5. Prefiero ceder antes que armar una escena o una pelea.',
    '6. Tengo la capacidad de mantener la calma en situaciones de presión, aunque a veces la gente me dice que eso es malo, yo lo considero excelente.',
    '7. Soy bastante fácil de complacer y normalmente creo que lo que tengo es suficiente para mí.',
    '8. Una de mis frases es “si no esta roto, ¿para que arreglarlo?”.',
    '9. Yo defiendo mis puntos de vista, pero cuando veo que se va a armar un problema, prefiero ceder.',
    '10. He comenzado varios proyectos que luego dejé abandonados. ',
    '11. Tengo ciertas rutinas de vida que me encantan. Muchas veces prefiero lo conocido a estar experimentando con cosas nuevas.',
    '12. Me es fácil comprender diferentes puntos de vista y tiendo más a estar de acuerdo que en desacuerdo con las personas.',
    '13. Mi filosofía de vida es: Mira lo positivo siempre y no te angusties con las cosas que no puedes cambiar.',
    '14. Reconozco que a veces me vuelvo conformista e inseguro frente a las cosas que quiero, podría asumir mi vida con más liderazgo.',
    '15. No me interesa estar agradando al mundo o comprar el carro de moda, solo quiero estar tranquilo y gozar de cierta estabilidad en todo sentido.',
]

export const PREGUNTAS = [
    TIPO_UNO,
    TIPO_DOS,
    TIPO_TRES,
    TIPO_CUATRO,
    TIPO_CINCO,
    TIPO_SEIS,
    TIPO_SIETE,
    TIPO_OCHO,
    TIPO_NUEVE,
]

export const TIPOS_PERSONALIDAD = [
    'TIPO UNO: el reformador',
    'TIPO DOS: el ayudador',
    'TIPO TRES: el triunfador',
    'TIPO CUATRO: el diferente',
    'TIPO CINCO: el observador',
    'TIPO SEIS: el leal',
    'TIPO SIETE: el hiperactivo',
    'TIPO OCHO: el lider',
    'TIPO NUEVE: el pacificador',
]