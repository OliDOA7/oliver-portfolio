'use client';

import { chatbotFlow, type ChatbotFlowInput } from '@/ai/flows/chatbot-flow';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Bot, Loader2, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Message = {
  role: 'user' | 'bot';
  text: string;
  suggestions?: string[];
};

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi there! I’m here to help you learn more about Oliver Valenzuela and his work. Want to know about his background, portfolio, tools, or How2 Studio? Just ask!",
      suggestions: [
        "What's Oliver's background?",
        'See a sample project',
        "What's How2 Studio?",
      ],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (query: string) => {
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    const userMessage: Message = { role: 'user', text: query };
    // Add user message to state immediately for responsiveness
    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);

    // Prepare history for the flow, excluding the message just added
    const history: ChatbotFlowInput['history'] = currentMessages
      .slice(0, -1)
      .map(msg => ({
        role: msg.role === 'bot' ? 'model' : 'user',
        content: msg.text,
      }));

    try {
      const result = await chatbotFlow({ query, history });
      const botMessage: Message = {
        role: 'bot',
        text: result.response,
        suggestions: result.suggestions,
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        role: 'bot',
        text: "Sorry, I'm having a little trouble right now. Please try again later.",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const lastSuggestions = messages[messages.length - 1]?.suggestions || [];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-primary p-4 shadow-lg transition-transform hover:scale-110"
          aria-label="Open Chatbot"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="mr-4 mb-2 h-[70vh] w-[90vw] max-w-md rounded-2xl p-0 shadow-2xl"
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between border-b p-4">
            <h3 className="font-headline text-lg font-semibold">
              Ask About Oliver & How2 Studio
            </h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close chat</span>
            </Button>
          </header>

          <ScrollArea className="flex-1" ref={scrollAreaRef as any}>
            <div className="space-y-6 p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn('flex items-start gap-3', {
                    'justify-end': message.role === 'user',
                  })}
                >
                  {message.role === 'bot' && (
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Bot className="h-5 w-5" />
                    </div>
                  )}
                  <div
                    className={cn(
                      'max-w-[85%] rounded-2xl px-4 py-3 text-sm',
                      message.role === 'bot'
                        ? 'bg-secondary rounded-tl-none'
                        : 'bg-primary text-primary-foreground rounded-br-none'
                    )}
                  >
                    {message.text.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-secondary px-4 py-3">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {lastSuggestions.length > 0 && (
            <footer className="border-t p-4">
              <div className="flex flex-wrap gap-2">
                {lastSuggestions.map((suggestion, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSend(suggestion)}
                    disabled={isLoading}
                    className="rounded-full"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </footer>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
