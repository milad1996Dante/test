'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RichTextEditor } from '@/components/rich-text-editor';
import { useState } from 'react';

export default function NewQuestionPage() {
  const [content, setContent] = useState('');

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="p-8">
          <h1 className="text-2xl font-bold mb-6">ایجاد پرسش جدید</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">عنوان پرسش</label>
              <Input placeholder="پرسش خود را در یک جمله بیان کنید..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">توضیحات</label>
              <RichTextEditor content={content} onChange={setContent} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">برچسب‌ها</label>
              <Input placeholder="برچسب‌ها را با کاما جدا کنید..." />
            </div>
            <Button type="submit">ثبت پرسش</Button>
          </form>
        </Card>
      </div>
    </main>
  );
}