import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [showBonus, setShowBonus] = useState(true);
  const telegramChannel = 'https://t.me/bulatovlive';

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowBonus(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubscribe = () => {
    window.open(telegramChannel, '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-8 animate-fade-in">
        {showBonus && (
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-pulse">
            <Icon name="Clock" size={16} />
            Бонус истекает через {timeLeft} секунд
          </div>
        )}

        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <Icon name="Send" size={40} className="text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Эксклюзивный контент уже ждёт тебя
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto">
            Присоединяйся к 10,000+ подписчиков, которые уже получают инсайты каждый день
          </p>
        </div>

        <div className="space-y-6 pt-4">
          <Button 
            onClick={handleSubscribe}
            size="lg"
            className="w-full max-w-md h-16 text-xl font-semibold shadow-2xl hover:scale-105 transition-transform duration-200"
          >
            <Icon name="TrendingUp" size={24} className="mr-2" />
            Подписаться на канал
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur">
              <Icon name="Zap" size={32} className="text-primary" />
              <h3 className="font-semibold text-foreground">Мгновенный доступ</h3>
              <p className="text-sm text-muted-foreground">Получи контент сразу после подписки</p>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur">
              <Icon name="Gift" size={32} className="text-primary" />
              <h3 className="font-semibold text-foreground">Эксклюзивы</h3>
              <p className="text-sm text-muted-foreground">Материалы только для подписчиков</p>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur">
              <Icon name="Users" size={32} className="text-primary" />
              <h3 className="font-semibold text-foreground">Комьюнити</h3>
              <p className="text-sm text-muted-foreground">Общение с единомышленниками</p>
            </div>
          </div>
        </div>

        {!showBonus && (
          <p className="text-sm text-muted-foreground animate-fade-in">
            Бонусное время истекло, но ты всё ещё можешь подписаться
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;
