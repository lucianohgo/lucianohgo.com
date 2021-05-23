import path from 'path';
import { getFileData, getIds, getSortedData } from './content';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getSortedPostsData() {
  return getSortedData(postsDirectory);
}

export function getAllPostIds() {
  return getIds(postsDirectory);
}

export async function getPostData(id) {
  return getFileData(postsDirectory, id);
}
