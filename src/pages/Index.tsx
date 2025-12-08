import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const news = [
    {
      id: 1,
      title: 'Запуск сервера НОUMI RUSSIA',
      date: '8 декабря 2024',
      category: 'Важное',
      description: 'Мы рады объявить о запуске нового мобильного РП сервера! Приглашаем всех игроков присоединиться.',
      icon: 'Rocket'
    },
    {
      id: 2,
      title: 'Обновление игровой механики',
      date: '7 декабря 2024',
      category: 'Обновление',
      description: 'Добавлены новые профессии, улучшена система экономики и добавлены уникальные транспортные средства.',
      icon: 'Wrench'
    },
    {
      id: 3,
      title: 'Акция на донат',
      date: '5 декабря 2024',
      category: 'Акция',
      description: 'Специальное предложение! Скидки до 30% на все донат-пакеты. Торопитесь, акция ограничена!',
      icon: 'Gift'
    }
  ];

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О сервере', icon: 'Info' },
    { id: 'forum', label: 'Форум', icon: 'MessageSquare' },
    { id: 'donate', label: 'Донат', icon: 'ShoppingCart' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#0f1525] to-[#0a0e1a] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=80')`,
          filter: 'brightness(0.3) contrast(1.2)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/80 via-[#0f1525]/90 to-[#0a0e1a]/95"></div>
      <div className="relative z-10">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/90 backdrop-blur-md border-b border-[#00d4ff]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00d4ff] to-[#9b87f5] rounded-lg flex items-center justify-center game-glow">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-game-gradient">НОUMI RUSSIA</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex items-center space-x-1 bg-[#00d4ff]/10 px-3 py-1.5 rounded-full border border-[#00d4ff]/30">
                <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse-glow"></div>
                <span className="text-sm text-[#00d4ff] font-medium">0 онлайн</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mt-4 overflow-x-auto">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                className={`flex items-center space-x-2 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#00d4ff] to-[#9b87f5] text-white game-glow'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {activeSection === 'home' && (
            <>
              <section className="text-center mb-16 animate-slide-up">
                <div className="inline-block mb-4">
                  <Badge className="bg-gradient-to-r from-[#ff3366] to-[#9b87f5] text-white px-4 py-1 text-sm font-semibold game-glow-red">
                    🎮 МОБИЛЬНЫЙ РП СЕРВЕР
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-game-gradient">
                  НОUMI RUSSIA
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Погрузись в мир ролевой игры на мобильном устройстве. Создай свою историю, стройте карьеру и взаимодействуй с тысячами игроков!
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Button className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] hover:from-[#00bfea] hover:to-[#0c8fc7] text-white px-8 py-6 text-lg font-semibold rounded-xl game-glow transition-all">
                    <Icon name="Smartphone" size={24} className="mr-2" />
                    Начать играть
                  </Button>
                  <Button variant="outline" className="border-2 border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all">
                    <Icon name="PlayCircle" size={24} className="mr-2" />
                    Смотреть трейлер
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <Card className="bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e] border-[#00d4ff]/30 p-6 hover:border-[#00d4ff] transition-all game-glow">
                    <Icon name="Users" size={40} className="text-[#00d4ff] mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-white mb-2">0</h3>
                    <p className="text-gray-400">Игроков онлайн</p>
                  </Card>
                  <Card className="bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e] border-[#9b87f5]/30 p-6 hover:border-[#9b87f5] transition-all game-glow-purple">
                    <Icon name="MapPin" size={40} className="text-[#9b87f5] mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
                    <p className="text-gray-400">Локаций</p>
                  </Card>
                  <Card className="bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e] border-[#ff3366]/30 p-6 hover:border-[#ff3366] transition-all game-glow-red">
                    <Icon name="Trophy" size={40} className="text-[#ff3366] mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                    <p className="text-gray-400">Профессий</p>
                  </Card>
                </div>
              </section>

              <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
                    <Icon name="Newspaper" size={32} className="text-[#00d4ff] mr-3" />
                    Новости и обновления
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {news.map((item, index) => (
                    <Card
                      key={item.id}
                      className="bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e] border-[#00d4ff]/20 hover:border-[#00d4ff] transition-all overflow-hidden group cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/30">
                            {item.category}
                          </Badge>
                          <Icon name={item.icon} size={24} className="text-[#9b87f5]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{item.date}</span>
                          <Icon name="ArrowRight" size={18} className="text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="text-center bg-gradient-to-r from-[#00d4ff]/10 via-[#9b87f5]/10 to-[#ff3366]/10 rounded-2xl p-8 border border-[#00d4ff]/30">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Готов начать свою историю?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Скачай игру на свой телефон и присоединяйся к тысячам игроков прямо сейчас!
                </p>
                <Button className="bg-gradient-to-r from-[#00d4ff] to-[#9b87f5] hover:from-[#00bfea] hover:to-[#8a76e4] text-white px-8 py-6 text-lg font-semibold rounded-xl game-glow">
                  <Icon name="Download" size={24} className="mr-2" />
                  Скачать на телефон
                </Button>
              </section>
            </>
          )}

          {activeSection === 'about' && (
            <section className="animate-slide-up">
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
                <Icon name="Info" size={36} className="text-[#00d4ff] mr-3" />
                О сервере НОUMI RUSSIA
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e] border-[#00d4ff]/30 p-6">
                  <Icon name="Target" size={32} className="text-[#00d4ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Наша миссия</h3>
                  <p className="text-gray-300">
                    Создать уникальный мобильный РП опыт, где каждый игрок может реализовать себя, построить карьеру и стать частью активного сообщества.
                  </p>
                </Card>
                <Card className="bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e] border-[#9b87f5]/30 p-6">
                  <Icon name="Sparkles" size={32} className="text-[#9b87f5] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Особенности</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center"><Icon name="CheckCircle" size={18} className="text-[#00d4ff] mr-2" /> Игра на мобильном телефоне</li>
                    <li className="flex items-center"><Icon name="CheckCircle" size={18} className="text-[#00d4ff] mr-2" /> Уникальная экономика</li>
                    <li className="flex items-center"><Icon name="CheckCircle" size={18} className="text-[#00d4ff] mr-2" /> Честная администрация</li>
                    <li className="flex items-center"><Icon name="CheckCircle" size={18} className="text-[#00d4ff] mr-2" /> Регулярные обновления</li>
                  </ul>
                </Card>
              </div>
            </section>
          )}

          {activeSection === 'forum' && (
            <section className="animate-slide-up">
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
                <Icon name="MessageSquare" size={36} className="text-[#00d4ff] mr-3" />
                Форум
              </h2>
              <Card className="bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e] border-[#00d4ff]/30 p-8 text-center">
                <Icon name="Users" size={64} className="text-[#00d4ff] mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-4">Форум скоро откроется</h3>
                <p className="text-gray-300 mb-6">
                  Мы работаем над созданием площадки для общения игроков. Следите за новостями!
                </p>
                <Button className="bg-gradient-to-r from-[#00d4ff] to-[#9b87f5] text-white">
                  <Icon name="Bell" size={20} className="mr-2" />
                  Уведомить меня
                </Button>
              </Card>
            </section>
          )}

          {activeSection === 'donate' && (
            <section className="animate-slide-up">
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
                <Icon name="ShoppingCart" size={36} className="text-[#00d4ff] mr-3" />
                Донат
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Стартовый', price: '299₽', features: ['Игровая валюта', 'Уникальный транспорт', 'VIP статус 7 дней'], color: 'blue' },
                  { name: 'Премиум', price: '599₽', features: ['Игровая валюта x2', 'Эксклюзивный транспорт', 'VIP статус 30 дней', 'Уникальная одежда'], color: 'purple' },
                  { name: 'Легенда', price: '999₽', features: ['Игровая валюта x5', 'Топовый транспорт', 'VIP статус навсегда', 'Эксклюзивная одежда', 'Приватный дом'], color: 'red' }
                ].map((pack, index) => (
                  <Card
                    key={index}
                    className={`bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e] border-[#${pack.color === 'blue' ? '00d4ff' : pack.color === 'purple' ? '9b87f5' : 'ff3366'}]/30 p-6 hover:scale-105 transition-transform`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">{pack.name}</h3>
                    <div className="text-4xl font-bold text-game-gradient mb-6">{pack.price}</div>
                    <ul className="space-y-3 mb-6">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <Icon name="CheckCircle" size={18} className="text-[#00d4ff] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-[#00d4ff] to-[#9b87f5] hover:from-[#00bfea] hover:to-[#8a76e4] text-white">
                      Купить
                    </Button>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <footer className="bg-[#0a0e1a] border-t border-[#00d4ff]/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 НОUMI RUSSIA. Все права защищены.</p>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
              <Icon name="Share2" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;