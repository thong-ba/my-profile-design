import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IndexHCFB = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState('');

  // Hàm tính BMI
  const calculateBMI = () => {
    if (weight && height && age) {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
      const heightInMeters = heightNum / 100;
      const calculatedBMI = parseFloat((weightNum / (heightInMeters * heightInMeters)).toFixed(1));
      setBmi(calculatedBMI);
      
      // Phân loại BMI cho trẻ em (đơn giản hóa)
      const ageNum = parseInt(age);
      if (ageNum >= 1 && ageNum <= 18) {
        if (calculatedBMI < 16) {
          setBmiCategory('Thiếu cân nghiêm trọng');
        } else if (calculatedBMI < 18.5) {
          setBmiCategory('Thiếu cân');
        } else if (calculatedBMI < 25) {
          setBmiCategory('Bình thường');
        } else if (calculatedBMI < 30) {
          setBmiCategory('Thừa cân');
        } else {
          setBmiCategory('Béo phì');
        }
      }
    }
  };

  const resetForm = () => {
    setAge('');
    setWeight('');
    setHeight('');
    setBmi(null);
    setBmiCategory('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#E8FFD7' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-lg shadow-lg border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors bg-white/60 px-4 py-2 rounded-lg hover:bg-white/80"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Quay về Portfolio</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-2 animate-slide-up">
              🏥 Trung Tâm Sức Khỏe Trẻ Em
            </h1>
            <p className="text-lg text-gray-600 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Chăm sóc sức khỏe toàn diện cho trẻ từ 1-18 tuổi
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-slide-up">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 mb-8 border border-green-200">
            <div className="flex justify-center items-center mb-6">
              <img src="/male_doctor.png" alt="Doctor" className="w-24 h-24 mr-4 animate-bounce-in" />
              <img src="/female_doctor.png" alt="Doctor" className="w-24 h-24 animate-bounce-in" style={{ animationDelay: '0.3s' }} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Theo Dõi Chỉ Số BMI Của Con Bạn
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              BMI (Body Mass Index) là chỉ số quan trọng để đánh giá tình trạng dinh dưỡng của trẻ. 
              Hãy sử dụng công cụ bên dưới để tính toán và theo dõi sức khỏe của con bạn.
            </p>
          </div>
        </section>

        {/* BMI Calculator */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Calculator Form */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-green-200 animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🧮 Công Cụ Tính BMI
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tuổi (1-18 tuổi)
                </label>
                <input
                  type="number"
                  min="1"
                  max="18"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/60"
                  placeholder="Nhập tuổi của bé"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cân nặng (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/60"
                  placeholder="Nhập cân nặng"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chiều cao (cm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/60"
                  placeholder="Nhập chiều cao"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateBMI}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 font-medium hover:scale-105 transform"
                >
                  Tính BMI
                </button>
                <button
                  onClick={resetForm}
                  className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-300 font-medium hover:scale-105 transform"
                >
                  Làm mới
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-green-200 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📊 Kết Quả
            </h3>
            
            {bmi ? (
              <div className="text-center space-y-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2 animate-bounce-in">
                    {bmi}
                  </div>
                  <div className="text-lg text-gray-600">Chỉ số BMI</div>
                </div>
                
                <div className={`rounded-xl p-6 border ${
                  bmiCategory === 'Bình thường' ? 'bg-green-50 text-green-800 border-green-200' :
                  bmiCategory === 'Thiếu cân' || bmiCategory === 'Thiếu cân nghiêm trọng' ? 'bg-yellow-50 text-yellow-800 border-yellow-200' :
                  'bg-red-50 text-red-800 border-red-200'
                }`}>
                  <div className="text-xl font-semibold mb-2">
                    Phân loại: {bmiCategory}
                  </div>
                  <div className="text-sm">
                    {bmiCategory === 'Bình thường' && 'Con bạn có cân nặng phù hợp với tuổi!'}
                    {bmiCategory === 'Thiếu cân' && 'Nên tăng cường dinh dưỡng cho bé'}
                    {bmiCategory === 'Thiếu cân nghiêm trọng' && 'Cần tham khảo ý kiến bác sĩ'}
                    {bmiCategory === 'Thừa cân' && 'Nên kiểm soát chế độ ăn và tăng vận động'}
                    {bmiCategory === 'Béo phì' && 'Cần có kế hoạch giảm cân phù hợp'}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4 animate-pulse">📈</div>
                <p>Nhập đầy đủ thông tin để xem kết quả BMI</p>
              </div>
            )}
          </div>
        </section>

        {/* Children Profiles Section */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 mb-16 border border-green-200 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            👨‍👩‍👧‍👦 Hồ Sơ Trẻ Em
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Child 1 - Minh An */}
            <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 rounded-2xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-slide-up"
                 onClick={() => navigate('/hcfb/child01')}>
              <div className="text-center mb-4">
                <img src="/boy.png" alt="Boy" className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Khỏe mạnh
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Nguyễn Minh An
                </h4>
                <p className="text-gray-600">7 tuổi • Nam</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-blue-600">120cm</div>
                    <div className="text-gray-500">Chiều cao</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-blue-600">22.5kg</div>
                    <div className="text-gray-500">Cân nặng</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-sm text-gray-600 mb-3">Khám gần nhất: 15/12/2024</p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium group-hover:scale-105 transform duration-200">
                    Xem hồ sơ chi tiết
                  </button>
                </div>
              </div>
            </div>

            {/* Child 2 - Thúy Linh */}
            <div className="bg-gradient-to-br from-pink-50/80 to-purple-50/80 rounded-2xl p-6 border border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-slide-up" style={{ animationDelay: '0.1s' }}
                 onClick={() => navigate('/hcfb/child02')}>
              <div className="text-center mb-4">
                <img src="/girl.png" alt="Girl" className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  Theo dõi
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                  Trần Thúy Linh
                </h4>
                <p className="text-gray-600">12 tuổi • Nữ</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-pink-600">145cm</div>
                    <div className="text-gray-500">Chiều cao</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-pink-600">38.2kg</div>
                    <div className="text-gray-500">Cân nặng</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-pink-200">
                  <p className="text-sm text-gray-600 mb-3">Khám gần nhất: 20/12/2024</p>
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors font-medium group-hover:scale-105 transform duration-200">
                    Xem hồ sơ chi tiết
                  </button>
                </div>
              </div>
            </div>

            {/* Child 3 - Đức Anh */}
            <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 rounded-2xl p-6 border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-slide-up" style={{ animationDelay: '0.2s' }}
                 onClick={() => navigate('/hcfb/child03')}>
              <div className="text-center mb-4">
                <img src="/boy.png" alt="Boy" className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Rất tốt
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                  Lê Đức Anh
                </h4>
                <p className="text-gray-600">15 tuổi • Nam</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-green-600">165cm</div>
                    <div className="text-gray-500">Chiều cao</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-green-600">55.8kg</div>
                    <div className="text-gray-500">Cân nặng</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-green-200">
                  <p className="text-sm text-gray-600 mb-3">Khám gần nhất: 18/12/2024</p>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium group-hover:scale-105 transform duration-200">
                    Xem hồ sơ chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Profiles Section */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 mb-16 border border-green-200 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            👨‍⚕️ Hồ Sơ Bác Sĩ
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Doctor 1 - BS. Nguyễn Thị Mai Anh */}
            <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 rounded-2xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-slide-up"
                 onClick={() => navigate('/hcfb/doctor1')}>
              <div className="text-center mb-4">
                <img src="/female_doctor.png" alt="Female Doctor" className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Đang khám
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  BS. Nguyễn Thị Mai Anh
                </h4>
                <p className="text-gray-600">Bác sĩ Nhi khoa</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-blue-600">15+</div>
                    <div className="text-gray-500">Năm KN</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-blue-600">2000+</div>
                    <div className="text-gray-500">Bệnh nhi</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-sm text-gray-600 mb-3">Chuyên: Dinh dưỡng trẻ em</p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium group-hover:scale-105 transform duration-200">
                    Xem hồ sơ bác sĩ
                  </button>
                </div>
              </div>
            </div>

            {/* Doctor 2 - BS. Trần Văn Hải */}
            <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-2xl p-6 border border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-slide-up" style={{ animationDelay: '0.1s' }}
                 onClick={() => navigate('/hcfb/doctor2')}>
              <div className="text-center mb-4">
                <img src="/male_doctor.png" alt="Male Doctor" className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Sẵn sàng
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  BS. Trần Văn Hải
                </h4>
                <p className="text-gray-600">Chuyên Hô hấp</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-purple-600">12+</div>
                    <div className="text-gray-500">Năm KN</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-purple-600">1500+</div>
                    <div className="text-gray-500">Bệnh nhi</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-purple-200">
                  <p className="text-sm text-gray-600 mb-3">Chuyên: Hen suyễn, hô hấp</p>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium group-hover:scale-105 transform duration-200">
                    Xem hồ sơ bác sĩ
                  </button>
                </div>
              </div>
            </div>

            {/* Doctor 3 - BS. Lê Thị Minh */}
            <div className="bg-gradient-to-br from-emerald-50/80 to-cyan-50/80 rounded-2xl p-6 border border-emerald-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-slide-up" style={{ animationDelay: '0.2s' }}
                 onClick={() => navigate('/hcfb/doctor3')}>
              <div className="text-center mb-4">
                <img src="/female_doctor.png" alt="Female Doctor" className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Bận
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                  BS. Lê Thị Minh
                </h4>
                <p className="text-gray-600">Chuyên Tim mạch</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-emerald-600">18+</div>
                    <div className="text-gray-500">Năm KN</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <div className="font-semibold text-emerald-600">2500+</div>
                    <div className="text-gray-500">Bệnh nhi</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-emerald-200">
                  <p className="text-sm text-gray-600 mb-3">Chuyên: Tim bẩm sinh</p>
                  <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium group-hover:scale-105 transform duration-200">
                    Xem hồ sơ bác sĩ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Tips */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 mb-16 border border-green-200 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            💡 Lời Khuyên Sức Khỏe
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50/80 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4 animate-bounce">🥗</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Dinh Dưỡng Cân Bằng
              </h4>
              <p className="text-gray-600 text-sm">
                Đảm bảo bé ăn đủ 4 nhóm chất: đạm, đường, chất béo, vitamin và khoáng chất
              </p>
            </div>

            <div className="text-center p-6 bg-green-50/80 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: '0.5s' }}>🏃‍♂️</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Vận Động Thường Xuyên
              </h4>
              <p className="text-gray-600 text-sm">
                Khuyến khích bé tham gia các hoạt động thể chất ít nhất 1 giờ mỗi ngày
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50/80 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: '1s' }}>😴</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Ngủ Đủ Giấc
              </h4>
              <p className="text-gray-600 text-sm">
                Trẻ cần ngủ 8-12 giờ mỗi ngày tùy theo độ tuổi để phát triển khỏe mạnh
              </p>
            </div>
          </div>
        </section>

        {/* Age Groups Guide */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-green-200 animate-slide-up" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            👶 Hướng Dẫn Theo Độ Tuổi
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50/60 to-blue-100/60">
              <h4 className="text-lg font-semibold text-blue-600 mb-3">1-5 tuổi</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cho ăn đa dạng thực phẩm</li>
                <li>• Khuyến khích chơi vận động</li>
                <li>• Theo dõi cân nặng định kỳ</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-50/60 to-green-100/60">
              <h4 className="text-lg font-semibold text-green-600 mb-3">6-12 tuổi</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Xây dựng thói quen ăn uống lành mạnh</li>
                <li>• Tham gia thể thao</li>
                <li>• Hạn chế đồ ăn nhanh</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-purple-50/60 to-purple-100/60">
              <h4 className="text-lg font-semibold text-purple-600 mb-3">13-18 tuổi</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Giáo dục về dinh dưỡng</li>
                <li>• Duy trì hoạt động thể chất</li>
                <li>• Quản lý stress học tập</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-gray-800/90 backdrop-blur-lg text-white py-8 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src="/male_doctor.png" alt="Doctor" className="w-12 h-12 mr-4" />
            <img src="/female_doctor.png" alt="Doctor" className="w-12 h-12" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Trung Tâm Sức Khỏe Trẻ Em</h4>
          <p className="text-gray-400 mb-4">
            Chăm sóc sức khỏe toàn diện - Tương lai khỏe mạnh cho mọi em bé
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-500">
              © 2024 - Luôn tham khảo ý kiến bác sĩ chuyên khoa để có lời khuyên tốt nhất
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexHCFB;
