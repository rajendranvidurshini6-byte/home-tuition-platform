import Link from "next/link";

// இது தான் நம்ம கோர்ஸ் டேட்டா (பின்னாடி Database-ல இருந்து வரும்)
const courses = [
  { id: "ol-maths", title: "O/L Mathematics", grade: "Grade 10-11", price: "LKR 3,000", teacher: "Mr. Kamal", color: "bg-blue-50" },
  { id: "al-combined-maths", title: "A/L Combined Maths", grade: "Grade 12-13", price: "LKR 4,000", teacher: "Ms. Nimali", color: "bg-green-50" },
  { id: "grade-5-scholarship", title: "Grade 5 Scholarship", grade: "Grade 5", price: "LKR 1,500", teacher: "Mrs. Silva", color: "bg-yellow-50" },
  { id: "grama-sevaka", title: "Grama Sevaka Exam", grade: "Government Exam", price: "LKR 2,500", teacher: "Mr. Perera", color: "bg-purple-50" },
  { id: "spoken-english", title: "Spoken English", grade: "Skill Course", price: "LKR 2,000", teacher: "Ms. Sarah", color: "bg-pink-50" },
  { id: "grade-1-5-maths", title: "Primary Mathematics", grade: "Grade 1-5", price: "LKR 1,500", teacher: "Mrs. Anjali", color: "bg-orange-50" },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[var(--background-soft)] p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--navy-deep)] mb-4">Explore Our Courses</h1>
          <p className="text-[var(--text-light)] max-w-2xl mx-auto">
            From Grade 1 to A/L and Government Exams. Learn from verified teachers.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
              <div className={`h-32 ${course.color} flex items-center justify-center`}>
                <span className="text-4xl">📚</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-[var(--teal-primary)] uppercase tracking-wider">{course.grade}</span>
                <h3 className="text-xl font-bold text-[var(--navy-deep)] mt-2 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4">Teacher: {course.teacher}</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="font-bold text-[var(--navy-deep)]">{course.price}</span>
                  <Link href={`/courses/${course.id}`} className="btn-teal text-sm py-2 px-4">
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}