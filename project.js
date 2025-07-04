
// ===================== login button===========================
function loginUser() {
    var username = document.getElementById("username").value.trim();

    if (username) {
        localStorage.setItem("loggedInUser", username);


        window.location.href = 'page2.html';
    } else {
        alert("Please enter your username.");
    }
}
//========================= login page2=========================

//  استرجاع اسم المستخدم من localStorage
var username = localStorage.getItem("loggedInUser");

if (username) {
    document.getElementById("userNameDisplay").innerText = username;
} else {
    //  لو مفيش اسم يرجع على صفحة اللوجين
    window.location.href = 'login.html';
}


// ============================add new card function=======================================
function addCard() {
    const container = document.getElementById("cardsContainer");

    const newCard = document.createElement("div");
    newCard.className = "small-card";
    newCard.innerHTML = `
    <h3>New</h3>
    <p>Just a simple description.</p>
  `;

    container.appendChild(newCard); //add the child (div) to the parent (container)
}
//========================================================================================


//=========================hide the text ==================================================
function toggleText() {
    const paragraph = document.getElementById("myParagraph");
    const icon = document.getElementById("textEyeIcon");

    if (paragraph.style.visibility === "hidden" || paragraph.style.visibility === "") {
        paragraph.style.visibility = "visible";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        paragraph.style.visibility = "hidden";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

//==============================================================================


//========================= chang backgroundImage function=========================
let colorIndex = 0;
function changeBackground() {
    const gradients = [
        "linear-gradient(135deg, #ffc0cb,rgb(251, 184, 121))",
        "linear-gradient(135deg, #add8e6, #e0ffff)",
        "linear-gradient(135deg, #90ee90, #d0f0c0)"
    ];
    const mainDiv = document.querySelector('.main1');

    if (colorIndex === 0) {
        mainDiv.style.backgroundImage = "url('download (2).jpg')";
        mainDiv.style.backgroundSize = "cover";
        mainDiv.style.backgroundPosition = "center";
    } else {
        mainDiv.style.backgroundImage = gradients[colorIndex - 1];
    }

    colorIndex = (colorIndex + 1) % (gradients.length + 1);
}
//============================================================================


// ====================change box size function ===============================
function enlargeBox() {
    const box = document.querySelector('.content-box');
    box.classList.toggle('enlarged');
}
//===============================================================================
function toggleCards() {
      const cardsContainer = document.getElementById("cards2");
      const eyeIcon = document.getElementById("eyeIcon");

    // ✅ اخفي أو أظهر الكروت بالـ visibility
    cardsContainer.classList.toggle("hidden-card");

    // ✅ غير شكل الأيقونة من fa-eye ↔ fa-eye-slash
    if (eyeIcon.classList.contains("fa-eye")) {
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}


function toggleCards() {
    const cardsContainer = document.getElementById("cards2");
    const icon = document.getElementById("cardsEyeIcon");

    if (cardsContainer.style.visibility === "hidden" || cardsContainer.style.visibility === "") {
        cardsContainer.style.visibility = "visible";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        cardsContainer.style.visibility = "hidden";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}



function addCard2() {
    const container2 = document.getElementById("cards2");

    const newCard2 = document.createElement("div");
    newCard2.className = "acard";  // ✅ خليه نفس كلاس الكروت القديمة لو عايزة نفس التنسيق

    newCard2.innerHTML = `
        <div>
            <i class="fas fa-star"style="font-size: 40px; color: rgb(0, 38, 255);"></i>

        </div>
        <h3>New Feature </h3>
        <p>This is a dynamically <br>added feature card. You<br> can add as many as you<br> like!</p>
    `;

    container2.appendChild(newCard2);
}

function enlargeBox2() {
    const cards = document.querySelectorAll('.acard'); // كل الكروت

    cards.forEach(card => {
        card.classList.toggle('enlarged'); // toggle لكل كارد
    });

}


const form = document.getElementById("contactForm");
const userCard = document.getElementById("userCard");
const cardName = document.getElementById("cardName");
const cardEmail = document.getElementById("cardEmail");
const cardMessage = document.getElementById("cardMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    //  تعبئة الكارد
    cardName.textContent = name;
    cardEmail.textContent = email;
    cardMessage.textContent = message;

    userCard.classList.remove("hidden");

    form.reset();
});
