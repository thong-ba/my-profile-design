import React from 'react';
import { useNavigate } from 'react-router-dom';

const Doctor1 = () => {
  const navigate = useNavigate();

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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Doctor Profile */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-lg">
              BS
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                BS. Nguyễn Thị Mai Anh
              </h1>
              <h2 className="text-2xl text-blue-600 mb-4">Bác sĩ Nhi khoa</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">2000+</div>
                  <div className="text-gray-600">Bệnh nhi đã khám</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">98%</div>
                  <div className="text-gray-600">Hài lòng</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Dinh dưỡng trẻ em</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Phát triển thể chất</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tâm lý trẻ em</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Giới thiệu</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            BS. Nguyễn Thị Mai Anh có hơn 15 năm kinh nghiệm trong lĩnh vực nhi khoa, đặc biệt chuyên sâu về 
            dinh dưỡng và phát triển thể chất của trẻ em. Bác sĩ tốt nghiệp loại Xuất sắc tại Đại học Y Hà Nội 
            và đã hoàn thành chương trình thạc sĩ tại Nhật Bản.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Chuyên môn</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Dinh dưỡng và tăng trưởng trẻ em</li>
                <li>• Rối loạn tiêu hóa ở trẻ</li>
                <li>• Phát triển thể chất và tâm lý</li>
                <li>• Tư vấn chăm sóc trẻ sơ sinh</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Bằng cấp</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Bác sĩ Y khoa - ĐH Y Hà Nội (2008)</li>
                <li>• Thạc sĩ Nhi khoa - Tokyo University (2015)</li>
                <li>• Chứng chỉ Dinh dưỡng trẻ em (2018)</li>
                <li>• Chứng chỉ Tâm lý phát triển (2020)</li>
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
                  <h4 className="font-semibold text-gray-800">Nguyễn Minh An - 7 tuổi</h4>
                  <p className="text-sm text-gray-600">Ngày kê: 18/12/2024</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Đã cấp</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Vitamin D3 200IU</span>
                  <span className="text-blue-600">1 viên/ngày x 30 ngày</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sắt + Acid Folic</span>
                  <span className="text-blue-600">1 viên/ngày x 30 ngày</span>
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
                  <span className="text-gray-600">Canxi + Vitamin D</span>
                  <span className="text-blue-600">2 viên/ngày x 30 ngày</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Men tiêu hóa</span>
                  <span className="text-blue-600">1 gói/ngày x 14 ngày</span>
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
                <div className="font-semibold text-gray-800">Nguyễn Minh An</div>
                <div className="text-sm text-gray-600">7 tuổi • Nam</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Thời gian</div>
                <div className="font-medium">08:30 - 09:00</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Lý do khám</div>
                <div className="font-medium">Tư vấn dinh dưỡng</div>
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
                <div className="font-medium">09:00 - 09:30</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Lý do khám</div>
                <div className="font-medium">Thiếu cân</div>
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
                <div className="font-medium">09:30 - 10:00</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Lý do khám</div>
                <div className="font-medium">Khám định kỳ</div>
              </div>
              <div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Chờ khám</span>
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition Guidelines */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🥗 Hướng Dẫn Dinh Dưỡng</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">1-3 tuổi</h4>
              <ul className="space-y-2 text-blue-600 text-sm">
                <li>• Sữa: 400-500ml/ngày</li>
                <li>• Cơm/cháo: 3-4 bữa chính</li>
                <li>• Rau củ: 200-300g/ngày</li>
                <li>• Thịt/cá: 50-80g/ngày</li>
                <li>• Trái cây: 100-150g/ngày</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-4">4-6 tuổi</h4>
              <ul className="space-y-2 text-green-600 text-sm">
                <li>• Sữa: 300-400ml/ngày</li>
                <li>• Cơm: 4-5 bữa/ngày</li>
                <li>• Rau củ: 300-400g/ngày</li>
                <li>• Thịt/cá: 80-100g/ngày</li>
                <li>• Trái cây: 150-200g/ngày</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-purple-800 mb-4">7-12 tuổi</h4>
              <ul className="space-y-2 text-purple-600 text-sm">
                <li>• Sữa: 300ml/ngày</li>
                <li>• Cơm: 5-6 bữa/ngày</li>
                <li>• Rau củ: 400-500g/ngày</li>
                <li>• Thịt/cá: 100-150g/ngày</li>
                <li>• Trái cây: 200-300g/ngày</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Lưu ý quan trọng</h4>
            <ul className="space-y-2 text-yellow-700 text-sm">
              <li>• Tránh cho trẻ ăn đồ ngọt quá nhiều</li>
              <li>• Hạn chế đồ ăn nhanh và nước ngọt</li>
              <li>• Bổ sung đủ nước uống mỗi ngày</li>
              <li>• Ăn đa dạng các nhóm thực phẩm</li>
            </ul>
          </div>
        </section>

        {/* Medicine Inventory */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">💊 Danh Sách Thuốc Thường Dùng</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Vitamin & Khoáng chất</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-medium">Vitamin D3 200IU</div>
                    <div className="text-sm text-gray-600">Hỗ trợ phát triển xương</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-medium">Sắt + Acid Folic</div>
                    <div className="text-sm text-gray-600">Phòng thiếu máu</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-medium">Canxi + Vitamin D</div>
                    <div className="text-sm text-gray-600">Phát triển xương răng</div>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Sắp hết</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Men tiêu hóa & Khác</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-medium">Men tiêu hóa</div>
                    <div className="text-sm text-gray-600">Hỗ trợ tiêu hóa</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-medium">Probiotics trẻ em</div>
                    <div className="text-sm text-gray-600">Cân bằng đường ruột</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Còn hàng</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-medium">Omega-3 DHA</div>
                    <div className="text-sm text-gray-600">Phát triển não bộ</div>
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
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Đặt hàng thuốc
            </button>
          </div>
        </section>

        {/* Schedule */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Lịch khám</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">Buổi sáng (8:00 - 12:00)</h4>
              <div className="space-y-2 text-blue-600">
                <div>Thứ 2, 4, 6</div>
                <div>Khám tổng quát</div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-4">Buổi chiều (14:00 - 18:00)</h4>
              <div className="space-y-2 text-green-600">
                <div>Thứ 3, 5, 7</div>
                <div>Tư vấn dinh dưỡng</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Đặt lịch khám
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Doctor1;
