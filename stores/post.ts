import { apis } from '@/apis'

export interface Post {
  id: number
  date: string
  title: {
    rendered: string
  }
  slug: string
  excerpt: {
    rendered: string
  }
  link: string
  author: string
  _embedded: any
  content: {
    rendered: string
  }
}

export const usePostStore = defineStore('post', () => {
  const posts = ref<Post[] | null>(null)
  const post = ref<Post | null>(null)

  const getPosts = async (page: number, perPage: number) => {
    const res: Post[] | null = await apis
      .blog!.get(`posts?page=${page}&per_page=${perPage}&_embed=1`)
      .json<Post[]>()
      .catch(() => null)

    if (res) {
      posts.value = res
    }
  }

  const getPost = async (slug: string) => {
    const res: Post[] | null = await apis
      .blog!.get(`posts?slug=${slug}&_embed=1`)
      .json<Post[]>()
      .catch(() => null)

    if (res) {
      post.value = res[0]
    }
  }

  return {
    getPosts,
    getPost,
    posts,
    post,
  }
})
