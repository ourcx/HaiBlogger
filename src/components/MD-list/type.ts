export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  htmlContent?: string;
}

export interface MdListType {
  post: BlogPost;
    loading: boolean;
}