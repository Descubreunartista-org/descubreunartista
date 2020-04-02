<template>
  <div class="new-artist">

      <cv-form class="form">
        <cv-text-input
          label="Nombre artistico"
          helper-text="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
          v-model="artisticName"
          placeholder="Escriba su nombre artisstico">
        </cv-text-input>
        <cv-text-input
          label="Correo de contacto"
          helper-text="Este correo es para que nosotros podamos contactar con usted en caso de cualquier problema"
          v-model="email"
          placeholder="Escriba su email">
        </cv-text-input>
        <cv-text-input
          label="Descripcion breve"
          v-model="shortDescription"
          placeholder="Escriba su descripcion">
        </cv-text-input>
        <cv-text-input
          label="Url youtube channel"
          v-model="youtubeUrl"
          placeholder="Escriba su url de su canal de youtube">
        </cv-text-input>
        <cv-text-input
          label="Url imagen de perfil"
          v-model="urlImage"
          placeholder="Escriba la url de su imagen">
        </cv-text-input>
        <cv-text-input
          label="Facebook"
          v-model="facebook"
          placeholder="Escriba su facebook">
        </cv-text-input>
        
      </cv-form>
      <cv-button @click="setArtist()">Submit</cv-button>

  </div>
</template>
<script>
export default {
  name: "newArtist",
  data: () => ({
    artisticName: '',
    email: '',
    shortDescription: '',
    urlImage: '',
    youtubeUrl: '',
    facebook: ''
  }),
  methods: {
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
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }
};
</script>
<style scoped>
.new-artist {
  margin-top: 1rem;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form{
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  justify-content: space-between;
}
.cv-text-input{
  width: 40%;
  margin: 1rem;
}
</style>