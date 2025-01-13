import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ChevronDown, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const mockPosts = [
  {
    id: 1,
    title: 'معرفی فریمورک Next.js',
    type: 'article',
    author: {
      name: 'علی محمدی',
      id: '1',
      avatar: 'https://zamani.api.ahromtech.ir/storage/images/j8Z8FtlmocoT2U6KIJs60Bm7T2N1oe16dWEnkWCt.jpg',
    },
    date: '۱۴۰۳/۰۱/۰۱',
    tags: ['برنامه‌نویسی', 'وب', 'React'],
    category: 'تکنولوژی',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  },
  {
    id: 2,
    title: 'اصول سرمایه‌گذاری در بازار مسکن',
    type: 'article',
    author: {
      name: 'مریم احمدی',
      id: '2',
      avatar: 'https://zamani.api.ahromtech.ir/storage/images/j8Z8FtlmocoT2U6KIJs60Bm7T2N1oe16dWEnkWCt.jpg',
    },
    date: '۱۴۰۳/۰۱/۰۲',
    tags: ['مسکن', 'سرمایه‌گذاری', 'املاک'],
    category: 'ساختمان',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
  },
  {
    id: 3,
    title: 'راهنمای جامع تجارت الکترونیک',
    type: 'article',
    author: {
      name: 'رضا کریمی',
      id: '3',
      avatar: 'https://zamani.api.ahromtech.ir/storage/images/j8Z8FtlmocoT2U6KIJs60Bm7T2N1oe16dWEnkWCt.jpg',
    },
    date: '۱۴۰۳/۰۱/۰۳',
    tags: ['تجارت', 'کسب و کار', 'دیجیتال مارکتینگ'],
    category: 'تجارت',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
  },
  {
    id: 4,
    title: 'بهترین زبان برنامه‌نویسی برای شروع؟',
    type: 'poll',
    pollType: 'single',
    author: {
      name: 'سارا رضایی',
      id: '4',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    date: '۱۴۰۳/۰۱/۰۴',
    options: [
      { text: 'Python', votes: 150 },
      { text: 'JavaScript', votes: 120 },
      { text: 'Java', votes: 80 },
      { text: 'C++', votes: 50 },
    ],
    tags: ['برنامه‌نویسی', 'آموزش'],
    category: 'تکنولوژی',
  },
  {
    id: 5,
    title: 'کدام ویژگی‌های خانه برای شما مهم است؟',
    type: 'poll',
    pollType: 'multiple',
    author: {
      name: 'حسین محمودی',
      id: '5',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    date: '۱۴۰۳/۰۱/۰۵',
    options: [
      { text: 'متراژ بالا', votes: 200 },
      { text: 'نزدیکی به مترو', votes: 180 },
      { text: 'پارکینگ', votes: 150 },
      { text: 'انباری', votes: 100 },
    ],
    tags: ['مسکن', 'نظرسنجی'],
    category: 'ساختمان',
  },
  {
    id: 6,
    title: 'آزمون دانش دیجیتال مارکتینگ',
    type: 'poll',
    pollType: 'quiz',
    author: {
      name: 'زهرا کمالی',
      id: '6',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
    },
    date: '۱۴۰۳/۰۱/۰۶',
    options: [
      { text: 'SEO مخفف چیست؟', correct: 'Search Engine Optimization' },
      { text: 'CPC به چه معناست؟', correct: 'Cost Per Click' },
      { text: 'CTR چیست؟', correct: 'Click Through Rate' },
    ],
    tags: ['دیجیتال مارکتینگ', 'آموزش'],
    category: 'تجارت',
  },
];

const categories = ['همه', 'تکنولوژی', 'ساختمان', 'تجارت'];
const tags = ['برنامه‌نویسی', 'وب', 'React', 'مسکن', 'سرمایه‌گذاری', 'املاک', 'تجارت', 'کسب و کار', 'دیجیتال مارکتینگ'];
const sortOptions = [
  { label: 'جدیدترین', value: 'newest' },
  { label: 'محبوب‌ترین', value: 'popular' },
  { label: 'پربحث‌ترین', value: 'most-commented' },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-6">
          {/* Filters - Desktop */}
          <div className="hidden lg:block">
            <Card className="p-4">
              <h2 className="text-lg font-semibold mb-4">فیلترها</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">دسته‌بندی</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant="ghost"
                        className="w-full justify-start"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">برچسب‌ها</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Button key={tag} variant="secondary" size="sm">
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <Filter className="ml-2 h-4 w-4" />
                        فیلترها
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px]">
                      <div className="space-y-4 mt-8">
                        <div>
                          <h3 className="font-medium mb-2">دسته‌بندی</h3>
                          <div className="space-y-2">
                            {categories.map((category) => (
                              <Button
                                key={category}
                                variant="ghost"
                                className="w-full justify-start"
                              >
                                {category}
                              </Button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">برچسب‌ها</h3>
                          <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <Button key={tag} variant="secondary" size="sm">
                                {tag}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                  <TabsList>
                    <TabsTrigger value="all">همه</TabsTrigger>
                    <TabsTrigger value="articles">مقالات</TabsTrigger>
                    <TabsTrigger value="questions">پرسش و پاسخ</TabsTrigger>
                    <TabsTrigger value="polls">نظرسنجی‌ها</TabsTrigger>
                  </TabsList>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      مرتب‌سازی
                      <ChevronDown className="mr-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {sortOptions.map((option) => (
                      <DropdownMenuItem key={option.value}>
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <TabsContent value="all" className="space-y-4">
                {mockPosts.map((post) => (
                  <Card key={post.id} className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="w-full">
                        <div className="flex items-center gap-3 mb-2">
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
                        <Link href={`/posts/${post.id}`} className="text-xl font-semibold hover:underline">
                          {post.title}
                        </Link>
                        
                        {post.type === 'poll' && (
                          <div className="mt-4 space-y-2">
                            {post && post.options &&  post.options.map((option, index) => (
                              <div key={index} className="flex items-center gap-2">
                                {post.pollType === 'quiz' ? (
                                  <Button variant="outline" className="w-full text-right">
                                    {option.text}
                                  </Button>
                                ) : (
                                  <div className="w-full">
                                    <div className="flex justify-between mb-1">
                                      <span>{option.text}</span>
                                      <span className="text-muted-foreground">{option.votes} رأی</span>
                                    </div>
                                    <div className="w-full bg-secondary rounded-full h-2">
                                      <div
                                        className="bg-primary rounded-full h-2"
                                        style={{
                                          width: `${(option.votes / Math.max(...post.options.map(o => o.votes ?? 0))) * 100}%`,
                                        }}
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="mt-4 flex gap-2">
                          {post.tags.map((tag) => (
                            <Button key={tag} variant="secondary" size="sm">
                              {tag}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {post.type === 'article' ? 'مقاله' : post.type === 'poll' ? 'نظرسنجی' : 'پرسش'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}