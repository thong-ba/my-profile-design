import React from 'react';
import { useNavigate } from 'react-router-dom';

const Doctor2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => navigate('/hcfb')}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Quay về Trung tâm</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Doctor Profile */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-lg">
              TH
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                BS. Trần Văn Hải
              </h1>
              <h2 className="text-2xl text-purple-600 mb-4">Bác sĩ Nhi khoa - Chuyên Hô hấp</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">12+</div>
                  <div className="text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div className="bg-pink-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-pink-600">1500+</div>
                  <div className="text-gray-600">Bệnh nhi đã khám</div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-indigo-600">95%</div>
                  <div className="text-gray-600">Hài lòng</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Bệnh hô hấp trẻ em</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Hen suyễn trẻ em</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Nhiễm khuẩn đường hô hấp</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Giới thiệu</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            BS. Trần Văn Hải là chuyên gia hàng đầu về bệnh hô hấp trẻ em với hơn 12 năm kinh nghiệm. 
            Bác sĩ tốt nghiệp Đại học Y Dược TP.HCM và đã tu nghiệp tại Singapore về chuyên ngành 
            hô hấp nhi khoa. Đặc biệt có kinh nghiệm điều trị hen suyễn và các bệnh phổi ở trẻ em.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Chuyên môn</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Hen suyễn và dị ứng ở trẻ em</li>
                <li>• Viêm phổi và nhiễm khuẩn hô hấp</li>
                <li>• Rối loạn giấc ngủ do hô hấp</li>
                <li>• Chăm sóc hô hấp trẻ sinh non</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Bằng cấp</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Bác sĩ Y khoa - ĐH Y Dược TP.HCM (2011)</li>
                <li>• Chuyên khoa I Nhi - ĐH Y Dược TP.HCM (2016)</li>
                <li>• Fellowship Hô hấp Nhi - Singapore (2019)</li>
                <li>• Chứng chỉ Siêu âm tim thai nhi (2021)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prescription Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📋 Đơn Thuốc Gần Đây</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">Trần Thúy Linh - 12 tuổi</h4>
                  <p className="text-sm text-gray-600">Ngày kê: 20/12/2024</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Đã cấp</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ventolin (Salbutamol)</span>
                  <span className="text-purple-600">2 hít khi cần x 1 chai</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prednisolone 5mg</span>
                  <span className="text-purple-600">1 viên/ngày x 5 ngày</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">Nguyễn Minh An - 7 tuổi</h4>
                  <p className="text-sm text-gray-600">Ngày kê: 22/12/2024</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Chờ lấy</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Siro ho Prospan</span>
                  <span className="text-purple-600">5ml x 3 lần/ngày x 7 ngày</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amoxicillin 250mg</span>
                  <span className="text-purple-600">1 viên x 3 lần/ngày x 7 ngày</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient List */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">👶 Danh Sách Bệnh Nhân Hôm Nay</h3>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div>
                <div className="font-semibold text-gray-800">Trần Thúy Linh</div>
                <div className="text-sm text-gray-600">12 tuổi • Nữ</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Thời gian</div>
                <div className="font-medium">07:30 - 08:00</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Lý do khám</div>
                <div className="font-medium">Hen suyễn tái phát</div>
              </div>
              <div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Đã khám</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div>
                <div className="font-semibold text-gray-800">Nguyễn Minh An</div>
                <div className="text-sm text-gray-600">7 tuổi • Nam</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Thời gian</div>
                <div className="font-medium">08:00 - 08:30</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Lý do khám</div>
                <div className="font-medium">Viêm phổi</div>
              </div>
              <div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Đang khám</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div>
                <div className="font-semibold text-gray-800">Lê Đức Anh</div>
                <div className="text-sm text-gray-600">15 tuổi • Nam</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Thời gian</div>
                <div className="font-medium">08:30 - 09:00</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Lý do khám</div>
                <div className="font-medium">Ho mãn tính</div>
              </div>
              <div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Chờ khám</span>
              </div>
            </div>
          </div>
        </section>

        {/* Respiratory Care Guidelines */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🫁 Hướng Dẫn Chăm Sóc Hô Hấp</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-purple-800 mb-4">Phòng ngừa Hen suyễn</h4>
              <ul className="space-y-2 text-purple-600 text-sm">
                <li>• Tránh các tác nhân gây dị ứng</li>
                <li>• Giữ môi trường sạch sẽ, thoáng mát</li>
                <li>• Không hút thuốc trong nhà</li>
                <li>• Tập thể dục đều đặn</li>
                <li>• Tuân thủ điều trị dự phòng</li>
              </ul>
            </div>

            <div className="bg-pink-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-pink-800 mb-4">Chăm sóc khi ho</h4>
              <ul className="space-y-2 text-pink-600 text-sm">
                <li>• Uống đủ nước, ấm cơ thể</li>
                <li>• Tránh khói bụi, không khí lạnh</li>
                <li>• Ngủ đầu cao 30-45 độ</li>
                <li>• Ăn thức ăn mềm, dễ nuốt</li>
                <li>• Theo dõi thân nhiệt</li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-indigo-800 mb-4">Khi nào cần đến viện</h4>
              <ul className="space-y-2 text-indigo-600 text-sm">
                <li>• Khó thở, thở nhanh bất thường</li>
                <li>• Sốt cao trên 39°C</li>
                <li>• Ho ra máu</li>
                <li>• Môi, móng tay tím tái</li>
                <li>• Trẻ quấy khóc nhiều</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Lưu ý quan trọng</h4>
            <ul className="space-y-2 text-yellow-700 text-sm">
              <li>• Không tự ý dùng kháng sinh khi chưa có chỉ định</li>
              <li>• Sử dụng thuốc xịt đúng cách</li>
              <li>• Thông báo ngay khi có dấu hiệu xấu</li>
              <li>• Tiêm phòng đầy đủ theo lịch</li>
            </ul>
          </div>
        </section>

        {/* Medicine Inventory */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">💊 Danh Sách Thuốc Hô Hấp</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Thuốc điều trị Hen suyễn</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-medium">Ventolin (Salbutamol)</div>
                    <div className="text-sm text-gray-600">Thuốc giãn phế quản</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-medium">Budesonide</div>
                    <div className="text-sm text-gray-600">Corticosteroid dự phòng</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-medium">Prednisolone</div>
                    <div className="text-sm text-gray-600">Chống viêm toàn thân</div>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Sắp hết</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Thuốc ho và Kháng sinh</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                  <div>
                    <div className="font-medium">Siro ho Prospan</div>
                    <div className="text-sm text-gray-600">Thuốc ho từ thảo dược</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                  <div>
                    <div className="font-medium">Amoxicillin</div>
                    <div className="text-sm text-gray-600">Kháng sinh β-lactam</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                  <div>
                    <div className="font-medium">Azithromycin</div>
                    <div className="text-sm text-gray-600">Kháng sinh Macrolide</div>
                  </div>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">Hết hàng</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate('/hcfb/medicine-list')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium mr-3">
              Cập nhật kho thuốc
            </button>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Đặt hàng thuốc
            </button>
          </div>
        </section>

        {/* Schedule */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Lịch khám</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-purple-800 mb-4">Buổi sáng (7:30 - 11:30)</h4>
              <div className="space-y-2 text-purple-600">
                <div>Thứ 2, 4, 6</div>
                <div>Khám hô hấp chuyên khoa</div>
              </div>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-pink-800 mb-4">Buổi chiều (13:30 - 17:30)</h4>
              <div className="space-y-2 text-pink-600">
                <div>Thứ 3, 5</div>
                <div>Điều trị hen suyễn</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Đặt lịch khám
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Doctor2;
