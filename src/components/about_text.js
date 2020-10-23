import React from "react"

import "./styles.css"

const AboutES = ({ siteTitle }) => (
    <section className="about">
        <div className="about-text">
<h1>Declaración de Misión</h1>

<p>The Circuit (El Circuito) es una investigación de periodismo colaborativo incomparable que explora y expone décadas de datos pasados ​​por alto y sus patrones de conexión enterrados en los archivos del Circuito de Cortes del Condado de Cook.</p>

<p>Tres organizaciones noticiosas con sede en Chicago - Better Government Association, The Chicago Reporter e Injustice Watch - se unieron a los consultores de tecnología cívica DataMade y pasaron más de un año recopilando, organizando y analizando más de 30 años de datos de todas las divisiones del Circuito de Cortes del Condado de Cook. Nuestro trabajo fue asistido por investigadores de la Center for Survey Methodology de la Harris School of Public Policy de la Universidad de Chicago.</p>

<p>Unimos fuerzas para realizar un examen único en su tipo sobre cómo funciona el sistema judicial del Condado de Cook. Nuestro objetivo es exponer cómo se trata a los diferentes acusados ​​de delitos similares, analizar las tendencias sobre cómo los fiscales han acusado a los ciudadanos y estudiar qué tan bien los acusados ​​han sido representados por abogados. Examinaremos las inequidades sistémicas y revelaremos sesgos en la estructura del sistema legal que se han sospechado durante generaciones, pero nunca se han probado definitivamente.</p>

<p>El Circuito de Cortes del Condado de Cook es el segundo sistema judicial unificado más grande del mundo y durante mucho tiempo ha servido como indicador nacional sobre cuestiones de justicia e igualdad. El proyecto de El Circuito también llega en un momento en que las cuestiones de justicia y equidad están ocupando un lugar central en el discurso nacional tras años de críticas sobre el trato sesgado por parte de las fuerzas del orden y el sistema judicial.
Obtener acceso y analizar millones de registros hubiera sido imposible sin esta colaboración sin precedentes, donde las organizaciones noticiosas, los expertos en tecnología cívica y los investigadores combinaron sus especialidades y misiones distintivas para lograr un objetivo colectivo.</p>

<p>En el futuro, un componente clave de nuestro trabajo será involucrar a otras organizaciones de noticias y grupos comunitarios a medida que continuamos analizando datos y trabajando en historias.</p>

<p>Este trabajo no ha sido fácil. Gran parte de los datos que extrajimos del sistema judicial eran complicados y desorganizados, pero pudimos organizarlos de manera útil para responder preguntas de larga data sobre un sistema judicial que atiende a 5.2 millones de residentes.</p>

<p>En un momento en que los medios de comunicación locales se están reduciendo en todo el país, incluso en Chicago y el Condado de Cook, esperamos que nuestra colaboración sirva como una declaración de que, a pesar de las variadas misiones de nuestras organizaciones, compartimos valores fundamentales y objetivos similares para lograr un bien mayor: exponer fallas institucionales que obstaculizan la justicia, confrontar la desigualdad racial y económica y brindar mayor transparencia para que el sistema judicial sea más responsable.</p>

<p>Y acabamos de empezar.</p>

<h3>Quienes somos</h3>
<p>The Circuit es un proyecto de periodismo colaborativo en curso de organizaciones de noticias sin fines de lucro de Chicago, Better Government Association, The Chicago Reporter e Injustice Watch, en asociación con la empresa de tecnología cívica DataMade y con la ayuda de investigadores de la Center for Survey Methodology de la Harris School of Public Policy de la Universidad de Chicago. Desarrollamos un logotipo para este proyecto, que es una imagen de una tarjeta de circuitos superpuesta sobre una imagen del edificio Leighton, sede del Circuito de Cortes en la calle 26 y la avenida California. Este trabajo fue financiado con una subvención de la Fundación Robert R. McCormick.</p>

<p><span className="bold">Reporteros:</span> Jared Rutecki, Casey Toner (BGA); Josh McGhee (The Chicago Reporter); Abigail Blachmann, Alejandro Fernández, Emily Hoerner (Injustice Watch)</p>

<p><span className="bold">Análisis de datos:</span> Jean Cochrane, Hannah Cushman, Forest Gregg, Bea Malsky, Jasmine Mithani (DataMade); Seiya Kawashima, Trina Reynolds-Tyler, Lea Washington (Harris)</p>

<p><span className="bold">Enlace comunitario:</span> Starlyn Matheny, Mia Sato, Olivia Obineme (BGA); Asraa Mustafa (The Chicago Reporter); Charles Preston (Injustice Watch)</p>

<p><span className="bold">Diseñador:</span> Chris Courtney</p>

<p><span className="bold">Ilustrador:</span> Verónica Martínez</p>

<p><span className="bold">Traductores:</span> Gisela Orozco, Jorge Mederos</p>

<p><span className="bold">Editores:</span> John Chase, David Kidwell (BGA); Adeshina Emmanuel, Jonah Newman, Rick Tulsky (Injustice Watch); Matt O’Connor; Fernando Diaz, David Eads, Matt Kiefer (The Chicago Reporter)</p>

<p><span className="bold">Desarrollo/Coordinadores del Proyecto:</span> Kate Walsh (BGA); Amanda Miley (Injustice Watch)</p>


<h3>Cómo hicimos este trabajo</h3>
<p>Los datos para The Circuit se recopilaron mediante el acceso al sistema de información central del Circuito de Cortes del Condado de Cook.</p>

<p>Hasta 2019, los registros electrónicos de los casos judiciales se archivaban en un sistema informático centralizado. Los miembros del público y los periodistas podían acceder a este sistema a través de terminales públicas basados ​​en texto, ubicadas en las cortes del Condado de Cook. En el verano de 2018, Injustice Watch solicitó y se le concedió acceso remoto al ordenador central.</p>

<p>Utilizando un programa que emulaba una terminal del sistema, Injustice Watch podía acceder a gran parte de la información disponible a través de las terminales públicas, pero desde una computadora personal.</p>

<p>Injustice Watch contrató a la empresa de tecnología cívica DataMade de Chicago para que escribiera un programa informático para acceder y registrar automáticamente los expedientes de casos y la información de gestión de casos penales. Un expediente de caso es un registro de las mociones, fallos y eventos similares en un caso. La información de gestión del caso incluye detalles sobre el acusado, la agencia que realizó el arresto y el estado del caso.</p>

<p>El programa se desarrolló entre abril y agosto de 2019 por las noches y los fines de semana para garantizar que este trabajo no interfiriera con otros miembros del público que buscaban información sobre casos. Este extracto inicial fue pagado por Chicago Data Collaborative e Injustice Watch.</p>

<p>Después de asegurar estos datos iniciales, formamos la colaboración The Circuit para conseguir fondos adicionales para organizar y estandarizar los datos y escribir programas de extracción similares para las otras divisiones de la corte.</p>

<p>Para cada caso penal, el programa de DataMade produjo dos archivos de texto: uno para el expediente del caso y el segundo para la información de gestión. DataMade escribió programas adicionales para extraer la información de esos archivos de texto en tablas de datos. Estas tablas se cargaron en PostgreSQL, una base de datos de código abierto en la que los periodistas podían consultar los datos.</p>

<p>Una vez logrado un formato organizado, los periodistas de The Circuit, el personal de DataMade y los estudiantes de la Escuela Harris de Políticas Públicas de la Universidad de Chicago documentaron lo que significaban los datos y cómo usarlos.</p>

<p>Los datos tenían muchos problemas de calidad que The Circuit tuvo que superar: la información sobre los cargos no estaba estandarizada; a menudo faltaba información sobre raza, etnia y género; los eventos no siempre se registraron en el orden correcto en los expedientes; a veces faltaban mociones y fallos que debían haberse hecho; y los errores tipográficos eran comunes en muchos campos. La preparación y estandarización de los datos ha llevado ocho meses y queda trabajo por hacer.</p>
    </div>
    <div className="rail"></div>
</section>

)

export default AboutES
