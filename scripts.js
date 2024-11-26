document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function () {
    // Xóa class active của tất cả tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // Thêm class active cho tab đang được nhấn
    tab.classList.add('active');

    const tabId = tab.getAttribute('data-tab');
    // Ẩn tất cả nội dung tab
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    // Hiển thị nội dung của tab được chọn
    document.querySelector('#tab-content-' + tabId).classList.add('active');
  });
});

// Xử lý sự kiện khi nhấn nút "Xem"
document.querySelectorAll('.view-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Chuyển sang tab Quản lý thông tin (tab 3)
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    const tabToActivate = document.querySelector('[data-tab="3"]');
    tabToActivate.classList.add('active');

    // Ẩn tất cả nội dung tab
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });

    // Hiển thị nội dung của tab Quản lý thông tin (tab 3)
    document.querySelector('#tab-content-3').classList.add('active');
  });
});


function handleAddPatient(e) {
  e.preventDefault();
  alert("Them thong tin benh nhan thanh cong !")
}

function formatDate(stringDate) {
  const [year, month, date] = stringDate.split('-')
  return `${date}-${month}-${year}`
}


async function renderPatientsTable() {
  const response = await fetch('http://localhost:5106/api/Patient/Read')
  const json = await response.json()
  const data = json.value
  console.log(data);


  const tableBody = document.querySelector('#tableRender tbody');
  tableBody.innerHTML = '';

  data.forEach((patient, index) => {
    const row = document.createElement('tr');

    const dob = formatDate(patient.dob)

    row.innerHTML = `
          <td>${index + 1}</td>
          <td>${patient.name}</td>
          <td>${dob}</td>
          <td>${patient.address}</td>
          <td>${patient.type}</td>
          <td>
            <select class="status">
               <option value="dang-cho" class="dang-cho1" >Đang chờ</option>
               <option value="da-huy" class="da-huy">Đã hủy</option>
               <option value="dang-dieu-tri" class="dang-dieu-tri">Đang điều trị</option>
                <option value="hoan-thanh" class="hoan-thanh">Hoàn thành</option>
            </select>
         </td>
         <td><button class="view-btn">Xem</button></td>
      `;

    tableBody.appendChild(row);
  });
}

// Gọi hàm để render dữ liệu
renderPatientsTable();


