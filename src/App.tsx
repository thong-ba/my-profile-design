import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import IndexHCFB from './Sk_cho_be/IndexHCFB'
import Child01 from './Sk_cho_be/Child01'
import Child02 from './Sk_cho_be/Child02'
import Child03 from './Sk_cho_be/Child03'
import Doctor1 from './Sk_cho_be/Doctor1'
import Doctor2 from './Sk_cho_be/Doctor2'
import Doctor3 from './Sk_cho_be/Doctor3'
import MedicineList from './Sk_cho_be/MedicineList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        
          {/* HCFB */}
          <Route path="/hcfb" element={<IndexHCFB />} />
          <Route path="/hcfb/child01" element={<Child01 />} />
          <Route path="/hcfb/child02" element={<Child02 />} />
          <Route path="/hcfb/child03" element={<Child03 />} />
          
          {/* Doctors */}
          <Route path="/hcfb/doctor1" element={<Doctor1 />} />
          <Route path="/hcfb/doctor2" element={<Doctor2 />} />
          <Route path="/hcfb/doctor3" element={<Doctor3 />} />
          
          {/* Medicine Management */}
          <Route path="/hcfb/medicine-list" element={<MedicineList />} />
        

      </Routes>
    </Router>
  )
}

export default App
