
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

