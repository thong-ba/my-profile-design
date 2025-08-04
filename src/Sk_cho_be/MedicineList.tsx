import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Medicine {
  medicine_id: string;
  name: string;
  active_ingredient: string;
  category: string;
  dosage_form: string;
  strength: string;
  unit: string;
  manufacturer: string;
  supplier_id: string;
  expiry_date: string;
  barcode: string;
  stock_quantity: number;
  price: number;
  notes: string;
}

const MedicineList = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const itemsPerPage = 10;

  // Dữ liệu mẫu 50 loại thuốc
  const medicinesData: Medicine[] = [
    {
      medicine_id: "MED001",
      name: "Paracetamol 500mg",
      active_ingredient: "Paracetamol",
      category: "Giảm đau/Hạ sốt",
      dosage_form: "Viên nén",
      strength: "500mg",
      unit: "Viên",
      manufacturer: "Hà Tây Pharma",
      supplier_id: "SUP001",
      expiry_date: "2025-12-31",
      barcode: "8934567890123",
      stock_quantity: 1500,
      price: 500,
      notes: "Thuốc hạ sốt cho trẻ em"
    },
    {
      medicine_id: "MED002",
      name: "Amoxicillin 250mg",
      active_ingredient: "Amoxicillin",
      category: "Kháng sinh",
      dosage_form: "Viên nang",
      strength: "250mg",
      unit: "Viên",
      manufacturer: "Traphaco",
      supplier_id: "SUP002",
      expiry_date: "2026-06-30",
      barcode: "8934567890124",
      stock_quantity: 800,
      price: 1200,
      notes: "Kháng sinh β-lactam"
    },
    {
      medicine_id: "MED003",
      name: "Vitamin D3 200IU",
      active_ingredient: "Cholecalciferol",
      category: "Vitamin",
      dosage_form: "Viên nang mềm",
      strength: "200IU",
      unit: "Viên",
      manufacturer: "DHG Pharma",
      supplier_id: "SUP003",
      expiry_date: "2025-08-15",
      barcode: "8934567890125",
      stock_quantity: 2000,
      price: 800,
      notes: "Bổ sung Vitamin D cho trẻ"
    },
    {
      medicine_id: "MED004",
      name: "Siro ho Prospan",
      active_ingredient: "Hedera helix",
      category: "Thuốc ho",
      dosage_form: "Siro",
      strength: "5mg/ml",
      unit: "Chai",
      manufacturer: "Engelhard Arzneimittel",
      supplier_id: "SUP004",
      expiry_date: "2024-11-20",
      barcode: "8934567890126",
      stock_quantity: 150,
      price: 85000,
      notes: "Thuốc ho từ thảo dược"
    },
    {
      medicine_id: "MED005",
      name: "Ventolin Inhaler",
      active_ingredient: "Salbutamol",
      category: "Thuốc hô hấp",
      dosage_form: "Xịt",
      strength: "100mcg/liều",
      unit: "Chai",
      manufacturer: "GSK",
      supplier_id: "SUP005",
      expiry_date: "2025-03-10",
      barcode: "8934567890127",
      stock_quantity: 85,
      price: 120000,
      notes: "Thuốc xịt giãn phế quản"
    },
    {
      medicine_id: "MED006",
      name: "Cetirizine 10mg",
      active_ingredient: "Cetirizine HCl",
      category: "Thuốc dị ứng",
      dosage_form: "Viên nén",
      strength: "10mg",
      unit: "Viên",
      manufacturer: "Imexpharm",
      supplier_id: "SUP006",
      expiry_date: "2025-09-15",
      barcode: "8934567890128",
      stock_quantity: 600,
      price: 800,
      notes: "Thuốc chống dị ứng"
    },
    {
      medicine_id: "MED007",
      name: "Zinc 20mg",
      active_ingredient: "Zinc Sulfate",
      category: "Vitamin",
      dosage_form: "Viên nén",
      strength: "20mg",
      unit: "Viên",
      manufacturer: "Pymepharco",
      supplier_id: "SUP007",
      expiry_date: "2026-01-20",
      barcode: "8934567890129",
      stock_quantity: 900,
      price: 600,
      notes: "Bổ sung kẽm cho trẻ"
    },
    {
      medicine_id: "MED008",
      name: "Domperidone 10mg",
      active_ingredient: "Domperidone",
      category: "Thuốc tiêu hóa",
      dosage_form: "Viên nén",
      strength: "10mg",
      unit: "Viên",
      manufacturer: "Stada Vietnam",
      supplier_id: "SUP008",
      expiry_date: "2025-07-10",
      barcode: "8934567890130",
      stock_quantity: 400,
      price: 1500,
      notes: "Thuốc chống nôn"
    },
    {
      medicine_id: "MED009",
      name: "Ibuprofen 200mg",
      active_ingredient: "Ibuprofen",
      category: "Giảm đau/Hạ sốt",
      dosage_form: "Viên nang",
      strength: "200mg",
      unit: "Viên",
      manufacturer: "Boston Pharma",
      supplier_id: "SUP009",
      expiry_date: "2025-11-25",
      barcode: "8934567890131",
      stock_quantity: 700,
      price: 1000,
      notes: "Thuốc giảm đau chống viêm"
    },
    {
      medicine_id: "MED010",
      name: "Prednisolone 5mg",
      active_ingredient: "Prednisolone",
      category: "Corticosteroid",
      dosage_form: "Viên nén",
      strength: "5mg",
      unit: "Viên",
      manufacturer: "Stellapharm",
      supplier_id: "SUP010",
      expiry_date: "2025-04-30",
      barcode: "8934567890132",
      stock_quantity: 200,
      price: 2000,
      notes: "Thuốc chống viêm"
    },
    {
      medicine_id: "MED011",
      name: "Vitamin C 500mg",
      active_ingredient: "Ascorbic Acid",
      category: "Vitamin",
      dosage_form: "Viên sủi",
      strength: "500mg",
      unit: "Viên",
      manufacturer: "Pharmacity",
      supplier_id: "SUP011",
      expiry_date: "2025-12-20",
      barcode: "8934567890133",
      stock_quantity: 1200,
      price: 1500,
      notes: "Vitamin C sủi cho trẻ"
    },
    {
      medicine_id: "MED012",
      name: "Clarithromycin 125mg",
      active_ingredient: "Clarithromycin",
      category: "Kháng sinh",
      dosage_form: "Siro",
      strength: "125mg/5ml",
      unit: "Chai",
      manufacturer: "Abbott",
      supplier_id: "SUP012",
      expiry_date: "2025-08-15",
      barcode: "8934567890134",
      stock_quantity: 120,
      price: 95000,
      notes: "Kháng sinh Macrolide"
    },
    {
      medicine_id: "MED013",
      name: "Lactulose 670mg",
      active_ingredient: "Lactulose",
      category: "Thuốc tiêu hóa",
      dosage_form: "Siro",
      strength: "670mg/ml",
      unit: "Chai",
      manufacturer: "Mekophar",
      supplier_id: "SUP013",
      expiry_date: "2026-02-10",
      barcode: "8934567890135",
      stock_quantity: 180,
      price: 45000,
      notes: "Thuốc nhuận tràng"
    },
    {
      medicine_id: "MED014",
      name: "Loratadine 10mg",
      active_ingredient: "Loratadine",
      category: "Thuốc dị ứng",
      dosage_form: "Viên nén",
      strength: "10mg",
      unit: "Viên",
      manufacturer: "Mediplantex",
      supplier_id: "SUP014",
      expiry_date: "2025-10-05",
      barcode: "8934567890136",
      stock_quantity: 450,
      price: 900,
      notes: "Thuốc chống dị ứng thế hệ 2"
    }
    // ,
    // {
    //   medicine_id: "MED015",
    //   name: "Omega-3 DHA 250mg",
    //   active_ingredient: "DHA, EPA",
    //   category: "Vitamin",
    //   dosage_form: "Viên nang mềm",
    //   strength: "250mg",
    //   unit: "Viên",
    //   manufacturer: "Natrol",
    //   supplier_id: "SUP015",
    //   expiry_date: "2025-06-30",
    //   barcode: "8934567890137",
    //   stock_quantity: 0,
    //   price: 3000,
    //   notes: "Bổ sung DHA cho não bộ"
    // },
    // {
    //   medicine_id: "MED016",
    //   name: "Dextromethorphan 15mg",
    //   active_ingredient: "Dextromethorphan HBr",
    //   category: "Thuốc ho",
    //   dosage_form: "Siro",
    //   strength: "15mg/5ml",
    //   unit: "Chai",
    //   manufacturer: "Boston Pharma",
    //   supplier_id: "SUP016",
    //   expiry_date: "2024-12-25",
    //   barcode: "8934567890138",
    //   stock_quantity: 90,
    //   price: 35000,
    //   notes: "Thuốc ho khan"
    // },
    // {
    //   medicine_id: "MED017",
    //   name: "Furosemide 40mg",
    //   active_ingredient: "Furosemide",
    //   category: "Thuốc tim mạch",
    //   dosage_form: "Viên nén",
    //   strength: "40mg",
    //   unit: "Viên",
    //   manufacturer: "Sanofi",
    //   supplier_id: "SUP017",
    //   expiry_date: "2025-09-12",
    //   barcode: "8934567890139",
    //   stock_quantity: 300,
    //   price: 2500,
    //   notes: "Thuốc lợi tiểu"
    // },
    // {
    //   medicine_id: "MED018",
    //   name: "Hydrocortisone 1%",
    //   active_ingredient: "Hydrocortisone",
    //   category: "Thuốc da",
    //   dosage_form: "Kem",
    //   strength: "1%",
    //   unit: "Tuýp",
    //   manufacturer: "GSK",
    //   supplier_id: "SUP018",
    //   expiry_date: "2025-04-18",
    //   barcode: "8934567890140",
    //   stock_quantity: 250,
    //   price: 15000,
    //   notes: "Kem bôi chống viêm da"
    // },
    // {
    //   medicine_id: "MED019",
    //   name: "Tobramycin 0.3%",
    //   active_ingredient: "Tobramycin",
    //   category: "Thuốc mắt",
    //   dosage_form: "Thuốc nhỏ mắt",
    //   strength: "0.3%",
    //   unit: "Chai",
    //   manufacturer: "Alcon",
    //   supplier_id: "SUP019",
    //   expiry_date: "2025-01-30",
    //   barcode: "8934567890141",
    //   stock_quantity: 80,
    //   price: 25000,
    //   notes: "Thuốc nhỏ mắt kháng sinh"
    // },
    // {
    //   medicine_id: "MED020",
    //   name: "Iron + Folic Acid",
    //   active_ingredient: "Ferrous Sulfate + Folic Acid",
    //   category: "Vitamin",
    //   dosage_form: "Viên nén",
    //   strength: "200mg + 0.25mg",
    //   unit: "Viên",
    //   manufacturer: "Zentiva",
    //   supplier_id: "SUP020",
    //   expiry_date: "2026-03-15",
    //   barcode: "8934567890142",
    //   stock_quantity: 800,
    //   price: 1200,
    //   notes: "Bổ sung sắt và acid folic"
    // },
    // {
    //   medicine_id: "MED021",
    //   name: "Azithromycin 200mg",
    //   active_ingredient: "Azithromycin",
    //   category: "Kháng sinh",
    //   dosage_form: "Siro",
    //   strength: "200mg/5ml",
    //   unit: "Chai",
    //   manufacturer: "Pfizer",
    //   supplier_id: "SUP021",
    //   expiry_date: "2025-07-20",
    //   barcode: "8934567890143",
    //   stock_quantity: 0,
    //   price: 115000,
    //   notes: "Kháng sinh Macrolide"
    // },
    // {
    //   medicine_id: "MED022",
    //   name: "Montelukast 4mg",
    //   active_ingredient: "Montelukast Sodium",
    //   category: "Thuốc hô hấp",
    //   dosage_form: "Viên nhai",
    //   strength: "4mg",
    //   unit: "Viên",
    //   manufacturer: "MSD",
    //   supplier_id: "SUP022",
    //   expiry_date: "2025-11-08",
    //   barcode: "8934567890144",
    //   stock_quantity: 350,
    //   price: 8000,
    //   notes: "Thuốc phòng hen suyễn"
    // },
    // {
    //   medicine_id: "MED023",
    //   name: "Probiotics 10 tỷ CFU",
    //   active_ingredient: "Lactobacillus + Bifidobacterium",
    //   category: "Thuốc tiêu hóa",
    //   dosage_form: "Gói bột",
    //   strength: "10 tỷ CFU",
    //   unit: "Gói",
    //   manufacturer: "BioGaia",
    //   supplier_id: "SUP023",
    //   expiry_date: "2025-05-25",
    //   barcode: "8934567890145",
    //   stock_quantity: 500,
    //   price: 12000,
    //   notes: "Men vi sinh cho trẻ"
    // },
    // {
    //   medicine_id: "MED024",
    //   name: "Phenytoin 30mg",
    //   active_ingredient: "Phenytoin",
    //   category: "Thuốc thần kinh",
    //   dosage_form: "Viên nang",
    //   strength: "30mg",
    //   unit: "Viên",
    //   manufacturer: "Mylan",
    //   supplier_id: "SUP024",
    //   expiry_date: "2026-01-12",
    //   barcode: "8934567890146",
    //   stock_quantity: 150,
    //   price: 3500,
    //   notes: "Thuốc chống động kinh"
    // },
    // {
    //   medicine_id: "MED025",
    //   name: "Calcium + Vitamin D3",
    //   active_ingredient: "Calcium Carbonate + Vitamin D3",
    //   category: "Vitamin",
    //   dosage_form: "Viên sủi",
    //   strength: "500mg + 200IU",
    //   unit: "Viên",
    //   manufacturer: "Sandoz",
    //   supplier_id: "SUP025",
    //   expiry_date: "2025-08-30",
    //   barcode: "8934567890147",
    //   stock_quantity: 1000,
    //   price: 2000,
    //   notes: "Bổ sung canxi và vitamin D"
    // },
    // {
    //   medicine_id: "MED026",
    //   name: "Clotrimazole 1%",
    //   active_ingredient: "Clotrimazole",
    //   category: "Thuốc da",
    //   dosage_form: "Kem",
    //   strength: "1%",
    //   unit: "Tuýp",
    //   manufacturer: "Bayer",
    //   supplier_id: "SUP026",
    //   expiry_date: "2025-12-05",
    //   barcode: "8934567890148",
    //   stock_quantity: 200,
    //   price: 18000,
    //   notes: "Kem chống nấm da"
    // },
    // {
    //   medicine_id: "MED027",
    //   name: "Metronidazole 250mg",
    //   active_ingredient: "Metronidazole",
    //   category: "Kháng sinh",
    //   dosage_form: "Viên nén",
    //   strength: "250mg",
    //   unit: "Viên",
    //   manufacturer: "Stella",
    //   supplier_id: "SUP027",
    //   expiry_date: "2025-10-18",
    //   barcode: "8934567890149",
    //   stock_quantity: 400,
    //   price: 1800,
    //   notes: "Kháng sinh chống ký sinh trùng"
    // },
    // {
    //   medicine_id: "MED028",
    //   name: "Multivitamin Kids",
    //   active_ingredient: "A, B, C, D, E + Minerals",
    //   category: "Vitamin",
    //   dosage_form: "Viên nhai",
    //   strength: "Đa vitamin",
    //   unit: "Viên",
    //   manufacturer: "Centrum",
    //   supplier_id: "SUP028",
    //   expiry_date: "2026-04-22",
    //   barcode: "8934567890150",
    //   stock_quantity: 600,
    //   price: 5000,
    //   notes: "Vitamin tổng hợp cho trẻ"
    // },
    // {
    //   medicine_id: "MED029",
    //   name: "Simethicone 40mg",
    //   active_ingredient: "Simethicone",
    //   category: "Thuốc tiêu hóa",
    //   dosage_form: "Viên nhai",
    //   strength: "40mg",
    //   unit: "Viên",
    //   manufacturer: "Reckitt",
    //   supplier_id: "SUP029",
    //   expiry_date: "2025-09-30",
    //   barcode: "8934567890151",
    //   stock_quantity: 300,
    //   price: 1500,
    //   notes: "Thuốc giảm đầy hơi"
    // },
    // {
    //   medicine_id: "MED030",
    //   name: "Budesonide 0.25mg",
    //   active_ingredient: "Budesonide",
    //   category: "Thuốc hô hấp",
    //   dosage_form: "Dung dịch xịt",
    //   strength: "0.25mg/ml",
    //   unit: "Chai",
    //   manufacturer: "AstraZeneca",
    //   supplier_id: "SUP030",
    //   expiry_date: "2025-02-14",
    //   barcode: "8934567890152",
    //   stock_quantity: 45,
    //   price: 180000,
    //   notes: "Corticosteroid hít cho hen"
    // }
  ];

  // Lọc thuốc theo tìm kiếm và danh mục
  const filteredMedicines = medicinesData.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.active_ingredient.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Phân trang
  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMedicines = filteredMedicines.slice(startIndex, startIndex + itemsPerPage);

  // Các danh mục thuốc
  const categories = [...new Set(medicinesData.map(m => m.category))];

  const getStockStatus = (quantity: number) => {
    if (quantity === 0) return { text: 'Hết hàng', color: 'bg-red-100 text-red-800' };
    if (quantity < 50) return { text: 'Sắp hết', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'Còn hàng', color: 'bg-green-100 text-green-800' };
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
              💊 Danh Sách Thuốc
            </h1>
            <p className="text-lg text-gray-600">
              Quản lý kho thuốc và thông tin chi tiết
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tìm kiếm thuốc
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tên thuốc hoặc hoạt chất..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Danh mục
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Tất cả danh mục</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Thêm thuốc mới
              </button>
            </div>
          </div>
        </section>

        {/* Medicine Table */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thông tin thuốc
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Danh mục
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hàm lượng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tồn kho
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giá
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hạn sử dụng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentMedicines.map((medicine) => {
                  const stockStatus = getStockStatus(medicine.stock_quantity);
                  return (
                    <tr key={medicine.medicine_id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {medicine.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {medicine.active_ingredient}
                          </div>
                          <div className="text-xs text-gray-400">
                            ID: {medicine.medicine_id}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {medicine.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div>{medicine.strength}</div>
                        <div className="text-xs text-gray-500">{medicine.dosage_form}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {medicine.stock_quantity} {medicine.unit}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${stockStatus.color}`}>
                          {stockStatus.text}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {medicine.price.toLocaleString('vi-VN')}đ
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(medicine.expiry_date).toLocaleDateString('vi-VN')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          Sửa
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          Xóa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-700">
              Hiển thị {startIndex + 1} đến {Math.min(startIndex + itemsPerPage, filteredMedicines.length)} 
              trong tổng số {filteredMedicines.length} thuốc
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Trước
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 border rounded text-sm ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Sau
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MedicineList;
