<script lang="ts" setup>
useHead({
  title: 'Detail Blog',
})

const params = useRoute().params;

const usePost = usePostStore()

const post = computed(() => usePost.post)

onMounted(async () => {
  await usePost.getPost(params?.slug as string)
})
</script>

<template>
  <div class="container">
    <div v-if="post">
      <h1 class="title">
        {{ post.title.rendered }}
      </h1>
      <div class="blog__content">
        <div v-if="post.content" v-html="post.content.rendered"></div>
      </div>
    </div>

    <span class="public" v-if="post"> Công Khai:
      <span class="date">{{ post?.date }}</span></span>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: block;
  padding: 0 300px;

  >.title {
    margin-bottom: 20px;
  }

  >.public {
    display: flex;
    justify-content: end;
    margin-top: 30px;
    font-weight: 600;

    >.date {
      margin-left: 5px;
      font-style: italic;
    }
  }
}

@include mediaquery-up(lg) {
  .container {
    padding: 10px 0 10px;
  }
}
</style>
