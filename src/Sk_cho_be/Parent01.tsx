import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface Child {
  id: string;
  name: string;
  age: number;
  gender: string;
  avatar: string;
  lastCheckup: string;
  nextCheckup: string;
  healthStatus: string;
  bmi: number;
  weight: number;
  height: number;
}

interface Notification {
  id: string;
  type: 'appointment' | 'medication' | 'vaccination' | 'general';
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  priority: 'low' | 'medium' | 'high';
  fromDoctor: string;
}

const Parent01 = () => {
  const navigate = useNavigate();
  const [selectedChild, setSelectedChild] = useState<string>('child1');
  const [activeTab, setActiveTab] = useState<'overview' | 'notifications' | 'appointments'>('overview');

  // Dữ liệu trẻ em với thông tin BMI chi tiết
  const children: Child[] = [
    {
      id: 'child1',
      name: 'Nguyễn Minh An',
      age: 7,
      gender: 'Nam',
      avatar: '/boy.png',
      lastCheckup: '2024-12-15',
      nextCheckup: '2025-03-15',
      healthStatus: 'Khỏe mạnh',
      bmi: 15.6,
      weight: 22.5,
      height: 120
    },
    {
      id: 'child2',
      name: 'Nguyễn Thị Mai',
      age: 5,
      gender: 'Nữ',
      avatar: '/girl.png',
      lastCheckup: '2024-11-20',
      nextCheckup: '2025-02-20',
      healthStatus: 'Cần theo dõi',
      bmi: 14.2,
      weight: 18.0,
      height: 110
    },
    {
      id: 'child3',
      name: 'Nguyễn Văn Nam',
      age: 3,
      gender: 'Nam',
      avatar: '/boy.png',
      lastCheckup: '2024-10-10',
      nextCheckup: '2025-01-10',
      healthStatus: 'Khỏe mạnh',
      bmi: 16.1,
      weight: 15.5,
      height: 98
    }
  ];

  // Dữ liệu BMI theo thời gian cho từng trẻ
  const bmiHistoryData = {
    child1: [
      { date: '01/01/2024', bmi: 14.2, weight: 20.1, height: 119 },
      { date: '01/03/2024', bmi: 14.8, weight: 21.2, height: 120 },
      { date: '01/05/2024', bmi: 15.1, weight: 21.8, height: 120 },
      { date: '01/07/2024', bmi: 15.3, weight: 22.0, height: 120 },
      { date: '01/09/2024', bmi: 15.4, weight: 22.2, height: 120 },
      { date: '01/11/2024', bmi: 15.5, weight: 22.4, height: 120 },
      { date: '15/12/2024', bmi: 15.6, weight: 22.5, height: 120 }
    ],
    child2: [
      { date: '01/01/2024', bmi: 13.8, weight: 16.5, height: 109 },
      { date: '01/03/2024', bmi: 14.0, weight: 17.0, height: 110 },
      { date: '01/05/2024', bmi: 14.1, weight: 17.5, height: 110 },
      { date: '01/07/2024', bmi: 14.2, weight: 17.8, height: 110 },
      { date: '01/09/2024', bmi: 14.2, weight: 17.9, height: 110 },
      { date: '01/11/2024', bmi: 14.2, weight: 18.0, height: 110 },
      { date: '20/11/2024', bmi: 14.2, weight: 18.0, height: 110 }
    ],
    child3: [
      { date: '01/01/2024', bmi: 15.8, weight: 14.8, height: 97 },
      { date: '01/03/2024', bmi: 15.9, weight: 15.0, height: 97 },
      { date: '01/05/2024', bmi: 16.0, weight: 15.2, height: 98 },
      { date: '01/07/2024', bmi: 16.0, weight: 15.3, height: 98 },
      { date: '01/09/2024', bmi: 16.1, weight: 15.4, height: 98 },
      { date: '01/11/2024', bmi: 16.1, weight: 15.5, height: 98 },
      { date: '10/10/2024', bmi: 16.1, weight: 15.5, height: 98 }
    ]
  };

  // Dữ liệu thông báo
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'appointment',
      title: 'Lịch khám định kỳ',
      message: 'Bé Minh An có lịch khám định kỳ vào ngày 15/03/2025. Vui lòng đưa bé đến khám đúng giờ.',
      date: '2024-12-20',
      isRead: false,
      priority: 'high',
      fromDoctor: 'BS. Nguyễn Văn A'
    },
    {
      id: '2',
      type: 'medication',
      title: 'Nhắc nhở uống thuốc',
      message: 'Bé Mai cần uống Vitamin D3 mỗi ngày 1 viên sau bữa sáng. Đã uống được 5 ngày.',
      date: '2024-12-19',
      isRead: true,
      priority: 'medium',
      fromDoctor: 'BS. Trần Thị B'
    },
    {
      id: '3',
      type: 'vaccination',
      title: 'Lịch tiêm chủng',
      message: 'Bé Nam cần tiêm mũi 5 trong 1 (DPT-Hib-HepB) vào tháng 1/2025.',
      date: '2024-12-18',
      isRead: false,
      priority: 'high',
      fromDoctor: 'BS. Lê Văn C'
    },
    {
      id: '4',
      type: 'general',
      title: 'Kết quả xét nghiệm',
      message: 'Kết quả xét nghiệm máu của bé Minh An bình thường. Không cần lo lắng.',
      date: '2024-12-17',
      isRead: true,
      priority: 'low',
      fromDoctor: 'BS. Nguyễn Văn A'
    }
  ];

  const currentChild = children.find(child => child.id === selectedChild);
  const unreadNotifications = notifications.filter(n => !n.isRead);
  const currentBmiData = bmiHistoryData[selectedChild as keyof typeof bmiHistoryData] || [];

  // Hàm phân tích BMI
  const analyzeBMI = (childId: string) => {
    const data = bmiHistoryData[childId as keyof typeof bmiHistoryData];
    if (!data || data.length === 0) return null;

    const currentBMI = data[data.length - 1].bmi;
    const bmiTrend = data[data.length - 1].bmi - data[0].bmi;
    const avgBMI = data.reduce((sum, d) => sum + d.bmi, 0) / data.length;
    
    // Phân loại BMI cho trẻ em
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
      trendDirection: bmiTrend > 0 ? 'Tăng' : bmiTrend < 0 ? 'Giảm' : 'Ổn định',
      minBMI: Math.min(...data.map(d => d.bmi)),
      maxBMI: Math.max(...data.map(d => d.bmi))
    };
  };

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'appointment': return '📅';
      case 'medication': return '💊';
      case 'vaccination': return '💉';
      case 'general': return '📋';
      default: return '📢';
    }
  };

  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case 'Khỏe mạnh': return 'bg-green-100 text-green-800';
      case 'Cần theo dõi': return 'bg-yellow-100 text-yellow-800';
      case 'Cần khám': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => navigate('/hcfb')}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Quay về Trung tâm</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">
              👨‍👩‍👧‍👦 Phụ Huynh Dashboard
            </h1>
            <p className="text-lg text-gray-600">
              Theo dõi sức khỏe con và nhận thông báo từ bác sĩ
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Child Selection */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Chọn con để theo dõi</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {children.map((child) => (
              <div
                key={child.id}
                onClick={() => setSelectedChild(child.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedChild === child.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <img src={child.avatar} alt={child.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{child.name}</h3>
                    <p className="text-sm text-gray-600">{child.age} tuổi • {child.gender}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs mt-1 ${getHealthStatusColor(child.healthStatus)}`}>
                      {child.healthStatus}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'overview'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📊 Tổng quan
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-all duration-300 relative ${
                activeTab === 'notifications'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📢 Thông báo
              {unreadNotifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadNotifications.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('appointments')}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'appointments'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📅 Lịch hẹn
            </button>
          </div>
        </section>

        {/* Content based on active tab */}
        {activeTab === 'overview' && currentChild && (
          <div className="space-y-8">
            {/* Child Overview */}
            <section className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <img src={currentChild.avatar} alt={currentChild.name} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{currentChild.name}</h3>
                  <p className="text-gray-600">{currentChild.age} tuổi • {currentChild.gender}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600">{currentChild.weight}kg</div>
                  <div className="text-sm text-gray-600">Cân nặng</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-600">{currentChild.height}cm</div>
                  <div className="text-sm text-gray-600">Chiều cao</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-600">{currentChild.bmi}</div>
                  <div className="text-sm text-gray-600">Chỉ số BMI</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-600">{currentChild.healthStatus}</div>
                  <div className="text-sm text-gray-600">Tình trạng</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-800">Khám gần nhất</div>
                    <div className="text-sm text-gray-600">{new Date(currentChild.lastCheckup).toLocaleDateString('vi-VN')}</div>
                  </div>
                  <div className="text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-800">Khám tiếp theo</div>
                    <div className="text-sm text-gray-600">{new Date(currentChild.nextCheckup).toLocaleDateString('vi-VN')}</div>
                  </div>
                  <div className="text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            {/* BMI Analysis & Chart */}
            {currentBmiData.length > 0 && (
              <section className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">📊 Phân tích BMI chi tiết</h3>
                
                {/* BMI Analysis Summary */}
                {(() => {
                  const bmiAnalysis = analyzeBMI(selectedChild);
                  if (!bmiAnalysis) return null;
                  
                  return (
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
                  );
                })()}

                {/* BMI Chart */}
                <div className="bg-white/60 rounded-2xl p-6 border border-gray-200 mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Biểu đồ theo dõi BMI theo thời gian</h4>
                  
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={currentBmiData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
                          domain={[Math.min(...currentBmiData.map(d => d.bmi)) - 1, Math.max(...currentBmiData.map(d => d.bmi)) + 1]}
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
                </div>

                {/* BMI Statistics */}
                {(() => {
                  const bmiAnalysis = analyzeBMI(selectedChild);
                  if (!bmiAnalysis) return null;
                  
                  return (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/60 rounded-2xl p-6 border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Thống kê chi tiết</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">BMI hiện tại:</span>
                            <span className="font-semibold text-blue-600">{bmiAnalysis.currentBMI}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">BMI thấp nhất:</span>
                            <span className="font-semibold text-blue-600">{bmiAnalysis.minBMI}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">BMI cao nhất:</span>
                            <span className="font-semibold text-red-600">{bmiAnalysis.maxBMI}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">BMI trung bình:</span>
                            <span className="font-semibold text-green-600">{bmiAnalysis.avgBMI.toFixed(1)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Số lần đo:</span>
                            <span className="font-semibold text-purple-600">{currentBmiData.length}</span>
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
                  );
                })()}
              </section>
            )}

            {/* Quick Actions */}
            <section className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Thao tác nhanh</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button className="w-full p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-between">
                  <span>Đặt lịch khám</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>

                <button className="w-full p-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center justify-between">
                  <span>Xem hồ sơ chi tiết</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>

                <button className="w-full p-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-between">
                  <span>Liên hệ bác sĩ</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>

                <button className="w-full p-4 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors flex items-center justify-between">
                  <span>Tải báo cáo sức khỏe</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'notifications' && (
          <section className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Thông báo từ bác sĩ</h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Đánh dấu tất cả đã đọc
              </button>
            </div>

            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md ${
                    notification.isRead ? 'bg-gray-50 border-gray-300' : 'bg-white border-blue-500 shadow-sm'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{notification.title}</h4>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(notification.priority)}`}>
                            {notification.priority === 'high' ? 'Cao' : notification.priority === 'medium' ? 'Trung bình' : 'Thấp'}
                          </span>
                          {!notification.isRead && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">{notification.message}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Từ: {notification.fromDoctor}</span>
                        <span>{new Date(notification.date).toLocaleDateString('vi-VN')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'appointments' && (
          <section className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Lịch hẹn khám bệnh</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Đặt lịch mới
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800">Khám định kỳ - Bé Minh An</h4>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Sắp tới</span>
                </div>
                <p className="text-gray-600 mb-2">Khám định kỳ 3 tháng/lần</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Bác sĩ: BS. Nguyễn Văn A</span>
                  <span>15/03/2025 - 09:00</span>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800">Tiêm chủng - Bé Nam</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Đã lên lịch</span>
                </div>
                <p className="text-gray-600 mb-2">Tiêm mũi 5 trong 1 (DPT-Hib-HepB)</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Bác sĩ: BS. Lê Văn C</span>
                  <span>10/01/2025 - 14:00</span>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-gray-400">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800">Khám định kỳ - Bé Mai</h4>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Đã hoàn thành</span>
                </div>
                <p className="text-gray-600 mb-2">Khám định kỳ 3 tháng/lần</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Bác sĩ: BS. Trần Thị B</span>
                  <span>20/11/2024 - 10:30</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Parent01; 