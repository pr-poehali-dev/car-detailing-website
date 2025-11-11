import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://cdn.poehali.dev/files/44cd97a0-771f-421f-a9f8-44d1c4da73c5.jpg" 
              alt="AVTODETAILING MANS" 
              className="h-12 md:h-16 w-auto"
            />
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-foreground hover:text-gold transition-colors">Услуги</a>
              <a href="#gallery" className="text-foreground hover:text-gold transition-colors">Работы</a>
              <a href="#about" className="text-foreground hover:text-gold transition-colors">О нас</a>
              <a href="#contacts" className="text-foreground hover:text-gold transition-colors">Контакты</a>
            </div>
            <Button 
              onClick={() => setShowBooking(true)}
              className="bg-gold hover:bg-gold-dark text-black font-semibold"
            >
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/44cd97a0-771f-421f-a9f8-44d1c4da73c5.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-white">AvtoDetailing</span><br />
            <span className="text-gold">MANS</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Профессиональная забота о вашем автомобиле. Восстановление блеска, защита и безупречный вид.
          </p>
          <Button 
            size="lg"
            onClick={() => setShowBooking(true)}
            className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg px-8 py-6 animate-fade-in"
          >
            Записаться на детейлинг
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Наши <span className="text-gold">Услуги</span></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-background border-border hover:border-gold transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/7dcf320a-1b32-4f87-904b-6aa67df88866.jpg" 
                  alt="Шумоизоляция автомобиля"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Шумоизоляция автомобиля</h4>
                <div className="text-2xl font-bold text-gold">от 18 000 ₽</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-gold transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/3024e439-54ea-49cf-9448-967c14ff6cc4.jpg" 
                  alt="Перетяжка потолка"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Перетяжка потолка</h4>
                <div className="text-2xl font-bold text-gold">от 25 000 ₽</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-gold transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/d55f5434-c64c-474e-9f71-d897e35cf286.jpg" 
                  alt="Установка звездного неба"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Установка звездного неба</h4>
                <div className="text-2xl font-bold text-gold">от 30 000 ₽</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-gold transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/4f40cf52-c652-4f3b-beca-30eb242ddb5b.jpg" 
                  alt="Контурная подсветка салона"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Контурная подсветка салона</h4>
                <div className="text-2xl font-bold text-gold">25 000 ₽</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-gold transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-card flex items-center justify-center">
                <Icon name="Sparkles" className="text-gold" size={64} />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Химчистка салона автомобиля</h4>
                <div className="text-2xl font-bold text-gold">15 000 ₽</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-gold transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-card flex items-center justify-center">
                <Icon name="Droplets" className="text-gold" size={64} />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Мойка двигателя паром</h4>
                <div className="text-2xl font-bold text-gold">от 5 000 ₽</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-gold transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-card flex items-center justify-center">
                <Icon name="Zap" className="text-gold" size={64} />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Полировка фар</h4>
                <div className="text-2xl font-bold text-gold">от 3 000 ₽</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Все услуги выполняются профессиональным оборудованием с использованием качественных материалов
          </p>
          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => setShowBooking(true)}
              className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg px-8 py-6"
            >
              Записаться на услугу
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Наши <span className="text-gold">Работы</span></h3>
          <p className="text-center text-muted-foreground mb-12">Примеры шумоизоляции автомобилей</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://cdn.poehali.dev/files/7dcf320a-1b32-4f87-904b-6aa67df88866.jpg" 
                alt="Шумоизоляция салона"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://cdn.poehali.dev/files/3024e439-54ea-49cf-9448-967c14ff6cc4.jpg" 
                alt="Шумоизоляция пола"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://cdn.poehali.dev/files/d55f5434-c64c-474e-9f71-d897e35cf286.jpg" 
                alt="Шумоизоляция багажника"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://cdn.poehali.dev/files/4f40cf52-c652-4f3b-beca-30eb242ddb5b.jpg" 
                alt="Процесс шумоизоляции"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/fd04e486-fbd4-480b-a3f8-efc18378822f/files/7b3bedc3-54ba-40b0-b93c-d0f6edc41120.jpg)'
          }}
        />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h3 className="text-4xl font-bold mb-8"><span className="text-gold">О нас</span></h3>
          <p className="text-xl text-muted-foreground mb-6">
            Avtodetailing Mans — это команда профессионалов с многолетним опытом в автомобильном детейлинге. 
            Мы используем только проверенные материалы и современное оборудование.
          </p>
          <p className="text-xl text-muted-foreground">
            Наша миссия — вернуть вашему автомобилю первозданный вид и обеспечить долговременную защиту 
            лакокрасочного покрытия. Каждый автомобиль для нас — это произведение искусства.
          </p>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12"><span className="text-gold">Контакты</span></h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" className="text-gold mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">МО г. Балашиха, д. Русавкино-Романова, ул. Энергетическая, д. 14</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" className="text-gold mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (903) 519-53-53</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" className="text-gold mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Режим работы</h4>
                  <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" className="text-gold mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">manshamidov@mail.ru</p>
                </div>
              </div>
            </div>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">Напишите нам</h4>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" className="bg-card border-border" />
                  <Input placeholder="Телефон" className="bg-card border-border" />
                  <Textarea placeholder="Сообщение" className="bg-card border-border" rows={4} />
                  <Button className="w-full bg-gold hover:bg-gold-dark text-black font-semibold">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Avtodetailing Mans. Все права защищены.</p>
        </div>
      </footer>

      {showBooking && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="bg-card border-gold max-w-md w-full animate-fade-in">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Записаться</h3>
                <button onClick={() => setShowBooking(false)} className="text-muted-foreground hover:text-foreground">
                  <Icon name="X" size={24} />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Услуга</label>
                  <select className="w-full p-2 rounded-md bg-background border border-border">
                    <option>Базовый пакет</option>
                    <option>Премиум пакет</option>
                    <option>Максимум пакет</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Дата</label>
                  <Input type="date" className="bg-background border-border" />
                </div>
                <Button className="w-full bg-gold hover:bg-gold-dark text-black font-semibold">
                  Подтвердить запись
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}