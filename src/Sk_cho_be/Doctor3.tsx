import React from 'react';
import { useNavigate } from 'react-router-dom';

const Doctor3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => navigate('/hcfb')}
              className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-800 transition-colors"
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
            <div className="w-48 h-48 bg-gradient-to-br from-emerald-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-lg">
              LM
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                BS. Lê Thị Minh
              </h1>
              <h2 className="text-2xl text-emerald-600 mb-4">Bác sĩ Nhi khoa - Chuyên Tim mạch</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-600">18+</div>
                  <div className="text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-600">2500+</div>
                  <div className="text-gray-600">Bệnh nhi đã khám</div>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-teal-600">99%</div>
                  <div className="text-gray-600">Hài lòng</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">Tim bẩm sinh</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Siêu âm tim</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Phẫu thuật tim</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Giới thiệu</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            BS. Lê Thị Minh là chuyên gia tim mạch nhi hàng đầu Việt Nam với 18 năm kinh nghiệm. 
            Bác sĩ tốt nghiệp Đại học Y Hà Nội và hoàn thành chương trình đào tạo tim mạch nhi 
            tại Đức. Đặc biệt giỏi trong chẩn đoán và điều trị bệnh tim bẩm sinh ở trẻ em.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Chuyên môn</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Bệnh tim bẩm sinh phức tạp</li>
                <li>• Siêu âm tim thai và trẻ em</li>
                <li>• Phẫu thuật tim hở trẻ em</li>
                <li>• Can thiệp tim mạch qua da</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Bằng cấp</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Bác sĩ Y khoa - ĐH Y Hà Nội (2005)</li>
                <li>• Thạc sĩ Tim mạch Nhi - ĐH Y Hà Nội (2010)</li>
                <li>• Tiến sĩ Tim mạch - University of Munich (2016)</li>
                <li>• Fellowship Can thiệp tim - Đức (2018)</li>
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
                  <h4 className="font-semibold text-gray-800">Lê Đức Anh - 15 tuổi</h4>
                  <p className="text-sm text-gray-600">Ngày kê: 18/12/2024</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Đã cấp</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Aspirin 75mg</span>
                  <span className="text-emerald-600">1 viên/ngày x 30 ngày</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Enalapril 5mg</span>
                  <span className="text-emerald-600">1 viên x 2 lần/ngày x 30 ngày</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">Trần Thúy Linh - 12 tuổi</h4>
                  <p className="text-sm text-gray-600">Ngày kê: 20/12/2024</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Chờ lấy</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Furosemide 20mg</span>
                  <span className="text-emerald-600">1/2 viên/ngày x 14 ngày</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Digoxin 0.25mg</span>
                  <span className="text-emerald-600">1/4 viên/ngày x 30 ngày</span>
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
                <div className="font-semibold text-gray-800">Lê Đức Anh</div>
                <div className="text-sm text-gray-600">15 tuổi • Nam</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Thời gian</div>
                <div className="font-medium">08:00 - 08:30</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Lý do khám</div>
                <div className="font-medium">Siêu âm tim định kỳ</div>
              </div>
              <div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Đã khám</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div>
                <div className="font-semibold text-gray-800">Trần Thúy Linh</div>
                <div className="text-sm text-gray-600">12 tuổi • Nữ</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Thời gian</div>
                <div className="font-medium">08:30 - 09:00</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Lý do khám</div>
                <div className="font-medium">Tim bẩm sinh</div>
              </div>
              <div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Đang khám</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div>
                <div className="font-semibold text-gray-800">Nguyễn Minh An</div>
                <div className="text-sm text-gray-600">7 tuổi • Nam</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Thời gian</div>
                <div className="font-medium">09:00 - 09:30</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Lý do khám</div>
                <div className="font-medium">Thổi tâm thu</div>
              </div>
              <div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Chờ khám</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cardiac Care Guidelines */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">❤️ Hướng Dẫn Chăm Sóc Tim Mạch</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-emerald-800 mb-4">Tim bẩm sinh</h4>
              <ul className="space-y-2 text-emerald-600 text-sm">
                <li>• Tuân thủ lịch khám định kỳ</li>
                <li>• Hạn chế hoạt động nặng</li>
                <li>• Uống thuốc đúng liều, đúng giờ</li>
                <li>• Theo dõi cân nặng hàng ngày</li>
                <li>• Phòng ngừa nhiễm khuẩn</li>
              </ul>
            </div>

            <div className="bg-cyan-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-cyan-800 mb-4">Sau phẫu thuật tim</h4>
              <ul className="space-y-2 text-cyan-600 text-sm">
                <li>• Chăm sóc vết mổ sạch sẽ</li>
                <li>• Tập phục hồi chức năng</li>
                <li>• Ăn ít muối, nhiều rau củ</li>
                <li>• Uống đủ nước, không quá nhiều</li>
                <li>• Tránh stress, nghỉ ngơi đủ</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-teal-800 mb-4">Khi nào cần cấp cứu</h4>
              <ul className="space-y-2 text-teal-600 text-sm">
                <li>• Khó thở đột ngột</li>
                <li>• Đau ngực, tim đập nhanh</li>
                <li>• Môi, móng tay tím tái</li>
                <li>• Phù nề đột ngột</li>
                <li>• Ngất xỉu, choáng váng</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Lưu ý quan trọng</h4>
            <ul className="space-y-2 text-yellow-700 text-sm">
              <li>• Không tự ý ngưng thuốc khi thấy khỏe</li>
              <li>• Báo cáo ngay các triệu chứng bất thường</li>
              <li>• Tiêm phòng viêm nội tâm mạc khi cần</li>
              <li>• Kiểm soát cân nặng và dinh dưỡng</li>
            </ul>
          </div>
        </section>

        {/* Medicine Inventory */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">💊 Danh Sách Thuốc Tim Mạch</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Thuốc điều trị tim</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                  <div>
                    <div className="font-medium">Digoxin 0.25mg</div>
                    <div className="text-sm text-gray-600">Tăng co bóp tim</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                  <div>
                    <div className="font-medium">Enalapril 5mg</div>
                    <div className="text-sm text-gray-600">Ức chế ACE</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                  <div>
                    <div className="font-medium">Furosemide 20mg</div>
                    <div className="text-sm text-gray-600">Lợi tiểu</div>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Sắp hết</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Thuốc chống đông & Khác</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                  <div>
                    <div className="font-medium">Aspirin 75mg</div>
                    <div className="text-sm text-gray-600">Chống kết tập tiểu cầu</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                  <div>
                    <div className="font-medium">Warfarin 2mg</div>
                    <div className="text-sm text-gray-600">Chống đông máu</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                  <div>
                    <div className="font-medium">Propranolol 10mg</div>
                    <div className="text-sm text-gray-600">Chẹn beta</div>
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
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Đặt hàng thuốc
            </button>
          </div>
        </section>

        {/* Schedule */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Lịch khám</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-emerald-800 mb-4">Buổi sáng (8:00 - 12:00)</h4>
              <div className="space-y-2 text-emerald-600">
                <div>Thứ 3, 5, 7</div>
                <div>Khám tim mạch chuyên khoa</div>
              </div>
            </div>
            
            <div className="bg-cyan-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-cyan-800 mb-4">Buổi chiều (14:00 - 18:00)</h4>
              <div className="space-y-2 text-cyan-600">
                <div>Thứ 2, 4, 6</div>
                <div>Siêu âm tim và tư vấn</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Đặt lịch khám
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Doctor3;
