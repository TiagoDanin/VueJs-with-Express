<template>
  <div>
    <v-card class="mx-auto" fill-height v-for="(post, i) of posts" :key="i">
      <v-card-title>
        <span class="title bold font-weight-light" v-text="post.title"></span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold" v-text="post.body">
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>bookmark</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>share</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  asyncData: async function({ $config: { baseUrl }, params }) {
    let res = await fetch(`${baseUrl}/api/blog`);
    res = await res.json();
    return res;
  },
};
</script>

<style>
.v-card {
  margin: 12px;
}
.v-card__actions {
  background-color: #9e9e9e47;
}
</style>
