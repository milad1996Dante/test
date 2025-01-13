'use client';

import { Button } from './ui/button';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Image as ImageIcon,
  Link as LinkIcon,
  Quote,
  Code,
} from 'lucide-react';
import { useState } from 'react';

export function RichTextEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (content: string) => void;
}) {
  const [text, setText] = useState(content);

  const handleCommand = (command: string) => {
    let updatedText = text;
    const selection = window.getSelection();
    const selectedText = selection?.toString() || '';

    switch (command) {
      case 'bold':
        updatedText = `**${selectedText}**`;
        break;
      case 'italic':
        updatedText = `*${selectedText}*`;
        break;
      case 'list':
        updatedText = `\n- ${selectedText}`;
        break;
      case 'ordered-list':
        updatedText = `\n1. ${selectedText}`;
        break;
      case 'image':
        const imageUrl = window.prompt('آدرس تصویر را وارد کنید:');
        if (imageUrl) {
          updatedText = `![تصویر](${imageUrl})`;
        }
        break;
      case 'link':
        const url = window.prompt('آدرس لینک را وارد کنید:');
        if (url) {
          updatedText = `[${selectedText}](${url})`;
        }
        break;
      case 'quote':
        updatedText = `> ${selectedText}`;
        break;
      case 'code':
        updatedText = `\`\`\`\n${selectedText}\n\`\`\``;
        break;
    }

    setText(updatedText);
    onChange(updatedText);
  };

  return (
    <div className="border rounded-lg">
      <div className="border-b p-2 flex flex-wrap gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('bold')}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('italic')}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('list')}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('ordered-list')}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('image')}
        >
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('link')}
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('quote')}
        >
          <Quote className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('code')}
        >
          <Code className="h-4 w-4" />
        </Button>
      </div>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          onChange(e.target.value);
        }}
        className="w-full p-4 min-h-[300px] outline-none resize-y bg-white"
        placeholder="محتوای خود را وارد کنید..."
      />
    </div>
  );
}