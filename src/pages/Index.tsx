import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80',
    'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80'
  ];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const features = [
    {
      icon: 'Users',
      title: 'Более 5000 игроков',
      description: 'Присоединяйся к огромному сообществу Black Russia'
    },
    {
      icon: 'Building2',
      title: 'Реалистичная экономика',
      description: 'Стройте бизнес, инвестируйте, зарабатывайте'
    },
    {
      icon: 'Car',
      title: '200+ транспорта',
      description: 'От скутеров до суперкаров и вертолётов'
    },
    {
      icon: 'Briefcase',
      title: '30+ профессий',
      description: 'От таксиста до президента штата'
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Покупайте квартиры, дома, бизнесы'
    },
    {
      icon: 'Shield',
      title: 'Фракции',
      description: 'Полиция, мафия, банды - выбирай свою сторону'
    }
  ];

  const servers = [
    { name: 'TRINITY', online: '1247', max: '1500', ping: '23ms', status: 'online' },
    { name: 'MESA', online: '1089', max: '1500', ping: '28ms', status: 'online' },
    { name: 'PRESCOTT', online: '943', max: '1500', ping: '31ms', status: 'online' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/20 to-black/90" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white tracking-wider">BLACK RUSSIA</h1>
                <p className="text-xs text-purple-400">MOBILE ROLEPLAY</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition">Главная</a>
              <a href="#" className="text-gray-300 hover:text-white transition">О проекте</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Форум</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Магазин</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Поддержка</a>
            </div>

            <Button 
              className="md:hidden text-white"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>

            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20">
                <Icon name="LogIn" size={18} className="mr-2" />
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <a href="#" className="block py-2 text-gray-300 hover:text-white">Главная</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white">О проекте</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white">Форум</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white">Магазин</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white">Поддержка</a>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <Badge className="bg-purple-600/20 text-purple-400 border border-purple-500/30 px-4 py-2 text-sm mb-6">
            🔥 СЕЙЧАС ОНЛАЙН: 3279 ИГРОКОВ
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            ТВОЯ ИСТОРИЯ<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              НА УЛИЦАХ BLACK RUSSIA
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Погрузись в мир реалистичной ролевой игры на мобильных устройствах. 
            Создавай свою криминальную империю, строй бизнес или защищай закон.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-7 text-lg">
              <Icon name="Download" size={24} className="mr-2" />
              Скачать игру
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-10 py-7 text-lg"
              onClick={() => setShowTrailer(true)}
            >
              <Icon name="PlayCircle" size={24} className="mr-2" />
              Смотреть трейлер
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/40 to-black border-purple-500/30 p-6">
              <div className="text-4xl font-black text-purple-400 mb-2">5000+</div>
              <div className="text-gray-400 text-sm">Игроков онлайн</div>
            </Card>
            <Card className="bg-gradient-to-br from-pink-900/40 to-black border-pink-500/30 p-6">
              <div className="text-4xl font-black text-pink-400 mb-2">200+</div>
              <div className="text-gray-400 text-sm">Видов транспорта</div>
            </Card>
            <Card className="bg-gradient-to-br from-red-900/40 to-black border-red-500/30 p-6">
              <div className="text-4xl font-black text-red-400 mb-2">30+</div>
              <div className="text-gray-400 text-sm">Профессий</div>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-black border-blue-500/30 p-6">
              <div className="text-4xl font-black text-blue-400 mb-2">15</div>
              <div className="text-gray-400 text-sm">Фракций</div>
            </Card>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              СКРИНШОТЫ <span className="text-purple-400">ИГРЫ</span>
            </h2>
            <p className="text-gray-400 text-lg">Погрузись в атмосферу Black Russia</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-purple-500/30">
              <img 
                src={screenshots[currentScreenshot]}
                alt={`Screenshot ${currentScreenshot + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <button 
              onClick={prevScreenshot}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-purple-500/30"
            >
              <Icon name="ChevronLeft" size={24} className="text-white" />
            </button>

            <button 
              onClick={nextScreenshot}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-purple-500/30"
            >
              <Icon name="ChevronRight" size={24} className="text-white" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreenshot(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentScreenshot === index 
                      ? 'bg-purple-500 w-8' 
                      : 'bg-gray-600 hover:bg-purple-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              ПОЧЕМУ <span className="text-purple-400">BLACK RUSSIA?</span>
            </h2>
            <p className="text-gray-400 text-lg">Лучший мобильный RP сервер в СНГ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/20 hover:border-purple-500/60 p-8 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Servers Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              ВЫБЕРИ СВОЙ <span className="text-purple-400">СЕРВЕР</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {servers.map((server, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-black border-purple-500/30 hover:border-purple-500 p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-white">{server.name}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm font-semibold">ONLINE</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Онлайн:</span>
                    <span className="text-white font-bold">{server.online}/{server.max}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Пинг:</span>
                    <span className="text-green-400 font-bold">{server.ping}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                      style={{ width: `${(parseInt(server.online) / parseInt(server.max)) * 100}%` }}
                    />
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Icon name="Gamepad2" size={18} className="mr-2" />
                  Играть на {server.name}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <Card className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-red-900/40 border-purple-500/30 p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              ГОТОВ НАЧАТЬ СВОЮ ИСТОРИЮ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Скачай Black Russia прямо сейчас и начни путь от новичка до легенды криминального мира
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-10 py-7 text-lg font-bold">
                <Icon name="Download" size={24} className="mr-2" />
                Скачать для Android
              </Button>
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-10 py-7 text-lg font-bold">
                <Icon name="Download" size={24} className="mr-2" />
                Скачать для iOS
              </Button>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-purple-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">О проекте</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">О Black Russia</a></li>
                <li><a href="#" className="hover:text-white transition">Правила</a></li>
                <li><a href="#" className="hover:text-white transition">Команда</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Игрокам</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Форум</a></li>
                <li><a href="#" className="hover:text-white transition">Wiki</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Донат</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Магазин</a></li>
                <li><a href="#" className="hover:text-white transition">Акции</a></li>
                <li><a href="#" className="hover:text-white transition">Промокоды</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition">Репорты</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Black Russia. Все права защищены.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Trailer Modal */}
      {showTrailer && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowTrailer(false)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
            >
              <Icon name="X" size={24} className="text-white" />
            </button>
            <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-500/50 rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Black Russia Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;