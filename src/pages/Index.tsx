import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Eye" className="text-purple-300" size={32} />
          <h1 className="text-2xl font-bold text-white">Mystic Tarot</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-purple-200 hover:text-white transition-colors">Услуги</a>
          <a href="#faq" className="text-purple-200 hover:text-white transition-colors">FAQ</a>
          <a href="#about" className="text-purple-200 hover:text-white transition-colors">О нас</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-purple-800/50 border-purple-600 text-purple-200 hover:bg-purple-700">
                Войти
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-purple-600">
              <DialogHeader>
                <DialogTitle className="text-white">Вход в аккаунт</DialogTitle>
                <DialogDescription className="text-purple-200">
                  Войдите в свой аккаунт для доступа к персональным гаданиям
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-purple-200">Email</Label>
                  <Input id="email" placeholder="Ваш email" className="bg-slate-700 border-purple-600 text-white" />
                </div>
                <div>
                  <Label htmlFor="password" className="text-purple-200">Пароль</Label>
                  <Input id="password" type="password" placeholder="Ваш пароль" className="bg-slate-700 border-purple-600 text-white" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Войти</Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="bg-purple-800/50 border-purple-600 text-purple-200 hover:bg-purple-700">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-800 border-purple-600">
              <SheetHeader>
                <SheetTitle className="text-white">Корзина</SheetTitle>
                <SheetDescription className="text-purple-200">
                  Ваши выбранные услуги
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p className="text-purple-200 text-center">Корзина пуста</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
            Откройте тайны
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"> будущего</span>
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Профессиональные гадания на картах Таро. Получите ответы на важные вопросы и узнайте, что готовит вам судьба.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg animate-scale-in">
            Начать гадание
            <Icon name="Sparkles" className="ml-2" size={20} />
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
          <img 
            src="/img/04c3ed79-73b7-4251-bacb-b2cc5d52ef22.jpg" 
            alt="Mystical Tarot Cards" 
            className="w-full h-96 object-cover rounded-lg opacity-80"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-purple-600 hover:bg-slate-700 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center">
                  <Icon name="Eye" className="text-purple-300" size={32} />
                </div>
                <CardTitle className="text-white">Общее гадание</CardTitle>
                <CardDescription className="text-purple-200">
                  Узнайте общую картину вашего будущего на ближайшие месяцы
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-4">1500 ₽</div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-600 hover:bg-slate-700 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center">
                  <Icon name="Heart" className="text-purple-300" size={32} />
                </div>
                <CardTitle className="text-white">Любовь и отношения</CardTitle>
                <CardDescription className="text-purple-200">
                  Получите ответы на вопросы о любви, отношениях и совместимости
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-4">2000 ₽</div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-600 hover:bg-slate-700 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-purple-300" size={32} />
                </div>
                <CardTitle className="text-white">Карьера и финансы</CardTitle>
                <CardDescription className="text-purple-200">
                  Узнайте о перспективах в карьере и финансовом благополучии
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-4">1800 ₽</div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-yellow-500 text-black text-lg px-4 py-2">
            Специальное предложение
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-6">
            Полное гадание "Путь души"
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Комплексное гадание, включающее все аспекты жизни: любовь, карьеру, здоровье и духовное развитие
          </p>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-2xl text-purple-200 line-through">5000 ₽</span>
            <span className="text-4xl font-bold text-yellow-300">3500 ₽</span>
          </div>
          <img 
            src="/img/6c6328ea-15f5-4c2d-82c3-a91653c76797.jpg" 
            alt="Crystal Ball" 
            className="w-48 h-48 object-cover rounded-full mx-auto mb-8 border-4 border-purple-300"
          />
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold">
            Заказать сейчас
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-purple-600">
              <AccordionTrigger className="text-white hover:text-purple-300">
                Насколько точны гадания на картах Таро?
              </AccordionTrigger>
              <AccordionContent className="text-purple-200">
                Точность гадания зависит от многих факторов: опыта таролога, правильно заданного вопроса и открытости к получению информации. Таро не предсказывает будущее с абсолютной точностью, но помогает понять текущую ситуацию и возможные пути развития событий.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-purple-600">
              <AccordionTrigger className="text-white hover:text-purple-300">
                Как часто можно делать гадания?
              </AccordionTrigger>
              <AccordionContent className="text-purple-200">
                Рекомендуется делать общее гадание не чаще одного раза в месяц. Для конкретных вопросов можно обращаться чаще, но важно давать время для реализации полученных советов. Слишком частые гадания могут привести к путанице и снижению эффективности.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-purple-600">
              <AccordionTrigger className="text-white hover:text-purple-300">
                Можно ли изменить предсказанное будущее?
              </AccordionTrigger>
              <AccordionContent className="text-purple-200">
                Да, будущее не является неизменным. Таро показывает наиболее вероятные сценарии развития событий при текущих условиях. Изменив свое поведение, мышление или приняв определенные решения, вы можете повлиять на будущее.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-purple-600">
              <AccordionTrigger className="text-white hover:text-purple-300">
                Какие вопросы лучше задавать картам?
              </AccordionTrigger>
              <AccordionContent className="text-purple-200">
                Лучше всего задавать открытые вопросы, которые помогут понять ситуацию: "Что мне нужно знать о...?", "Как лучше поступить в ситуации...?", "Какие возможности открываются передо мной?". Избегайте вопросов типа "да/нет" и слишком конкретных временных рамок.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">О нашем таро-центре</h2>
          <div className="mb-12">
            <img 
              src="/img/128ccc75-bba5-43f4-a918-332e9f2cc5bc.jpg" 
              alt="Tarot Reader" 
              className="w-64 h-64 object-cover rounded-full mx-auto mb-8 border-4 border-purple-300"
            />
          </div>
          <p className="text-xl text-purple-200 mb-8">
            Мы занимаемся профессиональными гаданиями на картах Таро уже более 10 лет. Наши опытные тарологи помогли тысячам людей найти ответы на важные жизненные вопросы.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">5000+</div>
              <div className="text-purple-200">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">10+</div>
              <div className="text-purple-200">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">24/7</div>
              <div className="text-purple-200">Доступность</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Eye" className="text-purple-300" size={24} />
                <span className="text-xl font-bold text-white">Mystic Tarot</span>
              </div>
              <p className="text-purple-200">
                Профессиональные гадания на картах Таро для раскрытия тайн будущего
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white">Общее гадание</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Любовь и отношения</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Карьера и финансы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white">О нас</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-purple-200">
                <p>📧 info@mystictarot.ru</p>
                <p>📞 +7 (999) 123-45-67</p>
                <p>🕐 Работаем 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-600 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; 2024 Mystic Tarot. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;