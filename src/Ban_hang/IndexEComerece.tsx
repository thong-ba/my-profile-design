import React, { useState } from 'react';

const flowerData = [
  {
    name: 'Hoa Cát Tường',
    image: '/Ecomerce/cattuong.png',
    price: '120.000đ/bó',
    description: 'Hoa cát tường mang vẻ đẹp nhẹ nhàng, thanh khiết, tượng trưng cho sự may mắn và hạnh phúc.',
    meaning: 'May mắn, hạnh phúc, tình yêu bền lâu.',
    features: ['Màu sắc đa dạng', 'Cánh hoa mềm mại', 'Thích hợp tặng dịp khai trương, sinh nhật']
  },
  {
    name: 'Hoa Kim Tiền',
    image: '/Ecomerce/kimtien.png',
    price: '150.000đ/chậu',
    description: 'Hoa kim tiền là biểu tượng của tài lộc, thịnh vượng, thường được trưng trong nhà dịp Tết.',
    meaning: 'Tài lộc, thịnh vượng, phát đạt.',
    features: ['Lá xanh bóng', 'Dễ chăm sóc', 'Ý nghĩa phong thủy tốt']
  },
  {
    name: 'Hoa Đào Nhật',
    image: '/Ecomerce/daonhat.png',
    price: '200.000đ/cành',
    description: 'Hoa đào Nhật mang vẻ đẹp tinh tế, tượng trưng cho sự khởi đầu mới và may mắn.',
    meaning: 'Khởi đầu mới, may mắn, bình an.',
    features: ['Màu hồng phấn', 'Nở rộ dịp xuân', 'Thích hợp trang trí Tết']
  },
  {
    name: 'Hoa Hồng',
    image: '/Ecomerce/hong.png',
    price: '100.000đ/bó',
    description: 'Hoa hồng là biểu tượng của tình yêu, sự lãng mạn và đam mê.',
    meaning: 'Tình yêu, lãng mạn, đam mê.',
    features: ['Nhiều màu sắc', 'Hương thơm quyến rũ', 'Phù hợp tặng người yêu']
  },
  {
    name: 'Hoa Huệ',
    image: '/Ecomerce/hue.png',
    price: '90.000đ/bó',
    description: 'Hoa huệ mang ý nghĩa thanh cao, thuần khiết, thường dùng trong các dịp trang trọng.',
    meaning: 'Thanh cao, thuần khiết, kính trọng.',
    features: ['Màu trắng tinh khôi', 'Hương thơm nhẹ', 'Thường dùng cắm bàn thờ']
  },
  {
    name: 'Hoa Lan',
    image: '/Ecomerce/hoaLan.png',
    price: '250.000đ/chậu',
    description: 'Hoa lan là biểu tượng của sự sang trọng, quý phái và thành công.',
    meaning: 'Sang trọng, quý phái, thành công.',
    features: ['Nhiều chủng loại', 'Bền màu', 'Thích hợp làm quà tặng cao cấp']
  },
];

const testimonials = [
  {
    name: 'Nguyễn Thị Mai',
    comment: 'Shop hoa rất đẹp, giao hàng nhanh, nhân viên tư vấn nhiệt tình!',
    avatar: '/girl.png',
    rating: 5
  },
  {
    name: 'Trần Văn An',
    comment: 'Hoa tươi lâu, giá hợp lý, sẽ ủng hộ dài lâu!',
    avatar: '/boy.png',
    rating: 5
  },
  {
    name: 'Lê Thị Hạnh',
    comment: 'Dịch vụ bó hoa theo yêu cầu rất chuyên nghiệp, cảm ơn shop!',
    avatar: '/female_doctor.png',
    rating: 4
  },
];

const services = [
  {
    icon: '🚚',
    title: 'Giao hoa tận nơi',
    desc: 'Giao hoa nhanh trong 2h tại TP.HCM và các tỉnh lân cận.'
  },
  {
    icon: '💐',
    title: 'Bó hoa theo yêu cầu',
    desc: 'Thiết kế bó hoa, lẵng hoa, giỏ hoa theo ý tưởng khách hàng.'
  },
  {
    icon: '🎉',
    title: 'Trang trí sự kiện',
    desc: 'Nhận trang trí hoa cho tiệc cưới, sinh nhật, khai trương, hội nghị.'
  },
  {
    icon: '🎁',
    title: 'Gói quà tặng kèm',
    desc: 'Tặng kèm thiệp, gấu bông, chocolate, ruy băng theo yêu cầu.'
  },
];

const promotions = [
  {
    title: 'Giảm 10% cho đơn đầu tiên',
    desc: 'Áp dụng cho khách hàng mới đặt online.',
    code: 'WELCOME10',
  },
  {
    title: 'Miễn phí giao hàng',
    desc: 'Cho đơn từ 500.000đ tại nội thành TP.HCM.',
    code: 'FREESHIP',
  },
];

const faqs = [
  {
    question: 'Shop có giao hoa trong ngày không?',
    answer: 'Có, shop giao nhanh trong 2h tại TP.HCM và các tỉnh lân cận.'
  },
  {
    question: 'Có thể đặt hoa theo mẫu riêng không?',
    answer: 'Shop nhận thiết kế bó hoa, lẵng hoa theo yêu cầu và hình mẫu khách gửi.'
  },
  {
    question: 'Thanh toán như thế nào?',
    answer: 'Bạn có thể thanh toán khi nhận hàng, chuyển khoản hoặc qua ví điện tử.'
  },
  {
    question: 'Hoa có đảm bảo tươi lâu không?',
    answer: 'Shop cam kết hoa tươi mới 100%, bảo hành tươi lâu 2-3 ngày.'
  },
];

const processSteps = [
  { icon: '🛒', title: 'Chọn mẫu hoa', desc: 'Chọn mẫu hoa yêu thích hoặc gửi mẫu riêng.' },
  { icon: '📞', title: 'Liên hệ đặt hàng', desc: 'Gọi hotline hoặc điền form liên hệ.' },
  { icon: '🎁', title: 'Gói & giao hoa', desc: 'Shop bó hoa, gói quà và giao tận nơi.' },
  { icon: '😊', title: 'Nhận hoa & hài lòng', desc: 'Nhận hoa tươi, kiểm tra và phản hồi.' },
];

const commitments = [
  { icon: '✅', title: 'Hoa tươi mới mỗi ngày', desc: 'Nhập hoa trực tiếp từ vườn, không qua trung gian.' },
  { icon: '🚚', title: 'Giao hàng đúng hẹn', desc: 'Đảm bảo giao đúng giờ, đúng địa chỉ.' },
  { icon: '💯', title: 'Đúng mẫu, đúng giá', desc: 'Cam kết đúng mẫu đã chọn, không phát sinh phí.' },
  { icon: '🤝', title: 'Hỗ trợ tận tâm', desc: 'Tư vấn miễn phí, hỗ trợ đổi trả nếu hoa không đạt.' },
];

const IndexEComerece = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [faqOpen, setFaqOpen] = useState(-1);

  return (
    <div className="bg-gradient-to-br from-pink-50 to-green-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white/90 shadow-lg sticky top-0 z-50 animate-slide-up">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex items-center space-x-3">
            <span className="text-3xl animate-bounce">🌸</span>
            <span className="font-bold text-pink-600 text-2xl animate-pulse">Hoa Tươi Thịnh Vượng</span>
          </div>
          <div className="hidden md:flex space-x-6 font-medium text-gray-700">
            <a href="#home" className="hover:text-pink-600 transition">Trang chủ</a>
            <a href="#products" className="hover:text-pink-600 transition">Sản phẩm</a>
            <a href="#about" className="hover:text-pink-600 transition">Giới thiệu</a>
            <a href="#services" className="hover:text-pink-600 transition">Dịch vụ</a>
            <a href="#promo" className="hover:text-pink-600 transition">Ưu đãi</a>
            <a href="#contact" className="hover:text-pink-600 transition">Liên hệ</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setShowContact(!showContact)} className="text-pink-600 font-bold px-4 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition">Liên hệ</button>
          </div>
        </div>
      </nav>

      {/* Banner Promotion */}
      <div className="w-full bg-gradient-to-r from-pink-400 via-yellow-200 to-green-300 py-4 flex items-center justify-center animate-fade-in">
        <span className="text-lg md:text-xl font-bold text-pink-800 animate-pulse">🎉 Đặt hoa online - Giảm ngay 10% cho đơn đầu tiên! Mã: <span className="bg-pink-100 px-2 py-1 rounded font-mono text-pink-700">WELCOME10</span> 🎉</span>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative py-16 px-4 text-center bg-gradient-to-br from-pink-100 to-green-100 animate-slide-up">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-4 animate-slide-up">Hoa Tươi - Gửi Trọn Yêu Thương</h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in">Chuyên cung cấp hoa tươi, bó hoa nghệ thuật, giao nhanh tận nơi, giá tốt nhất thị trường.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <a href="#products" className="px-8 py-4 bg-pink-500 text-white rounded-2xl font-semibold shadow-lg hover:bg-pink-600 transition-all text-lg animate-bounce-in">Khám phá sản phẩm</a>
            <a href="tel:0397090051" className="px-8 py-4 bg-green-500 text-white rounded-2xl font-semibold shadow-lg hover:bg-green-600 transition-all text-lg animate-bounce-in">Hotline: 0397 090 051</a>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-20 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-10 animate-slide-up">Sản Phẩm Nổi Bật</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {flowerData.map((flower, idx) => (
            <button
              key={flower.name}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 border-2 focus:outline-none ${
                activeTab === idx
                  ? 'bg-pink-500 text-white border-pink-500 shadow-lg scale-105 animate-pulse'
                  : 'bg-white text-pink-600 border-pink-200 hover:bg-pink-50'
              }`}
            >
              {flower.name}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white/80 rounded-3xl shadow-xl p-8 animate-fade-in">
          <div className="flex justify-center">
            <img
              src={flowerData[activeTab].image}
              alt={flowerData[activeTab].name}
              className="w-72 h-72 object-contain rounded-2xl shadow-xl border-4 border-pink-100 bg-white hover:scale-105 transition-transform duration-300 animate-float"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-pink-700 mb-2 animate-slide-up">{flowerData[activeTab].name}</h3>
            <div className="text-lg text-gray-700 mb-2 animate-fade-in">{flowerData[activeTab].description}</div>
            <div className="mb-2"><span className="font-semibold text-pink-600">Giá:</span> {flowerData[activeTab].price}</div>
            <div className="mb-2"><span className="font-semibold text-pink-600">Ý nghĩa:</span> {flowerData[activeTab].meaning}</div>
            <div className="mb-2">
              <span className="font-semibold text-pink-600">Đặc điểm nổi bật:</span>
              <ul className="list-disc ml-6 mt-1 text-gray-600">
                {flowerData[activeTab].features.map((f, i) => (
                  <li key={i} className="hover:text-pink-500 transition-colors duration-200">{f}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="px-6 py-3 bg-pink-500 text-white rounded-xl font-semibold shadow-lg hover:bg-pink-600 transition-all duration-300 animate-bounce-in">Đặt mua ngay</button>
              <button className="px-6 py-3 bg-white border border-pink-300 text-pink-600 rounded-xl font-semibold shadow hover:bg-pink-50 transition-all duration-300">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quy trình đặt hoa */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8 animate-slide-up">Quy Trình Đặt Hoa Online</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <div key={i} className="bg-white/90 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300 animate-float">
              <div className="text-4xl mb-4 animate-bounce">{step.icon}</div>
              <div className="font-bold text-pink-700 mb-2">{step.title}</div>
              <div className="text-gray-600 text-sm">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-green-100 animate-fade-in">
        <div className="max-w-5xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl font-bold text-pink-600 mb-6">Về Hoa Tươi Thịnh Vượng</h2>
          <p className="text-lg text-gray-700 mb-4">Chúng tôi tự hào là địa chỉ cung cấp hoa tươi uy tín, chất lượng tại TP.HCM. Đội ngũ nghệ nhân giàu kinh nghiệm, luôn sáng tạo để mang đến những bó hoa đẹp nhất, ý nghĩa nhất cho khách hàng.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-64 hover:scale-105 transition-transform duration-300 animate-float">
              <div className="text-3xl mb-2">🌼</div>
              <div className="font-bold text-pink-700 mb-1">100% Hoa tươi mới mỗi ngày</div>
              <div className="text-gray-600 text-sm">Nhập hoa trực tiếp từ vườn, đảm bảo tươi lâu, bền màu.</div>
            </div>
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-64 hover:scale-105 transition-transform duration-300 animate-float">
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-bold text-pink-700 mb-1">Thiết kế đa dạng, sáng tạo</div>
              <div className="text-gray-600 text-sm">Bó hoa, lẵng hoa, giỏ hoa, hoa sự kiện, hoa cưới...</div>
            </div>
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-64 hover:scale-105 transition-transform duration-300 animate-float">
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-bold text-pink-700 mb-1">Dịch vụ tận tâm</div>
              <div className="text-gray-600 text-sm">Tư vấn nhiệt tình, giao hàng đúng hẹn, bảo mật thông tin khách hàng.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cam kết chất lượng */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8 animate-slide-up">Cam Kết Chất Lượng</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {commitments.map((c, i) => (
            <div key={i} className="bg-white/90 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300 animate-float">
              <div className="text-4xl mb-4 animate-pulse">{c.icon}</div>
              <div className="font-bold text-pink-700 mb-2">{c.title}</div>
              <div className="text-gray-600 text-sm">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto w-full animate-fade-in">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-10 animate-slide-up">Dịch Vụ Nổi Bật</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300 animate-float">
              <div className="text-4xl mb-4 animate-bounce">{s.icon}</div>
              <div className="font-bold text-pink-700 mb-2">{s.title}</div>
              <div className="text-gray-600 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promo" className="py-20 px-4 bg-gradient-to-br from-pink-100 to-green-50 animate-fade-in">
        <div className="max-w-5xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl font-bold text-pink-600 mb-8">Ưu Đãi Đặc Biệt</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {promotions.map((promo, i) => (
              <div key={i} className="bg-white/90 rounded-2xl shadow-lg p-8 w-80 border-2 border-pink-200 hover:scale-105 transition-transform duration-300 animate-float">
                <div className="font-bold text-lg text-pink-700 mb-2">{promo.title}</div>
                <div className="text-gray-600 mb-2">{promo.desc}</div>
                <div className="text-green-600 font-mono text-xl">Mã: {promo.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto w-full animate-fade-in">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-10 animate-slide-up">Khách Hàng Nói Gì?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/80 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300 animate-float">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-pink-200 object-cover animate-bounce-in" />
              <div className="font-bold text-pink-700 mb-1">{t.name}</div>
              <div className="text-yellow-400 text-lg mb-2">{'★'.repeat(t.rating)}{'☆'.repeat(5-t.rating)}</div>
              <div className="text-gray-600 text-sm italic">"{t.comment}"</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8 animate-slide-up">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/90 rounded-xl shadow p-4 cursor-pointer hover:bg-pink-50 transition-all duration-300 animate-float" onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-pink-700">{faq.question}</span>
                <span className={`text-xl transition-transform duration-300 ${faqOpen === i ? 'rotate-90 text-green-500' : 'text-pink-400'}`}>▶</span>
              </div>
              {faqOpen === i && (
                <div className="mt-2 text-gray-700 animate-fade-in">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-green-50 to-pink-50 animate-fade-in">
        <div className="max-w-4xl mx-auto rounded-3xl shadow-xl bg-white/90 p-10 animate-slide-up">
          <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Liên hệ với chúng tôi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-4">
              <input type="text" placeholder="Họ tên" className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400" />
              <input type="text" placeholder="Số điện thoại" className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400" />
              <textarea placeholder="Nội dung liên hệ" className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400" rows={4}></textarea>
              <button type="submit" className="w-full py-3 bg-pink-500 text-white rounded-xl font-semibold shadow-lg hover:bg-pink-600 transition-all duration-300">Gửi liên hệ</button>
            </form>
            <div className="flex flex-col justify-center space-y-4 text-gray-700">
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-pink-600">📞</span>
                <span className="font-semibold">Hotline:</span>
                <a href="tel:0397090051" className="text-green-600 font-bold hover:underline">0397 090 051</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-pink-600">📍</span>
                <span className="font-semibold">Địa chỉ:</span>
                <span>123 Hoa Hồng, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-pink-600">✉️</span>
                <span className="font-semibold">Email:</span>
                <a href="mailto:thonglyngocs@gmail.com" className="text-blue-600 font-bold hover:underline">thonglyngocs@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <a href="#" className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xl hover:bg-pink-200 transition"><i className="fab fa-facebook-f">f</i></a>
                <a href="#" className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xl hover:bg-pink-200 transition"><i className="fab fa-instagram">i</i></a>
                <a href="#" className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xl hover:bg-pink-200 transition"><i className="fab fa-tiktok">t</i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-pink-700 text-white py-16 mt-10 overflow-hidden animate-fade-in">
        {/* Trống đồng background */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none z-0">
          <img
            src="/Ecomerce/trong_dong_xoa.png"
            alt="trong dong"
            className="w-72 h-72 md:w-[400px] md:h-[400px] opacity-20 animate-rotate-slow"
            style={{ filter: 'drop-shadow(0 0 40px #fff6)' }}
          />
        </div>
        {/* Nội dung footer overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🌸</span>
            <span className="font-bold text-xl">Hoa Tươi Thịnh Vượng</span>
          </div>
          <div className="text-center md:text-left">
            <div className="mb-2">Hotline: <a href="tel:0397090051" className="font-bold text-green-300 hover:underline">0397 090 051</a></div>
            <div className="mb-2">Địa chỉ: 123 Hoa Hồng, Quận 1, TP.HCM</div>
            <div>Email: <a href="mailto:thonglyngocs@gmail.com" className="font-bold text-blue-200 hover:underline">thonglyngocs@gmail.com</a></div>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-white/40 transition"><i className="fab fa-facebook-f">f</i></a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-white/40 transition"><i className="fab fa-instagram">i</i></a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-white/40 transition"><i className="fab fa-tiktok">t</i></a>
          </div>
        </div>
        <div className="relative z-10 text-center text-pink-100 mt-6">© 2024 Hoa Tươi Thịnh Vượng. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default IndexEComerece;
