import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronDown, 
  Clock, 
  Folder, 
  Layout, 
  Palette, 
  MessageCircle, 
  CheckCircle2, 
  XCircle,
  Star,
  BookOpen,
  Users,
  Gift,
  Coins,
  Video,
  PenTool,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

// --- Components ---

const PhotoPlaceholder = ({ description, className = "aspect-video" }: { description: string, className?: string }) => (
  <div className={`bg-beige-light flex items-center justify-center p-8 rounded-lg overflow-hidden ${className}`}>
    <span className="text-brown-dark font-serif text-sm text-center uppercase tracking-wider">
      [PHOTO: {description}]
    </span>
  </div>
);

const IconButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${className}`}>
    {children}
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 h-[64px] bg-cream border-b border-beige-light z-50 px-4 md:px-8">
    <div className="max-w-[1100px] mx-auto h-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img 
          src="https://raw.githubusercontent.com/jsspace1111-max/landingpage-image/main/LOGO.png" 
          alt="J.S. Space Logo" 
          className="w-10 h-10 object-contain rounded-full"
          referrerPolicy="no-referrer"
        />
        <div className="font-serif text-brown-dark text-xl font-semibold tracking-tight">J.S. Space</div>
      </div>
      <a 
        href="https://jsspace1111.com/product/ldp-project/" 
        className="bg-terracotta hover:bg-terracotta-hover text-white px-5 py-2.5 rounded-sm text-sm font-medium transition-colors"
      >
        立即報名 →
      </a>
    </div>
  </nav>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const targetDate = new Date('2026-08-02T23:59:59+08:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="flex gap-4 justify-center py-8">
      {[
        { label: 'days', value: timeLeft.days },
        { label: 'hours', value: timeLeft.hours },
        { label: 'minutes', value: timeLeft.minutes },
        { label: 'seconds', value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="bg-beige-light p-4 w-20 md:w-24 rounded-lg shadow-sm flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-serif text-brown-dark font-bold leading-tight">{String(item.value).padStart(2, '0')}</span>
          <span className="text-[0.8rem] text-brown-text/60 uppercase tracking-widest mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-beige-light overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center transition-colors hover:bg-cream"
      >
        <span className="font-bold text-brown-dark md:text-lg">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="w-5 h-5 text-brown-dark" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-brown-text leading-relaxed border-t border-beige-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen pt-[64px]">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-cream px-6 py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[2.5rem] md:text-[3.8rem] text-brown-dark leading-tight mb-8 font-bold"
          >
            2027 重新設計人生<br className="hidden md:block" />手帳陪跑返現計劃
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-terracotta max-w-3xl mx-auto mb-10 leading-relaxed font-bold tracking-wider"
          >
            健康 X 工作 X 玩樂 X 愛 X 顯化，人生設計團隊
          </motion.p>
          <div className="text-[1.1rem] md:text-[1.2rem] text-brown-text/80 mb-10 font-medium">
            第二季開課時間 : 2026.9.1 - 9.22
          </div>

          <div className="mb-12">
            <span className="text-brown-text/70 text-base md:text-lg font-bold mb-4 block">第二季超早鳥優惠倒數</span>
            <CountdownTimer />
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="text-xl">
              超早鳥優惠價格 <span className="text-red-600 text-3xl font-extrabold ml-1">NT$2,880</span>
            </div>
            <a 
              href="https://jsspace1111.com/product/ldp-project/" 
              className="bg-terracotta hover:bg-terracotta-hover text-white px-10 py-4 rounded-sm text-lg font-medium transition-colors shadow-lg shadow-terracotta/20"
            >
              我要加入課程 →
            </a>
          </div>
        </div>
      </section>

      {/* Early Bird Banner */}
      <div className="bg-terracotta text-white py-5 px-6 text-center text-base md:text-lg font-bold tracking-wider">
        🗓 超早鳥優惠 NT$2,880，8/2（日）截止 ｜ 8/3 起 NT$3,280 | 8/24 起原價 NT$4,080
      </div>

      {/* Pain Points */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[1.8rem] md:text-3xl text-brown-dark text-center mb-6 font-bold leading-relaxed">
            你已經下定決心，不要再過這種「差不多」的人生。
          </h2>
          <p className="text-center text-brown-text/90 mb-16 max-w-3xl mx-auto leading-relaxed text-lg md:text-xl font-medium">
            你有認真想過，你想要過什麼樣的人生嗎？
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Folder className="w-6 h-6 text-terracotta" />, title: "想法很多，卻難以落地", desc: "腦子裡有一百個關於未來的規劃，卻因為不知道如何開始，最後一個都沒有動工。" },
              { icon: <Layout className="w-6 h-6 text-terracotta" />, title: "目標總是流於形式", desc: "年初寫下的滿滿大計，到了年中已經想不起放在哪裡，生活還是照著舊軌道運轉。" },
              { icon: <Palette className="w-6 h-6 text-terracotta" />, title: "工具很多，卻沒有系統", desc: "買過手帳、用過筆記軟體，但沒有一套真正能支撐你、融入日常的陪跑系統。" },
              { icon: <MessageCircle className="w-6 h-6 text-terracotta" />, title: "容易陷入自我懷疑", desc: "卡關的時候，總覺得是自己不夠有毅力，陷入「立志、挫折、放棄」的循環中。" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm border border-beige-light hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-[1.1rem] font-bold text-brown-dark mb-2">{item.title}</h3>
                <p className="text-[0.95rem] text-brown-text">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Before Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-beige-light/50 border border-beige-light p-8 md:p-12 rounded-2xl shadow-sm"
          >
            <span className="text-[0.8rem] uppercase tracking-widest text-brown-text/50 mb-8 block font-medium">加入課程前</span>
            <ul className="space-y-5">
              {[
                "腦中想法很多，卻總是卡在原地沒有開始",
                "對未來有憧憬，卻少了一套能持續落地的日常系統",
                "買過手帳或設定目標，最後都安靜躺在資料夾裡",
                "卡關時總是自責，以為是自己不夠自律和堅持",
                "過著隨波逐流的日子，感覺對生活失去了掌控感",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-brown-text/70">
                  <XCircle className="w-5 h-5 text-brown-text/30 shrink-0 mt-0.5" />
                  <span className="text-[0.95rem]">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-terracotta p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 rounded-full -mr-12 -mt-12"></div>
            <span className="text-[0.8rem] uppercase tracking-widest text-terracotta mb-8 block font-bold">完成課程後</span>
            <ul className="space-y-5">
              {[
                "用五大方向清晰盤點現況，釐清 2027 願景",
                "擁有一套為自己量身打造、天天想打開的人生手帳",
                "學會設計不同版本的未來，找出阻礙前進的卡點",
                "校準顯化頻率，用最適合自己的節奏輕盈前進",
                "拿回生活掌控權，每天都能看見自己前進的軌跡",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-brown-dark font-medium">
                  <Star className="w-5 h-5 text-terracotta shrink-0 fill-terracotta mt-0.5" />
                  <span className="text-[0.95rem]">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Pivot Statement */}
      <section className="bg-brown-dark px-6 py-24 text-center">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[1.8rem] md:text-3xl text-cream leading-relaxed font-serif font-bold">
            重新設計你的 2027<br />讓手帳成為支持你夢想的系統
          </h2>
        </div>
      </section>

      {/* Course Intro + Benefits */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[1.8rem] md:text-3xl text-brown-dark mb-10 font-bold leading-tight">
            這不只是一堂教你做手帳的課
          </h2>
          <div className="text-brown-text max-w-3xl mx-auto text-base md:text-lg leading-loose space-y-6">
            <p className="font-semibold text-xl text-terracotta">這是和你一起重新設計 2027 人生的活動</p>
            <p>
              這套課程的設計，靈感來自史丹佛大學廣受歡迎的「設計你的人生」概念，變成更貼近你、更日常的方式。
            </p>
            <div className="py-6 border-y border-beige-dark/30 my-8 space-y-4">
              <p className="font-bold text-brown-dark text-xl tracking-wider">《Designing Your Life》</p>
              <p className="text-brown-text/90 leading-relaxed font-medium">
                畫家可以一個人創作出曠世巨作，<br />
                但 iPhone 卻沒辦法只靠一個設計師就設計出來。
              </p>
            </div>
            <p className="font-medium text-brown-dark text-lg">
              我相信，每個人的人生都是一項非凡的設計。<br />
              而這種設計，你不需要一個人想破頭。<br />
              我們可以靠一個團隊，結合彼此的點子，一起完成你的人生手帳。
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[2rem] md:text-3xl text-brown-dark text-center mb-6 font-bold leading-tight">6 場直播・重新設計 2027 人生</h2>
          <p className="text-center text-brown-text/70 mb-12 max-w-2xl mx-auto text-base">
            一起盤點你現在的生活，陪你一起重新設計你未來的夢想生活
          </p>

          {/* Course Schedule Information Card */}
          <div className="max-w-2xl mx-auto bg-white border border-beige-light p-8 rounded-2xl mb-16 text-center shadow-sm">
            <span className="text-terracotta font-bold text-lg block mb-4">🗓️ 課程時間資訊</span>
            <p className="text-brown-dark font-medium mb-6">6 場直播・線上進行，皆有錄影回放</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm text-brown-text">
              <div className="p-3 bg-cream/50 rounded-lg">
                <span className="font-bold text-brown-dark block">⏳ 報名截止</span>
                8/30（日）
              </div>
              <div className="p-3 bg-cream/50 rounded-lg">
                <span className="font-bold text-brown-dark block">🤝 開幕式</span>
                8/31（一）
              </div>
              <div className="p-3 bg-cream/50 rounded-lg">
                <span className="font-bold text-brown-dark block">💻 四週正課</span>
                9/1、9/8、9/15、9/22（每週二晚上 8 點）
              </div>
              <div className="p-3 bg-cream/50 rounded-lg">
                <span className="font-bold text-brown-dark block">🎓 結業式</span>
                9/29（二）成果發表會
              </div>
            </div>
          </div>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { week: "開幕式 ｜ 8/31 (一)", title: "盤點：看見你現在的人生", icon: "🤝", desc: "先別急著規劃未來，先誠實看一次你的現在。用人生五大方向做一次完整盤點：健康、工作、玩樂、愛、顯化。" },
              { week: "第二季 第一週 ｜ 9/1 (二)", title: "定向：把現況設計成 2027 的願景", icon: "🗺️", desc: "盤點完，下一步是定向。把「我現在卡在這裡」變成「我 2027 想活成的樣子」。" },
              { week: "第二季 第二週 ｜ 9/8 (二)", title: "選路：設計三個版本的未來", icon: "🛣️", desc: "人生從來不是只有一條正確的路。那個拖最久的目標，我們一起找出「真正卡住你的，從來不是時間」。" },
              { week: "第二季 第三週 ｜ 9/15 (二)", title: "轉念：校準你的顯化頻率", icon: "✨", desc: "同樣的目標，為什麼有些人輕鬆顯化，你卻一直很費力？" },
              { week: "第二季 第四週 ｜ 9/22 (二)", title: "實驗：設計讓改變持續的系統", icon: "🧪", desc: "大部分人不是輸在沒目標，是輸在撐不久。這週結束，你會有一本從封面到內頁、完整屬於你的 2027 人生手帳。" },
              { week: "結業式 ｜ 9/29 (二)", title: "發表：2027 你的人生設計成果發表", icon: "🌟", desc: "大家一起站上舞台的發表會。對著所有人，說出一句「2027 我要成為的樣子」。" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-stretch"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm border border-beige-light z-10 shrink-0">
                    {item.icon}
                  </div>
                  {idx < 5 && <div className="w-[2px] bg-terracotta/20 flex-grow my-2"></div>}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-beige-light border-l-4 border-l-terracotta flex-grow">
                  <span className="text-[0.7rem] font-bold text-terracotta uppercase tracking-[0.2em] mb-1 block">{item.week}</span>
                  <h3 className="text-[1.1rem] font-bold text-brown-dark mb-2">{item.title}</h3>
                  <p className="text-[0.9rem] text-brown-text/80 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Student Showcase Gallery Section */}
          <div className="mt-28 mb-10 overflow-visible px-4 text-center">
            <h3 className="text-2xl md:text-3xl text-brown-dark font-bold mb-3">他們，設計出了自己的人生手帳</h3>
            <p className="text-brown-text/70 text-base mb-12">每一本，都是一個人重新設計後的一年。</p>
            <div className="flex justify-center items-center flex-wrap lg:flex-nowrap pt-12">
              {[
                { src: "https://raw.githubusercontent.com/jsspace1111-max/landingpage-image/main/2.jpg", rotate: -5, y: 15 },
                { src: "https://raw.githubusercontent.com/jsspace1111-max/landingpage-image/main/12.png", rotate: 3, y: -10 },
                { src: "https://raw.githubusercontent.com/jsspace1111-max/landingpage-image/main/IMG_4625.PNG", rotate: -2, y: 20 },
                { src: "https://raw.githubusercontent.com/jsspace1111-max/landingpage-image/main/4%20(2).png", rotate: 4, y: 0 },
                { src: "https://raw.githubusercontent.com/jsspace1111-max/landingpage-image/main/模板.jpg", rotate: -3, y: 10 }
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40, rotate: img.rotate * 2 }}
                  whileInView={{ opacity: 1, y: img.y, rotate: img.rotate }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                  className={`relative shrink-0 ${idx === 0 || idx === 4 ? 'w-36 sm:w-48 md:w-52 lg:w-60' : 'w-44 sm:w-56 md:w-64 lg:w-72'} -ml-12 sm:-ml-16 first:ml-0 hover:z-20 transition-all cursor-pointer group`}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  <div className="absolute inset-0 bg-black/5 rounded-lg blur-xl translate-y-4 group-hover:opacity-0 transition-opacity"></div>
                  <img 
                    src={img.src} 
                    alt={`Showcase ${idx + 1}`} 
                    className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-center text-brown-text/40 text-sm mt-20 italic tracking-widest font-serif">
              學員真實手帳作品與設計模板
            </p>
          </div>
        </div>
      </section>

      {/* Cashback Challenge */}
      <section className="bg-beige-light px-6 py-24 text-center">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 inline-block"
          >
            <h2 className="text-[2.2rem] md:text-[3.2rem] text-white bg-terracotta px-12 py-6 rounded-full shadow-2xl shadow-terracotta/40 transform -rotate-2 font-bold tracking-tight">
              返現挑戰
            </h2>
          </motion.div>
          
          <p className="text-xl md:text-2xl font-serif text-brown-dark mb-16 font-medium">
            完成電子手帳課程，獲得現金回饋
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center max-w-[900px] mx-auto mb-16 px-4">
            <div className="bg-white p-10 rounded-2xl shadow-sm flex-1 flex flex-col items-center border border-beige-dark/30">
              <span className="text-3xl mb-4">💳</span>
              <span className="text-sm text-brown-text/60 mb-2 font-medium">第二季超早鳥優惠</span>
              <span className="text-2xl font-serif text-brown-dark font-bold">NT$2,880</span>
            </div>
            <div className="bg-brown-dark p-10 rounded-2xl shadow-xl flex-1 flex flex-col items-center transform md:scale-110 z-10 text-white">
              <span className="text-3xl mb-4">🎁</span>
              <span className="text-sm text-white/70 mb-2 font-medium">完課返現</span>
              <span className="text-2xl font-serif font-bold text-terracotta">NT$1,000</span>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm flex-1 flex flex-col items-center border border-beige-dark/30">
              <span className="text-3xl mb-4">✨</span>
              <span className="text-sm text-brown-text/60 mb-2 font-medium">實際成本</span>
              <span className="text-2xl font-serif text-brown-dark font-bold">NT$1,880</span>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl border-2 border-dashed border-terracotta/30 max-w-[650px] mx-auto text-left shadow-lg">
            <h4 className="text-lg font-bold text-brown-dark mb-6 text-center">完成條件</h4>
            <ul className="space-y-4">
              {[
                "重新設計你的人生",
                "完成一本專屬人生手帳",
                "填寫返現挑戰申請表",
                "提交課程心得回饋"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-brown-text">
                  <div className="w-6 h-6 bg-terracotta rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg md:text-xl text-brown-dark font-bold mt-10 tracking-wide bg-terracotta/10 inline-block px-8 py-3 rounded-full border border-terracotta/20"
          >
            申請期限：課程結束後三週內（至 2026/10/21）
          </motion.p>
        </div>
      </section>

      {/* Value After Cashback */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[2.2rem] md:text-[2.5rem] text-brown-dark mb-2 font-bold leading-tight">完成課程，你只要花 NT$1,880，就能獲得</h2>
          <span className="text-[0.8rem] text-brown-text/50 block mb-16 tracking-widest uppercase">（課程價格 NT$2,880 － 完課返現 NT$1,000）</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: <Star className="w-6 h-6" />, title: "為2027重新設計人生", desc: "重新設計人生、對生活更有掌控感" },
              { icon: <Video className="w-6 h-6" />, title: "4 週直播陪跑課", desc: "每週四晚上 8 點，有人帶著你一步一步做" },
              { icon: <Clock className="w-6 h-6" />, title: "錄影回放一年", desc: "沒跟上直播？一年內隨時補看" },
              { icon: <Users className="w-6 h-6" />, title: "設計團隊共創社群", desc: "Skool + LINE社群一年" },
              { icon: <PenTool className="w-6 h-6" />, title: "每週作業 + Jessica 回饋", desc: "不是自己做完就算，有人幫你看、給你建議" },
              { icon: <Layout className="w-6 h-6" />, title: "一本屬於你的電子手帳", desc: "從封面到跳轉，每一頁都是為你設計的" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm border border-beige-light flex flex-col items-center text-center group hover:-translate-y-1 transition-all"
              >
                <div className="mb-4 bg-beige-light p-4 rounded-full transition-colors duration-300 group-hover:bg-terracotta text-terracotta group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-bold text-brown-dark mb-2">{item.title}</h3>
                <p className="text-[0.85rem] text-brown-text/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[1.8rem] text-brown-dark text-center mb-16 font-bold">過往學員怎麼說？</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: (
                  <>
                    這次參加老師的課程真的很開心，學到了很多製作手帳的技巧——我覺得我最需要的是{" "}
                    <span className="text-terracotta font-bold">學會了跳轉功能！</span>{" "}
                    原來 Canva 除了應付工作報告之外，也可以拿來製作手帳，素材的設計風格都可以自己調整。超級感謝老師開設這一次的課程，甚至還{" "}
                    <span className="text-terracotta font-bold">提供了很多的靈感來源 and 販售方式！</span>
                  </>
                ),
                author: "A 小姐"
              },
              {
                text: (
                  <>
                    對於手帳新手來說，我其實根本不知道手帳長什麼樣子。幸運的是，{" "}
                    <span className="text-terracotta font-bold">老師提供了模板，讓我不必從零開始思考</span>{" "}
                    手帳應該包含哪些元素。老師還一步步指導我們操作 Canva，教導我們製作封面、導航列，還會{" "}
                    <span className="text-terracotta font-bold">即時在社群裡解答疑惑</span>。即使是新手如我，也{" "}
                    <span className="text-terracotta font-bold">快速掌握了這些技能</span>。
                  </>
                ),
                author: "L 先生"
              },
              {
                text: (
                  <>
                    <span className="text-terracotta font-bold">最讓我驚喜的是跳轉功能</span>。以前用平板寫筆記時，遇到需要跳頁的情況總是要滑很久，非常不方便。在這次課程中，我{" "}
                    <span className="text-terracotta font-bold">學會了製作可跳轉的目錄和導航列——這對懶人來說簡直是福音！</span>
                  </>
                ),
                author: "C 小姐"
              },
              {
                text: (
                  <>
                    沒想到自己能完成一個電子手帳，也{" "}
                    <span className="text-terracotta font-bold">成功返現了，真的蠻感動的！</span>{" "}
                    以前一直使用別人設計的模板，某些欄位真的不是自己會用到的。學會自己做電子手帳後，就可以{" "}
                    <span className="text-terracotta font-bold">客製化頁面、欄位、美工，設計出真正符合自己使用需求的手帳</span>，我覺得很棒！
                  </>
                ),
                author: "W 姐妹"
              },
              {
                text: (
                  <>
                    一直以來都找不到理想的手帳，一直到老師開這個課，認真跟上課程，開始學著製作自己喜歡的手帳，真的很謝謝老師願意傾囊相授！這樣我每一年都{" "}
                    <span className="text-terracotta font-bold">不需要為了找不到手帳而煩惱，還可以擁有自己風格的手帳！</span>{" "}
                    一直覺得跳轉功能很難，結果沒想到老師不藏私，{" "}
                    <span className="text-terracotta font-bold">原來沒有這麼難，非常有趣！</span>
                  </>
                ),
                author: "H 小姐"
              },
              {
                text: (
                  <>
                    這次的課程不只讓我學到技能，老師還為我們{" "}
                    <span className="text-terracotta font-bold">設計好了回收路徑</span>。感謝老師開啟返現計畫，讓我以{" "}
                    <span className="text-terracotta font-bold">輕鬆、無痛且有明確方向的方式</span>，學會了一項新技能，還能{" "}
                    <span className="text-terracotta font-bold">推出自己的新產品！</span>
                  </>
                ),
                author: "M 小姐"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-beige-light flex flex-col justify-between relative group hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="text-terracotta/20 text-5xl font-serif absolute top-4 left-4 group-hover:text-terracotta/40 transition-colors">“</div>
                  <div className="text-[0.95rem] text-brown-text leading-relaxed relative z-10 pt-4 italic">
                    {item.text}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed border-beige-light text-right text-sm text-brown-text/60 font-medium font-mono">
                  ———— {item.author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[2.2rem] text-brown-dark text-center mb-2 font-bold leading-tight">這堂課，是為現在的你設計的</h2>
          <span className="text-[0.8rem] text-brown-text/50 text-center block mb-16 px-4">如果你有這些感受 ↓</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "腦子裡想了好多，卻遲遲沒有真的開始",
              "每年都立目標，過沒多久又默默回到原樣",
              "買過手帳、上過課，最後都躺在資料夾裡用不下去",
              "明明已經很努力，卻總覺得在內耗、在空轉",
              "正站在人生的某個轉彎處，想重新想清楚自己要什麼",
              "想要一本能陪你走一整年的手帳，不是又一個三分鐘熱度",
              "想用書寫顯化，把想要的人生真的活出來",
              "沒用過 Canva 也沒關係，我會一步一步帶你做",
            ].map((text, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-4 px-6 rounded-lg shadow-sm border-l-4 border-l-terracotta flex items-center gap-4 group hover:bg-beige-light transition-colors"
              >
                <div className="w-5 h-5 bg-terracotta/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-terracotta" />
                </div>
                <span className="text-[0.95rem] text-brown-text group-hover:text-brown-dark transition-colors">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Jessica */}
      <section className="bg-beige-light px-6 py-24">
        <div className="max-w-[1100px] mx-auto text-center">
          <span className="text-[0.9rem] uppercase tracking-widest text-brown-text/50 mb-4 block font-medium">關於你的手帳陪跑教練</span>
          <div className="space-y-6 text-lg text-brown-text leading-relaxed max-w-2xl mx-auto">
            <p className="font-bold text-xl text-brown-dark italic decoration-terracotta underline decoration-2 underline-offset-8">嗨，我是 Jessica 👋</p>
            <p>我是 J.S. Space 的創辦人，經營電子手帳品牌 3 年。</p>
            <p>這 3 年，我設計手帳超過 200 小時、分享至少 30 種模板、累積了 3000 頁的排版經驗——然後把這些全部整理成這堂 4 週陪跑課。</p>
            <p>我自己也走過「買了一堆手帳，沒一本用得下去」階段。直到開始自己設計，才真的找到一本屬於我的手帳。</p>
            <p className="text-brown-dark font-medium border-l-4 border-terracotta pl-6 py-4 bg-white/50 rounded-r-xl text-left">這堂課不是讓你看完影片自己摸索——而是一週一週，有人帶著你做完。</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
            {[
              "📒 200+ 小時設計手帳",
              "📐 30+ 種模板分享",
              "📄 3,000+ 頁排版經驗",
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/80 px-6 py-3 rounded-xl text-sm font-bold text-brown-dark border border-beige-dark/30 shadow-sm">
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack + Pricing */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[2.2rem] text-brown-dark text-center mb-12 font-bold">課程價值</h2>
          
          <div className="max-w-3xl mx-auto bg-beige-light rounded-xl overflow-hidden shadow-sm mb-16">
            <div className="divide-y divide-beige-dark/50">
              <div className="flex justify-between p-6">
                <span className="text-sm">4 週直播陪跑課 + 錄影回放一年</span>
                <span className="text-sm">NT$5,600</span>
              </div>
              <div className="flex justify-between p-6">
                <span className="text-sm">Skool 社群 + LINE社群即時回覆</span>
                <span className="text-sm">NT$3,600</span>
              </div>
              <div className="flex justify-between p-6">
                <span className="text-sm">每週作業 + Jessica 回饋</span>
                <span className="text-sm">NT$5,000</span>
              </div>
              <div className="flex justify-between p-6 font-bold">
                <span className="text-sm">總價值</span>
                <span className="text-sm">NT$14,200</span>
              </div>
              <div className="flex justify-between p-6 text-terracotta">
                <span className="text-sm">完課返現</span>
                <span className="text-sm">－NT$1,000</span>
              </div>
              <div className="flex justify-between items-center p-6 bg-terracotta text-white font-bold">
                <span className="text-lg">第二季超早鳥優惠</span>
                <span className="text-2xl font-serif">NT$2,880</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mb-16">
            <table className="w-full text-sm text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-brown-dark text-cream">
                  <th className="p-6">課程內容</th>
                  <th className="p-6 text-center">專屬你的人生手帳</th>
                  <th className="p-6 text-center text-cream/60">買現成手帳模板</th>
                  <th className="p-6 text-center text-cream/60">預錄 Canva 課程</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-beige-light">
                {[
                  { feature: "重新設計你的人生與生活掌控", own: "✅ 覺察核心引導", shop: "❌ 單純記錄", pref: "❌ 僅教工具基礎" },
                  { feature: "適合自己的版面", own: "✅ 完全客製", shop: "❌ 固定格式", pref: "⚠️ 要自己摸索" },
                  { feature: "即時解惑", own: "✅ 直播當場問", shop: "❌ 沒有", pref: "❌ 沒有" },
                  { feature: "有人陪你做完", own: "✅ 4 週陪跑", shop: "❌ 沒有", pref: "❌ 沒有" },
                  { feature: "社群支持", own: "✅ Skool 社群", shop: "❌ 沒有", pref: "❌ 沒有" },
                  { feature: "完課後有返現", own: "✅ NT$1,000", shop: "❌ 沒有", pref: "❌ 沒有" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream/50 transition-colors">
                    <td className="p-6 font-medium text-brown-dark">{row.feature}</td>
                    <td className="p-6 text-center font-bold text-terracotta bg-terracotta/5">{row.own}</td>
                    <td className="p-6 text-center text-brown-text/40">{row.shop}</td>
                    <td className="p-6 text-center text-brown-text/40">{row.pref}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-brown-dark rounded-2xl p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">超早鳥優惠價格 NT$2,880</h3>
            <p className="text-white/80 text-base md:text-lg mb-8 px-4 font-medium">
              優惠期限 : 2026.8.2
            </p>
            <a 
              href="https://jsspace1111.com/product/ldp-project/" 
              className="inline-block bg-terracotta hover:bg-terracotta-hover text-white px-12 py-4 rounded-sm text-lg font-bold transition-all shadow-xl shadow-black/20"
            >
              我要加入課程 →
            </a>
          </div>
        </div>
      </section>

      {/* Add-On Offer */}
      <section className="bg-cream px-6 py-24 text-center">
        <div className="max-w-[1100px] mx-auto">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[1.2rem] md:text-[1.5rem] uppercase tracking-[0.2em] text-white bg-terracotta px-8 py-3 rounded-full mb-10 inline-block font-bold shadow-lg shadow-terracotta/20"
          >
            加購方案
          </motion.span>
          <h2 className="text-[2.2rem] text-brown-dark mb-10 font-bold">做好手帳之後，然後呢？</h2>
          <p className="text-brown-text mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            如果你做完這本手帳，開始想著——「這個可以分享嗎？可以販售嗎？」那這個加購就是為你準備的。
          </p>

          <div className="max-w-[600px] mx-auto bg-white rounded-3xl shadow-2xl border-l-[12px] border-l-terracotta overflow-hidden text-left transform hover:scale-[1.02] transition-all duration-300">
            <div className="p-10 border-b border-beige-light flex justify-between items-center bg-beige-light/30">
              <div>
                <span className="text-[1.05rem] md:text-[1.1rem] uppercase tracking-widest text-terracotta font-bold block mb-1">📦 手帳變現創作者計畫</span>
                <span className="text-xs text-brown-text/60">加購優惠</span>
                <span className="text-xs text-brown-text/40 block line-through mt-1">原價 NT$3,880</span>
                <span className="text-xs text-brown-dark/80 block mt-2 font-semibold">課程預計開課日期是 10 月 6 、7 ｜ 共2場線上直播</span>
              </div>
              <div className="text-terracotta font-serif text-3xl font-bold italic">NT$2,880</div>
            </div>
            <div className="p-10 space-y-6">
              {[
                { icon: "💡", text: "數位產品訂價策略" },
                { icon: "🛒", text: "上架平台選擇" },
                { icon: "🖼️", text: "數位產品上架圖製作" },
                { icon: "📣", text: "協助J.S. Space平台上架與社群曝光" },
                { icon: "🗓️", text: "一對一 1 小時上架健檢諮詢 - 銷售策略、品牌經營" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-brown-dark text-lg font-medium">
                  <span className="p-2 bg-beige-light rounded-lg">{item.icon}</span>
                  <span className="leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="p-10 pt-0">
              <button className="w-full bg-terracotta text-white font-bold py-5 rounded-2xl hover:bg-terracotta-hover transition-all text-xl shadow-xl shadow-terracotta/30">
                加購手帳變現創作者計畫 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[1.8rem] text-brown-dark text-center mb-16">常見問題</h2>
          
          <div className="space-y-4">
            <FAQItem 
              question="Q：我完全沒用過 Canva，可以學嗎？" 
              answer="可以！這堂課從零開始，不需要任何設計基礎。但課程不會詳細教 Canva 所有功能，只會教設計電子手帳會用到的部分。" 
            />
            <FAQItem 
              question="Q：我有 Canva 基礎，這堂課還適合我嗎？" 
              answer="適合。課程重點不只是 Canva 操作，而是帶你設計一本真正符合自己需求的手帳。有基礎的人可以專注在架構設計和個人頁面的部分。" 
            />
            <FAQItem 
              question="Q：直播如果沒辦法準時參加怎麼辦？" 
              answer="每堂直播都有錄影，可在一年內回放觀看。" 
            />
            <FAQItem 
              question="Q：Skool 社群課後還可以使用嗎？" 
              answer="可以，社群開放一年。" 
            />
            <FAQItem 
              question="Q：需要準備什麼工具？" 
              answer="有電腦或筆電即可，推薦使用筆電或桌機操作 Canva，體驗較佳。Canva Pro 會在開課前提供，不需要自己購買。" 
            />
            <FAQItem 
              question="Q：需要有 iPad 或 Apple Pencil 嗎？" 
              answer="設計手帳不需要。但如果你之後想實際使用電子手帳書寫，會需要平板和觸控筆。" 
            />
            <FAQItem 
              question="Q：做好的手帳可以拿來販售嗎？" 
              answer="可以。你可以在自己的平台上架販售，或是加購 J.S. Space 創作者計畫，會有完整的上架與銷售流程。" 
            />
            <FAQItem 
              question="Q：返現怎麼申請？" 
              answer="完課並填寫返現挑戰申請表，在課程結束後三週內（2026/10/21 前）填寫申請表單。" 
            />
            <FAQItem 
              question="Q：付款後如何加入課程？" 
              answer="付款後會收到確認信，內含 Skool 社群加入連結及開課時程說明。" 
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-beige-light px-6 py-24 text-center">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[2.8rem] text-brown-dark mb-10">重新開始設計你的人生</h2>
          <div className="text-lg text-brown-text mb-12 space-y-1">
            <p>你不需要設計天分。</p>
            <p>你不需要先學會 Canva。</p>
            <p>你只需要知道，你想要一本什麼樣的手帳。</p>
            <p className="mt-4 font-medium italic">剩下的，我們一起來完成。</p>
          </div>
          
          <div className="text-xl mb-10">
            第二季超早鳥優惠價格 <span className="text-terracotta text-3xl font-bold ml-1">NT$2,880</span>
          </div>
          
          <a 
            href="https://jsspace1111.com/product/ldp-project/" 
            className="bg-terracotta hover:bg-terracotta-hover text-white px-16 py-5 rounded-sm text-xl font-bold transition-all shadow-2xl shadow-terracotta/20 inline-block scale-105 hover:scale-110 active:scale-95"
          >
            我要加入課程 →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream py-20 px-6 text-center border-t border-beige-light">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center">
          <img 
            src="https://raw.githubusercontent.com/jsspace1111-max/landingpage-image/main/LOGO.png" 
            alt="J.S. Space Logo" 
            className="w-16 h-16 object-contain rounded-full mb-6"
            referrerPolicy="no-referrer"
          />
          <div className="font-serif text-brown-dark text-2xl font-bold mb-6">J.S. Space</div>
          <div className="flex flex-col gap-2 mb-10">
            <p className="text-brown-text text-sm">
              有任何問題，歡迎私訊 Instagram：
              <a 
                href="https://www.instagram.com/jsspace_1111/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline decoration-terracotta/30 hover:text-terracotta transition-colors font-medium ml-1"
              >
                @jsspace_1111
              </a>
            </p>
            <p className="text-brown-text text-sm">
              Email：<a href="mailto:jsspace1111@gmail.com" className="hover:text-terracotta transition-colors">jsspace1111@gmail.com</a>
            </p>
          </div>
          <div className="text-[0.7rem] text-brown-text/40 uppercase tracking-[0.3em] pt-8 border-t border-beige-light w-full max-w-[200px]">
            © 2026 J.S. Space
          </div>
        </div>
      </footer>
    </div>
  );
}
