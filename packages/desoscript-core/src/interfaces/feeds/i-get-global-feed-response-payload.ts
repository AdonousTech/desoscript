import { IPost } from '../posts/i-post';
export interface IGlobalFeedResponsePayload {
    PostsFound: IPost[]
    Posts?: IPost[]
}