'use strict';

function _pld(s){const[y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d);}
function _st(id,v){const e=document.getElementById(id);if(e)e.textContent=String(v);}

const I18n={
  current:'ar',
  strings:{
    ar:{
      login_headline_h2:'بوابتك',login_headline_span:'الجامعية الذكية',
      login_headline_p:'منصة رقمية متكاملة لمتابعة نتائجك الأكاديمية، جدولك الزمني، منحتك الدراسية وجميع وثائقك الإدارية في مكان واحد.',
      login_title:'تسجيل الدخول',login_subtitle:'أدخل رقم تسجيلك وكلمة المرور.',
      demo_label:'بيانات تجريبية:',demo_btn:'دخول تجريبي',
      login_error:'رقم التسجيل أو كلمة المرور غير صحيحة.',
      mat_label:'رقم التسجيل',pw_label:'كلمة المرور',
      remember_me:'تذكرني',forgot_pw:'نسيت كلمة المرور؟',
      login_btn:'تسجيل الدخول',
      login_footer:'اتصال آمن TLS 1.3 · وزارة التعليم العالي والبحث العلمي',
      app_tagline:'بوابة الطالب الذكية',
      nav_general:'عام',nav_dashboard:'لوحة التحكم',
      nav_academic:'أكاديمي',nav_grades:'كشف النقاط',
      nav_timetable:'الجدول الزمني',nav_exams:'جدول الامتحانات',
      nav_services:'الخدمات',nav_wallet:'المحفظة الرقمية',
      nav_transport:'مخطط النقل',nav_calendar:'التقويم الأكاديمي',
      nav_profile:'الملف الشخصي',nav_calc:'حاسبة المعدل',
      nav_more:'المزيد',logout:'تسجيل الخروج',
      page_title_dashboard:'لوحة التحكم',page_title_grades:'كشف النقاط',
      page_title_timetable:'الجدول الزمني',page_title_exams:'جدول الامتحانات',
      page_title_wallet:'المحفظة الرقمية',page_title_transport:'مخطط النقل',
      page_title_calendar:'التقويم الأكاديمي',page_title_profile:'الملف الشخصي',
      page_title_calculator:'حاسبة المعدل',
      page_crumb_dashboard:'Dashboard',page_crumb_grades:'Notes',
      page_crumb_timetable:'Emploi du temps',page_crumb_exams:'Examens',
      page_crumb_wallet:'Wallet',page_crumb_transport:'Transport',
      page_crumb_calendar:'Calendrier',page_crumb_profile:'Profil',
      page_crumb_calculator:'Calculatrice',
      hero_greeting:'مرحباً بك مجدداً،',
      stat_avg:'المعدل العام',stat_passed:'المواد المجتازة',stat_rank:'الترتيب',
      countdown_title:'العد التنازلي للامتحانات',
      countdown_weeks:'أسابيع متبقية',countdown_hint:'عرض جدول الامتحانات',
      today_schedule:'جدول اليوم',today_schedule_sub:'المواد والمحاضرات المبرمجة',
      full_schedule:'الجدول الكامل',
      schol_title:'حالة المنحة',schol_sub:'متابعة مستجدات الدفع',
      schol_paid:'مسددة',next_payment:'المبلغ القادم',
      live_now:'الآن',no_classes_today:'لا توجد محاضرات اليوم',
      no_classes_day:'لا توجد محاضرات هذا اليوم',
      grades_title:'كشف النقاط',grades_sub:'نتائج الفصل الدراسي',
      session_normal:'الدورة العادية',session_ratt:'دورة الاستدراك',
      sem_s1:'الفصل الأول',sem_s2:'الفصل الثاني',
      kpi_avg:'المعدل العام',kpi_avg_sub:'المعدل الفصلي الحالي',
      kpi_passed:'المواد المجتازة',kpi_passed_sub:'من إجمالي المواد',
      kpi_coef:'مجموع المعاملات',kpi_coef_sub:'المواد المسجلة',
      kpi_credits:'الرصيد الكلي',kpi_credits_sub:'الساعات المعتمدة',
      transcript_title:'كشف النقاط الفصلي',
      final_avg:'المعدل العام الفصلي',status_pass:'ناجح',status_fail:'راسب',
      col_module:'المادة',col_coef:'المعامل',col_credit:'الرصيد',
      col_cc:'CC',col_exam:'الامتحان',col_avg:'المعدل',
      col_weight:'الوزن%',col_status:'الحالة',
      grade_validated:'مجتاز',grade_compensated:'ناجح بالتعويض',
      grade_retake:'إعادة',grade_eliminated:'إقصائية',grade_ongoing:'جاري',
      elim_notice_label:'نقطة إقصائية:',
      elim_notice_desc:'مهندس الدولة — كل مادة أقل من 5/20 تستوجب الإعادة الإجبارية.',
      comp_notice_label:'ناجح بالتعويض:',
      comp_notice_desc:'المعدل العام ≥ 10/20، المواد الأقل من 10 قُبلت بالتعويض.',
      rattrapage_title:'مواد الاستدراك',rattrapage_desc:'المواد التي تستوجب الاستدراك',
      rattrapage_empty:'لا توجد مواد تستوجب الاستدراك',
      tt_title:'الجدول الزمني',tt_sub:'المواعيد الأسبوعية للمحاضرات',
      classes_count:'محاضرة',
      exams_title:'جدول الامتحانات النهائية',exams_sub:'مواعيد وقاعات الامتحانات',
      exam_upcoming:'قادم',exam_today:'اليوم!',exam_past:'منتهي',
      exam_coefficient:'المعامل',
      legend_upcoming:'قادم',legend_today:'اليوم',legend_past:'منتهي',
      wallet_title:'المحفظة الرقمية',wallet_sub:'البطاقة الجامعية وبطاقة النقل',
      dl_card_btn:'تحميل البطاقة',dl_card:'جاري تحميل البطاقة...',
      card_student:'بطاقة الطالب',card_transport:'بطاقة النقل',
      acad_status_title:'الوضعية الأكاديمية',acad_status_sub:'حالة التسجيل وتجميد السنة',
      enroll_status_label:'حالة التسجيل',acad_year_level:'السنة الدراسية',
      freeze_label:'تجميد السنة',last_updated:'آخر تحديث',
      freeze_reason_label:'سبب التجميد',
      status_frozen:'مجمدة',status_active:'نشطة',
      docs_title:'الوثائق الأخيرة',docs_sub:'الشهادات والوثائق الإدارية',
      transport_title:'مخطط النقل الجامعي',transport_sub:'خطوط الحافلات والمحطات',
      frequency_label:'التكرار',stops_label:'محطات',
      bus_schedule_title:'جدول الحافلات',bus_schedule_sub:'مواعيد الصباح باتجاه الحرم الجامعي',
      col_line:'الخط',col_bus:'الحافلة',col_departure:'المغادرة',
      col_arrival:'الوصول',col_capacity:'الطاقة',seats_unit:'مقعد',
      calendar_title:'التقويم الأكاديمي',calendar_sub:'العطل والمناسبات الرسمية',
      cal_col_holiday:'العطلة',cal_col_start:'البداية',cal_col_end:'النهاية',
      cal_col_dur:'المدة',cal_col_status:'الحالة',
      cal_table_title:'جدول العطل الأكاديمية',cal_table_sub:'السنة الجامعية 2025/2026',
      cal_chip:'2025/2026',cal_status_upcoming:'قادمة',
      cal_status_active:'جارية',cal_status_past:'منتهية',
      cal_legend_upcoming:'قادمة',cal_legend_active:'جارية',cal_legend_past:'منتهية',
      cal_total_label:'إجمالي أيام العطل',cal_days_unit:'يوم',
      profile_title:'الملف الشخصي',profile_sub:'البيانات الشخصية والأكاديمية',
      verified_account:'حساب موثق رسمياً',
      acad_info_title:'المعلومات الأكاديمية',acad_info_sub:'البيانات الجامعية',
      admin_data_title:'البيانات الإدارية',admin_data_sub:'المعلومات الرسمية',
      university:'الجامعة',faculty:'الكلية',specialty:'التخصص',
      level:'المستوى الحالي',group:'المجموعة',nin_label:'الرقم الوطني',
      acad_year:'السنة الجامعية',account_status:'حالة الحساب',verified:'موثق',
      security_notice:'كلمة المرور محمية ولا يمكن تغييرها إلا من خلال الإدارة الجامعية.',
      downloading:'جاري التحميل...',drawer_menu_title:'القائمة الرئيسية',
      lang_label:'اللغة / Language',
      notif_title:'الإشعارات',notif_mark_read:'تحديد الكل كمقروء',
      notif_grade_title:'نقطة جديدة أضيفت',
      notif_grade_desc:'تمت إضافة نقطة Analyse 2 — تحقق من كشف النقاط.',
      notif_sched_title:'تحديث الجدول الزمني',
      notif_sched_desc:'تم تعديل جدول الأسبوع القادم.',
      notif_exam_title:'تذكير: امتحان قريب',
            notif_exam_desc:'امتحان Électronique Numérique بعد 3 أيام — Amphi A.',
      calc_title:'حاسبة المعدل',calc_sub:'احسب معدلك عبر إدخال النقاط يدوياً',
      calc_formula_label:'صيغة الحساب:',
      calc_col_module:'المادة',calc_col_cc:'CC (40%)',calc_col_exam:'الامتحان (60%)',
      calc_col_coef:'المعامل',calc_col_result:'النتيجة',
      calc_total_label:'المعدل العام المحسوب',calc_reset:'إعادة تعيين',
      print:'طباعة',
    },
    en:{
      login_headline_h2:'Your Smart',login_headline_span:'University Portal',
      login_headline_p:'An integrated digital platform to track your academic results, timetable, scholarship, and all administrative documents in one place.',
      login_title:'Sign In',login_subtitle:'Enter your student ID and password.',
      demo_label:'Demo credentials:',demo_btn:'Demo Login',
      login_error:'Incorrect student ID or password.',
      mat_label:'Student ID',pw_label:'Password',
      remember_me:'Remember me',forgot_pw:'Forgot password?',
      login_btn:'Sign In',
      login_footer:'Secure connection TLS 1.3 · Ministry of Higher Education',
      app_tagline:'Smart Student Portal',
      nav_general:'General',nav_dashboard:'Dashboard',
      nav_academic:'Academic',nav_grades:'Grades',
      nav_timetable:'Timetable',nav_exams:'Exam Schedule',
      nav_services:'Services',nav_wallet:'Digital Wallet',
      nav_transport:'Transport Map',nav_calendar:'Academic Calendar',
      nav_profile:'Profile',nav_calc:'GPA Calculator',
      nav_more:'More',logout:'Sign Out',
      page_title_dashboard:'Dashboard',page_title_grades:'Grades Report',
      page_title_timetable:'Timetable',page_title_exams:'Exam Schedule',
      page_title_wallet:'Digital Wallet',page_title_transport:'Transport Map',
      page_title_calendar:'Academic Calendar',page_title_profile:'My Profile',
      page_title_calculator:'GPA Calculator',
      page_crumb_dashboard:'Dashboard',page_crumb_grades:'Grades',
      page_crumb_timetable:'Timetable',page_crumb_exams:'Exams',
      page_crumb_wallet:'Wallet',page_crumb_transport:'Transport',
      page_crumb_calendar:'Calendar',page_crumb_profile:'Profile',
      page_crumb_calculator:'Calculator',
      hero_greeting:'Welcome back,',
      stat_avg:'GPA',stat_passed:'Passed Modules',stat_rank:'Class Rank',
      countdown_title:'Final Exam Countdown',
      countdown_weeks:'weeks remaining',countdown_hint:'View Exam Schedule',
      today_schedule:"Today's Schedule",today_schedule_sub:'Scheduled lectures and sessions',
      full_schedule:'Full Schedule',
      schol_title:'Scholarship Status',schol_sub:'Payment progress tracker',
      schol_paid:'Paid',next_payment:'Next Payment',
      live_now:'Live',no_classes_today:'No classes scheduled today',
      no_classes_day:'No classes today',
      grades_title:'Grades Report',grades_sub:'Semester academic results',
      session_normal:'Regular Session',session_ratt:'Retake Session',
      sem_s1:'Semester 1',sem_s2:'Semester 2',
      kpi_avg:'General Average',kpi_avg_sub:'Current semester GPA',
      kpi_passed:'Passed Modules',kpi_passed_sub:'Out of total modules',
      kpi_coef:'Total Coefficients',kpi_coef_sub:'Registered modules',
      kpi_credits:'Total Credits',kpi_credits_sub:'Accredited hours',
      transcript_title:'Semester Transcript',
      final_avg:'Final Semester Average',status_pass:'Passed',status_fail:'Failed',
      col_module:'Module',col_coef:'Coef',col_credit:'Credit',
      col_cc:'CC Grade',col_exam:'Exam Grade',col_avg:'Average',
      col_weight:'Weight%',col_status:'Status',
      grade_validated:'Validated',grade_compensated:'Compensated',
      grade_retake:'Retake',grade_eliminated:'Eliminatory',grade_ongoing:'Ongoing',
      elim_notice_label:'Eliminatory grade:',
      elim_notice_desc:'State Engineer — any module below 5/20 requires a mandatory retake.',
      comp_notice_label:'Admitted by compensation:',
      comp_notice_desc:'Semester average ≥ 10/20 — modules below 10 are compensated.',
      rattrapage_title:'Modules to Retake',rattrapage_desc:'Modules requiring a retake session',
      rattrapage_empty:'No modules require a retake — congratulations!',
      tt_title:'Timetable',tt_sub:'Weekly schedule for lectures',
      classes_count:'class(es)',
      exams_title:'Final Exam Schedule',exams_sub:'Dates, times and exam halls',
      exam_upcoming:'Upcoming',exam_today:'Today!',exam_past:'Completed',
      exam_coefficient:'Coefficient',
      legend_upcoming:'Upcoming',legend_today:'Today',legend_past:'Past',
      wallet_title:'Digital Wallet',wallet_sub:'Student ID and transport pass',
      dl_card_btn:'Download Card',dl_card:'Downloading card...',
      card_student:'Student ID',card_transport:'Transport Pass',
      acad_status_title:'Academic Status',acad_status_sub:'Enrollment and year freeze status',
      enroll_status_label:'Enrollment Status',acad_year_level:'Academic Year',
      freeze_label:'Year Freeze',last_updated:'Last Updated',
      freeze_reason_label:'Freeze Reason',
      status_frozen:'Frozen',status_active:'Active',
      docs_title:'Recent Documents',docs_sub:'Certificates and administrative documents',
      transport_title:'University Transport Map',transport_sub:'Bus lines and stops',
      frequency_label:'Frequency',stops_label:'stops',
      bus_schedule_title:'Bus Schedule',bus_schedule_sub:'Morning departures — campus direction',
      col_line:'Line',col_bus:'Bus',col_departure:'Departure',
      col_arrival:'Arrival',col_capacity:'Capacity',seats_unit:'seats',
      calendar_title:'Academic Calendar',calendar_sub:'Official holidays and events',
      cal_col_holiday:'Holiday',cal_col_start:'Start',cal_col_end:'End',
      cal_col_dur:'Duration',cal_col_status:'Status',
      cal_table_title:'Academic Holidays Schedule',cal_table_sub:'Academic Year 2025/2026',
      cal_chip:'2025/2026',cal_status_upcoming:'Upcoming',
      cal_status_active:'Active',cal_status_past:'Past',
      cal_legend_upcoming:'Upcoming',cal_legend_active:'Active',cal_legend_past:'Past',
      cal_total_label:'Total Holiday Days',cal_days_unit:'days',
      profile_title:'My Profile',profile_sub:'Personal and academic information',
      verified_account:'Officially Verified Account',
      acad_info_title:'Academic Information',acad_info_sub:'University and study data',
      admin_data_title:'Administrative Data',admin_data_sub:'Official registration information',
      university:'University',faculty:'Faculty',specialty:'Specialty',
      level:'Current Level',group:'Group',nin_label:'National ID',
      acad_year:'Academic Year',account_status:'Account Status',verified:'Verified',
      security_notice:'Password is secured and can only be changed through the university administration.',
      downloading:'Downloading...',drawer_menu_title:'Navigation Menu',
      lang_label:'اللغة / Language',
      notif_title:'Notifications',notif_mark_read:'Mark all as read',
      notif_grade_title:'New Grade Added',
      notif_grade_desc:'Analyse 2 grade has been added — check your transcript.',
      notif_sched_title:'Schedule Updated',
      notif_sched_desc:'Next week timetable has been modified.',
      notif_exam_title:'Exam Reminder',
      notif_exam_desc:'Électronique Numérique exam in 3 days — Amphi A.',
      calc_title:'GPA Calculator',calc_sub:'Manually enter grades to calculate your average',
      calc_formula_label:'Calculation formula:',
      calc_col_module:'Module',calc_col_cc:'CC (40%)',calc_col_exam:'Exam (60%)',
      calc_col_coef:'Coef',calc_col_result:'Result',
      calc_total_label:'Calculated GPA',calc_reset:'Reset',
      print:'Print',
    }
  },
  t(k){
    const d=this.strings[this.current]||this.strings.ar;
    return Object.prototype.hasOwnProperty.call(d,k)?d[k]:k;
  },
  set(lang){
    if(lang!=='ar'&&lang!=='en')return;
    this.current=lang;
    const dir=lang==='ar'?'rtl':'ltr';
    document.documentElement.setAttribute('lang',lang);
    document.documentElement.setAttribute('dir',dir);
    document.documentElement.dir=dir;
    document.body.setAttribute('dir',dir);
    document.body.classList.toggle('lang-en',lang==='en');
    const appEl=document.getElementById('screen-app');
    if(appEl)appEl.setAttribute('dir',dir);
    document.querySelectorAll('.lang-btn[data-lang]').forEach(b=>{
      b.classList.toggle('active',b.getAttribute('data-lang')===lang);
    });
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      el.textContent=this.t(el.getAttribute('data-i18n'));
    });
    if(!document.getElementById('screen-app').classList.contains('visible'))return;
    _setTopbar(SPA.currentPage);
    renderDashboard();
    renderGrades();
    renderExams();
    renderTransport();
    renderCalendar();
    renderCalculator();
    Notifications.render();
    Timetable.renderDayNav();
    Timetable.renderSchedule();
    Wallet.renderAcademicStatus();
    Drawer.rebuild();
  }
};

const SD={
  profile:{
    firstName:'Abdennour',lastName:'Cherfi',fullName:'Abdennour Cherfi',
    initials:'AC',matricule:'20261234',nin:'19990100101234567',
    university:'Université Saad Dahlab — Blida 1',
    faculty:'Faculté des Sciences & Technologie',
    specialty:'Électronique Industrielle',
    cycle:'Ingénieur',
    level:"1ère année Ingénieur d'état",
    group:'Groupe 03 / Section B',
    academicYear:'2025/2026',
    cardExpiry:'30 Septembre 2026',
    accountStatus:'verified'
  },
  auth:{matricule:'20261234',password:'admin'},
  academicStatus:{
    frozen:false,freezeReason:'',
    enrollmentStatus:'Inscrit',enrollmentStatusEn:'Enrolled',
    currentYear:"1ère Année Ingénieur d'état",
    currentYearEn:"1st Year State Engineer",
    lastUpdated:'15 Septembre 2025'
  },
  gradesHistory:{
    '2025/2026':{
      S1:{
        normale:[
          {ue:'UE Mathématiques & Informatique',modules:[
            {code:'MATH101',name:'Analyse 1',coef:3,credit:5,cc:12.00,exam:11.00,isNew:false},
            {code:'MATH102',name:'Probabilités et statistiques',coef:2,credit:3,cc:13.50,exam:12.00,isNew:false},
            {code:'MATH103',name:'Algèbre 1',coef:2,credit:3,cc:11.00,exam:10.50,isNew:false},
            {code:'INFO101',name:'Structure des ordinateurs',coef:2,credit:3,cc:14.00,exam:13.50,isNew:false}
          ]},
          {ue:'UE Sciences',modules:[
            {code:'PHYS101',name:'Physique 1',coef:4,credit:6,cc:13.00,exam:12.00,isNew:false},
            {code:'CHIM101',name:'Structure de la matière',coef:4,credit:6,cc:11.50,exam:10.00,isNew:false}
          ]},
          {ue:'UE Transversale',modules:[
            {code:'ETH101',name:"Dimension éthique",coef:1,credit:1,cc:15.00,exam:14.00,isNew:false},
            {code:'ING101',name:"Métiers de l'ingénieur",coef:1,credit:1,cc:16.00,exam:null,isNew:false}
          ]}
        ],
        rattrapage:[]
      },
      S2:{
        normale:[
          {ue:'UE Mathématiques & Physique',modules:[
            {code:'PHYS201',name:'Physique 2',coef:4,credit:6,cc:12.00,exam:11.00,isNew:false},
            {code:'MATH201',name:'Algèbre 2',coef:2,credit:3,cc:11.50,exam:10.50,isNew:false},
            {code:'MATH202',name:'Analyse 2',coef:3,credit:5,cc:6.00,exam:1.50,isNew:true},
            {code:'PHYS202',name:'Thermodynamique',coef:3,credit:5,cc:12.00,exam:11.50,isNew:false}
          ]},
          {ue:'UE Technique & Informatique',modules:[
            {code:'TECH201',name:'Dessin technique',coef:2,credit:3,cc:13.00,exam:12.00,isNew:false},
            {code:'INFO201',name:'Initiation à la programmation',coef:2,credit:3,cc:15.50,exam:14.00,isNew:true},
            {code:'INFO202',name:'Logiciels libres',coef:1,credit:2,cc:14.00,exam:null,isNew:false}
          ]}
        ],
        rattrapage:[]
      }
    }
  },
  timetable:{
    days:[
      {name:'الأحد',nameEn:'Sunday',date:'23/02',classes:[
        {time:'08:00',end:'09:30',subject:'Algèbre 2',room:'Amphi A',type:'Cours',teacher:'Dr. Benali'},
        {time:'10:00',end:'12:00',subject:'Physique 2',room:'Salle 204',type:'TD',teacher:'Dr. Hamdi'},
        {time:'14:00',end:'16:00',subject:'Dessin technique',room:'Lab 3',type:'TP',teacher:'M. Kaci'}
      ]},
      {name:'الاثنين',nameEn:'Monday',date:'24/02',classes:[
        {time:'08:00',end:'10:00',subject:'Analyse 2',room:'Amphi B',type:'Cours',teacher:'Pr. Medjdoub'},
        {time:'10:30',end:'12:30',subject:'Thermodynamique',room:'Salle 301',type:'TD',teacher:'Dr. Boudaoud'}
      ]},
      {name:'الثلاثاء',nameEn:'Tuesday',date:'25/02',classes:[
        {time:'09:00',end:'11:00',subject:'Initiation à la programmation',room:'Lab Info 2',type:'TP',teacher:'Mme. Larbi'},
        {time:'13:00',end:'14:30',subject:'Logiciels libres',room:'Salle 105',type:'TD',teacher:'M. Smith'}
      ]},
      {name:'الأربعاء',nameEn:'Wednesday',date:'26/02',classes:[
        {time:'08:00',end:'10:00',subject:'Physique 2',room:'Amphi C',type:'Cours',teacher:'Pr. Merah'},
        {time:'10:30',end:'12:30',subject:'Algèbre 2',room:'Salle 202',type:'TD',teacher:'Dr. Saad'}
      ]},
      {name:'الخميس',nameEn:'Thursday',date:'27/02',classes:[
        {time:'08:00',end:'10:00',subject:'Thermodynamique',room:'Amphi A',type:'Cours',teacher:'Dr. Boudaoud'},
        {time:'10:30',end:'12:30',subject:'Analyse 2',room:'Salle 305',type:'TD',teacher:'Dr. Mansouri'}
      ]}
    ]
  },
  examSchedule:[
    {code:'PHYS201',module:'Physique 2',date:'2026-03-15',time:'08:00',duration:'1h30',hall:'Amphi A',coef:4},
    {code:'MATH201',module:'Algèbre 2',date:'2026-03-17',time:'08:00',duration:'1h30',hall:'Amphi B',coef:2},
    {code:'MATH202',module:'Analyse 2',date:'2026-03-19',time:'10:00',duration:'1h30',hall:'Amphi C',coef:3},
    {code:'PHYS202',module:'Thermodynamique',date:'2026-03-22',time:'08:00',duration:'1h30',hall:'Salle 204',coef:3},
    {code:'TECH201',module:'Dessin technique',date:'2026-03-24',time:'08:00',duration:'2h00',hall:'Atelier 1',coef:2},
    {code:'INFO201',module:'Initiation à la programmation',date:'2026-03-26',time:'13:00',duration:'1h30',hall:'Lab Info 2',coef:2},
    {code:'INFO202',module:'Logiciels libres',date:'2026-03-28',time:'10:00',duration:'1h00',hall:'Salle 105',coef:1}
  ],
  examPeriod:{start:'2026-03-15',end:'2026-03-28'},
  scholarship:{
    status:'paid',nextAmount:7500,nextDate:'10 Mars 2026',
    steps:[
      {status:'done',titleAr:'تقديم الطلب',titleEn:'Application',descAr:'تم تقديم طلب المنحة',descEn:'Scholarship request submitted',date:'15 Jan 2026'},
      {status:'done',titleAr:'التحقق الأكاديمي',titleEn:'Academic Review',descAr:'تم التحقق من الأهلية',descEn:'Eligibility verified',date:'22 Jan 2026'},
      {status:'active',titleAr:'الدفع',titleEn:'Payment',descAr:'جاري معالجة الدفعة',descEn:'Payment being processed',date:'En cours'},
      {status:'pending',titleAr:'الاستلام',titleEn:'Receipt',descAr:'التحويل البنكي',descEn:'Bank transfer',date:'10 Mar 2026'}
    ]
  },
  academicCalendar:[
    {nameAr:'عطلة نهاية الفصل الأول',nameEn:'End of Semester 1 Break',typeAr:'عطلة أكاديمية',typeEn:'Academic Break',start:'2026-01-17',end:'2026-01-25'},
    {nameAr:'عطلة الشتاء',nameEn:'Winter Holidays',typeAr:'عطلة وطنية',typeEn:'National Holiday',start:'2026-01-26',end:'2026-02-05'},
    {nameAr:'عطلة المولد النبوي',nameEn:"Prophet's Birthday",typeAr:'مناسبة دينية',typeEn:'Religious Occasion',start:'2026-02-17',end:'2026-02-18'},
    {nameAr:'عطلة الربيع',nameEn:'Spring Holidays',typeAr:'عطلة أكاديمية',typeEn:'Academic Break',start:'2026-04-05',end:'2026-04-16'},
    {nameAr:'رأس السنة الأمازيغية',nameEn:'Amazigh New Year',typeAr:'عطلة وطنية',typeEn:'National Holiday',start:'2026-01-12',end:'2026-01-12'},
    {nameAr:'عطلة عيد الفطر',nameEn:'Eid Al-Fitr',typeAr:'مناسبة دينية',typeEn:'Religious Occasion',start:'2026-03-20',end:'2026-03-23'},
    {nameAr:'عطلة عيد الأضحى',nameEn:'Eid Al-Adha',typeAr:'مناسبة دينية',typeEn:'Religious Occasion',start:'2026-05-27',end:'2026-05-30'},
    {nameAr:'عطلة الصيف',nameEn:'Summer Vacation',typeAr:'عطلة أكاديمية',typeEn:'Academic Break',start:'2026-06-20',end:'2026-09-12'}
  ],
  transportRoutes:[
    {id:'line-12',name:'Ligne 12',color:'#2563eb',cssClass:'bus-badge-blue',connectorClass:'line-12',
     from:'Bab Dzair',to:'Campus Principal',busNumbers:['Bus 47','Bus 48'],frequency:'15 min',
     stops:[{name:'Bab Dzair',time:'07:30',main:true},{name:'Centre Ville',time:'07:45',main:false},{name:'Cité El Harrach',time:'08:00',main:false},{name:'Route Nationale',time:'08:12',main:false},{name:'Campus',time:'08:25',main:true}]},
    {id:'line-7',name:'Ligne 7',color:'#7c3aed',cssClass:'bus-badge-purp',connectorClass:'line-7',
     from:'Blida Centre',to:'Résidence Universitaire',busNumbers:['Bus 21'],frequency:'20 min',
     stops:[{name:'Blida Centre',time:'07:15',main:true},{name:'Soumaa',time:'07:35',main:false},{name:'Université',time:'07:50',main:true},{name:'Résidence',time:'08:00',main:false}]},
    {id:'line-5',name:'Ligne 5',color:'#d97706',cssClass:'bus-badge-warn',connectorClass:'line-5',
     from:'Boufarik',to:'Campus Annexe',busNumbers:['Bus 33','Bus 34'],frequency:'25 min',
     stops:[{name:'Boufarik',time:'07:00',main:true},{name:'Ain Romana',time:'07:20',main:false},{name:'Chebli',time:'07:38',main:false},{name:'Campus Annexe',time:'07:55',main:true}]}
  ],
  busSchedule:[
    {line:'Ligne 12',bus:'Bus 47',departure:'07:30',arrival:'08:25',seats:42,highlight:true},
    {line:'Ligne 12',bus:'Bus 48',departure:'07:45',arrival:'08:40',seats:42,highlight:false},
    {line:'Ligne 7',bus:'Bus 21',departure:'07:15',arrival:'08:00',seats:35,highlight:false},
    {line:'Ligne 5',bus:'Bus 33',departure:'07:00',arrival:'07:55',seats:38,highlight:false},
    {line:'Ligne 5',bus:'Bus 34',departure:'07:25',arrival:'08:20',seats:38,highlight:false}
  ]
};

const ELIM=5;
const GS={V:'validated',C:'compensated',R:'retake',E:'eliminated',O:'ongoing'};

function _moy(cc,exam){
  const hc=cc!==null&&cc!==undefined;
  const he=exam!==null&&exam!==undefined;
  if(hc&&he)return parseFloat(((0.4*cc)+(0.6*exam)).toFixed(4));
  if(hc)return parseFloat(cc);
  return null;
}

function _semAvg(ues){
  let ws=0,wc=0;
  ues.forEach(u=>u.modules.forEach(m=>{const v=_moy(m.cc,m.exam);if(v!==null){ws+=v*m.coef;wc+=m.coef;}}));
  return wc>0?ws/wc:0;
}

function _evalMods(modules,semAvg){
  return modules.map(m=>{
    const v=_moy(m.cc,m.exam);
    if(v===null)return{...m,moy:null,status:GS.O};
    if(v<ELIM)return{...m,moy:v,status:GS.E};
    if(v>=10)return{...m,moy:v,status:GS.V};
    if(semAvg>=10)return{...m,moy:v,status:GS.C};
    return{...m,moy:v,status:GS.R};
  });
}

function _retakeMods(ues){
  const avg=_semAvg(ues);
  const needAll=avg<10;
  const res=[];
  ues.forEach(u=>u.modules.forEach(m=>{
    const v=_moy(m.cc,m.exam);
    if(v===null)return;
    if(v<ELIM){res.push({...m,moy:v,reason:'elim'});return;}
    if(needAll&&v<10)res.push({...m,moy:v,reason:'avg'});
  }));
  return res;
}

function togglePw(){
  const pw=document.getElementById('inp-pw');
  const eye=document.getElementById('eye-icon');
  if(!pw||!eye)return;
  const show=pw.type==='password';
  pw.type=show?'text':'password';
  eye.classList.toggle('fa-eye',!show);
  eye.classList.toggle('fa-eye-slash',show);
}

function demoLogin(){
  const m=document.getElementById('inp-mat');
  const p=document.getElementById('inp-pw');
  if(m)m.value=SD.auth.matricule;
  if(p)p.value=SD.auth.password;
  handleLogin({preventDefault:()=>{}});
}

function handleLogin(e){
  e.preventDefault();
  const matEl=document.getElementById('inp-mat');
  const pwEl=document.getElementById('inp-pw');
  const btn=document.getElementById('btn-login');
  const errEl=document.getElementById('login-error');
  if(!matEl||!pwEl||!btn||!errEl)return;
  const mat=matEl.value.trim(),pw=pwEl.value.trim();
  btn.classList.add('loading');
  errEl.classList.remove('visible');
  setTimeout(()=>{
    btn.classList.remove('loading');
    if(mat===SD.auth.matricule&&pw===SD.auth.password){
      const user={matricule:mat,name:SD.profile.fullName,initials:SD.profile.initials};
      const rem=document.getElementById('remember-me');
      if(rem&&rem.checked)localStorage.setItem('progres_session',JSON.stringify(user));
      showApp(user);
    }else{
      errEl.classList.add('visible');
    }
  },800);
}

function showApp(user){
  document.getElementById('screen-login').style.display='none';
  const appEl=document.getElementById('screen-app');
  appEl.classList.add('visible');
  const dir=I18n.current==='ar'?'rtl':'ltr';
  document.documentElement.setAttribute('dir',dir);
  document.documentElement.setAttribute('lang',I18n.current);
  document.body.setAttribute('dir',dir);
  appEl.setAttribute('dir',dir);
  _st('sb-av',user.initials);_st('sb-nm',user.name);_st('sb-mt',user.matricule);
  _st('sb-yr',SD.profile.academicYear);_st('tb-av',user.initials);
  _st('tb-sem',"S2 — Ingénieur d'état");
  _st('drawer-av',user.initials);_st('drawer-name',user.name);_st('drawer-mat',user.matricule);
  const dyEl=document.getElementById('drawer-year');
  if(dyEl)dyEl.textContent=SD.profile.academicYear;
  renderDashboard();renderGrades();renderExams();
  renderTransport();renderCalendar();renderCalculator();
  Timetable.init();Wallet.init();Profile.init();
  Notifications.render();Drawer.rebuild();startClock();
}

function logout(){
  localStorage.removeItem('progres_session');
  location.reload();
}

function startClock(){
  const tick=()=>{
    const n=new Date();
    _st('clock-display',String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0'));
  };
  tick();setInterval(tick,60000);
}

const Notifications={
  items:[
    {id:'n1',type:'grade',titleKey:'notif_grade_title',descKey:'notif_grade_desc',time:'09:15',page:'grades',unread:true},
    {id:'n2',type:'sched',titleKey:'notif_sched_title',descKey:'notif_sched_desc',time:'08:00',page:'timetable',unread:true},
    {id:'n3',type:'warn',titleKey:'notif_exam_title',descKey:'notif_exam_desc',time:'Hier',page:'exams',unread:false}
  ],
  get unreadCount(){return this.items.filter(i=>i.unread).length;},
  render(){
    const cnt=document.getElementById('notif-count');
    const body=document.getElementById('notif-body');
    if(cnt){const u=this.unreadCount;cnt.textContent=String(u);cnt.classList.toggle('hidden',u===0);}
    const hd=document.getElementById('notif-hd-title');if(hd)hd.textContent=I18n.t('notif_title');
    const mr=document.getElementById('notif-mark-read-btn');if(mr)mr.textContent=I18n.t('notif_mark_read');
    if(!body)return;
    const icons={grade:'ni-grade',sched:'ni-sched',warn:'ni-warn'};
    const fa={grade:'fa-star',sched:'fa-calendar-check',warn:'fa-bell'};
    body.innerHTML=this.items.map(item=>`
      <div class="notif-item ${item.unread?'unread':''}" onclick="Notifications.click('${item.id}','${item.page}')">
        <div class="notif-icon ${icons[item.type]||'ni-grade'}"><i class="fa-solid ${fa[item.type]||'fa-bell'}"></i></div>
        <div class="notif-text">
          <div class="notif-title">${I18n.t(item.titleKey)}${item.unread?'<span class="new-tag">NEW</span>':''}</div>
          <div class="notif-desc">${I18n.t(item.descKey)}</div>
          <div class="notif-time">${item.time}</div>
        </div>
      </div>`).join('');
  },
  click(id,page){
    const item=this.items.find(i=>i.id===id);
    if(item)item.unread=false;
    this.render();this.close();SPA.go(page);
  },
  markAllRead(){this.items.forEach(i=>i.unread=false);this.render();},
  toggle(){
    const dd=document.getElementById('notif-dropdown');
    if(dd)dd.classList.toggle('open');
  },
  close(){
    const dd=document.getElementById('notif-dropdown');
    if(dd)dd.classList.remove('open');
  }
};

const SPA={
  pages:['dashboard','grades','timetable','exams','wallet','transport','calendar','profile','calculator'],
  currentPage:'dashboard',
  go(page){
    if(!this.pages.includes(page))return;
    this.currentPage=page;
    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
    document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add('active');
    document.querySelectorAll('.bn-item').forEach(n=>n.classList.remove('active'));
    document.querySelector(`.bn-item[data-page="${page}"]`)?.classList.add('active');
    document.querySelectorAll('.drawer-nav-item').forEach(n=>n.classList.remove('active'));
    document.querySelector(`.drawer-nav-item[data-page="${page}"]`)?.classList.add('active');
    document.querySelectorAll('.page-view').forEach(p=>p.classList.remove('active'));
    document.getElementById(`page-${page}`)?.classList.add('active');
    _setTopbar(page);Notifications.close();Drawer.close();
    document.querySelector('.main')?.scrollTo(0,0);
  }
};

function _setTopbar(page){
  _st('tb-title',I18n.t(`page_title_${page}`));
  _st('tb-crumb',I18n.t(`page_crumb_${page}`));
}

const Drawer={
  structure:[
    {sectionKey:'nav_general',items:[{page:'dashboard',icon:'fa-table-columns',labelKey:'nav_dashboard'}]},
    {sectionKey:'nav_academic',items:[
      {page:'grades',icon:'fa-chart-bar',labelKey:'nav_grades'},
      {page:'timetable',icon:'fa-calendar-days',labelKey:'nav_timetable'},
      {page:'exams',icon:'fa-file-pen',labelKey:'nav_exams'},
      {page:'calculator',icon:'fa-calculator',labelKey:'nav_calc'},
      {page:'calendar',icon:'fa-calendar-check',labelKey:'nav_calendar'}
    ]},
    {sectionKey:'nav_services',items:[
      {page:'wallet',icon:'fa-wallet',labelKey:'nav_wallet'},
      {page:'transport',icon:'fa-bus',labelKey:'nav_transport'},
      {page:'profile',icon:'fa-user',labelKey:'nav_profile'}
    ]}
  ],
  open(){
    document.getElementById('drawer-overlay')?.classList.add('open');
    document.getElementById('mobile-drawer')?.classList.add('open');
    document.body.style.overflow='hidden';
  },
  close(){
    document.getElementById('drawer-overlay')?.classList.remove('open');
    document.getElementById('mobile-drawer')?.classList.remove('open');
    document.body.style.overflow='';
  },
  toggle(){document.getElementById('mobile-drawer')?.classList.contains('open')?this.close():this.open();},
  rebuild(){
    const nav=document.getElementById('drawer-nav-body');
    if(!nav)return;
    nav.innerHTML=this.structure.map(sec=>{
      const lbl=`<div class="drawer-section-label">${I18n.t(sec.sectionKey)}</div>`;
      const items=sec.items.map(it=>`
        <div class="drawer-nav-item ${SPA.currentPage===it.page?'active':''}" data-page="${it.page}" onclick="SPA.go('${it.page}')">
          <div class="drawer-nav-icon"><i class="fa-solid ${it.icon}"></i></div>
          <span>${I18n.t(it.labelKey)}</span>
        </div>`).join('');
      return lbl+items;
    }).join('');
    _st('drawer-title',I18n.t('drawer_menu_title'));
  }
};

let _activeYear='2025/2026';
let _activeSem='S2';
let _gradesSession='normale';

function _getUes(){
  return((SD.gradesHistory[_activeYear]||{})[_activeSem]||{normale:[],rattrapage:[]});
}

function renderYearTabs(){
  const cont=document.getElementById('year-tabs');
  if(!cont)return;
  cont.innerHTML=Object.keys(SD.gradesHistory).map(y=>
    `<button class="year-tab ${y===_activeYear?'active':''}" onclick="selectYear('${y}')">${y}</button>`
  ).join('');
}

function renderSemTabs(){
  const cont=document.getElementById('sem-tabs');
  if(!cont)return;
  const sems=Object.keys((SD.gradesHistory[_activeYear])||{});
  cont.innerHTML=sems.map(s=>{
    const lbl=s==='S1'?I18n.t('sem_s1'):I18n.t('sem_s2');
    return `<button class="sem-tab ${s===_activeSem?'active':''}" onclick="selectSem('${s}')">${lbl}</button>`;
  }).join('');
}

function selectYear(year){
  _activeYear=year;
  const sems=Object.keys(SD.gradesHistory[year]||{});
  _activeSem=sems[sems.length-1]||'S1';
  _gradesSession='normale';
  renderYearTabs();renderSemTabs();renderGrades();
}

function selectSem(sem){
  _activeSem=sem;_gradesSession='normale';
  document.querySelectorAll('#page-grades .tab-btn').forEach(b=>{
    b.classList.toggle('active',b.getAttribute('data-session')==='normale');
  });
  renderSemTabs();renderGrades();
}

function renderDashboard(){
  const p=SD.profile;const isEn=I18n.current==='en';
  _st('hero-greeting',I18n.t('hero_greeting'));_st('hero-name',p.fullName);
  _st('hero-fac',p.faculty);_st('hero-spec',p.specialty);_st('hero-grp',p.group);
  const ues=(SD.gradesHistory['2025/2026']?.S2?.normale)||[];
  const avg=_semAvg(ues);
  const evAll=_evalMods(ues.flatMap(u=>u.modules),avg);
  const passed=evAll.filter(m=>m.status===GS.V||m.status===GS.C).length;
  const total=evAll.filter(m=>m.status!==GS.O).length;
  _st('stat-moy',avg.toFixed(2));_st('stat-credits',`${passed}/${total}`);_st('stat-rank','8/42');
  _renderTodaySchedule();_renderPipeline(isEn);_renderCountdown(isEn);
}

function _renderTodaySchedule(){
  const today=SD.timetable.days[0];const cont=document.getElementById('dash-schedule');
  if(!cont)return;
  if(!today.classes.length){
    cont.innerHTML=`<div class="empty-day"><i class="fa-solid fa-mug-hot"></i><div class="empty-day-txt">${I18n.t('no_classes_today')}</div></div>`;
    return;
  }
  cont.innerHTML=today.classes.map((c,i)=>`
    <div class="slot-row">
      <div class="slot-time"><div class="ts">${c.time}</div><div class="te">${c.end}</div></div>
      <div class="slot-sep"></div>
      <div style="flex:1">
        <div class="slot-subject">${c.subject}</div>
        <div class="slot-meta">
          <span class="slot-room"><i class="fa-solid fa-door-open"></i> ${c.room}</span>
          <span class="type-tag tt-${c.type.toLowerCase()}">${c.type}</span>
          ${i===0?`<span class="live-badge"><div class="live-badge-dot"></div>${I18n.t('live_now')}</span>`:''}
        </div>
      </div>
    </div>`).join('');
}

function _renderPipeline(isEn){
  const cont=document.getElementById('schol-pipeline');if(!cont)return;
  const icons={done:'check',active:'spinner fa-spin',pending:'hourglass'};
  cont.innerHTML=SD.scholarship.steps.map(s=>`
    <div class="ps ps-${s.status}">
      <div class="ps-node"><i class="fa-solid fa-${icons[s.status]}"></i></div>
      <div>
        <div class="ps-title">${isEn?s.titleEn:s.titleAr}</div>
        <div class="ps-desc">${isEn?s.descEn:s.descAr}</div>
        <div class="ps-date">${s.date}</div>
      </div>
    </div>`).join('');
}

function _renderCountdown(isEn){
  const weeksEl=document.getElementById('cd-weeks');
  const subEl=document.getElementById('cd-sub-text');
  const barEl=document.getElementById('cd-bar-fill');
  const hintEl=document.getElementById('cd-click-hint');
  if(!weeksEl||!subEl||!barEl)return;
  const now=new Date();now.setHours(0,0,0,0);
  const examStart=_pld(SD.examPeriod.start);
  const examEnd=_pld(SD.examPeriod.end);
  const semStart=new Date(2026,0,1);
  const totalDays=(examStart-semStart)/86400000;
  const elapsed=(now-semStart)/86400000;
  const pct=Math.min(Math.max((elapsed/totalDays)*100,4),96);
  const daysLeft=Math.ceil((examStart-now)/86400000);
  const wksLeft=daysLeft>0?Math.ceil(daysLeft/7):0;
  const locale=isEn?'en-GB':'ar-DZ';
  const opts={day:'numeric',month:'long',year:'numeric'};
  let sub='';
  if(daysLeft>0){
    sub=isEn?`Exams begin ${examStart.toLocaleDateString(locale,opts)} — ${daysLeft} day(s) remaining`:`تبدأ الامتحانات ${examStart.toLocaleDateString(locale,opts)} — ${daysLeft} يوم متبقٍ`;
    weeksEl.textContent=String(wksLeft);
  }else if(now>=examStart&&now<=examEnd){
    sub=isEn?'Exam period is ongoing — Good luck!':'فترة الامتحانات جارية — حظاً موفقاً!';
    weeksEl.textContent='0';
  }else{
    sub=isEn?'Exam period has ended.':'انتهت فترة الامتحانات.';
    weeksEl.textContent='✓';
  }
  subEl.textContent=sub;
  if(hintEl)hintEl.innerHTML=`<i class="fa-solid fa-arrow-up-right-from-square"></i> ${I18n.t('countdown_hint')}`;
  requestAnimationFrame(()=>setTimeout(()=>{barEl.style.width=`${pct}%`;},120));
}

function renderGrades(session){
  if(session)_gradesSession=session;
  renderYearTabs();renderSemTabs();
  const isEn=I18n.current==='en';
  const semData=_getUes();
  const data=semData[_gradesSession]||[];
  const container=document.getElementById('grades-content');
  if(!container)return;
  const semAvg=_semAvg(data);
  const totalCoefAll=data.flatMap(u=>u.modules).reduce((s,m)=>s+m.coef,0);
  let totalCoef=0,weightedSum=0,passed=0,totalMods=0,totalCredits=0,hasElim=false,hasComp=false;

  const sectionsHtml=data.map(ue=>{
    const evMods=_evalMods(ue.modules,semAvg);
    let ueC=0,ueS=0;
    evMods.forEach(m=>{if(m.moy!==null){ueS+=m.moy*m.coef;ueC+=m.coef;}});
    const ueAvg=ueC>0?ueS/ueC:null;
    const rows=evMods.map(m=>{
      if(m.moy!==null){
        weightedSum+=m.moy*m.coef;totalCoef+=m.coef;totalCredits+=m.credit;totalMods++;
        if(m.status===GS.V||m.status===GS.C)passed++;
        if(m.status===GS.E)hasElim=true;
        if(m.status===GS.C)hasComp=true;
      }
      const gpCC=_gpCls(m.cc);const gpExam=_gpCls(m.exam);
      const mbCls=m.moy!==null?(m.status===GS.E?'mb-elim':m.status===GS.C?'mb-comp':m.moy>=10?'mb-pass':'mb-fail'):'mb-na';
      const barClr=m.moy!==null?(m.moy>=10?'var(--pass-fg)':m.status===GS.C?'var(--comp-fg)':m.status===GS.E?'var(--elim-fg)':'var(--fail-fg)'):'var(--gray-300)';
      const barW=m.moy!==null?Math.min(m.moy*10,100):0;
      const wPct=totalCoefAll>0?Math.round((m.coef/totalCoefAll)*100):0;
      const rowCls=m.status===GS.E?'row-elim':m.status===GS.C?'row-comp':'';
      const ccDisp=m.cc!==null&&m.cc!==undefined?Number(m.cc).toFixed(2):'—';
      const exDisp=m.exam!==null&&m.exam!==undefined?Number(m.exam).toFixed(2):(m.cc!==null?'TP':'—');
      const newTag=m.isNew?'<span class="mod-new">NEW</span>':'';
      const compMarker=m.status===GS.C?' ↗':'';
      return `
        <tr class="${rowCls}">
          <td><div class="mod-name">${m.name}${newTag}</div><div class="mod-code">${m.code}</div></td>
          <td class="tc">${m.coef}</td><td class="tc">${m.credit}</td>
          <td class="tc"><span class="grade-pill ${gpCC}">${ccDisp}</span></td>
          <td class="tc"><span class="grade-pill ${gpExam}">${exDisp}</span></td>
          <td class="tl">
            <div class="moy-cell">
              <div class="score-bar-wrap"><div class="score-bar-fill" style="width:${barW}%;background:${barClr}"></div></div>
              <span class="moy-badge ${mbCls}">${m.moy!==null?Number(m.moy).toFixed(2)+compMarker:'—'}</span>
            </div>
          </td>
          <td class="tc">
            <div class="weight-bar-wrap"><div class="weight-bar-fill" style="width:${wPct}%"></div></div>
            <span class="weight-pct">${wPct}%</span>
          </td>
          <td class="tc">${_statusBadge(m.status)}</td>
        </tr>`;
    }).join('');
    const ueAvgHtml=ueAvg!==null?`<span class="ue-avg ${ueAvg>=10?'ue-avg-pass':'ue-avg-fail'}">${ueAvg.toFixed(2)}</span>`:'';
    return `
      <div class="table-container">
        <div class="ue-row"><div class="ue-lbl"><div class="ue-dot"></div>${ue.ue}</div>${ueAvgHtml}</div>
        <table class="grades-tbl">
          <thead><tr>
            <th>${I18n.t('col_module')}</th>
            <th class="tc">${I18n.t('col_coef')}</th>
            <th class="tc">${I18n.t('col_credit')}</th>
            <th class="tc">${I18n.t('col_cc')}</th>
            <th class="tc">${I18n.t('col_exam')}</th>
            <th class="tl">${I18n.t('col_avg')}</th>
            <th class="tc">${I18n.t('col_weight')}</th>
            <th class="tc">${I18n.t('col_status')}</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }).join('');

  let notices='';
  if(hasElim)notices+=`<div style="display:flex;align-items:center;gap:var(--s3);padding:var(--s3) var(--s5);background:var(--elim-bg);border:1px solid var(--elim-bd);border-radius:var(--r-md);margin-bottom:var(--s4);font-size:12px;color:var(--elim-dk);flex-wrap:wrap;border-inline-start:4px solid var(--elim-fg)"><i class="fa-solid fa-triangle-exclamation" style="color:var(--elim-fg);flex-shrink:0"></i><span><strong>${I18n.t('elim_notice_label')}</strong> ${I18n.t('elim_notice_desc')}</span></div>`;
  if(hasComp)notices+=`<div style="display:flex;align-items:center;gap:var(--s3);padding:var(--s3) var(--s5);background:var(--comp-bg);border:1px solid var(--comp-bd);border-radius:var(--r-md);margin-bottom:var(--s4);font-size:12px;color:var(--comp-dk);flex-wrap:wrap;border-inline-start:4px solid var(--comp-fg)"><i class="fa-solid fa-arrow-trend-up" style="color:var(--comp-fg);flex-shrink:0"></i><span><strong>${I18n.t('comp_notice_label')}</strong> ${I18n.t('comp_notice_desc')}</span></div>`;

  container.innerHTML=notices+sectionsHtml;

  const retakeMods=_retakeMods(data);
  const rattSec=document.getElementById('rattrapage-section');
  if(rattSec){
    if(retakeMods.length===0){
      rattSec.innerHTML=`<div class="rattrapage-section"><div class="rattrapage-banner"><i class="fa-solid fa-rotate-right"></i><strong>${I18n.t('rattrapage_title')}</strong></div><div class="rattrapage-empty"><i class="fa-solid fa-circle-check"></i><div class="rattrapage-empty-txt">${I18n.t('rattrapage_empty')}</div></div></div>`;
    }else{
      const rattRows=retakeMods.map(m=>`
        <tr>
          <td><div class="mod-name">${m.name}</div><div class="mod-code">${m.code}</div></td>
          <td class="tc">${m.coef}</td>
          <td class="tc"><span class="moy-badge ${m.reason==='elim'?'mb-elim':'mb-fail'}">${Number(m.moy).toFixed(2)}</span></td>
          <td class="tc">${m.reason==='elim'?`<span class="badge bdg-elim"><span class="badge-dot"></span>${I18n.t('grade_eliminated')}</span>`:`<span class="badge bdg-fail"><span class="badge-dot"></span>${I18n.t('grade_retake')}</span>`}</td>
        </tr>`).join('');
      rattSec.innerHTML=`<div class="rattrapage-section"><div class="rattrapage-banner"><i class="fa-solid fa-rotate-right"></i><strong>${I18n.t('rattrapage_title')}</strong> — ${I18n.t('rattrapage_desc')}</div><div class="table-container"><table class="grades-tbl" style="min-width:400px"><thead><tr><th>${I18n.t('col_module')}</th><th class="tc">${I18n.t('col_coef')}</th><th class="tc">${I18n.t('col_avg')}</th><th class="tc">${I18n.t('col_status')}</th></tr></thead><tbody>${rattRows}</tbody></table></div></div>`;
    }
  }

  const finalMoy=totalCoef>0?weightedSum/totalCoef:0;
  _st('kpi-moy',finalMoy.toFixed(2));_st('kpi-passed',`${passed}/${totalMods}`);
  _st('kpi-coef',String(totalCoef));_st('kpi-credits',String(totalCredits));
  const mbEl=document.getElementById('kpi-moy-bar');const pbEl=document.getElementById('kpi-pass-bar');
  if(mbEl)mbEl.style.width=`${Math.min(finalMoy*10,100)}%`;
  if(pbEl)pbEl.style.width=totalMods>0?`${(passed/totalMods)*100}%`:'0%';
  const fmEl=document.getElementById('final-moy');const fsEl=document.getElementById('final-status');
  if(fmEl){fmEl.textContent=finalMoy.toFixed(2);fmEl.className=`moy-badge ${finalMoy>=10?'mb-pass':'mb-fail'}`;}
  if(fsEl){fsEl.className=`badge ${finalMoy>=10?'bdg-pass':'bdg-fail'}`;fsEl.innerHTML=`<span class="badge-dot"></span>${finalMoy>=10?I18n.t('status_pass'):I18n.t('status_fail')}`;}
}

function Grades_switchSession(session,btn){
  document.querySelectorAll('#page-grades .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  renderGrades(session);
}

function _statusBadge(status){
  switch(status){
    case GS.V:return`<span class="badge bdg-pass"><span class="badge-dot"></span>${I18n.t('grade_validated')}</span>`;
    case GS.C:return`<span class="badge bdg-comp"><span class="badge-dot"></span>${I18n.t('grade_compensated')}</span>`;
    case GS.R:return`<span class="badge bdg-fail"><span class="badge-dot"></span>${I18n.t('grade_retake')}</span>`;
    case GS.E:return`<span class="badge bdg-elim"><span class="badge-dot"></span>${I18n.t('grade_eliminated')}</span>`;
    default:return`<span class="badge bdg-neutral">${I18n.t('grade_ongoing')}</span>`;
  }
}

function _gpCls(val){
  if(val===null||val===undefined)return'gp-na';
  if(val>=12)return'gp-high';if(val>=10)return'gp-mid';return'gp-low';
}

function renderCalculator(){
  const cont=document.getElementById('calc-content');if(!cont)return;
  const currentUes=(SD.gradesHistory['2025/2026']?.[_activeSem]?.normale)||
                   (SD.gradesHistory['2025/2026']?.S2?.normale)||[];
  const allMods=currentUes.flatMap(u=>u.modules);
  const headRow=`<div class="gpa-row gpa-row-head"><span>${I18n.t('calc_col_module')}</span><span>${I18n.t('calc_col_cc')}</span><span>${I18n.t('calc_col_exam')}</span><span>${I18n.t('calc_col_coef')}</span><span>${I18n.t('calc_col_result')}</span></div>`;
  const rows=allMods.map((m,i)=>{
    const initCC=m.cc!==null&&m.cc!==undefined?Number(m.cc).toFixed(2):'';
    const initExam=m.exam!==null&&m.exam!==undefined?Number(m.exam).toFixed(2):'';
    return `
      <div class="gpa-row">
        <span class="gpa-mod-name">${m.name}</span>
        <input class="gpa-input" type="number" min="0" max="20" step="0.25" value="${initCC}" placeholder="0.00" oninput="calcUpdate()" id="calc-cc-${i}"/>
        <input class="gpa-input" type="number" min="0" max="20" step="0.25" value="${initExam}" placeholder="0.00" oninput="calcUpdate()" id="calc-ex-${i}" ${m.exam===null?'disabled':''}/>
        <span style="font-family:var(--font-mono);font-size:13px;font-weight:700;color:var(--gray-600);text-align:center">${m.coef}</span>
        <span class="gpa-result mb-na" id="calc-res-${i}">—</span>
      </div>`;
  }).join('');
  cont.innerHTML=headRow+rows;
  calcUpdate();
}

function calcUpdate(){
  const currentUes=(SD.gradesHistory['2025/2026']?.[_activeSem]?.normale)||
                   (SD.gradesHistory['2025/2026']?.S2?.normale)||[];
  const allMods=currentUes.flatMap(u=>u.modules);
  let wSum=0,wCoef=0;
  allMods.forEach((m,i)=>{
    const ccEl=document.getElementById(`calc-cc-${i}`);
    const exEl=document.getElementById(`calc-ex-${i}`);
    const resEl=document.getElementById(`calc-res-${i}`);
    if(!ccEl||!resEl)return;
    const cc=ccEl.value!==''?parseFloat(ccEl.value):null;
    const ex=exEl&&!exEl.disabled&&exEl.value!==''?parseFloat(exEl.value):null;
    const moy=_moy(cc,ex);
    if(moy!==null){
      resEl.className=`gpa-result ${moy>=10?'mb-pass':moy<ELIM?'mb-elim':'mb-fail'}`;
      resEl.textContent=moy.toFixed(2);
      wSum+=moy*m.coef;wCoef+=m.coef;
    }else if(cc!==null&&m.exam===null){
      resEl.className='gpa-result mb-pass';
      resEl.textContent=cc.toFixed(2);
      wSum+=cc*m.coef;wCoef+=m.coef;
    }else{
      resEl.className='gpa-result mb-na';resEl.textContent='—';
    }
  });
  const totalValEl=document.getElementById('calc-total-val');
  if(totalValEl){
    const avg=wCoef>0?wSum/wCoef:0;
    totalValEl.textContent=wCoef>0?avg.toFixed(2):'—';
    totalValEl.className=`gpa-total-val ${wCoef>0?(avg>=10?'pass':'fail'):''}`;
  }
}

function calcReset(){
  const currentUes=(SD.gradesHistory['2025/2026']?.[_activeSem]?.normale)||
                   (SD.gradesHistory['2025/2026']?.S2?.normale)||[];
  const allMods=currentUes.flatMap(u=>u.modules);
  allMods.forEach((_m,i)=>{
    const ccEl=document.getElementById(`calc-cc-${i}`);
    const exEl=document.getElementById(`calc-ex-${i}`);
    if(ccEl)ccEl.value='';
    if(exEl&&!exEl.disabled)exEl.value='';
  });
  calcUpdate();
}

function renderExams(){
  const container=document.getElementById('exams-content');if(!container)return;
  const isEn=I18n.current==='en';
  const today=new Date();today.setHours(0,0,0,0);
  const legend=`<div class="exam-legend"><div class="el-item"><div class="el-dot" style="background:var(--g-500)"></div>${I18n.t('legend_upcoming')}</div><div class="el-item"><div class="el-dot" style="background:var(--warn-fg)"></div>${I18n.t('legend_today')}</div><div class="el-item"><div class="el-dot" style="background:var(--gray-300)"></div>${I18n.t('legend_past')}</div></div>`;
  const cards=SD.examSchedule.map(ex=>{
    const d=_pld(ex.date);
    let cardCls='',stsCls='upcoming',stsLbl=I18n.t('exam_upcoming');
    if(d.getTime()===today.getTime()){cardCls='exam-today';stsCls='today';stsLbl=I18n.t('exam_today');}
    else if(d<today){cardCls='exam-past';stsCls='past';stsLbl=I18n.t('exam_past');}
    const disp=d.toLocaleDateString(isEn?'en-GB':'ar-DZ',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    return `<div class="exam-card ${cardCls}"><span class="ec-status ${stsCls}">${stsLbl}</span><div class="ec-module">${ex.module}</div><div class="ec-code">${ex.code}</div><div class="ec-meta"><div class="ec-row ${stsCls==='today'?'today-row':''}"><i class="fa-solid fa-calendar"></i><span>${disp}</span></div><div class="ec-row"><i class="fa-solid fa-clock"></i><span>${ex.time} (${ex.duration})</span></div><div class="ec-row"><i class="fa-solid fa-location-dot"></i><span>${ex.hall}</span></div><div class="ec-row"><i class="fa-solid fa-weight-hanging"></i><span>${I18n.t('exam_coefficient')}: ${ex.coef}</span></div></div></div>`;
  }).join('');
  container.innerHTML=legend+`<div class="exam-grid">${cards}</div>`;
}

function renderCalendar(){
  const container=document.getElementById('calendar-content');if(!container)return;
  const isEn=I18n.current==='en';
  const today=new Date();today.setHours(0,0,0,0);
  const holidays=SD.academicCalendar;
  const _cs=(s,e)=>{const st=_pld(s),en=_pld(e);if(today>=st&&today<=en)return'active';if(today>en)return'past';return'upcoming';};
  const _dur=(s,e)=>Math.round((_pld(e)-_pld(s))/86400000)+1;
  const _fmt=str=>_pld(str).toLocaleDateString(isEn?'en-GB':'ar-DZ',{day:'numeric',month:'long',year:'numeric'});
  const _dbc=d=>d>=30?'dur-g':d>=7?'dur-w':'dur-n';
  const _sl=s=>I18n.t(s==='active'?'cal_status_active':s==='past'?'cal_status_past':'cal_status_upcoming');
  const _sdc=s=>s==='active'?'csd-active':s==='past'?'csd-past':'csd-upcoming';
  const totalDays=holidays.reduce((sum,h)=>sum+_dur(h.start,h.end),0);
  const kpiCards=holidays.map(h=>{
    const st=_cs(h.start,h.end);const days=_dur(h.start,h.end);
    const kpiCls=st==='active'?'cal-active':st==='past'?'cal-past':'';
    return `<div class="cal-kpi ${kpiCls}"><div class="ck-top"><div class="ck-icon"><i class="fa-solid fa-${st==='active'?'sun':st==='past'?'check':'calendar'}"></i></div><span class="cal-status-dot ${_sdc(st)}">${_sl(st)}</span></div><div class="ck-name">${isEn?h.nameEn:h.nameAr}</div><div class="ck-dates"><span>${_fmt(h.start)}</span><span class="ck-arrow">→</span><span>${_fmt(h.end)}</span></div><div class="ck-dur"><i class="fa-solid fa-clock"></i>${days} ${I18n.t('cal_days_unit')}</div></div>`;
  }).join('');
  const tableRows=holidays.map(h=>{
    const st=_cs(h.start,h.end);const days=_dur(h.start,h.end);
    const rowCls=st==='active'?'row-active':st==='past'?'row-past':'';
    return `<tr class="${rowCls}"><td><div class="cal-holiday-name">${isEn?h.nameEn:h.nameAr}</div><div class="cal-holiday-type">${isEn?h.typeEn:h.typeAr}</div></td><td class="tc" style="font-family:var(--font-mono);font-size:12px">${_fmt(h.start)}</td><td class="tc" style="font-family:var(--font-mono);font-size:12px">${_fmt(h.end)}</td><td class="tc"><span class="dur-badge ${_dbc(days)}">${days} ${I18n.t('cal_days_unit')}</span></td><td class="tc"><span class="cal-status-dot ${_sdc(st)}">${_sl(st)}</span></td></tr>`;
  }).join('');
  const up=holidays.filter(h=>_cs(h.start,h.end)==='upcoming').length;
  const ac=holidays.filter(h=>_cs(h.start,h.end)==='active').length;
  const pa=holidays.filter(h=>_cs(h.start,h.end)==='past').length;
  container.innerHTML=`<div class="cal-grid">${kpiCards}</div><div class="cal-tbl-wrap"><div class="cal-tbl-header"><div><div class="cal-tbl-title">${I18n.t('cal_table_title')}</div><div class="cal-tbl-sub">${I18n.t('cal_table_sub')}</div></div><span class="cal-tbl-chip">${I18n.t('cal_chip')}</span></div><div class="table-container"><table class="cal-table" style="min-width:700px;width:100%;border-collapse:collapse"><thead><tr><th>${I18n.t('cal_col_holiday')}</th><th class="tc">${I18n.t('cal_col_start')}</th><th class="tc">${I18n.t('cal_col_end')}</th><th class="tc">${I18n.t('cal_col_dur')}</th><th class="tc">${I18n.t('cal_col_status')}</th></tr></thead><tbody>${tableRows}</tbody></table></div><div class="cal-progress-row"><div><div style="font-size:11px;color:var(--gray-400)">${I18n.t('cal_total_label')}</div><div style="font-size:20px;font-weight:800;color:var(--g-700);font-family:var(--font-mono)">${totalDays} ${I18n.t('cal_days_unit')}</div></div><div class="cp-legend"><div class="cp-item"><div class="cp-dot" style="background:var(--g-500)"></div>${up} ${I18n.t('cal_legend_upcoming')}</div><div class="cp-item"><div class="cp-dot" style="background:var(--warn-fg)"></div>${ac} ${I18n.t('cal_legend_active')}</div><div class="cp-item"><div class="cp-dot" style="background:var(--gray-300)"></div>${pa} ${I18n.t('cal_legend_past')}</div></div></div></div>`;
}

function renderTransport(){
  const container=document.getElementById('transport-content');if(!container)return;
  const routes=SD.transportRoutes;
  const routeCards=routes.map(route=>{
    const stopsHtml=route.stops.map((stop,i)=>{
      const isLast=i===route.stops.length-1;const sz=stop.main?'18px':'12px';
      return `<div class="stop-wrap"><div style="width:${sz};height:${sz};background:${route.color};border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 2px ${route.color};flex-shrink:0;position:relative;z-index:1"></div><div class="stop-name">${stop.name}</div><div class="stop-time">${stop.time}</div></div>${!isLast?`<div class="route-connector ${route.connectorClass}"></div>`:''}`;
    }).join('');
    const busTags=route.busNumbers.map(b=>`<span class="bus-line-tag" style="background:${route.color}cc;border-color:${route.color}88">${b}</span>`).join('');
    return `<div class="transport-map-card"><div class="transport-map-header" style="background:linear-gradient(90deg,${route.color}dd,${route.color}99)"><div><div class="tmh-title">${route.name} — ${route.from} ➜ ${route.to}</div><div class="tmh-sub">${I18n.t('frequency_label')}: ${route.frequency}</div></div><div style="display:flex;gap:var(--s2);align-items:center;flex-wrap:wrap">${busTags}</div></div><div class="transport-visual"><div class="stops-row">${stopsHtml}</div></div></div>`;
  }).join('');
  const legend=`<div class="route-legend">${routes.map(r=>`<div class="rl-item"><div class="rl-color" style="background:linear-gradient(90deg,${r.color},${r.color}88)"></div><div><div class="rl-name">${r.name}</div><div class="rl-stops">${r.stops.length} ${I18n.t('stops_label')}</div></div><span class="badge bdg-neutral" style="margin-inline-start:auto">${r.frequency}</span></div>`).join('')}</div>`;
  const schedRows=SD.busSchedule.map(s=>{
    const route=routes.find(r=>r.name===s.line);const bdgCls=route?route.cssClass:'bus-badge-blue';
    return `<tr class="${s.highlight?'ts-highlight':''}"><td><span class="bus-badge ${bdgCls}">${s.line}</span></td><td><span style="font-family:var(--font-mono);font-weight:700">${s.bus}</span></td><td class="tc" style="font-family:var(--font-mono)">${s.departure}</td><td class="tc" style="font-family:var(--font-mono)">${s.arrival}</td><td class="tc">${s.seats} ${I18n.t('seats_unit')}</td></tr>`;
  }).join('');
  const schedCard=`<div class="card transport-schedule"><div class="card-hd"><div class="card-hd-l"><div class="card-icon" style="background:var(--info-bg);color:var(--info-fg)"><i class="fa-solid fa-clock"></i></div><div><div class="card-title">${I18n.t('bus_schedule_title')}</div><div class="card-sub">${I18n.t('bus_schedule_sub')}</div></div></div></div><div class="table-container"><table class="ts-table" style="min-width:480px"><thead><tr><th>${I18n.t('col_line')}</th><th>${I18n.t('col_bus')}</th><th class="tc">${I18n.t('col_departure')}</th><th class="tc">${I18n.t('col_arrival')}</th><th class="tc">${I18n.t('col_capacity')}</th></tr></thead><tbody>${schedRows}</tbody></table></div></div>`;
  container.innerHTML=routeCards+legend+schedCard;
}

const Timetable={
  currentDay:0,
  init(){this.renderDayNav();this.renderSchedule();},
  renderDayNav(){
    const nav=document.getElementById('day-nav');if(!nav)return;
    const isEn=I18n.current==='en';
    nav.innerHTML=SD.timetable.days.map((d,i)=>`<button class="day-btn ${i===this.currentDay?'active':''}" onclick="Timetable.selectDay(${i})"><span class="db-name">${isEn?d.nameEn:d.name}</span><span class="db-date">${d.date}</span><span class="db-cnt">${d.classes.length}</span></button>`).join('');
  },
  selectDay(i){this.currentDay=i;this.renderDayNav();this.renderSchedule();},
  renderSchedule(){
    const day=SD.timetable.days[this.currentDay];const cont=document.getElementById('tt-schedule-content');if(!cont)return;
    const isEn=I18n.current==='en';
    _st('tt-day-title',isEn?day.nameEn:day.name);_st('tt-day-date',`Février 2026 · ${day.date}`);_st('tt-class-count',`${day.classes.length} ${I18n.t('classes_count')}`);
    if(!day.classes.length){cont.innerHTML=`<div class="empty-day"><i class="fa-solid fa-umbrella-beach"></i><div class="empty-day-txt">${I18n.t('no_classes_day')}</div></div>`;return;}
    cont.innerHTML=day.classes.map((c,i)=>`<div class="sched-entry ${i===0?'is-now':''}"><div class="se-time"><div class="ts">${c.time}</div><div class="te">${c.end}</div></div><div class="se-line"></div><div><div class="se-subject">${c.subject}</div><div class="se-meta"><span class="se-room"><i class="fa-solid fa-door-open"></i> ${c.room}</span><span class="type-tag tt-${c.type.toLowerCase()}">${c.type}</span><span class="se-teacher"><i class="fa-solid fa-chalkboard-user"></i> ${c.teacher}</span></div></div></div>`).join('');
  }
};

const Wallet={
  init(){
    const p=SD.profile;
    _st('wallet-name',p.fullName);_st('wallet-major',p.specialty);_st('wallet-mat',p.matricule);
    _st('wallet-nin',p.nin);_st('wallet-level',p.level);_st('wallet-group',p.group);
    _st('wallet-valid',p.cardExpiry);_st('trans-name',p.fullName);
    _st('trans-route','Ligne 12 — Bab Dzair');_st('trans-mat',p.matricule);_st('trans-valid',p.cardExpiry);
    _generateQR('qr-student',`STU:${p.matricule}:${p.nin}`);
    _generateQR('qr-transport',`BUS:${p.matricule}:L12:B47`);
    this.renderAcademicStatus();
  },
  toggleCard(type,btn){
    document.querySelectorAll('.seg-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.id-panel').forEach(p=>p.classList.remove('active'));
    if(btn)btn.classList.add('active');
    document.getElementById(`card-${type}`)?.classList.add('active');
  },
  renderAcademicStatus(){
    const body=document.getElementById('academic-status-body');if(!body)return;
    const as=SD.academicStatus;const isEn=I18n.current==='en';
    const rows=[
      {icon:'fa-circle-check',clr:'var(--g-500)',lbl:I18n.t('enroll_status_label'),val:isEn?as.enrollmentStatusEn:as.enrollmentStatus},
      {icon:'fa-layer-group',clr:'var(--info-fg)',lbl:I18n.t('acad_year_level'),val:isEn?as.currentYearEn:as.currentYear},
      {icon:'fa-calendar-check',clr:'var(--gray-400)',lbl:I18n.t('last_updated'),val:`<span style="font-family:var(--font-mono);font-size:12px">${as.lastUpdated}</span>`}
    ];
    const freezeHtml=`<div class="acad-status-row"><span class="acad-status-lbl"><i class="fa-solid fa-snowflake" style="color:var(--warn-fg)"></i> ${I18n.t('freeze_label')}</span><span class="freeze-badge ${as.frozen?'freeze-active':'freeze-none'}"><i class="fa-solid fa-${as.frozen?'lock':'unlock'}"></i>${as.frozen?I18n.t('status_frozen'):I18n.t('status_active')}</span></div>${as.frozen&&as.freezeReason?`<div class="acad-status-row"><span class="acad-status-lbl" style="color:var(--fail-fg)"><i class="fa-solid fa-circle-exclamation"></i> ${I18n.t('freeze_reason_label')}</span><span class="acad-status-val" style="color:var(--fail-fg)">${as.freezeReason}</span></div>`:''}`;
    body.innerHTML=rows.map(r=>`<div class="acad-status-row"><span class="acad-status-lbl"><i class="fa-solid ${r.icon}" style="color:${r.clr}"></i> ${r.lbl}</span><span class="acad-status-val">${r.val}</span></div>`).join('')+freezeHtml;
  }
};

function _generateQR(canvasId,data){
  const canvas=document.getElementById(canvasId);if(!canvas)return;
  const ctx=canvas.getContext('2d');const size=80,cells=21,cell=size/cells;
  ctx.fillStyle='#ffffff';ctx.fillRect(0,0,size,size);ctx.fillStyle='#0f172a';
  for(let y=0;y<cells;y++)for(let x=0;x<cells;x++){const v=Math.sin(x*12.9898+y*78.233+data.length)*43758.5453;if((v-Math.floor(v))>0.5)ctx.fillRect(x*cell,y*cell,cell,cell);}
  [[2,2],[2,14],[14,2]].forEach(([px,py])=>{ctx.fillStyle='#0f172a';ctx.fillRect(px*cell,py*cell,cell*7,cell*7);ctx.fillStyle='#ffffff';ctx.fillRect((px+1)*cell,(py+1)*cell,cell*5,cell*5);ctx.fillStyle='#0f172a';ctx.fillRect((px+2)*cell,(py+2)*cell,cell*3,cell*3);});
}

const Profile={
  init(){
    const p=SD.profile;
    _st('profile-fullname',p.fullName);_st('profile-univ',p.university);_st('profile-fac',p.faculty);
    _st('profile-spec',p.specialty);_st('profile-level',p.level);_st('profile-group',p.group);
    _st('profile-mat',p.matricule);_st('profile-nin',p.nin);_st('profile-year',p.academicYear);
    const av=document.getElementById('profile-avatar');if(av)av.innerHTML='<i class="fa-solid fa-user"></i>';
  }
};

function showToast(msg){
  const toast=document.getElementById('toast');const msgEl=document.getElementById('toast-msg');
  if(!toast||!msgEl)return;
  msgEl.textContent=msg;toast.classList.add('show');clearTimeout(toast._t);
  toast._t=setTimeout(()=>toast.classList.remove('show'),3000);
}

document.addEventListener('DOMContentLoaded',()=>{
  const raw=localStorage.getItem('progres_session');
  if(raw){
    try{const user=JSON.parse(raw);if(user?.matricule&&user?.name){showApp(user);return;}}
    catch(_){localStorage.removeItem('progres_session');}
  }
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=I18n.t(el.getAttribute('data-i18n'));});
  document.getElementById('drawer-overlay')?.addEventListener('click',()=>Drawer.close());
  document.addEventListener('click',e=>{
    const dd=document.getElementById('notif-dropdown');
    const wrapper=document.getElementById('notif-wrapper');
    if(dd&&wrapper&&!wrapper.contains(e.target))Notifications.close();
  });
  const drawer=document.getElementById('mobile-drawer');
  if(drawer){
    let startY=0;
    drawer.addEventListener('touchstart',e=>{startY=e.touches[0].clientY;},{passive:true});
    drawer.addEventListener('touchend',e=>{if(e.changedTouches[0].clientY-startY>60)Drawer.close();},{passive:true});
  }
});