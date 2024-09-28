document.addEventListener("DOMContentLoaded", function () {
  // Dữ liệu dịch
  const translations = {
    vi: {
      menuHome: "Trang chủ",
      menuAbout: "Dự án",
      menuTeam: "Đội",
      menuDownload: "Tải về",
      menuSourceCode: "Mã nguồn",
      homeTitle: "Bạn muốn học như thế nào?",
      homeDescription:
        "Nắm vững kiến thức đang học, ôn lại kiến thức đã học, bài kiểm tra thử và hoạt động học tập của QuickMem.",
      downloadButton: "Tải đề học",
      card1Title: "Học",
      card2Title: "Thẻ ghi nhớ",
      card3Title: "Kiểm tra",
      card4Title: "Ghép thẻ",
      aboutTitle1: "Nhiều lớp học, nhiều bài thi, một ứng dụng học tập tối ưu",
      aboutDescription1:
        "Ứng dụng học tập của chúng tôi được phát triển với mục tiêu giúp người học tiếp thu và ghi nhớ kiến thức một cách hiệu quả thông qua phương pháp học bằng thẻ ghi nhớ (flashcards) và trò chơi học tập.",
      aboutTitle2: "Chọn cách học mà bạn muốn",
      aboutDescription2:
        "Biến thẻ ghi nhớ thành câu hỏi trắc nghiệm và nhiều nội dung khác với chế độ học. Củng cố kiến thức của bạn bằng các trò chơi học tập như Ghép thẻ.",
      aboutTitle3: "Chuẩn bị ôn thi cho bất kỳ môn học nào",
      aboutDescription3:
        "Ghi nhớ mọi thứ với các bài kiểm tra thử và phiên học được cá nhân hóa. 98% học sinh cho biết Quizlet đã giúp họ hiểu bài hơn.",
      teamTitle: "Đội",
      member1: "Nguyễn Quang Minh",
      member2: "Hà Văn Đạo",
      member3: "Nguyễn Văn Hải",
      member4: "Nguyễn Đình Thi",
      member5: "Vũ Đức Huân",
      member6: "Vũ Hữu Nguyên",
      downloadTitle: "Tải về",
      sourceCodeTitle: "Mã nguồn",
      sourceCodeDescription:
        "Bạn có thể tìm thấy mã nguồn đầy đủ dự án này trên GitHub.",
      viewOnGitHub: "Xem trên GitHub",
      footerText: "&copy; 2024 QuickMem.",
    },
  };

  let currentLanguage = "en"; // Ngôn ngữ mặc định là tiếng Anh (từ HTML)

  // Xử lý sự kiện nhấn nút chuyển ngôn ngữ
  document
    .getElementById("language-toggle")
    .addEventListener("click", function (event) {
      event.preventDefault();
      // Chuyển đổi ngôn ngữ
      switchLanguage();
    });

  function switchLanguage() {
    // Chuyển sang tiếng Việt
    if (currentLanguage === "en") {
      const elementsToTranslate = {
        menuHome: document.getElementById("menu-home"),
        menuAbout: document.getElementById("menu-about"),
        menuTeam: document.getElementById("menu-team"),
        menuDownload: document.getElementById("menu-download"),
        menuSourceCode: document.getElementById("menu-source-code"),
        homeTitle: document.getElementById("home-title"),
        homeDescription: document.getElementById("home-description"),
        downloadButton: document.getElementById("download-button"),
        card1Title: document.getElementById("card1-title"),
        card2Title: document.getElementById("card2-title"),
        card3Title: document.getElementById("card3-title"),
        card4Title: document.getElementById("card4-title"),
        aboutTitle1: document.getElementById("about-title1"),
        aboutDescription1: document.getElementById("about-description1"),
        aboutTitle2: document.getElementById("about-title2"),
        aboutDescription2: document.getElementById("about-description2"),
        aboutTitle3: document.getElementById("about-title3"),
        aboutDescription3: document.getElementById("about-description3"),
        teamTitle: document.getElementById("team-title"),
        member1: document.getElementById("member1"),
        member2: document.getElementById("member2"),
        member3: document.getElementById("member3"),
        member4: document.getElementById("member4"),
        member5: document.getElementById("member5"),
        member6: document.getElementById("member6"),
        downloadTitle: document.getElementById("download-title"),
        sourceCodeTitle: document.getElementById("source-code-title"),
        sourceCodeDescription: document.getElementById(
          "source-code-description"
        ),
        footerText: document.getElementById("footer-text"),
        viewOnGitHub: document.querySelector(".github-logo span"),
      };

      // Dịch sang tiếng Việt
      Object.keys(elementsToTranslate).forEach((key) => {
        if (translations.vi[key]) {
          elementsToTranslate[key].textContent = translations.vi[key];
        }
      });

      // Chuyển nút thành "English"
      document.getElementById("language-toggle").textContent = "English";
      currentLanguage = "vi";
    } else {
      // Khi quay lại tiếng Anh (trả về nội dung ban đầu của HTML)
      location.reload(); // Reload lại trang để trả về trạng thái mặc định của HTML
    }
  }
});
