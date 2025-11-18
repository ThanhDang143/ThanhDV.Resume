const cvData = {
    fullName: "Đặng Văn Thanh",
    jobTitle: "Unity Game Programmer",
    about: `Mình là Đặng Văn Thanh. Game Developer với 3 năm kinh nghiệm làm việc với Unity và C#. Với kiến thức về OOP, ECS, Job System, Design Pattern, mình đã tham gia phát triển nhiều dự án từ hyper, casual và hybrid casual... Mình có thể làm việc cá nhân và làm việc nhóm tốt.<br><br>Hiện tại, mình đang tìm kiếm cơ hội để được đóng góp vào các dự án game và phát triển kỹ năng chuyên sâu về mặt technical.`,
    sectionTitles: {
        about: "Giới thiệu",
        workExperience: "Kinh nghiệm làm việc",
        personalProjects: "Dự án cá nhân",
        contact: "Liên hệ",
        education: "Học vấn",
        skills: "Kỹ năng"
    },
    contact: {
        phone: "0358040000",
        email: "vanthanh1998@gmail.com",
        address: "Trung Văn, Nam Từ Liêm, Hà Nội",
        website: "https://knowledge.thanhdv.icu",
        websiteDisplay: "knowledge.thanhdv.icu"
    },
    education: {
        school: "Đại học Mỏ - Địa chất Hà Nội",
        major: "Khoa IT - Chuyên ngành Khoa học Máy tính",
        period: "09/2016 - 09/2022"
    },
    workExperience: [
        {
            company: "Bravestars",
            period: "12/2022 - 03/2024",
            title: "GAME DEVELOPER",
            description: "Phát triển dự án game hybrid-casual theo quy trình Agile Scrum.",
            hasProducts: true,
            details: [
                {
                    name: "Candy Battle:",
                    description: "Game thể loại Survivor.io.",
                    points: [
                        "Vai trò: Phát triển hệ thống combat (Vũ khí, Skill, AI Enemy, Inventory...).",
                        "Công nghệ: Ứng dụng ECS để tối ưu hiệu năng game.",
                        `<a href="https://www.taptap.io/app/320447" target="_blank">Link TapTap</a>`
                    ]
                },
                {
                    name: "Cat Restaurant Tycoon:",
                    description: "Game quản lý nhà hàng cho iOS.",
                    points: [
                        "Vai trò: Phát triển tính năng Inventory, Daily Check-in.",
                        `<a href="https://www.taptap.io/app/33656534" target="_blank">Link App Store</a>`
                    ]
                }
            ]
        },
        {
            company: "Omegame",
            period: "03/2021 - 12/2022",
            title: "GAME DEVELOPER",
            description: null,
            hasProducts: false,
            details: [
                "Phát triển, bảo trì các dự án game hyper-casual.",
                "Tích hợp quảng cáo, tracking cho game.",
                "Quản lý, phân bố công việc cho các thành viên trong team."
            ]
        }
    ],
    personalProjects: [
        {
            name: "UNITY STARTER KIT",
            period: "08/2024",
            details: [
                "Dự án tổng hợp các tools và tiện ích cần thiết để triển khai nhanh một dự án game với Unity.",
                `<a href="https://github.com/ThanhDang143/UnityStarterKit.git" target="_blank">Link GitHub</a>`
            ]
        },
        {
            name: "ALPHA",
            period: "10/2022",
            details: [
                "Game bắn súng multiplayer góc nhìn thứ 3.",
                "Sử dụng Unity, C# và Photon để làm multi-player.",
                `<a href="https://youtu.be/YGOPBS1dHss" target="_blank">Link YouTube</a>`
            ]
        },
        {
            name: "TANK",
            period: "10/2020",
            details: [
                "Sản phẩm bắn tank góc nhìn thứ 3.",
                "Sử dụng Unreal Engine 4 và C++ để tìm hiểu thêm engine khác ngoài Unity.",
                `<a href="https://youtu.be/5V0fplvsn70" target="_blank">Link YouTube</a>`
            ]
        }
    ],
    skills: [
        {
            category: "Ngôn ngữ lập trình và Game Engine",
            items: ["C#", "Unity"]
        },
        {
            category: "Khác",
            items: ["Git", "Firebase", "Photoshop", "Figma", "ClickUp", "Jira"]
        }
    ]
};