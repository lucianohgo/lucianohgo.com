import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import syntaxHighlight from 'remark-syntax-highlight';
import { highlight, languages } from 'prismjs';
import slug from 'remark-slug';
import headings from 'remark-autolink-headings';

/**
 * Gets files header data of a directory of markdown content
 * and returns them in an array sorted by the date given on
 * the header
 *
 * @param directory a directory with only .md files
 * @return {{[p: string]: any, id: string}[]}
 */
export function getSortedData(directory) {
  // Get file names under /posts
  const contentFolders = fs.readdirSync(directory);
  const allContentData = contentFolders.map((contentId) => {
    const id = contentId;
    const translations = fs.readdirSync(path.join(directory, contentId));
    const dataByLanguage = {};
    let earliestDate;
    translations.forEach((translation) => {
      // Remove ".md" from file name to get the locale
      const locale = translation.replace(/\.md$/, '');
      // Read markdown file as string
      const fullPath = path.join(directory, contentId, translation);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      dataByLanguage[locale] = matterResult.data;
      earliestDate =
        !earliestDate || earliestDate > matterResult.data.date
          ? matterResult.data.date
          : earliestDate;
    });

    debugger;
    // Combine the data with the id
    return {
      id,
      date: earliestDate,
      ...dataByLanguage,
    };
  });

  // Sort posts by date
  return allContentData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Gets file by content folder name
 *
 * @return {{params: {id: string}}[]}
 */
export function getIds(directory) {
  const fileNames = fs.readdirSync(directory);

  return fileNames.map((id) => {
    return {
      params: {
        id,
      },
    };
  });
}

function getAuthorsData(authors) {
  const authorsFile = path.join(process.cwd(), '.all-contributorsrc');
  const authorsData = JSON.parse(fs.readFileSync(authorsFile)).contributors;

  return authors.map((slug) => authorsData.find(({ login }) => login === slug));
}

export async function getFileData(directory, id, { locale = 'en-US' } = {}) {
  const fullPath = path.join(directory, id, `${locale}.md`);
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
