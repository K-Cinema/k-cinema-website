(function () {
    'use strict';

    // Change the version when publishing a new notice so it is shown again.
    const DISMISSED_KEY = 'kc-safety-notice-2026-10-01-dismissed';
    const notices = {
        ko: {
            bannerLabel: '사칭 주의',
            banner: "[사칭 주의] 당사를 사칭한 'k-cinee.com' 및 카카오톡 상품권 이벤트는 (주)케이시네마와 무관합니다. 공식 사이트는 www.k-cine.com 뿐입니다.",
            more: '자세히 보기',
            badge: '공식 안내',
            title: '[주의] (주)케이시네마 사칭 피싱 사기 안내',
            closeLabel: '공지 닫기',
            languageLabel: '공지 언어',
            confirm: '확인했습니다',
            intro: "최근 카카오톡 등에서 '케이시네마', 'K CINEMA', '네이버 영화 배급사'를 사칭하여 이벤트 참여를 유도하는 사례가 확인되었습니다.",
            methodsTitle: '확인된 사칭 수법',
            methods: [
                "카카오톡으로 접근해 네이버에서 특정 영화를 검색하고 '하트(좋아요)'를 누른 뒤 캡처를 보내면 상품권(CU·다이소·신세계·배달의민족 등)을 준다고 안내",
                '당사 공식 도메인(k-cine.com)과 유사한 k-cinee.com 사이트 가입을 요구하고 아이디를 받아 감',
                '이후 대화 내용을 삭제'
            ],
            policyTitle: '(주)케이시네마는',
            policy: [
                '카카오톡 개인 메시지로 상품권 이벤트나 부업·미션을 진행하지 않습니다.',
                '어떠한 경우에도 가입비, 수수료, 선입금, 티켓 구매 비용 등 금전을 요구하지 않습니다.',
                "'네이버 영화 배급사'가 아니며, 위 사이트·계정과 아무런 관련이 없습니다."
            ],
            channelsTitle: '공식 채널은 아래뿐입니다',
            website: '홈페이지',
            phone: '전화',
            guidance: '유사한 연락을 받으셨다면 링크를 누르거나 개인정보를 입력하지 마시고, 위 공식 연락처로 사실 여부를 확인해 주세요. 이미 가입하거나 송금하셨다면 즉시 경찰청(112, ecrm.police.go.kr) 또는 한국인터넷진흥원(118)에 신고해 주시기 바랍니다.',
            legal: '당사는 사칭 행위에 대해 수사기관 신고 등 법적 조치를 진행하고 있습니다.',
            date: '2026년 10월 1일',
            company: '(주)케이시네마'
        },
        // The English notice uses the concise version supplied for publication.
        en: {
            bannerLabel: 'Impersonation warning',
            banner: '[Impersonation warning] k-cinee.com and KakaoTalk gift-card events impersonating us are not affiliated with K-Cinema Inc. Our only official website is www.k-cine.com.',
            more: 'Read more',
            badge: 'Official notice',
            title: '[Warning] Phishing Scam Impersonating K-Cinema Inc.',
            closeLabel: 'Close notice',
            languageLabel: 'Notice language',
            confirm: 'I understand',
            intro: 'We have identified scammers on KakaoTalk impersonating "K-Cinema" and offering gift cards in exchange for "liking" movies on Naver and signing up at k-cinee.com. This site and these accounts have no connection to K-Cinema Inc.',
            policyTitle: 'K-Cinema Inc.',
            policy: [
                'K-Cinema never runs gift-card events or side-job "missions" through personal messages, and never asks for sign-up fees, deposits or ticket purchases.'
            ],
            channelsTitle: 'Our only official website is www.k-cine.com',
            website: 'Website',
            phone: 'Tel',
            guidance: 'If you have sent money or personal information, please report it to the police (112) or KISA (118) immediately.',
            date: 'October 1, 2026',
            company: 'K-Cinema Inc.'
        },
        zh: {
            bannerLabel: '谨防冒充',
            banner: '[谨防冒充] 冒充本公司的 k-cinee.com 及 KakaoTalk 礼品券活动与 K-Cinema 公司无关。唯一官方网站为 www.k-cine.com。',
            more: '查看详情',
            badge: '官方公告',
            title: '[警告] 关于冒充 K-Cinema 公司的网络钓鱼诈骗',
            closeLabel: '关闭公告',
            languageLabel: '公告语言',
            confirm: '我已知悉',
            intro: '近期发现有人在 KakaoTalk 等平台冒充“케이시네마”“K CINEMA”或“NAVER 电影发行商”，诱导用户参与活动。',
            methodsTitle: '已发现的冒充手法',
            methods: [
                '通过 KakaoTalk 联系用户，声称只要在 NAVER 搜索指定电影、点击“爱心（点赞）”并发送截图，即可获得 CU、大创、新世界、外卖平台“配送的民族”等品牌的礼品券。',
                '要求用户在与本公司官方域名 k-cine.com 相似的 k-cinee.com 网站注册，并索取用户账号。',
                '随后删除聊天记录。'
            ],
            policyTitle: 'K-Cinema 公司郑重声明',
            policy: [
                '我们不会通过 KakaoTalk 私信开展礼品券活动、兼职或“任务”。',
                '我们在任何情况下都不会要求支付注册费、手续费、预付款、购票费用等款项。',
                '我们并非“NAVER 电影发行商”，与上述网站及账号没有任何关联。'
            ],
            channelsTitle: '官方渠道仅限以下方式',
            website: '官方网站',
            phone: '电话',
            guidance: '如收到类似联系，请勿点击链接或输入个人信息，并通过上述官方联系方式核实。如已注册或汇款，请立即向韩国警方（112，ecrm.police.go.kr）或韩国互联网振兴院 KISA（118）举报。',
            legal: '本公司正在就冒充行为采取向侦查机关报案等法律措施。',
            date: '2026年10月1日',
            company: 'K-Cinema 公司'
        },
        vi: {
            bannerLabel: 'Cảnh báo mạo danh',
            banner: '[Cảnh báo mạo danh] Trang k-cinee.com và các chương trình tặng phiếu quà tặng qua KakaoTalk mạo danh chúng tôi không liên quan đến K-Cinema Inc. Website chính thức duy nhất là www.k-cine.com.',
            more: 'Xem chi tiết',
            badge: 'Thông báo chính thức',
            title: '[Cảnh báo] Lừa đảo giả mạo K-Cinema Inc.',
            closeLabel: 'Đóng thông báo',
            languageLabel: 'Ngôn ngữ thông báo',
            confirm: 'Tôi đã hiểu',
            intro: 'Gần đây, chúng tôi phát hiện các đối tượng trên KakaoTalk và những nền tảng khác mạo danh “케이시네마”, “K CINEMA” hoặc “nhà phát hành phim của Naver” để dụ người dùng tham gia sự kiện.',
            methodsTitle: 'Các thủ đoạn mạo danh đã được xác nhận',
            methods: [
                'Liên hệ qua KakaoTalk, hứa tặng phiếu quà tặng của CU, Daiso, Shinsegae, Baemin… nếu người dùng tìm một bộ phim cụ thể trên Naver, nhấn “tim (thích)” rồi gửi ảnh chụp màn hình.',
                'Yêu cầu đăng ký tại k-cinee.com, một trang có tên miền gần giống tên miền chính thức k-cine.com, rồi yêu cầu cung cấp tên đăng nhập.',
                'Sau đó xóa nội dung cuộc trò chuyện.'
            ],
            policyTitle: 'K-Cinema Inc. khẳng định',
            policy: [
                'Chúng tôi không tổ chức chương trình tặng phiếu quà tặng, việc làm thêm hay “nhiệm vụ” qua tin nhắn riêng trên KakaoTalk.',
                'Chúng tôi không yêu cầu bất kỳ khoản tiền nào, bao gồm phí đăng ký, phí dịch vụ, tiền trả trước hoặc tiền mua vé, trong bất kỳ trường hợp nào.',
                'Chúng tôi không phải là “nhà phát hành phim của Naver” và không có bất kỳ liên hệ nào với trang web hay các tài khoản nêu trên.'
            ],
            channelsTitle: 'Chỉ có các kênh chính thức sau',
            website: 'Website',
            phone: 'Điện thoại',
            guidance: 'Nếu nhận được liên hệ tương tự, vui lòng không nhấn vào liên kết hoặc nhập thông tin cá nhân. Hãy xác minh qua thông tin liên hệ chính thức ở trên. Nếu đã đăng ký hoặc chuyển tiền, hãy báo ngay cho cảnh sát Hàn Quốc (112, ecrm.police.go.kr) hoặc Cơ quan Internet và An ninh Hàn Quốc KISA (118).',
            legal: 'Chúng tôi đang tiến hành các biện pháp pháp lý đối với hành vi mạo danh, bao gồm trình báo cơ quan điều tra.',
            date: 'Ngày 1 tháng 10 năm 2026',
            company: 'K-Cinema Inc.'
        },
        th: {
            bannerLabel: 'ระวังการแอบอ้าง',
            banner: '[ระวังการแอบอ้าง] เว็บไซต์ k-cinee.com และกิจกรรมแจกบัตรของขวัญทาง KakaoTalk ที่แอบอ้างชื่อบริษัท ไม่มีส่วนเกี่ยวข้องกับ K-Cinema Inc. เว็บไซต์ทางการเพียงแห่งเดียวคือ www.k-cine.com',
            more: 'อ่านรายละเอียด',
            badge: 'ประกาศอย่างเป็นทางการ',
            title: '[คำเตือน] การหลอกลวงแบบฟิชชิงโดยแอบอ้างชื่อ K-Cinema Inc.',
            closeLabel: 'ปิดประกาศ',
            languageLabel: 'ภาษาของประกาศ',
            confirm: 'รับทราบแล้ว',
            intro: 'เมื่อเร็ว ๆ นี้ เราพบผู้แอบอ้างชื่อ “케이시네마”, “K CINEMA” และ “ผู้จัดจำหน่ายภาพยนตร์ของ Naver” ทาง KakaoTalk และช่องทางอื่น ๆ เพื่อชักชวนให้เข้าร่วมกิจกรรม',
            methodsTitle: 'รูปแบบการแอบอ้างที่ตรวจพบ',
            methods: [
                'ติดต่อผ่าน KakaoTalk โดยอ้างว่าจะมอบบัตรของขวัญจาก CU, Daiso, Shinsegae, Baemin และแบรนด์อื่น ๆ หากค้นหาภาพยนตร์ที่กำหนดบน Naver กด “หัวใจ (ถูกใจ)” แล้วส่งภาพหน้าจอให้',
                'ขอให้สมัครสมาชิกเว็บไซต์ k-cinee.com ซึ่งมีชื่อคล้ายโดเมนทางการของบริษัท k-cine.com แล้วขอชื่อผู้ใช้',
                'จากนั้นลบข้อความสนทนา'
            ],
            policyTitle: 'K-Cinema Inc. ขอชี้แจงว่า',
            policy: [
                'บริษัทไม่จัดกิจกรรมแจกบัตรของขวัญ งานเสริม หรือ “ภารกิจ” ผ่านข้อความส่วนตัวทาง KakaoTalk',
                'บริษัทไม่เรียกเก็บเงินใด ๆ ไม่ว่าจะเป็นค่าสมัคร ค่าธรรมเนียม เงินชำระล่วงหน้า หรือค่าซื้อตั๋ว ไม่ว่าในกรณีใดก็ตาม',
                'บริษัทไม่ใช่ “ผู้จัดจำหน่ายภาพยนตร์ของ Naver” และไม่มีส่วนเกี่ยวข้องกับเว็บไซต์หรือบัญชีดังกล่าว'
            ],
            channelsTitle: 'ช่องทางทางการมีเพียงช่องทางต่อไปนี้',
            website: 'เว็บไซต์',
            phone: 'โทรศัพท์',
            guidance: 'หากได้รับการติดต่อในลักษณะนี้ โปรดอย่าคลิกลิงก์หรือกรอกข้อมูลส่วนบุคคล และตรวจสอบข้อเท็จจริงผ่านช่องทางติดต่อทางการด้านบน หากสมัครสมาชิกหรือโอนเงินไปแล้ว โปรดแจ้งตำรวจเกาหลีใต้ (112, ecrm.police.go.kr) หรือสำนักงานอินเทอร์เน็ตและความมั่นคงปลอดภัยแห่งเกาหลี KISA (118) ทันที',
            legal: 'บริษัทกำลังดำเนินมาตรการทางกฎหมายต่อการแอบอ้างดังกล่าว รวมถึงการแจ้งความต่อหน่วยงานสอบสวน',
            date: '1 ตุลาคม ค.ศ. 2026',
            company: 'K-Cinema Inc.'
        }
    };

    const dialog = document.getElementById('safety-notice');
    const openButton = document.querySelector('[data-notice-open]');

    function render(lang) {
        const copy = notices[lang] || notices.en;
        document.querySelectorAll('[data-notice]').forEach(element => {
            const value = copy[element.getAttribute('data-notice')];
            element.hidden = !value;
            element.textContent = value || '';
        });
        document.querySelectorAll('[data-notice-label]').forEach(element => {
            element.setAttribute('aria-label', copy[element.getAttribute('data-notice-label')]);
        });
        document.querySelectorAll('[data-notice-section]').forEach(element => {
            element.hidden = !copy[element.getAttribute('data-notice-section')];
        });
        document.querySelectorAll('[data-notice-list]').forEach(element => {
            const items = copy[element.getAttribute('data-notice-list')] || [];
            element.replaceChildren(...items.map(text => {
                const item = document.createElement('li');
                item.textContent = text;
                return item;
            }));
        });
        dialog.querySelector('.safety-notice-body').scrollTop = 0;
    }

    function openNotice() {
        if (dialog.open) return;
        dialog.showModal();
        document.documentElement.classList.add('safety-notice-open');
        dialog.querySelector('.safety-notice-body').scrollTop = 0;
    }

    document.addEventListener('kc:languagechange', event => render(event.detail.lang));
    openButton.addEventListener('click', openNotice);
    dialog.querySelectorAll('[data-notice-close]').forEach(button => {
        button.addEventListener('click', () => dialog.close());
    });
    // Native dialog also handles Escape, focus containment and the inert backdrop.
    dialog.addEventListener('close', () => {
        document.documentElement.classList.remove('safety-notice-open');
        try { sessionStorage.setItem(DISMISSED_KEY, '1'); } catch (e) {}
        openButton.focus({ preventScroll: true });
    });

    function init() {
        render(document.documentElement.lang);
        let dismissed = false;
        try { dismissed = sessionStorage.getItem(DISMISSED_KEY) === '1'; } catch (e) {}
        if (!dismissed) openNotice();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
