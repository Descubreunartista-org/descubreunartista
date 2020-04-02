<template>
  <md-card>
    <md-card-media-cover md-solid>
      <md-card-media md-ratio="1:1">
        <img src="https://via.placeholder.com/300.png/09f/fff" alt="Skyscraper" />
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <span class="md-title">{{name}}</span>
          <span class="md-subhead">{{descritpion}}</span>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon class="fa youtube">play_circle_filled</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>share</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>language</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script>
export default {
  name: "CardArtist",
  props: {
    name: String,
    descritpion: String,
    image: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
