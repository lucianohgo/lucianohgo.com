import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import slug from 'remark-slug';
import headings from 'remark-autolink-headings';
import syntaxHighlight from 'remark-syntax-highlight';
import { highlight, languages } from 'prismjs';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

function getAuthorsData(authors) {
  const authorsFile = path.join(process.cwd(), '.all-contributorsrc');
  const authorsData = JSON.parse(fs.readFileSync(authorsFile)).contributors;

  return authors.map((slug) => authorsData.find(({ login }) => login === slug));
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(syntaxHighlight, {
      // Pass a highlight function to highlight the code
      highlight: (code, lang) => {
        const grammar = languages[lang];

        if (grammar) {
          return highlight(code, grammar);
        }

        console.warn(`Could not find language ${lang} to syntax highlight`);
        return null;
      },
    })
    .use(slug)
    .use(headings, {
      content: {
        type: 'element',
        tagName: 'svg',
        properties: {
          viewBox: '0 0 16 16',
          height: '20',
          width: '20',
          focusable: 'false',
          className: ['anchor'],
        },
        children: [
          {
            type: 'element',
            tagName: 'path',
            properties: {
              'fill-rule': 'evenodd',
              d:
                'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
            },
          },
        ],
      },
    })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  let authors = [];
  if (matterResult.data.authors) {
    authors = getAuthorsData(matterResult.data.authors);
  }

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
    authors,
  };
}
