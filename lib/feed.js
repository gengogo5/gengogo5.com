import RSS from "rss";
import fs from 'fs';
import path from 'path';

export function generateRssXml(entries) {

  const rss = new RSS({
    title: 'gengogo5.com',
    description: 'gengogo5の技術的メモや日記を公開しています',
    site_url: 'https://gengogo5.com',
    feed_url: 'https://gengogo5.com/rss.xml',
  });

  entries.forEach(entry => {
    rss.item({
      title: entry.title,
      description: entry.summary,
      date: entry.date,
      url: `https://gengogo5.com/posts/${entry.id}`,
    });
  });

  const rssDirectory = path.join(process.cwd(), 'public', 'rss.xml')
  fs.writeFileSync(rssDirectory, rss.xml());
}
