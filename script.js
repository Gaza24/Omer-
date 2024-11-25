const questions = [
    {
        question: "شو كانت أبرز طريقة واجه فيها عمر المختار الاستعمار الإيطالي؟",
        options: ["المقاومة العسكرية", "المفاوضات السياسية", "المقاطعة الاقتصادية"],
        answer: 0,
    },
    {
        question: "متى بدأت الثورة الجزائرية ضد الاستعمار الفرنسي؟",
        options: ["1948", "1954", "1962"],
        answer: 1,
    },
    {
        question: "شو اسم الحزب المصري اللي كان يقود الثورة الشعبية سنة 1919؟",
        options: ["حزب الوفد", "حزب الأمة", "حزب العمال"],
        answer: 0,
    },
    {
        question: "شو كان دور محمود درويش في مقاومة الاستعمار؟",
        options: ["الثورات المسلحة", "الكتابة والشعر الثوري", "المظاهرات"],
        answer: 1,
    },
    {
        question: "وين كان التركيز الأكبر للمقاومة الاقتصادية في الوطن العربي؟",
        options: ["مقاطعة المنتجات", "تنظيم الإضرابات", "السيطرة على البنوك"],
        answer: 0,
    },
    {
        question: "شو اسم الثورة اللي صارت بفلسطين سنة 1936؟",
        options: ["ثورة البراق", "الثورة الكبرى", "ثورة الفلاحين"],
        answer: 1,
    },
    {
        question: "كيف دعمت النساء العربيات المقاومة؟",
        options: ["المشاركة في الحروب فقط", "دعم الثوار بالتموين والمعلومات", "البقاء بعيدًا عن المواجهات"],
        answer: 1,
    },
    {
        question: "شو كان الهدف الرئيسي من المقاومة الثقافية؟",
        options: ["تعزيز الهوية الوطنية", "تغيير المناهج الدراسية", "تدمير الاقتصاد الاستعماري"],
        answer: 0,
    },
    {
        question: "شو اسم القائد الليادار مفاوضات الاستقلال في تونس؟",
        options: ["عمر المختار", "الحبيب بورقيبة", "عبد الكريم الخطابي"],
        answer: 1,
    },
    {
        question: "شو أهم درس تعلمناه من المقاومة ضد الاستعمار؟",
        options: ["الوحدة الوطنية", "الاعتماد على الدول الأجنبية", "تغيير الدين"],
        answer: 0,
    },
    {
        question: "شو كان الدور الأبرز للشباب في المقاومة؟",
        options: ["قيادة الثورات المسلحة", "التفاوض مع المستعمرين", "الهجرة للخارج"],
        answer: 0,
    },
    {
        question: "شو اسم المقاومة اللي استمرت لسنوات بفلسطين ضد الانتداب البريطاني؟",
        options: ["الثورة الصناعية", "المقاومة الشعبية", "الثورة الكبرى"],
        answer: 2,
    },
    {
        question: "شو كانت أبرز وسائل المقاومة الشعبية؟",
        options: ["المظاهرات والإضرابات", "الهجوم المباشر على الجيش", "تأسيس أحزاب سياسية"],
        answer: 0,
    },
    {
        question: "شو كانت نتيجة المفاوضات الليادارها الملك محمد الخامس في المغرب؟",
        options: ["تقسيم المغرب", "الاستقلال عن فرنسا", "استمرار الاحتلال"],
        answer: 1,
    },
    {
        question: "شو كان دور الأحزاب الوطنية في المقاومة؟",
        options: ["دعم الاستعمار", "قيادة العمل السياسي", "تجنيد الثوار"],
        answer: 1,
    },
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit-button");

function loadQuiz() {
    questions.forEach((q, index) => {
        const quizItem = document.createElement("div");
        quizItem.classList.add("quiz-item");

        const questionTitle = document.createElement("h4");
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        quizItem.appendChild(questionTitle);

        q.options.forEach((option, i) => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question-${index}`;
            input.value = i;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            quizItem.appendChild(label);
        });

        quizContainer.appendChild(quizItem);
    });
}

function calculateScore() {
    let score = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question-${index}"]:checked`);
        const quizItem = quizContainer.children[index];

        if (selected) {
            if (parseInt(selected.value) === q.answer) {
                score++;
                quizItem.classList.add("correct");
            } else {
                quizItem.classList.add("incorrect");
            }
        } else {
            quizItem.classList.add("incorrect");
        }
    });

    alert(`إجابتك الصحيحة: ${score} من ${questions.length}`);
}

submitButton.addEventListener("click", calculateScore);
loadQuiz();