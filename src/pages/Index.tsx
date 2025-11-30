import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <Icon name="TrendingUp" size={16} />
            Автоматический заработок 24/7
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl leading-tight">
            Зарабатывай на просмотрах
            <span className="text-primary"> автоматически</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light">
            Бот Aviso работает за тебя круглосуточно. Запусти один раз и получай пассивный доход каждый день
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg"
              className="h-14 px-8 text-lg font-semibold shadow-xl hover:scale-105 transition-transform"
              onClick={() => window.open('https://t.me/bulatovlive', '_blank')}
            >
              <Icon name="Bot" size={24} className="mr-2" />
              Запустить бота
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg font-semibold"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Icon name="Play" size={24} className="mr-2" />
              Посмотреть видео
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="space-y-1">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Работа без остановок</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold text-primary">5,000₽</div>
              <div className="text-sm text-muted-foreground">Средний доход в день</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold text-primary">0₽</div>
              <div className="text-sm text-muted-foreground">Стартовый капитал</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold text-primary">15,000+</div>
              <div className="text-sm text-muted-foreground">Активных пользователей</div>
            </div>
          </div>
        </section>

        {isVideoPlaying && (
          <section className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
              <button 
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="X" size={24} className="text-white" />
              </button>
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="text-center space-y-4">
                  <Icon name="Video" size={64} className="text-white mx-auto" />
                  <p className="text-white text-lg">Здесь будет ваше промо-видео</p>
                  <p className="text-white/70 text-sm">Загрузите видео или вставьте ссылку на YouTube/Rutube</p>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Как это работает?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всего 3 простых шага до первого заработка
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="UserPlus" size={32} className="text-primary" />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-primary">Шаг 1</div>
                <h3 className="text-2xl font-bold text-foreground">Регистрация</h3>
                <p className="text-muted-foreground">
                  Запусти бота в Telegram и пройди быструю регистрацию за 30 секунд
                </p>
              </div>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Settings" size={32} className="text-primary" />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-primary">Шаг 2</div>
                <h3 className="text-2xl font-bold text-foreground">Настройка</h3>
                <p className="text-muted-foreground">
                  Укажи свои предпочтения и параметры заработка. Бот всё настроит сам
                </p>
              </div>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="DollarSign" size={32} className="text-primary" />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-primary">Шаг 3</div>
                <h3 className="text-2xl font-bold text-foreground">Заработок</h3>
                <p className="text-muted-foreground">
                  Получай деньги каждый день. Вывод средств в любое удобное время
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl">
          <div className="max-w-4xl mx-auto px-8 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Почему выбирают Aviso?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <div className="flex gap-4 text-left">
                <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Полная автоматизация</h3>
                  <p className="text-muted-foreground">Бот работает без твоего участия</p>
                </div>
              </div>

              <div className="flex gap-4 text-left">
                <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Быстрые выплаты</h3>
                  <p className="text-muted-foreground">Вывод средств в течение 24 часов</p>
                </div>
              </div>

              <div className="flex gap-4 text-left">
                <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Безопасность</h3>
                  <p className="text-muted-foreground">Защита данных и анонимность</p>
                </div>
              </div>

              <div className="flex gap-4 text-left">
                <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Поддержка 24/7</h3>
                  <p className="text-muted-foreground">Всегда на связи в Telegram</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Отзывы пользователей
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Алексей М.</div>
                  <div className="text-sm text-muted-foreground">Москва</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">
                Запустил бота месяц назад. Уже заработал 150,000₽ без вложений. Вывел деньги за сутки!
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Мария К.</div>
                  <div className="text-sm text-muted-foreground">Санкт-Петербург</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">
                Сначала не верила, но решила попробовать. Теперь это мой основной источник дохода!
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Дмитрий П.</div>
                  <div className="text-sm text-muted-foreground">Казань</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">
                Идеально для студентов! Учусь и зарабатываю параллельно, бот всё делает сам.
              </p>
            </Card>
          </div>
        </section>

        <section className="py-20 text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Начни зарабатывать уже сегодня
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйся к 15,000+ пользователей, которые уже получают пассивный доход с Aviso
            </p>
            <Button 
              size="lg"
              className="h-16 px-12 text-xl font-semibold shadow-2xl hover:scale-105 transition-transform"
              onClick={() => window.open('https://t.me/bulatovlive', '_blank')}
            >
              <Icon name="Rocket" size={24} className="mr-2" />
              Запустить бота бесплатно
            </Button>
            <p className="text-sm text-muted-foreground pt-4">
              Первые 100 новых пользователей получают бонус 1,000₽ на старте
            </p>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default Index;