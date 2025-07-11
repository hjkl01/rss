export interface RSSCategory {
  id: string;
  name: string;
  color: string;
  count: number;
}

export interface RSSItem {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: Date;
  category: RSSCategory;
  source: string;
  author: string;
  feedName: string;
}

export interface RSSFeedConfig {
  name: string;
  url: string;
  category: string;
  description: string;
}

export interface RSSConfig {
  feeds: RSSFeedConfig[];
}</parameter>