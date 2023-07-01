<script setup>
import Footer from '../components/Footer.vue'
import { ref, nextTick } from 'vue'
const collaps1 = ref(false)
const collaps2 = ref(false)
const collaps3 = ref(false)
const collaps4 = ref(false)

const title1Ref = ref(null)
const title2Ref = ref(null)
const title3Ref = ref(null)
const title4Ref = ref(null)

const openCollaps1 = () => {
    collaps1.value = false
    collaps2.value = false
    collaps3.value = false
    collaps4.value = false
    nextTick(() => {
        const titleElement = title1Ref.value
        if (titleElement) {
            titleElement.scrollIntoView({ behavior: 'smooth' })
        }
    })
}
const openCollaps2 = () => {
    collaps2.value = true
    collaps1.value = true
    collaps3.value = false
    collaps4.value = false
    nextTick(() => {
        const titleElement = title2Ref.value
        if (titleElement) {
            titleElement.scrollIntoView({ behavior: 'smooth' })
        }
    })
}

const openCollaps3 = () => {
    collaps3.value = true
    collaps1.value = true
    collaps2.value = false
    collaps4.value = false
    nextTick(() => {
        const titleElement = title3Ref.value
        if (titleElement) {
            titleElement.scrollIntoView({ behavior: 'smooth' })
        }
    })
}

const openCollaps4 = () => {
    collaps4.value = true
    collaps1.value = true
    collaps2.value = false
    collaps3.value = false
    nextTick(() => {
        const titleElement = title4Ref.value
        if (titleElement) {
            titleElement.scrollIntoView({ behavior: 'smooth' })
        }
    })
}
</script>

<template>
    <main class="pt-40">
        <div class="pagina-content">
            <div class="container-max">
                <div class="pagina">
                    <div class="container-content">
                        <div class="content-header">
                            <div id="como-nacio">
                                <h2 type="button" ref="title1Ref" @click="openCollaps1" class="cursor-pointer font-bold">¿COMO NACIÓ BEMBOS?</h2>
                                <section :class="{ 'hidden': collaps1 == true }">
                                    <div class="banner"><img src="../assets/banner.webp" alt=""></div>
                                    <div class="banner-text">
                                        <p class="text-lg font-semibold text-justify">En 1988 un par de jóvenes empresarios peruanos decidió incursionar en un mercado
                                            poco difundido hasta el momento en el Perú: el mercado de las hamburguesas.</p>
                                        <p class="text-lg font-semibold text-justify">En ese momento existían cadenas nacionales que ofrecían hamburguesas dentro de su
                                            menú, pero no se había desarrollado el hábito de consumo de hamburguesa en el
                                            público peruano ni habían llegado al país las grandes cadenas internacionales.
                                            Estos jóvenes empresarios no conocían el negocio pero les gustaban las
                                            hamburguesas y tenían muchas ganas y convicción en sacar adelante su proyecto.
                                        </p>
                                        <p class="text-lg font-semibold text-justify">Es así que el 11 de Junio de 1988 nació Bembos en un local alquilado del corazón
                                            de Miraflores y comenzaron a trabajar en su objetivo de preparar la mejor
                                            hamburguesa del Perú. El éxito fue inmediato, pues además del excelente producto
                                            Bembos contaba con un ambiente divertido, una moderna decoración y un excelente
                                            servicio.
                                        </p>
                                        <p class="text-lg font-semibold text-justify">Debido a esta gran acogida, en 1990 se inaugura también con éxito sin precedentes
                                            el segundo local de Bembos en San Isidro, de allí en adelante el crecimiento
                                            sería constante.
                                        </p>
                                        <p class="text-lg font-semibold text-justify">Cuando las grandes cadenas internacionales de hamburguesas llegaron al Perú
                                            Bembos ya estaba posicionada en el mercado y la competencia los motivó a ser más
                                            innovadores y eficientes, logrando mantener el liderazgo en el mercado.
                                        </p>
                                    </div>
                                </section>
                            </div>
                            <div class="content-header-div">
                                <h2 type="button" ref="title2Ref" @click="openCollaps2" class="cursor-pointer font-bold">¿QUE OFRECEMOS?</h2>
                                <section :class="{ 'hidden': collaps2 == false }">
                                    <div class="banner"><img src="../assets/banner.webp" alt=""></div>
                                    <div class="banner-text">
                                        <p class="text-lg font-semibold text-justify">La mejor hamburguesa a la parrilla por su sabor único y sus creativas
                                            combinaciones a partir de insumos de la más alta calidad ofrecida en nuestros
                                            atractivos locales. Nuestro espíritu innovador y expresivo se manifiesta en
                                            nuestros productos, pero también en nuestros locales, la música, nuestro
                                            ambiente y servicios.
                                        </p>
                                    </div>
                                </section>
                            </div>
                            <div class="content-header-div">
                                <h2 type="button" ref="title3Ref" @click="openCollaps3" class="cursor-pointer font-bold">CÓMO SE CREÓ LA HAMBURGUESA
                                    BEMBOS</h2>
                                <section :class="{ 'hidden': collaps3 == false }">
                                    <div class="banner"><img src="../assets/banner.webp" alt=""></div>
                                    <div class="banner-text">
                                        <p class="text-lg font-semibold text-justify">Después de muchísimas pruebas y degustaciones descubrieron las tres cualidades
                                            que debía tener la hamburguesa: fina carne de novillo (ganado vacuno de hasta 3
                                            años), sazón agradable al exigente paladar peruano y que sea cocida al carbón
                                        </p>
                                        <p class="text-lg font-semibold text-justify">Cuando el producto fue aprobado, descubrieron las posibilidades de combinaciones
                                            que se podían lograr. Así nacieron las primeras hamburguesas especiales, hoy “de
                                            colección” como “La Francesa” elaborada con champiñones y queso, “la hawaiana”
                                            con piña, jamón y queso...y así múltiples combinaciones que han sido ofrecidas
                                            durante estos 20 años al público de Bembos para todos los gustos.
                                        </p>
                                        <p class="text-lg font-semibold text-justify">BEMBOS termina de consolidarse alcanzando el liderazgo en el mercado de
                                            hamburguesas frente a las cadenas internacionales, con aproximadamente el 50% de
                                            participación del mercado.
                                        </p>
                                    </div>
                                </section>
                            </div>
                            <div class="content-header-div">
                                <h2 type="button" ref="title4Ref" @click="openCollaps4" class="cursor-pointer font-bold">EN LA
                                    ACTUALIDAD</h2>
                                <section :class="{ 'hidden': collaps4 == false }">
                                    <div class="banner"><img src="../assets/banner.webp" alt=""></div>
                                    <div class="banner-text">
                                        <p class="text-lg font-semibold text-justify">BEMBOS cuenta con más de 55 locales en el Perú distribuidos en los principales
                                            distritos de Lima, con presencia en los más importantes centros comerciales de
                                            esta ciudad: Jockey Plaza, Plaza San Miguel, Caminos del Inca, Mall Aventura
                                            Plaza, Megaplaza y en Larcomar, así como en los centros de comercio masivo como
                                            son el Jirón de la Unión en el centro de Lima y la avenida Larco en Miraflores
                                            donde contamos con 2 locales, 10 tiendas en provincia ubicadas en las ciudades
                                            de Trujillo, Chiclayo, Piura, Arequipa y Cuzco, así como de 14 módulos dedicados
                                            a la venta exclusiva de postres y helados. Por otro lado contamos con los
                                            modernos Bembos Café, ubicados en 10 tiendas incluyendo la tienda de Cuzco.
                                            Bembos también está empezando a abrirse camino en el mercado internacional,
                                            desarrollando diversos proyectos que tienen como finalidad la consolidación en
                                            el mercado internacional.
                                        </p>
                                        <p class="text-lg font-semibold text-justify">Los locales de BEMBOS se caracterizan por su llamativa arquitectura de colores
                                            rojo, azul y amarillo además de una moderna decoración. Cuentan con áreas de
                                            juegos para niños, servicios de Delivery; algunos locales también tienen
                                            Drive-Thru para atención directa al auto, y todos cuentan con la más moderna
                                            tecnología con el objeto de proporcionar al cliente un servicio rápido y
                                            eficiente, logrado a través de un programa de capacitación permanente y tomando
                                            en cuenta los más altos estándares internacionales en cuanto a control de
                                            calidad de todos los productos que ofrece.
                                        </p>
                                    </div>
                                </section>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');

.container-max {
    max-width: 1134px;
    width: 100%;
    margin: auto;
}

.pagina {
    box-shadow: 0.2px 1px 5px #d9d9d9;
    background-color: white;
    /* box-shadow: 0.2px 0.4px 1px 0.1px; */
    display: block !important;
    font-family: 'PT Sans Narrow', sans-serif;
    border-radius: 15px;
    margin: 20px 20px 50px;
    padding-bottom: 20px;

}

.pagina-title {
    background-color: #21388b;
    border-radius: 9px 9px 0 0;
    padding: 8px 15px;
    text-align: center;

}

.pagina-title h1 {
    font-family: 'PT Sans Narrow', sans-serif;

    border-radius: 9px 9px 0 0;
    font-size: 30px;
    color: #ffb500;
    text-transform: uppercase;
    font-weight: 300;
}


.pagina .container-content {
    max-width: 814px;
    margin: 40px auto auto;
}


.content-header a {
    text-decoration: none;


}

.content-header h2 {
    display: block;
    margin-bottom: 0.83em;
    margin-top: 0.83em;
    font-family: 'PT Sans Narrow', sans-serif;

    font-size: 24px;
    color: #21388b;
    border-bottom: 1px solid #707070;

}

.banner-text {
    margin: 0 0 10px;
    color: #030819;

}

.banner img {
    max-width: 100%;
    height: auto;

}

.banner-text p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px
}

</style>