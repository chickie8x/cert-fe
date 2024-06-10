export const formatCurrency = (n) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })

  return formatter.format(n)
}

export const mockData = {
  dumps: [
    {
      name: 'CHFI_v10',
      desc: 'Computer Hacking Forensic Investigator (CHFI)_v10',
      price: 380000,
      code: 'CHFI_v10',
      updatedAt: '08/06/2024',
      rate: '75 - 85%',
      createdBy: 'Eccouncil'
    },

    {
      name: 'PMP',
      desc: 'Computer Hacking Forensic Investigator (CHFI)_v10',
      price: 380000,
      code: 'PMP',
      updatedAt: '08/06/2024',
      rate: '75 - 85%',
      createdBy: 'PMP'
    },

    {
      name: 'CHFI_v10',
      desc: 'Computer Hacking Forensic Investigator (CHFI)_v10',
      price: 380000,
      code: 'CHFI_v10',
      updatedAt: '08/06/2024',
      rate: '75 - 85%',
      createdBy: 'Eccouncil'
    },

    {
      name: 'CHFI_v10',
      desc: 'Computer Hacking Forensic Investigator (CHFI)_v10',
      price: 380000,
      code: 'CHFI_v10',
      updatedAt: '08/06/2024',
      rate: '75 - 85%',
      createdBy: 'Eccouncil'
    },

    {
      name: 'CHFI_v10',
      desc: 'Computer Hacking Forensic Investigator (CHFI)_v10',
      price: 380000,
      code: 'CHFI_v10',
      updatedAt: '08/06/2024',
      rate: '75 - 85%',
      createdBy: 'Eccouncil'
    },

    {
      name: 'CHFI_v10',
      desc: 'Computer Hacking Forensic Investigator (CHFI)_v10',
      price: 380000,
      code: 'CHFI_v10',
      updatedAt: '08/06/2024',
      rate: '75 - 85%',
      createdBy: 'Eccouncil'
    },

    {
      name: 'CHFI_v10',
      desc: 'Computer Hacking Forensic Investigator (CHFI)_v10',
      price: 380000,
      code: 'CHFI_v10',
      updatedAt: '08/06/2024',
      rate: '75 - 85%',
      createdBy: 'Eccouncil'
    },

    {
      name: 'CHFI_v10',
      desc: 'Computer Hacking Forensic Investigator (CHFI)_v10',
      price: 380000,
      code: 'CHFI_v10',
      updatedAt: '08/06/2024',
      rate: '75 - 85%',
      createdBy: 'Eccouncil'
    },

    {
      name: 'CHFI_v10',
      desc: 'Computer Hacking Forensic Investigator (CHFI)_v10',
      price: 380000,
      code: 'CHFI_v10',
      updatedAt: '08/06/2024',
      rate: '75 - 85%',
      createdBy: 'Eccouncil'
    },

    {
      name: 'CHFI_v10',
      desc: 'Computer Hacking Forensic Investigator (CHFI)_v10',
      price: 380000,
      code: 'CHFI_v10',
      updatedAt: '08/06/2024',
      rate: '75 - 85%',
      createdBy: 'Eccouncil'
    }
  ],

  students: [
    {
      name: 'student1',
      img: '/assets/images/students/st1.jpg'
    },

    {
      name: 'student2',
      img: '/assets/images/students/st2.jpg'
    },

    {
      name: 'student3',
      img: '/assets/images/students/st3.jpg'
    },

    {
      name: 'student4',
      img: '/assets/images/students/st4.jpg'
    },

    {
      name: 'student5',
      img: '/assets/images/students/st5.jpg'
    },

    {
      name: 'student6',
      img: '/assets/images/students/st6.jpg'
    }
  ],

  videoCourses: [
    {
      title: 'Tự học linux',
      img: '/assets/images/video-course/khoa-hoc-linux-that-la-don-gian.jpg'
    },

    {
      title: 'Học Azure cho người mới bắt đầu AZ-104',
      img: '/assets/images/video-course/az-104.jpg'
    },

    {
      title: '18h vượt qua bài thi AZ-305',
      img: '/assets/images/video-course/az0305.jpg'
    },

    {
      title: 'Tự học linux nâng cao',
      img: '/assets/images/video-course/linux-advanced.jpg'
    },

    {
      title: 'Thành thạo cloud Azure trong 40h',
      img: '/assets/images/video-course/azure-la-gi.jpg'
    },

    {
      title: 'Học AWS cho người mới bắt đầu',
      img: '/assets/images/video-course/aws.jpg'
    }
  ],

  certs: [
    {
      img: '/assets/images/cert/az-104.jpg'
    },

    {
      img: '/assets/images/cert/azure_305.jpg'
    },

    {
      img: '/assets/images/cert/azure-f.jpg'
    },

    {
      img: '/assets/images/cert/exam-az400.png'
    },

    {
      img: '/assets/images/cert/gcp.png'
    }
  ],

  news: [
    {
      title: '8 Bước Trong Lộ Trình Trở Thành DevOps Engineer',
      desc: 'Devops Engineer từ lâu đã là một nghề hot trong bộ các nghành liên quan tới IT, bài viết này sẽ chỉ ra 8 bước trong lộ trình trở thành Devops Engineer.DevOps Engineer không đơn thuần là thao tác với phần cứng, viết vài dòng CICD cho code auto run build deploy. 8 bước sau đây sẽ cho anh em cái nhìn tổng quan từng bước để trở thành kỹ sư DevOps.Gét gô thôi anh em ơi!',
      img: '/assets/images/news/lo-trinh-tro-thanh-devops-engineer.jpg'
    },

    {
      title: 'Google Cloud Platform là gì? Các ứng dụng của GCP cho doanh nghiệp',
      desc: 'Điện toán đám mây dường như đang trở thành xu thế trong thời đại bùng nổ công nghệ số và doanh nghiệp bắt buộc phải tìm hiểu và tiến hành việc chuyển đổi để có thể cạnh tranh và thích ứng với những biến động của thị trường, xã hội. Trong đó, Google Cloud Platform gia nhập cuộc chơi như một công cụ, một vũ khí đắc lực hỗ trợ các doanh nghiệp trên lộ trình chuyển đổi',
      img: '/assets/images/news/google-cloud-platform-la-gi.png'
    },

    {
      title: 'Azure là gì? Tại Sao Azure lại phổ biến trong doanh nghiệp',
      desc: 'Microsoft Azure được đánh giá là dịch vụ điện toán đám mây mang tiềm năng vô hạn và tạo ra nhiều giá trị nhất cho doanh nghiệp. Với nền tảng nhanh, linh hoạt, độ bảo mật cao và đặc biệt là cho phép khai thác, lưu trữ không giới hạn, Azure đã dần trở thành giải pháp cloud computing đầu ngành. Vậy cụ thể thì Azure là gì và mang lại lợi ích ra sao, mời các bạn cùng tìm hiểu các thông tin trong bài viết dưới đây. ',
      img: '/assets/images/news/azure-930x620.jpg'
    },

    {
      title: 'DevOps trend – 8 dự đoán trong nhiều năm tới',
      desc: 'DevOps đã trở thành một trọng tâm chính và đã định hình thế giới phần mềm trong vài năm qua. Các chuyên gia nói rằng DevOps sẽ là xu hướng chủ đạo và mức độ phổ biến của nó sẽ đạt đến đỉnh cao trong nhiều năm tới.',
      img: '/assets/images/news/devops-cycle.png'
    },

    {
      title: 'Tìm hiểu về amazon web service',
      desc: 'Amazon web services là một nền tảng điện toán đám mây phát triển toàn diện được cung cấp bởi Amazon.com. Dịch vụ Web đôi khi được gọi là dịch vụ đám mây hoặc các dịch vụ điện toán từ xa. Các dịch vụ AWS đầu tiên đã được đưa ra vào năm 2006 để cung cấp các dịch vụ trực tuyến cho các trang web và các ứng dụng phía máy khách.',
      img: '/assets/images/news/aws.jpg'
    }
  ],

  community: [
    {
      title: 'Group 1000+',
      desc: 'Thành viên chia sẻ kiến thức hữu ích hàng ngày của cộng đồng CloudCert',
      img: '/assets/images/community/group.jpg'
    },

    {
      title: 'Fanpage 1000+ like',
      desc: 'Nơi chia sẻ, thông báo sự kiện của cộng đồng CloudCert',
      img: '/assets/images/community/fanpage.jpg'
    },

    {
      title: 'Kênh 1000+ video miễn phí ',
      desc: 'Các khóa học thi chứng chỉ uy tín của cộng đồng CloudCert',
      img: '/assets/images/community/youtube.jpg'
    }
  ]
}
