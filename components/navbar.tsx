'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PenLine, MessageCircle, BarChart2, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4 space-x-reverse">
          <Link href="/">
            <h1 className="text-2xl font-bold">انجمن</h1>
          </Link>
        </div>
        <div className="flex items-center space-x-4 space-x-reverse">
          <Link href="/new/article">
            <Button variant="ghost">
              <PenLine className="ml-2 h-4 w-4" />
              مقاله جدید
            </Button>
          </Link>
          <Link href="/new/question">
            <Button variant="ghost">
              <MessageCircle className="ml-2 h-4 w-4" />
              پرسش جدید
            </Button>
          </Link>
          <Link href="/new/poll">
            <Button variant="ghost">
              <BarChart2 className="ml-2 h-4 w-4" />
              نظرسنجی جدید
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost">
              <User className="ml-2 h-4 w-4" />
              پروفایل
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}