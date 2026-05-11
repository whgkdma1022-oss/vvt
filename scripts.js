// Firebase Configuration (Replace with your own keys)
const firebaseConfig = {
    apiKey: "AIzaSyBo106wOIYIWzmzcdnkUnMpibonrr652hY",
    authDomain: "robolease-global.firebaseapp.com",
    projectId: "robolease-global",
    storageBucket: "robolease-global.firebasestorage.app",
    messagingSenderId: "362274388588",
    appId: "1:362274388588:web:5042987d3bc6acfcb0b649",
    measurementId: "G-45CPJNV1RX"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();
}

let currentUser = null;
let isAdmin = false;

const translations = {
    ko: {
        nav_solutions: "렌탈 솔루션",
        nav_fleet: "로봇 함대",
        nav_industries: "주요 산업",
        nav_community: "커뮤니티",
        nav_resources: "리소스",
        board_hero_title: "로보리스 커뮤니티",
        board_hero_desc: "현장 엔지니어들이 공유하는 자율 주행 로봇 점검 및 유지보수 가이드",
        board_cat1: "산업 안전",
        board_cat2: "자율 주행",
        board_cat3: "데이터 분석",
        board_cat4: "유지보수",
        board_sidebar_guide: "커뮤니티 가이드라인",
        board_sidebar_notice: "공지사항",
        btn_contact: "영업 문의",
        hero_tagline: "산업 자동화의 단순화",
        hero_title: "로봇 도입의 장벽을 <br>획기적으로 낮춥니다",
        hero_desc: "세계에서 가장 진보된 자율 주행 검사 로봇을 유연한 RaaS 모델로 만나보세요. CAPEX에서 OPEX로의 전환을 통해 오늘부터 디지털 혁신을 시작하십시오.",
        hero_btn: "로봇 라인업 확인",
        sol_tagline1: "Continuous Asset Monitoring",
        sol_title1: "루틴한 점검의 자동화",
        sol_desc1: "열화상 및 가스 누출 감지 센서를 탑재한 ANYmal이 위험 지역을 24시간 감시합니다. 인력 투입 없이도 자산의 상태를 실시간으로 확인하세요.",
        sol_feat1_1: "열화상 이상 징후 실시간 감지",
        sol_feat1_2: "자율 주행 경로 최적화",
        sol_tagline2: "3D Digital Twin Capture",
        sol_title2: "디지털 트윈으로 구현하는 현장",
        sol_desc2: "라이다(LiDAR) 스캐닝을 통해 현장의 정밀한 3D 맵을 생성합니다. 물리적 공간을 디지털로 복제하여 원격지에서도 현장 상황을 완벽히 통제하십시오.",
        sol_tagline3: "Data Driven Intelligence",
        sol_title3: "데이터에서 얻는 유지보수 지능",
        sol_desc3: "단순한 데이터 수집을 넘어, AI 분석을 통해 장비의 수명과 교체 시기를 예측합니다. 예방적 유지보수로 다운타임을 획기적으로 줄이세요.",
        solutions_title: "렌탈 패키지",
        solutions_desc: "귀사의 비즈니스 규모에 맞는 유연한 구독 모델을 선택하세요.",
        fleet_tagline: "우리의 로봇 함대",
        fleet_title: "ANYmal: 자율 주행 검사의 표준",
        fleet_desc: "열화상 카메라, 음향 센서 및 LiDAR를 장착한 ANYmal은 복잡한 환경에서 타의 추종을 불허하는 상황 인지 능력을 제공합니다.",
        fleet_li1: "3D 디지털 트윈 캡처",
        fleet_li2: "열악한 환경을 위한 IP67 등급",
        fleet_li3: "90분 연속 작동",
        fleet_li4: "자동 도킹 및 충전",
        industries_title: "주요 적용 산업",
        industries_desc: "에너지부터 화학까지, 산업 리더들이 더 똑똑하고 안전하게 운영할 수 있도록 돕습니다.",
        industries_oil_title: "석유 및 가스",
        industries_oil_desc: "위험 지역에 인력을 투입하지 않고 해상 플랜트 및 정유 시설을 안전하게 검사합니다.",
        industries_chem_title: "화학 공정",
        industries_chem_desc: "특수 방폭(ATEX) 인증 로봇 유닛을 통해 화학 공장을 상시 모니터링합니다.",
        industries_power_title: "전력 및 그리드",
        industries_power_desc: "변전소 검사를 자동화하여 정전을 방지하고 유지보수 주기를 최적화합니다.",
        contact_title: "RaaS 시작하기",
        contact_desc: "이메일 없이 간편하게 렌탈 솔루션을 문의하세요.",
        contact_first_name: "성함",
        contact_last_name: "성",
        contact_company: "회사명",
        contact_position: "직책",
        contact_phone: "전화번호",
        contact_industry_select: "산업군 선택",
        contact_msg_placeholder: "배포 국가 및 해결하려는 과제를 입력해 주세요",
        contact_btn: "렌탈 솔루션 문의하기",
        footer_desc: "산업 검사 및 모니터링을 위한 Robot-as-a-Service 솔루션의 글로벌 리더입니다.",
        footer_quick_links: "빠른 링크",
        footer_fleet: "로봇 함대",
        footer_solutions: "솔루션",
        footer_industries: "주요 산업",
        footer_case_studies: "사례 연구",
        footer_compliance: "준법 감시",
        footer_privacy: "개인정보 취급방침",
        footer_terms: "서비스 이용약관",
        footer_iso: "ISO 27001",
        footer_safety: "안전 문서",
        footer_news: "뉴스레터",
        footer_news_desc: "산업용 로봇의 최신 소식을 받아보세요.",
        footer_subscribe: "구독하기",
        footer_copyright: "&copy; 2026 RoboLease Global AG. All rights reserved.",
        footer_swiss: "Swiss Engineered. Global Excellence.",
        roi_title: "ROI 계산기",
        roi_desc: "수동 검사에서 RaaS 모델로 전환 시 절감되는 비용을 예상해 보세요.",
        roi_label_manual: "월간 수동 검사 비용 ($)",
        roi_label_hours: "월간 검사 시간",
        roi_savings_label: "RoboLease 도입 시 예상 월간 절감액",
        roi_note: "*표준 ANYmal 구독 vs 인력 비용 및 위험 완화를 기준으로 합니다."
    },
    en: {
        nav_solutions: "Rental Solutions",
        nav_fleet: "Robot Fleet",
        nav_industries: "Industries",
        nav_community: "Community",
        nav_resources: "Resources",
        board_hero_title: "RoboLease Community",
        board_hero_desc: "Autonomous robot inspection and maintenance guides shared by field engineers",
        board_cat1: "Industrial Safety",
        board_cat2: "Autonomous",
        board_cat3: "Data Analytics",
        board_cat4: "Maintenance",
        board_sidebar_guide: "Community Guidelines",
        board_sidebar_notice: "Announcements",
        btn_contact: "Contact Sales",
        hero_tagline: "Industrial Automation Simplified",
        hero_title: "Lowering the Barrier <br>to Robot Adoption",
        hero_desc: "Access the world's most advanced autonomous inspection robots through our flexible RaaS model. Shift from CAPEX to OPEX and start your digital transformation today.",
        hero_btn: "Explore the Fleet",
        sol_tagline1: "Continuous Asset Monitoring",
        sol_title1: "Automating Routine Inspections",
        sol_desc1: "Equipped with thermal and gas sensors, ANYmal monitors hazardous areas 24/7. Gain real-time asset visibility without human risk.",
        sol_feat1_1: "Real-time thermal anomaly detection",
        sol_feat1_2: "Optimized autonomous navigation",
        sol_tagline2: "3D Digital Twin Capture",
        sol_title2: "Bringing the Field to Digital",
        sol_desc2: "Create precise 3D maps using LiDAR. Replicate physical spaces digitally to maintain full control remotely.",
        sol_tagline3: "Data Driven Intelligence",
        sol_title3: "Maintenance Intelligence from Data",
        sol_desc3: "Go beyond collection. Predict equipment life and replacement cycles using AI analysis to minimize downtime.",
        solutions_title: "Rental Packages",
        solutions_desc: "Select a flexible subscription model that fits your business scale.",
        fleet_tagline: "Our Fleet",
        fleet_title: "ANYmal: The Standard in Autonomous Inspection",
        fleet_desc: "Equipped with thermal cameras, acoustic sensors, and LiDAR, ANYmal provides unparalleled situational awareness in complex environments.",
        fleet_li1: "3D Digital Twin Capture",
        fleet_li2: "IP67 Rated for Harsh Environments",
        fleet_li3: "90-Minute Continuous Operations",
        fleet_li4: "Automated Docking and Charging",
        industries_title: "Industries We Serve",
        industries_desc: "From energy to chemicals, we help industry leaders stay safer and smarter.",
        industries_oil_title: "Oil & Gas",
        industries_oil_desc: "Safe inspection of offshore rigs and refineries without exposing human personnel to hazardous zones.",
        industries_chem_title: "Chemicals",
        industries_chem_desc: "Continuous monitoring of chemical plants with specialized ATEX-certified robotic units.",
        industries_power_title: "Power & Grid",
        industries_power_desc: "Automated substation inspections to prevent outages and optimize maintenance cycles.",
        contact_title: "Get Started with RaaS",
        contact_desc: "Contact us without an email for a simplified experience.",
        contact_first_name: "First Name",
        contact_last_name: "Last Name",
        contact_company: "Company",
        contact_position: "Position",
        contact_phone: "Phone Number",
        contact_industry_select: "Select Industry",
        contact_msg_placeholder: "Tell us about your project and target country",
        contact_btn: "Inquiry for RaaS Solution",
        footer_desc: "The global leader in Robot-as-a-Service solutions for industrial inspection and monitoring.",
        footer_quick_links: "Quick Links",
        footer_fleet: "Fleet",
        footer_solutions: "Solutions",
        footer_industries: "Industries",
        footer_case_studies: "Case Studies",
        footer_compliance: "Compliance",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_iso: "ISO 27001",
        footer_safety: "Safety Docs",
        footer_news: "News",
        footer_news_desc: "Join our newsletter for the latest in industrial robotics.",
        footer_subscribe: "Subscribe",
        footer_copyright: "&copy; 2026 RoboLease Global AG. All rights reserved.",
        footer_swiss: "Swiss Engineered. Global Excellence."
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
}

// --- Auth & Role Logic (ID Based) ---
if (typeof firebase !== 'undefined') {
    firebase.auth().onAuthStateChanged(user => {
        const statusEl = document.getElementById('auth-status');
        const authBtn = document.getElementById('auth-btn');
        const newPostBtn = document.getElementById('btn-new-post');

        if (user) {
            currentUser = user;
            const userId = user.email.split('@')[0];
            isAdmin = userId === 'admin';
            if (statusEl) statusEl.innerText = `${userId} (${isAdmin ? 'Admin' : 'User'})`;
            if (authBtn) authBtn.innerText = 'Logout';
            if (newPostBtn) {
                newPostBtn.style.display = 'block';
                newPostBtn.onclick = () => openModal('post');
            }
        } else {
            currentUser = null;
            isAdmin = false;
            if (statusEl) statusEl.innerText = '';
            if (authBtn) authBtn.innerText = 'Login';
            if (newPostBtn) {
                newPostBtn.style.display = 'block'; // 버튼은 항상 보여줌
                newPostBtn.onclick = () => {
                    alert('로그인이 필요한 서비스입니다.');
                    openModal('login');
                };
            }
        }
        if (document.getElementById('post-list')) loadPosts();
    });
}

// Login Toggle Logic
const toggleReg = document.getElementById('toggle-reg');
if (toggleReg) {
    toggleReg.addEventListener('click', (e) => {
        e.preventDefault();
        const regFields = document.getElementById('register-fields');
        const loginTitle = document.querySelector('#login-modal h3');
        const loginBtn = document.getElementById('btn-do-login');

        if (regFields.style.display === 'none') {
            regFields.style.display = 'block';
            loginTitle.innerText = 'Sign Up';
            loginBtn.innerText = '회원가입';
            toggleReg.innerText = '로그인으로 돌아가기';
        } else {
            regFields.style.display = 'none';
            loginTitle.innerText = 'Login';
            loginBtn.innerText = '로그인';
            toggleReg.innerText = '회원가입';
        }
    });
}

const btnDoLogin = document.getElementById('btn-do-login');
if (btnDoLogin) {
    btnDoLogin.addEventListener('click', async () => {
        const userId = document.getElementById('login-id').value;
        const pw = document.getElementById('login-pw').value;
        const isRegistering = document.getElementById('register-fields').style.display === 'block';

        if (!userId || !pw) return alert('아이디와 비밀번호를 입력하세요.');
        
        // Mock email for Firebase compatibility
        const mockEmail = `${userId}@robolease.local`;

        try {
            if (isRegistering) {
                const name = document.getElementById('reg-name').value;
                const dept = document.getElementById('reg-dept').value;
                const userCredential = await firebase.auth().createUserWithEmailAndPassword(mockEmail, pw);
                await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
                    userId, name, dept, role: 'user'
                });
                alert('회원가입 성공!');
            } else {
                await firebase.auth().signInWithEmailAndPassword(mockEmail, pw);
            }
            closeModal();
        } catch (e) {
            alert('인증 실패: ' + e.message);
        }
    });
}

// --- DOM Initializers ---
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.addEventListener('change', (e) => switchLanguage(e.target.value));

    const menuToggle = document.getElementById('menu-toggle');
    const navContainer = document.getElementById('nav-container');
    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            menuToggle.innerText = navContainer.classList.contains('active') ? '✕' : '☰';
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 시각적 리듬을 위한 순차적 딜레이 적용
                setTimeout(() => {
                    entry.target.classList.add('fadeIn');
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.z-row, .card, .section-header').forEach(el => {
        el.classList.add('animate');
        observer.observe(el);
    });

    initROICalculator();
    initBoardCategories();
    updateCategoryCounts(); // 숫자 업데이트 추가
    switchLanguage('ko');
});

// Category Filtering Logic
function initBoardCategories() {
    document.querySelectorAll('.cat-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('h4').innerText;
            alert(`${category} 주제의 게시글을 필터링합니다.`);
            loadPosts(category);
        });
    });
}

// Modal Helpers
function openModal(type) {
    const container = document.getElementById('modal-container');
    if (!container) return;
    container.classList.add('active');
    document.getElementById('login-modal').style.display = type === 'login' ? 'block' : 'none';
    const postModal = document.getElementById('post-modal');
    if (postModal) postModal.style.display = type === 'post' ? 'block' : 'none';
}

function closeModal() {
    const container = document.getElementById('modal-container');
    if (container) container.classList.remove('active');
}
window.closeModal = closeModal;

const authBtn = document.getElementById('auth-btn');
if (authBtn) {
    authBtn.addEventListener('click', () => {
        if (currentUser) firebase.auth().signOut();
        else openModal('login');
    });
}

const btnNewPost = document.getElementById('btn-new-post');
if (btnNewPost) btnNewPost.addEventListener('click', () => openModal('post'));

const btnSavePost = document.getElementById('btn-save-post');
if (btnSavePost) {
    btnSavePost.addEventListener('click', async () => {
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        const category = document.getElementById('post-category').value;
        const userId = currentUser.email.split('@')[0];
        try {
            await firebase.firestore().collection('posts').add({
                title, content, category, authorId: userId, uid: currentUser.uid, createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            closeModal();
            // Reset fields
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
        } catch (e) { alert(e.message); }
    });
}

function loadPosts(filter = null) {
    const list = document.getElementById('post-list');
    if (!list) return;

    let query = firebase.firestore().collection('posts').orderBy('createdAt', 'desc');
    
    query.onSnapshot(snap => {
        list.innerHTML = '';
        if (snap.empty) {
            list.innerHTML = `
                <div class="card" style="padding: 100px; text-align: center; border-style: dashed;">
                    <span style="font-size: 3rem; display: block; margin-bottom: 20px;">📋</span>
                    <h3>아직 등록된 논의가 없습니다.</h3>
                    <p style="color: #999;">첫 번째 전문가가 되어 실제 로봇 운용 경험을 공유해 주세요!</p>
                </div>
            `;
            return;
        }

        snap.forEach(doc => {
            const d = doc.data();
            const id = doc.id;
            
            // 필터가 있는 경우 스킵 로직 (실제 DB 필터링으로 확장 가능)
            if (filter && d.category !== filter && filter !== '전체') return;

            const canDel = isAdmin || (currentUser && currentUser.uid === d.uid);
            const item = document.createElement('div');
            item.className = 'post-item card'; // 카드 스타일 적용
            item.style.marginBottom = '15px';
            item.innerHTML = `
                <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                        ${d.authorId === 'admin' ? '<span class="admin-badge">NOTICE</span>' : '<span style="background: #eee; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">' + (d.category || 'General') + '</span>'}
                        <strong style="font-size: 1.1rem;">${d.title}</strong>
                    </div>
                    <div class="post-meta" style="font-size: 0.8rem; color: #999;">ID: ${d.authorId} | ${d.createdAt ? d.createdAt.toDate().toLocaleString() : '작성 직후'}</div>
                    <p style="margin-top: 10px; color: #555; line-height: 1.5;">${d.content}</p>
                </div>
                ${canDel ? `<button class="btn-delete" onclick="deletePost('${id}')" style="margin-left: 20px;">삭제</button>` : ''}
            `;
            list.appendChild(item);
        });
    });
}

window.deletePost = id => { if(confirm('삭제하시겠습니까?')) firebase.firestore().collection('posts').doc(id).delete(); };

function initROICalculator() {
    const target = document.querySelector('#industries');
    if (!target) return;
    const sect = document.createElement('section');
    sect.id = 'resources'; sect.className = 'section';
    sect.innerHTML = `
        <div class="section-header">
            <h2 data-i18n="roi_title">ROI 계산기</h2>
            <p data-i18n="roi_desc">수동 검사에서 RaaS 모델로 전환 시 절감되는 비용을 예상해 보세요.</p>
        </div>
        <div style="max-width: 800px; margin: 0 auto; background: var(--bg-gray); padding: 40px; border-radius: 12px; border: 1px solid var(--border-color);">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                <div>
                    <label style="display: block; margin-bottom: 10px; font-weight: 600;" data-i18n="roi_label_manual">월간 수동 검사 비용 ($)</label>
                    <input type="number" id="manualCost" value="5000" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 10px; font-weight: 600;" data-i18n="roi_label_hours">월간 검사 시간</label>
                    <input type="number" id="hours" value="160" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
            </div>
            <div style="background: var(--bg-dark); color: white; padding: 30px; border-radius: 8px; text-align: center;">
                <p style="color: #999; margin-bottom: 10px;" data-i18n="roi_savings_label">RoboLease 도입 시 예상 월간 절감액</p>
                <h3 id="savingsResult" style="font-size: 2.5rem; color: var(--primary-color);">$2,400</h3>
                <p style="font-size: 0.9rem; color: #666; margin-top: 15px;" data-i18n="roi_note">*표준 ANYmal 구독 vs 인력 비용 및 위험 완화를 기준으로 합니다.</p>
            </div>
        </div>
    `;
    target.after(sect);
    document.getElementById('manualCost').addEventListener('input', () => {
        document.getElementById('savingsResult').innerText = `$${Math.max(0, document.getElementById('manualCost').value - 2600).toLocaleString()}`;
    });
}

// --- Dynamic Category Counts & Seeding ---
async function updateCategoryCounts() {
    if (typeof firebase === 'undefined') return;
    const counts = { '산업 안전': 0, '자율 주행': 0, '데이터 분석': 0, '유지보수': 0 };
    const snap = await firebase.firestore().collection('posts').get();
    
    snap.forEach(doc => {
        const cat = doc.data().category;
        if (counts[cat] !== undefined) counts[cat]++;
    });

    const catCards = document.querySelectorAll('.cat-card');
    catCards.forEach(card => {
        const titleEl = card.querySelector('h4');
        if (!titleEl) return;
        const title = titleEl.innerText;
        const countSpan = card.querySelector('span');
        if (counts[title] !== undefined) {
            countSpan.innerText = `${counts[title]} 가이드/논의`;
        }
    });

    // 만약 게시글이 하나도 없다면 샘플 데이터 로드 제안 (관리자로 접속 시)
    if (snap.empty && currentUser && isAdmin) {
        if (confirm('게시판이 비어 있습니다. 전문가용 샘플 데이터 4개를 생성할까요?')) {
            seedSampleData();
        }
    }
}

async function seedSampleData() {
    const samples = [
        { title: "[공지] ANYmal 소프트웨어 v4.2 배포 및 업데이트 가이드", content: "이번 업데이트에서는 라이다 슬램(LiDAR SLAM) 성능이 20% 향상되었습니다. 현장 적용 전 백업을 권장드립니다.", category: "유지보수", authorId: "admin" },
        { title: "에너지 플랜트 내 열화상 감지 오차 범위 보정 방법", content: "고온 환경에서 열화상 카메라의 노이즈를 줄이기 위한 캘리브레이션 팁을 공유합니다. 픽셀 오차를 0.5도 이내로 줄일 수 있습니다.", category: "데이터 분석", authorId: "user1" },
        { title: "험지 보행 후 관절 구동부 먼지 제거 및 윤활 노하우", content: "광산이나 건설 현장 가동 후 로봇 관절부에 쌓인 미세 먼지는 수명을 단축시킵니다. 전용 에어 스프레이와 윤활유 사용법입니다.", category: "유지보수", authorId: "field_eng" },
        { title: "가스 누출 위험 구역 진입 전 로봇 사전 체크리스트", content: "방폭 구역 진입 전 배터리 씰링 상태와 가스 센서의 정상 작동 여부를 확인하는 5단계 절차를 공유합니다.", category: "산업 안전", authorId: "safety_mgr" }
    ];

    for (const s of samples) {
        await firebase.firestore().collection('posts').add({
            ...s, uid: "system", createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
    location.reload();
}

window.seedSampleData = seedSampleData;
