<script lang="ts" setup>
useHead({
  title: 'Blogs',
})

const usePost = usePostStore()
const page = ref(1)
const perPage = ref(20)

onMounted(async () => {
  await usePost.getPosts(page.value, perPage.value);
})

const blogs = computed(() => usePost.posts)

const getThumnail = (blog: any) => {
  return blog._embedded['wp:featuredmedia'] ? blog._embedded['wp:featuredmedia'][0]?.source_url : 'https://about.me/cdn-cgi/image/q=80,dpr=1,f=auto,fit=cover,w=1200,h=630,gravity=auto/https://assets.about.me/background/users/c/h/a/chanlebankpage_1711221274_592.jpg'
}
</script>

<template>
  <div class="chanel-page">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-gamepad-variant-outline"></v-icon>
      Các Bài Viết Cập Nhật Trạng Thái Của Các Game
    </h3>
  </div>

  <section class="blogs">
    <div class="container py-10">
      <div class="grid sm:grid-cols-3 gap-10">
        <BlogsSection v-for="blog in blogs" :key="blog.id" :title="blog.title.rendered" :image="getThumnail(blog)"
          :excerpt="blog.excerpt.rendered" :slug="blog.slug">
        </BlogsSection>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.chanel-page {
  margin-top: 25px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 4px;

  >.title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    color: #fef142;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 0;
    background-image: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 20px;
    gap: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    >.icon {
      -webkit-text-fill-color: #fe5b09;
    }
  }

  >.subpage-wrapper {
    width: 100%;
    text-align: center;
    padding: 25px 0 20px 0;
  }

  >.subpage-wrapper .label {
    padding: 30px 20px;
    line-height: 30px;
  }

  >.subpage-wrapper .link .lnk__btn {
    border-radius: 8px;
    background: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
    box-shadow: 0 0 16px 0 rgb(254 155 33 / 30%);
    position: relative;
    color: #000;
    padding: 5px 15px;
    text-decoration: none;

  }

}
</style>
