type TPost = {
  id: number;
  title: string;
  short_content: string;
  content: string;
}

export interface IState {
  post: TPost | null;
  input: TPost;
  loading: {
    post: boolean;
    submitting: boolean;
  }
}