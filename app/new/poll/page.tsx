'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

export default function NewPollPage() {
  const [options, setOptions] = useState(['', '']);

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="p-8">
          <h1 className="text-2xl font-bold mb-6">ایجاد نظرسنجی جدید</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">سوال نظرسنجی</label>
              <Input placeholder="سوال خود را وارد کنید..." />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium">گزینه‌ها</label>
              {options.map((option, index) => (
                <div key={index} className="flex gap-2">
                  <Input placeholder={`گزینه ${index + 1}`} />
                  {options.length > 2 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeOption(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addOption}>
                <Plus className="ml-2 h-4 w-4" />
                افزودن گزینه
              </Button>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">برچسب‌ها</label>
              <Input placeholder="برچسب‌ها را با کاما جدا کنید..." />
            </div>
            <Button type="submit">ایجاد نظرسنجی</Button>
          </form>
        </Card>
      </div>
    </main>
  );
}