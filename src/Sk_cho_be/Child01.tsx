import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';



const Child01 = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('info');

  // Thông tin bé Minh An
  const childInfo = {
    name: 'Nguyễn Minh An',
    age: 7,
    gender: 'Nam',
    height: 120,
    weight: 22.5,
    bmi: 15.6,
    bloodType: 'A+',
    birthDate: '15/03/2017',
    guardian: 'Nguyễn Văn Hùng',
    phone: '0912345678',
    address: 'Quận 1, TP.HCM'
  };

  // Dữ liệu BMI theo thời gian
  const bmiData = [
    { date: '01/01/2024', bmi: 14.2, weight: 20.1, height: 119 },
    { date: '01/03/2024', bmi: 14.8, weight: 21.2, height: 120 },
    { date: '01/05/2024', bmi: 15.1, weight: 21.8, height: 120 },
    { date: '01/07/2024', bmi: 15.3, weight: 22.0, height: 120 },
    { date: '01/09/2024', bmi: 15.4, weight: 22.2, height: 120 },
    { date: '01/11/2024', bmi: 15.5, weight: 22.4, height: 120 },
    { date: '15/12/2024', bmi: 15.6, weight: 22.5, height: 120 }
  ];

  // Hàm phân tích BMI và đưa ra nhận xét
  const analyzeBMI = () => {
    const currentBMI = bmiData[bmiData.length - 1].bmi;
    const bmiTrend = bmiData[bmiData.length - 1].bmi - bmiData[0].bmi;
    const avgBMI = bmiData.reduce((sum, d) => sum + d.bmi, 0) / bmiData.length;
    
    // Phân loại BMI cho trẻ 7 tuổi
    let bmiCategory = '';
    let healthStatus = '';
    let riskLevel = '';
    
    if (currentBMI < 14) {
      bmiCategory = 'Thiếu cân';
      healthStatus = 'Cần tăng cường dinh dưỡng';
      riskLevel = 'Cao';
    } else if (currentBMI < 16) {
      bmiCategory = 'Thiếu cân nhẹ';
      healthStatus = 'Cần cải thiện dinh dưỡng';
      riskLevel = 'Trung bình';
    } else if (currentBMI < 18) {
      bmiCategory = 'Bình thường';
      healthStatus = 'Phát triển tốt';
      riskLevel = 'Thấp';
    } else if (currentBMI < 20) {
      bmiCategory = 'Thừa cân nhẹ';
      healthStatus = 'Cần kiểm soát cân nặng';
      riskLevel = 'Trung bình';
    } else {
      bmiCategory = 'Thừa cân';
      healthStatus = 'Cần giảm cân';
      riskLevel = 'Cao';
    }

    return {
      currentBMI,
      bmiCategory,
      healthStatus,
      riskLevel,
      bmiTrend,
      avgBMI,
      trendDirection: bmiTrend > 0 ? 'Tăng' : bmiTrend < 0 ? 'Giảm' : 'Ổn định'
    };
  };

  // Hàm dự đoán BMI trong tương lai
  const predictBMI = () => {
    const analysis = analyzeBMI();
    const months = 6; // Dự đoán 6 tháng tới
    
    // Tính tốc độ tăng trưởng BMI trung bình mỗi tháng
    const monthlyGrowth = analysis.bmiTrend / bmiData.length;
    
    // Dự đoán BMI trong 6 tháng tới
    const predictedBMI = analysis.currentBMI + (monthlyGrowth * months);
    
    let prediction = '';
    let recommendation = '';
    
    if (predictedBMI < 16) {
      prediction = 'BMI có thể vẫn ở mức thiếu cân';
      recommendation = 'Cần tăng cường dinh dưỡng đáng kể';
    } else if (predictedBMI < 18) {
      prediction = 'BMI sẽ ở mức bình thường';
      recommendation = 'Duy trì chế độ dinh dưỡng hiện tại';
    } else if (predictedBMI < 20) {
      prediction = 'BMI có thể tăng lên mức thừa cân nhẹ';
      recommendation = 'Cần kiểm soát chế độ ăn';
    } else {
      prediction = 'BMI có thể tăng lên mức thừa cân';
      recommendation = 'Cần có kế hoạch giảm cân';
    }

    return {
      predictedBMI: predictedBMI.toFixed(1),
      prediction,
      recommendation,
      monthlyGrowth: monthlyGrowth.toFixed(2)
    };
  };

  // Hàm đưa ra khuyến nghị dinh dưỡng
  const getNutritionRecommendations = () => {
    const analysis = analyzeBMI();
    
    if (analysis.bmiCategory.includes('Thiếu cân')) {
      return {
        title: 'Kế hoạch tăng cân lành mạnh',
        recommendations: [
          'Tăng cường protein: Thịt, cá, trứng, sữa (3-4 bữa/ngày)',
          'Bổ sung chất béo tốt: Dầu olive, bơ, hạt óc chó',
          'Tăng khẩu phần tinh bột: Cơm, bánh mì, khoai tây',
          'Ăn thêm 2-3 bữa phụ với sữa, trái cây, bánh ngọt',
          'Uống 1-1.5 lít nước/ngày'
        ],
        foods: ['Thịt bò', 'Cá hồi', 'Trứng', 'Sữa tươi', 'Bơ', 'Hạt óc chó', 'Chuối', 'Bơ đậu phộng'],
        avoid: ['Đồ ăn nhanh', 'Nước ngọt', 'Bánh kẹo nhiều đường']
      };
    } else if (analysis.bmiCategory.includes('Thừa cân')) {
      return {
        title: 'Kế hoạch kiểm soát cân nặng',
        recommendations: [
          'Giảm đồ ăn nhiều đường và chất béo',
          'Tăng cường rau xanh và trái cây (5 phần/ngày)',
          'Chọn protein nạc: Thịt gà, cá, đậu',
          'Hạn chế đồ ăn nhanh và nước ngọt',
          'Ăn chậm, nhai kỹ'
        ],
        foods: ['Rau xanh', 'Trái cây', 'Thịt gà', 'Cá', 'Đậu', 'Sữa ít béo', 'Ngũ cốc nguyên hạt'],
        avoid: ['Đồ ăn nhanh', 'Nước ngọt', 'Bánh kẹo', 'Thịt mỡ', 'Đồ chiên rán']
      };
    } else {
      return {
        title: 'Duy trì chế độ dinh dưỡng cân bằng',
        recommendations: [
          'Ăn đủ 4 nhóm chất: Đạm, đường, chất béo, vitamin',
          'Tăng cường rau xanh và trái cây',
          'Uống đủ nước (1-1.5 lít/ngày)',
          'Hạn chế đồ ăn nhanh và nước ngọt',
          'Ăn đúng giờ, không bỏ bữa'
        ],
        foods: ['Thịt nạc', 'Cá', 'Rau xanh', 'Trái cây', 'Sữa', 'Ngũ cốc', 'Đậu'],
        avoid: ['Đồ ăn nhanh', 'Nước ngọt', 'Bánh kẹo nhiều đường']
      };
    }
  };

  // Hàm đưa ra khuyến nghị tập luyện
  const getExerciseRecommendations = () => {
    const analysis = analyzeBMI();
    
    if (analysis.bmiCategory.includes('Thiếu cân')) {
      return {
        title: 'Tập luyện tăng cơ và sức khỏe',
        recommendations: [
          'Tập thể dục nhẹ nhàng 30-45 phút/ngày',
          'Đi bộ, đạp xe, bơi lội',
          'Chơi thể thao: Bóng đá, bóng rổ',
          'Tập yoga hoặc võ thuật',
          'Tránh tập quá sức'
        ],
        activities: ['Đi bộ', 'Đạp xe', 'Bơi lội', 'Bóng đá', 'Bóng rổ', 'Yoga', 'Võ thuật'],
        frequency: '5-6 ngày/tuần, 30-45 phút/ngày',
        intensity: 'Nhẹ đến trung bình'
      };
    } else if (analysis.bmiCategory.includes('Thừa cân')) {
      return {
        title: 'Tập luyện giảm cân và tăng cường sức khỏe',
        recommendations: [
          'Tập cardio 45-60 phút/ngày',
          'Chạy bộ, đạp xe, bơi lội',
          'Tập thể dục nhóm: Zumba, aerobic',
          'Chơi thể thao cường độ cao',
          'Kết hợp tập sức mạnh'
        ],
        activities: ['Chạy bộ', 'Đạp xe', 'Bơi lội', 'Zumba', 'Aerobic', 'Bóng đá', 'Bóng rổ'],
        frequency: '6-7 ngày/tuần, 45-60 phút/ngày',
        intensity: 'Trung bình đến cao'
      };
    } else {
      return {
        title: 'Tập luyện duy trì sức khỏe',
        recommendations: [
          'Tập thể dục đa dạng 30-45 phút/ngày',
          'Kết hợp cardio và sức mạnh',
          'Chơi thể thao yêu thích',
          'Hoạt động ngoài trời',
          'Tập yoga hoặc võ thuật'
        ],
        activities: ['Đi bộ', 'Đạp xe', 'Bơi lội', 'Bóng đá', 'Bóng rổ', 'Yoga', 'Võ thuật'],
        frequency: '5-6 ngày/tuần, 30-45 phút/ngày',
        intensity: 'Trung bình'
      };
    }
  };

  const healthHistory = [
    { date: '15/12/2024', type: 'Khám định kỳ', result: 'Bình thường', doctor: 'BS. Trần Thị Mai' },
    { date: '10/09/2024', type: 'Tiêm phòng', result: 'Hoàn thành', doctor: 'BS. Lê Văn Đức' },
    { date: '05/06/2024', type: 'Khám bệnh', result: 'Cảm cúm nhẹ', doctor: 'BS. Phạm Thị Lan' },
    { date: '20/03/2024', type: 'Khám định kỳ', result: 'Phát triển tốt', doctor: 'BS. Trần Thị Mai' }
  ];

  const vaccinations = [
    { name: 'Vaccine COVID-19', date: '10/09/2024', nextDue: '10/03/2025' },
    { name: 'Vaccine cúm mùa', date: '15/08/2024', nextDue: '15/08/2025' },
    { name: 'Vaccine DPT', date: '20/01/2023', nextDue: 'Hoàn thành' },
    { name: 'Vaccine sởi', date: '15/10/2022', nextDue: 'Hoàn thành' }
  ];

  // Custom tooltip cho biểu đồ
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{`Ngày: ${label}`}</p>
          <p className="text-blue-600">{`BMI: ${payload[0].value}`}</p>
          <p className="text-green-600">{`Cân nặng: ${payload[1]?.value || payload[0].payload.weight}kg`}</p>
          <p className="text-purple-600">{`Chiều cao: ${payload[1]?.payload?.height || payload[0].payload.height}cm`}</p>
        </div>
      );
    }
    return null;
  };

  // Lấy dữ liệu phân tích
  const bmiAnalysis = analyzeBMI();
  const bmiPrediction = predictBMI();
  const nutritionPlan = getNutritionRecommendations();
  const exercisePlan = getExerciseRecommendations();

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
              onClick={() => navigate('/hcfb')}
              className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors bg-white/60 px-4 py-2 rounded-lg hover:bg-white/80"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Quay về HCFB</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-2 animate-slide-up">
              👦 Hồ Sơ Sức Khỏe
            </h1>
            <p className="text-lg text-gray-600 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Theo dõi sức khỏe toàn diện cho bé {childInfo.name}
            </p>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Child Profile Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 mb-8 border border-green-200 animate-slide-up">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img src="/boy.png" alt="Boy" className="w-32 h-32 mx-auto mb-4 animate-bounce-in" />
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  {bmiAnalysis.healthStatus}
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{childInfo.name}</h2>
              <p className="text-xl text-gray-600 mb-4">{childInfo.age} tuổi • {childInfo.gender}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50/80 rounded-lg p-4 text-center border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{childInfo.height}cm</div>
                  <div className="text-sm text-gray-600">Chiều cao</div>
                </div>
                <div className="bg-green-50/80 rounded-lg p-4 text-center border border-green-200">
                  <div className="text-2xl font-bold text-green-600">{childInfo.weight}kg</div>
                  <div className="text-sm text-gray-600">Cân nặng</div>
                </div>
                <div className="bg-purple-50/80 rounded-lg p-4 text-center border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">{childInfo.bmi}</div>
                  <div className="text-sm text-gray-600">BMI</div>
                </div>
                <div className="bg-red-50/80 rounded-lg p-4 text-center border border-red-200">
                  <div className="text-2xl font-bold text-red-600">{childInfo.bloodType}</div>
                  <div className="text-sm text-gray-600">Nhóm máu</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><span className="font-semibold">Ngày sinh:</span> {childInfo.birthDate}</div>
                <div><span className="font-semibold">Người giám hộ:</span> {childInfo.guardian}</div>
                <div><span className="font-semibold">Số điện thoại:</span> {childInfo.phone}</div>
                <div><span className="font-semibold">Địa chỉ:</span> {childInfo.address}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-green-200 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'info', label: 'Thông tin chi tiết', icon: '📋' },
                { id: 'history', label: 'Lịch sử khám', icon: '🏥' },
                { id: 'vaccine', label: 'Tiêm phòng', icon: '💉' },
                { id: 'growth', label: 'Phát triển', icon: '📈' },
                { id: 'analysis', label: 'Phân tích AI', icon: '🤖' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                    selectedTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {/* Tab Content */}
            {selectedTab === 'info' && (
              <div className="space-y-6 animate-slide-up">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Thông tin chi tiết</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50/80 rounded-lg p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-3">Thông tin cơ bản</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Họ và tên:</span> {childInfo.name}</p>
                      <p><span className="font-medium">Giới tính:</span> {childInfo.gender}</p>
                      <p><span className="font-medium">Tuổi:</span> {childInfo.age} tuổi</p>
                      <p><span className="font-medium">Ngày sinh:</span> {childInfo.birthDate}</p>
                      <p><span className="font-medium">Nhóm máu:</span> {childInfo.bloodType}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50/80 rounded-lg p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-3">Liên hệ</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Người giám hộ:</span> {childInfo.guardian}</p>
                      <p><span className="font-medium">Số điện thoại:</span> {childInfo.phone}</p>
                      <p><span className="font-medium">Địa chỉ:</span> {childInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'history' && (
              <div className="space-y-6 animate-slide-up">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lịch sử khám bệnh</h3>
                <div className="space-y-4">
                  {healthHistory.map((record, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white/60">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl">🏥</span>
                            <div>
                              <h4 className="font-semibold text-gray-800">{record.type}</h4>
                              <p className="text-sm text-gray-600">{record.date}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-1"><span className="font-medium">Kết quả:</span> {record.result}</p>
                          <p className="text-sm text-gray-600"><span className="font-medium">Bác sĩ:</span> {record.doctor}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'vaccine' && (
              <div className="space-y-6 animate-slide-up">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lịch sử tiêm phòng</h3>
                <div className="grid gap-4">
                  {vaccinations.map((vaccine, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white/60">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">💉</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">{vaccine.name}</h4>
                            <p className="text-sm text-gray-600">Ngày tiêm: {vaccine.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-800">Lần tiếp theo:</p>
                          <p className={`text-sm ${vaccine.nextDue === 'Hoàn thành' ? 'text-green-600' : 'text-blue-600'}`}>
                            {vaccine.nextDue}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'growth' && (
              <div className="space-y-6 animate-slide-up">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Biểu đồ phát triển BMI</h3>
                
                {/* BMI Chart */}
                <div className="bg-white/60 rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Theo dõi chỉ số BMI theo thời gian</h4>
                  
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={bmiData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="date" 
                          stroke="#6b7280"
                          fontSize={12}
                          tick={{ fill: '#6b7280' }}
                        />
                        <YAxis 
                          stroke="#6b7280"
                          fontSize={12}
                          tick={{ fill: '#6b7280' }}
                          domain={[13, 17]}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area 
                          type="monotone" 
                          dataKey="bmi" 
                          stroke="#10b981" 
                          strokeWidth={3}
                          fill="url(#bmiGradient)"
                          fillOpacity={0.3}
                        />
                        <defs>
                          <linearGradient id="bmiGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* BMI Analysis */}
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50/80 rounded-lg p-4 border border-green-200">
                      <h5 className="font-semibold text-green-800 mb-2">BMI Hiện tại</h5>
                      <p className="text-2xl font-bold text-green-600">{bmiData[bmiData.length - 1].bmi}</p>
                      <p className="text-sm text-green-700">Cập nhật: {bmiData[bmiData.length - 1].date}</p>
                    </div>
                    
                    <div className="bg-blue-50/80 rounded-lg p-4 border border-blue-200">
                      <h5 className="font-semibold text-blue-800 mb-2">Tăng trưởng</h5>
                      <p className="text-2xl font-bold text-blue-600">+{(bmiData[bmiData.length - 1].bmi - bmiData[0].bmi).toFixed(1)}</p>
                      <p className="text-sm text-blue-700">Từ đầu năm</p>
                    </div>
                    
                    <div className="bg-purple-50/80 rounded-lg p-4 border border-purple-200">
                      <h5 className="font-semibold text-purple-800 mb-2">Đánh giá</h5>
                      <p className="text-lg font-bold text-purple-600">Bình thường</p>
                      <p className="text-sm text-purple-700">Theo độ tuổi</p>
                    </div>
                  </div>
                </div>

                {/* Growth Statistics */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/60 rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Thống kê chi tiết</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">BMI thấp nhất:</span>
                        <span className="font-semibold text-blue-600">{Math.min(...bmiData.map(d => d.bmi))}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">BMI cao nhất:</span>
                        <span className="font-semibold text-red-600">{Math.max(...bmiData.map(d => d.bmi))}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">BMI trung bình:</span>
                        <span className="font-semibold text-green-600">{(bmiData.reduce((sum, d) => sum + d.bmi, 0) / bmiData.length).toFixed(1)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Số lần đo:</span>
                        <span className="font-semibold text-purple-600">{bmiData.length}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/60 rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Khuyến nghị</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <span className="text-green-500 text-xl">✅</span>
                        <div>
                          <p className="font-medium text-gray-800">Duy trì chế độ ăn</p>
                          <p className="text-sm text-gray-600">Tiếp tục chế độ dinh dưỡng hiện tại</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-blue-500 text-xl">📈</span>
                        <div>
                          <p className="font-medium text-gray-800">Tăng cường vận động</p>
                          <p className="text-sm text-gray-600">Khuyến khích hoạt động thể chất</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-purple-500 text-xl">📅</span>
                        <div>
                          <p className="font-medium text-gray-800">Khám định kỳ</p>
                          <p className="text-sm text-gray-600">Kiểm tra sức khỏe 3 tháng/lần</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'analysis' && (
              <div className="space-y-6 animate-slide-up">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🤖 Phân tích AI & Khuyến nghị</h3>
                
                {/* BMI Analysis Summary */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">Phân loại BMI</h5>
                    <p className="text-lg font-bold text-blue-600">{bmiAnalysis.bmiCategory}</p>
                  </div>
                  <div className="bg-green-50/80 rounded-xl p-4 border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-2">Tình trạng sức khỏe</h5>
                    <p className="text-lg font-bold text-green-600">{bmiAnalysis.healthStatus}</p>
                  </div>
                  <div className="bg-yellow-50/80 rounded-xl p-4 border border-yellow-200">
                    <h5 className="font-semibold text-yellow-800 mb-2">Mức độ rủi ro</h5>
                    <p className="text-lg font-bold text-yellow-600">{bmiAnalysis.riskLevel}</p>
                  </div>
                  <div className="bg-purple-50/80 rounded-xl p-4 border border-purple-200">
                    <h5 className="font-semibold text-purple-800 mb-2">Xu hướng</h5>
                    <p className="text-lg font-bold text-purple-600">{bmiAnalysis.trendDirection}</p>
                  </div>
                </div>

                {/* BMI Prediction */}
                <div className="bg-white/60 rounded-2xl p-6 border border-gray-200 mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">🔮 Dự đoán BMI trong 6 tháng tới</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200 mb-4">
                        <h5 className="font-semibold text-blue-800 mb-2">Dự đoán</h5>
                        <p className="text-2xl font-bold text-blue-600">{bmiPrediction.predictedBMI}</p>
                        <p className="text-sm text-blue-700">{bmiPrediction.prediction}</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                        <h5 className="font-semibold text-green-800 mb-2">Tốc độ tăng trưởng</h5>
                        <p className="text-lg font-bold text-green-600">+{bmiPrediction.monthlyGrowth}/tháng</p>
                        <p className="text-sm text-green-700">Tăng trưởng BMI trung bình</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50/80 rounded-lg p-4 border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-2">Khuyến nghị</h5>
                      <p className="text-gray-700">{bmiPrediction.recommendation}</p>
                    </div>
                  </div>
                </div>

                {/* Nutrition Plan */}
                <div className="bg-white/60 rounded-2xl p-6 border border-gray-200 mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">🥗 Kế hoạch dinh dưỡng</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-green-800 mb-3">{nutritionPlan.title}</h5>
                      <div className="space-y-2">
                        {nutritionPlan.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <span className="text-green-500 mt-1">•</span>
                            <p className="text-sm text-gray-700">{rec}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-3">Thực phẩm khuyến nghị</h5>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {nutritionPlan.foods.map((food, index) => (
                          <div key={index} className="bg-green-50/60 rounded px-2 py-1 text-sm text-green-700">
                            {food}
                          </div>
                        ))}
                      </div>
                      <h5 className="font-semibold text-red-800 mb-3">Thực phẩm hạn chế</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {nutritionPlan.avoid.map((food, index) => (
                          <div key={index} className="bg-red-50/60 rounded px-2 py-1 text-sm text-red-700">
                            {food}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exercise Plan */}
                <div className="bg-white/60 rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">🏃‍♂️ Kế hoạch tập luyện</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-3">{exercisePlan.title}</h5>
                      <div className="space-y-2 mb-4">
                        {exercisePlan.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <p className="text-sm text-gray-700">{rec}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-blue-50/80 rounded-lg p-4 border border-blue-200">
                        <h6 className="font-semibold text-blue-800 mb-2">Lịch tập luyện</h6>
                        <p className="text-sm text-blue-700"><span className="font-medium">Tần suất:</span> {exercisePlan.frequency}</p>
                        <p className="text-sm text-blue-700"><span className="font-medium">Cường độ:</span> {exercisePlan.intensity}</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-800 mb-3">Hoạt động thể thao</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {exercisePlan.activities.map((activity, index) => (
                          <div key={index} className="bg-purple-50/60 rounded px-3 py-2 text-sm text-purple-700 text-center">
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Child01;
