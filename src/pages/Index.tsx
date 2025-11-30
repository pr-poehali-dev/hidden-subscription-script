import { useEffect, useState } from 'react';

const Index = () => {
  const [redirecting, setRedirecting] = useState(false);
  const telegramChannel = 'https://t.me/bulatovlive';

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirecting(true);
      setTimeout(() => {
        window.location.href = telegramChannel;
      }, 800);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 animate-fade-in px-4">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
            Добро пожаловать
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Переходим в Telegram
          </p>
        </div>
        
        {redirecting && (
          <div className="flex items-center justify-center gap-2 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
