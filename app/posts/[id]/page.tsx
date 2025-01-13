import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for static generation
const mockPosts = [
  {
    id: '1',
    title: 'معرفی فریمورک Next.js',
    content: [
      {
        type: 'text',
        content: 'Next.js یک فریمورک React است که امکان ساخت برنامه‌های وب را با قابلیت‌های پیشرفته فراهم می‌کند.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
        alt: 'Next.js Development',
        caption: 'توسعه با Next.js',
      },
      {
        type: 'text',
        content: 'این فریمورک با ارائه قابلیت‌های مختلف مانند SSR و SSG، تجربه توسعه بهتری را برای برنامه‌نویسان فراهم می‌کند.',
      },
    ],
    author: {
      id: '1',
      name: 'علی محمدی',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    },
    date: '۱۴۰۳/۰۱/۰۱',
    tags: ['برنامه‌نویسی', 'وب', 'React'],
    comments: [
      {
        id: 1,
        author: {
          id: '2',
          name: 'مریم احمدی',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        },
        content: 'مقاله بسیار مفیدی بود. ممنون از اشتراک‌گذاری',
        date: '۱۴۰۳/۰۱/۰۲',
        likes: 5,
        replies: [
          {
            id: 2,
            author: {
              id: '1',
              name: 'علی محمدی',
              avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
            },
            content: 'ممنون از نظر شما',
            date: '۱۴۰۳/۰۱/۰۲',
            likes: 2,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'چگونه React را یاد بگیریم؟',
    content: [
      {
        type: 'text',
        content: 'React یکی از محبوب‌ترین کتابخانه‌های جاوااسکریپت برای ساخت رابط کاربری است.',
      },
      {
        type: 'text',
        content: 'در این مقاله، مسیر یادگیری React را قدم به قدم بررسی می‌کنیم.',
      },
    ],
    author: {
      id: '2',
      name: 'مریم احمدی',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    date: '۱۴۰۳/۰۱/۰۲',
    tags: ['React', 'آموزش'],
    comments: [],
  },
];

export function generateStaticParams() {
  return mockPosts.map((post) => ({
    id: post.id,
  }));
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = mockPosts.find((p) => p.id === params.id) || mockPosts[0];

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 mb-4">
            <Link href={`/profile/${post.author.id}`} className="flex items-center gap-2 hover:underline">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{post.author.name}</span>
            </Link>
            <span className="text-sm text-muted-foreground">
              {post.date}
            </span>
          </div>
          <div className="flex gap-2 mb-6">
            {post.tags.map((tag) => (
              <Button key={tag} variant="secondary" size="sm">
                {tag}
              </Button>
            ))}
          </div>
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, index) => (
              block.type === 'text' ? (
                <p key={index} className="mb-4">
                  {block.content}
                </p>
              ) : (
                <figure key={index} className="my-8">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                  {block.caption && (
                    <figcaption className="text-center text-sm text-muted-foreground mt-2">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              )
            ))}
          </div>
        </Card>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">نظرات</h2>
          <Card className="p-6 mb-6">
            <Textarea placeholder="نظر خود را بنویسید..." className="mb-4" />
            <Button>
              <MessageCircle className="ml-2 h-4 w-4" />
              ارسال نظر
            </Button>
          </Card>

          {post.comments.map((comment) => (
            <div key={comment.id} className="space-y-4">
              <Card className="p-6">
                <div className="flex justify-between items-start">
                  <Link href={`/profile/${comment.author.id}`} className="flex items-center gap-2 hover:underline">
                    <Image
                      src={comment.author.avatar}
                      alt={comment.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{comment.author.name}</div>
                      <div className="text-sm text-muted-foreground">{comment.date}</div>
                    </div>
                  </Link>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="ml-2 h-4 w-4" />
                    {comment.likes}
                  </Button>
                </div>
                <p className="mt-2">{comment.content}</p>
                <div className="mt-4">
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="ml-2 h-4 w-4" />
                    پاسخ
                  </Button>
                </div>
              </Card>

              {comment.replies?.map((reply) => (
                <Card key={reply.id} className="p-6 mr-8">
                  <div className="flex justify-between items-start">
                    <Link href={`/profile/${reply.author.id}`} className="flex items-center gap-2 hover:underline">
                      <Image
                        src={reply.author.avatar}
                        alt={reply.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{reply.author.name}</div>
                        <div className="text-sm text-muted-foreground">{reply.date}</div>
                      </div>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="ml-2 h-4 w-4" />
                      {reply.likes}
                    </Button>
                  </div>
                  <p className="mt-2">{reply.content}</p>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}