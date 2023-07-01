<script setup >
import { ref } from 'vue';

const collapse = ref(false)
const collapse2 = ref(false)

const toggleCollapse1 = () =>{
    collapse.value = !collapse.value
}

const toggleCollapse2 = () =>{
    collapse2.value = !collapse2.value;
}

</script>

<template>
    <footer>
        <!--Footer aqui-->
        <div class="footer-home-container">
            <div class="footer-max-container">
                <div class="social-icons">
                    <div class="social-icons-img">
                        <a href="https://web.facebook.com/bembos/?_rdc=1&_rdr"><img class="social-img"
                                src="../assets/face.jpeg" alt=""></a>
                        <a href="https://twitter.com/BembosOficial"><img class="social-img" src="../assets/yutube.jpeg"
                                alt=""></a>
                        <a href="https://www.youtube.com/user/BembosCanal"><img class="social-img"
                                src="../assets/icon-twiter.jpeg" alt=""></a>
                        <a href="https://www.instagram.com/bembosoficial/?hl=es-la"><img class="social-img"
                                src="../assets/icon-instagram.jpeg" alt=""></a>
                    </div>
                </div>
                <div class="footer-content">
                    <div class="footer-content-info">
                        <div class="footer-politicas">
                            <div class="fpoliticas">
                                <span  @click="toggleCollapse1" type="button">MAPA DEL ESTILO</span>
                                <ul :class="{'openCollaps':collapse === true }" class="hidden lg:block">
                                    <li class=""><a href="/locales">Locales</a></li>
                                    <li class=""><a href="/nosotros">Nosotros</a></li>
                                    <li class=""><a href="/atencion-cliente">Atención al cliente</a></li>
                                    <li class="mapa-sitio"><a href="/mapa-sitio">Mapa de sitio</a></li>
                                </ul>
                            </div>
                            <div class="fpoliticas">
                                <span  @click="toggleCollapse2" type="button">TÉRMINOS Y CONDICIONES</span>
                                <ul :class="{ 'openCollaps2':collapse2 === true }" class="hidden lg:block">
                                    <li class=""><a href="/politica-datos-personales">Politica de Datos Personales</a></li>
                                    <li class=""><a href="/términos-condiciones-promociones">Términos y condiciones de
                                            Promociones</a></li>
                                    <li class=""><a href="/arco">Derecho ARCO</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="icons-bembos">
                            <img class="img-bembo" src="../assets/icon-bembos.jpeg" alt="">
                        </div>
                    </div>

                    <div class="footer-content-info">
                        <p class="title-methods">FORMAS DE PAGO</p>
                        <ul class="list-methods">
                            <li><img class="pago-img" src="../assets/visa.jpg" alt=""></li>
                            <li><img class="pago-img" src="../assets/mastercard.png" alt=""></li>
                            <li><img class="pago-img" src="../assets/american-express.jpg" alt=""></li>
                        </ul>
                        
                        <div class="comprobante">
                            <a href=""><img class="icon-document" src="../assets/icon-document.png" alt="">COMPROBANTES</a>
                        </div>


                    </div>
                    <div class="footer-content-info">
                        <p class="title-send">¿Quieres recibir promociones y noticias?</p>
                        <div class="send-mail">
                            <input type="text" placeholder="Tu Correo">
                            <button>ENVIAR</button>
                        </div>
                        <div class="terminos-conditions">
                            <input type="checkbox" name="">
                            <label for="">He leído y revisado los
                                <a href="">términos y condiciones</a>
                            </label>
                        </div>
                        <div class="libro-reclamaciones">
                            <a href=""><img class="logo-libro" src="../assets/libro-reclamaciones.webp" alt=""></a>
                        </div>
                    </div>

                </div>
                <div class="main-footer">
                    <p>© 2019 Todos los derechos reservados</p>
                </div>
            </div>

        </div>
    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');

* {
    padding: 0;
    margin: 0;
}

footer {
    background: #173083;
    width: 100%;
    padding-bottom: 0;
    color: white;
    font-family: 'PT Sans Narrow', sans-serif;


}
.openCollaps{
    display: block !important;
}
.openCollaps2{
    display: block !important;
}
.footer-max-container {
    max-width: 1134px;
    width: 100%;
    margin: auto;
}

.social-icons {
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
    padding-top: 30px;

}

.social-icons-img {

    display: flex;
    gap: 20px;
    display: flex;
    justify-content: center;
}

.social-icons a {
    margin-left: 0 13px;

}

.social-icons img {
    width: 40px;
    border-radius: 100px;

}

.footer-content {
    display: flex;
    justify-content: space-between;

}

.footer-content-info {
    width: 100%;
}

.footer-politicas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

}

.footer-politicas ul {
    width: 100%;
    list-style: none;

}

.footer-politicas ul li {
    text-decoration: none;
    font-size: 18px;

}

.footer-politicas li a {
    color: #fff;
    text-decoration: none;

}

.footer-politicas span {
    color: #fff;
    text-align: center;
    padding-bottom: 10px;
    font-size: 24px;
    display: none;


}

.icons-bembos {
    text-align: center;
    padding-top: 50px;

}

.icons-bembos img {
    width: 200px;

}

.title-methods {
    letter-spacing: -1px;
    text-align: center;
    padding-bottom: 20px;

}

.list-methods {
    padding: 0 55px;
    display: flex;
    list-style: none;

}

.list-methods img {
    border-radius: 4px;
    width: 45px;

}

.list-methods li {
    width: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    text-align: center;

}

.safety {
    padding: 20px 15px 0;
    text-align: center;

}

.safety img {
    width: 220px;

}

.comprobante {
    padding: 30px 45px;
    text-align: center;
}

.comprobante a {
    background: #fbb905;
    border-radius: 5px;
    text-decoration: none;
    color: #173083;
    width: 223px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

}

.comprobante img {
    width: 15%;

}

.send-mail {
    display: flex;
    align-items: center;
    margin-top: 10px;

}


.send-mail input {
    border-radius: 5px 0 0 5px;
    width: calc(100% - 112px);
    padding: 0 9px;
    font-size: 16px;

}

.send-mail input,
button {
    border: none;
    height: 38px;
    font-family: 'PT Sans Narrow', sans-serif;

}

.send-mail button {
    width: 112px;
    background: #ffb500;
    border-radius: 0 5px 5px 0;
    font-size: 12px;
    cursor: pointer;
}

.terminos-conditions {
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-top: 10px;

}

.terminos-conditions label a {
    margin-left: 10px;
    color: #fff;

}

.libro-reclamaciones {
    display: flex;
    justify-content: center;
    min-height: 60px;
    font-size: 18px;
    margin-top: 25px;

}

.libro-reclamaciones img {
    border-radius: 5px;
}

.main-footer {
    text-align: center;
    color: #a6adcb;
    font-size: 13px;
    border-top: 1px solid;
    padding: 8px;
    min-height: 32px;

}

.footer-politicas span {
    border: 1px solid #6f6c6c;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 24px;
    display: none;
    cursor: pointer;

}

.fpoliticas {
    overflow: hidden;
}





@media(max-width: 1024px) {

   

    .footer-max-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;

    }

    .footer-content {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;

    }

    .footer-politicas {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;

    }

    .footer-politicas ul {
        width: 100%;
        text-align: center;
    }

    .footer-politicas ul li {
        padding: 10px;

    }

    .libro-reclamaciones {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 15px
    }

    .icons-bembos,
    .title-send,
    .send-mail,
    .terminos-conditions {
        display: none;

    }

    .list-methods img {
        width: 60px;

    }

    .logo-libro {
        align-items: center;
    }

    .footer-politicas span {
        display: block;
        border-bottom: 1px solid #6f6c6c;
    } 
}

</style>