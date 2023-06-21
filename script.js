let question = document.getElementById('question');
let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let backButton= document.getElementById('back');




let read = document.getElementById('read');
let write = document.getElementById('write');
let write1 = document.getElementById('write1');
let states = document.getElementById('states');

let choice1Button = document.getElementById('choice1Button');
let choice2Button = document.getElementById('choice2Button');

document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach(item => {
      const toggle = item.querySelector(".accordion-toggle");
      const content = item.querySelector(".accordion-content");
  
      toggle.addEventListener("click", function() {
        const isOpen = content.classList.contains("show");
  
        closeAllAccordions(); // Close all accordions before opening the current one
  
        if (!isOpen) {
          content.classList.add("show");
          toggle.classList.add("collapsed");
        }
      });
    });
  
    function closeAllAccordions() {
      accordionItems.forEach(item => {
        const toggle = item.querySelector(".accordion-toggle");
        const content = item.querySelector(".accordion-content");
  
        content.classList.remove("show");
        toggle.classList.remove("collapsed");
      });
    }
  });

function buttonClickYes() {
    if (question.textContent == "واش تعلمتي شي حاجة اليوم؟") {
        question.textContent = "تبغي تكتب لينا شنو تعلمتي؟";
        choice2.textContent = "مكنعرفش نكتب"
    } else if (question.textContent == "تبغي تكتب لينا شنو تعلمتي؟") {
        question.textContent = " تقدر تبدا تكتب أفكارك وتنظمها";
        choice1Button.style.display = 'none'
        backButton.style.display  = "inline-block"
        choice2Button.style.display = 'none'
        write.style.display = 'inline-block'
        write1.style.display = 'inline-block'
    } else if (question.textContent == "واش مهتم تعلم حوايج جداد؟") {
        question.textContent = "بزاف ديال المفكرين والشخصيات مستعدين يعاونوك";
        choice1.textContent = "كيفاش؟"
        choice2Button.style.display = 'none'
    } else if (question.textContent == "تقدر تبدا تقرا باش تعلم تكتب" || question.textContent == " تبغي تكتاشف تجارب مختلفة لي تخليك تفهم نفسك وتحسن من مستقبلك؟" || question.textContent == "بزاف ديال المفكرين والشخصيات مستعدين يعاونوك") {
        question.textContent = "";
        choice1Button.style.display = 'none'
        backButton.style.display  = "inline-block"
        choice2Button.style.display = 'none'
        read.style.display = 'inline-block'
    } else if (question.textContent == "" || 
        question.textContent == " تقدر تبدا تكتب أفكارك وتنظمها" ||
        question.textContent ==  ".فراسك المغرب حتل الرتبة 56 من أصل 57 بلاد شاركات فدراسة لقياس تقدم مستوى القراءة في العالم" ||
        question.textContent == ".فراسك المغرب حتل الرتبة 56 من أصل 57 بلاد شاركات فدراسة لقياس تقدم مستوى القراءة في العالم")
    {
        question.textContent = "واش تعلمتي شي حاجة اليوم؟"
        choice2Button.style.display = 'inline-block'
        choice1.textContent = "اه"
        choice2.textContent = "لا"
        states.style.display = 'none'
        read.style.display = 'none'
        write.style.display = 'none'
        write1.style.display = 'none'

    }
}

function buttonClickNo() {
    if (question.textContent == "واش تعلمتي شي حاجة اليوم؟") {
        question.textContent = "واش مهتم تعلم حوايج جداد؟";
    } else if (question.textContent == "واش مهتم تعلم حوايج جداد؟") {
        question.textContent = " تبغي تكتاشف تجارب مختلفة لي تخليك تفهم نفسك وتحسن من مستقبلك؟";
    } else if (question.textContent == " تقدر تبدا تكتب أفكارك وتنظمها") {
        question.textContent = ".فراسك المغرب حتل الرتبة 56 من أصل 57 بلاد شاركات فدراسة لقياس تقدم مستوى القراءة في العالم";
        states.style.display = 'inline-block'
    } else if (question.textContent == "تبغي تكتب لينا شنو تعلمتي؟") {
        question.textContent = "تقدر تبدا تقرا باش تعلم تكتب";
        choice1.textContent = "فين نلقى لكُتب"
        choice2.textContent = "معنديش مع القراية، داكشي ديال الݣور"
    } else if(question.textContent == "تقدر تبدا تقرا باش تعلم تكتب"){
        question.textContent= ".فراسك المغرب حتل الرتبة 56 من أصل 57 بلاد شاركات فدراسة لقياس تقدم مستوى القراءة في العالم"
        choice1Button.style.display = 'none'
        backButton.style.display  = "inline-block"
        choice2Button.style.display = 'none'
        states.style.display = 'inline-block'
    }
    else if (question.textContent == " تبغي تكتاشف تجارب مختلفة لي تخليك تفهم نفسك وتحسن من مستقبلك؟"){
        question.textContent = ".فراسك المغرب حتل الرتبة 56 من أصل 57 بلاد شاركات فدراسة لقياس تقدم مستوى القراءة في العالم"
        choice1Button.style.display = 'none'
        choice2Button.style.display = 'none'
        states.style.display = 'inline-block'
        backButton.style.display  = "inline-block"
    }
}

choice1Button.addEventListener("click", buttonClickYes);
choice2Button.addEventListener("click", buttonClickNo);

