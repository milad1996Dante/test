'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PenLine, MessageCircle, BarChart2 } from 'lucide-react';
import Link from 'next/link';

const mockUser = {
  name: 'علی محمدی',
  email: 'ali@example.com',
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
};

export default function ProfilePage() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="p-8 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold">{mockUser.name}</h1>
              <p className="text-muted-foreground">{mockUser.email}</p>
              <p className="text-sm mt-2">
                تاریخ عضویت: {mockUser.joinDate}
              </p>
            </div>
            <Button>ویرایش پروفایل</Button>
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
            <TabsTrigger value="polls">
              <BarChart2 className="ml-2 h-4 w-4" />
              نظرسنجی‌ها
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts">
            {mockUser.posts.map((post) => (
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
            {mockUser.questions.map((question) => (
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