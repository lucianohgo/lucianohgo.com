import path from 'path';
import { getFileData, getIds, getSortedData } from './content';

const postsDirectory = path.join(process.cwd(), 'content', 'book-summaries');

export function getSortedBookSummaries() {
  return getSortedData(postsDirectory);
}

export function getAllBookSummaryIds() {
  return getIds(postsDirectory);
}

export async function getBookSummaryData(id) {
  return getFileData(postsDirectory, id);
}
