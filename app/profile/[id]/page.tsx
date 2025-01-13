import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PenLine, MessageCircle, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const mockUsers = [
  {
    id: '1',
    name: 'علی محمدی',
    email: 'ali@example.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    joinDate: '۱۴۰۲/۰۱/۰۱',
    posts: [
      {
        id: 1,
        title: 'معرفی فریمورک Next.js',
        type: 'article',
        date: '۱۴۰۳/۰۱/۰۱',
      },
    ],
    questions: [
      {
        id: 1,
        title: 'نحوه استفاده از React Query',
        date: '۱۴۰۳/۰۱/۰۲',
      },
    ],
  },
  {
    id: '2',
    name: 'مریم احمدی',
    email: 'maryam@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    joinDate: '۱۴۰۲/۰۲/۰۱',
    posts: [],
    questions: [],
  },
];

export function generateStaticParams() {
  return mockUsers.map((user) => ({
    id: user.id,
  }));
}

export default function ProfilePage({ params }: { params: { id: string } }) {
  const user = mockUsers.find((u) => u.id === params.id) || mockUsers[0];

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={user.avatar}
                alt={user.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-sm mt-2">
                  تاریخ عضویت: {user.joinDate}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="posts">
          <TabsList className="mb-6">
            <TabsTrigger value="posts">
              <PenLine className="ml-2 h-4 w-4" />
              مقالات
            </TabsTrigger>
            <TabsTrigger value="questions">
              <MessageCircle className="ml-2 h-4 w-4" />
              پرسش‌ها
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts">
            {user.posts.map((post) => (
              <Card key={post.id} className="p-6 mb-4">
                <div className="flex justify-between items-center">
                  <Link href={`/posts/${post.id}`} className="text-xl hover:underline">
                    {post.title}
                  </Link>
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="questions">
            {user.questions.map((question) => (
              <Card key={question.id} className="p-6 mb-4">
                <div className="flex justify-between items-center">
                  <Link href={`/posts/${question.id}`} className="text-xl hover:underline">
                    {question.title}
                  </Link>
                  <div className="text-sm text-muted-foreground">{question.date}</div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}