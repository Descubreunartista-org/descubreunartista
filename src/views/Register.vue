<template>
  <div class="register container">
    <div class="content-6 centered">
      <div class="progress">{{step}}</div>
      <div v-show="step === 1">
        <form class="form-step" action>
          <fielset>
            <legend class="form-legend">Datos personales</legend>
            <label class="input-label" for="email">Email</label>
            <input id="email" class="input-text" placeholder="tuemail@email.com" type="email" />
            <label class="input-label" for="pass">Contraseña</label>
            <input id="pass" class="input-text" placeholder="contraseña" type="password" />
            <p class="input-info">Tu contraseña tiene que cumplir un montón de cosas, suerte.</p>
            <label class="input-label" for="name">Nombre artístico</label>
            <input id="name" class="input-text" placeholder="NOMBRE ARTÍSTICO" type="text" />
            <label class="input-label" for="bio">Biografia</label>
            <textarea placeholder="ESCRIBE UNA PEQUEÑA BIOGRAFÍA DE TI" class="text-area" name="bio" id="bio" cols="" rows=""></textarea>
            <label class="input-label image" for="image">Imagen</label>
            <image-input id="image"  name="image"/>
          
          </fielset>
        </form>
        <div class="container-btn">
          <button class="btn-primary" @click="next()">Siguiente</button>
        </div>
      </div>
          <div v-show="step === 2">
      <form class="form-step">
        <fielset>
          <legend class="form-legend">Redes sociales</legend>
          <label class="input-label" for="">Red social</label>
          <v-select class="select-combo" placeholder="SELECCIONA UNA RED SOCIAL" :options="['twitter', 'facebook', 'instagram' ,'patreon']"></v-select>
          <label class="input-label" for="url">URL</label>
          <input id="url" class="input-text" placeholder="ESCRIBE AQUÍ URL" type="text" />  
          <hr class="form-separator">
          <div class="btn-add-container">
            <button class="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g fill="none" fill-rule="evenodd">
                    <circle cx="16" cy="16" r="16" fill="#161616"/>
                    <path fill="#FFF" d="M15.5 8H16.5V24H15.5z"/>
                    <path fill="#FFF" d="M15.5 8H16.5V24H15.5z" transform="rotate(90 16 16)"/>
                </g>
              </svg>
            </button>
            <span>AÑADIR OTRA RED SOCIAL</span>
          </div>
        </fielset>
      </form>
      <div class="container-btn">
       
        <button class="btn-primary" @click="prev()">Anterior</button>
        <button class="btn-primary" @click="next()">Siguiente</button>
      </div>
      
    </div>
    <div v-show="step === 3">
      <form class="form-step">
        <fielset>
          <legend class="form-legend">Contenido</legend>
          <label class="input-label" for="url-content">URL</label>
          <input id="url-content" class="input-text" placeholder="ESCRIBE AQUÍ URL" type="text" />  
          <hr class="form-separator">
          <div class="btn-add-container">
            <button class="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g fill="none" fill-rule="evenodd">
                    <circle cx="16" cy="16" r="16" fill="#161616"/>
                    <path fill="#FFF" d="M15.5 8H16.5V24H15.5z"/>
                    <path fill="#FFF" d="M15.5 8H16.5V24H15.5z" transform="rotate(90 16 16)"/>
                </g>
              </svg>
            </button>
            <span>AÑADIR MÁS CONTENIDOS</span>
          </div>
        </fielset>
      </form>
      <div class="container-btn">
        <button class="btn-primary" @click="prev()">Anterior</button>
        <button class="btn-primary" @click="send">Enviar</button>
      </div>
    </div>
    </div>


  </div>
</template>
<script>
import DaInputFile from '../components/Forms/InputFile/InputFile'
export default {
  name: "register",
  data: () => ({
    step: 1
  }),
  components:{
    'image-input': DaInputFile
  },
  methods: {
    next() {
      if (this.step < 3) {
        this.step = this.step + 1;
      }
    },
    prev() {
      if (this.step > 1) {
        this.step = this.step - 1;
      }
    },
    send(){

    },
    setArtist() {
      const db = this.$firebase.firestore();

      db.collection("artist")
        .doc(this.artisticName)
        .set({
          artisticName: this.artisticName,
          contact: this.email,
          shortDescription: this.shortDescription,
          urlImage: this.urlImage,
          youtubeUrl: this.youtubeUrl,
          fb: this.facebook
        })
        .then(function() {})
        .catch(function(error) {});
    }
  }
};
</script>
<style lang="scss" scoped>
.register{
    color: #161616;
    padding-bottom: 160px;
    .form-step {
      padding-bottom: 108px;
    }

    .input-text {
      margin-bottom: 32px;
    }

    .input-info {
      margin-top: -24px;
      margin-bottom: 32px;
    }
    .input-label.image{
      margin-top: 32px;
    }
    .container-btn {
      display: flex;
      width: calc((100%/6)*4);
      margin: 0 auto;
      .btn-primary {
        flex: 1 1 auto;
      }
    }

    .select-combo {
      margin-bottom: 32px;
    }
    .form-separator {
      border: 0;
      border-bottom: solid 1px #eeeeee;
    }
}

</style>