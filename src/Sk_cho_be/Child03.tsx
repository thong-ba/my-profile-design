import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Child03 = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('info');

  // Thông tin bé Đức Anh
  const childInfo = {
    name: 'Lê Đức Anh',
    age: 15,
    gender: 'Nam',
    height: 165,
    weight: 55.8,
    bmi: 20.5,
    bloodType: 'O+',
    birthDate: '10/12/2009',
    guardian: 'Lê Thị Kim',
    phone: '0901234567',
    address: 'Quận Thủ Đức, TP.HCM'
  };

  const healthHistory = [
    { date: '18/12/2024', type: 'Khám định kỳ', result: 'Phát triển bình thường', doctor: 'BS. Hoàng Văn Nam' },
    { date: '25/09/2024', type: 'Khám thể thao', result: 'Đủ điều kiện tham gia thể thao', doctor: 'BS. Nguyễn Quang Huy' },
    { date: '10/06/2024', type: 'Khám răng', result: 'Cần niềng răng', doctor: 'BS. Phạm Thị Vân' },
    { date: '15/03/2024', type: 'Khám định kỳ', result: 'Bình thường', doctor: 'BS. Hoàng Văn Nam' }
  ];

  const vaccinations = [
    { name: 'Vaccine COVID-19 (tăng cường)', date: '12/11/2024', nextDue: '12/05/2025' },
    { name: 'Vaccine Td (Tetanus-Diphtheria)', date: '20/08/2024', nextDue: '20/08/2034' },
    { name: 'Vaccine cúm mùa', date: '15/09/2024', nextDue: '15/09/2025' },
    { name: 'Vaccine Meningococcal', date: '10/07/2023', nextDue: 'Hoàn thành' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => navigate('/hcfb')}
              className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Quay về HCFB</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-2">
              🧑‍🎓 Hồ Sơ Sức Khỏe
            </h1>
            <p className="text-lg text-gray-600">
              Theo dõi sức khỏe toàn diện cho bé {childInfo.name}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Child Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                DA
              </div>
              <div className="text-center mt-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Khỏe mạnh
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{childInfo.name}</h2>
              <p className="text-xl text-gray-600 mb-4">{childInfo.age} tuổi • {childInfo.gender}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{childInfo.height}cm</div>
                  <div className="text-sm text-gray-600">Chiều cao</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{childInfo.weight}kg</div>
                  <div className="text-sm text-gray-600">Cân nặng</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{childInfo.bmi}</div>
                  <div className="text-sm text-gray-600">BMI</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
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
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'info', label: 'Thông tin chi tiết', icon: '📋' },
                { id: 'history', label: 'Lịch sử khám', icon: '🏥' },
                { id: 'vaccine', label: 'Tiêm phòng', icon: '💉' },
                { id: 'growth', label: 'Phát triển', icon: '📈' }
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
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Thông tin chi tiết</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Thông tin cơ bản</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Họ và tên:</span> {childInfo.name}</p>
                      <p><span className="font-medium">Giới tính:</span> {childInfo.gender}</p>
                      <p><span className="font-medium">Tuổi:</span> {childInfo.age} tuổi</p>
                      <p><span className="font-medium">Ngày sinh:</span> {childInfo.birthDate}</p>
                      <p><span className="font-medium">Nhóm máu:</span> {childInfo.bloodType}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Liên hệ</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Người giám hộ:</span> {childInfo.guardian}</p>
                      <p><span className="font-medium">Số điện thoại:</span> {childInfo.phone}</p>
                      <p><span className="font-medium">Địa chỉ:</span> {childInfo.address}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">ℹ️ Thông tin thêm</h4>
                  <p className="text-sm text-blue-700">Bé đang trong giai đoạn phát triển mạnh, tích cực tham gia các hoạt động thể thao.</p>
                </div>
              </div>
            )}

            {selectedTab === 'history' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lịch sử khám bệnh</h3>
                <div className="space-y-4">
                  {healthHistory.map((record, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
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
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lịch sử tiêm phòng</h3>
                <div className="grid gap-4">
                  {vaccinations.map((vaccine, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
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
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Biểu đồ phát triển</h3>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Biểu đồ tăng trưởng</h4>
                  <p className="text-gray-600">Theo dõi sự phát triển chiều cao và cân nặng theo thời gian</p>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <span className="font-semibold">Đánh giá:</span> Bé phát triển rất tốt, chiều cao và cân nặng lý tưởng cho tuổi
                    </p>
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

export default Child03;
