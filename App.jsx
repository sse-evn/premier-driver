import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const slogans = [
    "Подача трезвого водителя за 15 минут — безопасно и надёжно",
    "Опытные водители доставят вас и вашу машину домой",
    "15 минут ожидания — и вы в пути с трезвым профессионалом",
    "Безопасная дорога домой с опытным водителем",
    "Трезвый водитель к вашему автомобилю за 15 минут",
    "Мы приедем за 15 минут и доставим вас без риска",
    "Профессиональные водители для вашей безопасности",
    "15 минут — и ваша поездка под надёжным контролем"
  ];

  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [showCallModal, setShowCallModal] = useState(false);
  const phoneNumber = "+79991234567";
  const whatsappText = encodeURIComponent("Здравствуйте! Хочу вызвать трезвого водителя Premier. Могу ли я получить помощь?");
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}?text=${whatsappText}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slogans.length]);

  const handleCallClick = () => setShowCallModal(true);
  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    setShowCallModal(false);
  };
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    setShowCallModal(false);
  };
  const closeModal = () => setShowCallModal(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Фоновое видео */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-luxury-car-driving-through-a-forest-4060-large.mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает видео.
        </video>
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 leading-tight text-white max-w-lg mx-auto">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSloganIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {slogans[currentSloganIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>
            <button
              onClick={handleCallClick}
              className="bg-transparent border-2 border-gold-300 text-gold-300 px-8 py-4 rounded-full text-lg font-medium min-w-48 hover:bg-gold-300 hover:text-black transition-all duration-300 active:scale-95 w-full max-w-xs"
            >
              Вызвать водителя
            </button>
          </motion.div>
        </section>

        {/* О компании */}
        <section className="py-12 px-6 bg-black/90">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-light mb-4 text-gold-300">Premier</h2>
            <p className="text-lg text-gray-300 mb-8">Трезвый водитель премиум-класса</p>
            <p className="text-base text-gray-300 leading-relaxed mb-8">
              Когда нужно добраться домой или по делам, но вы за рулём и не можете ехать сами — доверьтесь Premier.
              Наши водители приедут за 15 минут, аккуратно доставят вас и ваш автомобиль в любую точку города.
            </p>

            <div className="space-y-4">
              {[
                { icon: "⏱️", title: "Прибытие от 15 минут", desc: "Быстрая подача водителя" },
                { icon: "👨‍✈️", title: "Опытные водители", desc: "Профессионалы с безупречной репутацией" },
                { icon: "📅", title: "24/7", desc: "Круглосуточно без выходных" },
                { icon: "🔒", title: "Конфиденциальность", desc: "Ваши данные и поездка защищены" }
              ].map((item, i) => (
                <div key={i} className="bg-black/60 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <div className="text-left">
                      <h3 className="font-medium text-gold-300 text-sm">{item.title}</h3>
                      <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Футер */}
        <footer className="py-8 px-6 border-t border-white/10">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-lg text-gold-300 font-light mb-6">Premier — ваш путь, ваш водитель.</p>
            <button
              onClick={handleCallClick}
              className="bg-gold-300 text-black px-6 py-3 rounded-full font-medium text-base w-full max-w-xs hover:bg-gold-200 active:scale-95 transition-colors"
            >
              Вызвать водителя
            </button>
          </div>
        </footer>

        {/* Модальное окно */}
        <AnimatePresence>
          {showCallModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-black border border-white/20 rounded-2xl p-6 w-full max-w-sm mx-auto"
              >
                <h3 className="text-xl font-medium text-center mb-6 text-white">Как связаться с нами?</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-center gap-3 bg-transparent border-2 border-green-500 text-green-500 px-4 py-3 rounded-xl hover:bg-green-500 hover:text-white transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.093 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.03 0-2.01-.18-2.93-.51-2.23-.79-4.06-2.51-5.08-4.72-1.01-2.22-1.22-4.75-.59-7.09.64-2.34 2.18-4.3 4.34-5.4 2.17-1.11 4.77-1.28 7.06-.5 2.29.78 4.12 2.5 5.15 4.72 1.03 2.23 1.25 4.77.63 7.11-.63 2.34-2.16 4.3-4.34 5.40-.57.29-1.16.49-1.76.59-.58.1-1.18.15-1.78.15z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handlePhoneCall}
                    className="w-full flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white px-4 py-3 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.69 18.69L8.1 20.1C8.49 20.49 9.12 20.49 9.51 20.1C14.34 15.27 17.73 11.88 19.89 9.72C20.28 9.33 20.28 8.7 19.89 8.31L18.48 6.9C18.09 6.51 17.46 6.51 17.07 6.9L15.38 8.59C15.2 8.77 15.07 9.01 15.01 9.26L14.53 11.15C14.43 11.54 14.58 11.95 14.91 12.2L17.22 13.94C17.47 14.13 17.64 14.4 17.7 14.7C17.88 15.57 17.96 16.45 17.93 17.33C17.9 18.8 17.45 19.97 16.58 20.84C15.71 21.71 14.54 22.16 13.07 22.19C12.19 22.22 11.31 22.14 10.44 21.96C10.14 21.9 9.87 21.73 9.68 21.48L7.44 19.17C7.19 18.92 6.88 18.77 6.54 18.74L4.65 18.26C4.4 18.2 4.14 18.07 3.96 17.89L2.55 16.48C2.16 16.09 2.16 15.46 2.55 15.07L4 13.66C4.39 13.27 5.02 13.27 5.41 13.66L6.69 14.94C6.79 15.04 6.87 15.16 6.93 15.29L7.41 17.18C7.47 17.43 6.81 18.09 6.69 18.69Z"/>
                    </svg>
                    <span>Позвонить</span>
                  </button>
                </div>
                <button
                  onClick={closeModal}
                  className="w-full mt-4 text-gray-400 hover:text-white transition-colors text-center py-2"
                >
                  Отмена
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;