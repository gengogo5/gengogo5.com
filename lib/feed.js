import RSS from "rss";
import fs from 'fs';
import path from 'path';

export function generateRssXml(entries) {

  const rss = new RSS({
    title: 'gengogo5.com',
    description: 'testrss',
    site_url: 'https://gengogo5.com',
    feed_url: 'https://gengogo5.com/rss.xml',
  });

  entries.forEach(entry => {
    rss.item({
      title: entry.title,
      date: entry.date,
      url: `https://gengogo5.com/posts/${entry.id}`,
    });
  });

  const rssDirectory = path.join(process.cwd(), 'public', 'rss.xml')
  fs.writeFileSync(rssDirectory, rss.xml());
}
