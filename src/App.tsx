import './App.css'
import { Button } from './components/ui/button'
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, Element, Events, scrollSpy } from 'react-scroll'
import { useEffect } from 'react'

declare module 'react-scroll';

function App() {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
    });
    scrollSpy.update();
    
    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-zinc-900">合同会社GiveLab</h1>
            </div>
            <nav>
              <ul className="flex space-x-1">
                <li><Link to="top" smooth={true} duration={500}><Button variant="ghost" className="text-zinc-700 hover:text-zinc-900">トップ</Button></Link></li>
                <li><Link to="company" smooth={true} duration={500}><Button variant="ghost" className="text-zinc-700 hover:text-zinc-900">会社情報</Button></Link></li>
                <li><Link to="services" smooth={true} duration={500}><Button variant="ghost" className="text-zinc-700 hover:text-zinc-900">サービス</Button></Link></li>
                <li><Link to="contact" smooth={true} duration={500}><Button variant="ghost" className="text-zinc-700 hover:text-zinc-900">お問い合わせ</Button></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Element name="top">
        <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          {/* Animated employees */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="flex justify-around items-center h-full">
              <motion.div 
                className="flex space-x-8 absolute"
                animate={{ 
                  x: ['-100%', '100%'],
                }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "mirror", 
                  duration: 20,
                  ease: "linear"
                }}
              >
                <motion.div 
                  className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src="/images/employees/employee1.jpg" alt="社員1" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src="/images/employees/employee2.jpg" alt="社員2" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src="/images/employees/employee3.jpg" alt="社員3" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src="/images/employees/employee4.jpg" alt="社員4" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6 text-white">合同会社GiveLab</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white">クリエイター・エンジニア・デザイナーに成長する機会を与え、<br />人々を幸福にすることを願ったサービスを展開しています。</p>
            <Link to="services" smooth={true} duration={500}>
              <Button className="bg-blue-600 hover:bg-blue-700 py-6 px-8 text-lg">サービスを見る <ChevronRight className="ml-1" /></Button>
            </Link>
          </div>
        </section>
      </Element>

      {/* Company Info Section */}
      <Element name="company">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">会社情報</h2>
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 border-b pb-2">会社概要</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium text-zinc-500">会社名</div>
                      <div className="col-span-2">合同会社GiveLab</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium text-zinc-500">設立</div>
                      <div className="col-span-2">2021年8月5日</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium text-zinc-500">資本金</div>
                      <div className="col-span-2">百万円</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium text-zinc-500">代表社員</div>
                      <div className="col-span-2">角井克彰</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6 border-b pb-2">所在地・連絡先</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>〒130-0014 東京都墨田区石原3-19-6</div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-blue-500" />
                      <div>03-3622-3602</div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-blue-500" />
                      <div>givelab.inc@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Element>

      {/* Services Section */}
      <Element name="services">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">サービス</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">システム受託開発</h3>
              <p className="text-center text-zinc-600">お客様のご要望に合わせたシステム開発を行います。ウェブアプリ、モバイルアプリ、業務システムなど幅広く対応いたします。</p>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 flex items-center">
                詳細はこちら <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">システム開発コンサルティング</h3>
              <p className="text-center text-zinc-600">システム開発に関するコンサルティングを提供し、お客様のビジネス目標達成を支援します。最適な技術選定や開発プロセスの改善をご提案します。</p>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 flex items-center">
                詳細はこちら <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">コンテンツ販売</h3>
              <p className="text-center text-zinc-600">Google PlayやApp Storeなどのプラットフォームを通じて、高品質なデジタルコンテンツを提供しています。</p>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 flex items-center">
                詳細はこちら <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">アプリ・メディア媒体の広告配信</h3>
              <p className="text-center text-zinc-600">アプリやメディアを通じた効果的な広告配信サービスを提供し、お客様のマーケティング戦略をサポートします。</p>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 flex items-center">
                詳細はこちら <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">エンジニア・クリエイターへの育成・研修</h3>
              <p className="text-center text-zinc-600">エンジニアやクリエイターを対象とした技術研修や育成プログラムを提供し、人材の成長をサポートします。</p>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 flex items-center">
                詳細はこちら <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <p className="text-center text-lg mb-8">
              サービスに関するお問い合わせは、こちらのフォームからお願いいたします。
            </p>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium text-zinc-700">
                  お名前
                </label>
                <input
                  id="name"
                  className="w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="お名前"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium text-zinc-700">
                  メールアドレス
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="メールアドレス"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block font-medium text-zinc-700">
                  件名
                </label>
                <input
                  id="subject"
                  className="w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="件名"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium text-zinc-700">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>
              <div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6">送信する</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      </Element>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">合同会社GiveLab</h3>
              <div className="space-y-2">
                <p>〒130-0014 東京都墨田区石原3-19-6</p>
                <p>Tel: 03-3622-3602</p>
                <p>Email: givelab.inc@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">サービス</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">システム受託開発</a></li>
                <li><a href="#" className="hover:text-white">システム開発コンサルティング</a></li>
                <li><a href="#" className="hover:text-white">コンテンツ販売</a></li>
                <li><a href="#" className="hover:text-white">アプリ・メディア媒体の広告配信</a></li>
                <li><a href="#" className="hover:text-white">エンジニア・クリエイターへの育成・研修</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} GiveLab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
