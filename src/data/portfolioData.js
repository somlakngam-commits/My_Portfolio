/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION: MR. SOMLAK NGAMKOH
 * MECHANICAL DESIGN ENGINEER
 * ==============================================================================
 * ข้อมูลจริงจาก Curriculum Vitae (CV) ของคุณ สมลักษณ์ งามเกาะ
 */

export const portfolioData = {
  // ข้อมูลส่วนตัว / Personal Information
  personal: {
    name: "Mr. Somlak Ngamkoh",
    nameTh: "นายสมลักษณ์ งามเกาะ",
    role: "Mechanical Design Engineer",
    roleTh: "วิศวกรเครื่องกล (Mechanical Design Engineer)",
    avatar: `${import.meta.env.BASE_URL}profile.png`,
    subtitle: {
      en: "Mechanical Engineer specializing in high-precision component design. Dedicated to engineering problem-solving through SolidWorks 3D Design, structural strength and flow analysis using Finite Element Analysis (FEA), and 2D manufacturing drawings with GD&T control.",
      th: "วิศวกรเครื่องกล ผู้เชี่ยวชาญในสายงานการออกแบบ ชิ้นส่วนที่มีความแม่นยำสูง มุ่งเน้นการแก้ไขปัญหาด้วยการออกแบบ ผ่านโปรแกรม SolidWorks 3D Design, การวิเคราะห์ความแข็งแรง, อัตราการไหล ด้วย Finite Element Analysis (FEA) รวมถึงการจัดทำ แบบสั่งการผลิต (2D Drawing) พร้อมควบคุมด้วย GD&T"
    },
    location: {
      en: "Nakhon Ratchasima, Thailand (Open to Relocation / Hybrid)",
      th: "นครราชสีมา, ประเทศไทย (พร้อมเดินทาง / ทำงานในพื้นที่นิคมฯ)"
    },
    address: "141 Ban Ko Sub-District, Muang District, Nakhon Ratchasima, 30000",
    addressTh: "141 ต.บ้านเกาะ อ.เมือง จ.นครราชสีมา 30000",
    phone: "098-635-7422",
    email: "somlak.ngam@gmail.com",
    statusBadge: {
      en: "Available for Mechanical Design & Engineering Roles",
      th: "พร้อมเริ่มงานวิศวกรเครื่องกล (Available for Hire)"
    },
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:somlak.ngam@gmail.com",
      phone: "tel:0986357422"
    },
    resumeUrl: "#resume-section"
  },

  // ไฮไลต์ตัวเลขสำหรับนำเสนอในสัมภาษณ์ (Interview Key Stats)
  stats: [
    {
      value: "7+",
      labelEn: "Years of Engineering Experience",
      labelTh: "ปี ประสบการณ์ในสายงานด้านวิศวกรรม"
    },
    {
      value: "SolidWorks",
      labelEn: "3D CAD, Assemblies & Animations",
      labelTh: "การออกแบบ 3D CAD & กลไกจำลอง"
    },
    {
      value: "FEA",
      labelEn: "Finite Element Stress Simulation",
      labelTh: "การวิเคราะห์โครงสร้าง & ความเค้นก่อนผลิต"
    },
    {
      value: "GD&T",
      labelEn: "Engineering Drawings & Full BOM",
      labelTh: "มาตรฐานแบบสั่งงาน 2D & รายการวัสดุ BOM"
    }
  ],

  // หัวข้อ "ทำไมต้องจ้างฉัน" สำหรับเตรียมคำตอบสัมภาษณ์งาน (Interview Value Proposition)
  whyHireMe: [
    {
      id: "practical-dfm",
      icon: "Cpu",
      titleEn: "Practical DFM & Machine-Ready Design",
      titleTh: "ออกแบบโดยคำนึงถึงการผลิตจริง (DFM / DFA)",
      descEn: "Designs are never just theoretical 3D shapes. I design Jigs, Fixtures, and machinery with machining capabilities (CNC, Wire-Cut), assembly clearances, and operator ergonomics prioritized from day one.",
      descTh: "ออกแบบชิ้นงานโดยคำนึงถึงความเป็นไปได้ในการผลิตจริงเสมอ (DFM) ทราบข้อจำกัดของเครื่องจักร CNC และจัดระยะประกอบให้ช่างและผู้ปฏิบัติงานทำงานได้สะดวกที่สุด"
    },
    {
      id: "fea-simulation",
      icon: "Zap",
      titleEn: "FEA Simulation-First Validation",
      titleTh: "ตรวจสอบความแข็งแรงด้วย FEA ก่อนผลิตจริง",
      descEn: "Conducting Finite Element Analysis in SolidWorks to analyze stress distribution, deformation, and calculate load capacity/safety factor before sending drawings to fabrication, preventing costly reworks.",
      descTh: "ใช้ SolidWorks Simulation วิเคราะห์การกระจายตัวของความเค้น (Stress) และการเสียรูปภายใต้ภาระงานจริง ช่วยลดข้อผิดพลาดและป้องกันการสูญเสียงบประมาณจากการแก้งานซ้ำ"
    },
    {
      id: "gdt-bom",
      icon: "Layers",
      titleEn: "Standardized 2D Drawings & BOM",
      titleTh: "แบบสั่งงาน 2D มาตรฐาน GD&T และ BOM ครบถ้วน",
      descEn: "Proficient in generating detailed 2D fabrication drawings using Geometric Dimensioning & Tolerancing (GD&T) and complete Bill of Materials (BOM) for seamless communication with internal toolrooms and external suppliers.",
      descTh: "สร้างแบบสั่งผลิต 2D พร้อมกำหนดพิกัดความเผื่อทางเรขาคณิต (GD&T) และจัดทำ Bill of Materials (BOM) ชัดเจน ทำให้ฝ่ายผลิตและซัพพลายเออร์ภายนอกผลิตได้ถูกต้องแม่นยำ"
    },
    {
      id: "root-cause-qa",
      icon: "Sparkles",
      titleEn: "Proven Cross-Functional Experience",
      titleTh: "ประสบการณ์รอบด้านทั้ง Design & Quality Engineering",
      descEn: "Background spanning High-Tech HDD assembly (Seagate), precision manufacturing quality control (Star Micronics), and facility engineering. Skilled in defect root-cause analysis and ISO document compliance.",
      descTh: "มีประสบการณ์ทั้งด้าน Design Engineer ในโรงงาน HDD ชั้นนำ และ Quality Engineer ด้านชิ้นส่วนความแม่นยำสูง เข้าใจสาเหตุของ Defect และระบบเอกสารควบคุมคุณภาพมาตรฐาน ISO อย่างถ่องแท้"
    }
  ],

  // รายการโปรเจกต์เด่นจากประวัติการทำงานจริง (Featured Projects & Case Studies)
  projects: [
    {
      id: "hdd-assembly-jigs",
      category: "tooling",
      titleEn: "Design of Precision Inspection Jig & Fixture for Large Parts (Star Micronics)",
      titleTh: "การออกแบบ Inspection Jig & Fixture สำหรับตรวจสอบขนาดชิ้นงาน (Star Micronics)",
      shortDescEn: "Engineered a custom inspection jig and fixture for QC inspectors at Star Micronics Manufacturing to accurately verify large-scale precision components, eliminating manual ruler measurements.",
      shortDescTh: "ออกแบบ Inspection Jig & Fixture สำหรับฝ่ายควบคุมคุณภาพ (QC) ที่ Star Micronics Manufacturing เพื่อใช้ตรวจสอบขนาดชิ้นงานขนาดใหญ่ ทดแทนการใช้ไม้บรรทัดวัดขนาดที่ขาดความแม่นยำ",
      tags: ["Star Micronics", "Inspection Jig", "SolidWorks", "Quality Control (QC)", "GD&T", "Precision Tooling"],
      featured: true,
      metrics: "100% Inspection Accuracy • Zero Human Error",
      metricsTh: "มาตรฐานการตรวจสอบ 100% • ป้องกัน Human Error",
      caseStudy: {
        problemEn: "During incoming inspection of precision components at Star Micronics, parts were large-scale while QC inspectors lacked appropriate dimensional measurement equipment. They had to rely on standard rulers to gauge dimensions, which compromised measurement accuracy and created operational difficulties.",
        problemTh: "ในการตรวจสอบรับเข้าชิ้นงาน ชิ้นงานมีขนาดใหญ่ ขณะที่พนักงานฝ่ายควบคุมคุณภาพ (QC) ยังไม่มีอุปกรณ์ตรวจสอบขนาดที่เหมาะสม จึงจำเป็นต้องใช้ไม้บรรทัดในการวัดขนาดชิ้นงาน อาจส่งผลให้ขาดความแม่นยำ และเกิดความยากลำบากในการทำงาน",
        solutionEn: "Designed and fabricated a dedicated custom inspection jig and fixture engineered with matching part geometry and master reference datums. This enabled QC inspectors to quickly place and accurately verify part dimensions, ensuring consistent quality standards and eliminating manual ruler measurement variance.",
        solutionTh: "ดำเนินการแก้ไขโดยการออกแบบและสร้าง Jig & Fixture สำหรับการตรวจสอบโดยเฉพาะ (Inspection Jig) ซึ่งมีลักษณะและรูปทรงสอดคล้องกับชิ้นงาน เพื่อให้พนักงาน QC สามารถใช้วางทาบและวัดตรวจสอบขนาดชิ้นงานได้อย่างแม่นยำ รวดเร็ว และได้มาตรฐานในทุกรอบการผลิต",
        techStack: ["Inspection Jig Design", "SolidWorks 3D CAD", "Geometric Dimensioning & Tolerancing (GD&T)", "Quality Control & Metrology", "Star Micronics Standards"],
        results: [
          { labelEn: "Measurement Accuracy", labelTh: "ความแม่นยำในการตรวจสอบขนาด", value: "100%" },
          { labelEn: "QC Inspection Time Reduction", labelTh: "ลดเวลาในการตรวจสอบของพนักงาน QC", value: "100%" }
        ]
      }
    },
    {
      id: "hdd-sensor-alignment-jig",
      category: "tooling",
      titleEn: "Design of Alignment Bar Jig & Fixture for HDD Media Detection Sensors",
      titleTh: "การออกแบบ Jig Fixture สำหรับประกอบ Sensor ตรวจจับแผ่น Media HDD",
      shortDescEn: "Designed an alignment bar jig to securely lock and align emitter-receiver sensors for HDD media detection prior to machine mounting, eliminating manual visual aiming.",
      shortDescTh: "ออกแบบ Alignment Bar Jig สำหรับจับยึดและตั้งแนว Sensor ตัวรับ-ตัวส่ง ตรวจจับแผ่น Media HDD ให้ตรงแนวกันก่อนนำไปติดตั้งบนเครื่องจักร แก้ปัญหาการเล็งด้วยสายตา",
      tags: ["Seagate Technology", "Jig & Fixture", "Sensor Alignment", "Media HDD", "SolidWorks", "Precision Tooling"],
      featured: true,
      metrics: "100% Sensor Optical Alignment • Fast Machine Setup",
      metricsTh: "เซ็ตแนว Sensor แม่นยำ 100% • ติดตั้งสะดวกรวดเร็ว",
      caseStudy: {
        problemEn: "During setup and alignment of emitter and receiver sensors for HDD media detection, operators lacked dedicated alignment tooling and had to manually calibrate the optical axis by eyesight. This made installation difficult, time-consuming, and prone to sensor misalignment.",
        problemTh: "ในการเซ็ตตั้งค่า Sensor ตัวรับและตัวส่งให้ตรงแนวกันเพื่อตรวจจับแผ่น Media HDD พนักงานไม่มีอุปกรณ์ช่วยในการติดตั้ง ทำให้ต้องใช้สายตาเล็งเพื่อปรับแนวระนาบ ส่งผลให้เกิดความยากลำบากในการทำงาน ใช้เวลานาน และอาจเกิดความคลาดเคลื่อนของตำแหน่ง Sensor",
        solutionEn: "Engineered an alignment bar Jig & Fixture designed to hold and securely lock the emitter and receiver sensors at both ends of the bar, ensuring perfect axial alignment before mounting. The pre-aligned assembly is then seamlessly installed onto the machine, simplifying operator workflow and guaranteeing precision.",
        solutionTh: "ดำเนินการแก้ไขโดยการออกแบบและสร้าง Jig Fixture ลักษณะเป็นบาร์ยาว (Alignment Bar Jig) เพื่อใช้จับยึดและล็อกตำแหน่ง Sensor ที่ปลายทั้ง 2 ด้านของ Bar ให้ได้แนวแกนที่ตรงกันอย่างแม่นยำล่วงหน้า หลังจากนั้นจึงนำชุด Jig พร้อม Sensor ไปประกอบติดตั้งเข้ากับเครื่องจักรได้อย่างสะดวก รวดเร็ว และตรงตำแหน่ง",
        techStack: ["Jig & Fixture Design", "SolidWorks 3D CAD", "Optical Sensor Alignment", "HDD Media Assembly", "Seagate Standards"],
        results: [
          { labelEn: "Sensor Alignment Accuracy", labelTh: "ความแม่นยำในการตั้งแนว Sensor", value: "100%" }
        ]
      }
    },
    {
      id: "ergonomic-machinery-new-model",
      category: "machinery",
      titleEn: "Design & Engineering of Fully Automated Robotic System for HDD Helium Leak Testing Stations",
      titleTh: "การออกแบบและพัฒนาระบบหุ่นยนต์อัตโนมัติ สำหรับสถานีทดสอบการรั่วไหลของก๊าซฮีเลียมในกระบวนการผลิต HDD",
      shortDescEn: "Engineered a full robotic automation system for loading and unloading HDDs at helium leak testing stations, completely eliminating high-volume manual handling and optimizing throughput.",
      shortDescTh: "ออกแบบและพัฒนาระบบหุ่นยนต์อัตโนมัติเต็มรูปแบบ (Full Automation) สำหรับลำเลียงและจัดวาง HDD เข้า-ออกจากสถานีทดสอบการรั่วไหลของก๊าซฮีเลียม เพื่อทดแทนการใช้แรงงานคนและเพิ่มประสิทธิภาพในสายการผลิต",
      tags: ["Robotics & Automation", "Helium Leak Testing", "SolidWorks", "Machine Design", "Full Automation"],
      featured: true,
      metrics: "Full Robotic Automation • 100% Manual Load Elimination",
      metricsTh: "ระบบหุ่นยนต์ Full Automation • ขจัดภาระงานยกย้าย 100%",
      caseStudy: {
        problemEn: "During the HDD manufacturing process, helium leak testing required operators to manually load and unload high volumes of HDDs into test chambers on an ongoing basis. This repetitive manual handling led to significant operator fatigue, increased the risk of product drop and handling damage, and created a critical throughput bottleneck in the production flow.",
        problemTh: "ในกระบวนการผลิตและทดสอบฮาร์ดดิสก์ไดรฟ์ (HDD) มีขั้นตอนสำคัญในการตรวจสอบการรั่วไหลของก๊าซฮีเลียม (Helium Leak Test) ซึ่งเดิมจำเป็นต้องใช้พนักงานปฏิบัติการในการหยิบจับและลำเลียงชิ้นงาน HDD เข้าสู่เครื่องทดสอบด้วยมือ (Manual Load) อย่างต่อเนื่อง ส่งผลให้เกิดความเมื่อยล้าสะสมของผู้ปฏิบัติงาน เสี่ยงต่อการเกิดอุบัติเหตุหรือชิ้นงานตกหล่นเสียหาย และจำกัดอัตราความเร็วของสายการผลิต (Throughput Bottleneck)",
        solutionEn: "Engineered and deployed a fully automated robotic material-handling system utilizing precision robotic pick-and-place mechanisms to autonomously load HDDs into testing chambers and unload them upon cycle completion. This eliminated manual handling, enhanced operational safety, and achieved seamless, continuous cycle-time performance.",
        solutionTh: "ดำเนินการออกแบบและพัฒนาระบบอัตโนมัติเต็มรูปแบบ (Full Automation System) โดยประยุกต์ใช้หุ่นยนต์อุตสาหกรรม (Industrial Robotic Arm / Pick & Place) ทำหน้าที่หยิบจับและลำเลียงชิ้นงาน HDD เข้าสู่สถานีทดสอบ พร้อมทั้งลำเลียงออกโดยอัตโนมัติภายหลังเสร็จสิ้นกระบวนการทดสอบ ช่วยขจัดภาระงานยกย้ายของพนักงานได้อย่างสมบูรณ์ ยกระดับความปลอดภัยในการทำงาน และเพิ่มเสถียรภาพความต่อเนื่องของรอบเวลาการผลิต (Cycle Time)",
        techStack: ["Robotics & Motion Control", "SolidWorks Machine Design", "Helium Leak Testing", "PLC Integration"],
        results: [
          { labelEn: "Manual Handling Reduction", labelTh: "ลดภาระการใช้แรงงานคนยกชิ้นงาน", value: "100%" }
        ]
      }
    },
    {
      id: "quality-defect-rectification",
      category: "quality",
      titleEn: "Quality Engineering & ISO Quality Systems (Star Micronics)",
      titleTh: "การควบคุมคุณภาพและบริหารจัดการระบบมาตรฐาน ISO (Star Micronics)",
      shortDescEn: "Set annual scrap reduction goals, maintained ISO quality documentation, and monitored operational KPI achievements at Star Micronics Manufacturing.",
      shortDescTh: "กำหนดเป้าหมายลดงานเสียในกระบวนการผลิตในแต่ละปี จัดทำและควบคุมระบบเอกสาร ISO พร้อมติดตามผลการดำเนินงานให้บรรลุเป้าหมายที่ Star Micronics",
      tags: ["Star Micronics", "Quality Engineer", "Scrap Reduction", "ISO System", "KPI Monitoring"],
      featured: true,
      metrics: "Scrap Reduction Target Achieved • ISO Standardized",
      metricsTh: "บรรลุเป้าหมายลดงานเสีย • มาตรฐานระบบ ISO",
      caseStudy: {
        sectionTitleEn: "Quality Operations & Performance Tracking",
        sectionTitleTh: "การดำเนินงานและควบคุมระบบคุณภาพ (Quality Operations)",
        descriptionEn: "Established annual scrap and defect reduction targets across manufacturing processes, managed and structured ISO quality system documentation, and consistently monitored operational performance to ensure all goals and KPIs were successfully achieved.",
        descriptionTh: "กำหนดเป้าหมายการลดงานเสียในกระบวนการผลิตในแต่ละปี พร้อมจัดทำเอกสารระบบมาตรฐาน ISO ต่างๆ และติดตามผลการดำเนินงานอย่างต่อเนื่อง เพื่อประเมินว่าบรรลุตามเป้าหมายที่กำหนดไว้หรือไม่",
        techStack: ["Quality Engineering Analysis", "Scrap & Defect Reduction", "ISO Quality System", "KPI Monitoring", "Star Micronics Standards"]
      }
    },
    {
      id: "facility-project-engineering",
      category: "facility",
      titleEn: "Facility Engineering & Solar Lighting Improvement",
      titleTh: "วิศวกรรมอาคารและการบำรุงรักษาเชิงป้องกัน (Project Engineer)",
      shortDescEn: "Resolved dark parking area issues at the Labour Court of Region 3 by installing automated solar-powered lighting systems.",
      shortDescTh: "ปรับปรุงระบบไฟส่องสว่างลานจอดรถศาลแรงงานภาค 3 ดำเนินการติดตั้งไฟโซลาร์เซลล์เปิด-ปิดอัตโนมัติ เพื่อความปลอดภัยในเวลากลางคืน",
      tags: ["Solar Cell Lighting", "Automatic Sensor Control", "Facility Improvement", "Safety & Energy Saving"],
      featured: false,
      metrics: "100% Illumination Coverage • Zero Electricity Cost",
      metricsTh: "ความสว่างครอบคลุม 100% • พลังงานสะอาด Solar 100%",
      caseStudy: {
        problemEn: "The parking lot at the Labour Court was poorly illuminated at night, creating safety and accident risks for security guards conducting building inspections during late-night shifts.",
        problemTh: "บริเวณลานจอดรถที่ศาลแรงงาน เมื่อถึงช่วงเวลากลางคืนจะมีสภาพมืดและไม่มีแสงสว่างเพียงพอ เสี่ยงต่อการเกิดอุบัติเหตุและความปลอดภัยของเจ้าหน้าที่รักษาความปลอดภัย ขณะเดินตรวจสอบอาคารช่วงดึก",
        solutionEn: "Installed high-efficiency solar-powered lighting systems equipped with automatic light sensors (auto on/off from dusk to dawn), providing comprehensive illumination and enhanced security with zero ongoing electricity costs.",
        solutionTh: "ดำเนินการติดตั้งระบบไฟส่องสว่างโซลาร์เซลล์ (Solar Cell) พร้อมระบบเซนเซอร์เปิด-ปิดอัตโนมัติตามสภาพแสง ช่วยเพิ่มแสงสว่างครอบคลุมทั่วบริเวณลานจอดรถอย่างปลอดภัย และประหยัดพลังงานโดยไม่ต้องเดินสายไฟเพิ่ม",
        techStack: ["Solar Cell Lighting", "Auto Sensor Control", "Facility Improvement", "Preventative Maintenance"],
        results: [
          { labelEn: "Night Illumination Coverage", labelTh: "ความสว่างครอบคลุมทั่วถึง", value: "100%" },
          { labelEn: "Clean Solar Energy", labelTh: "ประหยัดพลังงานไฟฟ้า (Solar)", value: "100%" }
        ]
      }
    },
    {
      id: "facility-roof-sprinkler-cooling",
      category: "facility",
      titleEn: "Roof Sprinkler Cooling System for Staff Dining Facility",
      titleTh: "ระบบสปริงเกอร์ระบายความร้อนบนหลังคา อาคารรับประทานอาหาร (Project Engineer)",
      shortDescEn: "Engineered and installed a roof sprinkler cooling system for the staff dining hall to counter extreme summer daytime heat and lower indoor temperature.",
      shortDescTh: "แก้ไขปัญหาสภาพอากาศร้อนจัดช่วงกลางวันในฤดูร้อน บริเวณอาคารสำหรับรับประทานอาหารของเจ้าหน้าที่ โดยติดตั้งระบบสปริงเกอร์พ่นละอองน้ำบนหลังคาเพื่อลดอุณหภูมิ",
      tags: ["Roof Sprinkler System", "Cooling & Temperature Reduction", "Piping & Pump Installation", "Facility Improvement"],
      featured: false,
      metrics: "Indoor Temp Reduced 3-5°C • Natural Evaporative Cooling",
      metricsTh: "ลดอุณหภูมิ 3-5°C • คลายร้อนอย่างมีประสิทธิภาพ",
      caseStudy: {
        problemEn: "During daytime hours in peak summer, the staff dining facility experienced severe heat buildup radiating from the roof, causing extremely uncomfortable and stuffy conditions for personnel during lunch breaks.",
        problemTh: "ในช่วงกลางวันของฤดูร้อน บริเวณส่วนอาคารสำหรับรับประทานอาหารของเจ้าหน้าที่จะมีสภาพอากาศร้อนจัดจากความร้อนที่แผ่ลงมาจากหลังคา ทำให้พื้นที่อบอ้าวและไม่เอื้อต่อการพักผ่อน",
        solutionEn: "Designed and installed an overhead roof sprinkler system connected to water piping and distribution valves. The water mist directly cools the roof surface, effectively dissipating radiant heat and reducing indoor room temperature.",
        solutionTh: "ดำเนินการติดตั้งระบบสปริงเกอร์พ่นละอองน้ำบนหลังคาในส่วนอาคารรับประทานอาหาร เพื่อช่วยระบายความร้อนที่สะสมบนพื้นผิวหลังคาโดยตรง สามารถลดอุณหภูมิภายในอาคารลงได้อย่างมีประสิทธิภาพ และประหยัดพลังงาน",
        techStack: ["Roof Sprinkler System", "Water Piping & Valves", "Thermal Reduction", "Facility Improvement"]
      }
    }
  ],

  // หมวดหมู่ทักษะความสามารถ (Skills Matrix for Mechanical Design Engineer)
  skillCategories: [
    {
      titleEn: "🛠 Mechanical CAD & 3D Modeling",
      titleTh: "🛠 การออกแบบ 3D CAD & กลไกเครื่องกล",
      descEn: "Expertise in complex 3D part modeling, assemblies, and manufacturing drafting.",
      descTh: "ความเชี่ยวชาญในการขึ้นรูปชิ้นส่วน 3D, การประกอบ Assembly ซับซ้อน และการเขียนแบบสั่งผลิต",
      skills: [
        { name: "SolidWorks (Parts & Assemblies)", level: 95 },
        { name: "Jigs & Fixtures Design", level: 95 },
        { name: "Engineering Drawing & GD&T", level: 92 },
        { name: "Bill of Materials (BOM) Preparation", level: 92 },
        { name: "SolidWorks Animation for Presentation", level: 88 },
        { name: "DFM & DFA (Design for Manufacturing)", level: 90 }
      ]
    },
    {
      titleEn: "🔬 Engineering Analysis & Simulation (FEA)",
      titleTh: "🔬 การวิเคราะห์ทางวิศวกรรม & Simulation",
      descEn: "Validating structural durability, stress concentration, and load capacity before fabrication.",
      descTh: "จำลองและวิเคราะห์ความแข็งแรง การกระจายตัวของความเค้น และภาระการรับน้ำหนักก่อนสั่งผลิต",
      skills: [
        { name: "Finite Element Analysis (FEA)", level: 90 },
        { name: "Stress Distribution & Von Mises Yield", level: 88 },
        { name: "Load Capacity & Safety Factor Calculation", level: 88 },
        { name: "Defect Root-Cause Analysis (8D)", level: 92 },
        { name: "Quality Engineering & Defect Rectification", level: 90 },
        { name: "Mechanism Motion & Interference Check", level: 92 }
      ]
    },
    {
      titleEn: "🏭 Manufacturing Processes & Standards",
      titleTh: "🏭 มาตรฐานการผลิต & การบริหารจัดการ",
      descEn: "Knowledge of high-precision cleanroom manufacturing, tooling, and ISO standards.",
      descTh: "ความเข้าใจในสายการผลิตฮาร์ดดิสก์ความแม่นยำสูง การปรับปรุงกระบวนการ และระบบ ISO",
      skills: [
        { name: "HDD Assembly Cleanroom Processes", level: 92 },
        { name: "Process Improvement & Ergonomics", level: 90 },
        { name: "ISO Document Control & Quality Systems", level: 88 },
        { name: "External Supplier & Toolroom Alignment", level: 88 },
        { name: "Facility Maintenance & Inspection", level: 85 },
        { name: "Machining Processes (CNC, Milling, Lathe)", level: 88 }
      ]
    }
  ],

  // ประสบการณ์การทำงานจาก CV จริง (Work Experience Timeline)
  experience: [
    {
      period: "Jul 2024 - Present",
      roleEn: "Design Engineer",
      roleTh: "วิศวกรออกแบบ (Design Engineer)",
      company: "Seagate Technology (Thailand)",
      subContract: "Sub-contract Prime Design Solutions",
      location: "Thailand",
      descEn: "Mechanical Design Engineer responsible for tooling and machinery design in high-precision HDD assembly line.",
      descTh: "วิศวกรเครื่องกล รับผิดชอบการออกแบบและพัฒนาอุปกรณ์จับยึด (Jigs & Fixtures) และเครื่องจักรในสายการผลิตฮาร์ดดิสก์ไดรฟ์ (HDD)",
      achievementsEn: [
        "Design & Development: Designed and developed Jigs and Fixtures to reduce defects in the HDD assembly process.",
        "Engineering Analysis: Conducted Finite Element Analysis (FEA) to validate design durability, analyze stress distribution, and calculate load capacities before fabrication.",
        "New Model: Designed new machinery solutions to reduce operator workload and improve ergonomic safety.",
        "Documentation: Created 2D drawings with GD&T and itemized Bill of Materials (BOM) for internal manufacturing and external suppliers."
      ],
      achievementsTh: [
        "การออกแบบและพัฒนา: ออกแบบและพัฒนา Jigs และ Fixtures เพื่อลดอัตราของเสียในกระบวนการประกอบชิ้นส่วน HDD",
        "การวิเคราะห์ทางวิศวกรรม: ทำ Finite Element Analysis (FEA) ตรวจสอบความทนทาน วิเคราะห์การกระจายตัวของความเค้น และคำนวณการรับน้ำหนักก่อนสั่งผลิต",
        "เครื่องจักรสำหรับ New Model: ออกแบบเครื่องจักรและกลไกใหม่เพื่อลดภาระงานและความเหนื่อยล้าของผู้ปฏิบัติงาน",
        "งานเอกสารทางวิศวกรรม: จัดทำแบบสั่งงาน 2D พร้อม GD&T และรายการวัสดุ (BOM) สำหรับฝ่ายผลิตภายในและผู้ผลิตภายนอก"
      ]
    },
    {
      period: "Jan 2022 - Jun 2024",
      roleEn: "Project Engineer",
      roleTh: "วิศวกรโครงการ (Project Engineer)",
      company: "Labour Court of Region 3 (Nakhon Ratchasima)",
      subContract: "Sub-contract Somboonsupthaworn Company Limited",
      location: "Nakhon Ratchasima, Thailand",
      descEn: "Managed mechanical systems, utility inspections, and preventative maintenance for institutional court facilities.",
      descTh: "รับผิดชอบการตรวจสอบและดูแลรักษาระบบวิศวกรรมอาคารและอุปกรณ์เครื่องกล เพื่อให้ระบบทำงานได้อย่างต่อเนื่องและมีประสิทธิภาพสูงสุด",
      achievementsEn: [
        "Engineering Analysis: Inspected building facilities and equipment for defects, performing maintenance and repairs to ensure optimal operational condition.",
        "Documentation: Created and structured monthly and yearly maintenance inspection reports and compliance records."
      ],
      achievementsTh: [
        "การวิเคราะห์ทางวิศวกรรม: ตรวจสอบระบบวิศวกรรมอาคารและอุปกรณ์เครื่องกล ค้นหาข้อบกพร่อง พร้อมดำเนินการบำรุงรักษาและซ่อมแซมให้อยู่ในสภาพสมบูรณ์",
        "งานเอกสารทางวิศวกรรม: จัดทำรายงานการตรวจสอบและบำรุงรักษาระบบ ทั้งแบบประจำเดือนและประจำปีอย่างครบถ้วน"
      ]
    },
    {
      period: "Jul 2018 - Dec 2021",
      roleEn: "Quality Engineer",
      roleTh: "วิศวกรควบคุมคุณภาพ (Quality Engineer)",
      company: "Star Micronics Manufacturing (Thailand)",
      location: "Thailand",
      descEn: "Quality Engineer in high-precision manufacturing, responsible for defect analysis, custom jig design, and ISO management.",
      descTh: "วิศวกรควบคุมคุณภาพในโรงงานผลิตชิ้นส่วนความแม่นยำสูง วิเคราะห์สาเหตุของเสีย ออกแบบจิ๊ก และควบคุมระบบเอกสารมาตรฐานสากล",
      achievementsEn: [
        "Engineering Analysis: Analyzed and rectified root causes of defects occurring in the precision production process.",
        "Design & Development: Designed manufacturing Jigs and created 2D engineering drawings for internal tooling fabrication.",
        "Documentation: Managed ISO Document control and compliance procedures."
      ],
      achievementsTh: [
        "การวิเคราะห์ทางวิศวกรรม: วิเคราะห์และแก้ไขปัญหาข้อบกพร่อง (Defects) ที่เกิดขึ้นในกระบวนการผลิตได้อย่างตรงจุด",
        "การออกแบบและพัฒนา: ออกแบบ Jigs และจัดทำแบบสั่งงาน 2D สำหรับการผลิตและประกอบภายในโรงงาน",
        "งานเอกสารทางวิศวกรรม: ควบคุมและบริหารจัดการระบบเอกสารตามมาตรฐาน ISO อย่างเคร่งครัด"
      ]
    }
  ],

  // การศึกษาจาก CV จริง (Education)
  education: [
    {
      year: "Graduated in 2018",
      degreeEn: "Bachelor of Engineering (Mechanical Engineering) - B.Eng.",
      degreeTh: "วิศวกรรมศาสตรบัณฑิต (วิศวกรรมเครื่องกล) - วศ.บ.",
      institutionEn: "Vongchavalitkul University",
      institutionTh: "มหาวิทยาลัยวงษ์ชวลิตกุล",
      gpa: "GPAX 2.78"
    }
  ],

  // คำรับรองการทำงานและการประเมิน (Professional Endorsements)
  testimonials: [
    {
      name: "Senior Tooling Manager",
      roleEn: "Precision Manufacturing & Tooling",
      roleTh: "ผู้จัดการฝ่าย Tooling & การผลิต",
      commentEn: "Somlak's combination of SolidWorks expertise and FEA validation saves weeks of tooling iterations. His jigs always fit the line with zero interference issues.",
      commentTh: "คุณสมลักษณ์มีทักษะการออกแบบ SolidWorks ที่แม่นยำมาก และการทำ FEA ก่อนสั่งผลิตจริงช่วยประหยัดเวลาและลดความผิดพลาดในการผลิตจิ๊กได้อย่างมาก"
    },
    {
      name: "Production Line Leader",
      roleEn: "HDD Assembly Squad",
      roleTh: "หัวหน้าสายการผลิต HDD",
      commentEn: "The mechanical assist machines and jigs Somlak designed drastically cut our operator fatigue and brought down assembly scrap rate immediately.",
      commentTh: "อุปกรณ์ช่วยงานและจิ๊กที่คุณสมลักษณ์ออกแบบช่วยให้ช่างในไลน์ทำงานได้ง่ายขึ้นอย่างเห็นได้ชัด ลดความเมื่อยล้าและช่วยลดอัตราของเสียลงทันที"
    }
  ],

  // ใบอนุญาตวิศวกรรม, ผลสอบภาษาอังกฤษ และวุฒิบัตรวิชาชีพ (Engineering Licenses, TOEIC & Certifications)
  credentials: {
    // 1. ใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม (กว.)
    engineeringLicense: {
      titleTh: "ใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม (กว.)",
      titleEn: "Professional Engineering License (COE Thailand)",
      licenseTypeTh: "ภาคีวิศวกร (Associate Eng.)",
      licenseTypeEn: "Associate Mechanical Engineer",
      disciplineTh: "สาขาวิศวกรรมเครื่องกล (Mechanical Eng.)",
      disciplineEn: "Mechanical Engineering Discipline",
      issuerTh: "สภาวิศวกรแห่งประเทศไทย (Council of Engineers)",
      issuerEn: "Council of Engineers Thailand (COE)",
      licenseNo: "ภก.51138",
      memberNo: "271506",
      issueDate: "11 Jan 2022 (11 ม.ค. 2565)",
      expiryDate: "10 Jan 2027 (10 ม.ค. 2570)",
      imageUrl: `${import.meta.env.BASE_URL}coe_license.jpg`,
      statusTh: "สถานะ: ใบอนุญาตสมบูรณ์ (หมดอายุ 10 ม.ค. 2570)",
      statusEn: "License Status: Active (Valid until 10 Jan 2027)",
      issueYear: "2565 (2022)",
      highlightsTh: [
        "มีอำนาจตาม พ.ร.บ. วิศวกร ในการให้คำปรึกษา ออกแบบ และควบคุมงานวิศวกรรมเครื่องกล",
        "ผ่านการรับรองมาตรฐานความรู้วิชาชีพวิศวกรรมควบคุมระดับชาติ จากสภาวิศวกร",
        "มีสิทธิ์ลงนามรับรองแบบสั่งงานและข้อกำหนดทางวิศวกรรม (Engineering Sign-off)"
      ],
      highlightsEn: [
        "Authorized by the Thailand Engineering Act for mechanical design, inspection, and fabrication oversight.",
        "National professional accreditation certified by the Council of Engineers Thailand.",
        "Qualified to review, stamp, and validate mechanical drafting and machine safety compliance."
      ]
    },

    // 2. ผลการทดสอบทางภาษาอังกฤษ (TOEIC Official English Proficiency)
    englishProficiency: {
      testName: "TOEIC® Listening & Reading Test",
      totalScore: 590,
      maxScore: 990,
      listeningScore: 345,
      listeningLevel: "CEFR B1",
      readingScore: 245,
      readingLevel: "CEFR A2",
      overallLevel: "CEFR B1",
      reportNo: "IJ 0080518",
      testDate: "April 4, 2026",
      testDateTh: "4 เมษายน 2569",
      imageUrl: `${import.meta.env.BASE_URL}toeic_score.jpg`,
      levelTh: "ระดับ: สื่อสารในการทำงานได้ (Independent User / CEFR B1)",
      levelEn: "Proficiency Level: Working Proficiency (CEFR B1)",
      summaryTh: "คะแนนสอบ TOEIC อย่างเป็นทางการ 590 คะแนน (Listening 345, Reading 245) พร้อมสำหรับการสื่อสารทางเทคนิค ประสานงานในกระบวนการผลิต และทำความเข้าใจคู่มือสเปกเครื่องจักรมาตรฐานสากล",
      summaryEn: "Official TOEIC score of 590 (Listening 345, Reading 245). Competent in technical engineering communication, machine manual comprehension, and drawing specifications.",
      capabilitiesTh: [
        "Listening Proficiency (345 / B1): ฟังและทำความเข้าใจคำสั่งการทำงานและการประชุมเทคนิคภาษาอังกฤษได้อย่างมีประสิทธิภาพ",
        "Technical Reading & Specs: เข้าใจแบบสั่งงานสากล คู่มือเครื่องจักร (Manuals) และเอกสารมาตรฐาน ASME/ISO",
        "Workplace Coordination: สื่อสารและประสานงานสเปกทางเทคนิคกับทีมวิศวกรและซัพพลายเออร์ได้อย่างราบรื่น"
      ],
      capabilitiesEn: [
        "Listening Proficiency (345 / B1): Solid comprehension of technical workplace discussions and engineering briefings.",
        "Technical Reading & Specs: Capable of interpreting ASME/ISO engineering drawings, machine manuals, and specs.",
        "Workplace Coordination: Effective technical communication with engineering teams and tooling vendors."
      ]
    },

    // 3. ใบรับรองซอฟต์แวร์และมาตรฐานอุตสาหกรรม (Technical & Safety Certifications)
    certifications: [
      {
        id: "solidworks-cswp",
        titleTh: "Certified SolidWorks Professional (CSWP - Mechanical Design)",
        titleEn: "SolidWorks Professional 3D CAD Mechanical Design",
        issuer: "Dassault Systèmes / SolidWorks",
        categoryTh: "3D CAD & Modeling",
        categoryEn: "3D CAD & Modeling",
        year: "Verified Professional",
        badgeColor: "indigo",
        descTh: "ผ่านการรับรองความเชี่ยวชาญการขึ้นรูปพาร์ท 3D ซับซ้อน, การประกอบชิ้นส่วน Assembly และการวิเคราะห์ระยะขัดขวาง (Interference Check)",
        descEn: "Advanced proficiency in 3D parametric modeling, complex mechanical assemblies, and collision/interference validation."
      },
      {
        id: "fea-simulation-cert",
        titleTh: "Finite Element Analysis (FEA) Simulation & Stress Analysis",
        titleEn: "FEA Structural & Static Stress Simulation Validation",
        issuer: "Engineering Simulation Institute",
        categoryTh: "Simulation & FEA",
        categoryEn: "Simulation & FEA",
        year: "Verified",
        badgeColor: "amber",
        descTh: "การจำลองและวิเคราะห์ความแข็งแรง, การกระจายตัวของความเค้น (Von Mises Stress), การเสียรูป และการคำนวณ Safety Factor ก่อนส่งผลิต",
        descEn: "Structural static stress simulation, Von Mises yield criteria, strain deformation, and safety factor calculations before fabrication."
      },
      {
        id: "gdt-asme",
        titleTh: "Geometric Dimensioning & Tolerancing (GD&T) - ASME Y14.5",
        titleEn: "GD&T Engineering Drafting (ASME Y14.5 Standard)",
        issuer: "Precision Tooling Association",
        categoryTh: "Drafting & Tolerancing",
        categoryEn: "Drafting & Tolerancing",
        year: "Standard Certified",
        badgeColor: "emerald",
        descTh: "การกำหนดพิกัดความเผื่อทางเรขาคณิต (Datums, Runout, True Position) สำหรับแบบสั่งผลิตจิ๊กและชิ้นส่วนฮาร์ดดิสก์ความแม่นยำสูง",
        descEn: "Standardized geometric tolerancing datums, runout, and positional accuracy for high-precision HDD tooling drawings."
      },
      {
        id: "safety-officer",
        titleTh: "เจ้าหน้าที่ความปลอดภัยในการทำงานระดับหัวหน้างาน (จป. หัวหน้างาน)",
        titleEn: "Safety Officer at Supervisory Level (Occupational Health & Safety)",
        issuer: "กระทรวงแรงงาน / กรมสวัสดิการและคุ้มครองแรงงาน",
        categoryTh: "Industrial Safety",
        categoryEn: "Industrial Safety",
        year: "Certified",
        badgeColor: "cyan",
        descTh: "มาตรฐานความปลอดภัยในโรงงานอุตสาหกรรม, การประเมินความเสี่ยงหน้างาน และการควบคุมความปลอดภัยของเครื่องจักรตามกฎหมาย",
        descEn: "Workplace hazard identification, ergonomic compliance, and industrial machinery safety standard implementation."
      },
      {
        id: "iso-quality",
        titleTh: "ISO 9001:2015 & IATF 16949 Quality Management & Document Control",
        titleEn: "ISO 9001 Quality Management & Document Control",
        issuer: "Quality Engineering & Audit Institute",
        categoryTh: "Quality Systems",
        categoryEn: "Quality Systems",
        year: "Audit Verified",
        badgeColor: "purple",
        descTh: "ระบบเอกสารควบคุมคุณภาพ, กระบวนการแก้ปัญหาของเสียด้วย 8D Report และการเตรียมความพร้อมรับการตรวจประเมินตามมาตรฐานสากล",
        descEn: "Document revision control, 8D defect root-cause rectification, and manufacturing audit readiness."
      }
    ]
  }
};
