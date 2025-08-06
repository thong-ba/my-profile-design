import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#F2EDD1' }}>
      {/* Floating cursor effect */}
      <div 
        className="fixed w-8 h-8 pointer-events-none z-40 mix-blend-difference transition-transform duration-75 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: `scale(${scrollY > 100 ? 1.5 : 1})`,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-purple-200/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-white font-bold text-xl animate-pulse">L</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-slide-up">
                  Portfolio
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {['Giới thiệu', 'Kỹ năng', 'Dự án', 'Thành tích', 'Kiến thức', 'Liên hệ'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="relative px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 group rounded-full hover:bg-white/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-8"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-purple-600' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-purple-600' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-6 pb-4 space-y-3">
              {['Giới thiệu', 'Kỹ năng', 'Thành tích', 'Dự án', 'Kiến thức', 'Liên hệ'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="block py-3 px-6 text-gray-700 hover:text-purple-600 hover:bg-white/40 rounded-2xl transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl animate-float" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-green-400/25 to-emerald-400/25 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Animated greeting */}
            <div className="inline-flex items-center px-6 py-3 bg-white/30 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 font-medium">Xin chào! Tôi là</span>
            </div>

            {/* Animated name */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black text-gray-800 leading-tight">
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>Lý</span>{' '}
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.4s' }}>Ngọc</span>{' '}
                <span className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.6s' }}>Thông</span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <p className="text-2xl lg:text-3xl text-gray-600 font-semibold">
                  Frontend Developer
                </p>
                <div className="h-px w-16 bg-gradient-to-l from-purple-500 to-pink-500"></div>
              </div>
            </div>

            {/* Description with typewriter effect */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '1s' }}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Mong muốn làm vị trí <span className="font-semibold text-purple-600">Frontend Developer</span> phát triển website UI với đam mê sáng tạo và công nghệ
              </p>
              <p className="text-lg text-gray-500 max-w-xl mx-auto lg:mx-0">
                Thành công tốt nghiệp và làm việc tại công ty công nghệ hàng đầu
              </p>
            </div>

            {/* Animated CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Khám phá Portfolio</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-purple-400 hover:text-purple-600 hover:bg-white/50 transition-all duration-300 backdrop-blur-sm group">
                <span className="flex items-center space-x-2">
                  <span>Liên hệ ngay</span>
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-slide-up" style={{ animationDelay: '1.4s' }}>
              {[
                { number: '4+', label: 'Năm kinh nghiệm', icon: '⏰' },
                { number: '20+', label: 'Dự án hoàn thành', icon: '🚀' },
                { number: '10+', label: 'Khách hàng hài lòng', icon: '😊' },
                { number: '10+', label: 'Giải thưởng', icon: '🏆' }
              ].map((stat, index) => (
                <div key={index} className="text-center group p-4 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Tech GIF and animations */}
          <div className="relative flex items-center justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Main tech gif container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl group hover:scale-105 transition-all duration-500">
                <img 
                  src="/tech.gif" 
                  alt="Technology Animation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-pink-500/20 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg animate-float text-white font-bold text-xl" style={{ animationDelay: '0s' }}>
                ⚛️
              </div>
              <div className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-float text-white font-bold text-lg" style={{ animationDelay: '2s' }}>
                JS
              </div>
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg animate-float text-white font-bold text-lg" style={{ animationDelay: '4s' }}>
                💻
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg animate-float text-white font-bold text-xl" style={{ animationDelay: '1s' }}>
                🎨
              </div>
              
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-3xl border-4 border-gradient-to-r from-purple-500 via-pink-500 to-orange-400 opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-gray-600">
            <span className="text-sm font-medium">Cuộn xuống</span>
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full p-1 relative">
              <div className="w-1 h-3 bg-purple-400 rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="gioithieu" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#F2EDD1' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
          <div className="absolute bottom-40 right-32 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-3xl animate-float" style={{ animationDelay: '3s', animationDuration: '10s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/40 backdrop-blur-md rounded-full border border-white/30 shadow-lg mb-6 animate-slide-up">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 font-semibold">Về tôi</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Giới thiệu bản thân
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Khám phá hành trình và câu chuyện đằng sau những sáng tạo của tôi trong lĩnh vực phát triển web
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Personal Info Card */}
            <div className="order-2 lg:order-1 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Thông tin cá nhân</h3>
                </div>
                
                <div className="space-y-5">
                  {[
                    { icon: '👤', label: 'Họ tên', value: 'Lý Ngọc Thông', color: 'from-blue-500 to-cyan-500' },
                    { icon: '🎂', label: 'Tuổi', value: '24 tuổi', color: 'from-purple-500 to-pink-500' },
                    { icon: '📍', label: 'Địa chỉ', value: 'Hóc Môn, TP.HCM', color: 'from-green-500 to-emerald-500' },
                    { icon: '📧', label: 'Email', value: 'thonglyngocse@gmail.com', color: 'from-orange-500 to-red-500' },
                    { icon: '📱', label: 'Điện thoại', value: '+84 397 090 051', color: 'from-indigo-500 to-purple-500' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-5 p-4 rounded-2xl hover:bg-white/40 transition-all duration-300 group/item cursor-pointer" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300`}>
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-700 block text-lg">{item.label}</span>
                        <span className="text-gray-600 font-medium">{item.value}</span>
                      </div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Story Card */}
            <div className="order-1 lg:order-2 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="relative">
                {/* Floating elements around story card */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg animate-float text-white font-bold" style={{ animationDelay: '1s' }}>
                  ✨
                </div>
                <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg animate-float text-white font-bold" style={{ animationDelay: '2s' }}>
                  🚀
                </div>
                
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group relative overflow-hidden">
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:rotate-12 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold">Câu chuyện của tôi</h3>
                    </div>
                    
                    <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                      <p className="hover:text-white transition-colors duration-300">
                        Từng là <span className="font-semibold text-yellow-200">leader</span> của các dự án môn học SWP, SEP, có kinh nghiệm phân phối công việc theo tiến độ báo cáo kịp thời gian nộp cho nhà trường
                      </p>
                      <p className="hover:text-white transition-colors duration-300">
                        Mong muốn có thể thành công trong kỳ làm đồ án và vượt qua giai đoạn <span className="font-semibold text-cyan-200">bảo vệ đồ án</span> với kết quả xuất sắc
                      </p>
                    </div>

                    {/* Enhanced Achievement Numbers */}
                    <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-white/20">
                      <div className="text-center group/achievement">
                        <div className="text-4xl font-black group-hover/achievement:scale-110 transition-transform duration-300">2019</div>
                        <div className="text-sm text-white/80 font-medium">Bắt đầu học lập trình</div>
                      </div>
                      <div className="text-center group/achievement">
                        <div className="text-4xl font-black group-hover/achievement:scale-110 transition-transform duration-300 animate-pulse">∞</div>
                        <div className="text-sm text-white/80 font-medium">Đam mê học hỏi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="kynang" className="py-24 px-6 relative overflow-hidden bg-white">
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-orange-400/5 to-yellow-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-purple-100/50 backdrop-blur-md rounded-full border border-purple-200/30 shadow-lg mb-6 animate-slide-up">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-purple-700 font-semibold">Chuyên môn</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Kỹ năng & Năng lực
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Khám phá bộ kỹ năng đa dạng và kinh nghiệm chuyên sâu trong phát triển web hiện đại
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Enhanced Technical Skills */}
            <div className="group bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-lg rounded-3xl p-10 border border-blue-200/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Technical Skills</h3>
              </div>
              
              <div className="space-y-8">
                {[
                  { name: 'JavaScript/TypeScript', level: 90, color: 'from-blue-500 to-blue-600', icon: '⚡' },
                  { name: 'React/Next.js', level: 85, color: 'from-cyan-500 to-cyan-600', icon: '⚛️' },
                  { name: 'Node.js/Express', level: 80, color: 'from-blue-600 to-cyan-500', icon: '🚀' }
                ].map((skill, index) => (
                  <div key={index} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover/skill:scale-125 transition-transform duration-300">{skill.icon}</span>
                        <span className="font-semibold text-gray-700 group-hover/skill:text-blue-600 transition-colors text-lg">{skill.name}</span>
                      </div>
                      <div className="bg-blue-100 px-3 py-1 rounded-full">
                        <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="relative w-full bg-blue-100 rounded-full h-4 overflow-hidden shadow-inner">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-2000 ease-out relative group-hover/skill:animate-pulse`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${0.8 + index * 0.3}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Design Skills */}
            <div className="group bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-lg rounded-3xl p-10 border border-purple-200/30 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Design Skills</h3>
              </div>
              
              <div className="space-y-8">
                {[
                  { name: 'UI/UX Design', level: 85, color: 'from-purple-500 to-purple-600', icon: '🎨' },
                  { name: 'Figma/Sketch', level: 90, color: 'from-pink-500 to-pink-600', icon: '🖼️' },
                  { name: 'Adobe Creative Suite', level: 75, color: 'from-purple-600 to-pink-500', icon: '✨' }
                ].map((skill, index) => (
                  <div key={index} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover/skill:scale-125 transition-transform duration-300">{skill.icon}</span>
                        <span className="font-semibold text-gray-700 group-hover/skill:text-purple-600 transition-colors text-lg">{skill.name}</span>
                      </div>
                      <div className="bg-purple-100 px-3 py-1 rounded-full">
                        <span className="text-sm font-bold text-purple-600">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="relative w-full bg-purple-100 rounded-full h-4 overflow-hidden shadow-inner">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-2000 ease-out relative group-hover/skill:animate-pulse`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${1.0 + index * 0.3}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Soft Skills */}
            <div className="group bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-lg rounded-3xl p-10 border border-green-200/30 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105 animate-slide-up" style={{ animationDelay: '1.0s' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Soft Skills</h3>
              </div>
              
              <div className="space-y-5">
                {[
                  { name: 'Teamwork & Collaboration', icon: '🤝', color: 'from-green-500 to-emerald-500' },
                  { name: 'Problem Solving', icon: '🧩', color: 'from-emerald-500 to-teal-500' },
                  { name: 'Communication', icon: '💬', color: 'from-teal-500 to-cyan-500' },
                  { name: 'Project Management', icon: '📋', color: 'from-cyan-500 to-blue-500' },
                  { name: 'Continuous Learning', icon: '📚', color: 'from-blue-500 to-indigo-500' },
                  { name: 'Creative Thinking', icon: '💡', color: 'from-indigo-500 to-purple-500' }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/40 transition-all duration-300 group/item cursor-pointer backdrop-blur-sm border border-white/20 hover:scale-105" style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                    <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300`}>
                      <span className="text-xl">{skill.icon}</span>
                    </div>
                    <span className="font-semibold text-gray-700 group-hover/item:text-green-600 transition-colors text-lg flex-1">{skill.name}</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full group-hover/item:scale-150 group-hover/item:bg-green-400 transition-all duration-300 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#F2EDD1' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-32 w-48 h-48 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '12s' }}></div>
          <div className="absolute bottom-40 right-40 w-36 h-36 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/40 backdrop-blur-md rounded-full border border-white/30 shadow-lg mb-6 animate-slide-up">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 font-semibold">Dự án</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-blue-600 to-purple-500 bg-clip-text text-transparent mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Dự án nổi bật
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Khám phá những dự án thực tế đã thực hiện với công nghệ hiện đại và giải pháp sáng tạo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* HCFB Project - Featured */}
            <div className="group bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 animate-slide-up overflow-hidden" style={{ animationDelay: '0.6s' }}>
              <div className="relative h-56 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white font-semibold text-sm">⭐ Featured</span>
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏥</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-600/20 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Health Care For Baby - HCFB
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dự án SWP quản lý sức khỏe trẻ em (BMI) từ 1-18 tuổi với dashboard tương tác và tính năng theo dõi phát triển
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { name: 'React', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-100', text: 'text-blue-800' },
                    { name: 'TypeScript', color: 'from-blue-600 to-purple-600', bg: 'bg-purple-100', text: 'text-purple-800' },
                    { name: 'Tailwind', color: 'from-cyan-500 to-blue-500', bg: 'bg-cyan-100', text: 'text-cyan-800' },
                    { name: 'C# API', color: 'from-green-500 to-emerald-500', bg: 'bg-green-100', text: 'text-green-800' },
                    { name: 'SQL Server', color: 'from-red-500 to-orange-500', bg: 'bg-red-100', text: 'text-red-800' }
                  ].map((tech, index) => (
                    <span key={index} className={`px-3 py-1 ${tech.bg} ${tech.text} text-sm rounded-full font-medium hover:scale-110 transition-transform duration-200 cursor-pointer`}>
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => navigate('/hcfb')}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Demo Live</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 - E-commerce */}
            <div className="group bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 animate-slide-up overflow-hidden" style={{ animationDelay: '0.8s' }}>
              <div className="relative h-56 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🛒</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  E-commerce Platform
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nền tảng thương mại điện tử với tính năng thanh toán, quản lý đơn hàng và dashboard admin hoàn chỉnh
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { name: 'Vue.js', bg: 'bg-green-100', text: 'text-green-800' },
                    { name: 'JavaScript', bg: 'bg-yellow-100', text: 'text-yellow-800' },
                    { name: 'Firebase', bg: 'bg-orange-100', text: 'text-orange-800' }
                  ].map((tech, index) => (
                    <span key={index} className={`px-3 py-1 ${tech.bg} ${tech.text} text-sm rounded-full font-medium hover:scale-110 transition-transform duration-200 cursor-pointer`}>
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => navigate('/ecommerce')}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Demo Live</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3 - Portfolio */}
            <div className="group bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 animate-slide-up overflow-hidden" style={{ animationDelay: '1.0s' }}>
              <div className="relative h-56 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💼</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  Creative Portfolio
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Website portfolio cá nhân với design hiện đại, animation mượt mà và responsive hoàn hảo trên mọi thiết bị
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { name: 'Next.js', bg: 'bg-gray-100', text: 'text-gray-800' },
                    { name: 'Tailwind', bg: 'bg-blue-100', text: 'text-blue-800' },
                    { name: 'Framer Motion', bg: 'bg-purple-100', text: 'text-purple-800' }
                  ].map((tech, index) => (
                    <span key={index} className={`px-3 py-1 ${tech.bg} ${tech.text} text-sm rounded-full font-medium hover:scale-110 transition-transform duration-200 cursor-pointer`}>
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Demo
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-purple-400 hover:text-purple-600 transition-all duration-300">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 px-6 relative overflow-hidden bg-white">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-32 right-24 w-40 h-40 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '9s' }}></div>
            <div className="absolute bottom-32 left-24 w-52 h-52 bg-gradient-to-br from-purple-300/15 to-pink-300/15 rounded-3xl animate-float" style={{ animationDelay: '3s', animationDuration: '11s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-yellow-100/50 backdrop-blur-md rounded-full border border-yellow-200/30 shadow-lg mb-6 animate-slide-up">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-yellow-700 font-semibold">Thành tích</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-yellow-600 to-orange-500 bg-clip-text text-transparent mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Thành tích nổi bật
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Những cột mốc quan trọng và thành tựu đáng tự hào trong hành trình phát triển sự nghiệp
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Achievement 1 */}
              <div className="group bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-lg rounded-3xl p-8 border border-blue-200/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <span className="text-white text-2xl font-bold">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Leader SWP Project
                </h3>
                <p className="text-blue-600 font-semibold mb-3">Năm 2024</p>
                <p className="text-gray-600 leading-relaxed">
                  Dẫn dắt thành công dự án SWP với vai trò Team Leader, hoàn thành đúng tiến độ và đạt điểm cao
                </p>
              </div>

              {/* Achievement 2 */}
              <div className="group bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-lg rounded-3xl p-8 border border-purple-200/30 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <span className="text-white text-2xl font-bold">📜</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  React Developer Certificate
                </h3>
                <p className="text-purple-600 font-semibold mb-3">Năm 2023</p>
                <p className="text-gray-600 leading-relaxed">
                  Hoàn thành khóa học React chuyên sâu và nhận chứng chỉ với điểm số xuất sắc từ platform học tập
                </p>
              </div>

              {/* Achievement 3 */}
              <div className="group bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-lg rounded-3xl p-8 border border-green-200/30 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-4 animate-slide-up" style={{ animationDelay: '1.0s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <span className="text-white text-2xl font-bold">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  Code Quality Excellence
                </h3>
                <p className="text-green-600 font-semibold mb-3">Năm 2023</p>
                <p className="text-gray-600 leading-relaxed">
                  Đạt mốc quan trọng trong việc viết code clean, maintainable và tuân thủ best practices trong dự án
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Section */}
        <section id="knowledge" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#F2EDD1' }}>
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-40 left-20 w-44 h-44 bg-gradient-to-br from-indigo-300/20 to-blue-300/20 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '13s' }}></div>
            <div className="absolute bottom-40 right-20 w-36 h-36 bg-gradient-to-br from-green-300/20 to-teal-300/20 rounded-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '9s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-white/40 backdrop-blur-md rounded-full border border-white/30 shadow-lg mb-6 animate-slide-up">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-700 font-semibold">Kiến thức</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-indigo-600 to-blue-500 bg-clip-text text-transparent mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Kiến thức & Học vấn
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Nền tảng kiến thức vững chắc và chuyên môn trong các lĩnh vực công nghệ hiện đại
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Education & Knowledge */}
              <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">Kiến thức chuyên môn</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      { 
                        title: 'SQL Server Management', 
                        description: 'Nắm vững các kiến thức về SQL Server Management', 
                        detail: 'Từ cơ bản đến nâng cao',
                        color: 'from-blue-500 to-blue-600',
                        icon: '🗄️'
                      },
                      { 
                        title: 'C# & .NET Development', 
                        description: 'Nắm vững các kiến thức về C# và .NET Framework', 
                        detail: 'Biết get và set các giá trị từ request và response trong API',
                        color: 'from-purple-500 to-purple-600',
                        icon: '⚡'
                      },
                      { 
                        title: 'React & Modern Frontend', 
                        description: 'Có thể tận dụng được JavaScript với TypeScript', 
                        detail: 'Có làm các dự án SWP với SEP liên quan đến JavaScript và TypeScript',
                        color: 'from-cyan-500 to-blue-500',
                        icon: '⚛️'
                      }
                    ].map((knowledge, index) => (
                      <div key={index} className="group p-6 rounded-2xl hover:bg-white/40 transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-indigo-500">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${knowledge.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                            <span className="text-xl">{knowledge.icon}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                              {knowledge.title}
                            </h4>
                            <p className="text-gray-600 mb-2 leading-relaxed">
                              {knowledge.description}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {knowledge.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specialization Areas */}
              <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">Lĩnh vực chuyên môn</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { title: 'Web Development', icon: '💻', color: 'from-blue-500 to-cyan-500' },
                      { title: 'UI/UX Design', icon: '🎨', color: 'from-purple-500 to-pink-500' },
                      { title: 'Mobile Development', icon: '📱', color: 'from-green-500 to-emerald-500' },
                      { title: 'Cloud Computing', icon: '☁️', color: 'from-orange-500 to-red-500' }
                    ].map((field, index) => (
                      <div key={index} className="group bg-white/40 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/60 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
                        <div className={`w-16 h-16 bg-gradient-to-br ${field.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <span className="text-2xl">{field.icon}</span>
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg group-hover:text-indigo-600 transition-colors">
                          {field.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section id="lienhe" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#F2EDD1' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-32 left-24 w-48 h-48 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '14s' }}></div>
          <div className="absolute bottom-32 right-24 w-40 h-40 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/40 backdrop-blur-md rounded-full border border-white/30 shadow-lg mb-6 animate-slide-up">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 font-semibold">Liên hệ</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Liên hệ với tôi
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Sẵn sàng hợp tác và trao đổi về các cơ hội thú vị! Hãy kết nối để tạo nên những điều tuyệt vời cùng nhau.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Thông tin liên hệ</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      title: 'Email',
                      value: 'thonglyngocse@gmail.com',
                      color: 'from-blue-500 to-cyan-500'
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      title: 'Điện thoại',
                      value: '+84 397 090 051',
                      color: 'from-green-500 to-emerald-500'
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      title: 'Địa chỉ',
                      value: 'Hóc Môn, TP.HCM',
                      color: 'from-purple-500 to-pink-500'
                    }
                  ].map((contact, index) => (
                    <div key={index} className="group flex items-center space-x-5 p-5 rounded-2xl hover:bg-white/40 transition-all duration-300 cursor-pointer border border-white/20">
                      <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg text-white`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-800 mb-1 text-lg">{contact.title}</div>
                        <div className="text-gray-600 group-hover:text-gray-800 transition-colors font-medium">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Kết nối qua mạng xã hội</h4>
                  <div className="flex justify-center space-x-4">
                    {[
                      { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-700' },
                      { name: 'GitHub', icon: '🐙', color: 'from-gray-700 to-gray-800' },
                      { name: 'Portfolio', icon: '🎨', color: 'from-purple-600 to-purple-700' },
                      { name: 'Instagram', icon: '📸', color: 'from-pink-500 to-rose-500' }
                    ].map((social, index) => (
                      <button
                        key={index}
                        className={`group w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        title={social.name}
                      >
                        <span className="text-2xl group-hover:scale-125 transition-transform">{social.icon}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg animate-glow">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-center mb-6">Bắt đầu dự án</h3>
                  <p className="text-white/90 text-center mb-8 text-lg leading-relaxed">
                    Có ý tưởng tuyệt vời? Hãy cùng nhau biến nó thành hiện thực với sự sáng tạo và công nghệ!
                  </p>
                  
                  <div className="space-y-4">
                    <button className="w-full bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30 shadow-lg">
                      <span className="flex items-center justify-center space-x-2">
                        <span>Gửi tin nhắn ngay</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    </button>
                    <button className="w-full border-2 border-white/30 text-white font-semibold py-4 px-6 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      <span className="flex items-center justify-center space-x-2">
                        <span>Tải CV của tôi</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <h3 className="text-xl font-bold">Lý Ngọc Thông</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Frontend Developer với đam mê tạo ra những trải nghiệm web tuyệt vời và sáng tạo.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
              <div className="space-y-2">
                {['Giới thiệu', 'Kỹ năng', 'Dự án', 'Liên hệ'].map((item, index) => (
                  <a key={index} href={`#${item.toLowerCase()}`} className="block text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Thông tin liên hệ</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 thonglyngocse@gmail.com</p>
                <p>📱 +84 397 090 051</p>
                <p>📍 Hóc Môn, TP.HCM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Lý Ngọc Thông. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Scroll to Top Button */}
      {scrollY > 400 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-fade-in group"
        >
          <svg className="w-6 h-6 mx-auto group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Homepage; 