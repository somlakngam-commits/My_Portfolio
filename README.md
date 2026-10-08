# 🎨 Design Engineer Web Portfolio

เว็บแอปพลิเคชัน Portfolio ระดับพรีเมียม สำหรับนำเสนอและสัมภาษณ์งานในตำแหน่ง **Design Engineer** (หรือ UI Engineer / Creative Developer / Full-Stack Frontend) 

พัฒนาด้วย **React 19**, **Tailwind CSS v4**, **Vite** และ **Lucide Icons** พร้อมระบบสองภาษา (ไทย 🇹🇭 / อังกฤษ 🇬🇧) และลูกเล่น Interactive เสมือนจริง

---

## 🌟 ฟีเจอร์เด่นที่ออกแบบมาเพื่อ "พิชิตการสัมภาษณ์งาน"

1. **ห้องทดลอง Design Tokens สด (Design System Lab)**
   - ผู้สัมภาษณ์สามารถปรับแต่งค่า Token จริงได้บนหน้าเว็บ: โทนสีแบรนด์ (Brand Accent), รัศมีความมน (Corner Radius: 0px, 6px, 12px, Pill), ความหนาแน่น (Density), และระดับเงา (Elevation)
   - คอมโพเนนต์ (ปุ่ม, ฟอร์ม, แบดจ์, ท็อกเกิล) ตอบสนองเปลี่ยนสไตล์แบบเรียลไทม์
   - แสดงโค้ด CSS Variables และ React JSX ที่ถูกสร้างขึ้น พร้อมปุ่มกดคัดลอก

2. **ระบบ 2 ภาษา (Bilingual Support: TH / EN)**
   - สลับระหว่างภาษาไทยและภาษาอังกฤษได้ทันทีผ่านปุ่มบนแถบเมนูด้านบน โดยไม่ต้องโหลดหน้าเว็บใหม่

3. **เคสสตัดีเจาะลึกแบบ Modal (Deep-Dive Case Studies)**
   - จัดแสดงโปรเจกต์เด่นแยกตามหมวดหมู่ (Design Systems, Web Apps, Interactive Prototypes)
   - แต่ละโปรเจกต์มีหน้าต่างป๊อปอัปสรุปตามหลักการสัมภาษณ์งาน:
     - **The Problem**: ปัญหาที่พบและบริบทความท้าทาย
     - **The Solution**: แนวคิดการออกแบบและเทคนิคที่เลือกใช้
     - **Tech Stack**: เครื่องมือและสถาปัตยกรรม
     - **Measurable Impact**: ตัวเลขผลลัพธ์ที่วัดผลได้จริง (เช่น ลดเวลาส่งมอบงาน 60%, 100% WCAG AAA)
     - **Code Snippet**: โค้ดคอมโพเนนต์จริง

4. **จุดขายและคำตอบสัมภาษณ์ (Why Hire Me Section)**
   - แสดงตารางเปรียบเทียบความคุ้มค่าระหว่าง "การทำงานแบบเดิมที่ Designer กับ Developer แยกส่วนกัน" กับ "เมื่อมี Design Engineer ในทีม" ช่วยตอบคำถามยอดฮิตในห้องสัมภาษณ์ได้ตรงประเด็น

5. **สนามทดลอง Micro-Interactions & Physics**
   - ปุ่มตอบสนองแบบ Spring Physics พร้อมพลุเฉลิมฉลอง Confetti
   - ตัวเลื่อนค่าพารามิเตอร์แบบ Fluid Scaling
   - ตัวตรวจสอบความคมชัดของสีตามมาตรฐานการเข้าถึง WCAG 2.1 AAA Contrast Checker

6. **ระบบเรซูเม่พร้อมสั่งพิมพ์ (Printable CV)**
   - มี Modal แสดงประวัติย่อแบบมาตรฐาน พร้อมปุ่มสั่งพิมพ์หรือบันทึกเป็นไฟล์ PDF ได้ทันที

7. **แป้นพิมพ์ลัด Command Palette (`Cmd+K` / `Ctrl+K`)**
   - เปิดหน้าต่างค้นหาและกระโดดไปยังส่วนต่างๆ ได้ด้วยคีย์บอร์ด

---

## 📁 โครงสร้างโปรเจกต์และการปรับแต่งข้อมูล

ข้อมูลทั้งหมดของพอร์ตโฟลิโอถูกรวมไว้ที่ไฟล์เดียว เพื่อให้คุณสามารถแก้ไขหรือเพิ่มข้อมูลได้สะดวกรวดเร็ว:

```bash
src/
├── data/
│   └── portfolioData.js       <-- ⭐ แก้ไขข้อมูลส่วนตัว, โปรเจกต์, ทักษะ และประวัติการทำงานที่นี่!
├── context/
│   ├── LanguageContext.jsx    <-- จัดการการสลับภาษา TH / EN
│   └── ThemeContext.jsx       <-- จัดการ Dark / Light Mode
├── components/
│   ├── Navbar.jsx             <-- แถบเมนูด้านบน
│   ├── Hero.jsx               <-- ส่วนหัวและวิดเจ็ต Interactive
│   ├── DesignSystemLab.jsx    <-- ห้องทดลอง Design Tokens
│   ├── Projects.jsx           <-- รายการโปรเจกต์และการกรอง
│   ├── ProjectModal.jsx       <-- หน้าต่างเจาะลึกเคสสตัดี
│   ├── InteractiveShowcase.jsx<-- ไมโครอินเทอร์แอคชัน & WCAG
│   ├── WhyHireMe.jsx          <-- เหตุผลความคุ้มค่าในการจ้างงาน
│   ├── SkillsMatrix.jsx       <-- แผนผังทักษะ 3 มิติ
│   ├── ExperienceTimeline.jsx <-- ประวัติการทำงานและการศึกษา
│   ├── ResumeModal.jsx        <-- เรซูเม่พร้อมพิมพ์ PDF
│   ├── CommandPalette.jsx     <-- คีย์ลัด Cmd+K
│   ├── ContactSection.jsx     <-- ข้อมูลติดต่อและฟอร์มส่งข้อความ
│   └── Footer.jsx             <-- ส่วนท้ายเว็บ
└── App.jsx
```

---

## 🚀 วิธีเปิดใช้งานโปรเจกต์

โปรเจกต์ถูกสร้างไว้ที่โฟลเดอร์:
`/Users/amesso/.gemini/antigravity/scratch/design-engineer-portfolio`

### 1. เข้าสู่โฟลเดอร์โปรเจกต์:
```bash
cd /Users/amesso/.gemini/antigravity/scratch/design-engineer-portfolio
```

### 2. รันโหมด Development (เซิร์ฟเวอร์เปิดไว้ให้แล้วที่ Port 5173):
```bash
npm run dev
```
เปิดเบราว์เซอร์ไปที่: **http://localhost:5173**

### 3. ตรวจสอบ Build สำหรับ Production:
```bash
npm run build
npm run preview
```

---

## 💡 คำแนะนำสำหรับการเตรียมตัวสัมภาษณ์งาน (Interview Tips)

1. **โชว์การปรับ Token ใน Design System Lab**: ในระหว่างสัมภาษณ์ ให้แชร์หน้าจอและกดเล่นที่ส่วน **Design System Lab** เพื่ออธิบายว่าคุณเข้าใจระบบ Design Tokens อย่างไร และทำให้ทีมพัฒนาเร็วขึ้นได้อย่างไร
2. **กดสลับภาษา TH / EN และ Dark / Light**: แสดงให้เห็นถึงความใส่ใจใน User Preference และ Accessibility
3. **เปิด Case Study Modal**: เล่าเรื่องด้วยโครงสร้าง **Problem ➔ Solution ➔ Impact** ตามที่เตรียมไว้ในโปรเจกต์ เพื่อแสดงผลลัพธ์เชิงธุรกิจที่จับต้องได้
