import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
              <span>Quay về HCFB</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">
              👦 Hồ Sơ Sức Khỏe
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
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                MA
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
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{childInfo.height}cm</div>
                  <div className="text-sm text-gray-600">Chiều cao</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{childInfo.weight}kg</div>
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
                      ? 'border-blue-500 text-blue-600'
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
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">Đánh giá:</span> Bé phát triển bình thường theo độ tuổi
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

export default Child01;
