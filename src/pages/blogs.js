import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '50px 20px',
    backgroundColor: '#f7f7f7',
  },
  blogList: {
    listStyle: 'none',
    padding: 0,
    '& li': {
      marginBottom: '20px',
      '& a': {
        textDecoration: 'none',
        color: '#333',
        fontSize: '20px',
        '&:hover': {
          color: '#0070f3',
        },
      },
    },
  },
});

export default function Blog({ posts }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>My Blog</h1>
      <ul className={classes.blogList}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'contents', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
